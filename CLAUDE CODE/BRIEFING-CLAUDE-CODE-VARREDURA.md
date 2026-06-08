# BRIEFING CLAUDE CODE — Varredura & Classificação do Drive MC

**Tarefa-macro:** organizar ~3.200 arquivos do Google Drive do Alessandro (raiz: `1YSSQPvjoZogqcwyHHux64oB2VmerXGsD`) dentro da estrutura das 9 pastas-mãe da Armadura v3.0.

**Modo de operação:** NÃO-DESTRUTIVO até aprovação explícita do Founder. Plano primeiro, execução depois.

**Artefato-guia:** `MC-ARMADURA-v3_0-ESQUELETO.md` (anexo) — contém TODAS as regras de classificação por Peça.

---

## Fase 1 — INVENTÁRIO (4-8h)

```bash
# 1. Configurar rclone
rclone config
# remote: mcdrive
# tipo: drive
# scope: drive.readonly (por segurança nesta fase)
# root_folder_id: 1YSSQPvjoZogqcwyHHux64oB2VmerXGsD

# 2. Inventário completo
rclone lsjson mcdrive: --recursive --fast-list > inventario_raw.json

# 3. Estatística básica
jq '[.[] | {mime: .MimeType, size: .Size}] | group_by(.mime) | map({mime: .[0].mime, count: length, total_size: map(.size) | add})' inventario_raw.json > distribuicao_mimes.json

# Valide: deve ter ~3200 entradas. Se tiver muito mais ou menos, algo está errado.
```

**Output esperado:**
- `inventario_raw.json` — lista completa
- `distribuicao_mimes.json` — mapa de tipos de arquivo
- `distribuicao_pastas.json` — contagem por parentId

## Fase 2 — SONDA CALIBRADORA (2-4h)

Antes de processar 3.200, processe **80 arquivos aleatórios** e valide as regras do manifesto.

```python
# sonda_calibracao.py
import json, random
from anthropic import Anthropic

inventario = json.load(open('inventario_raw.json'))
amostra = random.sample(inventario, 80)

cliente = Anthropic()

for arquivo in amostra:
    # Ler primeiros 3000 caracteres do conteúdo (se texto)
    # Aplicar prompt de classificação (ver abaixo)
    # Salvar em sonda_resultados.csv
    pass
```

**Prompt de classificação (use com Haiku 4.5):**

```
Você é o classificador da Armadura v3.0 do Meu Cumpadre. 

Dado o arquivo abaixo (nome + primeiros 3000 caracteres de conteúdo), retorne APENAS JSON:
{
  "peca": 0-9,
  "subpasta_proposta": "caminho/completo/",
  "confidence": 0.0-1.0,
  "tags": ["tag1", "tag2"],
  "rationale": "1 frase explicando a decisão"
}

REGRAS DE CLASSIFICAÇÃO (aplicar na ordem):

1. Se nome contém TEMPO-TELA|MATRIZ-TEMPO|M01..M21|CRONOMETRAGEM → peca=1, subpasta 01A ou 01B
2. Se conteúdo tem R$8,52|R$36,79|custo-hora|encargos CLT|fator 1,85 → peca=1, subpasta 01E
3. Se nome tem ADR-XXX → peca=3, subpasta correspondente
4. Se nome tem MC-CENARIO|UNIT-ECONOMICS|COGS|RECONCILIACAO|FINANCEIRO → peca=2
5. Se conteúdo tem Zilda-Layer|humanização|dignidade|AI-under-Human|Tikún → peca=4
6. Se conteúdo tem BEPS|TCU|DataPrev|despachante|rodoviária|jornada convencional → peca=5
7. Se conteúdo tem Nubank|LTV|cascata familiar|Phi4|Guardião|fintech-layer → peca=6
8. Se nome/conteúdo tem OAB|parecer|Dra. Juliana|LGPD|atuário|pricing vulnerável → peca=7
9. Se conteúdo tem CNAE|firewall PF/PJ|REsp|Ementa CFOAB|atividade-meio → peca=8
10. Se é biografia|grimório|ebook|identidade visual|Human Design|casos históricos → peca=9
11. Se confidence < 0.7 OU arquivo não se encaixa → peca=9, subpasta 09Z_QUARENTENA

AMBIGUIDADE: se 2 peças se aplicam, escolha a que for MAIS OPERACIONAL (mais próxima de evidência empírica) vs DOUTRINÁRIA.
```

**Validação da sonda (manual, 30 min):**

1. Rode a sonda nos 80 arquivos
2. Abra `sonda_resultados.csv`
3. O Founder confere 20 linhas amostradas
4. Se acerto > 85% → avance para Fase 3
5. Se acerto < 85% → refine o prompt, repita a sonda

