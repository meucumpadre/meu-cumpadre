---
tipo: pop
subtipo: protocolo-operacional-padrao
codigo: MC-POP-E3b-QA-Dossie
versao: 1.0
data-criacao: 2026-04-27
produzido-por: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: SELADO
revisao-pendente: cronometragem A4 em Hib001 → calibração v1.1
tags: [pop, e3b, qa-dossie, bridge-s1-s2, dossie-v1, hash-sha256, alessandro-executa, icp-brasil]
caminho-vault: 06-OPERACOES/protocolos/MC-POP-E3b-QA-Dossie-v1_0-2026-0427.md
relaciona-com:
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1.1-2026-0427
  - MC-POP-E3-Coleta-Documental-v1.0-2026-0427
  - MC-POP-E4-Protocolo-INSS-v1.0-2026-0427
  - MC-ADR-009b-TresEstados-Custodia-Dossie-v1.0-2026-0417 (transição S1→S2)
  - MC-SPEC-Drive-Estrutura-v1.0-2026-0427
  - 0_GRIMORIO_PREVIDENCIARIO_v2 (referência técnica de mínimo probatório)
classificacao: TRADE SECRET (LPI arts. 195 XI/XII)
---

# MC-POP-E3b — QA do Dossiê e Bridge S1→S2

> **Posição na Jornada:** E3 (Coleta Documental) → **E3b (QA Dossiê)** → E4 (Protocolo INSS)
> **Custo médio mapeado:** R$ 6,84 · **Tempo médio:** 60-90 min (caso típico) · até 180 min em rural fragmentado
> **Estado de custódia:** **S1 ativo na entrada** → **S2 ativado ao final** (transição atômica)
> **Característica única:** **única etapa exclusivamente humana de Alessandro** · não delegável a Beto · não automatizável em Z2+ sem revisão humana obrigatória

---

## 1. Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo (1 frase)** | Validar tecnicamente que o conjunto documental coletado em E3 é suficiente, coerente e probatório para o protocolo INSS, gerar o dossiê v1 consolidado em PDF assinado ICP-Brasil com carimbo de tempo RFC 3161, calcular hashes SHA-256 do consolidado e de cada peça individual, atualizar Confidence determinístico final e autorizar a transição S1→S2. |
| **Gatilho** | Task ClickUp em `E3b-QA-Dossiê` produzida pelo POP-E3 (com tronco comum 100% e checklist da vertical ≥80% validados). |
| **Operador único** | **Alessandro (T3)** — não delegável. QA é o ponto onde a expertise INSS de 22 anos materializa-se como diferencial. |
| **Suporte** | Beto — recebe sinalizações se Alessandro pedir docs adicionais antes de assinar |
| **Tempo estimado** | 60-90 min (caso típico Verde) · 90-180 min (Amarelo ou rural fragmentado) |
| **Custo estimado** | R$ 6,84 |
| **Status A4** | Estimativa de engenharia — calibrar com Hib001 |

---

## 2. Princípios invioláveis aplicáveis a este POP

1. **D > C > V** — se durante QA Alessandro detectar nó D que escapou em E2/E3 (ex: docs revelam violência doméstica não declarada) → pausar QA, escalar a rede de proteção, NÃO submeter para protocolo.
2. **Proof-First absoluto.** Cada documento referenciado no dossiê tem hash registrado. Hash do dossiê v1 é raiz da árvore de integridade. **Sem hash, sem dossiê.**
3. **Mínimo Probatório > Completude formal.** Cenários do Grimório §5.4 (rural) e equivalentes definem o mínimo aceitável por espécie. Checklist 100% completo é ideal, não obrigatório. **Mínimo probatório atingido = QA pode passar.**
4. **Confidence determinístico final é HONESTO.** Se durante QA o Confidence cair de Verde para Amarelo, ou de Amarelo para Vermelho, **registrar e comunicar ao cidadão antes de cobrar 2ª parcela.** Cidadão tem direito de reavaliar (Cláusula 2.3 arrependimento estendido).
5. **ICP-Brasil + RFC 3161 obrigatórios.** Dossiê v1 PDF é assinado digitalmente por Alessandro com certificado ICP-Brasil A3 + carimbo de tempo RFC 3161 (servidor confiável homologado ITI). Sem isso, dossiê é comum e perde valor probatório jurídico.
6. **Cabe a Alessandro detectar erros de espécie.** Se vertical confirmada em E2 estava errada (ex: deveria ser híbrida e foi tratada como rural pura), QA é o momento de corrigir antes do protocolo. Custo de erro de espécie cresce exponencialmente após E4.
7. **Transição S1→S2 só ocorre APÓS dossiê assinado.** Antes, S1 vivo. Após, S2 ativado e sub-pastas `01_brutos/` + `02_processados/` entram em contagem regressiva de D+7 para apagamento (mas só apagam **em E6/E7** — D+7 da entrega final, não da assinatura do dossiê).

