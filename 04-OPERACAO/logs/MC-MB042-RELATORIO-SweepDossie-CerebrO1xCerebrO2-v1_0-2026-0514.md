---
tipo: RELATORIO-SWEEP
codigo: MC-MB042-RELATORIO-SweepDossie
versao: 1.0
data: 2026-05-14
mb_origem: MB-042
executor: Claude Code Opus 4.7 (DELL Beto, Cérebro 2)
modo: diagnóstico (leitura + mapeamento — sem produção de novos canônicos)
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# RELATÓRIO MB-042 — Sweep Crítico Cérebro 1 × Cérebro 2 · Corpo Institucional Dossiê-MC

> Audit cross-referencial executado em 14/05/2026 ~21h-22h BRT para mapear corpo institucional canônico sobre dossiê-MC, diagnosticar colisões com cunhagens cofounder C1 (13-14/05), avaliar impacto do ADR-016 cunhado hoje (MB-029), e produzir plano de harmonização antes de Sister Claude.ai 3.2 iterar B1-B4 ou B5-B9.

---

## §1 — INVENTÁRIO CANÔNICO ATUAL

### §1.1 — POPs Visual Law (T1)

**37 arquivos POP-VisualLaw encontrados** (incluindo .md, .pdf, e variantes em pastas legado/arquivo).

**Canônicos correntes (sem `_LEGADO` no path, versão mais recente):**

| PARTE | Versão | Path Vault (canônico) | Tamanho | Hash SHA-256 (8) | Sync Doc? |
|---|---|---|---|---|---|
| PARTE 1 | v1.2 (2026-05-02) | `04-OPERACAO/protocolos/visuallaw/MC-POP-VisualLaw-DossieSelado-PARTE1-v1_2-2026-0502.md` | 53.135 b | `26BDD209` | ⚠️ **DIVERGENTE** — Doc tem 53.699 b / hash `3FFE7DA4` |
| PARTE 2 | v1.3 (2026-05-02) | `04-OPERACAO/protocolos/visuallaw/MC-POP-VisualLaw-DossieSelado-PARTE2-v1_3-2026-0502.md` | 56.326 b | `BDBF1C29` | ✅ idêntica |
| PARTE 3 | v1.3 (2026-05-02) | `04-OPERACAO/protocolos/visuallaw/MC-POP-VisualLaw-DossieSelado-PARTE3-v1_3-2026-0502.md` | 107.723 b | `E9AA3D1D` | ⚠️ **DIVERGENTE** — Doc tem 108.287 b / hash `BF4317B0` |

**Detecção crítica:** PARTE 1 e PARTE 3 estão **dessincronizadas** entre Cérebro 1 (Doc) e Cérebro 2 (Vault) — delta de ~564 bytes em cada. Provavelmente line endings ou edits dessincronizados pós-MB-017. Requer reconciliação dedicada.

**Legados detectados (mantidos em quarentena, não tocar):**
- `OBSIDIAN/MEU CUMPADRE/_LEGADO-06-OPERACOES-20260513-152654/protocolos/visuallaw/` (PARTE 1 v1.2 + PARTE 2 v1.3 + PARTE 3 v1.3)
- `OBSIDIAN/MEU CUMPADRE/04-OPERACAO/pops/` (PARTE 1 v1.0 + v1.2 · PARTE 2 v1.0 + v1.2 · PARTE 3 v1.0 + v1.2) — **duplicação dentro do Vault**: `04-OPERACAO/pops/` e `04-OPERACAO/protocolos/visuallaw/` coexistem; este último é mais recente (v1.3 para PARTE 2/3)

**Índice de seções extraído (canônicos correntes):**

| PARTE | Seções principais |
|---|---|
| PARTE 1 | A (Manifesto Institucional) · B (Fundamentos Científicos B.1-B.12) · **C (Anatomia do Dossiê Selado C.0-C.16)** incluindo **C.13 SIV — Selo de Integridade Visual** + **C.14 Página de Firewall OAB** |
| PARTE 2 | **D.1-D.10 Design System** (D.2 Paleta · D.3 Tipografia · D.7 Three Stages · D.8 Comitê de Seriedade Zilda-STF · D.9 3 Camadas) · **E.1-E.6 Caixa de Ferramentas** (E.4 Integridade Técnica · **E.5 Vedações de Stack**) · **F.1-F.5 Workflow** (F.1 end-to-end · F.2 Sprint 48h) |
| PARTE 3 | **G.1-G.4 Três Palcos** (G.1 INSS · G.2 CRPS · G.3 JEF/B2B · G.4 Dual-Purpose) · **H.1-H.6 Governança** (H.1 Firewall OAB · H.3 LGPD/DPIA · H.4 Três Estados) · **I.1-I.10 Checklists** · **J.1-J.5 KPIs** · K (Arquitetura informacional CP-MC) · K-bis (PEI-MC) · L (Tabela mestre para Carlos) |

