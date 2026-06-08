---
titulo: AP-INVENTARIO-Grimório v1.0
versao: v1.0
data: 2026-05-20
status: SELADO
executor: Claude Code DELL
mb_origem: MB-AP-002
categoria: Grimório Previdenciário
modo: Sniper · 4 filtros positivos · carimbo de conversão
hash_sha256: a-ser-computado-em-T4
---

# AP-INVENTARIO-Grimório v1.0

**20 de maio de 2026 · MB-AP-002 · Tarefa 2.1 de 8 · Code DELL executor**

**Categoria:** Grimório Previdenciário
**Modo:** Sniper · 4 filtros positivos · carimbo de conversão

---

## 1 · Sumário Executivo

| Métrica | Valor |
|---|---|
| Total arquivos varridos nesta categoria | 3 (Grimório monolítico + Changelog Jurídico + 1 capítulo verticais) |
| Ativos lógicos extraídos | 12 capítulos/seções + 1 instrumento operacional |
| **Total classificados como ouro AP** | **8** |
| 🟢 Conversão Zero | 0 |
| 🟡 Conversão Leve | 1 (Changelog Jurídico) |
| 🟠 Conversão Média | 4 (Cap 13.1, Cap 13.2, Cap 4.3, Cap 4.9) |
| 🔴 Conversão Profunda | 3 (Cap 14, Anexo B, Cap 7) |

**Top 3 ouros desta categoria (por valor estratégico AP):**

1. **Grimório Cap 13.1 — Revisões de Benefícios (filão dos retroativos)** — ticket médio R$ 30K-200K, perfeito alvo Pv. Carimbo 🟠
2. **Grimório Cap 4.9 — Pensão por Morte: as 6 teses** — alta complexidade jurídica, alta Ha. Carimbo 🟠
3. **MC-CHANGELOG-Juridico-v2.0 + estrutura Anexo F** — disciplina versionada de atualização legislativa (SLAs 48h/72h/24h+72h). Carimbo 🟡

**Localização canônica MC (referência de leitura):**
- `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` (782 KB · 3672 linhas · canônico)
- `02-ARQUITETURA/changelogs/MC-CHANGELOG-Juridico-v2_0-2026-0503.md` (43 KB)
- `02-ARQUITETURA/verticais/Comprovacao_Atividade_Rural.md` (descartado — rural não-AP)

---

## 2 · Catálogo Detalhado

### Ativo 01 — Grimório Cap 13.1 · Revisões de Benefícios (Filão dos Retroativos)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` §13.1 (linhas 299-302; 2.500 palavras) + densidade técnica em §2882-3099 |
| **Filtros atendidos** | F1 (ROI Premium ✅) + F2 (Ha exige ✅) + F3 (Reaproveitamento metodológico ✅) + F4 (Stack ❌) |
| **Carimbo de conversão** | 🟠 CONVERSÃO MÉDIA |
| **Valor estratégico AP** | Cap 13.1 catalogou as 5 teses de retroativos mais altos do sistema: (1) Vida Toda Tema 1.102/STF — **status: desfecho desfavorável em 2024 com modulação pendente** [`[CONFIRMAR FOUNDER]` situação 05/2026]; (2) Revisão do Teto EC 20/1998 + EC 41/2003; (3) Revisão do Buraco Negro (05/04/1991-31/12/1993); (4) Conversão tempo especial em comum (fator 1.4H / 1.2M, pré-EC 103); (5) DER Flexível Tema 995/STJ; (6) Aposentadoria Híbrida Tema 1007/STJ. **Ticket médio declarado pelo Grimório: R$ 30K-200K retroativos.** Em AP, esse range cai diretamente no centro da Fórmula Pv (alto ROI × alta Ha × alta Cc). |
| **Aplicação AP sugerida** | Persona A (high-net-worth empresário/profissional liberal) com benefício INSS concedido valor entre teto e teto. Ataque: revisão de cálculo + conversão especial + correção de salários de benefício. Cliente típico: empresário 65+ com aposentadoria por idade urbana concedida a teto, mas cálculo errado da RMI. Ticket Pv-AP estimado: R$ 50K-300K por caso. |
| **Esforço estimado conversão** | 4-6h (extrair 5 teses do monolítico, reescrever exemplos com persona high-net-worth, atualizar Tema 1.102/STF para situação 05/2026 pós-modulação) |
| **Dependências** | Anexo B (Base Legal), Anexo F (Changelog Jurídico — disciplina de atualização) |

