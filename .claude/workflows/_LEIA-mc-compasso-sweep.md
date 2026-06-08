# _LEIA — mc-compasso-sweep (curadoria de fontes <5%)

**v0.1 PROVISIONAL · 2026-06-02 · drop zone · NÃO-INSTALADO · NÃO-SELADO**
**Gate humano: Founder. Instalação no `.claude/` batched com mc-especimen (pós-resolução do conflito em CLAUDE.md).**

Operacionaliza o método **MC-RÉGUA-COMPASSO** num workflow executável (molde squad-r3: script + skill + _LEIA). Curadoria por **exclusão** sob a régua **REGISTRO × ESCALÃO × JOGADA**, tolerância **<5%**, saída pronta p/ NotebookLM (2 cadernos) — **sem injetar nem selar**.

> **Por que este workflow existe separado.** Cada workflow nasce do SEU método-fonte. `mc-compasso-sweep` = curadoria de FONTES (inteligência de mercado pública). NÃO confundir com `mc-especimen-autoevolutivo` (motor de método de casos, #45/#46/#47) nem `squad-r3` (parecer adversarial de compliance). *(A confusão exata que gerou retrabalho: um prompt-template com o espécimen hardcoded sendo reusado para outros workflows. Corrigido: cada um é construído do seu próprio método.)*

## Os 3 arquivos (drop zone)

| Arquivo | Papel | Molde-fonte |
|---|---|---|
| `mc-compasso-sweep.workflow.js` | Script da Workflow tool · 3 fases · `meta` literal + FIXTURE + `agent({schema})` Proof-First + STOP no gate | `squad-r3-pipeline.js` |
| `SKILL-mc-compasso-sweep.md` | Wrapper `/mc-compasso-sweep` que chama o `scriptPath` | `.claude/skills/squad-r3/SKILL.md` |
| `_LEIA-mc-compasso-sweep.md` | Este arquivo — escopo, como rodar, limites, lastro | `_LEIA-squad-r3.md` |

## Como rodar + o que esperar

- **Sem args** → **golden fixture** (tema WhatsApp Cloud API): a régua deve reproduzir **2 admitidas + 4 balotes** conhecidos (fora-de-fronteira ×2, hype-sem-demo, órfã-sem-âncora) → `regressao_fixture.veredito = PASSOU`. Valida que o julgamento do Compasso não regrediu.
- **Com args** `{ tema, recorte }` → colheita real: **Escopo** (K1-K8) → **Caça** (web, fan-out por pilar) → **Compasso** (régua). Retorna tabela + BLOCO URLs puro + balotes.

> ⚠️ **Rodar é opt-in e gasta agentes** (a Caça faz N buscas paralelas, uma por pilar). Este pacote foi **apenas autorado**.

O motor **para no gate** e devolve (sem injetar/selar):

```
{ tema, modo, gate, escopo, admitidas, balotes, tabela_md, bloco_urls_puro,
  cobertura_por_pilar, regressao_fixture, pendencias }
```

### As 3 fases ↔ rito Compasso

| Fase (script) | Rito | Faz |
|---|---|---|
| 0 · Escopo | §6.1 (K1-K8) / Fases 0-1 | tema + recorte + escalão-âncora + pilares MECE (pergunta-motriz) + exclusão dura + DoD |
| 1 · Caça *(fan-out, paralelo)* | §4.3-4.4 / esquadrão T1 | por pilar: finca 🎯 oficial **primeiro** (sem 🎯 → `[VAZIO Px]`) + garimpa 🛠️/💎 (WebSearch) com URL+data |
| 2 · Compasso *(fan-in)* | §2 / §4.5 / esquadrão T2 | régua <5%: admissão REGISTRO×ESCALÃO×JOGADA + exclusão dura + âncora cruzada + dedup + split MÉTODO/ASSUNTO + **BLOCO URLs puro** |

## Limites (governança dura · fail-closed)

- **Zona Verde:** só fonte PÚBLICA; **zero PII** (CPF/NB/CID/CNIS) — o caderno é público (§6.2 :425).
- **NÃO injeta no NotebookLM, NÃO sela, NÃO escreve no Vault** (injeção/canonização = gate humano, §6.3/§7).
- **Proof-First:** URL+data ou `[CONFERIR]`; nunca inventar fonte/view/data (§2.4 :145-156).
- **Curadoria por exclusão:** na dúvida, corta — falso-positivo custa mais (§2.2 :133).

## TABELA DE LASTRO (método canônico — `arquivo:linha`)

Fonte única: `…\NotebookLM x CODE x Obsidian\CLAUDE CODE\MC-RÉGUA-COMPASSO-Metodo-v1_0-2026-0601.md`.

| Estrutura usada | Linha |
|---|---|
| Compasso — admissão REGISTRO × ESCALÃO × JOGADA | §1.4 :59-78 |
| Calibração <5% (bala de prata vs balote) | §2.1-2.2 :112-133 |
| Exclusão dura (SEO-vazio, hype-sem-demo, fala-mas-não-faz, versão, duplicata) | §2.2 :122-133 |
| Âncora oficial cruzada (trava anti-erro) | §2.3 :135-143 |
| Proof-First (verificado / não-verificado / refutado) | §2.4 :145-156 |
| Rito 6 fases (Escopo→Pilares→Âncora→Caça→Curadoria→Persistir) | §4 :233-332 |
| Esquadrão (Caçador×N · Âncora-Oficial · Juiz · Curador · T1/T2) | §5 :336-376 |
| Kickoff K1-K8 | §6.1 :384-399 |
| NotebookLM (300 fontes · BLOCO URLs puro · 2 cadernos MÉTODO/ASSUNTO) | §7 :492-516 |

**Único ponto sem lastro de fonte (Proof-First):** as **URLs do fixture** são `[FIXTURE·ilustrativo]` — o fixture testa o JULGAMENTO da régua (dado o caráter da candidata → veredito esperado), não a liveness de URLs. Numa colheita real, toda URL é verificada (Caça) e carimbada com estado de prova.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First** · **Zona Verde** (sem PII)
**Status:** v0.1 PROVISIONAL · drop zone · gate humano (Founder; instalação batched com mc-especimen pós-conflito CLAUDE.md)
∞