### §1.2 — SPECs · Manifestos · Vocabulário · Selo Oficial (T2)

**Canônicos correntes por categoria:**

| Categoria | Arquivo canônico corrente | Path Vault | Sync Doc? |
|---|---|---|---|
| **Manifesto Identidade Visual** | `MC-MANIFESTO-IdentidadeVisual-v2_0-2026-0513.md` (24.690 b) | `05-ESTRATEGIA/manifestos/` | ✅ idêntica |
| **SPEC Técnica Identidade Visual** | `MC-SPEC-IdentidadeVisual-Tecnico-v2_0-2026-0513.md` (18.624 b) | `02-ARQUITETURA/` E `02-ARQUITETURA/specs/identidade-visual/` | ⚠️ **duplicado dentro do Vault** (2 cópias idênticas) |
| **SPEC Reprodutibilidade Empírica** | `MC-SPEC-IdentidadeVisual-Reprodutibilidade-v1_0-2026-0514.md` (24.688 b) | `01-IDENTIDADE/` | ✅ idêntica |
| **SPEC Visual Law Paleta Jurídica** (CUNHAGEM COFOUNDER C1) | `MC-SPEC-IdentidadeVisual-VisualLaw-PaletaJuridica-v0_1-PROVISIONAL-2026-0514.md` (17.472 b) | `01-IDENTIDADE/` | ✅ idêntica |
| **Vocabulário Canônico** | `MC-CANONICO-Vocabulario-IdentidadeVisual-v1_0-2026-0513.md` (17.724 b) | `01-IDENTIDADE/vocabulario/` | ✅ idêntica |
| **ERRATA Vocabulário** (CUNHAGEM COFOUNDER C1) | `MC-CANONICO-Vocabulario-IdentidadeVisual-ERRATA-v1_0-2026-0514.md` (10.206 b) | `01-IDENTIDADE/` | ✅ idêntica |
| **Selo Oficial Identidade Visual** | `MC-CANONICO-IdentidadeVisual-SeloOficial-v1_0-2026-0513.md` (5.672 b) | `01-IDENTIDADE/` | ✅ idêntica |
| **ERRATA Selo Oficial** | `MC-CANONICO-IdentidadeVisual-SeloOficial-ERRATA-v1_0-2026-0514.md` (6.512 b) | `01-IDENTIDADE/` | ✅ idêntica |

**§principais (síntese ≤500 chars cada):**

