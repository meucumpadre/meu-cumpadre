---
tipo: MISSION-BRIEF
codigo: MB-OMEGA-003
descritor: Limpeza-Ruido-Vault
versao: 1.0
data: 2026-05-15
autor: Claude Opus 4.7 (cofounder Ω) × Founder (Alessandro)
modo: ESCRITA AUTORIZADA — exclusão controlada com backup
maquina-alvo: Beto (DELL — Claude Code CLI)
ambiente: Windows PowerShell
duracao-estimada: 3 minutos
status: PRONTO PARA COLAR
dependencias: nenhuma
proximo: MB-OMEGA-004
persistencia-dual: Vault MC + Vault Ω
classificacao: OPERACIONAL — uso institucional
---

# MB-OMEGA-003 — LIMPEZA DE RUÍDO NO VAULT Ω

## Contexto

Em 15/05/2026 04:43, durante operação manual de abertura do Obsidian pelo Founder, foi criada acidentalmente uma subpasta-ruído dentro do Vault Ω canônico:

```
G:\Meu Drive\0 0 PROJETO OMEGA\_OBSIDIAN\MEU-OMEGA\PROJETO OMEGA\
├── Bem-vindo.md (195 bytes)
└── .obsidian\ (configuração órfã do Obsidian)
```

Essa subpasta não pertence à árvore canônica do Vault (definida em MB-OMEGA-001 e selada no `_CANONICAL.md`). É ruído operacional que precisa ser removido antes que o Founder reabra o Obsidian no caminho correto.

## Objetivo único

Apagar a subpasta `MEU-OMEGA\PROJETO OMEGA\` com backup prévio em `07 ARQUIVO\versoes-antigas\`, validar a remoção, e listar o conteúdo final de `MEU-OMEGA` para conferência.

## Pré-requisitos

- Obsidian fechado completamente (inclusive bandeja do sistema)
- Google Drive Desktop ativo e sincronizando
- PowerShell aberto no Beto (não precisa elevado)
- Pasta `07 ARQUIVO\versoes-antigas\` existente

## Tarefa única

```powershell
$caminhoRuido = "G:\Meu Drive\0 0 PROJETO OMEGA\_OBSIDIAN\MEU-OMEGA\PROJETO OMEGA"
if (Test-Path $caminhoRuido) {
    $backup = "G:\Meu Drive\0 0 PROJETO OMEGA\07 ARQUIVO\versoes-antigas\ruido-PROJETO-OMEGA-interno-$(Get-Date -Format 'yyyyMMdd-HHmm').zip"
    Compress-Archive -Path $caminhoRuido -DestinationPath $backup -Force
    Remove-Item -Path $caminhoRuido -Recurse -Force
}
```

## Critério de aceite

- Backup `.zip` existe em `07 ARQUIVO\versoes-antigas\`
- Caminho `MEU-OMEGA\PROJETO OMEGA\` não existe mais
- Listagem final mostra estrutura canônica intacta

## Falhas possíveis e contingência

| Falha | Causa provável | Ação |
|---|---|---|
| Acesso negado pelo Drive | Lock por sync | Aguardar 60s, retentar; se persistir parar Drive Desktop |
| Listagem ainda mostra a pasta | Cache de enumeração do Drive | Aguardar sync (MB-004 force-sync resolve) |

## Persistência dual (Princípio #13)

- Vault Ω: `04-OPERACAO\workflows\MB-OMEGA-003-Limpeza-Ruido-Vault-v1_0-2026-0515.md`
- Vault MC: `03-GOVERNANCA\mission-briefs\omega\MB-OMEGA-003-Limpeza-Ruido-Vault-v1_0-2026-0515.md`

Nota: a MB original especificava `05-OPERACAO\mission-briefs\` nos dois vaults. A árvore canônica do Vault Ω (criada por MB-001) usa `04-OPERACAO\workflows\` para mission briefs, e o Vault MC tem `03-GOVERNANCA\mission-briefs\omega\` para MBs do Ω. Persistência dual usa os caminhos canônicos estabelecidos para consistência com MBs 001, 002, 002.5 e 002.5-PATCH já espelhadas.

## Próximo

→ MB-OMEGA-004 (force-sync Google Drive Desktop)

---

**∞**