---

## 3. Inputs obrigatórios (PRÉ-QA)

- [ ] Task ClickUp em `E3b-QA-Dossiê`
- [ ] `00_manifesto.md` com Seções 1-7 preenchidas
- [ ] Cabeçalho YAML do manifesto: `risco-confidence` populado · `zona-router-ethics` populada
- [ ] `01_brutos/01a_identidade/` — RG, CPF, certidões — completos
- [ ] `01_brutos/01b_cnis-vinculos/` — CNIS, CTPS — completos
- [ ] `01_brutos/01c_residencia/` — comprovante atual
- [ ] Módulos por vertical (`01e..i`) — checklist da vertical ≥80% validado em E3
- [ ] `02_processados/ocr-text/` — OCR processado para todos os docs
- [ ] `02_processados/validados/` — peças validadas pelo Alessandro durante E3 (Bloco F)
- [ ] Certificado ICP-Brasil A3 de Alessandro válido e desbloqueado
- [ ] Acesso a servidor de timestamping RFC 3161 confiável (ITI homologado)

---

## 4. Passos numerados

### 4.1 Bloco A — Recepção e revisão narrativa (15 min)

| # | Ação | Tempo |
|---|---|---|
| 1 | Alessandro abre task ClickUp `E3b-QA-Dossiê > [Pseudônimo]` + pasta Drive + manifesto | 1min |
| 2 | Lê **manifesto inteiro** (Seções 1-7) com atenção · revisita Tese (Seção 3) | 8min |
| 3 | Confirma vertical/espécie ainda é a correta após coleta · se mudou, **STOP** e reabrir POP-E2 | 3min |
| 4 | Confirma que nenhum nó D ou C foi acionado durante E3 (revisar Seção 6 Decisões e ajustes) | 3min |

### 4.2 Bloco B — Conferência de tronco comum (10 min)

| # | Ação | Tempo |
|---|---|---|
| 5 | Abre `01_brutos/01a_identidade/` · confere RG, certidões, CPF — todos legíveis e datas coerentes | 3min |
| 6 | Abre `01_brutos/01b_cnis-vinculos/` · confere **CNIS completo** (todas as competências, sem buracos críticos) e CTPS (todas as páginas) | 4min |
| 7 | Abre `01_brutos/01c_residencia/` · confere comprovante recente (≤3 meses) | 1min |
| 8 | Cruza dados pessoais entre os documentos (nome, data nascimento, filiação) — **detectar discrepâncias** | 2min |

### 4.3 Bloco C — Conferência da vertical (15-30 min · varia por vertical)

> ⚠️ Bloco específico por vertical. Aplicar conforme Tabela §3.3 do MC-SPEC-Drive.

#### 4.3.1 Para Rural / Híbrida (Hib001)

| # | Ação | Tempo |
|---|---|---|
| 9R | Verifica **categorias 1-7 do checklist rural** (Grimório Cap. 5.3) — quantas categorias têm pelo menos 1 doc validado? | 5min |
| 10R | Aplica **regras de cenário** (Grimório §5.4): Cenário 1 (≥3 categorias) · Cenário 2 (2 categorias + auxílio testemunhal) · Cenário 3 (1 categoria + genealogia) · Cenário 4 (zero — força declaração + Anexo 8) | 5min |
| 11R | Confere **DAP/CAF** ou Anexo 8 (Autodeclaração Segurado Especial) presente | 2min |
| 12R | Para híbrida (Tema 1007 STJ): confere período rural + período urbano somam carência mínima | 3min |
| 13R | Aplica **Súmula 6 TNU** se aplicável (docs do cônjuge) — registrar uso na Seção 6 do manifesto | 5min |
| 14R | Confidence rural ajustado conforme cenário detectado | 5min |

#### 4.3.2 Para Incapacidade (B31/B32/B91/B92/B42/B43)

| # | Ação | Tempo |
|---|---|---|
| 9I | Verifica atestados médicos com **CID-10** explícito · datas ≤6 meses preferíveis | 5min |
| 10I | Confere coerência: CID-10 nos atestados × narrativa do cidadão × histórico CNIS de afastamentos | 5min |
| 11I | Para acidentário (B91/B92/B43): **CAT** presente? **NTEP** aplicável (CID × CNAE)? | 5min |
| 12I | Para HIV/AIDS: laudo de infectologista (Lei 15.157/2025) presente? | 2min |
| 13I | Para invalidez (B32): laudos especializados + histórico médico longitudinal | 5min |
| 14I | Avalia se perícia INSS provável vai concordar com tese · ajusta Confidence | 3min |

#### 4.3.3 Para Especial (B46)

| # | Ação | Tempo |
|---|---|---|
| 9E | Confere PPP de TODOS os vínculos com exposição alegada | 5min |
| 10E | Confere LTCAT correspondente aos PPPs · datas coerentes | 5min |
| 11E | Aplica conversão de tempo especial conforme legislação aplicável (pré/pós EC 103/2019) | 8min |
| 12E | Soma tempo especial + tempo comum se híbrido especial | 5min |
| 13E | Avalia se tempo total atinge requisitos da espécie | 5min |

#### 4.3.4 Para BPC (idoso ou PcD)

| # | Ação | Tempo |
|---|---|---|
| 9B | Confere **Folha Resumo CadÚnico** vigente (≤24 meses) · NIS válido | 3min |
| 10B | Calcula renda per capita do grupo familiar · confere se ≤ ¼ SM (BPC) | 5min |
| 11B | Para BPC PcD: laudo médico com CID-10 + descrição funcional CIF presente | 5min |
| 12B | Para BPC PcD: relatório psicossocial idealmente presente (não obrigatório mas fortalece) | 3min |
| 13B | Para BPC Idoso: certidão idade ≥65 anos · idoso precisa estar listado na Folha Resumo | 4min |

#### 4.3.5 Para Pensão por Morte (B21)

| # | Ação | Tempo |
|---|---|---|
| 9P | Confere certidão de óbito · qualidade de segurado do instituidor no momento do óbito | 5min |
| 10P | Confere comprovação de vínculo (casamento ou união estável) | 5min |
| 11P | Para união estável: declaração + ≥2 comprovantes complementares válidos | 5min |
| 12P | Confere dependentes (filhos menores 21, ou inválidos sem limite) | 3min |
| 13P | Avalia regras de divisão da pensão entre dependentes | 3min |

### 4.4 Bloco D — Cálculo do Confidence determinístico final (10 min)

| # | Ação | Tempo |
|---|---|---|
| 15 | Aplica **rubrica de Confidence determinístico** baseada em Grimório (não a rubrica simplificada de Beto em E1) | 8min |
| 16 | Compara com Confidence registrado em E2 e E3 — variação justificada? | 1min |
| 17 | Se Confidence caiu para Vermelho durante coleta: **STOP**, escalar a Beto, comunicar cidadão (§7.1) | (variável) |
| 18 | Se Confidence está em Amarelo: registrar **justificativa explícita para protocolar** ou decidir voltar a E3 | 1min |
| 19 | Se Confidence em Verde: prossegue para Bloco E | (incluso) |

### 4.5 Bloco E — Montagem do dossiê v1 (30-60 min)

#### 4.5.1 Estrutura do dossiê v1.pdf

O dossiê v1 é PDF único consolidado contendo:

```
1. Capa
   - Pseudônimo (também nome real para uso interno · pode ser ofuscado em versão de auditoria)
   - DER esperada · Espécie INSS
   - Data de montagem · Versão
   - Hash SHA-256 do próprio arquivo (calculado após assinatura)

2. Sumário Executivo
   - Tese principal (Seção 3 do manifesto)
   - Tese subsidiária se houver
   - Confidence final · Cenário Grimório aplicável

3. Inventário de peças
   - Tabela: tipo · data · hash SHA-256 individual

4. Peças (na ordem do inventário)
   - RG/CPF
   - Certidões civis
   - CNIS · CTPS
   - Comprovante de residência
   - Peças da vertical (módulos 01e..i conforme aplicável)
   - Documentos indiretos / testemunhais
   - Anexo 8 (se rural)
   - PPP/LTCAT (se especial)
   - Laudos (se incapacidade/BPC PcD)
   - Folha Resumo CadÚnico (se BPC ou Φ₁c)

5. Argumentação técnica
   - Enquadramento legal (Constituição, Lei 8.213/91, Decreto 3.048/99, INs do INSS, Súmulas, Temas STJ/STF)
   - Análise de cada requisito legal vs. documento que comprova
   - Resposta antecipada a possíveis objeções do INSS

6. Pedido formal
   - Espécie + DIB pretendida + DER

7. Anexos especiais
   - Termos de testemunhas (se rural)
   - Hashes individuais (apêndice de integridade)
```

