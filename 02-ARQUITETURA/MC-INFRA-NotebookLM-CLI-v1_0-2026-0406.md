# NotebookLM CLI — Integração Ativa

**Data:** 06/04/2026  
**Status:** ✅ Operacional  

## Stack
- Pacote: `notebooklm-py 0.3.4`
- Autenticação: conta Google de Alessandro (persistida em `~/.notebooklm/storage_state.json`)
- Skill instalada no Claude Code: `~/.claude/skills/notebooklm/SKILL.md`

## Notebooks: 165 organizados
| Prefixo | Cluster | Qtd |
|---------|---------|-----|
| `MC-` | Núcleo operacional Meu Cumpadre | 31 |
| `CASE-` | Cases reais de beneficiários | 11 |
| `TECH-` | Stack / ferramentas IA | 20 |
| `PESSOAL-` | Pessoal / espiritual / família | 45 |
| `ARQUIVO-` | Lixo / experimento — deletar depois | 51 |
| *(sem prefixo)* | DPE-BA / Dra. Jéssica — não mexer | 7 |

## Instalação

```bash
pip install notebooklm-py
notebooklm skill install   # registra skill no Claude Code
```

Verificação:
```bash
notebooklm --version
notebooklm status          # mostra contexto atual
notebooklm auth check      # diagnóstico de cookies/sessão
```

## Autenticação

```bash
notebooklm login           # abre navegador → OAuth Google
```

- Cookies persistidos em `C:\Users\HP\.notebooklm\storage_state.json`
- Re-login necessário quando sessão expira (`auth check` acusa)
- Para ambientes paralelos: `NOTEBOOKLM_HOME=/caminho/isolado` por agente
- Para CI: `NOTEBOOKLM_AUTH_JSON` injeta auth via secret

## Comandos essenciais

### Notebooks
| Ação | Comando |
|------|---------|
| Listar | `notebooklm list` (ou `--json` pra parse) |
| Criar | `notebooklm create "Título"` |
| Selecionar contexto | `notebooklm use <id>` (aceita prefixo parcial 6+ chars) |
| Renomear | `notebooklm rename -n <id> "Novo Título"` |
| Deletar | `notebooklm delete <id>` |
| Resumo IA | `notebooklm summary` |

### Sources
| Ação | Comando |
|------|---------|
| Adicionar URL | `notebooklm source add "https://..."` |
| Adicionar PDF/arquivo | `notebooklm source add ./doc.pdf` |
| Adicionar YouTube | `notebooklm source add "https://youtube.com/..."` |
| Listar | `notebooklm source list` |
| Pegar fulltext indexado | `notebooklm source fulltext <id>` |
| Aguardar processamento | `notebooklm source wait <id>` |
| Pesquisa web (rápida) | `notebooklm source add-research "query"` |
| Pesquisa web (profunda) | `notebooklm source add-research "query" --mode deep --no-wait` |

### Chat
```bash
notebooklm ask "Pergunta"                              # responde no contexto atual
notebooklm ask "..." -s <src_id1> -s <src_id2>         # restringe sources
notebooklm ask "..." --json                            # retorna citações estruturadas
notebooklm ask "..." --save-as-note --note-title "X"   # salva resposta como nota
notebooklm history --save                              # salva histórico inteiro
```

### Geração de artefatos
| Tipo | Comando | Tempo típico |
|------|---------|--------------|
| Podcast (Audio Overview) | `generate audio "instruções"` | 10-20 min |
| Vídeo explainer | `generate video "..."` | 15-45 min |
| Slide deck | `generate slide-deck` (`--format pptx` no download) | 5-15 min |
| Infográfico | `generate infographic` | 5-15 min |
| Relatório | `generate report --format briefing-doc` | 5-15 min |
| Mind map | `generate mind-map` | instantâneo |
| Data table | `generate data-table "descrição"` | 5-15 min |
| Quiz | `generate quiz --difficulty medium` | 5-15 min |
| Flashcards | `generate flashcards` | 5-15 min |

