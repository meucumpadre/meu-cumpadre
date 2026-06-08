---
tipo: RIPD (Relatório de Impacto à Proteção de Dados Pessoais · LGPD art. 38)
nome: RIPD — Custódia de Dossiê Previdenciário e Credenciais gov.br do Hipervulnerável
versao: v0.1 PROVISIONAL
data: 2026-06-06
status: MINUTA — aguardando validação R3 (Dra. Juliana Pereira de Melo) + nomeação de Encarregado
preparado_por: MC — Code TALÃO (atividade-meio)
fontes_base: [ADR-009a v2.0 (credenciais gov.br), ADR-009b v1.0 (Três Estados do dossiê), ADR-016 (anti-injection/sanitização), ADR-014 (ZapSign), ADR-012 (Stack LLM)]
firewall_oab: "Minuta de compliance (atividade-meio). NÃO é parecer jurídico. A validação/conclusão é da Dra."
hierarquia: Dignidade > Compliance > Viabilidade
---

# 🛡️ RIPD — Custódia de Dossiê Previdenciário e Credenciais gov.br

> **Relatório de Impacto à Proteção de Dados Pessoais (LGPD art. 38) · Proof-First · D > C > V**
> Minuta MC (atividade-meio) para a **validação da Dra. Juliana** (R3 · LGPD/ANPD). Não é parecer.

## 0. Natureza e limites deste documento
Este RIPD descreve os tratamentos de dados pessoais na **custódia do dossiê previdenciário** e das **credenciais gov.br** do cidadão hipervulnerável, identifica **riscos**, mapeia **salvaguardas** e lista **não-conformidades a remediar**. É **minuta** — a conclusão jurídica e a adequação à LGPD/ANPD são da Dra. (R3). Toda afirmação carrega selo Proof-First; o que depende de fato não confirmado vai marcado.

---

## 1. Identificação
| Campo | Valor | Selo |
|---|---|---|
| Controlador | MEU CUMPADRE — ORQUESTRAÇÃO DOCUMENTAL E TECNOLOGIA LTDA. (CNAE 6201-5/01) | `[VERIFICADO]` |
| Papel do MC nos dados do dossiê | **Operador fiduciário** (figura proposta — S1/S2) → o cidadão é **titular originário**; em S3 o escritório torna-se **controlador** | `[VERIFICADO — ADR-009b §2.4/3]` · ⚠️ figura atípica perante ANPD (ver §8.5) |
| **Encarregado (DPO)** | **NÃO nomeado formalmente** (LGPD art. 41) | ❌ `[NÃO-CONFORMIDADE — §8.3]` |
| Titulares | Cidadãos **hipervulneráveis** (idoso, analfabeto funcional, PcD, trabalhador rural, mãe solo) | `[VERIFICADO]` |
| Documentos-base | ADR-009a v2.0 · ADR-009b v1.0 · ADR-016 · ADR-014 (ZapSign) | `[VERIFICADO]` |

---

## 2. Descrição do tratamento

### 2.1 Finalidades
1. **Custódia fiduciária de credenciais gov.br** para protocolo e acompanhamento do pedido INSS (E0→E7).
2. **Montagem do dossiê probatório "vivo"** (Proof-First) e entrega ao cidadão (S2).
3. **Transferência opcional** do dossiê à advogada escolhida pelo cidadão (S3), sob token assinado.

### 2.2 Categorias de dados tratados
| Categoria | Exemplos | Natureza LGPD |
|---|---|---|
| Identificação | nome, CPF, telefone, data de nascimento, e-mail | Pessoal (art. 5º I) |
| Credencial de acesso | **senha gov.br** (usuário = CPF) | Pessoal sensível por risco — acesso a toda a vida digital-cidadã |
| Previdenciária | NB, CNIS, vínculos, tempo de contribuição | Pessoal |
| **Saúde** | **CID**, laudos, atestados (B31/B91 etc.) | **SENSÍVEL (art. 5º II)** |
| Voz/biográfico | áudios da pessoa narrando a história | Pessoal (voz) |
| Documental | certidões, bloco de produtor, ITR, carteira de sindicato | Pessoal (pode conter sensível) |
| Metadados operacionais | quem/quando/qual credencial/dispositivo (audit log) | Pessoal |

