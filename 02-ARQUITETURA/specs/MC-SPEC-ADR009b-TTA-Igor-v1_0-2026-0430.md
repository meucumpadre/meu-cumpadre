https://claude.ai/chat/5819823e-2dbf-49fc-92e7-cb05fca396ad


# MC-SPEC-ADR009b-TTA-Igor-v1_0-2026-0430

**Tipo:** SPEC TÉCNICA  
**Versão:** 1.0  
**Data:** 2026-04-30  
**Autor:** Claude (co-fundador intelectual MC) × Alessandro (Founder/CEO)  
**Destinatário:** Igor (Dev Backend — NestJS + TypeScript + MySQL)  
**Status:** PRONTO PARA IMPLEMENTAÇÃO  
**ADR de referência:** ADR-009b v1.0 (2026-04-17, status PROPOSTO)
**Atualização ADR-014 (10/05/2026):** Plataforma de assinatura eletrônica = ZapSign (substitui Autentique). Seção 5 reescrita. Schema MySQL **inalterado** — campos `autentique_document_id` e `autentique_status` mantêm os nomes originais por opção arquitetural (custo de migration > benefício). O serviço NestJS faz o mapeamento semântico ZapSign ↔ schema legado.

---

## SEÇÃO 1 — RESUMO PARA O IGOR

### O que é isso

O sistema tem um módulo chamado **Três Estados de Custódia de Dossiê**. Cada dossiê de cliente passa por três estados sequenciais:

| Estado | Quem tem acesso | Duração | O que acontece |
|--------|-----------------|---------|----------------|
| **S1** (Intermediário) | Só o sistema MC | 30–60 dias | Documentos são coletados, cifrados, processados |
| **S2** (Consolidado) | Sistema MC + cliente recebe cópia | até entrega + 7 dias | Dossiê pronto é entregue ao cliente; MC apaga os dados em 7 dias |
| **S3** (Probatório) | Escritório de advocacia parceiro | 10 anos | Dossiê fica no vault do escritório; MC sai da jogada |

### A regra de ouro

**A transição S2 → S3 só acontece se existir um TTA (Token de Transferência Assinado) válido.**

O TTA é basicamente um documento que o cliente (cidadão) assina digitalmente via ZapSign (ADR-014), dizendo: *"Autorizo transferir meu dossiê para o escritório X."*

**Se não tem TTA, o backend rejeita a transição. Ponto. Não é policy — é código.**

### O que você precisa implementar

1. **Schema MySQL** — 3 tabelas: `dossier_states`, `dossier_tta`, `dossier_state_log`
2. **6 endpoints REST** no NestJS
3. **1 NestJS Guard** que bloqueia S2→S3 sem TTA
4. **1 job CRON** que faz cryptographic erasure em S2 expirados
5. **Webhook** para receber callback do ZapSign quando assinatura é confirmada

### Stack já definido (não mudar)

- NestJS + TypeScript + MySQL
- ZapSign (assinatura digital — ADR-014, substitui Autentique; credenciais com Alessandro)
- Google Cloud Storage (storage dos arquivos)
- Google Cloud KMS (gerenciamento de chaves de cifração)

### O que você NÃO precisa saber

Filosofia, OAB, LGPD, precificação, histórico da empresa. Só engenharia.

---

## SEÇÃO 2 — SCHEMA MySQL

### 2.1 Tabela `dossier_states`

