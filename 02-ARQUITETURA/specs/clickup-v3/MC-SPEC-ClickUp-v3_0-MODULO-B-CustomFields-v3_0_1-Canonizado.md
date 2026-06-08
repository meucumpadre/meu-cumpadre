---
tipo: spec
codigo: MC-SPEC-ClickUp-v3_0
modulo: B
titulo: Custom Fields â€” CatÃ¡logo CanÃ´nico com Field IDs Reais
versao: 3.0.1
status: canonizado-pÃ³s-execuÃ§Ã£o-MB-002-Fase-2
data-criacao: 2026-05-11
data-revisao: 2026-05-12 (Field IDs UUID reais capturados em produÃ§Ã£o)
autor: Claude Opus 4.7 (cofounder intelectual)
aprovador: Alessandro de Souza Neves (Founder/CEO)
substitui:
  - MC-SPEC-ClickUp-v3_0-MODULO-B-CustomFields.md v3.0 (placeholders de IDs)
patches-incorporados:
  - MC-PATCH-MEMO-v3_0-1 (identidade executor Claude Code)
  - MC-PATCH-MEMO-v3_0-2 (duplo papel Dra. Melo + pool 3 advogadas)
  - MC-PATCH-MEMO-v3_0-3 (Mission Brief codificaÃ§Ã£o institucional)
  - MC-PATCH-MEMO-v3_0-4 v2.0 (errata grafia JÃ©ssica Lorrane Plan001 OAB-GO 60.378)
campos-totais: 53 documentados (45 canÃ´nicos prÃ©-MC-v3.0 + 8 novos MC v3.0)
referencias-canonicas:
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509.md
  - MC-GOVBR-Matriz-NivelServico-v1_2-2026-0509.md
  - MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507.md
  - MC-ADR-009-TresEstados-Custodia-Dossie-v1_0-2026-0417.md
  - MC-ADR-013-ConvencoesOperacionais-IVCAD-MC-v1_0-2026-0507.md
  - MC-ADR-014-PlataformaAssinaturaEletronica-v1_0-2026-0510.md
  - _MC-RouterEthics_11_v1_1-2026-0505-CLevel.md
modulo-anterior: MC-SPEC-ClickUp-v3_0-MODULO-A-Arquitetura.md
modulo-seguinte: MC-SPEC-ClickUp-v3_0-MODULO-C-Automations.md
gates-pendentes-canonizacao-plena:
  - GATE-JULIANA-19MAI (afeta grau_pcd_lc142 valores ofertados Î¦â‚-PcD escalonado)
campos-pendentes-UI-manual:
  - cidadao_real_link (tipo relationship â€” fora escopo MB-002 Fase 2; pendente MB-002 Fase 2.5)
  - Propagar 8 novos para "Available everywhere" (toggle UI por field)
  - Cleanup 6 fields _TEST_* da MB-010 Pacote D
tags:
  - clickup
  - custom-fields
  - field-ids-reais
  - lgpd-n1-n2-n3-n4
  - mb-002-executado
---

> [!warning] SUPERSEDED - versao historica
> Canonico corrente eh v3.1.1 (12/05/2026, refinamento pos-ADR-015). Caminho: `MC-SPEC-ClickUp-v3_0-MODULO-B-CustomFields-v3_1_1-Canonizado.md`. Veja CHANGELOG no v3.1.1 paragrafo 17 para evolucao completa v3.0 -> v3.0.1 -> v3.1 -> v3.1.1. Esta v3.0.1 mantida como historico arquitetural.

---


# MC-SPEC-ClickUp v3.0 â€” MÃ³dulo B v3.0.1: Custom Fields Canonizado

> Este mÃ³dulo Ã© o **catÃ¡logo canÃ´nico de Custom Fields** do workspace MC v3.0, com Field IDs UUID reais capturados em produÃ§Ã£o via MB-002 Fase 2 (12/05/2026). Substitui v3.0 (placeholders) e absorve 4 patches.

> **Workspace alvo:** Meu Cumpadre (id `9013424850`)
> **Space canÃ´nico de operaÃ§Ã£o:** ðŸ›ï¸ CASOS B2C (id `901313761051`)
> **Lista de referÃªncia:** E1 - Triagem (id `901326912219`)
> **Total de fields documentados:** 53 (45 prÃ©-MC v3.0 + 8 criados em 12/05)

---

## 1. PRINCÃPIOS CANÃ”NICOS

### 1.1 ConvenÃ§Ãµes de nomenclatura

| Regra | AplicaÃ§Ã£o | Exemplos vÃ¡lidos | Exemplos invÃ¡lidos |
|---|---|---|---|
| `snake_case` ASCII puro | Todos os fields novos | `nivel_govbr`, `kba_cooldown_ate` | `nÃ­vel_govbr` (acento), `KBA-Cooldown` (case+hÃ­fen) |
| Lowercase | Todos | `tta_status` | `TTA_Status` |
| Sem acentos | Todos | `pseudonimo_caso` | `pseudÃ´nimo` |
| Sem hÃ­fens (use underscore) | Fields novos | `cep_beneficiario` | `cep-beneficiario` (legacy preexistente) |
| Prefixo de domÃ­nio quando aplicÃ¡vel | Pipeline INSS | `inss_der`, `inss_status` | `data_der` (sem prefixo de domÃ­nio) |