### 2.3 Ciclo de vida do dado (onde vive, por quanto tempo, sob que base)
**A) Credenciais gov.br (ADR-009a):**
- **Cofre único Bitwarden Org MC** (AES-256, 2FA TOTP, auto-lock 15min). **Regra Zero (conduta vedada por design):** a senha gov.br jamais é inserida no ClickUp.
- Custódia **fiduciária e temporária**; encerra no **1º gatilho**: parecer conclusivo (D+0) **ou** cancelamento (D+0). **Não há 3º gatilho.**
- No encerramento: move p/ "Arquivados", **remove o valor da senha**, preserva só metadata; orienta o cidadão a trocar a senha (LGPD art. 6º VI).
- **Retenção como cobrança: VEDADA por design** (CDC 39 V · CP 146/345 · LGPD 18 VI).

**B) Dossiê — Três Estados (ADR-009b):**
| Estado | Onde | TTL | Base legal |
|---|---|---|---|
| **S1 Intermediário** | GCP KMS, **dupla chave** (MC + chave derivada do cidadão) | 30 (→60) dias | art. 7º V + 7º I (consentimento específico) · **não** legítimo interesse p/ hipervulnerável |
| **S2 Consolidado** | PDF/A ICP-Brasil **entregue ao cidadão**; MC **apaga em 7 dias**; *sealed envelope* cifrado 10 anos | 7 dias no MC | art. 18 + 6º III (minimização) |
| **S3 Probatório** | Vault da **advogada** (controladora); MC só guarda metadados de hand-off | CED/prescrição (~10 anos) | art. 7º V + EAOAB art. 7º II |
- Transição **S2→S3 só por decisão soberana do cidadão**, via **TTA** assinado (ZapSign, ADR-014).

### 2.4 Operadores/sub-operadores e compartilhamento
| Terceiro | Função | Observação Proof-First |
|---|---|---|
| Google Cloud (KMS, Storage, Vision OCR, Firestore, BigQuery) | cifra, OCR, índice | região **Brasil** `[confirmar contrato/residência de dados — FONTE PENDENTE]` |
| Bitwarden | cofre de credenciais | AES-256, 2FA `[VERIFICADO — ADR-009a]` |
| ZapSign | assinatura do TTA | LGPD-nativa, ISO 27001 `[VERIFICADO — ADR-014]` · **Autentique é vedada** |
| WhatsApp Cloud API (Meta) | canal de atendimento | ⚠️ **possível transferência internacional** (servidores Meta) — avaliar (§8.4) |
| Advogada parceira (S3) | controladora pós-TTA | sob contrato Ψ₁ + EAOAB |

---

## 3. Necessidade e proporcionalidade
- **Necessidade:** o protocolo INSS exige acesso ao gov.br e prova material (Proof-First). A custódia é **meio** para o cidadão exercer o próprio direito — não um fim.
- **Minimização:** S1 cifra; S2 apaga em 7 dias; S3 não persiste no MC; credencial perde valor no encerramento. **Alinhado ao art. 6º III.**
- **Proporcionalidade (D>C>V):** o titular do dado é o **hipervulnerável** — o tratamento existe para **devolver-lhe** soberania (Inversão Cósmica), não para criar dependência. A arquitetura põe a titularidade do dossiê com o cidadão em 2 dos 3 estados.

---

