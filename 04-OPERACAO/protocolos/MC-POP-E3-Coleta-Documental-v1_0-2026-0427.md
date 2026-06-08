---
tipo: pop
subtipo: protocolo-operacional-padrao
codigo: MC-POP-E3-Coleta-Documental
versao: 1.0
data-criacao: 2026-04-27
produzido-por: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: SELADO
revisao-pendente: cronometragem A4 em Hib001 → calibração v1.1
tags: [pop, e3, coleta-documental, s1-ativo, bitwarden, ocr, qa, beto-executa, alessandro-supervisiona]
caminho-vault: 06-OPERACOES/protocolos/MC-POP-E3-Coleta-Documental-v1_0-2026-0427.md
relaciona-com:
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1.1-2026-0427
  - MC-SPEC-Drive-Estrutura-v1.0-2026-0427
  - MC-POP-Bitwarden-Custodia-v1.0-2026-0427
  - MC-POP-E2-Triagem-Deliberacao-v1.0-2026-0427
  - MC-ADR-009b-TresEstados-Custodia-Dossie-v1.0-2026-0417
  - 0_GRIMORIO_PREVIDENCIARIO_v2 (Caps. 5, 6 — cenários documentais por espécie)
classificacao: TRADE SECRET (LPI arts. 195 XI/XII)
---

# MC-POP-E3 — Coleta Documental Progressiva

> **Posição na Jornada:** E2 (Triagem) → **E3 (Coleta Documental)** → E3b (QA Dossiê) → E4 (Protocolo INSS)
> **Custo médio mapeado:** R$ 49,38 · **Tempo médio:** ~340 minutos cumulativos (mas estendidos por **dias ou semanas** de wall-clock — coleta progressiva, não contínua)
> **Estado de custódia:** **S1 ATIVO** durante toda a etapa
> **Etapa mais longa em tempo de operador antes do protocolo · onde Bitwarden é mais usado**

---

## 1. Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo (1 frase)** | Coletar progressivamente todos os documentos necessários ao dossiê Proof-First do caso, processá-los (OCR, validação, hash), organizá-los na pasta Drive padronizada, e entregar ao final um dossiê completo apto a passar pelo QA T3 (POP-E3b) e ser protocolado em E4. |
| **Gatilho** | Task ClickUp em status `E3-Coleta` produzida pelo POP-E2 (com pasta Drive criada, manifesto inicializado, contrato Φ₁ assinado, 1ª parcela paga, Seção 3 do manifesto preenchida por Alessandro). |
| **Operador primário** | Beto (Anjo T2 — coleta + organização + comunicação com cidadão) |
| **Suporte IA** | Google Vision OCR (processamento docs físicos) · Gemini Flash (NLU em respostas WhatsApp) |
| **Supervisor QA** | Alessandro (T3) — valida documentos + atualiza Confidence determinístico em tempo real |
| **Tempo cumulativo** | ~340 min de tempo de operador efetivo |
| **Tempo wall-clock** | 7-30 dias dependendo da vertical (rural com docs fragmentados pode chegar a 60 dias — Cenário 4 do Grimório §5.4.4) |
| **Custo estimado** | R$ 49,38 (alocação de tempo + IA + storage + custos operacionais) |
| **Status A4** | Estimativa de engenharia — calibrar com Hib001 |

---

## 2. Princípios invioláveis aplicáveis a este POP

### 2.1 Princípio fundacional: COLETA PROGRESSIVA, NUNCA FORMULÁRIO

Princípio 3 da Jornada Operacional Mestre (`MC-PROCESSO-Jornada_E0E7_Mestre-v1.1`):

> *"Toda coleta documental é progressiva, em pequenos blocos, com explicação do porquê de cada documento. Formulários gigantes causam abandono em 80%+ dos casos com perfil hipervulnerável."*

**Aplicação operacional:**
- Beto solicita **3-5 documentos por vez**, no máximo
- Cada bloco de solicitação tem **mensagem coloquial explicando o porquê**
- Aguarda chegar a maioria do bloco antes de pedir próximo bloco
- Ritmo respeita o cidadão (idoso pode levar dias para organizar UMA certidão)

