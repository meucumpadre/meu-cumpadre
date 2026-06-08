---
tipo: pop
subtipo: protocolo-operacional-padrao
codigo: MC-POP-Encerramento-Caso
versao: 1.0
data-criacao: 2026-04-27
produzido-por: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: SELADO
revisao-pendente: cronometragem A4 em Hib001 → calibração v1.1
tags: [pop, e7, encerramento, soberania, bitwarden-d0, cryptographic-erasure, phi4-ativacao, alessandro-executa]
caminho-vault: 06-OPERACOES/protocolos/MC-POP-Encerramento-Caso-v1_0-2026-0427.md
relaciona-com:
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1.1-2026-0427
  - MC-POP-Bitwarden-Custodia-v1.0-2026-0427 (PROTOCOLO D)
  - MC-POP-E6-Resolucao-v1.0-2026-0427 (variantes de entrada)
  - MC-POP-Handoff-Juridico-v1.0-2026-0427 (variante via Handoff)
  - MC-ADR-009a-Custodia_Credenciais_GovBr-v2.0-2026-0425
  - MC-ADR-009b-TresEstados-Custodia-Dossie-v1.0-2026-0417 (cryptographic erasure §8.7.4)
classificacao: TRADE SECRET (LPI arts. 195 XI/XII)
---

# MC-POP-Encerramento-Caso — E7 Soberania ou Despedida

> **Posição na Jornada:** E6 (Resolução) → **E7 (Soberania)** OU encerramento via Handoff Jurídico OU encerramento por inadimplência D+60
> **Custo médio mapeado:** R$ 7,90
> **Tempo médio:** 60-90 min (caso padrão) · 90-120 min (caso Φ₄ ativação) · 30 min (caso Handoff direto)
> **Característica única:** **fechamento ético do ciclo** · cryptographic erasure de S2 · Bitwarden D+0 · cidadão recupera plena autonomia digital · MC sai de cena com dignidade

---

## 1. Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo (1 frase)** | Encerrar oficialmente a relação operacional MC↔cidadão pós-E6 com integridade técnica (cryptographic erasure de S2, apagamento Bitwarden em D+0, archivamento de hashes em `99_arquivado/`), respeito ético (Orientação de Troca de Senha entregue, cidadão recupera autonomia plena), e diferenciação por tipo de saída (concessão integral · concessão integral + Φ₄ ativo · indeferimento aceito · saída via Handoff · saída por inadimplência D+60). |
| **Gatilhos possíveis** | (a) Task em `E7-Soberania` vinda do POP-E6 com Φ₄ dispensado · (b) Task em `E7-Soberania-Phi4-Ativo` vinda do POP-E6 com Φ₄ aceito · (c) Task em `E7-Soberania-via-Handoff` vinda do POP-Handoff-Jurídico · (d) Encerramento por inadimplência D+60 (POP-Bitwarden PROTOCOLO E) |
| **Operador único** | **Alessandro (T3)** — apagamento é ato grave (decisão CEO 27/04/2026 — D3 selada). Beto **NÃO tem permissão técnica** de deletar credenciais ou peças de S2. |
| **Suporte operacional** | Beto — comunicação ao cidadão · entrega de "Orientação de Troca de Senha" · acompanhamento durante a janela de 7 dias |
| **Tempo estimado** | 60-90 min padrão · 30 min via Handoff · 90-120 min com Φ₄ |
| **Custo estimado** | R$ 7,90 |
| **Status A4** | Estimativa de engenharia — calibrar com Hib001 |

---

## 2. Princípios invioláveis aplicáveis a este POP

1. **D > C > V** — encerramento é momento de **devolução de soberania**. Cidadão sai com mais autonomia do que entrou — esse é o teste último da Inversão Cósmica.
2. **Bitwarden apagado em D+0 da entrega/cancelamento.** ADR-009a v2.0 §3 inviolável. Retenção de credencial pós-encerramento = **violação grave de governança.**
3. **Cryptographic erasure de S2 em D+7 da entrega.** ADR-009b §8.7.4. Apagamento de `01_brutos/` + `02_processados/` (mantém `03_dossie/` em variante Φ₄ ativo). Operacionalizado por **Alessandro pessoalmente** (D3 selada 27/04/2026).
4. **`99_arquivado/` mantido por 10 anos.** Audit trail: hashes + manifest JSON + TTA (se houver) + Orientação de Troca de Senha + áudios de consentimento. **Sem conteúdo recuperável** (cryptographic erasure das peças).
5. **Orientação de Troca de Senha gov.br é OBRIGATÓRIA** antes de qualquer apagamento Bitwarden. Cidadão precisa retomar controle ANTES de MC perder capacidade técnica de auxiliar.
6. **Φ₄ ativo NÃO impede E7.** Φ₄ é serviço novo, contrato separado · E7 do Φ₁ encerra normalmente · Φ₄ inicia em paralelo com nova custódia Bitwarden de escopo restrito.
7. **Despedida com dignidade.** Mesmo em caso de indeferimento aceito ou Handoff, fechamento é positivo. Mensagem de encerramento (§7) tem peso institucional — última impressão importa.

