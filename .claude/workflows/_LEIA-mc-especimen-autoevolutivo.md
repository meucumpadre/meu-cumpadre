# _LEIA — Motor Espécimen Auto-Evolutivo (#45 + #46 + #47)

**v0.1 PROVISIONAL · INSTALADO (PR #14) · cloud-portable (Template-Mestre inline) · 2026-06-02**
**Gate humano pendente: Founder (derivações) + Dra. Juliana (PII/OAB/LGPD · R3).**

Operacionaliza o blueprint `MC-SISTEMA-Template-Especimen-AutoEvolutivo-v1_0-PROVISIONAL-2026-0602.md` num **workflow executável** da Workflow tool, no mesmo molde do `squad-r3` (script + skill + _LEIA). É a máquina que aprende com cada caso: cada espécimen nasce do Template-Mestre, devolve melhorias, e o template sobe de versão — testado contra o golden fixture Hib001 para não quebrar o que já funciona.

---

## Os 3 arquivos (instalados em `.claude/`, cloud-portable)

| Arquivo | Papel | Molde-fonte |
|---|---|---|
| `mc-especimen-autoevolutivo.workflow.js` | Script da Workflow tool · 5 fases · `meta` literal + FIXTURE Hib001 + `agent(prompt,{schema})` Proof-First + STOP no gate | `squad-r3-pipeline.js` |
| `SKILL-mc-especimen-autoevolutivo.md` | Wrapper `/mc-especimen-autoevolutivo` que chama o `scriptPath` (com/sem args) | `.claude/skills/squad-r3/SKILL.md` |
| `_LEIA-mc-especimen-autoevolutivo.md` | Este arquivo — escopo, como rodar, limites, tabela de lastro | `_LEIA-squad-r3.md` |

> **Instalado (PR #14) + cloud-portable.** Os arquivos vivem em `.claude/workflows/` (o `.js` e este `_LEIA`) e `.claude/skills/mc-especimen-autoevolutivo/SKILL.md`. O `scriptPath` é **relativo à raiz do repo** e o **Template-Mestre está inline** no `.js`, então o motor resolve em sessão **local E cloud** (o C1 `G:\…\Documentação` não é alcançável no sandbox cloud). A **fonte editável** do Template-Mestre segue no C1; re-inlinar quando ela mudar. *(Selagem PROVISIONAL→SELADO continua pendente: gate Founder + Dra. Juliana R3.)*

---

## Como rodar + o que esperar

- **Sem args** → roda o **golden fixture Hib001** (de-identificado) como golden master. Esperado: a regressão deve dar **`PASSOU`** (o template v1.0 resolve Hib001); o diff/upgrade tende a ser pequeno (Hib001 já é a baseline). Serve para validar que o motor não regrediu.
- **Com args** `{ caso, especimen_pasta }` → roda um espécimen novo, **já de-identificado**. Esperado: entradas Trilha B → triagem ouro/meio-termo/pirita → diff vs template → regressão Hib001 → proposta vN→vN+1 + nota de catálogo.

O motor **para no gate** e devolve (sem escrever nada):

```
{ caso, versao_base, gate,
  diff, proposta_upgrade, resultado_regressao_Hib001, pendencias_R3,
  rastreabilidade: { fase_0_instancia, fase_1_captura, fase_2_triagem, fase_4_nota_catalogo } }
```

> ⚠️ **Rodar é opt-in e gasta agentes.** Este pacote foi **apenas autorado** — ainda não foi executado.

### As 5 fases ↔ blueprint

| Fase (script) | Blueprint | Faz |
|---|---|---|
| 0 · Instanciar *(Explore)* | Parte 1 / §4.1 | Herda do Template-Mestre vN: ficha 10 campos canônicos + C0 (DNA) + C2 (vertical) |
| 1 · Captura *(Explore)* | Parte 2 (#45) | Gatilho: cada decisão tática A → 1 entrada Trilha B · **aborta se detectar PII** |
| 2 · EngReversa | Parte 3 (#46) | 5 passos + triagem ouro/meio-termo/pirita + recalibragem estética + costura vocabular |
| 3 · Diff+Regressão | Parte 4 / §4.4 | DIFF vs template **+ regressão no golden fixture Hib001** (piso de qualidade) |
| 4 · Upgrade | §4.1 / §7.2 | Proposta vN→vN+1 (só o que passou §4.2 + regressão) + nota de catálogo v(M)→v(M+1) |

---

## Limites (governança dura · fail-closed)

- **NÃO sela · NÃO escreve no Vault · NÃO ingere PII.** Devolve rascunhos.
- **Firewall OAB:** opera só no método/Zona Verde; PII vive no C1 sob gate R3 (Dra. Juliana); atividade-fim (tese/petição) é 100% da advogada parceira.
- **D > C > V** lexicográfico · **Proof-First** (fonte:linha; sem lastro → `[GATE]`).
- **Regressão é piso:** `REPROVADO` em Hib001 → upgrade não sobe (volta ao staging), mesmo parecendo melhora.
- Para estressar política/preço/cláusula do MC use `/squad-r3` (compliance R3), não este motor.

---

## TABELA DE LASTRO — as 5 lacunas 🟡 fechadas na FASE 0

A guia C3.1 do blueprint não tinha as fontes; aqui estão. Cada lacuna: **inferência 🟡 do blueprint → o que a fonte REAL diz** (`arquivo:linha`). Onde não há fonte: **NÃO localizado** (Proof-First, sem invenção).

### 🟡 1 — Os 10 campos da ficha #45

- **Inferência do blueprint (§1.1):** 10 campos propostos (ID+Anchor · Vertical+Benefício · Perfil de vulnerabilidade · Histórico de fricção · Vetor 4D-TDIG · Trilha A · Trilha B · Proof-First · Rota+Tier+Firewall · Desfecho+Templates+Métricas).
- **Fonte REAL** — `C0-05 — MC-PRINCIPIO-45-EspecimenComoMetodo:74-87`, "Estrutura do espécimen diamantado (catalogação obrigatória)", 10 itens:
  1. Identificação (código, cliente pseudônimo canônico, vertical)
  2. Quadro factual verificado (dados primários)
  3. Vetor 4D-TDIG calibrado (espaço · tempo · alvo · precisão semântica)
  4. Trilha A em produção/concluída (decisões táticas registradas)
  5. Pedacinhos de diamante extraídos (lista numerada · Trilha B)
  6. Conexões cross-espécimens
  7. Templates reutilizáveis gerados (peças, scripts, protocolos)
  8. Princípios cunhados a partir deste espécimen
  9. ADRs nascidos ou impactados
  10. Status atual + próximos gates
- **Confirmação empírica:** `C1-17 — Catálogo:41-247` aplica essa estrutura nos 6 espécimens reais (Identificação / Vetor 4D-TDIG / Pedacinhos de diamante / Status).
- **Veredito:** a proposta §1.1 era plausível mas **não é a estrutura canônica**. O motor usa a canônica do #45 (a Fase 0 é instruída a preferir o #45, não os campos 🟡 §1.1).

### 🟡 2 — Semântica do 4D-TDIG

- **Inferência do blueprint (§1.3):** X = Vertical · Y = Complexidade técnica · Z = Profundidade de vulnerabilidade (IPH) · T = tempo · alvo = benefício · precisão = C_conf (6 componentes).
- **Fonte REAL** — `C0-03 — MC-DOUTRINA-EIS:142-157`. 4D-TDIG = **"Trajetória de Dignidade Integral em Grau 4D"** (recalibrado do "4D-BIT" do arquivo Gemini · `C0-06 — Princípio #46:77`). Estrutura real:
  - **X · Y · Z (espaço-alvo)** = localização do cidadão hipervulnerável **+** identificação do agente predador (CRAS · CEP · NB · CID · empresa empregadora · órgão público)
  - **T (tempo)** = janela milimétrica de vulnerabilidade (DER · DCB · janela de recurso · gate procedural · ato externo)
  - **P (precisão semântica)** = "uma palavra muda tudo" — enquadramento técnico-jurídico (CID exato · perfil contributivo · subsunção normativa · linguagem calibrada Zilda-STF)
- **Confirmação:** `C0-07 — Princípio #47:53-58` (matriz 4D-TDIG: T · P · XYZ) + os 6 espécimens do `C1-17` (cada um traz "Vetor 4D-TDIG calibrado: XYZ / T / P").
- **Veredito:** inferência §1.3 **ERRADA**. Não são eixos vertical/complexidade/vulnerabilidade; **XYZ é o espaço-alvo unificado** (cidadão + predador). "Alvo" está embutido em XYZ; "precisão" = **P**. 4 dimensões (XYZ + T) + P.

### 🟡 3 — Mapa letra↔fase do CVRD

- **Inferência do blueprint (§1.4):** suspeitou que "CVRD" não bate com as iniciais de Discovery/Inference/Dispersal/Self-Heal.
- **Fonte REAL** — `C0-03 — MC-DOUTRINA-EIS:91-136`. **CVRD = "Ciclo de Vida de Restauração de Dignidade"** (sigla **PT**, não as iniciais das 4 fases EN; recalibrado do "CVIS — Ciclo de Vida de Imunização Social" do Gemini · `C0-06:78`). Mapa fase↔etapa **1:1**:
  - FASE 1 **DISCOVERY** (Engenharia de Requisitos Raiz) → **E0** (Boas-vindas) → **E1** (Triagem)
  - FASE 2 **INFERENCE** (Síntese Arquitetônica / Oráculo) → **E2** (Análise) → **E3** (Inteligência)
  - FASE 3 **DISPERSAL** (Dispersão Modular Fatorada) → **E4** (Protocolo) → **E5** (Acompanhamento)
  - FASE 4 **SELF-HEAL** (Malha Fechada D>C>V) → **E6** (Resolução) → **E7** (Φ₄ Guardião)
- **Veredito:** a suspeita §1.4 estava **CERTA**. CVRD é sigla PT; as iniciais EN não formam o acrônimo. O motor auto-evolutivo vive em Dispersal+Self-Heal, como o blueprint dizia.

### 🟡 4 — Fórmulas de RA-MC / CMD / TENV  *(a maior correção)*

> As **3 inferências §4.3 do blueprint estavam ERRADAS.** As métricas existem e são canônicas, mas com significados diferentes.

| Métrica | Inferência §4.3 (🟡 errada) | O que a fonte REAL diz | Fonte:linha |
|---|---|---|---|
| **CMD** | "Custo de Montagem de Dossiê" (↓) | **Capital Morto Desbloqueado** — North Star do MC (SELADO). `CMD = Σ(benefícios concedidos × valor mensal) + retroativos − [ZERO captura MC]`. Direção **↑**. Denominador zero. | `C0-10 — Indicadores:195-219` · `C2-20:70` · `C1-17:71` |
| **RA-MC** | "% de templates reusados" (↑) | **Razão de Automação** = `THU_manual ÷ THU_target` (múltiplo). Tese: **≥ 4×** sustenta Φ₁. Baseline empírica Hib001 = **4,71×**. THU = Tempo Humano Útil. | Princípio **#23** = arquivo `MC-PRINCIPIO-021-CronometriaDoHumano:22,36,44` · `C0-03:178` · `C1-17:70` |
| **TENV(-MC)** | "Tempo até Envio/protocolo" (↓) | **Taxa de Elevação de Nível gov.br** — métrica Geração 1, nascida no caso JAN001 (elevação Bronze→Prata→Ouro). | `C0-03:177` · `C1-17:242` |

- **Nuance de numeração (Proof-First):** o catálogo cita "Princípio #23", mas o arquivo é `MC-PRINCIPIO-021` com **errata-renumeração para #23** (colisão tripla multi-instância · `:12-17`). Referência canônica = **#23**.
- **NÃO localizado (busca confirmatória 2026-06-02):** a **fórmula expandida de TENV-MC** não está formalizada em fonte alguma acessível — varri INBOX (inclui RouterEthics `C0-09`), painel `v1.0/v1.1/v1.2` e catálogo. **Razão cronológica:** painel v1.2 = 05/05; métrica nasceu com JAN001 em 09/05 (`C1-17:242`) — depois do painel ⇒ não havia equação canônica a citar — e o backlog da v1.3 (`C0-10:886-892`) **nem a enfileira** (lista Router-Ethics/RSC-MC/IPH/LGPD/cross-vertical/Modo Finep). Daí a adoção do Founder (✅ abaixo). Há só nome + sentido (elevação Bronze→Prata→Ouro gov.br) + origem (Hook 0, `C1-17:238`).
  - ✅ **Fórmula ADOTADA (decisão do Founder · 2026-06-02 · voz canônica) · PROVISÓRIA até ratificação na `MC-INDICADORES v1.3`:** `TENV-MC = nº de cidadãos que elevaram o nível da conta gov.br (Bronze→Prata/Ouro) após orientação MC ÷ total de cidadãos orientados sobre elevação no período` (direção ↑). Análoga às taxas binárias do painel (TPA-MC, TPCD-MC). Lastro **do sentido** (não havia fórmula formalizada): `C1-17:238,242` + Hook 0 gov.br. *No motor, TENV-MC só é referenciada por nome/sentido; nenhuma fase depende da equação — a adoção não muda o comportamento do workflow.*
- **Veredito:** o motor referencia CMD (↑, North Star) e RA-MC (≥4×) com fórmula canônica; TENV-MC entra por nome/sentido, com a fórmula **adotada pelo Founder (02/06 · provisória até v1.3)** — o motor não depende dela.

### 🟡 5 — Anatomia do dossiê CP-MC e do scaffolding

- **Inferência do blueprint (§5.1):** citou "dossiê CP-MC" e "scaffolding" por nome, sem anatomia.
- **Fonte REAL** — `C2-20 — MC-POP-VisualLaw-DossieSelado-PARTE1`. **CP-MC = "Constelação Probatória MC"** (`:36`). Anatomia:
  - **3 artefatos:** **GPN** (Grafo Probatório Navegável) · **SIV** (Selo de Integridade Visual: SHA-256 + ICP-Brasil + OpenTimestamps + QR) · **ICE** (Indução Cognitiva Ética) — `:40-46`
  - **3 camadas cognitivas:** C1 entrada visual (30-90s, ancoragem) · C2 infraestrutura hiperlinkada (malha auditável) · C3 saída facilitada (**scaffolding decisório ético**) — `:191-201`
  - **3 modelos de complexidade:** **CP-3** (simples · INSS) · **CP-5** (complexo · INSS) · **CP-7** (CRPS/JEF) — escolhidos na triagem E0-E2 — `:228-238`
  - **3 palcos/passarelas:** INSS (cego à jurisprudência) · CRPS (+jurisprudência) · JEF/B2B (+temas repetitivos) — `:54-64`
  - **16 componentes** C.1–C.16 (Capa · Painel do Analista · Quadro-Síntese 10s · Timeline Trinode · GPN · Mapa de Provas · Quadro de Falhas INSS · Árvore de Requisitos · Mapa Normativo Lateral · Quadro de Precedentes · Provas Documentais · Narrativa Biográfica · SIV · Firewall OAB · Encerramento · Síntese de Requisitos) — `:240-320`
  - **5 vedações da linha ética** (`:86-94`): zero conclusão jurídica · zero adjetivação interpretativa · zero redação de despacho pelo servidor · zero omissão de contraprova · zero promessa de resultado
- **"scaffolding" tem 3 sentidos** no ecossistema (não confundir):
  1. **Kit 4 camadas do Voo** C0/C1/C2/C3 (DNA institucional / operacional-anchor / doutrinas verticais / ramificações) — blueprint §1.2
  2. **Scaffolding decisório ético** = Camada 3 da CP-MC (Vygotsky + Thaler/Sunstein) — `C2-20:191-201,308-320`
  3. **Scaffolding MC do #47 (DNA)** = triagem documental completa + dossiê CP-MC + scaffolding institucional — `C0-07:22`
- **Complementos** (não lidos, anatomia já suficiente na PARTE 1): `C2-21` PARTE 2 (Design System + Stack + Workflow E0-E5) · `C2-22` PARTE 3 (aplicação página-a-página + governança) · `C2-19` Grimório Previdenciário v2.
- **Veredito:** anatomia **fechada**.

---

## Divergências conscientes do blueprint (Proof-First > fidelidade ao rascunho)

O script reflete as **fontes reais**, não as inferências 🟡 erradas do blueprint. Onde divergiu:

1. **Ficha 10 campos** — usa a canônica do #45 (não a proposta §1.1).
2. **4D-TDIG** — modelado como XYZ (espaço-alvo) · T · P (não vertical/complexidade/vulnerabilidade).
3. **Métricas** — CMD↑ (North Star), RA-MC = THU_manual÷THU_target (≥4×), TENV-MC = elevação gov.br; nenhuma é "custo/tempo/reuso" como §4.3 inferiu.
4. **CP-MC** — referenciado com a anatomia real (GPN/SIV/ICE · CP-3/5/7 · palcos · 5 vedações).

> ✅ **ERRATA-001 APLICADA (2026-06-02)** ao blueprint — inline, na drop zone, PROVISIONAL: bloco consolidado logo após o BOX de Honestidade Epistêmica + ponteiros de supersedência em §1.1/§1.3/§4.3/§5.1, **preservando o texto 🟡 original como histórico** (Princípio #4 "Errata Absorve, Não Inventa"). Inclui confirmação de §1.4 (CVRD). **Pós-gate Founder (02/06):** TENV-MC adotou a fórmula candidata (E-4 · provisória, ratificar na v1.3) e o CNAE foi corrigido p/ 6201-5/01 (E-6). Nada selado.

---

## Próximos passos (gate humano)

1. **Founder** valida as 4 correções acima + a estrutura das 5 fases.
2. **Dra. Juliana (R3)** valida: PII fora do motor (Firewall), o fixture Hib001 de-identificado, e a regra de captura fail-closed.
3. ✅ **TENV-MC** — DECIDIDO (Founder 02/06): fórmula candidata **adotada** (provisória); **ratificar formalmente na `MC-INDICADORES v1.3`** (única ação remanescente na métrica). CNAE também corrigido (E-6).
4. Pós-aval: **instalar** o `.js` em `.claude/workflows/` e o SKILL em `.claude/skills/mc-especimen-autoevolutivo/`, e só então rodar.
5. Opcional (evolução): extrair um **core de regressão** separado (padrão `squad-r3-redteam-core.js`) se o teste Hib001 crescer, e usar `parallel()` para triar candidatos #46 em fan-out.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Firewall OAB:** método/Zona Verde · PII no C1 sob gate R3 · atividade-fim 100% advogada
**Proof-First:** 5 lacunas fechadas com fonte:linha · 1 pendência marcada · zero fabricado
**Selo:** O diamante é carbono que não desistiu da pressão. · Provérbios 31:8
**Status:** v0.1 PROVISIONAL · INSTALADO (PR #14) · cloud-portable (Template-Mestre inline) · NÃO-SELADO · gate Founder + Dra. Juliana
∞
