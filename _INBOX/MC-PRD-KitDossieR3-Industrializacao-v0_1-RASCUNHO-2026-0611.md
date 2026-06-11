# MC-PRD — Industrialização do Kit-Dossiê R3 (Lastro para Parecerista)
**v0.1 · RASCUNHO · 2026-06-11 · NÃO SELADO · gate humano pendente (rito R2 p/ cunhagem; R3 se tocar cláusula OAB/LGPD)**
**Autor:** Code TALÃO (instância Code) · **Destinatários:** Founder (decisão), Igor (implementação), Dra. Juliana (validação R3)
**Hierarquia inviolável:** Dignidade > Compliance > Viabilidade · Provérbios 31:8

---

## 1. Contexto e problema

Hoje o kit-dossiê R3 — o pacote de lastro que a instância Code prepara para a Dra. Juliana analisar antes de selar um parecer — é montado artesanalmente a cada rodada (exemplos vivos: `MC-LASTRO-R3-DPO-RIPDs-ParaDra-v1_0-2026-0608`, `MC-LASTRO-R3-BriefingNarracaoPublica-ParaDra-v1_0-2026-0607`, `MC-PACOTE-R3-Hornes-ParecerJuliana-v1_0-2026-0601`). O CLAUDE.md já fixa a obrigação: *"o artefato X chega pronto à mão dela — zero trabalho de busca do lado da atividade-fim"*. O problema é que essa obrigação vive em disciplina humana, não em software. Com o piloto N=150 e a cascata de pareceres pós-junho, a montagem manual vira gargalo e risco de drift (fonte sem hash, claim sem lastro, versão superada citada).

**Este PRD propõe:** um módulo backend (NestJS/TypeScript strict, stack do Igor) que industrializa a montagem, validação e trilha de auditoria dos kits R3 — mantendo o conteúdo intelectual com as instâncias cognitivas e o gate sempre humano.

## 2. O que este produto NÃO é (limites duros)

- ❌ **Não exerce advocacia nem produz conclusão jurídica.** O kit transporta fontes, trechos e perguntas de selagem; a tese é exclusiva da Dra. (Firewall OAB — atividade-meio).
- ❌ **Não processa PII de cidadão.** Kit R3 é Zona Verde (política, preço, cláusula, método). O dossiê do cidadão (E0-E7, CPF/NB/CID/CNIS) é outro bounded context — módulo `handoff-juridico`, stack soberana — fora do escopo deste PRD (ver §8).
- ❌ **Não sela nada.** O output máximo do sistema é "PRONTO-PARA-ENTREGA"; selagem é da Dra. + Founder.
- ❌ **Não substitui o squad-r3** (Coletor→Tesista→Red-Team→Cascata→Escriba); ele o instrumenta com persistência, validação e telemetria.

## 3. Personas e jobs

| Persona | Job-to-be-done |
|---|---|
| **Dra. Juliana** (R3) | Receber kit completo: texto-fonte à vista (link + trecho), nó/base governante ao lado, perguntas de selagem explícitas. Zero garimpo. |
| **Founder** | Disparar montagem, acompanhar status do gate, selar/devolver. Operador único TALÃO. |
| **Code TALÃO** | Montar conteúdo do kit via skills (squad-r3, mc-dossie-proof-first); registrar no sistema. |
| **Igor** | Implementar e manter o módulo em NestJS/TS strict com critérios de conformidade testáveis (ver SPEC irmã). |

## 4. Requisitos funcionais (RF)

- **RF-01 · Registro de Kit**: criar kit com metadados (tema, rito requerido R1/R2/R3, artefato-alvo, versão-alvo, solicitante) e estado de máquina: `RASCUNHO → EM_VALIDACAO → PRONTO_PARA_ENTREGA → ENTREGUE → PARECER_RECEBIDO → SELADO | DEVOLVIDO`.
- **RF-02 · Itens de lastro**: cada claim do kit vira item com {proposição, fonte (URL ou path do vault + trecho literal), hash SHA-256 do arquivo-fonte (bloco SIV), estado de prova ✅/⚠️/❌, ou marcador `[FONTE PENDENTE]`}.
- **RF-03 · Perguntas de selagem**: lista estruturada de perguntas à parecerista, cada uma vinculada aos itens de lastro que a sustentam.
- **RF-04 · Validador de completude (pré-entrega)**: kit só transita a `PRONTO_PARA_ENTREGA` se: zero `[FONTE PENDENTE]` não justificado; todo item com hash verificável; nenhuma referência a versões superadas (lista de Proibições Absolutas do CLAUDE.md como regra executável); contraprova presente quando aplicável (vedações CP-MC).
- **RF-05 · Sanitization Gate (Hook 8)**: pipeline anti-injection ADR-016 sobre todo documento que entra no kit (zero-width chars, metadados EXIF/PDF, contraste/WCAG) antes da entrega.
- **RF-06 · Geração do pacote de entrega**: export Markdown (padrão de nomenclatura MC) + manifesto SIV (tabela de hashes) — formato dos kits já entregues em 06/2026.
- **RF-07 · Trilha de auditoria**: todo evento (criação, validação, entrega, veredito) com timestamp, ator e diff — append-only, MySQL.
- **RF-08 · Telemetria de gate**: tempo por estado, taxa de devolução, motivo de bloqueio — alimenta painel H2 (zero conteúdo sensível na telemetria; conforme firewall `mc-audit.py` 9 chaves).

