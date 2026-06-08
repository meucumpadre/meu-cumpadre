---
id: MC-PRINCIPIO-020
titulo: Workflow de Sincronização Permanente
versao: 1.0
data_cunhagem: 2026-05-12
cunhado_por: Alessandro · sessão 12/05 governança Vault
status: ATIVO
escopo: governanca-operacional
hash_corpo: f02863be04b9d3845bd1319f4876eead958c0ba0403c0d781e7e280d7b058128
---

# Princípio MC #20 — Workflow de Sincronização Permanente

## Enunciado
> Sincronização Documentação ↔ Vault precisa de protocolo automatizado periódico, não MBs pontuais reativos. Cada fase de maturidade (Crisálida · Borboleta · Murmuração) tem cadência distinta. Reatividade é débito técnico que cresce com o acervo.

## Origem
Cunhado em 12/05/2026 após múltiplos MBs reativos de sincronização. Necessidade: SYNC-PROTOCOLO formal com fases.

## Fases SYNC-PROTOCOLO

| Fase | Volume | Frequência | Operação |
|---|---|---|---|
| 1 (Crisálida atual) | <100 casos | Sob demanda via MB pontual | Code DELL executa sweep + Copy-Item + hash-verify |
| 2 (Borboleta) | 100-1000 casos | N8N cron diário 23h | Sweep automático + reporte cofounder validação |
| 3 (Murmuração) | 1000+ casos | A cada 6h | Cache hash + alertas órfãos >7 dias |

## Aplicação
1. Fase 1: cada MB tem padrão (sweep → cópia → hash → reporte)
2. Fase 2: criar workflow N8N `vault-sync-daily` quando volume justificar
3. Fase 3: monitoramento contínuo · alertas reativos · não-bloqueante
4. Detector de órfãos: arquivo no Cérebro 1 sem espelho no Cérebro 2 em ≥7 dias

## Cross-references
- 04-OPERACAO/logs/SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512
- Princípio MC #15.1 (Descoberta dispara reconstituição · forma reativa)
- ADR-011 (Arquitetura 3 Cérebros)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