```sql
CREATE TABLE dossier_states (
  id                    CHAR(36)        NOT NULL DEFAULT (UUID()),
  caso_id               CHAR(36)        NOT NULL,
  cidadao_cpf_hash      CHAR(64)        NOT NULL COMMENT 'SHA-256 do CPF — nunca CPF puro',
  estado_atual          ENUM('S1','S2','S3') NOT NULL DEFAULT 'S1',

  -- Referência ao TTA (nullable até S3)
  tta_id                CHAR(36)        NULL,

  -- Integridade do dossiê
  hash_dossie_sha256    CHAR(64)        NULL COMMENT 'Preenchido quando dossiê consolidado em S2',
  storage_uri           VARCHAR(512)    NULL COMMENT 'URI no GCS (gs://bucket/path)',
  cifra_key_ref         VARCHAR(256)    NULL COMMENT 'Referência à DEK no Cloud KMS',

  -- Controle de apagamento (S2 → erasure após 7 dias da entrega)
  entrega_confirmada_at DATETIME        NULL,
  erasure_scheduled_at  DATETIME        NULL COMMENT 'entrega_confirmada_at + 7 dias',
  erasure_completed_at  DATETIME        NULL,

  -- Timestamps padrão
  created_at            DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at            DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at            DATETIME        NULL COMMENT 'Soft delete — nunca hard delete',

  PRIMARY KEY (id),
  INDEX idx_caso_id (caso_id),
  INDEX idx_cidadao_cpf_hash (cidadao_cpf_hash),
  INDEX idx_estado_atual (estado_atual),
  INDEX idx_erasure_scheduled (erasure_scheduled_at),
  FOREIGN KEY (tta_id) REFERENCES dossier_tta(id) ON UPDATE CASCADE
);
```

---

### 2.2 Tabela `dossier_tta`

```sql
CREATE TABLE dossier_tta (
  id                      CHAR(36)        NOT NULL DEFAULT (UUID()),
  dossier_state_id        CHAR(36)        NOT NULL,

  -- Partes do TTA
  cidadao_cpf_hash        CHAR(64)        NOT NULL COMMENT 'SHA-256 do CPF',
  escritorio_cnpj_hash    CHAR(64)        NOT NULL COMMENT 'SHA-256 do CNPJ do escritório',
  advogada_oab            VARCHAR(30)     NOT NULL COMMENT 'Ex: OAB-GO 38662',
  advogada_nome           VARCHAR(200)    NOT NULL,

  -- Integridade
  dossie_hash_no_momento  CHAR(64)        NOT NULL COMMENT 'Hash SHA-256 do dossiê no momento da emissão do TTA',
  audio_consentimento_hash CHAR(64)       NULL COMMENT 'Hash SHA-256 do áudio de consentimento, quando houver',

  -- Autentique
  autentique_document_id  VARCHAR(100)    NULL COMMENT 'ID do documento na API Autentique',
  autentique_status       ENUM(
    'PENDING',      -- TTA criado, aguardando envio ao Autentique
    'SENT',         -- Enviado ao Autentique, aguardando assinatura
    'SIGNED',       -- Assinado pelo cidadão — TTA válido
    'REJECTED',     -- Cidadão rejeitou
    'EXPIRED',      -- Expirou sem assinatura
    'REVOKED'       -- Cidadão revogou após assinar
  )                       NOT NULL DEFAULT 'PENDING',

  -- Hash do TTA completo (para auditoria imutável)
  tta_hash_sha256         CHAR(64)        NULL COMMENT 'SHA-256 do JSON canônico do TTA após assinatura',
  timestamp_rfc3161       TEXT            NULL COMMENT 'Carimbo de tempo ICP-Brasil (base64)',

  -- Timestamps
  created_at              DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  signed_at               DATETIME        NULL,
  revoked_at              DATETIME        NULL,
  expires_at              DATETIME        NOT NULL COMMENT 'TTA expira em 72h se não assinado',
  updated_at              DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  INDEX idx_dossier_state_id (dossier_state_id),
  INDEX idx_autentique_document_id (autentique_document_id),
  INDEX idx_autentique_status (autentique_status),
  FOREIGN KEY (dossier_state_id) REFERENCES dossier_states(id) ON UPDATE CASCADE
);
```

---

### 2.3 Tabela `dossier_state_log`

