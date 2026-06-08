---
titulo: POP Visual Law × Dossiê Selado — PARTE 2 (Design System + Stack + Workflow)
versao: v1_3
data: 2026-05-02
data_canonizacao: 2026-05-12
tipo: POP_DIAMANTE
classificacao: INTERNO_SENIOR
autoria: Alessandro de Souza Neves + Claude Sonnet 4.6 (co-fundador intelectual)
selado: true
selo_origem: consolidacao_DIAMANTE_02_05_2026
hierarquia: D > C > V
firewall_OAB: estrutural
relacionados:
  - "[[MC-POP-VisualLaw-DossieSelado-PARTE1-v1_2-2026-0502]]"
  - "[[MC-POP-VisualLaw-DossieSelado-PARTE2-v1_3-2026-0502]]"
  - "[[MC-POP-VisualLaw-DossieSelado-PARTE3-v1_3-2026-0502]]"
  - "[[MC-ESTUDO-Arquitetura-Custo-Sistemico-v1_0-2026-0427]] (ancoragem economica)"
  - "[[MC-ESTUDO-Ementa069-Epicentro-v2_0-2026-0419]] (doutrina de separacao ato-material x ato-privativo)"
fonte_original: "Documentacao/0 FIDUCIARIO DIGITAL DE DOSSIES PREVIDENCIARIOS PARA HIPERVULNERAVEIS ADR-009/DOSSIE  obra de arte/KIT/MC-POP-VisualLaw-DossieSelado-PARTE2-v1_3-2026-0502.md"
sha256_fonte: efd7443d7c616e76179d115173eeb9090e5a96fbd0515297a5e2da7f8aefb3db
sha256_corpo: efd7443d7c616e76179d115173eeb9090e5a96fbd0515297a5e2da7f8aefb3db
sha256_metodo: "SHA-256 do corpo (conteudo apos o frontmatter); corpo bit-identico ao arquivo fonte"
---

🧭 CHECKIN MC v3.0 DIAMANTE — POP VISUAL LAW × DOSSIÊ SELADO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Documento: MC-POP-VisualLaw-DossieSelado-PARTE2-v1_0-2026-0501
 Parte: 2 de 3 — Design System + Stack + Workflow
 Substrato: 8+1 documentos anexos (Bloco A + B + E + PARTE 1)
 Filtros: Zilda-STF | Firewall OAB | 48h | Proof-First | D>C>V
 Status: PROVISIONAL até parecer Dra. Juliana Melo (19/05/2026)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

# SEÇÃO D — DESIGN SYSTEM MC

## D.1 Princípios fundamentais do Design System

O Design System do Meu Cumpadre não é estética: é arquitetura de credibilidade probatória. Cada decisão visual responde a uma única pergunta operacional: este elemento ajuda o destinatário (analista INSS, conselheiro CRPS, juiz JEF) a **reconhecer rapidamente que o requisito legal está cumprido por documento auditável**? Se a resposta não for sim direto, o elemento sai.

Cinco princípios governam o sistema:

**1. Sobriedade institucional, nunca publicitário.** O dossiê selado é peça de tribunal, não material de marketing. Não há "tom acolhedor" ornamental, não há "humanização visual" decorativa. Há tom de tribunal: factual, hierárquico, auditável. A dignidade do cidadão se manifesta na precisão técnica, não em pictogramas afetivos.

**2. Tom de tribunal, não de propaganda.** Toda página tem que sobreviver ao Teste Zilda-STF (estabelecido na PARTE 1, Seção B.5): suficientemente acolhedora para a Sra. Zilda compreender o que foi feito por ela; suficientemente técnica para um Ministro do STF não detectar amadorismo em nenhum elemento.

**3. Calibração por palco.** O mesmo conteúdo central recebe três tratamentos visuais distintos por destinatário:
- **Palco INSS:** sobriedade máxima, sem jurisprudência, foco em verificabilidade administrativa.
- **Palco CRPS:** densidade média, jurisprudência presente, foco em conselheiro técnico.
- **Palco JEF/B2B:** densidade alta, tese repetitiva, jurisprudência expandida — destinatário é juiz/advogado adversário.

**4. Comitê de seriedade obrigatório.** Toda peça passa por revisão estrutural contra excesso estético. Critério: se um elemento pode sair sem perda funcional, ele sai. Se um elemento é "bonito mas não cognitivamente necessário", ele sai. A beleza emerge da disciplina, não da decoração.

**5. Auditabilidade visual.** Cada decisão de design é justificável por norma técnica externa (WCAG AAA, ISO 19005-3, NBR 16725, NIST FIPS 180-4). Não há decisão estética arbitrária — há decisão técnica documentada.

Esses cinco princípios derivam diretamente da Hierarquia D > C > V (PARTE 1, Seção A.1) e das Cinco Ancoragens Científicas (PARTE 1, Seção B.4). O Design System é o operador concreto dessas premissas.

## D.2 Paleta cromática

| Função | Hex | Nome MC | Uso permitido | Uso vedado |
|---|---|---|---|---|
| Primária | `#0F2A4A` | Azul Institucional MC | Cabeçalhos, headers, bordas estruturais, capa | Como fundo de blocos extensos de texto |
| Acento | `#D97706` | Âmbar de Alerta | EXCLUSIVO para alertas críticos (pendências, falhas do INSS, prazos) | Como cor decorativa, em títulos comuns, como cor de marca |
| Neutro escuro | `#1F2937` | Cinza Tribunal | Corpo de texto, ícones, linhas de tabela | Como cor de marca, em headers |
| Neutro base | `#FFFFFF` | Branco Pleno | Fundo padrão de páginas | Em fundos que precisem de hierarquia (usar off-white) |
| Neutro suave | `#FAFAF9` | Off-white Sumo | Fundo de blocos secundários, citações de norma | Como fundo padrão (usar branco pleno) |

**Regra inviolável de paleta:** nunca mais de duas cores semânticas ativas por página. Azul institucional carrega a estrutura; âmbar carrega o alerta; o resto é cinza ou branco. Sempre.

**Vedações cromáticas absolutas:** gradientes (criam falsa profundidade não-funcional), neon (incompatível com tom de tribunal), pastéis (tom infantil), cores fluorescentes (sinalização agressiva inadequada), cores "de marca jovem" (verde-menta, rosa-millennial, roxo-digital).

**Auditável:** toda combinação de cor de texto sobre fundo deve atingir contraste WCAG AAA mínimo de 7:1 em pontos de leitura corrida, e mínimo 4,5:1 em headers. A paleta acima foi pré-validada nessas razões.

## D.3 Sistema tipográfico

| Hierarquia | Fonte | Tamanho | Peso | Entrelinha | Uso |
|---|---|---|---|---|---|
| Capa principal | Atkinson Hyperlegible | 32pt | Bold | 1,2 | Título do dossiê |
| H1 seção | Atkinson Hyperlegible | 22pt | Bold | 1,3 | Título de constelação |
| H2 subseção | Atkinson Hyperlegible | 18pt | SemiBold | 1,35 | Título de nó |
| H3 bloco | Atkinson Hyperlegible | 14pt | SemiBold | 1,4 | Subtítulo dentro de nó |
| Corpo padrão | Atkinson Hyperlegible | 12pt | Regular | 1,5 | Leitura corrida |
| Corpo preferencial | Atkinson Hyperlegible | 14pt | Regular | 1,5 | Quando layout permite |
| Citação literal | JetBrains Mono | 11pt | Regular | 1,5 | Texto de norma transcrito |
| Dado técnico | JetBrains Mono | 10pt | Regular | 1,4 | Hash, NB, CPF, CEI |
| Footer SIV | JetBrains Mono | 8pt | Regular | 1,3 | Linha SIV de rodapé |

