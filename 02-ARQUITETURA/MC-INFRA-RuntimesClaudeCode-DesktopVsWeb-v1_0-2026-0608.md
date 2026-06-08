---
codigo: MC-INFRA-RuntimesClaudeCode-DesktopVsWeb
versao: v1.0
data: 2026-06-08
autor: Code TALÃO (sessão web · branch claude/quirky-euler-eZHHG)
estado: MESA DE TRABALHO (Cérebro 1 · ADR-011) — NÃO selado no Vault
rito: R1 (operacional · infra/tooling, sem OAB/LGPD-PII de cliente)
proof_first: recibos empíricos coletados na sessão (ver §4)
tags: [infra, claude-code, mcp, notebooklm, runtime, firewall-lgpd]
---

# Mapa de Runtimes Claude Code — Desktop (local) × Web (nuvem)

> **Por que esta nota existe:** numa sessão (2026-06-08), o NotebookLM foi
> acessado por MCP numa guia Claude Code **Desktop**, mas a guia Claude Code
> **Web** não enxergava o mesmo MCP. Isso gerou a dúvida "tem lá, por que não
> tem aqui?". A resposta é arquitetural, não bug. Documentado para não reabrir.

---

## 1. A regra-mãe (Teste Zilda-STF)

**"Claude Code" é a mesma marca, mas roda em duas máquinas diferentes — e cada
máquina tem o seu próprio molho de ferramentas. O que está plugado numa não
aparece magicamente na outra."**

| | Claude Code **Desktop** | Claude Code **Web** |
|---|---|---|
| Onde executa | Sua máquina (Windows do operador) | Container Linux efêmero na nuvem Anthropic |
| Filesystem | `C:\Users\...`, `G:\Meu Drive\...` | `/home/user/meu-cumpadre` (clone do repo) |
| Config de MCP | Local: `C:\Users\...\AppData\Roaming\Claude\` | Ambiente remoto (env do Code na web) |
| MCP `notebooklm` | ✅ Presente (processo `node` local + auth Google na sessão) | ❌ Ausente |
| Rede | A rede do seu PC (alcança Google/NotebookLM) | Network policy do ambiente (restritiva — ver §4) |
| Ciclo de vida | Persistente (sua máquina) | Efêmero (some ao encerrar; só sobrevive o que foi commitado/push) |
| Forte em | NotebookLM, Google Drive, ferramentas locais | Git, Vault, push, CI — o que mora no repositório |

**Conceito-chave:** **MCP local é por-máquina.** Um MCP server configurado no
Claude Desktop é um processo que roda *naquela* máquina, lê *aqueles* caminhos e
usa *aquela* sessão de login. O Code Web roda em outro computador (nuvem) e lê
outra config — por isso **não herda** os MCP locais do Desktop.

---

## 2. Divisão de trabalho recomendada (a eficiente)

- 🖥️ **Desktop = NotebookLM / Google Drive / ferramentas locais.** Tem as "mãos"
  locais (auth Google na sessão, rede do PC). É onde a engenharia reversa de
  intel no NotebookLM acontece.
- ☁️ **Web (esta sessão) = Git / Vault / push / CI.** É onde se aterra o
  conhecimento no repositório, sob gate ADR-011.

**Fluxo-padrão:** Desktop garimpa o NotebookLM → o destilado é colado na sessão
Web → Web escreve/comita no repo (mesa de trabalho → gate → Vault). Cada runtime
faz o que já é forte; não se força o Web a ter o que é local.

---

## 3. "Dá para colocar o MCP NotebookLM no Code Web?" — sim, com 3 condições

Tecnicamente possível, mas **a condição nº1 é o muro neste ambiente:**

1. 🔴 **Rede liberada para o Google** — hoje o container devolve **HTTP 403** em
   `notebooklm.google.com` e `google.com` (network policy restritiva). Só muda
   **recriando o ambiente web com uma política de rede mais permissiva**
   (escolhida na criação do environment — ver docs do Claude Code na web).
   Sem isso, o resto é inútil.
2. 🟡 **Um MCP server de NotebookLM** plugado via `.mcp.json` no repo ou na
   config do ambiente remoto. (Atenção: **não** é o `notebooklm-py` CLI — esse
   não tem modo MCP/server; o "notebooklm" do Desktop é um server à parte.)
3. 🟡 **Auth Google como secret headless** — exportar o `storage_state.json` da
   máquina e injetar como secret do ambiente (`NOTEBOOKLM_AUTH_JSON`). Cookie
   expira → manutenção periódica de re-login.

**Veredito de custo-benefício:** para trabalho **interativo, não vale a pena** —
replicaria, com manutenção de cookie + rede aberta, o que o Desktop já faz de
graça. **Só vale** para rodar intel do NotebookLM de forma **desatendida/agendada
na nuvem** (sweeps sem o PC ligado).

---

## 4. Recibos empíricos (Proof-First · coletados nesta sessão Web)

| # | Teste | Resultado | O que prova |
|---|---|---|---|
| 1 | `ToolSearch "+notebooklm"` (exige "notebooklm" no nome do tool) | `No matching deferred tools found` | ✅ Nenhum `mcp__notebooklm__*` no Code Web |
| 2 | Lista de MCP da sessão Web | ClickUp, CourtListener, Docusign, Gamma, Google Drive, Legal Data Hunter, Supabase, github, n8n | ✅ NotebookLM não está entre eles |
| 3 | `notebooklm --help \| grep mcp` (CLI instalada via pip nesta sessão) | sem subcomando server | ✅ `notebooklm-py` é CLI, não MCP server |
| 4 | `curl notebooklm.google.com` (egress) | **HTTP 403** em ~0.27s | ✅ Rede restritiva bloqueia Google (muro nº1) |
| 5 | `curl google.com` (egress) | **HTTP 403** | ✅ Confirma o bloqueio de domínio Google |
| 6 | Print do Desktop (Servidores MCP **locais**) | args apontam `C:\Users\...\AppData\Roaming\Claude\...` e `G:\Meu Drive\...` | ✅ MCP do Desktop é local da máquina |

> A CLI `notebooklm-py` (v0.7.1) chega a instalar no container, mas `auth check`
> falha: os cookies Google vivem na máquina local, não na nuvem. Logo, mesmo o
> caminho-CLI esbarra na mesma auth + (agora também) no muro de rede.

---

## 5. Firewall LGPD (sempre vale, independente do runtime)

NotebookLM = **Google US**, fora do perímetro soberano (Llama BR). **Nunca**
subir CPF/NB/CID/CNIS/senha gov.br/PII não-anonimizada — em Desktop *ou* Web.
Intel pública/método de-identificado apenas. O `storage_state.json` é credencial
Google sensível: se um dia virar secret de ambiente, **jamais commitar no repo**.

---

*MC-INFRA-RuntimesClaudeCode-DesktopVsWeb v1.0 · 2026-06-08 · mesa de trabalho ·
D > C > V · Proof-First. Candidato a selagem no Vault sob "aprovado para vault"
(ADR-011) se o Founder quiser canonizar.*