---

## 3. Variantes de entrada — qual fluxo aplicar?

| Variante de entrada | Status ClickUp | Fluxo a seguir |
|---|---|---|
| **V1** Concessão · Φ₄ DISPENSADO | `E7-Soberania` | §4 Fluxo Padrão Pleno (todos os blocos A-G) |
| **V2** Concessão · Φ₄ ACEITO | `E7-Soberania-Phi4-Ativo` | §5 Fluxo Φ₄ Ativo (Bitwarden mantido com escopo restrito · S2 parcial mantida) |
| **V3** Indeferimento aceito · sem Φ₄ | `E7-Soberania` | §4 Fluxo Padrão Pleno |
| **V4** Indeferimento aceito · com Φ₄ (cidadão tem outro benefício INSS pré-existente) | `E7-Soberania-Phi4-Ativo` | §5 Fluxo Φ₄ Ativo |
| **V5** Handoff Jurídico (Rota C tardia ou inicial) | `E7-Soberania-via-Handoff` | §6 Fluxo via Handoff (apagamento simultâneo S3 + Bitwarden) |
| **V6** Inadimplência D+60 | `E7-Encerramento-Inadimplencia` | §6.5 Fluxo Inadimplência (via PROTOCOLO E do POP-Bitwarden) |

---

## 4. §4 — FLUXO PADRÃO PLENO (V1 e V3)

### 4.1 Bloco A — Preparação (10 min)

| # | Ação | Tempo |
|---|---|---|
| 1 | Alessandro abre task ClickUp `E7-Soberania > [Pseudônimo]` + manifesto + pasta Drive | 2min |
| 2 | Confere completude do POP-E6: decisão registrada, conversa realizada, Φ₄ dispensado, comprovante de pagamento da 3ª parcela (se concessão) ou aceite formal de indeferimento (se indeferido) | 5min |
| 3 | Confere Bitwarden item `gov-br-[Pseudônimo]` ATIVO · `historico-acessos` populado · audit log do mês exportado (se for fim de mês) | 3min |

### 4.2 Bloco B — Entrega da Orientação de Troca de Senha (15 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 4 | Alessandro/Beto envia ao cidadão **"Orientação de Troca de Senha gov.br"** (template padrão `MC-TEMPLATE-Orientacao-Troca-Senha-GovBr-v1.0` — §6 do POP-Bitwarden) | Beto | 5min |
| 5 | Anexa também versão em **áudio** (Beto grava lendo o documento — para cidadão de baixa literacia) | Beto | 5min |
| 6 | Beto explica: *"Cumpadre, quando o senhor / a senhora trocar a senha, me manda um print confirmando — aí eu apago a senha do nosso cofre. Aí o senhor fica com tudo só pra senhor."* | Beto | 2min |
| 7 | Beto agenda **lembrete de 48h** caso cidadão não responda (resposta lenta é normal em hipervulneráveis) | Beto | 1min |
| 8 | Salva cópia da Orientação enviada em `05_encerramento/orientacao-troca-senha.pdf` · hash registrado | Alessandro | 2min |

### 4.3 Bloco C — Janela de troca de senha pelo cidadão (variável · 1-7 dias)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 9 | Cidadão troca senha do gov.br autonomamente | Cidadão | (variável) |
| 10 | Cidadão envia print/confirmação para Beto pelo WhatsApp | Cidadão | (variável) |
| 11 | Se cidadão não responder em 48h: Beto envia lembrete amistoso (§7.1) | Beto | (se necessário) |
| 12 | Se cidadão tiver dificuldade técnica: Beto oferece videochamada de suporte | Beto | (se necessário) |
| 13 | Cidadão confirma troca de senha **conclusiva** | Cidadão | — |

