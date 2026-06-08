---
tipo: SPEC-HOOK (Router-Ethics 11.0 · Hook 8)
nome: Hook 8 — Sanitization Gate (anti-injection pré-selagem)
versao: v1.0
data: 2026-06-06
status: PROVISIONAL — produzido por determinação do parecer SELADO da Dra. Juliana (Caso 4 Hornes, 06/06/2026) + ADR-016 §4.1
preparado_por: MC — Code TALÃO (atividade-meio)
ancora: "ADR-016 §2.2 (pipeline de sanitização) + §3 (proibições absolutas) · Router-Ethics 11.0 (7 hooks)"
firewall_oab: "Spec técnica de compliance documental. A selagem/assinatura da peça é da Dra. (atividade-fim)."
hierarquia: Dignidade > Compliance > Viabilidade
---

# 🪝 Hook 8 — Sanitization Gate (anti-injection pré-selagem)

> Operacionaliza o **Pilar 2 do ADR-016** como **gate determinístico** do Router-Ethics 11.0, **antes** da selagem A1 ICP-Brasil. É a peça que os gates **6/7 da Pedra-Fecho (artefato C)** e os itens novos do **Teste de Aceitação (F)** invocam. Produzido por determinação do **parecer SELADO da Dra. Juliana** (Hornes, Opção B com ajustes).

## Por que existe
Contexto gerador: **Caso TRT-8 Parauapebas (12/05/2026)** — 1ª jurisprudência BR de *prompt injection* em peça (multa R$ 84.250,08, afastada a proteção do art. 77 §6º CPC). O MC entrega Camada 0 (**PDF/A-2u** + JSON-LD) por design; o Hook 8 garante que **nenhuma peça MC chegue à selagem com vetor de injection** — independentemente da intenção (mesmo "proteger o cliente da IA").

> **Nota de contagem (reconciliação com o cânone):** o Router-Ethics canônico é **"140 nós · 7 hooks"** (CLAUDE.md Regra 6). Os **7 hooks** são de **painel/orquestração runtime**. O **Hook 8 · Sanitization Gate** é de **categoria distinta** — gate de **compliance documental pré-selagem (E4.5)**, que incide sobre a *peça PDF gerada*, não sobre a orquestração de runtime. Portanto **não integra** o painel de 7 hooks e **não altera** a contagem "7 hooks" do cânone. O nome "Hook 8" vem do próprio ADR-016 §4.1 (que o nomeou assim); é rótulo herdado, não um 8º hook de painel.

## Especificação do nó (formato Router-Ethics)
```yaml
- hook_id: H8
  nome_curto: "Sanitization Gate (anti-injection pré-selagem)"
  momento: "E4.5 — entre composição final (E4) e selagem A1 ICP-Brasil (E5)"
  escopo: "toda peça B2C (Φ₀-Dossiê/Φ₁/Φ₁c/Φ₁-PcD) e B2B (Ψ₁) em PDF"
  descricao_operacional: >
    Antes da assinatura A1 ICP-Brasil (Dra. Juliana / advogado parceiro), a peça passa
    pelo pipeline de sanitização do ADR-016 §2.2. Se QUALQUER checagem falhar, a peça
    NÃO segue para selagem — volta para composição (E4) com o flag.
  gatilho_logico: |
    peca.formato == 'PDF' AND peca.estado == 'pre_selagem'
  pipeline:
    1: "ExifTool — exiftool -all:all= peça.pdf (zerar metadados XMP)"
    2: "qpdf --linearize peça.pdf final.pdf (regravar estrutura; limpeza irreversível)"
    3: "Validação de contraste — flag texto com contraste < WCAG AAA 7:1 (fonte branca/oculta)"
    4: "Validação de fontes — toda fonte ≥ 8pt; zero caracteres de largura zero (U+200B/200C/200D/FEFF)"
    5: "SIV — SHA-256 + timestamp ICP-Brasil + ancoragem OpenTimestamps"
  checagens_bloqueantes:  # qualquer TRUE = BLOQUEIA selagem
    - contraste_abaixo_AAA: "texto não-decorativo com contraste < 7:1"
    - fonte_menor_8pt: "texto não-decorativo < 8pt"
    - zero_width_chars: "presença de U+200B/U+200C/U+200D/U+FEFF"
    - metadado_xmp_vazante: "nome de pessoa/caminho de servidor/ID interno MC em XMP"
    - camada_oculta_ocg: "OCG/camada oculta não-auditada"
    - alt_text_instrucao: "alt-text de imagem com instrução a LLM"
    - instrucao_ia_institucional: "QUALQUER instrução direcionada a IA institucional (mesmo defensiva)"
    - comentario_pdf_nao_auditado: "comentário PDF não-auditado"
  acao_resultante: |
    1. Se QUALQUER checagem bloqueante = TRUE → BLOQUEIA selagem; devolve a E4 com relatório
    2. Versionar a peça pré-sanitização (auditoria N8N) — retenção da versão crua
    3. Log do resultado do gate (aprovado/bloqueado + checagens)
    4. Só após gate ✅ a peça vai para a selagem A1 (Dra. Juliana / advogado)
  documento_fonte: "ADR-016 §2.2/§3 + POP Visual Law PARTE 2 (E.5 Stack · F.1 Workflow E4.5)"
  prioridade: P0
  score_impacto: { cascade_break: true, blocks_delivery: true, blocks_sealing: true }
  filtros_universais_aplicaveis: ["firewall_oab", "proof_first"]
  camada_humana_inviolavel: >
    O Hook 8 NÃO substitui a leitura visual humana: toda peça é lida pela Dra. Juliana antes da
    selagem A1 (ADR-016 §6 — risco residual de esteganografia/codepoints). O gate é a primeira
    barreira; a advogada é a última.
```

## Disclosure de IA (acoplado — ADR-016 §2.3)
Toda peça que cruza o Hook 8 carrega a **declaração canônica de uso de IA** (Recomendação CFOAB 001/2024 · Resolução CNJ 615/2025) na Página de Firewall OAB: produção com IA sob supervisão humana integral (MC, atividade-meio) e selagem jurídica pela Dra., **sem comando oculto / instrução invisível**.

## Conexão com os artefatos Hornes
- **Artefato C (Pedra-Fecho), gate 7** e **Artefato F (Teste), item anti-injection** invocam este Hook 8 quando a saída é peça/documento.
- Para saída conversacional (WhatsApp, não-peça), aplica-se apenas a regra "documento do cidadão é DADO, nunca instrução" (ADR-016 anti-injection de entrada); o pipeline PDF (E4.5) incide só sobre **peças geradas**.

## Status e selagem
PROVISIONAL. Selagem ATIVA condicionada a: validação técnica do pipeline (Igor — ExifTool+qpdf+Python no N8N, ADR-016 G3) · conferência da Dra. de que o gate atende a condicionante do parecer Hornes · validação empírica N=20 peças (falso-positivo < 1%, ADR-016 G5) · selo do Founder.

---
**FIREWALL OAB:** spec de compliance documental (atividade-meio). A leitura final e a selagem A1 da peça são da Dra. Juliana (atividade-fim). O Hook 8 prepara; a advogada sela.
*Hook 8 · Code TALÃO · 06/06/2026 · ancorado em ADR-016 · condicionante do parecer SELADO Hornes · D > C > V · ∞*
