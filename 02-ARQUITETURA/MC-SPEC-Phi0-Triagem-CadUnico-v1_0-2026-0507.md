# MC-SPEC-Phi0-Triagem-CadUnico-v1_0-2026-0507

**Status:** ⚠️ PROVISIONAL — pré-parecer Juliana 19/05
**Data:** 07/05/2026
**Autor:** Claude Opus 4.6 × Alessandro de Souza Neves
**Insumos:** MC-MAPA-Ecossistema-CadUnico-v1_0 (B2, 46 programas) · MC-LACUNAS-B2-Fechamento-Legislativo-v1_0 (B3, 8 leis/decretos) · MC-METODOLOGIA-IVCAD-Oficial-v1_0 (B1) · MC-MAPEAMENTO-IVCAD-Indicador-Campo-v1_0 (B1.5) · MC-ADR-013-ConvencoesOperacionais-IVCAD-MC-v1_0 · MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM · Caso CAD001 (CAD001)
**Hierarquia:** D > C > V
**Validação requerida:** Dra. Juliana (Bloco M), Carlos (UX), Igor (backend)

---

## 1. O QUE É O Φ₀-TRIAGEM

Diagnóstico gratuito (R$0) que o MC oferece a qualquer cidadão inscrito ou elegível ao CadÚnico. Resultado: radar IVCAD-MC (6 dimensões) + mapa de direitos não-acessados + pendências cadastrais detectadas + plano de ação priorizado.

**Canal:** WhatsApp (Whisper + LLM).
**API Humana:** não requer. 100% IA + dado consentido pelo cidadão.
**COGS estimado:** R$5-7/caso (Whisper + LLM + infra).
**Conversão esperada:** Φ₀-Triagem (gratuito) → Φ₀-Dossiê (R$120) → Φ₁ previdenciário (R$2.200).

**O que Φ₀ NÃO é:**
- Não é diagnóstico social (competência assistente social, Lei 8.662/1993)
- Não é parecer jurídico (firewall OAB)
- Não substitui o IVCAD oficial do MDS
- Não promete resultado nem prazo de concessão

---

## 2. ENTRADA DO CIDADÃO — O QUE O MC RECEBE

O cidadão envia via WhatsApp **um dos seguintes:**
1. PDF do comprovante CadÚnico (extraído do app Meu CadÚnico / gov.br)
2. Foto do comprovante CadÚnico impresso
3. Áudio relatando sua situação (Whisper transcreve)
4. Texto descrevendo sua família

**Dado mínimo para rodar IVCAD-MC:** comprovante CadÚnico com composição familiar, renda declarada, escolaridade e condições habitacionais. Sem esse dado, o Φ₀ roda em modo parcial (checklist sem score numérico).

**Dado adicional útil:** extrato de benefícios (Meu CadÚnico), comprovantes de condicionalidades (boletim escolar, caderneta de vacinação).

---

## 3. MOTOR DA TRIAGEM — 4 CAMADAS

### Camada 1 — IVCAD-MC (score numérico)

Calcula as 6 dimensões (NC, DPI, DCA, TQA, DR, CH) sobre os dados do formulário, conforme ADR-013.

**Output:** score 0-1 por dimensão + score global + comparação com benchmark Brasil (0,283).

**Classificação por dimensão:**

| Faixa | Classificação | Cor | Ação |
|---|---|---|---|
| 0,000 – 0,100 | Baixa vulnerabilidade | Verde | Informar — sem urgência |
| 0,101 – 0,400 | Vulnerabilidade moderada | Amarelo | Listar programas relevantes |
| 0,401 – 0,700 | Alta vulnerabilidade | Laranja | Priorizar ação + listar programas |
| 0,701 – 1,000 | Vulnerabilidade crítica | Vermelho | Alerta + ação imediata + Φ₀-Dossiê |

### Camada 2 — Mapa de direitos não-acessados

Para cada dimensão com score > 0,100, cruzar com a tabela Programa × Dimensão (B2 seção 6) e filtrar por critérios de elegibilidade do cidadão.

**Regras de filtragem:**

