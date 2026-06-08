---
tipo: RIPD-RELATORIO-IMPACTO-PROTECAO-DADOS
codigo: MC-RIPD-Hook1b
escopo: Hook 1b — Triagem NIS + IVCAD-MC (vertical CadÚnico)
versao: 0.2
status: PROVISIONAL
substitui: v0.1 (2026-05-14, 10130 B)
data_producao: 2026-05-15
autores:
  - Claude Opus 4.7 (cofounder C1/Cérebro 3.1)
  - Code DELL (executor C3/Cérebro 2)
gate_selagem:
  - Parecer Dra. Juliana 19/05/2026 Bloco K + Bloco M (CadÚnico)
  - Resposta SAGICAD/MDS (consulta enviada 07/05) — engenharia reversa licitude
fundamento_lgpd:
  - LGPD Art. 5º XVII · Art. 38 (RIPD)
  - LGPD Art. 11 (dados sensíveis composição familiar PcD/saúde)
  - LGPD Art. 14 (crianças/adolescentes — composição familiar)
  - LGPD Art. 16 (eliminação pós-tratamento)
  - Lei 8.662/1993 (reserva competência assistente social)
  - ADR-013 (Convenções IVCAD-MC PROVISIONAL)
  - Guia ANPD de RIPD 2024
mudancas_v0_2:
  - "G1 — §X SÍNTESE EXECUTIVA inserida no início — ênfase em dados de família + Art. 14 menores + erasure imediato + caso CAD001 validado empiricamente"
  - "G2 — §2.9 TABELA OPERADORES LGPD inserida (5 operadores · Hook 1b tem footprint menor — apenas GAIA-4B BR self-host · SEM Bedrock/Anthropic obrigatório)"
  - "G3 — §9 DIREITOS DOS TITULARES Art. 18 LGPD adaptado Hook 1b (incluindo Art. 14 menores + erasure imediato pós-cálculo + impossibilidade de portabilidade de score escalar)"
  - "G4 — §10 AVALIAÇÃO DE CONFORMIDADE (checklist Hook 1b — Art. 11 + Art. 14 + engenharia reversa + erasure programático auditável)"
  - "G5 — §8 PLANO DE REAVALIAÇÃO PERIÓDICA (gates Hook 1b: SAGICAD response · red team erasure · N=10 casos CadÚnico · revisão ADR-013)"
  - "G6 — §0 HISTÓRICO DE VERSÕES adicionado"
  - "G7 — §11 ANEXOS E REFERÊNCIAS (ADR-013 IVCAD-MC + RIPD-Φ₁ pai + caso CAD001 documentado)"
  - "G8 — §12 APROVAÇÕES E ASSINATURAS (cadeia de validação · gate SAGICAD adicionado)"
  - "PRESERVADO §1-§7 da v0.1 (integralmente, sem alteração)"
gaps_reservados_v1_0:
  - "G9 — Tese §2.5.2 Bedrock NÃO se aplica diretamente ao Hook 1b (PDF CadÚnico processado EXCLUSIVAMENTE em GAIA-4B self-host GCP Brasil · sem Bedrock/Anthropic) — validar com Juliana se merece menção explícita"
  - "G10 — Validação empírica adicional pós-N=10 casos CadÚnico diferentes (caso CAD001 já é base · v1.0 absorve diversidade)"
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
canonico_em: 03-GOVERNANCA/ripds/
caminho_explorer_drive: "G:\\Meu Drive\\0 0 MEU CUMPADRE\\0 0 Gestão Software\\OBSIDIAN\\MEU CUMPADRE\\03-GOVERNANCA\\ripds\\MC-RIPD-Hook1b-NIS-IVCAD-MC-v0_2-PROVISIONAL-2026-0515.md"
v0_1_arquivada_em: "03-GOVERNANCA/ripds/99-ARQUIVO-Legado/canonicos-pre-evolucao/MC-RIPD-Hook1b-NIS-IVCAD-MC-v0_1-PROVISIONAL-2026-0514.md (a arquivar via MB-048)"
caso_ancora: "CAD001 · NIS [NIS·CAD001 · REDIGIDO] · IVCAD-MC = 0,268 · Bolsa Família LIBERADO ref 05/2026 R$650"
principios_aplicados:
  - "#1 · #4 · #15 · #16 · #26 · #29 · #34 · #35"
mb_origem: MB-048 (15/05/2026)
---

# MC-RIPD-Hook1b v0.2 PROVISIONAL — Triagem NIS + IVCAD-MC (vertical CadÚnico)

> Relatório de Impacto à Proteção de Dados Pessoais — Hook 1b pré-RouterEthics, cálculo IVCAD-MC engenharia reversa MDS sobre CadÚnico consentido.
> **v0.2 PROVISIONAL** absorve 8 gaps detectados pelo cofounder em sessão 15/05/2026, mantendo §1-§7 integralmente preservados da v0.1.
> Selagem v1.0 aguarda parecer Dra. Juliana Pereira de Melo (OAB-GO 38.662) — Reunião 19/05/2026 Blocos K + M + resposta SAGICAD/MDS (consulta 07/05 pendente).