```sql
CREATE TABLE dossier_state_log (
  id                  BIGINT          NOT NULL AUTO_INCREMENT COMMENT 'BIGINT para append-only — nunca UPDATE/DELETE nesta tabela',
  dossier_state_id    CHAR(36)        NOT NULL,

  -- O que mudou
  estado_anterior     ENUM('S1','S2','S3', 'NEW') NOT NULL,
  estado_novo         ENUM('S1','S2','S3') NOT NULL,
  acao                ENUM(
    'CREATE',         -- dossiê criado em S1
    'SEAL',           -- S1 → S2 (dossiê consolidado)
    'TTA_CREATED',    -- TTA gerado
    'TTA_SENT',       -- TTA enviado ao Autentique
    'TTA_SIGNED',     -- Cidadão assinou
    'TTA_REJECTED',   -- Cidadão rejeitou
    'TTA_EXPIRED',    -- Expirou
    'TTA_REVOKED',    -- Revogado pós-assinatura
    'TRANSFER',       -- S2 → S3 (TTA válido confirmado)
    'ERASURE_SCHEDULED',
    'ERASURE_COMPLETED',
    'REVERT'          -- S3 → S2 (revogação aceita)
  )                   NOT NULL,

  -- Quem fez
  operador_id         VARCHAR(100)    NOT NULL COMMENT 'user_id do sistema ou ID do operador humano',
  operador_tipo       ENUM('SYSTEM','HUMAN','ADMIN') NOT NULL DEFAULT 'SYSTEM',

  -- Contexto adicional (JSON livre para auditoria)
  metadata            JSON            NULL COMMENT 'ex: {"tta_id":"...", "motivo":"...", "ip":"..."}',

  -- Timestamp imutável
  created_at          DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  INDEX idx_dossier_state_id (dossier_state_id),
  INDEX idx_acao (acao),
  INDEX idx_created_at (created_at)

  -- NOTA: Sem FOREIGN KEY proposital — log deve sobreviver mesmo se registro pai for alterado
  -- NOTA: Sem ON UPDATE / ON DELETE — este log é append-only por design
);
```

**Regra de negócio:** nenhum serviço do backend deve fazer `UPDATE` ou `DELETE` nesta tabela. Só `INSERT`. Implementar constraint a nível de permissão MySQL: o usuário de aplicação tem apenas `INSERT + SELECT` em `dossier_state_log`.

---

## SEÇÃO 3 — ENDPOINTS API (NestJS RESTful)

### Visão geral

```
POST   /dossier-states                          → Criar dossiê em S1
PATCH  /dossier-states/:id/seal                 → Selar S1 → S2
POST   /dossier-states/:id/tta                  → Criar TTA, enviar ao Autentique
POST   /dossier-states/tta-callback             → Webhook Autentique (assinatura confirmada → S2→S3)
PATCH  /dossier-states/:id/revoke-tta           → Revogar TTA (S3 → S2)
GET    /dossier-states/:id                      → Consultar estado atual
```

---

### 3.1 `POST /dossier-states` — Criar dossiê em S1

**Request body:**
```typescript
{
  caso_id: string;           // UUID do caso no ClickUp/sistema MC
  cidadao_cpf_hash: string;  // SHA-256 do CPF (o hash é feito upstream, aqui chega já hasheado)
  storage_uri?: string;      // URI inicial no GCS (opcional, pode ser null na criação)
  cifra_key_ref?: string;    // Referência à DEK no Cloud KMS
}
```

**Response 201:**
```typescript
{
  id: string;
  caso_id: string;
  estado_atual: 'S1';
  created_at: string; // ISO 8601
}
```

**Comportamento:**
- Cria registro em `dossier_states` com `estado_atual = 'S1'`
- Insere log em `dossier_state_log` com `acao = 'CREATE'`, `estado_anterior = 'NEW'`

---

### 3.2 `PATCH /dossier-states/:id/seal` — Selar S1 → S2

**Request body:**
```typescript
{
  hash_dossie_sha256: string; // Hash do dossiê consolidado
  storage_uri: string;        // URI final no GCS
  cifra_key_ref: string;      // Referência à DEK no KMS
}
```

**Response 200:**
```typescript
{
  id: string;
  estado_atual: 'S2';
  hash_dossie_sha256: string;
  updated_at: string;
}
```

**Comportamento:**
- Valida que `estado_atual == 'S1'` (retorna 409 se não for)
- Atualiza `estado_atual = 'S2'` + preenche campos de hash/storage
- Insere log com `acao = 'SEAL'`
- **Não** agenda erasure ainda — erasure só acontece após `entrega_confirmada_at`

---

### 3.3 `POST /dossier-states/:id/tta` — Criar TTA e enviar ao ZapSign (ADR-014)

**Request body:**
```typescript
{
  cidadao_cpf_hash: string;
  escritorio_cnpj_hash: string;
  advogada_oab: string;           // 'OAB-GO 38662'
  advogada_nome: string;
  audio_consentimento_hash?: string; // Opcional
}
```

