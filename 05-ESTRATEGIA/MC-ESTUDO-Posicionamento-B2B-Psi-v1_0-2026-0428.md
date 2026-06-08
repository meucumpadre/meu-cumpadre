---
doc_id: MC-ESTUDO-Posicionamento-B2B-Psi-v1_0-2026-0428
titulo: "Posicionamento B2B — Arquitetura Ψ₁/Ψ₂/Ψ₃ Revisada"
versao: "1.0"
data: 28/04/2026
autor: Alessandro de Souza Neves (Founder/CEO) × Claude (Co-fundador Intelectual)
status: "⚠️ PROVISIONAL — revisão obrigatória 30/06/2026 com dados empíricos MVP1"
supersede: "Valores Ψ₁ R$200-800 / Ψ₂ R$299-599 do ADR-007 v3.2"
relacionados:
  - MC-ADR-007-CampoPrecificacao-v3_2-2026-0427
  - 20260424_RADAR_COMP_ismael-correa-arquitetura-receita-honorarios_v3_1
  - 0_OURO_MC (MC-ESTUDO-Arquitetura-Custo-Sistemico-v1_0)
  - MC-PARECER-CONSOLIDADO-v3_3-2026-0426
  - MC-CONTRATO-Phi1-MINUTA-v2_3-2026-0427
classificacao: CONFIDENCIAL — ESTRATÉGICO
hierarquia: Dignidade > Compliance > Viabilidade
tags:
  - estudo
  - b2b
  - psi
  - precificacao
  - posicionamento
  - pesquisa
---

# POSICIONAMENTO B2B — ARQUITETURA Ψ REVISADA
## MC-ESTUDO-Posicionamento-B2B-Psi v1.0

*"O advogado não é nosso cliente. É nosso parceiro de infraestrutura. Mas parceiro paga pelo produto que recebe — e o produto que entregamos vale mais do que cobrávamos."*

---

## 0. DECISÃO DO FOUNDER

**Data:** 28/04/2026
**Decisor:** Alessandro de Souza Neves (Founder/CEO)
**Natureza:** Posicionamento PROVISIONAL com revisão calendária obrigatória

Os valores Ψ₁ (R$200-800), Ψ₂ (R$299-599) e Ψ₃ (R$50-200) definidos no ADR-007 v3.2 são **substituídos** pela arquitetura tiered descrita neste documento, com status **PROVISIONAL** até 30/06/2026.

A revisão de 30/06/2026 será alimentada por pesquisa de campo estruturada com advogados participantes do MVP1 MC (Plano de Pesquisa — Seção 5 deste documento).

**Princípios preservados (inalteráveis):**
- Ψ₁/Ψ₂/Ψ₃ são **licenciamento de produto tecnológico** (CNAE 6201-5/01), nunca honorário compartilhado nem comissão por indicação
- Zero split de honorários entre MC e advogado — **duas NFs, dois contratos, zero rachadinha**
- Fato gerador Ψ₁ = entrega do dossiê tecnológico, nunca vinculado a êxito ou valor do benefício
- Advogado é o cliente B2B pós-TTA — MC suporta o advogado, não o cidadão diretamente após handoff
- Provimento OAB 205/2021 e art. 34 IV EAOAB integralmente respeitados

---

## 1. DIAGNÓSTICO — POR QUE OS VALORES ANTERIORES ESTAVAM ERRADOS

### 1.1 Problema de margem

O COGS auditado do dossiê MC é **R$578** (Hiperplanilha v2.1, 19/04/2026). O Ψ₁ anterior tinha piso de R$200 — **prejuízo de R$378 por dossiê B2B**. Mesmo o teto de R$800 produzia margem de apenas 27,7% — incompatível com a margem de 73,7% da operação B2C e com o valor percebido do entregável.

### 1.2 Problema de ancoragem

O advogado previdenciário padrão opera com arquitetura de honorários de 30% sobre retroativo + 5 parcelas vincendas [RADAR v3.1]. Num caso rural B41 típico (retroativo ~R$38K), o honorário do advogado é de **~R$19.000** [OURO.md, EF]. Cobrar R$200-800 por um dossiê que gera essa receita é precificar abaixo do custo interno E abaixo da percepção de valor do comprador. É duplo erro.