### 2.2 Demais princípios

1. **D > C > V** — se cidadão demonstrar fadiga aguda (D34) ou crise emocional (D01-D04) durante coleta → pausar imediatamente, escalar a Alessandro.
2. **Firewall OAB** — durante a coleta, evitar **explicar tese jurídica** ao cidadão. Quem explica direito é advogado; MC organiza papéis.
3. **Proof-First** — todo documento recebido tem hash SHA-256 calculado · todo documento rejeitado tem motivo registrado.
4. **LGPD** — documentos brutos vivem em S1 cifrado (Drive operacional MC) · TTL 30-60 dias · descarte em D+7 da entrega do dossiê.
5. **Bitwarden custódia** — toda vez que Beto precisar acessar gov.br do cidadão (CNIS, cartas de exigência, comprovante de residência via gov.br) → executar **PROTOCOLO B do POP-Bitwarden**.
6. **Pasta Drive como única fonte** — nada de documento ficar arquivado no WhatsApp · transferência imediata para Drive após recebimento.
7. **Versionamento estrito** — nomenclatura segue Padrão B do MC-SPEC-Drive (`tipo-curto-contexto-YYYYMMDD.ext`).
8. **Updates frequentes do manifesto** — toda chegada/validação/rejeição vai pra Seção 4 e Seção 5 do `00_manifesto.md`.

---

## 3. Inputs obrigatórios

- Pasta Drive padronizada criada (POP-DRIVE-001 executado em E2)
- `00_manifesto.md` com cabeçalho YAML completo + Seção 3 (Tese) preenchida por Alessandro
- Vertical confirmada → módulos `01_brutos/01e..i/` criados conforme Tabela §3.3 do SPEC-Drive
- Contrato Φ₁ assinado · 1ª parcela recebida
- Acesso Beto ao Bitwarden Org MC (PROTOCOLO B disponível)
- Acesso Beto ao Google Vision API (OCR · em Z3 pode ser substituído por OCR manual via cópia/PDF-OCR)
- Acesso Beto ao Grimório Previdenciário v2 (referência de cenários documentais)
- Lista de documentos por vertical (§4.1 abaixo)

---

## 4. Checklists por vertical

> ⚠️ **Estes checklists são por vertical confirmada em E2.** Para casos multi-vertical (ex: Hib001 = híbrida = rural + urbana), aplicar checklist combinado.

### 4.1 Tronco comum (TODAS as verticais)

- [ ] **RG ou CNH** (frente e verso) → `01_brutos/01a_identidade/`
- [ ] **CPF** (pode estar no RG/CNH — não exige documento separado) → `01_brutos/01a_identidade/`
- [ ] **Comprovante de residência** (≤ 3 meses) → `01_brutos/01c_residencia/`
- [ ] **Certidão de nascimento** (inteiro teor de preferência) → `01_brutos/01a_identidade/`
- [ ] **Certidão de casamento** se houver (inteiro teor) → `01_brutos/01a_identidade/`
- [ ] **CNIS completo** (extraído do gov.br via PROTOCOLO B Bitwarden) → `01_brutos/01b_cnis-vinculos/`
- [ ] **CTPS completa** (todas as páginas — frente, qualificação civil, contratos) → `01_brutos/01b_cnis-vinculos/`

### 4.2 Vertical Rural / Híbrida (Hib001 é exemplo) — `01e_rural/`

> Referência: Grimório Previdenciário v2, Cap. 5 (200+ tipos de documentos rurais)

**Categoria 1 — Identidade rural:**
- [ ] CTPS com profissão "lavrador" (se houver)
- [ ] Certidão de nascimento dos pais (inteiro teor — para mostrar profissão rural dos genitores)
- [ ] Certidão de casamento inteiro teor (verificar campo "endereço rural")

**Categoria 2 — Propriedade e Posse:**
- [ ] Escritura/matrícula rural OU contrato de arrendamento/parceria/meação
- [ ] ITR dos anos relevantes (Imposto Territorial Rural)
- [ ] CCIR INCRA · CAR (Cadastro Ambiental Rural)