### 4.4 Bloco D — Apagamento Bitwarden D+0 (10 min · Alessandro pessoalmente)

> ⚠️ **D3 selada (27/04/2026): Apagamento Bitwarden é executado APENAS por Alessandro.** Beto **NÃO tem permissão técnica** de deletar itens.

| # | Ação | Tempo |
|---|---|---|
| 14 | Alessandro acessa Bitwarden Org MC · localiza item `gov-br-[Pseudônimo]` | 2min |
| 15 | **Exporta entrada de audit log** do item (todos os `historico-acessos` + metadata) · salva em `05_encerramento/bitwarden-audit-YYYYMMDD.pdf` | 3min |
| 16 | Calcula hash do audit log · registra | 1min |
| 17 | **Apaga o item Bitwarden** (delete permanente · NÃO mover para lixeira · purge se opção disponível) | 1min |
| 18 | Confirma apagamento via tela de Bitwarden (item desaparece da Coleção `Casos B2C Ativos/`) | 1min |
| 19 | Atualiza Seção 9 do manifesto: `Bitwarden: item APAGADO em YYYY-MM-DD às HH:MM por Alessandro · Cidadão confirmou troca de senha em YYYY-MM-DD · Audit log arquivado em [path]` | 2min |

### 4.5 Bloco E — Cryptographic erasure D+7 (programado · Alessandro pessoalmente em D+7)

> ⚠️ **D+7 da entrega final = D+7 da troca de senha confirmada pelo cidadão.** Apagamento é Alessandro pessoalmente.

| # | Ação | Tempo |
|---|---|---|
| 20 | Em D+7 (sub-task ClickUp recorrente dispara): Alessandro acessa pasta Drive | 2min |
| 21 | Confere que **`03_dossie/dossie-v1.pdf` foi entregue ao cidadão** (concessão: dossiê pode ser entregue como histórico · indeferimento: idem se cidadão pediu) | 3min |
| 22 | Move snapshot de hashes + manifest JSON + TTA (se houver) + áudios + Orientação de Troca de Senha para `99_arquivado/snapshot-encerramento-YYYYMMDD.zip` | 5min |
| 23 | Calcula hash do snapshot zipado · registra | 2min |
| 24 | **Apaga conteúdo de `01_brutos/`** (todas as subpastas e arquivos) | 3min |
| 25 | **Apaga conteúdo de `02_processados/`** | 3min |
| 26 | **Apaga `03_dossie/dossie-v1.pdf`** e aditivos (mantém apenas hashes em arquivo) | 1min |
| 27 | **Apaga `04_inss/`** subpastas (cartas, andamentos · só preservar hashes em snapshot) | 2min |
| 28 | Confirma na pasta-raiz: apenas `00_manifesto.md` + `99_arquivado/` permanecem | 1min |
| 29 | Atualiza manifesto Seção 9: `Cryptographic erasure executado em YYYY-MM-DD às HH:MM por Alessandro · Snapshot de auditoria preservado em 99_arquivado/snapshot-encerramento-YYYYMMDD.zip · Hash [HASH]` | 3min |

### 4.6 Bloco F — Comunicação final ao cidadão (5 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 30 | Beto envia **Mensagem de Encerramento** (§7.2 ou §7.3 conforme V1/V3) | Beto | 5min |

### 4.7 Bloco G — Fechamento administrativo (10 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 31 | Alessandro atualiza cabeçalho YAML do manifesto: `etapa-atual = E7-CONCLUIDO` · `data-encerramento = YYYY-MM-DD` · `estado-custodia = ARQUIVADO` | Alessandro | 2min |
| 32 | Move task ClickUp para `Casos-Encerrados-AuditOnly` | Alessandro | 1min |
| 33 | Atualiza dashboard de métricas operacionais (cronometragem A4 fechada para este caso) | Alessandro | 5min |
| 34 | Calcula tempo total da jornada (E0→E7) e custos cumulativos · registra em `MC-METRICAS-Casos-Encerrados-YYYY-MM.md` | Alessandro | 2min |

---

## 5. §5 — FLUXO Φ₄ ATIVO (V2 e V4)

> Diferença principal: Bitwarden **NÃO é apagado** em D+0 · `03_dossie/` **pode ser preservado** parcialmente · S2 **muda de escopo** (de "custódia da jornada" para "monitoramento Φ₄").

