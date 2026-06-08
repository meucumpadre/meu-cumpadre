---
tipo: MISSION-BRIEF
codigo: MB-061
versao: v1.0
data: 2026-05-24
status: ATIVO (autorizado pelo founder · pendente execução Code DELL pós-MB-058 + MB-059)
gerado_por: Claude Opus 4.7 Cérebro C3.1 (Cofounder Intelectual · esta guia) × Alessandro de Souza Neves (Founder/CEO)
executor: Beto · Code DELL (claude.ai/code · automatic mode · MCP local + git/PowerShell)
operacao: Setup git inicial Vault MC sob MC-ADR-020 v1.0 PROVISIONAL · Alternativa C separate-git-dir · remote GitHub privado asnccb/meu-cumpadre
duracao_estimada: 45-60 minutos (depende velocidade upload GitHub do push inicial)
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
ancora-biblica: Provérbios 31:8 — "Abre a tua boca a favor do mudo."
relaciona:
  - "MC-ADR-020-Git-como-Substrato-Permanente-do-Vault-MC-v1_0-PROVISIONAL-2026-0524.md (esta MB executa a ADR)"
  - "OMEGA-ADR-Git-como-Substrato-Permanente-do-Vault-Omega-v1_0-2026-0519 (herança via #46)"
  - "MB-058 Housekeeping (persiste ADR-020 em 03-GOVERNANCA/adrs/ · pré-requisito)"
  - "MB-059 Project Voo CLR001 (deve estar concluída para git já capturar a estrutura completa)"
analoga-arquiteturalmente: "PS-MERGE-001 Ω (2026-05-19 · 4 dias 22 commits 0 corrupções)"
mb-anterior: MB-059 Configuração Inicial Project Voo CLR001
mb-proximo: MB-062 (provavelmente primeira branch feature MB-057 Auditoria Estrutural sob git operacional)
remote-github: "https://github.com/asnccb/meu-cumpadre.git (privado · owner asnccb)"
git-dir-separado: "C:\\Users\\<usuario-beto>\\git\\mc-vault\\ (Beto define caminho local definitivo)"
gate-critico: "MB-058 + MB-059 DEVEM estar concluídas antes desta MB-061 executar"
---

# MB-061 · SETUP GIT INICIAL VAULT MC

**Mission Brief de execução prática da MC-ADR-020 v1.0 PROVISIONAL · Alternativa C separate-git-dir · remote GitHub privado · cunhagem inaugural do substrato git permanente do Vault MC**

---

## §0 · ATIVAÇÃO IDENTIDADE EXECUTOR

Beto · Code DELL · operador Cérebro 2 (Vault Obsidian) com MCP local + PowerShell + git instalado · sob Princípio #16 cofounder 20x cross-cérebro confirmado empiricamente em MB-055 v1.1 + MB-058 + MB-059.

Esta MB **inaugura nova capacidade institucional MC:** git operacional no Vault. Análoga arquiteturalmente à PS-MERGE-001 que Ω executou em 2026-05-19 com 4 dias de validação · 22 commits · 0 corrupções.

**Princípio #16 cofounder 20x reforçado:** founder NÃO micromanage cada `git commit` daqui pra frente. Tu opera commits canônicos automatic mode (Q3=A da decisão founder 24/05). Founder valida estratégicos (cunhagens fundacionais · merges de feature branches).

**Founder:** Alessandro de Souza Neves
**Cofounder C3.1:** Claude Opus 4.7 · esta sessão (em encerramento institucional após esta MB)
**Sister Anciã:** ativa standby (não acionada nesta cunhagem · razão documentada em ADR-020 §13)
**Sister 3.2 Design:** ativa standby
**Tu Beto Code DELL:** executor primário desta MB · operador permanente de git daqui em diante

---

## §1 · CONTEXTO DA OPERAÇÃO

ADR-020 v1.0 PROVISIONAL cunhada em 24/05/2026 endereça **Anomalia A2** (Vault MC sem `.git`) detectada por ti mesmo no sweep MB-055 v1.1 ERRATA. Razões institucionais detalhadas na §0 e §14 da ADR-020.

**Tu agora executa o que a ADR-020 decidiu.**

**Sequência operacional desta janela founder:**

| MB | Status | Ordem | Função |
|---|---|---|---|
| MB-058 | ⚠️ Pendente | 1º | Housekeeping desta guia · persiste ADR-020 + MC-ACI v2.0 + Princípio #48 + Memorial + 3 artefatos Voo CLR001 + 3 artefatos Sister Anciã |
| MB-059 | ⚠️ Pendente | 2º | Cunhagem Project Voo CLR001 · pacote .zip · persistência Vault |
| **MB-061** | ⚠️ Pendente | **3º** | **Setup git inicial Vault MC** · esta MB |