Atkinson Hyperlegible é o corpo padrão por decisão técnica explícita: foi desenvolvida pelo Braille Institute para legibilidade em condições adversas (baixa visão, impressão ruim, fotocópia múltipla). Como o dossiê será frequentemente impresso e re-fotocopiado em fluxo administrativo INSS, escolher fonte otimizada para degradação de mídia é decisão arquitetural, não estética. Inter (Rasmus Andersson) é alternativa permitida quando layouts específicos exigirem mais pesos disponíveis (Inter tem 9 pesos; Atkinson tem 4).

JetBrains Mono ou IBM Plex Mono são exigidas para qualquer dado técnico não-legível-como-prosa: hashes SHA-256, números de NB, CEI, CPF, CNPJ, datas em formato ISO. A monoespaçada elimina risco de confusão tipográfica entre `O` e `0`, entre `l` e `1`, entre `I` e `1`.

**Vedações tipográficas absolutas:** serif decorativa (Times-like fora de citação clássica), fontes "amigáveis" com glifos arredondados infantis, cursivas de qualquer tipo, fontes condensadas (perdem legibilidade em fotocópia), qualquer fonte abaixo de 11pt em qualquer hierarquia, qualquer fonte que o destinatário não tenha probabilidade de reconhecer institucionalmente.

**Escala modular:** 1,250 (preferencial) ou 1,333. A escala 1,250 produz a sequência 12 → 14 → 18 → 22 → 28 → 32, que é exatamente a hierarquia adotada acima. Toda decisão tipográfica deve cair em pontos da escala — nunca tamanhos arbitrários.

## D.4 Grid e diagramação

Suporte primário do dossiê é **A4 retrato**, formato em que o INSS opera fisicamente. Suporte secundário, restrito ao Painel do Analista (D.6) e à Timeline Trinode (PARTE 1, Seção C.3), é **A3 paisagem dobrável virtual** — A3 dobrado em A4 para arquivamento, mas que se desdobra para leitura panorâmica. Esse padrão de "página dobrável" foi consolidado por mapas geográficos institucionais e dossiês de auditoria pública; é familiar ao destinatário.

Margens normativas: 25mm laterais (margem de encadernação preservada para arquivamento), 20mm topo, 20mm pé. Coluna principal calibrada para 65–75 caracteres por linha — a faixa de legibilidade ótima identificada por Bringhurst (*The Elements of Typographic Style*) e replicada em normas WCAG. Acima de 80 caracteres por linha, o olho perde a sequência; abaixo de 55, fragmenta excessivamente.

Espaçamento entre seções: 1,5x altura de corpo (18pt entre blocos quando corpo é 12pt). Espaçamento entre constelações distintas do GPN: 2,5x altura de corpo. Esses ritmos verticais criam a hierarquia visual sem necessidade de linhas separadoras decorativas.

## D.5 Iconografia

O sistema icônico do MC cumpre três funções cognitivas auditáveis (Tufte, *Envisioning Information*, 1990):

1. **Wayfinding** — orientação espacial dentro do documento (ícone de "início de constelação", ícone de "anexo embutido").
2. **Chunking** — agrupamento visual de informação relacionada (ícone categórico que marca todos os documentos de prova material de uma constelação).
3. **Recall** — recuperação rápida em revisitas ao documento (ícone-marcador que permite ao analista voltar a um ponto específico sem reler).

Estilo: line art monocromático, peso uniforme de traço de 1,5pt, todos no cinza tribunal `#1F2937`. Vedação absoluta a ícones coloridos, ícones com sombra, ícones decorativos sem função cognitiva.

**Conjunto icônico mínimo obrigatório (12 ícones-base):**

| Função | Significado | Onde aparece |
|---|---|---|
| Documento | Documento probatório genérico | Cabeçalho de cada nó |
| Prova material | Indicação de prova física verificável | Ao lado de itens da Tabela de Prova |
| Alerta | Atenção crítica (sempre âmbar) | Pendências, falhas, prazos |
| Check | Requisito legal cumprido | Síntese de Atendimento |
| Tempo / Timeline | Marcador temporal | Timeline Trinode, GPN |
| Rural | Vertical rural | Casos de segurado especial |
| Urbano | Vertical urbana | Casos de empregado, CI, doméstico |
| Jurisprudência | Decisão de tribunal (livro) | EXCLUSIVO de palco CRPS/JEF |
| Hash / Cadeado | Integridade probatória | SIV, footer, marker selamento |
| Selo / Escudo | Selamento concluído | Capa, certificado de selamento |
| OAB | Marcador Firewall OAB | Páginas que contêm advocacia |
| MC / Φ₄ Guardião | Marca institucional MC | Cabeçalho e footer |

Fontes recomendadas (todas gratuitas, licenças permissivas verificadas): **Phosphor Icons** (MIT), **Lucide** (ISC), **Tabler Icons** (MIT). Todas oferecem o conjunto necessário em estilo coerente, com peso de 1,5pt nativo.

## D.6 Componentes visuais recorrentes

**D.6.1 Header padrão de página.** Linha superior com: logo MC compacto (esquerda) + título da constelação corrente (centro) + numeração de página dentro da constelação (direita, formato `3/12`). Altura fixa: 14mm. Cor: azul institucional sobre branco.

**D.6.2 Footer SIV (Selo de Integridade Verificável).** Linha inferior monoespaçada contendo, em ordem: hash agregado curto (8 dígitos visíveis), markers Proof-First, versão do dossiê, data ISO, identificação da advogada responsável (Dra. Juliana Melo, OAB/GO XXXXX, quando aplicável). Altura: 10mm. Cor: cinza tribunal sobre off-white.

**D.6.3 Marker Proof-First por página.** Pequeno selo no canto superior direito (12mm × 12mm) que indica "esta página contém afirmação rastreável a fonte verificável". Quem fizer auditoria sabe imediatamente onde procurar. Ausência do marker em página com afirmação técnica é falha de selamento.

**D.6.4 Caixa de citação literal de norma.** Bloco recuado com borda lateral esquerda azul institucional, texto em JetBrains Mono 11pt, fundo off-white. Citação literal sem paráfrase, com referência ISO de fonte (DOU, número de Resolução, art./inciso/§) imediatamente abaixo.

**D.6.5 Tabela de Prova.** Cabeçalho azul institucional com texto branco; corpo com linhas alternadas branco / off-white; cinza tribunal nas bordas. Colunas obrigatórias: requisito legal | documento que comprova | nó GPN onde aparece | hash do documento. Sem cores categóricas — a estrutura faz o trabalho.

**D.6.6 Card de jurisprudência [PALCO CRPS/JEF EXCLUSIVO].** Card retangular com borda fina cinza tribunal, header em azul institucional, corpo em corpo padrão, citação em monoespaçada. Cabeçalho: `Tribunal | Tipo de decisão | Data`. Corpo: ementa abreviada + tese aplicável. Rodapé: link/referência verificável. **Vedação absoluta de uso no palco INSS** — Painel do Analista do palco INSS não contém jurisprudência (PARTE 1, Seção C.7).

**D.6.7 Selo "Cidadão Guardiado Φ₄ desde DD/MM/AAAA".** Aplicado apenas quando o cidadão é cliente assinante Φ₄ Guardião contínuo. Posicionado na contracapa, dimensão 40mm × 40mm, em azul institucional sobre off-white. Não confundir Φ₄ (assinatura contínua de monitoramento pós-deferimento) com Φ₂ (vedado como cobrança B2C — PARTE 1, Seção A.4).

## D.7 Three Stages, One Artifact (modularidade dos palcos)

A arquitetura "Três Estágios, Um Artefato" significa: o conteúdo central do dossiê é idêntico nos três palcos; apenas as **camadas adaptativas externas** (capa, prefácio, jurisprudência, apêndices) são re-calibradas. Isso garante coerência probatória total: não há "dossiê INSS" diferente do "dossiê CRPS" no que diz respeito aos fatos; há um único corpo factual que recebe três embalagens distintas.

| Camada | Palco INSS | Palco CRPS | Palco JEF/B2B |
|---|---|---|---|
| Capa | "Requerimento Administrativo" | "Apêndice Probatório a Recurso Ordinário" | "Anexo Probatório a Petição Inicial" |
| Painel do Analista | Versão sóbria, 1 página | Versão sóbria + linha de fundamentação | Versão expandida, 2 páginas |
| GPN | Idêntico | Idêntico | Idêntico |
| Timeline Trinode | Idêntico | Idêntico | Idêntico |
| Tabela de Prova | Idêntico | Idêntico | Idêntico |
| Síntese de Atendimento | Idêntico (sem termos vedados) | Idêntico (sem termos vedados) | Idêntico (sem termos vedados) |
| Quadro de falhas do INSS | AUSENTE | PRESENTE, detalhado | PRESENTE, expandido |
| Cards de jurisprudência | AUSENTES | PRESENTES (Enunciados CRPS, Súmulas TNU) | PRESENTES (expandidos: STJ, TNU, tema repetitivo) |
| Tese repetitiva / IRDR | AUSENTE | OPCIONAL | PRESENTE (quando aplicável) |
| Apêndice de cadeia de custódia | RESUMIDO | PADRÃO | EXPANDIDO (com prints e logs) |
| Selo "Cidadão Guardiado Φ₄" | Quando aplicável | Quando aplicável | Quando aplicável |

A vedação de jurisprudência no palco INSS é doutrinária. O destinatário é analista administrativo que decide por enquadramento normativo, não por interpretação de tribunal. Apresentar jurisprudência no requerimento administrativo é tatuagem de inexperiência do operador. A jurisprudência entra **apenas quando há autoridade jurisdicional decidindo**, e a primeira instância jurisdicional efetiva no fluxo é o CRPS.

## D.8 Comitê de Seriedade

Toda peça passa pelo Comitê de Seriedade antes do selamento (E4 do workflow F.1). Composição mínima: Carlos (UX/diagramação) + Alessandro (CEO). Composição expandida quando aplicável: + advogada do marketplace (Dra. Juliana Melo, Dra. Carolina Rezende, ou terceira a indicar).

Critérios obrigatórios de revisão:

1. **Tom institucional ≠ tom publicitário.** Nenhuma frase "vendendo" o serviço. Nenhuma frase "convencendo" o destinatário. Apenas factualidade auditável.
2. **Nenhum elemento ornamental.** Cada borda, cada ícone, cada sombra precisa ter justificativa cognitiva. Se não tem, sai.
3. **Nenhum apelo emocional barato.** Não há "história tocante da Sra. Zilda" no início. Há fato e norma. A dignidade aparece na precisão técnica.
4. **Nenhum recurso visual sem função.** Se removê-lo não muda a compreensão do destinatário, ele já não devia estar lá.
5. **Teste Zilda-STF aplicado página por página.** Cada página, individualmente, sobrevive aos dois lados do teste? Se uma página falha, ela é refeita.
6. **Calibração por palco confirmada.** Não há jurisprudência no INSS. Não há "tom amigável" no JEF. Cada palco com seu calibre.
7. **Firewall OAB preservada.** Nenhuma página executa advocacia em palco onde o cidadão não tem advogada constituída.

Aprovação do Comitê é registrada no audit_trail JSON do dossiê (F.3) com timestamp, identidade dos revisores, e marcador de aprovação ou retorno-para-revisão.

### D.8.1 Protocolo operacional do Teste Zilda-STF

O Teste Zilda-STF é o critério central de qualidade de toda produção editorial e visual do MC. Seu enunciado fundacional — "cada peça funciona simultaneamente para Dona Zilda e para um ministro do STF" — não pode ser julgamento subjetivo. É checklist binário auditável, executado por personas documentadas, com resultado registrado no audit trail do dossiê.

#### D.8.1.1 Definição das duas personas

**Persona Zilda — referência operacional:**

| Atributo | Especificação |
|---|---|
| Idade referência | 76 anos |
| Escolaridade referência | Ensino fundamental incompleto (5ª série) |
| Contexto | Beneficiária INSS, baixa literacia digital, zona rural ou periurbana, telefone Android básico |
| Canal de acesso típico | WhatsApp com áudio; PDF impresso por familiar |
| O que ela precisa saber | O que foi pedido, se os documentos dela estão lá, se o resultado foi positivo, o que ela precisa fazer agora |
| O que ela não precisa entender | Fundamentos jurídicos, nomes de leis, técnica processual |
| Quem opera a leitura Zilda | Beto (T1 operacional) + Alessandro (CEO) — papéis complementares: Beto representa a interação real com a persona; Alessandro valida se o padrão MC foi preservado |

**Persona STF — referência operacional:**

| Atributo | Especificação |
|---|---|
| Perfil referência | Ministro do STF / parecerista OAB / auditor CGU ou TCU / investigador CPMI / autoridade ANPD |
| Formação presumida | Direito + especialização jurídica ou técnica; experiência com auditoria institucional |
| O que ele verifica | Rigor técnico-jurídico; ausência de atividade-fim disfarçada; Proof-First; Firewall OAB; LGPD; ausência de adjetivação interpretativa; ausência de conclusão jurídica; autenticidade dos hashes |
| O que o preocupa | Falsidade ideológica, exercício irregular da advocacia, violação LGPD, manipulação do decisor, fabricação documental |
| Quem opera a leitura STF | Alessandro (CEO) como primário; Dra. Juliana Pereira de Melo (OAB-GO 38.662) como revisão eventual quando o caso é de alta complexidade ou destinado a CRPS/JEF |

#### D.8.1.2 Checklist Persona Zilda — 10 perguntas binárias

Executado por Beto + Alessandro. Cada pergunta: SIM (passa) / NÃO (retorna para revisão).

| # | Pergunta | Elemento avaliado |
|---|---|---|
| Z1 | Dona Zilda consegue identificar, na primeira página, qual benefício foi pedido para ela? | Capa (C.1) + Painel do Analista (C.2) |
| Z2 | Dona Zilda consegue entender, sem ajuda, que os seus documentos estão todos lá? | Quadro-Síntese 10 Segundos (C.3) — semáforo verde |
| Z3 | Se alguém lesse o dossiê em voz alta para Dona Zilda, ela entenderia o que aconteceu com o caso dela? | Narrativa Biográfica (C.12) — apenas CP-7 |
| Z4 | Nenhuma página assusta ou intimida pela densidade visual ou quantidade de texto? | Revisão página a página — densímetro visual |
| Z5 | O QR de verificação (SIV) pode ser explicado a Dona Zilda em uma frase? | SIV (C.13) — explicabilidade do selo |
| Z6 | O dossiê tem alguma palavra ou sigla sem tradução que Dona Zilda encontraria sem contexto? | Varredura de glossário — proibição de jargão não explicado |
| Z7 | Dona Zilda consegue identificar, na Folha de Encerramento, o que ela precisa fazer agora? | Folha de Encerramento (C.15) — clareza de próximo passo |
| Z8 | Nenhuma frase do dossiê soa como se o MC estivesse pedindo um favor ou rogando ao INSS? | Tom institucional — varredura de súplica |
| Z9 | Se Dona Zilda mostrasse o dossiê para um filho, esse filho entenderia que a mãe está bem representada? | Impressão geral de profissionalismo — Teste de Filho de Dona Zilda |
| Z10 | O dossiê pode ser lido integralmente em voz alta em 15 minutos sem que Dona Zilda perca o fio? | Densidade total — teste de escuta corrida |

