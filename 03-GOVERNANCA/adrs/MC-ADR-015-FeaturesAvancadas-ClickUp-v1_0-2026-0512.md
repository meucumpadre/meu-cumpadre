---
tipo: ADR
codigo: MC-ADR-015
titulo: Features Avançadas ClickUp — Task Linking, Dependencies, TIML aplicados à Esteira IA-Driven MC
versao: 1.0
data: 2026-05-12
status: ⚠️ PROVISIONAL pré-19/05 (sem impacto em nós Router-Ethics ou parecer Juliana — decisão arquitetural-operacional pura)
autor: Claude Opus 4.7 (cofounder intelectual, Claude.ai)
aprovador: Alessandro de Souza Neves (Founder/CEO — veredito 12/05/2026 "Confirmo em grau, gênero e número")
sucessor-natural: ADR-015 v2.0 pós-piloto N=100 casos
fundamentos:
  - Deep Research 1 (12/05/2026) — perspectiva tradicional ClickUp/SaaS escala
  - Deep Research 2 (12/05/2026) — perspectiva técnica detalhada com fontes primárias
  - Convergência arquitetural de 5 decisões duras + 1 divergência resolvida
adrs-relacionados:
  - MC-ADR-008 (Stack de Ferramentas — ClickUp escolhido)
  - MC-ADR-009a v2.0 (Custódia de Credenciais — Bitwarden Org MC)
  - MC-ADR-009b (Três Estados de Guarda do Dossiê — S1→S2→S3)
  - MC-ADR-011 (Arquitetura 3 Cérebros — Documentação + Vault + Claude.ai)
specs-impactadas:
  - MC-SPEC-ClickUp-v3_0-MODULO-B-CustomFields-v3_1 (atualização para v3.1.1 incorporando este ADR)
  - MC-SPEC-ClickUp-v3_0-MODULO-C-Automations (futuro v3.1)
  - MC-SPEC-ClickUp-v3_0-MODULO-D-POP-Beto (futuro v3.1, refatorado como POP-API-Humana)
mbs-derivados:
  - MB-018 (criar cidadao_id_hash Space-level)
  - MB-019+ (futuro — habilitar Custom Relationships Fase 2)
princípios-cunhados:
  - "11. Governança forte mora no N8N, não no ClickUp"
  - "12. Custom Field dropdown > Task Central como hub de agregação"
  - "13. View filtrada > TIML como padrão visual de agregação"
  - "14. Webhooks reativos + polling complementar"
proibicoes-formalizadas: 7 (vide §6)
tags:
  - ADR
  - clickup
  - arquitetura-3-niveis
  - dependencies
  - linked-tasks
  - timl
  - n8n-governance
  - esteira-ia-driven
---

# MC-ADR-015 — Features Avançadas ClickUp Aplicadas à Esteira IA-Driven

> Decisão arquitetural formal sobre uso (e não-uso) das features avançadas de relacionamento do ClickUp — Task Linking, Dependencies, Tasks in Multiple Lists (TIML) — na esteira operacional MC v3.1+. Consolida 2 deep researches independentes (12/05/2026) e estabelece governança duradoura.

---

## 1. CONTEXTO

### 1.1 Pergunta original

Em **12/05/2026**, durante construção do MC-SPEC-ClickUp v3.1 pós-Caminho 1 (refazer do zero), surgiu pergunta arquitetural sobre o feature "Vincular itens ou adicionar dependências" do ClickUp e como ele se integra à esteira IA-driven que o MC está construindo.

A pergunta abriu 3 sub-features que ainda não tinham sido exploradas:
- **Task Link** (Linked Tasks) — relação bidirecional sem ordem
- **Dependencies** (Waiting on / Blocking) — relação direcional com semântica de bloqueio
- **Tasks in Multiple Lists (TIML)** — mesma task em múltiplas listas

### 1.2 Método de decisão