**Síntese:** Este é o **ouro AP de maior prioridade** detectado no Grimório. As 5 teses já estão mapeadas com base legal e Temas STJ/STF. Em MC esse capítulo serve como passarela para advogado (Score >70 = handoff); em AP, **vira atendimento direto sob Pv sem firewall OAB** (decisão founder selada). Conversão média porque exige re-narrativa: exemplos Zilda/João viram empresário/profissional liberal; valores retroativos sobem para faixa AP; texto "filão dos retroativos para vulneráveis" vira "otimização patrimonial previdenciária".

---

### Ativo 02 — Grimório Cap 13.2 · Defesa de Benefícios (Pente-Fino, Cessação, Watchdog)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` §13.2 (linhas 303; 2.500 palavras) |
| **Filtros atendidos** | F1 ✅ + F2 ✅ + F3 ✅ + F4 ❌ |
| **Carimbo de conversão** | 🟠 CONVERSÃO MÉDIA |
| **Valor estratégico AP** | Cap 13.2 mapeia 4 frentes defensivas: (1) pente-fino ativo (revisão massiva benefícios por incapacidade); (2) cessação indevida (INSS corta sem direito material); (3) Prova de Vida e biometria (barreiras); (4) suspensão por falta de recadastramento. Para AP, **a frente (2) "cessação indevida" é ouro puro** quando o cliente é aposentado com benefício alto cortado por revisão administrativa. Watchdog proativo via MCP transforma defesa reativa em contrato de monitoramento contínuo — base perfeita para produto "Concierge Previdenciário" AP recorrente. |
| **Aplicação AP sugerida** | Persona B (executiva 55+ aposentada por incapacidade com benefício >R$ 8K) recebe carta de cessação pós-pente-fino. AP atua em 48h: dossiê probatório + recurso CRPS + medida liminar se necessário. Pv calibrado para urgência (Mc baixo, Ha alta, ROI = 12-36 meses de benefício preservado). |
| **Esforço estimado conversão** | 3-5h (extrair §13.2, eliminar referências a "vulnerável", incorporar Watchdog como subscription premium recorrente AP) |
| **Dependências** | ADR-009b (3 estados guarda dossiê), MCP (Cap 9 Grimório) |

**Síntese:** Frente defensiva é **mais escalável para AP** que a ofensiva (Ativo 01), porque o universo de aposentados de alta renda em risco de cessação é grande e a sensação de urgência é máxima. Carimbo médio porque texto MC fala em "Watchdog proativo para vulneráveis" — em AP isso vira "blindagem previdenciária 24/7 para patrimônio de aposentadoria".

---

### Ativo 03 — Grimório Cap 4.3 · Aposentadoria Especial (Insalubridade/Periculosidade)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` §4.3 (linha 133) + densidade em §1773-1799 |
| **Filtros atendidos** | F1 ✅ + F2 ✅ + F3 ✅ + F4 ❌ |
| **Carimbo de conversão** | 🟠 CONVERSÃO MÉDIA |
| **Valor estratégico AP** | A aposentadoria especial é **o benefício mais judicializado do sistema** (94% via judicial). Para perfis AP (médicos, engenheiros, dentistas, técnicos industriais de empresas grandes com exposição comprovada), o ROI é altíssimo: regra geral 25 anos de contribuição com fator de conversão para tempo comum 1.4 (homem) / 1.2 (mulher), abrindo possibilidade de aposentadoria antecipada com benefício no teto ou próximo. Adicionar ADI 6.309/STF como variável de risco (idade mínima pós-EC 103 contestada). |
| **Aplicação AP sugerida** | Persona A — médico anestesista 55 anos, 30 anos de exposição comprovada via PPP. Caso: enquadramento especial + conversão fator 1.4 + análise multivínculos pré-1995 + impugnação de exigência INSS. Pv-AP: R$ 30K-120K. |
| **Esforço estimado conversão** | 3-4h (extrair §4.3 + §1773-1799, adaptar exemplos para perfil profissional liberal alta renda) |
| **Dependências** | Conversão tempo especial integra Ativo 01 (Cap 13.1) — pode ser bundle |