| Critério | Fonte | Programas afetados |
|---|---|---|
| RFPC ≤ R$218 | CadÚnico Bloco 3 | BF, TSEE, Tarifa Social Água, Farmácia Popular |
| RFPC ≤ ½ SM (R$759) | CadÚnico Bloco 3 | Φ₁c, FIES Social, Isenção concursos/ENEM, Facultativo Baixa Renda |
| RFPC ≤ 2 SM (R$3.036) | CadÚnico Bloco 3 | MCMV Faixa 1, Carteira do Idoso, ID Jovem |
| PcD (COD_DEFICIENCIA_MEMB = 1) | CadÚnico Bloco 6 | BPC, Auxílio-Inclusão, Passe Livre, TSEE via BPC |
| Idoso ≥ 65 (DTA_NASC_PESSOA) | CadÚnico Bloco 4 | BPC idoso, Carteira do Idoso, TSEE via BPC |
| Criança 0-6 | CadÚnico Bloco 4 | BF Primeira Infância (R$150), Programa Criança Feliz |
| Estudante EM público 14-24 | CadÚnico Bloco 7 | Pé-de-Meia |
| Pescador artesanal (8.03 = 1 + 8.04 ∈ {1,2}) | CadÚnico Bloco 8 | Seguro-Defeso |
| Dona/dono de casa sem renda (8.01 = 2 + sem 8.05) | CadÚnico Bloco 8 | Facultativo Baixa Renda RGPS |
| Beneficiário BF ativo | MARC_PBF = 1 | Farmácia Popular gratuita, Pé-de-Meia (prioridade) |
| Beneficiário BPC ativo | 8.09.2 > 0 (proxy) | TSEE automática, Tarifa Social Água, BPC na Escola |

**Output:** lista ordenada de programas elegíveis não-acessados, com valor estimado e ação requerida (automático vs. requerimento ativo).

### Camada 3 — Detector de armadilhas e pendências

5 armadilhas de acumulação (extraídas do B3 seção 8.1):

| # | Armadilha | Condição de detecção | Alerta ao cidadão |
|---|---|---|---|
| A1 | BPC compõe renda pra BF | BPC ativo + RFPC recalculada > R$218 | "O BPC do [nome] entra no cálculo da renda. Pode afetar o Bolsa Família." |
| A2 | Pensão Feminicídio × Pensão por morte | Órfão com ambos potenciais | "A pensão especial não acumula com pensão do INSS. Compare os valores antes de escolher." |
| A3 | Seguro-Defeso × BPC/aposentadoria | Pescador com BPC ou aposentadoria | "O seguro-defeso não pode ser recebido junto com [benefício]. Se requerer, o outro é cessado." |
| A4 | Pé-de-Meia × BF unipessoal | Estudante 19-24 EJA morando sozinho + BF | "Estudante que mora sozinho e recebe Bolsa Família não pode receber o Pé-de-Meia." |
| A5 | BF cancelado com janela de retorno | BF cessado há < 36 meses | "Você tem prioridade de retorno ao Bolsa Família por mais [X] meses. Procure o CRAS." |

5 pendências detectáveis preventivamente:

| # | Pendência | Condição de detecção | Alerta |
|---|---|---|---|
| P1 | CadÚnico desatualizado > 24 meses | DAT_ATUAL_FAM > 24 meses atrás | "Cadastro vencido. BPC e Tarifa Social podem ser bloqueados." |
| P2 | Condicionalidade BF — frequência escolar | Criança 6-18 com flag escolar | "[FILHO CAD001 · REDIGIDO] precisa manter 75% de frequência pra manter o Bolsa Família." |
| P3 | Condicionalidade BF — vacinação | Criança 0-7 sem registro SUS recente | "Verifique se a vacinação de [nome] está em dia." |
| P4 | Família unipessoal sem entrevista domiciliar | Família = 1 pessoa + sem flag domiciliar | "Família de uma pessoa: o CRAS precisa fazer visita domiciliar pro BF funcionar." |
| P5 | RGP desatualizado (pescador) | RGP < 1 ano antes do defeso | "Renove o registro de pesca com pelo menos 1 ano de antecedência." |

### Camada 4 — Passarela Φ₀ → Φ₁ (previdenciário)

Quando o IVCAD-MC + perfil do cidadão indicar elegibilidade previdenciária, o Φ₀ sinaliza a passarela:

| Perfil detectado | Passarela | Produto MC destino |
|---|---|---|
| Dona/dono de casa sem renda, família CadÚnico | Facultativo Baixa Renda (5% SM = R$75,90/mês) | Informar → cidadão decide → se contribuir, vira segurado RGPS → futuro Φ₁ |
| PcD com RFPC ≤ ¼ SM, sem BPC | BPC via INSS | Φ₀-Dossiê → preparação documental → INSS |
| PcD com BPC que arrumou emprego formal | Auxílio-Inclusão (½ SM) | Informar direito → Φ₁ se necessário |
| Idoso ≥ 65, RFPC ≤ ¼ SM, sem benefício | BPC idoso ou Aposentadoria rural/híbrida | Φ₀-Dossiê → análise → Φ₁ se elegível |
| Pescador artesanal em defeso | Seguro-Defeso via MTE (não mais INSS desde MP 1.323/2025) | Informar → direcionar MTE |
| Trabalhador rural com tempo de contribuição | Aposentadoria rural/híbrida | Φ₁ diretamente |

---

## 4. OUTPUT PARA O CIDADÃO — ESTRUTURA DO RELATÓRIO Φ₀

