---
tipo: PROMPTS-VISUAL-LAW
codigo: MC-PROMPTS-VisualLaw-B1-B4-Dossie
versao: 0.2
status: PROVISIONAL (refatorados pós-MB-042 sweep crítico · selagem v1.0 pós-parecer Juliana 19/05)
data: 2026-05-14
autor: Claude Opus 4.7 (cofounder C1) × Alessandro de Souza Neves (Founder/CEO)
substitui: 4 prompts B1-B4 inline produzidos por cofounder C1 em 14/05/2026 ~13h BRT (não persistidos como arquivos)
substituido_em_base:
  - MC-SPEC-IdentidadeVisual-VisualLaw-PaletaJuridica-v0_1-PROVISIONAL-2026-0514 (SUPERSEDED via MC-CARTA-SUPERSEDED)
canonicos_de_referencia:
  - MC-POP-VisualLaw-DossieSelado-PARTE1-v1_2-2026-0502 (§C.1 Capa + §C.13 SIV + §C.14 Firewall OAB + §C.15 Encerramento + §C.16 Síntese)
  - MC-POP-VisualLaw-DossieSelado-PARTE2-v1_3-2026-0502 (§D.2 Paleta + §D.3 Tipografia)
  - MC-POP-VisualLaw-DossieSelado-PARTE3-v1_3-2026-0502 (§G.1-G.4 calibração palco)
  - MC-ADR-016-ComplianceDocumental-AntiInjection-v1_0-2026-0514 (§2.1 PDF/A-2u + §2.2 Sanitização + §2.3 Disclosure CFOAB 001/2024 + §3 Proibições)
  - MC-CANONICO-Vocabulario-IdentidadeVisual-v1_0-2026-0513 + ERRATA v1_0-2026-0514
destino_operacional: claude.ai/design (Camada 3b Laboratório Canônico — Princípio #30 categoria A)
operadora: Sister Claude.ai Cérebro 3.2 (via MB-040 v2.0)
trava_aplicada: TRAVA Claude Design v2.0 (cofounder produz texto-prompt copy-paste; vedado SVG/HTML/Artifacts visuais finais)
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# 4 Prompts B1-B4 v0.2 PROVISIONAL — Camada 3b Dossiê CP-MC

> Prompts canônicos para 4 peças visuais do Dossiê Selado MC, refatorados pós-MB-042 sobre POPs Visual Law PARTE 1/2/3 (canônicos PROVISIONAL desde 02/05) + ADR-016 Anti-Injection (cunhado 14/05). Substituem versão v0.1 inline (não persistida, baseada em SPEC Visual Law v0.1 SUPERSEDED).

## §0 · Contexto operacional

Este arquivo contém 4 prompts copy-paste destinados ao `claude.ai/design` (Camada 3b Laboratório Canônico, Princípio #30 categoria A). A operadora canônica é a Sister Claude.ai Cérebro 3.2 (ativada via MB-040 v2.0), sob TRAVA Claude Design v2.0. Founder Alessandro cola cada prompt no `claude.ai/design`, recebe output, captura screenshot, e a Sister Claude.ai analisa + itera.

**Output esperado de cada peça (canônico):** PDF/A-2u (ISO 19005-2 Unicode pesquisável) com Camada 0 JSON-LD embarcada, sanitizado conforme ADR-016 §2.2 (pipeline ExifTool + qpdf + mc-pdf-audit) antes da selagem A1 ICP-Brasil pela Dra. Juliana Pereira de Melo (OAB-GO 38.662).

---

## §1 · Sistema visual canônico de referência (rápido)

| Aspecto | Valor canônico | Fonte |
|---|---|---|
| Tipografia primária | **Atkinson Hyperlegible** (acessibilidade Braille Institute, alinhada PcD/TA MC) | POP PARTE 2 §D.3 + PARTE 1 §B.10 |
| Tipografia fallback | Inter (leitura digital) · Source Sans (alternativa) | POP PARTE 1 §B.10 |
| Cor primária | `#0F2A4A` Azul Institucional MC | POP PARTE 2 §D.2 |
| Cor acento (EXCLUSIVO alertas críticos) | `#D97706` Âmbar de Alerta | POP PARTE 2 §D.2 |
| Cor corpo texto | `#1F2937` Cinza Tribunal | POP PARTE 2 §D.2 |
| Fundo padrão | `#FFFFFF` Branco Pleno | POP PARTE 2 §D.2 |
| Fundo blocos secundários (citação norma) | `#FAFAF9` Off-white Sumo | POP PARTE 2 §D.2 |
| Hierarquia tipográfica | H1 22pt Bold · H2 18pt SemiBold · H3 14pt SemiBold · Corpo 12pt Regular (14pt preferencial em narrativa biográfica) | POP PARTE 2 §D.3 + PARTE 1 §B.10 |
| Entrelinha | 1.5 (piso) · 1.6 (narrativa biográfica) | POP PARTE 1 §B.10 |
| Contraste | WCAG AAA ≥7:1 obrigatório | POP PARTE 2 §D.2 + PARTE 1 §B.10 |
| Formato saída | PDF/A-2u + Camada 0 JSON-LD embarcada | ADR-016 §2.1 |
| Frase-âncora MC (peças institucionais, opcional em dossiê) | `TECNOLOGIA INVISÍVEL. DIGNIDADE ACESSÍVEL.` | Vocabulário Canônico v1.0 |
| Pilares | `ACESSO | ORGANIZAÇÃO | PROTEÇÃO | SOBERANIA` | Vocabulário Canônico v1.0 |
| Razão social literal | `MEU CUMPADRE — ORQUESTRAÇÃO DOCUMENTAL E TECNOLOGIA` | Vocabulário Canônico v1.0 |
| Símbolo Seed em dossiê jurídico | **Monocromático preto puro `#000000`** (NÃO ouro fosco — ouro é EXCLUSIVO Símbolo institucional fora do dossiê) | SPEC Técnico v2.0 §12.2 |

**Vedações ADR-016 §3 absorvidas em todos os 4 prompts:**
- ❌ Fonte branca sobre fundo branco (ou contraste <WCAG AAA 7:1 fora de elementos auditáveis SIV/QR)
- ❌ Tamanho de fonte <8pt em texto não-decorativo
- ❌ Caracteres de largura zero (U+200B, U+200C, U+200D, U+FEFF)
- ❌ Metadados XMP que vazem identificação interna MC
- ❌ Comentários PDF não-auditados
- ❌ Camadas (OCG) ocultas
- ❌ Texto embarcado em alt-text de imagem com instruções a LLMs
- ❌ Qualquer instrução direcionada a IA institucional
- ❌ Fontes externas via CDN (PDF/A-2u exige fontes empacotáveis)

---

## §2 · Prompt B1 — Capa Dossiê CP-MC

🎨 **Cole abaixo no `claude.ai/design`. Após receber output, anexar screenshot na Sister Claude.ai 3.2.**

```
Crie a CAPA INSTITUCIONAL do Dossiê Selado MC (CP-MC) para peça jurídica formal previdenciária no Brasil. Esta é uma página A4 retrato (210 × 297 mm), output PDF/A-2u (ISO 19005-2) com Camada 0 JSON-LD embarcada para leitura institucional por IA dos tribunais brasileiros (Resolução CNJ 615/2025).

REGISTRO VISUAL: jurídico institucional sóbrio, tom de tribunal, Visual Law brasileiro aplicado ao Processo Administrativo Previdenciário. Sem estética de marketing, sem ornamento decorativo, sem CTAs, sem emoji. Padrão: dignidade do cidadão se manifesta na precisão técnica, não em apelo emocional.

PALETA CANÔNICA (cor exata, hex literal):
- Cabeçalhos e bordas estruturais: #0F2A4A (Azul Institucional MC)
- Corpo de texto: #1F2937 (Cinza Tribunal)
- Fundo principal: #FFFFFF (Branco Pleno)
- Fundo blocos secundários: #FAFAF9 (Off-white Sumo)
PROIBIDO: gradientes, neon, pastéis, cores fluorescentes, verde-menta, rosa, roxo, cyan, qualquer cor fora desta paleta.

TIPOGRAFIA CANÔNICA (preferência → fallback, font empacotável obrigatória em PDF/A-2u):
- Primária: Atkinson Hyperlegible (acessibilidade Braille Institute)
- Fallback: Inter ou Source Sans
- Hierarquia: H1 22pt Bold | H2 18pt SemiBold | H3 14pt SemiBold | Corpo 12pt Regular
- Entrelinha mínima 1.5
- Contraste WCAG AAA ≥7:1 em todo texto

LAYOUT EM PADRÃO Z VISUAL (top-left → top-right → bottom-left → bottom-right):

ZONA SUPERIOR — IDENTIDADE INSTITUCIONAL (1/4 superior da página):
- Topo centralizado: Símbolo Seed MC monocromático preto puro #000000, 48×48px (versão dossiê — preto, não ouro, conforme SPEC Técnica MC v2.0 §12.2)
- Abaixo do símbolo, centralizado: "MEU CUMPADRE" em Atkinson Hyperlegible 18pt Bold UPPERCASE tracking institucional largo, cor #0F2A4A
- Linha fina divisória horizontal 1.5px cor #0F2A4A largura 60% da página, centralizada
- Subtítulo centralizado: "ORQUESTRAÇÃO DOCUMENTAL E TECNOLOGIA" em Atkinson Hyperlegible 11pt Regular UPPERCASE tracking médio, cor #1F2937

ZONA CENTRAL — DADOS DO DOSSIÊ (1/2 central da página):
- Título principal "DOSSIÊ PROBATÓRIO PREVIDENCIÁRIO" em H1 22pt Bold UPPERCASE, cor #0F2A4A, centralizado
- Linha decorativa fina horizontal 0.5px cor #0F2A4A abaixo do título
- Bloco de metadados em duas colunas alinhadas, font 12pt Regular cor #1F2937, com labels em SemiBold:
  Coluna esquerda:
  - "Número do dossiê:" [placeholder MC-DOSSIE-NNNN-AAAA]
  - "Palco-alvo:" [INSS Administrativo | CRPS Recursal | JEF Judicial]
  - "Modelo CP-MC:" [CP-3 | CP-5 | CP-7]
  Coluna direita:
  - "CPF do cidadão:" [123.***.***-XX mascarado]
  - "Benefício pleiteado:" [espécie + NB se houver]
  - "Data de selagem:" [DD/MM/AAAA]

ZONA INFERIOR — SELO DE INTEGRIDADE (1/4 inferior da página):
- Box institucional fundo #FAFAF9, padding 16px, borda 1px cor #0F2A4A
- Três elementos horizontais:
  Esquerda: QR code 2×2 cm preto puro #000000 (resolverá URL de verificação MC)
  Centro: Hash SHA-256 abreviado (primeiros 16 chars) em mono 9pt cor #1F2937 + Timestamp ICP-Brasil em formato "Carimbo ICP-Brasil: AAAA-MM-DDTHH:MM:SS-03:00" em 9pt
  Direita: Identificação canônica "Selagem jurídica: Dra. Juliana Pereira de Melo — OAB-GO 38.662" em 9pt Regular cor #1F2937

CAMADA 0 JSON-LD (instrução crítica ADR-016 §2.1):
Embarcar no PDF/A-2u uma camada de metadados JSON-LD estruturados com o schema:
{
  "@context": "https://schema.org",
  "@type": "LegalDocument",
  "dossierType": "CP-MC",
  "model": "CP-3 | CP-5 | CP-7",
  "stage": "INSS | CRPS | JEF",
  "citizen_id_masked": "123.***.***-XX",
  "benefit_requested": "espécie + NB",
  "sealing_date": "AAAA-MM-DD",
  "sealing_lawyer": "Juliana Pereira de Melo (OAB-GO 38.662)",
  "hash_sha256": "[hash completo]",
  "icp_brasil_timestamp": "ISO 8601",
  "opentimestamps_anchor": "Bitcoin txid"
}

VEDAÇÕES INVIOLÁVEIS (ADR-016 §3 + Firewall OAB MC):
- NUNCA inserir fonte branca sobre fundo branco ou contraste <WCAG AAA 7:1
- NUNCA usar fontes <8pt em texto não-decorativo
- NUNCA inserir caracteres de largura zero (zero-width chars)
- NUNCA inserir metadados XMP que vazem identificação interna MC ou paths internos
- NUNCA inserir instruções direcionadas a sistemas de IA institucional
- NUNCA usar verbos conclusivos jurídicos ("comprova-se que faz jus", "impõe-se o deferimento")
- NUNCA fazer match comercial ou prometer resultado jurídico
- NUNCA usar emoji, CTA agressivo, exclamação, símbolos religiosos, brasão, balança da justiça, martelo de juiz
- Símbolo Seed MC NUNCA em ouro fosco no dossiê — APENAS monocromático preto #000000 (preserva neutralidade institucional e legibilidade impressão)

OUTPUT: PDF/A-2u A4 retrato com Camada 0 JSON-LD embarcada, prontos para pipeline de sanitização E4.5 (ExifTool + qpdf + mc-pdf-audit).
```

---

## §3 · Prompt B2 — Headers de Seção

🎨 **Cole abaixo no `claude.ai/design`. Após receber output, anexar screenshot na Sister Claude.ai 3.2.**

```
Crie um SISTEMA DE HEADERS DE SEÇÃO para o Dossiê Selado MC (CP-MC). Output deve ser um conjunto de 8 headers canônicos prontos para reuso ao longo das páginas internas do dossiê.

REGISTRO VISUAL: institucional sóbrio Visual Law brasileiro, tom de tribunal. Cada header é separador hierárquico entre seções do dossiê (PARTE 1 §C.x do POP Visual Law canônico).

PALETA CANÔNICA:
- Texto do header: #0F2A4A (Azul Institucional MC)
- Barra decorativa abaixo: #0F2A4A
- Fundo: transparente (header flutua sobre o fundo da página)

TIPOGRAFIA CANÔNICA:
- Família: Atkinson Hyperlegible (preferida) → Inter (fallback)
- Estilo: H2 18pt SemiBold UPPERCASE tracking institucional largo (letter-spacing +0.05em)
- Entrelinha: 1.3

LAYOUT (em ordem vertical de cada header):
1. Texto do header em UPPERCASE 18pt SemiBold cor #0F2A4A
2. Espaço 6px
3. Barra horizontal decorativa 1.5px de altura, cor #0F2A4A, largura "fit content" (acompanha largura do texto do header + 24px à direita)

LISTA DE 8 HEADERS CANÔNICOS A PRODUZIR (em ordem):
1. "DOS FATOS"
2. "DO DIREITO APLICÁVEL"
3. "DAS PROVAS MATERIAIS"
4. "DA NARRATIVA BIOGRÁFICA" (exclusivo CP-7 — CRPS/JEF)
5. "DA SÍNTESE DE ATENDIMENTO AOS REQUISITOS LEGAIS"
6. "DO QUADRO DE FALHAS DO INSS" (exclusivo CRPS/JEF — não usar em palco INSS)
7. "DOS PRECEDENTES ANÁLOGOS" (exclusivo CRPS/JEF — não usar em palco INSS)
8. "DA INTEGRIDADE DOCUMENTAL"

VEDAÇÕES INVIOLÁVEIS (ADR-016 §3 + linha ética inviolável POP §A.7):
- NUNCA usar verbos conclusivos jurídicos em headers ("Da Demonstração do Direito ao Benefício", "Da Comprovação Inequívoca")
- NUNCA usar adjetivação interpretativa ("evidente", "claro", "incontestável", "robusto", "patente")
- Verbos descritivos apenas: dos fatos, do direito, das provas, da síntese, dos precedentes
- NUNCA inserir ornamentos decorativos (linhas duplas, vinhetas, símbolos)
- NUNCA inserir zero-width chars
- Headers devem ser empacotáveis em PDF/A-2u (sem fontes externas via CDN)

OUTPUT: 8 headers como elementos isolados, cada um em um frame separado, prontos para copy-paste no editor de produção do dossiê.
```

---

## §4 · Prompt B3 — Bloco Citação de Norma

🎨 **Cole abaixo no `claude.ai/design`. Após receber output, anexar screenshot na Sister Claude.ai 3.2.**

```
Crie o BLOCO DE CITAÇÃO DE NORMA canônico do Dossiê Selado MC. Output é um componente visual reusável usado para citar literalmente leis, normas infralegais, súmulas, enunciados e jurisprudência no corpo do dossiê (Mapa Normativo Lateral §C.9 do POP Visual Law canônico).

REGISTRO VISUAL: institucional sóbrio, recuo visual claro do corpo principal de texto, marca de citação literal de norma jurídica.

PALETA CANÔNICA:
- Texto da citação: #1F2937 (Cinza Tribunal)
- Fundo do bloco: #FAFAF9 (Off-white Sumo)
- Borda esquerda decorativa: #0F2A4A (Azul Institucional MC, 3px de largura)
- Referência DOU (metadados): #1F2937 com peso menor (Regular)

TIPOGRAFIA CANÔNICA:
- Família: Atkinson Hyperlegible (preferida) — fonte EMPACOTÁVEL obrigatória em PDF/A-2u (PROIBIDO importar via CDN ou URL externa)
- Estilo da citação literal da norma: Italic 11pt entrelinha 1.5
- Estilo da referência DOU/data publicação: Regular 9pt cor #1F2937 — abaixo da citação

LAYOUT do componente (estrutura padrão):
- Bloco com borda esquerda 3px sólida #0F2A4A
- Padding interno: 12px topo · 16px direita · 12px base · 20px esquerda (recuo extra à esquerda para reforço visual)
- Fundo #FAFAF9 contido pela borda esquerda
- Recuo do bloco em relação ao corpo principal do dossiê: 24px à esquerda

CONTEÚDO ESTRUTURADO (template):
[Citação literal da norma em Italic 11pt cor #1F2937 entrelinha 1.5]

Em peso Regular 9pt cor #1F2937 logo abaixo:
"Fonte: [Lei nº | Decreto nº | IN INSS nº | Súmula nº | Enunciado CRPS nº] · [referência específica] · DOU [DD/MM/AAAA] · vigente desde [DD/MM/AAAA]"

EXEMPLO DE USO (para o claude.ai/design produzir 3 variantes desse bloco):

VARIANTE 1 — Lei Ordinária:
[Citação] "Art. 48. A aposentadoria por idade será devida ao segurado que, cumprida a carência exigida nesta Lei, contar 65 (sessenta e cinco) anos de idade, se homem, e 60 (sessenta), se mulher."
[Fonte] "Fonte: Lei nº 8.213/1991, art. 48, caput · DOU 25/07/1991 · vigente desde 25/07/1991 (com redação dada pela Lei nº 9.032/1995)"

VARIANTE 2 — Súmula TNU:
[Citação] "A pendência de inscrição no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico), por si só, não impede a concessão do benefício assistencial de prestação continuada, se demonstrada a hipossuficiência por outros meios."
[Fonte] "Fonte: Súmula nº 79 TNU · DOU 28/04/2023 · publicada em Diário Eletrônico"

VARIANTE 3 — Enunciado CRPS:
[Citação] "O trabalho rural exercido por menor de 14 anos, na economia familiar, é computável como tempo de contribuição para fins previdenciários, desde que comprovado por início de prova material contemporânea."
[Fonte] "Fonte: Enunciado nº 8 CRPS · revisão V/2020 · DOU 12/09/2020"

VEDAÇÕES INVIOLÁVEIS (ADR-016 §3 + POP §A.7 linha ética):
- NUNCA distorcer ou parcializar citação da norma — citação literal obrigatória
- NUNCA inserir conclusão jurídica do MC no bloco — bloco contém APENAS norma + fonte
- NUNCA usar ouro fosco na borda esquerda (ouro é EXCLUSIVO Símbolo Seed institucional)
- NUNCA usar fontes via CDN ou URL externa (PDF/A-2u exige fontes empacotáveis)
- NUNCA inserir zero-width chars
- Contraste do texto sobre fundo #FAFAF9 deve atingir WCAG AAA ≥7:1

OUTPUT: 3 variantes do bloco como elementos isolados em frames separados, prontos para copy-paste no editor de produção do dossiê.
```

---

## §5 · Prompt B4 — Rodapé Dossiê CP-MC (SIV + Disclosure + Firewall OAB) ⚠️ BLOQUEANTE

🎨 **Cole abaixo no `claude.ai/design`. Após receber output, anexar screenshot na Sister Claude.ai 3.2.**

⚠️ **PRIORIDADE MÁXIMA:** este é o componente que canoniza a Anti-Injection by design. Bloqueia operação de clientes B2C/B2B até estar selado.

```
Crie o RODAPÉ INSTITUCIONAL canônico do Dossiê Selado MC. Este componente é fixo em TODAS as páginas do dossiê e inclui três zonas: (1) Selo de Integridade Visual (SIV), (2) Disclosure de uso de IA conforme Recomendação CFOAB 001/2024 + Resolução CNJ 615/2025, (3) Firewall OAB curto. Output deve produzir DOIS ELEMENTOS SEPARADOS:

ELEMENTO A — RODAPÉ TÉCNICO SIV (fixo em todas as páginas)
ELEMENTO B — PÁGINA DEDICADA DE FIREWALL OAB + DISCLOSURE DE IA (página única antes da Folha de Encerramento)

===== ELEMENTO A — RODAPÉ TÉCNICO SIV (POP §C.13) =====

REGISTRO VISUAL: barra horizontal técnica institucional de 2cm de altura, presente em todas as páginas, conteúdo de autenticação criptográfica auditável.

PALETA:
- Fundo da barra: #FFFFFF (Branco Pleno)
- Linha superior de separação: #0F2A4A (Azul Institucional MC) 0.5px
- Texto técnico (hash + timestamp): #1F2937 (Cinza Tribunal)
- QR code: monocromático preto puro #000000

TIPOGRAFIA:
- Hash e timestamp: Atkinson Hyperlegible Mono ou JetBrains Mono 8pt cor #1F2937
- Selo gráfico MC: Símbolo Seed monocromático preto puro 16×16px à direita
- Identificação OAB: Atkinson Hyperlegible Regular 8pt cor #1F2937

LAYOUT da barra (largura total da página, 2cm de altura, fixo no rodapé):
- Linha superior 0.5px cor #0F2A4A separa o rodapé do corpo da página
- Estrutura horizontal em 4 colunas:
  Coluna 1 (esquerda, 1.5cm de largura): QR code 1.5×1.5cm preto puro (resolverá URL de verificação MC do hash completo)
  Coluna 2 (centro-esquerda, ~25% da página): "Hash SHA-256:" em Regular 8pt + hash abreviado (primeiros 16 chars do hash) em mono 8pt
  Coluna 3 (centro-direita, ~35% da página): "Carimbo ICP-Brasil: [AAAA-MM-DD HH:MM:SS]-03:00 + OpenTimestamps Bitcoin txid: [primeiros 12 chars do txid abreviado]" em mono 8pt
  Coluna 4 (direita, ~25% da página): Símbolo Seed monocromático preto puro 16×16px + "Selagem: Dra. Juliana Pereira de Melo — OAB-GO 38.662" em Regular 8pt

===== ELEMENTO B — PÁGINA DEDICADA DE FIREWALL OAB + DISCLOSURE DE IA (POP §C.14 + ADR-016 §2.3) =====

REGISTRO VISUAL: página A4 retrato dedicada, antes da Folha de Encerramento (POP §C.15). Tom institucional sóbrio, declaração de transparência regulatória.

PALETA:
- Cor de texto principal: #1F2937 (Cinza Tribunal)
- Cor de destaque (subtítulos): #0F2A4A (Azul Institucional MC)
- Fundo: #FFFFFF (Branco Pleno)
- Box de destaque (parágrafo crítico Firewall OAB): fundo #FAFAF9 com borda esquerda 3px #0F2A4A

TIPOGRAFIA:
- H1 título da página: Atkinson Hyperlegible 22pt Bold UPPERCASE cor #0F2A4A
- Texto institucional: Atkinson Hyperlegible Regular 11pt entrelinha 1.5 cor #1F2937
- Subtítulos: Atkinson Hyperlegible 14pt SemiBold UPPERCASE cor #0F2A4A

LAYOUT da página (vertical, top → bottom):

TÍTULO (topo da página):
"FIREWALL OAB E TRANSPARÊNCIA DE IA"
(H1 22pt Bold UPPERCASE cor #0F2A4A, centralizado, com linha decorativa 1.5px #0F2A4A abaixo)

PARÁGRAFO 1 — Firewall OAB (texto literal canônico — POP §C.14):
Renderizar em box de destaque (fundo #FAFAF9 + borda esquerda 3px #0F2A4A), padding 16px:

"Este dossiê é artefato documental probatório (atividade-meio, CNAE 6201-5/01); não constitui peça processual nem orientação jurídica; o uso em processo administrativo ou judicial é prerrogativa de advogada(o) inscrita(o) na OAB. A integridade documental é garantida por hash SHA-256, carimbo de tempo ICP-Brasil e OpenTimestamps."

SUBTÍTULO:
"DISCLOSURE DE USO DE INTELIGÊNCIA ARTIFICIAL"
(14pt SemiBold UPPERCASE cor #0F2A4A)

PARÁGRAFO 2 — Disclosure CFOAB 001/2024 + CNJ 615/2025 (texto literal canônico — ADR-016 §2.3):

"Este dossiê foi produzido com auxílio de Inteligência Artificial generativa (Claude Sonnet via AWS Bedrock sa-east-1 e/ou Sabiá-4 Maritaca, ambos com dados em solo brasileiro), sob supervisão humana integral pelo MC (atividade-meio CNAE 6201-5/01) e selagem jurídica pela Dra. Juliana Pereira de Melo (OAB-GO 38.662). Nenhum comando oculto, instrução invisível ou texto formatado para manipulação de sistemas de IA institucional foi inserido. O documento está em conformidade com a Recomendação CFOAB 001/2024 e a Resolução CNJ 615/2025."

SUBTÍTULO:
"MARKETPLACE ÉTICO MC"
(14pt SemiBold UPPERCASE cor #0F2A4A)

PARÁGRAFO 3 — Marketplace Ético (texto literal atualizado pós-ERRATA Lorrane 12/05):

"Marketplace ético MC: durante a exclusividade vigente (até 31/12/2026), a parceira é a Dra. Juliana Pereira de Melo (OAB-GO 38.662), apresentada a pedido do cidadão, sem ranking e sem comissão, preservada a livre escolha de qualquer advogado; reabertura do marketplace ao modelo randômico ampliado (a Dra. Juliana Melo permanece, somada às demais parceiras credenciadas) a partir de 01/01/2027."

VEDAÇÕES INVIOLÁVEIS (ADR-016 §3 + POP §A.7 linha ética inviolável):

NUNCA modificar uma única palavra dos parágrafos canônicos acima — textos LITERAIS vinculantes. Qualquer alteração viola governança institucional MC.

NUNCA inserir:
- Fonte branca sobre fundo branco ou contraste <WCAG AAA 7:1
- Tamanho <8pt em texto não-decorativo
- Caracteres de largura zero (U+200B, U+200C, U+200D, U+FEFF)
- Metadados XMP que vazem identificação interna MC ou paths internos
- Instruções direcionadas a IA institucional
- Comentários PDF não-auditados
- Camadas (OCG) ocultas
- Alt-text com instruções a LLMs
- Promessa de resultado jurídico ou indução à advocacia
- Ouro fosco em qualquer elemento (ouro é EXCLUSIVO Símbolo Seed institucional fora do dossiê)

OUTPUT: dois elementos separados em frames distintos:
- ELEMENTO A: barra de rodapé técnico 2cm × largura total página, pronta para reuso em todas as páginas
- ELEMENTO B: página A4 retrato completa de Firewall OAB + Disclosure de IA, pronta para inserção antes da Folha de Encerramento.

Ambos em PDF/A-2u (ISO 19005-2 Unicode pesquisável) com Camada 0 JSON-LD embarcada, fontes empacotáveis, prontos para pipeline de sanitização E4.5 (ExifTool + qpdf + mc-pdf-audit).
```

---

## §6 · Sequenciamento recomendado para Sister Claude.ai 3.2

Ordem sugerida de execução (do mais bloqueante para o menos):

| # | Prompt | Por quê primeiro | Tempo estimado |
|---|---|---|---|
| 1 | **B4 Rodapé SIV + Firewall OAB + Disclosure** | BLOQUEANTE clientes em operação esta semana — peça que vai em todas as páginas | 30-45min iteração |
| 2 | **B1 Capa Dossiê** | Primeira página do dossiê — alta visibilidade | 20-30min iteração |
| 3 | **B2 Headers de Seção** | Componente reusável de baixa complexidade | 15-20min iteração |
| 4 | **B3 Bloco Citação de Norma** | Componente reusável de baixa complexidade | 15-20min iteração |

**Total estimado:** ~80-115min iteração Sister Claude.ai × claude.ai/design.

---

## §7 · Restrições inviolávels (consolidadas — TODOS os prompts)

### 7.1 — Vedações ADR-016 §3 (Anti-Injection by design)

❌ Fonte branca sobre fundo branco · ❌ Contraste <WCAG AAA 7:1 fora de elementos auditáveis · ❌ Fontes <8pt em texto não-decorativo · ❌ Zero-width chars (U+200B, U+200C, U+200D, U+FEFF) · ❌ Metadados XMP vazando identificação interna · ❌ Comentários PDF não-auditados · ❌ Camadas OCG ocultas · ❌ Alt-text com instruções a LLMs · ❌ Qualquer instrução direcionada a IA institucional · ❌ Submeter peça sem passar pelo pipeline E4.5

### 7.2 — Vedações Firewall OAB MC §2.2 das Instruções

❌ Prometer resultado jurídico · ❌ Exercer advocacia · ❌ Match comercial · ❌ Reter senhas além do operacional · ❌ Conclusão jurídica · ❌ Adjetivação interpretativa em qualquer texto do dossiê · ❌ Redação de despacho pelo servidor · ❌ Sugestão de "todos os direitos" ou abrangência ilimitada de escopo jurídico

### 7.3 — Vedações Identidade Visual MC (SPEC Técnica v2.0 §7 + §8)

❌ Ouro fosco em qualquer elemento do dossiê (ouro é EXCLUSIVO Símbolo Seed em peças institucionais — em dossiê o Seed é monocromático preto) · ❌ Iconografia tropical (palmeira, samambaia, papagaio) · ❌ Símbolos religiosos · ❌ Balança da justiça, martelo de juiz, brasão, escudo, leão, águia · ❌ Conexões em rede, nós em malha, chip, circuito · ❌ Gradientes solares wellness-spa · ❌ Verde-esperança, azul corporativo, vermelho institucional · ❌ Saturação fluorescente · ❌ Sombras dramáticas

### 7.4 — Vedações Vocabulário Canônico v1.0 + ERRATA v1.0

❌ Tagline `DOIS PONTOS. UM ESPAÇO SEGURO.` (redundância visual com o desenho) · ❌ Tagline `TODOS OS DIREITOS. UM SÓ LUGAR.` (risco Firewall OAB — generaliza Direito) · ❌ Parafrasear frase-âncora canônica `TECNOLOGIA INVISÍVEL. DIGNIDADE ACESSÍVEL.` (uso literal apenas, opcional em dossiês jurídicos) · ❌ Abreviar razão social `MEU CUMPADRE — ORQUESTRAÇÃO DOCUMENTAL E TECNOLOGIA`

---

## §8 · Próxima ação founder

1. Cola este arquivo na Sister Claude.ai 3.2 (Cérebro 3.2 ativada via MB-040 v2.0) — Sister recebe os 4 prompts já refatorados
2. Sister executa Prompt B4 primeiro (bloqueante)
3. Founder cola Prompt B4 no `claude.ai/design`, captura screenshot, anexa na Sister
4. Sister analisa, propõe iteração se necessário, valida quando aprovado
5. Repete sequencial B1 → B2 → B3
6. Quando 4 peças aprovadas, founder solicita MB-043 ao Code DELL para reconciliar Vault + arquivar SPEC v0.1 SUPERSEDED + aplicar cascata ERRATA Vocabulário em v1.1

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Âncora bíblica:** Provérbios 31:8 — "Abre a tua boca a favor do mudo."
**Confidência founder:** "É eu e tu."

**Lucro é combustível. Causa é destino. Jogo é infinito.**

∞