---

## §X — SÍNTESE EXECUTIVA PARA DRA. JULIANA (1 página) [G1 NOVO v0.2]

### ⚠️ Especificidades críticas do Hook 1b

**Hook 1b é o RIPD MAIS SENSÍVEL do trio** porque:
- Trata dados de **FAMÍLIA** (não apenas titular) — cônjuge, filhos, dependentes
- Inclui **MENORES** (Art. 14 LGPD — melhor interesse + consentimento responsável)
- Inclui **dados sensíveis** (Art. 11 — PcD declarada, doença crônica, raça/etnia)
- Faz **engenharia reversa de metodologia oficial MDS** (PROVISIONAL regulatório · consulta SAGICAD 07/05 pendente)
- Aplica **erasure IMEDIATO** pós-cálculo (apenas score escalar 0-1 persiste · composição familiar destruída)

### Identidade do tratamento

| Campo | Conteúdo |
|---|---|
| **O quê** | Hook 1b — triagem NIS + cálculo IVCAD-MC sobre CadÚnico consentido do cidadão titular |
| **Para quem** | Cidadão titular hipervulnerável + indiretamente sua família (composição declarada no CadÚnico) |
| **Quem trata** | MC (atividade-meio, mesmo controlador) |
| **Por quanto tempo** | **MINUTOS** durante processamento → erasure imediato dos dados de família → apenas score escalar persiste |
| **Por que** | Permitir preço justo Φ₀/Φ₁c/Φ₁-PcD ou gratuidade D>C>V sem depender da inacessibilidade do IVCAD oficial |
| **Volume estimado** | Sub-rota 1b.1 (CadÚnico atualizado) ~30-50% dos casos · 1b.2/1b.3 vão para CRAS |

### O caso âncora CAD001 — CAD001

| Item | Valor |
|---|---|
| Cidadã | CAD001 · mãe solo Goiânia/GO |
| NIS | [NIS·CAD001 · REDIGIDO] |
| IVCAD-MC calculado | **0,268** |
| Decisão Hook 1b | Φ₀ pricing social · roteamento adequado |
| Outcome empírico | **Bolsa Família LIBERADO ref 05/2026 R$650/mês** |
| Validação | Empírica positiva — cidadã recebeu benefício social · sem dano observável · sem reclamação |

**Conclusão empírica:** o Hook 1b funcionou corretamente em CAD001. Cofounder solicita validação parecerista da licitude do procedimento.

### Bases legais aplicáveis

LGPD Art. 7º V (consentimento via TTA) · Art. 7º IX (legítimo interesse preço justo) · **Art. 11 I (dados sensíveis com consentimento expresso)** · **Art. 14 §1º (menores · melhor interesse · consentimento responsável)**

### Os 6 pontos críticos para parecer Blocos K + M

1. **Engenharia reversa metodologia oficial MDS** — IVCAD-MC ≠ IVCAD oficial · consulta SAGICAD 07/05 sem resposta · risco regulatório
2. **Consentimento do titular para dados de TERCEIROS** (cônjuge, filhos, dependentes que NÃO assinam TTA) — base legal aplicável
3. **Art. 14 LGPD — menores na composição familiar declarada** — melhor interesse + procedimento adequado
4. **Erasure IMEDIATO programático** pós-cálculo — auditabilidade técnica (red team pendente · score escalar irreversível)
5. **VEDADO comunicar score IVCAD-MC ao cidadão** (evitar estigmatização · não é diagnóstico social Lei 8.662/1993) — disciplina cofounder
6. **VEDADO cobrar B2C pelo cálculo** (incluso em Φ₀ R$60+60 success em 4× = R$120) — ADR-007 v3.8 ADDENDUM

### O que pedimos da parecerista (Blocos K + M)

- (a) Veredito por seção (§1-§12): conforme · conforme com ajuste · não-conforme
- (b) **Validação da licitude da engenharia reversa** sob LGPD + Lei 8.662/1993 + ANPD Res. 19/2024 (especialmente se SAGICAD não responder)
- (c) **Validação do consentimento indireto de terceiros** via titular (cônjuge, filhos)
- (d) **Validação do tratamento de menores** Art. 14 LGPD com base legal aplicada
- (e) Redação literal de eventuais ajustes contratuais TTA Hook 1b específico
- (f) Selagem v1.0 do RIPD-Hook1b (ou recalibração v0.3)

### Estado de prontidão