### 4.1 Relatório WhatsApp (modo texto simples — Teste Zilda)

```
Olá [nome]! Seu diagnóstico ficou pronto.

📊 SUA FAMÍLIA (código [código_familiar])
[N] pessoas · renda per capita: R$ [valor]

🔍 RADAR DE VULNERABILIDADE
[emoji] Cuidados: [classificação]
[emoji] Primeira Infância: [classificação]
[emoji] Crianças/Adolescentes: [classificação]
[emoji] Trabalho: [classificação]
[emoji] Renda: [classificação]
[emoji] Moradia: [classificação]

✅ DIREITOS QUE VOCÊ JÁ RECEBE
- [lista]

⚠️ DIREITOS QUE VOCÊ PODE ACESSAR
1. [programa] — [valor/benefício] — [ação necessária]
2. [programa] — [valor/benefício] — [ação necessária]
3. [programa] — [valor/benefício] — [ação necessária]

🔔 ATENÇÃO
- [armadilha ou pendência, se houver]

🚀 PRÓXIMO PASSO
[orientação personalizada — CRAS, atualização cadastral,
Φ₀-Dossiê se precisar de ajuda com documentos]
```

### 4.2 Relatório visual (modo Carlos — interface futura)

Radar SVG das 6 dimensões (já prototipado no Sprint B2 para CAD001) + cards de programas elegíveis + timeline de ações. **Specs visuais:** briefing para Carlos em sprint posterior.

---

## 5. CASO DE VALIDAÇÃO — CAD001 (CAD001) APLICANDO A SPEC

**Entrada:** formulário CadÚnico de CAD001 (NIS [NIS·CAD001 · REDIGIDO], código familiar 7899158630).

**Camada 1 — IVCAD-MC:**
NC 0,143 (verde) · DPI 0,000 (verde) · DCA 0,000 (verde) · TQA 0,714 (vermelho) · DR 0,750 (vermelho) · CH 0,000 (verde) → **Global 0,268**

**Camada 2 — Direitos não-acessados:**

| Programa | Elegível? | Status | Valor estimado | Ação |
|---|---|---|---|---|
| Bolsa Família | ✅ | ✅ Recebendo (R$650) | — | Manter |
| Tarifa Social Energia | ✅ | ✅ Recebendo | — | Manter |
| Tarifa Social Água/Esgoto | ✅ (RFPC ≤ ½ SM) | ❌ Não recebe | Desconto na conta | **Verificar elegibilidade local** |
| Auxílio Gás / Gás do Povo | ✅ (beneficiária BF) | ❌ Provável não recebe | Botijão gratuito | **Verificar** |
| Facultativo Baixa Renda | ✅ (dona de casa, CadÚnico, sem renda formal) | ❌ Não contribui | R$75,90/mês = acesso RGPS | **SINALIZAR — porta previdenciária** |
| Isenção concursos federais | ✅ (RFPC ≤ ½ SM) | Info | Isenção de taxa | Informar |
| FIES Social | ✅ (RFPC ≤ ½ SM) | Info | 100% financiamento | Informar se CAD001 quiser estudar |
| Pé-de-Meia ([FILHO CAD001 · REDIGIDO]) | 🔮 Em 2 anos (EM público) | Pré-elegível | Até R$9.200 em 3 anos | **Informar proativamente** |
| ID Jovem ([FILHO CAD001 · REDIGIDO]) | 🔮 Aos 15 anos (2027) | Pré-elegível | Meia-entrada + transporte | Informar quando atingir |

**Camada 3 — Armadilhas/pendências:**
- A1: não aplicável (sem BPC)
- P2: ✅ **[FILHO CAD001 · REDIGIDO] precisa manter 75% frequência** (condicionalidade BF ativa)
- P3: verificar vacinação ([FILHO CAD001 · REDIGIDO] 12 anos — calendário adolescente)

**Camada 4 — Passarela previdenciária:**
- **Facultativo Baixa Renda detectado** → CAD001 pode se tornar segurada RGPS por R$75,90/mês. Porta de entrada para aposentadoria por idade, salário-maternidade, auxílio-doença, pensão por morte pro [FILHO CAD001 · REDIGIDO].

**Output Zilda para CAD001:**

