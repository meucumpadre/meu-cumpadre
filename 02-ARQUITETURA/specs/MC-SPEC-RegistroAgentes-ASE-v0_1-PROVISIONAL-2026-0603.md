---
tipo: SPEC-ARQUITETURA-ASE-CAMADA-INSTRUMENTACAO
codigo: MC-SPEC-RegistroAgentes-ASE
nome: Registro de Unidades Agênticas (RUA) · L1 da stack Agentic Systems Engineering
versao: 0.1
status: PROVISIONAL
data: 2026-06-03
autores:
  - Alessandro de Souza Neves (Founder/CEO) — diretriz: cockpit Code×GitHub + arquitetura cognitiva instrumentada
  - Code TALÃO (Arquiteto+Executor) — formalização da ontologia + spec técnica
gate_selagem: R2 (Founder sela + Sister Anciã cross-validation). NÃO sela sozinho.
sustenta_se_em:
  - MC-ARQUITETURA-Cognitiva-Integrada-v2.1 (MC-ACI) — PROVISIONAL (sister-validation PENDENTE · gate R2 dela também pendente). Esta spec é a CAMADA DE INSTRUMENTAÇÃO operacional da MC-ACI; NÃO a substitui
  - ADR-011 (Arquitetura 3 Cérebros) — PROVISIONAL — gate de escrita no Vault
  - ADR-020 (Git como Substrato) — v2.0 PROVISIONAL (v1.0 em 99-ARQUIVO-Legado) — fonte da verdade versionada
  - Router-Ethics 11.0 — middleware semântico entre transições inter-instância
  - Cabeça Única Inviolável (#50.2) — agente é braço de MC, nunca autônomo sem chain of command. [SANEADO 2026-06-03: persistido em MC-PRINCIPIO-050-RoteamentoVerticalCabecaUnica (ARQUIVO PROVISIONAL · aguarda selo Founder)]
  - Camadas IA por Finalidade · LGPD linha vermelha por camada (#21) — [SANEADO 2026-06-03: persistido em MC-PRINCIPIO-021-CamadasIAPorFinalidade · colisão #21/#23 resolvida (Cronometria→#23)]
  - Serviços/Skills atomizados — conceito ainda NÃO-CUNHADO. [SANEADO 2026-06-03 via errata MC-ACI: o #49 canônico é "Cessão de Palco", NÃO atomização. Conceito candidato a slot livre #45. NÃO citar como #49]
nao_substitui: MC-ACI v2.1 PROVISIONAL (descreve a cognição) · esta spec INSTRUMENTA a cognição
nota_proof_first_dos_lastros: >
  Sister Anciã (2026-06-03) apontou que esta spec — cujo princípio-mãe é "o Registro nunca diverge da fonte" —
  nasceu citando princípios pela numeração PROVISIONAL da MC-ACI, não pelo _INDEX canônico. Lastros de princípio
  acima foram reancorados ao que É verificável (CLAUDE.md · MC-ACI · userMemories) e as colisões #49/#21 + a
  não-persistência do #50.2 ficam EXPLÍCITAS. A reconciliação dos slots no _INDEX é pré-requisito do selo R2.
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
zona: VERDE (método/arquitetura · zero PII)
canonico_em: Vault 02-ARQUITETURA/specs/ (a sincronizar pós-R2)
---

# MC-SPEC · Registro de Unidades Agênticas (RUA)

**v0.1 PROVISIONAL · 2026-06-03 · Gate R2 pendente (Founder + Sister Anciã)**

> **Camada 0 — Onde esta spec mora na casa**
> A **MC-ACI v2.1** descreve *o que* o cérebro institucional é (6 instâncias C0–C5, 3 loops fechados, neuro-simbólico, Router-Ethics como sistema nervoso ético). Esta spec não descreve a cognição de novo — ela **a torna legível, observável e regredível**. É o **L1 (Registro) da stack Agentic Systems Engineering** discutida com o Founder em 2026-06-03. O diamante (MC-ACI) precede o cérebro; o Registro é a sinapse que torna o cérebro *inspecionável*.

---

## 1 · POR QUE CUNHAR (o buraco que esta spec fecha)

O MC já roda um sistema agêntico real — a família de skills/workflows/agents em `.claude/`, o subagente `sister-ancia`, o hook `mc-lint`, o Router-Ethics. Mas esse sistema é hoje **implícito e não-instrumentado**: para saber *quem são todos os agentes, em que gate cada um para, que zona LGPD toca, quanto custa rodar, e o que NÃO confundir com o quê*, é preciso ler arquivo por arquivo.

Esse vácuo já cobrou **retrabalho empírico documentado**: um prompt-template com o espécimen *hardcoded* foi reusado para outro workflow (vide `_LEIA-mc-compasso-sweep.md:8`). A correção foi "cada workflow nasce do seu método-fonte" — mas essa regra vive em prosa espalhada, não num registro que a *force*.

**O Registro de Unidades Agênticas (RUA) é o plano de controle sobre o plano de dados.** Os agentes executam (plano de dados); o RUA sabe quem são e como se governam (plano de controle). Sem ele, não há cockpit honesto, não há tabulação, não há otimização — porque não há fonte da verdade única sobre a própria caixa de ferramentas.

### 1.1 O que esta spec É e o que NÃO é

| É | NÃO é |
|---|---|
| A **ontologia canônica** de uma Unidade Agêntica MC (os campos que a descrevem) | O cockpit HTML (L6 — fase posterior) |
| A regra de **fonte única** do Registro (gerado, não mantido à mão) | O gerador em si (fase 2) ou a telemetria (L5 — fase 4) |
| O **contrato de governança** que todo agente declara (gate, zona, custo) | Uma nova arquitetura cognitiva (essa é a MC-ACI, já cunhada) |
| Zona Verde, método puro | Qualquer coisa que toque PII ou caso de cidadão |

---

## 2 · PRINCÍPIO ESTRUTURANTE · "Gerado, não mantido" (anti-drift)

**Regra inviolável da spec:** o Registro **NUNCA é editado à mão**. Ele é **gerado por varredura** do `frontmatter` dos próprios artefatos (`.claude/skills/*/SKILL.md`, `.claude/workflows/*.js` `meta`, `.claude/agents/*.md`, `.claude/hooks/*`) + cruzamento com estado git/PR.

Por quê isso é fundacional (não detalhe de implementação):
- **Proof-First:** um Registro mantido à mão *drifta* e mente. Num sistema Proof-First, um registro desatualizado é passivo, não ativo. Se a fonte da verdade é o artefato, o Registro nunca pode divergir dele.
- **Inversão Cósmica aplicada:** o Registro rastreia *o que existe* (custo/estrutura), não *o que gostaríamos que existisse* (valor desejado).
- **ADR-020:** o substrato já é o git. O Registro é uma projeção determinística do repo num instante — reproduzível, versionável, auditável.

**Consequência de design:** cada artefato agêntico passa a carregar, no seu próprio `frontmatter`, os campos de governança abaixo. O Registro é a *colheita* desses campos. A disciplina migra para a origem (o artefato), não para um índice paralelo.

---

## 3 · A ONTOLOGIA · campos canônicos de uma Unidade Agêntica

Cada Unidade Agêntica (UA) — skill, workflow, agent ou hook — é descrita por **5 blocos**. Campos marcados `★` são **obrigatórios** (sem eles a UA não entra no Registro = fail-closed).

### Bloco A · Identidade
| Campo | Valores | Serve a |
|---|---|---|
| `id` ★ | slug único (ex.: `mc-compasso-sweep`) | chave primária |
| `nome` ★ | nome legível | cockpit |
| `tipo` ★ | `skill` \| `workflow` \| `agent` \| `hook` | classificação |
| `versao` ★ | semver MC (`v0.1`) | disciplina de versão |
| `status` ★ | `RASCUNHO` \| `PROVISIONAL` \| `INSTALADO` \| `SELADO` \| `SUPERSEDED` | maturidade |
| `data` ★ | `YYYY-MM-DD` | rastreio |

### Bloco B · Função
| Campo | Valores | Serve a |
|---|---|---|
| `papel` ★ | 1 frase: o que faz | cockpit / POP |
| `gatilhos` ★ | comando + frases-gatilho | acionamento |
| `entrega` ★ | o que devolve (artefato/colheita/veredito) | expectativa |
| `metodo_fonte` ★ | `arquivo:linha` do método canônico | Proof-First / lastro |

### Bloco C · Posição na MC-ACI (a sinapse)
| Campo | Valores | Serve a |
|---|---|---|
| `instancia_aci` ★ | `C1`\|`C2`\|`C3.1`\|`C3.2`\|`C4`\|`C5`\|`transversal` | onde opera no cérebro institucional |
| `camada_ase` | `L0`–`L6` | posição na stack ASE |
| `compoe_com` | lista de `id` | grafo de composição (#1.3 conectivismo MC-ACI) |
| `nao_confundir_com` ★ | lista de `id` + motivo | **anti-drift** (cura o retrabalho do espécimen-hardcoded) |

### Bloco D · Governança (o coração — fail-closed)
| Campo | Valores | Serve a |
|---|---|---|
| `gate` ★ | `R1` \| `R2` \| `R3` | onde para no humano |
| `zona` ★ | `Verde` \| `Amarela` \| `Vermelha` | PII pode entrar? |
| `lgpd_nota` | texto | regra LGPD da UA (Princípio #21) |
| `vedacoes_honradas` ★ | lista (`Firewall-OAB`, `Proof-First`, `D>C>V`, `#50.2`, `Zona-Verde`, …) | contrato ético explícito |
| `para_no_gate` ★ | `true`/`false` + descrição | a UA NÃO sela/injeta/escreve sozinha? |

### Bloco E · Operação & Telemetria
| Campo | Valores | Serve a |
|---|---|---|
| `custo` ★ | `{ gasta_agente: bool, opt_in: bool, fan_out: int\|null }` | decisão de rodar |
| `regressao` | `{ fixture: id\|null, veredito_esperado: texto }` | rede de segurança |
| `emite_audit` | `bool` | hook-in da telemetria (L5) |
| `depende_de` | lista de `id` / ferramentas externas | grafo de dependência |

> **Mínimo viável de um registro honesto:** todos os campos `★`. Uma UA sem `gate`, `zona`, `nao_confundir_com` ou `para_no_gate` é **rejeitada pelo gerador** — porque é exatamente a ambiguidade que gera retrabalho e risco de compliance.

---

## 4 · GOVERNANÇA DA PRÓPRIA SPEC (honra D>C>V por construção)

O Registro **descreve** governança; ele também **se submete** a ela:

1. **#50.2 Cabeça Única.** O Registro é cockpit do Founder (operador único Code/git/TALÃO). NÃO é terminal multiusuário. Beto não opera por ele (Errata #10).
2. **Gates são dados de primeira classe.** O campo `gate` não é decorativo — o cockpit (L6) deve *destacar* UAs `R2`/`R3` e nunca oferecer "selar" como botão. Selo é julgamento humano soberano; a ferramenta rastreia, não decide.
3. **Zona Verde do cockpit.** O HTML gerado (L6) é compartilhável ⇒ tratado como público ⇒ o Registro só pode conter metadados Zona Verde. **Nenhum dado de caso, nenhuma PII, nenhuma credencial** entra no Registro. O que processa PII (instância C4/C5 sob stack soberana, Camada 4 da MC-ACI) é *referenciado* pelo `id`, nunca *espelhado*.
4. **Firewall OAB.** Nenhuma UA do Registro exerce atividade-fim. O Registro não cria exceção a isso — apenas o torna auditável (toda UA declara `vedacoes_honradas`).
5. **Proof-First.** Todo `metodo_fonte` é `arquivo:linha` verificável. Campo sem lastro → `[FONTE PENDENTE]`, nunca inventado.

---

## 5 · FORMATO & PIPELINE (escopo desta spec: só o contrato)

- **Artefato-fonte:** `frontmatter` de cada UA (origem da verdade).
- **Registro gerado:** `registro-unidades-agenticas.json` (máquina) + uma *view* `.md` (humano). Ambos **derivados**, nunca canônicos por si — o canônico é o conjunto dos artefatos.
- **Localização:** drop-zone gerado (ex.: `.claude/registro/`), fora do Vault até gate.
- **Reprodutibilidade:** rodar o gerador 2× no mesmo commit ⇒ saída byte-idêntica (sem `Date.now()`/`random` — mesma regra dos workflows).

*A implementação do gerador, da view e da telemetria é explicitamente FORA DE ESCOPO desta spec.* Esta spec sela apenas **a ontologia e suas regras**. Fases seguintes (gerador → cockpit → telemetria) são specs/PRs próprios, cada um com seu gate.

---

## 6 · ROADMAP (a sequência selável)

| Fase | Entrega | Gate |
|---|---|---|
| **0 · esta spec** | ontologia RUA + regras (este doc) | **R2** (Founder + Anciã) |
| 1 · enriquecimento | adicionar campos de governança ao `frontmatter` das UAs existentes | R1 por UA |
| 2 · gerador | varredura `.claude/` + git → `registro-*.json` + view `.md` | R1 |
| 3 · cockpit v0.1 | HTML autossuficiente (molde `f2810ce`) lendo o Registro | R1 — ✅ PR #24 |
| 4 · telemetria | formaliza audit JSONL → alça de otimização (L5) | R2 (toca arquitetura) — 🟡 PoC pronto · DEFAULT OFF · selo R2 pendente |

> **Fase 4 · estado (2026-06-03):** PoC implementado fora do Vault — emissor `mc-audit.py`
> (firewall LGPD: lê só o id da UA, conjunto fechado de chaves, zero PII por construção),
> analisador `ler-audit.py` (alça de otimização: ranking · critério de morte · carga de
> governança · superfície LGPD), fixture sintético rotulado + golden de regressão. **Não
> fiado em `settings.json`** — ligar a captura ao vivo é o ato R2 do Founder (instrução em
> `.claude/registro/audit/_LEIA-audit.md`). Confirma a Nota R3 §7: o conjunto fechado de
> chaves NÃO toca fluxo PII C4/C5 ⇒ R2 basta; R3 só se essa fronteira mudar.

**Critério de morte (a verdade desconfortável):** se em 30 dias o Registro não tiver poupado **uma decisão ou um retrabalho** ao Founder, ele estava errado e deve ser rasgado. Crisálida pré-revenue não financia plataforma especulativa — o plano de controle precisa se pagar.

---

## 7 · GATE DE PROMOÇÃO v0.1 → SELADO

1. ✅ Cunhagem v0.1 PROVISIONAL · 2026-06-03 (Code TALÃO)
2. ✅ Sister Anciã — cross-validation adversarial (9 eixos) · veredito **CONDICIONADO** · 2026-06-03 (ver §8)
3. ✅ **Reconciliação dos slots de princípio no `_INDEX`** (#49 vs Cessão de Palco · colisão #21/#23 · persistir #50.2) — **SANEADA 2026-06-03** via `MC-PROPOSTA-Saneamento-INDEX-Principios` (Founder Opção A). Arquivos persistidos em estado ARQUIVO PROVISIONAL (aguardam selo Founder do texto)
4. ⏳ Founder — selo R2 soberano (a ontologia reflete a casa? falta campo? sobra?)
5. ⏳ Primeira aplicação: enriquecer 1 UA real (`mc-compasso-sweep`) e gerar seu registro como prova-de-conceito
6. ⏳ Promoção a **SELADO** + sincronização Vault `02-ARQUITETURA/specs/` (sob "aprovado para vault", ADR-011)

> **Nota R3:** a *ontologia* é Zona Verde (método) ⇒ R2 basta. Mas a **Fase 4 (telemetria)** e qualquer campo que venha a tocar fluxo de PII entre instâncias C4/C5 escalam para **R3 (Dra. Juliana Pereira de Melo)** — catraca dura LGPD/ANPD.

---

## 8 · REGISTRO DA REVISÃO ADVERSARIAL (Sister Anciã · pré-R2)

**2026-06-03 · veredito CONDICIONADO.** A Anciã confirmou a espinha doutrinária sã (D>C>V não invertido · Firewall OAB blindado · Zona Verde · gate R2/R3 separado · "gerado não mantido" é Proof-First de verdade · `metodo_fonte` confere bit-a-bit). **O que condicionou foi a fidelidade Proof-First do próprio frontmatter** — a ironia de uma spec que prega "o Registro nunca diverge da fonte" ter citado princípios pela numeração PROVISIONAL da MC-ACI, não pelo `_INDEX` canônico.

| Sev | Achado | Resolução nesta v0.1 |
|---|---|---|
| 🔴 | `#50.2` citado como lastro sem arquivo canônico em `principios/` | Reancorado a CLAUDE.md + MC-ACI C7 · marcado `[FONTE PENDENTE]` |
| 🔴 | `#49` = "Cessão de Palco" no `_INDEX`, não "Anatomia Ontológica/atomização" | Citação por conceito + alerta de colisão; `#49` não usado como atomização |
| 🟡 | `#21` em colisão (#21/#23 · arquivo homônimo "Cronometria") | Citado por conceito + nota de colisão |
| 🟡 | MC-ACI v2.1 tratada como base estável, sendo PROVISIONAL | Declarado PROVISIONAL no frontmatter e no Status |
| 🔵 | ADR-020/011 PROVISIONAL (fundação sobre fundação em assentamento) | Nota registrada; saudável reconhecer |

**Ponto cego que a Anciã viu (registrado, não maquiado):** se o gerador de `vedacoes_honradas`/lastros rodasse contra o Vault hoje, falharia *fail-closed* nos próprios lastros desta spec. Isso **não é defeito do método — é a prova de que o método funciona**: a régua pegou o próprio autor. Por isso a **reconciliação do `_INDEX` virou pré-requisito explícito do selo R2** (§7.3).

---

**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First** · **Zona Verde** (sem PII) · Cabeça Única (#50.2)
**Status:** v0.1 PROVISIONAL · instrumentação da MC-ACI v2.1 · gate R2 (Founder + Sister Anciã) · NÃO selado, NÃO no Vault
*"É eu, tu, a Anciã e a esteira. ∞"*