### 5.1 Bloco A — Preparação (10 min)

Idêntico ao §4.1 mas confirma que Contrato Φ₄ v1.0 está assinado e hash registrado.

### 5.2 Bloco B — Entrega da Orientação de Troca de Senha **MODIFICADA** (15 min)

> ⚠️ Cidadão **NÃO precisa trocar a senha** se Φ₄ está ativo. Mas precisa receber comunicação clara sobre o novo escopo da custódia.

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 4f | Beto envia ao cidadão **"Comunicação Φ₄ — Mudança de Escopo da Custódia"** (§7.4) explicando que a senha gov.br fica no Bitwarden, mas **agora apenas para os fins do Guardião** (monitoramento Meu INSS + Registrato) | Beto | 5min |
| 5f | Reforça direitos do cidadão: cancelamento a qualquer momento por mensagem WhatsApp · cancelamento dispara Fluxo Padrão Pleno (§4) imediatamente | Beto | 2min |
| 6f | Cidadão confirma compreensão por mensagem ou áudio | Cidadão | (variável) |
| 7f | Salva comunicação em `05_encerramento/comunicacao-phi4-escopo-custodia.pdf` · hash registrado | Alessandro | 2min |

### 5.3 Bloco C — Atualização Bitwarden (10 min · Alessandro)

| # | Ação | Tempo |
|---|---|---|
| 8f | Alessandro acessa Bitwarden Org MC · item `gov-br-[Pseudônimo]` | 1min |
| 9f | **NÃO apaga** o item · atualiza campo `escopo-custodia` para `phi4-monitoramento-mensal` | 2min |
| 10f | Atualiza campo Notes: `OBSERVACOES: Custódia em escopo Φ₄ desde YYYY-MM-DD · Mandato escrito em [link]` | 2min |
| 11f | Adiciona entrada no `historico-acessos`: `YYYY-MM-DD HH:MM \| Alessandro \| transicao-phi4-iniciada` | 1min |
| 12f | Move o item da Coleção `Casos B2C Ativos/` para nova Coleção `Φ₄ Guardião Ativo/` (criar se não existir) | 3min |
| 13f | Permissões da nova Coleção: Alessandro Manager · Beto User (acesso por designação para suporte de cancelamento) | 1min |

### 5.4 Bloco D — Cryptographic erasure parcial em D+7 (Alessandro · em D+7)

| # | Ação | Tempo |
|---|---|---|
| 14f | **Apaga `01_brutos/`** completamente (S1 não é mais necessário) | 3min |
| 15f | **Apaga `02_processados/`** completamente | 2min |
| 16f | **PRESERVA `03_dossie/dossie-v1.pdf`** (cidadão pode precisar de cópia · referência histórica) | — |
| 17f | **PRESERVA `04_inss/04d_decisao/decisao-YYYYMMDD.pdf`** (referência da concessão) | — |
| 18f | Apaga `04_inss/04a_protocolo/`, `04b_exigencias/`, `04c_andamentos/` (snapshot vai para 99_arquivado/) | 3min |
| 19f | Cria `06_phi4-monitoramento/` (sub-pasta para varreduras mensais Φ₄) | 1min |
| 20f | Atualiza manifesto Seção 9: estado de custódia agora é `S2-FOCO-PHI4` (variante restrita) | 2min |

### 5.5 Bloco E — Primeira varredura Φ₄ programada (5 min)

| # | Ação | Tempo |
|---|---|---|
| 21f | Alessandro programa **primeira varredura mensal Φ₄** para D+30 (sub-task recorrente ClickUp em Space `🛡️ Φ₄ Guardião`) | 3min |
| 22f | Comunica Beto: cidadão entrou no rol Φ₄ · primeira mensalidade R$19,90 cobrada conforme calendário | Beto | 1min |
| 23f | Beto agenda cobrança Φ₄ no extrato MC | Beto | 1min |

### 5.6 Bloco F — Comunicação ao cidadão (5 min)

Beto envia §7.5 — confirmação Φ₄ ativo + lembrança de cancelamento livre.

### 5.7 Bloco G — Fechamento administrativo

Idêntico §4.7 mas status final = `Φ₄-Ativo-Mensal`.

---

## 6. §6 — FLUXO VIA HANDOFF (V5)

> Esta variante é mais curta porque o **TTA já foi assinado** no POP-Handoff e a transferência S2→S3 já ocorreu.

