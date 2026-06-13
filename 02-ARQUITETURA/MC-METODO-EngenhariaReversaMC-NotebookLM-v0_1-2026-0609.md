---
codigo: MC-METODO-EngenhariaReversaMC-NotebookLM
versao: v0.1
data: 2026-06-09
autor: Code TALÃO (sessão web · branch claude/quirky-euler-eZHHG)
estado: MESA DE TRABALHO (Cérebro 1 · ADR-011) — NÃO selado no Vault
rito: R1 (método/Zona Verde). A política de de-identificação aqui registrada é
      APLICAÇÃO da Regra 5 (LGPD) + Firewall OAB já vigentes — não é princípio
      novo. Canonizar como Princípio = R3 (Dra. Juliana).
relacionados: [MC-INFRA-NotebookLM-Grid-v0_1, MC-INFRA-NotebookLM-CLI-v1_0,
               MC-INFRA-RuntimesClaudeCode-DesktopVsWeb-v1_0, skill mc-strategic-intelligence]
tags: [metodo, engenharia-reversa, notebooklm, inteligencia, flywheel, firewall-lgpd]
---

# Método Engenharia Reversa MC (ER-MC) — destilação de cadernos NotebookLM

> Protocolo repetível para transformar um caderno (ou cluster) NotebookLM em
> **artefato de inteligência MC** — Proof-First, firewall-safe, alimentando o
> Flywheel/MoR. Formaliza o padrão já provado na engenharia reversa do
> `CLAUDE DESIGN - missão MC` ("o que prova / o que não prova / o que aplica").

---

## 0. Premissa assentada — de-identificação 🔴 (aval Founder 2026-06-09)

**Regra-padrão, fail-closed:** nenhum dado que identifique beneficiário real
(nome, CPF, NB, CID, CNIS) entra em artefato versionado/pushado. A zona 🔴
(`CASE-`/`CLIENTE`/`PESSOAL-`) só aparece como **agregado + categoria**; o índice
nominal vive **exclusivamente na stack soberana** (Llama BR / GCP Brasil). É
aplicação direta da Regra 5 (LGPD) + Firewall OAB + D > C > V do CLAUDE.md.

> Gate de entrada de TODO caderno: se 🔴 → método roda só sobre o **método
> de-identificado**; PII nunca cruza pro repo/NotebookLM-US.

---

## 1. Divisão de runtime (ver MC-INFRA-Runtimes)

| Fase | Runtime | Por quê |
|---|---|---|
| Colheita (F1-F2) | 🖥️ **Desktop** (NotebookLM MCP/CLN local + auth Google) | Tem as mãos no NotebookLM |
| Estruturação + Vault (F3-F5) | ☁️ **Web** (Git/Vault/push) | Aterra no repositório sob gate |

Ponte: Desktop exporta a colheita (`note get`/`download`) → cola na sessão Web.

---

## 2. As 5 fases do ER-MC

### F0 · Enquadrar & triar zona
- Identifica o caderno (ID do Grid) e o **recorte** (pergunta de inteligência).
- **Gate firewall:** classifica 🟢/🔴. 🔴 ⇒ só método de-identificado; PII para.
- Define o **eixo estratégico** (vertical Skybridge âncora, camada do ecossistema).

### F1 · Recon de fontes (o que o caderno é)
```
notebooklm use <id> ; notebooklm metadata ; notebooklm source list ; notebooklm summary
```
- Conta fontes, **autoridade** (oficial Anthropic/INSS/TCU > comunidade > opinião).
- Marca fonte sem rastro como `[FONTE PENDENTE]` (Proof-First).

### F2 · Queries adversariais cruzadas (o miolo — NÃO é "resumir")
Sempre `--json` (citações estruturadas). 4 frentes canônicas:
- **(a) Mecanismo** — como a coisa funciona por dentro.
- **(b) Limites honestos / anti-hype** — *contraprova obrigatória* (lado B). O que
  NÃO funciona, custos, armadilhas. Sem isto, vira marketing.
- **(c) Aplicação ao MC** — método/harness/produto/9 verticais. Concreto.
- **(d) Pipeline/combinação** — como combina com outras ferramentas (MCP, n8n, RAG…).

### F3 · Triagem ouro / meio-termo / pirita
Carimba cada achado (ecoa o motor espécimen #46):
- ✅ **Ouro (PROVA):** fonte oficial verificável → entra firme.
- ⚠️ **Meio-termo:** relato de comunidade → "ordem de grandeza", nunca SLA.
- ❌ **Pirita:** hype sem lastro → descarta ou marca como alegação.

### F4 · Scoring & conexão
- **Router-Ethics 11.0** quando fizer sentido (Confidence/Complexity/Fraudscore).
- **9 verticais Skybridge** — vertical âncora + passarelas ativáveis.
- **Flywheel/MoR** — o que vira aprendizado de método **de-identificado**.

### F5 · Entregável + gate
- Monta o **Brief de Inteligência MC** (`TEMPLATE-Intelligence-Brief.md`):
  Linha de Evidência (claim → fonte:URL+data → estado ✅/⚠️/❌), Teste Zilda-STF.
- Salva em **Cérebro 1** `Documentação/Intelligence/<data>-<slug>/`.
- **PARA no gate** (ADR-011). Vault canônico só com "aprovado para vault".

---

## 3. Saída-padrão (a assinatura ER-MC)

Todo Brief ER-MC fecha com a **Linha de Prova/Não-Prova**:
- ✅ **PROVA:** … (fonte oficial)
- ⚠️ **NÃO-PROVA / ordem de grandeza:** … (relato de comunidade)
- ❌ **REFUTADO / hype:** …
- `[FONTE PENDENTE]`: lacunas honestas.

E o **loop de governança:** *como isto alimenta o Flywheel/MoR ou a governança?*
Sugere o artefato (card Pipefy, registro SoR de-identificado, ADR candidato).

---

## 4. Executor

O **executor** deste método é a skill `mc-strategic-intelligence` (research →
NotebookLM → Brief). Este documento é o **método** (fonte da verdade do *como*);
a skill é o *como-rodar*. Não duplicar lógica: a skill referencia este método.

**Alvo inicial:** o cluster prioritário do Grid (§2 do MC-INFRA-NotebookLM-Grid)
— ~39 cadernos IA/Claude/Code/Harness/Método. Começo sugerido: `Maestros da IA`
(503b72ad) — o pedido original que abriu esta trilha.

---

*MC-METODO-EngenhariaReversaMC-NotebookLM v0.1 · 2026-06-09 · mesa de trabalho ·
D > C > V · Proof-First · Firewall OAB/LGPD. Candidato a refino + selagem no Vault.*