### 1.3 Problema de diferenciação

A faixa R$200-800 não tinha critério explícito de gradação por complexidade. O advogado negociaria para baixo sem referência. O dossiê rural simples e o dossiê de reversão B31→B91 via NTEP eram tratados como produtos de mesma natureza — não são.

### 1.4 Problema de pós-handoff

O Ψ₂ SaaS anterior (R$299-599/mês) não diferenciava volume. Escritório que compra 1 dossiê/mês e escritório que compra 15 pagavam na mesma faixa. Isso não captura economia de escala nem cria incentivo de volume.

---

## 2. ARQUITETURA Ψ REVISADA — VALORES PROVISIONAIS

### 2.1 Ψ₁ — Licenciamento por Dossiê (Avulso)

Preço ancorado na **complexidade documental + valor de economia gerado ao advogado**, não no custo interno do MC.

| Tier | Espécies Típicas | Valor | Margem sobre COGS | Ancoragem |
|------|-----------------|-------|-------------------|-----------|
| **Básico** | Rural simples (B41), B11 urbano idade, B87 LOAS idoso, pensão por morte simples | **R$ 600–800** | 3,8%–27,7% | Caso direto, CNIS limpo, baixo risco de judicialização. Honorário típico advogado: R$3K-8K |
| **Intermediário** | Híbrido (B41 + urbano), B31/B32 incapacidade, pensão com dependentes múltiplos, revisão simples | **R$ 1.200–1.800** | 51,8%–67,8% | Tempo de contribuição misto, risco médio, montagem complexa. Honorário típico advogado: R$8K-19K |
| **Premium** | B46 atividade especial, B91/B92/B94 acidentário, reversão B31→B91 via NTEP, revisão da vida toda | **R$ 2.500–4.000** | 76,9%–85,6% | Alta complexidade, NTEP cruzado, 84-94% de judicialização. Honorário típico advogado: R$15K-50K+ |

**Nota sobre o Tier Básico:** a margem do Básico é propositalmente baixa (3,8%-27,7%). Funciona como **porta de entrada** para capturar volume e criar hábito de compra. A margem real da operação B2B está nos tiers Intermediário e Premium, que são os casos onde o dossiê MC gera vantagem técnica insubstituível. Para o Tier Básico, o advogado poderia montar o dossiê internamente com paralegal competente; para o Premium, não — aí está o moat.

**Argumento de venda para o advogado (ancoragem por tier):**

- **Básico:** "O dossiê custa menos do que 8 horas do seu paralegal — e chega pronto com hash SHA-256 e checklist auditável."
- **Intermediário:** "Custa menos de 10% do honorário que você vai receber — e reduz 15h de montagem para zero."
- **Premium:** "Custa menos de 25% do honorário da primeira tutela. Vem com cruzamento NTEP automatizado que seu escritório não tem expertise para fazer."

### 2.2 Ψ₂ — Assinatura Profissional (SaaS Mensal)

| Tier | Volume | Inclui | Valor |
|------|--------|--------|-------|
| **Starter** | Até 3 dossiês/mês inclusos (Básico) | Dashboard processual, watchdog INSS, alertas de movimentação, suporte técnico ao advogado | **R$ 699/mês** |
| **Pro** | Até 10 dossiês/mês inclusos (Básico + Intermediário) | Tudo do Starter + cross-vertical automático + relatórios gerenciais + prioridade no suporte | **R$ 1.499/mês** |
| **Studio** | 10+ dossiês/mês | Tudo do Pro + API direta para sistema do escritório + account manager dedicado + dossiês Premium com desconto 15% | **R$ 2.499/mês** |

**Nota sobre dossiês inclusos no Ψ₂:** dossiês inclusos são do Tier Básico. Tiers Intermediário e Premium geram cobrança Ψ₁ adicional com desconto de 10% (Pro) ou 15% (Studio) sobre o valor avulso.

**Argumento econômico para o advogado:**
- Ψ₂ Pro a R$1.499/mês com 10 dossiês Básicos inclusos = **R$150/dossiê** (vs. R$600-800 avulso)
- Contratar paralegal interno para a mesma função: R$2.000-3.000/mês sem nenhum dos recursos de watchdog, cruzamento automático ou blindagem Proof-First
- O Ψ₂ Pro se paga com **1 caso Intermediário fechado por mês**