Aplicado **Spec-Driven Development com gate de research externo**:
1. Prompt deep research vendor-neutral produzido pelo cofounder Claude.ai
2. Founder rodou prompt em 2 motores independentes (deep research 1 + deep research 2)
3. Cofounder cruzou os 2 relatórios buscando convergências e divergências
4. Founder validou as conclusões com fundamentos próprios de Domain-Driven Design + LGPD + performance

**Princípio aplicado:** research independente antes de spec, spec antes de implementação.

### 1.3 O que estava em jogo

Decisões que afetam:
- Volume operacional sustentável (5.000+ casos/mês)
- Custo de manutenção do schema ao longo de 12-24 meses
- Governança da relação IA → Human API
- Permeabilidade entre verticais (Previdenciário, CadÚnico, PcD-LC142, Acidentário, Saúde)
- Privacidade by design (LGPD)

---

## 2. CONVERGÊNCIA DOS 2 RELATÓRIOS

### 2.1 Cinco decisões duras convergentes

| # | Decisão | Convergência |
|---|---|---|
| D1 | Dependencies entre etapas E1→E7 = **antipattern** (Modelo A torna desnecessário) | ✅ Forte (ambos) |
| D2 | Dependencies como gate IA→humano = **não confiável** (API bypassa, só bloqueia Done) | ✅ Forte (ambos) |
| D3 | Linked Tasks = **espinha relacional** (família, análogos, casos derivados) | ✅ Forte (timing difere) |
| D4 | TIML para audit T3 = **anti-pattern** (preferir View filtrada) | ✅ Quase consenso |
| D5 | Custom Relationships > Linked Tasks para relações tipadas com rollup | ✅ Forte |

### 2.2 Divergência resolvida — TIML cross-vertical

**Relatório 1:** Anti-pattern por schema drift e assimetria de estados.
**Relatório 2:** Caso de uso central (cidadão com 2 verticais simultâneas).

**Resolução do founder (Veredito 12/05/2026):**

> "Um pedido de Aposentadoria por Idade e um pedido de Benefício PcD (LC 142) podem pertencer à mesma pessoa, mas são esteiras administrativas independentes no INSS. Eles possuem tempos de maturação distintos, exigências documentais diferentes e desfechos que não são mutuamente exclusivos. Se a Zilda tem dois protocolos no INSS, a sua operação precisa ter dois rastreios atômicos."

**Tradução arquitetural:** **2 casos do mesmo cidadão**, não **1 caso 2 verticais**.

**Implicação:** TIML cross-vertical fica **fora do MC**. Substituído pelo campo `cidadao_id_hash` Space-level + futura Custom Relationship `cidadao_comum` na Fase 2.

### 2.3 Fundamentos cravados pelo founder

**Domain-Driven Design:** A esteira INSS é o domínio. Cada pedido administrativo no INSS é uma agregação atômica. Forçar duas jornadas independentes em um único container (task) via TIML é violar a fronteira de agregação do domínio.

**Armadilha técnica TIML:**
- Schema Drift — task herda fields de TODAS as listas em que está
- Conflito de Status — assimetria quando avança em uma vertical mas não na outra
- Caos de Webhooks — `taskUpdated` multiplicado pelas listas

**Elegância `cidadao_id_hash`:**
- LGPD by design (hash SHA-256 não expõe PII)
- Performance O(1) (short_text indexado, busca instantânea)
- Simplicidade N8N (GET filtrado retorna todo histórico do cidadão)

---

## 3. DECISÃO

### 3.1 Posição formal sobre cada feature

#### Feature 1 — Task Link (Linked Tasks)

**Uso:** ✅ **Adotar como espinha dorsal relacional do MC.**

**Quando usar:**
- Família real (mãe-filho-neto da mesma família consanguínea/legal)
- Caso análogo pedagógico (referência a caso-âncora como Hib001)
- Caso derivado (ação original → rescisória → monitória)
- Recurso/judicialização (administrativo → CRPS → judicial)