### 6.1 Bloco A — Confirmação de transição S2→S3 concluída (5 min)

| # | Ação | Tempo |
|---|---|---|
| 1h | Alessandro confere no manifesto: `estado-custodia = S3` · TTA hash registrado · Dra. Juliana confirmou recebimento | 3min |
| 2h | Confere `99_compartilhado-juliana/` desativada (sem permissões) | 2min |

### 6.2 Bloco B — Apagamento Bitwarden D+0 (10 min · Alessandro)

Idêntico §4.4 — Bitwarden apagado em D+0. **Em Handoff, não há Φ₄** (cidadão não tem benefício INSS · não há objeto para o radar).

### 6.3 Bloco C — Cryptographic erasure D+7 (Alessandro)

| # | Ação | Tempo |
|---|---|---|
| 3h | Em D+7 (sub-task dispara): Alessandro confirma com Dra. Juliana que dossiê está integralmente em vault dela | 3min |
| 4h | **Apaga `01_brutos/`, `02_processados/`, `03_dossie/`, `04_inss/` completamente** (Dra. Juliana tem custódia integral em S3) | 8min |
| 5h | Move TTA + manifest hash + Orientação de Troca de Senha para `99_arquivado/` | 3min |
| 6h | Calcula hash do snapshot · registra | 2min |

### 6.4 Bloco D — Comunicação final (5 min)

Beto envia §7.6 — confirmação de encerramento via Handoff.

### 6.5 Variante V6 — Inadimplência D+60

> Trigger via POP-Bitwarden PROTOCOLO E.

| # | Ação | Tempo |
|---|---|---|
| 1in | Alessandro confere: cidadão recebeu Notificação D+5 + Notificação D+20 · ainda inadimplente em D+60 | 3min |
| 2in | Envia ao cidadão: cancelamento unilateral declarado por escrito (e-mail + WhatsApp) + **Orientação de Troca de Senha em 48h de antecedência** ao apagamento | 5min |
| 3in | Em D+60+48h: Alessandro executa **PROTOCOLO E completo do POP-Bitwarden** · apaga item Bitwarden | 5min |
| 4in | Cryptographic erasure D+7 acontece naturalmente (mas cidadão **não recebeu mais comunicação** sobre o caso) | (em D+7 do D+60) |
| 5in | Atualiza manifesto: `etapa-atual = E7-INADIMPLENCIA-D60` | 2min |
| 6in | Trigger §4.5 a §4.7 (cryptographic erasure + fechamento administrativo · Bloco F é §7.7) | (continua) |

---

## 7. Anexos — Scripts de mensagem

### 7.1 Lembrete amistoso de troca de senha

> *"Cumpadre, só passando aqui pra dizer que tô esperando sua confirmação da troca de senha do gov.br. Sem pressa, mas se precisar de ajuda pra fazer, é só me chamar — eu mando vídeo curtinho explicando. Bom dia 🙏"*

### 7.2 Mensagem de Encerramento — Variante V1 (Concessão sem Φ₄)

> *"Cumpadre 🌿, **caso encerrado**. Foi uma honra acompanhar o senhor / a senhora.*
>
> *Resumo final:*
> *• Benefício: [espécie] aprovado · DIP em curso*
> *• Senha gov.br: trocada pelo senhor · apagada do nosso cofre*
> *• Papéis: foram entregues · cópias operacionais apagadas em sete dias*
> *• Audit trail: guardamos por 10 anos só os hashes (números de impressão digital), por segurança jurídica · sem o conteúdo dos seus papéis*
>
> *Se um dia precisar de algo — outro benefício, dúvida, golpe que aparecer — pode voltar. A porta tá aberta.*
>
> *Que Deus te guarde, cumpadre. Tamo junto.*
>
> *— Alessandro e equipe Meu Cumpadre"*

### 7.3 Mensagem de Encerramento — Variante V3 (Indeferimento aceito)

> *"Cumpadre, **encerrando o caso por enquanto**. Lutamos junto, e desta vez o INSS disse não. Mas o senhor / a senhora não saiu daqui mais fraco — saiu sabendo seus direitos, com os papéis organizados, e com mais clareza do que entrou.*
>
> *Senha gov.br trocada · cofre nosso apagado · papéis apagados em sete dias.*
>
> *Se mudar a situação, ou se quiser tentar de novo no futuro, ou se for outra coisa que apareça, **pode voltar**. Sempre.*
>
> *Que Deus te guarde, cumpadre. Foi uma honra.*
>
> *— Alessandro e equipe Meu Cumpadre"*

