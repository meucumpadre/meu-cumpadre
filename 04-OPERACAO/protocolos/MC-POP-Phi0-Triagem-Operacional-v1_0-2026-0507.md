# MC-POP-Phi0-Triagem-Operacional-v1_0-2026-0507

**Status:** ⚠️ PROVISIONAL — pré-parecer Juliana 19/05
**Data:** 07/05/2026
**Autor:** Claude Opus 4.6 × Alessandro de Souza Neves
**Insumos:** MC-SPEC-Phi0-Triagem-CadUnico-v1_0 · MC-MAPA-Ecossistema-CadUnico-v1_0 · MC-LACUNAS-B2-Fechamento-Legislativo-v1_0 · MC-ADR-013-ConvencoesOperacionais-IVCAD-MC-v1_0 · MC-MAPEAMENTO-IVCAD-Indicador-Campo-v1_0 · MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM
**Hierarquia:** D > C > V
**Filtros universais aplicáveis:** Zilda-STF · Firewall OAB · Correção 48h · Proof-First · D>C>V · Inversão Cósmica

---

## SEÇÃO 1 — CHECKLIST OPERACIONAL (POP Φ₀-Triagem)

**Quem executa:** Beto (T1+T2 híbrido) com supervisão Alessandro.
**Canal:** WhatsApp.
**Tempo total estimado:** 15-25 min por caso (Φ₀-Triagem gratuito) · 40-60 min se Φ₀-Dossiê contratado.

---

### PASSO 1 — RECEPÇÃO E IDENTIFICAÇÃO DO CANAL

**Ação:** Cidadão envia mensagem no WhatsApp do MC. Identificar tipo de entrada.

**Critério de saída:** tipo de entrada classificado.

| Entrada | Tratamento |
|---------|-----------|
| PDF do comprovante CadÚnico (app Meu CadÚnico / gov.br) | ✅ Entrada ideal — seguir Passo 2 |
| Foto do comprovante CadÚnico impresso | ✅ OCR via LLM — seguir Passo 2 |
| Áudio relatando situação | Whisper transcreve → seguir Passo 1B |
| Texto descrevendo família | Seguir Passo 1B |
| Cidadão não sabe o que é CadÚnico | Seguir Passo 1C |

**Tempo estimado:** 2-3 min.

→ **Próximo:** Passo 2 (se documento) · Passo 1B (se áudio/texto sem documento) · Passo 1C (se não tem CadÚnico)

---

### PASSO 1B — CIDADÃO SEM COMPROVANTE CADÚNICO

**Ação:** Orientar o cidadão a extrair o comprovante.

**Mensagem padrão (Teste Zilda):**

```
Pra eu fazer o radar completo, preciso do seu
comprovante do CadÚnico. Tem duas formas de pegar:

📱 Pelo celular:
1. Baixe o app "Meu CadÚnico" na loja do celular
2. Entre com sua conta gov.br
3. Clique em "Comprovante de Cadastro"
4. Mande o PDF aqui pra mim

🏢 Pelo CRAS:
Vá ao CRAS mais perto da sua casa e peça o
comprovante atualizado.

Se não conseguir, me manda um áudio contando:
quantas pessoas moram com você, idade de cada um,
se alguém trabalha, e se recebe algum benefício.
Eu faço um radar simplificado.
```

**Critério de saída:** cidadão envia PDF/foto OU envia dados por áudio/texto.

**Se enviar áudio/texto sem documento:** Φ₀ roda em **modo parcial** — checklist sem score numérico IVCAD-MC. Registrar no ClickUp como `ivcad_modo: parcial`. Orientar atualização CadÚnico para futuro radar completo.

**Tempo estimado:** 5-10 min (depende do cidadão).

→ **Próximo:** Passo 2 (se documento) · Passo 3 direto em modo parcial (se só áudio/texto)

---

### PASSO 1C — CIDADÃO NÃO INSCRITO NO CADÚNICO

**Ação:** Verificar se o cidadão é elegível ao CadÚnico e orientar inscrição.

**Critério de elegibilidade CadÚnico (Decreto 11.016/2022):** renda familiar mensal per capita ≤ ½ SM (R$759 em 2026) OU renda familiar mensal ≤ 3 SM (R$4.554) OU em situação de rua OU em situação de calamidade.

**Mensagem padrão:**

```
Você ainda não tem CadÚnico? Sem problema.

Se a renda da sua família é até R$759 por pessoa,
você tem direito a se cadastrar.

O cadastro é feito no CRAS mais perto da sua casa.
Leve:
- Documento de identidade (RG ou CPF) de todos
- Comprovante de endereço
- Se tiver, carteira de trabalho

Depois que cadastrar, me manda o comprovante que
eu faço o radar pra você.
```

**Critério de saída:** cidadão orientado. Registrar no ClickUp como `status_cadunico: nao_inscrito`. Programar follow-up em 15 dias.

**Tempo estimado:** 3-5 min.

→ **Próximo:** Encerrar atendimento com follow-up agendado.

---

### PASSO 2 — EXTRAÇÃO E VALIDAÇÃO DOS DADOS

**Ação:** Processar o comprovante CadÚnico e extrair dados necessários para o cálculo IVCAD-MC.

**Dados a extrair:**

| Dado | Campo CadÚnico | Obrigatório |
|------|----------------|-------------|
| Código familiar | 1.01 [COD_FAMILIAR_FAM] | ✅ |
| NIS do responsável | Sistema [NUM_NIS_PESSOA_ATUAL] | ✅ |
| Composição familiar (nomes, idades, parentesco) | Bloco 4 | ✅ |
| Renda per capita declarada | Bloco 3 [VLR_RENDA_MEDIA_FAM] | ✅ |
| Data da última atualização | [DAT_ATUAL_FAM] | ✅ |
| Escolaridade de cada membro | Bloco 7 | ✅ |
| Situação de trabalho | Bloco 8 | ✅ |
| Deficiência (se houver) | Bloco 6 [COD_DEFICIENCIA_MEMB] | ✅ |
| Condições do domicílio | Bloco 2 | ✅ |
| Benefícios recebidos | Bloco 8 campo 8.09 + [MARC_PBF] | ✅ |
| Localização urbana/rural | 2.01 [COD_LOCAL_DOMIC_FAM] | ✅ |