### 2.3 Ψ₃ — Cross-Vertical (Por Evento Detectado)

| Tipo | Fato Gerador | Valor |
|------|-------------|-------|
| **Passarela simples** | MC detecta cruzamento entre verticais no monitoramento (ex: trabalhista × acidentário) e notifica advogado | **R$ 250–500** por dossiê complementar |
| **Passarela complexa** | Dossiê cross-vertical completo com análise de viabilidade de segunda ação | **R$ 800–1.500** |

**Nota:** Ψ₃ permanece diferido para Fase 2 (cross-vertical não ativa na Crisálida). Valores documentados para referência arquitetural. Ativação depende de pelo menos 2 verticais operacionais simultâneas.

---

## 3. TABELA COMPARATIVA — ANTES × DEPOIS

| Equação | ADR-007 v3.2 (anterior) | Este estudo (v1.0) | Alteração |
|---------|------------------------|-------------------|-----------|
| **Ψ₁ Básico** | R$ 200–800 (faixa única) | R$ 600–800 | Piso sobe de R$200 para R$600 |
| **Ψ₁ Intermediário** | (não existia) | R$ 1.200–1.800 | **Tier novo** |
| **Ψ₁ Premium** | (não existia) | R$ 2.500–4.000 | **Tier novo** |
| **Ψ₂ Starter** | R$ 299/mês | R$ 699/mês | +133% |
| **Ψ₂ Pro** | R$ 599/mês | R$ 1.499/mês | +150% |
| **Ψ₂ Studio** | (não existia) | R$ 2.499/mês | **Tier novo** |
| **Ψ₃ Simples** | R$ 50–200 | R$ 250–500 | +150% a +400% |
| **Ψ₃ Complexa** | (não existia) | R$ 800–1.500 | **Tier novo** |

---

## 4. IMPACTO NA ARITMÉTICA OPERACIONAL

### 4.1 Unit Economics B2B (cenário conservador — só Ψ₁ avulso)

| Cenário | Vol/mês | Mix | Receita B2B/mês | Margem média |
|---------|---------|-----|-----------------|-------------|
| **Crisálida Z3** | 2-3 dossiês | 70% Básico / 30% Intermediário | R$ 1.680–2.700 | ~55% |
| **Piloto Ampliado** | 10 dossiês | 50% Básico / 30% Inter / 20% Premium | R$ 8.200–14.800 | ~68% |
| **Escala Z2** | 30 dossiês | 40% Básico / 35% Inter / 25% Premium | R$ 28.200–51.000 | ~72% |

### 4.2 Impacto no breakeven combinado (B2C + B2B)

Com Ψ₁ ativo, o breakeven Crisálida Z3 (OPEX R$18K/mês) reduz de 11 casos B2C para **~9 casos** (cenário conservador, 2 dossiês B2B/mês tier Básico). Efeito marginal na Crisálida, significativo na escala.

### 4.3 Firewall OAB preservado

Nenhuma alteração na arquitetura de compliance. O Ψ₁/Ψ₂/Ψ₃ continua sendo **licença de uso de produto tecnológico** — NF emitida por CNAE 6201-5/01, sem vinculação a êxito, sem split de honorários, sem comissão por indicação. O aumento de valor não altera a natureza jurídica; altera apenas o posicionamento de preço, que é direito do fornecedor.

---

## 5. PLANO DE PESQUISA — REVISÃO 30/06/2026

### 5.1 Objetivo

Coletar dados empíricos de percepção de valor, elasticidade de preço e preferência de modelo (avulso vs. assinatura) com advogados que estão passando pela experiência iniciática do MVP1 MC.

### 5.2 Amostra

