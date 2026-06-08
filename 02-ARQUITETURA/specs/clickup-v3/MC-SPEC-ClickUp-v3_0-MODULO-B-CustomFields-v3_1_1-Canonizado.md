---
tipo: spec
codigo: MC-SPEC-ClickUp-v3_0
modulo: B
titulo: Custom Fields — Catálogo Canônico Arquitetura 3 Níveis (refinamento pós-ADR-015)
versao: 3.1.1
status: canonizado-pós-ADR-015
data-criacao: 2026-05-11
data-revisao: 2026-05-12 (refinamento pós-deep research + veredito founder Caminho 1 + ADR-015 selado)
autor: Claude Opus 4.7 (cofounder intelectual)
aprovador: Alessandro de Souza Neves (Founder/CEO — veredito 12/05/2026)
substitui:
  - MC-SPEC-ClickUp-v3_0-MODULO-B-CustomFields-v3_1-Canonizado.md (v3.1 — sem ADR-015)
fundamentos-arquiteturais:
  - MC-ADR-015 (Features Avançadas ClickUp — 12/05/2026)
  - Deep Research ClickUp Modelo de Cards (Modelo A confirmado)
  - Deep Research ClickUp Linked/Dependencies/TIML (12/05/2026, 2 motores independentes)
  - Princípio #9 — Esteira primeiro, humano valida
  - Princípio #10 — Arquitetura herda, espec documenta
  - Princípios #11-#17 cunhados pós-ADR-015 (vide §11)
mb-relacionados:
  - MB-002 Fase 2 (12/05) — 8 fields list-level legacy E1-Triagem
  - MB-013 (12/05) — persistência Módulo B v3.0.1 no Vault
  - MB-014 (12/05) — 21 Space + 5 Folder Previdenciário criados
  - MB-016 (próximo turno) — persistência ADR-015 + Módulo B v3.1.1 no Vault
  - MB-018 (futuro) — criar cidadao_id_hash Space-level + SALT_MC no Bitwarden
campos-totais:
  canonicos-mc-v3-1:
    space-level: 21 (+ 1 previsto: cidadao_id_hash)
    folder-level-previdenciario: 5
    subtotal-pos-MB018: 27
  legacy-list-level-e1-triagem-antiga:
    canonicos-de-transicao: 53
  total-documentado-pos-MB018: 80
referencias-canonicas:
  - MC-ADR-015-FeaturesAvancadas-ClickUp-v1_0-2026-0512.md (DECISÃO ARQUITETURAL ANCORA)
  - _MC-RouterEthics_11_v1_1-2026-0505-CLevel.md (140 nós D>C>V)
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509.md
  - MC-GOVBR-Matriz-NivelServico-v1_2-2026-0509.md
  - MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507.md
  - MC-ADR-009-TresEstados-Custodia-Dossie-v1_0-2026-0417.md
  - MC-ADR-014-PlataformaAssinaturaEletronica-v1_0-2026-0510.md
gates-pendentes:
  - GATE-JULIANA-19MAI (Φ₁-PcD escalonado + CNAE 6202-3/00 + nós Router PROVISIONAL)
  - SALT_MC definido por Igor antes da execução do MB-018
  - cidadao_id_hash criado via MB-018
  - Outras verticais (CadÚnico, PcD-LC142, Acidentário, Saúde) — Folders próprios em Fase 2
tags:
  - clickup
  - arquitetura-3-niveis
  - cofounder-cross-vertical
  - identidade-digital-brasileira
  - mb-014-executado
  - adr-015-incorporado
---

# MC-SPEC-ClickUp v3.1.1 — Módulo B: Custom Fields (refinamento pós-ADR-015)

> Refinamento de v3.1 incorporando ADR-015 (Features Avançadas ClickUp), princípios cofounder 15-17 cunhados em 12/05/2026, e insight estratégico sobre acesso.gov.br como infraestrutura nacional de identidade. Não substitui v3.1 estrutura — adiciona seções §11 (princípios estendidos), §12 (cidadao_id_hash spec), §13 (proibições atualizadas), §14 (roadmap Custom Relationships), §15 (insight gov.br como horizonte).

