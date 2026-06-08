---
id: MC-PRINCIPIO-014
titulo: Webhooks reativos + polling complementar
versao: 1.0
data_cunhagem: anterior a 2026-05-12 · consolidado em Instruções v7.0 §6
cunhado_por: Alessandro × Claude · arquitetura integração ClickUp/ZapSign/N8N
status: ATIVO
escopo: arquitetura-integracao
hash_corpo: 67832891de9f553d672a318abf4880732d8e2265f56ca13fe3eb09c3bbc4e5bc
---

# Princípio MC #14 — Webhooks reativos + polling complementar

## Enunciado
> Integração entre sistemas (ClickUp, ZapSign, Meu INSS, WhatsApp, N8N) usa webhook reativo como caminho principal (~80% dos eventos) e polling de fallback (~20% para eventos perdidos ou plataformas sem webhook). Não confiar 100% em nenhuma das duas isoladamente.

## Origem
Cunhado durante especificação backend. Webhooks falham silenciosamente em produção (timeout, retry esgotado, plataforma down). Polling pega o resíduo.

## Aplicação
1. ZapSign documento assinado → webhook + polling diário
2. ClickUp status mudou → webhook
3. WhatsApp mensagem recebida → webhook
4. INSS protocolo agendado → polling (não há webhook público gov.br)
5. CadÚnico atualização → polling (não há webhook MDS)

## Cross-references
- Princípio MC #11 (Governança forte mora no N8N)
- ADR-008 (Stack de Ferramentas)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