**Categoria 3 — Produção:**
- [ ] Bloco de notas de produtor rural
- [ ] Notas fiscais de venda de produtos
- [ ] Contratos com cooperativas

**Categoria 4 — Entidades:**
- [ ] Inscrição INCRA pessoa física (DAP/CAF)
- [ ] Filiação ao sindicato rural (carteirinha + comprovantes de mensalidade)
- [ ] Associação de produtores rurais

**Categoria 5 — Financiamento:**
- [ ] Contrato PRONAF
- [ ] Financiamento bancário rural (BB, BNB)
- [ ] PROAGRO (seguro rural)

**Categoria 6 — Documentos indiretos** (poderosos quando primários faltam):
- [ ] Histórico escolar de escola rural (do segurado ou dos filhos)
- [ ] Prontuário SUS com profissão "lavrador" registrada
- [ ] Caderneta de vacinação dos filhos (com profissão dos pais)
- [ ] CadÚnico/Bolsa Família com perfil rural
- [ ] GTA (Guia de Trânsito Animal)

**Categoria 7 — Prova complementar:**
- [ ] Termos de testemunhas de vizinhança (proprietários adjacentes — dados completos)
- [ ] Declaração de comunidade tradicional (se aplicável)
- [ ] Sentença judicial trabalhista rural (se houver)

**Documento estratégico (em extinção):**
- [ ] **DAP — Declaração de Aptidão ao Pronaf** (ou CAF — Cadastro da Agricultura Familiar, sucessor)
- [ ] **Anexo 8 — Autodeclaração de Segurado Especial** (formulário INSS, força probatória boa)

### 4.3 Vertical Incapacidade (B31/B32/B91/B92/B42/B43) — `01f_medico/`

- [ ] Atestados médicos atualizados (≤ 6 meses preferível) — todos com CID-10
- [ ] Receituários médicos (medicação contínua)
- [ ] Exames complementares (laboratoriais, imagem)
- [ ] Laudos especializados (se aplicável: oncologia, neurologia, ortopedia, infectologia, psiquiatria)
- [ ] Cartão de internação hospitalar (se houver)
- [ ] Histórico de afastamentos no CNIS
- [ ] Para B91/B92/B43 (acidentário): **CAT** (Comunicação de Acidente de Trabalho) emitida pelo empregador
- [ ] Para B91/B92/B43: **PPP** do empregador (perfil profissiográfico)
- [ ] Para HIV/AIDS: laudo de infectologista (Lei 15.157/2025)

### 4.4 Vertical Especial (B46) — `01g_especial/`

- [ ] **PPP — Perfil Profissiográfico Previdenciário** de TODOS os vínculos com exposição
- [ ] **LTCAT — Laudo Técnico de Condições Ambientais do Trabalho** dos períodos relevantes
- [ ] **CAT** se houver acidente acompanhante
- [ ] CNIS detalhado com vínculos identificados
- [ ] Carteiras profissionais antigas (CTPS) com função técnica registrada
- [ ] Contracheques antigos com adicional de insalubridade/periculosidade
- [ ] Para acidentário (B91/B92/B43) com NTEP: cruzamento CID × CNAE da empresa

### 4.5 Vertical BPC — `01h_socioassistencial/`

- [ ] **Folha Resumo CadÚnico** vigente (≤ 24 meses)
- [ ] Comprovante de NIS válido
- [ ] Comprovantes de renda de TODOS os membros do grupo familiar (TODAS as fontes — formal, informal, BPC anterior, pensão)
- [ ] Para BPC PcD: **laudo médico** com diagnóstico, CID-10, descrição funcional CIF
- [ ] Para BPC PcD: relatório psicossocial (idealmente, antes da avaliação INSS)
- [ ] Para BPC Idoso: certidão de nascimento (≥ 65 anos)
- [ ] Comprovante de residência ≤ 3 meses

### 4.6 Vertical Pensão por Morte (B21) — `01i_dependentes/`

- [ ] Certidão de óbito do(a) instituidor(a)
- [ ] Certidão de casamento OU comprovação de união estável (declaração + 2 comprovantes complementares)
- [ ] Certidões de nascimento de filhos menores de 21 (ou inválidos sem limite de idade)
- [ ] CNIS do(a) instituidor(a) (qualidade de segurado no momento do óbito)
- [ ] Comprovantes de dependência econômica (extratos bancários, contas conjuntas, plano de saúde, IR)