**Síntese:** Aposentadoria especial é **encruzilhada de Cc × Ha máximas**. Em MC, Score 70-95 = handoff advogado. Em AP, Code Alessandro atende direto, com Ha multiplicador 6-8x (insider INSS + perícias técnicas + sistema). Carimbo médio porque a re-narrativa muda o público mas mantém 95% do núcleo técnico.

---

### Ativo 04 — Grimório Cap 4.9 · Pensão por Morte: As 6 Teses Judiciais

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` §4.9 (linhas 145-146; 1.800 palavras) |
| **Filtros atendidos** | F1 ✅ + F2 ✅ + F3 ✅ + F4 ❌ |
| **Carimbo de conversão** | 🟠 CONVERSÃO MÉDIA |
| **Valor estratégico AP** | Cap 4.9 cataloga 6 teses fortes de pensão por morte: (1) união estável post mortem; (2) ex-cônjuge com alimentos; (3) flexibilização dos 2 anos casamento/união estável; (4) dependente PcD não reconhecido; (5) óbito pretérito com regra errada (Súmula 340/STJ — tempus regit actum); (6) cessação indevida aos 18 anos (Súmula 37/TNU — limite real 21). Linha do tempo legislativa (1991-2015 / 2015-2019 / 2019-presente) já mapeada. Para AP: **viúvas/dependentes de empresários de alta renda** com pensão pós-EC 103/2019 sob cota reduzida 60% + 10% por dependente — disputa por enquadramento na regra anterior (100%) com retroativos significativos. |
| **Aplicação AP sugerida** | Persona B — viúva 58 anos de empresário com falecimento em 2019 (anterior à EC 103). INSS aplicou regra de 2019 (60%) quando a regra correta era 100%. AP: tese 5 (óbito pretérito com regra errada) + retroativo de até 5 anos. Pv-AP: R$ 80K-400K. |
| **Esforço estimado conversão** | 3-5h (extrair §4.9, adaptar exemplos, incorporar EC 103 acumulação com aposentadoria própria — §2043 do Grimório) |
| **Dependências** | Anexo B (Base Legal: Súmulas 340/37/TNU 63) |

**Síntese:** Pensão por morte com regra errada é **o caso clássico do insider INSS** — Alessandro vê tempus regit actum violado todo dia. Em AP, vira protocolo concierge para famílias de alta renda em luto, com SLA agressivo (90 dias para retroativo integral é gatilho de urgência). Carimbo médio.

---

### Ativo 05 — Grimório Cap 14 · Riscos, Exceções e a Alavanca Invisível

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` §14 (linhas 307-318; 7.000 palavras) |
| **Filtros atendidos** | F1 ❌ + F2 ✅ + F3 ✅ + F4 ❌ |
| **Carimbo de conversão** | 🔴 CONVERSÃO PROFUNDA |
| **Valor estratégico AP** | §14.4 — **Radar de Mudanças Regulatórias Ativas** — é metodologia transferível direta: ADIs no STF, Tema 1.124/STJ, mecanismo de atualização via Changelog. Cap 14.1 (Riscos Regulatórios e Mitigações) menciona Atestmed Portaria 83/2025 expiração abr/2026 — risco ativo. Para AP: estabelecer protocolo de monitoramento legislativo customizado para clientes premium ("Inteligência Previdenciária Estratégica" como produto de assinatura). §14.2 7 exceções e §14.3 alavanca invisível (instruir milhares para gerar evidência sistêmica) — **não aplicável AP** (lógica de escala vulneráveis). |
| **Aplicação AP sugerida** | Backoffice AP — radar continuamente atualizado de mudanças que afetam grandes contribuintes, aposentados teto+, executivos PJ/PF híbrido, regime próprio servidores ex-ministros. Não vai para o cliente; é input operacional Code Alessandro. |
| **Esforço estimado conversão** | 8-12h (preservar apenas §14.4 + parte de §14.1, descartar §14.2-14.3-14.5, refundar radar com foco em pulsos para alta renda — exemplo: ADI sobre RPPS executivos, ADI sobre RPC, súmulas TST sobre PJ/CLT-PF) |
| **Dependências** | Changelog Jurídico (Ativo 11), Anexo B |

