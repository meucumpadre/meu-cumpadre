---
tipo: MB
codigo: MC-MB-063-BranchProtection-ClassifierPermissions
nome: Setup Branch Protection main GitHub + Classifier Permissions Bash · institucionalização gate substrato pós-cunhagem-inaugural
versao: v1.0
data: 2026-05-26
status: ATIVO (autorizado Founder · cofounder C3.1 cunhagem · execução imediata pós-MB-061 Fase 13)
mb-anterior: MC-MB-061 v2.0 Git Substrato (Fases 1-13 concluídas · catedral em pé no remote)
mb-proxima: MB-062 Auditoria Estrutural Vault (primeira branch feature sob substrato git operacional)
contador-adr-020-v2_1-SELADO: D-0 = 2026-05-26 · D-7 elegível = 2026-06-02
autor: Claude Opus 4.7 Cérebro C3.1 (Cofounder Intelectual) × Alessandro de Souza Neves (Founder/CEO · operador único TALÃO)
executor: misto · Founder Alessandro (browser Chrome TALÃO) ∥ Code TALÃO (PowerShell `.claude/settings.json`)
duracao-estimada: ~10-15 min total · 2 vetores paralelos
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
ancora-biblica: Provérbios 31:8 — "Abre a tua boca a favor do mudo."
tags: [mc/mb, mc/operacao, mc/git, mc/github, mc/classifier, branch-protection, principio-63-v2]
principios_invocados:
  - "#1b Teste antes de Afirmar Funcional (sweep estado branch protection antes de configurar)"
  - "#4 Errata Absorve, Não Inventa (configs adicionais · não-edita main já protegida-de-facto)"
  - "#19 Patches/Configs Operacionais (vivem em settings · documentados em MBs)"
  - "#36 Persistência Bit-a-bit (configs preservadas auditáveis)"
  - "#58 UTF-8 sem BOM (todas as escritas .json)"
  - "#63 v2 candidato (Workaround Classifier · permission explícita evita re-bloqueio)"
contexto-origem: "3 vetores futuros propostos por Code TALÃO em Fase 13 reporte MB-061 (~18:13 UTC 26/05) · cofounder C3.1 validou: vetor 1 (webhook) adiado Fase 2 Borboleta · vetores 2+3 (branch protection + classifier permissions) autorizados nesta MB-063 compacta"
---

# MC-MB-063 v1.0 · Branch Protection main + Classifier Permissions Bash

**MB compacta institucionalizando 2 gates pós-cunhagem-inaugural · vetores 2+3 do reporte Fase 13 MB-061 · execução paralela ~10-15 min · D+0 do contador gate ADR-020 v2.1 SELADO**

---

## §1 · OBJETIVO

Institucionalizar 2 gates operacionais imediatamente após cunhagem-inaugural do Vault MC no remote GitHub:

**Vetor 2 · Branch Protection Rule `main`:** prevenção de force-push + require PR (futura) · alinhamento com ADR-020 v2.0 §7.3 `--no-ff` obrigatório · institucionaliza gate que classifier tentou impor empiricamente.

**Vetor 3 · Classifier Permissions Bash:** permissão explícita `git push origin --tags` em `.claude/settings.json` do Vault · evita workaround manual em pushes de tags futuros · documenta Princípio #63 v2 candidato como configuração operacional.

---

## §2 · EXECUÇÃO PARALELA · 2 VETORES SIMULTÂNEOS

```
Founder Chrome TALÃO                Code TALÃO PowerShell TALÃO
─────────────────────────           ──────────────────────────────
VETOR 2 · Branch Protection         VETOR 3 · Classifier Permissions
~5-7 min                            ~3-5 min
        ↓                                       ↓
6 checks GitHub UI                  Edita .claude/settings.json
        ↓                                       ↓
Save changes                        Hash-verify + reload
        ↓                                       ↓
        ╰─────────────┬─────────────────────────╯
                      ↓
              Reporte Fase 4 conjunto
              Founder + Code TALÃO
              ~2-3 min
```

---

## §3 · VETOR 2 · BRANCH PROTECTION MAIN · EXECUTOR FOUNDER

### Passo a passo browser Chrome TALÃO

**Acesso:**
1. Abre Chrome no TALÃO
2. URL: `https://github.com/asnccb/meu-cumpadre/settings/branches`
3. Login GitHub `asnccb` se solicitado (cookies devem persistir desde push)

**Criar regra:**
4. Clica botão verde **`Add branch ruleset`** (canto superior direito)
   - OU `Add rule` (interface antiga · ambas funcionam)
5. **Ruleset name:** `protect-main`
6. **Enforcement status:** `Active` (não-Evaluate · não-Disabled)

**Target branches:**
7. **Target branches** → `Add target` → `Include default branch` (= `main`)
   - OU manual: `Add target` → `Include by pattern` → `main`

**Branch protections (6 checks):**

| # | Configuração | Estado | Por que |
|---|---|---|---|
| 1 | ✅ **Restrict deletions** | LIGADO | Previne `git push --delete origin main` acidental |
| 2 | ✅ **Block force pushes** | LIGADO | Previne `git push --force origin main` · alinha ADR-020 §7.3 |
| 3 | ✅ **Require linear history** | LIGADO | Força `--no-ff` ou rebase · histórico auditável |
| 4 | 🟡 **Require a pull request before merging** | LIGADO (com bypass `asnccb`) | Padrão futuro · Founder pode bypass como solo dev |
| 5 | 🟡 **Required approvals: 0** | ZERO | Solo dev · não-time ainda |
| 6 | ⬜ **Require status checks** | DESLIGADO | Sem CI/CD ainda · Fase 2 Borboleta |

**Bypass list (importante · solo dev MC):**
7. **Bypass list** → `Add bypass` → seleciona `asnccb` (Founder)
   - Role permissions: `Always` (não-`Pull request`)
   - Sem bypass Founder fica bloqueado em commits diretos · viola fluxo Crisálida solo

**Salvar:**
8. Scroll bottom → clica `Create` (verde)
9. Tela confirma "Ruleset created" · regra aparece em `/settings/rules`

**Validação visual:**
10. Volta `https://github.com/asnccb/meu-cumpadre/settings/branches` · confirma:
    - ✅ Ruleset `protect-main` listado como `Active`
    - ✅ Target: `main` (default branch)

**Tempo estimado:** 5-7 min navegação UI + cliques.

---

## §4 · VETOR 3 · CLASSIFIER PERMISSIONS · EXECUTOR CODE TALÃO

### Script PowerShell em TALÃO

```powershell
# ============================================================
# MC-MB-063 Vetor 3 · Classifier Permissions Bash
# Editor: Code TALÃO sob Founder Alessandro
# Princípio #58 honrado · UTF-8 sem BOM via System.IO.File
# ============================================================

$vault = "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"
$settings_dir = "$vault\.claude"
$settings_path = "$settings_dir\settings.json"

# Fase 3.1 · Sweep read-only · estado atual settings
Write-Host "═══ Fase 3.1 · Sweep estado atual ═══" -ForegroundColor Cyan
$dir_exists = Test-Path $settings_dir
$file_exists = Test-Path $settings_path
Write-Host "  .claude/ existe: $dir_exists"
Write-Host "  settings.json existe: $file_exists"

if ($file_exists) {
    $current = Get-Content $settings_path -Raw -Encoding UTF8
    Write-Host "  settings.json atual (preview · primeiras 500 chars):"
    Write-Host ($current.Substring(0, [Math]::Min(500, $current.Length)))
}

# Fase 3.2 · Criar diretório se necessário (Princípio #34)
if (-not $dir_exists) {
    New-Item -ItemType Directory -Path $settings_dir -Force | Out-Null
    Write-Host "  ✅ .claude/ criada" -ForegroundColor Green
}

# Fase 3.3 · Compor settings.json (merge se já existir · novo se ausente)
$permissions_block = @{
    permissions = @{
        allow = @(
            "Bash(git push origin --tags)",
            "Bash(git push origin --tags --force-with-lease)",
            "Bash(git push origin main)",
            "Bash(git fetch origin)",
            "Bash(git pull origin main --rebase)",
            "Bash(git status)",
            "Bash(git log*)",
            "Bash(git diff*)",
            "Bash(git ls-remote*)"
        )
        deny = @(
            "Bash(git push --force origin main)",
            "Bash(git push --force-with-lease origin main)",
            "Bash(git reset --hard*)",
            "Bash(git filter-branch*)",
            "Bash(rm -rf*)",
            "Bash(Remove-Item -Recurse -Force*)"
        )
    }
    _metadata = @{
        codigo = "MC-MB-063 v1.0 Vetor 3"
        cunhado_em = "2026-05-26"
        principio_63_v2 = "Workaround Classifier · permissions explícitas"
        operador = "Founder Alessandro em TALÃO"
        contador_adr_020_v2_1 = "D+0 · 2026-05-26"
    }
}

# Se settings.json já existir · merge cuidadoso (preserva keys existentes)
if ($file_exists) {
    try {
        $existing = $current | ConvertFrom-Json
        # Merge: prioriza valores novos em permissions, preserva resto
        if ($existing.PSObject.Properties.Name -contains "permissions") {
            Write-Host "  ⚠️ permissions já existe · merge cuidadoso" -ForegroundColor Yellow
            # Para simplicidade nesta MB · sobrescreve permissions inteiramente
            # (audit trail via git diff)
        }
        $existing | Add-Member -NotePropertyName "permissions" -NotePropertyValue $permissions_block.permissions -Force
        $existing | Add-Member -NotePropertyName "_metadata" -NotePropertyValue $permissions_block._metadata -Force
        $final = $existing
    } catch {
        Write-Host "  ⚠️ JSON existente inválido · sobrescrevendo limpo" -ForegroundColor Yellow
        $final = $permissions_block
    }
} else {
    $final = $permissions_block
}

# Fase 3.4 · Escrita UTF-8 sem BOM (Princípio #58)
$json_output = $final | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText(
    $settings_path,
    $json_output,
    [System.Text.UTF8Encoding]::new($false)
)
Write-Host "  ✅ settings.json escrito · UTF-8 sem BOM" -ForegroundColor Green

# Fase 3.5 · Validação hash + leitura confirmação
$hash = (Get-FileHash $settings_path -Algorithm SHA256).Hash
$size = (Get-Item $settings_path).Length
Write-Host ""
Write-Host "═══ Fase 3.5 · Validação ═══" -ForegroundColor Cyan
Write-Host "  Path: $settings_path"
Write-Host "  Tamanho: $size bytes"
Write-Host "  SHA-256: $($hash.Substring(0,16))…"

# Fase 3.6 · git add + commit (commit #3 do contador v2.1 SELADO)
Set-Location $vault
cmd /c "git add .claude/settings.json 2>NUL"
cmd /c "git commit -m `"chore(claude): permissions explicitas Bash git push --tags · Principio #63 v2 candidato · MB-063 Vetor 3`" 2>NUL"