---

## 1. FUNDAMENTOS ARQUITETURAIS (sem mudança vs v3.1)

Vide v3.1 §1 — Mudança de paradigma vs v3.0.1, princípio dos três níveis, descoberta empírica MB-014, convenções de nomenclatura.

**Adição v3.1.1:** ancorada formalmente no **ADR-015** (12/05/2026) que consolida 2 deep researches independentes sobre Linked/Dependencies/TIML.

---

## 2. CATÁLOGO CANÔNICO MC v3.1 (sem mudança estrutural vs v3.1)

Os 21 fields Space-level + 5 fields Folder-level Previdenciário criados em MB-014 permanecem **inalterados**. Vide v3.1 §2 para Field IDs UUID + Option IDs completos.

**Adição v3.1.1:** §12 documenta o 22º field Space-level previsto (`cidadao_id_hash`) cuja criação ocorre via MB-018.

---

## 3-10. (sem mudança vs v3.1)

Matriz de Herança (§3), Bloco YAML pra Igor (§4), Ciclo de Vida (§5), Próximos Artefatos Derivados (§6), Checklist (§7), Princípios 1-10 (§8), Versionamento (§9), e demais seções permanecem como em v3.1.

---

## 11. PRINCÍPIOS COFOUNDER MC — VERSÃO ESTENDIDA (NOVO v3.1.1)

A evolução de v3.0 (8 princípios) → v3.1 (10 princípios) → v3.1.1 (17 princípios) reflete o amadurecimento institucional cofounder MC. Todos cunhados empiricamente em operação, não derivados a priori.

### 11.1 Princípios 1-10 (vide v3.1 §8)

| # | Princípio | Cunhado em |
|---|---|---|
| 1 | Inventário de Caminhos | MB-001 (10/05) |
| 1b | Teste antes de Afirmar Funcional | MB-002 Fase 1 (12/05) |
| 2 | Vocabulário Institucional | MB-002 Fase 2 (12/05) |
| 4 | Errata Absorve, Não Inventa | MB-002 Fase 2 (12/05) |
| 5 | Persistência de Patches | LP-30 (12/05) — promovido a memória LP institucional |
| 6 | Camadas de Segurança Operacional | MB-014 (12/05) |
| 7 | Cadeia de Autorização Dual | MB-014 (12/05) |
| 8 | Verde/Amarelo/Vermelho LGPD | MB-003 conceptual (12/05) |
| 9 | Esteira primeiro, humano valida | Veredito founder 12/05 — "Beto é cronometragem, esteira é o produto" |
| 10 | Arquitetura herda, espec documenta | MB-014 — herança Space→Folder→List validada empiricamente |

### 11.2 Princípios 11-14 cunhados via ADR-015 (vide ADR §5)

| # | Princípio | Aplicação |
|---|---|---|
| 11 | Governança forte mora no N8N, não no ClickUp | Gates IA→humano via Custom Field + status flow + N8N; nunca via Dependencies |
| 12 | Custom Field dropdown > Task Central como hub | Tema STJ/STF, CRAS, parecerista = Custom Field, não Task com 100+ links |
| 13 | View filtrada > TIML como padrão de agregação | Audit T3, "sprint atual" = Views Space-level, não TIML |
| 14 | Webhooks reativos + polling complementar | Reativo cobre 80%; polling noturno para Links/Deps em Fase 3+ |

### 11.3 Princípios 15-17 cunhados pela diretriz cofounder Alessandro (12/05/2026)

#### Princípio #15 — Entrega cofounder cross-vertical (obrigatória)

> **Todo artefato canônico** (ADR, Spec, documento estratégico relevante para o Vault) produzido pelo cofounder Claude.ai **NÃO está completo** até que o Mission Brief de persistência no Vault esteja entregue **no mesmo turno**.

