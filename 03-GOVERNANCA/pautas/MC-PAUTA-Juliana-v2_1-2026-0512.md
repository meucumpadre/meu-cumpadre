---
tipo: pauta
codigo: MC-PAUTA-Juliana
versao: 2.1
data: 2026-05-12
substitui: v2.0 (09/05/2026, 61 perguntas, 13 blocos A-N)
status: AGUARDA-REUNIAO-19MAI
autor: Claude Opus 4.7 (cofounder intelectual) × Alessandro de Souza Neves (Founder/CEO)
duracao-estimada: 7h-7h30 (com bloco O adicional)
total-perguntas: 66 (+5 vs v2.0)
total-blocos: 14 (A-O)
total-documentos-anexos: 20 (+2 vs v2.0)
fundamentos-novos-v2-1:
  - ADR-012 v1.0 (Stack LLM Multi-Modelo Híbrido, 12/05)
  - PATCH ADR-012 v1.0→v1.1 (§2.5 Status DPA + §3.4 Decisão Risco Provisional)
  - Cronologia DPA Anthropic (e-mail 17/04 + follow-up 06/05 + ausência resposta 12/05)
  - Princípio #18 cunhado — Risco Provisional Documentado
canonico_em: 03-GOVERNANCA/pautas/ (a criar via MB futuro)
---

# MC-PAUTA-Juliana v2.1 — Reunião 19 de maio de 2026

> Pauta consolidada para reunião com Dra. Juliana Pereira de Melo (OAB-GO 38.662), parecerista B2B fundacional MC. v2.1 acrescenta Bloco O (Risco LGPD Provisional Anthropic) aos 13 blocos A-N de v2.0.

**Duração estimada:** 7h-7h30 (~6.5min/pergunta média)
**Modo:** sessão presencial concentrada ou videoconferência em 2 sessões de ~3.5h cada
**Material:** 20 documentos canônicos como leitura prévia ou anexos durante a reunião

---

## CONTEXTO GERAL (5 min de abertura)

Pos-19/05/2026, MC opera com:
- 10 ADRs canônicas seladas ou PROVISIONAL (007-015)
- 5 frentes ativas (Sprint 2 RIPDs + Sprint 3 selagem + TA/PcD + Hib001 + ZapSign)
- 1 vertical CadÚnico ativa (caso âncora CAD001)
- Gates de selagem aguardando esta reunião: ADR-007 v4.0 + ADR-013 v1.1 + RouterEthics nós PROVISIONAL + Φ₁-PcD escalonado + Capital social + **Risco LGPD provisional Anthropic (novo)**

---

## BLOCOS A-N (vide v2.0 — 61 perguntas)

Mantidos da v2.0 sem alteração. Esta v2.1 apenas adiciona Bloco O. Para conteúdo completo dos Blocos A-N, ver `MC-PAUTA-Juliana-v2_0-2026-0509.md`.

| Bloco | Tema | Perguntas |
|---|---|---|
| A | Constituição SLU + CNAE 6202-3/00 | A1-A5 (5) |
| B | Firewall OAB + atividade-meio | B1-B5 (5) |
| C | Φ₁-PcD escalonado LC 142 | C1-C4 (4) |
| D | Success fee CadÚnico (Φ₀) | D1-D3 (3) |
| E | Φ₄ Guardião 3 regimes + custódia pós-jornada | E1-E4 (4) |
| F | Marketplace Ético (3 advogadas, pool randômico) | F1-F4 (4) |
| G | CNAE Principal 6202-3/00 PROVISIONAL | G1-G3 (3) |
| H | Tecnologia Assistiva (Portaria 10.321/2022) | H1-H4 (4) |
| I | Contratos Φ₁ v2.6 + Ψ₁ v1.5 | I1-I4 (4) |
| J | RIPDs Φ₁ + Φ₄ + Hook 1b NIS/IVCAD | J1-J3 (3) |
| K | Atestmed permanente Lei 15.327/2026 | K1-K2 (2) |
| L | 13 ADIs STF contra EC 103/2019 | L1-L2 (2) |
| M | CadÚnico / IVCAD-MC / Φ₀ | M1-M7 (7) |
| N | Gov.br / API Humana / Hook 0 | N1-N7 (7) |

