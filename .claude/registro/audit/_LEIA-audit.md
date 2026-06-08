# _LEIA — Telemetria do Registro (RUA · L5 da stack ASE)

**v0.1 PROVISIONAL · 2026-06-03 · Fase 4 do MC-SPEC-RegistroAgentes-ASE · gate R2 (Founder + Sister Anciã)**

A **alça de otimização** sobre o plano de dados agêntico. O Registro (L1) diz *quem
são* as Unidades Agênticas; a telemetria (L5) diz *quais de fato ganham seu lugar* —
e quais são candidatas ao **critério de morte** (§6 da spec: se em 30d uma UA não
poupou decisão/retrabalho, ela estava errada e deve ser rasgada).

## A linha vermelha (LEIA ANTES DE LIGAR — catraca dura LGPD · #21 · ADR-009a)

O emissor `mc-audit.py` é construído sobre **um firewall em forma de dados**: de toda
invocação ele lê **só uma chave whitelisted — o id da UA** — e descarta o resto do
payload (args, prompt, descrição, caminhos). A linha JSONL só pode conter o **conjunto
fechado** de metadados de governança Zona Verde que vêm do *Registro*:

```
ts · event · ua · tipo · gate · zona · instancia_aci · in_registro · sessao_hash
```

Consequência: mesmo quando uma UA **Vermelha** roda (`novo-cliente`, `handoff-juridico`),
o audit grava só *"essa UA rodou em T · gate R3 · zona Vermelha"* — metadado de
governança, **nunca** dado de caso. `session_id` é hasheado (`sha256[:8]`): conta
sessões distintas sem retê-lo. **Zero PII por construção** → o log é Zona Verde.

## Os arquivos

| Arquivo | Papel |
|---|---|
| `../../hooks/mc-audit.py` | **Emissor.** Hook que apensa 1 linha JSONL por invocação de UA. Fail-safe (nunca bloqueia o turno). **DEFAULT OFF.** |
| `../../hooks/mc-audit.rua.yml` | Sidecar RUA do emissor (ele mesmo entra no Registro — dogfooding). |
| `../ler-audit.py` | **Analisador** = a alça de otimização (L5). Lê o JSONL, cruza com o Registro, cospe o resumo. |
| `audit.jsonl` | **AO VIVO** — runtime, efêmero, **gitignored** (não versionar · não canônico). |
| `audit-FIXTURE.jsonl` | **SINTÉTICO** — dados fabricados p/ regressão (golden). 1ª linha = sentinela Proof-First. **NÃO é telemetria real.** |
| `RESUMO-Telemetria-FIXTURE.md` | **GERADO** — golden de regressão do analisador sobre o fixture. |

## Como rodar

```bash
python3 .claude/registro/ler-audit.py              # lê o log ao vivo (audit.jsonl)
python3 .claude/registro/ler-audit.py --fixture    # lê o fixture sintético (golden)
python3 .claude/registro/ler-audit.py --in X.jsonl # lê um log específico
```

- **Determinístico:** mesmo commit + mesmo JSONL → saída byte-idêntica (período vem
  dos próprios dados, não de wall-clock).
- O analisador entrega: **ranking** (o que roda), **⚰️ critério de morte** (o que nunca
  rodou), **carga de governança** (execuções R2/R3 = supervisão humana consumida),
  **superfície LGPD** (tráfego Amarela/Vermelha) e dívida de cobertura vista em runtime.

## Como LIGAR a captura ao vivo (este é o ATO R2 do Founder)

O emissor **não se autoinstala** (#50.2 · agente não é autônomo). Ligar = adicionar um
hook em `.claude/settings.json`. Sugestão de fiação (`PreToolUse` sobre Skill/Task):

```jsonc
"hooks": {
  "PreToolUse": [
    { "matcher": "Skill|Task",
      "hooks": [ { "type": "command", "command": "python3 .claude/hooks/mc-audit.py" } ] }
  ]
}
```

> **Por que é R2 e não R1:** ligar captura ao vivo *toca a arquitetura* (observa toda
> invocação, em toda sessão). Mesmo sendo Zona Verde por construção, a decisão de
> instrumentar é fundacional → Founder + Sister Anciã. **Escalaria a R3 (Dra. Juliana)**
> só se algum dia o conjunto fechado de chaves passasse a tocar fluxo PII entre
> instâncias C4/C5 — o que este design proíbe (§7 Nota R3 da spec).

## Limites (governança)

- **Zona Verde · zero PII.** Garantido pelo conjunto fechado de chaves no emissor.
- **Derivado · NÃO canônico.** O canônico são os artefatos + o log de eventos. O resumo
  é leitura, não verdade nova. **NÃO selado, NÃO no Vault.**
- **Proof-First.** O fixture é explicitamente rotulado SINTÉTICO (sentinela na 1ª linha).
  Nenhuma métrica fabricada se passa por telemetria real.
- **#50.2 Cabeça Única.** Cockpit/loop do Founder, não terminal multiusuário.

---
**Hierarquia:** D > C > V · **Proof-First** · **Zona Verde** (zero PII) · *gerado, não mantido* · ∞
