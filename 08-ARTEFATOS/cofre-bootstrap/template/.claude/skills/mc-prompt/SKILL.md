---
name: mc-prompt
version: 1.1.0
description: >
  Forja de metaprompts MC — gera system prompts de excelência, prontos para colar
  no claude.ai (C3.1, Sister Anciã, Voo CLR001 ou qualquer instância nova),
  combinando as melhores práticas oficiais da Anthropic (tags XML, role,
  multishot, chain-of-thought, prefill) com as 10 técnicas do super prompt
  didático e o DNA institucional MC (D > C > V, Proof-First, Firewall OAB,
  Teste Zilda-STF). Entrega o prompt já com o "pé formatado" MC e ensina a
  ativação por comando. Use SEMPRE que o Founder pedir para criar, otimizar,
  estruturar, revisar ou "industrializar" um prompt/metaprompt/system prompt
  para qualquer aplicação Claude. Frases-gatilho: "criar prompt", "metaprompt",
  "MC prompt", "abrir o MC prompt", "otimizar prompt", "system prompt",
  "prompt para o C3.1", "engenharia de prompt", "forjar prompt".
author: Alessandro de Souza Neves (Founder/CEO) × Claude Opus 4.8 (co-fundador intelectual)
license: PROPRIETARY — Meu Cumpadre — Orquestração Documental e Tecnologia Ltda.
ecosystem: meu-cumpadre
layer: ferramenta-meta — Forja de Prompts
status: v1.0 PROVISIONAL
tags:
  - engenharia-de-prompt
  - metaprompt
  - anthropic-best-practices
  - xml-tags
  - multishot
  - chain-of-thought
  - claude-ai
  - c3-1
  - zilda-stf
  - proof-first
rua:
  id: mc-prompt
  nome: Forja de Metaprompts MC
  tipo: skill
  versao: n/d
  status: INSTALADO
  papel: Gera/otimiza system prompts de excelência (Anthropic best-practices + DNA
    MC) p/ instâncias claude.ai
  gatilhos:
  - /mc-prompt
  - criar prompt
  - metaprompt
  - system prompt
  - otimizar prompt
  entrega: prompt formatado com o pé MC + ativação por comando
  metodo_fonte: CATALOGO-TECNICAS + TEMPLATE-MC-PROMPT (na própria skill)
  instancia_aci: transversal
  camada_ase: L2
  compoe_com: []
  nao_confundir_com: []
  gate: R1
  zona: Verde
  lgpd_nota: forja de prompt · sem PII
  vedacoes_honradas:
  - Proof-First
  - D>C>V
  - Firewall-OAB
  para_no_gate: devolve o prompt · não executa nem sela
  custo:
    gasta_agente: false
    opt_in: false
    fan_out: null
  emite_audit: false
  depende_de: []
---

## O que esta skill faz

Transforma uma **intenção** ("quero um assistente que faça X") em um **system prompt
de produção** — estruturado em tags XML (o formato que o Claude lê melhor), com role,
contexto, instruções, exemplos multishot, espaço de raciocínio, restrições, formato de
saída e o **pé institucional MC**. O resultado é colável direto no campo de instruções
de qualquer Project/instância no claude.ai.

> **Princípio:** um bom prompt não é texto bonito — é **arquitetura de comportamento**.
> A skill industrializa essa arquitetura para que toda instância MC nasça com o mesmo
> padrão de excelência.

---

## Comando

`/mc-prompt [descrição livre da aplicação que você quer]`

Exemplos:
- `/mc-prompt assistente que avalia se uma descrição de benefício previdenciário está completa para protocolo`
- `/mc-prompt revisor de comunicação institucional que aplica o Teste Zilda-STF`
- `/mc-prompt otimizar este prompt: [cola o prompt atual]`

Sem argumento → a skill abre o **modo entrevista** (passo 1 abaixo).

---

## Execução

### Passo 1 — Elicitação (só o necessário)

Antes de forjar, confirme **no máximo 4 variáveis** via `AskUserQuestion` (pule as que já
estiverem claras na descrição):

