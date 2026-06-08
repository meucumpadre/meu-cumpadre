---
titulo: MB-AP-002 · Manifest de Hashes SHA-256 dos 7 Entregáveis
versao: v1.0
data: 2026-05-20
status: SELADO
executor: Claude Code DELL
mb_origem: MB-AP-002
proposito: Hash-verify obrigatório (Princípio MC #6 — Camadas de Segurança Operacional)
---

# MB-AP-002 · MANIFEST DE HASHES SHA-256

**20 de maio de 2026 · Tarefa 4 de 8 · Code DELL executor**

Hash-verify dos 7 entregáveis produzidos no garimpo cofounder MC × AP, conforme MB-AP-002 §4 (Princípio MC #6 — Camadas de Segurança Operacional) e Princípio MC #15 (Persistência cross-vertical).

---

## Tabela de hashes (computada via PowerShell `Get-FileHash -Algorithm SHA256` em 2026-05-23 01:10:37)

| # | Arquivo | SHA-256 | Tamanho |
|---|---|---|---:|
| 1 | `MB-AP-002-SWEEP-DIAG-2026-0520.md` | `939265AB918E3BFED052B9ABFB236264A11D8AF96B229A24AE12771071A498CB` | 19,8 KB |
| 2 | `AP-INVENTARIO-Grimorio-v1_0-2026-0520.md` | `3A6AA1D0A5E9E9F53381733AD8FD2E553C4B4B7D22FB26E905D32A4B4608DB39` | 25,6 KB |
| 3 | `AP-INVENTARIO-RouterEthics-v1_0-2026-0520.md` | `0D4927452E0467A6ED2EDA10709C2C6BD3F165AB93028318F815D54A4F93E267` | 25,4 KB |
| 4 | `AP-INVENTARIO-POPsTemplates-v1_0-2026-0520.md` | `9CB5DBEB08B5C8A17FB6B4FFD6919A4A27A8861F09A3CFF12109BD3861F549AE` | 23,5 KB |
| 5 | `AP-INVENTARIO-ADRsSpecs-v1_0-2026-0520.md` | `EE089C06C9040F1C44200A54F869090EE4AB9BC523B0655C8B43FFFA9D2ABF36` | 20,6 KB |
| 6 | `AP-INVENTARIO-StackInfra-v1_0-2026-0520.md` | `110D59CB16E3A3363EDC27A462B82AF91C7BCE365B715E30AF2E26C7B7972194` | 19,3 KB |
| 7 | `AP-INVENTARIO-Indice-MasterMap-v1_0-2026-0520.md` | `1795A8738DEE28E921EE97BBE146A5B68EC78E65875CD41B55BA0932D8291210` | 20,6 KB |

**Total persistido:** 154,8 KB · 7 arquivos `.md` · UTF-8

---

## Como reverificar (qualquer máquina)

```powershell
# PowerShell (Windows)
$dir = "G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\04-OPERACAO\logs\inventario-AP"
Get-ChildItem $dir -Filter "*.md" | Where-Object { $_.Name -notlike "MB-AP-002-MANIFEST-*" } | ForEach-Object {
    $hash = (Get-FileHash $_.FullName -Algorithm SHA256).Hash
    "{0} {1}" -f $hash, $_.Name
}
```

```bash
# Bash/Linux/macOS
cd "G:/Meu Drive/0 0 MEU CUMPADRE/0 0 Gestão Software/OBSIDIAN/MEU CUMPADRE/04-OPERACAO/logs/inventario-AP/"
sha256sum *.md | grep -v MANIFEST
```

Se qualquer hash divergir do manifest, o arquivo foi alterado pós-selagem (intencional ou não). Verificar `git status` e `git log` se sob versionamento.

---

## Cadeia de custódia

- **Produção:** Claude Code DELL via Mission Brief MB-AP-002
- **Founder/Cofounder:** Alessandro de Souza Neves × Cofounder C3.1 (origem do MB)
- **Validação externa pendente:** founder deve revisar Top 20 ouros + Roadmap de 4 Sprints + 10 pendências `[CONFIRMAR FOUNDER]` no documento Índice MasterMap (§9)
- **Próximos passos:** 8º documento fundacional AP confirmado (este inventário). Sprint 1 AP (contrato + RIPD + Pv0 + 4 Cérebros) na fila.

---

**MB-AP-002 · MANIFEST DE HASHES v1.0 · SELADO 20/05/2026**
Executor: Claude Code DELL · Princípio MC #6 honrado
∞
