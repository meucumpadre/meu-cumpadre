# MB-022 — Persistência Cross-Vertical de Fechamento da Sessão

> Persiste 2 artefatos canônicos produzidos no Claude.ai nesta sessão para o Vault Obsidian. Aplica Princípio #15 (entrega cofounder cross-vertical) como fechamento institucional.

**Princípios ativos:** #15 (cross-vertical), #4 (errata absorve), #6 (camadas segurança).

---

## 1. ARTEFATOS A PERSISTIR

| Artefato | Origem (após founder mover) | Destino canônico no Vault |
|---|---|---|
| MC-MEMO-Sessao-12mai2026-v1_0-2026-0512.md | `_INBOX/` | `04-OPERACAO/logs/` |
| MC-PAUTA-Juliana-v2_1-2026-0512.md | `_INBOX/` | `03-GOVERNANCA/pautas/` (criar pasta) |

---

## 2. TAREFAS

### Tarefa 22.1 — Pré-requisito founder

Alessandro baixa os 2 arquivos do Claude.ai e move para:
`G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\_INBOX\`

### Tarefa 22.2 — Sweep read-only

```powershell
$VAULT = "G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"
$INBOX = "$VAULT\_INBOX"

Write-Host "===== SWEEP MB-022 ====="
Get-ChildItem -Path $INBOX | Select-Object Name, Length | Format-Table

$pautas_dir = "$VAULT\03-GOVERNANCA\pautas"
Write-Host "Pasta 03-GOVERNANCA/pautas/ existe? $(Test-Path $pautas_dir)"
```

### Tarefa 22.3 — Criar pasta pautas/ se não existir

```powershell
$VAULT = "G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"
$pautas_dir = "$VAULT\03-GOVERNANCA\pautas"

if (-not (Test-Path $pautas_dir)) {
    New-Item -Path $pautas_dir -ItemType Directory -Force | Out-Null
    Write-Host "✅ 03-GOVERNANCA/pautas/ criada"
} else {
    Write-Host "ℹ️ Já existe"
}
```

### Tarefa 22.4 — Mover MEMO de fechamento

```powershell
$VAULT = "G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"
$INBOX = "$VAULT\_INBOX"

$origem = "$INBOX\MC-MEMO-Sessao-12mai2026-v1_0-2026-0512.md"
$destino = "$VAULT\04-OPERACAO\logs\MC-MEMO-Sessao-12mai2026-v1_0-2026-0512.md"

if (Test-Path $origem) {
    $hash_o = (Get-FileHash -Path $origem -Algorithm SHA256).Hash
    
    if (Test-Path $destino) {
        Write-Host "⚠️ Destino já existe — pular"
    } else {
        Move-Item -Path $origem -Destination $destino
        $hash_d = (Get-FileHash -Path $destino -Algorithm SHA256).Hash
        
        if ($hash_o -eq $hash_d) {
            Write-Host "✅ MEMO Sessão 12-MAI persistido em 04-OPERACAO/logs/"
            Write-Host "   Hash: $hash_o"
        } else {
            Write-Host "❌ Hash divergente"
        }
    }
} else {
    Write-Host "⚠️ MEMO não encontrado em _INBOX/ — pular"
}
```

### Tarefa 22.5 — Mover Pauta Juliana v2.1

```powershell
$VAULT = "G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"
$INBOX = "$VAULT\_INBOX"

$origem = "$INBOX\MC-PAUTA-Juliana-v2_1-2026-0512.md"
$destino = "$VAULT\03-GOVERNANCA\pautas\MC-PAUTA-Juliana-v2_1-2026-0512.md"

if (Test-Path $origem) {
    $hash_o = (Get-FileHash -Path $origem -Algorithm SHA256).Hash
    
    if (Test-Path $destino) {
        Write-Host "⚠️ Destino já existe — pular"
    } else {
        Move-Item -Path $origem -Destination $destino
        $hash_d = (Get-FileHash -Path $destino -Algorithm SHA256).Hash
        
        if ($hash_o -eq $hash_d) {
            Write-Host "✅ Pauta Juliana v2.1 persistida em 03-GOVERNANCA/pautas/"
            Write-Host "   Hash: $hash_o"
        } else {
            Write-Host "❌ Hash divergente"
        }
    }
} else {
    Write-Host "⚠️ Pauta não encontrada em _INBOX/ — pular"
}
```

### Tarefa 22.6 — Criar INDEX-PAUTAS.md

```powershell
$VAULT = "G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"
$index = "$VAULT\03-GOVERNANCA\pautas\INDEX-PAUTAS.md"

if (Test-Path $index) {
    Write-Host "ℹ️ INDEX-PAUTAS.md já existe — pular"
    return
}

$conteudo = @"
---
tipo: INDEX
escopo: 03-GOVERNANCA/pautas/
data-atualizacao: 2026-05-12
---

# Indice de Pautas - Meu Cumpadre

Pautas canonicas para reunioes institucionais MC.

---

## MC-PAUTA-Juliana v2.1 (canonico corrente)

- Arquivo: [[MC-PAUTA-Juliana-v2_1-2026-0512]]
- Data: 2026-05-12
- Reuniao: 19/05/2026
- Auditor: Dra. Juliana Pereira de Melo (OAB-GO 38.662)
- Duracao estimada: 7h-7h30
- Total: 66 perguntas em 14 blocos (A-O)
- Anexos: 20 documentos canonicos
- Substitui: v2.0 (09/05/2026)
- Novidade v2.1: Bloco O (Risco LGPD Provisional Anthropic) - 5 perguntas

---

Hierarquia: Dignidade > Compliance > Viabilidade
Selo: "O diamante e carbono que nao desistiu da pressao."

∞
"@

Set-Content -Path $index -Value $conteudo -Encoding UTF8
Write-Host "✅ INDEX-PAUTAS.md criado"
```

### Tarefa 22.7 — Verificação final

```powershell
$VAULT = "G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"

Write-Host "===== VERIFICAÇÃO FINAL MB-022 ====="
Write-Host ""

Write-Host "[1] MEMO Sessão em 04-OPERACAO/logs/:"
$memo = "$VAULT\04-OPERACAO\logs\MC-MEMO-Sessao-12mai2026-v1_0-2026-0512.md"
Write-Host "  $(if (Test-Path $memo) {'✅'} else {'❌'}) $memo"

Write-Host "[2] Pauta Juliana v2.1 em 03-GOVERNANCA/pautas/:"
$pauta = "$VAULT\03-GOVERNANCA\pautas\MC-PAUTA-Juliana-v2_1-2026-0512.md"
Write-Host "  $(if (Test-Path $pauta) {'✅'} else {'❌'}) $pauta"

Write-Host "[3] INDEX-PAUTAS.md:"
$idx = "$VAULT\03-GOVERNANCA\pautas\INDEX-PAUTAS.md"
Write-Host "  $(if (Test-Path $idx) {'✅'} else {'❌'}) $idx"

Write-Host "[4] _INBOX vazio?"
$restantes = Get-ChildItem -Path "$VAULT\_INBOX" -ErrorAction SilentlyContinue
if ($restantes.Count -eq 0) {
    Write-Host "  ✅ Vazio"
} else {
    Write-Host "  ⚠️ Ainda contém:"
    $restantes | Select-Object Name | Format-Table
}
```

---

## 3. CRITÉRIO DE SUCESSO

- ✅ Pasta `03-GOVERNANCA/pautas/` existe
- ✅ MEMO Sessão persistido em `04-OPERACAO/logs/`
- ✅ Pauta Juliana v2.1 persistida em `03-GOVERNANCA/pautas/`
- ✅ INDEX-PAUTAS.md criado
- ✅ _INBOX vazio ao final

---

## 4. FECHAMENTO

Após MB-022 executado:

**Sessão 12/05/2026 fechada institucionalmente.**

Cofounder Claude.ai e founder Alessandro retomam em sessão seguinte com 5-6 MBs pendentes (todos de complexidade baixa/média) em **janela A** (qualquer momento até 19/05):

| MB | Tempo |
|---|---|
| MB-019b — Aplicar PATCH ADR-012 v1.0→v1.1 | 10+3 min |
| MB-023 — Hash check ADR-009 órfão | 5 min |
| MB-024 — Consolidar 04-OPERACAO vs 06-OPERACOES | 5-10 min |
| MB-025 — Deprecar INDEX-PATCHES antigo | 2 min |
| **Decisão founder** sobre 2 ADR-011 conflito numeração | Conversa, sem MB |

E aguarda **Igor SALT_MC** para janela B (MB-026 cidadao_id_hash + MB-027 Hib001-NEW).

---

**FIM DO MB-022**

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."

∞