### 7.4 Comunicação Φ₄ — Mudança de Escopo da Custódia (V2/V4)

> *"Cumpadre 🌿, conforme combinamos, vou continuar com o **Guardião** ativo. Pra isso a custódia da senha gov.br do senhor / da senhora **continua no nosso cofre digital**, mas agora para um único fim: monitorar Meu INSS e Registrato uma vez por mês, do jeito que combinamos.*
>
> *Direitos seus, sempre:*
> *• Cancelamento a qualquer momento por mensagem aqui no WhatsApp — sem multa, sem questionamento*
> *• Quando cancelar: apago a senha do cofre na hora, mando Orientação de Troca de Senha, e o senhor recupera 100% do controle*
> *• Mensalidade: R$19,90 — débito automático ou PIX*
> *• Primeiro relatório de varredura: chega em 30 dias*
>
> *Se concordar, manda um áudio confirmando. Se mudou de ideia e prefere encerrar, sem problema, é só dizer.*"

### 7.5 Confirmação Φ₄ ativo

> *"Cumpadre, **Guardião ativo** ✅. Próxima varredura em 30 dias. Vou te avisar do resultado, mesmo se for "tudo certo" — assim o senhor sabe que tô vigiando. Que Deus abençoe."*

### 7.6 Mensagem de Encerramento — Variante V5 (via Handoff)

> *"Cumpadre, **caso encerrado pelo nosso lado** — agora a Dra. Juliana cuida da parte judicial. Já entreguei tudo pra ela com a sua autorização (TTA), e ela tá com tudo organizado pra dar continuidade.*
>
> *A partir de agora, o senhor conversa direto com ela: [contato].*
>
> *Senha gov.br: troquei e apaguei do nosso cofre. Os papéis vão sair do nosso sistema em sete dias (a Dra. Juliana fica com cópia de tudo).*
>
> *Foi uma honra acompanhar até aqui, cumpadre. Que Deus te guarde nessa próxima fase.*
>
> *— Alessandro"*

### 7.7 Mensagem de Encerramento — Variante V6 (Inadimplência D+60)

> *"Cumpadre, conforme nosso contrato, depois de 60 dias sem retorno do senhor / da senhora sobre o pagamento, vou encerrar a relação aqui. Antes de apagar, te mandei (e mando de novo) a **Orientação de Troca de Senha gov.br** — daqui 48 horas vou apagar a senha do nosso cofre. Pode trocar agora pra ter certeza de que mais ninguém tem acesso.*
>
> *Audit trail (números de impressão digital dos papéis) fica guardado por 10 anos por exigência legal, sem o conteúdo. Mais nada.*
>
> *Se em outro momento o senhor quiser conversar, sobre este caso ou outro, **a porta tá aberta**. Sem ressentimento.*
>
> *Que Deus te guarde."*

---

## 8. Outputs do POP-Encerramento

### 8.1 V1/V3 (Fluxo Padrão Pleno)

- [ ] Orientação de Troca de Senha entregue · cidadão confirmou troca
- [ ] Bitwarden apagado em D+0 · audit log exportado em `05_encerramento/`
- [ ] `99_arquivado/snapshot-encerramento-YYYYMMDD.zip` criado · hash registrado
- [ ] `01_brutos/`, `02_processados/`, `03_dossie/`, `04_inss/` apagados em D+7
- [ ] Apenas `00_manifesto.md` + `99_arquivado/` na pasta-raiz
- [ ] Manifesto: `etapa-atual = E7-CONCLUIDO` · `estado-custodia = ARQUIVADO`
- [ ] Mensagem de Encerprovisional enviada · cidadão confirmou recebimento
- [ ] Task ClickUp em `Casos-Encerrados-AuditOnly`
- [ ] Métricas finais registradas

### 8.2 V2/V4 (Φ₄ Ativo)

- [ ] Comunicação Φ₄ — Mudança de Escopo enviada · cidadão confirmou
- [ ] Bitwarden **mantido** com escopo `phi4-monitoramento-mensal` · Coleção `Φ₄ Guardião Ativo/`
- [ ] `01_brutos/` e `02_processados/` apagados em D+7
- [ ] `03_dossie/dossie-v1.pdf` e `04_inss/04d_decisao/` **preservados** como referência
- [ ] `06_phi4-monitoramento/` criada
- [ ] Primeira varredura Φ₄ programada para D+30
- [ ] Cobrança Φ₄ R$19,90 iniciada
- [ ] Manifesto: `etapa-atual = Φ₄-ATIVO-MENSAL`
- [ ] Task ClickUp em Space `🛡️ Φ₄ Guardião` (recorrente)

