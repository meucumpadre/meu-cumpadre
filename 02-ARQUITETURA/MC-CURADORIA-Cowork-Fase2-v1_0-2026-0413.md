# MC-CURADORIA-Cowork-Fase2-v1_0-2026-0413
## Arquitetura de Projetos Cowork + Lista Curada de Documentos

**Classificação:** Confidencial/Estratégico
**Data:** 13 de abril de 2026
**Autor:** Claude (co-founder intelectual)
**Status:** Aguardando validação Alessandro

---

## TESE ARQUITETURAL

### Por que 3 projetos e não 1

O Cowork tem context window finito. Projeto único com 60+ documentos
(muitos deles com 50-100K palavras) vai degradar a qualidade das
respostas — o mesmo fenômeno do CLAUDE.md >200 linhas.

A arquitetura espelha a estrutura do próprio ecossistema MC:

```
┌─────────────────────────────────────────┐
│         PROJETO 1: MC NÚCLEO            │
│    DNA · Regras · Arquitetura · Pitch   │
│    (Alessandro como estrategista)        │
└───────────────┬─────────────────────────┘
                │ orquestra
    ┌───────────┴───────────┐
    ▼                       ▼
┌──────────────────┐  ┌──────────────────┐
│ PROJETO 2:       │  │ PROJETO 3:       │
│ MC OPERAÇÕES     │  │ MC DEV           │
│ Equipe · Casos   │  │ Tech · Igor      │
│ Processos · Beto │  │ Carlos · Stack   │
└──────────────────┘  └──────────────────┘
```

Princípio: Cada projeto tem autonomia suficiente para responder
perguntas do seu domínio sem precisar dos outros.

---

## PROJETO 1: MC NÚCLEO

**Propósito:** Estratégia, identidade, decisões de alto nível,
produção de documentos institucionais, validação ética.
**Usuário principal:** Alessandro (CEO/Founder)
**Perfil de uso:** "Quem somos, o que fazemos, por que fazemos,
quais são as regras, como precificamos, como nos posicionamos"

### Documentos — Do Project Knowledge atual (já são .md/.docx)

| # | Documento | Tamanho | Função no projeto |
|---|-----------|---------|-------------------|
| 1 | Grimório Previdenciário v2.0 | 781K | Bíblia jurídica — regras, legislação, cálculos |
| 2 | RouterEthics 11.0 Unified | 30K | Spec do guardião ético |
| 3 | Manifesto Público v1 | 9K | Identidade pública |
| 4 | Diplomata dos Invisíveis v1.1 | 24K | Tese institucional |
| 5 | Knowledge Base v4 Completa | 52K | Repositório consolidado |
| 6 | ADR-007 Campo Precificação v2.0 | 25K | Modelo de receita |
| 7 | Correção Narrativa 48h Definitiva | 15K | Regra inviolável |
| 8 | Roadmap Governança v1 5 artefatos | 22K | Compliance roadmap |
| 9 | Changelog Jurídico v1.0 | 17K | Monitoramento legislativo |
| 10 | Análise BEPS/Gov.br v2 | 48K | Dados estatísticos core |
| 11 | Dossiê CPMI INSS v2.0 | 24K | Inteligência de mercado |
| 12 | Frameworks Checkin Jornada v1.0 | 18K | 75 frameworks estratégicos |
| 13 | Framework Performance CEO v1.0 | 40K | Mentalidade operacional |
| 14 | Nicho Previdenciário Oportunidades | 13K | Mapa de nichos |
| 15 | Conceito Hybrid Vertical AI | 6K | Definição do modelo |
| 16 | Valuation v2.0 Confidencial | 26K | Valuation e projeções |
| 17 | Tese Expansão 13K Serviços | 8.5K | Visão de longo prazo |
| 18 | Ecossistema INSS Digital Fricções | 24K | Análise de mercado |
| 19 | Análise LAI SGD/MGI v1.0 | 16K | Achados gov.br |
| 20 | Growth AI Meu Cumpadre | 109K | Estratégia de crescimento |

### Documentos — Do Google Drive (NOVOS, precisam exportação)

| # | Documento | Pasta Drive | Ação |
|---|-----------|-------------|------|
| 21 | Glossário Meu Cumpadre | Gestão Software | Exportar GDoc → .md |
| 22 | Story Telling Alessandro 22 anos | Gestão Software | Exportar GDoc → .md |
| 23 | 0 PROBLEMATIZAÇÃO Hipervulneráveis | VERTICAIS | Exportar GDoc → .md |
| 24 | 0 Concorrente Jurídico | VERTICAIS | Exportar GDoc → .md |
| 25 | 0 NICHOS | VERTICAIS | Exportar GDoc → .md |
| 26 | MeuCumpadre PITCH 2026 | COMUNIDADE/Acelera 360 | Já é .md (19K) |
| 27 | 0 Memorando Estratégico Revisão Crítica | VERTICAIS | Exportar GDoc → .md |

**Total Projeto 1: ~27 documentos / ~1.4 MB texto**

---

