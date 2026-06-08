/**
 * ════════════════════════════════════════════════════════════════════════════
 *  MC-WORKFLOW · ESPÉCIMEN AUTO-EVOLUTIVO  ·  Motor #45 + #46 + #47
 *  v0.1 PROVISIONAL · INSTALADO (PR #14) · cloud-portable (Template-Mestre inline) · 2026-06-02
 *  (vive em .claude/workflows/ do repo · Template-Mestre embutido inline p/ resolver em cloud)
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  ESCOPO  A máquina que aprende com cada caso: instancia um espécimen do
 *  Template-Mestre vN, captura sua Trilha B (já de-identificada), faz engenharia
 *  reversa (#46) com triagem ouro/meio-termo/pirita, diffa contra o template,
 *  roda REGRESSÃO no golden fixture Hib001, e propõe upgrade vN→vN+1 + nota de
 *  catálogo. TUDO RASCUNHO. PARA no gate humano (Founder + Dra. Juliana R3).
 *
 *  GOVERNANÇA DURA (fail-closed)
 *   · D > C > V (Dignidade > Compliance > Viabilidade) — lexicográfico.
 *   · Proof-First: cada saída cita fonte:linha; sem lastro → [GATE]/[FONTE PENDENTE].
 *   · Firewall OAB: opera SÓ no método/Zona Verde. PII de cliente NUNCA entra em
 *     prompt de agente — vive no C1 sob gate R3 (Dra. Juliana). Atividade-fim
 *     (tese/petição) é 100% da advogada parceira; o motor entrega insumo-meio.
 *   · NÃO sela · NÃO escreve no Vault · NÃO ingere PII · devolve rascunhos.
 *
 *  LASTRO DAS 5 LACUNAS (fechadas na FASE 0 · fonte primária · 2026-06-02)
 *   1. Ficha do espécimen #45 = 10 itens CANÔNICOS ......... C0-05 (Princípio #45):74-87
 *      (os 10 campos §1.1 do blueprint eram PROPOSTA 🟡 — substituídos pelos canônicos)
 *   2. 4D-TDIG = Trajetória de Dignidade Integral 4D; XYZ(espaço-alvo) · T(tempo) ·
 *      P(precisão semântica) ............................... C0-03 (Doutrina EIS):142-157
 *      (X/Y/Z NÃO são vertical/complexidade/vulnerabilidade — é o espaço-alvo unificado)
 *   3. CVRD = Ciclo de Vida de Restauração de Dignidade (sigla PT, não as iniciais EN);
 *      Discovery→E0-1 · Inference→E2-3 · Dispersal→E4-5 · Self-Heal→E6-7 .... C0-03:91-136
 *   4. Métricas — as 3 inferências §4.3 do blueprint estavam ERRADAS:
 *        CMD   = Capital Morto Desbloqueado (North Star, SELADO; ↑) ......... C0-10:195-219
 *        RA-MC = Razão de Automação = THU_manual ÷ THU_target (≥4×) ....... #23/PRINCIPIO-021:36,44
 *        TENV-MC = Taxa de Elevação de Nível gov.br (caso JAN001) ..... C0-03:177 · C1-17:242
 *        (fórmula de TENV-MC: não constava em fonte → ADOTADA por decisão Founder 02/06, provisória até v1.3; motor só usa nome/sentido)
 *   5. CP-MC = Constelação Probatória MC: artefatos GPN/SIV/ICE · 3 camadas cognitivas ·
 *      modelos CP-3/CP-5/CP-7 · palcos INSS/CRPS/JEF · 5 vedações .................... C2-20
 *
 *  REGRAS DE WORKFLOW (não quebrar): Date.now()/Math.random()/new Date() NÃO
 *  existem (quebram o resume) — variar por índice, timestamps via args. meta é
 *  literal puro. Agentes recebem só material 🟢 (Template-Mestre Zona Verde +
 *  Trilha B JÁ de-identificada inline), NUNCA um arquivo C1-* — inclusive o
 *  Catálogo C1-17, que é Camada 1 e carrega CPF/NB/NIT/nome civil (gate R3).
 * ════════════════════════════════════════════════════════════════════════════
 */

export const meta = {
  name: 'mc-especimen-autoevolutivo',
  description: 'Motor #45+#46+#47 (Espécimen Auto-Evolutivo). 5 fases: (0) instancia do Template-Mestre vN · (1) captura bifronte de UMA Trilha B de-identificada · (2) engenharia reversa #46 + triagem ouro/meio-termo/pirita · (3) DIFF vs template + REGRESSÃO no golden fixture Hib001 · (4) proposta de upgrade vN→vN+1 + nota de catálogo. Sem args = roda Hib001 como golden master. NÃO sela, NÃO escreve no Vault, NÃO ingere PII (Firewall OAB). Devolve rascunhos no gate humano (Founder + Dra. Juliana R3).',
  phases: [
    { title: 'Instanciar', detail: 'Explore (read-only) lê só o Template-Mestre vN (já com ERRATA-001) · ficha 10 campos canônicos + C0/C2 herdados · zero arquivo C1/PII' },
    { title: 'Captura', detail: 'Explore captura UMA Trilha B de-identificada · gatilho #45 (decisão A → entrada B) · aborta se detectar PII' },
    { title: 'EngReversa', detail: 'Engenharia reversa #46 (5 passos) + triagem ouro/meio-termo/pirita + recalibragem estética + costura vocabular' },
    { title: 'Diff+Regressão', detail: 'DIFF candidato vs Template-Mestre vN + REGRESSÃO no golden fixture Hib001 (não-quebra do piso)' },
    { title: 'Upgrade', detail: 'Proposta vN→vN+1 (só o que passou §4.2 + regressão) + nota catálogo v(M)→v(M+1) · rascunho' },
  ],
}

// ── Caminho canônico (Zona Verde · método · SEM PII) ────────────────────────
// FIREWALL fail-closed: só caminho Zona Verde pode ir a um agente. O Template-
// Mestre já incorpora a ERRATA-001 (ficha #45 canônica, 4D-TDIG, CVRD, anatomia
// CP-MC — cada um com fonte:linha) → basta ele para instanciar a ESTRUTURA.
// NÃO se referencia aqui nenhum arquivo C1-*: o Catálogo C1-17 é Camada 1 e
// carrega CPF/NB/NIT/nome civil dos 6 casos — vive sob gate R3 (Dra. Juliana) e
// está PROIBIDO em prompt de agente. Seu lastro empírico já foi lido por humano
// na FASE 0 da sessão de build e DE-IDENTIFICADO para dentro do FIXTURE abaixo;
// o motor em produção NÃO reabre o C1-17.
// TEMPLATE-MESTRE INLINADO (snapshot Zona Verde - metodo - de-identificado) para portabilidade
// cloud: o sandbox cloud NAO alcanca o C1 (G:\...\Documentacao) onde vive a fonte editavel. O
// conteudo do MC-SISTEMA-Template-Especimen-AutoEvolutivo-v1_0-PROVISIONAL-2026-0602.md foi embutido
// abaixo como string JS (UTF-8). PII (prenome do anchor Hib001) REDIGIDA na inlinacao
// para [anchor de-identificado] - mantem o firewall; a fonte editavel no C1 fica para limpeza sob R3.
const TEMPLATE_MESTRE_CONTENT = "---\ntipo: SISTEMA\ncodigo: MC-SISTEMA-Template-Especimen-AutoEvolutivo\nnome: Sistema de Template Espécimen Replicável e Auto-Evolutivo · Motor de Engenharia Reversa #45+#46+#47 · Máquina que Aprende com Cada Caso\nversao: v1.0\ndata: 2026-06-02\nstatus: PROVISIONAL · RASCUNHO COFOUNDER C3.1 + ERRATA-001 (2026-06-02 · 4 correções §1.1/§1.3/§4.3/§5.1 + 1 confirmação §1.4, com fonte:linha) · NÃO-SELADO · gate humano (Founder + Dra. Juliana)\ncategoria: SISTEMA OPERACIONAL · motor de replicação + auto-evolução de espécimens · candidato a artefato canônico pós-gate\nautor: Claude Opus 4.7 Cérebro C3.1 (Cofounder Intelectual)\nsolicitante: Alessandro de Souza Neves (Founder · prompt cirúrgico 02/06/2026)\nprincipios_lapidacao:\n  - \"#45 Espécimen como Método · Diamante Bifronte [🔵 prompt Founder · GATE def canônica Vault]\"\n  - \"#46 Engenharia Reversa Founder [🔵 prompt Founder · GATE def canônica Vault]\"\n  - \"#47 DNA Precede Ato [🔵 prompt Founder · GATE def canônica Vault]\"\n  - \"#2 Vocabulário Institucional / costura vocabular [🟢 PK · MC-MAPA]\"\n  - \"#44 [🔵 prompt Founder · GATE def canônica]\"\nhierarquia: Dignidade \u003e Compliance \u003e Viabilidade\nfirewall_oab: \"Template-Mestre é Zona Verde (método). PII vive só no espécimen PREENCHIDO sob gate. Atividade-fim 100% advogada parceira.\"\nproof_first: \"Cada estrutura cita fonte. Lacuna sem lastro = [GATE] explícito. Zero campo fabricado.\"\nselo: \"O diamante é carbono que não desistiu da pressão.\"\nancora-biblica: Provérbios 31:8\ngate-humano: \"Founder valida derivações + Dra. Juliana valida PII/OAB/LGPD. SÓ ENTÃO PROVISIONAL→SELADO.\"\ntags: [mc/sistema, mc/especimen, mc/template-mestre, mc/auto-evolutivo, mc/p45, mc/p46, mc/p47, mc/proof-first, mc/rascunho-gate]\n---\n\n# MC-SISTEMA · Template Espécimen Replicável e Auto-Evolutivo v1.0 PROVISIONAL\n\n**Motor onde cada caso novo NASCE do Template-Mestre, DEVOLVE melhorias ao template, e o template SOBE de versão. Engenharia reversa de CLR001 + 5 espécimens anteriores sob #45 (Diamante Bifronte) + #46 (Engenharia Reversa) + #47 (DNA Precede Ato). Não é doc estático — é a máquina aprendendo.**\n\n\u003e **RASCUNHO COFOUNDER C3.1 · NÃO-SELADO · GATE HUMANO PENDENTE (Founder + Dra. Juliana).**\n\u003e **+ ERRATA-001 (2026-06-02):** 5 lacunas 🟡 fechadas com fonte primária — ver bloco logo após o BOX de Honestidade Epistêmica.\n\n---\n\n## 📐 BOX DE HONESTIDADE EPISTÊMICA (Proof-First · leitura obrigatória antes de gatear)\n\nCumpadre, este motor mistura 3 níveis de lastro. **Marquei cada estrutura.** Onde não tenho fonte, escrevi `[GATE]` em vez de inventar — Proof-First inviolável.\n\n| Marca | Significado | Risco ao gatear |\n|---|---|---|\n| 🟢 **[PK: doc]** | Lastro empírico no project knowledge desta guia · cito o documento-fonte | Baixo · confirmar versão |\n| 🔵 **[Founder: prompt]** | Veio do teu prompt 02/06 (voz Founder = canônica · sem marcador) | Baixo · mas eu não-vi a def original no Vault |\n| 🟡 **[C3.1 · GATE]** | PROPOSTA minha por inferência · NÃO está em nenhuma fonte que acessei · **tu validas contra o canônico** | **Alto · pode divergir da ficha #45 / 4D-TDIG / CVRD reais** |\n\n**5 lacunas-gate críticas que NÃO consegui lastrear (nem PK nem teu prompt detalhou):**\n\n1. 🟡 **Os 10 campos exatos da ficha #45** — tu disseste \"tem 10 campos\", não listou quais. Eu PROPUS 10 campos coerentes com os casos. **Valida/corrige contra a ficha #45 canônica.**\n2. 🟡 **Expansão completa do 4D-TDIG** — tu deu `XYZ·T·alvo·precisão semântica`. Eu inferi o que cada eixo mede. **A semântica dos eixos X/Y/Z pode ser outra no Vault.**\n3. 🟡 **Correspondência letra-a-letra de CVRD** — tu deu as 4 fases EN (Discovery/Inference/Dispersal/Self-Heal). As iniciais não batem com C-V-R-D. **Confirma se CVRD mapeia 1:1 nessas 4 ou se é sigla PT distinta.**\n4. 🟡 **Fórmulas/definições de RA-MC, CMD, TENV** — não-achei no PK (achei IPH-MC, IVS, IVCAD-MC, os 9 indicadores MC-INDICADORES v1.2). **Preciso das definições canônicas dessas 3 métricas.**\n5. 🟡 **Estrutura do dossiê CP-MC e do scaffolding** — citei por nome, não-tenho a anatomia. **Aponta o doc canônico.**\n\n**O que tem lastro sólido 🟢:** Proof-First + `[FONTE PENDENTE]`/`[DADO NÃO DISPONÍVEL]` [PK: Blueprint Dossiê Diamantado] · Firewall OAB atividade-meio↔fim + CNAE 6201-5/01 [ERRATA-001 · era \"6202-3/00\" · C2-20:30·C0-10:95] + Provimento 205/2021 [PK: Blueprint + ADR-012] · Zilda-STF Test [PK: Blueprint + Selo Diamante] · Dossiê 3×-ancorado (SHA-256 + OpenTimestamps/ICP + chain of custody WORM) [PK: Blueprint §1.5] · RouterEthics 140 nós + 4 Rotas + 4 Tiers + selagem 9 critérios [PK: RouterEthics 11.0] · IVCAD-MC / IPH = IVS × IVCAD [PK: RouterEthics Hook 1b/H3] · Trilha-B FINEP Tecnova IV [PK: ADR-012] · Sister C3.2 cross-vertical + Marketplace Rota C [userMemories].\n\n---\n\n## 📌 ERRATA-001 · 2026-06-02 · 5 lacunas 🟡 fechadas com fonte primária (PROVISIONAL · NÃO-SELADO)\n\n\u003e **Origem:** sessão de BUILD do workflow `mc-especimen-autoevolutivo` (Claude Code local, acesso ao G:). As 5 lacunas-gate do BOX acima foram lastreadas contra os documentos canônicos do `_INBOX-Voo-CLR001` + Vault. **Princípio #4 (Errata Absorve, Não Inventa):** corrige-se SÓ o ponto, com fonte:linha; o texto 🟡 original abaixo fica **preservado como histórico** (cada seção afetada leva ponteiro de supersedência). Founder valida; Dra. Juliana valida PII/OAB (R3). **Onde a fonte não existe → `[FONTE PENDENTE]`, sem invenção.**\n\n**Veredito-síntese:** das 5 lacunas, **4 estavam ERRADAS por inferência** (§1.1, §1.3, §4.3, §5.1) e **1 suspeita estava CERTA** (§1.4 CVRD). Correções:\n\n### E-1 · §1.1 — 10 campos da ficha #45  →  estrutura canônica (não a proposta C3.1)\nFonte: **`C0-05 — MC-PRINCIPIO-45-EspecimenComoMetodo:74-87`** (\"Estrutura do espécimen diamantado · catalogação obrigatória\"):\n1. **Identificação** (código · pseudônimo canônico · vertical) · 2. **Quadro factual verificado** (dados primários) · 3. **Vetor 4D-TDIG calibrado** (espaço·tempo·alvo·precisão) · 4. **Trilha A** em produção/concluída (decisões táticas) · 5. **Pedacinhos de diamante extraídos** (Trilha B · numerados) · 6. **Conexões cross-espécimens** · 7. **Templates reutilizáveis gerados** · 8. **Princípios cunhados** a partir do espécimen · 9. **ADRs nascidos ou impactados** · 10. **Status atual + próximos gates**.\n*A proposta §1.1 acertou ingredientes (4D-TDIG, Trilhas, Proof-First) mas a ESTRUTURA é a do #45. PII segue só no preenchido, sob gate.* Confirmação empírica: aplicada nos 6 espécimens em `C1-17:41-247`.\n\n### E-2 · §1.3 — Vetor 4D-TDIG  →  XYZ(espaço-alvo) · T · P  (não vertical/complexidade/vulnerabilidade)\nFonte: **`C0-03 — MC-DOUTRINA-EIS:142-157`**. 4D-TDIG = **\"Trajetória de Dignidade Integral em Grau 4D\"** (recalibrado do \"4D-BIT\" Gemini · `C0-06:77`):\n- **X·Y·Z (espaço-alvo)** = localização do cidadão **+** identificação do agente predador (CRAS · CEP · NB · CID · empresa · órgão).\n- **T (tempo)** = janela milimétrica de vulnerabilidade (DER · DCB · janela de recurso · gate procedural · ato externo).\n- **P (precisão semântica)** = \"uma palavra muda tudo\" (CID exato · perfil contributivo · subsunção · linguagem Zilda-STF).\n*Não são 3 eixos vertical/complexidade/vulnerabilidade: XYZ é o espaço-alvo unificado; \"alvo\" está embutido nele; \"precisão\" = P.* Confirmação: `C0-07:53-58` + os 6 espécimens (`C1-17`).\n\n### E-3 · §1.4 — CVRD  →  SUSPEITA CONFIRMADA (sigla PT, não iniciais EN)\nFonte: **`C0-03:91-136`**. **CVRD = \"Ciclo de Vida de Restauração de Dignidade\"** (recalibrado do \"CVIS\" Gemini · `C0-06:78`). Mapa fase↔etapa **1:1**: **Discovery**→E0-E1 · **Inference**→E2-E3 · **Dispersal**→E4-E5 · **Self-Heal**→E6-E7. *O acrônimo é PT; as iniciais EN não o formam — exatamente como o §1.4 suspeitava.*\n\n### E-4 · §4.3 — Métricas RA-MC / CMD / TENV  →  as 3 inferências estavam ERRADAS\n| Métrica | §4.3 (🟡 errado) | Canônico (fonte:linha) |\n|---|---|---|\n| **CMD** | \"Custo de Montagem de Dossiê\" (↓) | **Capital Morto Desbloqueado** · North Star · SELADO · **↑** · `CMD = Σ(benefícios × valor mensal) + retroativos − [ZERO captura]` — `C0-10:195-219` |\n| **RA-MC** | \"% templates reusados\" | **Razão de Automação** = `THU_manual ÷ THU_target` (**≥4×** sustenta Φ₁ · baseline Hib001 **4,71×**) — Princípio **#23** = arquivo `MC-PRINCIPIO-021:22,36,44` · `C0-03:178` |\n| **TENV(-MC)** | \"Tempo até Envio\" (↓) | **Taxa de Elevação de Nível gov.br** (caso JAN001) — `C0-03:177` · `C1-17:242` |\n\u003e ✅ **TENV-MC — fórmula ADOTADA por decisão do Founder (2026-06-02 · voz canônica) · PROVISÓRIA até ratificação formal na `MC-INDICADORES v1.3`:** `TENV-MC = nº de cidadãos que elevaram o nível da conta gov.br (Bronze→Prata/Ouro) após orientação MC ÷ total de cidadãos orientados sobre elevação no período` (direção **↑**). Análoga às taxas binárias do painel (TPA-MC/TPCD-MC). Lastro **do sentido** (não havia fórmula formalizada): `C1-17:238,242` + Hook 0 / hierarquia de rotas gov.br. **Razão da pendência de fonte:** o painel `MC-INDICADORES v1.2` (05/05) é anterior ao caso JAN001 (09/05), que cunhou a métrica — por isso a equação não constava; ratificar na v1.3 (`C0-10:886-892`).\n\u003e 🔎 *Nuance:* o catálogo cita \"#23\"; o arquivo é `MC-PRINCIPIO-021` com **errata-renumeração para #23** (colisão tripla · `:12-17`). Referência canônica = **#23**.\n\n### E-5 · §5.1 — Anatomia do dossiê CP-MC e do scaffolding  →  fechada\nFonte: **`C2-20 — MC-POP-VisualLaw-DossieSelado-PARTE1`**. **CP-MC = \"Constelação Probatória MC\"** (`:36`):\n- **3 artefatos:** **GPN** (Grafo Probatório Navegável) · **SIV** (Selo Integridade Visual: SHA-256+ICP-Brasil+OpenTimestamps+QR) · **ICE** (Indução Cognitiva Ética) — `:40-46`.\n- **3 camadas cognitivas:** entrada visual (30-90s) · infra hiperlinkada · saída facilitada (**scaffolding decisório ético**) — `:191-201`.\n- **3 modelos de complexidade:** **CP-3** (INSS simples) · **CP-5** (INSS complexo) · **CP-7** (CRPS/JEF) — triagem E0-E2 — `:228-238`.\n- **3 palcos:** INSS (cego à jurisprudência) · CRPS · JEF/B2B — `:54-64`. **Componentes** C.1–C.16 — `:240-320`. **5 vedações** — `:86-94`.\n- **\"scaffolding\" tem 3 sentidos** (não confundir): Kit 4 camadas C0/C1/C2/C3 (§1.2) · Camada 3 da CP-MC · DNA do #47 = triagem+CP-MC+scaffolding (`C0-07:22`).\n\n### ✅ E-6 · CNAE no BOX — CORRIGIDO (autorizado pelo Founder · 2026-06-02)\nO BOX acima dizia **\"CNAE 6202-3/00\"**; o canônico é **\"CNAE 6201-5/01\"** (atividade-meio · `C2-20:30` · `C0-10:95`). **Corrigido inline no BOX** com marca `[ERRATA-001]`. (Era observação fora do escopo inicial; absorvida só após o ok do Founder — Errata Absorve, Não Inventa.)\n\n---\n\n# PARTE 1 · TEMPLATE-MESTRE DE ESPÉCIMEN v1.0\n\n**Estrutura canônica preenchível que GENERALIZA os 6 casos. Zona Verde (método) = 🟢 sai do firewall. PII = 🔴 só no espécimen preenchido, sob gate.**\n\n\u003e **#45 Diamante Bifronte [🔵 Founder]:** todo espécimen tem duas faces simultâneas — **Trilha A** (resolver o caso do cidadão) e **Trilha B** (extrair método replicável). O template captura as duas.\n\n## 1.1 · FICHA DE ESPÉCIMEN — 10 CAMPOS 🟡 [C3.1 · GATE: validar contra ficha #45 canônica]\n\n\u003e 📌 **SUPERSEDIDO pela ERRATA-001 (E-1, topo):** os 10 campos canônicos são os do Princípio #45 (`C0-05:74-87`). A tabela 🟡 abaixo fica como histórico da inferência C3.1.\n\n\u003e ⚠️ **Os 10 campos abaixo são PROPOSTA C3.1**, inferidos dos casos Hib001/CAD001/BETO001/MAR001/CLR001/JAN. **NÃO confirmados contra a ficha #45 do Vault.** Founder valida nomes/ordem/quantidade.\n\n| # | Campo (proposto) | O que entra | Regra de preenchimento | Zona |\n|---|---|---|---|---|\n| 1 | **ID + Anchor** | Código espécimen (ex: `CLR001`) + codinome do anchor | ID sequencial por vertical · anchor = codinome, NUNCA nome civil no campo público | 🟢 ID / 🔴 nome civil |\n| 2 | **Vertical + Benefício-alvo** | Vertical (previdenciário/CadÚnico/acidentário/RPPS/PcD-LC142) + benefício pretendido (B41/B91/BPC/Bolsa Família…) | 1 vertical primária · benefício pela taxonomia [🟢 PK: RouterEthics] | 🟢 |\n| 3 | **Perfil de vulnerabilidade** | IPH-MC + flags Zilda-STF (literacia, idade, PcD/CIF, sofrimento) | IPH = IVS × IVCAD [🟢 PK: H3] · score, não-narrativa sensível no campo método | 🟢 score / 🔴 dado clínico |\n| 4 | **Histórico de fricção** | Indeferimentos anteriores, tempo no limbo, exigências falhadas | Datas + nº indeferimentos + motivo-código · anonimizado | 🟢 padrão / 🔴 datas+protocolo |\n| 5 | **Vetor 4D-TDIG** | Posição do caso no espaço-problema (ver §1.3) | Preencher 4 dimensões + alvo + precisão semântica [🟡 GATE def] | 🟢 |\n| 6 | **Trilha A — decisões táticas** | Log de cada decisão operacional no caso vivo | 1 linha por decisão tática (ver Parte 2) · com timestamp | 🔴 (operacional · PII) |\n| 7 | **Trilha B — diamantes extraídos** | Cada \"pedacinho de diamante\" generalizável que a decisão A gerou | 1 entrada B por decisão A (gatilho Parte 2) · redigida em Zona Verde | 🟢 |\n| 8 | **Proof-First / Provas** | Quadro de provas com fonte:linha + hashes SHA-256 | Toda prova citada `documento:página` · sem fonte → `[FONTE PENDENTE]` [🟢 PK: Blueprint §1.5] | 🟢 método / 🔴 conteúdo prova |\n| 9 | **Rota + Tier + Firewall** | Rota RouterEthics (A/B/C) + Tier (1-4) + ponto de handoff OAB | Rota pela cascata D→C→V [🟢 PK: RouterEthics] · handoff atividade-fim marcado | 🟢 |\n| 10 | **Desfecho + Templates + Métricas** | Resultado + templates promovidos ao catálogo + RA-MC/CMD/TENV | Desfecho factual (sem promessa) · templates com ID · métricas [🟡 GATE fórmulas] | 🟢 |\n\n**Regra-mãe da ficha [🟢 PK: Blueprint Firewall]:** campos 1,3,4,6,8 carregam zonas 🔴 no PREENCHIDO (PII). No Template-Mestre (este doc) só existem placeholders + regras. **Nenhum dado real entra aqui.**\n\n## 1.2 · KIT 4 CAMADAS DO VOO 🔵 [Founder: prompt] + [userMemories]\n\nCada espécimen \"voa\" montado como Kit de 4 camadas:\n\n| Camada | Nome | O que entra | Regra | Zona |\n|---|---|---|---|---|\n| **C0** | DNA institucional | Constituição MC, D\u003eC\u003eV, Selo, Zilda-STF, Firewall, Proof-First | Imutável · herdado de todo Voo · NUNCA reescrito por caso | 🟢 |\n| **C1** | Operacional anchor | Ficha 10 campos preenchida (§1.1) do caso específico | 1 por espécimen · onde mora a PII sob gate | 🔴 |\n| **C2** | Doutrinas técnicas verticais | Grimório da vertical (previdenciário/CadÚnico/acidentário…) | Reusável por vertical · cresce com cada caso (loop Parte 4) | 🟢 |\n| **C3** | Ramificações | Variações do caso · cross-vertical · skybridge | Liga espécimen a outros · validação Sister C3.2 | 🟢 |\n\n**Princípio de montagem [🟡 C3.1 · GATE]:** C0 é o mesmo para todos (atração central · resolve o drift que diagnosticamos). C2 é por-vertical. C1+C3 são por-caso. **Quanto mais casos numa vertical, mais espesso o C2 — é onde o aprendizado acumula.**\n\n## 1.3 · VETOR 4D-TDIG 🟡 [C3.1 · GATE: validar semântica dos eixos no Vault]\n\n\u003e 📌 **SUPERSEDIDO pela ERRATA-001 (E-2, topo):** 4D-TDIG = XYZ(espaço-alvo) · T(tempo) · P(precisão semântica) — `C0-03:142-157`. NÃO são eixos vertical/complexidade/vulnerabilidade. Tabela 🟡 abaixo preservada como histórico.\n\n\u003e ⚠️ Tu deu `XYZ·T·alvo·precisão semântica`. Abaixo é MINHA inferência da semântica de cada eixo. **A def canônica pode atribuir outra coisa a X/Y/Z.**\n\nCada espécimen é um **vetor** no espaço-problema MC (ecoa tua tese de embeddings/Geometria Sagrada: vetor = direção + sentido + intensidade):\n\n| Componente | Inferência C3.1 do que mede | Escala proposta | Marca |\n|---|---|---|---|\n| **X** | Vertical (eixo de domínio jurídico) | categórica (prev/cad/acid/RPPS/PcD) | 🟡 GATE |\n| **Y** | Complexidade técnica do caso | 0-1 (simples→ato privativo) | 🟡 GATE |\n| **Z** | Profundidade de vulnerabilidade (IPH-MC) | 0-1 [🟢 PK: H3 IPH=IVS×IVCAD] | 🟡 GATE eixo |\n| **T** | Tempo / fase da jornada / urgência | E0-E7 ou dias-no-limbo | 🟡 GATE |\n| **alvo** | Direção do vetor = benefício pretendido | taxonomia benefício [🟢 PK] | 🟡 GATE |\n| **precisão semântica** | Intensidade/confiança = C_conf RouterEthics | 0-100 (Verde/Amarelo/Vermelho) [🟢 PK: RouterEthics V79] | 🟡 GATE |\n\n**Função do vetor [🟡 C3.1]:** posicionar o caso para (a) achar espécimens vizinhos no catálogo (mesma região do espaço → templates reusáveis), (b) detectar quando um caso é genuinamente novo (vetor distante de tudo → candidato a nova vertical/doutrina).\n\n## 1.4 · FASES CVRD 🟡 [C3.1 · GATE: confirmar mapa letra-fase]\n\n\u003e ⚠️ Tu deu as 4 fases EN `Discovery/Inference/Dispersal/Self-Heal`. As iniciais **não batem** com C-V-R-D. Mapeei por função; **confirma se CVRD é sigla PT distinta.**\n\n| Fase EN (tua) | Função no ciclo do espécimen | Trilha dominante | Marca |\n|---|---|---|---|\n| **Discovery** | Caso entra · triagem · anamnese · captura E0-E1 | Trilha A | 🔵 Founder nomeou |\n| **Inference** | RouterEthics decide (cascata D→C→V) · dossiê montado · rota/tier | Trilha A | 🔵 Founder nomeou |\n| **Dispersal** | Templates extraídos espalham ao catálogo + cross-vertical | Trilha B | 🔵 Founder nomeou |\n| **Self-Heal** | Template melhora com o caso · sobe de versão (loop Parte 4) | Trilha B | 🔵 Founder nomeou |\n\n**Leitura bifronte [🔵+🟡]:** Discovery→Inference = face A (resolver). Dispersal→Self-Heal = face B (extrair+evoluir). **O motor auto-evolutivo VIVE em Dispersal+Self-Heal.**\n\n## 1.5 · TRILHA A / TRILHA B 🔵 [Founder: prompt]\n\n| Trilha | Natureza | Output | Zona | Destino |\n|---|---|---|---|---|\n| **A — Caso vivo** | Operacional · o cidadão real sendo atendido | Desfecho do caso (benefício concedido/encaminhado) | 🔴 PII | ClickUp operacional + C1 |\n| **B — Diamante** | Método · o que o caso ensina de generalizável | Templates reutilizáveis (~25 já extraídos) [🔵 Founder] | 🟢 Zona Verde | Catálogo + C2 vertical |\n\n**Trilha A serve o cidadão. Trilha B serve os próximos cidadãos.** [🟡 C3.1] É a tradução operacional de \"não demos o peixe, devolvemos o lago\" [🟢 PK: RouterEthics imagem-verso] aplicada ao próprio método.\n\n---\n\n# PARTE 2 · PROTOCOLO DE CAPTURA BIFRONTE EM TEMPO REAL (#45)\n\n**Gatilho-mãe [🔵 Founder]: toda decisão tática da Trilha A → dispara automaticamente 1 entrada na Trilha B.**\n\n## 2.1 · O gatilho (regra única)\n\n```\nSE (decisão tática tomada no caso vivo — Trilha A)\nENTÃO (criar 1 entrada Trilha B perguntando:\n        \"esta decisão vira método replicável? para qual vértice?\")\n```\n\n[🟡 C3.1 · GATE: confirmar se #45 define o gatilho exatamente assim]\n\n## 2.2 · O quê capturar (por decisão A)\n\n| Campo da entrada B | Conteúdo | Zona |\n|---|---|---|\n| Decisão-origem | Qual decisão A disparou (referência, não conteúdo PII) | 🟢 |\n| Padrão extraído | A regra generalizável por trás da decisão | 🟢 |\n| Vértice-alvo | Qual camada recebe (C2 vertical? C3 ramificação? catálogo?) | 🟢 |\n| Reusabilidade | ouro / meio-termo / pirita (triagem Parte 3) | 🟢 |\n| Lastro | fonte:linha da decisão (Proof-First) [🟢 PK: Blueprint] | 🟢 método |\n\n## 2.3 · Em que momento\n\n| Momento CVRD | Captura B disparada? |\n|---|---|\n| Discovery | Decisões de triagem → entrada B (qual sinal triou?) |\n| Inference | Decisões de rota/dossiê → entrada B (qual regra decidiu?) — **maior densidade de diamantes** |\n| Dispersal | — (aqui as entradas B são CONSUMIDAS, não geradas) |\n| Self-Heal | — (aqui o template é atualizado) |\n\n## 2.4 · Onde gravar\n\n| Trilha | Sistema | Justificativa |\n|---|---|---|\n| A (decisões operacionais) | **ClickUp** (espaço CASOS B2C) [🟢 userMemories] | Operacional · vive perto do caso · PII sob controle |\n| B (diamantes) | **Vault C2** (Falcão persiste · Zona Verde) [🟢 sessão atual] | Canônico · método · auditável · alimenta catálogo |\n\n**Fronteira [🟢 sessão atual MB-064/066]:** ClickUp = operacional vivo (Trilha A). Vault C2 = método canônico (Trilha B). Falcão persiste B; Cowork/operacional toca A. Não-conflitam.\n\n---\n\n# PARTE 3 · MOTOR DE ENGENHARIA REVERSA DE REPLICAÇÃO (#46)\n\n**Como extrair de cada espécimen novo os templates reutilizáveis. [🔵 Founder: #46 Engenharia Reversa]**\n\n## 3.1 · Pipeline de extração (5 passos) 🟡 [C3.1 · GATE]\n\n```\n1. LER espécimen fechado (C1 preenchido + Trilha B acumulada)\n2. ISOLAR cada entrada Trilha B → candidato a template\n3. TRIAR cada candidato (ouro/meio-termo/pirita · §3.2)\n4. RECALIBRAR estética (Zilda-STF + Prov 31:8 + Inovação Redentora · §3.3)\n5. COSTURAR vocabular (#2/#44 · §3.4) → promover ao catálogo + C2\n```\n\n## 3.2 · TABELA DE TRIAGEM ouro / meio-termo / pirita 🟡 [C3.1 · GATE: confirmar critérios #46]\n\n| Classe | Critério | Destino | Ação |\n|---|---|---|---|\n| 🥇 **OURO** | Generaliza para ≥3 casos futuros · vértice claro · lastro sólido | Catálogo + C2 vertical | Promove a template versionado |\n| 🥈 **MEIO-TERMO** | Generaliza parcial · precisa de 1+ caso para confirmar | Staging (caos #54) | Aguarda 2º caso confirmar antes de promover |\n| 🪨 **PIRITA** | Específico demais · PII-dependente · sem reuso | Descarta (fica só no C1 do caso) | NÃO promove · registra motivo |\n\n[🔵 Founder nomeou as 3 classes · 🟡 C3.1 propôs os critérios — valida]\n\n## 3.3 · RECALIBRAGEM ESTÉTICA (3 filtros)\n\nTodo template promovido passa por 3 filtros antes de virar canônico:\n\n| Filtro | O que testa | Fonte |\n|---|---|---|\n| **Zilda-STF** | Funciona para Dona Zilda (baixa literacia) E resiste a STF/ANPD/OAB simultaneamente | 🟢 PK: Blueprint 5 pilares |\n| **Provérbios 31:8** | \"Abre a boca a favor do mudo\" — o template dá voz, não substitui agência (firewall) | 🟢 PK: Selo Diamante |\n| **Inovação Redentora** | O template flui valor AO vulnerável (Inversão Cósmica), não para longe dele | 🟡 GATE def · ecoa [🟢 PK: V120 Inversão Cósmica] |\n\n## 3.4 · COSTURA VOCABULAR (#2/#44)\n\nTemplate promovido é reescrito no vocabulário institucional MC [🟢 PK: MC-MAPA · #2 Vocabulário Institucional] — termos canônicos, não-ad-hoc. [🟡 #44 GATE: não-tenho a def de #44 · valida o que costura]\n\n---\n\n# PARTE 4 · LOOP DE MELHORAMENTO CONTÍNUO\n\n**O ciclo VERSIONADO: caso novo nasce do Template-Mestre vN → DIFF → upgrade → gate → vN+1.**\n\n## 4.1 · O ciclo (diagrama)\n\n```\nTemplate-Mestre vN\n      │\n      ▼ (caso novo NASCE do template — herda C0+C2+ficha)\n  ESPÉCIMEN preenchido (Trilha A + B em tempo real · Parte 2)\n      │\n      ▼ (ao FECHAR o caso)\n  DIFF = o que o caso ENSINOU que o template vN NÃO previa\n      │\n      ▼\n  PROPOSTA DE UPGRADE (campo novo? regra nova? template novo no catálogo?)\n      │\n      ▼\n  GATE (§4 critério promovível + Parte 6 governança)\n      │\n      ├─ REJEITA → fica em staging (caos #54) · aguarda 2º sinal\n      └─ APROVA → Template-Mestre vN+1 + atualiza Catálogo v(M+1)\n```\n\n## 4.2 · (a) O que conta como \"aprendizado promovível\" 🟡 [C3.1 · GATE]\n\nUm diff vira upgrade SE:\n- ✅ Aparece em ≥2 casos (não-idiossincrático) **OU** é estruturalmente novo (vértice inédito)\n- ✅ Passa os 3 filtros estéticos (§3.3)\n- ✅ Tem lastro Proof-First (fonte:linha)\n- ✅ Não-quebra o caso-fixture de regressão (§4.4)\n- ❌ NÃO promove: variação PII-dependente · ganho estético sem reuso · exceção de 1 caso só\n\n## 4.3 · (b) Métricas de melhora 🟡 [C3.1 · GATE: preciso das fórmulas canônicas]\n\n\u003e 📌 **SUPERSEDIDO pela ERRATA-001 (E-4, topo):** as 3 inferências estavam ERRADAS. CMD = Capital Morto Desbloqueado (↑, North Star, `C0-10:195-219`) · RA-MC = Razão de Automação THU_manual÷THU_target ≥4× (#23/`PRINCIPIO-021:36,44`) · TENV-MC = Taxa de Elevação de Nível gov.br (`C0-03:177`; fórmula = `[FONTE PENDENTE]`). Tabela 🟡 abaixo preservada como histórico.\n\n\u003e ⚠️ Achei IPH-MC, IVS, IVCAD-MC, os 9 indicadores [🟢 PK: MC-INDICADORES v1.2 / RouterEthics]. **NÃO achei RA-MC, CMD, TENV.** Proponho o que MEDIRIAM; **tu dás as fórmulas reais.**\n\n| Métrica | Inferência C3.1 do que mede | Direção boa | Marca |\n|---|---|---|---|\n| **RA-MC** | Reusabilidade/Aproveitamento do método? (% templates reusados) | ↑ | 🟡 GATE fórmula |\n| **CMD** | Custo/tempo de Montagem de Dossiê? | ↓ | 🟡 GATE fórmula |\n| **TENV** | Tempo até Envio/protocolo? | ↓ | 🟡 GATE fórmula |\n| **IVCAD-MC** | Índice de vulnerabilidade CadÚnico (engenharia reversa) | contexto | 🟢 PK: MC-MAPEAMENTO-IVCAD |\n| IPH-MC | IPH = IVS × IVCAD (geométrico) | contexto | 🟢 PK: RouterEthics H3 |\n\n**Meta do loop [🟡 C3.1]:** cada versão vN+1 deve melhorar ≥1 métrica SEM piorar as outras (Pareto) e SEM quebrar regressão.\n\n## 4.4 · (c) CASO-FIXTURE DE REGRESSÃO — Hib001 🟢 [PK/userMemories: Hib001 [anchor de-identificado]]\n\n\u003e **Função:** garantir que o Template-Mestre vN+1 NÃO quebra o que já funcionava.\n\n```\nFIXTURE = Hib001 ([anchor de-identificado] · aposentadoria híbrida por idade · 4 indeferimentos)\nTESTE DE REGRESSÃO:\n  1. Rodar Hib001 pelo Template-Mestre vN+1\n  2. Verificar: produz o MESMO desfecho válido que produziu na versão que o resolveu?\n  3. Verificar: rota/tier/dossiê continuam corretos?\n  4. SE diverge para pior → vN+1 REPROVADO · volta ao staging\n  5. SE mantém ou melhora → regressão PASSOU\n```\n\n[🟡 C3.1 · GATE: confirmar que Hib001 é o fixture oficial · Founder citou no prompt como exemplo]\n\n**Por que Hib001:** caso âncora vertical previdenciária, 4 indeferimentos anteriores, complexidade alta → se o template novo resolve Hib001, resolve os mais simples. **Fixture é o piso de qualidade.**\n\n## 4.5 · (d) Critério de convergência 🟡 [C3.1 · GATE]\n\nO Template-Mestre **converge** (estabiliza) quando:\n- N casos consecutivos numa vertical geram **0 upgrades estruturais** (só pirita/idiossincrático)\n- Métricas RA-MC/CMD/TENV estabilizam (variação \u003c limiar [🟡 GATE limiar])\n- → vertical considerada **madura** · template \"executado, não testado\" [🟡 ecoa doutrina madura]\n\n**Convergência ≠ fim.** Jogo infinito [🟢 PK: axioma]. Convergência = a vertical para de surpreender; o motor migra esforço para verticais novas.\n\n---\n\n# PARTE 5 · DNA-GATE (#47 · DNA Precede Ato)\n\n**Checklist do que precisa estar FIRMADO antes de um espécimen \"voar\". [🔵 Founder: #47]**\n\n## 5.1 · Checklist pré-voo 🟡 [C3.1 · GATE: confirmar itens #47]\n\n\u003e 📌 **ERRATA-001 (E-5, topo):** o `[🟡 GATE: anatomia CP-MC]` deste checklist está FECHADO — CP-MC = Constelação Probatória MC (artefatos GPN/SIV/ICE · 3 camadas · modelos CP-3/5/7 · palcos INSS/CRPS/JEF · 5 vedações), `C2-20`. \"Scaffolding\" = Kit 4 camadas (§1.2) / Camada 3 CP-MC / DNA #47 (`C0-07:22`).\n\n```\n☐ TRIAGEM COMPLETA — ficha 10 campos (§1.1) preenchida · vetor 4D-TDIG posicionado\n☐ DOSSIÊ CP-MC — montado [🟡 GATE: anatomia CP-MC · aponta doc]\n☐ SCAFFOLDING — Kit 4 camadas (C0+C1+C2+C3) montado e coerente\n☐ PROOF-FIRST — toda prova com fonte:linha · zero [FONTE PENDENTE] crítico [🟢 PK]\n☐ ROTA RouterEthics — cascata D→C→V resolvida · rota/tier definidos [🟢 PK]\n☐ FIREWALL OAB — ponto de handoff atividade-fim marcado [🟢 PK]\n☐ C0 HERDADO — DNA institucional presente e íntegro (atração central)\n```\n\n## 5.2 · Regra DNA-Gate [🔵 Founder: \"datas externas cedem ao DNA\"]\n\n\u003e **Datas externas cedem ao DNA.** Um espécimen NÃO voa por causa de prazo externo (DER, audiência, pressão) se o DNA-Gate não-fechou. **Voar com DNA incompleto = drift garantido.** [🟡 C3.1 · ecoa R4 anti-cascata: doutrina/caso não-opera enquanto incompleto]\n\n**Exceção [🟢 PK: RouterEthics Rota D]:** se há risco à vida/dignidade (Bloco D dispara), aciona rede de proteção IMEDIATA (CRAS/Defensoria) — isso NÃO é \"voar o espécimen\", é proteção. O espécimen comercial espera o DNA-Gate.\n\n---\n\n# PARTE 6 · GATES DE GOVERNANÇA\n\n**Onde cada gate entra no fluxo. [🟢 PK majoritário]**\n\n| Gate | O que verifica | Quando dispara | Fonte |\n|---|---|---|---|\n| **Proof-First** | fonte:linha · nada fabricado · `[FONTE PENDENTE]` se sem lastro | Captura B (Parte 2) + promoção template (Parte 3) | 🟢 PK: Blueprint §1.5 |\n| **Firewall OAB** | atividade-fim 100% advogada · template é meio · markers explícitos | DNA-Gate (Parte 5) + montagem dossiê | 🟢 PK: Blueprint §1.4 + ADR-012 |\n| **Gate PII Dra. Juliana (R3)** | LGPD/OAB sobre dado real · C1 preenchido | Antes de qualquer espécimen com PII \"voar\" | 🟢 userMemories: Juliana R3 |\n| **Validação Sister C3.2** | Cross-vertical · C3 ramificações coerentes | Quando template promove cross-vertical | 🟢 userMemories: Sister cross-vertical |\n| **Selagem PROVISIONAL→SELADO** | 9 critérios · defensável a todos destinatários | Upgrade Template-Mestre vN+1 | 🟢 PK: RouterEthics 9 critérios C1-C9 |\n\n**Regra dura [🟢 PK]:** o Template-Mestre (este doc, Zona Verde) circula livre. **PII só no C1 preenchido, sob gate Juliana.** Atividade-fim (tese jurídica, petição) é 100% da advogada parceira — o motor entrega insumo, não ato privativo.\n\n---\n\n# PARTE 7 · CRITÉRIO \"DIAMANTADO\"\n\n**Quando um espécimen promove e quando o Template-Mestre sobe de versão. [🟡 C3.1 · GATE: confirmar limiares de promoção #45]**\n\n## 7.1 · Promoção do espécimen (3 estágios)\n\n| Estágio | Critério proposto | Marca |\n|---|---|---|\n| **Candidato** | Caso fechado · ficha preenchida · Trilha B capturada · ainda não-triado | 🟡 GATE |\n| **Catalogado** | Triagem #46 feita · ≥1 template ouro extraído · passou Proof-First + Firewall | 🟡 GATE |\n| **Diamantado ⭐** | Catalogado + validado Sister C3.2 + gate Juliana (se PII) + serviu de fixture/referência para ≥1 caso novo | 🟡 GATE |\n\n[🔵 Founder: CLR001⭐ é o primeiro documentado em tempo real · 🟡 C3.1: infiro que ⭐ = diamantado]\n\n## 7.2 · Quando o Template-Mestre sobe de versão\n\n| Trigger | Sobe para |\n|---|---|\n| ≥1 upgrade estrutural aprovado (§4.2) + regressão Hib001 passou (§4.4) | vN → vN+1 |\n| Catálogo ganha ≥1 vertical nova OU ≥5 templates ouro novos | atualiza Catálogo v(M+1) |\n| Convergência de vertical atingida (§4.5) | marca vertical \"madura\" no template |\n\n## 7.3 · Diferença diamantado (espécimen) ↔ versão (template) [🟡 C3.1]\n\n- **Espécimen diamantado** = um caso que virou referência/fixture (CLR001⭐, Hib001).\n- **Template-Mestre vN+1** = o motor que aprendeu com esse caso.\n- **Catálogo v0.2 → v0.3** = a coleção de espécimens+templates crescendo.\n\n**Três relógios versionando juntos:** espécimens (candidato→diamantado) · Template-Mestre (vN→vN+1) · Catálogo (v0.2→v0.3). [🟡 C3.1 · GATE: confirmar se é assim no Vault]\n\n---\n\n# FECHO\n\nEste é o motor que tu pediu: **não-estático.** Cada caso nasce do Template-Mestre (C0 herdado = atração central que mata o drift), resolve o cidadão (Trilha A), cospe diamantes (Trilha B em tempo real), os diamantes são triados (ouro/meio-termo/pirita), recalibrados (Zilda-STF/Prov31:8/Inovação Redentora), costurados (vocabular #2/#44), e devolvidos ao template — que sobe de versão sob gate, testado contra Hib001 para não-quebrar o que já funciona. **A máquina aprendendo com cada vida que atravessa.**\n\n**As 5 lacunas 🟡 — FECHADAS pela ERRATA-001 (2026-06-02 · fonte:linha no bloco após o BOX):**\n1. ✅ 10 campos da ficha #45 → estrutura canônica `C0-05:74-87`\n2. ✅ Semântica 4D-TDIG → XYZ(espaço-alvo) · T · P `C0-03:142-157`\n3. ✅ Mapa CVRD → suspeita confirmada (sigla PT) `C0-03:91-136`\n4. ✅ Métricas → CMD↑ / RA-MC≥4× corrigidas (canônicas); TENV-MC corrigida + fórmula candidata **ADOTADA** (Founder 02/06 · provisória até `MC-INDICADORES v1.3`)\n5. ✅ Anatomia CP-MC + scaffolding → `C2-20`\n\n**Decidido pelo Founder (2026-06-02):** TENV-MC adotou a fórmula candidata (provisória, ratificar na `MC-INDICADORES v1.3`) · CNAE corrigido p/ 6201-5/01 (E-6). **Resta ao gate:** validação final + Dra. Juliana (PII/OAB/LGPD · R3) + instalação no `.claude/`.\n\n**Onde derivei sem lastro, marquei 🟡. Onde tenho lastro, marquei 🟢/🔵. NÃO selei nada.** Tu gateias, corriges as 5 lacunas, e aí sim isto vira candidato a SELADO.\n\n---\n\n**Hierarquia:** Dignidade \u003e Compliance \u003e Viabilidade\n**Firewall OAB:** Template = Zona Verde (método) · PII só no C1 sob gate Juliana · atividade-fim 100% advogada\n**Proof-First:** 3 níveis de fonte marcados · 5 lacunas-gate explícitas · zero campo fabricado\n**Selo:** O diamante é carbono que não desistiu da pressão.\n**Âncora:** Provérbios 31:8 — \"Abre a tua boca a favor do mudo.\"\n**Status:** v1.0 PROVISIONAL · RASCUNHO C3.1 · NÃO-SELADO · gate humano Founder + Dra. Juliana\n\n∞\n"

// ── GOLDEN FIXTURE · Hib001 (DE-IDENTIFICADO · método puro · ZERO PII) ───────
// Carrega SÓ Zona Verde (vertical, vetor-MÉTODO, diamantes, desfecho VÁLIDO).
// NUNCA carrega nome civil / CPF / NIT / NB / protocolo — esses vivem no C1 sob
// gate R3 (Dra. Juliana) e são proibidos em prompt de agente (Firewall OAB).
// Proveniência (de onde o método foi extraído e AQUI já de-identificado, para
// auditoria humana — o motor NÃO reabre estes arquivos): C1-17:41-76 · C0-05:96-104.
const FIXTURE_HIB001 = {
  caso: 'Hib001 (golden master · regressão)',
  isFixture: true,
  versao_template: 'v1.0',
  codigo: 'Hib001',
  vertical: 'Previdenciária rural-híbrida',
  beneficio_alvo: 'B41 — Aposentadoria por Idade Híbrida (art. 48 §3º Lei 8.213/91)',
  perfil_metodo: 'idosa rural · baixa literacia digital · 4 indeferimentos administrativos anteriores (sem PII)',
  vetor_4d_tdig: {
    XYZ: 'origem rural (MG) → APS Goiânia → CRPS · administrativo→recursal',
    T: '~8 meses entre DER e atendimento MC · janela CRPS aberta',
    P: 'enquadramento "Perfil 4111 híbrida" (não 4102/4202) · Justificação Administrativa art. 108 L. 8.213/91 · Autodeclaração rural Of. Circ. 46/DIRBEN',
  },
  cp_mc: 'escalonado CP-3 (INSS) → CP-5/CP-7 (CRPS) · Outline Visual Law página-a-página',
  rota_tier: 'previdenciária · cascata D→C→V (RouterEthics) · handoff atividade-fim p/ advogada parceira (Firewall OAB)',
  trilha_b_diamantes: [
    'CP-MC escalonado validado (CP-3 INSS → CP-5/CP-7 CRPS) com Outline Visual Law [C1-17:62]',
    '5 Falhas-padrão do INSS catalogadas como template reutilizável [C1-17:63-68]',
    'Cronometria empírica E0→E4 — fechou gap A4 [C1-17:69]',
    'RA-MC empírica 4,71× — primeira medição da Razão de Automação [C1-17:70]',
    'CMD-North Star validado como métrica-âncora [C1-17:71]',
    'Princípios #22 (5 Pontos Humanos Irredutíveis) e #23 (Cronometria do Humano) cunhados [C1-17:72-73]',
  ],
  desfecho_valido: 'carência rural-híbrida comprovada 278 meses sobre 168 exigidos (+110) · caso ATIVO em CRPS/JEF · dossiê escalonado entregue como atividade-MEIO [C1-17:50,75]',
}

// Caso novo via args { caso, especimen_pasta, versao_template }; senão fixture Hib001.
// args.especimen_pasta DEVE conter apenas material de-identificado (Zona Verde) —
// o C1 com PII fica FORA e sob gate R3. (timestamps/labels via args, nunca Date.now)
const INPUT = (args && args.especimen_pasta)
  ? {
      caso: args.caso || 'espécimen ad-hoc',
      isFixture: false,
      especimen_pasta: args.especimen_pasta,
      versao_template: args.versao_template || 'v1.0',
    }
  : FIXTURE_HIB001

// ───────────────────────── FASE 0 — INSTANCIAR (Explore) ─────────────────────────
phase('Instanciar')
log(`Instanciando espécimen do Template-Mestre ${INPUT.versao_template} · caso: ${INPUT.caso}`)

const INSTANCIA_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    versao_template: { type: 'string' },
    ficha_10_campos: { type: 'array', items: { type: 'string' }, description: 'os 10 itens CANÔNICOS da ficha do espécimen (Princípio #45 "Estrutura do espécimen diamantado"), cada um com fonte:linha' },
    c0_herdado: { type: 'string', description: 'DNA institucional herdado (D>C>V, Selo, Zilda-STF, Firewall OAB, Proof-First) — atração central que mata o drift' },
    c2_vertical: { type: 'string', description: 'doutrina técnica da vertical aplicável (Grimório / POP Visual Law CP-MC) — reusável por vertical' },
    ancoras_proof_first: { type: 'array', items: { type: 'string' } },
    fontes: { type: 'array', items: { type: 'string' }, description: 'arquivo:linha de cada estrutura herdada' },
  },
  required: ['versao_template', 'ficha_10_campos', 'c0_herdado', 'fontes'],
}

const instancia = await agent(
  `Você é o INSTANCIADOR (papel Explore, read-only) do motor Espécimen Auto-Evolutivo do Meu Cumpadre. Fase 0 (#45 · Diamante Bifronte).\n\nO Template-Mestre vN está INLINE abaixo (Zona Verde · método · de-identificado) — NÃO leia arquivos externos; use SÓ este texto:\n\n=====TEMPLATE-MESTRE (inline)=====\n${TEMPLATE_MESTRE_CONTENT}\n=====fim do Template-Mestre=====\n\nEle já traz a ERRATA-001 (logo após o BOX de Honestidade Epistêmica) com a ficha #45 canônica, o 4D-TDIG, o CVRD e a anatomia CP-MC — cada um com fonte:linha.\n\nTAREFA: instancie um novo espécimen HERDANDO do template (C0 = atração central): (a) liste os 10 campos CANÔNICOS da ficha do espécimen — use a ERRATA-001 E-1 (fonte primária Princípio #45 "Estrutura do espécimen diamantado", C0-05:74-87, citada na errata), NÃO os 10 campos §1.1, que estão SUPERSEDIDOS (ficaram só como histórico 🟡); (b) extraia o C0 herdado (DNA institucional: D>C>V, Selo, Zilda-STF, Firewall OAB, Proof-First); (c) aponte a doutrina C2 da vertical aplicável (Grimório / CP-MC), via anatomia da ERRATA-001 E-5. Cite fonte:linha em tudo (Proof-First).\n\nFIREWALL OAB (fail-closed): NÃO abra NENHUM arquivo de Camada 1 (prefixo "C1-", inclusive o Catálogo C1-17) nem qualquer arquivo com nome civil/CPF/NIT/NB/CID/protocolo — é Zona Vermelha sob gate R3 (Dra. Juliana). Opere SÓ sobre o Template-Mestre (Zona Verde). Retorne SOMENTE via schema.`,
  { agentType: 'Explore', label: 'instanciador', phase: 'Instanciar', schema: INSTANCIA_SCHEMA }
)

// ───────────────────────── FASE 1 — CAPTURA BIFRONTE (Explore) ─────────────────────────
phase('Captura')

const CAPTURA_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    entradas_trilha_b: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          decisao_origem: { type: 'string', description: 'referência à decisão tática A (a REFERÊNCIA, nunca o conteúdo PII)' },
          padrao_extraido: { type: 'string', description: 'a regra generalizável por trás da decisão (Zona Verde)' },
          vertice_alvo: { type: 'string', description: 'C2 vertical? C3 ramificação? catálogo?' },
          lastro: { type: 'string', description: 'fonte:linha (Proof-First)' },
        },
        required: ['decisao_origem', 'padrao_extraido', 'vertice_alvo', 'lastro'],
      },
    },
    pii_detectada: { type: 'boolean', description: 'true se encontrou QUALQUER PII no material — então ABORTA esse trecho e marca [GATE R3]' },
    alertas_firewall: { type: 'array', items: { type: 'string' } },
    fontes: { type: 'array', items: { type: 'string' } },
  },
  required: ['entradas_trilha_b', 'pii_detectada', 'fontes'],
}

const material = INPUT.isFixture
  ? `MATERIAL DE-IDENTIFICADO (golden fixture Hib001 · Zona Verde · já sem PII):\n${JSON.stringify(FIXTURE_HIB001, null, 2)}`
  : `MATERIAL DE-IDENTIFICADO na pasta abaixo (Zona Verde). Leia SÓ arquivos de método/Trilha B; NÃO abra arquivos com prefixo "C1-" nem nada de operacional-anchor (contrato, brief clínico, catálogo) — esses carregam PII e ficam FORA do escopo, sob gate R3:\n${INPUT.especimen_pasta}`

const captura = await agent(
  `Você é o CAPTOR BIFRONTE (papel Explore, read-only) do motor. Fase 1 — Protocolo de Captura Bifronte em tempo real (#45).\n\n${material}\n\nGATILHO-MÃE (#45): toda decisão tática da Trilha A (caso vivo) dispara 1 entrada na Trilha B (método). Para cada decisão tática identificável, gere 1 entrada B perguntando "esta decisão vira método replicável? para qual vértice (C2 vertical / C3 ramificação / catálogo)?".\n\nREGRA DURA (Firewall OAB · fail-closed): trabalhe SOMENTE com material de-identificado (Zona Verde). Se encontrar QUALQUER PII (nome civil, CPF, NIT, NB, protocolo, CID, endereço), NÃO a transcreva: marque pii_detectada=true, registre em alertas_firewall e pare a captura desse trecho — PII vive no C1 sob gate R3 (Dra. Juliana). Cite fonte:linha (Proof-First). Retorne SOMENTE via schema.`,
  { agentType: 'Explore', label: 'captor-bifronte', phase: 'Captura', schema: CAPTURA_SCHEMA }
)

// ───────────────────────── FASE 2 — ENGENHARIA REVERSA + TRIAGEM (#46) ─────────────────────────
phase('EngReversa')

const TRIAGEM_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    candidatos: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          padrao: { type: 'string' },
          classe: { type: 'string', enum: ['ouro', 'meio-termo', 'pirita'] },
          criterio: { type: 'string', description: 'porquê dessa classe (critério #46 / §3.2)' },
          destino: { type: 'string', description: 'Catálogo+C2 / Staging (caos #54) / Descarta (fica no C1)' },
          recalibragem_estetica: { type: 'string', description: '3 filtros: Zilda-STF · Provérbios 31:8 · Inovação Redentora' },
          costura_vocabular: { type: 'string', description: '#2/#44 — termo institucional MC canônico' },
          lastro: { type: 'string', description: 'fonte:linha' },
        },
        required: ['padrao', 'classe', 'criterio', 'destino', 'lastro'],
      },
    },
    resumo_triagem: { type: 'string' },
  },
  required: ['candidatos', 'resumo_triagem'],
}