**Subtotal A-N:** 61 perguntas

---

## BLOCO O (NOVO v2.1) — Risco LGPD Provisional Anthropic (5 perguntas, ~35min)

### Contexto pré-reunião para Juliana ler antes

Anexar à pauta:
- ADR-012 v1.0 (Stack LLM Multi-Modelo Híbrido)
- PATCH ADR-012 v1.0→v1.1 (§2.5 Status DPA + §3.4 Decisão Risco Provisional)
- PDF do e-mail original 17/04/2026 (Solicitação DPA original)
- PDF do follow-up 06/05/2026 (prazo improrrogável 5 dias úteis)

### Síntese do contexto operacional

MC enviou em 17/04/2026 (de `asnccb@gmail.com`) solicitação formal à `privacy@anthropic.com` requisitando DPA com SCCs aprovadas pela ANPD (Anexo II Res. CD/ANPD 19/2024). Resposta automática "Fin AI Agent" prometendo human agent — **nunca veio resposta humana substantiva**.

Em 06/05/2026 22:45h, MC enviou follow-up de `alessandro.neves@meucumpadre.com.br` cc `sales@anthropic.com`, declarando 19 dias corridos sem resposta, prazo improrrogável 5 dias úteis, declaração explícita de escalada à ANPD em caso de silêncio. **Mesma resposta automática Fin AI Agent. Nenhuma resposta humana.**

Em 12/05/2026, prazo improrrogável vence (5 dias úteis a partir de 07/05 = 12/05). Provavelmente sem resposta também.

### Decisão founder 12/05/2026 (registrada em §3.4 do PATCH ADR-012)

> "Vai correndo o risco provisional por minha conta. Até o parecer da Juliana. Vai ser a Anthropic nesses casos iniciais. E vou debater o assunto com Juliana, mostrando todo o contexto."

Aplicação D > C > V contextual: dignidade dos hipervulneráveis (precisam top-tier reasoning) > compliance (DPA não fechado, mas documentado) > viabilidade (stack alternativo puro tecnicamente possível mas operacionalmente rebaixado).

Risco assumido: 12-15 casos no piloto Crisálida (até 19/05 + janela implementação decisão Juliana até 02/06). Mitigação parcial: Bedrock sa-east-1 mantém dados em solo BR (region-pinning São Paulo).

### As 5 perguntas do Bloco O

#### O1 — Validação da aplicação D > C > V neste caso específico

**Pergunta:** Dra. Juliana, tendo lido o ADR-012 v1.0 + PATCH §2.5 + §3.4, você valida a aplicação da hierarquia D > C > V (Dignidade > Compliance > Viabilidade) nesta decisão founder de manter Bedrock sa-east-1 ativo durante a Crisálida sem DPA com SCCs ANPD assinado, considerando que:

(a) Cronologia documentada formalmente (e-mail 17/04 + follow-up 06/05 + ausência resposta substantiva da Anthropic — somente Fin AI Agent)?
(b) Volume controlado (12-15 casos do piloto, ~1-2 casos/semana)?
(c) Período nomeado e limitado (até parecer Juliana + janela implementação)?
(d) Mitigação parcial existente (region-pinning São Paulo)?
(e) Risco assumido pessoalmente pelo founder por escrito (princípio #18 cunhado)?

Ou recomenda postura mais conservadora?

#### O2 — Mitigações adicionais possíveis durante o período de risco

**Pergunta:** Caso valides O1, existem mitigações jurídicas adicionais que o MC pode adotar **durante o período de risco** que reforcem a boa-fé operacional? Pensamos em:

(a) Cláusula nos contratos Φ₁/Ψ₁ informando expressamente o cidadão que o tratamento pode envolver processador internacional (Anthropic via Bedrock sa-east-1), com opt-in explícito?
(b) Registro formal em livro/diário institucional MC (data, hora, decisão founder, fundamentação)?
(c) Notificação preventiva à ANPD informando situação + plano de regularização?
(d) Reforço no RIPD-Φ₁ documentando exposição residual?
(e) Algum outro instrumento que você considere essencial?

#### O3 — Caminho jurídico se silêncio Anthropic persistir

**Pergunta:** Se até 30 de maio de 2026 a Anthropic ainda não tiver respondido substantivamente, qual o caminho jurídico recomendado?

(a) **Consulta direta à ANPD** sobre mecanismos disponíveis para operadores brasileiros que utilizam processadores internacionais sem DPA adequado (caminho declarado no follow-up MC)?
(b) **Petição via OAB-GO** solicitando orientação institucional?
(c) **Notificação extrajudicial** à Anthropic com prazo final antes de escalada formal?
(d) **Migração imediata** para stack alternativo BR puro (sem Bedrock) e abandono da via Anthropic?
(e) Combinação de duas ou mais opções acima?

#### O4 — Silêncio Anthropic como elemento de defesa

**Pergunta:** Em hipotética auditoria ANPD futura, **a ausência de resposta substantiva da Anthropic ao MC após 25+ dias de tentativas formais** pode ser usada favoravelmente como elemento de **boa-fé operacional do operador BR** (MC), demonstrando que MC tentou regularizar dentro dos canais oficiais mas foi obstruído pela ausência de resposta do processador?

Caso afirmativo, qual a forma jurídica adequada de **documentar institucionalmente** essa cronologia para que tenha valor probatório em eventual procedimento ANPD?

#### O5 — Plano de contingência se ANPD exigir cessação imediata

**Pergunta:** Caso a ANPD, em hipotética consulta ou auditoria, **exija cessação imediata** de uso de Bedrock sa-east-1 para dados sensíveis de cidadãos brasileiros, qual seria o plano de contingência juridicamente defensável para os casos **já em processamento** no momento da exigência?

(a) Concluir casos já iniciados com Bedrock e migrar apenas casos novos?
(b) Cessação imediata e transição forçada para Sabiá-4 + GAIA com qualidade rebaixada?
(c) Pausar processamento e solicitar orientação ANPD sobre como proceder com casos em andamento?
(d) Outro caminho?

Considerar especialmente o **dever de continuidade do atendimento** ao hipervulnerável (D > C > V).

---

## ENCERRAMENTO DA REUNIÃO (10 min)

### Síntese dos vereditos Bloco O

Espera-se que, ao final de Bloco O, Dra. Juliana tenha consolidado:
- Veredito sobre validade da aplicação D > C > V (O1)
- Lista priorizada de mitigações adicionais imediatas (O2)
- Recomendação de caminho jurídico se silêncio persistir (O3)
- Estratégia de documentação probatória (O4)
- Plano de contingência ANPD (O5)

### Próximos passos pós-19/05 derivados desta pauta v2.1

1. **ADR-012 v1.1 sealing:** PATCH §2.5 + §3.4 aplicados, v1.1 selada com selo Juliana
2. **Cláusulas Φ₁/Ψ₁ atualizadas** se O2 (a) for recomendado
3. **Registro institucional formal** se O2 (b) for recomendado
4. **Notificação ANPD preparada** se O3 (a) for recomendado (cofounder produz minuta)
5. **Plano de contingência documentado** em ADR-016 (NOVO) se O5 retornar diretrizes específicas

---

## TOTAL CONSOLIDADO v2.1

| Métrica | v2.0 | v2.1 | Delta |
|---|---|---|---|
| Perguntas | 61 | 66 | +5 (Bloco O) |
| Blocos | 13 (A-N) | 14 (A-O) | +1 |
| Documentos anexos | 18 | 20 | +2 (PDFs DPA) |
| Duração estimada | 7h-7h30 | 7h-7h30 | sem mudança (Bloco O ~35 min absorvido) |
| Princípios MC referenciados | até #17 | até #20 | +3 (#18, #19, #20) |

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Âncora:** Provérbios 31:8 — "Abre a tua boca a favor do mudo."

∞
