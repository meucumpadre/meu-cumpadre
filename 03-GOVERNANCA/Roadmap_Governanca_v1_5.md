

**MEU CUMPADRE**

**ROADMAP DE GOVERNANÇA**  
Priorizado por Risco Real

**5 Artefatos Operacionais Obrigatórios Antes do Piloto**

Cronograma | Responsáveis | Critérios de Aceite | Dependências

**DOCUMENTO CONFIDENCIAL**  
Fevereiro 2026 | Versão 1.0

# **1\. PREMISSA ESTRATÉGICA**

| *O Meu Cumpadre está sendo governado como se o documento fosse o produto. Este roadmap inverte essa lógica: governança não é camada adicional — é a infraestrutura sobre a qual o produto se sustenta.* |
| :---- |

Este documento nasce de um diagnóstico crítico que identificou cinco contradições estruturais entre a promessa do Meu Cumpadre — proteger os mais vulneráveis contra sistemas opacos — e a ausência de artefatos operacionais mínimos para cumprir essa promessa com integridade.

O roadmap prioriza por risco real: não pelo que é mais visível ao investidor, mas pelo que pode destruir o negócio operacional e juridicamente primeiro. A ordem de execução é deliberada: começa pelo dado (LGPD), passa pelo humano (operador), sobe para a regra (jurídico), estrutura a decisão (ADR), e fecha com a resposta ao imprevisto (Incident Response).

## **1.1 Contradições Identificadas vs. Artefatos de Resolução**

| \# | CONTRADIÇÃO | RISCO REAL | ARTEFATO | PRIORIDADE |
| ----- | :---- | :---- | :---- | :---- |
| 1 | LGPD como risco médio, dados sensíveis de hipervulneráveis | Violação mata confiança \= mata o negócio | **DPIA** | **P0 — CRÍTICO** |
| 2 | Estagiários Tier 1 sem protocolo operando dados sensíveis | Onde o negócio quebra primeiro: humano mal treinado | **Playbook Tier 1** | **P0 — CRÍTICO** |
| 3 | 3.265 regras sem processo de atualização | Regra desatualizada \= responsabilidade civil e ética | **Changelog Jurídico** | **P1 — ALTO** |
| 4 | 94% de precisão / 500K casos / blockchain sem especificação | Risco regulatório e reputacional em auditoria | **ADR** | **P1 — ALTO** |
| 5 | Nenhum protocolo para quando a IA errar em caso real | Erro sem resposta \= crise reputacional e jurídica | **Incident Response** | **P2 — MÉDIO** |

# **2\. VISÃO CONSOLIDADA DO ROADMAP**

O roadmap opera em 3 sprints de 4 semanas cada, totalizando 12 semanas até o piloto. Os artefatos P0 são executados em paralelo nas primeiras 4 semanas porque são bloqueadores absolutos: nenhum dado de usuário real pode ser processado sem eles.

| ARTEFATO | SPRINT 1 (Sem 1-4) | SPRINT 2 (Sem 5-8) | SPRINT 3 (Sem 9-12) |
| :---- | :---- | :---- | :---- |
| **DPIA** | **EXECUÇÃO COMPLETA** | Revisão DPO \+ Ajustes | Auditoria simulada |
| **Playbook Tier 1** | **EXECUÇÃO COMPLETA** | Teste com 5 estagiários piloto | Ajuste pós-feedback |
| **Changelog Jurídico** | Desenho do processo | **EXECUÇÃO COMPLETA** | 1ª revisão mensal rodada |
| **ADR** | Template \+ 3 primeiros ADRs | **EXECUÇÃO COMPLETA** | Validação com advisor técnico |
| **Incident Response** | Pesquisa \+ Benchmark | Rascunho \+ tabletop drill | **EXECUÇÃO COMPLETA** |

| Gate de Piloto: Nenhum dado real de usuário é processado até que os 5 artefatos tenham status “ACEITO” pelo responsável designado. Sem exceções. |
| :---- |

# **3\. ARTEFATO \#1 — DPIA (Data Protection Impact Assessment)**