**MB-061 só executa DEPOIS de MB-058 + MB-059 concluídas.** Razão: git deve capturar Vault MC completo (incluindo ADR-020 + MC-ACI v2.0 + Project Voo CLR001 + Sister Anciã todos persistidos) no primeiro commit institucional. Commit inaugural com Vault parcial seria errata histórica permanente.

---

## §2 · PRÉ-REQUISITOS · VALIDAR ANTES DE EXECUTAR

### §2.1 · Pré-requisitos MB anteriores

```powershell
$vault = "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"

$prerequisitos_mb058 = @(
    "$vault\02-ARQUITETURA\cognitiva\MC-ARQUITETURA-Cognitiva-Integrada-v2_0-PROVISIONAL-2026-0523.md",
    "$vault\03-GOVERNANCA\patches\MC-PRINCIPIO-48-VerticaisOperacionais-vs-DimensoesTransversais-v0_1-2026-0523.md",
    "$vault\03-GOVERNANCA\adrs\MC-ADR-020-Git-como-Substrato-Permanente-do-Vault-MC-v1_0-PROVISIONAL-2026-0524.md",
    "$vault\05-MEMORIAL\MC-MEMORIAL-Cunhagem-Sessao-22-24mai-v1_0-2026-0524.md"
)

$prerequisitos_mb059 = @(
    "$vault\03-GOVERNANCA\instancias-ia\voo-clr001\MC-SYSTEM-PROMPT-VooCLR001-v1_0-2026-0524.md",
    "$vault\03-GOVERNANCA\instancias-ia\voo-clr001\MC-KIT-VooCLR001-FontesContexto-v1_0-2026-0524.md",
    "$vault\03-GOVERNANCA\instancias-ia\voo-clr001\MC-MB-059-VooCLR001-Configuracao-Inicial-v1_0-2026-0524.md"
)

$prerequisitos_sister = @(
    "$vault\03-GOVERNANCA\instancias-ia\sister-ancia\MC-SYSTEM-PROMPT-SisterAncia-v1_0-2026-0524.md",
    "$vault\03-GOVERNANCA\instancias-ia\sister-ancia\MC-KIT-SisterAncia-FontesContexto-v1_0-2026-0524.md",
    "$vault\03-GOVERNANCA\instancias-ia\sister-ancia\MC-MB-055-SisterAncia-Configuracao-Inicial-v1_1-2026-0524.md"
)

$todos = $prerequisitos_mb058 + $prerequisitos_mb059 + $prerequisitos_sister
$missing = @()

foreach ($file in $todos) {
    if (-not (Test-Path $file)) {
        $missing += $file
        Write-Host "❌ PRÉ-REQUISITO FALTANDO: $file" -ForegroundColor Red
    }
}

if ($missing.Count -gt 0) {
    Write-Host ""
    Write-Host "ABORTAR MB-061 · executar MB-058 e MB-059 antes" -ForegroundColor Red
    exit 1
} else {
    Write-Host "✅ Todos os pré-requisitos MB-058 + MB-059 atendidos" -ForegroundColor Green
}
```

### §2.2 · Pré-requisitos ambiente

```powershell
# Validar git instalado
$git_versao = git --version
Write-Host "Git versão: $git_versao"
# Esperado: git version 2.40+ ou superior

# Validar PowerShell 5.1+ ou 7+
$psversao = $PSVersionTable.PSVersion
Write-Host "PowerShell versão: $psversao"

# Validar autenticação GitHub (PAT ou GitHub CLI)
$gh_auth = git config --global --get user.email
if (-not $gh_auth) {
    Write-Host "⚠️ git user.email não configurado globalmente · configurar localmente no passo 3"
}

# Validar credenciais GitHub
git ls-remote https://github.com/asnccb/meu-cumpadre.git 2>&1 | Select-Object -First 3
# Se pedir credenciais · founder fornece PAT (Personal Access Token) com scope `repo` privado
```

**Se autenticação GitHub não funcionar:** Beto sinaliza founder · founder gera PAT em https://github.com/settings/tokens com scope `repo` privado · cola via `git config --global credential.helper manager` ou usa GitHub CLI `gh auth login`.

---

## §3 · TAREFAS NUMERADAS · 13 FASES SEQUENCIAIS

### Fase 1 · Backup integral Vault MC (#1 + #4)

```powershell
$vault = "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"
$timestamp = Get-Date -Format 'yyyyMMdd-HHmm'
$backup_root = "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\BACKUPS"
$backup = "$backup_root\BACKUP-pre-ADR-020-MB-061-$timestamp"

New-Item -ItemType Directory -Force -Path $backup_root
Copy-Item -Path $vault -Destination $backup -Recurse -Force

$qtd_backup = (Get-ChildItem $backup -Recurse -File).Count
$tamanho_backup = (Get-ChildItem $backup -Recurse -File | Measure-Object Length -Sum).Sum / 1MB

Write-Host "✅ Backup pre-MB-061: $backup" -ForegroundColor Green
Write-Host "   Arquivos: $qtd_backup"
Write-Host "   Tamanho: $([math]::Round($tamanho_backup, 2)) MB"
```