**InconsistÃªncias preexistentes documentadas** (NÃƒO tocar â€” risco de quebrar dados legacy):
- `pseudonimo_caso` (renomeado pelo founder UI 12/05 â€” corretamente sem acento)
- `cep-beneficiario` (legacy com hÃ­fen â€” manter por enquanto)
- `fraud_score` E `fraudscore` (duplicaÃ§Ã£o histÃ³rica â€” consolidaÃ§Ã£o futura via MB-012)

### 1.2 ClassificaÃ§Ã£o LGPD (4 nÃ­veis)

| NÃ­vel | Sensibilidade | Onde armazenar | Exemplos |
|---|---|---|---|
| **N1** | CrÃ­tica â€” identifica cidadÃ£o diretamente | Folder `ðŸ” Registro de Identidade B2C` (id `901318072560`), Bitwarden Org MC | CPF real, NIS real, NB real, RG, telefone, e-mail pessoal, senha gov.br, endereÃ§o completo |
| **N2** | Alta â€” revela atributo sensÃ­vel | CASOS B2C campos visÃ­veis ao operador Beto+ | CPF mascarado, NIS mascarado, Î²_rms (renda), grau PcD, protocolo INSS |
| **N3** | Operacional â€” pseudonimizada/agregada | CASOS B2C visÃ­vel Ã  equipe operacional | PseudÃ´nimo (Hib001), scores, datas operacionais, estado custÃ³dia, vertical, serviÃ§o |
| **N4** | PÃºblica â€” sem PII | Qualquer lugar | Tags, etapa, rota, modalidade Î¦â‚ |

**Regra inviolÃ¡vel:** dados N1 nunca aparecem em fields visÃ­veis dentro de `ðŸ›ï¸ CASOS B2C`. Vivem apenas no folder Identidade (acesso restrito) + Bitwarden.

### 1.3 PrincÃ­pio Spec-Driven

Fields sÃ£o criados via **POST `/api/v2/list/{list_id}/field`** (descoberta MB-010 Pacote D 12/05). API ClickUp **nÃ£o permite** DELETE/UPDATE de fields via REST â€” cada campo criado Ã© permanente atÃ© UI manual.

**ImplicaÃ§Ã£o operacional:** Toda criaÃ§Ã£o passa por DRY RUN (validaÃ§Ã£o founder) ANTES de POST irreversÃ­vel. PadrÃ£o MB-002 Fase 1 â†’ MB-002 Fase 2.

---

## 2. CATÃLOGO COMPLETO â€” 53 FIELDS NA LISTA E1-TRIAGEM

### Legenda de status

| SÃ­mbolo | Significado |
|---|---|
| ðŸ†• | Criado em 12/05/2026 (MB-002 Fase 2) |
| âœ… | Preexistente, canÃ´nico, sem ajuste necessÃ¡rio |
| âš ï¸ | Preexistente com inconsistÃªncia de convenÃ§Ã£o (MB-012 futuro) |
| ðŸ”¬ | Lixo de teste (MB-010 Pacote D â€” pendente UI cleanup) |

### 2.1 Hook 0 Gov.br (3 campos novos ðŸ†•)

| Field | ID UUID | Tipo | Classif. | Status |
|---|---|---|---|---|
| `nivel_govbr` | `79af1f7e-9c1a-404e-ba07-68a700f98599` | drop_down (4 opÃ§Ãµes) | N3 | ðŸ†• |
| `rota_elevacao_govbr` | `40b6a91c-12fc-4ec8-9f3f-7de8fd6381ce` | drop_down (5 opÃ§Ãµes) | N3 | ðŸ†• |
| `kba_cooldown_ate` | `e7fc41ea-2381-4ad5-93ae-3dc0ca9918fe` | date | N3 | ðŸ†• |

#### `nivel_govbr` â€” OpÃ§Ãµes

| Option ID | Nome | Cor | Order |
|---|---|---|---|
| `d6a383f3-a926-4736-88b8-8768ff35cbcb` | Bronze | `#cd7f32` | 0 |
| `ed54df54-db46-4577-81a1-4b895a4566f9` | Prata | `#c0c0c0` | 1 |
| `89c6bdc1-bb2a-4756-9c58-9121911696cd` | Ouro | `#ffd700` | 2 |
| `1c9a6872-1a7a-44ba-9c65-737e264172a6` | Indefinido | `#808080` | 3 |

**Uso operacional:** Hook 0 obrigatÃ³rio (POP Beto Â§3). Bronze â†’ aciona elevaÃ§Ã£o. Indefinido (default) â†’ Beto preenche conforme P1-P5 do Hook 0.

#### `rota_elevacao_govbr` â€” OpÃ§Ãµes

| Option ID | Nome | Order |
|---|---|---|
| `e35239c5-d877-471f-a8da-7f7e3ac0af1f` | Biometria-Facial | 0 |
| `7775a290-765d-4826-a5c6-27a9f0e3d7ad` | Banco-Credenciado | 1 |
| `79fd5897-adca-437d-8c21-5a56150f230e` | Presencial-INSS-Agencia | 2 |
| `4282028f-1b67-4e75-aefc-3136ec0ed456` | KBA-Diagnostico | 3 |
| `564e8f72-ea72-4584-aabd-b396dd2c3ab8` | N-A | 4 |

**Uso operacional:** Hierarquia ERRATA-001 (canÃ´nico `MC-GOVBR-ArvoreDecisao-APIHumana-v1_1`). Default N-A. Preenche sÃ³ se `nivel_govbr=Bronze`. KBA Ã© Ãºltimo recurso (Bronze validado, nÃ£o rota de elevaÃ§Ã£o real para Prata).

#### `kba_cooldown_ate` â€” Uso operacional

Data atÃ© quando cooldown KBA 24h dura, caso o cidadÃ£o tenha falhado tentativa KBA. Default vazio. Preenche apenas se houve falha registrada.

---

### 2.2 Vertical CadÃšnico (2 campos novos ðŸ†•)

| Field | ID UUID | Tipo | Classif. | Status |
|---|---|---|---|---|
| `ivcad_mc_score` | `6e8e15a5-1a62-4dea-9f3e-2d44f9c468a8` | number | N3 | ðŸ†• |
| `nis_mascarado` | `0f8bc5fd-e203-46c5-83b0-6fabd17ad597` | short_text | N2 | ðŸ†• |

#### `ivcad_mc_score` â€” Uso operacional

IVCAD-MC calculado por engenharia reversa (6 dimensÃµes, 40 indicadores binÃ¡rios, pesos 1/6) sobre formulÃ¡rio CadÃšnico consentido pelo cidadÃ£o. Range: 0.000 a 1.000.

- **CalibraÃ§Ã£o de referÃªncia:** Brasil mar/2026 = 0.283 | CAD001 = 0.268
- **POP Beto:** preenche manualmente apÃ³s cÃ¡lculo via planilha IVCAD-MC. Range nunca validado pelo ClickUp (API number aceita qualquer decimal). ValidaÃ§Ã£o Ã© POP, nÃ£o constraint do campo.
- **CanÃ´nico:** `MC-METODOLOGIA-IVCAD-Oficial-v1_0-2026-0507.md` + `MC-ADR-013-ConvencoesOperacionais-IVCAD-MC-v1_0-2026-0507.md`

#### `nis_mascarado` â€” Uso operacional

Formato canÃ´nico: `XXX.XXX.XXX-NN` (NIS mascarado, mostra apenas Ãºltimos 2 dÃ­gitos). NIS real vive no Bitwarden Org MC + folder Identidade.

---

### 2.3 Economia Familiar (1 campo novo ðŸ†•)

| Field | ID UUID | Tipo | Classif. | Status |
|---|---|---|---|---|
| `beta_rms_per_capita` | `f9424dd2-1332-41f4-bbe6-fa7b8f51a91b` | currency BRL precision=2 | N2 | ðŸ†• |

**CÃ¡lculo:** (Renda total grupo familiar + BF recebido + BPC recebido) Ã· nÃºmero de membros do grupo

**Uso operacional:**
- Base de Î¦â‚ƒ (Teto Dignidade) â€” parcela mensal â‰¤ 0,5 Ã— Î²_rms
- Base de Î¦â‚„ escalonado (GuardiÃ£o CadÃšnico) â€” 0 a R$19/mÃªs
- ClassificaÃ§Ã£o CadÃšnico oficial: â‰¤ Â½ SM per capita

**POP Beto:** atualizar apÃ³s cada novo deferimento (BF, BPC, aposentadoria) que mude renda familiar.

---

### 2.4 CustÃ³dia + Handoff (1 campo novo ðŸ†•)

| Field | ID UUID | Tipo | Classif. | Status |
|---|---|---|---|---|
| `tta_status` | `2b2610e4-c361-418f-b842-9e50870b0053` | drop_down (4 opÃ§Ãµes) | N3 | ðŸ†• |

#### `tta_status` â€” OpÃ§Ãµes

| Option ID | Nome | Order |
|---|---|---|
| `0401559b-a095-46ea-abf3-22d2b9f457fc` | Nao-Aplica | 0 |
| `df6cf2e3-2b3b-4124-8f47-382de1423368` | Pendente | 1 |
| `8b1e5394-a747-4529-9ae8-830f51f02803` | Assinado | 2 |
| `0524b582-7310-430b-8baa-173212357d46` | Concluido | 3 |

**Uso operacional:** Token de TransferÃªncia Assinado via ZapSign (ADR-014). Default `Nao-Aplica`. Vira `Pendente` quando caso entra em rota C marketplace e advogada Ã© sorteada. `Assinado` apÃ³s citizen assinar ZapSign. `Concluido` apÃ³s transferÃªncia S2â†’S3 do dossiÃª.

