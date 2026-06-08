---
name: diario
description: Cria nota diária padronizada para registro operacional do Founder.
  Use no início ou final do dia para documentar atividades, decisões e pendências.
  Frases-gatilho: "diário de hoje", "registro do dia", "nota diária",
  "o que aconteceu hoje", "abrir diário".
rua:
  id: diario
  nome: Diário Operacional do Founder
  tipo: skill
  versao: n/d
  status: INSTALADO
  papel: Cria nota diária padronizada para registro operacional do Founder
  gatilhos:
  - /diario
  - diário
  - registrar o dia
  entrega: nota diária padronizada
  metodo_fonte: '[FONTE PENDENTE]'
  instancia_aci: C1
  camada_ase: L1
  compoe_com: []
  nao_confundir_com: []
  gate: R1
  zona: Verde
  lgpd_nota: registro interno · sem PII de cliente
  vedacoes_honradas:
  - D>C>V
  para_no_gate: escreve em C1 (Documentação), não no Vault canônico
  custo:
    gasta_agente: false
    opt_in: false
    fan_out: null
  emite_audit: false
  depende_de: []
---

## Comando

`/diario` (usa a data de hoje automaticamente)

## Execução

1. Crie o arquivo em `06-OPERACOES/` com nome: `DIARIO_[AAAA-MM-DD].md`

2. Use este template:

```markdown
---
title: "Diário — [DD/MM/AAAA]"
date: [AAAA-MM-DD]
type: diario
tags:
  - diario
  - operacional
---

# Diário — [DD/MM/AAAA] ([dia da semana])

## Casos atendidos hoje
- 

## Decisões tomadas
- 

## Pendências para amanhã
- 

## Comunicações relevantes
- [ ] WhatsApp:
- [ ] ClickUp:
- [ ] Reuniões:

## Reflexões / Observações
> 

## Métricas do dia
- Clientes atendidos: 
- Protocolos realizados: 
- Fase mais movimentada: 
```

3. Se já existir um diário de hoje, abra o existente ao invés de criar novo

4. Após criar, informe: "Diário de [data] criado em 06-OPERACOES/"

## Regras
- Um diário por dia — nunca duplicar
- Formato de data no nome do arquivo: AAAA-MM-DD (para ordenação cronológica)
- Formato de data no título: DD/MM/AAAA (padrão brasileiro para leitura)
- Não preencher os campos — o Founder preenche manualmente ou dita pro Claude
- Se o Founder pedir pra preencher baseado na conversa do dia, faça — mas marque dados incertos com [?]