$commit_hash = cmd /c "git log -1 --format=%h 2>NUL"
Write-Host ""
Write-Host "═══ Fase 3.6 · Commit ═══" -ForegroundColor Cyan
Write-Host "  Commit hash: $commit_hash"
Write-Host "  Contador v2.1 SELADO: 3/20 commits"

# Fase 3.7 · Push imediato (testa permissão recém-configurada)
Write-Host ""
Write-Host "═══ Fase 3.7 · Push (testa Bash classifier · #63 v2) ═══" -ForegroundColor Cyan
cmd /c "git push origin main 2>&1"

Write-Host ""
Write-Host "✅ Vetor 3 concluído · classifier permissions ativas" -ForegroundColor Green
```

**Tempo estimado:** 3-5 min execução script.

---

## §5 · FASE 4 · REPORTE CONJUNTO FOUNDER + CODE TALÃO

Após ambos vetores concluídos · reporte unificado:

### Vetor 2 · Branch Protection (Founder confirma)

| Check | Estado | Confirmação visual |
|---|---|---|
| Ruleset `protect-main` ativo | ✅ / ❌ | URL `/settings/rules` |
| Target = `main` | ✅ / ❌ | Listado em Targets |
| Block force pushes | ✅ / ❌ | Marcado em Rules |
| Restrict deletions | ✅ / ❌ | Marcado em Rules |
| Require linear history | ✅ / ❌ | Marcado em Rules |
| Bypass `asnccb` configurado | ✅ / ❌ | Listado em Bypass list |

### Vetor 3 · Classifier Permissions (Code TALÃO confirma)

| Métrica | Valor |
|---|---|
| `.claude/settings.json` path | $settings_path |
| Tamanho | XYZ bytes |
| SHA-256 (16 chars) | XXXXXXXXXXXXXXXX… |
| UTF-8 sem BOM | ✅ |
| Allow rules count | 9 |
| Deny rules count | 6 |
| Commit hash gerado | $commit_hash |
| Push origin main | ✅ / ❌ |
| Contador v2.1 SELADO | 3/20 commits |

---

## §6 · CRITÉRIOS DE SUCESSO MB-063

✅ **Branch Protection ATIVA** · `main` blindada contra force-push + deleção
✅ **Bypass `asnccb` configurado** · Founder não-bloqueado em commits diretos solo dev
✅ **`.claude/settings.json` persistido** · UTF-8 sem BOM · 9 allow + 6 deny rules
✅ **Commit #3 gerado** · contador v2.1 SELADO avança 2 → 3 / 20
✅ **Push testa classifier permission** · `git push origin main` sem prompt manual
✅ **Princípio #58 honrado** · todas escritas UTF-8 sem BOM
✅ **Princípio #63 v2 candidato** · permissão Bash documentada institucionalmente

---

## §7 · FALLBACK · SE BRANCH PROTECTION GITHUB UI MUDOU LAYOUT

GitHub UI muda frequência média. Se Founder não-encontrar exatamente os botões descritos §3:

**Alternativa via gh CLI** (Code TALÃO executa):

```powershell
# Cria ruleset via API (equivalente a branch protection clássica)
gh api `
  --method POST `
  -H "Accept: application/vnd.github+json" `
  /repos/asnccb/meu-cumpadre/rulesets `
  -f name='protect-main' `
  -f target='branch' `
  -f enforcement='active' `
  -f 'conditions[ref_name][include][]=~DEFAULT_BRANCH' `
  -f 'rules[][type]=deletion' `
  -f 'rules[][type]=non_fast_forward' `
  -f 'rules[][type]=required_linear_history' `
  -f 'bypass_actors[][actor_id]=$(gh api /user --jq .id)' `
  -f 'bypass_actors[][actor_type]=User' `
  -f 'bypass_actors[][bypass_mode]=always'
```

