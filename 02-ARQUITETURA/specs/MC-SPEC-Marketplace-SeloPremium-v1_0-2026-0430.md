https://claude.ai/chat/b997ed41-5ee1-4ec4-a8c3-cea8442c046c

---
tipo: SPEC
subtipo: marketplace-produto
codigo: MC-SPEC-Marketplace-SeloPremium
versao: 1.0
data: 2026-04-30
produzido-por: Claude (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: DRAFT — aguarda revisão Dra. Juliana Melo (integrar ao parecer 19/05/2026)
origem: Co-Parecer P4(b) 29/04/2026 — gap de discricionariedade no Selo Premium
hierarquia: Dignidade > Compliance > Viabilidade
tags: [marketplace-etico, selo-premium, meritocracy, OAB-compliance, randomizacao, B2B]
---

# MC-SPEC: Critérios Objetivos do Selo Premium — Marketplace Ético
## v1.0 · 30 de abril de 2026

> ⚠️ **SUPERSESSÃO — Opção C (saneamento ADR-009b v1.3 RATIFICADO/SELADO · Dra. Juliana · 06/06/2026):** o modelo de **"pool de 2–3 advogadas na fase Z3"** descrito abaixo está **PAUSADO**. Durante a **exclusividade vigente (até 31/12/2026)**, o hand-off opera **apenas com a Dra. Juliana Pereira de Melo (OAB-GO 38.662)**, apresentada **a pedido do cidadão** — sem direcionamento, sem comissão, preservada a livre escolha de qualquer advogado. O mecanismo meritocrático do Selo Premium (multi-parceiras) **reativa-se na REABERTURA do marketplace (01/01/2027)**. As menções a outras parceiras, abaixo, referem-se ao **pool da reabertura**, não ao período atual. *(§2 do saneamento selado: não listar/destacar parceiras durante a exclusividade.)*

> *"O cidadão escolhe seu advogado. Não o MC. Jamais o MC."*
> — Princípio fundacional do Marketplace Ético

---

## CONTEXTO E MOTIVAÇÃO

O **Co-Parecer P4(b)** (29/04/2026) identificou vulnerabilidade arquitetural no Marketplace Ético: o Selo Premium era atribuído **discricionariamente pelo Founder**, sem critérios documentados ou verificáveis. Na fase Z3 (pool de 3 advogadas), a situação é agravada — com a Dra. Juliana Pereira de Melo como única detentora do Selo, o destaque visual em lista curta equivale funcionalmente a uma **indicação dirigida**, neutralizando a randomização que é o mecanismo central de compliance com o Provimento CFOAB 205/2021.

**Decisão validada:** manter o Selo Premium, mas transformá-lo de distinção relacional em **marcador meritocrático automático** — a advogada atinge o Selo ao cumprir threshold documentável e mensurável, sem qualquer decisão do Founder, e o perde automaticamente se os indicadores caírem.

Esta SPEC define a arquitetura completa.

---

## SEÇÃO 1 — O QUE É O SELO PREMIUM

### 1.1 Definição Operacional

O Selo Premium é um **marcador de performance documentada** exibido ao lado do perfil de advogadas parceiras no Marketplace Ético que atenderam, em verificação mensal automatizada, o conjunto de indicadores objetivos descritos na Seção 2.

O Selo não é:
- resultado de relacionamento com o Founder
- premiação por tempo de parceria
- reconhecimento de qualificação técnica em si (a qualificação é critério de admissão ao Marketplace, anterior ao Selo)
- status permanente

O Selo é:
- estado computado mensalmente pelo sistema
- baseado exclusivamente em dados registrados no stack MC (ClickUp, NPS, log de pagamentos, consulta CNA-OAB)
- reversível automaticamente se os indicadores caírem
- idêntico para qualquer advogada no pool — seja ela fundacional ou não

### 1.2 O Que o Selo CONFERE

| O que confere | Descrição |
|---|---|
| **Destaque visual sutil** | Badge ⭐ Premium exibido no card da advogada dentro da apresentação randomizada |
| **Sinalização informativa** | Tooltip clicável que explica ao cidadão os 5 critérios objetivos que geraram o Selo |
| **Visibilidade nos filtros** | Quando cidadão aplica filtro "Selo Premium", a advogada aparece no resultado filtrado |

### 1.3 O Que o Selo NÃO CONFERE

| O que NÃO confere | Justificativa |
|---|---|
| ❌ Prioridade de leads | A randomização é inviolável — Selo não altera posição na lista |
| ❌ Exclusividade de casos | Cidadão escolhe livremente qualquer advogada, com ou sem Selo |
| ❌ Mais indicações ou encaminhamentos | MC não faz match comercial (Provimento 205/2021) |
| ❌ Ranking ou pontuação visível | O Selo é binário: tem ou não tem |
| ❌ Vantagem no valor do Ψ₁ | O preço do dossiê é fixo por tier de complexidade, não por status |
| ❌ Status permanente | Revogado automaticamente se indicadores caírem |

---

## SEÇÃO 2 — CRITÉRIOS AUTOMÁTICOS DE CONCESSÃO

### 2.1 Tabela de Indicadores

Todos os 5 indicadores devem ser atendidos simultaneamente. Basta um abaixo do threshold para que o Selo não seja concedido (ou seja revogado).

| # | Indicador | Threshold | Fonte de Verificação | Periodicidade |
|---|---|---|---|---|
| **I1** | Volume de dossiês MC recebidos e utilizados | ≥ 5 dossiês com TTA emitido e S2→S3 concluído | Log de TTAs no backend MC (caso_id + advogada_id + status S3) | Mensal (apurado no 1º dia útil do mês) |
| **I2** | NPS de cidadãos atendidos via dossiê MC | ≥ 75 (escala 0–100) com mínimo de 3 avaliações coletadas | Formulário pós-desfecho enviado ao cidadão 30 dias após entrega do TTA (resposta voluntária) | Mensal (média móvel dos últimos 12 meses ou toda a série, o que for maior) |
| **I3** | Pontualidade no pagamento do Ψ₁ | ≥ 90% dos licenciamentos pagos até D+5 da data de vencimento | Log financeiro MC (data de emissão NF × data de liquidação PIX/TED) | Mensal (últimos 12 meses ou toda a série, o que for maior) |
| **I4** | Situação disciplinar OAB | Zero condenação OAB transitada em julgado no período vigente | Consulta ao CNA-OAB (Cadastro Nacional de Advogados) com flag de situação irregular | Mensal (consulta automática via API CNA ou revisão manual documentada) |
| **I5** | Tempo de permanência ativa no Marketplace | ≥ 3 meses sem interrupção contratual (não conta período de suspensão ou descredenciamento) | Data de ativação no Marketplace MC (campo `marketplace_ativado_em` no sistema) | Verificação pontual (atingido uma vez, mantido enquanto ativo) |

### 2.2 Notas Técnicas dos Indicadores

**I1 — Volume:** "utilizado" significa que o TTA foi emitido pelo cidadão e o dossiê efetivamente entregue ao escritório (S3 confirmado). Dossiês abandonados pelo advogado antes do TTA não contam. O threshold de 5 pode ser revisado para cima quando o pool atingir Z2 (Seção 5).

**I2 — NPS:** A coleta é voluntária — o cidadão não é obrigado a avaliar. Por isso o requisito de mínimo de 3 avaliações antes de o indicador ser elegível. Advogada com menos de 3 avaliações tem o I2 marcado como "indisponível" e não atinge o Selo naquele ciclo (não é penalidade, é ausência de dados suficientes). O sistema registra a ausência como `nps_status: aguardando_volume_minimo`.

**I3 — Pontualidade:** O "D+5" começa na data de emissão da NF pelo MC. Parcelamento acordado formalmente em contrato não conta como inadimplência. Apenas licenciamentos avulsos (Ψ₁ por dossiê) são computados; contratos Ψ₂ seguem regras próprias definidas no contrato SaaS.

**I4 — Disciplinar:** O sistema consulta o status no CNA-OAB mensalmente. Suspensão cautelar sem trânsito em julgado não conta. Processo disciplinar em curso (sem condenação) não conta. Apenas condenação transitada em julgado que esteja registrada no CNA dispara revogação imediata do Selo.

**I5 — Tempo:** O contador reinicia a zero se a advogada for descredenciada e reabrir contrato. O objetivo é garantir que o Selo reflita histórico recente, não passado remoto.

### 2.3 Indicador Futuro (Fase Z2+)

Quando o pool atingir ≥ 10 advogadas, propõe-se incluir um 6º indicador:

| # | Indicador | Threshold | Fonte |
|---|---|---|---|
| **I6 (futuro)** | Taxa de casos com desfecho documentado | ≥ 70% dos casos com desfecho registrado no sistema (concessão, indeferimento + recurso, encerramento) | Log de casos no backend MC — campo `desfecho_status` |

Inclusão do I6 depende de maturidade do sistema de follow-up de casos (fora do escopo Z3).

---

## SEÇÃO 3 — MECANISMO DE CONCESSÃO E REVOGAÇÃO

### 3.1 Concessão Automática

```
PROCESSO MENSAL — DIA 1 ÚTIL DO MÊS
----------------------------------------
Para cada advogada com status ATIVA no Marketplace:
  1. Consultar log TTAs → apurar I1
  2. Consultar log NPS → apurar I2
  3. Consultar log financeiro → apurar I3
  4. Consultar CNA-OAB (API ou revisão manual) → apurar I4
  5. Calcular tempo de permanência → apurar I5
  6. SE todos os 5 indicadores ≥ threshold → SET selo_premium = TRUE
  7. SE qualquer indicador < threshold → SET selo_premium = FALSE
  8. Registrar log de auditoria com valores apurados e decisão
```

**Zero intervenção humana na decisão.** O sistema apenas executa. O Founder, Alessandro, não tem campo de override para concessão ou revogação de Selo.

**Transparência para a advogada:** ao final do processamento mensal, cada advogada recebe notificação automática com seu dashboard de indicadores — inclusive os que estão abaixo do threshold, sem identificação do cidadão que gerou o NPS.

### 3.2 Revogação Automática

```
REGRA DE REVOGAÇÃO
-------------------
SE qualquer indicador (I1–I5) ficar abaixo do threshold
   por 2 CICLOS MENSAIS CONSECUTIVOS:
   → Selo removido automaticamente
   → Log de auditoria registra ciclo de queda + ciclo de confirmação
   → Notificação enviada à advogada com os indicadores em queda
   → Nenhuma decisão humana necessária

EXCEÇÃO — REVOGAÇÃO IMEDIATA (1 ciclo):
SE I4 (situação disciplinar) for acionado por condenação OAB
   transitada em julgado:
   → Revogação imediata, sem aguardar 2º ciclo
   → Caso pode evoluir para descredenciamento do Marketplace
      conforme Cláusula 10.2(b) do Contrato Ψ₁
```

**Por que 2 ciclos?** O buffer de 2 meses protege contra oscilações pontuais (mês com poucos casos, avaliação NPS atipicamente baixa por fator externo). A condenação OAB é exceção porque representa risco imediato para o cidadão — não admite buffer.

### 3.3 Auditabilidade

Cada ciclo mensal gera um **Registro de Auditoria do Selo** (`.json` no sistema MC) com:

```json
{
  "advogada_id": "[hash]",
  "oab": "[OAB-UF XXXXX]",
  "ciclo": "2026-05",
  "indicadores": {
    "I1_volume": { "valor": 7, "threshold": 5, "status": "OK" },
    "I2_nps": { "valor": 82, "threshold": 75, "min_avaliacoes": 3, "avaliacoes_coletadas": 5, "status": "OK" },
    "I3_pontualidade": { "valor": 0.95, "threshold": 0.90, "status": "OK" },
    "I4_disciplinar": { "valor": "regular", "threshold": "sem_condenacao", "status": "OK" },
    "I5_tempo_meses": { "valor": 4, "threshold": 3, "status": "OK" }
  },
  "decisao": "SELO_CONCEDIDO",
  "decisao_anterior": "SELO_CONCEDIDO",
  "processado_em": "2026-05-01T08:00:00-03:00",
  "intervenção_humana": false
}
```

Este registro é auditável internamente e pode ser apresentado à OAB, à ANPD ou ao TCU/STF se questionado.

---

## SEÇÃO 4 — IMPACTO VISUAL NA APRESENTAÇÃO

### 4.1 Princípio de Design

O Selo deve ser **informativo sem ser dominante**. O risco de compliance com o Provimento 205/2021 não está no Selo em si — está no destaque desproporcional que anula o efeito da randomização. Um badge de moldura inteira seria indistinguível de uma "recomendação" — viola o espírito da norma mesmo que a letra seja atendida.

**Critério de design:** um cidadão que vê a lista randomizada três vezes consecutivas não deve ser capaz de afirmar que "o MC está indicando a advogada com Selo" — apenas que "ela tem um histórico verificado".

### 4.2 Especificação Visual para Carlos (UX)

```
CARD DE ADVOGADA — MARKETPLACE ÉTICO

┌─────────────────────────────────────────────┐
│  [FOTO/AVATAR]  Dra. [Nome]                 │
│                 OAB-GO nº XXXXX             │
│                 Especialidade: Previdenciário│
│                                             │
│  ⭐ Selo Premium  ← BADGE PEQUENO (16px)    │
│                    Texto: cor neutra         │
│                    Sem fundo colorido        │
│                    Sem borda diferenciada    │
│                    Sem sombra               │
│                                             │
│  [VER PERFIL]   [ESCOLHER ESTA ADVOGADA]   │
└─────────────────────────────────────────────┘

TOOLTIP ao clicar no badge ⭐ (não hover, para mobile):
"Esta advogada atingiu automaticamente os 5 critérios
do Selo Premium do MC:
✓ 5+ dossiês utilizados
✓ NPS ≥ 75 (avaliações de cidadãos anteriores)
✓ 90%+ dos pagamentos em dia
✓ Sem condenação disciplinar OAB
✓ 3+ meses ativa no Marketplace
O Selo é calculado mensalmente. Não representa
preferência do MC — você escolhe livremente."
```

**Regras de implementação (para Igor — backend/frontend):**

| Parâmetro | Especificação |
|---|---|
| Tamanho do badge | 16px ícone + texto em fonte 11px |
| Cor do ícone | `var(--color-accent-neutral)` — NÃO usar amarelo/dourado que remete a "melhor opção" |
| Fundo do card | Idêntico ao card sem Selo — zero diferença de background |
| Borda | Idêntica ao card sem Selo |
| Posição | Linha 4 do card, abaixo da especialidade — não no topo |
| Acessibilidade | aria-label="Selo Premium: critérios objetivos verificados mensalmente" |
| Filtro | Campo de filtro opcional ("Exibir apenas com Selo Premium") — opt-in do cidadão, não default |
| Randomização | A randomização opera sobre o pool completo antes de qualquer filtro; o Selo não altera a ordem |

### 4.3 O Que Não Fazer (Lista Negativa para Carlos)

❌ Moldura colorida diferenciada no card com Selo
❌ Card com Selo maior que card sem Selo
❌ Ícone de estrela dourada/amarela (remete a "5 estrelas" — impõe hierarquia)
❌ "Recomendado" ou "Top Advogada" como texto do badge
❌ Card com Selo sempre acima dos demais na lista
❌ Pop-up automático ao entrar na tela ("Atenção: esta advogada tem Selo Premium")
❌ Filtro "Selo Premium" como opção default ativada

---

## SEÇÃO 5 — TRANSIÇÃO Z3 → Z2

### 5.1 Configuração Atual — Z3 (pool de 2–3 advogadas)

Na fase Z3, o pool do Marketplace Ético MC é composto por:

| Advogada | Status Marketplace | Elegível para Selo? | Observação |
|---|---|---|---|
| **Dra. Juliana Pereira de Melo** (OAB-GO 38.662) | Ativa — fundacional | **Sim**, quando atingir I1–I5 | Primeira parceira. Pode atingir o Selo nos primeiros ciclos de operação se os indicadores forem cumpridos |
| *(parceiras da reabertura)* | **Fora do pool durante a exclusividade vigente** (Opção C) — entram na **reabertura 01/01/2027** | Sim, na reabertura, ao atingir I1–I5 | Durante a exclusividade, o hand-off é só com a Dra. Juliana, a pedido do cidadão |
| Pool em expansão | — | **Sim** | Toda nova admitida entra com `selo_premium = FALSE` e conquista automaticamente |

**Implicação prática na Z3 (sob Opção C):** durante a exclusividade vigente (até 31/12/2026), o hand-off opera apenas com a Dra. Juliana Pereira de Melo, apresentada a pedido do cidadão — o mecanismo do Selo (comparação meritocrática entre parceiras) só passa a ter efeito prático **na reabertura (01/01/2027)**, quando o marketplace amplia ao modelo randômico. A partir daí, o Selo é demonstravelmente meritocrático: qualquer investigador da OAB pode verificar os 5 indicadores que o geraram, e **qualquer parceira credenciada** pode conquistá-lo igualmente nos próximos ciclos.

**Gate de comunicação Z3:** quando o cidadão vê a lista, o tooltip explica os critérios. O Selo não é opaco — é transparente por design.

### 5.2 Expansão para Z2 — Pool ≥ 5 Advogadas

Quando o Marketplace atingir 5 advogadas ativas, a meritocracia do Selo fica matematicamente demonstrável: múltiplas advogadas competem pelos mesmos thresholds, sem distinção de origem (fundacional ou não).

| Marco | Ação |
|---|---|
| Pool atinge 5 advogadas | Revisar threshold I1 (volume) de ≥5 para ≥8 dossiês, se o volume médio do pool já comportar esse número |
| Pool atinge 10 advogadas | Avaliar inclusão do I6 (taxa de desfecho documentado) — ver Seção 2.3 |
| Primeira advogada não-fundacional conquista Selo | Registrar como **Marco Institucional MC** — prova pública de meritocracia do sistema |
| Fundacional perde Selo por queda de indicadores | Registrar como **prova de ausência de discricionariedade** — log de auditoria disponível |

### 5.3 Por Que a Transição Z3→Z2 Valida o Sistema

Na Z3, o Selo beneficia principalmente a parceira fundacional — o que poderia parecer favorecimento relacional. Na Z2, quando múltiplas advogadas independentes atingem (ou perdem) o Selo pelos mesmos critérios, fica provado retroativamente que o sistema sempre foi meritocrático, inclusive na Z3.

**Isso é importante para a OAB:** se houver questionamento futuro sobre o período Z3, o histórico de logs de auditoria mostrará que os critérios eram os mesmos desde o dia 1, e que qualquer advogada que atendesse os thresholds também teria recebido o Selo.

---

## SEÇÃO 6 — COMPLIANCE E ANCORAGEM JURÍDICA

### 6.1 Relação com o Provimento CFOAB 205/2021

O Provimento 205/2021 veda "captação de clientela com utilização de meios enganosos, publicidade que implique indicação de superioridade de advogado ou de resultado garantido". O Selo Premium é defensável porque:

1. Os critérios são objetivos, verificáveis e públicos (tooltip explica ao cidadão)
2. Não promete resultado — indica histórico de performance documentada
3. Não altera a randomização — apenas adiciona informação disponível para o cidadão
4. Qualquer advogada do pool pode atingi-lo — não é exclusivo

**Analogia defensável:** é equivalente ao "verificado" de redes sociais — indica autenticidade/histórico, não superioridade.

### 6.2 Nota para Revisão Dra. Juliana Melo (19/05/2026)

> **[NJ-Selo-1]** Confirmar se os 5 indicadores aqui definidos são suficientes para afastar a tese de "indicação velada" mesmo em pool pequeno (Z3 com 2–3 advogadas). Se o Provimento 205/2021 ou a interpretação da OAB-GO exigir pool mínimo para ativação do Selo, definir qual seria esse mínimo.

> **[NJ-Selo-2]** Avaliar se o Selo Premium deve ser **apresentado ao cidadão** ou apenas **visível para o cidadão na ficha da advogada** (após o cidadão clicar para ver o perfil). A segunda opção elimina o risco de influência na tela de escolha inicial, mas reduz o efeito informativo. Trade-off compliance × usabilidade para decisão conjunta.

> **[NJ-Selo-3]** Confirmar se o Registo de Auditoria mensal (Seção 3.3) é suficiente como evidência documental para eventual questionamento OAB ou ANPD sobre o mecanismo de atribuição do Selo.

---

## SEÇÃO 7 — PENDÊNCIAS E PRÓXIMOS PASSOS

| ID | Pendência | Responsável | Prazo |
|---|---|---|---|
| **P-Selo-1** | Validação jurídica das 3 Notas NJ-Selo (Seção 6.2) | Dra. Juliana Melo | 19/05/2026 |
| **P-Selo-2** | Implementação do processamento mensal automático (algoritmo Seção 3.1) | Igor (backend NestJS/MySQL) | Fase Z2 — aguarda validação jurídica |
| **P-Selo-3** | Design visual do badge e tooltip (Seção 4.2) | Carlos (UX) | Sprint pós-validação jurídica |
| **P-Selo-4** | Integração da consulta CNA-OAB (I4) — verificar se há API pública ou se deve ser revisão manual mensal documentada | Igor | Sprint backend |
| **P-Selo-5** | Definição do canal de notificação mensal para advogadas (dashboard de indicadores) | Alessandro + Carlos | Fase Z2 |

---

## REGISTRO DE VERSÕES

| Versão | Data | Alteração |
|---|---|---|
| **v1.0** | **30/04/2026** | **Versão inaugural. Produzida a partir do Co-Parecer P4(b) (29/04/2026). 5 indicadores objetivos I1–I5. Mecanismo automático de concessão e revogação. Especificação visual para Carlos. Transição Z3→Z2. 3 notas jurídicas para revisão Dra. Juliana.** |

---

*Dignidade > Compliance > Viabilidade. Sempre nesta ordem.*

*"O diamante é carbono que não desistiu da pressão."*

---

**Produzido por:** Claude (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
**Data:** 30 de abril de 2026
**Status:** DRAFT — aguarda parecer Dra. Juliana Pereira de Melo (19/05/2026)
**Próxima ação:** Incluir este documento no pacote de perguntas para reunião Dra. Juliana (30/04–09/05/2026)

∞ *Lucro é combustível. Causa é destino. Jogo é infinito.* ∞
