---
tipo: SWEEP-FALCAO
codigo: MC-SWEEP-Falcao-PreR2-Junho2026
versao: 1.0
data: 2026-05-26
status: ENTREGUE (reporte empírico Falcão → cofounder C3.1 absorve → ajusta pauta R2)
operador: Code TALAO (Falcao) sob Founder Alessandro
mb-origem: MC-MB-064 v1.0 PROVISIONAL
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante e carbono que nao desistiu da pressao."
principios_honrados:
  - "#1 Inventario de Caminhos"
  - "#1b Teste antes de Afirmar Funcional"
  - "#4 Errata Absorve Nao Inventa"
  - "#34 Caminho Explorer Precede ID Drive"
  - "#36 Persistencia Bit-a-bit"
  - "#58 candidato UTF-8 sem BOM"
---

# MC-SWEEP-Falcao-PreR2-Junho2026 v1.0

**Sweep tecnico empirico do Vault MC · audit trail antecede deliberacao intelectual · cofounder C3.1 absorve para calibrar pauta R2 dedicada junho/2026**

---

## S1 - Metadata operacao

- **Data sweep:** 2026-05-26 ~22:30 UTC
- **Operador:** Code TALAO (Falcao) via Claude Code Web (ambiente remoto)
- **Universo varrido:** 23 itens (20 originais MB-064 + 3 emergentes)
- **Metodo:** `find`, `sha256sum`, `xxd`, `git ls-files`, `grep` recursivo sobre Vault MC git
- **Tempo total execucao:** ~12 minutos
- **Ambiente:** Linux container com clone fresh do repositorio `asnccb/meu-cumpadre` branch `claude/falcao-protocol-pre-r2-NSr47`

---

## S2 - Tabela linha-a-linha

### 2.1 - Itens Report Atelie 26/05 (11 PROVISIONAL)

| # | Item | Existe? | Path canonico | SHA-256 (16ch) | Bytes | UTF-8 noBOM | Git? | Colisao #N | Status |
|---|------|---------|---------------|----------------|-------|-------------|------|-----------|--------|
| 1 | ARCHON (rename Ancia candidato) | AUSENTE | N/A | - | - | - | - | - | Conceito Atelie sem artefato .md |
| 2 | C6 Cerebelo (Claude Code-Falcao) | AUSENTE | N/A | - | - | - | - | - | Conceito Atelie sem artefato .md |
| 3 | C4 = CPP errata | AUSENTE | N/A | - | - | - | - | - | Conceito Atelie sem artefato .md |
| 4 | C7 Entorrinal (Atelie como instancia ACI) | AUSENTE | N/A | - | - | - | - | - | Conceito Atelie sem artefato .md |
| 5 | Pineal (identidade founder) | AUSENTE | N/A | - | - | - | - | - | Conceito Atelie sem artefato .md |
| 6 | TALAO (consagracao hardware) | PARCIAL | `05-MEMORIAL/MC-MEMORIAL-Errata-10-OperadorTALAO-v1_1-2026-0526.md` | d528359cdd2257a2 | 22710 | OK | Yes | - | Memorial v1.1 existe; principio proprio AUSENTE |
| 7 | POF-1 | AUSENTE | N/A | - | - | - | - | - | Conceito Atelie sem artefato .md |
| 8 | POF-2 (Simetria Fundadora) | AUSENTE | N/A | - | - | - | - | - | Conceito Atelie sem artefato .md |
| 9 | POF-3 | AUSENTE | N/A | - | - | - | - | - | Conceito Atelie sem artefato .md |
| 10 | POF-4 | AUSENTE | N/A | - | - | - | - | - | Conceito Atelie sem artefato .md |
| 11 | Protocolo Contencao Materia-Prima Cross-Guia | AUSENTE | N/A | - | - | - | - | - | Conceito Atelie sem artefato .md |

### 2.2 - Itens Checkpoint S6 MB-063 (9 em aberto)