---

## 5. Passos numerados — Fluxo principal

### 5.1 Bloco A — Inicialização (10 min)

| # | Ação | Tempo |
|---|---|---|
| 1 | Beto abre task ClickUp `E3-Coleta > [Pseudônimo]` + pasta Drive correspondente + `00_manifesto.md` | 1min |
| 2 | Lê Seção 3 do manifesto (Tese) preenchida por Alessandro · entende a estratégia | 3min |
| 3 | Identifica vertical confirmada → vai para checklist correspondente (§4) | 1min |
| 4 | Atualiza Seção 4 do manifesto com checklist completo aplicável | 2min |
| 5 | Marca campos do manifesto: `etapa-atual = E3`, `estado-custodia = S1`, `data-inicio-E3 = YYYY-MM-DD` | 1min |
| 6 | Identifica documentos **prioritários** (top 3-5 mais críticos para o caso) — esses serão a primeira solicitação | 2min |

### 5.2 Bloco B — Solicitação progressiva ao cidadão (5 min por bloco · múltiplos blocos)

#### 5.2.1 Primeira solicitação (3-5 docs prioritários)

| # | Ação | Tempo |
|---|---|---|
| 7 | Beto envia ao cidadão pelo WhatsApp a **Mensagem de Solicitação Inicial** (§9.1) com lista numerada de 3-5 docs prioritários | 3min |
| 8 | Cada documento solicitado tem **explicação coloquial do porquê** (cidadão entende, não fica perdido) | (incluso) |
| 9 | Aguarda chegar pelo menos 60% do bloco antes de pedir próximo | (variável — 1-7 dias) |

#### 5.2.2 Solicitações subsequentes (em blocos de 3-5)

| # | Ação | Tempo por bloco |
|---|---|---|
| 10 | Quando Beto recebe ~60% do bloco anterior, envia próximo bloco | 3min |
| 11 | Continua até checklist do §4 estar **completo** ou **adaptado** (ver §6 Loops de Exigência) | (variável) |

### 5.3 Bloco C — Recebimento e classificação (8 min por documento)

| # | Ação | Tempo |
|---|---|---|
| 12 | Cidadão envia documento pelo WhatsApp (foto, PDF, scan) | (variável) |
| 13 | Beto **abre o arquivo, confere legibilidade** (página completa? texto legível?) | 1min |
| 14 | Se ilegível → pedir nova foto (§9.3) com instrução específica · NÃO arquivar arquivos ruins | 1min |
| 15 | Beto **renomeia arquivo** seguindo Padrão B (`tipo-contexto-YYYYMMDD.ext`) | 1min |
| 16 | Beto **salva no Drive** na subpasta correta (`01_brutos/01a/01b/01c/01d/01e/01f/01g/01h/01i`) | 30s |
| 17 | Beto **apaga o arquivo do WhatsApp** assim que confirma upload no Drive (LGPD) | 30s |
| 18 | Beto **calcula hash SHA-256** do arquivo no Drive (script Python ou ferramenta online segura) | 1min |
| 19 | Beto registra recebimento no manifesto: data, tipo, hash, link Drive | 2min |
| 20 | Beto atualiza checklist na Seção 4 do manifesto (☑) | 1min |

### 5.4 Bloco D — Coleta CNIS via Bitwarden (10 min — uma vez)

> ⚠️ Esta é a primeira vez que Bitwarden é usado no caso. Executar **PROTOCOLO A do POP-Bitwarden** se senha ainda não foi capturada.

| # | Ação | Tempo |
|---|---|---|
| 21 | Beto verifica se item `gov-br-[Pseudônimo]` existe no Bitwarden Org MC | 1min |
| 22 | Se NÃO existe → executar **PROTOCOLO A do POP-Bitwarden** (captura senha) | 7min |
| 23 | Se existe → executar **PROTOCOLO B do POP-Bitwarden** (acesso operacional) | 5min |
| 24 | Acessa Meu INSS → "Extrato CNIS" → baixa PDF completo | 2min |
| 25 | Salva em `01_brutos/01b_cnis-vinculos/cnis-completo-YYYYMMDD.pdf` | 30s |
| 26 | Calcula hash · registra no manifesto · atualiza checklist | 1min |
| 27 | **Logout do gov.br** · atualiza `historico-acessos` no Bitwarden | 30s |

