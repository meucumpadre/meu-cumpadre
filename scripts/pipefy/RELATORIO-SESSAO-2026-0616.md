# Relatório de Sessão — Integração Pipefy + OpenSquad Dashboard

> **Projeto:** Meu Cumpadre
> **Data:** 2026-06-16
> **Branch:** `claude/eloquent-fermat-mMuQq`
> **Operador:** Beto (Gilberto)
> **Escopo:** Criação e depuração de script Python para criar cards no Pipefy via API GraphQL; reestilização do Pipe como Dashboard Visual do OpenSquad.

---

## 1. Objetivo Inicial

Pedido do usuário:

> "Use o Filesystem MCP para escrever um script em Python que se conecta à API GraphQL do Pipefy usando o meu Token. Esse script precisa ler o Pipe 'MEU CUMPADRE' e criar um novo card na fase de Ingestão de Narrativa toda vez que eu rodar o comando."

---

## 2. Decisões de Design (via perguntas ao usuário)

| Tema | Decisão |
|---|---|
| **Token** | Fornecido via **variável de ambiente** `PIPEFY_TOKEN` (mais seguro, nunca hardcoded) |
| **Campos do card** | Apenas **título com timestamp** — campos preenchidos depois no Pipefy |
| **Caminho do script** | `scripts/pipefy/` (pasta dedicada, separada do backend NestJS) |

---

## 3. Implementação

Criado o arquivo **`scripts/pipefy/criar_card.py`**:

- Sem dependências externas (usa apenas a stdlib do Python 3.10+: `urllib`, `json`, `os`, `datetime`).
- Lê `PIPEFY_TOKEN` e `PIPEFY_PIPE_ID` do ambiente.
- Localiza a fase de entrada pelo nome dentro do pipe.
- Cria card com título `Narrativa AAAA-MM-DD HH:MM`.
- Imprime ID, título e URL do card criado.
- `.gitignore` já cobre `*.env` — token nunca entra no repositório.

---

## 4. Diário de Depuração (a jornada real)

A primeira execução não funcionou de primeira. Cada erro foi diagnosticado e corrigido. Sequência completa:

### Erro 1 — Arquivo não encontrado
```
can't open file '...criar_card.py': [Errno 2] No such file or directory
```
**Causa:** o script estava em outra branch.
**Correção:** `git fetch origin` + `git checkout claude/eloquent-fermat-mMuQq`.

### Erro 2 — Variável de ambiente não definida (PowerShell vs CMD)
```
[ERRO] Variável de ambiente PIPEFY_TOKEN não definida.
```
**Causa:** sintaxe do PowerShell difere do CMD. Migramos para CMD por simplicidade, depois voltamos ao PowerShell.
**Correção:** CMD usa `set VAR=valor`; PowerShell usa `$env:VAR='valor'`.

### Erro 3 — `Field 'pipes' doesn't exist on type 'User'`
**Causa:** a query `me { pipes }` foi removida do schema atual da API Pipefy.
**Correção (1ª tentativa):** mudei para `me { organizations { pipes } }`.

### Erro 4 — `Field 'organizations' doesn't exist on type 'User'`
**Causa:** `me.organizations` também não existe.
**Ação:** em vez de chutar uma terceira vez, **consultei a documentação oficial** da API (api-docs.pipefy.com e o schema público no GitHub `pipefy/doc-api-general`).
**Aprendizado:** a query raiz `organizations` exige IDs de organização. O caminho determinístico e documentado é `pipe(id:)`.
**Correção definitiva:** o script passou a exigir `PIPEFY_PIPE_ID` (obtido na URL do pipe) e usar a query `pipe(id:)`.

### Erro 5 — `HTTP 401: Unauthorized` (primeira vez)
**Causa:** investigação via `echo %PIPEFY_TOKEN%` revelou que o valor do token continha texto colado a mais no final (`...EulPmfQset PIPEFY_PIPE_ID=306835133`) — dois comandos grudaram numa linha só ao colar no CMD.
**Correção no script:** sanitização automática do token (`.strip().strip('"').strip("'")`) + mensagem de erro 401 detalhada (aspas, token cortado, expiração).
**Correção de uso:** colar um comando por vez, com Enter entre eles.

### Erro 6 — `HTTP 401` (segunda vez)
**Causa:** token possivelmente expirado/revogado.
**Correção:** geração de novo token em `app.pipefy.com/tokens`.

### Erro 7 — `Fase "Ingestão de Narrativa" não encontrada`
```
Fases disponíveis: "FASE INICIAL", "CONCEPÇÃO", "PLANEJAMENTO",
"EXECUÇÃO", "ENCERRAMENTO", "ANÁLISE DE RESULTADOS", "CONCLUÍDO"
```
**Causa:** a fase com aquele nome não existia — o pipe estava com um template genérico.
**Decisão estratégica:** ver Seção 5.

### Erro 8 — PowerShell interpretando o token como comandos
```
'hi3_cuMuEcSQ' não é reconhecido como nome de cmdlet...
```
**Causa:** aspas duplas no PowerShell permitem interpolação/interpretação de caracteres especiais do token.
**Correção:** usar **aspas simples** `'...'` que travam qualquer interpretação.

