---
id: MC-PRINCIPIO-001
titulo: Inventário de Caminhos
versao: 1.0
data_cunhagem: anterior a 2026-05-12 · consolidado em Instruções v7.0 §6
cunhado_por: Alessandro × Claude · sessões operacionais Vault
status: ATIVO
escopo: governanca-operacional
hash_corpo: 4c6328b5f682843bdda9e87fd1e86b246ff0eeacfab832ceaf48281aa86f67d5
---

# Princípio MC #1 — Inventário de Caminhos

## Enunciado
> Antes de qualquer ação destrutiva (move, delete, overwrite) ou modificação relevante de estado, executar sweep read-only do alvo. Conhecer o terreno antes de pisar.

## Origem
Necessidade emergente de operação em Vault Obsidian com 485+ arquivos .md, múltiplas pastas e risco real de sobrescrever artefato canônico. Cunhado como primeiro princípio operacional.

## Aplicação
1. Toda operação no Cérebro 2 (Vault) começa com `Get-ChildItem -LiteralPath ... -Recurse` ou equivalente
2. Toda escrita em arquivo existente precisa de leitura prévia + backup (.bak)
3. Toda cópia precisa de hash-verify pré e pós
4. Em paths com caracteres especiais (em-dash, acento, espaço), usar `-LiteralPath -Force | Where-Object`, NUNCA `-Filter` (aprendizado MB-024 fricção #2)

## Antiexemplos
- ❌ Executar `Move-Item` sem listar destino primeiro
- ❌ Confiar em `Test-Path` simples sem listagem detalhada
- ❌ Pular o sweep "porque o caminho é óbvio"

## Cross-references
- Princípio MC #6 (Camadas de Segurança Operacional)
- Princípio MC #1b (Teste antes de Afirmar Funcional)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