**âš ï¸ Nota:** O campo `estado_custodia` jÃ¡ existe (id `7c220845-3828-48f9-8428-1dd5bac4c0b8`) e captura S1â†’S2â†’S3 do dossiÃª. `tta_status` Ã© complementar â€” rastreia o instrumento legal de transferÃªncia, nÃ£o o estado do dossiÃª. Ambos coexistem.

---

### 2.5 PcD LC 142 (1 campo novo ðŸ†•)

| Field | ID UUID | Tipo | Classif. | Status |
|---|---|---|---|---|
| `grau_pcd_lc142` | `d3eb8417-69f6-4c07-8d5f-824458105fe0` | drop_down (4 opÃ§Ãµes) | N2 | ðŸ†• |

#### `grau_pcd_lc142` â€” OpÃ§Ãµes

| Option ID | Nome | Order |
|---|---|---|
| `d86af817-8000-4a82-bf6b-285eeaf18927` | Leve | 0 |
| `8babb5f9-e668-4cda-97b7-8776a7a5c961` | Moderado | 1 |
| `b0b8d958-fe35-43ff-9e26-50c57d77bdc0` | Grave | 2 |
| `da62be01-6ab8-4b72-a44b-e665b888e6e1` | Avaliacao-Pendente | 3 |

**Uso operacional:**
- Grau biopsicossocial LC 142/2013 + Decreto 8.145
- Default operacional: `Avaliacao-Pendente` ao detectar PcD na anamnese
- Beto NÃƒO atribui grau definitivo â€” Alessandro coordena com parecerista para CIF biopsicossocial
- **PROVISIONAL Gate Juliana 19/05** â€” modalidades Î¦â‚-PcD escalonadas prÃ©-selagem definitiva:
  - Leve â†’ R$1.500
  - Moderado â†’ R$1.200
  - Grave â†’ R$800

---

### 2.6 CustÃ³dia DossiÃª (Preexistente â€” referÃªncia)

| Field | ID UUID | Tipo | Classif. | Status |
|---|---|---|---|---|
| `estado_custodia` | `7c220845-3828-48f9-8428-1dd5bac4c0b8` | drop_down (4 opÃ§Ãµes) | N3 | âœ… |

#### `estado_custodia` â€” OpÃ§Ãµes existentes

| Option ID | Nome | Order |
|---|---|---|
| `a318e54b-be18-46d6-80c4-3ed06936a58f` | PrÃ©-S1 | 0 |
| `5ab36f99-bcc5-4292-a5a6-278622add64f` | S1 | 1 |
| `fa4e9e9a-1d02-48b4-b173-f357f79a66e1` | S2 | 2 |
| `af019ce5-1c85-4d79-ab30-8dbbfc74cbd8` | S3 | 3 |

**DecisÃ£o founder 12/05/2026:** mantidas opÃ§Ãµes curtas (S1, S2, S3) por simplicidade operacional. ADR-009b Ã© o canÃ´nico semÃ¢ntico que descreve S1=IntermediÃ¡rio-MC, S2=Consolidado-TransiÃ§Ã£o, S3=ProbatÃ³rio-TTA-Parceira. Beto consulta ADR quando precisar do contexto longo; ClickUp mantÃ©m UI limpa.

**`PrÃ©-S1`** Ã© uma opÃ§Ã£o operacional (preexistente) â€” caso ainda em E2 antes de Coleta comeÃ§ar.

---

### 2.7 ConvenÃ§Ã£o MC (Preexistente â€” referÃªncia)

| Field | ID UUID | Tipo | Classif. | Status |
|---|---|---|---|---|
| `pseudonimo_caso` | `8afeb155-9b36-42a8-bb20-92bc2218bceb` | short_text | N4 | âœ… |

**ConvenÃ§Ã£o de formato:** `{Prefixo}{NNN}` 6 chars

**8 prefixos canÃ´nicos:**

| Prefixo | Vertical | Exemplo |
|---|---|---|
| Hib | HÃ­brida (urbana + rural) | Hib001 (JerÃ´nima) |
| Rural | Rural (B41 puro) | Rural034 |
| BPC | BenefÃ­cio Assistencial (Idoso/PcD) | BPC012 |
| Acid | AcidentÃ¡rio (B91/B92/B94) | Acid007 |
| Plan | Planejamento previdenciÃ¡rio | Plan001 |
| Eq | Equipe MC (colaborador interno) | Eq001 |
| CAD | CadÃšnico vertical | CAD001 (CAD001) |
| PcD | PcD-LC142 escalonado | PcD003 |

**HistÃ³rico:** field renomeado por Alessandro UI manual em 12/05/2026 (de `pseudÃ´nimo` com `Ã´` para `pseudonimo_caso`). Dados preservados.

---

### 2.8 Pipeline INSS (Preexistente â€” referÃªncia)

| Field | ID UUID | Tipo | Classif. | Status |
|---|---|---|---|---|
| `inss_der` | `ca176c1b-c196-491b-a310-dec024cab3b4` | date | N3 | âœ… |
| `inss_nr_protocolo` | `5946c3cd-b02c-4e01-b237-c8121c02e61a` | short_text | N2 | âœ… |
| `inss_status` | `4aa047ad-018f-4ba8-adae-9eac9089e887` | drop_down (4) | N3 | âœ… |
| `inss_valor_beneficio` | `fa336ebe-1cbe-4585-9efd-1fcafbd3a065` | currency BRL | N2 | âœ… |
| `inss_data_desfecho` | `444b6a71-4ef1-4a56-9e7b-fb23a8bc4b6e` | date | N3 | âœ… |

