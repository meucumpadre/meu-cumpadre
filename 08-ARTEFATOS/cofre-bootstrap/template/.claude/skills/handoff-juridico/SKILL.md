---
name: handoff-juridico
description: Prepara dossiê completo para transferência de caso à Dra. Juliana
  na fase E6 (Recursal/Judicial). Reúne documentos, gera resumo do histórico,
  e formata na estrutura para atuação advocatícia.
  Frases-gatilho: "handoff", "transferir para Juliana", "caso indeferido",
  "preparar recurso", "fase E6", "handoff jurídico".
rua:
  id: handoff-juridico
  nome: Handoff Jurídico (E6 → Dra. Juliana)
  tipo: skill
  versao: n/d
  status: INSTALADO
  papel: Prepara dossiê completo para transferência de caso à Dra. Juliana na fase
    E6 (recursal/judicial)
  gatilhos:
  - /handoff-juridico
  - handoff
  - transferir para Juliana
  - fase E6
  - preparar recurso
  entrega: dossiê de transferência formatado para atuação advocatícia
  metodo_fonte: MC-PROCESSO-Jornada_E0E7 (E6) · MC-PARTNER-JulianaMelo
  instancia_aci: C5
  camada_ase: L3
  compoe_com: []
  nao_confundir_com: []
  gate: R3
  zona: Vermelha
  lgpd_nota: 'PII de caso (CPF/NB/CID) · trafega sob stack soberana · Firewall OAB:
    atividade-fim é da advogada, MC só prepara o handoff'
  vedacoes_honradas:
  - Firewall-OAB
  - LGPD
  - D>C>V
  - Proof-First
  para_no_gate: handoff humano · MC NÃO pratica advocacia nem promete resultado
  custo:
    gasta_agente: false
    opt_in: false
    fan_out: null
  emite_audit: false
  depende_de: []
---

## Comando

`/handoff-juridico NOME-CLIENTE`

Exemplo: `/handoff-juridico JOÃO VILMAR`

## Execução

1. Localize todas as notas do cliente nas pastas `ClickUp/`
2. Leia o histórico completo: fase atual, datas de cada transição, documentos coletados, motivo do indeferimento (se registrado)
3. Gere o dossiê de handoff:

```markdown
# HANDOFF JURÍDICO — [NOME COMPLETO_CPF]
**Data do handoff:** [data de hoje DD/MM/AAAA]
**Preparado por:** Alessandro (Founder/CEO — atividade-meio)
**Destinatária:** Dra. Juliana Pereira de Melo (OAB-GO 38.662 — atividade-fim)

---

## 1. Resumo do caso
- **Cliente:** [nome completo]
- **CPF:** [CPF]
- **Benefício requerido:** [tipo]
- **Data de entrada no MC:** [data E0]
- **Data do protocolo INSS (DER):** [data E4]
- **Número do benefício/protocolo:** [NB se houver]
- **Resultado INSS:** [indeferido/exigência não cumprida/outro]
- **Motivo do indeferimento:** [transcrever se disponível]

## 2. Histórico da jornada
| Fase | Data | Ação | Responsável |
|------|------|------|-------------|
| E0 | [data] | [ação] | [resp] |
| E1 | [data] | [ação] | [resp] |
| ... | ... | ... | ... |

## 3. Documentos coletados
- [lista de todos os documentos que constam no caso]

## 4. Documentos pendentes
- [lista do que falta, se houver]

## 5. Observações do Founder
- [qualquer nota relevante de Alessandro sobre o caso]

## 6. Recomendação operacional
- [sugestão de caminho: recurso administrativo, ação judicial, complementação]

---

**FIREWALL OAB:** Este documento é instrução documental (atividade-meio).
A decisão sobre estratégia jurídica, peticionamento e representação é
prerrogativa exclusiva da Dra. Juliana Pereira de Melo (atividade-fim).
O MC orquestra. A advogada representa.
```

4. Salve o dossiê em `ClickUp/Projetos/Gestão de Processos/` com nome: `HANDOFF_[NOME]_[DATA].md`
5. Atualize o frontmatter da nota do cliente: `fase_jornada: E6`, `responsavel_atual: Dra. Juliana`

## Regras
- SEMPRE incluir o disclaimer de Firewall OAB ao final
- NUNCA sugerir tese jurídica específica — isso é atividade-fim da advogada
- A "Recomendação operacional" é sobre caminho processual genérico, NÃO sobre mérito
- Se dados estiverem faltando, marque como "[NÃO LOCALIZADO — verificar com Alessandro]"
- NUNCA fabricar dados ou preencher campos com informação inferida