### ✅ Sucesso final
```
✓ Card criado com sucesso!
  ID    : 1365929462
  Título: Narrativa 2026-06-05 07:09
  URL   : https://app.pipefy.com/pipes/306835133#cards/1365929462
```

---

## 5. Decisão Estratégica — Reestilização do Pipe

Durante a depuração do Erro 7, surgiu a discussão sobre o **propósito** do Pipe. O usuário esclareceu a visão:

> "E0 ao E7 deixa no ClickUp — plano operacional. No Pipefy quero cuidar da gestão de projeto — plano de engenharia C-level. O Pipefy não será usado como um gerenciador de tarefas tradicional para humanos. Ele funcionará como o **Dashboard Visual do OpenSquad**, onde cada fase do Pipe representa um **estado da máquina de agentes**, e os cartões são movidos de forma automatizada por APIs e Webhooks disparados diretamente pelo Claude OS e pelo GitHub."

### Separação de domínios (definida nesta sessão)

| Plataforma | Domínio | Conteúdo |
|---|---|---|
| **ClickUp** | Plano Operacional | Jornada E0-E7 (casos de cidadãos) |
| **Pipefy** | Plano de Engenharia C-Level | Dashboard Visual do OpenSquad (máquina de estados de agentes) |

### Máquina de Estados implementada no Pipe (fases finais)

```
INGESTÃO → DIAGNÓSTICO → BLUEPRINT → EXECUÇÃO → GATE → SELAGEM → DIAMANTE
```

| Fase | Significado | Quem move o card |
|---|---|---|
| **INGESTÃO** | Entrada da demanda | Claude Code (script atual) |
| **DIAGNÓSTICO** | Research/análise feita | Claude |
| **BLUEPRINT** | Spec/ADR selada no Vault | Claude |
| **EXECUÇÃO** | PR aberto | GitHub webhook |
| **GATE** | PR em review | GitHub webhook |
| **SELAGEM** | Merge em main | GitHub webhook |
| **DIAMANTE** | Entregue e documentado | Arquivo |

> Cards movidos automaticamente por API/Webhooks (Claude OS + GitHub) — não manualmente por humanos.

---

## 6. Estado Operacional Final

- **Script:** `scripts/pipefy/criar_card.py` — cria card na fase **INGESTÃO**.
- **Pipe:** `306835133` (MEU CUMPADRE).
- **Fases ativas:** `INGESTÃO → DIAGNÓSTICO → BLUEPRINT → EXECUÇÃO → GATE → SELAGEM → DIAMANTE`.

### Comandos para rodar (PowerShell)

```powershell
cd C:\Users\Beto\meu-cumpadre
$env:PIPEFY_TOKEN='seu_token'
$env:PIPEFY_PIPE_ID='306835133'
python scripts\pipefy\criar_card.py
```

> **Atenção PowerShell:** sempre **aspas simples** `'...'` no token (aspas duplas quebram).
> As variáveis de ambiente somem ao fechar a janela — redefinir a cada sessão.

---

## 7. Lições Aprendidas

1. **Não chutar schema de API** — após dois erros de adivinhação, consultar a documentação oficial foi o que resolveu de forma definitiva.
2. **Sintaxe de shell importa** — CMD (`set VAR=valor`) ≠ PowerShell (`$env:VAR='valor'`). Aspas simples no PowerShell para valores com caracteres especiais.
3. **Colar comandos um a um** — colar bloco no terminal pode grudar comandos e contaminar variáveis.
4. **Defesa no código** — sanitizar entradas de ambiente e dar mensagens de erro acionáveis economiza muito tempo de depuração.
5. **Separação de domínios clara** — ClickUp para operação (E0-E7), Pipefy para engenharia (máquina de estados OpenSquad).

---

## 8. Próximos Passos Sugeridos (em aberto)

1. **Webhook GitHub → Pipefy** — mover card para EXECUÇÃO ao abrir PR, GATE ao revisar, SELAGEM ao merge.
2. **Script de transição de fase** — mover card entre fases via API (ex: BLUEPRINT → EXECUÇÃO ao selar ADR).
3. **Campos no card** — título da demanda, link do PR, responsável.

### Item pendente fora deste escopo

- Exploração da pasta `GHS - Gestão Híbrida de Software` (Agostinho Risso) no Google Drive local (`G:\`). **Bloqueado:** o ambiente de execução é um container remoto na nuvem (Linux) e não enxerga o disco `G:` da máquina Windows. Conteúdo precisa ser colado na conversa ou subido ao repositório.

---

## 9. Commits desta Sessão

```
585cbf7  fix(pipefy): atualiza fase para INGESTÃO (OpenSquad Dashboard)
ed171ec  fix(pipefy): sanitiza token/pipe_id e melhora diagnóstico de 401
ef594c6  fix(pipefy): usa pipe(id:) direto via PIPEFY_PIPE_ID
38962bf  fix(pipefy): corrige query GraphQL para me.organizations.pipes
1a75eed  feat(pipefy): script Python para criar card em Ingestão de Narrativa
```

---

*Relatório gerado automaticamente a partir do inteiro teor da conversa.*
