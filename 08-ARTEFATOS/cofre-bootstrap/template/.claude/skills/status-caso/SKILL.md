---
name: status-caso
description: Gera resumo de status de um caso/cliente a partir das notas do vault.
  Use quando o Founder perguntar sobre andamento, situação, ou status de qualquer
  cliente. Frases-gatilho: "status do cliente", "como está o caso", "situação da",
  "andamento do processo", "resumo do caso".
rua:
  id: status-caso
  nome: Status de Caso
  tipo: skill
  versao: n/d
  status: INSTALADO
  papel: Gera resumo de status de um caso/cliente a partir das notas do vault
  gatilhos:
  - /status-caso
  - status do cliente
  - como está o caso
  - andamento do processo
  entrega: resumo de status do caso
  metodo_fonte: Jornada E0-E7 (estados) · notas do Vault
  instancia_aci: C2
  camada_ase: L2
  compoe_com: []
  nao_confundir_com: []
  gate: R1
  zona: Amarela
  lgpd_nota: lê notas de caso (refs) · Amarela · sem PII plain text
  vedacoes_honradas:
  - LGPD
  - D>C>V
  - Proof-First
  para_no_gate: resumo de leitura · não altera estado nem promete prazo
  custo:
    gasta_agente: false
    opt_in: false
    fan_out: null
  emite_audit: false
  depende_de: []
---

## Comando

`/status-caso NOME` (parcial funciona — busca por correspondência)

Exemplo: `/status-caso JER001`

## Execução

1. Busque notas que contenham o nome informado nas pastas:
   - `ClickUp/Projetos/Gestão de Processos/`
   - `ClickUp/Comercial/CRM/`
   - Qualquer subpasta de `ClickUp/` que mencione o nome

2. Leia o frontmatter de cada nota encontrada (status, fase, prioridade, datas)

3. Gere um resumo estruturado:

```
## Status: [NOME COMPLETO_CPF]

**Fase atual:** E[X] — [Nome da fase]
**Status:** [ativo/pendente/arquivado]
**Responsável atual:** [nome]
**Última atualização:** [data]
**Tempo na fase atual:** [X dias]

### Documentos
- ✅ [documentos já coletados]
- ❌ [documentos pendentes]

### Histórico recente
- [data] — [última ação registrada]
- [data] — [ação anterior]

### Próximas ações
- [o que precisa ser feito para avançar de fase]
```

4. Se houver múltiplas notas (fases diferentes do mesmo cliente), consolide em ordem cronológica

## Regras
- Se não encontrar o cliente, informe claramente: "Cliente não encontrado no vault"
- NUNCA inventar dados — se um campo não estiver preenchido, mostre como "[não informado]"
- Se o caso estiver na fase E5 (Watchdog), mencione os 57 dias médios de análise INSS
- Se o caso estiver na fase E6, mencione que Dra. Juliana é a responsável
