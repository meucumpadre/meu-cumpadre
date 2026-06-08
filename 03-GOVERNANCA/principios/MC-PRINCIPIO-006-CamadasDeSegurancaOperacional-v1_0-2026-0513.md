---
id: MC-PRINCIPIO-006
titulo: Camadas de Segurança Operacional
versao: 1.0
data_cunhagem: anterior a 2026-05-12 · consolidado em Instruções v7.0 §6
cunhado_por: Alessandro × Claude · práticas Vault operacional
status: ATIVO
escopo: governanca-operacional
hash_corpo: 394cbe6b97ffeffe30563d7d1af9e2ea34fb1fe3c1c9631d36fb5b9f45f8c0f9
---

# Princípio MC #6 — Camadas de Segurança Operacional

## Enunciado
> Toda operação relevante carrega 3 camadas de segurança redundantes: (1) hash SHA-256 origem/destino, (2) backup .bak antes de overwrite, (3) gate de pausa explícito quando crítico. Falha em uma camada não compromete a operação · falha em duas exige escalada.

## Origem
Cunhado durante operações de migração Vault, onde a perda silenciosa de dados era risco real (Google Drive sync, encoding UTF-8, em-dashes etc).

## Aplicação
1. **Hash:** `Get-FileHash -Algorithm SHA256` antes e depois de toda cópia · log no relatório do MB
2. **Backup:** `.bak-{stamp}` antes de qualquer overwrite de arquivo existente
3. **Gate de pausa:** se output do passo é ambíguo ou inesperado, PAUSA · escreve no relatório · Alessandro decide

## Antiexemplos
- ❌ Cópia sem hash · "tá igual, certeza"
- ❌ Overwrite direto sem .bak
- ❌ "Vou continuar, depois reverte se der ruim"

## Cross-references
- Princípio MC #1 (Inventário de Caminhos)
- Princípio MC #1b (Teste antes de Afirmar Funcional)
- Princípio MC #4 (Errata Absorve)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