| Prioridade | P0 — CRÍTICO | Bloqueador absoluto do piloto |
| :---- | :---- |
| **Base Legal** | Art. 38 da LGPD — Relatório de Impacto à Proteção de Dados |
| **Responsável** | Encarregado de Dados (DPO) a ser designado \+ Advogado LGPD externo |
| **Prazo** | Sprint 1 — Semanas 1 a 4 (versão completa entregue até Semana 4\) |
| **Orçamento** | R$ 15.000–25.000 (consultoria LGPD especializada \+ DPO part-time) |

## **3.1 Por que é P0**

O dado central do Meu Cumpadre é o mais sensível que existe no ordenamento jurídico brasileiro: CPF, dados previdenciários, histórico de saúde, situação habitacional, renda de idosos hipervulneráveis. Uma violação de dados não é risco “médio” — é risco existencial. Mata a confiança, que é o único ativo real com esse público. O DPIA não é um item de conformidade — é a fundação sobre a qual toda a operação se sustenta.

## **3.2 Escopo Mínimo Obrigatório**

### **A. Mapeamento de Fluxos de Dados Sensíveis**

Cada fluxo documentado com: tipo de dado pessoal sensível (Art. 5º, II), base legal para tratamento (Art. 7º e 11), finalidade específica, agentes de tratamento (controlador/operador), tempo de retenção e critério de descarte.

| FLUXO | DADOS | BASE LEGAL | RETENÇÃO | ACESSO | RISCO |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Onboarding WhatsApp** | CPF, nome, telefone, áudio | Consentimento (Art. 8º) | Enquanto ativo \+ 5 anos | IA \+ Tier 1 | **ALTO** |
| **Coleta Previdenciária** | CNIS, beneficio, histórico INSS | Exec. contrato (Art. 7º, V) | Duração do caso \+ 10 anos | Tier 1 \+ Tier 3 | **CRÍTICO** |
| **Acesso Gov.br (Human API)** | Credenciais, procuração, dados de sistema | Procuração (Portaria 10/2025) | Sessão Just-in-Time | Tier 1 supervisionado | **CRÍTICO** |
| **Dossiê de Saúde** | Laudos, diagnósticos, CID | Saúde (Art. 11, II, f) | Caso \+ 20 anos | Tier 2 \+ Tier 3 | **CRÍTICO** |
| **Dados Habitacionais** | Endereço, renda, composição familiar | Exec. contrato \+ Interesse leg. | Caso \+ 5 anos | IA \+ Tier 1 | **ALTO** |
| **Router-Ethics Decision Log** | Score, decisão, justificativa | Obrigação legal (Art. 20\) | Indefinido (auditoria) | Sistema \+ DPO | **MÉDIO** |

### **B. Medidas de Segurança Técnica (Art. 46\)**

O DPIA deve documentar: criptografia em repouso (AES-256 via Cloud KMS), criptografia em trânsito (TLS 1.3), controle de acesso baseado em função (RBAC por Tier), credenciais Just-in-Time com expiração automática, logging completo com hash de integridade (SHA-256, não “blockchain” genérico), política de backup e recuperação de desastres.

### **C. Avaliação de Necessidade e Proporcionalidade**

Para cada fluxo: justificar por que a coleta daquele dado específico é necessária, documentar alternativas consideradas com menor impacto na privacidade, avaliar proporcionalidade entre finalidade e volume de dados coletados.

## **3.3 Critérios de Aceite**

O DPIA é considerado “ACEITO” quando: todos os fluxos de dados sensíveis estão mapeados com base legal específica; cada fluxo tem responsável nomeado e prazo de retenção definido; medidas técnicas estão especificadas (não genéricas); um advogado LGPD assinou o documento como conforme; existe versão data e versionada.

## **3.4 Dependências**

Contratação de consultoria LGPD ou DPO part-time (Semana 0); definição final da arquitetura técnica de armazenamento; acesso ao roadmap técnico do produto para mapear fluxos reais.

# **4\. ARTEFATO \#2 — PLAYBOOK DE OPERADOR TIER 1**

| Prioridade | P0 — CRÍTICO | Bloqueador absoluto do piloto |
| :---- | :---- |
| **Justificativa** | Estagiários de R$1.500/mês acessando dados de idosos vulneráveis sem protocolo documentado |
| **Responsável** | Head de Operações \+ Jurídico Trabalhista |
| **Prazo** | Sprint 1 — Semanas 1 a 4 (versão operacional pronta para treinamento) |
| **Orçamento** | R$ 5.000–10.000 (consultoria RH/compliance \+ elaboração documental) |