**Verificações de integridade:**

1. DAT_ATUAL_FAM > 24 meses? → **FLAG P1** (cadastro desatualizado)
2. Dados inconsistentes (ex.: idade negativa, renda zerada com benefício ativo)? → Nota no ClickUp
3. Foto ilegível? → Pedir reenvio ou orientar extração digital

**Critério de saída:** dados extraídos e validados no ClickUp.

**Tempo estimado:** 3-5 min (PDF legível) · 5-8 min (foto/OCR).

→ **Próximo:** Passo 3

---

### PASSO 3 — CÁLCULO IVCAD-MC

**Ação:** Rodar o motor IVCAD-MC (6 dimensões, 40 indicadores binários, ADR-013).

**Modo completo (com comprovante CadÚnico):**

```
IVCAD-MC = (NC + DPI + DCA + TQA + DR + CH) / 6

NC  = (NC1+NC2+NC3+NC4+NC5+NC6+NC7) / 7
DPI = (DPI1+DPI2+DPI3) / 3
DCA = (DCA1+DCA2+DCA3+DCA4+DCA5) / 5
TQA = (TQA1+TQA2+TQA3+TQA4+TQA5+TQA6+TQA7) / 7
DR  = (DR1+DR2+DR3+DR4) / 4
CH  = (CH1+CH2+...+CH14) / 14
```

**Classificação por dimensão:**

| Score | Classificação | Cor | Ação |
|-------|---------------|-----|------|
| 0,000 – 0,100 | Baixa | 🟢 Verde | Informar |
| 0,101 – 0,400 | Moderada | 🟡 Amarelo | Listar programas |
| 0,401 – 0,700 | Alta | 🟠 Laranja | Priorizar + listar |
| 0,701 – 1,000 | Crítica | 🔴 Vermelho | Alerta + Φ₀-Dossiê |

**Modo parcial (sem comprovante):** marcar cada dimensão como "verificar" quando o dado não está disponível. Listar programas por autodeclaração do cidadão sem score numérico.

**Registro ClickUp:** campo `ivcad_global`, campos `ivcad_nc`, `ivcad_dpi`, `ivcad_dca`, `ivcad_tqa`, `ivcad_dr`, `ivcad_ch`, campo `ivcad_modo` (completo/parcial).

**Critério de saída:** score IVCAD-MC calculado ou modo parcial declarado.

**Tempo estimado:** 2-3 min (automatizado) · 5-8 min (manual na fase Crisálida).

→ **Próximo:** Passo 4

---

### PASSO 4 — MAPA DE DIREITOS NÃO-ACESSADOS

**Ação:** Cruzar o perfil do cidadão com os 46 programas federais (MC-MAPA-Ecossistema-CadUnico-v1_0, seção 6) usando as regras de filtragem:

| Critério | Limiar | Programas afetados |
|----------|--------|-------------------|
| RFPC ≤ R$218 | Pobreza BF | BF, TSEE, Tarifa Social Água, Farmácia Popular |
| RFPC ≤ ½ SM (R$759) | Baixa renda | Φ₁c, FIES Social, Isenção concursos/ENEM, Facultativo Baixa Renda |
| RFPC ≤ 2 SM (R$3.036) | Renda intermediária | MCMV Faixa 1, Carteira do Idoso, ID Jovem |
| PcD (COD_DEFICIENCIA_MEMB = 1) | Deficiência declarada | BPC, Auxílio-Inclusão, Passe Livre, TSEE via BPC |
| Idoso ≥ 65 | Idade | BPC idoso, Carteira do Idoso, TSEE via BPC |
| Criança 0-6 | Idade | BF Primeira Infância (R$150), Criança Feliz |
| Estudante EM público 14-24 | Escolaridade | Pé-de-Meia |
| Pescador artesanal | Ocupação | Seguro-Defeso (MTE, 1 SM/mês no defeso) |
| Dona/dono de casa sem renda | Ocupação | Facultativo Baixa Renda (R$75,90/mês) |
| Beneficiário BF ativo | MARC_PBF = 1 | Farmácia Popular gratuita, Pé-de-Meia prioridade |
| Beneficiário BPC ativo | 8.09.2 > 0 | TSEE automática, Tarifa Social Água, BPC na Escola |

**Output:** lista de programas elegíveis + status (já recebe / não recebe / pré-elegível) + ação necessária (automático / requerimento ativo / verificar local).

**Regra Proof-First:** se o valor do benefício depende de regulamentação local (ex.: Tarifa Social Água varia por estado/município), usar "verificar com a empresa de [água/esgoto] da sua região". Nunca inventar valor.

**Critério de saída:** mapa de direitos preenchido.

**Tempo estimado:** 3-5 min.

→ **Próximo:** Passo 5

---

### PASSO 5 — DETECTOR DE ARMADILHAS E PENDÊNCIAS

**Ação:** Rodar as 5 armadilhas (A1-A5) e 5 pendências (P1-P5) do motor da spec v1.0.

**Armadilhas (A1-A5):**

| # | Condição | Detecção |
|---|----------|---------|
| A1 | BPC compõe renda pro BF | BPC ativo + RFPC recalculada com BPC > R$218 |
| A2 | Pensão Feminicídio × Pensão por morte | Órfão com ambos os direitos potenciais |
| A3 | Seguro-Defeso × BPC/aposentadoria | Pescador com BPC ou aposentadoria ativo |
| A4 | Pé-de-Meia × BF unipessoal | Estudante 19-24 EJA, mora sozinho, recebe BF |
| A5 | BF cancelado com janela de retorno | BF cessado há < 36 meses |

**Pendências (P1-P5):**

| # | Condição | Detecção |
|---|----------|---------|
| P1 | CadÚnico desatualizado > 24 meses | DAT_ATUAL_FAM > 24 meses |
| P2 | Condicionalidade BF — frequência escolar | Criança 6-18 + beneficiária BF |
| P3 | Condicionalidade BF — vacinação | Criança 0-7 + beneficiária BF |
| P4 | Família unipessoal sem entrevista domiciliar | 1 pessoa + sem flag domiciliar |
| P5 | RGP desatualizado (pescador) | RGP < 1 ano antes do defeso |

**Se armadilha detectada:** incluir no relatório com linguagem Teste Zilda. Nunca omitir armadilha por "não assustar".