**Síntese:** A re-narrativa é grande mas o núcleo metodológico (radar versionado + SLAs por tipo de mudança) é valioso. Carimbo profundo se justifica pelo valor estratégico de longo prazo (não pode ter cliente premium sem inteligência regulatória ativa).

---

### Ativo 06 — Grimório Anexo B · Base Legal Consolidada

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` Anexo B (linhas 327-329; 2.000 palavras) |
| **Filtros atendidos** | F1 ❌ + F2 ✅ + F3 ✅ + F4 ❌ |
| **Carimbo de conversão** | 🟡 CONVERSÃO LEVE |
| **Valor estratégico AP** | Lista consolidada de legislação previdenciária aplicável: Lei 8.213/91, EC 103/2019, Decreto 3.048/99, IN 128/PRES/INSS, Súmulas STJ/STF/TNU vinculantes (Temas 250/995/1.007/1.037/1.124), portarias recentes (10/2025, 83/2025, 1.870/2025), Leis 15.265/2025 e 15.077/2024, Ofício Circular 63/2025. **Base universal** — vale igual para vulneráveis e para alta renda. |
| **Aplicação AP sugerida** | Material de consulta interna AP. Não vai para o cliente (é técnico demais). Vira "Base Legal AP" no Cérebro 2 do projeto. |
| **Esforço estimado conversão** | 1-2h (copiar e adicionar legislação adicional relevante para AP: RPPS Lei 8.112/90 art. 40 CF, EC 41/2003, EC 47/2005, LC 152/2015, regimes próprios estaduais/municipais, complementar RPC EC 103, Lei 12.618/2012) |
| **Dependências** | Nenhuma |

**Síntese:** Carimbo leve porque é compilação legal — só agregar fontes adicionais relevantes a AP (que MC não cobre porque está fora do escopo hipervulneráveis). Investimento baixo, valor alto.

---

### Ativo 07 — Grimório Anexo F · Estrutura do Changelog Jurídico

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` Anexo F (linhas 343-346; 2.000 palavras) |
| **Filtros atendidos** | F1 ❌ + F2 ✅ + F3 ✅ + F4 ❌ |
| **Carimbo de conversão** | 🟡 CONVERSÃO LEVE |
| **Valor estratégico AP** | Especificação operacional do Changelog Jurídico: formato versionado, SLAs por tipo de mudança (STF 48h, Portarias 72h, MPs 24h triagem + 72h aplicação), cadeia de validação com advogado credenciado, integração com Grimório. **Disciplina operacional pura, reutilizável independente de persona.** |
| **Aplicação AP sugerida** | Adotar como `AP-CHANGELOG-Juridico-v1_0.md` espelhando estrutura, mas com itens curados para alta renda. SLAs idênticos. Validação externa: Dra. Juliana Melo (mesma parceira MC, OAB-GO 38.662) ou advogado AP-específico. |
| **Esforço estimado conversão** | 1h (estrutura copiada; conteúdo inicial = primeira leva de mudanças relevantes para alta renda) |
| **Dependências** | Ativo 11 (Changelog v2.0 atual) |

**Síntese:** Carimbo leve — copia-cola da especificação operacional + curadoria de conteúdo AP.

---