## **4.1 Por que é P0**

A pergunta que define se o Meu Cumpadre é real: se amanhã um jornalista perguntar como você garante que um estagiário não acessa indevidamente dados de uma idosa de 70 anos com benefício represado — qual documento você abre? Este é esse documento. Sem ele, o risco jurídico (trabalhista \+ LGPD \+ consumerista) é iminente.

## **4.2 Conteúdo Obrigatório do Playbook**

### **A. Pré-Operação**

Critérios mínimos de seleção de estagiários (curso, perfil ético, verificação de antecedentes); NDA (Termo de Confidencialidade) estruturado com cláusula LGPD específica, penalidade por violação e vigência pós-contrato de 2 anos; termo de responsabilidade individual por dado acessado; checklist de onboarding com assinatura do estagiário.

### **B. Treinamento Codificado**

Módulo 1: O que são dados sensíveis e por que importam (2 horas). Módulo 2: Protocolo de acesso — o que pode, o que nunca pode, o que precisa de supervisão (3 horas). Módulo 3: Como falar com idosos vulneráveis — empatia, linguagem, limites (2 horas). Módulo 4: Protocolo de escalação — quando parar e chamar Tier 2 ou Tier 3 (1 hora). Avaliação de competência pós-treinamento: nota mínima 80% para operar. Reprovado: retreinamento obrigatório.

### **C. Protocolo Operacional Diário**

Cada operação de acesso a dado sensível registrada com: operador, timestamp, tipo de dado acessado, finalidade, duração da sessão. Credenciais Just-in-Time: estagiário solicita acesso, sistema concede por janela temporal limitada, log automático. Proibição absoluta: screenshots, cópia de dados para dispositivos pessoais, compartilhamento fora do sistema. Supervisão: ratio máximo de 10 estagiários por supervisor Tier 2\.

### **D. Protocolo de Desligamento**

Revogação imediata de acessos, devolução de equipamentos, lembrete formal do NDA, auditoria do log de acessos dos últimos 30 dias.

## **4.3 Critérios de Aceite**

O Playbook é “ACEITO” quando: NDA está redigido e aprovado por advogado; treinamento está codificado com avaliação; protocolo de acesso Just-in-Time está especificado tecnicamente; 5 estagiários piloto completaram o treinamento e passaram na avaliação; supervisão documentada está operacional.

# **5\. ARTEFATO \#3 — CHANGELOG JURÍDICO**

| Prioridade | P1 — ALTO | Necessário antes do piloto com dados reais |
| :---- | :---- |
| **Justificativa** | 3.265 regras codificadas sem processo de atualização. Direito previdenciário muda por portaria, STF, MP. |
| **Responsável** | Advogado Previdenciarista Sênior (externo ou contratado) \+ CTO |
| **Prazo** | Sprint 2 — Semanas 5 a 8 (processo completo \+ 1ª revisão realizada) |
| **Orçamento** | R$ 8.000–15.000/mês (advogado \+ ferramentas de monitoramento legislativo) |

## **5.1 Por que é P1**

Uma regra desatualizada aplicada a um caso real cria responsabilidade civil, ética e regulatória. Direito previdenciário muda por portaria do INSS, decisão do STF (ADIs 2.110/2.111), medida provisória, e resolução do CNPS. Sem processo formal de atualização, as 3.265 regras degradam silenciosamente. O usuário confia que a orientação está atualizada — e se não estiver, a promessa fundamental do produto é violada.

## **5.2 Estrutura do Processo**

### **A. Monitoramento Contínuo**

Fontes monitoradas: DOU (Diário Oficial da União), STF, STJ, TNU, portarias INSS, resoluções CNPS, medidas provisórias. Ferramenta: alerta automatizado (JusBrasil Pro, LegalOne ou similar) com filtros por matéria previdenciária, habitacional, tributária, consumerista. Cadência: varredura diária automatizada, revisão humana semanal.

### **B. Processo de Atualização**

