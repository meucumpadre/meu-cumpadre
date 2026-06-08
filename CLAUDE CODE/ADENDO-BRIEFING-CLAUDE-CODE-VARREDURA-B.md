# ADENDO — Briefing Claude Code — Varreduras Suplementares

**Complementa:** `BRIEFING-CLAUDE-CODE-VARREDURA.md` (v1.0 anterior)
**Data:** 2026-04-19
**Decisão do Founder:** inclusão cirúrgica de 3 subpastas adicionais à varredura v3.0

---

## Escopo expandido — da varredura única para varredura dupla sequencial

O briefing original (`BRIEFING-CLAUDE-CODE-VARREDURA.md`) continua válido integralmente para a **Varredura-A**. Este adendo adiciona a **Varredura-B**, executada após validação da A.

### Varredura-A — Acervo-Prova Principal (inalterada)

- **Raiz:** `1YSSQPvjoZogqcwyHHux64oB2VmerXGsD`
- **Volume estimado:** ~3.200 arquivos
- **Destino:** esqueleto completo 00-09 da Armadura v3.0
- **Output:** `MANIFESTO-ARMADURA-A-v1_0.csv` + `RELATORIO-GAPS-A-v1_0.md`
- **Pipeline:** 6 fases do briefing original
- **Gate:** Founder valida antes de iniciar Varredura-B

### Varredura-B — Suplementos Cirúrgicos (NOVA)

Executada **apenas após** Varredura-A concluída e validada. Razão: os GAPS detectados em A vão informar o que buscar ativamente em B, tornando a classificação de B mais precisa.

**3 subpastas incluídas:**

| Subpasta | ID Drive | Peça(s) destino primária |
|---|---|---|
| `B2B - ADVOGADOS` | `1JqP13KeGQneKIfUrrqc3yMj_t0HA9ezf` | Peça 8 (Firewall OAB) + Peça 7A (Jurídico Juliana) |
| `CLAUDE Cowork` | `1yV6H2_mvf0IlNqAAIx7Vea8IeyKAncEj` | Peça 4E (AI-under-Human) + Peça 1F (Curva Aprendizado) |
| `ClickUP 4.0 x Claude Code` | `1fANTrIuAd_8kPIXJDtsmEzAXnL3k113T` | Peça 1D (Retry gov.br) + Peça 1F + Peça 2 (Planilhas) |

**Volume estimado combinado:** 200-500 arquivos (incerteza por não ter descido na árvore)

---

## Regras de classificação específicas por subpasta

### B2B - ADVOGADOS (prioridade P0)

**Mapeamento canônico:**

```
Varredura-B: B2B - ADVOGADOS/*
├── Arquivo sobre ACP OAB-SP → 08_JURIDICO/08D_JURISPRUDENCIA_CRITICA/ACPs_OAB_SP_42_casos/
├── Arquivo com "parecer OAB" no conteúdo → 07_EXERCITO/07A_JURIDICO_DRA_JULIANA/correspondencia/
│   (somente se autoria Dra. Juliana; se autoria externa → 08E_PARECERES_OAB_RECEBIDOS/)
├── Arquivo sobre REsp 2.079.440 ou Ementa 069/2024 → 08D_JURISPRUDENCIA_CRITICA/
├── Benchmark escritório com IA (preços R$800-1500) → 05_ANCORA_R12k/05C_ADVOGADO_INTERIOR/
│   + atalho simbólico em 04_DEFESA_ANTROPOLOGICA/04E_TAGLINE/comparativo_vs_legaltechs/
├── Tabela OAB honorários estaduais → 05C_ADVOGADO_INTERIOR/
├── Contrato ou minuta com advogado parceiro → 08C_CLAUSULAS_CONTRATUAIS/
└── Rede de contatos / CRM jurídico → 07A_JULIANA/correspondencia/ (se pertinente) OU 09_LEGADO/
```

**Sinalização obrigatória:** todo arquivo com nomes próprios de advogados que NÃO sejam Dra. Juliana Melo deve ser marcado com flag `contem_terceiro_nominal=true` para revisão manual pelo Founder antes de qualquer movimentação — proteção LGPD e profissional.

### CLAUDE Cowork (prioridade P1)

**Hipótese do conteúdo:** experimentos Alessandro com Cowork, transcrições de sessão, prints de workflow desktop, aprendizado sobre o que Cowork consegue vs não consegue.

**Mapeamento:**

