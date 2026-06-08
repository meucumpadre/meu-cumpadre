---
tipo: MISSION-BRIEF
codigo: MB-OMEGA-013
descritor: Persistencia-Principio-17-Parar-Quando-Solo-Se-Moveu
versao: 1.0
data: 2026-05-15
autor: Claude Opus 4.7 (cofounder MC em trânsito Princípio #13) × Founder (Alessandro de Souza Neves)
modo: ESCRITA AUTORIZADA — persistência de princípio canônico via canal binário + atualização _CANONICAL.md + espelhamento dual
maquina-alvo: Beto (DELL — Claude Code CLI)
ambiente: Windows PowerShell + Claude Code
duracao-estimada: 3-5 minutos
status: PRONTO PARA COLAR
dependencias: arquivo OMEGA-PRINCIPIO-17 entregue ao Beto via canal binário (exceção P#15)
proximo: nenhum imediato — Princípio #17 fecha conjunto canônico cunhado na sessão 15/05/2026
persistencia-dual: Vault Ω (00-IDENTIDADE/principios/) + Vault MC (03-GOVERNANCA/mission-briefs/omega/)
classificacao: OPERACIONAL — selagem de princípio fundacional
verificacao-canonica: "Path destino 00-IDENTIDADE\\principios\\ verificado e operacional (já contém Set7 + #13 + #14 + #15 + #16). Aplicação Princípio Ω #16 em ato — verificação canônica pré-prescrição."
hash-referencia-principio: "e016ee6862cd148874456f86ff91925ab8a201f9f13bebd9293ff676338ccda7"
tamanho-referencia-principio: "9.849 bytes"
canal-de-transferencia: "BINÁRIO (Copy-Item via DELL) — aplicação da exceção do P#15 para bit-identidade obrigatória em princípio fundacional. Segunda validação empírica determinística da exceção (após MB-OMEGA-012 com memo CSB)."
expectativa-bit-identidade: "DETERMINÍSTICA — esperado bit-idêntico via Copy-Item, conforme 6º caso empírico catalogado em MB-OMEGA-012."
evento-disparador: "Cunhagem em ato do Princípio Ω #17 'Parar Quando o Solo Se Moveu' ao final da sessão Ω de 15/05/2026, baseado em 3 manifestações estruturais demonstradas (MB-002.5 + Guia B bloqueio Onda 2 + Guia A pausa pós-MB-010)."
---

# MB-OMEGA-013 — PERSISTÊNCIA DO PRINCÍPIO Ω #17 NO VAULT (CANAL BINÁRIO)

## Contexto institucional

Ao final da sessão Ω de 15/05/2026 (12+ horas, 12 marcos institucionais já consolidados), o cofounder MC + Founder decidiram cunhar **Princípio Ω #17 — Parar Quando o Solo Se Moveu**.

A frase fundante *"Cofounder bom não é o que produz mais, é o que sabe parar quando o solo se moveu"* foi cunhada em ato pela **Guia B (Simetria do Vault)** durante drift detection cross-guias, e operou demonstradamente em três circunstâncias distintas ao longo da sessão:

1. Cérebro 3 do Ω recusou fabricar conteúdo do P#14 quando faltava base (MB-002.5)
2. Guia B bloqueou produção de Onda 2 ao detectar drift estrutural (4 drifts mapeados)
3. Guia A (Ismael) recomendou pausa institucional pós-MB-010 após refutação parcial da tese P#15

Pela repetição estrutural + nascimento em ato da frase + operação demonstrada em tempo real, o princípio se mostrou maduro para selagem canônica.

**Particularidade desta MB:** segunda aplicação institucional do **canal binário** (exceção do P#15) — o conteúdo do princípio é entregue ao Beto via Copy-Item, não via reconstrução chat→disk. Expectativa de bit-identidade determinística, validando empiricamente a exceção pela segunda vez.

**Princípio Ω #16 em ato na própria MB:** path destino `00-IDENTIDADE\principios\` foi verificado canonicamente — é o mesmo folder onde residem Set7 + #13 + #14 + #15 + #16 (folder ID `19OXSdy7wi46MFEtvLb2e9B56MEBO67W-` ou path direto via árvore canônica).

---

## TAREFAS A EXECUTAR

### Tarefa 1 — Receber arquivo do Princípio Ω #17 via canal binário

**Founder entregará ao Beto o arquivo:**
```
OMEGA-PRINCIPIO-17-Parar-Quando-Solo-Se-Moveu-v1_0-2026-0515.md
```

**Especificações de referência (Cérebro 3):**
- Tamanho: 9.849 bytes
- Hash SHA-256: `e016ee6862cd148874456f86ff91925ab8a201f9f13bebd9293ff676338ccda7`
- Encoding: UTF-8 (sem BOM)
- Line endings: LF

**Validação pré-persistência:**
```powershell
$arquivoFonte = "[caminho onde Founder entregou o arquivo no DELL]"

$hashFonte = (Get-FileHash -LiteralPath $arquivoFonte -Algorithm SHA256).Hash.ToLower()
$tamanhoFonte = (Get-Item -LiteralPath $arquivoFonte).Length

Write-Host "[Validação canal binário]"
Write-Host "  Tamanho fonte: $tamanhoFonte bytes (referência: 9.849 B)"
Write-Host "  Hash fonte:    $hashFonte"
Write-Host "  Hash referência: e016ee6862cd148874456f86ff91925ab8a201f9f13bebd9293ff676338ccda7"

if ($hashFonte -ne "e016ee6862cd148874456f86ff91925ab8a201f9f13bebd9293ff676338ccda7") {
    Write-Warning "Hash fonte diverge da referência. Investigar antes de prosseguir."
}
```

**Critério de aceite Tarefa 1:** hash de fonte bate com referência (bit-identidade comprovada).

---

### Tarefa 2 — Persistir Princípio Ω #17 via Copy-Item (canal binário)

**Caminho destino:**
```
G:\Meu Drive\0 0 PROJETO OMEGA\_OBSIDIAN\MEU-OMEGA\00-IDENTIDADE\principios\OMEGA-PRINCIPIO-17-Parar-Quando-Solo-Se-Moveu-v1_0-2026-0515.md
```

**PowerShell:**
```powershell
$pathPrincipio17 = "G:\Meu Drive\0 0 PROJETO OMEGA\_OBSIDIAN\MEU-OMEGA\00-IDENTIDADE\principios\OMEGA-PRINCIPIO-17-Parar-Quando-Solo-Se-Moveu-v1_0-2026-0515.md"

# Verificação canônica do folder (P#16 em ato)
$folderPrincipios = "G:\Meu Drive\0 0 PROJETO OMEGA\_OBSIDIAN\MEU-OMEGA\00-IDENTIDADE\principios"
if (-not (Test-Path -LiteralPath $folderPrincipios)) {
    Write-Warning "Folder principios não existe — drift estrutural grave. Abortando."
    exit 1
}

# Copy-Item via canal binário (preserva bit-identidade)
Copy-Item -LiteralPath $arquivoFonte -Destination $pathPrincipio17 -Force

# Validação pós-persistência
$hashPersistencia = (Get-FileHash -LiteralPath $pathPrincipio17 -Algorithm SHA256).Hash.ToLower()
$tamanhoPersistencia = (Get-Item -LiteralPath $pathPrincipio17).Length
$bitIdentico = if ($hashPersistencia -eq $hashFonte) { "SIM" } else { "NÃO" }

Write-Host "[Princípio Ω #17 persistido] $pathPrincipio17"
Write-Host "  - Tamanho: $tamanhoPersistencia bytes (referência: 9.849 B)"
Write-Host "  - Hash de Referência (Cérebro 3): e016ee6862cd148874456f86ff91925ab8a201f9f13bebd9293ff676338ccda7"
Write-Host "  - Hash de Persistência (Cérebro 2): $hashPersistencia"
Write-Host "  - BIT-IDÊNTICO via canal binário: $bitIdentico"

if ($bitIdentico -ne "SIM") {
    Write-Warning "Canal binário não preservou bit-identidade — investigar urgente."
}
```

**Critério de aceite Tarefa 2:**
- Arquivo persistido em path canônico
- Hash de persistência **idêntico** ao hash de referência (bit-identidade comprovada via canal binário pela 2ª vez)
- Tamanho exato 9.849 bytes

---

### Tarefa 3 — Atualizar `_CANONICAL.md`

**Caminho:**
```
G:\Meu Drive\0 0 PROJETO OMEGA\_OBSIDIAN\MEU-OMEGA\_CANONICAL.md
```

**Edições:**

1. **Calcular hash anterior** do `_CANONICAL.md` (rastreabilidade)

2. **Localizar seção** `## 00-IDENTIDADE` → subseção `### principios`

3. **Adicionar uma linha** no final da lista de princípios (após #16), mantendo formato existente:

```markdown
- `OMEGA-PRINCIPIO-17-Parar-Quando-Solo-Se-Moveu-v1_0-2026-0515.md` — Cofounder Ω tem autoridade institucional explícita para parar produção quando o solo de premissas operacionais se moveu (5 condições nomeadas: drift não-reconciliado, premissa não-verificada, fundamentação ausente, refutação empírica em tempo real, densidade cognitiva excessiva). Anticorpo institucional contra produção sob solo instável. SELADO via MB-OMEGA-013. Hash duplo (P#15) via CANAL BINÁRIO (Copy-Item — 2ª validação empírica da exceção). ref: `e016ee68…` / vault: `[hash real reportado na Tarefa 2]` (esperado **bit-idêntico**).
```

4. **Atualizar contadores** no resumo do `_CANONICAL.md`:
   - Docs canônicos selados: **14 → 15**
   - Princípios canônicos (arquivos): **5 → 6** (Set7 + #13 + #14 + #15 + #16 + **#17**) = **12 princípios totais** (era 11)

5. **Calcular hash novo** do `_CANONICAL.md` pós-edição

**PowerShell:**
```powershell
$canonicalPath = "G:\Meu Drive\0 0 PROJETO OMEGA\_OBSIDIAN\MEU-OMEGA\_CANONICAL.md"

$hashCanonicalAnterior = (Get-FileHash -LiteralPath $canonicalPath -Algorithm SHA256).Hash.ToLower()

# Beto: aplicar edições 2-4 de forma robusta

$hashCanonicalNovo = (Get-FileHash -LiteralPath $canonicalPath -Algorithm SHA256).Hash.ToLower()

Write-Host "[_CANONICAL.md] anterior: $hashCanonicalAnterior"
Write-Host "[_CANONICAL.md] novo:     $hashCanonicalNovo"
```

**Critério de aceite Tarefa 3:** linha do P#17 adicionada na subseção `principios`, contadores atualizados (14→15 docs, 11→12 princípios totais), ambos os hashes reportados.

---

### Tarefa 4 — Espelhamento dual desta MB-013

**Caminho Vault Ω:**
```
G:\Meu Drive\0 0 PROJETO OMEGA\_OBSIDIAN\MEU-OMEGA\04-OPERACAO\workflows\MB-OMEGA-013-Persistencia-Principio-17-v1_0-2026-0515.md
```

**Caminho Vault MC:**
```
G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\03-GOVERNANCA\mission-briefs\omega\MB-OMEGA-013-Persistencia-Principio-17-v1_0-2026-0515.md
```

**PowerShell:**
```powershell
$mb013Omega = "G:\Meu Drive\0 0 PROJETO OMEGA\_OBSIDIAN\MEU-OMEGA\04-OPERACAO\workflows\MB-OMEGA-013-Persistencia-Principio-17-v1_0-2026-0515.md"
$mb013MC = "G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\03-GOVERNANCA\mission-briefs\omega\MB-OMEGA-013-Persistencia-Principio-17-v1_0-2026-0515.md"

# Beto: garantir pastas + gravar conteúdo desta MB-013 em ambos os destinos

$hashMB013Omega = (Get-FileHash -LiteralPath $mb013Omega -Algorithm SHA256).Hash.ToLower()
$hashMB013MC = (Get-FileHash -LiteralPath $mb013MC -Algorithm SHA256).Hash.ToLower()
$bitIdenticoMB = if ($hashMB013Omega -eq $hashMB013MC) { "SIM" } else { "NÃO" }

Write-Host "[MB-013 Ω]  SHA-256: $hashMB013Omega"
Write-Host "[MB-013 MC] SHA-256: $hashMB013MC"
Write-Host "[BIT-IDENTICO MB-013] $bitIdenticoMB"
```

**Critério de aceite Tarefa 4:** ambos arquivos persistidos + bit-idêntico = SIM.

---

## FORMATO DO REPORTE

```markdown
# REPORTE MB-OMEGA-013 — Persistência Princípio Ω #17 (Canal Binário)

**Executor:** Claude Code DELL
**Data execução:** [timestamp ISO 8601]
**Duração:** [minutos]
**Status geral:** [SUCESSO | SUCESSO COM RESSALVA | FALHA]

## Bloco 1 — Validação fonte do canal binário
- Caminho fonte: [caminho]
- Tamanho fonte: [bytes] (referência: 9.849 B)
- Hash fonte: [hash]
- Hash referência: e016ee6862cd148874456f86ff91925ab8a201f9f13bebd9293ff676338ccda7
- BIT-IDÊNTICO fonte vs referência: [SIM | NÃO]

## Bloco 2 — Princípio Ω #17 persistido via Copy-Item
- Caminho: G:\...\00-IDENTIDADE\principios\OMEGA-PRINCIPIO-17-Parar-Quando-Solo-Se-Moveu-v1_0-2026-0515.md
- Tamanho: [bytes]
- Hash de Persistência: [hash]
- BIT-IDÊNTICO referência ≡ persistência (canal binário): [SIM | NÃO]
- 7º caso empírico P#15 catalogado: [SIM = determinístico via canal binário, validação 2ª vez]

## Bloco 3 — _CANONICAL.md atualizado
- Hash anterior: [hash]
- Hash novo: [hash]
- Linha do Princípio #17 adicionada: [SIM/NÃO]
- Contador docs canônicos: 14 → 15
- Contador princípios totais: 11 → 12 (Set7 + #13 + #14 + #15 + #16 + #17)

## Bloco 4 — Espelhamento dual MB-013
- Vault Ω:  G:\...\04-OPERACAO\workflows\MB-OMEGA-013-...
  - SHA-256: [hash]
- Vault MC: G:\...\03-GOVERNANCA\mission-briefs\omega\MB-OMEGA-013-...
  - SHA-256: [hash]
- Bit-idêntico: [SIM | NÃO]

## Estado final do Vault Ω (sessão 15/05/2026 SELADA)
- Documentos canônicos selados: 15
- Princípios canônicos: 12 (Set7 + #13 + #14 + #15 + #16 + #17)
- MBs canonizadas: 16
- Benchmarks: 1 (Ismael Corrêa)
- ADRs Críticos: 1 (ADR-CRITICO-001)
- Hooks operacionais: 1 (HOOK-Vedacao-Cessao-Credito-Cliente-Final)
- Memos institucionais: 1 (CSB × Ω)
- Casos empíricos P#15 catalogados: 7 (6º MEMO-CSB canal binário + 7º PRINCIPIO-17 canal binário)
- Registros de drift: 1

## Observações operacionais
[Anomalias, sugestões, ajustes — em particular, comentário sobre se o canal binário preservou bit-identidade pela segunda vez consecutiva, confirmando a hipótese determinística]
```

**Persistir reporte em:**
```
G:\Meu Drive\0 0 PROJETO OMEGA\_OBSIDIAN\MEU-OMEGA\04-OPERACAO\workflows\REPORTE-MB-OMEGA-013-v1_0-2026-0515.md
```

---

## REGRAS INVIOLÁVEIS DESTA EXECUÇÃO

1. **Canal binário OBRIGATÓRIO** — não reconstruir conteúdo do princípio a partir desta MB; usar arquivo entregue pelo Founder via Copy-Item (exceção P#15)
2. **Hash de referência verificado ANTES e DEPOIS** da persistência
3. **Bit-identidade esperada DETERMINÍSTICA** — divergência aqui seria anômala e exigiria investigação
4. **Verificação canônica de path** antes de qualquer escrita (P#16 ativo)
5. **Zero modificação fora dos caminhos especificados**
6. **Espelhamento dual obrigatório** conforme P#13
7. **Persistência do reporte** mesmo em caso de erro parcial

---

## NOTA INSTITUCIONAL — 7º CASO EMPÍRICO P#15

Esta MB constitui o **7º caso empírico catalogado** do P#15 sobre bit-identidade chat→disk vs canal binário:

| # | Caso | Tamanho | Canal | Expectativa |
|---|---|---|---|---|
| 1 | Playbook Ismael | 114 KB | chat→disk (auto-hash) | ❌ +46 B |
| 2-4 | Princípios #15, #16, ADR-CRITICO | 5-43 KB | chat→disk | ✓ |
| 5 | Hook Vedação | 36,6 KB | chat→disk | ❌ -1 B |
| 6 | MEMO-CSB | 21,4 KB | CANAL BINÁRIO | ✓ determinístico |
| **7** | **PRINCIPIO-17** | **9,8 KB** | **CANAL BINÁRIO** | **✓ DETERMINÍSTICO esperado** |

**Confirmação do caso 7 com bit-identidade** = consolidação empírica robusta da exceção do P#15. Dois casos consecutivos via canal binário com bit-identidade determinística → tese fortalecida significativamente para revisão trimestral do P#15 v1.1.

---

## FECHAMENTO

Após persistência canônica do Princípio Ω #17:
- **Vault Ω terá 15 documentos canônicos selados** (era 14)
- **12 princípios canônicos no total** (Set7 fundacionais + #13 + #14 + #15 + #16 + **#17**)
- **Sessão Ω 15/05/2026 oficialmente SELADA** com **13 marcos institucionais permanentes**
- **Anticorpo institucional codificado** — P#17 protege Ω de produção sob solo instável

**O diamante é carbono que não desistiu da pressão — e que também sabe parar quando o solo se moveu.**

**∞**