| Variável | Pergunta-guia |
|---|---|
| **Papel** | Que especialista o Claude deve "vestir"? (ex.: Analista Sênior previdenciário) |
| **Tarefa-núcleo** | Qual é a única coisa que ele tem de fazer bem? |
| **Audiência** | Quem lê a saída? (define o vocabulário — ver Princípio #44 / Teste Zilda-STF) |
| **Formato de saída** | Markdown estruturado? JSON? Laudo? Resposta curta de WhatsApp? |

> Se o Founder colou um prompt para **otimizar**, pule a entrevista, faça o diagnóstico
> (ver `CATALOGO-TECNICAS.md` → seção "Diagnóstico de prompt existente") e reconstrua.

### Passo 2 — Seleção de técnicas + modos de cognição

Leia `CATALOGO-TECNICAS.md` (técnicas + taxonomia Proof-First de 4 níveis) e
`MODOS-COGNICAO.md` (modos injetáveis: DEEPTHINK · DECISÃO sob incerteza · ENTROPIA-triagem ·
ORQUESTRAÇÃO multi-agente · FUNCTIONAL EMOTIONS). **Selecione só o que a tarefa exige** — não
empilhe por reflexo. Cognição é bisturi, não martelo. Regra de ouro:

- **Toda** aplicação leva: Role + Contexto + Instruções claras + Pé MC.
- Tarefa **subjetiva/criativa** → reforçar contexto e exemplos negativos.
- Tarefa **com padrão fixo de saída** → Template + Few-shot (2-3 exemplos) + prefill.
- Tarefa **de raciocínio/análise** → Chain-of-thought (bloco `<pensar>`) antes da saída.
- Tarefa **sensível (CPF/NB/CID/dados de hipervulnerável)** → bloco de Restrições LGPD
  obrigatório + roteamento self-hosted (nunca enviar a stack não-soberana).

### Passo 3 — Montagem

Use `TEMPLATE-MC-PROMPT.md` como esqueleto. Regras de montagem:

1. **Tags XML** para todas as seções (`<papel>`, `<contexto>`, `<instrucoes>`,
   `<exemplos>`, `<pensar>`, `<restricoes>`, `<formato_saida>`). É a estrutura que o
   Claude separa melhor — preferível a `#markdown` solto.
2. **Exemplos multishot** dentro de `<exemplos>`, cada um em `<exemplo>` com `<entrada>`
   e `<saida_ideal>`. Mínimo 1 bom + 1 ruim quando a qualidade for subjetiva.
3. **Chain-of-thought** quando houver análise: instrua o Claude a usar `<pensar>` antes
   da resposta final — e a NÃO mostrar esse bloco ao usuário leigo se a saída for B2C.
4. **Exemplos negativos** explícitos (❌) quando houver erro recorrente conhecido.
5. Encerre **sempre** com o **Pé MC** (footer institucional — copie de
   `TEMPLATE-MC-PROMPT.md`).

### Passo 4 — Auto-verificação (Refinamento Iterativo)

Antes de entregar, rode mentalmente o checklist:

- [ ] Um leigo (Dona Zilda) e um especialista (ministro STF) leem a saída sem atrito? **(Teste Zilda-STF)**
- [ ] As instruções são acionáveis e não-ambíguas?
- [ ] Há alguma porta para o Claude fabricar dado? Se sim, feche com regra Proof-First.
- [ ] O prompt respeita Firewall OAB? (vedada promessa de êxito ou de prazo; sem exercício de advocacia)
- [ ] Se toca dado sensível, a regra LGPD/self-hosted está explícita?
- [ ] **Camada A/B respeitada?** Nenhum material simbólico (EU SOU, Geometria Sagrada) afirmado como fato físico/técnico.
- [ ] Toda afirmação factual carrega selo Proof-First (`[VERIFICADO]`/`[FONTE PENDENTE]`/`[FONTE CULTURAL]`/`[NÃO LOCALIZADA]`)?
- [ ] O pé MC está presente?

Se algum item falhar → refine antes de entregar.

### Passo 5 — Entrega + ativação

Entregue em **dois blocos**:

1. **O PROMPT** — dentro de um único bloco de código, pronto para copiar.
2. **COMO ATIVAR** — instruções de onde colar (ver seção abaixo).

> Se o Founder pedir, **persista** o prompt gerado como artefato em
> `Documentação/` (mesa de trabalho — nunca direto no Vault sem gate "aprovado para
> vault", conforme ADR-011). Nome sugerido:
> `MC-PROMPT-[Aplicacao]-v1_0-[YYYY-MMDD].md`.

---

## Como ativar o MC Prompt gerado (ensinar ao Founder)

O prompt forjado é um **system prompt**. No ecossistema MC há três formas de ativá-lo:

### A) Project no claude.ai (recomendado para instâncias permanentes — C3.1, Voo CLR001)
1. Abra/crie o Project no claude.ai.
2. Vá em **"Set project instructions"** (instruções do projeto).
3. Cole o prompt inteiro (com o pé MC).
4. Salve. Toda conversa nova naquele Project já nasce com o comportamento embutido.

### B) Guia avulsa (instâncias excepcionais — Sister Anciã)
1. Abra uma conversa nova.
2. Cole o prompt como **primeira mensagem**, prefixado por:
   `Estas são suas instruções permanentes para esta conversa. Confirme que absorveu e aguarde a primeira tarefa.`

### C) Skill/comando (automação dentro do Claude Code — este repositório)
- Se o prompt vira um fluxo recorrente, ele pode ser promovido a **nova skill** neste
  repo (`.claude/skills/[nome]/SKILL.md`), ativável por `/[nome]`. Peça
  `/mc-prompt promover [nome]` e a forja gera o esqueleto de skill no padrão MC.

> **Confidência operacional:** o MC Prompt é a forja; cada instância (C3.1, Anciã,
> Voo CLR001) é uma lâmina. "É eu, tu, a Anciã e o Voo CLR001. ∞"

---

## Arquivos desta skill

- `SKILL.md` — este arquivo (workflow).
- `TEMPLATE-MC-PROMPT.md` — o esqueleto XML canônico (o "pé formatado").
- `CATALOGO-TECNICAS.md` — técnicas (Anthropic × 10 didáticas) + taxonomia Proof-First de 4 níveis + diagnóstico de prompt existente.
- `MODOS-COGNICAO.md` — modos de cognição injetáveis (DEEPTHINK · DECISÃO · ENTROPIA · ORQUESTRAÇÃO · FUNCTIONAL EMOTIONS).

---

**FIM DO SKILL.MD — MC Prompt v1.1.0 (Forja de Cognição)**
**Ecossistema Meu Cumpadre — Forja de Metaprompts**
**Autor: Alessandro de Souza Neves × Claude (co-fundador intelectual)**

**Hierarquia: Dignidade > Compliance > Viabilidade**
**Âncora: Provérbios 31:8 · "O diamante é carbono que não desistiu da pressão."**

∞