#### 4.5.2 Passos de montagem

| # | Ação | Tempo |
|---|---|---|
| 20 | Alessandro abre template `MC-TEMPLATE-Dossie-v1.docx` em editor profissional | 2min |
| 21 | Preenche Capa + Sumário Executivo + Inventário | 8min |
| 22 | Anexa peças validadas em ordem · numera páginas globalmente | 15min |
| 23 | Redige Argumentação Técnica (parágrafos curtos · cada requisito legal vinculado a documento) | 20-40min |
| 24 | Inclui Pedido Formal + Anexos | 5min |

### 4.6 Bloco F — Assinatura ICP-Brasil + Hash + Salvamento (15 min)

| # | Ação | Tempo |
|---|---|---|
| 25 | Exporta para PDF/A (formato de arquivamento de longo prazo) | 2min |
| 26 | Aplica **assinatura digital ICP-Brasil A3** com certificado de Alessandro | 3min |
| 27 | Aplica **carimbo de tempo RFC 3161** via servidor ITI homologado | 2min |
| 28 | Salva como `MC-[Pseudônimo]-Dossie-v1-YYYYMMDD.pdf` em `03_dossie/` | 1min |
| 29 | Calcula **hash SHA-256 do dossiê v1.pdf assinado** · salva em `03_dossie/dossie-v1-hash.txt` | 1min |
| 30 | Gera **manifest JSON** em `03_dossie/dossie-v1-manifest.json` com: hash do dossiê, hash de cada peça individual, timestamp ICP, certificado usado, espécie, DER esperada | 5min |
| 31 | Calcula hash do próprio manifest.json · adiciona ao manifest como auto-referência (root hash) | 1min |

### 4.7 Bloco G — Atualização do manifesto e transição S1→S2 (5 min)

| # | Ação | Tempo |
|---|---|---|
| 32 | Atualiza Seção 5 do manifesto: `YYYY-MM-DD — E3 → E3b → E4: Dossiê v1 montado e assinado · Hash [HASH] · Confidence final [N] (zona [X])` | 3min |
| 33 | Atualiza cabeçalho YAML: `etapa-atual = E4` · `risco-confidence = [N atualizado]` · `data-dossie-v1 = YYYY-MM-DD` | 1min |
| 34 | Atualiza Seção 9 (Custódia): `S1 → S2 ATIVADO em YYYY-MM-DD · TTL apagamento S1: até D+7 da entrega final em E6/E7` | 1min |

### 4.8 Bloco H — Acionamento do POP-E4 (5 min)

| # | Ação | Tempo |
|---|---|---|
| 35 | Move task ClickUp para `E4-Protocolo` | 30s |
| 36 | Notifica Beto: *"[Pseudônimo] passou pelo QA. Pode cobrar a 2ª parcela e me avisar quando entrar."* | 1min |
| 37 | Beto recebe notificação · executa **Bloco G do POP-E3** (cobrança 2ª parcela) | (Beto) |
| 38 | Após confirmação da 2ª parcela, Beto abre task `E4-Protocolo` → POP-E4 inicia | (Beto) |
| 39 | Para Rota C: Alessandro copia dossiê v1 para `99_compartilhado-juliana/` para revisão prévia da Dra. Juliana **antes** do protocolo (24-72h) | 3min |

---

## 5. Outputs do POP-E3b

Quando este POP termina (transição E3b → E4):

- [ ] `03_dossie/MC-[Pseudônimo]-Dossie-v1-YYYYMMDD.pdf` — PDF assinado ICP-Brasil + RFC 3161
- [ ] `03_dossie/dossie-v1-hash.txt` — hash SHA-256 do dossiê
- [ ] `03_dossie/dossie-v1-manifest.json` — inventário com hashes individuais + root hash
- [ ] Manifesto atualizado: Seção 5 com transição · cabeçalho YAML com `etapa-atual = E4`
- [ ] **S2 ATIVADO** em Seção 9 do manifesto
- [ ] Confidence final registrado · justificativa explícita se zona Amarela
- [ ] Para Rota C: dossiê copiado em `99_compartilhado-juliana/` para revisão prévia
- [ ] Beto notificado para cobrança da 2ª parcela
- [ ] Task ClickUp em `E4-Protocolo` (ativará após 2ª parcela paga)