**Critério de saída:** armadilhas e pendências verificadas.

**Tempo estimado:** 2-3 min.

→ **Próximo:** Passo 6

---

### PASSO 6 — DETECÇÃO DE PASSARELA PREVIDENCIÁRIA (Φ₀ → Φ₁)

**Ação:** Verificar se o perfil do cidadão indica elegibilidade previdenciária.

| Perfil detectado | Passarela | Destino MC |
|------------------|-----------|-----------|
| Dona/dono de casa sem renda, família CadÚnico | Facultativo Baixa Renda (5% SM = R$75,90/mês) | Informar → cidadão decide → se contribuir, futuro Φ₁ |
| PcD com RFPC ≤ ¼ SM, sem BPC | BPC via INSS | Φ₀-Dossiê → Φ₁ se envolver INSS |
| PcD com BPC que arrumou emprego | Auxílio-Inclusão (½ SM) | Informar → Φ₁ se necessário |
| Idoso ≥ 65, RFPC ≤ ¼ SM, sem benefício | BPC idoso ou aposentadoria rural/híbrida | Φ₀-Dossiê → análise → Φ₁ |
| Pescador artesanal em defeso | Seguro-Defeso via MTE | Informar → direcionar MTE |
| Trabalhador rural com tempo de contribuição | Aposentadoria rural/híbrida | Φ₁ diretamente |

**Regra D>C>V:** a passarela é sempre informativa. Nunca pressionar. O cidadão decide se quer contratar Φ₁.

**Firewall OAB:** não emitir parecer sobre qual benefício é "melhor". Apenas informar existência e encaminhar para Φ₁ onde advogada avaliará.

**Critério de saída:** passarela identificada (ou "sem passarela previdenciária no momento").

**Tempo estimado:** 2-3 min.

→ **Próximo:** Passo 7

---

### PASSO 7 — MONTAGEM E ENVIO DO RELATÓRIO

**Ação:** Montar o relatório Φ₀ no formato WhatsApp (template Zilda) e enviar ao cidadão.

**Estrutura obrigatória do relatório:**

```
Olá [nome]! Seu radar ficou pronto.

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
1. [programa] — [benefício] — [ação]
2. ...
3. ...

🔔 ATENÇÃO
- [armadilha ou pendência, se houver]

🚀 PRÓXIMO PASSO
[orientação personalizada]

ℹ️ IMPORTANTE
Este é um radar do Meu Cumpadre. Não substitui
avaliação do CRAS nem parecer jurídico.
```

**Regras do relatório:**

1. Sempre usar nome do cidadão
2. Sempre listar o que JÁ recebe antes dos novos
3. Máximo 3 direitos novos no relatório WhatsApp (priorizar por impacto financeiro)
4. Nunca usar "diagnóstico social" — usar "radar" ou "diagnóstico"
5. Nunca prometer prazo de concessão
6. Sempre incluir disclaimer final
7. Adaptar linguagem à persona (ver Seção 3)

**Critério de saída:** relatório enviado. Cidadão confirma recebimento.

**Tempo estimado:** 3-5 min (montagem) + variável (interação).

→ **Próximo:** Passo 8

---

### PASSO 8 — OFERTA Φ₀-DOSSIÊ (SE APLICÁVEL)

**Ação:** Se o cidadão tem pendências resolvíveis ou direitos que exigem documentação, oferecer Φ₀-Dossiê.

**Condições para oferta:**

1. Cadastro desatualizado (P1) → dossiê prepara documentação para CRAS
2. Direitos não-acessados que exigem requerimento ativo (BPC, Auxílio-Inclusão, etc.)
3. Armadilha detectada que exige ação documental
4. Cidadão solicita espontaneamente ajuda com documentos

**Mensagem padrão:**

```
Se quiser ajuda pra organizar os documentos,
o serviço custa R$60 agora + R$60 só se o
benefício for liberado (em 4x de R$15).

A gente cuida de toda a papelada e te prepara
pro CRAS [ou INSS, conforme o caso].

Quer que eu explique melhor?
```

**Se cidadão aceita:** abrir caso Φ₀-Dossiê no ClickUp. Coletar consentimento LGPD. Iniciar coleta assistida (API Humana ~40 min).

**Se cidadão recusa:** registrar. Nunca insistir. O radar gratuito já entregou valor.

**Critério de saída:** oferta feita OU não aplicável. Decisão do cidadão registrada.

**Tempo estimado:** 2-3 min.

→ **Próximo:** Passo 9

---

### PASSO 9 — REGISTRO E FOLLOW-UP

**Ação:** Registrar o caso no ClickUp e programar follow-up.

**Campos ClickUp obrigatórios:**

| Campo | Valor |
|-------|-------|
| caso_id | CAD[sequencial] |
| nome_cidadao | [nome] |
| nis | [NIS] |
| codigo_familiar | [código] |
| ivcad_global | [score ou "parcial"] |
| ivcad_nc / dpi / dca / tqa / dr / ch | [scores] |
| ivcad_modo | completo / parcial |
| direitos_identificados | [lista] |
| armadilhas_detectadas | [A1-A5 se aplicável] |
| pendencias_detectadas | [P1-P5 se aplicável] |
| passarela_previdenciaria | [sim/não + tipo] |
| phi0_dossie_ofertado | sim / não / não_aplicável |
| phi0_dossie_aceito | sim / não |
| status | triagem_concluida / dossie_em_andamento |
| follow_up | [data — 30 dias padrão] |

**Follow-up padrão:**

| Situação | Follow-up |
|----------|-----------|
| Cadastro desatualizado (P1) | 30 dias — verificar se atualizou |
| Φ₀-Dossiê contratado | Conforme SLA do dossiê |
| Passarela Φ₁ sinalizada, cidadão pensando | 15 dias — check-in suave |
| Sem pendências, radar limpo | 90 dias — verificar se algo mudou |

**Critério de saída:** caso registrado no ClickUp com todos os campos.

**Tempo estimado:** 3-5 min.

→ **FIM DO FLUXO Φ₀-Triagem**

---

### FLUXOGRAMA RESUMIDO

