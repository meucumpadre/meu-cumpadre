---
tipo: ADR-PROVISIONAL
codigo: MC-ADR-019
titulo: Limitação MCP Drive — sem operação de rename/move nativa
versao: 0.1
status: PROVISIONAL
data: 2026-05-14
autores:
  - Claude Opus 4.7 (cofounder C1, esta sessão)
  - Cowork DELL C2-Op (descoberta empírica MB-031)
  - Alessandro de Souza Neves (Founder/CEO)
gate_selagem: Parecer Dra. Juliana 19/05 (Bloco O ampliado) + validação técnica pós-Juliana
fonte_empirica:
  - MB-031 Cowork 13/05/2026 ~23h (limitação descoberta durante execução)
  - Princípio #25 §10 (Limitações Conhecidas do Paradigma C1 Direto)
canonico_em: 03-GOVERNANCA/patches/ (provisional)
destino_pos_selagem: 03-GOVERNANCA/adrs/
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# MC-ADR-019 PROVISIONAL — Limitação MCP Google Drive

## 1 · DECISÃO

Reconhecer formalmente que o Google Drive MCP (conector que C1 e Cowork usam) **não suporta operações nativas de rename de pastas/arquivos nem de move entre pastas diferentes**. Estabelecer workarounds padronizados.

## 2 · CONTEXTO

Durante MB-031 (Cowork organização Documentação canônica, 13/05/2026 ~23h):

