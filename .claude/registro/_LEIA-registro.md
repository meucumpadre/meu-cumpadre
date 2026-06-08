# _LEIA — Registro de Unidades Agênticas (RUA · L1 da stack ASE)

**v0.1 PROVISIONAL · 2026-06-03 · Fases 1+2 do MC-SPEC-RegistroAgentes-ASE (SELADO · PR #19)**

Implementa o **plano de controle** sobre o plano de dados agêntico: uma projeção
determinística do `.claude/` que diz *quem são todas as Unidades Agênticas, em que
gate cada uma para, que zona LGPD toca, quanto custa, e o que não confundir com o quê*.

## Princípio inviolável: "gerado, não mantido"

O Registro **NUNCA é editado à mão**. A fonte da verdade são os **artefatos** (o bloco
`rua:` no frontmatter de cada UA). O Registro é a *colheita* desses blocos. Editar o
`.json`/`.md` à mão = drift = passivo (viola Proof-First). Mudou uma UA? **Regenere.**

## Os arquivos

| Arquivo | Papel |
|---|---|
| `gerar-registro.py` | O gerador. Varre `.claude/{skills,workflows,agents,hooks}`, valida ★ fail-closed, cospe JSON + view. Repo-relativo (roda local E cloud). |
| `gerar-cockpit.py` | **Fase 3.** Lê o `.json` e cospe `painel-mc.html` autossuficiente (dados embutidos · 1 arquivo · zero servidor · molde `f2810ce`). |
| `painel-mc.html` | **GERADO** — o cockpit (caixa de ferramentas + POP + zonas LGPD coloridas). Abre em qualquer navegador. |
| `ler-audit.py` | **Fase 4 (L5).** Lê o log JSONL de auditoria, cruza com o `.json` e cospe a *alça de otimização* (ranking · critério de morte · carga de governança · superfície LGPD). |
| `audit/` | **Telemetria (L5).** Emissor `mc-audit.py` (em `../hooks/`) + log ao vivo (gitignored) + fixture sintético + golden. Ver `audit/_LEIA-audit.md`. |
| `registro-unidades-agenticas.json` | **GERADO** — o Registro p/ máquina (cockpit L6, telemetria L5 leem daqui). |
| `REGISTRO-Unidades-Agenticas.md` | **GERADO** — view humana (tabela + cobertura). |
| `_LEIA-registro.md` | Este arquivo. |

## Como rodar

```bash
python3 .claude/registro/gerar-registro.py   # 1) colhe os blocos rua → JSON + view .md
python3 .claude/registro/gerar-cockpit.py    # 2) JSON → painel-mc.html (cockpit autossuficiente)
```

- Sem args. Determinístico: rodar 2× no mesmo commit → saída **byte-idêntica** (o carimbo
  de origem é o SHA do commit, não wall-clock).
- Regenere sempre que adicionar/alterar uma UA ou seu bloco `rua:` (e depois regenere o cockpit).

## Como instrumentar uma UA (fechar a dívida de cobertura)

Adicione um bloco `rua:` ao frontmatter da `SKILL.md` (ou `.md` do agent). Campos ★
obrigatórios (sem eles a UA cai em `incompletas`, fora do Registro canônico —
fail-closed): `id, nome, tipo, versao, status, papel, gatilhos, entrega, metodo_fonte,
instancia_aci, nao_confundir_com, gate, zona, vedacoes_honradas, para_no_gate, custo`.
**Modelo de referência:** `.claude/skills/mc-compasso-sweep/SKILL.md` (1ª UA instrumentada).

## Estado (Fases 1+2+3+4 · PoC)

- **Fase 1** ✅ — UAs instrumentadas com bloco `rua:` (100% de cobertura · PR #22).
- **Fase 2** ✅ — gerador (`gerar-registro.py`) rodando, determinístico, fail-closed.
- **Fase 3** ✅ — cockpit (`gerar-cockpit.py` → `painel-mc.html`) autossuficiente lendo o
  `.json` (dados embutidos · 1 arquivo · zero servidor · molde `f2810ce`) · PR #24.
- **Fase 4** 🟡 — telemetria L5: emissor `mc-audit.py` (firewall LGPD · zero PII) +
  analisador `ler-audit.py` (alça de otimização) + fixture/golden. **PoC pronto · DEFAULT
  OFF · gate R2 pendente** (ligar captura ao vivo é ato do Founder). Ver `audit/_LEIA-audit.md`.

## Limites (governança)

- **Zona Verde · zero PII.** O Registro só carrega metadados de governança das UAs.
  Nada de caso de cidadão, CPF/NB/CID/CNIS. O cockpit (L6) é compartilhável = público.
- **Derivado · NÃO canônico por si.** O canônico são os artefatos. **NÃO selado, NÃO no Vault.**
- **#50.2 Cabeça Única:** o Registro é cockpit do Founder, não terminal multiusuário.

---
**Hierarquia:** D > C > V · **Proof-First** · **Zona Verde** · *gerado, não mantido* · ∞