```
Cidadão WhatsApp
       │
       ▼
   PASSO 1: Tipo de entrada?
       │
   ┌───┼───────────┐
   │   │           │
  Doc  Áudio/Texto  Sem CadÚnico
   │   │           │
   │   ▼           ▼
   │  1B: Orientar  1C: Orientar
   │  extração      inscrição CRAS
   │   │           (FIM c/ follow-up)
   │   │
   ▼   ▼
   PASSO 2: Extrair e validar dados
       │
       ▼
   PASSO 3: Calcular IVCAD-MC
       │
       ▼
   PASSO 4: Mapa de direitos
       │
       ▼
   PASSO 5: Armadilhas e pendências
       │
       ▼
   PASSO 6: Passarela previdenciária?
       │
       ▼
   PASSO 7: Montar e enviar relatório
       │
       ▼
   PASSO 8: Oferta Φ₀-Dossiê?
       │
   ┌───┼───┐
   │       │
  Sim     Não
   │       │
   ▼       ▼
  Abrir   Registrar
  dossiê  e follow-up
   │       │
   ▼       ▼
   PASSO 9: Registro ClickUp + follow-up
       │
      FIM
```

---

## SEÇÃO 2 — ÁRVORE DE ROTEAMENTO POR PERFIL IVCAD-MC

### 2.1 Metodologia

Cada perfil-tipo é definido pelo padrão de dimensões IVCAD-MC (quais dimensões estão elevadas). O roteamento é determinístico: o perfil de dimensões define automaticamente os programas prioritários, a ação MC recomendada, e o perfil de comunicação.

**Legenda de cores:** 🔴 Crítica (>0,700) · 🟠 Alta (0,401-0,700) · 🟡 Moderada (0,101-0,400) · 🟢 Baixa (≤0,100)

---

### PERFIL 1 — "CAD001" (Mãe solo urbana, trabalho + renda)

**Padrão:** TQA 🔴 + DR 🔴 · NC/DPI/DCA/CH 🟢

**Descrição:** Mulher 25-40 anos, filho(s) menor(es), urbana periférica, sem emprego formal, renda informal baixa. Já no CadÚnico, pode ou não receber BF.

**Top 5 programas prioritários:**

| # | Programa | Valor/Benefício | Ação |
|---|---------|----------------|------|
| 1 | Bolsa Família (se não recebe) | R$142 base + R$600 compl. + R$150 criança 0-6 + R$50 criança 7-18 | Requerimento CRAS |
| 2 | Tarifa Social Água/Esgoto | Desconto na conta (verificar local) | Procurar empresa de água com comprovante CadÚnico |
| 3 | Auxílio Gás / Gás do Povo | Botijão gratuito | Verificar no CRAS |
| 4 | Facultativo Baixa Renda | R$75,90/mês → acesso RGPS | Informar — INSS |
| 5 | Pé-de-Meia (filho(s) EM) | Até R$9.200 em 3 anos | Informar proativamente |

**Ação MC recomendada:** Φ₀-Triagem (gratuito). Se BF não recebido ou cadastro desatualizado → Φ₀-Dossiê (R$120). Se passarela previdenciária detectada → sinalizar Φ₁.

**Perfil de comunicação:** Direto, prático, sem jargão. Focar no impacto financeiro imediato. Usar emoji com moderação.

**Armadilhas comuns:** P2 (frequência escolar do filho), P1 (cadastro vencido).

---

### PERFIL 2 — "Hib001" (Idosa rural, cuidados + trabalho)

**Padrão:** NC 🟠 + TQA 🔴 · DR 🟠 · DPI/DCA 🟢 · CH 🟡

**Descrição:** Mulher 60+, zona rural, histórico de trabalho rural sem registro formal, pode ter CadÚnico mas sem benefício previdenciário. Frequentemente mora com familiar.

**Top 5 programas prioritários:**

| # | Programa | Valor/Benefício | Ação |
|---|---------|----------------|------|
| 1 | Aposentadoria rural/híbrida | 1 SM (R$1.518/mês) | **Φ₁ previdenciário** — passarela direta |
| 2 | BPC idoso (se ≥65, RFPC ≤ ¼ SM) | 1 SM (R$1.518/mês) | Alternativa se sem contribuição |
| 3 | Carteira do Idoso | Passagem gratuita/desconto transporte | Emissão via CRAS |
| 4 | TSEE | 100% desconto até 80 kWh | Automática se CadÚnico atualizado |
| 5 | Farmácia Popular | Medicamentos gratuitos | Farmácia credenciada com CPF |

**Ação MC recomendada:** Φ₀-Triagem → passarela Φ₁ direta. Caso típico de aposentadoria rural/híbrida — produto core do MC.

**Perfil de comunicação:** Linguagem de respeito. "Dona" + nome. Frases curtas. Repetir a informação principal. Evitar números excessivos. Preferir áudio de retorno se cidadã prefere.

**Armadilhas comuns:** P1 (cadastro vencido — risco de perder TSEE e BF se houver), A1 (se familiar tem BPC, pode afetar renda per capita).

---

### PERFIL 3 — "PcD urbano" (Deficiência + cuidados)

**Padrão:** NC 🔴 (por NC4 deficiência) · TQA 🟠 · DR 🟠 · CH 🟡/🟢

**Descrição:** Pessoa com deficiência declarada no CadÚnico, urbana, pode ou não ter BPC. Barreira principal: acesso a avaliação biopsicossocial e atualização cadastral.

**Top 5 programas prioritários:**

| # | Programa | Valor/Benefício | Ação |
|---|---------|----------------|------|
| 1 | BPC (se RFPC ≤ ¼ SM, sem benefício) | 1 SM (R$1.518/mês) | Requerimento INSS + avaliação biopsicossocial |
| 2 | Auxílio-Inclusão (se BPC + emprego) | ½ SM (R$759/mês) | Informar — INSS |
| 3 | Passe Livre Interestadual | Gratuidade transporte | Requerimento MDS |
| 4 | TSEE via BPC | 100% desconto até 80 kWh | Automática se BPC ativo |
| 5 | BPC na Escola (se criança/adolescente PcD) | Acompanhamento socioeducativo | Verificar no CRAS |

**Ação MC recomendada:** Se sem BPC e elegível → Φ₀-Dossiê + passarela Φ₁. Se com BPC, verificar Auxílio-Inclusão e TSEE. Se aposentadoria PcD (LC 142) possível → Φ₁ direto (Φ₁-PcD escalonado).