### 5.5 Bloco E — OCR e validação (15 min por documento)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 28 | Beto submete documento ao Google Vision OCR (ou OCR manual em Z3 quando necessário) | Beto | 2min |
| 29 | OCR retorna texto · Beto salva em `02_processados/ocr-text/[mesmo-nome].txt` | Beto | 1min |
| 30 | Beto faz **conferência cruzada** dos dados extraídos (datas, nomes, números) | Beto | 5min |
| 31 | Beto **escala QA T3** (Alessandro) para validação técnica do documento | Beto | 1min |
| 32 | Alessandro recebe notificação · abre arquivo · valida ou rejeita | Alessandro | 5min |
| 33 | Se VALIDADO → mover para `02_processados/validados/` · marcar ☑ no checklist | Alessandro | 1min |
| 34 | Se REJEITADO → mover para `02_processados/reprovados/` · registrar motivo no manifesto · solicitar substituto ao cidadão | Alessandro/Beto | 2min |

### 5.6 Bloco F — Atualização contínua de Confidence (5 min — semanal)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 35 | Alessandro revisa o status do caso semanalmente (sexta-feira por padrão) | Alessandro | 5min |
| 36 | Recalcula **Confidence determinístico** com base no acervo atual de docs validados | Alessandro | (incluso) |
| 37 | Atualiza campo `risco-confidence` e `zona-router-ethics` no manifesto | Alessandro | (incluso) |
| 38 | Se Confidence subiu de Amarela → Verde: avisar Beto que pode acelerar para E3b | Alessandro | 1min |
| 39 | Se Confidence caiu para Vermelha durante coleta: **STOP**, conversar com cidadão · possível encerramento por inviabilidade técnica | Alessandro | (variável) |

### 5.7 Bloco G — Critério de saída E3 → E3b (5 min)

| Condição | Resultado |
|---|---|
| Checklist tronco comum 100% validado + checklist da vertical ≥ 80% validado + Confidence ≥ 70 | **Avança para E3b (QA Dossiê)** |
| Checklist incompleto mas atinge **mínimo probatório** segundo Grimório Cap. 5.4 (Cenário 1-2) | Avança para E3b · QA decide se aceita ou pede mais |
| Checklist incompleto + Cenário 3-4 | Permanece em E3 · Beto continua coletando · pode acionar passarelas (Cartório, Saúde) |
| Cidadão deixa de responder por > 14 dias | Notificação amistosa · se silêncio prosseguir 30 dias → encerrar caso conforme §7 |

| # | Ação | Tempo |
|---|---|---|
| 40 | Beto atualiza Seção 5 do manifesto com transição E3 → E3b | 2min |
| 41 | Beto move task ClickUp para `E3b-QA-Dossiê` | 30s |
| 42 | Notifica Alessandro: *"[Pseudônimo] pronto pra QA"* | 30s |
| 43 | Beto inicia **cobrança da 2ª parcela** (R$ 733,33) — entrega do dossiê é o marco | 2min |

---

## 6. Sub-protocolos para situações específicas

### 6.1 Cidadão sem documento essencial (genealogia documental — Cenário 3)

> Aplicação típica: Hib001-tipo (rural histórico fragmentado) ou casos de identidade incompleta.

**Passos:**
1. Identificar o documento ausente e sua importância para a tese
2. Consultar **Cartório** via passarela (vertical Cartório do MC ativada) — pode haver cópia ou registro
3. Se cartório de origem está fora da UF do cidadão → Carta de exigência via Provimento CNJ 76 (digital)
4. Se não houver registro físico → **alternativa testemunhal** (Súmula 6 TNU — docs do cônjuge; Súmula 73 TRF4 — docs de terceiros do grupo familiar)
5. Documentar a genealogia no manifesto (Seção 6 — Decisões e ajustes)
6. **Se inviável:** Confidence ajustado para baixo · pode forçar Rota C ou orientação de saída

