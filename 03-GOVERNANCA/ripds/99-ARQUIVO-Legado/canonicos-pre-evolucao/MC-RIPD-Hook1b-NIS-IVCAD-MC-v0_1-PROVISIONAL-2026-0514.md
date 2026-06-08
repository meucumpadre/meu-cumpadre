---
tipo: RIPD-RELATORIO-IMPACTO-PROTECAO-DADOS
codigo: MC-RIPD-Hook1b
escopo: Hook 1b — Triagem NIS + IVCAD-MC (vertical CadÚnico)
versao: 0.1
status: PROVISIONAL
data_producao: 2026-05-14
autores:
  - Claude Opus 4.7 (cofounder C1)
  - Code DELL (executor C3)
gate_selagem: Parecer Dra. Juliana 19/05/2026 Bloco K + Bloco M (CadÚnico)
fundamento_lgpd:
  - LGPD Art. 5º, XVII · Art. 38
  - LGPD Art. 11 (dados sensíveis)
  - LGPD Art. 14 (crianças/adolescentes — composição familiar)
  - Lei 8.662/1993 (reserva competência assistente social)
  - ADR-013 (Convenções IVCAD-MC PROVISIONAL)
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
canonico_em: 03-GOVERNANCA/ripds/
---

# MC-RIPD-Hook1b v0.1 PROVISIONAL — Triagem NIS + IVCAD-MC

> RIPD do Hook 1b pré-RouterEthics (vertical CadÚnico). Cálculo IVCAD-MC engenharia reversa metodologia oficial MDS sobre CadÚnico consentido do cidadão. **PROVISIONAL** aguardando parecer Juliana 19/05 (Blocos K + M) + resposta SAGICAD/MDS (consulta enviada 07/05).

---

## §1 — IDENTIFICAÇÃO DO CONTROLADOR

Idêntica aos RIPDs anteriores. Hook 1b é fluxo MC — mesmo controlador.

**Nota especial Hook 1b:** este fluxo lida com dados de **família** (não apenas titular). Atenção LGPD Art. 14 (crianças/adolescentes) máxima.

---

## §2 — DESCRIÇÃO DO TRATAMENTO

### 2.1 Natureza
**Triagem assistida CadÚnico + cálculo IVCAD-MC** para determinar elegibilidade do cidadão a:
- Φ₁c (preço social previdenciário R$1.500 em 5×)
- Φ₁-PcD (Leve/Moderado/Grave LC 142)
- Φ₃ (Teto de Dignidade autoaplicável)
- Φ₄-CadÚnico (Guardião escalonado)
- D>C>V (gratuidade severa)

**IVCAD-MC NÃO É DIAGNÓSTICO SOCIAL.** É score operacional interno MC, engenharia reversa da metodologia oficial IVCAD do MDS (que é inacessível ao cidadão e ao MC). Lei 8.662/1993 reserva diagnóstico social ao assistente social.

### 2.2 Finalidade
Permitir ao MC oferecer **preço justo** ao cidadão hipervulnerável (não cobrar mais do que ele consegue pagar) e **gratuidade** quando aplicável — sem depender de inacessibilidade do IVCAD oficial.

### 2.3 Base Legal LGPD

| Art. LGPD | Aplicação |
|---|---|
| Art. 7º, V | Consentimento expresso via TTA específico Hook 1b |
| Art. 7º, IX | Interesse legítimo do titular em obter preço justo / acesso a programas sociais |
| Art. 11, I | Consentimento expresso para dados sensíveis (composição familiar PcD, condição de saúde declarada) |
| Art. 14, §1º | Tratamento de dados de crianças/adolescentes no melhor interesse + consentimento do responsável (cidadão titular) |

### 2.4 As 3 Sub-rotas Hook 1b

| Sub-rota | Cenário | Ação MC |
|---|---|---|
| **1b.1** | Cidadão já tem CadÚnico atualizado (≤ 24 meses) | Upload PDF consentido → cálculo IVCAD-MC → roteamento |
| **1b.2** | Cidadão tem CadÚnico desatualizado (> 24 meses) | Encaminhamento ao CRAS para atualização (MC NÃO faz cadastramento) |
| **1b.3** | Cidadão sem CadÚnico | Encaminhamento ao CRAS para cadastramento (MC NÃO faz cadastramento) |