**Perfil de comunicação:** Respeitar autonomia. PcD ≠ baixa agência. Perguntar preferência de canal (áudio? texto?). Nunca infantilizar. Se PcD intelectual, frases mais curtas mas mesmo tom de respeito.

**Armadilhas comuns:** A3 (se pescador PcD, Seguro-Defeso × BPC), A1 (BPC compõe renda para BF).

---

### PERFIL 4 — "Idoso BPC" (Idade avançada + renda zero)

**Padrão:** NC 🔴 (NC5 + NC6) · DR 🔴 · TQA 🟠 · CH 🟡

**Descrição:** Idoso 65+, sem aposentadoria, sem contribuição previdenciária, RFPC ≤ ¼ SM. Pode morar com familiar. BPC é a saída principal.

**Top 5 programas prioritários:**

| # | Programa | Valor/Benefício | Ação |
|---|---------|----------------|------|
| 1 | BPC idoso | 1 SM (R$1.518/mês) | Requerimento INSS (não exige contribuição) |
| 2 | TSEE via BPC | 100% desconto até 80 kWh | Automática após concessão BPC |
| 3 | Tarifa Social Água | Desconto (verificar local) | Empresa de água com BPC |
| 4 | Carteira do Idoso | Transporte gratuito/desconto | CRAS |
| 5 | Farmácia Popular | Medicamentos gratuitos | Farmácia credenciada |

**Ação MC recomendada:** Φ₀-Dossiê (R$120) para preparar documentação BPC. Se tempo de contribuição rural existir → Φ₁ (aposentadoria rural pode ser mais vantajosa que BPC pela acumulação).

**Perfil de comunicação:** Mesma abordagem "Hib001". Falar devagar. Repetir. Validar compreensão.

**Armadilhas comuns:** A1 (BPC compõe renda, pode tirar BF de familiar), P1 (cadastro vencido).

---

### PERFIL 5 — "Pescador artesanal" (Trabalho sazonal)

**Padrão:** TQA 🔴 (sazonal) · DR 🟠 · NC 🟡 · CH 🟡

**Descrição:** Pescador artesanal com RGP, família CadÚnico, renda sazonal. Seguro-Defeso é o programa central.

**Top 5 programas prioritários:**

| # | Programa | Valor/Benefício | Ação |
|---|---------|----------------|------|
| 1 | Seguro-Defeso | 1 SM/mês durante período de defeso | Requerimento MTE (não mais INSS desde MP 1.323/2025) |
| 2 | Bolsa Família | R$142+ componentes | Manter/requerer CRAS |
| 3 | Bolsa Verde (se em Resex/Flona/PAE) | ~R$200/mês | Verificar elegibilidade territorial |
| 4 | PAA (Programa Aquisição Alimentos) | Compra direta da produção | Verificar disponibilidade local |
| 5 | TSEE | 100% desconto até 80 kWh | CadÚnico atualizado |

**Ação MC recomendada:** Φ₀-Triagem. Se Seguro-Defeso indeferido → Φ₀-Dossiê. Se tempo de contribuição especial (pescador = segurado especial) → passarela Φ₁.

**Perfil de comunicação:** Respeitar sazonalidade. Entender que renda varia. Nunca questionar declaração de renda. Linguagem do litoral/ribeirinha.

**Armadilhas comuns:** A3 (Seguro-Defeso × BPC/aposentadoria — vedação), P5 (RGP desatualizado).

---

### PERFIL 6 — "Mãe primeira infância" (Crianças pequenas + demanda de cuidado)

**Padrão:** NC 🔴 (NC1+NC2+NC3) · DPI 🟠 · DR 🟠 · TQA 🟠

**Descrição:** Mãe com criança(s) 0-6 anos, renda baixa, pode estar fora do mercado de trabalho por dedicação ao cuidado. DPI elevado se criança fora de creche/escola.

**Top 5 programas prioritários:**

| # | Programa | Valor/Benefício | Ação |
|---|---------|----------------|------|
| 1 | BF + Primeira Infância (criança 0-6) | R$142 base + R$600 + R$150/criança 0-6 | CRAS |
| 2 | Primeira Infância no SUAS / Criança Feliz | Visita domiciliar, estímulo ao desenvolvimento | CRAS |
| 3 | Facultativo Baixa Renda | R$75,90/mês → acesso RGPS + salário-maternidade | INSS |
| 4 | TSEE | 100% desconto até 80 kWh | CadÚnico atualizado |
| 5 | Dignidade Menstrual | Absorventes gratuitos | Verificar distribuição local |

**Ação MC recomendada:** Φ₀-Triagem. Foco em estabilizar BF + adicional Primeira Infância. Informar Facultativo Baixa Renda (dá direito a salário-maternidade na próxima gravidez). Se DPI alto (criança fora de escola), orientar matrícula.

**Perfil de comunicação:** Empático. Validar esforço da mãe. Prático ("isso vai te ajudar agora"). Nunca julgar por não trabalhar fora.

**Armadilhas comuns:** P2 (frequência escolar se criança > 6), P3 (vacinação criança 0-7).

---

### PERFIL 7 — "Adolescente evasão" (Evasão escolar)

**Padrão:** DCA 🔴 (DCA2+DCA3) · TQA 🟠 · DR 🟠

**Descrição:** Família com adolescente 15-17 fora da escola ou com atraso escolar. Pode haver trabalho infantil (DCA1). BF em risco por condicionalidade escolar.

**Top 5 programas prioritários:**

| # | Programa | Valor/Benefício | Ação |
|---|---------|----------------|------|
| 1 | Pé-de-Meia | Até R$9.200 em 3 anos (se EM público) | Matrícula necessária |
| 2 | BF (manter/não perder) | R$142+ componentes | Regularizar frequência escolar |
| 3 | ID Jovem (15-29, RFPC ≤ 2 SM) | Meia-entrada + transporte | Emissão online |
| 4 | AEPETI (se trabalho infantil) | Proteção + serviço socioeducativo | CRAS |
| 5 | Reserva SISU / FIES Social | Acesso universidade | Informar proativamente |

**Ação MC recomendada:** Φ₀-Triagem com alerta sobre condicionalidade escolar. Se BF em risco → Φ₀-Dossiê para regularizar. Se trabalho infantil detectado → Rota D (Interrupção Dignidade — acionar CRAS/Conselho Tutelar via orientação, não denúncia direta pelo MC).