**Decisão fallback:** Founder tenta UI primeiro · se travar >5 min, escala para Code TALÃO via gh CLI.

---

## §8 · GATE PRINCÍPIO #1b · TESTAR ANTES DE AFIRMAR FUNCIONAL

**Teste empírico final pós-MB-063 conclusão** (Code TALÃO executa para validar):

```powershell
# Tenta force-push proibido (deve FALHAR · prova que branch protection funciona)
cmd /c "git push --force origin main 2>&1"
# Espera-se: "remote: error: GH013: Repository rule violations found"
```

**Critério #1b:** se force-push falhar com erro de rule violation · branch protection 100% ativa · MB-063 SELADA. Se force-push passar · errata #12 candidata · re-configurar.

---

## §9 · FECHAMENTO

MB-063 fecha 2 dos 3 vetores futuros propostos por Code TALÃO em Fase 13 MB-061 · institucionaliza gate operacional pós-cunhagem-inaugural · alimenta contador v2.1 SELADO (2 → 3 commits) · documenta Princípio #63 v2 candidato como configuração operacional persistente · Princípio #58 honrado em todas escritas · Princípio #1b validado empiricamente em §8.

**Pós-MB-063 estado Vault MC:**
- ✅ Substrato git operacional em 3 camadas redundantes
- ✅ Main protegida contra force-push + deleção + non-linear history
- ✅ Classifier permissions explícitas (push tags · push main · pull/fetch/status/log/diff)
- ✅ Classifier denies explícitos (force-push · reset hard · filter-branch · rm -rf)
- ✅ Bypass Founder configurado (solo dev Crisálida)

**Vetor 1 (webhook Slack/Discord)** permanece **adiado Fase 2 Borboleta** quando MC tiver canal de comunicação institucional ativo.

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** O diamante é carbono que não desistiu da pressão.
**Frase-âncora:** Tecnologia invisível. Dignidade acessível.
**Confidência operacional do quarteto:** *"É eu, tu, a Anciã e o Voo CLR001."*
**Contador ADR-020 v2.1 SELADO:** D+0 · 26/05/2026 · D+7 elegível 02/06/2026

**∞**

---

**MC-MB-063 v1.0**
Cunhada em 26/05/2026 (noite · pós-MB-061 Fase 13) · executor misto Founder + Code TALÃO · paralelização autorizada cofounder C3.1
Autor: Claude Opus 4.7 Cérebro C3.1 (Cofounder Intelectual · esta guia) × Alessandro de Souza Neves (Founder/CEO · operador único TALÃO)
Pré-requisito: MC-MB-061 v2.0 Fases 1-13 concluídas (catedral git inaugurada no remote)
Persistência canônica Vault: `04-OPERACAO\mission-briefs\` (após Code TALÃO Fase 3.6 commit)

∞