**Quando NÃO usar:**
- Comunidade/CRAS em massa (>50 casos do mesmo CRAS) → usar Custom Field dropdown `cras_origem`
- Tema STJ/STF como hub central (>100 análogos) → usar Custom Field dropdown `tema_judicial`
- Encadeamento sequencial de etapas (Modelo A já cobre)

**Limites técnicos:**
- Máximo de 500 linked tasks por task individual
- Sem webhook próprio (`taskLinkCreated` não existe) → polling complementar necessário em Fase 3+

#### Feature 2 — Dependencies (Waiting on / Blocking)

**Uso:** ❌ **NÃO adotar como mecanismo de governança.** ⚠️ **Restrição extrema** para casos de família.

**Razão técnica fundamental:**
Dependencies do ClickUp **NÃO bloqueiam mudança de status**, apenas Done. Documentação oficial: "Blocking tasks prevent other tasks from starting or progressing" — comportamento real: IA via API consegue mover task entre statuses ignorando dependency.

**Implicação operacional:** Dependency é **aviso visual**, não trava de governança.

**Alternativa adotada pela MC para governança forte:**
- Status flow com status "Aguardando validação humana" que só humano pode mover adiante
- Custom Field obrigatório tipo checkbox ("Validação T2 OK?") que IA não pode marcar
- Webhook N8N que valida regras de negócio ANTES de mover (gate de pré-validação)

**Casos de exceção limitada:**
- Dependencies entre casos de família onde há ordem temporal real (ex: pensão do neto depende de aposentadoria da avó concedida) — mas mesmo aqui, preferir **Custom Relationship `caso_familia` com rollup field** mostrando status do caso-pai.

#### Feature 3 — Tasks in Multiple Lists (TIML)

**Uso:** ⚠️ **Banido por governança até Fase 3+ excepcional, e mesmo assim com gates rigorosos.**

**Razão fundamental (veredito founder):**
- Schema Drift inaceitável em escala
- Caos de webhooks duplicados quebra idempotência N8N
- Conflito de status quando o caso avança em uma vertical mas não na outra
- **2 casos do mesmo cidadão** resolve TODOS os cenários cross-vertical sem TIML

**Substituição arquitetural:**
- Para identificar casos do mesmo cidadão → `cidadao_id_hash` Space-level (a criar via MB-018)
- Para audit T3 ver casos em múltiplas etapas → **View filtrada Space-level** (não TIML)
- Para "sprint atual" do operador → View filtrada Space-level
- Para Fase 2+ relação tipada → Custom Relationship `cidadao_comum`

**Único cenário de exceção legítima (Fase 3+):**
Audit view onde a auditora T3 precisa de Custom Fields exclusivos da QA (Score QA, Observação T3) que não fazem sentido nas listas de etapa. Mesmo nesse caso, **avaliar primeiro** se View filtrada com filtro de Custom Field `qa_status = Pendente` cobre.

#### Feature 4 — Custom Relationships (escalonamento de Linked Tasks)

**Uso:** ✅ **Adotar na Fase 2 (100-1.000 casos)** como evolução natural de Linked Tasks.

**3 relações tipadas planejadas:**

| Relação | Quando | Rollup Field útil |
|---|---|---|
| `cidadao_comum` | Casos do mesmo cidadão (substitui TIML cross-vertical) | Status do outro caso visível |
| `caso_familia` | Casos do mesmo grupo familiar (mãe-filho-neto) | Status do caso-pai visível na task do filho |
| `caso_analogo` | Caso → caso-âncora pedagógico (Hib001, etc.) | Decisão final do âncora visível |
| `caso_derivado` | Ação original → rescisória/monitória/etc. | Status da ação principal visível |

**Habilitação:** Após piloto N≥100 casos provando que Linked Tasks simples insuficiente (relacionamento sem rollup field perde valor analítico).

### 3.2 Cronograma de adoção por fase

