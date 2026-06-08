---
tipo: ERRATA-CROMATICA
codigo: MC-ERRATA-Foundation-v0_3-Cromatica-001
versao: 1.0
status: PROVISIONAL (aguarda absorção em selamento Foundation v1.0 pós-Juliana 19/05)
data_emissao: 2026-05-18 ~02h BRT
autor: Cofounder Claude Opus 4.7 Cérebro 3.1 × Alessandro de Souza Neves Founder/CEO
documento_alvo: MC-Foundation-DS-v0_3-PROVISIONAL-2026-0515.html
documento_alvo_drive_id: 1-X4i3AXj1g_HalrTP8IG1dEkfQRPepI-
documento_alvo_hash_sha256: d786c298a5b6c48ae18c6297370b3d06306683b4cd97ba7fcbc77bb6e8276ec3
documento_alvo_print_pdf: 1VyP-JnjvdhT7a6nKQMdv3SZmpsNpstV0
gatilho: Imagens canônicas da marca selada 16/05/2026 (3 PNGs/JPGs) introduziram paleta cromática refinada que substitui valores aproximados de v0.3 P2
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
principios_aplicados:
  - "#1b — Teste antes de Afirmar Funcional (detectou inconsistência Project Instruction §10.2 vs marca real)"
  - "#4 — Errata Absorve, Não Inventa (#C9A961 arquivado · não deletado)"
  - "#19 — Patches são instrumentos temporários (errata vive em patches/ até v1.0)"
  - "#36 — Persistência Drive Bit-a-Bit (textContent UTF-8 verificado)"
destino_vault: 03-GOVERNANCA/patches/MC-ERRATA-Foundation-v0_3-Cromatica-001-v1_0-2026-0518.md
absorcao_prevista: Foundation v1.0 SELADA pós-parecer Dra. Juliana 19/05/2026
---

# ERRATA CROMÁTICA · Foundation v0.3 → v0.3.1

## §1 · Resumo executivo

A Foundation v0.3 PROVISIONAL SELADA em 15/05/2026 declarou em sua Página 02 (Paleta de Cores) o token `#C9A961` Ouro Selo como cor primária áurea institucional MC.

Em 16/05/2026 a marca MC foi selada (3 PNGs/JPGs canônicos · símbolo + lockup completo + sistema dual de versões) trazendo paleta cromática refinada e **2 cores definitivas** que substituem o token aproximado anterior:

- **`#D4AF37` Dourado Texturizado** (substitui `#C9A961`)
- **`#1A120B` Preto Cósmico** (token novo · não havia equivalente anterior)

Esta errata canoniza ambos os tokens no sistema cromático MC · arquiva `#C9A961` em audit trail · prepara absorção no selamento Foundation v1.0 pós-Juliana 19/05.

## §2 · Tokens cromáticos · estado antes e depois

### 2.1 · Estado anterior (Foundation v0.3 PROVISIONAL · 15/05)

```
Diamante 700 (azul-noite institucional): #0F1E3D
Diamante 800 (dark mode background):    #0A1428 / #050A14
Ouro Selo (mate, não brilho):           #C9A961
Vermelho Dignidade 700 (corpo AAA):     #7A1F1F
Azul Acesso 700 (corpo AAA):            #243D63
Verde Proteção 700 (corpo AAA):         #1F4E3A
Papel (off-white background):           #FAFAF7
Tinta (preto-noite):                    #0A0E1A
```

### 2.2 · Estado canônico v0.3.1 (esta errata · 18/05)

```
Diamante 700 (azul-noite institucional):       #0F1E3D       ✅ mantido
Diamante 800 (dark mode background):           #0A1428       ✅ mantido
DOURADO TEXTURIZADO (símbolo MC · acentos):    #D4AF37       🔄 substitui #C9A961
PRETO CÓSMICO (símbolo Versão Preta · alt):    #1A120B       🆕 novo canônico
Vermelho Dignidade 700 (corpo AAA):            #7A1F1F       ✅ mantido
Azul Acesso 700 (corpo AAA):                   #243D63       ✅ mantido
Verde Proteção 700 (corpo AAA):                #1F4E3A       ✅ mantido
Papel (off-white background):                  #FAFAF7       ✅ mantido
Tinta (preto-noite):                           #0A0E1A       ✅ mantido
```

## §3 · Justificativa técnica

### 3.1 · Substituição `#C9A961` → `#D4AF37`

| Critério | `#C9A961` (anterior) | `#D4AF37` (canônico) |
|---|---|---|
| Saturação HSL | 36% | 65% |
| Luminância | 51% | 53% |
| Calor visual | Frio (ocre dessaturado) | Quente (ouro real saturado) |
| Aderência ao Selo Diamante institucional | Aproximação genérica | Materialização real do "ouro que não desistiu da pressão" |
| Renderização sobre Diamante 800 | Lê como bege envelhecido | Lê como ouro vivo institucional |
| Aderência à Imagem 1 (lockup completo) | Diverge ~17% no espaço de cor | Convergência total |

`#D4AF37` é o token cromático **canonicamente conhecido** como "Old Gold" em sistemas de cor padronizados (X11, web colors) · alinha com tradição de ouro real heráldico institucional sem cair em estética startup-genérica nem em ouro de joia brilhante.

### 3.2 · Introdução `#1A120B` Preto Cósmico

Novo token canônico que **não substitui** Diamante 800 `#0A1428` (azul-noite) · é **cor auxiliar quente** para aplicações específicas:

