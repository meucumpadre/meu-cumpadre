---
tipo: MISSION-BRIEF
codigo: MB-OMEGA-004
descritor: Force-Sync-Drive-Desktop
versao: 1.0
data: 2026-05-15
autor: Claude Opus 4.7 (cofounder Ω) × Founder (Alessandro)
modo: LEITURA AUTORIZADA — sem escrita, apenas trigger de download
maquina-alvo: Beto (DELL — Claude Code CLI)
ambiente: Windows PowerShell
duracao-estimada: 1-3 minutos
status: PRONTO PARA COLAR
dependencias: MB-OMEGA-003 executado com sucesso
proximo: MB-OMEGA-005
persistencia-dual: Vault MC + Vault Ω
classificacao: OPERACIONAL — uso institucional
---

# MB-OMEGA-004 — FORCE-SYNC GOOGLE DRIVE DESKTOP

## Contexto

Google Drive Desktop, no modo padrão "Stream files", mantém arquivos na nuvem e baixa sob demanda. Isso quebra o Obsidian, que precisa de acesso filesystem real aos `.md` para indexar.

## Objetivo único

Forçar o Drive Desktop a baixar todos os arquivos do Vault Ω fazendo leitura de uma linha de cada arquivo recursivamente. A leitura aciona o download automático.

## Tarefa única

```powershell
$vault = "G:\Meu Drive\0 0 PROJETO OMEGA\_OBSIDIAN\MEU-OMEGA"
Get-ChildItem -Path $vault -Recurse -Force | ForEach-Object {
    if (-not $_.PSIsContainer) {
        try { $null = Get-Content -Path $_.FullName -TotalCount 1 -ErrorAction Stop }
        catch { Write-Host "Aviso: nao leu $($_.FullName)" }
    }
}
```

## Critério de aceite

- Comando executou até o fim sem exception fatal
- Falhas de leitura ≤ 3
- Drive Desktop com ícone verde em `MEU-OMEGA` (validação visual no Explorer)

## Falhas possíveis e contingência

| Falha | Causa | Ação |
|---|---|---|
| Falhas > 5 | Drive Stream agressivo | Aguardar 2 min, reexecutar; se persistir, mudar para "Mirror files" |
| Trava > 5 min | Conexão lenta | Esperar até 10 min |
| "Access denied" em vários | Lock externo | Fechar Obsidian e reexecutar |
| `GoogleDriveFS.exe` ausente | Drive parado | Abrir Drive Desktop |

## Persistência dual (Princípio #13)

- Vault Ω: `04-OPERACAO\workflows\MB-OMEGA-004-Force-Sync-Drive-Desktop-v1_0-2026-0515.md`
- Vault MC: `03-GOVERNANCA\mission-briefs\omega\MB-OMEGA-004-Force-Sync-Drive-Desktop-v1_0-2026-0515.md`

Caminhos canônicos estabelecidos (a MB original especificava `05-OPERACAO\mission-briefs\` que não existe na árvore).

## Próximo

→ MB-OMEGA-005 (configuração do Obsidian via filesystem)

---

**∞**
