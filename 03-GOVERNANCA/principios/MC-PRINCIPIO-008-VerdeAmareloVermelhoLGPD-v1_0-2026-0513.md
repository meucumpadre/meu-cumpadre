---
id: MC-PRINCIPIO-008
titulo: Verde / Amarelo / Vermelho LGPD
versao: 1.0
data_cunhagem: anterior a 2026-05-12 · consolidado em Instruções v7.0 §6
cunhado_por: Alessandro × Claude · arquitetura LGPD MC
status: ATIVO
escopo: compliance-lgpd
hash_corpo: a52c61f6bd4e3238fa137f8fe171530046187c1737eed9df46cf4cec0665e3a9
---

# Princípio MC #8 — Verde / Amarelo / Vermelho LGPD

## Enunciado
> Toda variável, campo, custom field ClickUp ou input do sistema é classificado em 3 níveis LGPD: **Verde** (não pessoal), **Amarelo** (pessoal não sensível), **Vermelho** (sensível — CPF, CID, biometria, financeiro). Cada nível tem regra de tratamento e custódia distinta.

## Origem
Cunhado durante especificação dos 35 Custom Fields ClickUp (MC-SPEC-ClickUp v3.1.1 Módulo B). Necessidade de classificação visual rápida em UI + auditoria LGPD.

## Aplicação
| Nível | Exemplos | Tratamento |
|---|---|---|
| 🟢 Verde | timestamp, status, etapa, contador | Sem restrição |
| 🟡 Amarelo | nome, telefone (parcial), município, idade faixa | Mínimo necessário · base legal · log de acesso |
| 🔴 Vermelho | CPF, NB, CID, dados biométricos, valor benefício | Stack self-hosted Llama 4 Scout GCP BR ou Bedrock sa-east-1 + Bitwarden Org MC para credenciais · NUNCA Claude API direta |

## Cross-references
- MC-SPEC-ClickUp v3.1.1 Módulo B (aplicação prática)
- ADR-009a (Custódia Credenciais Bitwarden)
- ADR-012 (Stack LLM Multi-Modelo · região-pinning)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