### 8.3 V5 (via Handoff)

- [ ] Confirmação prévia: S2→S3 já concluída em POP-Handoff
- [ ] Bitwarden apagado em D+0
- [ ] **Apagamento integral** de S2 em D+7 (incluindo `03_dossie/` que está com Dra. Juliana)
- [ ] Mensagem §7.6 enviada
- [ ] Métricas registradas

### 8.4 V6 (Inadimplência D+60)

- [ ] Orientação de Troca de Senha enviada com 48h de antecedência
- [ ] Bitwarden apagado em D+60+48h
- [ ] Cryptographic erasure D+7 padrão
- [ ] Manifesto: `etapa-atual = E7-INADIMPLENCIA-D60`
- [ ] Mensagem §7.7 enviada (cidadão pode não confirmar — registrar tentativa)

---

## 9. Sub-protocolos especiais

### 9.1 Cidadão não responde após 7 dias da Orientação de Troca de Senha (V1/V3)

> Diferente da V6 (inadimplência) — aqui pagamento está OK mas cidadão sumiu pós-E6.

**Passos:**
1. Beto envia 2º lembrete amistoso em D+10
2. Beto envia 3º lembrete em D+20 com aviso de apagamento programado para D+30
3. Em D+30 sem resposta: Alessandro executa **apagamento Bitwarden compulsório** com aviso final ao cidadão
4. Manifesto registra: `Encerramento por silêncio do cidadão pós-E6 · troca de senha NÃO confirmada · MC apagou credencial em D+30 com aviso prévio`
5. Cryptographic erasure D+7 segue normalmente

### 9.2 Cidadão pede para manter senha custodiada após E6 (sem Φ₄)

> Cidadão confia tanto no MC que quer continuar com senha guardada para conveniência futura.

**Resposta:** **NÃO permitido.** Política inviolável: sem mandato Φ₄, **não há custódia.** Cidadão deve trocar senha. Se quiser custódia futura, pode pedir Φ₄ posteriormente (re-onboarding).

### 9.3 Φ₄ ativo cancelado posteriormente (qualquer momento)

> Cidadão decide cancelar Φ₄ depois de 1 mês, 6 meses ou 2 anos.

**Passos:**
1. Cidadão envia mensagem de cancelamento (WhatsApp · áudio · texto)
2. Beto confirma intenção: *"Cumpadre, vou cancelar o Guardião. Confirma com SIM, CANCELA?"*
3. Cidadão confirma
4. Trigger Fluxo Padrão Pleno §4 a partir do Bloco B (Orientação de Troca de Senha)
5. Manifesto registra: `Φ₄ cancelado em YYYY-MM-DD · Encerramento padrão executado`

### 9.4 Detecção em Φ₄ de irregularidade bancária crítica

> Durante varredura mensal, Φ₄ detecta consignado abusivo / fraude.

**Passos:**
1. Beto comunica cidadão imediatamente: *"Cumpadre, achei algo no seu extrato que pode ser problema. Posso te explicar?"*
2. Alessandro analisa o caso · prepara dossiê de irregularidade
3. Apresenta passarela Vertical Bancário (Ψ₁) — cidadão decide se quer ação contra o banco via advogada parceira (Dra. Juliana via Marketplace Ético — D2 selada)
4. Trigger novo POP-Handoff-Jurídico variante "Bancário" (a ser criado)
5. Φ₄ continua ativo durante a ação bancária

---

## 10. Métricas a registrar

- Variante de encerramento: V1/V2/V3/V4/V5/V6 (mix estratégico do mês)
- Tempo total da jornada E0→E7 (cumulativo de todos os POPs)
- Custo total da jornada (cumulativo de todos os POPs)
- Para V2/V4: cidadão aceitou Φ₄? Sinal estratégico do produto
- Para V5: tempo entre `decisão por Rota C` e `S3 ativado`
- Para V6: tempo entre `entrega do dossiê` e `D+60 inadimplência`
- Hash do snapshot de auditoria (registrar em ledger central)
- Houve aplicação de sub-protocolo §9.x?