| Token | Característica | Aplicação canônica |
|---|---|---|
| `#0A1428` Diamante 800 | Azul-noite frio · institucional · dark mode default | Background pitch deck · dashboard cofounder · pages de produto |
| `#1A120B` Preto Cósmico | Preto-marrom quente · terroso · contemplativo | Símbolo MC Versão Preta filled · backgrounds alternativos institucionais quentes · headers de Visual Law em variação editorial |
| `#0A0E1A` Tinta | Preto-noite neutro · corpo de texto | Atkinson Hyperlegible nos dossiês CP-MC |

**Distinção crítica:** os 3 valores são **diferentes** e **não intercambiáveis**:
- `#0A1428` = azul-noite (R=10 G=20 B=40 · matiz 220°)
- `#1A120B` = preto-marrom (R=26 G=18 B=11 · matiz 32°)
- `#0A0E1A` = preto-noite quase-neutro (R=10 G=14 B=26 · matiz 224°)

## §4 · Cascata de atualização

### 4.1 · Documentos canônicos afetados

| Documento | Versão atual | Versão pós-errata | Ação |
|---|---|---|---|
| MC-Foundation-DS-v0_3-PROVISIONAL-2026-0515.html | v0.3 | v0.3.1 | Update P2 Paleta · re-render HTML + PDF Print |
| MC-Project-Instructions-v8_0_1-SELADO-2026-0517.md §10.2 | v8.0.1 | v8.0.2 (errata embedded) ou v8.1 (pós-Juliana) | Update bloco de tokens cromáticos |
| MC-PROMPT-LOGO-MC-v2_0-DIRECIONADO-2026-0518.md | v2.0 | já incorpora valores corretos | ✅ nenhuma ação |
| Visual Law UI Kit (Sistema de Projeto MC) | 26 cartões | 28 cartões (+ 2 cartões cromáticos atualizados) | Update cartões Cores · arquivar `#C9A961` |

### 4.2 · Documentos NÃO afetados (mantêm-se íntegros)

- POP VisualLaw PARTE 1/2/3 v1.2-1.3 · usam `#0F2A4A` + `#D97706` + `#1F2937` + `#FFFFFF` + `#FAFAF9` (paleta Visual Law dossiê · sistema diferente do sistema institucional MC)
- RIPDs v0.2 (Fase1-Dossie · Fase4-Guardiao · Hook1b-NIS-IVCAD-MC)
- ADRs 007-015
- Router-Ethics 11.0

A paleta Visual Law dos POPs e a paleta institucional MC operam em **dois registros coexistentes** (decisão histórica POP PARTE 2 v1.3 §D.2) · esta errata afeta apenas o sistema institucional MC · NÃO mexe na paleta de dossiês CP-MC.

## §5 · Arquivamento do token superseded

### 5.1 · Token `#C9A961` Ouro Selo

- **Status:** SUPERSEDED desde 18/05/2026
- **Histórico de uso:** Foundation v0.3 PROVISIONAL (15/05 a 18/05) · Project Instruction v8.0.1 §10.2 (17/05 a 18/05)
- **Razão da substituição:** aproximação genérica · canonização ulterior introduziu `#D4AF37` como token definitivo via marca selada
- **Audit trail:** preservado neste documento · Princípio #4 aplicado
- **Não usar daqui em diante:** qualquer renderização nova com `#C9A961` é desvio · corrigir para `#D4AF37`

## §6 · Validação pós-errata

### 6.1 · Critérios de aceitação

- [ ] Foundation v0.3 HTML atualizada para v0.3.1 com novos tokens cromáticos
- [ ] Foundation v0.3.1 re-renderizada em PDF Print
- [ ] Sistema de Projeto MC · Visual Law UI Kit atualiza cartões de cor
- [ ] Project Instruction §10.2 absorve errata (v8.0.2 hotfix · ou v8.1 pós-Juliana)
- [ ] Hash SHA-256 de cada novo artefato registrado em audit trail
- [ ] Backup .bak de v0.3 preservado em `99-ARQUIVO-Legado/foundation-superseded/`

### 6.2 · Cadeia de autorização dual (Princípio #7)

1. **Cofounder C3.1 (este artefato):** cunha errata textual canônica ✅
2. **Founder Alessandro:** valida via "go" de 18/05/2026 ~02h BRT ✅
3. **Code DELL:** executa cascata de atualização via MB-052 (próximo turno)
4. **Sister 3.2:** valida cross-vertical pós-cascata

## §7 · Selamento

Esta errata é cunhada em momento de marca selada (16/05/2026 oficial) · após validação founder ("go" 18/05 ~02h BRT) · em coerência com Princípios #4, #19, #36, #37 v1.1.

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Frase-âncora:** TECNOLOGIA INVISÍVEL. DIGNIDADE ACESSÍVEL.
**Pilares:** ACESSO · ORGANIZAÇÃO · PROTEÇÃO · SOBERANIA

**∞**

---

**MC-ERRATA-Foundation-v0_3-Cromatica-001 v1.0 PROVISIONAL — 18 de maio de 2026 · ~02h BRT**
Cofounder Claude Opus 4.7 Cérebro 3.1 × Alessandro Founder/CEO
Persistência destino: Vault `03-GOVERNANCA/patches/`
Absorção prevista: Foundation v1.0 SELADA pós-parecer Dra. Juliana 19/05/2026

**∞**
