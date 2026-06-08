# _LEIA — squad-r2 (Rito R2 · Cunhagem Fundacional)

**v0.1 PROVISIONAL · 2026-06-03 · cloud-portable · NÃO-SELADO (selagem = gate R2).**

Operacionaliza o **rito R2** num workflow executável da Workflow tool, no mesmo molde do `squad-r3`. O R2 é a **cunhagem fundacional** do MC: **ADR · Princípio · refactor do CLAUDE.md · mudança de stack**, deliberada por **Founder + C3.1 (Cofounder) + Sister Anciã**, e **o Founder sela**. Este motor roda a deliberação do trio e devolve uma **recomendação de selagem** — não decide, não sela.

> **Por que existe:** tínhamos o `squad-r3` (executa o rito R3 → Dra. Juliana) e o `mc-pre-selagem` (só *detecta* qual rito + roda mc-lint/sister-ancia), mas **nenhum workflow executava o R2**. Este fecha a simetria dos ritos.

---

## Os 3 arquivos

| Arquivo | Papel |
|---|---|
| `squad-r2.workflow.js` | Motor · 5 fases · `meta` literal + FIXTURE de regressão + `agent(prompt,{schema})` Proof-First + veredito determinístico + STOP no gate |
| `.claude/skills/squad-r2/SKILL.md` | Wrapper `/squad-r2` que chama o `scriptPath` **relativo** (cloud-portable) |
| `_LEIA-squad-r2.md` | Este arquivo — escopo, fases↔rito, limites, lastro |

---

## Como rodar + o que esperar

- **Sem args** → roda o **fixture** de regressão: um ADR de exemplo que (a) supersede outro sem banner e (b) passa a tratar PII (CPF do signatário). Esperado: **`CONDICIONADO` + `escalada_R3=true`** (porque toca LGPD/PII) + `disciplina_versao_ok=false` (faltou banner de supersedência). Valida o julgamento do rito.
- **Com `args: { artefato_texto }`** (inline, **preferido** — cloud-safe) ou `{ artefato_path, tipo? }` → roda a deliberação sobre o teu rascunho fundacional.

O motor **para no gate** e devolve (sem escrever nada):

```
{ caso, tipo, veredito, escalada_R3, gate_R2,
  sintese: { veredito, justificativa, o_que_corrigir_antes_de_selar, mapa_supersessao,
             versao_proposta, pendencias_R2, escalada_R3, nota_de_selagem },
  deliberacao: { f0_enquadre, f1_c31, f2_ancia, f3_coerencia } }
```

> ⚠️ **Rodar é opt-in e gasta agentes.** Este pacote foi **apenas autorado** — rode quando for cunhar de verdade.

### As 5 fases ↔ rito R2

| Fase (script) | Voz / papel | Faz |
|---|---|---|
| 0 · Enquadrar *(Explore)* | enquadramento | Classifica o tipo, mapeia o que muda, acha supersessão, **detecta toque OAB/LGPD/PII/ANPD → escalada R3** (fail-closed) |
| 1 · C3.1 *(Cofounder)* | cunhagem intelectual | Fortalece a tese, conecta ao cânone (D>C>V, ADRs, Princípios), nomeia o que cimenta/supersede + lacunas |
| 2 · Anciã *(agente `sister-ancia`)* | 3ª voz · contraintuição | Varre os eixos de drift; achados **BLOQUEIA / CORRIGIR / NOTA** por eixo + ponto cego. **Não conserta.** |
| 3 · Coerência | disciplina de cunhagem | Coerência canônica + **mapa de supersessão** (operacional inline / selado com banner) + bump de versão |
| 4 · Síntese | gate do Founder | **Veredito determinístico** + o que corrigir + pendências_R2 + escalada_R3. STOP — o Founder sela. |

**Veredito (determinístico, Dignidade lexicográfica):**
- **VOLTA** ⇐ algum achado **BLOQUEIA** da Anciã **ou** incoerência (não pode ser selado; conserta e re-roda).
- **CONDICIONADO** ⇐ `escalada_R3` **ou** achado **CORRIGIR** **ou** versão irregular (sela após resolver; se escalada R3, a Dra. Juliana entra antes).
- **PRONTO-PARA-SELAR** ⇐ tudo limpo (o Founder sela).

---

## Limites (governança dura · fail-closed)

- **NÃO redige o artefato · NÃO sela · NÃO escreve no Vault.** Devolve recomendação (decisão tua: o motor estressa, o Founder/C3.1 cunham o texto).
- **Escalada R3 é catraca dura:** OAB/LGPD/PII/ANPD ⇒ a selagem exige a Dra. Juliana **antes**. O R2 sozinho não basta. Ver `/squad-r3` e [[project_camada_r3]].
- **D > C > V** lexicográfico · **Proof-First** (fonte:linha; sem lastro → `[FONTE PENDENTE]`).
- **Sessão raiz-do-Vault** para a F2 (agente `sister-ancia`) existir; fora dela a F2 reporta limitação.
- **Zona Verde:** artefato fundacional é doutrina/método; **PII nunca em prompt** (se houver, escala R3 e não transcreve).

---

## Evolução possível (pós-gate)
- Extrair um **core reutilizável** (padrão `squad-r3-redteam-core.js`) se a deliberação crescer.
- Opção `args:{ redigir:true }` para também devolver um **rascunho fortalecido** do artefato (hoje, por decisão do Founder, o motor **só** recomenda — não redige).
- Acoplar ao `/mc-pre-selagem`: o pre-selagem *detecta* que é R2 → encaminha pro `/squad-r2`.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Firewall:** Zona Verde (método/doutrina) · PII/OAB/LGPD/ANPD ⇒ escalada R3 (Dra. Juliana)
**Proof-First:** cada achado com fonte:linha · zero fabricado
**Selo:** O diamante é carbono que não desistiu da pressão. · Provérbios 31:8
**Status:** v0.1 PROVISIONAL · cloud-portable · NÃO-SELADO · gate R2 (Founder)
∞
