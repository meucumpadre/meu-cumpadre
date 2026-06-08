# MC-INVENTARIO — Identidade Visual Drive · 14/05/2026

> Reporte FASE 0 do MB-038 (Inventário Identidade Visual · Claude Design).
> Modo: DIAGNÓSTICO APENAS — zero modificações executadas no escopo MB.
> Origem: Code DELL (Cérebro 2, terminal HP ENVY) sob autorização Founder.
> Hierarquia: Dignidade > Compliance > Viabilidade.

---

## §1. Pastas Identidade Visual encontradas

| Caminho (relativo a `Documentação\`) | Criação | Modificação | Total arquivos | Tipos |
|---|---|---|---|---|
| `Identidade Visual\` | (canônica atual) | 14/05/2026 | 64 | .md:20 · .png:25 · .txt:3 · .skill:3 · .ini:11 · .zip:1 · .pdf:1 |
| `01-DNA-Identidade\` | — | — | 1 | apenas `.ini` (pasta vazia operacionalmente) |
| `_QUEM SOMOS POSICIONAMENTO DE MARCA\Identidade Visual\` | mar/2026 | 14/05/2026 | 9 | .gdoc:2 · .md:2 · .PNG:2 · .ini:2 · .jpg:1 |
| `MC-PACOTE-Juliana-19Mai2026\07-PRODUTO-IDENTIDADE-TA\` | 14/05/2026 (criado por MB-039) | 14/05/2026 | 5 | Não é "Identidade Visual" — pasta do pacote Juliana 19/05, matched por substring |

**Observação 1:** As pastas mencionadas no §1 do MB (`_LEGADO-IdentidadeVisualMC-rootOrfa-20260513-152731`, `identidade-visual` lowercase, `exploracao-identidade-visual-pre-selagem-13mai`) **NÃO existem no FS local de `Documentação/`**. A pasta `_HISTORICO\exploracao-identidade-visual-pre-selagem-13mai\` foi localizada no **Vault** (`OBSIDIAN\MEU CUMPADRE\_HISTORICO\`), não em Documentação. Demais legados podem ser cloud-only (Drive sync parcial) ou já consolidados.

**Observação 2:** Pasta canônica candidata Drive ID `1xqdQckOvsK3WxE8ujsiLic5S11N89Ohv` mencionada no MB corresponde provavelmente a `Documentação\Identidade Visual\` no FS local — mesma pasta, vista por dois domínios (Drive ID vs filesystem path).

---

## §2. PNG Símbolo Seed — candidatos

Hashes SHA-256 calculados em `Documentação\` (pastas Identidade Visual). 38 candidatos PNG/SVG totais; 7 grupos de duplicatas hash-match detectadas.

### §2.1 Tabela de candidatos prováveis canônicos (MC-ATIVO-Seed pattern, 13/05/2026)

| Nome | Tamanho (KB) | SHA-256 | Path relativo |
|---|---|---|---|
| `MC-ATIVO-Seed-Logo-Principal-LayoutA-2026-0513.png` | 1924,00 | `46A35E2060CC6D2D...` | `.\Identidade Visual\` |
| `MC-ATIVO-Seed-Logo-Marca-2026-0513.png` | 1924,00 | `46A35E2060CC6D2D...` | `.\Identidade Visual\` |
| `MC-ATIVO-Seed-Logo-Principal-LayoutB-2026-0513.png` | 5881,05 | `8A9859A92ABB3B85...` | `.\Identidade Visual\` |
| `MC-ATIVO-Seed-Logo-Marca-Transparente-2026-0513.png` | 2557,73 | `D9C6A320FEA18D2A...` | `.\Identidade Visual\` |
| `MC-ATIVO-Seed-Logo-Principal-2026-0513.png` | 2166,37 | `30FDAEE2EDBE11C2...` | `.\Identidade Visual\` |
| `MC-ATIVO-Seed-Logo-Marca-2026-0513 (1).png` | 5279,56 | `4B5273D526B77842...` | `.\Identidade Visual\` (Drive auto-rename de duplicata) |

### §2.2 ⚠️ ALERTA CRÍTICO — Marca == LayoutA (hash idêntico)

Os arquivos `MC-ATIVO-Seed-Logo-Marca-2026-0513.png` e `MC-ATIVO-Seed-Logo-Principal-LayoutA-2026-0513.png` **compartilham o mesmo SHA-256 `46A35E2060CC6D2D...`** — são byte-a-byte idênticos.

Pela ERRATA Selo Oficial (MB-034), Marca e LayoutA deveriam ter Drive IDs **distintos** (`1YHDk65A...` Marca vs `1H4FAEwIcIibSI21fijRFn08GReZMbTL6` LayoutA). FS local mostra arquivos idênticos. **Founder precisa decidir** qual versão fica como Marca (símbolo isolado) vs LayoutA (composição completa) — atualmente são o mesmo arquivo.

### §2.3 Outras famílias de duplicatas detectadas

- `MC-ATIVO-Seed-Logo-Principal-LayoutB` ≡ `Manus.im\logo _ manus inicial.png` ≡ `GROK\grok-image-b9aba3cb-...png` (hash `8A9859A9...`, 6.02 MB) — LayoutB veio do output Manus original
- `MC-ATIVO-Seed-Logo-Principal-2026-0513.png` ≡ `_LOGO SEED MC 1.png` ≡ `Manus.im\_LOGOSEEDMC1.png` (hash `30FDAEE2...`, 2.22 MB)
- `MC-ATIVO-Seed-Logo-Marca-2026-0513 (1).png` ≡ `Manus.im\logo_ouro.png` (hash `4B5273D5...`, 5.41 MB)
- `MC-ATIVO-Seed-Logo-Marca-Transparente-2026-0513.png` ≡ `Manus.im\logo_ouro_fundo transparente.png` (hash `D9C6A320...`, 2.62 MB)

### §2.4 Recomendação canônica para upload Claude Design (Founder valida)

| Papel | Path canônico recomendado | SHA-256 (16) | Justificativa |
|---|---|---|---|
| **Símbolo isolado (Marca)** | `Identidade Visual\MC-ATIVO-Seed-Logo-Marca-Transparente-2026-0513.png` | `D9C6A320FEA18D2A` | 2.62 MB · fundo transparente · símbolo isolado puro · ideal para Sistema de Projeto Claude Design |
| **Logo completo composição** | `Identidade Visual\MC-ATIVO-Seed-Logo-Principal-LayoutA-2026-0513.png` | `46A35E2060CC6D2D` | 1.92 MB · layout completo · porém **idêntico a Marca-2026-0513.png** (alerta §2.2) |

---

## §3. SPEC Visual Law v0.1 PROVISIONAL — busca

✅ **ENCONTRADA — duas cópias hash-idênticas:**

| Local | Path completo | SHA-256 | Tamanho | Modificado |
|---|---|---|---|---|
| Documentação | `Documentação\Identidade Visual\MC-SPEC-IdentidadeVisual-VisualLaw-PaletaJuridica-v0_1-PROVISIONAL-2026-0514.md` | `FAC17CFEF38CA268A9A08DA2A11C4F806852A0A55AA13CC9147FF8C45D4C0F80` | 17 472 bytes | 14/05/2026 15:07:33 |
| Vault | `OBSIDIAN\MEU CUMPADRE\01-IDENTIDADE\MC-SPEC-IdentidadeVisual-VisualLaw-PaletaJuridica-v0_1-PROVISIONAL-2026-0514.md` | `FAC17CFEF38CA268A9A08DA2A11C4F806852A0A55AA13CC9147FF8C45D4C0F80` | 17 472 bytes | 14/05/2026 15:07:44 |

Cross-Cérebro 1↔2: ✅ idêntico (hash match).

**Recomendação Founder:** usar **Documentação** como fonte de upload para Claude Design (Cérebro 1 é canal externo apresentável; Vault é governança institucional).

**Notas:**
- Nome do arquivo difere do termo "Visual Law" puro — é `MC-SPEC-IdentidadeVisual-VisualLaw-PaletaJuridica-v0_1-PROVISIONAL-2026-0514.md`. Combina "Visual Law" + "Paleta Jurídica". Confirmar se este é o canônico ou se há SPEC separada apenas "Visual Law".
- O título da pauta MB-038 diz "paleta azul marinho + ouro + off-white" — o arquivo encontrado é "Paleta Jurídica", verificar congruência interna do conteúdo (não foi feito read substantivo — fora do escopo).

---

## §4. Documentos institucionais fev/2026 (cloud-only)

Esses são Google Docs — não baixam automaticamente para FS. Marcar **AÇÃO FOUNDER** para export manual.

| Documento | URL Google Doc | Ação Founder pré-Claude Design |
|---|---|---|
| **Master Prompt v1.0** | https://docs.google.com/document/d/14NZfPneObTYHZzpYn8iS174LHQ7Ywc2dRVrLwd4mPi4/edit | Arquivo → Download → PDF (`.pdf`) para upload Claude Design |
| **Briefing v1.0 (Zilda-STF · 7 predicados)** | https://docs.google.com/document/d/1bjFD9uZxasZ-dCzYT53v4h_43AEMZ_xoyRGx6C5MmHA/edit | Arquivo → Download → PDF (`.pdf`) para upload Claude Design |

Detectada também referência local em `_QUEM SOMOS POSICIONAMENTO DE MARCA\Identidade Visual\`:
- `Identidade_visual_meucumpadre _ logo _ prompt_master.gdoc` (stub Drive — não é o conteúdo)
- `Identidade_visual_meucumpadre _ logo _ prompt_master.md` — possível espelho local do Master Prompt (Founder validar se conteúdo está atualizado)
- `briefing_identidade_visual_meucumpadre.gdoc` (stub Drive)

---

## §5. Duplicatas físicas detectadas

7 grupos de arquivos com SHA-256 idêntico em pastas `Identidade Visual\`:

| Hash (16) | Cópias | Tamanho | Significado |
|---|---|---|---|
| `46A35E2060CC6D2D` | 4 | 1.97 MB | LayoutA == Marca == 2× `_LOGO SEED MC.png` (canônico colidindo entre 2 papéis distintos) |
| `8A9859A92ABB3B85` | 3 | 6.02 MB | LayoutB == output Manus original == output GROK iconografia |
| `30FDAEE2EDBE11C2` | 3 | 2.22 MB | Principal == `_LOGO SEED MC 1.png` == `_LOGOSEEDMC1.png` (Manus stage 1) |
| `4B5273D526B77842` | 2 | 5.41 MB | Marca "(1)" == `logo_ouro.png` (Manus) — versão alternativa do mesmo arquivo |
| `D9C6A320FEA18D2A` | 2 | 2.62 MB | Marca-Transparente == `logo_ouro_fundo transparente.png` (Manus) |
| `1BBACE97889DE390` | 2 | 5.05 MB | `meu_cumpadre_final.png` x2 (Manus.im pastas duplicadas) |
| `139FE1DBE5DC8578` | 2 | 7 KB | `LOGO modo contemplativo.skill` == `contemplative-brand-identity.skill` (mesma skill renomeada) |

**Não consolidar agora.** Apenas mapeado para futura limpeza via Princípio #29 (`99-ARQUIVO-Legado/`).

---

## §6. Estrutura recomendada pós-consolidação (proposta · NÃO executada)

```
Documentação/
└── Identidade Visual/                       ← canônica única
    ├── MC-ATIVO-Seed-Logo-Marca-Transparente-2026-0513.png  ← Símbolo isolado
    ├── MC-ATIVO-Seed-Logo-Principal-LayoutA-2026-0513.png   ← Logo completo (resolver §2.2)
    ├── MC-ATIVO-Seed-Logo-Principal-LayoutB-2026-0513.png
    ├── MC-ATIVO-Seed-Logo-Marca-2026-0513.png               ← (resolver §2.2)
    ├── MC-SPEC-IdentidadeVisual-VisualLaw-PaletaJuridica-v0_1-PROVISIONAL-2026-0514.md
    ├── MC-SPEC-IdentidadeVisual-Reprodutibilidade-v1_0-2026-0514.md
    ├── MC-CANONICO-IdentidadeVisual-SeloOficial-v1_0-2026-0513.md
    ├── MC-CANONICO-IdentidadeVisual-SeloOficial-ERRATA-v1_0-2026-0514.md
    ├── MC-CANONICO-Vocabulario-IdentidadeVisual-v1_0-2026-0513.md
    ├── MC-MANIFESTO-IdentidadeVisual-v2_0-2026-0513.md
    ├── 02-Camada3a-Aplicacao-Direta/        ← outputs aplicação direta
    └── 99-ARQUIVO-Legado/                   ← Princípio #29 (a criar via MB futuro)
        ├── Manus.im/                        ← outputs originais Manus
        ├── GROK - iconografia da marca/    ← outputs Grok
        └── _LOGO SEED MC*.png               ← duplicatas hash-match dos canônicos
```

Pasta `01-DNA-Identidade\` (vazia operacionalmente): considerar consolidar/arquivar.
Pasta `_QUEM SOMOS POSICIONAMENTO DE MARCA\Identidade Visual\`: histórica mar/2026, pode ir para legado pós-confirmação.

---

## §7. 4 Ativos prontos para upload Claude Design

| # | Ativo | Path / URL | Status |
|---|---|---|---|
| 1 | **PNG Símbolo Seed** | `G:\...\Documentação\Identidade Visual\MC-ATIVO-Seed-Logo-Marca-Transparente-2026-0513.png` | ✅ pronto (PNG, 2.62 MB, SHA `D9C6A320...`) — recomendado por ser transparente isolado |
| 2 | **SPEC Visual Law v0.1 PROVISIONAL** | `G:\...\Documentação\Identidade Visual\MC-SPEC-IdentidadeVisual-VisualLaw-PaletaJuridica-v0_1-PROVISIONAL-2026-0514.md` | ✅ pronto (MD, 17 KB, SHA `FAC17CFE...`) — Founder confirmar se é "SPEC Visual Law" puro ou se há SPEC separada |
| 3 | **Master Prompt v1.0** | https://docs.google.com/document/d/14NZfPneObTYHZzpYn8iS174LHQ7Ywc2dRVrLwd4mPi4/edit | ⚠️ Founder exportar PDF manualmente |
| 4 | **Briefing v1.0** | https://docs.google.com/document/d/1bjFD9uZxasZ-dCzYT53v4h_43AEMZ_xoyRGx6C5MmHA/edit | ⚠️ Founder exportar PDF manualmente |

---

## §8. Riscos e alertas

| # | Risco | Impacto | Recomendação |
|---|---|---|---|
| R1 | Marca == LayoutA (hash idêntico, papéis distintos) | ALTO — canônico ambíguo, ERRATA SeloOficial declara Drive IDs distintos | Founder validar qual é o "real" para cada papel antes de Claude Design |
| R2 | SPEC encontrada é `VisualLaw-PaletaJuridica` (combinado) — MB pediu "Visual Law" puro | MÉDIO — pode ser o canônico correto, mas nome composto | Founder confirmar leitura substantiva |
| R3 | Master Prompt + Briefing são Google Docs cloud-only | BAIXO — Founder export manual antes de Claude Design | OK (ação documentada) |
| R4 | 7 grupos de duplicatas físicas em `Identidade Visual\` | BAIXO operacional, MÉDIO simbólico (poluição) | Limpeza via MB futuro com Princípio #29 — não executar agora |
| R5 | Pastas legado mencionadas no MB não foram localizadas no FS Documentação | BAIXO — pode estar cloud-only ou já consolidado | Founder validar via UI Drive |
| R6 | Spell `MC-SPEC-IdentidadeVisual-Tecnico` tem 3 versões (v1.0, v2.0, archived) | BAIXO — versionamento aparentemente correto | Não bloqueante |

**Bloqueante para Fase 1 (MB-039 Claude Design):** Apenas R1 (resolver ambiguidade Marca/LayoutA) e R2 (confirmar SPEC). R3 é ação Founder operacional.

---

## §9. Arquivos auxiliares gerados (scratchpad Desktop)

| Arquivo | Conteúdo |
|---|---|
| `MB038_3-1_pastas.txt` | Listagem completa pastas Identidade Visual encontradas |
| `MB038_3-2_*.txt` (4×) | Inventário recursivo por pasta |
| `MB038_3-3_seed.txt` | Tabela completa candidatos PNG/SVG com hashes |
| `MB038_3-4_spec.txt` | Candidatos SPEC + arquivos recentes 72h |
| `MB038_3-4_spec_VAULT.txt` | Fallback SPEC no Vault |
| `MB038_3-6_duplicatas.txt` | Grupos de duplicatas hash-match |

Path Desktop: `C:\Users\Beto\Desktop\MB038_*.txt`

---

## §10. Conformidade MB-038

- [x] Modo DIAGNÓSTICO APENAS — zero modificações em arquivos existentes
- [x] Único arquivo criado fora de scratch: este consolidado em `04-OPERACAO\logs\`
- [x] Princípio #4 (Copy não Move): nenhum Move-Item executado
- [x] Hash SHA-256 obtido para todos os candidatos canônicos
- [x] Cadeia autorização Dual (#7): Claude.ai → Founder → Code DELL · escopo respeitado
- [x] Sem dados pessoais de cidadão envolvidos (LGPD verde)

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Confidência founder:** "É eu e tu, cumpadre."

∞