**Response 201:**
```typescript
{
  tta_id: string;
  autentique_document_id: string; // schema legado — armazena `doc.token` do ZapSign
  autentique_signing_url: string; // URL para o cidadão assinar (sign_url do ZapSign)
  expires_at: string;             // TTA expira em 72h
  status: 'SENT';
}
```

**Comportamento:**
1. Valida que `estado_atual == 'S2'` (retorna 409 se não for)
2. Cria registro em `dossier_tta` com `autentique_status = 'PENDING'`
3. Chama API ZapSign para criar documento de assinatura (ver Seção 5)
4. Atualiza `dossier_tta.autentique_document_id` (com o `doc.token` do ZapSign) e `autentique_status = 'SENT'`
5. Define `expires_at = NOW() + 72h`
6. Insere logs `TTA_CREATED` e `TTA_SENT` em `dossier_state_log`
7. **Não muda `estado_atual` do dossiê ainda** — transição só ocorre no webhook

---

### 3.4 `POST /dossier-states/tta-callback` — Webhook ZapSign (ADR-014)

> ZapSign chama este endpoint quando o documento é assinado, rejeitado ou expira. O DTO original do Autentique é convertido pelo serviço NestJS para o formato canônico abaixo, mantendo o schema MySQL inalterado.

**Request body (enviado pelo ZapSign):**
```typescript
{
  event_type: 'doc_signed' | 'doc_refused' | 'doc_expired';
  doc: {
    token: string;            // mapeia para autentique_document_id no schema
    status: string;           // 'signed' | 'refused' | 'expired'
    external_id?: string;     // caso_id
  };
  signer?: {
    token: string;
    name: string;
    email?: string;
    phone_number?: string;
    status: string;           // 'signed' | 'refused'
    signed_at?: string;       // ISO 8601
  };
}
```

**Response 200:**
```typescript
{ received: true }
```

**Mapeamento de eventos ZapSign → schema MySQL (campos legados):**

| `event_type` ZapSign | `autentique_status` MySQL | Acão sobre o estado |
|---|---|---|
| `doc_signed` | `SIGNED` | S2 → S3 (via Guard) |
| `doc_refused` | `REJECTED` | permanece S2 |
| `doc_expired` | `EXPIRED` | permanece S2 |

**Comportamento quando `event_type == 'doc_signed'`:**
1. Busca `dossier_tta` pelo `autentique_document_id` (= `doc.token` do ZapSign)
2. Atualiza `autentique_status = 'SIGNED'`, preenche `signed_at` (de `signer.signed_at`) e `tta_hash_sha256`
3. Atualiza `dossier_states.tta_id` com o ID do TTA assinado
4. **Muda `estado_atual` de S2 para S3** ← única rota legítima para S3
5. Insere logs `TTA_SIGNED` e `TRANSFER`

**Comportamento quando `event_type == 'doc_refused'`:**
- Atualiza `autentique_status = 'REJECTED'`
- Log `TTA_REJECTED`
- Dossiê permanece em S2

**Comportamento quando `event_type == 'doc_expired'`:**
- Atualiza `autentique_status = 'EXPIRED'`
- Log `TTA_EXPIRED`
- Dossiê permanece em S2

---

### 3.5 `PATCH /dossier-states/:id/revoke-tta` — Revogar TTA (S3 → S2)

**Request body:**
```typescript
{
  motivo?: string; // Texto livre para auditoria
}
```

**Response 200:**
```typescript
{
  id: string;
  estado_atual: 'S2';
  tta_revogado_em: string;
}
```

**Comportamento:**
1. Valida que `estado_atual == 'S3'`
2. Atualiza `dossier_tta.autentique_status = 'REVOKED'` e `revoked_at = NOW()`
3. Reverte `dossier_states.estado_atual = 'S2'` e `dossier_states.tta_id = NULL`
4. Insere logs `TTA_REVOKED` e `REVERT`
5. Notifica escritório parceiro (via evento interno — pode ser um event emitter NestJS)

---

### 3.6 `GET /dossier-states/:id` — Consultar estado atual