---

## 6. Sub-protocolos para situações específicas

### 6.1 Confidence final caiu para Vermelho

> Sinaliza que a coleta gerou evidências negativas (ex: CNIS revelou afastamentos não declarados, laudos não fortalecem tese).

**Passos:**
1. Alessandro **NÃO assina dossiê v1**
2. Convoca Beto para conversa imediata
3. Define mensagem honesta para o cidadão (§7.1)
4. Oferece duas rotas:
   - **Devolução das parcelas pagas** (Cláusula de arrependimento estendido — não está no contrato literal mas é prática ética; pode ser registrado como ato de boa-fé com renúncia escrita do cidadão)
   - **Rota C** se houver tese alternativa que justifique judicialização
5. Caso permanece em E3b com flag `[CONFIDENCE-VERMELHO-POS-COLETA]` até decisão do cidadão

### 6.2 Detecção de erro de espécie

> Vertical confirmada em E2 não é a correta dado o que a coleta revelou.

**Passos:**
1. Alessandro registra na Seção 6 do manifesto: detecção do erro + nova espécie correta
2. Reabre task ClickUp em `E2-Deliberação` (não em `E1`) — mantém pseudônimo, mantém contrato
3. Comunica Beto: nova vertical · novos módulos podem ser necessários no Drive (`01_brutos/01x_nova-vertical/`)
4. Pode haver mini-coleta adicional em E3 antes de reabrir QA
5. Não há cobrança adicional — Cláusula 2.4 cobre

### 6.3 Detecção de fraude documental durante QA (C41)

> Sinais que escaparam do Beto em E3 e ficaram visíveis na conferência consolidada.

**Passos:**
1. Alessandro **NÃO assina dossiê v1**
2. Verifica natureza: erro de boa-fé do cidadão (vítima de golpe) vs. fraude consciente
3. Se fraude consciente: encerra caso, arquiva com flag, considera comunicar autoridades (consultar Dra. Juliana)
4. Se vítima de golpe: passarela **Blindagem Consumidor** + Defensoria · não protocolar com docs comprometidos

### 6.4 Dossiê excederia 50MB (limite Meu INSS)

**Passos:**
1. Dividir em **dossiê principal** (Capa + Sumário + Inventário + Argumentação) + **anexos digitalizados** (peças)
2. Cada arquivo recebe hash próprio
3. Manifesto JSON registra a divisão
4. POP-E4 anexa todos os arquivos no Meu INSS

### 6.5 Necessidade de aditivo PRÉ-protocolo (raríssimo)

> Cidadão entrega documento crítico depois do dossiê v1 ser assinado mas antes do protocolo.

**Passos:**
1. Alessandro decide: incorporar ao dossiê v1 (refazer e re-assinar) OU gerar `dossie-v1-aditivo-A.pdf` antes do protocolo
2. Se mudança material: **refazer** dossiê v1 com `dossie-v2.pdf` (versionamento Q4) — raro mas justificado
3. Se complemento marginal: gerar aditivo já em E3b, protocolar ambos juntos em E4

---

## 7. Anexos — Scripts de mensagem

### 7.1 Mensagem ao cidadão se Confidence caiu para Vermelho

> *"Cumpadre, terminei a análise final do seu caso e preciso conversar honestamente. Depois de juntar tudo, eu vi que algumas peças que apareceram **não fortalecem o caminho que a gente tinha desenhado lá no começo**. Não é culpa de ninguém — é a vida que tem essas curvas.*
>
> *Isso significa que se a gente protocolar agora, a chance de o INSS aprovar é baixa. Eu não vou prometer o que não posso entregar.*
>
> *Tem dois caminhos:*
>
> *1. **A gente pausa**, devolvo o que o senhor / a senhora já pagou (sem questionar, sem burocracia), e o senhor pensa com calma se quer tentar outra rota.*
> *2. **Se houver outro caminho jurídico** (ação na justiça em vez do INSS direto), eu apresento nossa parceira advogada — Dra. Juliana — pra ela analisar. Mas aí já é uma decisão sua, e o caminho jurídico tem seus custos próprios.*
>
> *Não tem pressão. Quer conversar agora ou prefere amanhã?"*

