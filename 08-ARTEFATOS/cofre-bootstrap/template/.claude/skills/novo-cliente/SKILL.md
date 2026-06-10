---
name: novo-cliente
description: Cria nota padronizada para novo cliente no vault. Use quando um
  cliente for cadastrado, fechado, ou iniciar a jornada previdenciária.
  Frases-gatilho: "novo cliente", "cadastrar cliente", "entrada de cliente",
  "abrir caso".
rua:
  id: novo-cliente
  nome: Entrada de Novo Cliente
  tipo: skill
  versao: n/d
  status: INSTALADO
  papel: Cria nota padronizada para novo cliente no vault (início da jornada previdenciária)
  gatilhos:
  - /novo-cliente
  - novo cliente
  - cadastrar cliente
  - abrir caso
  entrega: nota de cliente padronizada
  metodo_fonte: Jornada E0-E7 (E0/E1)
  instancia_aci: C1
  camada_ase: L1
  compoe_com: []
  nao_confundir_com: []
  gate: R1
  zona: Vermelha
  lgpd_nota: RECEBE CPF · PII Vermelha · NÃO persistir PII plain text no Vault (#5/#8)
    · senha gov.br só Bitwarden (ADR-009a)
  vedacoes_honradas:
  - LGPD
  - D>C>V
  - Firewall-OAB
  para_no_gate: intake operacional · não pratica advocacia nem promete prazo
  custo:
    gasta_agente: false
    opt_in: false
    fan_out: null
  emite_audit: false
  depende_de: []
---

## Comando

`/novo-cliente NOME COMPLETO_CPF tipo-beneficio`

Exemplo: `/novo-cliente MARIA DA CONCEIÇÃO DOMINGUES_04422675508 aposentadoria-rural`

## Execução

1. Crie o arquivo em `ClickUp/Comercial/CRM/Gestão de Clientes/` com nome: `NOME COMPLETO_CPF.md`

2. Use este frontmatter YAML:

```yaml
---
title: "[NOME COMPLETO]"
cpf: "[CPF]"
tipo_beneficio: "[tipo informado]"
fase_jornada: E0
status: ativo
data_entrada: "[data de hoje DD/MM/AAAA]"
responsavel_atual: Gilberto
consentimento_lgpd: pendente
documentos_completos: false
tags:
  - cliente
  - fase-e0
  - [tipo-beneficio]
---
```

3. Corpo da nota:

```markdown
# [NOME COMPLETO]

## Dados do caso
- **CPF:** [CPF]
- **Benefício pretendido:** [tipo]
- **Fase atual:** E0 — Sinal Fraco
- **Responsável:** Gilberto (atendimento)
- **Data de entrada:** [data]

## Checklist inicial (E0→E1)
- [ ] Primeiro contato realizado
- [ ] Consentimento LGPD obtido
- [ ] Perfil de elegibilidade verificado
- [ ] Documentos mínimos informados ao cliente

## Histórico
### [data] — Abertura do caso
Caso aberto via [WhatsApp/indicação/formulário]. Tipo de benefício pretendido: [tipo].

## Observações
```

4. Após criar, confirme ao Founder: nome do arquivo, pasta, e fase inicial.

## Regras
- NUNCA criar nota sem CPF — é a chave de identificação
- Consentimento LGPD começa como "pendente" — só muda quando confirmado
- Nomenclatura obrigatória: NOME COMPLETO_CPF (tudo maiúsculo, underscore antes do CPF)
- Se o tipo de benefício não for informado, pergunte antes de criar
