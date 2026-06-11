# MC-SPEC — Kit-Dossiê R3 · Especificação Técnica (NestJS / TypeScript strict)
**v0.1 · RASCUNHO · 2026-06-11 · NÃO SELADO · companheira do PRD [[MC-PRD-KitDossieR3-Industrializacao-v0_1-RASCUNHO-2026-0611]]**
**Para:** Igor (autoridade arquitetural backend) · **Stack:** NestJS 10+ · TypeScript 5.4+ strict · MySQL · convenções do Lote 4 Router-Ethics 11.0

---

## 1. Princípios de implementação (não-negociáveis)

1. `"strict": true` no tsconfig; **zero `any` implícito**; DTOs com `class-validator` em toda fronteira HTTP.
2. **Dados sensíveis nunca em logs** — neste módulo, por definição, dado sensível **não entra** (Zona Verde); o detector de PII é guarda de fronteira, não tratamento.
3. Conventional Commits · branch `feature/MC-XXX` → `develop` → `main`.
4. Trilha de auditoria **append-only** (sem UPDATE/DELETE em tabela de eventos).
5. Nenhuma rota de API permite transição automática para estados de gate humano (RC-07).

## 2. Bounded context e módulos

```
src/
  kit-dossie-r3/
    kit-dossie.module.ts
    domain/            # entidades, enums, máquina de estados
    application/       # services: montagem, validação, export
    infrastructure/    # repositórios MySQL (TypeORM), filesystem vault read-only
    api/               # controllers + DTOs
  conformidade/        # RC-engine: cascata D→C→V, lints, proibições absolutas
  siv/                 # integridade: SHA-256, manifesto
  sanitization/        # Hook 8 (ADR-016) — Fase 2
```

**Proibição estrutural:** `kit-dossie-r3` não importa nada de módulos de caso/cidadão (quando existirem). Teste de arquitetura (dependency-cruiser ou eslint-boundaries) falha o CI se importar.

## 3. Domínio

### 3.1 Enums e tipos

```ts
export enum RitoCunhagem { R1 = 'R1', R2 = 'R2', R3 = 'R3' }

export enum KitStatus {
  RASCUNHO = 'RASCUNHO',
  EM_VALIDACAO = 'EM_VALIDACAO',
  PRONTO_PARA_ENTREGA = 'PRONTO_PARA_ENTREGA',
  ENTREGUE = 'ENTREGUE',
  PARECER_RECEBIDO = 'PARECER_RECEBIDO',
  SELADO = 'SELADO',
  DEVOLVIDO = 'DEVOLVIDO',
}

export enum EstadoProva {
  VERIFICADO = 'VERIFICADO',        // ✅ fonte + hash conferidos
  NAO_VERIFICADO = 'NAO_VERIFICADO',// ⚠️
  REFUTADO = 'REFUTADO',            // ❌ contraprova venceu
  FONTE_PENDENTE = 'FONTE_PENDENTE',// bloqueia entrega (RC-03)
}

export enum BlocoCascata { DIGNIDADE = 'D', COMPLIANCE = 'C', VIABILIDADE = 'V' }
```

### 3.2 Entidades (MySQL · TypeORM)

```ts
@Entity('kit_dossie')
export class KitDossie {
  @PrimaryGeneratedColumn('uuid') id!: string;
  @Column() tema!: string;
  @Column({ type: 'enum', enum: RitoCunhagem }) ritoRequerido!: RitoCunhagem;
  @Column() artefatoAlvo!: string;           // nome canônico MC-...-vX_X-YYYY-MMDD
  @Column() versaoAlvo!: string;
  @Column({ type: 'enum', enum: KitStatus, default: KitStatus.RASCUNHO })
  status!: KitStatus;
  @Column() solicitanteId!: string;          // sempre humano (Founder)
  @OneToMany(() => ItemLastro, (i) => i.kit) itens!: ItemLastro[];
  @OneToMany(() => PerguntaSelagem, (p) => p.kit) perguntas!: PerguntaSelagem[];
  @CreateDateColumn() criadoEm!: Date;
}

@Entity('item_lastro')
export class ItemLastro {
  @PrimaryGeneratedColumn('uuid') id!: string;
  @ManyToOne(() => KitDossie, (k) => k.itens) kit!: KitDossie;
  @Column('text') proposicao!: string;
  @Column('text', { nullable: true }) fonteRef!: string | null;   // URL ou path vault
  @Column('text', { nullable: true }) trechoLiteral!: string | null;
  @Column({ length: 64, nullable: true }) sha256!: string | null; // hash do arquivo-fonte
  @Column({ type: 'enum', enum: EstadoProva }) estadoProva!: EstadoProva;
  @Column('text', { nullable: true }) contraprovaRef!: string | null; // vedação CP-MC: lado B
  @Column({ type: 'enum', enum: BlocoCascata }) blocoGovernante!: BlocoCascata;
  @Column({ nullable: true }) noGovernante?: string;              // ex.: 'C61', 'D24'
}

@Entity('pergunta_selagem')
export class PerguntaSelagem {
  @PrimaryGeneratedColumn('uuid') id!: string;
  @ManyToOne(() => KitDossie, (k) => k.perguntas) kit!: KitDossie;
  @Column('text') pergunta!: string;
  @Column('simple-array') itensLastroIds!: string[];
}

@Entity('evento_auditoria')   // append-only — sem service de update/delete
export class EventoAuditoria {
  @PrimaryGeneratedColumn('uuid') id!: string;
  @Column() kitId!: string;
  @Column() ator!: string;
  @Column() acao!: string;                  // CRIADO | VALIDADO | BLOQUEADO:<RC> | ENTREGUE...
  @Column('json') detalhe!: Record<string, unknown>; // diff/motivo — nunca conteúdo PII
  @CreateDateColumn() ocorridoEm!: Date;
}
```