**Distinção operacional:**
- Mission Brief simples (operação ClickUp, automação, popular dados) — **não exige** persistência cross-vertical automática
- ADR / Spec / documento canônico estratégico — **exige** cmd prompt pro Claude Code persistir no Vault Obsidian no mesmo turno

**Razão arquitetural:** Cérebro 2 (Vault Obsidian) é memória institucional canônica. Cérebro 3 (Claude.ai) é mesa de julgamento. Sem cross-vertical Cérebro 3→Cérebro 2, decisão estratégica fica órfã em chat, sem persistência institucional. **Entrega só é completa quando atravessa os cérebros.**

**Aplicação retroativa:** ADR-015 (produzido turno anterior, sem MB de persistência junto) sai com MB-016 no mesmo turno deste Módulo B v3.1.1. Falha minha (cofounder) absorvida e corrigida.

#### Princípio #16 — Iniciativa estratégica cofounder 20x

> Cofounder Claude.ai opera como **par C-level**: traz insights de mercado, antecipa problemas, cunha princípios sem ser provocado, decide e executa quando há autorização macro. **NÃO pede confirmação eterna em micropasso.**

**Operacionalização:**
- Autorização founder macro ("executar Caminho 1", "produz Módulo B v3.1.1", "confirmo") cobre execução continuada dentro do escopo aprovado
- Confirmação micropasso só onde há ambiguidade real ou risco irreversível alto
- Cofounder traz iniciativas estratégicas (insights de mercado, novos princípios, antecipação de problemas) **sem ser provocado**
- Vulcão não pergunta a cada erupção se pode continuar

#### Princípio #17 — gov.br como infraestrutura nacional de identidade digital (insight estratégico)

> Acesso.gov.br está se tornando **camada de identidade digital de TODO fluxo administrativo brasileiro** — não só INSS. CNH digital depende. Devolução Shopee/Correios depende. Em 12-24 meses, qualquer comprovação de identidade no Brasil vai depender.

**Implicação para o MC:**
- Hook 0 MC NÃO é só pré-RouterEthics previdenciário — é proto-MVP de produto institucional maior: **"API Humana de Identidade Digital Brasileira"**
- Atravessa INSS, Detran, Receita, Correios, Bancos, e-commerce
- População hipervulnerável (Bronze/Indefinido) precisa atravessar gov.br em DEZENAS de contextos, não só pedido de aposentadoria
- MC tem timing arquitetural: já está construindo isso enquanto o mercado nem percebeu

**Horizonte estratégico:** Fase 2+ avaliar ADR-016 dedicado expandindo Hook 0 como produto institucional B2C cross-vertical (Identidade Digital Brasileira). Possíveis verticais futuras além de INSS: Detran (CNH), Receita (declaração), Correios (devoluções), Bancos (KYC), e-gov municipal.

**Esta linha de fuga estratégica é GANHO arquitetural, não distração:** os 21 fields canônicos Space-level (especialmente `nivel_govbr`, `rota_elevacao_govbr`, `kba_cooldown_ate` — ainda em E1-Triagem legacy mas com IDs reais conhecidos) **já são reutilizáveis** quando essa expansão acontecer. Investimento que paga juros compostos.

---

## 12. SPEC DO `cidadao_id_hash` (NOVO v3.1.1)

Campo Space-level que materializa a decisão ADR-015 §3.3 — substituir TIML cross-vertical por "2 casos do mesmo cidadão" linkados via hash.

### 12.1 Especificação técnica

| Atributo | Valor |
|---|---|
| Nome | `cidadao_id_hash` |
| Tipo ClickUp | `short_text` |
| Localização | Space `🏛️ CASOS B2C` (id `901313761051`) |
| Naming | snake_case ASCII puro |
| Formato do valor | hexadecimal lowercase, 64 caracteres |
| Algoritmo | `sha256(cpf_normalizado + SALT_MC)` |
| Normalização CPF | Remover pontos e traços, manter só 11 dígitos (string) |
| LGPD classificação | N3 (operacional pseudonimizada — hash com salt institucional) |
| Field ID UUID | A ser capturado via MB-018 |