**Response 200:**
```typescript
{
  id: string;
  caso_id: string;
  estado_atual: 'S1' | 'S2' | 'S3';
  hash_dossie_sha256: string | null;
  tta: {
    id: string;
    autentique_status: string;
    advogada_oab: string;
    signed_at: string | null;
  } | null;
  erasure_scheduled_at: string | null;
  erasure_completed_at: string | null;
  created_at: string;
  updated_at: string;
}
```

---

## SEÇÃO 4 — REGRA DE OURO: GUARD NestJS (HARD CONSTRAINT)

Este guard impede **qualquer** transição para S3 sem TTA válido. Não pode ser bypassado por admin, por script, por nada.

```typescript
// dossier-transfer.guard.ts

import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DossierState } from './entities/dossier-state.entity';
import { DossierTta } from './entities/dossier-tta.entity';
import { DossierStateLog } from './entities/dossier-state-log.entity';

@Injectable()
export class DossierTransferGuard implements CanActivate {
  constructor(
    @InjectRepository(DossierState)
    private readonly dossierStateRepo: Repository<DossierState>,
    @InjectRepository(DossierTta)
    private readonly dossierTtaRepo: Repository<DossierTta>,
    @InjectRepository(DossierStateLog)
    private readonly logRepo: Repository<DossierStateLog>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const dossierId: string = request.params.id;

    // 1. Busca o dossiê
    const dossier = await this.dossierStateRepo.findOne({
      where: { id: dossierId },
    });

    if (!dossier) {
      throw new ForbiddenException('Dossiê não encontrado.');
    }

    // 2. Só aplica restrição quando a transição alvo é S3
    //    (este guard é usado especificamente no webhook de callback)
    if (dossier.estado_atual !== 'S2') {
      // Log de tentativa inválida
      await this.logRepo.save({
        dossier_state_id: dossierId,
        estado_anterior: dossier.estado_atual,
        estado_novo: 'S3',
        acao: 'TRANSFER',
        operador_id: 'SYSTEM',
        operador_tipo: 'SYSTEM',
        metadata: {
          bloqueado: true,
          motivo: `estado_atual_invalido: esperado S2, recebido ${dossier.estado_atual}`,
        },
      });
      throw new ForbiddenException(
        `Transição para S3 inválida: dossiê está em ${dossier.estado_atual}, não em S2.`,
      );
    }

    // 3. Verifica TTA vinculado
    if (!dossier.tta_id) {
      await this.logRepo.save({
        dossier_state_id: dossierId,
        estado_anterior: 'S2',
        estado_novo: 'S3',
        acao: 'TRANSFER',
        operador_id: 'SYSTEM',
        operador_tipo: 'SYSTEM',
        metadata: { bloqueado: true, motivo: 'tta_id_ausente' },
      });
      throw new ForbiddenException(
        'Transição S2→S3 bloqueada: nenhum TTA vinculado ao dossiê.',
      );
    }

    // 4. Verifica se TTA está assinado (SIGNED)
    const tta = await this.dossierTtaRepo.findOne({
      where: { id: dossier.tta_id },
    });

    if (!tta || tta.autentique_status !== 'SIGNED') {
      await this.logRepo.save({
        dossier_state_id: dossierId,
        estado_anterior: 'S2',
        estado_novo: 'S3',
        acao: 'TRANSFER',
        operador_id: 'SYSTEM',
        operador_tipo: 'SYSTEM',
        metadata: {
          bloqueado: true,
          motivo: 'tta_nao_assinado',
          tta_id: tta?.id ?? null,
          autentique_status: tta?.autentique_status ?? 'NOT_FOUND',
        },
      });
      throw new ForbiddenException(
        `Transição S2→S3 bloqueada: TTA com status '${tta?.autentique_status ?? 'NOT_FOUND'}'. Exigido: SIGNED.`,
      );
    }

    // 5. Tudo certo — permite a transição
    // Injeta o TTA no request para uso no controller sem nova query
    request.tta = tta;
    return true;
  }
}
```

**Como usar no controller:**