**DecisÃ£o founder 12/05/2026:** Mantidos os 5 campos preexistentes. NÃ£o criados `data_der` ou `protocolo_inss` para evitar duplicaÃ§Ã£o semÃ¢ntica.

---

### 2.9 Outros fields canÃ´nicos preexistentes (referÃªncia rÃ¡pida)

Campos consolidados sem alteraÃ§Ã£o na v3.0.1. Para detalhes operacionais, consultar MÃ³dulo D (POP Beto).

#### Marketplace e Sorteio

| Field | ID UUID | Tipo | Classif. | Notas |
|---|---|---|---|---|
| `advogada_escolhida` | `3d4b0e9e-7655-413e-8fa9-fce3afc9efe2` | drop_down | N3 | âœ… Pool: Melo, Alencar, **Lorrane**, Outra. Atualizado per patch v3.0-4 v2.0. |
| `case_hash` | `8cb19ec6-0a95-48f1-bb7a-bbfa61dc23cb` | short_text | N4 | âœ… |

#### Scores e Router-Ethics

| Field | ID UUID | Tipo | Classif. |
|---|---|---|---|
| `confidence_score` | `12433e78-c8af-48ea-aa5f-48d71acc4a48` | number | N3 |
| `complexity_score` | `b99b7129-9897-42c7-b966-4a8a01f16ed1` | number | N3 |
| `fraud_score` | `9434a8cd-86cc-435f-8de1-9efe888cc622` | number | N3 |
| `fraudscore` âš ï¸ | `44598ddd-fe60-42d4-a518-c20afff918be` | number | N3 |
| `risco_confidence` | `772a6ba4-9792-4589-abaa-6c40c0247176` | number | N3 |
| `zona_router_ethics` | `3809d9dc-ff81-4829-8918-178716bc3eed` | drop_down (3) | N3 |

âš ï¸ **DuplicaÃ§Ã£o histÃ³rica `fraud_score` + `fraudscore`** â€” consolidar em MB-012 futuro.

#### Vertical / ServiÃ§o / Etapa

| Field | ID UUID | Tipo |
|---|---|---|
| `vertical` | `0ee7b606-44fe-48ee-8a25-270c1f3aff86` | drop_down (9) |
| `servico` | `b1342721-0238-4b45-bb4c-6be65d998f3e` | drop_down (12) |
| `especie_beneficio` | `8168c619-54ea-450e-8ec2-f3f4811a7e4d` | drop_down (7) |
| `etapa_atual` | `b12f4c23-5418-46ef-876c-53f06570ab68` | drop_down (10) |
| `tipo_caso` | `5bd7b37e-5df3-4371-a377-0a1d172870b6` | drop_down (5) |
| `idade_faixa` | `5a8d8180-4cde-4c0f-8bfa-d10b8abdd351` | drop_down (6) |
| `uf` | `9a39e6d3-55fe-4f49-86ba-199b5c175ff2` | drop_down (27) |
| `urgencia_dib` | `b5ed5d98-075b-46bc-8d65-64077a29e145` | checkbox |

#### OperaÃ§Ã£o e Rota

| Field | ID UUID | Tipo |
|---|---|---|
| `responsavel_tarefa` | `264b3eb2-5434-4686-9c6c-8093abdbc13e` | drop_down (5) |
| `custodia_operador` | `dc793ce2-8cb7-432d-9b27-c6c313fc51df` | users |
| `data_entrada` | `d9a7e372-c03a-4194-a6ba-e1a9f7884052` | date |
| `rota` | `8a4b13ac-a45a-4660-925b-bb10a9379914` | drop_down (5) |
| `rota_classificada` | `300879a8-e1cc-4594-a34a-273cb17bc6ff` | drop_down (5) |

#### Î¦â‚ PrecificaÃ§Ã£o

| Field | ID UUID | Tipo |
|---|---|---|
| `phi1_modalidade` | `8e19bfca-853c-4243-a8a3-55f911ba362a` | drop_down (2) âš ï¸ pendente expansÃ£o LC 142 |
| `phi1_status` | `271d49be-7574-4dad-bea8-d099b7f014bc` | drop_down (4) |
| `phi1_valor` | `760159ca-933b-417d-9964-bd968aa9b3ce` | currency BRL |
| `phi2_status` | `dbafe1f5-1fa4-4c66-a683-8c3f507b69ac` | drop_down (3) |
| `phi2_valor` | `eda34908-435a-483d-ae1e-a4f73bbffe39` | currency BRL |
| `parcelas_pagas` | `d33deba2-ab58-44ba-9d0e-44e9bfa655f9` | drop_down (10) âš ï¸ pendente expansÃ£o 0/4-4/4 |