### 7.2 Mensagem para Beto (sinalização para cobrança 2ª parcela)

> *"Beto, [Pseudônimo] passou no QA. Dossiê v1 assinado e selado. Confidence [N] zona [X]. Pode iniciar a cobrança da 2ª parcela. Quando o PIX cair, me avisa pra eu protocolar."*

### 7.3 Mensagem para Dra. Juliana (Rota C — revisão prévia)

> *"Doutora, dossiê v1 do [Pseudônimo] está em `99_compartilhado-juliana/` pra revisão prévia. Caso de [espécie] · tese principal: [resumo]. Confidence [N]. Sem pressa — protocolo está agendado para [data], se a senhora precisar de ajustes me avise até [data-1]."*

---

## 8. Métricas a registrar

- Tempo total efetivo do QA (cronômetro start no passo 1, stop no passo 36)
- Confidence em E2 vs. Confidence em E3b — variação
- Vertical em E2 vs. vertical confirmada em E3b — divergência (se houver)
- Houve aplicação de sub-protocolo §6.x? Qual?
- Hash SHA-256 do dossiê v1 (registrar em ledger central de auditoria)
- Quantidade de peças no dossiê
- Tamanho final em MB do dossiê v1
- Para Rota C: tempo entre `dossiê pronto` e `revisão Dra. Juliana concluída`

---

## 9. Riscos e mitigações

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Alessandro acumula casos em QA (gargalo Z3) | ALTA | Limite de 3 QA/dia · priorização `[DIB-URGENTE]` · em Z2 distribuir QA para Anjos T3 sêniores treinados |
| Erro de espécie detectado tarde | MÉDIA | Bloco A passo 3 · revisão da Tese antes da coleta progressiva |
| Certificado ICP-Brasil expira em momento crítico | MÉDIA | Calendário com renovação + 60 dias de antecedência · Bitwarden monitora data de expiração |
| Servidor RFC 3161 indisponível | BAIXA | Lista de servidores ITI homologados como backup (3 endereços) |
| Confidence Verde mas dossiê é fraco | MÉDIA | Validação cruzada: Alessandro pede revisão pela Dra. Juliana mesmo em Rota A se houver dúvida |
| Cidadão pressiona por protocolo antes do QA terminar | MÉDIA | Comunicação clara da importância do QA · Beto absorve pressão · Alessandro não cede |
| Dossiê fica obsoleto entre QA e protocolo (>14 dias) | BAIXA-MÉDIA | Critério: protocolar em até 7 dias do QA · se exceder, refazer Bloco D (recalibrar Confidence) |

---

## 10. Versionamento

| Versão | Data | Mudança |
|---|---|---|
| **1.0** | **2026-04-27** | **Versão inicial. Conformidade Jornada E0-E7 v1.1, ADR-009b (transição S1→S2), MC-SPEC-Drive-Estrutura v1.0, Grimório Previdenciário v2 (mínimo probatório por cenário). Operador único Alessandro (T3). ICP-Brasil A3 + RFC 3161 obrigatórios. Hash de dossiê + hashes individuais. Manifest JSON com root hash. 5 sub-protocolos especiais. Confidence vermelho pós-coleta = arrependimento estendido ético.** |

### Roadmap

- **v1.1:** após cronometragem A4 com Hib001 — calibrar tempos por vertical
- **v1.2:** automação parcial Z2+ (geração de inventário + hashes + manifest JSON automatizada · revisão humana mantida obrigatória)
- **v2.0:** integração com sistema de selos institucionais (Selo Diamante MC) — dossiê carrega selo visual

---

**FIM DO POP-E3b**
**MC-POP-E3b-QA-Dossie v1.0 — 27/04/2026**
**Hierarquia: Dignidade > Compliance > Viabilidade**
**Bridge S1→S2 atômico · ICP-Brasil + RFC 3161 invioláveis**
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
[[MC-POP-E4-Protocolo-INSS-v1_0-2026-0427]]
[[MC-POP-E5-Watchdog-Exigencias-v1_0-2026-0427]]
[[MC-POP-E6-Resolucao-v1_0-2026-0427]]
[[MC-POP-Handoff-Juridico-v1_0-2026-0427]]
[[MC-POP-Encerramento-Caso-v1_0-2026-0427]]

∞