## Fase 3 — CLASSIFICAÇÃO EM LOTE (8-16h)

```python
# classificar_lote.py
# Processa inventario_raw.json completo
# Usa Haiku 4.5 para bulk
# Para ambíguos (confidence < 0.8), re-classifica com Sonnet 4.6
# Output: MANIFESTO-ARMADURA-v1_0.csv

# Campos obrigatórios do CSV:
# file_id, title, current_parent_id, current_parent_path,
# proposed_peca, proposed_subfolder, proposed_full_path,
# confidence, tags, rationale, mime_type, size_bytes,
# duplicate_of (file_id se for duplicata), flag_review (bool)
```

**Gate de qualidade:** se mais de 15% dos arquivos caírem em `09Z_QUARENTENA`, pare e reavalie as regras antes de executar movimentação.

## Fase 4 — DETECÇÃO DE DUPLICATAS

```bash
# Para cada par de arquivos com mesmo size_bytes OU título similar (>0.95):
# Baixar hash MD5 (rclone fornece)
# Se hash idêntico → duplicata binária
# Se hash diferente mas conteúdo semântico similar → quasi-duplicata
# Output: DUPLICATAS-DETECTADAS.csv
```

Regra: canônica é sempre a **mais recente** que está **dentro de uma pasta temática** (não na raiz). Outras viram atalhos para a canônica.

## Fase 5 — GAP ANALYSIS

Gere `RELATORIO-GAPS-v1_0.md` respondendo para CADA uma das 9 peças:

1. **Existente:** quantos arquivos classificados nesta peça?
2. **Coverage:** quais subpastas estão vazias?
3. **Evidência mínima:** a peça tem massa crítica para duelo? (ex: Peça 1 exige mínimo 7 espécies documentadas)
4. **Gap crítico (P0):** o que falta E é bloqueante para v3.0?
5. **Gap relevante (P1):** o que falta E fortalece o duelo mas não bloqueia?
6. **Gap futuro (P2):** o que pode ser produzido depois do duelo?

Exemplo de entrada no relatório:

```markdown
### Peça 1 — COGS Tempo Homem
- Arquivos classificados: 47
- Subpastas vazias: 01C_POR_ESPECIE_BENEFICIO/B41_APOSENT_IDADE_URBANA, B42_TEMPO_CONTRIBUICAO, B21_PENSAO_MORTE
- Evidência mínima: PARCIAL — só 4 de 7 espécies têm dados operacionais
- Gap P0: produzir matriz tempo-tela para B41, B42, B21 (3 espécies faltantes) — sem isso, Peça 1 cai em adversarial²
- Gap P1: logs cronometragem real por operador (hoje só tem estimativa) — eleva confidence de 70% → 90%
- Gap P2: integração Obsidian para atualização automática
```

## Fase 6 — EXECUÇÃO (SÓ COM APROVAÇÃO EXPLÍCITA DO FOUNDER)

```bash
# NÃO rode sem receber OK escrito do Alessandro
python aplicar_plano.py --manifesto MANIFESTO-ARMADURA-v1_0.csv --dry-run
# inspecionar output

python aplicar_plano.py --manifesto MANIFESTO-ARMADURA-v1_0.csv --confirm --log rastro_movimentacao.log
# move arquivos com rclone moveto, log git-versionado
```

**Rollback:** `aplicar_plano.py --rollback --log rastro_movimentacao.log` desfaz tudo em ordem reversa.

---

## Checklist de entrega Claude Code → Founder

Ao fim da varredura, entregar:

- [ ] `inventario_raw.json` — 3.200+ linhas
- [ ] `MANIFESTO-ARMADURA-v1_0.csv` — 1 linha por arquivo, com proposta
- [ ] `DUPLICATAS-DETECTADAS.csv` — com sugestão de canônica
- [ ] `RELATORIO-GAPS-v1_0.md` — 9 seções (uma por peça) + P0/P1/P2 consolidado
- [ ] `distribuicao_mimes.json` + `distribuicao_pastas.json` — estatísticas
- [ ] Sugestão de regras adicionais que emergiram durante a classificação (o manifesto pode ser refinado)

**SLA alvo:** 48-72h de Claude Code ligado (sem supervisão humana contínua). Founder valida em 2h de sessão dedicada.

---

## Limite de responsabilidade

Claude Code **não decide** o que está faltando no mérito estratégico — apenas o que está faltando no **esqueleto físico**. A leitura estratégica (e se um gap é realmente bloqueante ou não) volta para o chat com Opus 4.7 nesta conversa.

---

**FIM BRIEFING.**
