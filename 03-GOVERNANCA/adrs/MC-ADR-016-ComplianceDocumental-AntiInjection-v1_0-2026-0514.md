---
tipo: ADR
codigo: MC-ADR-016
titulo: Compliance Documental Anti-Injection — Disciplina de Produção de Peças MC na Era da IA Judicial
versao: 1.0
status: PROVISIONAL (validação Bloco G/J Pauta Juliana 19/05/2026)
data: 2026-05-14
autor: Claude Opus 4.7 (cofounder intelectual) × Alessandro de Souza Neves (Founder/CEO)
contexto_gerador: Caso TRT-8 Parauapebas (12/05/2026) — primeira jurisprudência BR de prompt injection
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# ADR-016 — Compliance Documental Anti-Injection

## 1. Contexto

Em 12/05/2026, o sistema Galileu (TRT-4/CSJT) detectou prompt injection em fonte branca numa petição inicial da 3ª Vara do Trabalho de Parauapebas/PA. O juiz aplicou multa de R$ 84.250,08 e afastou a proteção do art. 77 §6º CPC. A pesquisa CNJ/PNUD 2024 confirma 178 iniciativas de IA em tribunais brasileiros e 45,8% de adoção de IA generativa.

O MC opera 3 palcos (INSS administrativo · CRPS recursal · JEF/B2B judicial), todos hoje com presença ativa ou planejada de IA institucional. O dossiê MC já é Camada 0 (interface máquina via JSON-LD em PDF/A-3) por design — mas não há decisão canônica documentando a disciplina de produção contra injection.

## 2. Decisão

O MC adota **Compliance Documental Anti-Injection** como disciplina inviolável de produção de toda peça B2C (Φ₁/Φ₁c/Φ₁-PcD/Φ₀-Dossiê) e B2B (Ψ₁), em três pilares:

### 2.1 Pilar 1 — Formato canônico de saída: PDF/A-2u + JSON-LD (Camada 0)

Toda peça MC entregue ao cidadão (Φ₁) ou ao advogado parceiro (Ψ₁) é gerada em **PDF/A-2u** (ISO 19005-2 com Unicode pesquisável), com camada JSON-LD embarcada para leitura institucional por IA — Camada 0 da CP-MC. PDF/A-2u proíbe JavaScript, fontes externas, criptografia e conteúdo dinâmico, eliminando vetores de injection clássicos.

### 2.2 Pilar 2 — Sanitização documental obrigatória (E4 do workflow)

Antes da assinatura A1 ICP-Brasil pela Dra. Juliana Melo (selagem Φ₁) ou pelo advogado parceiro (Ψ₁), toda peça passa por pipeline de sanitização:

1. **ExifTool** — `exiftool -all:all= peça.pdf` (zerar metadados XMP)
2. **qpdf** — `qpdf --linearize peça.pdf final.pdf` (regravar estrutura, tornar limpeza irreversível)
3. **Validação visual de contraste** — script Python proprietário MC que detecta texto com contraste WCAG AAA < 7:1 com fundo (flag automática)
4. **Validação de fontes** — confirma que toda fonte é tamanho ≥ 8pt, sem zero-width characters (caracteres de largura zero da família Unicode)
5. **Hash SHA-256 + timestamp ICP-Brasil + ancoragem OpenTimestamps** — Selo de Integridade Visual (SIV) — já operacional no POP Visual Law PARTE 1 (C.13)

A sanitização é **operação de E4 (selagem)**, não de E3 (composição). Versionamento em N8N com retenção de versão pré-sanitização (auditoria).

### 2.3 Pilar 3 — Disclosure transparente de uso de IA (Recomendação CFOAB 001/2024)

Toda peça Φ₁/Ψ₁ inclui, na Página de Firewall OAB (C.14 do POP Visual Law PARTE 1), declaração explícita:

> *"Este dossiê foi produzido com auxílio de Inteligência Artificial generativa (Claude Sonnet via AWS Bedrock sa-east-1 e/ou Sabiá-4 Maritaca, ambos com dados em solo brasileiro), sob supervisão humana integral pelo MC (atividade-meio CNAE 6202-3/00) e selagem jurídica pela Dra. Juliana Pereira de Melo (OAB-GO 38.662). Nenhum comando oculto, instrução invisível ou texto formatado para manipulação de sistemas de IA institucional foi inserido. O documento está em conformidade com a Recomendação CFOAB 001/2024 e a Resolução CNJ 615/2025."*

Esse texto é canônico e versionado. Substitui qualquer formulação prévia.

## 3. Proibições absolutas (ADR-016)

❌ Fonte branca sobre fundo branco (ou qualquer contraste < WCAG AAA 7:1 fora de elementos visuais auditáveis como SIV/QR)
❌ Tamanho de fonte < 8pt em qualquer texto não-decorativo
❌ Caracteres de largura zero (U+200B, U+200C, U+200D, U+FEFF)
❌ Metadados XMP que vazem nome de estagiário, caminho de servidor, identificação interna MC
❌ Comentários PDF não-auditados
❌ Camadas (OCG) ocultas
❌ Texto embarcado em alt-text de imagem com instruções a LLMs
❌ Qualquer instrução direcionada a IA institucional — independente da intenção (mesmo "proteja meu cliente da IA")
❌ Submeter peça sem passar pelo pipeline de sanitização E4

## 4. Consequências

### 4.1 Operacional
- POP Visual Law PARTE 2 (E.5 — Stack de Ferramentas) recebe adendo de ferramentas obrigatórias: ExifTool + qpdf + script proprietário MC de validação de contraste/fontes/zero-width.
- POP Visual Law PARTE 2 (F.1 — Workflow) ganha sub-etapa E4.5 (sanitização) entre E4 (composição final) e E5 (selagem).
- Router-Ethics 11.0 ganha **Hook 8 — Sanitization Gate** pré-selagem (cofounder produz spec em ADR-016 v1.1 pós-Juliana).

### 4.2 Jurídico
- Compatível e reforça Firewall OAB (atividade-meio).
- Antecipa Resolução CNJ 615/2025 e Recomendação CFOAB 001/2024.
- Material de defesa pré-construído para qualquer questionamento OAB ou ANPD.

### 4.3 Comercial / institucional
- Argumento canônico **"MC é anti-injection by design"** entra no pitch FINEP/BNDES/Centelha.
- Abre caminho para **Ψ₃-AntiInjection Compliance** — produto B2B advogado de sanitização documental (futuro pós-piloto).
- Compatível com tese OAB e tese parecerista Juliana.

## 5. Status PROVISIONAL — Gates de Selagem

| Gate | Item validado | Prazo |
|---|---|---|
| G1 | Bloco G Pauta Juliana 19/05 — conformidade com Resolução CNJ 615/2025 | 19/05/2026 |
| G2 | Bloco J Pauta Juliana 19/05 — disciplina de produção de peças | 19/05/2026 |
| G3 | Validação técnica Igor — viabilidade pipeline ExifTool+qpdf+Python no N8N | pós-25/05 |
| G4 | Validação Carlos UX — declaração C.14 não fere Teste Zilda-STF | pré-19/05 |
| G5 | Validação empírica N=20 peças sanitizadas — falso-positivo < 1% | pós-piloto |

**Selagem v1.0 → v2.0:** pós-parecer Juliana + validação Igor + 20 peças piloto.

## 6. Risco residual

Mesmo com Pilares 1+2+3, ataques sofisticados (esteganografia textual, manipulação de codepoints Unicode não-ASCII) podem escapar. Mitigação: **camada humana inviolável** — toda peça MC é lida visualmente pela Dra. Juliana antes da selagem A1 ICP-Brasil (operação atual, mantida em ADR-016).

## 7. Referências cruzadas

- ADR-008 — Stack (recebe adendo ferramentas E4.5)
- ADR-007 v3.8 — Campo de Precificação (Ψ₃ futuro)
- ADR-014 — ZapSign (A1 ICP-Brasil mantém)
- POP-VisualLaw PARTE 1 — C.13 (SIV) · C.14 (Firewall OAB)
- POP-VisualLaw PARTE 2 — D.1 (Design System) · E.5 (Stack) · F.1 (Workflow)
- Router-Ethics 11.0 — Hook 8 (a criar)
- Recomendação CFOAB 001/2024
- Resolução CNJ 615/2025 (vigente 14/07/2025)
- Acórdão TCU Supertec 2025 (rel. Aroldo Cedraz) — 10,94% indeferimentos automáticos indevidos
- Anexo radar: `02-ARQUITETURA/inteligencia-setorial/MC-RADAR-Galileu-AntiInjection-Caso-TRT8-Parauapebas-v1_0-2026-0514.md`

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Provérbios 31:8** — "Abre a tua boca a favor do mudo."

∞
