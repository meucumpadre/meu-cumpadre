# NotebookLM Recipes — mc-strategic-intelligence

> Receitas de CLI (`notebooklm-py`) e prompts prontos para as fases F2-F4 da skill.
> Fonte de verdade da CLI: `02-ARQUITETURA/MC-INFRA-NotebookLM-CLI-v1_0-2026-0406.md`.
> **Firewall LGPD:** NotebookLM = Google US. **Nunca** subir CPF/NB/CID/CNIS/senha gov.br/PII não-anonimizada.

## Pré-voo

```bash
notebooklm --version          # confirma CLI instalada
notebooklm auth check         # cookies/sessão válidos? (re-login: notebooklm login)
notebooklm status             # caderno-contexto atual
```

Se a CLI **não** estiver instalada na sessão (ex.: sandbox cloud sem o pacote), reporte ao Founder e siga em modo **degradado**: faça a pesquisa/curadoria (F1) e a estruturação (F4-F5) normalmente, deixando os blocos de análise NotebookLM marcados `[PENDENTE — rodar NotebookLM em sessão local]`. Qualidade > velocidade: não invente a saída do NotebookLM.

## F2 · Criar caderno + ingerir fontes

```bash
# Prefixo obrigatório: MC- (núcleo) ou TECH- (stack/ferramentas). Intel de mercado público → MC- ou TECH-.
notebooklm create "MC- Intel: <TEMA> <AAAA-MMDD>"
notebooklm use <id|prefixo 6+ chars>

# YouTube (PRIORITÁRIO) — peritos, advogados, audiências, canais oficiais
notebooklm source add "https://youtube.com/watch?v=..."

# PDF / arquivo local (de-identificado) e texto
notebooklm source add ./relatorio-tcu.pdf
notebooklm source add ./nota-tecnica.md

# Varredura web profunda como source
notebooklm source add-research "<query do recorte>" --mode deep --no-wait

# Aguardar indexação antes de perguntar
notebooklm source list
notebooklm source wait <src_id>
```

## F3 · Análise profunda (4 pedidos canônicos)

Use `--json` para colher **citações estruturadas** (rastreabilidade Proof-First). Restrinja a sources com `-s <src_id>` quando precisar isolar uma fonte.

### (a) Análise estruturada
```bash
notebooklm ask "Faça uma análise estruturada do tema com base SÓ nas fontes: \
tese central, 5 forças/fatores, evidências (cite a fonte e o trecho), e contraevidências. \
Linguagem clara (Teste Zilda-STF). Marque o que NÃO está nas fontes como lacuna." --json \
  --save-as-note --note-title "Análise Estruturada"
```

### (b) Insights Flywheel / SoR / Router-Ethics
```bash
notebooklm ask "Com base nas fontes, gere insights acionáveis para um sistema que: \
(1) aprende método DE-IDENTIFICADO em escala — o Proprietary Data Flywheel (Method-of-Record); \
(2) mantém um System of Record do cidadão sobre o Estado; \
(3) roteia casos por três scores (Confidence, Complexity, Fraudscore — Router-Ethics). \
Para cada insight diga qual dos três ele alimenta e por quê. Cite a fonte." --json \
  --save-as-note --note-title "Insights Flywheel-SoR-Router"
```

### (c) Conexões com as 9 verticais Skybridge
```bash
notebooklm ask "Mapeie como este tema conecta as 9 verticais de um ecossistema cujo ponto \
de entrada é o Previdenciário (INSS/BPC) e cujas passarelas levam a: Saúde, Bancário, Rural, \
Cartório, Telemedicina, Consumidor, Trabalhista, Sucessório. Aponte a vertical âncora, as \
passarelas bidirecionais ativáveis e a cascata de benefícios. Cite a fonte de cada conexão." --json \
  --save-as-note --note-title "Conexões Skybridge"
```

### (d) Entregável útil
```bash
# Resumo executivo (briefing-doc)
notebooklm generate report --format briefing-doc --language pt_BR
notebooklm artifact list && notebooklm download report ./Research/briefing.md

# Infográfico
notebooklm generate infographic --language pt_BR
notebooklm artifact wait <id> && notebooklm download infographic ./Research/infografico.png

# Análise técnica densa (data-table + mind-map são confiáveis; áudio/vídeo/infográfico têm rate limit)
notebooklm generate mind-map && notebooklm download mind-map ./Research/mapa.json
```

> **Confiabilidade (MC-INFRA):** notebooks/sources/chat/report/data-table/mind-map = confiáveis. audio/video/quiz/flashcards/infographic/slide-deck = sujeitos a rate limit Google → `artifact list`, aguardar 5-10 min, retentar, ou fallback UI web.

## F4 · Da saída NotebookLM ao Brief

1. Cole as respostas `--json` na **Linha de Evidência** do `TEMPLATE-Intelligence-Brief.md` (§3), preservando autor+URL+data de cada citação.
2. Claim sem citação utilizável → `[FONTE PENDENTE]` (nunca preencher de cabeça).
3. Destile o aprendizado **de-identificado** para `Flywheel-Inputs/` (§6) — método/padrão, jamais PII.
4. Salve o `notebook_id` no frontmatter do Brief (rastreabilidade).

## Higiene de cadernos

- Caderno de intel pública pode permanecer; case real (`CASE-`) anonimiza antes e segue ciclo de vida do dossiê.
- Caderno experimental/descartável → prefixo `ARQUIVO-` (candidato a delete).
- **Nunca** misture PII de beneficiário com intel de mercado no mesmo caderno.