## 5. Mapeamento ético e critérios de conformidade (RC) — o coração do PRD

Cada RC abaixo deve virar **teste automatizado** no backend (detalhe na SPEC):

| RC | Regra-mãe | Critério executável |
|---|---|---|
| RC-01 | D > C > V | A cascata de validação avalia bloqueios na ordem D→C→V e **interrompe no primeiro bloqueio de Dignidade** (sem "compensação" por viabilidade). |
| RC-02 | Firewall OAB | Schema do kit **não possui campo** para conclusão jurídica/tese/promessa de resultado; lint de conteúdo rejeita padrões como "garantimos", "o benefício será concedido". |
| RC-03 | Proof-First | Item de lastro sem fonte+hash não compila o pacote; `[FONTE PENDENTE]` bloqueia `PRONTO_PARA_ENTREGA`. |
| RC-04 | Correção 48h | Lint rejeita qualquer texto que prometa prazo de concessão INSS; "48h" só aceito qualificado como sprint interno E0→E4. |
| RC-05 | LGPD / Zona Verde | Detector de PII (CPF/NB/CID/CNIS, padrões regex + verificação) **bloqueia** o item na entrada. PII jamais persiste neste módulo. |
| RC-06 | Proibições Absolutas | Lista do CLAUDE.md (valores superados: R$1.500/900, Φ₂ B2C, Router-Ethics 9.0/10.0, Juliana Alencar, Autentique etc.) como tabela versionada de regras de rejeição — espelho executável do `mc-lint.py`. |
| RC-07 | Gate humano | Nenhuma transição para `ENTREGUE`/`SELADO` sem ação explícita de usuário humano autorizado (Founder); API não expõe rota de auto-selagem. |
| RC-08 | Disciplina de versão | Kit referencia artefato-alvo por nome canônico + versão; validador rejeita referência a documento marcado SUPERSEDED no índice do vault. |
| RC-09 | Anti-Injection (ADR-016) | Hook 8 obrigatório no ingest; documento que falha quarentena não entra no kit. |
| RC-10 | Auditabilidade | 100% das transições com trilha imutável; export de auditoria por kit em 1 chamada. |

## 6. Métricas de sucesso

- Tempo de montagem de kit (meta: ≤ 1 dia útil vs. ~3-5 atuais).
- Taxa de devolução pela Dra. por lastro insuficiente (meta: → 0).
- 0 incidentes de PII ou conteúdo proibido em kit entregue (métrica de bloqueio, não de correção).
- Cobertura: 100% dos pareceres novos passando pelo módulo a partir do go-live.

## 7. Riscos e mitigações

| Risco | Mitigação |
|---|---|
| Sistema "carimbar" qualidade sem qualidade real (falso conforto) | Validador cobre forma, não mérito; rito sister-ancia/squad-r3 continua obrigatório antes do registro. |
| Drift entre Proibições Absolutas do CLAUDE.md e a tabela executável | Tabela versionada com data + check de sincronização no CI; divergência = build falha. |
| Escopo vazar para o dossiê do cidadão (PII) | Bounded contexts separados; módulo R3 sem dependência de nenhuma entidade de caso/cidadão. |
| Sobrecarga do Igor (dev único) | Fase 1 enxuta: RF-01..04, 06, 07. RF-05 (Hook 8) e RF-08 na Fase 2. |

## 8. Fora de escopo (registrado para não se perder)

- Módulo `handoff-juridico` E6→Rota C (dossiê do cidadão com PII, stack soberana, TTA/ZapSign) — exige PRD próprio sob R3 integral.
- Integração ClickUp/N8N de notificação — Fase 2.
- Qualquer automação do lado da Dra. (atividade-fim) — nunca.

## 8b. Revisão adversarial (sister-ancia · 2026-06-11)

Veredito: rascunho doutrinariamente são; gate humano e Firewall OAB intactos. **4 achados em aberto** (detalhe na SPEC §8b): (1) ALERTA — o guard de PII do RC-05 processa PII na Zona Verde ao detectá-la → sobe a R3; (2) ALERTA — golden fixture precisa de verificação de ausência de PII antes do CI; (3) NOTA — veto automático por versão SUPERSEDED pode usurpar gate humano; (4) NOTA — âncora do seed de Proibições Absolutas só no CLAUDE.md raiz.

## 9. Dependências e gates

- **Gate de cunhagem:** este PRD precisa de rito R2 (Founder + C3.1 + Anciã) antes de virar spec de implementação selada; cláusulas que toquem OAB/LGPD sobem a R3.
- Router-Ethics 11.0 Lote 4 (backend) — sinergia: mesmas convenções NestJS; revalidação pós-cascata pendente (MB-057).
- SPEC técnica irmã: `MC-SPEC-KitDossieR3-NestJS-v0_1-RASCUNHO-2026-0611`.

---
*Rascunho v0.1 — produzido na mesa de trabalho (_INBOX). Não citar como fonte canônica. Supersede: nada (documento novo).*