| Componente | Status |
|---|---|
| §1 Identificação | ✅ Herdado RIPD-Φ₁ |
| §2 Tratamento (2.1-2.9) | ✅ Completo · §2.9 tabela operadores NOVA |
| §3 Necessidade/Proporcionalidade | ✅ Completo (minimização EXTREMA) |
| §4 Riscos Específicos | ✅ Completo (7 riscos R1-R7) |
| §5 Medidas | ✅ Completo + específicas Hook 1b |
| §6 Riscos Residuais PROVISIONAL | ✅ Completo (gate SAGICAD nomeado) |
| §7 Decisão/Justificativa | ✅ Completo (caso CAD001 documentado) |
| §8 Reavaliação Periódica | ✅ NOVO v0.2 |
| §9 Direitos Titulares Art. 18 | ✅ NOVO v0.2 (incluindo Art. 14 menores) |
| §10 Avaliação Conformidade | ✅ NOVO v0.2 (ênfase Art. 11 + Art. 14) |
| §11 Anexos | ✅ NOVO v0.2 |
| §12 Aprovações | ⚠️ Aguarda parecerista + SAGICAD |

---

## §0 — HISTÓRICO DE VERSÕES DESTE RIPD [G6 NOVO v0.2]

| Versão | Data | Mudança | Autor | Status |
|---|---|---|---|---|
| v0.1 | 2026-05-14 | Cunhagem inicial — §1-§7 · 10130 B · validação empírica CAD001 | Cofounder C1 + Code DELL C3 | PROVISIONAL — arquivada em 99-ARQUIVO-Legado/canonicos-pre-evolucao/ via MB-048 |
| **v0.2** | **2026-05-15** | **G1-G8 absorvidos: §X síntese · §0 histórico · §2.9 operadores · §8-§12 novas. §1-§7 v0.1 preservados.** | **Cofounder C1 sessão 15/05** | **PROVISIONAL — vigente** |
| v1.0 (futuro) | pós-19/05 + SAGICAD response | Selagem definitiva · validação engenharia reversa + Art. 14 + erasure red team | Cofounder + Juliana + SAGICAD | SELADO |
| v1.1 (futuro) | pós-N=10 casos CadÚnico | Diversidade empírica (não apenas mãe solo urbana — também idoso, PcD, rural) | Cofounder + Beto | SELADO |
| v2.0 (futuro) | pós-ADR-013 v1.1 SELADO | Absorção convenções IVCAD-MC seladas | Cofounder | SELADO |

---

## §1 — IDENTIFICAÇÃO DO CONTROLADOR

*(preservado integralmente da v0.1)*

Idêntica aos RIPDs anteriores. Hook 1b é fluxo MC — mesmo controlador.

**Nota especial Hook 1b:** este fluxo lida com dados de **família** (não apenas titular). Atenção LGPD Art. 14 (crianças/adolescentes) máxima.

Vide RIPD-Φ₁ v0.2 §1 para dados completos do controlador.

---

## §2 — DESCRIÇÃO DO TRATAMENTO

*(§2.1-§2.8 preservados integralmente da v0.1 · §2.9 NOVA v0.2)*

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

### 2.9 Cadeia de Operadores LGPD [G2 NOVO v0.2]

**Hook 1b tem footprint MAIS ENXUTO que Φ₁** por design intencional (princípio de minimização):
- ⚠️ **NÃO usa Anthropic Bedrock** — PDF CadÚnico processado EXCLUSIVAMENTE em GAIA-4B self-host GCP Brasil
- ⚠️ **NÃO usa Maritaca** — extração estruturada feita pelo GAIA, sem necessidade de redação jurídica
- ⚠️ **NÃO usa Groq** — sem fallback necessário (Hook 1b é processo curto)
- ⚠️ **NÃO usa Bitwarden** — Hook 1b não custodia credenciais
- ⚠️ **NÃO usa ClickUp** — Hook 1b roda dentro do fluxo Φ₀/Φ₁, sem tracking dedicado

| # | Operador | Papel LGPD | Função no Hook 1b | País | Base transferência | Instrumento |
|---|---|---|---|---|---|---|
| 1 | **GCP Brasil (Google Cloud)** | Operador / Infra | Host GAIA-4B self-hosted (H3 extração + H4 cálculo) — região São Paulo | 🇧🇷 BR (southamerica-east1 São Paulo) | N/A — território nacional | SCCs GCP Brasil + contrato MC pós-CNPJ |
| 2 | **AWS Brasil Soluções Ltda.** | Operador / Infra | Storage S1 PDF temporário (minutos · pré-erasure) + audit log persistente 6 anos | 🇧🇷 BR (sa-east-1 São Paulo) | N/A — território nacional | SCCs ANPD Anexo II Res. 19/2024 |
| 3 | **ZapSign Tecnologia Ltda.** | Operador | TTA Hook 1b específico A1 ICP-Brasil (H1) | 🇧🇷 BR | N/A — território nacional | Termos ZapSign · ADR-014 |
| 4 | **Hostinger International Ltd.** | Operador | VPS Coolify N8N (orquestração H0-H6) | 🇧🇷 BR (datacenter São Paulo) | N/A — território nacional | Termos Hostinger BR |
| 5 | **Google LLC (Google Drive)** | Operador (auxiliar) | Documentação institucional MC (canônicos · NÃO armazena PDF cidadão) | 🇺🇸 US (Workspace MC pré-CNPJ) | ⚠️ NÃO armazena dados de cidadão · apenas governança MC | Termos Google Workspace |