Todos suportam `-s` (sources específicas), `--language pt_BR`, `--json` (devolve `task_id`).

### Download
```bash
notebooklm artifact list                       # status dos jobs
notebooklm artifact wait <id>                  # bloqueia até completar
notebooklm download audio ./podcast.mp3
notebooklm download video ./video.mp4
notebooklm download slide-deck ./slides.pptx --format pptx
notebooklm download report ./report.md
notebooklm download mind-map ./map.json
notebooklm download quiz ./quiz.md --format markdown
notebooklm download flashcards ./cards.md --format markdown
```

## Fluxos úteis para Meu Cumpadre

### 1. Briefing rápido sobre tema novo
```bash
notebooklm create "Briefing: NTEP CID-CNAE"
notebooklm source add-research "NTEP nexo técnico epidemiológico INSS" --mode deep
notebooklm ask "Resumo executivo em 5 bullets, com base nas fontes"
notebooklm generate report --format briefing-doc
```

### 2. Treinamento Anjos (podcast a partir de fontes próprias)
```bash
notebooklm use <notebook_id>
notebooklm source add ./grimorio_secao.md
notebooklm source add ./router-ethics-spec.md
notebooklm generate audio "Diálogo didático para Anjo iniciante, tom Voz do Sertão, 15min" --language pt_BR
notebooklm download audio ./treinamento_anjo.mp3
```

### 3. Análise de caso (Proof-First)
```bash
notebooklm create "CASE- Beneficiário X"
notebooklm source add ./CNIS.pdf
notebooklm source add ./laudo.pdf
notebooklm ask "Quais elementos sustentam concessão? Cite página." --json
```

### 4. Geração de cards de estudo a partir do Grimório
```bash
notebooklm generate flashcards --quantity more --difficulty medium
notebooklm download flashcards ./cards.md --format markdown
```

## Convenção de prefixos (aplicada em 06/04/2026)

| Prefixo | Critério |
|---------|----------|
| `MC-` | Núcleo operacional Meu Cumpadre — Grimório, Router-Ethics, ADRs, INSS, equipe interna |
| `CASE-` | Cases reais de beneficiários (anonimizar antes de compartilhar) |
| `TECH-` | Stack, ferramentas IA, frameworks, gestão |
| `PESSOAL-` | Pessoal / família / espiritualidade / saúde de Alessandro |
| `ARQUIVO-` | Material de baixa relevância — candidatos a delete |
| *(sem prefixo)* | Intocados: DPE-BA cadernos 1-6 + advogada parceira do marketplace |

**Regra de ouro:** todo notebook novo nasce com um desses 5 prefixos. Sem prefixo = não-MC.

## Rate limiting & confiabilidade

Operações **confiáveis** (sempre funcionam): notebooks, sources, chat, mind-map, report, data-table.

Operações **sujeitas a rate limit** do Google (podem falhar): audio, video, quiz, flashcards, infographic, slide-deck. Em caso de falha:
1. `notebooklm artifact list` pra checar status real
2. Aguardar 5-10 min e retentar
3. Fallback: usar a UI web do NotebookLM

## LGPD / Firewall

⚠️ **NÃO subir** para NotebookLM (Google US-based, fora do perímetro Llama BR):
- CPF, NB, CID, CNIS de beneficiários reais
- Documentos com PII não anonimizada
- Conteúdo CONFIDENCIAL (Valuation v2.0, contratos sensíveis)

✅ **Pode subir:** Grimório (público interno), specs técnicas, BEPS/TCU (dados públicos), pesquisas, materiais de treinamento.

Para cases reais (`CASE-`): anonimizar antes de adicionar source.

## Próximo passo
Configurar workflow avançado (podcasts, mind-maps, briefings automáticos) **após estabilização da documentação MC**.

---
*v1.0 — 06/04/2026 | D > C > V | Sempre*