```
Varredura-B: CLAUDE Cowork/*
├── Evidência de workflow AI-assistido operação MC → 04_DEFESA/04E_TAGLINE/proporcao_5min_IA_vs_14h_HUMANO.md/
├── Log de tempo humano + tempo IA em tarefa real → 01_COGS/01F_CURVA_APRENDIZADO/dados_empiricos/
├── Print de tela, screencast → 04_DEFESA/04E_TAGLINE/evidencia_visual/ (novo)
├── Comparativo Cowork vs Claude Code vs Claude chat → 03_ADR/ (se for decisão arquitetural) OU 09_LEGADO/
├── Tutorial ou curso consumido → 09_LEGADO/
└── Experimento abortado ou troubleshoot → 09_LEGADO/ ou descartar
```

**Atenção:** Cowork é ferramenta meta — mistura contexto pessoal de Alessandro com uso operacional. Confidence threshold elevado para 0.85 (em vez de 0.7 padrão). Tudo abaixo → quarentena para revisão do Founder.

### ClickUP 4.0 x Claude Code (prioridade P0)

**Hipótese do conteúdo:** documentação da sincronização ClickUp-Obsidian-Claude Code (419 tasks mapeadas nas memórias), setup técnico, logs de daemon 5-minute, eventuais dumps de tasks exportados.

**Mapeamento:**

```
Varredura-B: ClickUP 4.0 x Claude Code/*
├── Dump de tasks ClickUp com tempo gasto → 01_COGS/01F_CURVA_APRENDIZADO/dados_empiricos_por_operador.csv
│   + possível atalho 01A_MATRIZ_TEMPO_TELA_PRIMARIA/LOGS_CRONOMETRAGEM/
├── Setup daemon sincronização → 09_LEGADO/ (é tooling, não evidência de duelo)
├── Log de retry gov.br em microtarefa de task → 01D_RETRY_GOV_BR/
├── Estrutura de Spaces/Folders/Lists do workspace → 03_ADR/ (se formal) OU 09_LEGADO/
├── Planilha de capacity planning operadores → 02_PLANILHAS/02D_CALCULOS_AUXILIARES/
└── Duplicação "Gestão" = "Administrativo" registrada → 09_LEGADO/ (documenta o bug, fora de escopo v3.0)
```

**Ganho esperado:** é AQUI que pode estar a prova dura de que MC mede tempo operacional real, tarefa por tarefa — a espinha dorsal empírica da Peça 1. Se os dados existirem, a Peça 1 deixa de ser estimativa e vira medição. Se não existirem, isso vira um gap P0 crítico no relatório final.

---

## Gate de execução Varredura-B

Claude Code NÃO inicia Varredura-B até:

1. [ ] Varredura-A completada e manifesto-A aprovado pelo Founder
2. [ ] `RELATORIO-GAPS-A-v1_0.md` lido e priorizado pelo Founder
3. [ ] Founder sinaliza: "iniciar varredura B" escrito

Razão do gate: o que Varredura-B vai ativamente buscar depende dos gaps descobertos em A. Se A já cobrir (por exemplo) jurisprudência OAB suficiente, a ênfase em B muda para cronometragem operacional.

---

## Output consolidado final

Após Varredura-B:

- `MANIFESTO-ARMADURA-CONSOLIDADO-v1_0.csv` — merge de A + B, com coluna `origem_varredura` (A|B)
- `RELATORIO-GAPS-FINAL-v1_0.md` — gaps residuais APÓS os dois passes, com priorização P0/P1/P2
- `DUPLICATAS-CROSS-VARREDURA.csv` — arquivos que apareceram em ambos escopos (esperado em B2B-ADVOGADOS ↔ raiz)

---

## Custo marginal estimado

Varredura-B sobre 500 arquivos com Haiku 4.5 = **+US$ 3-8** adicionais sobre o custo de A.

Esse custo marginal é baixo porque:
- Volume é ~15% do principal
- Regras de classificação agora estão calibradas por A
- Muitos arquivos de Cowork/ClickUP são pequenos (logs, prints, markdown)

---

## Limite explícito de escopo — não inclusos

As outras 19 subpastas da raiz `17QvuZAloSYup0-Tl4nhqgtjTtkeL0LIf` **NÃO** são varridas. Especificamente:

- `BETO/`, `IGOR _ Dev/`, `UX/`, `MC RADAR _ SATÉLITE/`, `GIL FERNANDES IA ADV/`, `NotebookLM/`, `FUNDADOR PROMPT/`, `0 O CÉREBRO - ALESSANDRO/`, `CLAUDE/`, `OBSIDIAN _ MC/`, `MANUS/`, `Acelera 360/`, `ESCRITÓRIO ADV com IA/`, `arOS/`, `GHS - Gestão Híbrida de Software/`, `ACADEMIA LENDÁRIA/`, `ESCOLA DE AUTOMAÇÃO Tales Laray/`

Preservadas intactas fora do escopo de duelo v3.0.

Se alguma delas for identificada como fonte crítica em análise posterior, extende-se o escopo com novo adendo formal (Varredura-C).

---

**FIM ADENDO.**