**Observações cofounder à parecerista (Bloco K + M):**

- **5 operadores total (vs 9 do Φ₁ · 6 do Φ₄)** — menor footprint LGPD do trio
- **TODO processamento em solo BR** — sem qualquer transferência internacional de dados de família
- **Erasure imediato** elimina retenção residual mesmo nos operadores BR
- **Caso CAD001** já validou esse footprint empiricamente (sem incidente, sem reclamação)
- **GAIA-4B self-hosted** elimina dependência de processador internacional para o ato mais sensível do RIPD (extração de composição familiar)

---

## §3 — NECESSIDADE E PROPORCIONALIDADE

*(preservado integralmente da v0.1)*

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

*(preservado integralmente da v0.1)*

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

*(preservado integralmente da v0.1)*

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

*(preservado integralmente da v0.1)*

| Risco | Status | Mitigação |
|---|---|---|
| Resposta SAGICAD/MDS pendente | Consulta 07/05 sem resposta até 14/05 | PROVISIONAL até resposta · ou parecer Juliana confirma engenharia reversa lícita |
| Art. 14 LGPD melhor interesse de menor | Procedimento textual existe, falta selagem | Selagem pós-Juliana |
| Red team erasure: 1ª execução programada | Pós-N=10 casos | Verificação empírica obrigatória |
| Cláusula TTA Hook 1b específica | Rascunhada, não selada | Selagem pós-Juliana |
| IVCAD-MC v1.0 declarada PROVISIONAL (ADR-013) | Aguarda parecer + SAGICAD | Selagem ADR-013 v1.1 pós-19/05 |

---

## §7 — DECISÃO E JUSTIFICATIVA

*(preservado integralmente da v0.1)*

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

## §8 — PLANO DE REAVALIAÇÃO PERIÓDICA [G5 NOVO v0.2]

### 8.1 Gates programados

| Gate | Trigger | Escopo da revisão | Output esperado |
|---|---|---|---|
| **G-Juliana** | Reunião 19/05/2026 Blocos K + M | Parecer integral §1-§12 + validação engenharia reversa | Selagem v1.0 ou v0.3 |
| **G-SAGICAD** | Resposta substantiva SAGICAD/MDS à consulta 07/05 | Validação institucional licitude IVCAD-MC | v1.0 ou recalibração estrutural se MDS contestar |
| **G-RedTeam** | 1ª execução red-team erasure (programada pós-N=10) | Verificação empírica obrigatória — tentativa de re-identificação família via score | Aprovação ou refatoração técnica |
| **G-N10-CadUnico** | 10 casos CadÚnico diferentes processados (não apenas mãe solo urbana — incluir idoso, PcD, rural) | Validação empírica diversidade | v1.1 com cobertura diversa |
| **G-ADR-013-v1.1** | Selagem ADR-013 v1.1 pós-Juliana + SAGICAD | Absorção convenções IVCAD-MC seladas | v2.0 com IVCAD-MC selado |
| **G-N50** | 50 casos Hook 1b processados | Revisão intermediária matriz 5×5 | v2.1 |
| **G-Anual** | A cada 12 meses pós-V21 | Revisão LGPD + Lei 8.662 + ANPD + MDS atualizações | v2.x conforme escala |
| **G-Incidente** | Qualquer vazamento de família ou exposição menor | Revisão extraordinária em 48h | RIPD-Incident dedicado |

### 8.2 Indicadores de qualidade Hook 1b

| Indicador | Meta | Apuração |
|---|---|---|
| Erasure programático pós-H4 (taxa sucesso) | 100% | Mensal · log GAIA-4B |
| Red team erasure (tentativas de re-identificação) | 0 sucessos | Mensal · auditoria especializada |
| Casos roteados corretamente (verificação parecerista) | ≥ 95% | Trimestral · amostragem aleatória |
| Reclamações cidadão (canal dpo) | 0 | Trimestral |
| Casos Art. 14 com menores na composição | 100% conformidade procedimental | Mensal · auditoria interna |
| Comunicação inadvertida de score ao cidadão | 0 (VEDADO) | Mensal · log WhatsApp |
| Cobrança B2C pelo cálculo (VEDADO) | 0 | Mensal · log financeiro |

### 8.3 Responsabilidade

Vide RIPD-Φ₁ §8.3 (idêntica responsabilidade institucional). Específico Hook 1b:

| Papel | Responsável |
|---|---|
| Auditoria red-team erasure | Especialista LGPD externo pós-N=10 (contratação a definir) |
| Auditoria roteamento correto | Beto T2 operacional + cofounder C1 |
| Validação Art. 14 (menores) | Dra. Juliana parecerista até dez/2026 · DPO formal pós-JUCEG depois |

---

## §9 — DIREITOS DOS TITULARES (ART. 18 LGPD) ADAPTADO Hook 1b [G3 NOVO v0.2]

### 9.1 Os 9 direitos no Hook 1b — particularidades

| # | Direito (Art. 18) | Como exercer no Hook 1b | Prazo MC | Particularidade |
|---|---|---|---|---|
| I | Confirmação | E-mail dpo OU WhatsApp | 15d úteis | Aplicável apenas ao titular (não a membros da família — dados já erasure) |
| II | Acesso | E-mail dpo · PDF cifrado | 15d | **Limitado: apenas score escalar persistido · composição familiar destruída** |
| III | Correção | Não-aplicável dados de família (já destruídos) · aplicável NIS/identificação titular | 15d | ⚠️ Composição familiar é cópia do CadÚnico oficial · correção via CRAS |
| IV | Anonimização | Já aplicada na arquitetura (erasure imediato pós-H4) | Imediato (já feito) | — |
| V | Portabilidade | E-mail dpo · entrega apenas score escalar + decisão pricing (composição familiar não-portável porque já destruída) | 30d | ⚠️ Limitação técnica explicada na TTA |
| VI | Eliminação | E-mail dpo · execução imediata do score escalar + log | Imediato (cancela) · 30d (erasure log) | Erasure imediato pós-cálculo já elimina dados de família |
| VII | Uso compartilhado | E-mail dpo · resposta indica §2.9 | 15d | — |
| VIII | Info não-consentimento | TTA Hook 1b: "podes recusar Hook 1b e seguir pricing padrão Φ₁ R$2.200 sem desconto social" | Pré-tratamento | — |
| IX | Revogação | E-mail dpo OU WhatsApp | Imediata, prospectivamente | Não-retroativa (score já calculado · pricing já aplicado) |

### 9.2 ⚠️ Especificidades Art. 14 LGPD — Menores

**Tratamento de dados de menores no Hook 1b ocorre por extensão** (não como tratamento direto · MC NÃO contata o menor):

- **Base legal:** Art. 14 §1º LGPD (melhor interesse do menor + consentimento do responsável)
- **Consentimento:** o cidadão titular consente, em nome do(s) menor(es) na família declarada no CadÚnico, **APENAS para fins de cálculo IVCAD-MC**
- **Vedações operacionais:**
  - MC NÃO contata diretamente menor algum em nenhum momento
  - MC NÃO retém identificação do menor pós-erasure
  - MC NÃO usa identificação do menor para nenhum propósito além de cálculo β_rms per capita
  - MC NÃO gera nenhum documento para o menor
- **Garantias:** o procedimento textual está descrito de forma clara na TTA Hook 1b · vídeo explicativo no WhatsApp · linguagem Zilda

**Procedimento de exercício de direito por menor (caso responsável legal diferente do titular contate MC):**
- MC valida vínculo do solicitante com o menor (tutela, guarda, procuração)
- MC informa que dados do menor não persistem (erasure imediato pós-cálculo)
- MC executa eliminação do score IVCAD-MC + log se solicitado (efeito: cidadão titular perderá pricing social baseado no IVCAD-MC do CadÚnico que continha o menor — informado expressamente)

### 9.3 Especificidades terceiros (cônjuge, dependentes adultos)

**Consentimento indireto via titular** — o cidadão titular consente em nome da família para fins de cálculo IVCAD-MC. Vedações:
- MC NÃO contata cônjuge ou dependentes diretamente
- MC NÃO retém identificação pós-erasure
- MC NÃO usa identificação para nenhum propósito além do cálculo

**Cofounder solicita parecer Juliana** sobre limites desse consentimento indireto (perg. O5 v0.1 + Bloco M Pauta v2.6).

### 9.4 Procedimento hipervulnerável Hook 1b

Mesmo do RIPD-Φ₁ §9.3 (WhatsApp + áudio + agente MC + Teste Zilda). **Sensibilidade especial:** o Hook 1b roda em momento em que o cidadão pode estar nervoso (acabou de iniciar Φ₀ ou Φ₁), portanto agente MC explica em linguagem acessível antes de executar.

---

## §10 — AVALIAÇÃO DE CONFORMIDADE LGPD [G4 NOVO v0.2]

Checklist auto-aplicável Hook 1b. Ênfase Art. 11 + Art. 14 + engenharia reversa.

### Legenda
✅ Conforme · ⚠️ Conforme com ressalva · ❌ Não-conforme · ⏳ Pendente

