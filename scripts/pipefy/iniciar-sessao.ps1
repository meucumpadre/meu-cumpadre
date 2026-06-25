# MC - Iniciador de Sessao Local (OpenSquad Dashboard / Pipefy)
# Uso: powershell -ExecutionPolicy Bypass -File scripts\pipefy\iniciar-sessao.ps1

$PROJETO = "C:\Users\Beto\meu-cumpadre"
$PIPE_ID  = "306835133"

Write-Host ""
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "   MEU CUMPADRE - OpenSquad Dashboard Session   " -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""

if ($env:PIPEFY_TOKEN) {
    Write-Host "[OK] PIPEFY_TOKEN ja definido na sessao." -ForegroundColor Green
} else {
    Write-Host "Cole seu PIPEFY_TOKEN e pressione Enter:" -ForegroundColor Yellow
    $token = Read-Host "Token"
    $env:PIPEFY_TOKEN = $token.Trim().Trim('"').Trim("'")
    Write-Host "[OK] Token definido." -ForegroundColor Green
}

$env:PIPEFY_PIPE_ID = $PIPE_ID
Write-Host "[OK] PIPEFY_PIPE_ID = $PIPE_ID" -ForegroundColor Green

Set-Location $PROJETO
Write-Host "[OK] Diretorio: $PROJETO" -ForegroundColor Green

Write-Host ""
Write-Host "Atualizando repositorio..." -ForegroundColor Yellow
git pull origin claude/eloquent-fermat-mMuQq
Write-Host ""

Write-Host "=================================================" -ForegroundColor Magenta
Write-Host " Abra o arquivo HANDOFF-PROMPT.md e cole o      " -ForegroundColor Magenta
Write-Host " conteudo como 1a mensagem no Claude Code.      " -ForegroundColor Magenta
Write-Host " scripts\pipefy\HANDOFF-PROMPT.md               " -ForegroundColor Magenta
Write-Host "=================================================" -ForegroundColor Magenta
Write-Host ""

Write-Host "Abrindo Claude Code..." -ForegroundColor Cyan
claude