| Fase | Volume | Features ativas |
|---|---|---|
| **Fase 1 — MVP (atual, até 100 casos)** | <100 ativos | Apenas Modelo A + Custom Fields + `cidadao_id_hash` + `taskMoved` webhooks. **Nada mais.** |
| **Fase 2 (100-1.000 casos)** | 100-1.000 | Adicionar Linked Tasks (família, análogos) + Custom Relationships tipadas + View filtrada como padrão de agregação visual |
| **Fase 3 (1.000-5.000)** | 1.000-5.000 | Considerar polling complementar para detecção de drift em Links. Avaliar TIML excepcional apenas para audit views com fields exclusivos |
| **Fase 4 (5.000+)** | >5.000 | Particionamento (sub-folders por sub-vertical). Arquivamento ativo (tasks concluídas >12 meses). Avaliar migração para stack custom (PostgreSQL + NestJS + UI React) se ClickUp degradar |

### 3.3 O field `cidadao_id_hash` — implementação imediata

**Especificação técnica:**
- Tipo: `short_text` (não checkbox, não dropdown — busca O(1))
- Localização: Space-level no 🏛️ CASOS B2C (id `901313761051`)
- Naming: `cidadao_id_hash` (snake_case ASCII puro)
- Formato do valor: `sha256(cpf_real_normalizado)` — 64 caracteres hexadecimais lowercase
- Normalização do CPF antes do hash: remover pontos e traços, manter só 11 dígitos
- LGPD: hash é **resistente a reidentificação** quando combinado com salt (vide §4.4)

**Implementação:** MB-018 (próximo turno do cofounder).

---

## 4. CONSEQUÊNCIAS

### 4.1 Para a arquitetura de dados

- Schema ClickUp permanece **3 níveis Space + Folder + List** sem TIML (preserva integridade da herança automática)
- Identidade do cidadão é **chave secundária** (cidadao_id_hash), não chave primária (caso_id é primária)
- Cada caso é unidade atômica de processamento; cidadão é nível de agregação analítica
- LGPD: zero PII em CASOS B2C; tudo via hash ou pseudônimo + Bitwarden + folder Identidade

### 4.2 Para a operação N8N

- Handlers desenhados **sem confiar em ClickUp Dependencies como gate**
- Governança de transição entre etapas é responsabilidade exclusiva do N8N
- Webhooks reativos (`taskMoved`, `taskUpdated`) cobrem 80% da operação
- Polling complementar (consulta periódica de `linked_tasks[]` e `dependencies[]`) entra em Fase 3+
- Idempotência por `task_id + event_type + history_items[0].id` continua mandatória

### 4.3 Para a Spec MC v3.1+

- **Módulo B v3.1.1** incorpora `cidadao_id_hash` no §2.1.1 Identidade (22 fields canônicos Space-level)
- **Módulo B §15** ganha 7 proibições absolutas novas (vide §6)
- **Módulo B §16** ganha roadmap Custom Relationships (3 relações tipadas Fase 2)
- **Módulo C v3.1** (futuro) refletirá decisões N8N-as-governance no design dos handlers
- **Módulo D v3.1** (futuro) refatorado como POP-API-Humana, não POP-Beto

### 4.4 Para LGPD e segurança

**Risco residual identificado:** SHA-256 do CPF sozinho pode ser **reidentificado por força bruta** (espaço de CPFs = ~10^11 → factível em horas com hardware moderno).

**Mitigação adotada:**
- Adicionar **salt institucional MC** ao hash: `sha256(cpf + SALT_MC)` onde SALT_MC é segredo de 32 bytes armazenado no Bitwarden Org MC
- Salt NUNCA aparece em CASOS B2C nem em código public
- Mesmo salt para todos os hashes (permite busca/comparação)
- Rotação de salt = evento de governança formal (gera novo ADR)

**Decisão pendente Igor:** definir SALT_MC e armazenar no Bitwarden antes da implementação MB-018.

### 4.5 Para a governança Human API

- **Princípio #11** cunhado: Governança forte mora no N8N, não no ClickUp
- API Humana T1-T4 supervisiona output IA via custom fields + comments
- Validação humana NÃO se apoia em features ClickUp (dependencies), apoia-se em status flow + custom field + N8N
- POP da API Humana documenta gates de validação por etapa