```
Olá CAD001! Seu diagnóstico ficou pronto.

📊 SUA FAMÍLIA (código 7899158630)
2 pessoas · renda per capita: ~R$325

🔍 RADAR
🟢 Cuidados: OK
🟢 Primeira Infância: OK
🟢 Crianças: OK — [FILHO CAD001 · REDIGIDO] tá na série certa!
🔴 Trabalho: atenção — sem emprego formal
🔴 Renda: atenção — renda baixa
🟢 Moradia: OK

✅ VOCÊ JÁ RECEBE
- Bolsa Família: R$650/mês
- Tarifa Social de Energia

⚠️ DIREITOS QUE VOCÊ PODE ACESSAR
1. Tarifa Social de Água — desconto na conta de água.
   Procure a empresa de água da sua região com o
   comprovante do CadÚnico.
2. Auxílio Gás — botijão gratuito.
   Verifique no CRAS se você já está na lista.
3. Contribuição pro INSS por R$75,90/mês — isso te dá
   direito a aposentadoria, auxílio-doença e pensão pro
   [FILHO CAD001 · REDIGIDO]. Pergunte no INSS sobre o "facultativo de
   baixa renda".

🔔 ATENÇÃO
- [FILHO CAD001 · REDIGIDO] precisa manter 75% de frequência na escola
  pra manter o Bolsa Família.
- Quando [FILHO CAD001 · REDIGIDO] entrar no Ensino Médio, ele pode
  receber até R$9.200 do programa Pé-de-Meia. Guarda
  essa informação.

🚀 PRÓXIMO PASSO
Se quiser ajuda pra organizar os documentos pro CRAS
ou pro INSS, é só falar. O serviço de organização
custa R$60 + R$60 só se der certo (4x de R$15).
```

---

## 6. REGRAS DE NEGÓCIO DO Φ₀

### 6.1 O que é gratuito vs. pago

| Ação | Custo | Justificativa |
|---|---|---|
| IVCAD-MC calculado | R$0 | Porta de entrada — dados públicos processados |
| Mapa de direitos não-acessados | R$0 | Informação que o Estado deveria dar |
| Detector de armadilhas | R$0 | Proteção básica — D > C > V |
| Orientação sobre próximo passo | R$0 | Completude do diagnóstico |
| Organização documental assistida (Φ₀-Dossiê) | R$120 | Trabalho humano (API Humana ~40min) |
| Passarela pra Φ₁ previdenciário | R$2.200 | Produto distinto, escopo distinto |

### 6.2 Regras de comunicação (Teste Zilda)

- Sempre usar nome do cidadão
- Sempre listar o que já recebe ANTES dos direitos novos (validação)
- Nunca dizer "diagnóstico social" — usar "diagnóstico" ou "radar de vulnerabilidade"
- Nunca prometer prazo de concessão
- Nunca omitir condicionalidades (frequência escolar, vacinação)
- Sempre declarar que o IVCAD-MC é indicador MC, não substitui avaliação do CRAS
- Nunca perguntar "qual é sua renda real"
- Valores sempre com "estimado" ou "aproximado" quando dependerem de regulamentação local

### 6.3 Limites do Φ₀ (firewall)

- Φ₀ NÃO preenche formulários governamentais pelo cidadão
- Φ₀ NÃO acessa bases do governo em nome do cidadão (sem Φ₀-Dossiê)
- Φ₀ NÃO emite parecer jurídico
- Φ₀ NÃO calcula valor exato de benefício previdenciário (isso é Φ₁)
- Φ₀ NÃO orienta sobre recursos administrativos ou judiciais

---

## 7. IMPLEMENTAÇÃO TÉCNICA — GATES

| Gate | O que destrava | Quando |
|---|---|---|
| G1 — Parecer Juliana Bloco M | Enquadramento OAB, success fee, disclaimers | 19/05/2026 |
| G2 — IVCAD-MC implementado por Igor | Cálculo automatizado das 6 dimensões | Jun/2026 |
| G3 — Interface Carlos | Radar visual + cards de programas | Jun/2026 |
| G4 — Resposta SAGICAD/MDS | Fecha 12 lacunas operacionais do ADR-013 | 5-15 dias úteis |
| G5 — RIPD Φ₀ autônomo | Compliance LGPD dados sensíveis CadÚnico | Pré-operação |
| G6 — Primeiros 30 casos Φ₀-Dossiê | Gate de COGS real vs. estimado (ADR-007 v3.8 §A2.5) | ~3 meses pós-launch |

---

## 8. MÉTRICAS DE SUCESSO DO Φ₀

| Métrica | Meta Crisálida | Fonte |
|---|---|---|
| Casos Φ₀-Triagem/mês | 50+ (gratuito, alto volume) | WhatsApp |
| Conversão Φ₀-Triagem → Φ₀-Dossiê | ≥ 20% | ClickUp |
| Conversão Φ₀-Triagem → Φ₁ previdenciário | ≥ 10% | ClickUp |
| Direitos não-acessados identificados/caso | ≥ 2 em média | IVCAD-MC output |
| COGS real Φ₀-Dossiê | ≤ R$25/caso | ClickUp timer |
| NPS cidadão | ≥ 80 | WhatsApp survey |

---

**MC-SPEC-Phi0-Triagem-CadUnico-v1_0-2026-0507.md**
**∞**