**Critério sucesso:** backup íntegro · Copy-Item (não Move-Item) · originais preservados.

---

### Fase 2 · Inventário pré-init + Hash baseline (#36)

```powershell
$qtd_total = (Get-ChildItem $vault -Recurse -File).Count
$qtd_md = (Get-ChildItem $vault -Recurse -File -Filter "*.md").Count
$qtd_bin = (Get-ChildItem $vault -Recurse -File | Where-Object {
    $_.Extension -in @('.png','.jpg','.pdf','.docx','.zip','.mp3','.mp4')
}).Count

Write-Host "Inventário pré-init:"
Write-Host "  Total arquivos: $qtd_total"
Write-Host "  Arquivos .md: $qtd_md (esperado: 485+ por userMemories · pós-MB-058 + MB-059 deve estar maior)"
Write-Host "  Binários: $qtd_bin"

# Hash baseline arquivos canônicos críticos
$canonicos_criticos = @(
    "$vault\CLAUDE.md",
    "$vault\03-GOVERNANCA\principios\_INDEX.md",
    "$vault\03-GOVERNANCA\adrs\MC-ADR-020-Git-como-Substrato-Permanente-do-Vault-MC-v1_0-PROVISIONAL-2026-0524.md",
    "$vault\02-ARQUITETURA\cognitiva\MC-ARQUITETURA-Cognitiva-Integrada-v2_0-PROVISIONAL-2026-0523.md",
    "$vault\03-GOVERNANCA\instancias-ia\sister-ancia\MC-SYSTEM-PROMPT-SisterAncia-v1_0-2026-0524.md",
    "$vault\03-GOVERNANCA\instancias-ia\voo-clr001\MC-SYSTEM-PROMPT-VooCLR001-v1_0-2026-0524.md"
)

$baseline = @{}
foreach ($file in $canonicos_criticos) {
    if (Test-Path $file) {
        $hash = (Get-FileHash $file -Algorithm SHA256).Hash
        $baseline[$file] = $hash
        Write-Host "  Hash baseline: $(Split-Path $file -Leaf) = $($hash.Substring(0,16))..."
    }
}

# Persistir baseline JSON fora do Vault
$baseline_path = "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\hash-baseline-pre-git-init-$timestamp.json"
$baseline | ConvertTo-Json -Depth 3 | Out-File $baseline_path -Encoding UTF8
Write-Host "✅ Baseline persistido: $baseline_path" -ForegroundColor Green
```

**Critério sucesso:** mínimo 6 hashes baseline registrados (canônicos críticos) · arquivo JSON persistido fora do Vault.

---

### Fase 3 · Criar `.git/` separado fora do Drive (Alternativa C)

```powershell
# Path do .git/ real · fora do Drive · em pasta local Beto
$git_dir = "$env:USERPROFILE\git\mc-vault"

if (Test-Path $git_dir) {
    Write-Host "⚠️ $git_dir já existe · ABORTAR ou confirmar com founder" -ForegroundColor Yellow
    # Se for re-execução · founder confirma renomeação do antigo
    # Renomear antigo para $git_dir-backup-$timestamp e criar novo limpo
} else {
    New-Item -ItemType Directory -Force -Path $git_dir
    Write-Host "✅ Diretório git separado criado: $git_dir" -ForegroundColor Green
}
```

**Critério sucesso:** pasta `$env:USERPROFILE\git\mc-vault\` criada fora do Drive.

---

### Fase 4 · `git init` com separate-git-dir

```powershell
Set-Location $vault
git init --separate-git-dir=$git_dir