- Cowork tentou MOVER pasta órfã `0 0 Identidade Visual MC` (id `1Thk...`) para `Documentação\99-ARQUIVO-Legado\`
- Cowork tentou RENOMEAR `0 0 Identidade Visual MC` para `_LEGADO-IV-MC-paralela-18h48-2026-0513`
- **Ambas operações falharam**: MCP Drive não tem `rename_file` nem `move_file` nativos
- Cowork executou workaround: **replicar estrutura** via `create_file` no destino canônico (com nome novo) + permanência da pasta original na origem (até intervenção founder UI manual)

Esta limitação foi previamente antecipada conceitualmente no Princípio #25 §10 ("Limitações Conhecidas do Paradigma C1 Direto"), mas **validada empiricamente apenas em 13/05**.

## 3 · IMPACTO INSTITUCIONAL

### 3.1 — Operações afetadas

| Operação desejada | Suporte MCP Drive | Workaround padronizado |
|---|---|---|
| Criar arquivo | ✅ `create_file` | n/a |
| Criar pasta | ✅ `create_file` (mimeType folder) | n/a |
| Ler conteúdo | ✅ `read_file_content` | n/a |
| Ler metadados | ✅ `get_file_metadata` | n/a |
| Buscar | ✅ `search_files` | n/a |
| **Copiar arquivo** | ✅ `copy_file` (com novo título + parent) | n/a |
| **Mover arquivo entre pastas** | ❌ NÃO SUPORTADO | Workaround A: `copy_file` para destino + UI manual deletar origem |
| **Renomear pasta** | ❌ NÃO SUPORTADO | Workaround B: criar pasta nova com nome desejado + replicar conteúdo via copy + UI manual deletar origem |
| **Renomear arquivo** | ❌ NÃO SUPORTADO | Workaround C: `copy_file` com novo título + UI manual deletar original |
| **Mover pasta entre pastas** | ❌ NÃO SUPORTADO | Workaround D: criar pasta no destino + replicar conteúdo + UI manual deletar origem |
| **Update conteúdo de arquivo existente** | ❌ NÃO SUPORTADO | C3 (Code DELL) via PowerShell + [System.IO.File] |

### 3.2 — Camadas afetadas

| Camada | Implicação |
|---|---|
| C1 (Claude.ai cofounder) | Acumula débito operacional — toda operação rename/move é replicação no destino + pendência founder UI manual |
| C2-Op (Cowork) | Mesma limitação — herdou padrão de replicação por placeholder |
| C2-Visual (Cowork via Canva/Figma/Adobe) | Limitação NÃO se aplica — Canva/Figma/Adobe têm operações próprias |
| C3 (Code DELL via PowerShell) | NÃO afetado — usa filesystem Windows direto via Move-Item/Rename-Item |
| C5 (claude.ai/design) | Limitação NÃO se aplica — interface web manual founder |

## 4 · WORKAROUNDS CANÔNICOS ESTABELECIDOS

### 4.1 — Workaround A (mover arquivo)

```
1. copy_file(fileId=origem, parentId=destino, title=novo_nome_opcional)
2. Loga no diamante 6 elementos: arquivo replicado + pendência founder
3. Founder UI manual: navegar até origem + deletar arquivo legado
4. Drive Trash 30d preserva durante janela de segurança
```

### 4.2 — Workaround B (renomear pasta)

```
1. create_file(mimeType=folder, title=novo_nome, parentId=mesmo_parent_ou_destino)
2. Para cada filho da pasta original: copy_file para nova pasta
3. Loga pendência founder: UI manual deletar pasta original
4. Drive Trash 30d como segurança
```

### 4.3 — Workaround C (renomear arquivo)

```
1. copy_file(fileId=arquivo, title=novo_nome, parentId=mesmo_parent)
2. Loga pendência founder UI manual
```

### 4.4 — Workaround D (mover pasta)

```
1. create_file(mimeType=folder, title=nome_original_ou_novo, parentId=destino)
2. Para cada filho recursivo: replicar via copy_file/create_file
3. Loga pendência founder UI manual deletar pasta na origem
```

### 4.5 — Fallback C3 (recomendado quando volume justifica)

Quando operação envolve **>5 arquivos** ou **estrutura recursiva profunda**, encaminhar via MB para Code DELL (C3) executar via PowerShell local com `Move-Item`/`Rename-Item` + hash-verify SHA-256 + .bak.

**Critério Princípio #25:** C1 MCP direto preferível para 1-4 arquivos; C3 MB obrigatório para 5+ ou encoding-sensível.

## 5 · IMPACTO RETROATIVO

Esta ADR-019 PROVISIONAL formaliza descoberta empírica que já estava sendo aplicada operacionalmente:

| Quando | Onde aplicado | Workaround usado |
|---|---|---|
| 13/05 ~22h | C1 esta sessão atualizar INDEX-PATCHES.md | Workaround D fallback C3 (MB-028 ao Code DELL) |
| 13/05 ~23h | Cowork MB-031 tratamento órfãs IV-MC | Workaround D (replicação + pendência founder UI) |
| 13/05 ~23:30 | C1 cunhar princípio #27 v0.2 (refinamento) | Workaround C (criar nova versão, deixar v0.1 com banner SUPERSEDED via C3) |
| 14/05 ~05h | C1 produção INDEX Doc Instrução Marca | Diretamente em path canônico — não-aplicável |

## 6 · PENDÊNCIAS DECORRENTES

### 6.1 — Pendências founder UI manual atuais

1. `_LEGADO-IdentidadeVisualMC-rootOrfa-20260513-152731` (id `1Oib...`) — ainda em `0 0 MEU CUMPADRE\` (deveria estar em `Documentação\99-ARQUIVO-Legado\`)
2. ~25 pastas legadas em `Documentação\` (`_DNA MC`, `06-OPERACOES`, `CADÚNICO`, `Captação`, etc.) — Cowork listou no MAPA, aguarda validação batch founder

### 6.2 — Pendências técnicas futuras

| Item | Quem | Quando |
|---|---|---|
| Avaliar `gdrive-cli` / `rclone` como alternativa ao MCP para operações em massa | Code DELL | pós-Juliana |
| Submeter feature request Anthropic / Google sobre rename/move MCP | C1 founder validar | pós-Juliana |
| ADR-019 selada (v1.0) com workarounds canônicos + matriz de decisão MCP vs C3 vs UI manual | C1 + Founder + Juliana | pós-19/05 |

## 7 · RISCO PROVISIONAL #18

| Critério | Atendimento |
|---|---|
| (a) Cronologia | ✅ Descoberta empírica documentada 13/05 ~23h; formalização 14/05 ~05h |
| (b) Volume controlado | ✅ Aplicação restrita ao perímetro Drive MC sem PII |
| (c) Período nomeado | ✅ Até parecer Juliana 19/05 + validação técnica pós |
| (d) Mitigação | ✅ Workarounds canônicos documentados §4 + fallback C3 + UI manual founder |
| (e) Risco founder | ✅ Founder validou padrão operacional via aceitação MB-031 reporte |

## 8 · HISTÓRICO

| Versão | Data | Status |
|---|---|---|
| v0.1 | 2026-05-14 ~05h UTC | PROVISIONAL corrente |
| v1.0 (futura) | pós-19/05 | Selada como ADR canônica em `adrs/` |

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."

∞