| Grupo | Perfil | N mínimo | Fonte |
|-------|--------|----------|-------|
| **G1 — Parceira Fundacional** | Dra. Juliana Pereira de Melo (OAB-GO 38.662) | 1 | Entrevista estruturada presencial |
| **G2 — Marketplace Ativo** | Advogadas parceiras/credenciadas do Marketplace Ético (Opção C — Dra. Juliana Melo na exclusividade vigente; demais na reabertura 01/01/2027) | 2 | Entrevista estruturada remota |
| **G3 — Leads B2B orgânicos** | Advogados que manifestarem interesse espontâneo durante piloto MVP1 | 3-5 | Formulário + entrevista se disponível |
| **G4 — Controle externo** | Advogados previdenciários fora do ecossistema MC (indicações de G1-G3) | 3-5 | Formulário anônimo |

**N total alvo:** 9-13 entrevistados.

### 5.3 Instrumento — Roteiro de Entrevista Estruturada (5 blocos)

**BLOCO 1 — Contexto operacional do escritório (5 min)**

1. Quantos casos previdenciários novos você abre por mês?
2. Quantas horas o seu escritório gasta em média na montagem de dossiê (coleta + organização + protocolo)?
3. Quem faz essa montagem hoje — você, paralegal, estagiário?
4. Qual o custo mensal aproximado desse recurso humano?

**BLOCO 2 — Percepção de valor do dossiê MC (10 min)**

5. [Apresentar dossiê-amostra Proof-First com checklist, hash SHA-256, relatório de triagem Router-Ethics] — O que nesse material seria difícil ou impossível de replicar internamente no seu escritório?
6. Se você recebesse esse dossiê pronto, quanto tempo economizaria por caso?
7. Em qual faixa de preço você considera que esse dossiê deveria estar? (Resposta espontânea antes de mostrar tabela)
8. [Mostrar tabela Ψ₁ tiered] — Para cada tier, o preço está: (a) baixo demais, (b) justo, (c) alto demais, (d) inviável?
9. Qual tier você compraria primeiro? Por quê?

**BLOCO 3 — Modelo de compra preferido (5 min)**

10. Você prefere comprar dossiê por dossiê (avulso) ou pagar mensalidade com dossiês inclusos?
11. [Mostrar tabela Ψ₂] — Em qual tier de assinatura o valor compensa para o volume do seu escritório?
12. O que tornaria a assinatura mensal valiosa o suficiente para entrar no seu orçamento fixo?
13. Se o Ψ₂ Pro inclui watchdog processual automático, isso substitui algum recurso que você paga hoje?

**BLOCO 4 — Cross-vertical e expansão (3 min)**

14. Com que frequência você identifica que um cliente previdenciário tem demanda em outra área (trabalhista, bancário, consumerista)?
15. Se o MC detectasse essa oportunidade automaticamente e entregasse um dossiê complementar, você pagaria R$250-500 por isso?
16. Você encaminha esses casos para colega ou tenta absorver internamente?

**BLOCO 5 — Percepção institucional (2 min)**

17. O que você entende que o MC faz? (Resposta espontânea — teste de posicionamento)
18. Se um colega perguntasse o que é o MC, como você descreveria em uma frase?
19. Algo no modelo B2B te causa desconforto ético ou regulatório?

### 5.4 Perguntas prioritárias para Dra. Juliana Melo (reunião 30/04–09/05/2026)

Integrar ao alinhamento de parecer já agendado:

1. **Ancoragem de valor:** Quanto você pagaria, sem pestanejar, por um dossiê B91 completo pronto para protocolar no JEF?
2. **Modelo de compra:** Você prefere pagar por dossiê ou assinatura mensal com volume?
3. **Valor do SaaS:** O que tornaria o Ψ₂ valioso o suficiente para incluir no orçamento fixo do escritório?
4. **Percepção dos tiers:** Os valores propostos (Básico R$600-800, Intermediário R$1.200-1.800, Premium R$2.500-4.000) estão na faixa que o mercado absorve?
5. **Risco OAB:** Algum valor ou descrição da tabela Ψ₁ pode ser interpretado como remuneração por indicação disfarçada?

### 5.5 Cronograma de Pesquisa