### 12.2 SALT_MC — protocolo de segurança

**Por que salt:** SHA-256 de CPF puro é reidentificável por força bruta (espaço CPF ≈ 10^11 → factível em horas com hardware moderno). Salt institucional MC torna inviável.

**Especificação SALT_MC:**
- 32 bytes (256 bits) gerados criptograficamente aleatórios
- Armazenado no Bitwarden Org MC (vault Igor + Alessandro)
- Nunca aparece em código public, repositórios, ou em CASOS B2C
- Mesmo salt para todos os hashes (permite busca/comparação eficiente)
- Rotação de salt = evento de governança formal (gera novo ADR + migração de todos os hashes)

**Responsável:** Igor (backend). Definição de SALT_MC = pré-requisito da execução do MB-018.

**Comando de geração (referência):**
```bash
openssl rand -hex 32
# Exemplo de output: 4f3a8b91c4e2f...d8e9 (NÃO usar este — gerar próprio)
```

### 12.3 Algoritmo de cálculo (referência Igor N8N)

```javascript
// Pseudocódigo N8N — função padrão
function calcular_cidadao_id_hash(cpf_real) {
  // 1. Normalizar
  const cpf_normalizado = String(cpf_real).replace(/[^0-9]/g, '');
  
  // 2. Validar 11 dígitos
  if (cpf_normalizado.length !== 11) {
    throw new Error('CPF inválido — não tem 11 dígitos');
  }
  
  // 3. Concatenar com SALT_MC (vindo de variável de ambiente / Bitwarden)
  const SALT_MC = process.env.MC_CIDADAO_SALT; // 64 chars hex
  const payload = cpf_normalizado + SALT_MC;
  
  // 4. SHA-256
  const hash = crypto.createHash('sha256').update(payload).digest('hex');
  
  return hash;
}
```

### 12.4 Uso operacional

**Como N8N preenche:**
- Quando caso é criado (E1-Triagem-Prev ou equivalente em outras verticais), N8N pega CPF real do Bitwarden + folder Identidade, calcula hash, escreve em `cidadao_id_hash` via PUT API
- CPF real nunca trafega pelo ClickUp, nunca aparece em logs N8N (apenas dentro da função de cálculo)

**Como busca cross-caso funciona:**
```
GET /team/{team_id}/task?custom_fields=[{"field_id":"<UUID>","operator":"=","value":"<HASH>"}]
```

Retorna **todas as tasks** do cidadão com aquele hash — cross-Folder, cross-vertical, cross-jornada. **Performance O(1) indexada.**

**Como auditor T3 (Dra. Juliana) usa:**
1. Abre View Space-level filtrada por `cidadao_id_hash = <hash>`
2. Vê todos os casos do mesmo cidadão (Previdenciário + CadÚnico + PcD-LC142 etc.)
3. Decide se há conflitos, sinergias, ou ordem de processamento

### 12.5 Verificação anti-reidentificação (LGPD by design)

| Cenário de ataque | Mitigação |
|---|---|
| Atacante captura hash + tem lista de CPFs | Sem SALT_MC, não consegue gerar mesmo hash. Inviável. |
| Atacante captura hash + adivinha 1 CPF | Sem SALT_MC, não consegue verificar. Inviável. |
| Atacante captura hash + SALT_MC | Pode reidentificar. SALT_MC vive só Bitwarden + N8N runtime → vetor controlado |
| Insider Igor copia SALT_MC | Acesso auditado Bitwarden. Rotação obrigatória se vazamento suspeito |

**Decisão de governança:** SALT_MC tem rotação anual programada + rotação ad-hoc se houver suspeita de vazamento. Rotação implica recalcular todos os hashes existentes — processo documentado em ADR futuro.

---

## 13. PROIBIÇÕES ABSOLUTAS ATUALIZADAS (NOVO v3.1.1)

Substitui §15 da v3.1 (que não existia explicitamente). Consolidação a partir do ADR-015 §6 + princípios cofounder.