**Perfil de comunicação:** Falar com o responsável familiar, não com o adolescente diretamente. Sem tom de bronca. Focar no ganho (Pé-de-Meia é concreto: "teu filho pode receber R$9.200 se ficar na escola").

**Armadilhas comuns:** A4 (Pé-de-Meia × BF unipessoal se adolescente mora sozinho), P2 (frequência escolar).

---

### PERFIL 8 — "Habitação precária" (Moradia como vulnerabilidade central)

**Padrão:** CH 🔴 · DR 🟠 · NC 🟡

**Descrição:** Família com domicílio improvisado, sem saneamento adequado, piso de terra, paredes precárias, sem acesso a água tratada/esgoto. Pode ser urbano periférico ou rural.

**Top 5 programas prioritários:**

| # | Programa | Valor/Benefício | Ação |
|---|---------|----------------|------|
| 1 | MCMV Faixa 1 (se RFPC ≤ 2 SM) | Financiamento/subsídio habitacional | Inscrição municipal |
| 2 | TSEE | 100% desconto até 80 kWh | CadÚnico atualizado |
| 3 | Tarifa Social Água | Desconto (verificar local) | Empresa de água |
| 4 | Cisternas (se rural semiárido) | Cisterna de 16.000L | Verificar disponibilidade ASA/MDS |
| 5 | Luz para Todos (se sem eletricidade) | Ligação gratuita rede elétrica | Distribuidora local |

**Ação MC recomendada:** Φ₀-Triagem + alerta habitacional. Se domicílio improvisado (CH1) → orientar inscrição MCMV. Φ₀-Dossiê se precisar de ajuda documental. Passarela Φ₁ se houver componente previdenciário.

**Perfil de comunicação:** Sensível à condição habitacional. Nunca usar "sua casa é precária". Focar nas soluções ("tem programa pra melhorar a moradia"). Se rural, linguagem adaptada.

**Armadilhas comuns:** P1 (cadastro vencido — TSEE suspende), P4 (família unipessoal sem visita domiciliar).

---

### 2.2 Tabela resumo de roteamento

| Perfil | Dimensões altas | Programa #1 | Ação MC | Passarela Φ₁? |
|--------|----------------|-------------|---------|---------------|
| 1 CAD001 | TQA+DR | BF | Φ₀-Triagem/Dossiê | Sim (Facultativo) |
| 2 Hib001 | NC+TQA+DR | Aposentadoria rural | Φ₁ direto | ✅ Direta |
| 3 PcD urbano | NC+TQA+DR | BPC | Φ₀-Dossiê → Φ₁ | ✅ BPC/LC142 |
| 4 Idoso BPC | NC+DR+TQA | BPC idoso | Φ₀-Dossiê → Φ₁ | ✅ BPC/rural |
| 5 Pescador | TQA+DR | Seguro-Defeso | Φ₀-Triagem | Condicional |
| 6 Mãe 1ª infância | NC+DPI+DR+TQA | BF+PI | Φ₀-Triagem | Sim (Facultativo) |
| 7 Adolescente evasão | DCA+TQA+DR | Pé-de-Meia | Φ₀-Triagem | Não (menor) |
| 8 Habitação precária | CH+DR | MCMV | Φ₀-Triagem | Condicional |

---

## SEÇÃO 3 — TEMPLATES DE COPY POR PERSONA

### 3.0 Regras gerais

1. Toda mensagem passa pelo **Teste Zilda**: funciona pra Dona Zilda de 76 anos E pro analista do CRAS
2. **Nunca** dizer "diagnóstico social"
3. **Nunca** prometer prazo de concessão
4. **Nunca** perguntar "qual é sua renda real"
5. **Sempre** incluir disclaimer que o radar não substitui avaliação do CRAS
6. **Sempre** usar nome do cidadão
7. Máximo 3 direitos novos por mensagem (não sobrecarregar)
8. 1 armadilha/pendência por mensagem (se houver)
9. 1 CTA (call-to-action) único e claro
10. Valores monetários confirmados apenas (Proof-First)

---

### PERSONA 1 — Idoso rural

**Contexto:** 65+, zona rural, baixa/nenhuma escolaridade, pode não ler bem. Prefere áudio. Desconfia de tecnologia.

**Template:**

```
Olá, Dona [nome]! Aqui é o [Beto/operador] do Meu
Cumpadre. Seu radar ficou pronto, vou explicar
direitinho.

📊 SUA FAMÍLIA
[N] pessoas morando juntas. Renda por pessoa: R$[valor].

🔍 COMO TÁ A SITUAÇÃO
🟢 Moradia: tá tudo certo
🔴 Trabalho: a senhora não tem renda do trabalho registrada
🔴 Renda: tá apertado

✅ A SENHORA JÁ RECEBE
- [listar benefícios atuais]

⚠️ A SENHORA TEM DIREITO A
1. [programa principal] — [explicação em 1 linha]
2. [programa secundário] — [explicação em 1 linha]
3. [programa terciário] — [explicação em 1 linha]

🔔 CUIDADO
[pendência, se houver, em 1 frase simples]

🚀 O QUE FAZER AGORA
[1 ação clara — ex.: "Peça pro seu filho
te levar no CRAS pra atualizar o cadastro"]

ℹ️ Esse radar é do Meu Cumpadre. Qualquer dúvida,
me manda um áudio que eu respondo.
```

**Notas de adaptação:**
- Usar "a senhora" (nunca "você" para idosos rurais em Minas/Goiás)
- Oferecer resposta por áudio
- 1 ação por vez — não sobrecarregar
- Se analfabeta, o Beto lê por áudio (Whisper gera texto, Beto grava áudio de retorno)

---

### PERSONA 2 — PcD intelectual/cognitiva

**Contexto:** Dificuldade com texto complexo e interfaces. Pode ter representante legal. Autonomia varia — nunca presumir.

**Template:**