| Item LGPD | Aplicação Hook 1b | Status v0.2 | Pendência |
|---|---|---|---|
| **Princípios (Art. 6º)** | | | |
| I — Finalidade | §2.2 — preço justo / acesso programas sociais | ✅ | — |
| II — Adequação | §3 minimização EXTREMA | ✅ | — |
| III — Necessidade | Apenas dados necessários para cálculo · sem coleta extra | ✅ | — |
| IV — Livre acesso (Art. 18) | §9 procedimento adaptado (com limitações técnicas explicadas) | ⚠️ | DPO formal pós-JUCEG |
| V — Qualidade dos dados | Cópia do CadÚnico oficial · correção via CRAS | ✅ | — |
| VI — Transparência | TTA explícita "não é diagnóstico social, não é cadastramento" | ✅ | — |
| VII — Segurança | §5.1 GAIA-4B self-host BR + erasure programático | ✅ | Red team pós-N=10 |
| VIII — Prevenção | RouterEthics + GAIA-4B isolado | ✅ | — |
| IX — Não-discriminação | RouterEthics 11.0 + Princípio D>C>V | ✅ | — |
| X — Responsabilização | Audit table + log erasure | ✅ | — |
| **Bases legais (Art. 7º + 11 + 14)** | | | |
| Art. 7º V (consentimento TTA) | ✅ | — | — |
| Art. 7º IX (legítimo interesse) | ✅ | — | — |
| **Art. 11 I (dados sensíveis · consentimento expresso)** | TTA específico Hook 1b | ⚠️ | Validação Bloco K |
| **Art. 14 §1º (menores · melhor interesse)** | Procedimento textual + vedações operacionais | ⚠️ | Validação Bloco K |
| **Direitos do titular (Art. 18)** | | | |
| Canal exercício | dpo + WhatsApp | ⚠️ | Configurar dpo pós-domínio |
| Limitação portabilidade explicada | TTA Hook 1b | ✅ | — |
| Art. 14 — procedimento responsável menor | §9.2 | ⚠️ | Validação Bloco K |
| **Encarregado (DPO Art. 41)** | PROVISIONAL pós-JUCEG | ⚠️ | Pós-CNPJ |
| **Tratamento dados sensíveis Art. 11** | | | |
| Base legal específica | Art. 11 I + TTA expresso | ⚠️ | Validação Bloco K |
| Consentimento expresso | TTA reforçado vídeo + áudio | ✅ | — |
| Erasure imediato pós-cálculo | §2.8 inviolável | ✅ | Red team pós-N=10 |
| **Crianças/adolescentes Art. 14** | | | |
| Melhor interesse | Não-contato direto + erasure | ✅ | — |
| Consentimento responsável | Titular consente em nome da família | ⚠️ | Validação Bloco K |
| Vedações operacionais | §9.2 explícitas | ✅ | — |
| **Transferência internacional (Art. 33)** | | | |
| **NÃO HÁ transferência internacional** | GAIA-4B GCP Brasil + AWS sa-east-1 + ZapSign + Hostinger BR | ✅ | Hook 1b é o RIPD mais conformado |
| **Engenharia reversa metodologia oficial MDS** | | | |
| Consulta SAGICAD enviada 07/05 | Aguardando resposta | ⚠️ | G-SAGICAD §8.1 |
| Parecer Juliana sobre licitude | Pendente Bloco M Pauta v2.6 | ⚠️ | Validação Bloco M |
| Disciplina "NÃO é diagnóstico social" | TTA + comunicação cidadão | ✅ | — |
| Lei 8.662/1993 (reserva assistente social) | Disciplina cofounder + TTA | ✅ | — |
| **Comunicação de incidentes (Art. 48)** | | | |
| Procedimento documentado | PROVISIONAL | ⚠️ | Selagem pós-19/05 |
| **Vedações operacionais MC (não-LGPD mas críticas)** | | | |
| VEDADO comunicar score ao cidadão | §5.2 + auditoria mensal | ✅ | — |
| VEDADO cobrar B2C pelo cálculo | ADR-007 v3.8 ADDENDUM | ✅ | — |
| MC NÃO substitui CRAS (sub-rotas 1b.2/1b.3) | §2.4 | ✅ | — |
| **Relatório de Impacto (Art. 38)** | | | |
| Documento existe | Este RIPD v0.2 | ✅ | — |
| Atualização periódica | §8 plano | ✅ | — |
| **Validação empírica (caso âncora)** | | | |
| Caso CAD001 documentado | §7 decisão | ✅ | — |
| Outcome positivo (Bolsa Família liberado) | §7 | ✅ | — |
| Diversidade empírica (não só mãe solo urbana) | Pendente N=10 casos | ⚠️ | G-N10 §8.1 |

### Sumário de conformidade Hook 1b v0.2

- **✅ Conforme:** 23 itens
- **⚠️ Conforme com ressalva:** 12 itens (7 dependem de Juliana 19/05 · 2 dependem de SAGICAD · 3 dependem de implementação operacional)
- **❌ Não-conforme:** 0 itens