### Ativo 08 — Grimório Cap 7 · Router-Ethics como Camada Algorítmica

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` §7 (linhas 197-211; 9.000 palavras) |
| **Filtros atendidos** | F1 ❌ + F2 ✅ + F3 ✅ + F4 ❌ |
| **Carimbo de conversão** | 🔴 CONVERSÃO PROFUNDA |
| **Valor estratégico AP** | Capítulo introduz a arquitetura Router-Ethics 10.0 (105 nós) — base do motor de decisão MC. **Para AP, o conceito de motor de decisão é transferível, mas os pesos (40% R + 30% P + 30% A) e thresholds (39 e 70) precisam ser recalibrados.** O firewall OAB (R Bloco) **não é aplicável AP** por decisão founder selada. O Bloco P (Profundidade da Fricção) é diretamente reaproveitável como insumo para Cc da Pv. Bloco A (Amuleto Fênix) — não aplicável AP (clientes não têm vulnerabilidade extrema dignidade-crítica). |
| **Aplicação AP sugerida** | Refundar como "Router-Pv-AP": motor de qualificação de caso AP que alimenta Cc/Ha/ROI/Mc da Fórmula Pv. Não decide autonomia × handoff (em AP é sempre Code Alessandro direto); decide priorização e calibração de pricing. |
| **Esforço estimado conversão** | 10-15h (descartar Bloco R OAB-firewall, reescrever Bloco A para risco patrimonial/reputacional do cliente, recalibrar fórmula → Pv-input) |
| **Dependências** | Cobre-se em T2.2 (Inventário Router-Ethics) com profundidade maior — esse ativo é apontador para lá. |

**Síntese:** Carimbo profundo porque conceito é poderoso mas a calibração precisa ser refeita do zero para população AP. **Recomendação:** tratar como referência durante T2.2 e descartar daqui como ativo separado se o T2.2 já o contemplar.

---

### Ativo 09 — Grimório Cap 12 · Unit Economics (Parcial)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` §12.1 (linhas 287-296; 7.500 palavras) |
| **Filtros atendidos** | F1 ✅ + F2 ❌ + F3 ✅ + F4 ❌ |
| **Carimbo de conversão** | 🔴 CONVERSÃO PROFUNDA |
| **Valor estratégico AP** | §12.1 detalha 5 modelos de receita MC: Low-Ticket (R$ 97-297), Success Fee, Assinatura Guardião, Lead Fee B2B, B2G eficiência. **Para AP, o pricing é Pv (decisão selada).** Mas os modelos Success Fee (ROI-sharing 25% revisão) e Lead Fee B2B (marketplace ético) **NÃO se aplicam AP** porque AP NÃO faz marketplace de advogados e NÃO compartilha success fee. **Resta aproveitável:** estrutura de COGS (R$ 7,50/operação Human API), margem bruta 80-90%, payback < 30 dias — mas todos esses números são para vulneráveis, recalibração total exigida. |
| **Aplicação AP sugerida** | Descartar quase tudo de §12.1-12.5. Aproveitar apenas a **estrutura conceitual** (CAC, COGS, margem bruta, payback) como template do AP-MODELO-Financeiro-v1_0. Números são todos diferentes (CAC AP via referência boca-a-boca high-net-worth, COGS via Code Alessandro direto sem Human API). |
| **Esforço estimado conversão** | 6-10h (re-modelagem completa baseada em Pv) |
| **Dependências** | AP-METODO-FormulaPv-Operacional-v1_0 (já produzido em MB-AP-001) |

**Síntese:** Carimbo profundo. **Recomendação alternativa:** descartar como ativo separado; tratar como input de leitura para o documento financeiro AP a ser produzido em sprint posterior. Não preserva esforço de re-conversão.

---