# Validar arquivo .git criado (ponteiro · não pasta)
$git_ponteiro = "$vault\.git"
if (Test-Path $git_ponteiro -PathType Leaf) {
    $conteudo = Get-Content $git_ponteiro
    if ($conteudo -match "gitdir:") {
        Write-Host "✅ .git ponteiro válido (Alternativa C): $conteudo" -ForegroundColor Green
    } else {
        Write-Host "❌ .git existe mas não tem gitdir: · falhou" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ .git ponteiro não criado · ABORTAR" -ForegroundColor Red
    exit 1
}

# Validar .git/ real NÃO está no Drive
if (Test-Path "$vault\.git\objects" -PathType Container) {
    Write-Host "❌ FALHA: .git/ real DENTRO do Drive (Alternativa A acidental)" -ForegroundColor Red
    exit 1
}

# Validar .git/ real ESTÁ fora do Drive
if (Test-Path "$git_dir\HEAD") {
    Write-Host "✅ .git/ real fora do Drive (Alternativa C correta)" -ForegroundColor Green
}
```

**Critério sucesso:** Alternativa C validada · `.git` ponteiro no Drive · `.git/` real fora do Drive.

---

### Fase 5 · Configurar core (#36 + git user)

```powershell
# Princípio #36 · core.autocrlf desabilitado
git config core.autocrlf false
git config core.fileMode false

# Identidade institucional Beto Code DELL
git config user.name "Beto Code DELL"
git config user.email "beto.codedell@meucumpadre.com.br"  # placeholder · founder valida

# Settings extras
git config init.defaultBranch main
git config pull.ff only  # fast-forward only · evita merge accidental
git config commit.gpgsign false  # GPG sign não-obrigatório v1.0 · v1.1 pode revisitar

Write-Host "Configurações git:"
git config --list --local
```

**Critério sucesso:** `core.autocrlf=false` confirmado · identidade configurada.

---

### Fase 6 · Criar `.gitattributes` (ADR-020 §3)

```powershell
$gitattributes = @"
# Vault MC — .gitattributes
# Cunhado em 2026-05-24 sob MC-ADR-020 v1.0 PROVISIONAL
# Garante hashes SHA-256 reproduzíveis · Princípio #36
# Herda PS-MERGE-001 Ω (descoberta empírica core.autocrlf=true viola hashes)

# Default · todo texto LF
* text=auto eol=lf

# Markdown canônico (corpo do Vault)
*.md  text eol=lf

# Frontmatter YAML
*.yaml text eol=lf
*.yml  text eol=lf

# Scripts PowerShell (Beto Code DELL)
*.ps1 text eol=lf

# Dados estruturados
*.csv  text eol=lf
*.json text eol=lf
*.toml text eol=lf

# Binários (não-text · sem conversão EOL)
*.png  binary
*.jpg  binary
*.jpeg binary
*.gif  binary
*.webp binary
*.svg  binary
*.pdf  binary
*.docx binary
*.xlsx binary
*.pptx binary
*.zip  binary
*.mp3  binary
*.mp4  binary
*.wav  binary
*.ogg  binary
"@

# Escrever UTF-8 sem BOM (feedback_ps51_utf8)
[System.IO.File]::WriteAllText("$vault\.gitattributes", $gitattributes, [System.Text.UTF8Encoding]::new($false))

Write-Host "✅ .gitattributes criado UTF-8 sem BOM" -ForegroundColor Green

# Validar
git check-attr -a .gitattributes | Select-Object -First 5
git check-attr -a CLAUDE.md | Select-Object -First 5
# Esperado: text=auto + eol=lf
```

**Critério sucesso:** `.gitattributes` criado UTF-8 sem BOM · `git check-attr -a CLAUDE.md` retorna `text=auto eol=lf`.

---

### Fase 7 · Criar `.gitignore` (ADR-020 §4)

```powershell
$gitignore = @"
# Vault MC — .gitignore
# Cunhado em 2026-05-24 sob MC-ADR-020 v1.0 PROVISIONAL
# LGPD + Princípio #36 + IP MC honrados

# Obsidian metadados locais (não-canônicos)
.obsidian/workspace
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.obsidian/cache
.obsidian/graph.json

# Mas commita configurações canônicas Obsidian
!.obsidian/app.json
!.obsidian/appearance.json
!.obsidian/community-plugins.json
!.obsidian/core-plugins.json

# Trash Obsidian
.trash/

# Sistema operacional
.DS_Store
Thumbs.db
desktop.ini

# Editor temporários
*.swp
*.swo
*~
.~lock.*

# Drive lock files
*.lock

# Buffer cofounder · arquivos voláteis
_VOLATIL/
_BUFFER-*
**/transit/*

# PII Vermelha · NUNCA commitar (LGPD + Hook 0 gov.br)
**/PII-VERMELHA/
**/_PRIVADO-CLIENTE/
**/casos/**/CNIS-*.pdf
**/casos/**/RG-*.pdf
**/casos/**/CPF-fisico-*.pdf
**/casos/**/CIN-*.pdf
**/casos/**/laudo-medico-*.pdf

# Credenciais (Bitwarden é fonte canônica · git NUNCA)
*.env
*.env.*
**/credentials/
**/keys/
*.key
*.pem
secrets.yaml
"@

[System.IO.File]::WriteAllText("$vault\.gitignore", $gitignore, [System.Text.UTF8Encoding]::new($false))

Write-Host "✅ .gitignore criado UTF-8 sem BOM" -ForegroundColor Green

# Validar - verificar se PII Vermelha hipotética seria ignorada
git check-ignore -v "casos/clr001/CNIS-claudia-123.pdf" 2>$null
git check-ignore -v "_PRIVADO-CLIENTE/exemplo.md" 2>$null
```

**Critério sucesso:** `.gitignore` criado UTF-8 sem BOM · `git check-ignore` confirma PII Vermelha hipotética seria ignorada.

---

### Fase 8 · Primeiro `git add` + `git commit` (substrato)

```powershell
# Adicionar APENAS .gitattributes e .gitignore primeiro
git add .gitattributes .gitignore

# Verificar staged
git status

# Commit substrato
git commit -m @"
chore: init substrato git Vault MC sob ADR-020 v1.0 PROVISIONAL

- .gitattributes obrigatório desde D-1 (#36 hash reprodutível)
- .gitignore com PII Vermelha blindada (LGPD)
- Alternativa C separate-git-dir confirmada
- Herdado de OMEGA-ADR-Git-Substrato v1.0 SELADO via #46
- Validação empírica Ω herdada (4 dias · 22 commits · 0 corrupções)

Refs: MC-ADR-020-Git-como-Substrato-Permanente-do-Vault-MC-v1_0
Princípios: #1b #4 #15 #16 #34 #36 #46
"@

# Tag estado inicial
git tag estado-inicial-vault-mc-2026-0524 -m "Estado inicial Vault MC pré-add canônicos. Rollback máximo institucional honrado."

Write-Host "✅ Commit substrato cunhado + tag estado-inicial-vault-mc-2026-0524" -ForegroundColor Green
git log --oneline -5
```

**Critério sucesso:** primeiro commit feito · tag estado-inicial criada.

---

### Fase 9 · Validação hash baseline pós-commit (#36)

```powershell
# Re-hashear arquivos canônicos críticos · comparar com baseline
$baseline_path = (Get-ChildItem "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\hash-baseline-pre-git-init-*.json" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$baseline = Get-Content $baseline_path | ConvertFrom-Json

$violacoes = 0
foreach ($prop in $baseline.PSObject.Properties) {
    $file = $prop.Name
    $hash_baseline = $prop.Value
    if (Test-Path $file) {
        $hash_atual = (Get-FileHash $file -Algorithm SHA256).Hash
        if ($hash_atual -eq $hash_baseline) {
            Write-Host "✅ HASH PRESERVADO: $(Split-Path $file -Leaf)" -ForegroundColor Green
        } else {
            Write-Host "❌ HASH VIOLADO: $(Split-Path $file -Leaf)" -ForegroundColor Red
            Write-Host "   Baseline: $($hash_baseline.Substring(0,16))..."
            Write-Host "   Atual:    $($hash_atual.Substring(0,16))..."
            $violacoes++
        }
    }
}

if ($violacoes -gt 0) {
    Write-Host ""
    Write-Host "❌ $violacoes VIOLAÇÕES Princípio #36 · ROLLBACK obrigatório" -ForegroundColor Red
    Write-Host "Provável causa: core.autocrlf não desabilitado ou .gitattributes não aplicou" -ForegroundColor Yellow
    # ROLLBACK
    git reset --hard
    Remove-Item -Recurse -Force $git_dir
    Remove-Item -Force "$vault\.git"
    Remove-Item -Force "$vault\.gitattributes"
    Remove-Item -Force "$vault\.gitignore"
    Write-Host "Rollback executado · ABORTAR MB-061 · sinalizar founder" -ForegroundColor Red
    exit 1
} else {
    Write-Host "✅ Princípio #36 honrado · todos os hashes preservados" -ForegroundColor Green
}
```

**Critério sucesso CRÍTICO:** 0 violações de hash. Se qualquer violação · rollback obrigatório.

---

### Fase 10 · `git add` canônicos institucionais (segundo commit)

```powershell
# Adicionar tudo (exceto o que .gitignore filtra)
git add .

# Validar status · verificar se nada de PII Vermelha entrou
$staged = git status --porcelain | Where-Object { $_ -match "^A" }
$qtd_staged = ($staged | Measure-Object).Count

Write-Host "Staged para commit inaugural: $qtd_staged arquivos"

# Sweep verificação · nenhum CNIS / RG / CPF físico entrou
$pii_check = git status --porcelain | Where-Object {
    $_ -match "CNIS-|RG-|CPF-fisico|CIN-|laudo-medico"
}
if ($pii_check) {
    Write-Host "❌ PII Vermelha detectada em staging · ABORTAR" -ForegroundColor Red
    git status
    exit 1
} else {
    Write-Host "✅ Sem PII Vermelha em staging (LGPD honrada)" -ForegroundColor Green
}

# Commit inaugural canônico
git commit -m @"
feat(canon): cunhagem inaugural Vault MC sob substrato git

485+ canônicos institucionais MC versionados sob MC-ADR-020 v1.0 PROVISIONAL.

Componentes capturados:
- 01-IDENTIDADE/ · marca · selos · identidade visual
- 02-ARQUITETURA/ · cognitiva (MC-ACI v2.0) · grimório · router-ethics
- 03-GOVERNANCA/ · ADRs · Princípios · Patches · RIPDs · Catálogos
- 03-GOVERNANCA/instancias-ia/sister-ancia/ · 3ª voz cognitiva
- 03-GOVERNANCA/instancias-ia/voo-clr001/ · Project operacional
- 04-OPERACAO/ · POPs · Casos · Indicadores · MBs
- 05-ESTRATEGIA/ · Manifestos · Conceitos · Políticas
- 06-COMUNICACAO/ · Relatórios

Anomalias A1-A6 endereçadas estruturalmente.

Refs:
- MC-ADR-020-Git-como-Substrato-Permanente-do-Vault-MC-v1_0
- OMEGA-ADR-Git-Substrato v1.0 SELADO (herdada #46)

Princípios invocados: #1 #1b #4 #15 #16 #34 #36 #46
"@

# Tag cunhagem inaugural
git tag cunhagem-inaugural-vault-mc-2026-0524 -m "Vault MC canônico cunhado em git. Substrato auditável institucionalizado. Quarteto cognitivo MC operacional."

Write-Host "✅ Commit inaugural canônico cunhado + tag cunhagem-inaugural-vault-mc-2026-0524" -ForegroundColor Green
git log --oneline -5
```

**Critério sucesso:** 2º commit canônico · 0 PII Vermelha em staging · tag inaugural criada.

---

### Fase 11 · Configurar remote GitHub + push inicial

```powershell
# Configurar remote (ADR-020 §1)
git remote add origin https://github.com/asnccb/meu-cumpadre.git

# Renomear branch para main (convenção moderna)
git branch -M main

# Validar remote
git remote -v
# Esperado:
#   origin  https://github.com/asnccb/meu-cumpadre.git (fetch)
#   origin  https://github.com/asnccb/meu-cumpadre.git (push)

# Push inicial · pode demorar (485+ .md primeira vez)
Write-Host "🚀 Iniciando push inicial · pode demorar 2-15 min dependendo conexão..." -ForegroundColor Cyan
git push -u origin main
git push --tags

Write-Host "✅ Push inicial completo" -ForegroundColor Green
```

**Critério sucesso:** push main + tags bem-sucedido · `https://github.com/asnccb/meu-cumpadre` mostra commits.

**Se falhar autenticação:** Beto sinaliza founder · founder cola PAT (Personal Access Token GitHub scope `repo`) · re-tenta.

---

### Fase 12 · Validações finais ADR-020 §12

```powershell
# Validação 1 (já feita Fase 9) · hashes preservados
# Validação 2 · .git ponteiro válido (já feita Fase 4)
# Validação 3 · .git/ real fora do Drive (já feita Fase 4)

# Validação 4 · remote configurado
Write-Host "Validação 4: remote"
git remote -v

# Validação 5 · push bem-sucedido (consulta GitHub)
Write-Host "Validação 5: refs no remote"
git ls-remote origin | Select-Object -First 5
# Esperado: refs/heads/main + refs/tags/estado-inicial-vault-mc-2026-0524 + refs/tags/cunhagem-inaugural-vault-mc-2026-0524

# Validação 6 · 24h depois · 0 conflitos Drive sync
Write-Host ""
Write-Host "⏰ Validação 6 (24h depois): rodar manualmente amanhã" -ForegroundColor Yellow
Write-Host "   git status · esperado: nothing to commit · clean tree"
Write-Host "   git log --oneline -5 · esperado: 2 commits intactos"
Write-Host "   Se Drive criou arquivos duplicados (.conflict ou .lock) · sinalizar founder"
```

**Critério sucesso:** 5 validações verdes · validação 6 agendada para 24h depois.

---

### Fase 13 · Reporte final cofounder C3.1

```markdown
# REPORTE MB-061 SETUP GIT INICIAL VAULT MC · BETO CODE DELL

Executado em: [timestamp]
Status geral: [SUCESSO / SUCESSO PARCIAL / FALHA / ROLLBACK]

## Pré-requisitos validados
- MB-058 concluída: [✅/❌]
- MB-059 concluída: [✅/❌]
- Git instalado: versão [X]
- PowerShell versão: [Y]
- Autenticação GitHub: [✅/❌ · método PAT/gh CLI]

## Fases executadas

| # | Fase | Status | Detalhe |
|---|---|---|---|
| 1 | Backup integral pre-MB-061 | [✅/❌] | Path: $backup · arquivos: N · MB |
| 2 | Inventário + hash baseline 6 canônicos críticos | [✅/❌] | Baseline JSON: $baseline_path |
| 3 | Criar .git separado fora Drive | [✅/❌] | Path: $env:USERPROFILE\git\mc-vault |
| 4 | git init --separate-git-dir | [✅/❌] | .git ponteiro + .git/ real validados |
| 5 | Configurar core (autocrlf false + user) | [✅/❌] | git config local |
| 6 | Criar .gitattributes UTF-8 sem BOM | [✅/❌] | git check-attr verde |
| 7 | Criar .gitignore UTF-8 sem BOM | [✅/❌] | PII Vermelha blindada |
| 8 | Primeiro commit substrato + tag estado-inicial | [✅/❌] | Commit SHA: [hash] |
| 9 | Validação hash baseline pós-commit | [✅/❌ CRÍTICO] | 0 violações Princípio #36 |
| 10 | Commit inaugural canônico + tag cunhagem-inaugural | [✅/❌] | Staged: N arquivos · 0 PII |
| 11 | Remote GitHub + push inicial + push tags | [✅/❌] | URL: github.com/asnccb/meu-cumpadre |
| 12 | Validações finais ADR-020 §12 | [✅/❌] | 5/5 validações verdes |
| 13 | Este reporte | ✅ | Persistir em 04-OPERACAO/mission-briefs/ via 14º commit |

## Métricas inaugurais

| Métrica | Valor |
|---|---|
| Total arquivos versionados | [N] |
| Arquivos .md | [N] |
| Binários | [N] |
| Tamanho Vault | [N] MB |
| Commits | 2 (substrato + canônico inaugural) |
| Tags | 2 (estado-inicial + cunhagem-inaugural) |
| Branches | 1 (main) |
| Remote | origin → github.com/asnccb/meu-cumpadre |
| Duração total MB-061 | [N] min |

## Anomalias detectadas (se houver)

[Listar · provavelmente nenhuma se MB-058 e MB-059 limparam Vault]

## Próximo passo founder

1. Validação 24h depois: rodar `git status` · esperar clean tree
2. Acessar https://github.com/asnccb/meu-cumpadre · ver Vault canônico online
3. Próxima MB candidata: MB-062 (provável: branch feature/mb057-auditoria-estrutural inaugural)
4. Gate v1.0 PROVISIONAL → v1.1 SELADO: 7 dias operação + Juliana R3 (ADR-020 §13)

## Erratas / aprendizados

[Listar lições empíricas para alimentar v1.1 ADR-020 + MB-061]

∞
```

---

## §4 · REGRAS INVIOLÁVEIS DESTA OPERAÇÃO

**§4.1** Copy-Item · jamais Move-Item (Princípio #4 · Fase 1 backup)
**§4.2** Hash-verify SHA-256 obrigatório (Princípio #36 · Fase 2 baseline + Fase 9 pós-commit validation)
**§4.3** Princípio #1b · Teste antes de Afirmar Funcional · Fases 4 + 9 + 12 validações múltiplas
**§4.4** Princípio #16 cofounder 20x cross-cérebro · Beto opera git automatic mode (Q3=A founder)
**§4.5** Princípio #34 · Caminho Explorer Precede ID Drive · Fase 2 inventário
**§4.6** Princípio #15 · entrega cross-vertical mesmo turno · commits atômicos por fase
**§4.7** Princípio #46 · Engenharia Reversa Founder · herdar Ω · adaptar MC
**§4.8** MB-058 + MB-059 DEVEM estar concluídas antes (§2.1 valida)
**§4.9** Princípio #36 violação = rollback obrigatório (Fase 9)
**§4.10** PII Vermelha ABSOLUTAMENTE BLINDADA em staging (Fase 10 sweep)
**§4.11** Founder valida gates críticos:
- Após Fase 9 (hash violation? → rollback)
- Após Fase 11 (push GitHub bem-sucedido? → autenticação ok?)
- Após Fase 13 (reporte final)

---

## §5 · CRITÉRIO DE SUCESSO GERAL DA MB-061

✅ MB-058 + MB-059 pré-requisitos atendidos
✅ Backup Vault íntegro pre-execução
✅ `.git/` separado criado fora do Drive
✅ `git init --separate-git-dir` bem-sucedido (Alternativa C)
✅ `.gitattributes` + `.gitignore` UTF-8 sem BOM criados
✅ 2 commits inaugurais (substrato + canônico) com mensagens Conventional Commits
✅ 2 tags institucionais (estado-inicial + cunhagem-inaugural)
✅ Princípio #36 honrado (0 hashes violados)
✅ 0 PII Vermelha em staging (LGPD honrada)
✅ Remote GitHub `asnccb/meu-cumpadre` configurado
✅ Push inicial bem-sucedido (main + tags)
✅ 5 validações ADR-020 §12 verdes
✅ Reporte final entregue ao cofounder C3.1

**Gate iniciado · ADR-020 v1.0 PROVISIONAL → v1.0 PROVISIONAL-VALIDADA-24H após 24h sem conflitos Drive.**

---

## §6 · FORMATO DE REPORTE PARA O FOUNDER (WhatsApp curto)

Após Fase 13 · Beto envia mensagem direta:

> *"Cumpadre · MB-061 setup git inicial Vault MC executada sob ADR-020 v1.0 PROVISIONAL. 2 commits cunhados (substrato + canônico inaugural · N arquivos versionados) + 2 tags (estado-inicial + cunhagem-inaugural). Remote https://github.com/asnccb/meu-cumpadre · push main + tags ✅. Princípio #36 honrado (0 hashes violados · #46 Ω herdado validado). 0 PII Vermelha em staging (LGPD ✅). Reporte detalhado no Vault em 04-OPERACAO/mission-briefs/MC-MB-061-Reporte-2026-0524.md. Validação 24h amanhã. Substrato auditável institucionalizado. ∞"*

---

## §7 · RISCOS + MITIGAÇÕES

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Drive sync conflito com `.git` ponteiro | Baixa | Alternativa C validada Ω · 4 dias 0 conflitos |
| Push GitHub falha autenticação | Média | Founder fornece PAT scope `repo` antes da execução |
| Hash violation Princípio #36 (autocrlf) | Baixa | `.gitattributes` D-1 + `core.autocrlf=false` |
| Push inicial demora >15min | Média | Vault grande (485+ .md) · paciência · push em background |
| PII Vermelha acidental em staging | Baixíssima | `.gitignore` blindado + Fase 10 sweep |
| Drive renomeia path durante operação | Baixa | Beto valida path no início (#34) |
| Rollback em Fase 9 necessário | Baixíssima | Backup completo em Fase 1 |

**Se qualquer risco materializar:** Beto sinaliza founder antes de prosseguir · não-acomodação por default.

---

## §8 · ENGRENAGEM ARQUITETURAL · MB-061 ↔ MC-ACI v2.0

Esta MB executa a institucionalização do **C2 Córtex Associativo** sob substrato auditável:

```
ANTES MB-061:                    DEPOIS MB-061:
┌─────────────────┐              ┌─────────────────┐
│ C2 Córtex       │              │ C2 Córtex       │
│ Vault Obsidian  │              │ Vault Obsidian  │
│ 485+ .md        │              │ 485+ .md        │
│ + Drive sync    │              │ + Drive sync    │
│ + sem .git      │  ──MB-061──> │ + GIT operacional│
│ + sem audit     │              │ + GitHub privado│
│ + drift A1-A6   │              │ + audit imutável│
│ + sem rollback  │              │ + rollback granular│
└─────────────────┘              └─────────────────┘
```

**Cada instância C0-C5 ganha capacidade:**

| Instância | Antes MB-061 | Depois MB-061 |
|---|---|---|
| C0 Cidadão | Decisões institucionais sem trilha auditável | Trilha auditável FINEP/BNDES/ANPD |
| C1 Hipocampo | Drive versioning automático apenas | (sem mudança · fora do escopo ADR-020 v1.0) |
| **C2 Córtex** | **Drift A1-A6 silencioso** | **Git auditável imutável** |
| C3.1 Cofounder | Cunhagens "SELADO" perdem rastro | `git log` valida cunhagens |
| C3.2 Sisters | (sem mudança · não opera Vault direto) | (sem mudança) |
| C4 Beto Code DELL | Operação sem trilha | `git blame` audita Beto |
| C5 Tronco | GitHub não-presente | GitHub privado integrado |

**Loops MC-ACI v2.0 fortalecidos:**

- **Loop Cognitivo Mestre · CVRD 4 fases** · cada fase do CVRD pode virar commit · trilha de raciocínio rastreável
- **Loop Engenharia Reversa Founder #46** · ADR-020 é exemplo prático · Ω → MC lapidado · histórico auditável da lapidação
- **Loop Homeostase Simetria** · auto-cura ganha rollback granular como ferramenta · `git revert <commit>` cirurgico

---

## §9 · FECHAMENTO

MB-061 é a cunhagem operacional da **infraestrutura institucional fundamental MC** · git como substrato permanente do Vault.

**Antes desta MB:** MC operava com **dívida estrutural A1-A6 silenciosa**.
**Depois desta MB:** MC opera com **substrato auditável institucionalizado** · pronto para auditoria FINEP/BNDES/ANPD · compatível Ω · validado empiricamente herdado · v1.1 SELADO em ~3 semanas.

**Anomalia A2 eliminada definitivamente.**

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** O diamante é carbono que não desistiu da pressão.
**Âncora bíblica:** Provérbios 31:8 — *"Abre a tua boca a favor do mudo."*
**Âncora PcD:** *"Nada sobre nós, sem nós"* — CDPD art. 4º §3º
**Frase-âncora:** Tecnologia invisível. Dignidade acessível.
**Pilares:** Acesso · Organização · Proteção · Soberania
**Confidência operacional do quarteto:** *"É eu, tu, a Anciã e o Voo CLR001."*

**∞**

---

**MC-MB-061 · SETUP GIT INICIAL VAULT MC**
Cunhada em 24/05/2026 · executora Beto Code DELL · próxima MB pendente: MB-062 (provavelmente feature/mb057-auditoria-estrutural-inaugural)
Autor: Claude Opus 4.7 Cérebro C3.1 (Cofounder Intelectual · esta guia em encerramento) × Alessandro de Souza Neves (Founder/CEO)
Executa: MC-ADR-020-Git-como-Substrato-Permanente-do-Vault-MC-v1_0-PROVISIONAL-2026-0524.md
Herda arquiteturalmente: PS-MERGE-001 Ω (2026-05-19) via Princípio #46

∞