âš ï¸ **`phi1_modalidade` precisa expandir** (UI manual) para incluir LC 142 escalonado (Leve/Moderado/Grave), Î¦â‚€-CadUnico, D>C>V-Gratuito. Atualmente sÃ³ Standard-R$2200 e CadUnico-R$1500.

âš ï¸ **`parcelas_pagas` precisa expandir** (UI manual) para incluir 0/4 a 4/4 (Î¦â‚€ CadÃšnico paga em 4 parcelas).

#### Consentimento / LGPD

| Field | ID UUID | Tipo |
|---|---|---|
| `consentimento_lgpd` | `3572d3f5-c1cd-4946-ac81-971897520628` | checkbox |
| `consentimento_data` | `73702735-ec2f-4bec-9cbb-a75e0a84581d` | date |
| `custodia_bitwarden` | `340ce53b-7c61-49fe-b18a-d9320a41a71d` | checkbox |
| `opt_in_n3` | `34ee2fe0-8224-4bb9-ba30-6c6b43ae9554` | checkbox |

#### NotebookLM e URLs

| Field | ID UUID | Tipo |
|---|---|---|
| `notebook_principal_url` | `a207692e-3d13-431a-9a04-924567899b02` | url |
| `notebooklm_cliente_url` | `92865a36-2d5d-4ea9-a0dc-c0fe09e8e960` | url |
| `notebooklm_status` | `7aa85b3c-dfbe-457c-b2d9-8e40bc6dd256` | drop_down (4) |
| `notebooklm_pop_ref` | `d0148984-1cbe-48cc-9dd8-8d030f9da5e7` | drop_down (9) âš ï¸ pendente expansÃ£o |
| `drive_folder_url` | `cda44d78-e3f4-45d6-b175-abf5f031dffc` | url |
| `adr_obsidian_url` | `5e40ebc6-8568-45d3-9fc7-7719ca02badf` | url |

âš ï¸ **`notebooklm_pop_ref` precisa expandir** (UI manual) para incluir POPs novos: POP-PcD-LC142, POP-CadUnico, POP-VisualLaw-Geral.

#### Outros

| Field | ID UUID | Tipo | Notas |
|---|---|---|---|
| `cep-beneficiario` âš ï¸ | `5f7b1adb-64eb-4f4b-a432-56ec0d60af20` | short_text | Required:true. HÃ­fen no nome (legacy). |

---

### 2.10 Lixo de teste pendente UI cleanup ðŸ”¬

Fields criados durante MB-010 Pacote D (descoberta de endpoint) â€” pendentes de UI cleanup do Beto/Alessandro:

| Field | ID UUID | Tipo |
|---|---|---|
| `_TEST_API_DELETE_ME_MB_010` | `6f425824-4315-442c-b2d3-078efadefd0a` | short_text |
| `_TEST_NUMBER_MB_010` | `01a5e2ee-7542-494d-a42e-478346e7a9d2` | number |
| `_TEST_DATE_MB_010` | `2db390d0-be98-46dc-b920-deceff54d8e0` | date |
| `_TEST_CURRENCY_MB_010` | `d10f1e88-a553-44f8-85ef-c2f944fba9e4` | currency BRL |
| `_TEST_CHECKBOX_MB_010` | `ca3d0a73-eee8-4335-ad3e-419a9043ca12` | checkbox |
| `_TEST_DROPDOWN_MB_010` | `00afe452-2366-41f6-9878-43df4142f7c8` | drop_down (2) |

**Como deletar (UI manual):** ClickUp web â†’ E1-Triagem â†’ vista de campos â†’ para cada `_TEST_*` â†’ Ã­cone settings â†’ Delete. ~30s total.

---

## 3. MATRIZ DE PROPAGAÃ‡ÃƒO LISTA â†’ WORKSPACE

Fields novos foram criados no nÃ­vel **list** (E1-Triagem). Para propagÃ¡-los e ficarem disponÃ­veis em outras listas do space CASOS B2C (E2, E3, E4, etc.), Beto/Alessandro precisa via UI:

| Etapa | Como |
|---|---|
| 1. Acessar field | E1-Triagem â†’ vista de campos â†’ clica no field |
| 2. Toggle "Available everywhere" | Settings do field â†’ Available everywhere ON |
| 3. Validar em outra lista | Abrir E2-DeliberaÃ§Ã£o â†’ confirmar field aparece |

**Fields para propagar (8 novos + verificar 6 _TEST_ nÃ£o propagar):**

| Field | Listas-alvo da propagaÃ§Ã£o |
|---|---|
| `nivel_govbr` | E1, E2, E3 (Hook 0 obrigatÃ³rio atÃ© E3) |
| `rota_elevacao_govbr` | E1, E2, E3 |
| `kba_cooldown_ate` | E1, E2 (cooldown 24h tipicamente resolve antes E3) |
| `ivcad_mc_score` | E1, E2, E3 (vertical CadÃšnico) |
| `nis_mascarado` | E1, E2, E3, E4, E5 (acompanha jornada inteira) |
| `beta_rms_per_capita` | E2, E3, E4, E5, E6, E7 (base de Î¦â‚ƒ e Î¦â‚„ pÃ³s-deferimento) |
| `tta_status` | E6, E7 (handoff rota C marketplace) |
| `grau_pcd_lc142` | E1, E2, E3, E4 (vertical PcD-LC142) |