**MC nunca substitui o CRAS.** Sub-rotas 1b.2 e 1b.3 são apenas referenciamento + apoio informacional.

### 2.5 Categorias de Dados Tratados (Sub-rota 1b.1)

🟢 **Verde:**
- Identificação do cidadão titular (já coletada via Φ₀ ou Φ₁)
- NIS

🟡 **Amarelo:**
- Endereço completo + condições habitacionais (saneamento, energia, parede, piso, banheiro)
- Renda declarada do cidadão titular
- Renda familiar total declarada
- Composição familiar (quantidade, idades, parentesco)

🔴 **Vermelho (sensíveis — Art. 11 LGPD):**
- Membros da família com **PcD declarada**
- Membros com **doença crônica declarada**
- Identificação de **crianças/adolescentes na composição** (Art. 14 LGPD)
- Gênero/raça/etnia declarados no CadÚnico

🔴🔴 **Crítico (dados de terceiros):**
- Identificação de membros da família **distintos do titular** (cônjuge, filhos, dependentes)
- ⚠️ Estes membros NÃO assinam o TTA — apenas o titular consente em nome da família
- Aplicação do Art. 14 LGPD para menores

### 2.6 Categorias de Titulares

| Categoria | Vulnerabilidade |
|---|---|
| Titular adulto hipervulnerável | ALTA |
| Cônjuge declarado | ALTA (consentimento indireto via titular) |
| Filhos menores | EXTRA — Art. 14 LGPD melhor interesse |
| Dependente PcD | EXTRA — Art. 11 LGPD sensível |
| Dependente idoso | ALTA |

### 2.7 Fluxo Hook 1b.1

| Etapa | Operação | Dados |
|---|---|---|
| H0 | Confirmação Hook 0 gov.br completo (titular Bronze validado mínimo) | Identificação básica |
| H1 | TTA Hook 1b específico (ZapSign + vídeo explicativo "vou ler teu CadÚnico para descobrir o preço mais justo pra ti") | Consentimento expresso reforçado |
| H2 | Upload PDF CadÚnico consentido pelo titular | PDF completo |
| H3 | Extração estruturada (GAIA-4B self-host BR) — JSON normalizado | Indicadores das 6 dimensões IVCAD-MC |
| H4 | Cálculo IVCAD-MC (40 indicadores binários → 6 dimensões → arithmetic mean) | Score escalar 0-1 |
| H5 | Roteamento ADR-007: pricing ou gratuidade | Decisão |
| H6 | Erasure imediato dos dados de composição familiar pós-cálculo (apenas resultado escalar persiste) | Anonimização |

### 2.8 Retenção CRÍTICA

| Estado | Período | Conteúdo retido |
|---|---|---|
| Processamento | Minutos (durante H3-H4) | PDF + extração estruturada |
| Pós-cálculo | **IMEDIATO** | **Apenas score IVCAD-MC escalar + categoria pricing decidida** |
| Erasure dos dados de família | **Pós-H4** | **PDF descartado · composição familiar descartada · membros descartados** |
| Log auditoria | 6 anos LGPD Art. 16 | Anonimizado (apenas score + decisão pricing) |

**Princípio inviolável Hook 1b:** **Dados de família NÃO persistem além do cálculo.** O score IVCAD-MC é internamente operacional; a composição familiar bruta é destruída.

---

## §3 — NECESSIDADE E PROPORCIONALIDADE

| Dado | Necessidade |
|---|---|
| NIS | Confirmar existência de CadÚnico ativo |
| Renda familiar | Cálculo β_rms para Φ₃ |
| Composição familiar | Cálculo β_rms per capita |
| PcD na família | Dimensão NC (Necessidades de Cuidados) IVCAD-MC |
| Doença crônica família | Dimensão NC |
| Condições habitacionais | Dimensão DH IVCAD-MC |

**Minimização EXTREMA:**
- Dados de cônjuge/filhos descartados pós-cálculo
- Apenas score escalar persiste (sem reverso decompositivo possível)
- Sem coleta extra além do que está no PDF CadÚnico oficial

---

## §4 — RISCOS ESPECÍFICOS Hook 1b