```
Olá, [nome]! Aqui é o [Beto/operador] do Meu
Cumpadre. Teu radar tá pronto.

📊 TUA FAMÍLIA
[N] pessoas. Renda por pessoa: R$[valor].

🔍 RESULTADO
🟢 Moradia: OK
🔴 [dimensão alta]: precisa de atenção

✅ TU JÁ RECEBE
- [benefícios atuais — frases curtas]

⚠️ TU PODE RECEBER TAMBÉM
1. [programa] — [1 frase simples]

🚀 PRÓXIMO PASSO
[1 ação simples e clara]

Se quiser, posso explicar de outro jeito.
É só pedir.
```

**Notas de adaptação:**
- Frases curtas (máximo 10 palavras por frase)
- 1 direito novo por vez (não 3)
- Oferecer explicação alternativa
- Se representante legal: enviar cópia pro representante com linguagem padrão
- Nunca infantilizar — tom de respeito, não de tutela
- Perguntar: "Você prefere áudio ou texto?"

---

### PERSONA 3 — PcD motora

**Contexto:** Não digita ou digita com dificuldade. Opera por voz. Pode ter barreira de mobilidade para ir ao CRAS.

**Template:**

```
Olá, [nome]! Seu radar ficou pronto.

📊 FAMÍLIA: [N] pessoas · renda: R$[valor]/pessoa

🔍 RADAR
[emoji + classificação — mesmo formato padrão]

✅ JÁ RECEBE: [lista]

⚠️ PODE ACESSAR
1. [programa] — [benefício] — [ação]
2. [programa] — [benefício] — [ação]
3. [programa] — [benefício] — [ação]

🔔 [pendência se houver]

🚀 PRÓXIMO PASSO
[ação — se requer ida presencial ao CRAS,
sugerir alternativa: "Se tiver dificuldade
de ir ao CRAS, peça visita domiciliar.
Você tem esse direito."]

Se quiser, me manda um áudio que a gente
resolve por aqui.
```

**Notas de adaptação:**
- Formato conciso (pessoa usa leitor de tela ou dita por voz)
- Sempre oferecer canal áudio
- Se requer ação presencial → informar direito a visita domiciliar do CRAS
- Se BPC sem avaliação biopsicossocial → informar que INSS deve agendar em local acessível

---

### PERSONA 4 — Surdo / baixa audição

**Contexto:** Não usa canais de voz/telefone. Texto é o canal principal. Pode usar Libras (MC não tem intérprete Libras nesta fase — TA COD 1.10.4 é texto-first, não Libras).

**Template:**

```
Olá [nome] 👋

Seu radar do Meu Cumpadre está pronto.

📊 Família: [N] pessoas
Renda por pessoa: R$[valor]

🔍 Radar:
🟢 Moradia: OK
🟢 Cuidados: OK
🔴 Trabalho: atenção
🔴 Renda: atenção

✅ Você já recebe:
- [lista]

⚠️ Você pode receber:
1. [programa] → [ação]
2. [programa] → [ação]
3. [programa] → [ação]

🔔 Atenção: [pendência]

🚀 Próximo passo: [ação]

ℹ️ Esse radar é do Meu Cumpadre.
Não substitui avaliação do CRAS.

Dúvidas? Responde aqui por texto.
```

**Notas de adaptação:**
- 100% texto — nunca enviar áudio
- Estrutura visual clara (emojis ajudam na leitura rápida)
- Frases diretas, sem orações subordinadas longas
- Nunca sugerir "liga pro 135" ou "liga pro CRAS" — sugerir chat online ou presencial
- Se precisar de interpretação em Libras para atendimento INSS/CRAS, informar que é direito garantido (LBI art. 30)

---

### PERSONA 5 — Trabalhador rural

**Contexto:** Sem histórico formal, distante de APS, pode ter trabalhado desde a infância. Documento pode ser precário. Desconfia de "gente da cidade".

**Template:**

```
Olá, Seu [nome]! Aqui é o [Beto] do Meu Cumpadre.

Fiz o radar da sua família. Vou te contar o que
encontrei.

📊 SUA FAMÍLIA
[N] pessoas. Renda por pessoa: R$[valor].

🔍 COMO TÁ
🟢 Casa: tá boa
🔴 Trabalho: o senhor trabalha na roça mas não
   tem registro formal
🔴 Renda: tá apertado

✅ O SENHOR JÁ RECEBE
- [benefícios]

⚠️ O SENHOR PODE TER DIREITO A
1. Aposentadoria rural — o senhor pode se
   aposentar pelo tempo que trabalhou na roça,
   mesmo sem carteira assinada. A gente ajuda
   a juntar os documentos.
2. [outro programa] — [explicação simples]
3. [outro programa] — [explicação simples]

🔔 ATENÇÃO
[pendência se houver]

🚀 O QUE FAZER
Quer que eu te explique melhor como funciona
a aposentadoria rural? É só responder aqui.

ℹ️ Esse radar é do Meu Cumpadre. Não é
parecer de advogado nem do INSS.
```

**Notas de adaptação:**
- Usar "o senhor/a senhora" (zona rural MG/GO)
- Traduzir "aposentadoria por idade híbrida" para "aposentadoria pelo tempo de roça"
- Nunca usar jargão (CNIS, NB, RFPC)
- Focar na aposentadoria rural como gancho principal
- Oferecer explicação por áudio se preferir

---

### PERSONA 6 — Dona Zilda

**Contexto:** Idosa, 76 anos, 5ª série, zona rural ou periurbana. Confia em quem conhece. Não usa app. O WhatsApp é operado pelo neto ou filho. Referência do Teste Zilda.

**Template:**

```
Olá, Dona Zilda! Aqui é o [Beto] do Meu Cumpadre.

Olhei direitinho a situação da senhora.
Vou explicar tudo bem devagar.

📊 A FAMÍLIA DA SENHORA
[N] pessoas morando juntas.
Cada pessoa da família tem R$[valor] por mês.

🔍 O QUE EU ENCONTREI
A senhora não tá recebendo tudo que tem direito.

✅ A SENHORA JÁ RECEBE
- [benefício] de R$[valor]

⚠️ A SENHORA TAMBÉM TEM DIREITO A
1. [programa] — [explicação como se falasse
   com a avó: "é um desconto na conta de luz,
   a senhora não precisa pagar nada pra isso"]
2. [programa] — [mesmo tom]

🔔 CUIDADO
[pendência em 1 frase — "não esquece de levar
a caderneta de vacinação do neto no posto"]

🚀 O QUE FAZER AGORA
Pede pro [nome do filho/neto] te levar no CRAS
com o documento do CadÚnico. Só isso.

Se tiver dúvida, manda um áudio que eu
explico de novo. Sem pressa.
```

