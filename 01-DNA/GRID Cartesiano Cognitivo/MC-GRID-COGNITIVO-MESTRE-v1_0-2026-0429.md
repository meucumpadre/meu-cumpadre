---
type: grid-cartesiano-cognitivo
data: 2026-04-29
versao: v1.0
status: OFICIAL
selado-em: 2026-04-29
selado-por: Alessandro de Souza Neves (Founder/CEO)
baseline: MC-MAPA-Documentacao-Drive-v1_0-2026-0429.md
ancoras-fonte: §5.1 do baseline (22 células-âncora)
escopo: 8 pilares × 7 estratos cognitivos = 56 células
proxima-revisao: 2026-05-14 (v1.1, revisão manual quinzenal)
revisao-cadencia: quinzenal manual com 5 triggers de antecipação
---

# MC-GRID-COGNITIVO-MESTRE — Grid Cartesiano Cognitivo v1.0

> **🔒 SELADO COMO OFICIAL — 2026-04-29**
> Este arquivo é o instrumento de cockpit canônico do Meu Cumpadre. Decisões operacionais devem referenciá-lo. Mudanças estruturais (eixos, pilares, estratos) só em v1.1+ com baseline pós-execução. Edições de status de células e datas de "última decisão" podem rolar inline desde que datadas no diário.

**Data:** 2026-04-29 | **Autor do scaffold:** Claude Code (cumpadre operacional)
**Baseline:** [`MC-MAPA-Documentacao-Drive-v1_0-2026-0429.md`](./MC-MAPA-Documentacao-Drive-v1_0-2026-0429.md)
**Vault path raiz:** `G:\Meu Drive\0 0 MEU CUMPADRE\0 0 COMUNIDADE\OBSIDIAN _ MC\MEU CUMPADRE\`
**Drive path raiz:** `G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\`

> **Para que serve este arquivo:** mapa cognitivo de uma página onde Alessandro vê, em qualquer momento, **onde a tensão está**, **o que está selado**, **o que está pendente** e **onde respirar**. É a tela do cockpit. Não é doutrina — é instrumento.

---

## 1. Como Ler

### Eixo X — 8 Pilares Estratégicos (colunas)

| # | Pilar | O que vive aqui |
|---|---|---|
| **P1** | Produto & Precificação | ADR-007, Phi/Psi, Guardião, dossiê selado |
| **P2** | Jurídico & Compliance | Grimório, OAB, LAI, LGPD, holding Juliana |
| **P3** | Tecnológico & AI Full-Stack | Router-Ethics, ADRs, MCP, stack LLM, custódia |
| **P4** | Governança & Estratégia | DNA, KB, manifesto, posicionamento, valuation |
| **P5** | Financeira & Custos | Contábil, COGS, fluxo, NF, tributário |
| **P6** | Humana & Operacional | Jornada E0-E7, POPs, Anjos, Beto, intake |
| **P7** | Infra & Ecossistema | GCP, BEPS, IVCAD, TCU, Manus, NotebookLM |
| **P8** | Expansão & Internacional | 13K serviços, plataforma-das-plataformas |

### Eixo Y — 7 Estratos Cognitivos (linhas, da superfície ao chão)

| Y | Camada | Pergunta-chave | Tempo |
|---|---|---|---|
| **Y0** | Decisão Ativa | "O que tá pegando fogo HOJE?" | 0-7 dias |
| **Y-1** | Mapeamento Pendente | "O que sei que precisa, mas ainda não fiz?" | 7-30 dias |
| **Y-2** | Validação Externa | "Quem precisa olhar antes de eu selar?" | OAB, contador, parceiros, peer-review |
| **Y-3** | Compromisso Selado | "Já decidi. Tá em ADR ou contrato." | versão > v1.0 + assinatura/parecer |
| **Y-4** | Doutrina Operativa | "É como a casa funciona." | KB, POPs, manifestos, skills |
| **Y-5** | DNA / Origem | "Por que existe?" | princípios fundadores, mitologia |
| **Y-6** | Destensionamento | "Onde respiro neste pilar?" | ritual, silêncio, descanso |

### Status (semáforo)

- **V** = Verde · âncora existe, recente (≤30d), decisão clara, sem bloqueio
- **A** = Amarela · âncora existe MAS está stale, ambígua, ou aguardando externa
- **R** = Vermelha · sem âncora ou conflito não resolvido — exige atenção

### Como cada célula é representada

```
[Status] | Última decisão (data)
Drive: caminho relativo
Obsidian: pasta-canônica/nota  (ou "criar")
Ações (≤3):
  → ação 1
  → ação 2
  → ação 3