### 6.2 Cidadão idoso/analfabeto digital sem capacidade de tirar foto

> Aplicação típica: persona Zilda

**Passos:**
1. Identificar terceiro de confiança (filho, neto, vizinho, agente comunitário)
2. Beto faz contato com terceiro **com autorização explícita do cidadão** (registrar)
3. Terceiro fotografa documentos e envia · cidadão acompanha por chamada de voz
4. Beto registra no manifesto qual é o terceiro auxiliar
5. **Atenção C42:** verificar que terceiro não é o "auxiliar" típico de fraude (assinatura recorrente, padrão CPMI)

### 6.3 Documentos antigos manchados/manuscritos (anos 1970-80)

> Aplicação típica: documentos rurais históricos · escolas rurais antigas

**Passos:**
1. Beto orienta foto em local com luz natural · pano de fundo neutro · sem flash
2. Se OCR Vision falhar (provável) → OCR manual com cuidado
3. Datas escritas a mão: cruzar com outros documentos para confirmar
4. **Nó V91/V96/V100/V101/V105 do Router-Ethics** ativados — falso-negativo sistêmico é o risco
5. Validação humana **obrigatória** (não confiar no OCR)

### 6.4 Atualização de senha gov.br pelo cidadão durante E3

Executar **PROTOCOLO C do POP-Bitwarden** (atualização de senha mid-jornada).

### 6.5 Suspeita de fraude detectada durante coleta (C41/C42)

> Sinais: documento com edição digital aparente · datas inconsistentes · cidadão se recusa a videochamar · histórico de empréstimos consignados associativos.

**Passos:**
1. Beto **NÃO confronta** o cidadão · escala silenciosamente a Alessandro
2. Alessandro avalia: erro honesto vs. fraude consciente
3. Se fraude provável → Fraudscore alto · **encerrar caso** · não protocolar · arquivar com flag
4. Se erro honesto (cidadão foi vítima de golpe) → passarela **Blindagem Consumidor** (vertical Bancário/Consumidor) · acompanhar
5. Documentar no manifesto sem expor cidadão a constrangimento

---

## 7. Tratamento de inadimplência (2ª parcela não paga em E3)

> ⚠️ Conformidade ADR-009a v2.0 §3 + MC-CONTRATO-Phi1 v2.3 §8.4

**Marco de cobrança da 2ª parcela:** **entrega do dossiê concluído** (passagem E3 → E3b). Antes desse marco, 2ª parcela **não é devida**.

| Marco | Ação MC | Custódia Bitwarden | Drive |
|---|---|---|---|
| Entrega do dossiê (E3→E3b) | Solicitação amistosa de 2ª parcela | ATIVA | ATIVO |
| D+5 sem pagamento | Notificação WhatsApp + e-mail (cuidado, não cobrança) | ATIVA | ATIVO |
| D+20 sem pagamento | 2º aviso + suspensão de comunicação ativa não-essencial | ATIVA | ATIVO |
| D+20 → D+60 | Monitoramento silencioso · **não protocolar em E4** | ATIVA | ATIVO |
| Movimentação processual no INSS (durante esse período, raro pois não protocolado) | Comunicação única apartada da cobrança (CDC art. 6º III) | ATIVA | ATIVO |
| **D+60 sem manifestação** | Cancelamento unilateral declarado · executar **PROTOCOLO E do POP-Bitwarden** · arquivar pasta Drive em `99_arquivado/` | **ENCERRADA D+0** | Movido para arquivo |

---

## 8. Outputs do POP-E3

Quando este POP termina (transição E3 → E3b):