- **Manifesto v2.0:** define Seed MC como geometria selada · "dois círculos cosmos unidos por linha de ouro fosco" · 13 seções (I Abertura → XIII Fechamento) · IV Tese filosófica (Inversão Cósmica + Provérbios 31:8) · V Paleta · VI Tipografia · VII Atmosfera · VIII Aplicações · IX Princípios invioláveis · XII Inversão em Números.
- **SPEC Técnico v2.0:** 4 Camadas Estruturais (FORMA-MATERIAL-ATMOSFERA-COMPOSIÇÃO) · §4 Paleta (preto-marrom cósmico + ouro fosco + off-white quente) · §5 Tipografia · §6 7 predicados atmosfera Seed · §7 Vetos · §8 Vetos geométricos · §9 Sistema Fractal · §11 Critérios de aprovação (teste do espelho selado + checklist 12 itens) · §13 Glossário LLM-consumable.
- **Vocabulário Canônico v1.0:** §1 Frase-âncora `TECNOLOGIA INVISÍVEL. DIGNIDADE ACESSÍVEL.` · §2 Tagline `DOIS PONTOS. UM ESPAÇO SEGURO. / TODOS OS DIREITOS. UM SÓ LUGAR.` · §3 Pilares `ACESSO / ORGANIZAÇÃO / PROTEÇÃO / SOBERANIA` · §4 Subtítulo · §7 Vocabulário sistêmico (termos cunhados).
- **SPEC Visual Law v0.1 PROVISIONAL (cofounder C1):** introduz 4ª cor canônica — **Azul Institucional Jurídico MC** `#0F2847` (primário), `#1A3358` (secundário), `#234168` (destaque) — aplicada exclusivamente a peças jurídicas (dossiês CP-MC B2B INSS/CRPS/JEF, petições, pareceres, contratos formais, carteirinha Φ₄). Conceito "Dois Registros": Institucional (preto-marrom+ouro+off-white) vs. Jurídico (+ azul). Símbolo Seed permanece ouro fosco em todos contextos. Tipografia: sans humanist + serif transitional + mono administrativo. Estrutura ASCII de dossiê em §6.1 com 5-7 elementos focados em Visual Law. §12 menciona 4 prompts B1-B4 produzidos inline pelo cofounder C1.
- **ERRATA Vocabulário v1.0 (cofounder C1):** REMOVE tagline `DOIS PONTOS. UM ESPAÇO SEGURO. / TODOS OS DIREITOS. UM SÓ LUGAR.` por risco Firewall OAB (Estatuto OAB Lei 8.906/1994 + Provimento CFOAB 205/2021). Preserva frase-âncora, pilares e razão social. §4 lista cascata retroativa: Vocabulário v1.0 (anexar callout), Selo Oficial v1.0 (verificar), Manifesto v2.0 (verificar), SPEC Visual Law v0.1 (§7 atualizar), SPEC Reprodutibilidade v1.0 (verificar), prompts B1-B4 (atualizar antes de Sister), MB-040 (URGENTE atualizar antes de Sister nascer), Pauta Juliana (verificar).

---

## §2 — DIAGNÓSTICO DE COLISÃO (T3)

Cruzamento canônicos correntes (POPs + SPECs + Manifesto + Vocabulário + Selo) × cunhagens cofounder C1 (SPEC Visual Law v0.1 + ERRATA Vocabulário v1.0):

| # | Seção/Tópico | Canônica corrente | Cunhagem cofounder C1 | Veredito |
|---|---|---|---|---|
| 1 | **Paleta cromática** | POP PARTE 2 §D.2 + Selo Oficial v1.0 (3 cores: preto-marrom + ouro + off-white) + SPEC Técnico v2.0 §4 | SPEC Visual Law v0.1 §3 (+ 4ª cor azul marinho jurídico) | ✅ **COMPLEMENTARIDADE VÁLIDA** — amplia 3→4 cores com lógica "Dois Registros" |
| 2 | **Tipografia** | POP PARTE 2 §D.3 + SPEC Técnico v2.0 §5 (sistema canônico) | SPEC Visual Law v0.1 §5 (Sans humanist Inter/Söhne + Serif Source/EB Garamond + Mono JetBrains/IBM Plex) | ⚠️ **POSSÍVEL CONFLITO** — POPs/SPEC Técnica precisam ser conferidos para ver se famílias específicas coincidem |
| 3 | **Tagline** | Vocabulário v1.0 §2 (DOIS PONTOS... + TODOS OS DIREITOS...) | ERRATA v1.0 — REMOVE por risco Firewall OAB | ✅ **CONFLITO RESOLVIDO** — ERRATA supersede §tagline v1.0 e ergue Firewall OAB §2.2 do MC |
| 4 | **Estrutura dossiê** | POP PARTE 1 §C.1-C.16 (16 componentes) + POP PARTE 3 §L (tabela Carlos) | SPEC Visual Law §6.1 ASCII (5-7 elementos focados em Visual Law) | 🔁 **REDUNDÂNCIA com complemento** — SPEC oferece view reduzida especializada em Visual Law; POPs têm view extensa CP-MC; ambas válidas em contextos diferentes |
| 5 | **Firewall OAB rodapé** | POP PARTE 1 §C.14 + POP PARTE 3 §H.1 (texto extenso canônico) | SPEC Visual Law §6.2 + ERRATA §1.5 (versão curta "Atividade-meio. Não exerce advocacia. CNAE 6202-3/00") | 🔁 **SOBREPOSIÇÃO** — duas versões: curta (rodapé recorrente) + longa (Página Firewall OAB dedicada) — ambas necessárias |
| 6 | **SIV (Selo Integridade Visual)** | POP PARTE 1 §C.13 + ADR-016 §2.2 item 5 (hash SHA-256 + timestamp ICP-Brasil + OpenTimestamps) | SPEC Visual Law: **NÃO menciona** | ❌ **LACUNA CRÍTICA na cunhagem** — gap a fechar antes de prompts B1-B4 entrarem em produção |
| 7 | **JSON-LD Camada 0 (PDF/A-2u)** | ADR-016 §2.1 + CP-MC Camada 0 | SPEC Visual Law: **NÃO menciona** | ❌ **LACUNA CRÍTICA** — cunhagem ignora ADR-016 cunhado no mesmo dia (MB-029) |
| 8 | **Sanitização E4.5 (ExifTool+qpdf+mc-pdf-audit)** | ADR-016 §2.2 + PATCH-v3_0-5 POP PARTE 2 §F.1 (sub-etapa E4.5) | SPEC Visual Law: **NÃO menciona** | ❌ **LACUNA CRÍTICA** — cunhagem ignora ADR-016 |
| 9 | **Disclosure CFOAB 001/2024** | ADR-016 §2.3 (texto canônico de disclosure de IA) + PATCH POP PARTE 1 §C.14 | SPEC Visual Law: **NÃO menciona** + ERRATA: **NÃO menciona** | ❌ **LACUNA CRÍTICA** — gap Anti-Injection em duas cunhagens cofounder C1 |
| 10 | **Marca d'água diagonal** | POPs Visual Law: **NÃO menciona explicitamente** | SPEC Visual Law §6.2 (opcional "MEU CUMPADRE — ORQUESTRAÇÃO DOCUMENTAL" diagonal 45° azul opacidade 8%) | 🆕 **AMPLIAÇÃO** — cunhagem propõe elemento novo; POPs não vetam |
| 11 | **Carteirinha Φ₄ Guardião** | POP PARTE 1/2/3: NÃO menciona detalhe visual da carteirinha | SPEC Visual Law §9.1 (escalada para Camada 3b — Registro Jurídico) | 🆕 **AMPLIAÇÃO + REFATORAÇÃO** — cunhagem corrige MB-037 Peça 8 que estava em Camada 3a |
| 12 | **Vocabulário institucional** | Vocabulário v1.0 §7 + SPEC Técnico v2.0 §5.3 (termos cunhados) | SPEC Visual Law §7 (vocabulário visual jurídico) + ERRATA (preserva núcleo) | 🔁 **REDUNDÂNCIA com complemento** — SPEC Visual Law amplia vocabulário com termos jurídicos específicos |