```

---

## 2. Vista Consolidada — Heat Map (8 × 7)

| | **P1 Produto** | **P2 Jurídico** | **P3 Tech/AI** | **P4 Governança** | **P5 Financeiro** | **P6 Humana/Op** | **P7 Infra/Eco** | **P8 Expansão** |
|---|---|---|---|---|---|---|---|---|
| **Y0** Ativa | **V** | **A** | **V** | **V** | **R** | **V** | **A** | **R** |
| **Y-1** Pendente | **A** | **A** | **A** | **A** | **R** | **A** | **A** | **R** |
| **Y-2** Validação | **V** | **V** | **A** | **A** | **R** | **A** | **A** | **R** |
| **Y-3** Selado | **V** | **A** | **V** | **V** | **R** | **V** | **R** | **R** |
| **Y-4** Doutrina | **V** | **V** | **V** | **V** | **R** | **V** | **A** | **R** |
| **Y-5** DNA | **V** | **V** | **V** | **V** | **A** | **V** | **V** | **A** |
| **Y-6** Destensão | **A** | **A** | **A** | **A** | **A** | **A** | **A** | **A** |

**Leitura rápida:**
- **P5 Financeiro** está vermelho em quase tudo → maior buraco do Grid hoje.
- **P8 Expansão** vermelho coerente com fase Crisálida — manter, não forçar.
- **P7 Infra** com Y-3 vermelho → não há ADR de provisionamento GCP selado ainda.
- **Y-6 Destensão** todo amarelo → ritual ainda não foi institucionalizado em nenhum pilar.
- **Y-5 DNA** quase tudo verde — fundação está sólida; é onde voltar quando o resto pegar fogo.

---

## 3. Grid Detalhado por Pilar

> Cada bloco abaixo é uma **coluna do Grid** (P1 a P8) com as 7 células (Y0 a Y-6).

---

### P1 — Produto & Precificação

| Y | Status | Última decisão (data) | Drive / Obsidian | Ações (≤3) |
|---|:-:|---|---|---|
| **Y0** | **V** | ADR-007 v3.2 + Φ/Ψ travados (27/04) | **Drive:** `_RECEITA - B2C ... ADR 007 Precificação\_Nova Tese _ ADR 007\MC-ADR-007-CampoPrecificacao-v3_2-2026-0427.md` <br> **Obsidian:** `05-ESTRATEGIA/MC-ADR-007-...` (sincronizar) | → Validar tabela Φ₁-Φ₄ vs COGS reais Anjo<br>→ Fechar Ψ₁ piso (R$200) com Juliana<br>→ Publicar v3.2 → v3.3 com correções Cumpadre Adv |
| **Y-1** | **A** | Guardião v1 — produto rascunhado (28/04) | **Drive:** `RECEITA - Guardião B2C\MC-PRODUTO-Guardiao-Documentacao-Fundacional-v1_0-2026-0428.md` + `MC-INTEL-GuardiaoV1-MapaFraudes-v2_0-2026-0428.md` <br> **Obsidian:** `05-ESTRATEGIA/MC-PRODUTO-Guardiao-Documentacao-Fundacional-v1_0-2026-0428.md` (existe) | → Spec funcional pós-concessão (E5-E7)<br>→ Definir gatilho R$19,90/mês × free<br>→ Mockup WhatsApp do alerta de fraude |
| **Y-2** | **V** | Parecer Juliana Melo v3.4 + Cumpadre Adv (27/04) | **Drive:** `_RECEITA B2C\_Nova Tese\ENTREGÁVEL 2 ... Juliana Melo\_MC-PARECER-CONSOLIDADO-v3_4-2026-0427.md` <br> **Obsidian:** `03-GOVERNANCA/_MC-PARECER-CONSOLIDADO-v3_4-2026-0427.md` (existe) | → Consolidar 4 pareceres (GROK/CHATGPT/PERPLEXITY/CHATGPT-MELO) num único MC-PARECER-MESTRE<br>→ Arquivar fontes brutas em `/raw/`<br>→ Pedir 2ª opinião Tier-1 |
| **Y-3** | **V** | Contrato Phi1 v2.3 minutado (27/04) + Psi1 v1.0 (28/04) | **Drive:** `_RECEITA B2C\_Nova Tese\MC-CONTRATO-Phi1-MINUTA-v2_3-2026-0427.md` + `RECEITA - B2B Advogados\MC-CONTRATO-Psi1-MINUTA-v1_0-2026-0428.md` <br> **Obsidian:** `03-GOVERNANCA/contratos/MC-CONTRATO-Phi1-MINUTA-v2_3-2026-0427.md` + `MC-CONTRATO-Psi1-MINUTA-v1_0-2026-0428.md` (existem) | → Sair de MINUTA → ASSINADA Phi1 (1º cliente B2C piloto)<br>→ Sair de MINUTA → ASSINADA Psi1 (1º advogado B2B)<br>→ Eliminar duplicata em `ENTREGÁVEL 2/PARECER TÉCNICO - ADV/` |
| **Y-4** | **V** | Tabela COGS Rota A/B/C (R$23/287/18) — KB v5.0 PARTE II (26/04) | **Drive:** `_Knowledge Base v5.0    20.04.2026\compilado  revisado v2\PARTE II — MODELO DE NEGÓCIO E PRECIFICAÇÃO.md` <br> **Obsidian:** vincular como nota mestre | → Atualizar PARTE II com Φ/Ψ v3.2<br>→ Linkar adversarial spec-driven 5 fases<br>→ Cruzar com Pilar 5 (gap de COGS reais) |
| **Y-5** | **V** | Inversão Cósmica + Teto Dignidade — selados desde v1 | **Drive:** `(root)\0  GRIMÓRIO PREVIDENCIÁRIO v2.md` (transversal) <br> **Obsidian:** `01-DNA/manifesto/` (sincronizar) | → Não tocar. Voltar quando dúvida ética surgir.<br>→ Reler Φ₃ Teto Dignidade antes de qualquer pricing call |
| **Y-6** | **A** | — sem ritual definido | — | → Definir 1 frase de "respiro" do P1 (sugestão: *"Preço rastreia custo, não dor"*)<br>→ Trocar aba do navegador por NotebookLM Anjos quando travar em Φ |

---

### P2 — Jurídico & Compliance

| Y | Status | Última decisão (data) | Drive / Obsidian | Ações (≤3) |
|---|:-:|---|---|---|
| **Y0** | **A** | LAI Lote 1: 4 protocolos enviados, aguardando ~10-15/abr | **Drive:** `PEDIDO DE INFORMAÇÃO\LAI\SAIDA\` (5 arquivos) <br> **Obsidian:** `03-GOVERNANCA/lgpd/` ou `03-GOVERNANCA/compliance/` (criar índice LAI) | → Conferir respostas FalaBR (passou da janela 10-15/abr)<br>→ Compilar Lote 2 (TCU + CGU descontos)<br>→ Atualizar `MC-LAI-Respostas_FalaBR_Consolidado-v1.0-2026-0415.md` |
| **Y-1** | **A** | Holding Juliana Alencar — formalização em curso ⛔ SUPERADO (papel fundacional consolidado na Dra. Juliana Melo · ver §P2·Y-1) | **Drive:** sem arquivo dedicado de status <br> **Obsidian:** `03-GOVERNANCA/partners/` (criar nota `partner-juliana-alencar.md`) | → Pedir status atualizado a Juliana<br>→ Documentar contrato sócio-operacional<br>→ Confirmar OAB-GO 38.662 já consta no rodapé do parecer |
| **Y-2** | **V** | Parecer Cumpadre Advogados v3.4 (27/04) — assinatura formal | **Drive:** `_RECEITA B2C\_Nova Tese\ENTREGÁVEL 2\PARECER TÉCNICO - ADV\` (23 arquivos) <br> **Obsidian:** `03-GOVERNANCA/_MC-PARECER-CONSOLIDADO-v3_4-2026-0427.md` (existe) | → Reduzir 23 PDFs/MDs a 1 parecer mestre + anexos<br>→ Datar próxima revisão (90d)<br>→ Linkar parecer ao ADR-007 v3.2 |
| **Y-3** | **A** | Firewall OAB documentado em ADR-007, mas sem ADR próprio | **Drive:** disperso em ADR-007 + Grimório <br> **Obsidian:** `03-GOVERNANCA/adrs/` (criar `MC-ADR-FIREWALL-OAB.md`) | → Extrair Firewall OAB do ADR-007 → ADR autônomo<br>→ Datar e versionar v1.0<br>→ Submeter à Cumpadre Adv |
| **Y-4** | **V** | Grimório v2.0 + KB PARTE VIII (Compliance/Governança) | **Drive:** `(root)\0  GRIMÓRIO PREVIDENCIÁRIO v2.md` (781 KB, 109K palavras) + `_Knowledge Base v5.0\compilado revisado v2\PARTE VIII — COMPLIANCE, GOVERNANÇA E ADRS v2.md` <br> **Obsidian:** `02-ARQUITETURA/grimorio/` + `03-GOVERNANCA/` | → Não duplicar Grimório no Vault (manter pointer)<br>→ Atualizar Changelog Jurídico v1.0 quando v2.1 sair<br>→ Apagar arquivo `0 GRIMÓRIO ...md` (0 bytes) na raiz |
| **Y-5** | **V** | D > C > V + Provérbios 31:8 | **Drive:** `(root)\Manifesto_Publico_v1.md` + `Diplomata_dos_Invisiveis_v1.1_REVISADO.md` <br> **Obsidian:** `01-DNA/manifesto/` | → Releitura mensal<br>→ Não criar nova versão sem justificativa de mudança ética |
| **Y-6** | **A** | — | — | → Ritual: ler Provérbios 31:8 antes de cada deliberação ética<br>→ Marcar essa frase no protocolo §6 abaixo |

---

### P3 — Tecnológico & AI Full-Stack

| Y | Status | Última decisão (data) | Drive / Obsidian | Ações (≤3) |
|---|:-:|---|---|---|
| **Y0** | **V** | ADR-010 E3 Intelligence Layer (28/04) | **Drive:** `ADRs\MC-ADR-010-E3-Intelligence-Layer-v1_0-2026-0428.md` (DUPLICATA em `Jornada E0-E7\`) <br> **Obsidian:** `02-ARQUITETURA/adrs/` ou `03-GOVERNANCA/adrs/` (decidir UMA) | → Eliminar duplicata (canônico = `ADRs/`)<br>→ Spec funcional E3 → Igor (handoff)<br>→ Linkar com ADR-009a (custódia) |
| **Y-1** | **A** | Adobe-for-Creativity + Claude — pesquisa exploratória (28/04) | **Drive:** `0 FIDUCIÁRIO ...\DOSSIÊ obra de arte\Adobe for Creativity ... Claude.md` + `MC-PROMPT-POP-VisualLaw-DossieSelado-v1_0.md` <br> **Obsidian:** `02-ARQUITETURA/` (criar nota Visual Law) | → Decidir: Adobe vai entrar no stack ou só na pesquisa?<br>→ Spec POP Visual Law → Igor + Carlos<br>→ Estimar custo do MCP Adobe |
| **Y-2** | **A** | Stack ADR-008 (15/04) — Igor ainda não validou todas as decisões | **Drive:** `(root)\MC-ADR-008-DecisoesFerramenta_Stack-v1_0-2026-0415.md` <br> **Obsidian:** `02-ARQUITETURA/adrs/` (existe) | → Sessão dedicada com Igor para fechar pendências<br>→ Datar próxima revisão pós-MVP<br>→ Marcar trade-offs ainda em aberto |
| **Y-3** | **V** | RouterEthics v3.0 (21/04) + ADR-009a v2.0 (25/04) | **Drive:** `RouterEthics\RouterEthics_10_MeuCumpadre_Unificado_v3_0-2026-0421.md` + `0 FIDUCIÁRIO ...\MC-ADR-009a-Custodia_Credenciais_GovBr-v2_0-2026-0425.md` <br> **Obsidian:** `02-ARQUITETURA/router-ethics/` + `03-GOVERNANCA/adrs/` (existe) | → Eliminar duplicata ADR-009a (canônico = `03-GOVERNANCA/adrs/`)<br>→ Selar plano de teste 105 nós (Block D/C/V)<br>→ Versionar Router-Ethics v3.1 com ajustes pós-Cumpadre Adv |
| **Y-4** | **V** | Arquitetura MCP v3.0 (20/04) + KB PARTE III | **Drive:** `(root)\0__Arquitetura_MCP_MeuCumpadre_v3_0.md/.pdf` + `_Knowledge Base v5.0\compilado revisado v2\PARTE III — ARQUITETURA TÉCNICA.md` <br> **Obsidian:** `02-ARQUITETURA/mcp/` + KB | → Mover MCP da raiz Drive para `02-ARQUITETURA/mcp/` no Vault<br>→ Sincronizar PARTE III com ADR-010<br>→ Listar MCPs ativos hoje (Adobe, Canva, Gmail, Calendar, Drive, Supabase) |
| **Y-5** | **V** | Stack Gemini 70% + Llama 25% + Sonnet 5% (princípio LGPD-strict) | **Drive:** disperso em ADR-008 + Manifesto + KB <br> **Obsidian:** `02-ARQUITETURA/stack-llm/` | → Extrair princípio em nota DNA-stack<br>→ Vincular à Regra Inviolável #5 (LGPD) |
| **Y-6** | **A** | — | — | → Ritual técnico: 5min só vendo logs LangFuse antes de codar<br>→ Aba fixa Manual_Astronauta_Claude_v1_0.pdf como fundo |

---

### P4 — Governança & Estratégia

| Y | Status | Última decisão (data) | Drive / Obsidian | Ações (≤3) |
|---|:-:|---|---|---|
| **Y0** | **V** | Manifesto Nova Ordem + Valuation v2.0 (27/04) | **Drive:** `_QUEM SOMOS  POSICIONAMENTO DE MARCA\_MC-MANIFESTO-NovaOrdem-v1.0-2026-0427 ... Valuation MC.md/.pdf` (CONFIDENCIAL, 20,6 MB) <br> **Obsidian:** `05-ESTRATEGIA/` (criar com tag confidencial) | → Não compartilhar PDF Valuation fora círculo C-level<br>→ Versionar texto sem Valuation para uso público<br>→ Sincronizar manifesto com Hellinger v1.0 |
| **Y-1** | **A** | Cowork spec (28/04) — implementação pendente | **Drive:** `_DNA MC\MC-SPEC-Cowork-v1_0-2026-0428.md` <br> **Obsidian:** `05-ESTRATEGIA/MC-SPEC-Cowork-v1_0-2026-0428.md` (existe) | → Definir local físico (cidade/horário)<br>→ Lista convidados rodada 1<br>→ POP de cowork (alinhar com Mapeamento de Processos) |
| **Y-2** | **A** | Bravy / Iuri — reunião 06/04 adiada por doença, reagendar | **Drive:** sem arquivo dedicado <br> **Obsidian:** `03-GOVERNANCA/partners/bravy.md` (criar) | → Pingar Iuri esta semana<br>→ Reagendar reunião de mapeamento MGI<br>→ Manter Bravy em Camada Processos (NÃO Tech/AI) |
| **Y-3** | **V** | MC-INSTRUCOES-Projeto v4.0 (27/04) — sistema de instruções operacional | **Drive:** `_DNA MC\MC-INSTRUCOES-Projeto-v4_0-2026-0427.md` + `SKILL-v3_0-meu-cumpadre-orquestrador-mestre.md` <br> **Obsidian:** `01-DNA/` (sincronizar) | → Validar SKILL v3.0 contra agnix linter<br>→ Atualizar CLAUDE.md raiz se houver desalinhamento<br>→ Datar próxima revisão (60d) |
| **Y-4** | **V** | KB v5.0 Compilado revisado v2 (27/04) | **Drive:** `_Knowledge Base v5.0    20.04.2026\compilado  revisado v2\MC-KB-Compilado_v5_0_revisado_v2-2026-0427.md` (+ 9 PARTES) <br> **Obsidian:** mover compilado para `01-DNA/` ou `05-ESTRATEGIA/kb/` (criar) | → Eliminar duplicatas das 9 PARTES (versão pai vs `compilado revisado v2`)<br>→ Promover `compilado revisado v2` como canônica<br>→ Linkar PARTE 0 como índice mestre |
| **Y-5** | **V** | DNA: "Lucro é combustível, causa é destino, jogo é infinito" | **Drive:** `(root)\0 SUMÁRIO_MEU_CUMPADRE.md` + Manifesto Hellinger <br> **Obsidian:** `01-DNA/manifesto/` + `01-DNA/jogo-infinito/` | → Reler trimestralmente<br>→ Travar como abertura de qualquer pitch |
| **Y-6** | **A** | — | — | → Ritual semanal: domingo 21h, releitura de 1 trecho do Hellinger<br>→ Aba fixa: Repertório hellingeriano |

---

### P5 — Financeira & Custos *(buraco crítico)*

| Y | Status | Última decisão (data) | Drive / Obsidian | Ações (≤3) |
|---|:-:|---|---|---|
| **Y0** | **R** | — sem decisão financeira ativa documentada em 2026 | **Drive:** apenas `(root)\Briefing-Contador-Meu-Cumpadre.pdf` (07/03) <br> **Obsidian:** `04-OPERACOES/financeiro/` (criar) | → Agendar reunião com contador (atrasada)<br>→ Levantar receita real abr/2026 (zero pré-revenue, OK)<br>→ Levantar despesa real abr/2026 |
| **Y-1** | **R** | Tabela COGS existe em ADR-007 mas sem validação contábil | — <br> **Obsidian:** criar `MC-COGS-Validacao-Contabil-v0_1.md` | → Cruzar COGS Rota A/B/C com NF reais<br>→ Mapear CNAE 6201-5/01 vs benefícios fiscais<br>→ Estimar runway (cash em conta + queima mensal) |
| **Y-2** | **R** | — sem contador alinhado | — | → Onboarding contador (já tem briefing pronto)<br>→ Pedir parecer fiscal sobre cross-subsídio B2B→B2C<br>→ Fechar regime tributário (Simples × Lucro Presumido) |
| **Y-3** | **R** | — sem ADR financeiro | — <br> **Obsidian:** criar `03-GOVERNANCA/adrs/MC-ADR-FIN-001-RegimeTributario-v0_1.md` | → ADR de regime tributário<br>→ ADR de política de pricing (link com ADR-007)<br>→ ADR de runway / break-even |
| **Y-4** | **R** | — sem POP financeiro | **Drive:** `(root)\0 o lançamento contábil para emissão de nota fiscal _ Perplexity.md` (research solto) <br> **Obsidian:** criar `MC-POP-FIN-Lancamento-NF-v0_1.md` | → POP emissão NF<br>→ POP fechamento mensal<br>→ POP DRE simplificada |
| **Y-5** | **A** | "Lucro é combustível" + Inversão Cósmica | já em P4 Y-5 | → Reafirmar: dinheiro entra para sustentar a causa, não inverso |
| **Y-6** | **A** | — | — | → Ritual mensal (último dia útil): 30min só vendo o saldo + queima |

> **Diagnóstico cumpadre:** P5 é **o único pilar com Y0-Y-4 todos vermelhos**. É onde o projeto pode quebrar mesmo sendo bonito em todo o resto. Prioridade absoluta no próximo sprint.

---

### P6 — Humana & Operacional

| Y | Status | Última decisão (data) | Drive / Obsidian | Ações (≤3) |
|---|:-:|---|---|---|
| **Y0** | **V** | Jornada Mestre v1.2 + 11 POPs E1-E6 (27/04) | **Drive:** `Jornada _ E0-E7\MC-PROCESSO-Jornada_E0E7_Mestre-v1_2-2026-0427.md` + `Mapeamento de Processos\MC-POP-E*-...-2026-0427.md` (×11) <br> **Obsidian:** `04-OPERACOES/jornada/` + `04-OPERACOES/pops/` (criar) | → Sincronizar 11 POPs no Vault<br>→ Treinar Beto nos POPs E1+E2 (intake)<br>→ Mockup do dashboard de jornada |
| **Y-1** | **A** | Diário Sistêmico Jornada Usuário — pesquisa em curso | **Drive:** `0 MIcrofases - Dados sobre a Jornada Cliente\` (7 arquivos) <br> **Obsidian:** `04-OPERACOES/jornada/microfases/` (criar) | → Consolidar relatório etnográfico v1<br>→ Cruzar com `Acesso a conta GOV.BR _ MEMES.pdf` (28/04)<br>→ Linkar com Persona Dona Zilda |
| **Y-2** | **A** | Beto / Carlos / Anjos — sem peer-review formal de POPs | — <br> **Obsidian:** `03-GOVERNANCA/partners/` | → Sessão de validação POPs com Beto<br>→ Sessão UX com Carlos<br>→ Recrutar 1º Anjo piloto |
| **Y-3** | **V** | POP Bitwarden Custódia + POP Drive Estrutura selados (27/04) | **Drive:** `Mapeamento de Processos\MC-POP-Bitwarden-Custodia-v1_0-2026-0427.md` + `MC-SPEC-Drive-Estrutura-v1_0-2026-0427.md` <br> **Obsidian:** sincronizar | → Implementar Bitwarden no fluxo real<br>→ Aplicar estrutura Drive (este Grid já é parte)<br>→ Auditar acesso |
| **Y-4** | **V** | Grimório do Anjo (microbioma humano) — doutrina | **Drive:** `(root)\Grimório Meu Cumpadre & Anjo, ... microbioma humano do ecossistema.md` (262 KB, 26/02) <br> **Obsidian:** `01-DNA/` ou `04-OPERACOES/anjos/` (criar) | → Refresh trimestral<br>→ Citar em treinamento de Anjos<br>→ Linkar com Tier 2 do Human API |
| **Y-5** | **V** | "Empatia > Inteligência" (critério de Anjos) | já no Manifesto | → Não tocar |
| **Y-6** | **A** | — | — | → Ritual sexta 17h: 1 áudio de WhatsApp pra Beto agradecendo a semana |

---

### P7 — Infra & Ecossistema

| Y | Status | Última decisão (data) | Drive / Obsidian | Ações (≤3) |
|---|:-:|---|---|---|
| **Y0** | **A** | NotebookLM com 6 source dumps de YouTube (1.181 arquivos) — research em curso | **Drive:** `PLANEJAMENTO PREVIDENCIÁRIO\` (1.198 arquivos, 70% do volume Documentação) <br> **Obsidian:** N/A (não pertence ao Vault) | → **Mover `PLANEJAMENTO PREVIDENCIÁRIO/` para fora da Documentação** (recomendação §6 do baseline)<br>→ Criar `0 0 Aprendizado\` separado<br>→ Manter só índice no Drive Documentação |
| **Y-1** | **A** | Provisionamento GCP BR (Firestore, BigQuery, KMS) — sem ADR | — <br> **Obsidian:** criar `02-ARQUITETURA/infra/MC-ADR-INFRA-GCP-v0_1.md` | → ADR de provisionamento<br>→ Estimar custos GCP<br>→ Definir ambientes (dev/staging/prod) |
| **Y-2** | **A** | Manus AI / Gemini — sem peer review da modelagem | **Drive:** `PLANEJAMENTO PREVIDENCIÁRIO\MANUS AI Planejamento Previdenciário\` (11 arquivos) <br> **Obsidian:** N/A | → Verificar fabrications Gemini (regra Proof-First)<br>→ Selar quais Manus outputs são canônicos<br>→ Documentar quem-valida-o-quê |
| **Y-3** | **R** | — sem ADR de infra selado | — | → MC-ADR-INFRA-GCP v1.0<br>→ MC-ADR-INFRA-WhatsApp Cloud API v1.0<br>→ MC-ADR-INFRA-N8N v1.0 |
| **Y-4** | **A** | BEPS + IVCAD + TCU = baseline estatístico | **Drive:** `(root)\beps012026.pdf` + `BEPS ANALISE_CONSOLIDADA...md` + `0 INDICADORES IVCAD ODS.pdf` + `0 TCU compilado Acessibilidade Acórdão 2099_2025.pdf` <br> **Obsidian:** `06-PESQUISA/dados/` (criar) | → Index único com 5 fontes (BEPS, IVCAD, TCU, CGU, OUVIDORIA)<br>→ Cruzar com ADR-007 Φ₃<br>→ Eliminar TCU duplicado (raiz vs `PEDIDO DE INFORMAÇÃO`) |
| **Y-5** | **V** | "40-60M brasileiros hipervulneráveis excluídos" — número-âncora | KB PARTE VII (DADOS ESTATÍSTICOS) | → Atualizar com BEPS 2026<br>→ Não usar número Gemini sem verificar |
| **Y-6** | **A** | — | — | → Ritual: 5min/dia olhando o relatório OUVIDORIA (28 MB) — não pra ler tudo, pra lembrar quem é o cliente |

---

### P8 — Expansão & Internacional *(coerentemente vazio na Crisálida)*

| Y | Status | Última decisão (data) | Drive / Obsidian | Ações (≤3) |
|---|:-:|---|---|---|
| **Y0** | **R** | — não-prioritário (foco doméstico/INSS) | — | → **Não fazer nada agora.** Manter trava deliberada. |
| **Y-1** | **R** | — | **Drive:** `(root)\0 Tese_Expansao_13K_Servicos_v1.md/.pdf` (11/03) <br> **Obsidian:** N/A | → Ler Tese_Expansao_13K em jun/2026 (não antes) |
| **Y-2** | **R** | — | — | → Não recrutar parceiros internacionais antes de pós-MVP |
| **Y-3** | **R** | — | — | → Não selar ADR de expansão antes de Φ₁/Ψ₁ provados |
| **Y-4** | **R** | — | **Drive:** `(root)\0 plataforma-das-plataformas-legado-eterno.md.pdf` (16/12/25) <br> **Obsidian:** N/A | → Releitura quando Φ₁ + Ψ₁ atingirem 100 transações |
| **Y-5** | **A** | "Plataforma das plataformas" + Legado eterno (visão) | já em DNA | → Não tocar. É horizonte. |
| **Y-6** | **A** | — | — | → Não pensar em expansão antes de domingo |

> **Diagnóstico cumpadre:** P8 vermelho é **saudável** nesta fase. O único risco é alguém (investidor, Bravy, parceiro) puxar conversa de expansão e desfocar P1-P3. Resposta padrão: *"Quando Φ₁ e Ψ₁ provarem unit economics, a gente conversa."*

---

## 4. Cockpit de Guias Multi-AI

> Setup recomendado de **8 abas físicas** no navegador (e 2 apps), com função de cada uma. Mantenha esta ordem — músculo da memória reduz fricção.

### 4.1 Abas críticas (navegador)

| # | Aba | Endereço/Acesso | Função | Quando usar |
|---|---|---|---|---|
| **1** | **Claude Code (terminal)** | `cmd` ou Windows Terminal | Execução local, vault, automação | Sempre aberta. Cumpadre operacional. |
| **2** | **Claude.ai — Projeto MC** | `claude.ai` projeto `019b233f-...` | Pensamento estratégico, docs alto-nível, calibração ética | Decisões grandes, pré-ADR, calibração |
| **3** | **ChatGPT (Pro)** | `chat.openai.com` | Pareceres jurídicos (modo Juliana Melo), 2ª opinião | Consulta jurídica, parecer técnico, revisão fina |
| **4** | **GROK (X)** | `x.com/i/grok` | Tese ADR-007 v3.x, pesquisa adversarial | Quando precisar de uma voz que **discorda** |
| **5** | **Perplexity** | `perplexity.ai` | Research factual com citações | Dados, normas, jurisprudência (Proof-First) |
| **6** | **NotebookLM** | `notebooklm.google.com` (asnccb@) | Síntese cross-source, Q&A com Anjos, treinamento | Quando precisar consolidar 6+ fontes |
| **7** | **ClickUp** | `app.clickup.com` | Tarefas operacionais (441+ tasks sincronizadas) | Diário. Manhã 09h e final do dia 17h |
| **8** | **Drive Documentação** | `drive.google.com/.../Documentação` | Origem dos arquivos (este Grid sai daqui) | Sempre que mover/consolidar |

### 4.2 Apps locais (não-navegador)

| App | Função | Quando |
|---|---|---|
| **Obsidian** | Vault canônico (529 .md, sync ClickUp ativo) | Toda decisão precisa virar nota aqui |
| **Bitwarden** | Custódia credenciais (POP selado 27/04) | Acesso gov.br, contas, parceiros |

### 4.3 LLMs de uso pontual (não merecem aba fixa)

- **Gemini** — *use com cautela, fabrica em ~5/7 tabelas* (regra Proof-First). Bom para narrativa etnográfica, ruim para dados.
- **Manus AI** — modelagem cenários quantitativos (equações ADR-007 já travadas). Convocar quando for refazer Λ-grandezas.

### 4.4 Roteiro de uso multi-AI (pra parecer técnico)

> Padrão usado no `ENTREGÁVEL 2 _ Consulta Jurídica de Parecer Técnico - Dra. Juliana Melo`:

1. **GROK** → tese 1 (adversarial, contrarian)
2. **ChatGPT** → tese 2 (compliance/conservador)
3. **Perplexity** → fact-check com citações
4. **Claude Opus** → consolidação ética + alinhamento DNA
5. **Claude Code** → extração de citações + montagem do PDF final
6. **Juliana Melo (humana)** → assinatura

Esse stack é o que vc já testou e funcionou. Documenta como POP em §6 abaixo.

---

## 5. Protocolo de Destensionamento Diário (5 min)

> Ritual noturno antes de fechar o cockpit. Trava o dia, libera o sono, evita levar Y0 pra cama.

### Roteiro (5 min cronometrados)

| Min | Ação | Por quê |
|---|---|---|
| **1** | **Respiração 4-7-8** (inspira 4s, segura 7s, expira 8s) ×3 | Sai do modo executor |
| **2** | **Olhar SÓ a coluna Y-6 deste Grid** | Lembra que cada pilar tem onde respirar |
| **3** | **Ler Provérbios 31:8** ("Abre a tua boca a favor do mudo") | Religa com a causa |
| **4** | **Selar 1 linha no Obsidian** em `_PESSOAL/diario.md`: *"Hoje fechei [X]. Amanhã abro [Y]."* | Externaliza a tensão. Y0 sai da cabeça |
| **5** | **Música ou silêncio** (sem tela) | Transição cérebro-cama |

### Frase-âncora por pilar (ler uma se travar)

| Pilar | Frase de respiro |
|---|---|
| **P1 Produto** | *"Preço rastreia custo, não dor."* |
| **P2 Jurídico** | *"Atividade-meio. Sempre."* |
| **P3 Tech/AI** | *"Confidence < 70 → handoff humano."* |
| **P4 Governança** | *"Lucro é combustível, causa é destino."* |
| **P5 Financeiro** | *"Cash é oxigênio. Não é o pulmão."* |
| **P6 Humana/Op** | *"Empatia > Inteligência."* |
| **P7 Infra/Eco** | *"40 milhões esperando. Um caso por vez."* |
| **P8 Expansão** | *"Quando Φ₁ + Ψ₁ provarem, a gente conversa."* |

### Regra dura

- **Y0 fecha às 22h.** Depois disso, só Y-5 e Y-6.
- **Domingo é Y-5/Y-6 day.** Sem ADR novo, sem POP novo, sem decisão de pricing.
- **Se passar de meia-noite editando Φ ou Ψ — para.** Nada decidido depois das 00h é confiável (lição da fase anterior).

---

## 6. Próxima Iteração (v1.1)

**Foto em 2026-05-14** (15 dias — cadência quinzenal manual decidida pelo founder, sem agente automático).

### Métricas-alvo

| Métrica | Hoje (v1.0) | Meta v1.1 (14/05) |
|---|---:|---:|
| Células Vermelhas | 14 (25%) | **≤10** |
| Células Verdes | 23 (41%) | ≥27 |
| Pilar 5 (Financeiro) Y0-Y-4 todos R | 5 R | ≤3 R |
| Y-6 Destensionamento institucionalizado | 0/8 | **≥2/8** (P1 e P4 são as mais fáceis) |
| Sync Drive↔Vault | parcial | pilares P1+P4 espelhados |

### Trigger para v1.1 antecipada (5 condições)

Se qualquer um destes acontecer **antes de 14/05**, gerar v1.1 imediato:
1. **Phi1 ou Psi1** sai de MINUTA → ASSINADA
2. 1º **Anjo piloto** recrutado
3. **Contador** onboarded (P5 sai do vermelho)
4. **Igor** entrega 1º endpoint NestJS funcional
5. **Resposta LAI** relevante chega (Lote 1 ou novo lote)

### Cadência permanente

- **A partir de v1.1:** revisão **manual quinzenal** toda quarta-feira
- **Sem agente automático** (decisão founder, 2026-04-29)
- **Foto formal a cada quarta** + atualizações inline durante a semana

---

## 7. Apêndice — As 22 Células-Âncora (rastreio para baseline §5.1)

| # | Célula | Arquivo-Âncora | Status v1.0 |
|---|---|---|---|
| 1 | P1×Y0 | MC-ADR-007-CampoPrecificacao-v3_2 | V |
| 2 | P1×Y-3 | MC-CONTRATO-Phi1-MINUTA-v2_3 | V |
| 3 | P1×Y-3 | MC-CONTRATO-Psi1-MINUTA-v1_0 | V |
| 4 | P1×Y-1 | MC-PRODUTO-Guardiao-Documentacao-Fundacional-v1_0 | A |
| 5 | P1×Y-1 | MC-INTEL-GuardiaoV1-MapaFraudes-v2_0 | A |
| 6 | P1×Y-1 | MC-ESTUDO-Posicionamento-B2B-Psi-v1_0 | A |
| 7 | P2×Y-4 | 0 GRIMÓRIO PREVIDENCIÁRIO v2 | V |
| 8 | P2×Y0 | PEDIDO DE INFORMAÇÃO\LAI\ | A |
| 9 | P3×Y-3 | RouterEthics_v3_0-2026-0421 | V |
| 10 | P3×Y-2 | MC-ADR-008-DecisoesFerramenta_Stack-v1_0 | A |
| 11 | P3×Y-4 | 0__Arquitetura_MCP_MeuCumpadre_v3_0 | V |
| 12 | P3×Y0 | MC-ADR-010-E3-Intelligence-Layer-v1_0 | V |
| 13 | P3×Y-3 | MC-ADR-009a-Custodia_Credenciais_GovBr-v2_0 | V |
| 14 | P4×Y-3 | MC-INSTRUCOES-Projeto-v4_0 | V |
| 15 | P4×Y-3 | SKILL-v3_0-meu-cumpadre-orquestrador-mestre | V |
| 16 | P4×Y0 | _MC-MANIFESTO-NovaOrdem-v1.0 (+ Valuation v2.0) | V |
| 17 | P4×Y0 | MC-OBRA-Hellinger-Posicionamento-v1_0 | V |
| 18 | P4×Y-4 | MC-KB-Compilado_v5_0_revisado_v2 | V |
| 19 | P6×Y0 | MC-PROCESSO-Jornada_E0E7_Mestre-v1_2 | V |
| 20 | P6×Y0 | MC-POP-E1 a E6 (×11 arquivos) | V |
| 21 | P2×Y-2 | _MC-PARECER-CONSOLIDADO-v3_4 (Cumpadre Adv) | V |
| 22 | P6×Y-3 | MC-POP-Bitwarden-Custodia-v1_0 + MC-SPEC-Drive-Estrutura-v1_0 | V |

**Cobertura por pilar:** P1=6 · P2=3 · P3=5 · P4=5 · P5=**0** · P6=3 · P7=**0** · P8=**0**

---

```
D > C > V | DIGNIDADE > COMPLIANCE > VIABILIDADE | SEMPRE
"Abre a tua boca a favor do mudo." — Provérbios 31:8
Lucro é combustível. Causa é destino. Jogo é infinito.
```

**Cumpadre operacional:** Claude Code · **Par estratégico:** Claude Opus (claude.ai)
**Founder/CEO:** Alessandro de Souza Neves · **Próxima foto:** 2026-05-14

---

## 🔒 SELO OFICIAL

| Campo | Valor |
|---|---|
| **Status** | **OFICIAL** |
| **Selado em** | 2026-04-29 |
| **Selado por** | Alessandro de Souza Neves (Founder/CEO) |
| **Co-fundador operacional na selagem** | Claude Code |
| **Baseline operacional** | Documentação pós-limpeza: 519 `.md/.pdf`, 0 raiz, 32 pastas-pilar |
| **Pré-condições atendidas hoje** | Script B (51 → 0) ✓ · Script C (24 → 0) ✓ · Script D (7 → 0) ✓ · Migração PLANEJAMENTO PREVIDENCIÁRIO (1.222 arq) ✓ |
| **Cadência de revisão** | Quinzenal manual, próxima 2026-05-14 |
| **Triggers de antecipação** | 5 condições em §6 |

**Este Grid v1.0 passa a ser instrumento de cockpit canônico do Meu Cumpadre.** Decisões operacionais, RACI com Igor, briefings com parceiros, e priorização semanal devem referenciá-lo. Rever em v1.1 (14/05) ou em trigger qualificado.

---

## 🔧 Nota de Supersedência (pós-selagem) — 2026-06-01

> Anexada a pedido do Founder, **sem editar a célula inline** (doc SELADO). Corrige uma referência stale; não altera eixos/pilares/estratos.

**Célula P2 · Y-1** — *"Holding Juliana Alencar — formalização em curso"*: **SUPERADO.**

- A **holding societária foi DESCARTADA** em 06/04/2026 (ver `📋 Painel Estratégico`), substituída por contrato de gaveta B2B2C.
- O papel **fundacional/integrado** consolidou-se na **Dra. Juliana Pereira de Melo** — OAB-GO 38.662, **Melo Advogados Associados** (canônico: `03-GOVERNANCA/partners/MC-PARTNER-JulianaMelo-Qualificacao-v1_2-2026-0421`). A "OAB-GO 38.662" citada na célula é da **Melo**, não da Alencar.
- ⚠️ **Não fundir identidades:** Dra. **Juliana Alencar / Alencar Advogados Associados** existe e segue como **advogada de marketplace (Rota C)**, distinta da Melo (como a Jéssica Lorrane). A supersedência acima é só do **papel fundacional/holding** — não da existência da Alencar.