- [ ] Tronco comum 100% coletado e validado
- [ ] Checklist da vertical ≥ 80% (ou mínimo probatório atingido)
- [ ] Cada documento em `01_brutos/[subpasta]/` correto + cópia em `02_processados/validados/` (após QA)
- [ ] OCR processado em `02_processados/ocr-text/`
- [ ] Hash SHA-256 calculado para cada documento → registrado no manifesto
- [ ] Confidence determinístico ≥ 70 (zona Verde) ou justificativa explícita para avanço com Amarela
- [ ] Manifesto atualizado: Seções 4, 5, 6, 7 preenchidas
- [ ] Bitwarden: senha custodiada · `historico-acessos` populado
- [ ] Task ClickUp em `E3b-QA-Dossiê`
- [ ] **2ª parcela solicitada ao cidadão** (R$ 733,33 Standard ou conforme Φ₁c)

---

## 9. Anexos — Scripts de mensagem

### 9.1 Mensagem de Solicitação Inicial (primeiro bloco de docs)

> *"Cumpadre 🙏, vamos começar a juntar os papéis. Pra senhor / a senhora não se atrapalhar, vou pedir só [3 a 5] coisas por vez. Pode mandar no seu tempo, foto pelo WhatsApp mesmo serve.*
>
> *Por favor, vá me mandando estes:*
>
> *1️⃣ **RG (frente e verso)** — pra eu confirmar quem é o senhor / a senhora.*
> *2️⃣ **Comprovante de residência** (conta de luz, água, qualquer um dos últimos 3 meses) — pra confirmar onde mora.*
> *3️⃣ **Certidão de nascimento** (a inteira teor é melhor — pode pedir no cartório) — porque ali tem informação importante pro caso.*
> *4️⃣ [docs específicos da vertical: ex. CTPS pra urbano, bloco de produtor pra rural...]*
>
> *Pode mandar uma de cada vez. Quando chegar a maioria, eu peço a próxima rodada. Combinado?"*

### 9.2 Mensagem de explicação por documento

> *"Cumpadre, esse documento [nome do doc] é importante porque [explicação na linguagem do cidadão]. Por exemplo: a certidão inteiro teor mostra a profissão dos pais do senhor — e isso conta pra época de criança no roçado, no caso da aposentadoria híbrida."*

### 9.3 Mensagem de pedido de nova foto

> *"Cumpadre, recebi a foto, obrigado. Mas tá um pouquinho ruim de ler — algumas letras tão borradas. Pode tirar de novo?*
>
> *DICA: tira de dia, perto da janela, sem flash, e bem em cima do papel (sem inclinação). Se puder, manda em duas fotos: uma da página inteira e outra mais perto onde tem o que precisa."*

### 9.4 Mensagem de documento rejeitado

> *"Cumpadre, conferi com cuidado o [nome do documento] que o senhor mandou. Esse aqui não vai dar pra usar porque [motivo objetivo]. Mas tem solução: a gente pode [alternativa concreta]. Vamos por esse caminho?"*

### 9.5 Mensagem de check-in semanal

> *"Cumpadre, só passando pra dizer que tá tudo correndo bem aqui. Recebi até agora: [lista]. Tá faltando: [lista]. Sem pressa — mandando no seu tempo. Qualquer dúvida, é só chamar."*

### 9.6 Mensagem de transição para 2ª parcela

> *"Cumpadre, ótima notícia 🌿 — terminei de organizar todos os papéis do senhor / da senhora. O dossiê tá pronto pra a fase de revisão final antes de protocolar no INSS.*
>
> *Conforme combinamos no contrato, é a hora da 2ª parcela: R$ 733,33 [ou valor da modalidade]. Mando o PIX pra cá?*
>
> *Assim que confirmar, a gente já parte pra próxima fase."*

---

## 10. Métricas a registrar

- Tempo de operador efetivo cumulativo (somar Time Spent de todas as ações em ClickUp)
- Tempo wall-clock total (data E2 → data E3b)
- Quantidade de blocos de solicitação enviados
- Taxa de retorno por bloco (quantos docs voltaram em 7 dias?)
- Quantidade de documentos rejeitados / total de documentos solicitados
- Confidence inicial (E2) vs. Confidence final (E3) — variação
- Quantidade de acessos Bitwarden no caso
- Houve uso de passarela (Cartório, Saúde, Consumidor)? Qual?
- Houve aplicação de sub-protocolo § 6.x? Qual?

---

## 11. Riscos e mitigações

