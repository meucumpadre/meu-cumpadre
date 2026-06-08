---
tipo: INDEX
escopo: 04-OPERACAO/infraestrutura/
data-atualizacao: 2026-05-13
---

# Indice de Infraestrutura - Meu Cumpadre

Registros institucionais de infraestrutura operacional do MC: maquinas, comodatos, camadas IA, instalacoes, custodias fisicas. Combinacao conceitual (decisoes arquiteturais) + factual (snapshots hardware).

---

## Conceituais (decisoes arquiteturais)

### MC-REGISTRO-Infraestrutura-DELL-CEO v1.0

- Arquivo: [[MC-REGISTRO-Infraestrutura-DELL-CEO-v1_0-2026-0513]]
- Data: 2026-05-13
- Tema: Comodato DELL Beto -> CEO Alessandro 24h
- Principio cunhado: #21 - Camadas de Ferramentas IA por Finalidade
- Matriz: C1 (Claude.ai projeto) - C2 (Cowork DELL) - C3 (Claude Code DELL) - C4 (Stack Producao LLM)
- Linha vermelha: dados sensiveis cidadao JAMAIS em C1/C2/C3
- Status: ATIVO ate aquisicao de nova maquina dedicada
- Relaciona: ADR-008 (Stack), ADR-009a (Bitwarden), ADR-011 (3 Cerebros), ADR-012 (LLM)

---

## Factuais (snapshots hardware)

### MC-REGISTRO-Infraestrutura-DELL-Snapshot-Hardware v1.0

- Arquivo: [[MC-REGISTRO-Infraestrutura-DELL-Snapshot-Hardware-v1_0-2026-0513]]
- Data: 2026-05-13
- Hostname: DESKTOP-HJFIPFM
- Maquina: VAIO Positivo VJFE69F11X-B0221H (estacao operacional CEO 24h em comodato)
- CPU: AMD Ryzen 7 5825U (8C/16T, FP6)
- RAM: 32 GB DDR4-3200 single-channel (1x32GB, slot DIMM 0)
- SSD: 512 GB NVMe SM2P32A8-512GC1 (67% livre)
- SO: Windows 10 Pro 22H2 build 19045 (fim de suporte out/2025)
- Stack dev: Node v24.15.0, Python 3.14.5, Git 2.54.0, PowerShell 5.1
- Apps MC: Obsidian 1.12.7, ClickUp 3.5.208, Google Drive 124.0.3, Office 2019, Chrome 148
- Pontos de atencao registrados: Win10 EOL, driver AMD defasado, RAM single-channel, Java 8 instalado
- Relaciona: MC-REGISTRO-Infraestrutura-DELL-CEO (mesma maquina, dimensao conceitual)

---

## Politica de Atualizacao

Registros conceituais (decisoes) recebem nova versao quando matriz/principios mudam.
Registros factuais (hardware) recebem nova versao a cada upgrade significativo (RAM, SSD, SO, drivers criticos).

---

Hierarquia: Dignidade > Compliance > Viabilidade
Selo: "O diamante e carbono que nao desistiu da pressao."

∞