Cada alteração segue fluxo formal: identificação da mudança (automática ou manual), análise de impacto nas regras existentes, proposta de alteração com justificativa legal, validação por advogado credenciado, implementação no sistema com versão e timestamp, teste de regressão (a mudança não quebra regras adjacentes), publicação com changelog versionado.

### **C. Formato do Changelog**

| VERSÃO | DATA | REGRA(S) | TIPO | FONTE LEGAL | VALIDADOR |
| :---- | :---- | :---- | :---- | :---- | :---- |
| v3.266 | 2026-03-15 | Regra \#1847 (tempo especial) | ALTERAÇÃO | Portaria INSS nº XX/2026 | Dr. \[Nome\], OAB/XX |
| v3.267 | 2026-03-20 | Regra \#2103 (BPC/LOAS) | ADIÇÃO | STF — RE XXXXX | Dr. \[Nome\], OAB/XX |

## **5.3 SLA de Atualização**

| TIPO DE MUDANÇA | SLA DE ATUALIZAÇÃO | ESCALAÇÃO |
| :---- | :---- | :---- |
| **Decisão STF com rep. geral / ADI** | **48 horas** | Advogado sênior \+ CTO |
| **Portaria INSS / Resolução CNPS** | **72 horas** | Advogado \+ analista de regras |
| **Medida Provisória** | **24 horas (análise) \+ 72h (implementação)** | Founder \+ Advogado \+ CTO |
| **Jurisprudência TNU / STJ** | 7 dias úteis | Advogado |
| **Revisão periódica geral** | Mensal (1ª semana de cada mês) | Comitê de governança jurídica |

# **6\. ARTEFATO \#4 — REGISTRO DE DECISÕES DE ARQUITETURA (ADR)**

| Prioridade | P1 — ALTO | Fundamento de rastreabilidade para investidores e reguladores |
| :---- | :---- |
| **Justificativa** | Afirmações de 94% precisão, 500K casos, log blockchain sem especificação |
| **Responsável** | CTO \+ Founder (Alessandro) |
| **Prazo** | Sprint 2 — Semanas 5 a 8 (template \+ 10 ADRs fundamentais) |
| **Orçamento** | Custo interno (tempo de engenharia) — R$ 0 direto |

## **6.1 Por que é P1**

Quando um investidor perguntar “como vocês chegaram a 94% de precisão?”, quando a OAB questionar a metodologia do Router-Ethics, quando um auditor pedir evidência do “log blockchain” — o ADR é o documento que se abre. Sem ele, cada afirmação técnica do pitch é uma promessa sem lastro.

## **6.2 Template ADR**

Cada decisão de arquitetura é documentada com o seguinte formato:

| CAMPO | DESCRIÇÃO |
| :---- | :---- |
| **ADR-XXXX** | Identificador único sequencial |
| **Título** | Nome descritivo da decisão |
| **Status** | Proposto | Aceito | Depreciado | Substituído |
| **Contexto** | Problema que motivou a decisão |
| **Decisão** | O que foi decidido e implementado |
| **Alternativas Consideradas** | Opções avaliadas e por que foram descartadas |
| **Consequências** | Trade-offs aceitos, riscos residuais |
| **Responsável** | Quem aprovou a decisão (nome \+ data) |
| **Evidência** | Dados, benchmarks ou testes que suportam a decisão |

## **6.3 Os 10 ADRs Prioritários**

Estes são os ADRs que precisam ser escritos primeiro, porque correspondem às afirmações mais questionáveis do material atual:

| ADR | TÍTULO | RESOLVE | AÇÃO IMEDIATA |
| :---- | :---- | :---- | :---- |
| **ADR-001** | Metodologia de validação do Router-Ethics | Afirmação de 94% / 500K casos | Remover ou substituir por meta com metodologia |
| **ADR-002** | Camada de log de auditoria ética (Circuit Breaker) | “Log blockchain” sem especificação | Especificar: SHA-256 hash chain, não blockchain |
| **ADR-003** | Arquitetura de criptografia e vault | Cloud KMS / AES-256 sem detalhe | Documentar implementação real |
| **ADR-004** | Modelo de acesso Just-in-Time para Human API | Credenciais de estagiários | Especificar mecanismo \+ TTL \+ revogação |
| **ADR-005** | Separação atividade-meio vs. atividade-fim | Risco OAB | Documentar os 30 nós do Bloco R com lógica |
| **ADR-006** | WhatsApp como canal primário e LGPD | Coleta via áudio/mensagem | Documentar base legal para processamento de áudio |
| **ADR-007** | Modelo de precificação e success fee | 30% retroativos — limites legais | Parecer jurídico sobre teto de cobrança |
| **ADR-008** | Procuração eletrônica e acesso Gov.br | Portaria 10/2025 — escopo | Documentar limites legais do mandato |
| **ADR-009** | Threshold de handoff (Score ≥ 39\) | Calibração do Router-Ethics | Documentar como o threshold foi definido |
| **ADR-010** | Escolha de infraestrutura cloud e jurisdição de dados | LGPD \+ transferência internacional | Confirmar que dados ficam em servidores BR |

# **7\. ARTEFATO \#5 — INCIDENT RESPONSE PLAN**

| Prioridade | P2 — MÉDIO | Necessário antes da operação com dados reais em escala |
| :---- | :---- |
| **Justificativa** | Nenhum protocolo para quando a IA errar em caso real de idoso vulnerável |
| **Responsável** | Founder (Alessandro) \+ CTO \+ Advogado \+ Head de Ops |
| **Prazo** | Sprint 3 — Semanas 9 a 12 (plano completo \+ 1 simulação tabletop realizada) |
| **Orçamento** | R$ 5.000–10.000 (elaboração \+ simulação) |

## **7.1 Por que é P2 (e não menor)**

A IA vai errar. Não é questão de “se”, é questão de “quando”. Quando o Router-Ethics classificar um caso complexo como simples e um idoso perder prazo de benefício, quando um estagiário acessar dado indevido, quando a base de regras estiver desatualizada e orientar errado — o que acontece? Sem Incident Response Plan, a resposta será improvisada. E improvisar com dados de idosos vulneráveis é o caminho mais rápido para uma crise reputacional que mata a empresa.

## **7.2 Classificação de Incidentes**

| SEVERIDADE | DESCRIÇÃO | NOTIFICAÇÃO | TEMPO RESPOSTA | COMUNICAÇÃO |
| :---- | :---- | :---- | :---- | :---- |
| **SEV-1 CRÍTICO** | Vazamento de dados sensíveis, acesso não autorizado em escala, erro que causa perda de benefício | ANPD \+ usuários afetados \+ diretoria \+ advogado | **1 hora (contentar) / 24h (comunicar)** | Comunicado público \+ notificação individual |
| **SEV-2 ALTO** | Erro de classificação do Router-Ethics, regra desatualizada aplicada, estagiário acessou dado fora do escopo | Head Ops \+ CTO \+ advogado \+ usuário afetado | **4 horas (containment) / 48h (resolução)** | Contato direto com usuário \+ registro interno |
| **SEV-3 MÉDIO** | Bug no sistema sem exposição de dados, atraso no processamento, falha de integração | CTO \+ equipe técnica | 24 horas (análise) / 7 dias (correção) | Registro interno \+ atualização ao usuário se impactado |

## **7.3 Protocolo de Resposta (para cada severidade)**

Detecção: como o incidente é identificado (monitoramento automático, relato de usuário, auditoria interna). Containment: ação imediata para limitar o dano (suspensão de acesso, isolamento de dados, pausa do serviço afetado). Investigação: análise de causa raiz com evidências documentadas. Remediação: correção do problema \+ compensação ao usuário (reprocessamento, acompanhamento prioritário, comunicação transparente). Postmortem: documento público interno com lições aprendidas e mudanças implementadas. Comunicação: template pré-aprovado para cada severidade, com porta-voz designado.

## **7.4 Tabletop Drill Obrigatório**

Antes do piloto, simular pelo menos 1 cenário SEV-1 e 1 SEV-2 com toda a equipe. Cenário sugerido SEV-1: vazamento de 50 registros previdenciários por falha de credencial de estagiário. Cenário sugerido SEV-2: Router-Ethics classifica caso complexo como simples, idosa perde prazo de requerimento. Documentar o resultado da simulação, gaps identificados e ajustes feitos.

