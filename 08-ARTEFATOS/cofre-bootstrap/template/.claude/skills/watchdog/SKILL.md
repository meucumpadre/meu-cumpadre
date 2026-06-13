---
name: watchdog
description: Monitora todos os casos na fase E5 (aguardando análise INSS) e gera
  relatório de pendências e alertas. Use para acompanhamento semanal ou quando
  precisar de visão geral dos casos em espera.
  Frases-gatilho: "watchdog", "monitoramento", "casos pendentes INSS",
  "acompanhamento", "o que está parado", "fase E5".
rua:
  id: watchdog
  nome: Watchdog E5 (monitor de casos no INSS)
  tipo: skill
  versao: n/d
  status: INSTALADO
  papel: Monitora casos na fase E5 (aguardando análise INSS) + relatório de pendências
    e alertas
  gatilhos:
  - /watchdog
  - watchdog
  - casos pendentes INSS
  - fase E5
  - o que está parado
  entrega: relatório de pendências/alertas dos casos E5
  metodo_fonte: Jornada E0-E7 (E5) · prazos LAI/BEPS
  instancia_aci: C2
  camada_ase: L2
  compoe_com: []
  nao_confundir_com: []
  gate: R1
  zona: Amarela
  lgpd_nota: refs de caso · Amarela · NUNCA promete prazo de concessão INSS (Correção
    48h)
  vedacoes_honradas:
  - LGPD
  - D>C>V
  - Correção-48h
  para_no_gate: relatório de leitura · não altera estado
  custo:
    gasta_agente: false
    opt_in: false
    fan_out: null
  emite_audit: false
  depende_de: []
---

## Comando

`/watchdog`

## Execução

1. Varra todas as notas em `ClickUp/Projetos/` que contenham:
   - `fase_jornada: E5` no frontmatter, OU
   - Tag `fase-e5`, OU
   - A palavra "Watchdog" ou "acompanhamento" no conteúdo

2. Para cada caso encontrado, extraia:
   - Nome do cliente e CPF
   - Data do protocolo INSS (quando entrou em E4→E5)
   - Dias em espera (diferença entre hoje e data do protocolo)
   - Último status registrado
   - Se há exigência pendente

3. Gere o relatório:

```markdown
# WATCHDOG — Monitoramento INSS
**Data:** [DD/MM/AAAA]
**Casos em fase E5:** [total]

## ⚠️ ALERTAS (ação necessária)

### Casos acima de 57 dias (acima da média INSS Jan/2026)
| Cliente | CPF | Dias em espera | Último status |
|---------|-----|---------------|---------------|
| [nome] | [cpf] | [dias] | [status] |

### Casos com exigência pendente
| Cliente | CPF | Exigência | Data da exigência |
|---------|-----|-----------|-------------------|
| [nome] | [cpf] | [descrição] | [data] |

## ✅ CASOS EM ANDAMENTO NORMAL (dentro do prazo médio)
| Cliente | CPF | Dias em espera | Último status |
|---------|-----|---------------|---------------|
| [nome] | [cpf] | [dias] | [status] |

## Resumo
- Total em E5: [X]
- Acima de 57 dias: [X] (⚠️ requer atenção)
- Com exigência: [X] (⚠️ ação imediata)
- Em andamento normal: [X]

## Próximas ações recomendadas
- [lista de ações baseada nos alertas]
```

4. Se não houver casos em E5, informe: "Nenhum caso em fase E5 encontrado no vault."

## Regras
- 57 dias é a MÉDIA de análise INSS (BEPS Jan/2026) — não é prazo máximo
- NUNCA dizer ao Founder que um caso está "atrasado no INSS" — dizer "acima da média"
- Exigências do INSS devem ser detectadas e reportadas com urgência
- Se encontrar caso sem data de protocolo, marque como "[DATA NÃO REGISTRADA — verificar]"
- Este relatório é ferramenta interna — NUNCA enviar diretamente ao cliente sem revisão do Founder
- Lembrete: a análise do INSS está fora do controle do MC. O diferencial é o monitoramento ativo e a transparência com o cliente (Correção 48h)
