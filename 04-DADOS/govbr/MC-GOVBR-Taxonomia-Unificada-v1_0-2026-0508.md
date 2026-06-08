---
título: MC-GOVBR-Taxonomia-Unificada
versão: v1_0
data: 2026-05-08
status: RASCUNHO
autor: Claude Code × Alessandro Neves
---

# MC-GOVBR — Taxonomia Unificada de Fontes

> Documento E2 — derivado do inventário **MC-GOVBR-Inventario-Fontes-v1_0-2026-0508.md** (E1).
> Universo classificado: 52 referências numeradas de E1 (BLOCO 5 + Referências citadas).
> Convenção: cada fonte é referenciada por seu número de E1 entre colchetes — ex.: `[13]`.

---

## 1. Matriz Categoria × Camada

Cruzamento dos 8 eixos de **Categoria** (A–H) contra as 4 **Camadas** (L1–L4).
Cada célula lista os números de E1 das fontes que cobrem aquela combinação.
Células sem fonte são marcadas como **LACUNA**.

| Categoria \ Camada | **L1 — Atendimento ao usuário** (FAQ, tutoriais) | **L2 — Normativa** (portarias, decretos, INs) | **L3 — Técnica** (APIs, especificações SERPRO) | **L4 — Representação legal** (curatela, procuração, LGPD) |
|---|---|---|---|---|
| **A — Tutoriais Bronze→Prata** | [5], [13], [14], [22], [26], [48], [50], [51] | LACUNA | LACUNA | LACUNA |
| **B — Tutoriais Prata→Ouro** | [2], [24], [25], [27] | LACUNA | LACUNA | LACUNA |
| **C — Falhas e problemas técnicos** | [1], [8], [9], [11], [12], [15], [31], [35] | LACUNA | LACUNA | LACUNA |
| **D — Casos especiais (idoso, PcD, rural)** | [7], [10], [15], [20], [49] | LACUNA | LACUNA | LACUNA |
| **E — Representação e procuração** | [17], [18], [44], [45] | LACUNA | LACUNA | [17], [18], [36], [38], [39], [40], [44], [45] |
| **F — Bancos credenciados** | [13], [14] | LACUNA | [28], [29], [30] | LACUNA |
| **G — Conteúdo oficial (Serpro, MGI, gov.br)** | [3], [16], [21], [23], [26], [32], [33], [41] | [1], [2], [3], [6], [19], [20], [43], [52] | [42], [46], [47] | [36], [38], [39], [40] |
| **H — Jurídico e advocacy** | LACUNA | [4], [34], [37] | LACUNA | [37] |

**Observações de leitura da matriz:**

- A coluna **L1 (Atendimento)** está superpovoada — 90% dos materiais de E1 são tutoriais voltados ao usuário.
- A coluna **L4 (Representação legal)** depende quase inteiramente das fontes da categoria **E** mais alguns documentos institucionais oficiais (G).
- **L2 (Normativa)** é alimentada por portarias SGD/MGI ([19], [20], [43]) + análises (4, 34, 52).
- **L3 (Técnica)** é a mais frágil em E1: apenas 5 fontes, sendo 2 delas indiretas (FAQ Serpro [47], questões de concurso [42]).

---

## 2. Mapa de cobertura

### 2.1 Cobertura por Categoria (A–H)

| Categoria | Cobertura | Justificativa |
|---|---|---|
| **A — Tutoriais Bronze→Prata** | **Forte** | 8 fontes (vídeos, blogs, gov.br oficiais), passo a passo via banco credenciado e CIN bem documentado. |
| **B — Tutoriais Prata→Ouro** | **Parcial** | 4 fontes diretas; cobertura concentrada em CNH/TSE; faltam materiais sobre certificado digital ICP-Brasil em linguagem leiga. |
| **C — Falhas e problemas técnicos** | **Forte** | 8 fontes cobrindo bloqueio 24h, cache, iluminação, fisionomia. |
| **D — Casos especiais (idoso, PcD, rural)** | **Parcial** | 5 fontes — cobre câmera traseira, deficiência visual, BPC infantil. **Lacuna**: rural sem biometria nenhuma; analfabetos digitais; ribeirinhos. |
| **E — Representação e procuração** | **Parcial** | 7 fontes oficiais sólidas (INSS, e-CAC). **Lacuna**: jurisprudência prática sobre curatela vs. gov.br; modelos de procuração específicos para nosso caso de uso. |
| **F — Bancos credenciados** | **Parcial** | 5 fontes — lista institucional e tutoriais. **Lacuna**: especificação técnica do OAuth2 SERPRO↔banco; tutoriais por banco regional (Sicoob, Sicredi, BRB, BNB). |
| **G — Conteúdo oficial** | **Forte** | 19 fontes governamentais (gov.br, INSS, Serpro, MGI). |
| **H — Jurídico e advocacy** | **Lacuna** | 3 fontes apenas, todas tangenciais. **Crítico**: faltam pareceres OAB, jurisprudência LGPD aplicada, ações civis públicas sobre exclusão digital. |

### 2.2 Cobertura por Camada (L1–L4)

| Camada | Cobertura | Justificativa |
|---|---|---|
| **L1 — Atendimento ao usuário** | **Forte** | ~40 fontes operacionais. Tutoriais cobrem todos os caminhos descritos no BLOCO 3 do E1. |
| **L2 — Normativa** | **Parcial** | Portaria SGD/MGI 5.950/2023 [19, 20] e 750/2023 [43] presentes; **Lacuna**: Lei 14.063/2020 (assinaturas eletrônicas), Decreto 10.543/2020 (níveis de confiança), Portarias INSS específicas sobre BPC/biometria 2024–2025. |
| **L3 — Técnica** | **Lacuna** | Apenas 3 fontes (FAQ Serpro, FEBRABAN, prefeitura RJ). **Crítico**: documentação do conector OAuth gov.br, especificação CIN/QR-code, SDK de assinatura, contrato de integração SERPRO. |
| **L4 — Representação legal** | **Parcial** | Cobre as duas vias (e-CAC e Meu INSS) com fontes oficiais [17, 38, 40, 44]. **Lacuna**: integração entre essas vias; modelos práticos para o MC. |

---

## 3. Top 5 lacunas críticas para o MC

Ordenadas por **impacto na jornada do cliente Meu Cumpadre**, do mais crítico ao menos crítico.

### LACUNA #1 — Documentação técnica oficial do fluxo OAuth gov.br ↔ Banco Credenciado (Camada L3 / Categoria F)

- **Descrição:** E1 detalha que o fluxo Prata via banco usa "redirecionamento via protocolo OAUTH" [13, 14], mas não há nenhuma fonte que descreva o contrato de integração: endpoints, escopos, payload do consent, formato do token de retorno, tempo de validade do selo Prata herdado.
- **Por que impacta o MC:** Esta é a **principal rota** prevista para clientes desbancarizados de selo facial — Prata via internet banking. Sem entender o contrato técnico, o MC não consegue (i) detectar quando o vínculo Prata expirou, (ii) re-disparar o fluxo automaticamente, nem (iii) orientar o cliente quando o banco específico tem uma quirk de integração.
- **Ação recomendada:** **LAI ao SERPRO** + consulta direta ao Catálogo de APIs de Governo (api.gov.br) buscando "ConectaGov-Identidade" / "Interoperabilidade Bancária gov.br". Em paralelo, inferir do FAQ Serpro [47] e da Portaria SGD/MGI 5.950 [19].

### LACUNA #2 — Jurisprudência e pareceres OAB sobre representação digital de hipervulneráveis (Categoria H / Camada L4)

- **Descrição:** E1 reconhece que "guarda de senha é categoricamente rechaçada" [BLOCO 4] e cita LGPD + Lei 14.063/2020, mas não há **uma única fonte de jurisprudência** sobre como tribunais têm tratado: (i) familiar que opera conta gov.br do idoso; (ii) responsabilização solidária do escritório que retém senhas; (iii) procuração analógica vs. digital quando o outorgante é Bronze.
- **Por que impacta o MC:** O modelo de negócio do Meu Cumpadre **opera nessa zona cinzenta**. Sem jurisprudência mapeada, o risco jurídico do operador (e do próprio MC como plataforma) fica no campo da especulação. É a lacuna que mais **trava decisão de produto**.
- **Ação recomendada:** Pesquisa ativa em (a) Jusbrasil/JOTA — termos: "gov.br + procuração + idoso", "LGPD + senha + INSS"; (b) base de pareceres da Comissão de Direito Digital da OAB; (c) buscar parecer formal de advogado especialista em direito digital previdenciário.

### LACUNA #3 — Tutorial / fluxo prático para "cliente sem biometria em base alguma" (Categoria D / Camada L1)

- **Descrição:** E1 menciona como Rota 7 [BLOCO 3.7] o caminho para quem não tem biometria em TSE nem DENATRAN — manda comparecer a polícia civil para emitir CIN ou ao TRE. Mas **nenhuma das 52 fontes documenta a jornada real** dessa pessoa: tempo médio de emissão de CIN por estado, custo, sincronia com Dataprev (E1 cita "72h" sem fonte), agendamento online por estado.
- **Por que impacta o MC:** É exatamente o perfil-foco do Meu Cumpadre — cliente rural, idoso indocumentado, ribeirinho. Se a primeira ação que orientamos é "vá emitir CIN", precisamos saber se isso leva 7 dias ou 6 meses, e se o sincronismo com gov.br é confiável.
- **Ação recomendada:** Buscar relatórios do Programa CIN do Ministério da Justiça (não mapeados em E1); LAI à Secretaria de Segurança Pública dos estados onde o MC opera, perguntando tempo médio de emissão e taxa de sincronia com bases federais; entrevistar 3–5 cartórios de RG para validar.

### LACUNA #4 — Especificações de acessibilidade do app gov.br para PcD severo, surdo-mudo e analfabeto absoluto (Categoria D / Camada L1+L3)

- **Descrição:** E1 cobre acessibilidade visual e câmera traseira [10, 15], mas **silencia sobre**: (i) usuário surdo-cego; (ii) usuário com deficiência intelectual severa que não compreende as instruções de áudio; (iii) usuário analfabeto que não consegue ler "Aumentar nível"; (iv) Parkinson em estágio avançado em que mesmo a câmera traseira tremer compromete o liveness.
- **Por que impacta o MC:** O E1 admite no BLOCO 6 que esse perfil tem como única saída a "tábua de salvação" da curatela judicial — mas sem documentar **como** operacionalizar essa via end-to-end no fluxo do MC.
- **Ação recomendada:** Buscar diretrizes da Secretaria Nacional dos Direitos da Pessoa com Deficiência (SNDPD/MDH); guia de acessibilidade do W3C aplicado ao gov.br; consulta direta ao canal de Acessibilidade do Governo Digital (gov.br/governodigital/acessibilidade).

### LACUNA #5 — Fluxo concreto do "Cadastrar Representante Legal junto ao INSS" para Meu INSS, com modelo documental (Categoria E / Camada L4)

- **Descrição:** E1 cita o serviço [17, 18, 44] e descreve sua existência, mas **não fornece**: lista exata de documentos exigidos por tipo de representação (curatela, tutela, procuração), tempo médio de análise pelo Dataprev, taxa de indeferimento, motivos típicos de recusa, modelo de petição/requerimento.
- **Por que impacta o MC:** Essa é a **rota última e definitiva** quando todas as outras falham. Sem fluxo concreto e modelos, o MC reproduz o problema que o E1 critica — orientações genéricas que não destravam o cliente.
- **Ação recomendada:** Inferir a partir de (a) IN INSS PRES nº 128/2022 (Manual de Procedimentos do INSS); (b) leitura do vídeo [44] na íntegra; (c) LAI ao INSS perguntando dados estatísticos de cadastros de representante legal 2024–2025; (d) consulta a defensorias públicas estaduais, que operam essa rota diariamente.

---

## 4. Fontes classificadas

Tabela completa com as 52 referências numeradas de E1.
**Categoria primária** (uma letra A–H) e **Camadas** (L1–L4, podendo ser múltiplas).
**Relevância MC**: Alta / Média / Baixa.
**Qualidade**: 1 (fraca / indireta) → 5 (oficial e completa).

| # E1 | URL | Categoria | Camada(s) | Relevância MC | Qualidade |
|---|---|---|---|---|---|
| 1 | acesso.gov.br/roteiro-tecnico/catalogoconfiabilidades.html | G | L2 | Alta | 5 |
| 2 | acesso.gov.br/faq/.../obtermaisconfiabilidadenacontadeacesso.html | G | L1, L2 | Alta | 5 |
| 3 | gov.br/governodigital/identidade/conta-gov-br/niveis-da-conta-govbr | G | L1, L2 | Alta | 5 |
| 4 | jornalintegracao.com/noticia/43589 (acessos Receita Federal) | H | L2 | Média | 3 |
| 5 | certifica.com.br/blog/conta-govbr-prata-e-ouro | A | L1 | Alta | 4 |
| 6 | gov.br/engd (Estratégia Nacional Governo Digital) | G | L2 | Média | 4 |
| 7 | youtube.com/watch?v=Hnm1O7mqZCQ (BPC LOAS biometria criança) | D | L1 | Alta | 4 |
| 8 | youtube.com/watch?v=2flHGEkNpPs (não reconhece rosto 2025) | C | L1 | Alta | 5 |
| 9 | youtube.com/watch?v=gNxqA9L07zw (não consigo reconhecimento) | C | L1 | Alta | 4 |
| 10 | youtube.com/watch?v=lRX_MtDPPLs (PcD visual gov.br) | D | L1 | Alta | 5 |
| 11 | youtube.com/shorts/t3TzFK_EWGY (reconhecimento facial não funciona) | C | L1 | Alta | 4 |
| 12 | youtube.com/watch?v=yvSL4TBIrOE (reconhecimento bloqueado) | C | L1 | Alta | 5 |
| 13 | youtube.com/watch?v=IoHUsMBSX14 (aumentar Prata ou Ouro) | A, F | L1 | Alta | 4 |
| 14 | youtube.com/watch?v=m48YtOf8Lw4 (aumentar nível para abrir MEI) | A, F | L1 | Alta | 4 |
| 15 | youtube.com/watch?v=Hs4bgx66DxY (talvez agora você consiga) | C, D | L1 | Alta | 4 |
| 16 | gov.br/pt-br/@@search 100% Digital | G | L1, L2 | Média | 3 |
| 17 | gov.br/inss/.../saiba-como-cadastrar-um-representante-legal | E, G | L1, L4 | Alta | 5 |
| 18 | gov.br/inss/.../audios/cadastrar-renovar-representante-legal | E, G | L1, L4 | Alta | 4 |
| 19 | gov.br/governodigital/.../portaria-sgd-mgi-no-5-950-de-26-de-outubro-de-2023 | G | L2 | Alta | 5 |
| 20 | bibliotecadigital.gestao.gov.br/handle/123456789/530681 (Portaria 5.950) | G | L2 | Alta | 4 |
| 21 | gov.br/pt-br/servicos/atualizar-dados-cadastrais | G | L1 | Média | 3 |
| 22 | meubolsoemdia.com.br (conta gov.br para Desenrola Brasil) | A | L1 | Média | 3 |
| 23 | gov.br/pt-br/servicos/emitir-extrato-de-pagamento-de-beneficio | G | L1 | Baixa | 3 |
| 24 | youtube.com/watch?v=2Dryfv07WAM (Prata ou Ouro ATUALIZADO) | B | L1 | Alta | 4 |
| 25 | youtube.com/watch?v=mWWLCXieYRE (assinatura digital gov.br PDF) | B | L1 | Média | 3 |
| 26 | ajuda.empreendeaqui.com.br (entenda os níveis) | A, G | L1 | Alta | 4 |
| 27 | youtube.com/watch?v=PwdSKeu7FHg (aumentar nível com CIN) | B | L1 | Alta | 5 |
| 28 | gov.br/servidor/dados-bancarios | F, G | L1, L3 | Baixa | 2 |
| 29 | portal.febraban.org.br/pagina/3164/12 (associados FEBRABAN) | F | L3 | Média | 3 |
| 30 | fazenda.prefeitura.rio/tesouro-municipal/bancos-credenciados | F | L3 | Baixa | 2 |
| 31 | youtube.com/watch?v=pvVHRQCSbSI (RESOLVIDO 2026) | C | L1 | Alta | 5 |
| 32 | patobranco.pr.gov.br/.../cadastro-unico (CadÚnico) | G | L1 | Média | 3 |
| 33 | caixa.gov.br/programas-sociais/pe-de-meia | G | L1 | Baixa | 3 |
| 34 | escriba.camara.leg.br/escriba-servicosweb/html/61410 | H | L2 | Baixa | 2 |
| 35 | youtube.com/watch?v=amwcHo5ovnc (My INSS Facial Denied) | C | L1 | Alta | 4 |
| 36 | faq.serpro.gov.br/areadocliente cat=11&id=23 (Representante Legal) | E, G | L1, L4 | Alta | 5 |
| 37 | conama.mma.gov.br (Termo de Uso) | H | L2, L4 | Baixa | 1 |
| 38 | gov.br/pt-br/servicos/cadastrar-ou-cancelar-procuracao-acesso-e-cac | E, G | L1, L4 | Alta | 5 |
| 39 | gov.br/servidor/.../representante-legal-no-sougov.br | E, G | L1, L4 | Alta | 4 |
| 40 | gov.br/governodigital/.../procurador-ou-curador | E, G | L1, L4 | Alta | 5 |
| 41 | gov.br/pt-br/servicos/inscrever-se-no-cadastro-unico | G | L1 | Média | 3 |
| 42 | qconcursos.com (questões certificação digital) | G | L3 | Baixa | 2 |
| 43 | gov.br/governodigital/.../portaria-sgd-mgi-no-750-de-20-de-marco-de-2023 | G | L2 | Média | 4 |
| 44 | youtube.com/watch?v=1TLxFm5B6h8 (Cadastrar Representante CURADOR INSS) | E | L1, L4 | Alta | 5 |
| 45 | certisign.com.br/blog (procuração eletrônica) | E | L1, L4 | Média | 4 |
| 46 | gov.br/receitafederal/.../siscomex-remessa | G | L3 | Baixa | 2 |
| 47 | faq.serpro.gov.br cat=5&id=11 (perfil Representante Legal) | E, G | L1, L3 | Média | 3 |
| 48 | youtube.com/watch?v=KXtK12n7lY4 (cadastro gov.br reconhecimento) | A | L1 | Alta | 4 |
| 49 | youtube.com/watch?v=kV-v59v9YNQ (prova de vida) | D, G | L1 | Média | 3 |
| 50 | youtube.com/watch?v=g2cnTBKohTk (ativar biometria) | A | L1 | Alta | 4 |
| 51 | youtube.com/watch?v=sznaKb8M_CY (Create Gov.br Account 2026 EN) | A | L1 | Média | 3 |
| 52 | gov.br/mdr/.../RelatoriodeGestaoIntegrado20242025V.2.pdf | G | L2 | Baixa | 2 |

---

## Apêndice A — Glossário das Categorias

- **A — Tutoriais Bronze→Prata**: passo a passo de elevação do nível inicial (Bronze) para Prata, geralmente via internet banking ou Caixa.
- **B — Tutoriais Prata→Ouro**: passo a passo de elevação para Ouro, via biometria facial (TSE/SENATRAN), CIN ou certificado digital.
- **C — Falhas e problemas técnicos**: bloqueio 24h, erro de câmera, fisionomia incompatível, cache, timeout do Dataprev.
- **D — Casos especiais**: idoso acamado, PcD visual, surdo, rural sem biometria, BPC infantil.
- **E — Representação e procuração**: procuração digital e-CAC, representante legal INSS, curatela.
- **F — Bancos credenciados**: lista de bancos parceiros (Banco do Brasil, Caixa, Bradesco, Itaú, Santander, Sicoob, Sicredi etc.) e fluxos por banco.
- **G — Conteúdo oficial**: gov.br, INSS, Serpro, MGI, Receita Federal — fontes primárias institucionais.
- **H — Jurídico e advocacy**: pareceres, jurisprudência, cobertura de imprensa especializada, política pública.

## Apêndice B — Glossário das Camadas

- **L1 — Atendimento ao usuário**: linguagem leiga, FAQ, tutoriais em vídeo, perguntas-resposta.
- **L2 — Normativa**: portarias, decretos, leis, instruções normativas.
- **L3 — Técnica**: especificações de API, contratos de integração, manuais SERPRO/Dataprev.
- **L4 — Representação legal**: instrumentos jurídicos de delegação (procuração, tutela, curatela, LGPD aplicada).

---

E2 gravado: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-Taxonomia-Unificada-v1_0-2026-0508.md