---

## 5. PRINCÍPIOS CUNHADOS POR ESTE ADR

| # | Princípio | Aplicação imediata |
|---|---|---|
| **11** | **Governança forte mora no N8N, não no ClickUp** | Gates IA→humano via Custom Field + status flow + N8N; nunca via Dependencies |
| **12** | **Custom Field dropdown > Task Central como hub de agregação** | Tema STJ/STF, CRAS, município, parecerista = Custom Fields, não tasks com 100+ links |
| **13** | **View filtrada > TIML como padrão visual de agregação** | Audit T3, "sprint atual", "casos em exigência" = Views, não TIML |
| **14** | **Webhooks reativos + polling complementar** | Reativo cobre 80%; polling noturno para Links/Deps/TIML que não disparam webhook próprio (Fase 3+) |

Estes princípios entram em vigor imediato e serão promovidos a memória LP institucional pós-19/05 (gate Juliana). Junto com:
- Princípio #9 — Esteira primeiro, humano valida
- Princípio #10 — Arquitetura herda, espec documenta

Total de princípios MC v3.1+ pós-19/05: **14 (1-14)**.

---

## 6. PROIBIÇÕES ABSOLUTAS FORMALIZADAS

A serem incorporadas ao Módulo B v3.1.1 §15:

| # | Proibição | Razão |
|---|---|---|
| 1 | ❌ Usar Dependencies entre etapas E1→E7 do mesmo caso | Modelo A torna desnecessário; é a mesma task |
| 2 | ❌ Confiar em Dependencies como gate IA→humano | Não bloqueia status change; API bypassa |
| 3 | ❌ Linked Tasks para "comunidade/CRAS" em massa (>50 casos do mesmo CRAS) | Explosão combinatória; usar Custom Field dropdown `cras_origem` |
| 4 | ❌ "Task Central STF/STJ" com 100+ links | Trava UI; usar Custom Field dropdown `tema_judicial` |
| 5 | ❌ TIML para audit T3 (Dra. Juliana) | Usar View filtrada Space-level |
| 6 | ❌ TIML cross-vertical (PcD + Idade, etc.) | Usar 2 casos do mesmo cidadão + `cidadao_id_hash` + futura Custom Relationship `cidadao_comum` |
| 7 | ❌ Hash de CPF sem salt institucional MC | Reidentificável por força bruta; usar `sha256(cpf + SALT_MC)` com salt no Bitwarden |

---

## 7. ALTERNATIVAS CONSIDERADAS E REJEITADAS

### 7.1 "Plataforma diferente" (Airtable, Linear, Monday)

**Considerado:** Migrar de ClickUp para Airtable (relacional puro) ou Linear (relations ricas).

**Rejeitado porque:**
- ClickUp já tem 79 fields configurados (45 legacy + 26 canônicos novos + 8 MB-002) — investimento significativo
- ClickUp tem maturidade de status flow superior aos competidores em operação multi-etapa
- Hierarquia 3 níveis (Space/Folder/List) cobre necessidade arquitetural atual
- Migração custaria 2-4 semanas de Igor + retreinamento Beto + Carlos retrabalhando UX
- ROI da migração só se justifica em Fase 4 (5.000+ casos)

### 7.2 "TIML como solução universal"

**Considerado:** Aceitar TIML como padrão arquitetural para cross-vertical e audit.

**Rejeitado pelos motivos cravados pelo founder em §2.3 (Domain-Driven Design + Schema Drift + Caos Webhooks).**

### 7.3 "Stack custom desde o início"

**Considerado:** Pular ClickUp e ir direto pra PostgreSQL + NestJS + UI React.

**Rejeitado porque:**
- Custo inicial alto (R$150-300K + 4-6 meses dev)
- Risco de over-engineering antes de validar product-market fit
- ClickUp aguenta até Fase 3 confortavelmente; Fase 4 reavalia (vide §3.2)
- Esteira MC v3.1 + N8N self-hosted já é arquiteturalmente correta; apenas a UI é SaaS

