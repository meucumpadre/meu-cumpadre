---
id: MC-PRINCIPIO-021
titulo: Camadas IA por Finalidade (LGPD linha vermelha por camada)
versao: 1.0
data_cunhagem: 2026-05-12 (userMemories + System Prompt v7.0)
data_persistencia: 2026-06-03 (primeira persistência canônica · saneamento _INDEX Opção A)
cunhado_por: Alessandro (founder) × Claude (cofounder) · userMemories 12/05
persistido_por: Code TALÃO · MC-PROPOSTA-Saneamento-INDEX-Principios (Founder Opção A)
status: ATIVO (princípio canônico desde 12/05) · ARQUIVO PROVISIONAL (texto persistido 2026-06-03 aguarda selo Founder)
escopo: governanca-arquitetura-ia-lgpd
hash_corpo: "[A CALCULAR no selo Founder — Proof-First: não fabricar hash]"
---

> [!check] PERSISTÊNCIA DE PRINCÍPIO JÁ CANÔNICO -- 2026-06-03
> Este princípio é canônico desde 12/05/2026 (userMemories + System Prompt v7.0) e ocupa o slot **#21** por antecedência cronológica (errata `_INDEX` 13/05). Nunca tinha **arquivo** próprio — vivia só no userMemories e na MC-ACI (Camada 4). Persistido agora via saneamento (Founder Opção A). O **texto** abaixo aguarda selo Founder; o **conceito** já é vinculante.

# Princípio MC #21 — Camadas IA por Finalidade

## Enunciado

> No MC, **cada camada de IA é escolhida pela FINALIDADE da tarefa e pelo grau de sensibilidade do dado que ela toca — nunca por conveniência ou custo isolado.** A LGPD é **linha vermelha por camada**: dado pessoal sensível (CPF/NB/CID/CNIS/senha gov.br) **nunca** trafega por LLM de nuvem de propósito geral; só por stack soberana self-hosted. A camada certa para o dado certo, sempre.

## Origem da cunhagem

Cunhado 12/05/2026 (userMemories + System Prompt v7.0) ao estruturar o roteamento de LLMs do MC. Pivot: IA não é "um modelo que faz tudo" — é uma **malha de camadas por finalidade**, cada uma com sua fronteira de dado. Slot #21 confirmado por antecedência cronológica na ERRATA-RENUMERACAO de 13/05 (a Cronometria, que ocupava 021 por colisão, foi para #23).

## As camadas correntes (CLAUDE.md · Stack Técnica)

| Camada | Modelo | Finalidade | % carga | Zona LGPD |
|---|---|---|---|---|
| **Triagem não-sensível** | Gemini 2.5 Flash | triagem de alto volume, não-sensível | ~70% | Verde |
| **Processamento sensível** | Llama 4 Scout self-hosted (GCP Brasil) | dado pessoal sensível, soberania | ~25% | Vermelha (stack soberana) |
| **Deliberação ética** | Claude Sonnet via MCP | julgamento ético, ~5% dos casos | ~5% | Verde/Amarela (sem PII plain text) |

> ⚠️ **Gemini fabrica dados** — toda saída de triagem cross-referenciada (Proof-First · Princípio #43).

## Mapeamento por instância (MC-ACI Camada 4)

Cada instância cognitiva da MC-ACI (C1–C5) carrega sua própria regra de zona (vide `MC-ARQUITETURA-Cognitiva-Integrada-v2.1` · Camada 4). Regra inviolável de fluxo: **PII Vermelha nunca passa pelos cérebros analíticos C3.1/C3.2 (Claude API direta); trafega apenas em C4 + C5 sob stack soberana.**

## Aplicação

1. Toda nova tarefa de IA declara: **finalidade** + **zona de dado** → daí deriva a camada.
2. Dado Vermelho (CPF/NB/CID/CNIS/senha) → **só** stack self-hosted soberana (Llama 4 Scout / GCP BR). Nunca Gemini/Claude nuvem.
3. Dado Verde/Amarelo → camada de propósito geral permitida, sem PII plain text.
4. Custo é critério **secundário** à finalidade e à zona (D > C > V: Compliance acima de Viabilidade).
5. Router-Ethics 11.0 + Hook 0 aplicam-se a toda transição inter-camada que envolva PII.

## Implicações

- A escolha de LLM é decisão de **compliance**, não só de engenharia.
- Editais (FINEP/BNDES): "arquitetura de IA com soberania de dado por camada, LGPD linha vermelha".
- DeepSeek cloud, Make em produção e afins: **vedados** (não é só custo — é fronteira de dado).

## Antiexemplos (o que NÃO é)

- ❌ Mandar CNIS/CPF para Gemini ou Claude nuvem "porque é mais barato/rápido"
- ❌ Escolher modelo só por custo, ignorando a zona do dado
- ❌ Tratar "uma IA que faz tudo" como arquitetura MC
- ❌ PII Vermelha em C3.1/C3.2 (cérebros analíticos de nuvem)

## Cross-references

- Princípio #8 (Verde/Amarelo/Vermelho LGPD) · fundamento da zona por dado
- MC-ARQUITETURA-Cognitiva-Integrada-v2.1 · Camada 4 (LGPD por instância)
- CLAUDE.md · Stack Técnica (camadas correntes) + Proteção LGPD
- Router-Ethics 11.0 · middleware de transição inter-camada
- Princípio #23 (Cronometria do Humano) · ex-ocupante deste slot por colisão, realocado 2026-06-03

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞
