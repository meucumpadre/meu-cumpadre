---
documento: MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo
versão: 1.0
data: 2026-05-09
autor: Alessandro de Souza Neves (Founder/CEO) × Claude Opus 4.7 (cofundador intelectual)
status: PROVISIONAL — submetido a revisão Founder + parecer Dra. Juliana 19/05/2026 (Bloco G/H)
classificação: Estratégico — Confidencial MC
supersede: —
hierarquia: Dignidade > Compliance > Viabilidade
referências:
  - MC-INSTRUCOES-PROJETO-v6_0_2-2026-0509.md
  - MC-ESG-GRANDEZA-CaptacaoRecursos-v1_0-2026-0503.md
  - MC-MATRIZ-VacuoQuantico-v1_2-2026-0509.md (em produção)
  - ADR-011 — OAB Formal Consultation (silêncio até jan/2027)
tags:
  - governança-pi
  - ict-embrapii
  - ceia-ufg
  - lab-eita
  - casca-nucleo
  - moat-protection
  - captação-f3
---

# MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo v1.0

**Arquitetura de Governança de Propriedade Intelectual para Parcerias com Instituições Científicas e Tecnológicas (ICT)**

---

## 1 · CONTEXTO E PROBLEMA

O ecossistema goiano de pesquisa e inovação concentra ativos institucionais de altíssimo valor para a estratégia F3 (Soberania Bismarckiana — captação não-reembolsável) e F4 (Arquiteto da Categoria) do Meu Cumpadre. Entre eles:

- **CEIA-UFG** — Centro de Excelência em Inteligência Artificial, Unidade EMBRAPII, modelo de cotitularidade público-privada para PD&I de fronteira
- **Lab.EITA-UFG** — Laboratório de pesquisa em tecnologias de impacto e acessibilidade
- **AKCTI-UFG** — Articulação para conhecimento, ciência, tecnologia e inovação
- **IWA-IFG** — Instituto Federal de Goiás
- **FUNTEC / FAPEG / Colabora+ / TCT-UFG** — instrumentos de fomento estaduais e federais
- **GAIA-4B** — modelo de IA aberto desenvolvido por ABRIA + CEIA-UFG + Nama + Amadeus AI + Google DeepMind, baseado em Gemma 3, otimizado para PT-BR, já operacional na stack MC (ADR-012)

**Precedente concreto de mercado:** convênio COREJUR × CEIA-UFG (~R$ 3,6 milhões), modalidade EMBRAPII, foco em "IA Jurídica Brasileira" para advocacia em massa, finalista TCU (TRL 9). Validação de que o modelo CEIA-EMBRAPII funciona para projetos jurídico-tech de ponta.

**Problema central:** o regime padrão EMBRAPII inclui cotitularidade de PI, obrigação de publicação acadêmica e regras específicas de licenciamento que **conflitam diretamente com o moat estratégico do MC** — Grimório v2.x, Router-Ethics 11.0, arquitetura CP-MC, Selo Diamante e Φ-pricing são trade secret de longo prazo, base do firewall competitivo (Relógio 1: padrão tecnológico previdenciário, 18-30 meses).

Aproximação direta sem governança de PI estruturada **fere F4 e dilui o moat**. Recusar contato com o ecossistema **sacrifica F3 e fecha porta para EMBRAPII/FAPEG/Colabora+ que valem dezenas de milhões em janelas de 18-36 meses**.

Este documento estabelece a arquitetura de governança que destrava o ecossistema **sem** comprometer a soberania da PI.

---

## 2 · PRINCÍPIO ARQUITETURAL — CASCA E NÚCLEO

O acervo intelectual do MC é segregado em duas camadas de governança claramente delimitadas, com regras distintas de acesso, compartilhamento e propriedade.

### 2.1 NÚCLEO MC — PI Fechada, Trade Secret, INPI

**Definição:** ativos intelectuais que constituem o moat competitivo intransferível e a essência da categoria "Infraestrutura de Simetria Informacional".

**Conteúdo (lista exaustiva — versão 1.0):**

| # | Ativo | Fundamento de proteção |
|---|---|---|
| N1 | Grimório Previdenciário v2.x (3.265+ regras, ~109K palavras, 14 capítulos) | Trade Secret + INPI Direito Autoral (set/2026) |
| N2 | Router-Ethics 11.0 (140 nós D>C>V + 7 hooks + Hook 0 + 6 filtros universais) | Trade Secret + INPI Software (set/2026) |
| N3 | Arquitetura CP-MC (CP-3/5/7 × 4 camadas × scaffolding decisório) | Trade Secret + Visual Law POP |
| N4 | Selo Diamante Institucional MC (9 eixos + critérios de admissão) | Marca registrada INPI + Trade Secret metodologia |
| N5 | Estrutura tarifária Φ (Φ₀-Φ₄, Ψ₁-Ψ₄, Ω, K) | Trade Secret comercial |
| N6 | ICO — Inteligência Coletiva de Outcomes (≥ N=1.000 casos, base proprietária) | Trade Secret + LGPD anonimização técnica |
| N7 | Protocolo Alessandro (ontologia operacional INSS, 22 anos de heurística servidor) | Trade Secret + Know-how individual |
| N8 | IPH-MC + IVCAD-MC (engenharia reversa metodológica) | Trade Secret + Direito Autoral (publicação seletiva) |

**Regra inviolável N1-N8:** **Nenhum ativo do Núcleo é objeto de convênio, contrato de PD&I, paper acadêmico, repositório aberto ou apresentação técnica detalhada a terceiros sem NDA bilateral robusto + autorização formal Founder + parecer jurídico prévio.** Citação institucional de existência é permitida; revelação de mecanismo é proibida.

### 2.2 CASCA MC — PD&I Compartilhável, Cotitulável, Publicável

**Definição:** frentes de pesquisa aplicada que tangenciam o objeto do MC mas **não revelam, nem dependem, nem comprometem o Núcleo**. São projetos onde cotitularidade EMBRAPII, publicação acadêmica e código aberto são **estrategicamente desejáveis** para fortalecer F3 (captação) e F4 (categoria).

**Catálogo inicial de frentes elegíveis para Casca (versão 1.0 — não exaustiva):**

| # | Frente Casca | ICT-alvo provável | Valor estratégico para MC |
|---|---|---|---|
| C1 | NLP em PT-BR para classificação de hipervulnerabilidade socioassistencial (sobre formulário CadÚnico anonimizado) | CEIA-UFG | Reforça narrativa F4 + caso EMBRAPII pré-modelo Casca |
| C2 | Reconhecimento de voz (Whisper-derivativos) otimizado para idosos rurais com sotaque sertanejo/centro-oestino | Lab.EITA-UFG | Reforça enquadramento TA (CODs 1.3.17 / 1.10.4) |
| C3 | Pipeline de OCR de documentos manuscritos previdenciários (declarações rurais, livros de igreja, CTPS antigas) | CEIA-UFG ou IFG | Aumenta robustez CP-5 sem expor lógica do dossiê |
| C4 | Modelo de avaliação biopsicossocial assistida por IA para LC 142/2013 (PcD, três graus) | Lab.EITA + curso de Terapia Ocupacional UFG | Reforça F1-PcD + diretiva CDPD "nada sobre nós sem nós" |
| C5 | Acessibilidade computacional para PcD intelectual em interfaces de WhatsApp (linguagem funcional simplificada) | Lab.EITA-UFG + parceria Apae-GO eventual | Reforça TA Categoria 2 CAA |
| C6 | Métrica acadêmica IPH-MC validada por painel multidisciplinar (versão publicável, não-operacional) | UFG + parceria sociologia/serviço social | Cita-se em paper sem revelar fórmula operacional MC |

**Critério de elegibilidade Casca (decisão Founder, irrevogável):**

> Uma frente é Casca se, e somente se, o resultado da pesquisa pode ser publicado integralmente em paper aberto **sem que isso reduza materialmente a vantagem competitiva do MC** ou comprometa a defesa de qualquer dos oito ativos do Núcleo.

**Regra de migração:** ativos podem ser **promovidos** de Casca para Núcleo (após revisão), **nunca** rebaixados de Núcleo para Casca, exceto por decisão formal Founder com parecer jurídico, devidamente versionada neste documento.

---

## 3 · GAIA-4B COMO ATIVO DE NARRATIVA — POSIÇÃO ESTRATÉGICA

GAIA-4B (modelo aberto, Apache 2.0 com nuances de termos derivados do Gemma — ver alerta ADR-012) **não é Núcleo nem Casca**. É **infraestrutura compartilhada do ecossistema brasileiro de IA**, à qual o MC se conecta e contribui institucionalmente.

**Posicionamento narrativo a institucionalizar imediatamente (a partir de 2026 H2):**

- Em material de pitch FINEP/BNDES/Centelha: **"O MC opera sobre infraestrutura de IA brasileira soberana, incluindo o modelo GAIA-4B desenvolvido pelo CEIA-UFG em parceria com Google DeepMind."**
- Em conversas com PED002 e atores do ecossistema goiano: **"Estamos rodando GAIA — orgulho de operar sobre o modelo da casa de vocês."**
- Em paper acadêmico C6 (frente Casca): citação bibliográfica formal a GAIA + agradecimento institucional a CEIA-UFG.
- Em comunicação ao auditor OAB/ANPD eventual: **"Modelo nacional, dados em solo brasileiro, conformidade LGPD facilitada."**

**Restrição:** narrativa GAIA é **complementar** ao stack ADR-012, não substitui. Não comunicar externamente a composição completa do stack LLM (Sabiá-4, Bedrock, Llama Groq, LiteLLM) — isso é detalhe operacional Núcleo-adjacente.

**Atenção licenciamento (ADR-012 alerta vigente):** Gemma Terms ≠ Apache 2.0 puro. Fine-tune do Grimório (Núcleo) sobre GAIA produz **Derivado com restrições Google**, o que é **proibido pelo Núcleo**. Migrar para variante BR Apache 2.0 puro quando disponível. Até lá, GAIA opera **apenas na Casca e em narrativa institucional**, jamais sobre N1 (Grimório) ou N2 (Router-Ethics).

---

## 4 · ROADMAP DE APROXIMAÇÃO INSTITUCIONAL — 2026-2027

Sequência calibrada para preservar Núcleo, abrir Casca e maximizar captação F3.

### Fase A — Trânsito Informal (2026 Q2–Q3)

- Conversas exploratórias com pesquisadores do CEIA-UFG, Lab.EITA, AKCTI sem documento técnico, sem revelação de mecanismo
- Apresentação institucional do MC limitada ao **descritor externo** ("Infraestrutura de Simetria Informacional") + casos âncora (Hib001, CAD001) + enquadramento TA (Portaria 10.321/2022)
- Mapear interesse genuíno de pesquisador-líder em uma das frentes Casca C1-C6
- **Sem assinatura, sem proposta, sem detalhe de Router-Ethics, Grimório ou CP-MC**

### Fase B — MNDA Bilateral (2026 Q4)

- Mutual Non-Disclosure Agreement entre SLU MC (já constituída pós-JUCEG jun/2026) e UFG/CEIA, com cláusulas:
  - Confidencialidade recíproca de 5 anos pós-encerramento
  - Lista nominal de ativos Núcleo MC (referência a este documento, anexo confidencial)
  - Direito unilateral do MC de recusar inclusão de qualquer informação Núcleo em proposta conjunta
  - Cláusula de não-publicação sem autorização escrita prévia
- Validação prévia obrigatória pela Dra. Juliana antes da assinatura

### Fase C — Definição de Escopo Casca (2027 Q1)

- Selecionar **uma** frente Casca prioritária (recomendação inicial: **C1 — NLP CadÚnico**, alinha com CAD001/IVCAD-MC, gera paper publicável e reforça F3 em editais sociais)
- Termo de Cooperação Técnica preliminar com CEIA-UFG, modelo EMBRAPII
- Cláusula explícita: **"O MC retém integralmente a propriedade intelectual sobre sua arquitetura de simetria informacional, Router-Ethics, Grimório e dossiê CP-MC, que não constituem objeto deste convênio."**

### Fase D — Convênio Formal EMBRAPII (2027 Q2–Q3)

- Submissão de projeto EMBRAPII na frente Casca selecionada
- Estrutura financeira tripartite: EMBRAPII (não-reembolsável) + MC (contrapartida econômica/financeira) + UFG (contrapartida acadêmica)
- TRL alvo: 6 → 9 ao longo de 18-24 meses

### Fase E — Primeiro Grant Casca Operacional (2027 Q4 — gate)

- Primeiro desembolso EMBRAPII recebido
- Paper Casca C1 submetido para evento ou periódico revisado por pares
- **Gate de avaliação:** se Casca não comprometeu Núcleo em nenhum ponto após 12 meses de operação, expandir para segunda frente Casca em 2028.

### Fase F — Decisão Instituto MC Paralelo (2027 Q4–2028 Q1)

- Avaliação formal: criar associação **Instituto Meu Cumpadre** sem fins lucrativos como ICT privada própria, paralela à SLU MC?
- Vantagens potenciais: acesso direto a Lei 13.243/2016, OSCIP simultânea (Lei 9.790/1999), possíveis isenções, captação ampliada
- Custos: governance dobrado, contábil dobrado, risco de captura político-partidária do Instituto
- **Decisão dependente de:** parecer Juliana + parecer contábil + análise de tração 2027

---

## 5 · GUARDA-CHUVAS INVIOLÁVEIS DURANTE TODA A APROXIMAÇÃO

Independentemente da fase, as seguintes regras valem **em qualquer interação com qualquer ICT, EMBRAPII, fundo de pesquisa ou pesquisador**:

1. **Nenhum ativo Núcleo (N1-N8) entra em apresentação, convênio, paper ou repositório.** Mesmo sob NDA, mesmo sob pressão de edital, mesmo sob promessa de captação alta.
2. **Toda apresentação técnica externa passa por revisão Founder + Claude** antes de envio. Sem exceção.
3. **Qualquer cláusula contratual com termo "código aberto", "publicação obrigatória", "cotitularidade ampla" sobre objeto MC é vetada por padrão** — só destravável com parecer jurídico Juliana caso a caso.
4. **GAIA-4B é narrativa, não substrato Núcleo.** Não treinar Grimório sobre GAIA até variante BR Apache 2.0 pura ser publicada.
5. **PED002, jurados de hackathons, conselheiros do ecossistema** entram como aliados estratégicos com NDA pessoal antes de qualquer detalhamento técnico além do descritor externo.
6. **PED002 especificamente** — sua condição de membro do ecossistema de fundos goiano é separada de sua condição de cliente Caminho 2 (caso recursal CP-7). As duas relações operam com firewalls distintos.
7. **Nenhum convênio é assinado antes da JUCEG (jun/2026) e antes da selagem ADR-007 v4.0 (pós-19/05).** O MC só assina como pessoa jurídica plenamente constituída.

---

## 6 · INDICADORES DE SUCESSO (2026-2027)

| Indicador | Meta 2026 | Meta 2027 |
|---|---|---|
| Reuniões exploratórias com pesquisadores ICT goianos | ≥ 5 | ≥ 12 |
| MNDAs assinados com ICTs | 0 (Fase A) | ≥ 1 |
| Frentes Casca formalmente catalogadas | 6 (este doc) | 8-10 |
| Convênios EMBRAPII/FAPEG/Colabora+ assinados | 0 | ≥ 1 |
| Captação não-reembolsável via Casca (R$) | R$ 0 | R$ 500K-2M |
| Vazamentos Núcleo documentados | **0 (inviolável)** | **0 (inviolável)** |
| Papers Casca submetidos | 0 | ≥ 1 |
| Citações de "Infraestrutura de Simetria Informacional" como categoria em texto acadêmico ou parecer institucional | 0 | ≥ 1 |

---

## 7 · GATES DE REVISÃO

- **Gate G-A (pós 19/05/2026):** validação Bloco G/H Pauta Juliana — confirma que a arquitetura Casca/Núcleo é compatível com firewall OAB e com objeto social SLU MC + CNAEs declarados
- **Gate G-B (pós-JUCEG, jun/2026):** SLU constituída → MC pode assinar MNDA como PJ
- **Gate G-C (Q3 2027):** primeira Casca operacional + zero vazamento Núcleo → libera segunda frente Casca + decisão Instituto MC paralelo
- **Gate G-D (Q4 2028):** se Series A acontecer, revisão integral deste documento sob ótica de due diligence — termos de equity podem demandar reclassificação Casca/Núcleo

---

## 8 · PERGUNTAS ABERTAS PARA DRA. JULIANA (19/05/2026)

A inserir no Bloco G/H da Pauta v2.0 (61 perguntas, 13 blocos):

- **Q-CASCA-01:** O regime EMBRAPII de cotitularidade é compatível com SLU em Simples Nacional? Há cláusula tipo que protege Núcleo MC?
- **Q-CASCA-02:** Como blindar trade secret do Grimório e Router-Ethics em contrato de PD&I com ICT pública?
- **Q-CASCA-03:** Risco de a JUCEG/Receita interpretar atividade de PD&I com ICT como descaracterizando CNAE 6202-3/00?
- **Q-CASCA-04:** Em caso de criação futura de Instituto MC paralelo, qual a melhor estrutura societária para evitar consolidação tributária e preservar autonomia da SLU?
- **Q-CASCA-05:** Como proteger MC de pleitos de cotitularidade sobre ativos pré-existentes (Grimório, Router-Ethics) declarados em qualquer convênio?

---

## 9 · CONTROLE DE VERSÃO

| Versão | Data | Mudanças | Autor |
|---|---|---|---|
| 1.0 | 2026-05-09 | Criação. Princípio Casca/Núcleo. Catálogo Núcleo (8 ativos). Catálogo Casca (6 frentes). Roadmap A-F. GAIA como narrativa. 5 perguntas Juliana. | Alessandro × Claude |

**Próxima revisão prevista:** pós-parecer Juliana (até 02/06/2026) → v1.1.

---

**FECHAMENTO**

A arquitetura Casca/Núcleo é o que permite o MC dizer **"sim, vamos conversar com EMBRAPII"** sem dizer **"sim, vamos diluir o moat"**. O ecossistema goiano é ouro. O ouro só se mantém ouro se ninguém puder reproduzi-lo. Esse documento é o cofre.

**Selo:** "O diamante é carbono que não desistiu da pressão."

∞