### 7.4 "Adotar tudo em Fase 1"

**Considerado:** Habilitar Linked Tasks + Dependencies + TIML + Custom Relationships desde o MVP.

**Rejeitado porque:**
- Princípio "complexidade ganha-se, não se pede" — features só ativadas quando há ROI demonstrado
- Beto/Carlos/Igor curva de aprendizado precisa ser respeitada
- Cada feature adicional aumenta superfície de bugs operacionais e overhead de N8N

---

## 8. CHECKLIST DE VALIDAÇÃO

- [x] 2 deep researches independentes confrontados
- [x] 5 decisões duras convergentes confirmadas
- [x] 1 divergência (TIML cross-vertical) resolvida com fundamento founder
- [x] `cidadao_id_hash` especificado tecnicamente
- [x] Cronograma de adoção por fase definido
- [x] 7 proibições absolutas formalizadas
- [x] 4 princípios cunhados (11-14)
- [x] Implicações N8N + LGPD documentadas
- [ ] **MB-018 produzido e executado** (criar `cidadao_id_hash` Space-level)
- [ ] **Módulo B v3.1.1 atualizado** com §15 anti-patterns + §16 roadmap
- [ ] **Módulo B v3.1.1 persistido no Vault** (MB-016)
- [ ] **SALT_MC** definido por Igor e armazenado no Bitwarden Org MC
- [ ] **POP API Humana v1.0** documenta gates de validação por etapa (Fase 2)
- [ ] **Revisão pós-piloto N=100 casos** — este ADR pode evoluir para v2.0

---

## 9. STATUS E REVISÃO

**Status atual:** ⚠️ PROVISIONAL — não bloqueado por gate Juliana 19/05 (decisão arquitetural-operacional pura, sem impacto em Router-Ethics ou compliance OAB).

**Selagem definitiva:** Após MB-018 executado + Módulo B v3.1.1 canonizado + ≥1 caso operado na nova arquitetura demonstrar herança correta de `cidadao_id_hash`.

**Próxima revisão (ADR-015 v2.0):** Após piloto N≥100 casos. Validar empiricamente:
- Linked Tasks de família funcionou na prática?
- View filtrada para Dra. Juliana T3 atendeu necessidade vs TIML hipotético?
- `cidadao_id_hash` permitiu queries cross-caso eficientes?
- Algum cenário forçou repensar a proibição de TIML?

**Sinal de gatilho para revisão antecipada:**
- Bug operacional documentado causado por uma das proibições
- Surgimento de cenário não previsto que requer feature proibida
- Mudança na API ClickUp que altere semântica de Dependencies/Links/TIML

---

## 10. SEÇÃO 10 — REFERÊNCIAS

### 10.1 Documentação consultada

- ClickUp Developer API — Tasks, Webhooks, Dependencies, Linked Tasks, TIML
- ClickUp Help Center — Custom Relationships, Tasks in Multiple Lists, Custom Fields
- Lei 13.709/2018 (LGPD) — Anonimização e pseudonimização
- Decreto 6.949/2009 (CDPD) — "Nada sobre nós, sem nós"

### 10.2 ADRs MC referenciados

- ADR-008 (Stack), ADR-009a/b (Custódia), ADR-011 (3 Cérebros), ADR-013 (Convenções IVCAD), ADR-014 (Plataforma Assinatura)

### 10.3 Specs MC referenciadas

- MC-SPEC-ClickUp v3.1 Módulo B (Custom Fields canonizado)
- _MC-RouterEthics_11_v1_1 (140 nós D>C>V)
- MC-PROCESSO-Jornada E0E7 Mestre v1.3.1

### 10.4 Mission Briefs derivados

- MB-014 (custom fields Space + Folder — executado 12/05) — fundação técnica deste ADR
- MB-018 (planejado) — criar `cidadao_id_hash`
- MB-019+ (futuro) — habilitar Custom Relationships Fase 2

---

**FIM DO ADR-015**

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."

∞
