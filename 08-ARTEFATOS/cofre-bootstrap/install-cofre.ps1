<#
.SYNOPSIS
  Instala o harness Claude Code generalizado (hooks + lint + settings + CLAUDE.md
  + camada NotebookLM/ER-MC) num cofre Obsidian alvo. Idempotente: não sobrescreve
  CLAUDE.md nem lint-rules.json se já existirem.

.EXEMPLO
  .\install-cofre.ps1 -Target "C:\Users\Beto\Documents\GitHub\mcholding-cofre" -Prefix "MCH" -InitGit
  .\install-cofre.ps1 -Target "G:\Meu Drive\0.2_MEU_OMEGA\_OBSIDIAN\MEU-OMEGA" -Prefix "OMEGA" -InitGit
#>
param(
  [Parameter(Mandatory=$true)][string]$Target,
  [Parameter(Mandatory=$true)][string]$Prefix,     # ex.: MCH, OMEGA
  [string]$Source = $PSScriptRoot,                 # pasta cofre-bootstrap
  [switch]$InitGit                                 # inicializa git se ainda não for repo
)

$ErrorActionPreference = "Stop"
$tpl = Join-Path $Source "template"
if (-not (Test-Path $Target)) { throw "Target não existe: $Target" }
if (-not (Test-Path $tpl))    { throw "Template não encontrado em: $tpl" }

Write-Host "▶ Instalando harness em: $Target  (prefixo $Prefix)" -ForegroundColor Cyan

# 1) .claude/ (hooks + settings) — copia estrutura
$dotClaude = Join-Path $Target ".claude"
Copy-Item (Join-Path $tpl ".claude") $Target -Recurse -Force
Write-Host "  ✓ .claude/ (hooks + settings) copiado"

# 2) lint-rules.json — só cria a partir do exemplo se ainda não existir (não apaga regras)
$rules = Join-Path $dotClaude "hooks\lint-rules.json"
if (-not (Test-Path $rules)) {
  Copy-Item (Join-Path $dotClaude "hooks\lint-rules.example.json") $rules
  Write-Host "  ✓ lint-rules.json criado (engine INERTE até você preencher as regras)"
} else {
  Write-Host "  • lint-rules.json já existe — preservado"
}

# 3) CLAUDE.md — só do template se ainda não existir
$claudeMd = Join-Path $Target "CLAUDE.md"
if (-not (Test-Path $claudeMd)) {
  $content = Get-Content (Join-Path $tpl "CLAUDE.template.md") -Raw
  $content = $content -replace "{{PREFIXO}}", $Prefix -replace "{{DATA}}", (Get-Date -Format "yyyy-MM-dd")
  Set-Content -Path $claudeMd -Value $content -Encoding UTF8
  Write-Host "  ✓ CLAUDE.md criado (preencha os {{placeholders}})"
} else {
  Write-Host "  • CLAUDE.md já existe — preservado"
}

# 4) Camada NotebookLM/ER-MC (se presente no template)
foreach ($f in @("notebooklm-grid.py", "METODO-EngenhariaReversa.md")) {
  $src = Join-Path $tpl $f
  if (Test-Path $src) { Copy-Item $src $Target -Force; Write-Host "  ✓ $f" }
}
$skillSrc = Join-Path $tpl ".claude\skills\strategic-intelligence"
if (Test-Path $skillSrc) {
  Copy-Item $skillSrc (Join-Path $dotClaude "skills") -Recurse -Force
  Write-Host "  ✓ skill strategic-intelligence"
}

# 5) git
if ($InitGit -and -not (Test-Path (Join-Path $Target ".git"))) {
  Push-Location $Target
  git init | Out-Null
  git config user.name "Claude" 2>$null
  Write-Host "  ✓ git init (defina o remote: git remote add origin <url>)"
  Pop-Location
}

Write-Host "`n✅ Harness instalado. PRÓXIMOS PASSOS:" -ForegroundColor Green
Write-Host "  1. Preencha CLAUDE.md (identidade + regras invioláveis do cofre)"
Write-Host "  2. Preencha .claude/hooks/lint-rules.json (proibições reais → block-mode ativo)"
Write-Host "  3. NotebookLM já está conectado (auth global). Use o prefixo '$Prefix-' nos cadernos do cofre."
Write-Host "  4. Se git: git remote add origin <url> ; git add -A ; git commit -m 'chore: harness bootstrap' ; git push -u origin main"