## PROJETO 2: MC OPERAÇÕES

**Propósito:** Execução diária, gestão de casos, delegação ao Beto,
briefings pra Juliana, playbooks operacionais, custódia.
**Usuários principais:** Alessandro (delegando), Beto (executando)
**Perfil de uso:** "Como faço X no ClickUp, como mando mensagem pra
cliente Y, qual o status do caso Z, como protocolo no INSS"

### Documentos — Do Project Knowledge atual

| # | Documento | Tamanho | Função no projeto |
|---|-----------|---------|-------------------|
| 1 | Playbook Custódia Operacional v2.0 | 19K | Modelo de custódia gov.br |
| 2 | CLAUDE.md v1.0 | 7.5K | Template Claude Code |
| 3 | Hooks Config v1.0 | 4.5K | Regras mecânicas |
| 4 | Spec-Driven Workflow v1.0 | 14K | Research→PRD→Spec→Implement |
| 5 | Skills Frontmatter Standard v1.0 | 16K | Padrão de skills |
| 6 | Comprovação Atividade Rural Relatório | 53K | Guia rural completo |
| 7 | Grimório Anjo (microbioma humano) | 256K | Manual do Anjo |
| 8 | Correção Narrativa 48h Definitiva | 15K | (duplicado intencional — regra inviolável) |

### Documentos — Do Google Drive (NOVOS)

| # | Documento | Pasta Drive | Ação |
|---|-----------|-------------|------|
| 9 | Beto — Operações Meu Cumpadre | Gestão Software | Exportar GDoc → .md |
| 10 | Cópia de Meu Cumpadre - Levantamento de requisitos | IGOR_Dev | Exportar GDoc → .md |
| 11 | MC-BRIEFING-Operacional-Marlon-v2.0 | ClickUP 4.0 | Já é .docx (24.5K) |
| 12 | MC-RESUMO-EXECUTIVO-BRAVY-MARLON | ClickUP 4.0 | Já é .md (11.6K) |
| 13 | Reunião 04/04 Igor e Carlos (transcrição) | IGOR_Dev | Já é .txt (74.9K) |
| 14 | V. HONORÁRIOS e PRECIFICAÇÃO anotações | VERTICAIS | Exportar GDoc → .md |
| 15 | CONTRATOS VISUAL LAW | VERTICAIS | Exportar GDoc → .md |

### Documentos — Do Obsidian Vault ClickUp (NÃO subir)

Os ~419 .md sincronizados do ClickUp (tarefas individuais por CPF)
NÃO entram no Cowork. São operacionais efêmeros — dados sensíveis
(CPFs, nomes) que violam LGPD se carregados numa plataforma cloud.
Além disso, cada um tem ~350 bytes de conteúdo. Zero valor contextual.

**Total Projeto 2: ~15 documentos / ~500K texto**

---

## PROJETO 3: MC DEV

**Propósito:** Desenvolvimento técnico, specs para Igor e Carlos,
arquitetura de código, stack LLM, MCP servers, endpoints.
**Usuários principais:** Alessandro (spec), Igor (execução), Carlos (UX)
**Perfil de uso:** "Qual o endpoint pra E4, como o MCP integra com
WhatsApp, qual o schema do NestJS, como o Router-Ethics pontua"

### Documentos — Do Project Knowledge atual

| # | Documento | Tamanho | Função no projeto |
|---|-----------|---------|-------------------|
| 1 | Arquitetura MCP v2.0 | 27K | Spec MCP completa |
| 2 | RouterEthics 11.0 Unified | 30K | (duplicado intencional — core tech) |
| 3 | SKILL Master Orquestrador | 28K | Spec do orquestrador |
| 4 | CLAUDE.md v1.0 | 7.5K | Template Claude Code |
| 5 | Toolkit CEO-Builder Solo | 21K | Stack de ferramentas |
| 6 | Método LLM KB Karpathy | 18K | Arquitetura wiki/RAG |
| 7 | Acesso programático dados gov.br | 17K | APIs e acesso legal |
| 8 | Simulação transição operacional 3 cenários | 18K | Modelagem técnica |
| 9 | Gov.br Open APIs Roadmap | 16K | Integração gov.br |

### Documentos — Do Google Drive (NOVOS)

| # | Documento | Pasta Drive | Ação |
|---|-----------|-------------|------|
| 10 | Documentação Carlos UX | Gestão Software | Exportar GDoc → .md |
| 11 | Linguagem DEV Python + Node.js | Gestão Software | Exportar GDoc → .md |
| 12 | users.fluxograma.drawio | IGOR_Dev | Copiar como está |
| 13 | 0 Estruturação do Projeto MC com Claude | Gestão Software | Exportar GDoc → .md |
| 14 | SCRIPT TRANSCRIÇÃO (Python + instruções) | CLAUDE | Copiar .py + .md |
| 15 | Ecossistema IA Vertical Agêntica 2026 | Acelera 360 | Já é .md (27.5K) |
| 16 | Custo API OpenAI | IGOR_Dev | Já é .pdf (601K) |

**Total Projeto 3: ~16 documentos / ~300K texto**

---

## O QUE NÃO ENTRA EM NENHUM PROJETO

### Material de formação externa (T3 — Skip total)
- GHS completo (377 arquivos, 270 MB) → referência do Agostinho, não é MC
- Academia Lendária (3 arquivos) → comunidade externa
- Escola de Automação Tales Laray (4 arquivos) → formação pessoal
- Caio Sampaio IA com Python (1 arquivo) → referência tech
- anotações Tríade Anwar Hermuche → formação pessoal
- Método EURO → framework externo antigo
- Livro negócio Índia Aadhaar → benchmarking
- VIVER de IA → plataforma externa

### Vídeos e gravações (T3 — Volume sem valor contextual)
- ESCRITÓRIO ADV com IA: 6.54 GB de vídeos de tela → T3
- Acelera 360: 3.06 GB (vídeo + áudio de reunião) → T3
- ClickUP x Claude Code: 242 MB de áudio → T3
- V. SAÚDE: 29.7 MB vídeo → T3

### Tarefas ClickUp sincronizadas (T3 — Sensível + Efêmero)
- ~419 .md de tarefas com CPFs e nomes → LGPD violation se subir
- Conteúdo: ~350 bytes cada, zero valor contextual

### Pastas de verticais vazias (T3 — Estrutura futura)
- V. Banco de Alimentos, V. Colônias de Pescadores, V. COOPERATIVAS,
  V. CadÚnico, V. INCRA, V. LGPD, V. OAB Compliance, V. PF,
  V. Receita Federal, V. RPPS, V. STR, V. Sindicatos, V. TRABALHISTA,
  V. TRÂNSITO → todas só têm desktop.ini

### Arquivos .ini e metadata (T3 — Lixo do Windows)
- 156 desktop.ini → zero valor

### Garimpagem/Cristalização (T3 para Cowork — processamento já feito)
- 9 arquivos MC-GARIMPAGEM/CRISTALIZACAO → os insights já foram
  extraídos e consolidados. Manter apenas no PK do Claude.ai

### Artefatos renderizáveis (T3 para Cowork — só funcionam no Claude.ai)
- .html interativos (Constelação, Mapa Mental)
- .jsx (Estratégia Rural Preview)

---

## DOCUMENTOS DUPLICADOS INTENCIONAIS

Alguns documentos aparecem em mais de um projeto. Isso é intencional:

| Documento | Projetos | Razão |
|-----------|----------|-------|
| Correção Narrativa 48h | NÚCLEO + OPERAÇÕES | Regra inviolável — todo contexto precisa |
| RouterEthics 11.0 | NÚCLEO + DEV | Estratégia + implementação técnica |
| CLAUDE.md v1.0 | OPERAÇÕES + DEV | Template de trabalho em ambos |

---

## RESUMO QUANTITATIVO

| Projeto | Docs | Tamanho est. | Docs novos (Drive) |
|---------|------|--------------|--------------------|
| MC NÚCLEO | 27 | ~1.4 MB | 7 (exportar GDoc) |
| MC OPERAÇÕES | 15 | ~500 KB | 7 (exportar + copiar) |
| MC DEV | 16 | ~300 KB | 7 (exportar + copiar) |
| **TOTAL** | **58** | **~2.2 MB** | **21 conversões** |

Dos 5.353 arquivos do inventário, entram **58** (1.08%).
Dos 18.27 GB, entram **~2.2 MB** (<0.02%).

---

## WORKFLOW DE EXECUÇÃO (Fase 3-4)

### Fase 3 — Conversão (Claude Code, ~45 min)
1. Exportar 14 GDocs como .md via `gdocs2md` ou Google Drive API
2. Copiar 7 arquivos que já estão em .md/.docx/.pdf/.drawio
3. Organizar em 3 pastas: `cowork-nucleo/`, `cowork-operacoes/`, `cowork-dev/`
4. Gerar checklist de upload

### Fase 4 — Montagem (Manual no Cowork, ~30 min)
1. Criar Projeto "MC NÚCLEO" → upload dos 27 docs
2. Criar Projeto "MC OPERAÇÕES" → upload dos 15 docs
3. Criar Projeto "MC DEV" → upload dos 16 docs
4. Teste de contexto em cada projeto:
   - NÚCLEO: "O que é a hierarquia D>C>V?", "Qual o ADR-007?"
   - OPERAÇÕES: "Como o Beto protocola no INSS?", "Qual o playbook de custódia?"
   - DEV: "Qual o endpoint do E4?", "Como o MCP integra com WhatsApp?"

### Fase 5 — Refinamento (Claude.ai + Cowork, iterativo)
- Remover docs que não estão sendo consultados
- Adicionar docs que faltam conforme uso real
- Calibrar o context de cada projeto

---

*58 documentos. 3 projetos. Zero ruído.*
*"Lucro é combustível. Causa é destino. Jogo é infinito."*

**MC-CURADORIA-Cowork-Fase2-v1.0 — 13 de Abril de 2026**
**CONFIDENCIAL**