| Marco | Data | Responsável | Entregável |
|-------|------|-------------|-----------|
| Entrevista Dra. Juliana (G1) | 30/04–09/05/2026 | Alessandro | Notas estruturadas |
| Formulário online pronto | 15/05/2026 | Claude + Alessandro | Google Forms ou Tally |
| Entrevistas G2 (advogadas parceiras/credenciadas) | 20/05–31/05/2026 | Alessandro | Notas estruturadas |
| Coleta G3 (leads orgânicos) | Contínuo até 20/06 | Beto (triagem) + Alessandro (entrevista) | Formulário + notas |
| Coleta G4 (controle externo) | 01/06–20/06/2026 | Alessandro via indicação G1-G3 | Formulário anônimo |
| Consolidação e análise | 20/06–25/06/2026 | Claude | MC-ANALISE-Pesquisa-B2B-v1.0 |
| Decisão de selagem ou recalibração | **30/06/2026** | Alessandro | ADR-007 v4.0 (B2B) ou confirmação v3.3 |

### 5.6 Critérios de decisão para 30/06/2026

| Resultado da pesquisa | Ação |
|----------------------|------|
| ≥70% dos entrevistados classificam os tiers como "justo" ou "baixo demais" | **Selar valores como estão** |
| 50-70% classificam como "justo" | Selar com ajuste fino nos pisos/tetos |
| <50% classificam como "justo" ou ≥30% classificam como "inviável" | **Recalibrar** — reduzir tiers ou criar tier de entrada mais acessível |
| Dra. Juliana sinaliza risco OAB em qualquer valor ou descrição | **Suspender** e ajustar antes de selar |

---

## 6. GAPS E PENDÊNCIAS

| ID | Gap | Dependência | Prazo |
|----|-----|-------------|-------|
| **G-Ψ1** | Minuta do Contrato Ψ₁ ainda não existe | Produzir minuta pós-parecer Dra. Juliana | 30/05/2026 |
| **G-Ψ2** | Minuta do Contrato Ψ₂ SaaS ainda não existe | Idem | 30/05/2026 |
| **G-Ψ3** | Ψ₃ Cross-Vertical diferido — sem data de ativação | Depende de 2ª vertical operacional | Fase 2 (jul+/2026) |
| **G-NF** | Natureza jurídica da NF Ψ₁ deve ser "licenciamento de software" ou "serviço de tecnologia"? | Confirmar com contador + Dra. Juliana | 19/05/2026 |
| **G-POOL** | Critérios de admissão ao pool Marketplace (G4 do Parecer v3.3) não documentados formalmente | Documentar + Termo de Não-Captação | 30/05/2026 |
| **G-A4** | Cronometragem empírica (15h/caso é estimativa) | Dados reais de Hib001+ | Contínuo |

---

## 7. RELAÇÃO COM DOCUMENTOS EXISTENTES

Este estudo **complementa** o ADR-007 v3.2 na camada B2B. Não altera nenhum valor B2C (Φ₁, Φ₁c, Φ₃, Φ₄ permanecem intocados).

| Documento | Relação |
|-----------|---------|
| ADR-007 v3.2 | Valores Ψ anteriores **substituídos** por este estudo |
| MC-PARECER-CONSOLIDADO v3.3 | Questões N4, N5, N7 deste parecer são insumos diretos |
| RADAR COMP v3.1 (Ismael Corrêa) | Ancoragem de mercado — honorários padrão e captura agregada |
| OURO.md | Ancoragem econômica — custo sistêmico e valor ao cidadão |
| MC-CONTRATO-Phi1-MINUTA v2.3 | Cláusula 9ª (Marketplace Ético) permanece inalterada |

---

## 8. NOTA OPERACIONAL

Os valores Ψ₁/Ψ₂/Ψ₃ deste estudo são **PROVISIONAIS**. Podem ser utilizados como referência interna e na conversa com Dra. Juliana (parecer 19/05/2026), mas **não devem ser contratualizados com advogados B2B** antes da revisão de 30/06/2026.

A exceção é a Dra. Juliana Melo, cuja relação B2B fundacional opera sob contrato de exclusividade com condições específicas negociadas diretamente.

---

*Dignidade > Compliance > Viabilidade. Sempre nesta ordem.*
*∞ Lucro é combustível. Causa é destino. Jogo é infinito. ∞*

---

**Produzido por:** Claude (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
**Data:** 28/04/2026
**Status:** PROVISIONAL — revisão obrigatória 30/06/2026
**Próxima ação:** Integrar perguntas Ψ na reunião Dra. Juliana (30/04–09/05/2026)