**Notas de adaptação:**
- É o caso extremo. Se funciona pra Dona Zilda, funciona pra qualquer um.
- "Bem devagar" — ritmo de leitura lento
- Traduzir TUDO (RFPC → "cada pessoa da família tem")
- 1-2 direitos novos no máximo
- 1 ação no máximo
- Oferecer áudio de retorno
- Se operado pelo neto: neto lê pra ela ou Beto grava áudio

---

### PERSONA 7 — Mãe solo CadÚnico (CAD001)

**Contexto:** 25-40 anos, filho(s) menor(es), urbana periférica, renda informal, pode já receber BF. Lida com celular mas não com burocracia. Cansada. Precisa de praticidade.

**Template:**

```
Olá [nome]! Seu radar ficou pronto.

📊 SUA FAMÍLIA (código [código_familiar])
[N] pessoas · renda por pessoa: R$[valor]

🔍 RADAR
🟢 Crianças: [nome filho] tá na série certa!
🔴 Trabalho: sem emprego formal
🔴 Renda: renda baixa

✅ VOCÊ JÁ RECEBE
- [benefícios — validar o que ela já tem]

⚠️ DIREITOS QUE VOCÊ PODE ACESSAR
1. [programa] — [benefício prático]
   [1 linha de ação: o que fazer]
2. [programa] — [benefício prático]
   [1 linha de ação]
3. [programa futuro pro filho] — [valor]
   Guarda essa informação pro futuro.

🔔 ATENÇÃO
- [condicionalidade escolar do filho]

🚀 PRÓXIMO PASSO
Se quiser ajuda pra organizar os documentos,
custa R$60 + R$60 só se der certo (4x de R$15).
É só falar.

ℹ️ Esse radar é do Meu Cumpadre.
Não é avaliação do CRAS nem parecer jurídico.
```

**Notas de adaptação:**
- Tom direto e prático — ela não tem tempo sobrando
- Validar o que ela já faz certo ("tá na série certa!" — pequenas vitórias)
- Focar no que resolve agora (Tarifa Social Água, Auxílio Gás)
- Informar Pé-de-Meia como investimento futuro (concreto: R$9.200)
- CTA do Φ₀-Dossiê com preço claro e success fee explicado
- Nunca julgar por não ter emprego formal

---

### 3.1 Tabela de adaptação rápida persona → linguagem

| Elemento | Idoso rural | PcD intelectual | PcD motora | Surdo | Trabalhador rural | Dona Zilda | Mãe solo |
|----------|------------|----------------|-----------|-------|------------------|-----------|---------|
| Tratamento | Dona/Seu [nome] | [nome] | [nome] | [nome] | Seu [nome] | Dona [nome] | [nome] |
| Tom | Respeitoso, devagar | Respeitoso, simples | Conciso, profissional | Claro, visual | Respeitoso, prático | Avó querida | Direto, sem julgamento |
| Direitos novos/msg | 2-3 | 1 | 3 | 3 | 2-3 | 1-2 | 3 |
| Canal preferido | Áudio | Perguntar | Áudio | Texto 100% | Áudio | Áudio (via neto) | Texto |
| Jargão | Zero | Zero | Mínimo | Mínimo | Zero | Zero | Mínimo |
| CTA | 1 simples | 1 simples | 1 + alternativa acessível | 1 texto | 1 com ancoragem rural | 1 via familiar | 1 com preço |
| Emoji | Moderado | Moderado | Moderado | Sim (visual) | Moderado | Poucos | Moderado |
| Disclaimer | Sim | Sim | Sim | Sim | Sim | Sim, simplificado | Sim |

---

## ANEXO A — DISCLAIMERS OBRIGATÓRIOS

**Disclaimer padrão (todo relatório Φ₀):**

```
ℹ️ Este radar é do Meu Cumpadre — não é diagnóstico
social, não substitui avaliação do CRAS, e não é
parecer jurídico. Os valores são estimativas baseadas
nas regras em vigor. Para confirmar seus direitos,
procure o CRAS ou entre em contato com a gente.
```

**Disclaimer simplificado (Dona Zilda / idoso rural):**

```
ℹ️ Esse radar é do Meu Cumpadre. Qualquer dúvida,
me manda um áudio que eu explico.
```

**Disclaimer IVCAD-MC (quando score numérico presente):**

```
📊 O radar usa o IVCAD-MC, um indicador do Meu
Cumpadre baseado nos dados do seu CadÚnico.
Não é o IVCAD oficial do governo.
```

---

## ANEXO B — VALORES MONETÁRIOS CONFIRMADOS (PROOF-FIRST)

Valores utilizados nos templates — fontes verificadas no MC-LACUNAS-B2:

| Programa | Valor | Fonte |
|---------|-------|-------|
| BF — Benefício de Renda de Cidadania | R$142/pessoa | Lei 14.601/2023 |
| BF — Benefício Complementar | até R$600/família | Lei 14.601/2023 |
| BF — Primeira Infância (0-6) | R$150/criança | Lei 14.601/2023 |
| BF — Variável Familiar (7-18) | R$50/pessoa | Lei 14.601/2023 |
| BPC | 1 SM (R$1.518/mês em 2026) | LOAS art. 20 |
| Auxílio-Inclusão | ½ SM (R$759/mês) | Lei 14.176/2021 |
| Seguro-Defeso | 1 SM/mês | Lei 10.779/2003 |
| Pensão Feminicídio | 1 SM ao conjunto de órfãos | Lei 14.717/2023 |
| Pé-de-Meia | até R$9.200 em 3 anos | Lei 14.818/2024 |
| Facultativo Baixa Renda | 5% SM = R$75,90/mês (contribuição) | Lei 12.470/2011 |
| TSEE | 100% desconto até 80 kWh (desde 05/07/2025) | MPV 1.300/2025 |
| Tarifa Social Água | Desconto (varia por prestador) | verificar local |
| Auxílio Gás | Botijão gratuito (verificar) | verificar local |

---

**MC-POP-Phi0-Triagem-Operacional-v1_0-2026-0507.md**
**Hierarquia:** Dignidade > Compliance > Viabilidade
**∞**