```typescript
// dossier-states.controller.ts (trecho)

@Post('tta-callback')
@UseGuards(DossierTransferGuard)  // ← Guard aplicado APENAS neste endpoint
async handleTtaCallback(
  @Param('id') id: string,
  @Body() body: TtaCallbackDto,
  @Req() req: any,
) {
  const validatedTta = req.tta; // injetado pelo guard
  return this.dossierStatesService.executeTransferToS3(id, validatedTta, body);
}
```

> **IMPORTANTE:** O guard registra log de TODA tentativa bloqueada. Isso é auditável — cada tentativa de bypass fica registrada com timestamp e motivo.

---

## SEÇÃO 5 — INTEGRAÇÃO ZAPSIGN (ADR-014)

### 5.1 Sobre a ZapSign

ZapSign é uma plataforma brasileira de assinatura eletrônica (zapsign.com.br). Tem API REST pura (JSON). Decisão ADR-014 (10/05/2026) — substitui Autentique por: integração WhatsApp nativa, API REST/JSON (compatível NestJS), adoção dominante no mercado jurídico BR, ISO 27001.

Credenciais com o Alessandro. Sandbox disponível para testes.

### 5.2 Endpoints relevantes da API ZapSign

**Base URL:** `https://api.zapsign.com.br/api/v1`
**Auth:** Header `Authorization: Bearer {API_TOKEN}`
**Docs:** https://docs.zapsign.com.br/

**Criar documento para assinatura:**
```
POST /docs/
```

**Consultar status do documento:**
```
GET /docs/{doc_token}/
```

**Webhook (configurado no painel ou via API):**
Configurar URL de callback no painel ZapSign → Settings → Webhooks

> **IMPORTANTE:** Consultar docs.zapsign.com.br para payload atualizado antes de implementar. Os endpoints acima são referência — a ZapSign pode ter versionado desde 10/05/2026.

### 5.3 Payload para criar documento TTA na ZapSign

```typescript
// zapsign.service.ts

interface CreateTtaDocumentPayload {
  name: string;                    // Nome do documento
  url_pdf?: string;                // URL pública do PDF (alternativa a base64)
  base64_pdf?: string;             // PDF em base64
  external_id?: string;            // ID externo para correlação (caso_id)
  signers: Array<{
    name: string;
    email?: string;
    phone_country?: string;        // "55"
    phone_number?: string;         // WhatsApp do cidadão (sem +55)
    send_automatic_whatsapp?: boolean; // true → envia link via WA automaticamente
    send_automatic_email?: boolean;    // false para nosso público
    auth_mode?: string;            // "assinaturaTela" | "tokenEmail" | "tokenSms"
    lock_name?: boolean;           // true → signatário não pode alterar nome
    lock_email?: boolean;
    lock_phone?: boolean;
  }>;
  lang?: string;                   // "pt-br"
  disable_signer_emails?: boolean; // true se usando WA como canal único
  brand_primary_color?: string;    // cor MC (#hex)
  expiration_days?: number;        // 3 (72h, mesmo TTL do TTA)
}
```

**Exemplo de payload real:**
```typescript
const payload: CreateTtaDocumentPayload = {
  name: `TTA-${tta.id}-${dossier.caso_id}`,
  base64_pdf: pdfBase64,
  external_id: dossier.caso_id,
  signers: [
    {
      name: cidadao.nome_completo,
      phone_country: "55",
      phone_number: cidadao.telefone.replace(/\D/g, ''),
      send_automatic_whatsapp: true,
      send_automatic_email: false,
      auth_mode: "assinaturaTela",
      lock_name: true,
      lock_phone: true,
    },
  ],
  lang: "pt-br",
  disable_signer_emails: true,
  expiration_days: 3,
};
```

### 5.4 Conteúdo do PDF do TTA (template)

O PDF deve conter estes campos (linguagem acessível para o cidadão):

```
TERMO DE TRANSFERÊNCIA DE DOSSIÊ — MEU CUMPADRE

Eu, [NOME DO CIDADÃO], autorizo livremente a transferência do 
meu dossiê previdenciário para:

  Advogada: [NOME DA ADVOGADA]
  OAB: [NÚMERO OAB]
  Escritório: [NOME DO ESCRITÓRIO]

Esta autorização foi feita por minha livre escolha.
Posso revogar esta autorização a qualquer momento.

Identificação do dossiê: [HASH SHA-256 RESUMIDO - 8 primeiros chars]
Data: [DATA ATUAL]
```