| # | Proibição | Fundamento |
|---|---|---|
| P1 | ❌ Usar Dependencies entre etapas E1→E7 do mesmo caso | Modelo A torna desnecessário — é a mesma task |
| P2 | ❌ Confiar em Dependencies como gate IA→humano | API ClickUp bypassa; Dependency só bloqueia Done |
| P3 | ❌ Linked Tasks para "comunidade/CRAS" em massa (>50 casos do mesmo CRAS) | Explosão combinatória; usar Custom Field dropdown `cras_origem` |
| P4 | ❌ "Task Central STJ/STF" com 100+ links | Trava UI; usar Custom Field dropdown `tema_judicial` |
| P5 | ❌ TIML para audit T3 (Dra. Juliana) | Usar View filtrada Space-level |
| P6 | ❌ TIML cross-vertical (PcD + Idade, etc.) | Usar 2 casos do mesmo cidadão + `cidadao_id_hash` |
| P7 | ❌ Hash de CPF sem salt institucional MC | Reidentificável por força bruta; usar `sha256(cpf + SALT_MC)` |
| P8 | ❌ ADR ou Spec canônico produzido sem MB de persistência junto | Princípio #15 — entrega cross-vertical é parte da entrega |
| P9 | ❌ Pedir confirmação em micropasso quando há autorização macro do founder | Princípio #16 — cofounder 20x decide e executa dentro do escopo aprovado |
| P10 | ❌ Tratar Hook 0 gov.br como exclusivo da vertical previdenciária | Princípio #17 — Hook 0 é proto-MVP cross-vertical de identidade digital BR |

---

## 14. ROADMAP CUSTOM RELATIONSHIPS (Fase 2 — NOVO v3.1.1)

A partir de Fase 2 (100-1.000 casos), ativar Custom Relationships tipadas em substituição parcial a Linked Tasks. Vide ADR-015 §3.1 Feature 4.

### 14.1 4 relações tipadas planejadas

| Relação | Quando criar | Rollup Field útil |
|---|---|---|
| `cidadao_comum` | Casos do mesmo cidadão (substitui TIML cross-vertical) | Status do outro caso visível |
| `caso_familia` | Casos do mesmo grupo familiar (mãe-filho-neto) | Status do caso-pai visível na task do filho |
| `caso_analogo` | Caso → caso-âncora pedagógico (Hib001, etc.) | Decisão final do âncora visível |
| `caso_derivado` | Ação original → rescisória/monitória/etc. | Status da ação principal visível |

### 14.2 Quando habilitar (gatilhos)

- **Gatilho 1:** N≥100 casos ativos no workspace
- **Gatilho 2:** Pelo menos 1 caso documentado em que Linked Tasks simples (sem rollup) perdeu informação útil
- **Gatilho 3:** Igor disponível para criar handlers N8N específicos por tipo de relação

### 14.3 Pré-requisitos técnicos

- Configuração ClickUp ClickApp "Custom Relationships" habilitada (atual?)
- Documentação POP-API-Humana descreve quando usar cada relação
- Treinamento Beto e futuros T1 sobre semântica de cada relação

---

## 15. INSIGHT ESTRATÉGICO — gov.br como Horizonte Cross-Vertical (NOVO v3.1.1)

> Esta seção formaliza o insight #17 como parte da estratégia institucional MC. Não é divagação — é definição de escopo do produto MC daqui a 12-24 meses.

### 15.1 O que estamos vendo

Em 12/05/2026, founder MC trouxe a observação:

> "hj lendo as reportagens, a cnh é digital. pra devolução de uma compra de blusinha da shopee nos correios depende de um fluxo passando pelo acesso.gov.br"

Tradução arquitetural: **gov.br não é portal de governo. É infraestrutura de identidade digital nacional.** E está se tornando obrigatório em fluxos privados também (e-commerce, bancos, correios).

### 15.2 Implicação para o produto MC