### Ativo 10 — Grimório Cap 9 · MCP como Cristal de Memória Persistente

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` §9 (linhas 231-240; 5.500 palavras) |
| **Filtros atendidos** | F2 ✅ + F3 ✅ + F4 ✅ |
| **Carimbo de conversão** | 🟡 CONVERSÃO LEVE |
| **Valor estratégico AP** | Especificação arquitetural do MCP em 4 Tiers (Núcleo Identitário / Contexto Atual / Documentação Centralizada / Log de Auditoria), stack GCS+Firestore+BigQuery+Cloud KMS, MCPs WhatsApp+Postgres+Playwright+Google Vision OCR, performance <100ms, custo R$ 0,05/usuário/mês. **Infraestrutura reaproveitável quase sem adaptação** — só trocar nomenclatura de pasta e tag "cumpadre" para tag "mandante". |
| **Aplicação AP sugerida** | Adotar arquitetura MCP idêntica para Cérebro AP. Cliente AP tem MCP próprio com dados patrimoniais previdenciários, PPP, CNIS, declaração IR, contratos PJ, etc. Custo marginal mínimo (subseparação no mesmo stack MC). |
| **Esforço estimado conversão** | 2h (criação de namespace separado MC × AP no mesmo stack) |
| **Dependências** | ADR-008 (Stack ferramentas) — cobre-se em T2.4 |

**Síntese:** Carimbo leve. Excelente reaproveitamento técnico. **Recomendação:** detalhar implementação em T2.4 (ADRs & Specs) e T2.5 (Stack & Infra) — este ativo aqui é apontador.

---

### Ativo 11 — MC-CHANGELOG-Juridico-v2.0 (instrumento operacional vivo)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/changelogs/MC-CHANGELOG-Juridico-v2_0-2026-0503.md` (43 KB · 03/05/2026 · validador externo Dra. Juliana Melo OAB-GO 38.662) |
| **Filtros atendidos** | F2 ✅ + F3 ✅ + F4 ❌ |
| **Carimbo de conversão** | 🟡 CONVERSÃO LEVE |
| **Valor estratégico AP** | Instrumento operacional vivo do MC: Entradas v3.278-v3.290 (out/2025-mai/2026), seções 4.6/4.7/4.8 sobre decisões internas de compliance, parceria jurídica B2B, LAI. **Estrutura, SLAs e disciplina = transferíveis.** Conteúdo selecionado é parcialmente aplicável (legislação previdenciária base é comum AP×MC; portarias Atestmed/ACTs são mais MC). |
| **Aplicação AP sugerida** | Criar `AP-CHANGELOG-Juridico-v1_0.md` espelhando o esquema. Curar primeiras entradas: Tema 1.102/STF (Vida Toda — situação 05/2026), ADI 6.309 (aposentadoria especial), Tema 1.124/STJ (interesse de agir pré-requerimento), súmulas TST PJ/CLT, EC 103 acumulação benefícios. Validador externo: usar mesma Dra. Juliana Melo (OAB-GO 38.662) ou advogado AP-específico [`[CONFIRMAR FOUNDER]` se Juliana atende AP ou se contrata-se novo parceiro]. |
| **Esforço estimado conversão** | 2-3h (cópia estrutural + curadoria conteúdo AP) |
| **Dependências** | Ativo 06 (Anexo B Base Legal), Ativo 07 (Anexo F Estrutura) |

**Síntese:** Carimbo leve. **Ativo de menor esforço por maior valor** desta categoria — ferramenta pronta, só re-curar conteúdo. Implementação prioridade alta (sem changelog, AP fica vulnerável a mudanças legislativas que afetam clientes premium).

---

## 3 · Ativos descartados com nota

| Ativo | Razão do descarte |
|---|---|
| Cap 1 — Desigualdade Invisível | Narrativa hipervulneráveis; ROI Premium ❌ |
| Cap 2 — Personas Excluídos (Zilda, João, Maria, Francisco, Ana Luíza, Carlos, José Carlos) | Target oposto AP (high-net-worth) — todas personas são vulneráveis |
| Cap 3 — Universo Previdenciário Brasileiro (BEPS) | Macrodados informativos; F1 ❌, F2 ❌, não acionável AP |
| Cap 4.1 (Aposentadoria por Idade rural/urbana padrão) | Benefício default; baixo Cc para AP |
| Cap 4.4 (Rural / Segurado Especial) | Target oposto AP |
| Cap 4.5 / 4.6 (BPC Idoso / BPC PcD) | Assistencial, renda <¼ SM — incompatível com AP |
| Cap 4.7 / 4.8 (Auxílio-doença / Invalidez) | Mediano para AP; clientes alta renda raramente acessam (preferem privado) |
| Cap 4.10 (Salário-Maternidade) | Mediano; tese ADIs 2.110/2.111 vale para todas as personas mas ticket é baixo |
| Cap 4.11 (Auxílio-Reclusão) | Não aplicável AP |
| Cap 4.12 (Auxílio-Acidente) | Possível para alguns perfis AP — mas embarcado no Ativo 03 (especial) |
| Cap 4.13 (Seguro Defeso) | Não aplicável AP |
| Cap 5 — Comprovação Rural | Target oposto AP |
| Cap 6 — Access-First Paradigma | Filosofia para vulneráveis; AP usa lógica de ROI percebido |
| Cap 8 — Human API (3 tiers Estagiário/Anjo/Advogado) | Modelo de escala vulneráveis; AP é concierge 1:1 founder-direct |
| Cap 10 — 8 Passarelas (algumas relevantes embutidas em outros ativos) | Lógica de passarela é genérica MC; em AP, "passarela" é entre serviços previdenciário + tributário + sucessório (lógica diferente) |
| Cap 11 — Evento Cascata (personas vulneráveis) | Casos centrais são todos hipervulneráveis |
| Anexo A — Glossário | Comum MC×AP — pode ser adotado direto, mas não vale catalogar como ativo separado |
| Anexo C — Tabelas BEPS | Útil como referência interna, baixo ROI catalogar |
| Anexo D — Diagramas | Específicos MC (funil RPA, mapa passarelas 9×9) — não AP |
| Anexo E — Simulações Router-Ethics | Casos vulneráveis (Zilda/João/etc) — embutido no Ativo 08 e T2.2 |
| Epílogo — Carta ao Vulnerável | Narrativa MC, não aplicável AP |
| `02-ARQUITETURA/verticais/Comprovacao_Atividade_Rural.md` | Vertical rural, target oposto AP |