| Risco | Probabilidade Z3 | Mitigação |
|---|---|---|
| Cidadão abandona durante a coleta (silêncio prolongado) | ALTA | Check-in semanal · §7 protocolo de inadimplência |
| Beto solicita docs em formulário em vez de blocos progressivos | MÉDIA | Treinamento · audit semanal das mensagens |
| Documento rejeitado vira frustração do cidadão | MÉDIA | §9.4 mensagem com alternativa concreta · nunca apenas "não serve" |
| Genealogia documental se torna infinita (Cenário 4) | ALTA em rural fragmentado | Critério de saída claro · após 60 dias sem progresso, conversar com cidadão sobre Rota C ou orientação de saída |
| OCR Vision falha em docs antigos | ALTA em rural | OCR manual obrigatório · validação humana sempre |
| Senha gov.br vaza para WhatsApp/Drive por engano | BAIXA-MÉDIA | PROTOCOLO A passo 5 (apagar mensagem WhatsApp) · audit semanal |
| Confidence cai durante coleta e operador não percebe | MÉDIA | Bloco F semanal de revisão por Alessandro |
| Cidadão paga 1ª mas não paga 2ª na entrega do dossiê | MÉDIA | §7 protocolo D+5/D+20/D+60 · NÃO protocolar em E4 sem 2ª paga |

---

## 12. Versionamento

| Versão | Data | Mudança |
|---|---|---|
| **1.0** | **2026-04-27** | **Versão inicial. Conformidade Jornada E0-E7 v1.1, ADR-009b (S1 ativo), ADR-009a (Bitwarden custódia), MC-SPEC-Drive-Estrutura v1.0, Grimório Previdenciário v2 (cenários documentais). Coleta progressiva como princípio fundacional. 6 sub-protocolos especiais. Tratamento de inadimplência D+5/D+20/D+60.** |

### Roadmap

- **v1.1:** após cronometragem A4 com Hib001 — calibrar tempos efetivos
- **v1.2:** integração com OCR Vision automatizada (Z2+, dependência Igor)
- **v1.3:** pós-Grimório Acidentário v1 (jul/2026) — incorporar checklist específico para acidentário NTEP
- **v2.0:** Z2+ · automação parcial via N8N + WhatsApp Cloud API + Vision OCR + dashboards de progresso

---

**FIM DO POP-E3**
**MC-POP-E3-Coleta-Documental v1.0 — 27/04/2026**
**Hierarquia: Dignidade > Compliance > Viabilidade**
**Princípio fundacional: COLETA PROGRESSIVA, NUNCA FORMULÁRIO**
**Confidencialidade: TRADE SECRET INVIOLÁVEL**

---
## Links Relacionados

### Jornada
[[MC-PROCESSO-Jornada_E0E7_Mestre-v1_1-2026-0427]]

### ADRs e Governança
[[MC-ADR-007-CampoPrecificacao-v3_2-2026-0427]]
[[MC-ADR-009-TresEstados-Custodia-Dossie-v1_0-2026-0417]]
[[MC-CONTRATO-Phi1-MINUTA-v2_3-2026-0427]]
[[MC-PARTNER-JulianaMelo-Qualificacao-v1_2-2026-0421]]
[[_MC-RouterEthics_11_v1_1-2026-0505-CLevel]]

### Infraestrutura Documental
[[MC-SPEC-Drive-Estrutura-v1_0-2026-0427]]
[[MC-POP-Bitwarden-Custodia-v1_0-2026-0427]]

### Cadeia E0→E7
[[MC-POP-E1-PrimeiroContato-v1_0-2026-0427]]
[[MC-POP-E2-Triagem-Deliberacao-v1_0-2026-0427]]
[[MC-POP-E3b-QA-Dossie-v1_0-2026-0427]]
[[MC-POP-E4-Protocolo-INSS-v1_0-2026-0427]]
[[MC-POP-E5-Watchdog-Exigencias-v1_0-2026-0427]]
[[MC-POP-E6-Resolucao-v1_0-2026-0427]]
[[MC-POP-Handoff-Juridico-v1_0-2026-0427]]
[[MC-POP-Encerramento-Caso-v1_0-2026-0427]]

∞