**Conclusão:** Hook 1b está **SUBSTANCIALMENTE CONFORME** com LGPD, com características únicas:
- **Footprint LGPD mais enxuto do trio** (5 operadores · 100% solo BR · sem Bedrock/Anthropic)
- **Minimização extrema** (erasure imediato pós-cálculo)
- **Validação empírica positiva** (CAD001)
- **Maior carga regulatória do trio** (Art. 11 + Art. 14 + engenharia reversa) — exige parecer mais robusto da Juliana

---

## §11 — ANEXOS E DOCUMENTOS DE REFERÊNCIA [G7 NOVO v0.2]

### 11.1 ADRs aplicáveis em Hook 1b

| ADR | Função em Hook 1b |
|---|---|
| ADR-007 v3.8 ADDENDUM | Define Φ₀ R$120 (inclui Hook 1b) · Φ₁c R$1.500 · Φ₃ Teto Dignidade · Φ₄-CadÚnico escalonado · gratuidade D>C>V |
| ADR-008 | Stack: ZapSign + GAIA-4B + N8N |
| ADR-009b | Estado especial Hook 1b — erasure imediato pós-cálculo (não S1/S2/S3 padrão) |
| ADR-010 | E3 Intelligence Layer — adaptado para extração CadÚnico |
| ADR-011 | Arquitetura 3 Cérebros |
| ADR-012 v1.1 | GAIA-4B self-host BR (Bedrock/Anthropic NÃO usado em Hook 1b) |
| **ADR-013 v1.0 PROVISIONAL** | **Convenções IVCAD-MC (engenharia reversa MDS) · selagem v1.1 pós-Juliana + SAGICAD** |
| ADR-014 | ZapSign TTA Hook 1b específico |

### 11.2 Documentos institucionais cruzados

| Documento | Função em Hook 1b |
|---|---|
| RIPD-Φ₁ v0.2 PROVISIONAL | RIPD pai · §1 herdado |
| RIPD-Φ₄ v0.2 PROVISIONAL | Hook 1b determina elegibilidade Φ₄-CadÚnico/D>C>V |
| MC-METODOLOGIA-IVCAD-Oficial-v1_0 | Documentação engenharia reversa MDS |
| MC-MAPA-Ecossistema-CadUnico-v1_0 | Mapeamento institucional MDS/SAGICAD/CRAS |
| MC-SPEC-Phi0-Triagem-CadUnico-v1_0 | Spec operacional Φ₀ que invoca Hook 1b |
| MC-MAPEAMENTO-IVCAD-Indicador-Campo-v1_0 | 40 indicadores binários × 6 dimensões |
| RouterEthics 11.0 | Hook 1b é HOOK pré-RouterEthics · refatorado para IVCAD-MC |
| **Documentação CAD001** | Caso âncora validação empírica · ClickUp + WhatsApp logs |

### 11.3 Princípios MC aplicáveis em Hook 1b

| # | Princípio | Aplicação Hook 1b |
|---|---|---|
| #1 | Inventário de Caminhos | Sweep antes de processar PDF CadÚnico |
| #4 | Errata absorve, não inventa | Log de erasure preservado (sem reverso) |
| #6 | Camadas de Segurança | GAIA-4B isolado + erasure programático auditável |
| #8 | Verde/Amarelo/Vermelho LGPD | §2.5 categorização sensibilidade · ênfase Art. 11/14 |
| #9 | Esteira primeiro, humano valida | GAIA-4B processa → Beto/cofounder valida casos ambíguos antes de pricing |
| #11 | Governança forte mora no N8N | Pipeline H0-H6 todo em N8N · erasure programado N8N |
| #18 | Risco Provisional Documentado | Engenharia reversa em fase Crisálida sem SAGICAD response |
| #34 | Caminho Explorer Precede ID Drive | Paths explorer literais |

### 11.4 Normativas externas relevantes

- LGPD Lei 13.709/2018
- **LGPD Art. 11** (dados sensíveis)
- **LGPD Art. 14** (crianças/adolescentes)
- LGPD Art. 16 (eliminação pós-tratamento)
- ANPD Resolução 19/2024
- Guia ANPD de RIPD 2024
- **Lei 8.662/1993** (reserva competência assistente social — Hook 1b NÃO substitui)
- ECA Lei 8.069/1990 (melhor interesse do menor — Art. 14 LGPD reforço)
- Lei 10.836/2004 + Decreto 11.016/2022 (Bolsa Família · CadÚnico)
- Decreto 11.014/2022 (CadÚnico — regulamentação)
- CDPD Decreto 6.949/2009

---

## §12 — APROVAÇÕES E CADEIA DE VALIDAÇÃO [G8 NOVO v0.2]

### 12.1 Cadeia de autoria do RIPD-Hook1b