# **8\. ORÇAMENTO CONSOLIDADO E GOVERNANÇA CONTÍNUA**

## **8.1 Investimento Total até o Piloto (12 semanas)**

| ARTEFATO | INVESTIMENTO | TIPO | RECORRÊNCIA |
| :---- | :---- | :---- | :---- |
| **DPIA** | **R$ 15.000–25.000** | Consultoria \+ DPO | Revisão anual: R$ 5–10K |
| **Playbook Tier 1** | **R$ 5.000–10.000** | RH \+ Compliance | Atualização trimestral: R$ 2K |
| **Changelog Jurídico** | **R$ 8.000–15.000/mês** | Advogado \+ Ferramentas | Permanente (custo operacional) |
| **ADR** | R$ 0 (custo interno) | Tempo de engenharia | Contínuo (cada nova decisão) |
| **Incident Response Plan** | **R$ 5.000–10.000** | Elaboração \+ Simulação | Drill semestral: R$ 3K |
| **TOTAL (one-time)** | **R$ 33.000–60.000** |  |  |
| **TOTAL RECORRENTE (mensal)** | **R$ 10.000–20.000/mês** |  |  |

## **8.2 Estrutura de Governança Contínua**

Após os 5 artefatos estarem operacionais, a governança não para. Ela se torna rotina organizacional com a seguinte cadência:

| CADÊNCIA | ATIVIDADE | RESPONSÁVEL |
| :---- | :---- | :---- |
| **Diário** | Varredura legislativa automatizada \+ log de acesso Tier 1 | Sistema \+ Head Ops |
| **Semanal** | Revisão de alertas legislativos \+ auditoria de acessos \+ métricas de incidentes | Advogado \+ CTO \+ Head Ops |
| **Mensal** | Revisão geral de regras \+ ADR review \+ NPS de conformidade | Comitê de Governança |
| **Trimestral** | Atualização do Playbook Tier 1 \+ revalidação de treinamento | Head Ops \+ RH |
| **Semestral** | Tabletop drill de Incident Response \+ auditoria DPIA | Founder \+ DPO \+ equipe completa |
| **Anual** | Revisão completa do DPIA \+ auditoria externa \+ relatório ANPD | DPO \+ Consultoria externa |

# **9\. GATE DE PILOTO — CHECKLIST DE CONFORMIDADE**

| *Nenhum dado real de usuário é processado até que todos os itens abaixo estejam marcados como “CONFORME”. Este checklist é o contrato do Meu Cumpadre consigo mesmo.* |
| :---- |

| REQUISITO | STATUS | VALIDADOR |
| :---- | :---- | :---- |
| DPIA completo com todos os fluxos mapeados | **\[ \] CONFORME** | DPO \+ Advogado LGPD |
| Base legal documentada para cada tipo de dado sensível | **\[ \] CONFORME** | Advogado LGPD |
| Medidas técnicas de segurança implementadas e testadas | **\[ \] CONFORME** | CTO |
| NDA assinado por todos os operadores Tier 1 | **\[ \] CONFORME** | Jurídico |
| Treinamento completo \+ avaliação ≥ 80% para cada operador | **\[ \] CONFORME** | Head Ops |
| Acesso Just-in-Time operacional com logging automático | **\[ \] CONFORME** | CTO |
| Processo de atualização jurídica formalizado com SLAs | **\[ \] CONFORME** | Advogado Sênior |
| 1ª revisão mensal do changelog executada | **\[ \] CONFORME** | Advogado Sênior |
| 10 ADRs prioritários documentados e aprovados | **\[ \] CONFORME** | CTO \+ Founder |
| Afirmações de pitch alinhadas com ADRs (94%, 500K removidos/corrigidos) | **\[ \] CONFORME** | Founder |
| Incident Response Plan completo com templates de comunicação | **\[ \] CONFORME** | Head Ops \+ CTO |
| Pelo menos 1 tabletop drill realizado e documentado | **\[ \] CONFORME** | Equipe completa |

*A governança não é o que você documenta.*

**É o documento que você abre quando te perguntam.**

Meu Cumpadre — Roadmap de Governança v1.0 — Fevereiro 2026  
**CONFIDENCIAL**