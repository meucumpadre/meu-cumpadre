---
id: MC-PRINCIPIO-018
titulo: Risco Provisional Documentado
versao: 1.0
data_cunhagem: 2026-05-12
cunhado_por: Alessandro · sessão 12/05 (caso DPA Anthropic)
status: ATIVO
escopo: governanca-compliance-D-C-V
hash_corpo: 56125542d7365168eaad917d6b69aad92211d9e35467b0d8eeca25d3ce29d0bf
---

# Princípio MC #18 — Risco Provisional Documentado

## Enunciado
> Decisão D>C>V (Dignidade > Compliance > Viabilidade) pode assumir risco regulatório temporário em situações excepcionais, contanto que 5 critérios estejam atendidos: (1) cronologia formal documentada, (2) volume controlado nomeado, (3) período provisional nomeado, (4) mitigação parcial aplicada, (5) risco assumido pessoalmente pelo Founder.

## Origem
Cunhado em 12/05/2026 no contexto da decisão DPA Anthropic (ADR-012 PATCH v1.0→v1.1). DPA não obtido após cronologia formal (17/04 + 06/05 sem resposta humana até 12/05). Founder decidiu manter Bedrock sa-east-1 ativo para 12-15 casos piloto até parecer Juliana 19/05 (Bloco O).

## Os 5 critérios

1. **Cronologia formal documentada:** datas de tentativas, comunicações, prazos pendentes
2. **Volume controlado nomeado:** N casos / N dias / janela específica
3. **Período provisional nomeado:** data limite explícita para resolução (ex: pós-parecer Juliana 19/05)
4. **Mitigação parcial aplicada:** medidas técnicas/operacionais que reduzem o risco (ex: region-pinning sa-east-1, dados em solo BR)
5. **Risco assumido pessoalmente pelo Founder:** registrado no PATCH com responsabilidade explícita, não delegada

## Aplicação
1. Toda decisão D>C>V deve gerar §Risco Provisional no documento canônico
2. Period stamp obrigatório · sem prazo aberto
3. Resolução automática se gate cumprido (parecer chega · norma muda · DPA assinado)
4. Audit trail preservado para CPMI/ANPD/Federação OAB se questionado

## Antiexemplos
- ❌ "Vou usar Claude API direta porque é mais rápido" (sem cronologia, sem volume nomeado, sem mitigação)
- ❌ "Aceito o risco, depois vejo" (sem prazo, sem audit)
- ❌ Delegar o risco para Beto ou Igor (precisa ser Founder)

## Cross-references
- ADR-012 PATCH v1.0→v1.1 (caso de uso fundacional)
- Pauta Juliana v2.1 Bloco O (5 perguntas sobre Risco Provisional)
- Hierarquia D>C>V (Instruções v7.0 §2.1)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