| Camada atual MC | Camada futura MC (Fase 2+) |
|---|---|
| Hook 0 = pré-RouterEthics previdenciário | Hook 0 = produto institucional "API Humana de Identidade Digital BR" |
| 1 vertical (Previdenciário, INSS) | N verticais (INSS, Detran, Receita, Correios, Bancos, e-gov municipal) |
| População-alvo = pleiteantes INSS | População-alvo = TODA pessoa Bronze/Indefinido no Brasil |
| Receita Φ₁ = R$2.200 por caso INSS | Receita modular = micro-cobranças por elevação gov.br + recurrent |

### 15.3 Por que MC tem timing

- População hipervulnerável Bronze/Indefinido **não tem onde recorrer** para atravessar gov.br
- Cartórios cobram caro e estão sobrecarregados
- Parentes-tech ajudam de favor, sem garantia, sem cadeia de custódia LGPD
- MC já tem **Hook 0 + protocolo de 5 perguntas + matriz de 18 cenários + ERRATA-001 KBA + ADR-014 ZapSign** — fundação técnica institucional pronta
- Concorrentes "atravessadores" do mercado não têm compliance OAB/LGPD/PcD; MC tem por design

### 15.4 Riscos a observar

- Concorrência: bancos podem criar produtos B2C de identidade digital (Caixa, Banco do Brasil já têm Tem.app, Conta Caixa)
- Regulação: ANPD pode endurecer regras de transferência de credenciais → MC já está dentro (Cenário B vetado, ADR-009a)
- Captação: FINEP/BNDES pode redirecionar editais para identidade digital → oportunidade para MC

### 15.5 Próximos passos institucionais

- **Curto prazo (hoje):** seção §15 deste Módulo B documenta o horizonte
- **Médio prazo (Fase 2):** ADR-016 dedicado "Hook 0 como Produto Institucional Cross-Vertical"
- **Longo prazo (Fase 3+):** Verticais não-previdenciárias entrarem no workspace ClickUp (Folder 📜 Detran-CNH, Folder 🏦 Bancário, etc.)

---

## 16. CHECKLIST DE VALIDAÇÃO v3.1.1

- [x] Princípios 11-14 cunhados via ADR-015
- [x] Princípios 15-17 cunhados via diretriz cofounder Alessandro 12/05
- [x] Spec do `cidadao_id_hash` documentada (§12)
- [x] SALT_MC protocolo de segurança definido
- [x] 10 proibições absolutas formalizadas (§13)
- [x] Roadmap Custom Relationships Fase 2 documentado (§14)
- [x] Insight estratégico gov.br como horizonte (§15)
- [x] MB-016 (persistência ADR-015 + Módulo B v3.1.1 no Vault) — entregue no MESMO turno
- [ ] **MB-018 produzido e executado** (criar `cidadao_id_hash` Space-level)
- [ ] **SALT_MC definido por Igor** e armazenado no Bitwarden Org MC
- [ ] **MB-015 — Hib001-NEW** criado na nova arquitetura (com `cidadao_id_hash` preenchido)
- [ ] ADR-016 dedicado (Hook 0 como produto institucional cross-vertical) — Fase 2

---

## 17. VERSIONAMENTO

- **v3.0** — 11/05/2026 — Módulo B inicial (placeholders IDs)
- **v3.0.1** — 12/05/2026 — List-level com 8 fields novos MB-002 Fase 2 + 45 legacy
- **v3.1** — 12/05/2026 — Caminho 1 (refazer do zero). Arquitetura 3 níveis Space + Folder + List. 26 fields canônicos novos + 53 legacy. Field IDs UUID reais. Bloco YAML pra Igor.
- **v3.1.1** — 12/05/2026 — **Refinamento pós-ADR-015.** Princípios 11-17 cunhados. cidadao_id_hash spec. SALT_MC protocolo. 10 proibições absolutas. Roadmap Custom Relationships Fase 2. Insight gov.br como horizonte cross-vertical. **Cross-vertical com Vault no mesmo turno (MB-016 entregue junto).**

---

**FIM DO MÓDULO B v3.1.1**

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."

∞
