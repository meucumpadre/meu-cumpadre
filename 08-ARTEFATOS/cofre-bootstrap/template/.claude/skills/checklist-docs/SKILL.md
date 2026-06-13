---
name: checklist-docs
description: Lista documentos necessários por tipo de benefício previdenciário.
  Use quando precisar saber quais documentos coletar, quais estão pendentes, ou
  gerar checklist para enviar ao cliente.
  Frases-gatilho: "documentos pendentes", "checklist", "quais documentos",
  "o que falta", "documentação necessária".
rua:
  id: checklist-docs
  nome: Checklist de Documentos por Benefício
  tipo: skill
  versao: n/d
  status: INSTALADO
  papel: Lista documentos necessários por tipo de benefício previdenciário
  gatilhos:
  - /checklist-docs
  - checklist de documentos
  - que documentos preciso
  entrega: checklist de documentos por benefício
  metodo_fonte: '[FONTE PENDENTE: POPs Jornada E0-E7]'
  instancia_aci: transversal
  camada_ase: L2
  compoe_com: []
  nao_confundir_com: []
  gate: R1
  zona: Verde
  lgpd_nota: genérico por benefício · sem PII
  vedacoes_honradas:
  - Proof-First
  - D>C>V
  para_no_gate: ferramenta operacional · não escreve canônico
  custo:
    gasta_agente: false
    opt_in: false
    fan_out: null
  emite_audit: false
  depende_de: []
---

## Comando

`/checklist-docs tipo-beneficio` ou `/checklist-docs NOME-CLIENTE`

Exemplos:
- `/checklist-docs aposentadoria-rural`
- `/checklist-docs JER001`

## Checklists por tipo de benefício

### Aposentadoria Rural (B41)
- [ ] RG e CPF
- [ ] Certidão de nascimento ou casamento
- [ ] Comprovante de residência
- [ ] CNIS (Cadastro Nacional de Informações Sociais)
- [ ] Autodeclaração de atividade rural (formulário INSS)
- [ ] Declaração do sindicato rural (se disponível)
- [ ] Comprovantes de atividade rural: GPS, ITR, contratos de arrendamento, notas de produtor, bloco de notas
- [ ] Certidão de casamento com cônjuge lavrador (se aplicável)
- [ ] Prova de atividade rural em regime de economia familiar
- [ ] Documentos de propriedade/posse: escritura, contrato, DAP

### BPC/LOAS (B87/B88)
- [ ] RG e CPF
- [ ] Comprovante de residência
- [ ] CadÚnico atualizado (NIS)
- [ ] Comprovante de renda familiar (todos os membros)
- [ ] Laudo médico atualizado (se BPC por deficiência — B87)
- [ ] Certidão de nascimento dos menores do grupo familiar
- [ ] Declaração de composição familiar

### Aposentadoria por Idade Urbana (B41)
- [ ] RG e CPF
- [ ] Certidão de nascimento ou casamento
- [ ] CTPS (todas as páginas, inclusive em branco)
- [ ] CNIS
- [ ] Comprovante de residência
- [ ] Carnês de contribuição (GPS) se contribuinte individual

### Auxílio-Doença / Auxílio por Incapacidade Temporária (B31)
- [ ] RG e CPF
- [ ] CNIS
- [ ] Laudo médico atualizado (com CID, data de início da incapacidade)
- [ ] Exames complementares
- [ ] Atestados médicos
- [ ] Receituários e prescrições médicas
- [ ] Relatório de internação (se houver)
- [ ] CTPS ou comprovante de vínculo/contribuição

### Pensão por Morte (B21)
- [ ] RG e CPF do(a) requerente
- [ ] Certidão de óbito do(a) segurado(a)
- [ ] Certidão de casamento ou declaração de união estável
- [ ] CNIS do(a) falecido(a)
- [ ] Comprovante de dependência econômica (se não for cônjuge/filho menor)
- [ ] RG e CPF dos dependentes

### Atividade Especial / Aposentadoria Especial (B46)
- [ ] RG e CPF
- [ ] CNIS
- [ ] CTPS (todas as páginas)
- [ ] PPP (Perfil Profissiográfico Previdenciário) de TODOS os vínculos
- [ ] LTCAT (Laudo Técnico das Condições Ambientais do Trabalho)
- [ ] Laudos de insalubridade/periculosidade
- [ ] Contracheques demonstrando adicionais

### Acidente de Trabalho — Reversão B31→B91 (NTEP)
- [ ] RG e CPF
- [ ] CNIS
- [ ] Laudo médico com CID da doença/lesão
- [ ] CAT (Comunicação de Acidente de Trabalho) — se existir
- [ ] PPP do vínculo onde ocorreu o acidente/doença
- [ ] CNAE da empresa empregadora
- [ ] Nexo Técnico Epidemiológico (cruzamento CID × CNAE)
- [ ] Histórico clínico e exames

## Execução

1. Se o Founder informou o **tipo de benefício**: mostre o checklist correspondente
2. Se o Founder informou o **nome do cliente**: leia a nota do cliente, identifique o tipo de benefício, e mostre o checklist com os itens já coletados marcados (✅) e os pendentes (❌)
3. Formate de forma que possa ser copiado e enviado ao cliente via WhatsApp

## Regras
- Se o tipo de benefício não estiver nos checklists acima, informe: "Tipo de benefício não mapeado — verificar com Alessandro"
- Checklists são orientação operacional, NÃO parecer jurídico (Firewall OAB)
- NUNCA prometer que a documentação completa garante concessão (Correção 48h)