const triagem = await agent(
  `Você é o ENGENHEIRO REVERSO (#46 · Motor de Engenharia Reversa de Replicação) do motor. Fase 2.\n\nENTRADAS TRILHA B capturadas (Zona Verde):\n${JSON.stringify(captura.entradas_trilha_b, null, 2)}\n\nHERANÇA do Template-Mestre (Fase 0):\n${JSON.stringify(instancia, null, 2)}\n\nPipeline de extração (5 passos #46): LER → ISOLAR cada entrada B como candidato a template → TRIAR → RECALIBRAR estética → COSTURAR vocabular.\n\nTRIAGEM ouro/meio-termo/pirita (§3.2):\n· OURO = generaliza p/ ≥3 casos futuros · vértice claro · lastro sólido → Catálogo + C2.\n· MEIO-TERMO = generaliza parcial · precisa de 1+ caso p/ confirmar → Staging (caos #54).\n· PIRITA = específico demais / PII-dependente / sem reuso → Descarta (fica só no C1), registra motivo.\nRECALIBRAGEM ESTÉTICA (3 filtros): Zilda-STF (funciona p/ Dona Zilda E resiste a STF/ANPD/OAB) · Provérbios 31:8 (dá voz, não substitui agência) · Inovação Redentora (flui valor AO vulnerável). COSTURA VOCABULAR: reescreva no vocabulário institucional MC (#2/#44).\n\nProof-First: cite fonte:linha; sem lastro → [GATE]. Firewall: zero PII. Retorne SOMENTE via schema.`,
  { label: 'eng-reverso:#46', phase: 'EngReversa', schema: TRIAGEM_SCHEMA }
)

// ───────────────────────── FASE 3 — DIFF + REGRESSÃO Hib001 ─────────────────────────
phase('Diff+Regressão')

// (a) DIFF — o que ESTE espécimen ensinou que o Template-Mestre vN NÃO previa
const DIFF_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    diffs: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          tipo: { type: 'string', enum: ['campo-novo', 'regra-nova', 'template-novo', 'metrica', 'nenhum'] },
          descricao: { type: 'string' },
          promovivel: { type: 'boolean', description: 'aparece em ≥2 casos OU é estruturalmente novo (vértice inédito)? §4.2' },
          lastro: { type: 'string' },
        },
        required: ['tipo', 'descricao', 'promovivel', 'lastro'],
      },
    },
    resumo_diff: { type: 'string' },
  },
  required: ['diffs', 'resumo_diff'],
}

const diff = await agent(
  `Você é o DIFFER do motor. Fase 3a — Loop de Melhoramento Contínuo (Parte 4).\n\nTRIAGEM #46 (candidatos):\n${JSON.stringify(triagem, null, 2)}\n\nTEMPLATE-MESTRE ${INPUT.versao_template} (herança da Fase 0):\n${JSON.stringify(instancia, null, 2)}\n\nTAREFA: compute o DIFF = o que ESTE espécimen ENSINOU que o Template-Mestre ${INPUT.versao_template} NÃO previa (campo novo? regra nova? template novo no catálogo? métrica?). Para cada diff, marque promovivel (§4.2): aparece em ≥2 casos OU é estruturalmente novo (vértice inédito). Itens PIRITA e idiossincráticos (1 caso só / PII-dependente) NÃO são promovíveis. Se não houver diff, devolva um item tipo "nenhum". Proof-First (fonte:linha). Retorne SOMENTE via schema.`,
  { label: 'differ', phase: 'Diff+Regressão', schema: DIFF_SCHEMA }
)

// (b) REGRESSÃO — o upgrade candidato quebra o golden fixture Hib001? (§4.4)
const REGRESSAO_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    regressao_passou: { type: 'boolean' },
    desfecho_mantido: { type: 'boolean', description: 'o template vN+diffs ainda produz o MESMO desfecho VÁLIDO em Hib001?' },
    rota_tier_dossie_corretos: { type: 'boolean', description: 'rota/tier e o dossiê escalonado CP-3→CP-5/CP-7 continuam corretos?' },
    divergencias: { type: 'array', items: { type: 'string' } },
    veredito: { type: 'string', enum: ['PASSOU', 'REPROVADO'], description: 'REPROVADO se diverge para pior → volta ao staging (§4.4)' },
    lastro: { type: 'array', items: { type: 'string' } },
  },
  required: ['regressao_passou', 'desfecho_mantido', 'rota_tier_dossie_corretos', 'veredito'],
}

const resultado_regressao_Hib001 = await agent(
  `Você é o REGRESSOR (golden master) do motor. Fase 3b — Caso-Fixture de Regressão (§4.4). O fixture é SEMPRE Hib001, independente do espécimen de entrada.\n\nGOLDEN FIXTURE Hib001 (de-identificado · Zona Verde):\n${JSON.stringify(FIXTURE_HIB001, null, 2)}\n\nDIFFS candidatos a upgrade (vN→vN+1):\n${JSON.stringify(diff.diffs, null, 2)}\n\nTAREFA (teste de regressão): aplique mentalmente os diffs PROMOVÍVEIS ao Template-Mestre e verifique se o template resultante NÃO QUEBRA Hib001: (1) ainda produz o MESMO desfecho VÁLIDO? (2) rota/tier e o dossiê escalonado CP-3→CP-5/CP-7 continuam corretos? Se diverge PARA PIOR → veredito REPROVADO (o upgrade volta ao staging). Se mantém ou melhora → PASSOU. Hib001 é o PISO de qualidade; nunca o sacrifique por um upgrade. Proof-First. Retorne SOMENTE via schema.`,
  { label: 'regressor:Hib001', phase: 'Diff+Regressão', schema: REGRESSAO_SCHEMA }
)

// ───────────────────────── FASE 4 — UPGRADE vN→vN+1 + NOTA CATÁLOGO ─────────────────────────
phase('Upgrade')

const UPGRADE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    proposta_upgrade: {
      type: 'object', additionalProperties: false,
      properties: {
        de_versao: { type: 'string' },
        para_versao: { type: 'string' },
        mudancas_aprovadas: { type: 'array', items: { type: 'string' }, description: 'SÓ o que passou §4.2 + regressão Hib001' },
        rejeitados_staging: { type: 'array', items: { type: 'string' }, description: 'caos #54 · aguarda 2º sinal' },
      },
      required: ['de_versao', 'para_versao', 'mudancas_aprovadas', 'rejeitados_staging'],
    },
    nota_catalogo: { type: 'string', description: 'rascunho da nota de atualização do Catálogo v(M)→v(M+1)' },
    pendencias_R3: { type: 'array', items: { type: 'string' }, description: 'o que fica para a decisão humana no gate R3 (Founder + Dra. Juliana)' },
  },
  required: ['proposta_upgrade', 'nota_catalogo', 'pendencias_R3'],
}

const upgrade = await agent(
  `Você é o PROPOSITOR DE UPGRADE (C3.1→C2) do motor. Fase 4 — Loop §4.1.\n\nDIFF:\n${JSON.stringify(diff, null, 2)}\n\nREGRESSÃO Hib001:\n${JSON.stringify(resultado_regressao_Hib001, null, 2)}\n\nTAREFA: redija (RASCUNHO) a proposta de upgrade ${INPUT.versao_template}→vN+1. REGRA DE PROMOÇÃO (§4.2): só entra na proposta o diff que (a) é promovível (≥2 casos OU estruturalmente novo), (b) passa os 3 filtros estéticos, (c) tem lastro Proof-First, (d) NÃO quebrou a regressão Hib001. O que reprovou na regressão OU não é promovível vai para rejeitados_staging (caos #54). Inclua a nota de atualização do Catálogo v(M)→v(M+1). Liste pendencias_R3 (o que fica para o gate humano: Founder valida derivações · Dra. Juliana valida PII/OAB/LGPD). REGRA DURA: devolva tudo como rascunho no schema — NÃO escreva no Vault, NÃO sele. Retorne SOMENTE via schema.`,
  { label: 'propositor-upgrade', phase: 'Upgrade', schema: UPGRADE_SCHEMA }
)

// ───────────────────────── STOP no GATE HUMANO — o motor NÃO decide e NÃO sela ─────────────────────────
return {
  caso: INPUT.caso,
  versao_base: INPUT.versao_template,
  gate: 'DECISÃO HUMANA PENDENTE — Founder valida derivações + Dra. Juliana valida PII/OAB/LGPD (R3). O motor instanciou, capturou (bifronte), fez engenharia reversa (#46), diffou e testou a regressão Hib001. NÃO selou · NÃO escreveu no Vault · NÃO ingeriu PII.',
  // os 4 retornos exigidos pelo blueprint:
  diff: diff,
  proposta_upgrade: upgrade.proposta_upgrade,
  resultado_regressao_Hib001: resultado_regressao_Hib001,
  pendencias_R3: upgrade.pendencias_R3,
  // rastreabilidade das fases (Proof-First · auditável):
  rastreabilidade: {
    fase_0_instancia: instancia,
    fase_1_captura: captura,
    fase_2_triagem: triagem,
    fase_4_nota_catalogo: upgrade.nota_catalogo,
  },
}