| # | Item | Existe? | Path canonico | SHA-256 (16ch) | Bytes | UTF-8 noBOM | Git? | Colisao #N | Status |
|---|------|---------|---------------|----------------|-------|-------------|------|-----------|--------|
| 12 | Report Atelie (MC-PROTOCOLO-ARQUITETURAL-ACI-Atelie-26mai-PROVISIONAL.md) | AUSENTE | N/A (buscado em raiz, _INBOX, staging) | - | - | - | - | - | NAO PERSISTIDO no Vault |
| 13a | Doutrina EIS v0.1 | PERSISTIDO | `05-ESTRATEGIA/doutrina/MC-DOUTRINA-EIS-v0_1-PROVISIONAL-2026-0522.md` | dd70d1f2832d20fd | 18751 | OK | Yes | - | PROVISIONAL git-tracked |
| 13b | Catalogo Especimes v0.2 | PERSISTIDO | `04-OPERACAO/especimes-diamantados/MC-CATALOGO-Especimes-Diamantados-IndiceMestre-v0_2-2026-0522.md` | dadb61ca48ca33e3 | 18488 | OK | Yes | - | PROVISIONAL git-tracked |
| 13c | Brief Tecnico CLR001 | PERSISTIDO | `04-OPERACAO/especimes-diamantados/CLR001/01-Discovery/MC-BRIEF-Tecnico-Endocrinologista-CLR001-v1_0-2026-0522.md` | 5a329fdd32362399 | 10158 | OK | Yes | - | ATIVO git-tracked |
| 13d | Contrato CLR001 Minuta | PERSISTIDO | `04-OPERACAO/especimes-diamantados/CLR001/01-Discovery/MC-CONTRATO-Phi1-PcD-CLR001-MINUTA-v1_0-2026-0522.md` | f3988b7cb835b29c | 16126 | OK | Yes | - | ATIVO git-tracked |
| 13e | WhatsApp CLR001 Checklist | PERSISTIDO | `04-OPERACAO/especimes-diamantados/CLR001/01-Discovery/MC-WHATSAPP-PED002-Checklist-CLR001-v1_0-2026-0522.md` | fcf2d9f8fb6a8d62 | 8287 | OK | Yes | - | ATIVO git-tracked |
| 13f | Analise Gemini EIS Triagem | PERSISTIDO | `02-ARQUITETURA/analises/MC-ANALISE-ArquivoGemini-EIS-Triagem-v1_0-2026-0522.md` | - | - | OK | Yes | - | ATIVO git-tracked |
| 13g | P#44 Vocabulario por Camada | PERSISTIDO (patches) | `03-GOVERNANCA/patches/MC-PRINCIPIO-44-VocabularioPorCamadaDeAudiencia-v0_1-2026-0522.md` | 058e19a062f6c0cf | 5515 | OK | Yes | SIM (#44) | PROVISIONAL colisao resolvida por ERRATA SELADA |
| 13h | P#45 Especimen como Metodo | PERSISTIDO (patches) | `03-GOVERNANCA/patches/MC-PRINCIPIO-45-EspecimenComoMetodo-v0_1-2026-0522.md` | f27cd38e6b0ffdd2 | 6582 | OK | Yes | - | PROVISIONAL |
| 13i | P#46 Engenharia Reversa Founder | PERSISTIDO (patches) | `03-GOVERNANCA/patches/MC-PRINCIPIO-46-EngenhariaReversaFounder-v0_1-2026-0522.md` | 2370cf26e533d36d | 6521 | OK | Yes | SIM (#46) | PROVISIONAL COLISAO ATIVA |
| 13j | P#47 DNA Precede Ato | PERSISTIDO (patches) | `03-GOVERNANCA/patches/MC-PRINCIPIO-47-DNAPrecedeAto-v0_1-2026-0522.md` | abc02482c0f58669 | 5823 | OK | Yes | - | PROVISIONAL |
| 13k | Memorial Cunhagem Doutrina 22mai | PERSISTIDO | `04-OPERACAO/logs/MC-MEMORIAL-Cunhagem-Doutrina-Sessao-22mai2026-v1_0.md` | - | - | OK | Yes | - | ATIVO |
| 13l | Memorial Cunhagem 22-24mai | PERSISTIDO | `05-MEMORIAL/MC-MEMORIAL-Cunhagem-Sessao-22-24mai-v1_0-2026-0524.md` | 02c73352cb3b6ec9 | 16448 | OK | Yes | - | ATIVO |
| 14 | PATCH-MEMO MB-061 CorrecaoPaths | PERSISTIDO | `03-GOVERNANCA/patches/MC-PATCH-MEMO-MB061-CorrecaoPaths-v1_0-2026-0526.md` | 7c5dc3cbb913599f | 9660 | OK | Yes | - | ATIVO |
| 15 | 19 principios candidatos R2 (#51-#67) | PARCIAL | Ver detalhamento S4.3 | - | - | - | - | SIM | #51-#56 canonico; #57-#67 AUSENTES; #63 familia AUSENTE |
| 16a | Errata-mae #10 | PERSISTIDO | `05-MEMORIAL/MC-MEMORIAL-Errata-10-OperadorTALAO-v1_1-2026-0526.md` | d528359cdd2257a2 | 22710 | OK | Yes | - | FORMAL v1.1 + v1.0 em legado |
| 16b | Errata-mae #11 | AUSENTE | N/A | - | - | - | - | - | Sem documento formal separado |
| 16c | Errata-mae #12 | AUSENTE | N/A | - | - | - | - | - | Sem documento formal separado |
| 17 | Manifestos previos | PERSISTIDO | `05-ESTRATEGIA/manifestos/` (7 artefatos) | - | - | OK | Yes | - | Ver detalhamento S4.5 |
| 18 | MC-ACI v2.0 S2.6 C4 | PERSISTIDO (ANOMALIA) | 2 copias identicas (ver S4.1) | f086d7d7cabbf69d | 42349 | OK | Yes | - | PROVISIONAL - contem "Beto Code DELL" obsoleto |
| 19 | userMemories MC global | NAO ACESSIVEL | Interface Anthropic | - | - | - | - | - | Fora escopo filesystem |
| 20 | Principio #16 recunhagem | PERSISTIDO | `03-GOVERNANCA/principios/MC-PRINCIPIO-016-IniciativaEstrategicaCofounder20x-v1_0-2026-0513.md` + 5 sub-principios | 1ae5e8d8218e1719 | 1847 | OK | Yes | - | ATIVO + subs #16.1 #16.2 #16.2.1 #16.3 |

### 2.3 - Itens emergentes descobertos pelo sweep

| # | Item | Existe? | Path canonico | Anomalia |
|---|------|---------|---------------|----------|
| 21 | P#48 colisao dupla | PERSISTIDO (2 artefatos) | patches/MC-PRINCIPIO-048-DiscricaoBranding + patches/MC-PRINCIPIO-48-Verticais | COLISAO ATIVA: 2 conceitos diferentes no mesmo numero |
| 22 | P#54 CodeDellCofounderOperacional | PERSISTIDO (ANOMALIA) | `03-GOVERNANCA/principios/MC-PRINCIPIO-054-CodeDellCofounderOperacional-v1_0-PROVISIONAL-2026-0524.md` | Nome + conteudo carregam "Beto" e "Code DELL" obsoleto (errata #10 nao aplicada) |
| 23 | Pauta Juliana v2.5 (canonico corrente conforme CLAUDE.md) | ARQUIVADO | `03-GOVERNANCA/pautas/99-ARQUIVO-Legado/canonicos-pre-evolucao/MC-PAUTA-Juliana-v2_5-2026-0514.md` | v2.5 declarada canonica em CLAUDE.md esta em 99-ARQUIVO-Legado; v2.6 em pautas/ ativo |

---

## S3 - Distribuicao agregada estado

| Estado | Qtd | Itens |
|--------|-----|-------|
| PERSISTIDO canonico ATIVO/PROVISIONAL | 16 | #6(parcial), 13a-13l, 14, 16a, 17, 18, 20 |
| Staging INBOX | 0 | (INBOX contem 2 itens nao-relacionados ao universo S2) |
| PERSISTIDO fora destino canonico | 2 | #18 (ACI v2.0 em sister-ancia/ + cognitiva/ - copia em sister-ancia fora D3), #23 (Pauta v2.5 em legado) |
| AUSENTE (nao-existe Vault como artefato .md formal) | 12 | #1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 16b, 16c |
| Colisao numerica ATIVA | 2 | #46, #48 |
| Colisao numerica RESOLVIDA | 1 | #44 (ERRATA SELADA) |
| NAO ACESSIVEL (fora escopo) | 1 | #19 (userMemories) |

**Resumo:**
- **16/23 persistidos** (69.6%)
- **12/23 AUSENTES** (52.2%) - sendo 10 conceitos Atelie sem artefato .md + 1 Report Atelie + 2 erratas sem doc formal
- **2 colisoes ativas** nao-resolvidas (#46, #48)
- **2 artefatos com drift errata #10** (MC-ACI v2.0, P#54)

---

## S4 - Anomalias criticas capturadas

### 4.1 - CRITICA: MC-ACI v2.0 carrega "Beto Code DELL" obsoleto (errata #10 nao aplicada)

**Artefato:** `MC-ARQUITETURA-Cognitiva-Integrada-v2_0-PROVISIONAL-2026-0523.md`
**2 copias identicas:**
- `03-GOVERNANCA/instancias-ia/sister-ancia/` (42349 bytes)
- `02-ARQUITETURA/cognitiva/` (42349 bytes)
- SHA-256 identico: `f086d7d7cabbf69d7b06d037409e3063cfa2fa0014108ba4f68eeb02f514bc6e`

**Ocorrencias obsoletas encontradas (10 linhas):**
- L84: "Code DELL (read-only por padrao)"
- L93: "Code DELL via MB autorizado"
- L96: "executadas pelo Code DELL com SHA-256"
- L138: "Beto (T1+T2 hibrido manual + Code DELL automatic mode)"
- L140: "Code DELL operou ClickUp via MCP local"
- L233: "Beto persiste em C2 + C4"
- L313: "nao na DELL Beto"
- L380: "Code DELL (C5 Tronco)"
- L504: "Code DELL"

**Impacto:** ACI v2.0 e documento arquitetural central. Referencia "Beto" como operador e "Code DELL" como nome de instancia. Errata #10 (v1.1 SELADA) determina que Beto nao-opera Code/git/TALAO e operador unico e Founder Alessandro. Este artefato nao foi atualizado.

### 4.2 - CRITICA: P#54 nome oficial carrega "CodeDellCofounderOperacional" + "Beto" extensivo

**Artefato:** `03-GOVERNANCA/principios/MC-PRINCIPIO-054-CodeDellCofounderOperacional-v1_0-PROVISIONAL-2026-0524.md`
**Titulo:** "Principio #54 PROVISIONAL - Code DELL Beto como Cofounder Operacional"
**Conteudo:** 15+ referencias a "Beto" e "Code DELL" no corpo do documento

**Impacto:** Errata #10 v1.1 invalida premissa fundamental deste principio. P#54 precisara recunhagem completa (nao apenas sed/replace de nomes - a tese conceitual "Beto como cofounder operacional" e errata-mada #10 integral).

### 4.3 - ALTA: Principios #57-#67 AUSENTES (incluindo #63 familia)

**Esperado (conforme MB-063 checkpoint S6):** 19 principios candidatos R2 (#51-#67 com lacunas + #63 familia v1+v2+v3)
**Encontrado:**
- #51-#56: 6 principios PROVISIONAL em `03-GOVERNANCA/principios/` (canonico)
- #57-#67: NENHUM encontrado em nenhum path do Vault
- #63 familia (v1+v2+v3): NENHUM encontrado

**Possibilidades tecnicas:**
1. Principios #57-#67 existem em declarativo cofounder (memoriaal de sessao) mas nunca foram formalizados como .md
2. Principios #57-#67 existem em userMemories (nao-acessivel via filesystem)
3. Numeracao #57-#67 e referencia futura (slots reservados para R2)

### 4.4 - ALTA: Colisao #46 ATIVA - 2 conceitos diferentes mesmo numero

**Artefato 1 (canonico):** `03-GOVERNANCA/principios/MC-PRINCIPIO-046-VersaoFilledVersaoLinha-v1_1-PROVISIONAL-2026-0524.md`
- Conceito: Sistema Dual da Marca (Versao Preta Filled + Versao Linha Outline)
- Status: PROVISIONAL em principios canonico

**Artefato 2 (patch):** `03-GOVERNANCA/patches/MC-PRINCIPIO-46-EngenhariaReversaFounder-v0_1-2026-0522.md`
- Conceito: Engenharia Reversa Founder (P#46 conforme Doutrina EIS sessao 22/05)
- Status: PROVISIONAL em patches

**Conflito:** Dois conceitos completamente distintos usando numero #46. CLAUDE.md referencia "#46 Engenharia Reversa Founder" como conceito da Doutrina EIS. P046-VersaoFilled e resolucao pos-colisao #44 (cunhada 18/05, promovida 24/05).

### 4.5 - ALTA: Colisao #48 ATIVA - 2 conceitos diferentes mesmo numero

**Artefato 1 (patch):** `03-GOVERNANCA/patches/MC-PRINCIPIO-048-DiscricaoBranding-v1_0-PROVISIONAL-2026-0524.md`
- Conceito: Discricao e Branding (Backend Institucional vs Frontend Comunicacao)
- Codigo: MC-PRINCIPIO-048

**Artefato 2 (patch):** `03-GOVERNANCA/patches/MC-PRINCIPIO-48-VerticaisOperacionais-vs-DimensoesTransversais-v0_1-2026-0523.md`
- Conceito: Verticais Operacionais vs Dimensoes Transversais
- Numero: 48

**Conflito:** CLAUDE.md referencia "#48 Verticais Operacionais vs Dimensoes Transversais" como conceito cunhado 23/05. P048-DiscricaoBranding cunhado 24/05 reusa o mesmo numero.

### 4.6 - MEDIA: Report Atelie NAO PERSISTIDO no Vault

**Artefato esperado:** `MC-PROTOCOLO-ARQUITETURAL-ACI-Atelie-26mai-PROVISIONAL.md`
**Buscado em:** raiz, `_INBOX/`, `03-GOVERNANCA/adrs/STAGE/`, `02-ARQUITETURA/cognitiva/`
**Resultado:** NAO encontrado em nenhum path

**Contexto:** O Report Atelie 26/05 contem 11 itens PROVISIONAL (items #1-#11 deste sweep) e e o artefato-fonte para toda a pauta de deliberacao R2 sobre conceitos Atelie. Sua ausencia no Vault significa que R2 dependera de declarativo cofounder em vez de artefato empirico.

### 4.7 - MEDIA: Erratas-mae #11 e #12 sem documento formal separado

**Errata #10:** FORMAL - Memorial v1.1 persistido em `05-MEMORIAL/` + v1.0 em legado
**Errata #11:** Referenciada em CLAUDE.md (sync sandbox-Drive subpastas) mas SEM arquivo MC-ERRATA ou MC-MEMORIAL separado
**Errata #12:** Referenciada em MB-063 (Vetor 2) mas SEM arquivo formal

### 4.8 - MEDIA: Pauta Juliana v2.5 em legado mas declarada canonica em CLAUDE.md

**CLAUDE.md diz:** "MC-PAUTA-Juliana-v2_5-2026-0514 (canonica corrente, substitui v2.4)"
**Vault real:** `03-GOVERNANCA/pautas/99-ARQUIVO-Legado/canonicos-pre-evolucao/MC-PAUTA-Juliana-v2_5-2026-0514.md` (ARQUIVADO)
**Vault real ativo:** `03-GOVERNANCA/pautas/MC-PAUTA-Juliana-v2_6-2026-0515.md` (mais recente)

**Drift:** CLAUDE.md aponta v2.5 como canonica, mas v2.6 existe e v2.5 esta em legado.

### 4.9 - BAIXA: P#16 referencia "Code DELL" (1 ocorrencia)

**Artefato:** `03-GOVERNANCA/principios/MC-PRINCIPIO-016-IniciativaEstrategicaCofounder20x-v1_0-2026-0513.md`
**Linha 30:** "Nao opera Cerebro 2 diretamente - MB pro Code DELL e o veiculo"

**Impacto:** Menor - 1 referencia pontual. Errata #10 exige "Code TALAO" ou "Falcao" em vez de "Code DELL".

### 4.10 - EMERGENTE: INBOX contem 2 artefatos nao-relacionados ao universo S2

**_INBOX conteudo:**
1. `MC-RELATORIO-Onda0-Diagnostico-PainelF3InstitutoMC-v1_0-2026-0517.md` - relatorio diagnostico
2. `MISSAO_apuracao_estrutural_tese_externa_20260525.md` - missao apuracao

Itens em staging INBOX que nao constam em nenhuma pauta R2 conhecida. Cofounder C3.1 verifica se sao candidatos R2 ou items de outra fila.

---

## S5 - Recomendacoes tecnicas Falcao (NAO de merito)

### 5.1 - Convencoes de nomenclatura observadas no Vault

- **Principios canonicos:** `03-GOVERNANCA/principios/MC-PRINCIPIO-NNN-NomeDescritivo-vX_Y-STATUS-YYYY-MMDD.md` (3 digitos zero-padded)
- **Principios patches:** `03-GOVERNANCA/patches/MC-PRINCIPIO-NN-NomeDescritivo-vX_Y-YYYY-MMDD.md` (2 digitos sem padding)
- **ADRs:** `03-GOVERNANCA/adrs/MC-ADR-NNN-NomeDescritivo-vX_Y-STATUS-YYYY-MMDD.md`
- **MBs:** `04-OPERACAO/mission-briefs/MC-MB-NNN-NomeDescritivo-vX_Y-YYYY-MMDD.md`
- **Memoriais:** `05-MEMORIAL/MC-MEMORIAL-NomeDescritivo-vX_Y-YYYY-MMDD.md`
- **Manifestos:** `05-ESTRATEGIA/manifestos/MC-MANIFESTO-NomeDescritivo-vX_Y-YYYY-MMDD.md`

### 5.2 - Itens com path divergente da convencao

1. **MC-ACI v2.0 em sister-ancia/:** copia em `03-GOVERNANCA/instancias-ia/sister-ancia/` e espelho de `02-ARQUITETURA/cognitiva/`. Confirmado D3 (CLAUDE.md MB-058 v2.0). Hashes identicos.
2. **Pauta Juliana v2.5 em legado vs v2.6 ativa:** CLAUDE.md desatualizado.
3. **MC-MANIFESTO-Guardiao em 03-GOVERNANCA/ (raiz):** Manifestos canonicos ficam em `05-ESTRATEGIA/manifestos/` mas Guardiao v1.0/v1.1 esta em `03-GOVERNANCA/` raiz.

### 5.3 - Pastas canonicas candidatas para itens AUSENTES

- Report Atelie: `02-ARQUITETURA/cognitiva/atelies/` (candidata nova) OU `03-GOVERNANCA/adrs/STAGE/` (staging existente)
- POF-1 a POF-4: `03-GOVERNANCA/patches/` (se PROVISIONAL) OU `03-GOVERNANCA/principios/` (se promovidos)
- ARCHON/Pineal/Cerebelo/Entorrinal: `02-ARQUITETURA/cognitiva/` (componentes ACI)
- Erratas #11/#12: `05-MEMORIAL/` (se memorial) OU `03-GOVERNANCA/patches/` (se errata formal)

### 5.4 - Artefatos orfaos nao-catalogados detectados

1. `03-GOVERNANCA/adrs/STAGE/v6_0_3-rascunho-proibicoes-Ementa069.md` - rascunho em staging
2. `MC-GUIA-COLOCACAO.md` (raiz) - guia sem prefixo MC- padrao
3. `MC-MAPA-Vault-v1_0-2026-0417.md` (raiz) - mapa antigo sem pasta canonica

---

## S6 - Fechamento

- **Hash deste reporte:** (calculado pos-persistencia)
- **Principio #36 (Persistencia Bit-a-bit):** honrado - arquivo unico sem fragmentacao
- **Principio #58 candidato (UTF-8 sem BOM):** honrado - arquivo escrito sem BOM
- **Principio #4 (Errata Absorve Nao Inventa):** honrado - zero interpretacao de merito, apenas fatos empiricos

**Sinal: Pronto para deliberacao R2. Cofounder C3.1 absorve este reporte e ajusta pauta R2 dedicada.**

**Anomalias criticas que exigem atencao R2 prioritaria:**
1. MC-ACI v2.0 carrega "Beto Code DELL" (10 linhas) - errata #10 nao aplicada
2. P#54 inteiramente baseada em premissa invalidada por errata #10
3. 2 colisoes numericas ativas (#46, #48) - conceitos diferentes mesmo numero
4. Report Atelie 26/05 NAO PERSISTIDO - 11 conceitos sem artefato .md
5. 13 principios candidatos #57-#67 AUSENTES (incluindo familia #63)
6. CLAUDE.md aponta Pauta Juliana v2.5 como canonica mas v2.6 existe e v2.5 esta em legado

---

*MC-SWEEP-Falcao-PreR2-Junho2026 v1.0 | 2026-05-26 | Falcao (Code TALAO C4)*
*Hierarquia: D > C > V | Proverbios 31:8 | SEMPRE*