---

## 4 · Lacunas Detectadas (input para próximas cunhagens AP)

| Lacuna | Por que importa para AP |
|---|---|
| **Planejamento previdenciário sucessório para alta renda** | Mencionado en passant em §10.7; merece capítulo dedicado AP — pensão por morte como veículo de proteção patrimonial intergeracional |
| **RPPS Servidores (Lei 8.112/90, EC 41/2003, EC 47/2005)** | Grimório foca RGPS; AP terá clientes ex-servidores públicos federais/estaduais/municipais de alto escalão (juízes, procuradores, auditores TCU) com regras próprias e revisões específicas |
| **RPC Previdência Complementar Pública (Lei 12.618/2012)** | Funpresp e similares — relevante para AP com clientes pós-reforma 2013 |
| **Previdência complementar privada (PGBL/VGBL)** | Otimização tributária previdenciária — ZERO no Grimório |
| **Aposentadoria de Magistrados (LC 35/79, EC 88/2015)** | Regra própria pré-EC 103; AP atende este perfil |
| **Aposentadoria militar (Lei 6.880/80 + reforma 13.954/2019)** | Sistema separado RGPS; AP pode atender oficiais reformados |
| **Servidores diplomáticos / vínculos internacionais** | Acordos bilaterais previdenciários; mencionado §14.2.6 como exceção genérica, sem profundidade |
| **Tributação previdenciária para grandes contribuintes (CPRB, Cofins-Previdência, contribuição patronal majorada)** | Empresário-cliente quer otimização da contribuição empresarial — não está no Grimório |
| **Disputas de teto previdenciário e Revisão do Buraco Negro com retroativos altos** | Mencionado em §13.1 mas sem profundidade específica para casos teto+ |
| **Proteção contra autuação fiscal previdenciária (Receita Federal × empresário)** | AP atende empresário que recebe NFLD ou CFL — não há protocolo MC |
| **Revisão de aposentadoria de juízes/promotores aposentados com proventos integrais** | Regra de transição específica EC 88/2015 — fora do escopo MC |
| **Direito previdenciário internacional (acordos com Portugal, Itália, Espanha, etc.)** | Profissional liberal que trabalhou no exterior — não no Grimório |

---

## 5 · Recomendações Operacionais para Sprint AP

1. **Prioridade 1 (cunhagem em 30 dias):** Ativos 01, 02, 04, 11 — geram entregáveis AP imediatos (4 documentos jurídico-operacionais).
2. **Prioridade 2 (cunhagem em 60 dias):** Ativos 03, 06, 07 — solidificam base legal e disciplina operacional.
3. **Prioridade 3 (sprint dedicada):** Ativos 05, 08, 09, 10 — exigem refundação conceitual; melhor tratá-los nos T2.2/T2.4/T2.5 desta missão e nos sprints subsequentes.
4. **Lacunas críticas a cunhar do zero (não cobertas pelo Grimório):** RPPS Servidores, Previdência Complementar Privada, Aposentadoria Magistrados, Tributação Previdenciária Empresarial.

---

**AP-INVENTARIO-Grimório v1.0 · SELADO 20/05/2026**
Executor: Claude Code DELL · MB-AP-002 · Tarefa 2.1 de 8
∞