| # | Risco | Prob | Imp | Classe |
|---|---|---|---|---|
| R1 | Re-identificação família via atributos compostos (mesmo sem PII direto) | 2 | 4 | MÉDIO-ALTO |
| R2 | Crianças expostas em vazamento (Art. 14 LGPD) | 1 | 5 | MÉDIO |
| R3 | Score IVCAD-MC vira "rótulo" público estigmatizante | 2 | 4 | MÉDIO-ALTO |
| R4 | Engenharia reversa SAGICAD/MDS contestada regulatoriamente | 2 | 4 | MÉDIO-ALTO |
| R5 | Consentimento titular ≠ consentimento dos demais membros familiares | 3 | 3 | MÉDIO |
| R6 | Cobrança extra B2C pelo cálculo (VEDADO) | 1 | 4 | BAIXO-MÉDIO |
| R7 | Erasure mal executado → dados de família persistem | 1 | 5 | MÉDIO |

**Atenção máxima:** R4 (regulatório SAGICAD) · R3 (stigmatização) · R7 (erasure).

---

## §5 — MEDIDAS TÉCNICAS E ADMINISTRATIVAS

### 5.1 Técnicas
- Idêntico aos RIPDs anteriores §5.1
- **Específicas Hook 1b:**
  - Processamento PDF EXCLUSIVAMENTE em GAIA-4B self-host GCP Brasil (sem Bedrock/Anthropic)
  - Erasure programático pós-H4 (script auditável + log de execução)
  - Auditoria mensal red-team: tenta re-identificar família via atributos compostos do score (deveria falhar)
  - Score IVCAD-MC armazenado apenas em campo único (escalar 0-1) — sem campos decompostos

### 5.2 Administrativas
- Idêntico aos RIPDs anteriores §5.2
- **Específicas Hook 1b:**
  - **TTA Hook 1b específico** com cláusula explícita: "MC vai ler o teu CadÚnico para calcular um score interno — não é diagnóstico social, não é cadastramento, não substitui o CRAS"
  - **VEDADO** comunicar ao cidadão score IVCAD-MC explícito ("teu score é 0,268" — NUNCA)
  - **VEDADO** cobrar do B2C pelo cálculo IVCAD-MC (incluso em Φ₀ R$60+60 success em 4× = R$120 total)
  - **Consulta SAGICAD/MDS enviada 07/05** — risco regulatório PROVISIONAL até resposta
  - **Caso âncora CAD001** (NIS [NIS·CAD001 · REDIGIDO], IVCAD-MC = 0,268, Bolsa Família liberado 05/2026 R$650) já validou empiricamente — sem dano observável

---

## §6 — RISCOS RESIDUAIS PROVISIONAL

| Risco | Status | Mitigação |
|---|---|---|
| Resposta SAGICAD/MDS pendente | Consulta 07/05 sem resposta até 14/05 | PROVISIONAL até resposta · ou parecer Juliana confirma engenharia reversa lícita |
| Art. 14 LGPD melhor interesse de menor | Procedimento textual existe, falta selagem | Selagem pós-Juliana |
| Red team erasure: 1ª execução programada | Pós-N=10 casos | Verificação empírica obrigatória |
| Cláusula TTA Hook 1b específica | Rascunhada, não selada | Selagem pós-Juliana |
| IVCAD-MC v1.0 declarada PROVISIONAL (ADR-013) | Aguarda parecer + SAGICAD | Selagem ADR-013 v1.1 pós-19/05 |

---

## §7 — DECISÃO E JUSTIFICATIVA

**Tratamento JUSTIFICADO** pelo benefício direto e mensurável ao titular:
- Caso CAD001 validou empiricamente: IVCAD-MC = 0,268 → roteamento corretamente identificou Φ₀ pricing social → cidadã recebeu Bolsa Família R$650/mês a partir de 05/2026.

**Condições contínuas:**
1. Parecer Juliana 19/05 Blocos K + M
2. Resposta SAGICAD/MDS ou parecer Juliana confirmando licitude da engenharia reversa
3. Red team erasure executado e aprovado
4. TTA Hook 1b específico selado
5. Validação empírica pós-N=10 casos CadÚnico diferentes

**Cunhar v1.0** pós-parecer Juliana + resposta SAGICAD.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."

∞