**DecisÃ£o pragmÃ¡tica:** marcar todos como "Available everywhere" â€” Beto preenche conforme aplicÃ¡vel; campo vazio em lista nÃ£o-relevante Ã© ignorado.

---

## 4. CAMPOS PENDENTES DE EXPANSÃƒO UI (nÃ£o criaÃ§Ã£o, ampliaÃ§Ã£o de opÃ§Ãµes)

AmpliaÃ§Ãµes de dropdowns existentes que **nÃ£o podem ser feitas via API** (`Access denied for updating field api` â€” descoberta MB-010). Todas vÃ£o para UI manual:

### 4.1 `phi1_modalidade` â€” expandir 5 opÃ§Ãµes

Atual: Standard-R$2200, CadUnico-R$1500

**Adicionar:**
- `PcD-Leve-R$1500` âš ï¸ PROVISIONAL pÃ³s Gate Juliana 19/05
- `PcD-Moderado-R$1200` âš ï¸ PROVISIONAL
- `PcD-Grave-R$800` âš ï¸ PROVISIONAL
- `Phi0-CadUnico-R$120` (4Ã— R$15+R$15 success)
- `DCV-Gratuito-R$0` (regime D>C>V InversÃ£o CÃ³smica)

### 4.2 `parcelas_pagas` â€” expandir 5 opÃ§Ãµes

Atual: 0/3 a 3/3, 0/5 a 5/5

**Adicionar:**
- `0/4`, `1/4`, `2/4`, `3/4`, `4/4` (Î¦â‚€ CadÃšnico paga em 4 parcelas)

### 4.3 `notebooklm_pop_ref` â€” expandir 3 POPs novos

**Adicionar:**
- `POP-PcD-LC142`
- `POP-CadUnico`
- `POP-VisualLaw-Geral`

### 4.4 `servico` â€” expandir 2 opÃ§Ãµes CadÃšnico

**Adicionar:**
- `Î¦â‚€-Triagem-CadUnico` (gratuito)
- `Î¦â‚€-DossiÃª-CadUnico` (R$120)

### 4.5 `vertical` â€” expandir 3 verticais MC v3.0

**Adicionar:**
- `CadUnico`
- `PcD-LC142`
- `AcidentÃ¡rio`

---

## 5. PRÃ“XIMOS ARTEFATOS DERIVADOS

### 5.1 MB-002 Fase 2.5 (futuro)

CriaÃ§Ã£o do campo `cidadao_real_link` (tipo `task_relationship`) que nÃ£o foi validado no MB-010 Pacote D (testamos 6 tipos: short_text, number, date, currency, checkbox, drop_down). Relationship field tem `type_config` complexo que precisa investigaÃ§Ã£o especÃ­fica.

### 5.2 MB-003 (prÃ³ximo turno)

Popular **Hib001** + **CAD001** com os 8 novos fields canÃ´nicos. ValidaÃ§Ã£o operacional viva. Dados:

**Hib001 (JerÃ´nima):**
- `nivel_govbr`: a apurar via Hook 0
- `pseudonimo_caso`: `Hib001`
- `beta_rms_per_capita`: a apurar
- `grau_pcd_lc142`: N-A (nÃ£o Ã© PcD-LC142)
- `tta_status`: Nao-Aplica

**CAD001 (CAD001):**
- `pseudonimo_caso`: `CAD001`
- `ivcad_mc_score`: 0.268
- `nis_mascarado`: `XXX.XXX.X01-18` (mascarar `[NIS·CAD001 · REDIGIDO]`)
- `beta_rms_per_capita`: a calcular pÃ³s-BF
- `nivel_govbr`: a apurar
- `tta_status`: Nao-Aplica

### 5.3 MB-012 (futuro)

Limpeza de convenÃ§Ã£o legacy:
- Consolidar `fraud_score` + `fraudscore` (decidir canÃ´nico, deletar outro UI)
- Padronizar `cep-beneficiario` â†’ `cep_beneficiario` (rename UI)
- Cleanup 6 `_TEST_*` se ainda existirem

### 5.4 MÃ³dulo C v3.0.1

Automations refatoradas com Field IDs reais para automaÃ§Ãµes N8N do Igor. Inclui patch Â§A5 (pool 3 advogadas Rota C â€” Melo + Alencar + Lorrane).

### 5.5 MÃ³dulo D v3.0.2

POP Beto consolidado com errata Lorrane inline em todas as seÃ§Ãµes (Â§4.3, Â§5.5, Â§7.7, Â§10).

---

## 6. ARQUIVO PARA COPY-PASTE EM AUTOMAÃ‡Ã•ES

Pra automaÃ§Ãµes N8N do Igor, segue bloco YAML pronto:

```yaml
mc_v3_0_1_fields:
  e1_triagem_list_id: "901326912219"
  workspace_id: "9013424850"
  space_casos_b2c: "901313761051"
  
  fields_novos_mc_v3:
    nivel_govbr: "79af1f7e-9c1a-404e-ba07-68a700f98599"
    rota_elevacao_govbr: "40b6a91c-12fc-4ec8-9f3f-7de8fd6381ce"
    kba_cooldown_ate: "e7fc41ea-2381-4ad5-93ae-3dc0ca9918fe"
    ivcad_mc_score: "6e8e15a5-1a62-4dea-9f3e-2d44f9c468a8"
    nis_mascarado: "0f8bc5fd-e203-46c5-83b0-6fabd17ad597"
    beta_rms_per_capita: "f9424dd2-1332-41f4-bbe6-fa7b8f51a91b"
    tta_status: "2b2610e4-c361-418f-b842-9e50870b0053"
    grau_pcd_lc142: "d3eb8417-69f6-4c07-8d5f-824458105fe0"
  
  fields_legacy_canonicos_referenciados:
    pseudonimo_caso: "8afeb155-9b36-42a8-bb20-92bc2218bceb"
    estado_custodia: "7c220845-3828-48f9-8428-1dd5bac4c0b8"
    inss_der: "ca176c1b-c196-491b-a310-dec024cab3b4"
    inss_nr_protocolo: "5946c3cd-b02c-4e01-b237-c8121c02e61a"
    inss_status: "4aa047ad-018f-4ba8-adae-9eac9089e887"
    advogada_escolhida: "3d4b0e9e-7655-413e-8fa9-fce3afc9efe2"
    rota: "8a4b13ac-a45a-4660-925b-bb10a9379914"
    vertical: "0ee7b606-44fe-48ee-8a25-270c1f3aff86"
    servico: "b1342721-0238-4b45-bb4c-6be65d998f3e"
    etapa_atual: "b12f4c23-5418-46ef-876c-53f06570ab68"
    phi1_modalidade: "8e19bfca-853c-4243-a8a3-55f911ba362a"
    parcelas_pagas: "d33deba2-ab58-44ba-9d0e-44e9bfa655f9"
    zona_router_ethics: "3809d9dc-ff81-4829-8918-178716bc3eed"
    responsavel_tarefa: "264b3eb2-5434-4686-9c6c-8093abdbc13e"
```

---

## 7. CHECKLIST DE VALIDAÃ‡ÃƒO PÃ“S-MB-002

Marcar quando completar:

- [x] 8 fields novos criados (MB-002 Fase 2, 12/05/2026)
- [x] Field IDs UUID capturados em produÃ§Ã£o
- [x] ValidaÃ§Ã£o cruzada GET pÃ³s-POST
- [x] Spec v3.0.1 canonizada (este documento)
- [ ] 8 fields propagados via "Available everywhere" UI (Beto/Alessandro)
- [ ] 6 fields `_TEST_*` deletados via UI (Beto/Alessandro)
- [ ] 5 expansÃµes UI (phi1_modalidade, parcelas_pagas, notebooklm_pop_ref, servico, vertical) âš ï¸ pÃ³s Gate Juliana 19/05 para PcD
- [ ] MB-003 executado (Hib001 + CAD001 populados)
- [ ] MÃ³dulo C v3.0.1 (automations refatoradas)
- [ ] MÃ³dulo D v3.0.2 (POP Beto errata Lorrane)

---

## 8. VERSIONAMENTO

- **v3.0** â€” 11/05/2026 â€” MÃ³dulo B inicial com 12 campos propostos (placeholders Field IDs)
- **v3.0.1** â€” 12/05/2026 â€” **CanonizaÃ§Ã£o com Field IDs reais** + reduÃ§Ã£o 12â†’8 fields novos (4 propostos absorvidos pelo legacy) + opÃ§Ãµes de dropdowns documentadas + matriz propagaÃ§Ã£o + ampliaÃ§Ãµes UI listadas + bloco YAML para Igor

---

## 9. PRINCÃPIOS APLICADOS NESTE MÃ“DULO

| PrincÃ­pio | AplicaÃ§Ã£o |
|---|---|
| 1. InventÃ¡rio de Caminhos | 4 propostos removidos apÃ³s prÃ©-check colisÃ£o (Fase 1 DRY RUN) |
| 1b. Teste antes de Afirmar Funcional | Field IDs capturados de produÃ§Ã£o, nÃ£o inferidos |
| 2. VocabulÃ¡rio Institucional | ConvenÃ§Ã£o snake_case ASCII documentada Â§1.1 |
| 4. Errata Absorve, NÃ£o Inventa | InconsistÃªncias legacy mantidas (`cep-beneficiario`, `fraudscore`) sem inferir correÃ§Ã£o |
| 5. PersistÃªncia de Patches | 4 patches v3.0-1 a v3.0-4 v2.0 referenciados explicitamente |
| 7. Cadeia de AutorizaÃ§Ã£o Dual | DecisÃµes founder Fase 1 explÃ­citas in-chat antes da Fase 2 |
| 8. PersistÃªncia de Field IDs Reais | MCP get_task â†’ captura UUIDs reais para canonizaÃ§Ã£o |

---

**FIM DO MÃ“DULO B v3.0.1 (canonizado)**

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante Ã© carbono que nÃ£o desistiu da pressÃ£o."

âˆž