### 5.5 Processamento do webhook ZapSign

```typescript
// zapsign-webhook.dto.ts
export class ZapSignCallbackDto {
  event_type: string;              // "doc_signed" | "doc_refused" | "doc_expired"
  doc: {
    token: string;                 // token do documento (= autentique_document_id no schema)
    status: string;                // "signed" | "refused" | "expired"
    external_id?: string;          // caso_id
  };
  signer?: {
    token: string;
    name: string;
    email?: string;
    phone_number?: string;
    status: string;                // "signed" | "refused"
    signed_at?: string;            // ISO 8601
  };
}
```

**Mapeamento de campos (schema MySQL inalterado):**

| Campo MySQL (`dossier_tta`) | Valor ZapSign |
|---|---|
| `autentique_document_id` | `doc.token` (renomear mentalmente — schema não muda por custo de migração) |
| `autentique_status` | Mapeamento: `doc_signed` → `SIGNED`, `doc_refused` → `REJECTED`, `doc_expired` → `EXPIRED` |
| `signed_at` | `signer.signed_at` |

> **Nota arquitetural:** Os campos `autentique_document_id` e `autentique_status` mantêm o nome original no MySQL para evitar migration desnecessária. O serviço NestJS faz o mapeamento semântico internamente. Se Igor preferir renomear (ex: `signing_platform_document_id`), pode fazer via migration — mas não é obrigatório.

### 5.6 Segurança do webhook

ZapSign não usa HMAC por padrão. Opções de validação:

1. **Whitelist de IP** — verificar IPs de origem ZapSign (consultar docs)
2. **Token secreto no URL** — incluir token randômico na URL do webhook:
   `${API_BASE_URL}/dossier-states/tta-callback?secret=${ZAPSIGN_WEBHOOK_SECRET}`
3. **Validação por consulta** — após receber webhook, chamar `GET /docs/{token}/` para confirmar status

Recomendação MC: opções 2 + 3 combinadas (defesa em profundidade).

```typescript
// Verificação de autenticidade do webhook ZapSign
private async verifyZapSignWebhook(
  querySecret: string,
  docToken: string,
): Promise<boolean> {
  // 1. Verifica token secreto na URL
  if (querySecret !== process.env.ZAPSIGN_WEBHOOK_SECRET) {
    return false;
  }
  // 2. Confirma status via API (defesa em profundidade)
  const doc = await this.zapsignService.getDocument(docToken);
  return doc?.status === 'signed';
}
```

---

## SEÇÃO 6 — CASO PILOTO JERÔNIMA (Hib001)

**Dados do caso:**
- CPF: `***.***.***-**` → hash SHA-256: calcular no momento de criar o registro
- NB INSS: `[NB · REDIGIDO]`
- Espécie: B41 (Aposentadoria por Idade Híbrida)
- Operador: Beto (Alessandro orienta)
- Advogada parceira: Dra. Juliana Pereira de Melo, OAB-GO 38.662

### Cenário 1: Fluxo Normal — Deferimento + Handoff para Dra. Juliana

```
1. POST /dossier-states
   → caso_id: "hib001-caso-uuid"
   → cidadao_cpf_hash: sha256("***.***.***-**")
   → estado criado: S1

2. PATCH /dossier-states/{id}/seal
   → hash_dossie_sha256: sha256(dossiê_consolidado)
   → estado: S2

3. POST /dossier-states/{id}/tta
   → advogada_oab: "OAB-GO 38662"
   → advogada_nome: "Juliana Pereira de Melo"
   → escritorio_cnpj_hash: sha256(cnpj_escritório)
   → ZapSign cria documento, manda link para Hib001 assinar via WhatsApp nativo

4. Hib001 assina via ZapSign (link no WhatsApp)

5. ZapSign chama POST /dossier-states/tta-callback
   → event_type: "doc_signed"
   → Guard valida TTA
   → estado: S3
   → Dossiê transferido para vault Dra. Juliana
```

---

### Cenário 2: Indeferimento + Recurso — Dossiê não sai do S2

