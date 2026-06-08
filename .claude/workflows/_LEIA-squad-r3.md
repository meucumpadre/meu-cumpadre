# Squad Causal R3 — scripts (C2 canônico)

Workflows multi-agente para produção de **parecer R3 com teste adversarial** sobre políticas/produtos do MC.

- **`squad-r3-redteam-core.js`** — engine adversarial **VALIDADO** (Red-Team Zilda-STF, 6 lentes cegas + cascata D→C→V endurecida). Fases 2-3. Serve de regressão. Rodável sozinho.
- **`squad-r3-pipeline.js`** — pipeline ponta-a-ponta (Coletor→Tesista→[delega ao core]→Escriba→**STOP no Gate R3 humano**). Delega as fases 2-3 ao core via `workflow()`. **Sem efeito colateral** — devolve rascunhos, não escreve no Vault.

## Como rodar
- Atalho: **`/squad-r3`** (skill em `.claude/skills/squad-r3/`). Com `PERGUNTA | PASTA` ou sem args (fixture Φ₀).
- Direto: `Workflow({scriptPath: "…/.claude/workflows/squad-r3-pipeline.js", args: {pergunta, pasta}})`.

## Escopo
**R3 × MC** (compliance/autorregulação — MC como seu próprio cliente). **NÃO** para análise de caso de cliente (→ Router-Ethics → Marketplace → advogada). Firewall meio↔fim.

## Não esquecer
- O squad **não sela**. Decisão R3 é humana (Dra. Juliana / Founder).
- Desenho/lições/§9 (nó D-46, escada R, auditoria semestral): `Documentação/avaliacao-juridica-successfee-cadunico/MC-SPEC-SquadCausal-R3-ParecerAdversarial-v0_1-PROVISIONAL`.