## 4. Matriz de riscos aos direitos dos titulares
| # | Risco | Prob. | Impacto | Mitigação vigente | Residual |
|---|---|:--:|:--:|---|:--:|
| R1 | Credencial gov.br exposta (incidente 17/04 motivou ADR-009a) | Baixa | **Alto** | Bitwarden AES-256/2FA · Regra Zero ClickUp · impossibilidade por design | Baixo |
| R2 | Vazamento de **dado de saúde (CID)** | Baixa | **Alto** | OCR com **redação automática de CID/CPF de terceiros** (ADR-009b §3.1) · cifra | Médio ⚠️ |
| R3 | Acesso indevido por dispositivo compartilhado | Baixa | Médio | auto-lock 15min · log de dispositivos · 2FA | Baixo |
| R4 | Janela de 7 dias entre S2 entregue e apagado | Baixa | Médio | cifra em repouso · audit trail · opção de reduzir p/ 3 dias | Médio ⚠️ |
| R5 | **Consentimento inválido** (texto da linha 316 cita "três opções" superadas) | **Alta** | **Alto** | — | ❌ **ALTO — §8.1** |
| R6 | Re-identificação via metadados / **CPF em claro no Bitwarden ativo** | Média | Médio | pseudônimo no nome do item; **mas usuário = CPF em claro** | Médio ⚠️ **§8.2** |
| R7 | Retenção de credencial como cobrança | Eliminada | Alto | vedação arquitetural + gatilhos D+0 | Eliminado |
| R8 | Transferência internacional sem salvaguarda (WhatsApp/Meta; ADR-012 Bedrock) | Média | Médio | — | Médio ⚠️ **§8.4** |
| R9 | Figura "operador fiduciário" não reconhecida pela ANPD | Média | Médio | contratos bilaterais explicitando papéis | Médio ⚠️ **§8.5** |
| R10 | Ausência de Encarregado (DPO) | Alta | Médio | — | ❌ **§8.3** |

---

## 5. Salvaguardas já implementadas (lado positivo, Proof-First)
- **Cofre único + Regra Zero** (ADR-009a) — credencial fora do ClickUp, por arquitetura.
- **Cifra dupla chave em S1** + **cryptographic erasure** em S2 (destruição da DEK) — direito ao esquecimento funcional.
- **ICP-Brasil + hash encadeado + RFC 3161** — cadeia de custódia/integridade.
- **Vedação de retenção como coerção** — proibição arquitetural, não só contratual.
- **Anti-injection (ADR-016)** — documento do cidadão é **dado, nunca instrução**; sanitização (ExifTool/qpdf/zero-width).
- **Comunicação processual mesmo na inadimplência** (CDC 6º III) — não se usa o silêncio como pressão.

---

## 6. Bases legais por operação (resumo)
art. 7º V (execução de contrato) · 7º I (consentimento específico por transição) · 6º III (minimização) · 18 (direitos do titular) · 46 (segurança) · 48 (incidente). Dado de **saúde (CID)** → exige hipótese do **art. 11** (consentimento específico e destacado, ou tutela da saúde) — **confirmar enquadramento (§8.6)**.

---

## 7. Direitos dos titulares (art. 18) — como são exercidos
Acesso, correção, eliminação ("apaga tudo meu" → destrói DEK), portabilidade (dossiê S2 é do cidadão, levável a qualquer advogado), informação sobre compartilhamento. Canal: WhatsApp nativo. ⚠️ **Falta o procedimento formal documentado de atendimento ao titular e o canal do Encarregado** (§8.3).

---

## 8. ⚠️ NÃO-CONFORMIDADES E PENDÊNCIAS (o output honesto deste RIPD)

### 8.1 ❌ ALTA — Consentimento desatualizado (linha 316 do ADR-009b)
O texto de consentimento do TTA declara escolha "**entre três opções** apresentadas pelo Meu Cumpadre" (marketplace de 3 advogadas — arranjo **superado** pela **exclusividade da Dra. Juliana até dez/2026**). Consentimento que descreve uma realidade que não existe mais é **frágil** (LGPD art. 8º §1º — consentimento informado).
→ **Remediar:** **re-coletar consentimento** com texto fiel à exclusividade vigente; sanear ADR-009b (linha 316) e o schema do TTA. *(execução MC + validação R3)*
> ⚠️ **Ordem de leitura (para a Dra. não ver fonte e RIPD se contradizerem):** o **ADR-009b ainda traz o marketplace de 3 advogadas como vigente** no próprio texto. Por isso, o **saneamento do ADR-009b (caso 3 da bancada) deve ser lido junto/antes** deste RIPD — este relatório já está mais atual que a sua própria fonte.

### 8.2 ⚠️ MÉDIA — Pseudonimização incompleta no ADR-009a
No Bitwarden, o **nome do item é pseudônimo** (ex.: `Hib001 - gov.br`), **mas o campo usuário guarda o CPF em claro**; nos "Arquivados" usa-se "CPF hash". Inconsistência: o dado ativo é mais exposto que o arquivado.
→ **Remediar:** pseudonimizar/tokenizar o identificador também nos ativos (ou justificar a necessidade do CPF em claro para o login gov.br, documentando a decisão). *(execução MC)*

### 8.3 ✅ Encarregado (DPO) nomeado (art. 41) — RESOLVIDO
→ ✅ **RESOLVIDO (08/06/2026):** Encarregado nomeado por **ATO FORMAL SELADO** (`MC-ATO-NomeacaoEncarregado-DPO-v1_0-SELADO-FIRMADO-2026-0608`) — **Alessandro de Souza Neves** (Founder, acumula DPO na Crisálida; pessoa interna do MC, distinta da parecerista externa). Canal público: `alessandro.neves@meucumpadre.com.br` (a divulgar na Política de Privacidade/ToS · art. 41 §1º). Fecha o R10. *(condicionante (3) do Parecer #9 · validação R3 da Dra. pendente.)*

### 8.4 ⚠️ Transferência internacional (art. 33)
WhatsApp/Meta (canal) e o **Bedrock sa-east-1 do ADR-012** podem ou não configurar transferência internacional — é o que precisa ser avaliado.
→ **Remediar:** avaliar e, se for o caso, adotar cláusulas-padrão/garantias (art. 33 V). *(é o próprio caso condicionado "ADR-012" na fila da Dra.)*

### 8.5 ⚠️ Figura "operador fiduciário" atípica
Não expressamente prevista na LGPD.
→ **Remediar:** parecer de especialista LGPD + eventual consulta de tomada de subsídios à ANPD (já previsto no ADR-009b §7.2). *(R3 + estratégico)*

### 8.6 ⚠️ Enquadramento do dado de saúde (art. 11)
CID/laudos são sensíveis; confirmar a hipótese do art. 11 (consentimento destacado vs. tutela da saúde).
→ *(R3)*

### 8.7 ⚠️ Resíduo R2/R4
Reforçar a redação automática de CID (testar cobertura) e avaliar reduzir a janela S2 de 7→3 dias.

---

## 9. Conclusão (operacional — não jurídica)
A arquitetura de custódia do MC é, no desenho, **madura e protetiva** (cofre único, três estados, cifra, vedação de retenção-coerção) e coloca a **dignidade/soberania do hipervulnerável no centro**. Os **riscos residuais materiais** concentram-se em **7 pendências** (§8) — sendo **duas críticas**: **(8.1) consentimento desatualizado** e **(8.3) ausência de Encarregado**. Nenhuma é estrutural; todas são **remediáveis** com as ações indicadas.

> **O MC NÃO conclui pela conformidade** — isso é da Dra. Este RIPD organiza a fotografia e as pendências para o **parecer R3**.

## 10. Perguntas para a Dra. (R3)
1. O **enquadramento de bases legais** (§6), em especial o **art. 11** para dado de saúde, está correto?
2. A figura **"operador fiduciário"** (S1/S2) é defensável perante a ANPD, ou requer reenquadramento (controlador/operador clássico)?
3. A **re-coleta de consentimento** (§8.1) e o **texto** corrigido — qual a redação que a senhora valida?
4. **Transferência internacional** (§8.4): WhatsApp/Meta e Bedrock sa-east-1 exigem cláusulas-padrão? (conecta ao caso ADR-012)
5. Há **outra não-conformidade** que o MC não enxergou?

---
**FIREWALL OAB:** minuta de compliance (atividade-meio). A análise jurídica, o enquadramento e a conclusão de conformidade são da Dra. Juliana Pereira de Melo (OAB-GO 38.662). O MC mapeia fatos e pendências; a advogada decide.
*RIPD v0.1 PROVISIONAL · Code TALÃO · 06/06/2026 · ancorado em ADR-009a/009b (texto integral lido) · **revisão Sister Anciã incorporada** (âncoras todas verificadas contra os ADRs; 2 reparos de superfície; cross-ref de ordem de leitura com o saneamento ADR-009b) · D > C > V · Proof-First · ∞*