```
1. POST /dossier-states → S1
2. PATCH /seal → S2
3. INSS indefere → recurso iniciado
4. Dossiê permanece em S2
   (nenhum TTA criado — não há handoff para advogada)
5. Sistema agenda erasure para quando recurso for concluído
```

---

### Cenário 3: Caso Encerrado Sem Recurso — Apagamento em S2

```
1. POST /dossier-states → S1
2. PATCH /seal → S2
3. Cidadão desiste → confirma encerramento
4. Sistema marca entrega_confirmada_at = NOW()
5. CRON (job diário) detecta: erasure_scheduled_at <= NOW()
6. Erasure executado:
   - Destroi DEK no Cloud KMS
   - Apaga arquivo no GCS
   - Marca erasure_completed_at = NOW()
   - Log: ERASURE_COMPLETED
```

---

### Cenário 4: Revogação do TTA após S3

```
1. Dossiê já em S3 (Dra. Juliana)
2. Hib001 decide trocar de advogada
3. PATCH /dossier-states/{id}/revoke-tta
4. TTA marcado como REVOKED
5. Dossiê volta para S2
6. Novo TTA criado para advogada nova
7. Novo fluxo de assinatura via ZapSign
```

---

## SEÇÃO 7 — PRIORIDADE E DEPENDÊNCIAS

| Prioridade | Item | Blocker para | Dependência externa |
|------------|------|--------------|---------------------|
| **P0** | Schema MySQL (3 tabelas) | Tudo | Nenhuma |
| **P0** | Endpoint `POST /dossier-states` | Criação de dossiês | Schema |
| **P0** | Endpoint `PATCH /seal` | Pipeline de processamento | Schema |
| **P0** | Guard `DossierTransferGuard` | Segurança de S3 | Schema |
| **P1** | Endpoint `POST /tta` | Handoff para advogada | Schema + ZapSign API token |
| **P1** | Webhook `POST /tta-callback` | Automação do handoff | ZapSign webhook config (URL com secret) |
| **P1** | Integração ZapSign (criar doc + PDF) | TTA funcional | Credenciais ZapSign |
| **P2** | Job CRON erasure S2 | Compliance LGPD | P0 completo |
| **P2** | Endpoint `PATCH /revoke-tta` | Portabilidade | P1 completo |
| **P3** | `GET /dossier-states/:id` | Dashboard | P0 completo |
| **P3** | OpenTimestamps (blockchain anchor) | Audit extra | P1 completo |

**Sequência mínima para testar com Hib001 (Hib001):**

```
Schema → POST /dossier-states → PATCH /seal → Guard → POST /tta → Webhook
```

---

## SEÇÃO 8 — O QUE O IGOR NÃO PRECISA SABER

Os itens abaixo **não afetam a implementação**. Documentados aqui só para evitar perguntas:

- Por que esse sistema existe: regulação jurídica brasileira (OAB, LGPD)
- O que é "dossiê previdenciário": documento de aposentadoria
- O que é TTA juridicamente: consentimento formal do cidadão
- Por que não pode bypassar o guard: risco regulatório grave para a empresa
- Precificação, filosofia, história da empresa: irrelevante para o código

**Se tiver dúvida técnica sobre a spec:** falar com Alessandro, que repassa para Claude.

---

## REFERÊNCIAS TÉCNICAS

| Documento | Descrição |
|-----------|-----------|
| `MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417.md` | ADR de origem — Três Estados |
| `MC-ADR-009a-Custodia-Senhas-v2_0-2026-0425.md` | ADR de custódia de senhas (separado, não implementar aqui) |
| `MC-CONTRATO-Psi1-MINUTA-v1_0-2026-0428.md` | Contrato B2B — define TTA como pré-condição contratual |
| `MC-ADR-014-PlataformaAssinaturaEletronica-v1_0-2026-0510.md` | ADR que substitui Autentique por ZapSign |
| ZapSign API Docs | https://docs.zapsign.com.br/ |
| Google Cloud KMS | https://cloud.google.com/kms/docs |

---

**FIM DO DOCUMENTO**

*MC-SPEC-ADR009b-TTA-Igor-v1_0-2026-0430*  
*Classificação: CONFIDENCIAL — USO INTERNO*  
*Versão: 1.0 | Status: PRONTO PARA IMPLEMENTAÇÃO*
