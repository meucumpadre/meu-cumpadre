---
artefato: MC-CONVENCAO-RegistroDeAssinaturas
versao: v1.0
status: SELADA · gate leve · Founder ✓ 2026-06-08
data: 2026-06-08
gate_concedido: Founder (TALÃO) · 2026-06-08
nota_versao: v0.1 (rascunho/deliberação) → v1.0 (primeira versão SELADA · gate leve) · bump de escriba no selo, conteúdo inalterado
tipo: convenção operacional (NÃO é princípio fundacional)
subordinada_a: R2 (fonte única) + Princípio #24 (documentação canônica unificada)
gate: leve (Founder valida) — NÃO consome rito R2 (Founder+C3.1+Anciã+Juliana)
precedente: molde do #29 (subordinado operacional do #24), não princípio autônomo
deliberacao: C3.1 (lâmina · reclassificou de princípio→convenção) + Falcão (R5 · confirmou fatos) · 2026-06-08
autor_rascunho: Code TALÃO (Falcão) — R1 (a convenção sobre a própria autonomia é o Code que redige)
hierarquia: D > C > V
---

# Convenção — Registro de Assinaturas

> Reclassificada de "Princípio 057" para **convenção operacional** após lâmina da C3.1:
> manter um ledger do que o MC paga é **higiene de escrituração**, não invariante de Camada 0.
> Promover toda boa prática a princípio R2 é o próprio *context rot* que a Pedra de Fecho cura.

## Regra (trava dura)
> **Nenhuma contratação recorrente sem linha no Registro.** Toda assinatura/plano/serviço
> recorrente (SaaS, infra, API, ferramenta) tem linha no **Registro de Assinaturas** **antes**
> de contratar. (Sem a porta-dos-fundos "ou depois" — isso não vinculava.)

## O que registra
serviço · provedor · plano/tier · custo+ciclo · conta/owner · **escopo/permissões** · motivo + alternativas rejeitadas · gatilho upgrade/downgrade · data · responsável (TALÃO) · status.

## Vedações
- **Credencial NENHUMA encosta neste arquivo.** Guarda **escopo/permissões**, nunca segredo/token (→ Bitwarden Org MC · ADR-009a). (Termo "credenciais-de-escopo" da v0.1-rascunho foi morto: era mina LGPD.)
- **Sem PII de cliente.**
- **Fonte única (R2):** o Registro **aponta**, não repete. Descartados → **ADR-008/ADR-014**. Modelo self-host → **ADR-012**. Assinatura eletrônica → **ADR-014**.

## Cancelamento
Não apaga — marca `DESCARTADO` com data e motivo (espírito do Princípio #4).

## Por que (causa)
1. Simetria de estado entre instâncias (Code/C3.1/Anciã/Voo) — leem o mesmo "o que o MC contrata".
2. Integração — n8n/Pipefy/agentes leem **escopo/permissões** (nunca credencial).
3. Governança de custo (D>C>V) — Viabilidade rastreada. *(Hoje ainda é promessa: 100% dos custos `[A PREENCHER]`; entrega valor quando o 1º custo for confirmado.)*

## Vínculos
- Registro vivo: `04-OPERACAO/infraestrutura/MC-REGISTRO-Assinaturas-Stack-v1_0-2026-0608.md`
- Custódia credenciais: ADR-009a · Stack descartada: ADR-008/014 · Stack LLM/self-host: ADR-012

## Status de gate (rito)
- [x] Deliberação C3.1 (reclassificou → convenção) + Falcão R5 (confirmou número/modelo/duplicação)
- [x] #26 — perna de **repo** (sweep `_INDEX` + colisões): rodada por Falcão. Achado: nº de princípio era desnecessário (isto é convenção, sai da série); colisão `_INDEX` #44–48 (2 díg × 3 díg) = dívida à parte.
- [x] #26 — perna `conversation_search` (C3.1): achado **LIMPO** — sem colisão de conceito nem de número (resultado registrado, não só tick)
- [x] **Gate leve — validação do Founder** (selo final · Founder ✓ 2026-06-08)

## Achado correlato (handoff para R2 próprio)
`CLAUDE.md §Stack` ainda diz **"Llama 4 Scout"**; o canônico é **GAIA-4B/Gemma 3 (ADR-012)**. Drift no manual-mãe → corrigir em errata/refactor R2 do CLAUDE.md (não nesta convenção).