### 3.3 Máquina de estados

Transições válidas (qualquer outra → `DomainError`):

```
RASCUNHO → EM_VALIDACAO            (Code TALÃO via Founder)
EM_VALIDACAO → PRONTO_PARA_ENTREGA (somente ValidacaoService, todas RC verdes)
EM_VALIDACAO → RASCUNHO            (bloqueio: volta com lista de RC violadas)
PRONTO_PARA_ENTREGA → ENTREGUE     (ação humana explícita — RC-07)
ENTREGUE → PARECER_RECEBIDO        (ação humana)
PARECER_RECEBIDO → SELADO | DEVOLVIDO (ação humana; SELADO exige campo ref. do parecer)
DEVOLVIDO → RASCUNHO
```

## 4. RC-Engine — conformidade executável (mapa RC → implementação)

Ordem de avaliação **fixa D → C → V** (RC-01). Cada checador implementa:

```ts
export interface ConformidadeCheck {
  readonly id: `RC-${string}`;
  readonly bloco: BlocoCascata;
  check(kit: KitDossie): Promise<ResultadoCheck>; // { ok } | { ok:false, motivo, itensAfetados }
}
```

| RC | Implementação | Comportamento |
|---|---|---|
| RC-01 | `CascataService` ordena checks por bloco; primeiro bloqueio em `D` interrompe a cascata (`haltOnDignidade = true`, sem flag de override). | HALT |
| RC-02 | `FirewallOabCheck`: (a) ausência estrutural de campo de conclusão jurídica (garantido pelo schema); (b) lint regex/heurística sobre `proposicao`/`pergunta` contra padrões de promessa de resultado (`/garant(imos|ia)/i`, `/ser[áa] concedido/i`, lista versionada). | BLOQUEIA |
| RC-03 | `ProofFirstCheck`: todo item `VERIFICADO` exige `fonteRef`+`trechoLiteral`+`sha256`; existência de `FONTE_PENDENTE` ⇒ bloqueio com lista. | BLOQUEIA |
| RC-04 | `Prazo48hCheck`: ocorrência de prazo de concessão INSS ou "48 horas" sem qualificador "interno E0→E4" ⇒ bloqueio. | BLOQUEIA |
| RC-05 | `PiiGateGuard` (NestJS Guard no ingest, antes de persistir): regex CPF (`\d{3}\.?\d{3}\.?\d{3}-?\d{2}` + dígito verificador), NB, CID-10 (`[A-TV-Z]\d{2}\.?\d?` com contexto), CNIS. Match ⇒ `422` e **nada persiste**; evento de auditoria registra apenas o tipo detectado, jamais o valor. | REJEITA NA BORDA |
| RC-06 | `ProibicoesAbsolutasCheck`: tabela `proibicao_absoluta` (id, padrão, fonteCLAUDEmd, versão, ativo) seedada do CLAUDE.md; CI roda script de diff CLAUDE.md ↔ seed e falha em divergência. | BLOQUEIA |
| RC-07 | Guard de transição: rotas `entregar/selar` exigem auth de usuário humano com papel `FOUNDER`; nenhum service interno chama essas transições. Teste e2e prova a inexistência do caminho automático. | ESTRUTURAL |
| RC-08 | `VersaoCanonicaCheck`: resolve `artefatoAlvo` contra índice do vault (read-only); status SUPERSEDED ⇒ bloqueio. | BLOQUEIA |
| RC-09 | `SanitizationGate` (Fase 2 · Hook 8/ADR-016): pipeline ExifTool/qpdf/zero-width sobre arquivos referenciados antes do export. | QUARENTENA |
| RC-10 | `AuditoriaInterceptor` global no módulo: toda mutação grava `EventoAuditoria`; endpoint `GET /kits/:id/auditoria` exporta trilha completa. | TRANSVERSAL |

## 5. API (rascunho)

```
POST   /r3/kits                       cria kit (RASCUNHO)
POST   /r3/kits/:id/itens             adiciona item de lastro (passa PiiGateGuard)
POST   /r3/kits/:id/perguntas         adiciona pergunta de selagem
POST   /r3/kits/:id/validar           roda RC-engine → PRONTO_PARA_ENTREGA | RASCUNHO+motivos
POST   /r3/kits/:id/entregar          humano FOUNDER → ENTREGUE
POST   /r3/kits/:id/parecer           registra veredito → SELADO | DEVOLVIDO
GET    /r3/kits/:id/export            Markdown + manifesto SIV (apenas se ≥ PRONTO_PARA_ENTREGA)
GET    /r3/kits/:id/auditoria         trilha completa
```

DTOs com `class-validator`; exemplo:

```ts
export class CriarItemLastroDto {
  @IsString() @MaxLength(2000) proposicao!: string;
  @IsOptional() @IsString() fonteRef?: string;
  @IsOptional() @IsString() trechoLiteral?: string;
  @IsOptional() @Matches(/^[a-f0-9]{64}$/) sha256?: string;
  @IsEnum(EstadoProva) estadoProva!: EstadoProva;
  @IsEnum(BlocoCascata) blocoGovernante!: BlocoCascata;
  @IsOptional() @Matches(/^[DCV]\d{2,3}$/) noGovernante?: string;
}
```

## 6. SIV — integridade

`SivService.hashArquivo(path): Promise<string>` (SHA-256, streaming). Export gera manifesto:

```
| item | fonte | sha256 | verificadoEm |
```

Re-hash na exportação: divergência entre hash armazenado e hash atual do arquivo ⇒ bloqueio + evento `SIV_DIVERGENTE` (fonte mudou depois do lastro — exige re-verificação).

## 7. Testes (critérios de aceite do Igor)

1. **Unit:** cada `ConformidadeCheck` com casos positivos/negativos (incluindo CPF formatado/não formatado, "48h" qualificado vs. não).
2. **Máquina de estados:** transição inválida lança; `SELADO` impossível sem `PARECER_RECEBIDO`.
3. **Golden fixture:** reconstrução do kit real `MC-LASTRO-R3-DPO-RIPDs-ParaDra-v1_0-2026-0608` (de-identificado por natureza — Zona Verde) deve passar a cascata; mutações sintéticas (inserir CPF fake, citar "Router-Ethics 9.0", remover hash) devem **bloquear** com a RC correta — regressão da régua.
4. **Arquitetura:** teste de boundaries provando que o módulo não importa contexto de cidadão.
5. **e2e:** caminho feliz completo + prova de inexistência de auto-selagem (RC-07).
6. **CI:** `npm run lint && npm run test && script de sincronização proibições` — divergência CLAUDE.md ↔ seed falha o build.

## 8. Fases

- **Fase 1 (MVP):** domínio + máquina de estados + RC-01..RC-08 + RC-10 + export. Sem Hook 8, sem telemetria H2.
- **Fase 2:** RC-09 (Sanitization Gate), telemetria H2 (eventos zero-conteúdo), notificação ClickUp via N8N.

## 8b. Achados da revisão adversarial (sister-ancia · 2026-06-11 · não resolvidos)

1. **ALERTA · RC-05:** o PiiGateGuard, ao *inspecionar* CPF/NB/CID para rejeitar, **processa PII na Zona Verde** por uma fração de request (body, logs de framework, APM). Detectar é tratar. Decisão sobe a **R3** (Dra.): onde esse guard roda, o que se loga, retenção do request rejeitado.
2. **ALERTA · §7.3:** classificar o kit DPO/RIPDs como "de-identificado por natureza" é claim sem verificação (Proof-First). Verificar ausência de PII no arquivo **antes** de usá-lo como golden fixture no CI.
3. **NOTA · RC-08:** veto automático por SUPERSEDED pode usurpar o gate humano de versão — preferir *sinalizar* divergência ao humano em vez de vetar autonomamente. Decidir no R2.
4. **NOTA · RC-06:** o seed das Proibições Absolutas deve ancorar exclusivamente na seção do CLAUDE.md raiz (não no corpus do vault, que carrega ruído histórico).

## 9. Pendências para o gate

- [ ] Founder: validar máquina de estados e fases.
- [ ] Igor: validar entidades/convenções vs. Lote 4 (mesmo padrão de repositórios MySQL) e estimar Fase 1.
- [ ] Dra. Juliana (R3): confirmar que o formato de export reproduz fielmente o padrão dos kits de 06/2026 e que nenhum campo induz conclusão jurídica.
- [ ] Rito R2 de cunhagem antes de qualquer selagem.

---
*Rascunho v0.1 — mesa de trabalho (_INBOX). Não citar como fonte canônica. Pseudocódigo ilustrativo: nomes finais sob autoridade do Igor.*