---

## 11. Riscos e mitigações

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Beto tenta apagar Bitwarden sem permissão | BAIXA | Permissões técnicas Bitwarden bloqueiam (Beto é User, não Manager) · D3 selada explicitamente |
| Apagamento D+7 esquecido | MÉDIA | Sub-task recorrente ClickUp com alarme · audit mensal |
| Cidadão pede dossiê após cryptographic erasure | BAIXA-MÉDIA | Comunicar antes do D+7 · cidadão pode pedir cópia em E6/E7 ANTES do apagamento |
| Φ₄ ativo mas cidadão não usa cancelamento (esquecido) | MÉDIA | Auditoria semestral do rol Φ₄ · contato preventivo se sem comunicação por 6 meses |
| Snapshot de audit corrompido | BAIXA | Hash + cópia em GCP Cloud Storage Archive em Z2+ |
| Cidadão volta dizendo que não trocou senha (confusão) | BAIXA | Audit log Bitwarden + WhatsApp confirmam · não há reversão técnica |
| Inadimplência D+60 mas movimentação processual ativa | MÉDIA | POP-Bitwarden PROTOCOLO E + comunicação processual independente (CDC art. 6º III) |

---

## 12. Versionamento

| Versão | Data | Mudança |
|---|---|---|
| **1.0** | **2026-04-27** | **Versão inicial. Conformidade Jornada E0-E7 v1.1, ADR-009a v2.0 (Bitwarden D+0), ADR-009b §8.7.4 (cryptographic erasure D+7), POP-Bitwarden (PROTOCOLO D), POP-E6, POP-Handoff. Decisão CEO 27/04/2026 (D3: Alessandro pessoalmente). 6 variantes (V1-V6) cobrindo todos os desfechos. Φ₄ como variante com escopo restrito de custódia. Despedida com dignidade obrigatória.** |

### Roadmap

- **v1.1:** após cronometragem A4 com Hib001 — calibrar tempos por variante
- **v1.2:** após primeira ativação Φ₄ — calibrar workflow de varredura mensal e cancelamento posterior
- **v1.3:** integração com sistema de avaliação NPS pós-encerramento (cidadão avalia experiência)
- **v2.0:** Z2+ — automação de cryptographic erasure (DEK destruction no Cloud KMS) · audit log Tier 4 BigQuery · trigger automático D+7 e D+30

---

**FIM DO POP-Encerramento-Caso**
**MC-POP-Encerramento-Caso v1.0 — 27/04/2026**
**Hierarquia: Dignidade > Compliance > Viabilidade**
**Princípio fundacional: cidadão sai com mais autonomia do que entrou**
**Bitwarden D+0 · Cryptographic erasure D+7 · Audit trail 10 anos · Alessandro pessoalmente (D3)**
**Confidencialidade: TRADE SECRET INVIOLÁVEL**

---
## Links Relacionados

### Jornada
[[MC-PROCESSO-Jornada_E0E7_Mestre-v1_1-2026-0427]]

### ADRs e Governança
[[MC-ADR-007-CampoPrecificacao-v3_2-2026-0427]]
[[MC-ADR-009-TresEstados-Custodia-Dossie-v1_0-2026-0417]]
[[MC-CONTRATO-Phi1-MINUTA-v2_3-2026-0427]]
[[MC-PARTNER-JulianaMelo-Qualificacao-v1_2-2026-0421]]
[[_MC-RouterEthics_11_v1_1-2026-0505-CLevel]]

### Infraestrutura Documental
[[MC-SPEC-Drive-Estrutura-v1_0-2026-0427]]
[[MC-POP-Bitwarden-Custodia-v1_0-2026-0427]]

### Cadeia E0→E7
[[MC-POP-E1-PrimeiroContato-v1_0-2026-0427]]
[[MC-POP-E2-Triagem-Deliberacao-v1_0-2026-0427]]
[[MC-POP-E3-Coleta-Documental-v1_0-2026-0427]]
[[MC-POP-E3b-QA-Dossie-v1_0-2026-0427]]
[[MC-POP-E4-Protocolo-INSS-v1_0-2026-0427]]
[[MC-POP-E5-Watchdog-Exigencias-v1_0-2026-0427]]
[[MC-POP-E6-Resolucao-v1_0-2026-0427]]
[[MC-POP-Handoff-Juridico-v1_0-2026-0427]]

∞
