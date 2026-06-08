---
id: MC-PRINCIPIO-012
titulo: Custom Field dropdown > Task Central
versao: 1.0
data_cunhagem: anterior a 2026-05-12 · consolidado em ADR-015 e Instruções v7.0 §6
cunhado_por: Alessandro × Claude · sessão ADR-015
status: ATIVO
escopo: arquitetura-clickup
hash_corpo: 31f9b030aa2ee181a488553ffad22d57c897818638cddeb281f6dd6b8272b76f
---

# Princípio MC #12 — Custom Field dropdown > Task Central

## Enunciado
> Não criar Task ClickUp para cada categoria/estado/tipo. Categorias são valores de Custom Field dropdown. Task é unidade de trabalho com ciclo de vida (E0→E7), não taxonomia.

## Origem
Cunhado em sessão ADR-015 (PROVISIONAL). Anti-padrão observado: tentativa de criar "Task Central" por categoria (ex: Task "Casos PcD", Task "Casos CadÚnico"). Solução: Custom Field categoria com dropdown.

## Aplicação
1. Vertical (INSS, CadÚnico, B2B, B2G) → Custom Field dropdown
2. Etapa (E0, E0.5, E1...E7) → Custom Field dropdown
3. Rota Router-Ethics (A, B, C, D) → Custom Field dropdown
4. Tipo de PcD → Custom Field dropdown (não Task separada)
5. Task = caso individual com identidade

## Cross-references
- ADR-015 (Features Avançadas ClickUp)
- Princípio MC #13 (View filtrada > TIML)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