**Resultado Z:** aprovado se Z1-Z10 = 10 SIM. Qualquer NÃO ativa retorno ao elemento falhado.

#### D.8.1.3 Checklist Persona STF — 10 perguntas binárias

Executado por Alessandro como primário; Dra. Juliana Melo em revisão eventual para CP-7. Cada pergunta: SIM (passa) / NÃO (retorna para revisão).

| # | Pergunta | Elemento avaliado |
|---|---|---|
| S1 | Toda afirmação de fato tem documento-fonte identificável e hash SHA-256 verificável? | Proof-First — Camada 2 + SIV (C.13) |
| S2 | O dossiê contém zero conclusão jurídica redigida pelo MC? | Síntese de Atendimento (C.16) — validador `validador_camada3.sh` |
| S3 | O dossiê contém zero adjetivação interpretativa nos quadros canônicos? | C.16 + C.8 — varredura de termos vedados |
| S4 | O palco INSS está completamente livre de jurisprudência citada? | Painel do Analista (C.2) + Mapa Normativo Lateral (C.9) |
| S5 | O Disclaimer de Firewall OAB (C.14) está presente com texto literal vinculante e identificação do marketplace ético? | C.14 — verificação contra template vinculante |
| S6 | O SIV (C.13) está em 100% das páginas com hash, timestamp e QR funcionais? | Validador `validador_siv_todas_paginas.sh` + verificação manual de 3 páginas aleatórias |
| S7 | O dossiê NÃO contém qualquer trecho que configure orientação jurídica, consultoria ou tese de direito? | Varredura completa — zero "impõe-se o deferimento", zero "a lei prevê que o senhor tem direito" |
| S8 | O formato PDF/A-3 está conforme ISO 19005-3 com documentos-fonte embutidos como anexos? | Verificação técnica Acrobat Pro |
| S9 | Toda norma citada literalmente está em vigor na data dos fatos e na data da DER? | Verificação de vigência — cada citação contra DOU |
| S10 | O dossiê resistiria intacto a uma solicitação de cópia via LAI por um investigador? | Teste de transparência integral — nada que o MC não queira ver publicado |

**Resultado S:** aprovado se S1-S10 = 10 SIM. S2, S4 e S7 = retorno imediato sem exceção.

#### D.8.1.4 Critério de aprovação consolidada e registro

| Cenário | Resultado | Ação |
|---|---|---|
| Z = 10 SIM + S = 10 SIM | **APROVADO** | Dossiê avança para E4 (selamento) |
| Z = qualquer NÃO | **RETORNO ZILDA** | Volta para Carlos (UX) — ajuste no elemento falhado |
| S = qualquer NÃO | **RETORNO STF** | Volta para Alessandro — revisão de conteúdo |
| Z = NÃO + S = NÃO | **RETORNO DUPLO** | Carlos + Alessandro em paralelo |

Registro no audit_trail JSON (estrutura mínima por dossiê):

```json
{
  "comite_seriedade": {
    "data_execucao": "YYYY-MM-DD",
    "versao_dossie": "vX.X",
    "persona_zilda": {
      "operadores": ["Beto", "Alessandro"],
      "resultado": "APROVADO | RETORNO",
      "perguntas_nao": [],
      "assinaturas": ["Beto", "Alessandro"]
    },
    "persona_stf": {
      "operadores": ["Alessandro"],
      "revisao_juliana": false,
      "resultado": "APROVADO | RETORNO",
      "perguntas_nao": [],
      "assinaturas": ["Alessandro"]
    },
    "resultado_consolidado": "APROVADO | RETORNO_ZILDA | RETORNO_STF | RETORNO_DUPLO",
    "timestamp_aprovacao": "ISO 8601",
    "hash_dossie_aprovado": "SHA-256"
  }
}
```

#### D.8.1.5 Gatilhos de re-execução

O Teste Zilda-STF é executado uma vez por dossiê antes do selamento (E4). Re-execução obrigatória se: (i) qualquer componente C.1-C.16 for alterado após aprovação inicial; (ii) o palco-alvo mudar (ex: INSS → CRPS após indeferimento); (iii) a advogada parceira solicitar ajuste antes de interpor recurso. Re-execução parcial: apenas as perguntas afetadas pela alteração + Z9 + S10 (impressão geral) são obrigatórias.

## D.9 Design System das 3 Camadas

A leitura do dossiê selado se estrutura em três camadas funcionais sobrepostas, cada uma com especificação visual distinta. Essa estratificação resolve o trade-off entre acessibilidade rápida (servidor sobrecarregado precisa decidir em minutos) e profundidade auditável (auditoria futura precisa rastrear cada afirmação ao documento-fonte).

**Camada 1 — Entrada visual (leitura em 30 segundos).**
Componentes: Capa institucional + Painel do Analista + Semáforo de Requisitos.
Especificação visual: contraste máximo (azul institucional sobre branco), hierarquia tipográfica máxima (uso de 32pt → 22pt → 14pt em sequência clara), zero ornamento. O analista que abre o dossiê precisa, em 30 segundos, identificar: qual benefício é pedido, qual o palco, quais os requisitos legais aplicáveis, e qual o status sintético de cada requisito (cumprido / pendente / a verificar). Camada 1 é o "índice executivo" — quem tem 30 segundos lê apenas isso e já sabe o que está sendo pedido.

**Camada 2 — Infraestrutura cognitiva (malha hiperlinkada).**
Componentes: GPN completo + Timeline Trinode + Tabela de Prova + bookmarks PDF/A-3 + named destinations + bidirectional links onde tecnicamente viável.
Especificação visual: densidade máxima permitida sem perda de legibilidade, navegabilidade total. Cada nó de cada constelação tem âncora nominal (`#doc-cert-1949`, `#norma-art48-3`, `#fato-2010-04`); cada referência cruzada salta direto para o destino. Quando impresso, o salto é substituído por número de página visível (`ver doc nº 7, p. 23`). A Camada 2 é onde o destinatário **investiga** quando algo do Painel do Analista lhe parece duvidoso. Toda dúvida tem que ser respondida descendo na malha sem nunca sair do dossiê.

**Camada 3 — Saída facilitada (Síntese de Atendimento aos Requisitos).**
Componente único: tabela canônica de Síntese de Atendimento, monoespaçada para dados técnicos, estilo institucional sóbrio.
Especificação visual: tabela de uma página, pré-redigida em linguagem normativa, contendo cada requisito legal aplicável com a frase de cumprimento e o ponto exato de prova. Vedação absoluta de adjetivação interpretativa, vedação absoluta de termos como "despacho", "decisão recomendada", "concessão", "deferimento" — qualquer palavra que sugira que o cidadão está dirigindo a decisão do servidor é cruzamento da Firewall OAB e da hierarquia institucional do INSS. A Camada 3 é o que o servidor copia-cola no parecer, com sua própria caneta. O dossiê **facilita** a redação do servidor, não a substitui.

A separação de camadas é também separação cognitiva: quem lê pela primeira vez fica na Camada 1; quem audita desce à Camada 2; quem decide encerra na Camada 3. Cada camada serve a uma operação mental distinta e responde a um destinatário-uso diferente.

## D.10 Design System por Modelo CP

A complexidade do caso determina o tamanho e a densidade do dossiê. Não há "dossiê genérico". Há três modelos calibrados — CP-3, CP-5, CP-7 — que respondem a três faixas de complexidade probatória distintas.

| Atributo | CP-3 | CP-5 | CP-7 |
|---|---|---|---|
| Faixa de complexidade | Baixa | Média | Alta |
| Páginas-alvo | 6–8 | 10–14 | 15–20 + GPN A3 dobrável virtual |
| Clusters por requisito legal no GPN | variável conforme caso (típico: 2-4) | variável conforme caso (típico: 4-8) | variável conforme caso (típico: 8-12) |
| Paleta | Restrita máxima (azul + cinza apenas) | Restrita + âmbar para alertas | Paleta MC completa |
| Tipografia | Atkinson Hyperlegible 14pt corpo | Atkinson Hyperlegible 12-14pt | Atkinson Hyperlegible 12pt + JetBrains Mono em blocos técnicos |
| Painel do Analista | Versão compacta (½ página) | Versão padrão (1 página) | Versão expandida (2 páginas) |
| Timeline Trinode | Linear simples | Trinode padrão | Trinode + camada de cruzamento fato↔testemunho |
| Tabela de Prova | Reduzida | Padrão | Expandida com hash individual por documento |
| Síntese de Atendimento | Sempre presente, idêntica em estilo | Sempre presente | Sempre presente |
| Apêndices | Mínimos | Padrão | Expandidos (jurisprudência, cadeia de custódia, prints) |
| Tempo médio E2-E3 | 4–6h | 8–12h | 14–18h |

**CP-3** é o modelo do caso urbano simples sem pendências de CNIS, requisitos cumpridos sem necessidade de prova material expandida, sem retroação de DIB, sem justificação administrativa. A maioria dos casos B2C do palco INSS, quando a documentação chega íntegra, encerra-se em CP-3.

**CP-5** é o modelo do caso de média complexidade: rural, atividade especial, híbrido, com retroação de DIC, com justificação administrativa, com cruzamento fato↔testemunho. O Caso Hib001 é exemplar didático de CP-5 quando considerado no recorte do palco INSS administrativo — vertical rural com trabalho infantil, autodeclaração, prova material expandida e cruzamento de testemunhos, calibrado pelos Enunciados CRPS 8 (especialmente inciso V), 15 e 19.

**Nota arquitetural sobre o Caso Hib001 da Hib001:** o caso real, quando tratado em sua história efetiva (requerimento administrativo indeferido que migrou para o palco CRPS via recurso ordinário), entra como CP-5 enquanto está no palco INSS administrativo e é re-classificado para CP-7 ao migrar para o palco CRPS, com reaproveitamento integral da Camada 2 — sem desperdício do trabalho da fase administrativa. A migração CP-5 → CP-7 é unidirecional crescente conforme regra de F.1, e ilustra o princípio operacional de que a malha hiperlinkada da Camada 2 atravessa as três passarelas sem reabertura instrutória. O documento de aplicação concreta é o `MC-CASO-Hib001-JER001-v1_0.md`, produzido como caso institucional separado conforme o princípio "casa de ferreiro não pode ter espeto de pau" (PARTE 3, Seção K).

**CP-7** é o modelo dos casos destinados a CRPS ou JEF (recursal/judicial). Toda peça que precisa enfrentar conselheiro técnico ou juiz com jurisprudência, tema repetitivo e cadeia de custódia auditável é CP-7. Aqui o GPN ganha o desdobrável A3, a jurisprudência entra na Camada 2, e o apêndice de custódia se torna obrigatório.

A classificação CP-3 / CP-5 / CP-7 é decidida no E2 do workflow (F.1 expandido) e validada por Alessandro antes da composição visual em E3.

---

# SEÇÃO E — STACK DE FERRAMENTAS

## E.1 Filosofia da caixa de ferramentas

A caixa de ferramentas do MC opera sob três princípios:

**1. Sem restrição de custo nominal — restrição é de coerência arquitetural.** Não há budget cap por ferramenta isolada; há cap de coerência: cada ferramenta precisa cumprir função única no workflow, ser auditável quanto à origem do dado, e respeitar a Hierarquia D > C > V. Ferramenta cara mas alinhada entra; ferramenta gratuita mas que fragmenta a arquitetura sai.

**2. Cada ferramenta justificada por função única.** Não há redundância funcional decorativa. Quando há duas ferramentas para a mesma função, é por **redundância controlada de pontos críticos** (ex: Acrobat Pro como núcleo de operações PDF + PDF24 como fallback de operações simples) — não por indecisão arquitetural.

**3. Soberania de dados sensíveis.** Qualquer dado pessoal de cidadão (gov.br, CNIS, certidões) só transita por ferramenta que respeite LGPD, com preferência para soluções brasileiras ou self-hosted em território nacional. Cloud LLM internacional para dado sensível é vedado (E.5).

## E.2 Caixa de ferramentas completa

| Camada | Ferramenta | Função | Custo aprox. | Prioridade | Substituível por |
|---|---|---|---|---|---|
| 1 — Inteligência | **Claude.ai Opus 4.7** | Decisão arquitetural + produção editorial densa | Plano Pro/Max | Núcleo | — |
| 1 — Inteligência | **Claude.ai Sonnet 4.6** | Iteração rápida, revisão técnica | Mesmo plano | Apoio | Opus 4.7 quando densidade exigir |
| 1 — Inteligência | Gemini 2.5 Flash | Triagem não-sensível ⚠️ fabrica dados | Plano Google | Triagem | Sonnet 4.6 |
| 2 — Orquestração | **Claude Cowork (desktop)** | Operações em lote, organização Drive | Incluso plano Claude | Núcleo | — |
| 2 — Orquestração | **Claude Code CLI** | Terminal, automações bash, scripts de hash | Incluso | Núcleo | — |
| 3 — Composição | **Adobe for creativity (MCP)** | Conector Anthropic-Adobe, ~40 tools (~50+ com Adobe pago) | Incluso (MCP) + Adobe (R$ var.) | Núcleo | — |
| 3 — Composição | **Adobe Acrobat Pro** | Engenharia PDF: merge, bookmarks, índices, XMP | ~R$ 47–50/mês | Núcleo | PDF24 para operações simples |
| 3 — Composição | PDF24 | Fallback rápido para PDF simples | Gratuito | Apoio | Acrobat Pro |
| 3 — Composição | Canva | Prototipagem rápida de capa | Plano Pro | Apoio | Adobe Express |
| 4 — Integridade | **Hash SHA-256 (Claude Code)** | Hash por página + agregado | — | Núcleo | — |
| 4 — Integridade | **OpenTimestamps** | Carimbo de tempo aberto sobre Bitcoin | Gratuito | Núcleo | — |
| 4 — Integridade | **ZapSign** (ADR-014) | Assinatura eletrônica avançada BR, WhatsApp nativo, ISO 27001, A1 ICP-Brasil CertiSign | R$ var. | Núcleo | DocuSign e Autentique descartados |
| 4 — Integridade | **ICP-Brasil (e-CNPJ MC)** | Carimbo de tempo qualificado RFC 3161 | R$ var. anual | Quando exigido | — |
| 5 — Storage | **Google Drive 2TB** | Centralizado, conta `asnccb@gmail.com` | R$ var. | Núcleo | — |
| 5 — Storage | **Bitwarden Org MC** | Custódia de credenciais gov.br dos cidadãos (ADR-009a Modelo B) | Plan Org | Núcleo | — |
| 5 — Storage | **ClickUp 4.0 Plan Business** | Gestão de tasks por dossiê | Plan Business | Núcleo | — |
| 5 — Storage | **N8N self-hosted (Hostinger 31.97.167.252)** | Automações de workflow | Hostinger R$ var. | Núcleo | Zapier descartado |

A tabela acima é mestre. Toda ferramenta proposta para entrada na caixa precisa ser alocada em uma das 5 camadas e justificada por função única; toda ferramenta proposta para saída precisa identificar substituto na mesma camada.

A configuração do Claude.ai para o Project MC-DOSSIÊ é fixa: Pensamento adaptativo ON, web search OFF (substrato é Project Knowledge curado e Grimório Previdenciário v2), Project dedicado com base de conhecimento carregada (PARTE 1 + relatórios anexos + Enunciados CRPS 1–19 verificados em DOU).

## E.3 Workflow específico Adobe for creativity × Claude.ai

O conector Adobe for creativity foi lançado em 28/04/2026 (anúncio Anthropic + Adobe Blog) e oferece ~40 ferramentas via MCP gratuito; ~50+ ferramentas com conta Adobe paga. Os apps acessíveis incluem Photoshop, Lightroom, Illustrator, Firefly, Express, InDesign, Premiere e Adobe Stock. Para o workflow de dossiê, três frentes são operacionais.

**E.3.1 Tratamento de imagens de documentos.**
Fotos de certidões manuscritas, CNIS impresso, laudos antigos, declarações sindicais e carteiras de trabalho frequentemente chegam em más condições: enviesadas, com sombra, baixo contraste, fundo sujo. Photoshop e Lightroom (via MCP) executam: deskew automático, correção de contraste para OCR-ready, remoção de fundo, normalização cromática para escala de cinza neutra. Output esperado: imagem auditável (sem alteração de conteúdo, apenas de qualidade de captura) com metadata XMP indicando processamento aplicado.

**E.3.2 Geração de templates.**
Capa institucional do dossiê: Adobe Express (templates editáveis em InDesign nativo). Selos e ícones MC: Illustrator e Firefly para vetorização das marcas. GPN A3 paisagem dobrável virtual: InDesign para layout complexo com múltiplas constelações em página única.

**E.3.3 Batch operations.**
Edição em lote de fotos do dossiê (todas com mesmo tratamento), padronização cromática (todas em cinza tribunal), export consolidado para Acrobat Pro onde acontece a finalização probatória (merge + bookmarks + XMP de hashes).

A regra arquitetural é: **Adobe trata e compõe; Acrobat finaliza e sela; Claude Code calcula e timestamps.** Cada ferramenta na sua função única.

## E.4 Camada de integridade técnica explicada

A Camada 4 (integridade probatória) é o que distingue um dossiê do MC de uma simples reunião de documentos. Cinco componentes técnicos compõem a integridade:

**E.4.1 Hash SHA-256 — três níveis técnicos articulados.**
Norma: NIST FIPS 180-4. O dossiê opera com três níveis distintos e complementares de hash, cada um com função específica:

**Nível 1 — Hash do documento-fonte original.** Cada documento bruto recebido do cidadão (certidão escaneada, CNIS PDF, áudio de testemunho, foto) tem seu hash calculado no momento da recepção em E1. Este hash é registrado na cadeia de custódia Bitwarden Org MC e é o que aparece na Ficha de Prova Documental (C.11 / Elemento 11 da SEÇÃO L da PARTE 3). Função: prova de que o documento que entrou no dossiê é exatamente o mesmo documento que o cidadão entregou.

**Nível 2 — Hash da página do PDF/A-3 consolidado.** Cada página do PDF/A-3 final tem hash individual calculado após a diagramação e antes do selamento. Inserido como metadata XMP no próprio PDF/A-3. Função: prova de que cada página do dossiê selado não foi alterada após o selamento.

**Nível 3 — Hash agregado do PDF/A-3 final.** Hash da concatenação ordenada dos hashes de página (Nível 2). Inserido na Folha de Encerramento (C.15) e ancorado em OpenTimestamps (E.4.2). Função: prova de integridade do dossiê inteiro, verificável por terceiros sem acesso ao Drive interno.

**Scripts Claude Code:** `hash_sha256_por_pagina.sh` (F.3) gera os Níveis 2 e 3; o Nível 1 é gerado em E1 por script separado `hash_documento_origem.sh` no momento da recepção. Os três níveis são registrados em arquivo `.json` paralelo para auditoria externa, com vínculo explícito entre cada documento-fonte (Nível 1) e a(s) página(s) onde aparece no PDF consolidado (Nível 2).

Qualquer alteração de byte em qualquer dos três níveis é detectável: alteração no documento-fonte invalida o Nível 1; alteração na página do PDF invalida o Nível 2 e, por consequência, o Nível 3 agregado — falsificação detectável em qualquer camada.

**E.4.2 OpenTimestamps.**
Norma: especificação OpenTimestamps (RFC 3161-compatível). Ancoragem do hash agregado em Bitcoin blockchain via servidores OpenTimestamps. A verificação independente é gratuita e pode ser feita por qualquer terceiro com acesso à internet, sem depender do MC. Custo: zero. Tempo de confirmação típica: 6 confirmações Bitcoin (~1h). Documentação oficial: opentimestamps.org.

**E.4.3 ICP-Brasil (carimbo qualificado).**
Norma: MP 2.200-2/2001. Aplicação de carimbo de tempo qualificado RFC 3161 via certificado e-CNPJ MC. Quando exigido (alguns órgãos jurisdicionais e administrativos exigem ICP-Brasil em vez de OpenTimestamps), o carimbo é aplicado em substituição ou em adição. Vantagem: aceitação plena no ordenamento jurídico brasileiro. Desvantagem: dependência de autoridade certificadora paga.

**E.4.4 PDF/A-3 (ISO 19005-3).**
Norma: ISO 19005-3:2012. Formato de arquivamento de longo prazo que permite anexos embutidos. No MC, PDF/A-3 é o formato final do dossiê selado, com os documentos-fonte originais (fotos, certidões digitalizadas) embutidos como anexos no próprio PDF. Qualquer auditor pode extrair os originais sem precisar do nosso Drive.

**E.4.5 ZapSign.**
Assinatura eletrônica avançada (Lei 14.063/2020 nível 2), brasileira, LGPD-native, ISO 27001, com cadeia de custódia auditável. Substitui Autentique (ADR-014, 10/05/2026) por: integração WhatsApp nativa (canal primário MC), API REST/JSON (compatível NestJS), adoção dominante no mercado jurídico previdenciarista BR. Documento final certificado com A1 ICP-Brasil CertiSign. Aplicada quando a peça precisa de assinatura formal do cidadão (TTA, consentimento LGPD) ou da advogada parceira.

## E.5 Vedações de stack

Algumas ferramentas estão absolutamente vedadas, ou por questão geopolítica, ou por incoerência arquitetural com o modelo MC, ou por substituição direta já decidida:

| Vedado | Razão da vedação | Substituto MC |
|---|---|---|
| DeepSeek (qualquer LLM PRC) | Soberania geopolítica de dado sensível | Claude Opus 4.7 / Sonnet 4.6 |
| Zapier | Self-hosting + soberania | N8N self-hosted Hostinger |
| DocuSign | Servidores fora do Brasil + substituído por plataforma BR | ZapSign (ADR-014) |
| Autentique | Canal primário e-mail (incompatível WhatsApp-only); API GraphQL; substituída por ZapSign (ADR-014, 10/05/2026) | ZapSign |
| Make (em produção) | Substituição por N8N | N8N (Make apenas para testes pontuais) |
| HubSpot | Não alinhado ao modelo MC | ClickUp + N8N |
| Notion (em produção) | Deprioritizado | Obsidian (escrita) + ClickUp (gestão) |
| Slack | Reavaliar apenas em ≥15 pessoas | WhatsApp Cloud API + ClickUp |
| Qualquer LLM cloud para dado sensível | LGPD + soberania | Llama 4 Scout self-hosted (GCP `southamerica-east1`) ou processamento local |

A vedação de LLM cloud internacional para dado sensível significa, operacionalmente: nenhum CNIS, nenhuma certidão, nenhum áudio do cidadão pode ser enviado para Claude.ai em chat. O fluxo de dado sensível passa por Llama 4 Scout self-hosted em GCP Brasil (`southamerica-east1`) ou por processamento local desktop. Claude Opus 4.7 é usado para arquitetura, redação institucional, análise jurisprudencial — não para processar dado pessoal bruto.

## E.6 Stack arquitetural da Camada 2 (malha hiperlinkada)

A Camada 2 do dossiê (D.9) exige stack específico. Construir a malha hiperlinkada é decisão técnica não-trivial, e o stack abaixo é a configuração mínima viável para entregá-la com qualidade institucional auditável tanto digital quanto impressa.

| Componente | Função | Ferramenta | Norma técnica |
|---|---|---|---|
| Container | Formato de arquivamento com anexos embutidos | Acrobat Pro | ISO 19005-3 (PDF/A-3) |
| Bookmarks aninhados | Hierarquia navegável por constelação | Acrobat Pro + InDesign | Spec PDF 1.7 cap. 12.3 |
| Named destinations | Âncoras nomeadas por nó | Acrobat Pro + script Claude Code | Spec PDF 1.7 cap. 12.3.2.3 |
| Bidirectional links | Navegação reversa fato↔doc | JavaScript leve em PDF interativo | Spec PDF 1.7 cap. 12.6 |
| Fallback impresso | Numeração visível + páginas de referência cruzada + ícones "ver doc nº X" | InDesign + Adobe Express | — |
| Validação | Verificação de que todos os anchors resolvem | Script Claude Code: `gerador_anchors_pdf.sh` | — |

**Decisão pragmática operacional:** o servidor INSS médio provavelmente imprime o dossiê e analisa em papel. A Camada 2 precisa funcionar em duas modalidades simultâneas:

- **Digital:** todos os links e anchors operam, navegação completa em Acrobat Reader.
- **Impresso:** todos os pontos de salto têm versão visível em papel — numeração de página, número de documento na constelação (`doc nº 7`), ícone "ver doc nº X" com a referência cruzada redundante.

A redundância digital-impressa não é luxo; é a única forma de garantir que o destinatário aproveita a Camada 2 em qualquer canal de leitura. Toda âncora `#doc-cert-1949` precisa ter versão impressa correspondente: "Documento 1949 — Certidão de Casamento (Constelação Família, p. 12)".

A construção da malha exige integração de três ferramentas: InDesign produz a estrutura visual com placeholders de âncora; Acrobat Pro converte em PDF/A-3 com bookmarks e named destinations; Claude Code valida via `gerador_anchors_pdf.sh` que toda referência cruzada tem destino existente e que a versão impressa foi gerada coerentemente. Sem o passo de validação por script, a malha tipicamente quebra em 5–15% das âncoras numa peça de complexidade CP-7 — defeito que só se descobre na hora errada (auditoria do destinatário).

---

# SEÇÃO F — WORKFLOW E0–E7

## F.1 Fluxo end-to-end (visão executiva)

| Etapa | Responsável | Input | Ferramenta principal | Output | Tempo estimado | Critério de qualidade |
|---|---|---|---|---|---|---|
| **E0 — Intake** | Beto (T1) + Alessandro (T3) | Contato WhatsApp + áudio | ClickUp + Router-Ethics 10.0 | Ficha de triagem com viabilidade | ≤2h úteis (≤24h se DIB Urgency) | Viabilidade + consentimento gravado |
| **E1 — Coleta documental** | Beto + cidadão (custódia colaborativa) | Lista de docs por benefício | WhatsApp Cloud API + Drive + Bitwarden | Pasta organizada de docs brutos | 24–72h (cliente) | 100% docs do checklist obrigatório |
| **E2 — Análise Proof-First + classificação CP** | Alessandro + Claude Opus 4.7 (Project MC-DOSSIÊ) | Docs brutos + contexto biográfico | Claude.ai + Grimório Previdenciário v2 + Router-Ethics | Análise técnica + mapa de provas + árvore de requisitos + classificação CP-3/CP-5/CP-7 | 4–6h cognitivamente concentradas | Cada requisito legal vinculado a doc específico + CP confirmada por Alessandro |
| **E3 — Composição Visual Law** | Carlos (UX) + Claude.ai | Output E2 | Adobe for creativity + InDesign + Illustrator | Dossiê diagramado pré-selamento | 6–10h (escala por CP) | Aprovação Comitê de Seriedade |
| **E4 — Selamento** | Claude Code + Alessandro | Dossiê pré-selamento | Scripts bash + Acrobat Pro + ZapSign (ADR-014) + OpenTimestamps | PDF/A-3 final assinado e selado | 30–60min | SIV em 100% das páginas; hashes auditáveis |
| **E5 — Protocolo / Entrega** | Cidadão (com apoio Beto) ou advogada parceira (B2B) | Dossiê selado | Meu INSS / peticionamento | Protocolo + número de NB | 1–3h | Confirmação de protocolo gerado |
| **E6 — Watchdog** | Φ₄ Guardião automático + Beto | Protocolo | Scripts scraping Meu INSS + N8N alertas | Alertas de movimentação | Contínuo | Revisão semanal manual |
| **E7 — Resolução / Soberania** | Alessandro + cidadão | Decisão INSS | — | Confirmação deferimento OU pivot CRPS/JEF | Variável (35–60d média BEPS 2025) | Cidadão ciente da próxima etapa |

**Detalhamento da E2 expandida (classificação CP).** A E2 produz, além do mapa de provas e da árvore de requisitos, a classificação obrigatória do dossiê em um dos três modelos CP, segundo critérios documentados:

- **CP-3** se todos os seguintes forem verdadeiros: (i) caso urbano sem indicador de pendência CNIS; (ii) requisitos cumpridos sem necessidade de prova material expandida; (iii) sem retroação de DIB; (iv) sem justificação administrativa.
- **CP-5** se qualquer dos seguintes for verdadeiro: (i) caso rural; (ii) atividade especial; (iii) caso híbrido (urbano + rural); (iv) retroação de DIC; (v) justificação administrativa; (vi) qualquer cruzamento fato↔testemunho complexo.
- **CP-7** se: caso destinado a CRPS ou JEF (recursal/judicial), independentemente das demais variáveis.

**Override humano:** Alessandro confirma a classificação antes da entrada em E3. A automação `validador_classificacao_cp.sh` (F.3) verifica se os critérios documentados batem com a classificação proposta; em caso de divergência, escala para revisão humana.

## F.2 Sprint 48h interno (E0 → E4)

A promessa "48h" do MC é **sprint interno** — não promessa de concessão pelo INSS. Compreensão regulatória obrigatória: o MC nunca prometeu prazo de análise INSS, porque tal prazo está fora da governança do MC e prometê-lo seria captação fraudulenta de cliente.

O sprint 48h opera assim:

| Janela | Etapa | Tempo nominal |
|---|---|---|
| Janela 0 | E0 (intake) | ≤2h úteis |
| Janela 1 | E1 (coleta) | 24–72h, dependente do cidadão |
| Janela 2 | E2 (análise) | 4–6h interno MC |
| Janela 3 | E3 (composição) | 6–10h interno MC |
| Janela 4 | E4 (selamento) | 30–60min interno MC |

**Início do contador "48h" oficial:** somente quando documentação está 100% completa (saída de E1 com checklist 100%). A partir desse marco, E2 + E3 + E4 ≤ 48h interno MC. Antes desse marco, o sprint não está rodando — está aguardando o cidadão.

**Comunicação inviolável (Firewall OAB cruzando comunicação comercial):** nunca prometer "concessão em 48h", nunca prometer "prazo de análise INSS de X dias", nunca afirmar que o MC tem qualquer poder de acelerar o INSS. O sprint 48h é compromisso de qualidade interna; o resultado externo (decisão administrativa) é sempre soberania do INSS.

## F.3 Automações obrigatórias (Claude Code)

A produção em escala (centenas, milhares, dezenas de milhares de dossiês) só é viável com camada robusta de automação validada por scripts auditáveis. Lista de scripts obrigatórios sob responsabilidade do Igor (Claude Code CLI), nominais e funcionais — não escritos prontos aqui (decisão arquitetural: a PARTE 2 documenta o escopo; implementação ocorre em PR separado com revisão de Alessandro):

**Scripts de selamento e integridade:**

- `hash_sha256_por_pagina.sh` — calcula hash individual por página + hash agregado da concatenação ordenada; insere como XMP no PDF/A-3 e exporta `.json` paralelo.
- `naming_convention_enforcement.sh` — valida nome de arquivo no formato `MC-DOSSIE-SELADO-YYYY-CODIGO-vX_X.pdf`. Bloqueia commit fora do padrão.
- `checklist_selamento.sh` — executa checklist de selamento (10 itens definidos na PARTE 3) e retorna `PASS` ou `FAIL` com lista de pendências.
- `merge_pdfs_com_bookmarks.sh` — combina PDFs intermediários em PDF/A-3 final preservando bookmarks aninhados por constelação.
- `gerador_qr_verificacao.sh` — gera QR de verificação que aponta para hash + OpenTimestamps record; impresso na contracapa.
- `validador_siv_todas_paginas.sh` — verifica que SIV está presente em 100% das páginas. Bloqueia selamento se houver página sem SIV.
- `audit_trail_json_versionado.sh` — gera audit trail JSON da chain of custody Três Estados (F.4), versionado por hash.

**Scripts de classificação e validação da constelação:**

- `validador_classificacao_cp.sh` — recebe inputs do E2 e verifica se a CP escolhida (3/5/7) bate com os critérios documentados em F.1. Em caso de divergência, escala para Alessandro.
- `gerador_anchors_pdf.sh` — cria named destinations automáticos para cada nó de cada constelação (`#doc-cert-1949`, `#norma-art48-3`, etc.) e suas referências cruzadas. Output: PDF/A-3 com malha hiperlinkada da Camada 2 funcional, validada digital e impressa.
- `validador_camada3.sh` — verifica que a Síntese de Atendimento (Camada 3) não contém adjetivação interpretativa nem termos vedados ("despacho", "decisão recomendada", "concessão", "deferimento"). Bloqueia selamento se detectar.
- `validador_pei_mc.sh` — verifica se o dossiê está pronto para escalação em qualquer dos 5 níveis do PEI-MC (Plano de Escalação por Indeferimento) — acionável imediatamente após indeferimento administrativo, transitando o caso para palco CRPS sem retrabalho.

Cada script gera log próprio em formato auditável. O `audit_trail_json_versionado.sh` consolida os logs e produz a chain of custody final, anexada como prova de processo correto à governança interna.

## F.4 Three Stages of Custody (operacional, vinculado a ADR-009b)

A custódia documental do MC opera em três estágios formais, cada um com regras rígidas de titularidade, retenção e transição:

| Estágio | Titular dos dados | Custodiante | Prazo de retenção | Conteúdo |
|---|---|---|---|---|
| **S1 — Intermediário** | Cidadão | MC | 30–60 dias | Documentos brutos, áudios, fotos, gov.br session tokens |
| **S2 — Consolidado** | Cidadão | MC apaga em D+7 da entrega | 7 dias após entrega do dossiê selado ao cidadão | Dossiê selado + audit trail |
| **S3 — Probatório** | Escritório parceiro (advogada) | Escritório (não MC) | 10 anos (CED-OAB) | Cópia probatória do dossiê para defesa em palcos CRPS/JEF/B2B |

**Transição S2 → S3:** exige Token de Transferência Assinado (TTA) pelo cidadão, registrado no audit trail e validado pelo backend. O backend deve impedir tecnicamente qualquer transição S2 → S3 sem TTA válido. Esta é a separação técnica que materializa a Firewall OAB: o MC não detém arquivo probatório ad eternum; quem detém é a advogada (escritório parceiro), no marketplace, com sua própria responsabilidade CED-OAB.

A regra "MC apaga em D+7 da entrega" é deliberada e auditável. O MC não é arquivo perpétuo de dossiês de cidadãos. O cidadão recebe seu dossiê (cópia integral, sem retenção pelo MC); a advogada parceira mantém cópia probatória sob sua governança própria. O MC retém apenas metadados não-pessoais (estatística agregada, hashes, audit trail anonimizado).

## F.5 Sinais de qualidade do workflow

Cinco sinais quantitativos auditáveis indicam saúde do workflow:

1. **Tempo total E2-E4 ≤ 18h efetivas** (cronometragem A4: dossiê completo selado em ≤18h interno MC após documentação 100% recebida). Acima de 18h, há gargalo a investigar.
2. **100% dos dossiês passam pelo Comitê de Seriedade** (D.8). Zero dossiê selado sem aprovação registrada no audit trail.
3. **100% dos dossiês têm SIV em todas as páginas.** Validador `validador_siv_todas_paginas.sh` bloqueia o selamento em caso contrário.
4. **0% dos dossiês usam jurisprudência no Painel do Analista do palco INSS.** Verificação manual no Comitê de Seriedade + validação automática a desenvolver.
5. **100% dos cidadãos recebem cópia integral do dossiê selado.** Registro de entrega no audit trail. Cidadão sem cópia integral é falha de soberania.

Esses cinco sinais compõem o painel mensal de qualidade do MC, revisado por Alessandro e reportado ao comitê interno de governança. Variação acima de 5% em qualquer sinal aciona análise de causa-raiz.

A Hierarquia D > C > V não é frase ornamental — é regra de decisão quando os cinco sinais entrarem em conflito com pressão por velocidade. Se um dossiê CP-7 não passa no Comitê de Seriedade no tempo planejado, ele não sela. Se uma automação detecta termo vedado na Camada 3, o dossiê retorna para revisão. Se a malha de Camada 2 quebra em uma âncora, o dossiê não sela. A produção em escala só funciona porque a disciplina de qualidade não é negociada.

---

═══════════════════════════════════════════════
**METADADOS — PARTE 2 de 3**
Versão: v1.3 (post-Patch GAP-7 — inserção D.8.1 Protocolo Teste Zilda-STF)
Data: 02/05/2026 (revisão pós-auditoria executiva + GAP 7)
Autores: Alessandro de Souza Neves × Claude Opus 4.7
Método: produção modular conforme MC-METAPROMPT-POP-VisualLaw v3.1 PIONEIRO;
        revisão pós MC-AUDITORIA-EXECUTIVA-Tratado-v1_0-2026-0502
Substrato: PARTE 1 + relatórios anexos (Bloco A + B + E)
Próxima parte: PARTE 3 — Três Palcos + Governança + CP-MC + PEI-MC + Tabela Visual
Status: PROVISIONAL até parecer Dra. Juliana Pereira de Melo (19/05/2026)
Hierarquia: Dignidade > Compliance > Viabilidade
Hash SHA-256: [a calcular no selamento definitivo v1.0 DIAMANTE]
═══════════════════════════════════════════════