**Sumário:**
- ✅ Complementaridades válidas: **2** (paleta + termos vocabulário visual jurídico)
- 🆕 Ampliações: **2** (marca d'água diagonal + carteirinha Φ₄)
- 🔁 Sobreposições/redundâncias com complemento: **3** (estrutura dossiê + Firewall OAB rodapé + vocabulário)
- ⚠️ Conflitos potenciais: **1** (tipografia — requer conferência)
- ✅ Conflitos resolvidos: **1** (tagline removida via ERRATA)
- ❌ **Lacunas críticas na cunhagem cofounder C1: 4** (SIV, JSON-LD Camada 0, Sanitização E4.5, Disclosure CFOAB 001/2024) — todas decorrentes do ADR-016 cunhado no mesmo dia que a cunhagem foi produzida

---

## §3 — IMPACTO ADR-016 NOS PROMPTS B1-B4 (T4)

**ADR-016 (cunhado MB-029, 14/05/2026 ~19h BRT) — Requisitos canônicos:**

1. **Formato saída:** PDF/A-2u (ISO 19005-2 Unicode pesquisável)
2. **Camada 0 JSON-LD:** metadados estruturados embarcados para leitura institucional por IA
3. **Pipeline sanitização E4.5:** ExifTool (zerar XMP) + qpdf (regravar/linearizar) + `mc-pdf-audit` (contraste WCAG AAA 7:1 + fontes ≥8pt + ausência de zero-width chars)
4. **Disclosure CFOAB 001/2024 (§2.3 texto canônico):** declaração explícita de uso de IA na Página de Firewall OAB
5. **Proibições absolutas (§3):** fonte branca/branco, fontes <8pt, zero-width chars, XMP que vazem identificação, OCG ocultas, alt-text com instruções a LLMs, qualquer instrução direcionada a IA institucional

**Análise dos 4 prompts B1-B4 (inferidos pelos descritores em SPEC Visual Law v0.1 §12 — conteúdo integral não está no Vault; cofounder C1 produziu inline na conversa):**

| Prompt | Escopo (inferido da SPEC) | Requisito ADR-016 | Status atual | Ajuste necessário |
|---|---|---|---|---|
| **B1 — Capa Dossiê** | A4 vertical · símbolo Seed grande · título azul · campos identificação · barra ouro inferior | (1) PDF/A-2u · (2) JSON-LD com metadados cidadão + caso | Provavelmente NÃO menciona JSON-LD nem PDF/A-2u | 🔴 **REFATORAÇÃO OBRIGATÓRIA** — adicionar instrução de embedding JSON-LD Camada 0 + output PDF/A-2u |
| **B2 — Header Seção** | Azul #0F2847 UPPERCASE · barra fina azul 1.5px abaixo · DOS FATOS / DO DIREITO / DOS PEDIDOS | (5) proibições absolutas (sem zero-width, fontes ≥8pt) | Provavelmente respeita ≥8pt; zero-width não mencionado | 🟡 **REVISÃO LEVE** — incluir vedação explícita de zero-width chars no template |
| **B3 — Bloco Citação** | Borda esquerda 2px ouro · padding 12px · serif italic azul · fundo off-white · citação de lei recuada | (5) proibições · (1) PDF/A-2u (sem fontes externas) | Provavelmente OK visualmente; vedação de fontes externas precisa ser declarada | 🟡 **REVISÃO LEVE** — restringir tipografia a fontes empacotáveis (PDF/A-2u proíbe fonts externas) |
| **B4 — Rodapé** | Símbolo monocromático + dados técnicos · "MC · {data} · pág X de Y" · 8pt | (3) SIV — hash SHA-256 + timestamp + OpenTimestamps · (4) Disclosure CFOAB 001/2024 · ERRATA §1.5 Firewall OAB curto | NÃO menciona SIV · NÃO menciona Disclosure · provavelmente OK com Firewall curto | 🔴 **REFATORAÇÃO OBRIGATÓRIA URGENTE** — adicionar campo SIV + parágrafo Disclosure de IA + Firewall OAB curto (versão ERRATA §1.5) |

**Total prompts a refatorar:** **4 de 4** (2 obrigatoriamente — B1 + B4 — e 2 com revisão leve — B2 + B3).

**Nota importante:** os 4 prompts B1-B4 **não foram localizados como arquivos no Vault nem em Documentação** — vivem inline na conversa cofounder C1 (chat). Antes da refatoração, founder ou cofounder C1 precisa **persistir os prompts em arquivos canônicos** (preferencialmente `04-OPERACAO/prompts/visuallaw/` no Vault) para que o refactor seja auditável e versionável.

---

## §4 — LACUNAS MB-040 v1.0 (T5)

MB-040 v1.0 (produzido inline por cofounder C1 em 14/05 ~13h BRT para ativar Sister Claude.ai 3.2). **Não localizado como arquivo persistido** — vive inline em chat. Lacunas inferidas/confirmadas pelo briefing do MB-042:

| # | Lacuna | Status | Severidade |
|---|---|---|---|
| 1 | **POPs Visual Law PARTE 1/2/3 não mencionados** | Confirmado pelo MB-042 | 🔴 Crítica — Sister não tem mapa do corpo canônico onde vai operar |
| 2 | **ADR-016 Anti-Injection não mencionado** | Confirmado (ADR cunhado depois — MB-029 ~19h vs. MB-040 ~13h) | 🔴 Crítica — Sister precisa absorver Pilares 1+2+3 antes de iterar |
| 3 | **Manifesto v2.0 não referenciado** (presumida v1.0) | Confirmado pelo MB-042 | 🟡 Média — usa versão antiga, perde V Paleta refinada e VIII Aplicações |
| 4 | **Vocabulário Canônico v1.0 original não mencionado** (só ERRATA) | Confirmado pelo MB-042 | 🟡 Média — ERRATA pressupõe v1.0 como base; Sister precisa ler ambos |
| 5 | **Pauta Juliana referenciada como v2.4 (não v2.5)** | Confirmado (Pauta v2.5 criada por MB-029 hoje) | 🟢 Baixa — Pauta v2.5 só adiciona Bloco P; Bloco O-O11-O14 e A-N permanecem |
| 6 | **PATCH POP-VisualLaw v3.0-5 Anti-Injection não mencionado** | Inferido (criado em MB-029 hoje) | 🔴 Crítica — Sister precisa saber que POPs estão sob patch |
| 7 | **Princípios #28-#30 (Cascata · 99-ARQUIVO-Legado · Lab vs Aplicação)** | Possivelmente mencionados | 🟡 Verificar quando MB-040 for persistido |
| 8 | **Caso Galileu/Parauapebas (RADAR-Intelig)** | Não mencionado (anexo MB-029) | 🟡 Média — Sister deve operar consciente do precedente |

**Sugestão arquitetural:** dada a quantidade de lacunas (≥3 críticas), recomenda-se **v2.0 reescrita completa** em vez de PATCH v1.2 — patches de magnitude desta tendem a fragmentar a documentação institucional e dificultar a leitura pela Sister. Custo da v2.0: ~10-15 min adicionais ao cofounder C1. Benefício: MB-040 v2.0 entra em `04-OPERACAO/logs/` (ou pasta dedicada) já persistido como arquivo auditável, não inline em chat.

---

## §5 — PLANO DE HARMONIZAÇÃO — 3 NÍVEIS

### Nível 1 — Imediato (cofounder Claude.ai 3.1, próximo turno)

- [ ] **Decisão 1 — SPEC Visual Law v0.1:** veredito cofounder/founder entre:
  - (a) SUPERSEDED pelas SPECs Técnica v2.0 + Reprodutibilidade v1.0 (consolidá-las em SPEC Técnica v3.0)
  - (b) **Amplia canônicas existentes — manter standalone como SPEC especializada em Camada Cromática Jurídica** *(recomendação preliminar Code DELL — veja §6)*
  - (c) Reformular para integrar com canônicas (cria SPEC Técnica v3.0 absorvendo Visual Law)
- [ ] **Decisão 2 — ERRATA Vocabulário v1.0:** veredito entre:
  - (a) **Aplicar ao Vocabulário Canônico original — cria v1.1 com tagline removida + callout SUPERSEDED-PRE-ERRATA no v1.0** *(recomendação preliminar Code DELL — veja §6)*
  - (b) Manter ERRATA standalone como camada adicional ao v1.0 (mais granular, mais audit trail)
- [ ] **Decisão 3 — Prompts B1-B4:** persistir como arquivos no Vault antes de qualquer refactor; depois refatorar incorporando:
  - JSON-LD Camada 0 (B1)
  - Vedação zero-width chars (B2 + B3)
  - Restrição a fontes empacotáveis PDF/A-2u (B3)
  - **SIV + Disclosure CFOAB 001/2024 + Firewall OAB curto ERRATA §1.5 (B4)** *(crítico)*
- [ ] **Decisão 4 — MB-040:** **v2.0 reescrita completa** (recomendação) OU PATCH v1.2 (alternativa rápida). Incorporar: POPs v1.2/v1.3 + ADR-016 + PATCH v3.0-5 + Manifesto v2.0 + Vocabulário v1.0 + ERRATA + Pauta v2.5 + RADAR Galileu + Princípios #28-#30.

### Nível 2 — Próximo (Code DELL, MB-043 ou pós-decisões Nível 1)

- [ ] **Reconciliar dessincronização POPs Cérebro 1 × Cérebro 2** (PARTE 1 v1.2 e PARTE 3 v1.3 — delta ~564 bytes/cada). Decidir versão canônica autoritativa (provavelmente Vault) e sincronizar Doc.
- [ ] **Consolidar duplicação interna ao Vault:** SPEC Técnico v2.0 está em 2 paths (`02-ARQUITETURA/` E `02-ARQUITETURA/specs/identidade-visual/`). Manter apenas o segundo (semanticamente correto) — arquivar o primeiro.
- [ ] **Consolidar `04-OPERACAO/pops/` × `04-OPERACAO/protocolos/visuallaw/`** — decidir pasta canônica única para POPs Visual Law. Recomendação Code DELL: manter `protocolos/visuallaw/` (mais específico) e mover/arquivar `pops/` POPs duplicados.
- [ ] **Aplicar decisões Nível 1 no Vault** (sync canônicas + arquivar SUPERSEDED em `99-ARQUIVO-Legado/`).
- [ ] **Atualizar CLAUDE.md raiz Vault** com entradas para SPEC Visual Law v0.1 + ERRATA Vocabulário.
- [ ] **Criar/atualizar INDEXes:** INDEX-SPECS · INDEX-MANIFESTOS · INDEX-VOCABULARIO · INDEX-SELOS (atualmente nenhum desses INDEXes existe explicitamente — apenas INDEX-ADRS, INDEX-PAUTAS, INDEX-PATCHES, INDEX-PRINCIPIOS).
- [ ] **Persistir os 4 prompts B1-B4** em `04-OPERACAO/prompts/visuallaw/` (criar pasta) como arquivos canônicos auditáveis.

### Nível 3 — Pós-Juliana 19/05/2026

- [ ] **Selagem ADR-016 v2.0** (PROVISIONAL → SELADO) com vereditos P1-P8 do Bloco P
- [ ] **Selagem POPs Visual Law PARTE 1/2/3 v1.4** incorporando PATCH-v3_0-5 Anti-Injection (E4.5 + C.14 disclosure + KPIs novos)
- [ ] **Selagem Vocabulário Canônico v1.1** absorvendo ERRATA + callout SUPERSEDED no v1.0
- [ ] **Selagem SPEC Visual Law v1.0** absorvendo vereditos Juliana O13 + O14
- [ ] **Avaliação Manifesto v3.0** (se aplicável) incorporando aprendizados Visual Law + Anti-Injection + Cascata #28
- [ ] **Selagem MB-040 v2.0 ou v1.1 finalizada** com diretrizes Juliana

---

## §6 — RECOMENDAÇÃO COFOUNDER (Code DELL · síntese executiva)

> Esta seção é **observação do executor Cérebro 2** após sweep empírico — não substitui decisão founder + cofounder C1, mas oferece síntese para acelerar deliberação.

### Síntese (3 frases)

A SPEC Visual Law v0.1 do cofounder C1 é **ampliação válida** (não conflito) — cria 4ª cor canônica jurídica com lógica "Dois Registros" defensível e amplia paleta MC sem ferir Selo Oficial v1.0. A ERRATA Vocabulário v1.0 é **correção institucional importante** (Firewall OAB) e deve ser absorvida no Vocabulário Canônico original criando v1.1. O risco real **não está nas duas cunhagens em si — está nas 4 lacunas críticas** delas frente ao ADR-016 cunhado horas depois (SIV + JSON-LD Camada 0 + Sanitização E4.5 + Disclosure CFOAB) e na **falta de persistência** dos prompts B1-B4 e do MB-040 como arquivos canônicos (vivem inline em chat).

### Caminho recomendado (sequencial, mínimo desvio operacional)

**Passo A (cofounder C1 próximo turno):**
1. **Persistir** os 4 prompts B1-B4 e o MB-040 v1.0 em arquivos canônicos no Vault antes de qualquer iteração (Princípio #28 — Texto Canônico Precede Imagem aplicado a prompts e MBs também).
2. **Decidir** ERRATA Vocabulário → criar **Vocabulário Canônico v1.1** (absorvendo) + callout SUPERSEDED no v1.0 — opção (a) do Nível 1 Decisão 2.
3. **Decidir** SPEC Visual Law v0.1 → manter standalone como SPEC especializada — opção (b) do Nível 1 Decisão 1 — e referenciar como ampliação cromática da SPEC Técnica v2.0.
4. **Decidir** MB-040 → produzir **v2.0 reescrita completa** absorvendo todos os 8 elementos lacuna (especialmente POPs + ADR-016 + PATCH v3.0-5 + Pauta v2.5 + RADAR Galileu).
5. **Refatorar** prompts B1-B4 obrigatoriamente em B1 (JSON-LD Camada 0) e B4 (SIV + Disclosure + Firewall curto), revisão leve em B2 e B3.

**Passo B (Code DELL MB-043):**
6. Aplicar decisões Passo A no Vault com sync + arquivamentos + INDEXes + atualização CLAUDE.md.
7. Reconciliar dessincronização POPs PARTE 1 + PARTE 3 entre Cérebro 1 e Cérebro 2.

**Passo C (pós-Juliana 19/05):**
8. Selagens de v1.0 → v2.0 para ADR-016, POPs PARTE 1/2/3, Vocabulário, SPEC Visual Law, MB-040 conforme parecer.

### Justificativa pelos princípios

- **Princípio #1 (Inventário de Caminhos):** este relatório é o inventário cross-cerebros que faltava antes de Sister 3.2 iterar.
- **Princípio #4 (Errata absorve, não inventa):** ERRATA Vocabulário absorve risco Firewall OAB sem inventar novo posicionamento — deve fluir para v1.1 canônica.
- **Princípio #19 (Patches temporários):** PATCH v3.0-5 Anti-Injection é instrumento; absorve em POPs PARTE 1/2/3 v1.4 após Juliana 19/05.
- **Princípio #26 (Anti-Colisão Pré-Cunhagem):** o que faltou na sessão cofounder C1 13-14/05 foi precisamente este sweep prévio — o MB-042 é a aplicação corretiva desse princípio retroativamente, e este relatório é o inventário de pré-cunhagem que devia ter precedido SPEC Visual Law v0.1.
- **Princípio #28 (Texto Canônico Precede Imagem):** Sister 3.2 não deve iterar B1-B4 (imagem) antes do MB-040 v2.0 estar selado (texto canônico).

### Observações complementares (não-bloqueantes mas relevantes)

- **POPs Visual Law canônicos correntes (v1.2/v1.3 de 2026-05-02) ainda não absorveram nenhuma das cunhagens 13-14/05** — paleta jurídica nova (Visual Law SPEC), proibições anti-injection (PATCH MB-029), disclosure CFOAB. Selagem v1.4 pós-Juliana incorporará tudo em peça única.
- **Não existe `INDEX-SPECS.md` no Vault** — recomenda-se criar em Nível 2 para mapear SPEC Técnica v2.0 + Reprodutibilidade v1.0 + Visual Law v0.1 + futuros.
- **`04-OPERACAO/prompts/`** não existe — necessário criar para persistir B1-B4 + futuros prompts canônicos (camada operacional separada de POPs e SPECs).

---

## §7 — ANEXOS

### §7.1 — Hash SHA-256 deste relatório
A ser calculado após persistência (mesmo turno).

### §7.2 — Referências cruzadas

- ADR-016 v1.0 PROVISIONAL: [[../adrs/MC-ADR-016-ComplianceDocumental-AntiInjection-v1_0-2026-0514]]
- PATCH POP-VisualLaw v3.0-5: [[../../03-GOVERNANCA/patches/MC-PATCH-MEMO-v3_0-5-POPVisualLaw-AntiInjection-2026-0514]]
- RADAR Galileu/Parauapebas: [[../../02-ARQUITETURA/inteligencia-setorial/MC-RADAR-Galileu-AntiInjection-Caso-TRT8-Parauapebas-v1_0-2026-0514]]
- MEMO Sessão MB-029: [[MC-MEMO-Sessao-MB029-AntiInjection-14mai2026-v1_0]]
- Pauta Juliana v2.5: [[../../03-GOVERNANCA/pautas/MC-PAUTA-Juliana-v2_5-2026-0514]]
- SPEC Visual Law v0.1: [[../../01-IDENTIDADE/MC-SPEC-IdentidadeVisual-VisualLaw-PaletaJuridica-v0_1-PROVISIONAL-2026-0514]]
- ERRATA Vocabulário v1.0: [[../../01-IDENTIDADE/MC-CANONICO-Vocabulario-IdentidadeVisual-ERRATA-v1_0-2026-0514]]
- Vocabulário Canônico v1.0: [[../../01-IDENTIDADE/vocabulario/MC-CANONICO-Vocabulario-IdentidadeVisual-v1_0-2026-0513]]
- Manifesto Identidade Visual v2.0: [[../../05-ESTRATEGIA/manifestos/MC-MANIFESTO-IdentidadeVisual-v2_0-2026-0513]]
- SPEC Técnico v2.0: [[../../02-ARQUITETURA/specs/identidade-visual/MC-SPEC-IdentidadeVisual-Tecnico-v2_0-2026-0513]]
- SPEC Reprodutibilidade v1.0: [[../../01-IDENTIDADE/MC-SPEC-IdentidadeVisual-Reprodutibilidade-v1_0-2026-0514]]
- Selo Oficial v1.0: [[../../01-IDENTIDADE/MC-CANONICO-IdentidadeVisual-SeloOficial-v1_0-2026-0513]]
- ERRATA Selo Oficial v1.0: [[../../01-IDENTIDADE/MC-CANONICO-IdentidadeVisual-SeloOficial-ERRATA-v1_0-2026-0514]]
- POPs canônicos: `04-OPERACAO/protocolos/visuallaw/MC-POP-VisualLaw-DossieSelado-PARTE{1v1_2|2v1_3|3v1_3}-2026-0502.md`

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Âncora bíblica:** Provérbios 31:8 — "Abre a tua boca a favor do mudo."
**Confidência founder:** "É eu e tu."

∞