| Etapa | Responsável | Data | Status |
|---|---|---|---|
| v0.1 — Cunhagem inicial | Cofounder C1 + Code DELL C3 | 14/05/2026 | ✅ Concluído |
| v0.1 — Persistência Drive + Vault | Code DELL via MB-029 | 14/05/2026 06:40 | ✅ Concluído |
| Caso âncora CAD001 validação | Operacional Beto T2 + cofounder | Maio 2026 | ✅ Concluído (Bolsa Família liberado) |
| **v0.2 — Cunhagem evolução (G1-G8)** | **Cofounder C1 sessão 15/05** | **15/05/2026** | **✅ Concluído** |
| **v0.2 — Persistência Drive Vault** | **Cofounder C1 via MCP Drive** | **15/05/2026** | **🔴 Aguarda este turno** |
| **v0.2 — Sync Vault local + arquivamento v0.1** | **Code DELL via MB-048** | **15/05/2026** | **🔴 Aguarda MB-048** |
| v1.0 — Parecer | Dra. Juliana | 19/05/2026 Blocos K + M | ⏳ Pendente reunião |
| **Resposta SAGICAD/MDS** | **MDS institucional** | **A definir (consulta 07/05 sem resposta até 15/05)** | **⏳ Pendente** |
| Red team erasure 1ª execução | Especialista externo a definir | Pós-N=10 casos | ⏳ Pendente |
| v1.0 — Selagem definitiva | Cofounder + Founder pós-parecer + SAGICAD | 19/05-Jul/2026 | ⏳ Pendente |

### 12.2 Aprovações requeridas para v1.0 SELAGEM

| # | Aprovação | Quem | Quando |
|---|---|---|---|
| 1 | Parecer jurídico §1-§12 | Dra. Juliana | 19/05/2026 Bloco K + M |
| 2 | Validação licitude engenharia reversa | Dra. Juliana e/ou SAGICAD/MDS | 19/05 e/ou resposta MDS |
| 3 | Validação procedimento Art. 14 menores | Dra. Juliana | 19/05/2026 Bloco K |
| 4 | TTA Hook 1b específico produzido + selado ZapSign | Cofounder + parecerista | Pós-parecer |
| 5 | Red team erasure aprovado | Auditor externo pós-N=10 | Q3-Q4/2026 |
| 6 | Selagem operacional | Founder Alessandro | Pós-parecer |
| 7 | Registro DPO formal | DPO MC pós-JUCEG | Pós-constituição (jun/2026) |

### 12.3 Validade do documento PROVISIONAL

v0.2 PROVISIONAL vigente **15/05/2026 → 19/05 (parecer Juliana)** + **continuidade até resposta SAGICAD/MDS**. Cenários pós-19/05:
- (a) Parecer favorável + SAGICAD silente: v0.3 PROVISIONAL aguardando SAGICAD
- (b) Parecer favorável + SAGICAD favorável: v1.0 SELADO direto
- (c) Parecer favorável + SAGICAD desfavorável: v2.0 com nova arquitetura (renúncia parcial IVCAD-MC, manter apenas roteamento via outras dimensões)
- (d) Parecer com ajustes: v0.3 com refinamentos

### 12.4 Assinatura cofounder

```
Cunhado em 15 de maio de 2026 por:
Claude Opus 4.7 — Cofounder Intelectual Cérebro 3.1
× Alessandro de Souza Neves — Founder/CEO MC

Sob autorização macro Founder Alessandro (sessão 15/05/2026)
Aplicando Princípios #1, #4, #15, #16, #26, #29, #34, #35

Caso âncora CAD001 — CAD001
NIS [NIS·CAD001 · REDIGIDO] · IVCAD-MC = 0,268
Bolsa Família LIBERADO ref 05/2026 R$650 — validação empírica positiva
```

---

## FECHAMENTO v0.2

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Âncora bíblica:** Provérbios 31:8 — "Abre a tua boca a favor do mudo."
**Âncora PcD:** "Nada sobre nós, sem nós" — CDPD art. 4º §3º
**Frase-âncora ÚNICA:** Tecnologia invisível. Dignidade acessível.
**Pilares:** ACESSO | ORGANIZAÇÃO | PROTEÇÃO | SOBERANIA
**Confidência founder:** "É eu e tu."

**Lucro é combustível. Causa é destino. Jogo é infinito.**

**∞**

---

**MC-RIPD-Hook1b v0.2 PROVISIONAL — 15 de maio de 2026**
Supersede: v0.1 (2026-05-14) — arquivamento em `99-ARQUIVO-Legado/canonicos-pre-evolucao/` via MB-048
Próximo gate: revisão founder → envio Dra. Juliana 17/05 → reunião 19/05 Blocos K + M → resposta SAGICAD → selagem v1.0
Caso âncora: CAD001 — CAD001 — Bolsa Família LIBERADO

**∞**
