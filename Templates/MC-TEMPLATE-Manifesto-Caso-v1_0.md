---
pseudonimo: [PSEUDONIMO]
data-e2: YYYY-MM-DD
vertical: [vertical confirmada em E2]
beneficio-alvo: [B41 / B31 / B91 / B46 / B87 / B21 / B80 etc.]
estado-custodia: S1
etapa-atual: E3
operador-t1t2: Beto
supervisor-t3: Alessandro Neves
parceiro-t4: Dra. Juliana Pereira de Melo (OAB-GO 38.662) — pendente
clickup-task-id: [ID]
drive-folder-url: [URL]
contrato-phi1-status: [pendente / assinado / cancelado]
contrato-phi1-valor: [R$ 2.200 Standard / R$ 1.500 CadÚnico]
contrato-phi1-parcelas-pagas: [0/3, 1/3, 2/3, 3/3]
nb-anterior: [se houver indeferimentos]
risco-fraudscore: [BAIXO / MEDIO / ALTO]
risco-confidence: [valor 0-100]
zona-router-ethics: [VERDE ≥70 / AMARELA 40-70 / VERMELHA <40]
flags: []
---

# [PSEUDONIMO] — Manifesto do Caso

> ⚠️ **Regra de uso:** este arquivo é a única fonte narrativa do caso. Atualizar a cada transição de etapa. **Append-only com data** — não apagar histórico.

## 1. Quem é o cidadão (sem PII real)
[Descrição neutra: gênero, faixa etária aproximada, região, perfil ocupacional. NUNCA nome real, NUNCA CPF, NUNCA NB completo. NB pode aparecer só em casos de indeferimento prévio para rastreabilidade.]

## 2. Por que está aqui
[Como chegou ao MC: indicação, ads, microbioma. Vertical inicial hipotética em E1.]

## 3. Hipótese de tese (E2) — [PREENCHIDO POR ALESSANDRO em até 24h após E2]
- **Tese principal:** [fundamentação legal + número de tema STJ/TNU se aplicável]
- **Tese subsidiária:** [se houver]
- **Riscos jurídicos identificados:** [riscos que demandam Human API ou Rota C]

## 4. Documentos brutos coletados (atualizar a cada chegada)
- [ ] Documento 1 — [tipo, data]
- [ ] Documento 2 — ...

## 5. Histórico de transições

### YYYY-MM-DD — E2 → E3
- Deliberação aprovada por [supervisor]
- Vertical: [vertical] confirmada
- Pasta Drive criada
- Contrato Φ₁ assinado, [N]ª parcela paga via PIX
- Próximo passo: [ação concreta]

### YYYY-MM-DD — E3 → E4
- Dossiê v1 montado (hash SHA-256: [hash])
- Senha gov.br retirada do Bitwarden Org MC (item `gov-br-[PSEUDONIMO]`)
- DER capturada: [número]
- Bitwarden: senha **devolvida** ao cidadão imediatamente após protocolo (POP-Bitwarden §X)

### [continuar até E7]

## 6. Decisões e ajustes
- YYYY-MM-DD: [decisão registrada com rationale]

## 7. Riscos identificados
- [risco] → [mitigação]

## 8. Handoff jurídico (se Rota C)
- [ ] Acionado em YYYY-MM-DD
- TTA emitido em YYYY-MM-DD (hash: [hash])
- Advogada escolhida pelo cidadão: [nome] (OAB: [num])
- `99_compartilhado-juliana/` ativada em YYYY-MM-DD (se aplicável)

## 9. Custódia
- **S[1/2/3] ATIVO** desde YYYY-MM-DD
- Senha gov.br: **Bitwarden Org MC** (item `gov-br-[PSEUDONIMO]`) — **NUNCA copiar para ClickUp/Drive/manifesto**
- TTL S1: até YYYY-MM-DD ([30/60] dias)
- Apagamento S2: programado para D+7 da entrega (YYYY-MM-DD)
- Apagamento Bitwarden: D+0 da entrega ou cancelamento (POP-Bitwarden)

## 10. Cronometragem A4 (preencher se for caso de calibração)
- Tempo real E2 → E3: [Xmin]
- Tempo real E3 → E4: [Xmin]
- Tempo total Φ₁ executado: [Xmin]
- Comparar com estimativa ADR-007 v3.x: 15h/caso média
