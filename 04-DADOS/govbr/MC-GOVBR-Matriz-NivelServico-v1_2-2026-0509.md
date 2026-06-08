---
título: MC-GOVBR-Matriz-NivelServico
versão: v1_2
data: 2026-05-09
status: RASCUNHO — REVISÃO PÓS-ERRATA-001
autor: Claude Code × Alessandro Neves
fonte: E1 + E2 + E3 + E4 v1.0 + E4.1 v1.1 + E5 + ERRATA-001 (09/05/2026)
supersede: E4 v1.0 e E4.1 v1.1
---

# MC-GOVBR — Matriz Nível de Conta × Serviço × Impacto MC (v1.2)

> Documento E4 v1.2 — revisão da v1.1 à luz da **ERRATA-001 (09/05/2026)** que reposiciona o KBA Previdenciário como ferramenta diagnóstica de Bronze validado, **não como rota de elevação para Prata**.
>
> **Mudanças v1.1 → v1.2:** seções §2.1b, §3.1, §5.2, §5.4, §5.5 e §6 (changelog) foram corrigidas. As demais seções permanecem intactas.
>
> Convenção de confiança da informação:
> - **CONFIRMADO**: nível mínimo declarado em fonte oficial gov.br listada em E1.
> - **INFERIDO [n E1]**: nível mínimo extraído de tutorial/vídeo/blog em E1, sem confirmação oficial.
> - **NÃO MAPEADO**: nenhuma fonte em E1 informa o nível mínimo do serviço.
> - **EMPÍRICO 08-09/05**: observado em teste com usuária Bronze real em 08-09/05/2026.
>
> Convenção de jornadas MC:
> - **Φ₀** = jornada CadÚnico
> - **Φ₁** = jornada protocolar INSS
> - **Φ₄** = jornada Guardião pós-concessão

---

## 0. Sumário das mudanças v1.1 → v1.2 (ERRATA-001)

(Detalhamento completo na Seção 6 — Changelog v1.0→v1.1→v1.2.)

A versão v1.2 incorpora a correção de premissa fundamental: o **Selo Previdenciário KBA concede apenas nível Bronze validado**, não Prata. Implicações:

1. **§2.1b** — renomeada e corrigida. KBA não amplia cobertura Φ₁; apenas serviços Bronze que exigem validação mínima.
2. **§3.1** — gargalo é Prata; KBA não resolve o gargalo. Rota principal vira biometria facial, com banco e presencial como fallback.
3. **§5.2** — nova hierarquia: Rota 1 = Biometria facial; Rota 2 = Banco; Rota 3 = Presencial; **KBA diagnóstico** como rota auxiliar (não de elevação).
4. **§5.4** — mantida; nota acrescentada estendendo Cenário A ao KBA diagnóstico.
5. **§5.5** — Hook 0: P1-P5 inalteradas; R1-R3 substituídas por versões revisadas.
6. **§6** — Changelog estendido.

---

## 1. Matriz principal

### 1.1 Meu INSS

> **Nota KBA (atualizada v1.2):** O gateway "Selo Previdenciário" intercepta clientes Bronze e oferece elevação **para Bronze validado** (não Prata) via questionário KBA operado pela Dataprev. **CONFIRMADO em 09/05/2026** — fontes oficiais: `acesso.gov.br/roteiro-tecnico/catalogoconfiabilidades.html` e FAQ `acesso.gov.br/faq/_perguntasdafaq/comoadquirirselocadastrobasicovalidacaodadosprevidenciarios.html`. Onde a coluna "Nível mínimo exigido" é Prata, **o KBA NÃO destrava o serviço** — o selo gerado é Bronze validado.

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança | Rota alternativa via KBA? |
|---|---|---|---|---|---|---|---|---|
| Consultar CNIS (extrato previdenciário) | Meu INSS / app | **Prata** | Histórico de vínculos empregatícios e contribuições. | Prata | **Φ₁ (núcleo) / Φ₄** | [1, 2, 3, 26] | INFERIDO [26] | **Não destrava CNIS pleno**. KBA dá apenas metadados básicos para diagnóstico MC. |
| Consultar benefício ativo | Meu INSS / app | **Prata** | Ver benefício, valor, banco pagador. | Prata | **Φ₄ (núcleo)** | [23] | INFERIDO [23] | **Não destrava** — exige Prata real. |
| Simular aposentadoria | Meu INSS / app | **Bronze** | Cálculo estimativo. | Prata | Φ₁ | [1, 26] | INFERIDO [1] | N/A — Bronze já basta. |
| Protocolar requerimento (DER) | Meu INSS / app | **Prata** | Abertura de pedido formal. | Prata | **Φ₁ (núcleo)** | [3, 4] | INFERIDO [4] | **Não destrava** — exige Prata real. |
| Agendar perícia médica | Meu INSS / app | **Bronze** | Marcação para benefícios por incapacidade. | Bronze | Φ₁ | — | NÃO MAPEADO | N/A. |
| Apresentar recurso ao CRPS | Meu INSS / app | **Prata** | Recurso administrativo. | Prata | Φ₁ | — | NÃO MAPEADO | **Não destrava**. |
| Cadastrar representante legal | Meu INSS / app | **Prata** | Vincular curador/procurador. | Prata | **Φ₁ + Φ₄** | [17, 18, 44] | CONFIRMADO [17] | **Não destrava**. |
| Consultar andamento de processo | Meu INSS / app | **Bronze** | Status de protocolo. | Bronze | Φ₁ + Φ₄ | [1] | INFERIDO [1] | N/A. |
| Emitir carta de concessão | Meu INSS / app | **Prata** | Documento oficial de deferimento. | Prata | Φ₄ | — | NÃO MAPEADO | **Não destrava**. |
| Atualizar dados cadastrais | Meu INSS / app | **Prata** | Endereço, banco pagador. | Prata | Φ₄ | [21] | INFERIDO [21] | **Não destrava**. |
| Prova de vida digital | Meu INSS / app | **Ouro** (ou Prata via banco) | Prova de vida anual obrigatória. | Ouro | **Φ₄ (crítico)** | [49, 7] | INFERIDO [49] | **Não destrava**. |
| **Selo Previdenciário via KBA** *(reposicionado v1.2)* | Meu INSS / app (gateway) | **Bronze** (entrada) → **Bronze validado** (saída — CONFIRMADO 09/05) | Validação cadastral mínima; permite acesso a metadados básicos para diagnóstico MC. **Não eleva nível**. | — | **Diagnóstico transversal — não eleva** | EMPÍRICA 08-09/05 | CONFIRMADO 09/05 | — (esta linha é a rota auxiliar) |

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

### 1.2 CadÚnico / Meu CadÚnico

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Consultar situação cadastral | App Meu CadÚnico | **Prata** | Status do cadastro, dados da família. | Prata | **Φ₀ + Φ₄** | [32, 41] | INFERIDO [32] |
| Pré-cadastro online | gov.br/cadunico | **Bronze** | Geração de pré-cadastro. | Bronze | **Φ₀ (entrada)** | [41] | INFERIDO [41] |
| Consultar benefícios vinculados | App Meu CadÚnico / Caixa Tem | **Prata** | Bolsa Família, BPC, Tarifa Social. | Prata | Φ₀ + Φ₄ | [32, 33, 41] | INFERIDO [32] |
| Atualizar dados cadastrais (efetivo) | **Presencial no CRAS** | **Não exige conta gov.br** | Atualização cadastral oficial. | — | **Φ₀ (núcleo)** | [32, 41] | INFERIDO [32] |

> **Nota KBA:** o Selo Previdenciário **não cobre** o CadÚnico, e mesmo que cobrisse, daria apenas Bronze validado.

### 1.3 Receita Federal / e-CAC

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Consultar CPF | gov.br/receitafederal | **Não exige login** | Verificação pública. | — | Triagem | — | CONFIRMADO (público) |
| Emitir comprovante de situação cadastral CPF | gov.br/receitafederal | **Não exige login** | PDF oficial. | — | Triagem | — | CONFIRMADO (público) |
| Declaração IRPF (acesso e-CAC) | e-CAC | **Prata** | Declarar, retificar. | Prata | Φ₁ (extensão) | [4] | CONFIRMADO [4] |
| Consultar restituição | gov.br/receitafederal | **Bronze** | Status de restituição. | Bronze | Φ₄ | — | NÃO MAPEADO |
| Cadastrar procuração digital (e-CAC) | e-CAC | **Prata** (ambas) | Procuração eletrônica. | Prata | **Φ₁ + Φ₄** | [38] | CONFIRMADO [38] |

> **Nota KBA:** confirmado pós-ERRATA-001 que o KBA **não destrava** e-CAC — o selo é Bronze validado, restrito ao Meu INSS.

### 1.4 CTPS Digital

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Consultar vínculos empregatícios | App CTPS Digital | **Prata** | Histórico de empregos. | Prata | Φ₁ (subsídio CNIS) | — | NÃO MAPEADO |
| Emitir CTPS digital | App CTPS Digital | **Bronze** | Geração inicial. | Bronze | Φ₁ (subsídio) | — | NÃO MAPEADO |
| Consultar seguro-desemprego | gov.br/empregabrasil | **Prata** | Status de pedido. | Prata | Φ₁ (subsídio) | — | NÃO MAPEADO |

### 1.5 Outros serviços gov.br relevantes

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| CNH digital | App CDT (gov.br/senatran) | **Prata** | CNH digital com QR autenticável. | Prata | Subsídio | — | NÃO MAPEADO |
| Título de Eleitor digital | App e-Título | **Bronze** | Documento eleitoral. | Bronze | Subsídio | — | NÃO MAPEADO |
| Assinatura Avançada | gov.br/assinador | **Prata** | Assinatura avançada. | Prata | Φ₁ + Φ₄ (peças) | [25] | INFERIDO [25] |
| Assinatura Qualificada | gov.br/assinador | **Ouro** | Equiparada a firma reconhecida. | Ouro | Φ₁ + Φ₄ (peças críticas) | [25] | INFERIDO [25] |
| Procuração Digital SPE | gov.br | **Prata** (ambas) | Outorga digital intra-gov.br. | Prata | **Φ₁ + Φ₄ (núcleo)** | [40, 16] | INFERIDO [40] |

**Total de serviços mapeados:** 28 (12 Meu INSS [+1 KBA reposicionado] + 4 CadÚnico + 5 Receita + 3 CTPS + 4 Outros).

---

## 2. Mapa de bloqueio por nível

### 2.1 Cenário **Bronze puro** (cliente recém-cadastrado, sem KBA validado)

| Métrica | Valor |
|---|---|
| Serviços ACESSÍVEIS | 9 / 28 (32%) |
| Serviços BLOQUEADOS | 19 / 28 (68%) |
| Cobertura **Φ₁ (INSS)** | ~25% |
| Cobertura **Φ₀ (CadÚnico)** | ~50% (pré-cadastro online + atualização presencial CRAS) |
| Cobertura **Φ₄ (Guardião)** | ~10% |

### 2.1b Cenário **Bronze + Selo Previdenciário (validação básica)** *(corrigido v1.2)*

> ⚠ **Esclarecimento ERRATA-001:** O KBA concede **Bronze validado**, não Prata. A análise da v1.1 foi corrigida.

Cliente que entrou em Bronze e completou o questionário KBA. Pré-condições: ter contribuição registrada no CNIS + saber dados básicos do próprio histórico.

| Métrica | Valor (CONFIRMADO 09/05/2026) |
|---|---|
| Serviços ACESSÍVEIS | **9 / 28 (32%)** — mesmo que Bronze puro, mais acesso a metadados básicos do CNIS para diagnóstico interno do MC. |
| Cobertura **Φ₁ (INSS)** efetiva | **~27%** (mesma do Bronze puro) — KBA **não** destrava DER, recurso CRPS, CNIS pleno, atualização cadastral, carta de concessão. |
| Ganho real para o MC | **Diagnóstico Φ₁** — o MC obtém metadados suficientes para iniciar a triagem do caso enquanto resolve a elevação real (Biometria/Banco/Presencial). |

> **Conclusão de produto (decisão Alessandro 09/05/2026):** *"O KBA serve como KBA diagnóstico — permite ao MC obter dados do CNIS para triagem, mas não destrava protocolo digital (DER, recurso, CNIS completo)."*
>
> **Implicação operacional:** clientes Bronze + KBA validado **continuam precisando de Rota 1 (Biometria), Rota 2 (Banco) ou Rota 3 (Presencial)** para chegar a Prata. O KBA é redundante com as 4 fontes alternativas de inteligência contributiva (CTPS, CNIS físico, memória, 135) e introduz risco de cooldown 24h (T1.18). **Logo: usar KBA apenas quando as 4 fontes alternativas estão indisponíveis E as rotas 1/2/3 estão em espera.**

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

### 2.2 Cenário **Prata** (cliente após biometria facial, banco ou CNH/SENATRAN)

| Métrica | Valor |
|---|---|
| Serviços ACESSÍVEIS | 25 / 28 (89%) |
| Serviços BLOQUEADOS | 3 / 28 (11%) |
| Cobertura **Φ₁ (INSS)** | ~91% |
| Cobertura **Φ₀ (CadÚnico)** | ~100% |
| Cobertura **Φ₄ (Guardião)** | ~91% |

### 2.3 Cenário **Ouro**

| Métrica | Valor |
|---|---|
| Serviços ACESSÍVEIS | 28 / 28 (100%) |
| Cobertura | 100% |

---

## 3. Análise de impacto para o MC

### 3.1 O "nó" da jornada MC (revisado v1.2 pós-ERRATA-001)

> **Versão v1.0 dizia:** *"O gargalo é a consulta ao CNIS — sem CNIS o MC não tem como executar a triagem; CNIS exige Prata."*
>
> **Versão v1.1 dizia (incorretamente):** *"O gargalo é nível de conta OU conhecimento do próprio histórico."*
>
> **Versão v1.2 corrige (DEFINITIVA pós-ERRATA-001):**

**O gargalo continua sendo o nível Prata.** O KBA não resolve esse gargalo. A rota principal é **biometria facial**, com **banco** e **presencial** como fallback. O KBA serve apenas como **ferramenta diagnóstica** quando todas as rotas de elevação falharam **e** as 4 fontes alternativas de inteligência contributiva (CTPS, CNIS físico, memória, 135) também não estão disponíveis.

**Onde o nó incide na jornada E0→E5 do MC (atualizado):**
- **E0 (descoberta) — desbloqueado**.
- **E1 (cadastro MC) — desbloqueado**.
- **E2 (triagem)** — ⚠ **Gargalo principal** (Prata): mitigado pela hierarquia Biometria/Banco/Presencial. Inteligência contributiva via 4 fontes (CTPS/CNIS físico/memória/135) abastece o dossiê MC sem depender do gov.br. KBA diagnóstico é último recurso.
- **E3 (orientação) — desbloqueado**.
- **E4 (protocolo)** — ⚠ **Bloqueio secundário** (Prata): exige elevação real.
- **E5 (Guardião)** — ⚠ **Bloqueio terciário** (Prata + Ouro pontual para prova de vida).

**4 fontes de inteligência contributiva — preservadas e re-enfatizadas (decisão Alessandro 08/05/2026):**

1. **Fonte 1 — CNIS físico em casa.** Pergunta de triagem: *"Você tem algum papel do INSS em casa? Pode mandar uma foto?"*
2. **Fonte 2 — CTPS azul antiga.** Foto das páginas com carimbos.
3. **Fonte 3 — Memória do cliente** (Hook 0 P4 com tolerância +/- 1 ano).
4. **Fonte 4 — Central 135.** Beto liga com CPF + dados pessoais e autorização gravada e pede CNIS por telefone.

**Pós-ERRATA-001:** estas 4 fontes ganham importância — são suficientes para alimentar o dossiê Φ₁ do MC sem nenhuma necessidade de passar pelo KBA Dataprev. O KBA só entra quando as 4 fontes são todas indisponíveis (cliente sem CTPS, sem CNIS físico, sem memória precisa, e o 135 não responde / cliente sem autorização para Beto ligar).

**% estimado do público-alvo MC em Bronze (preservado v1.0/v1.1):**

> ⚠ Estimativa — necessária validação por LAI ao MGI.
>
> - Idoso urbano bancarizado: 30–40% em Bronze.
> - Idoso rural / sertanejo: 60–80% em Bronze.
> - PcD com limitação motora/visual severa: 50–70% em Bronze.
> - Beneficiário BPC sem CNH: 70–85% em Bronze.
>
> **Média ponderada do funil MC: ~55–65% chega em Bronze.**

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

### 3.2 Nível mínimo viável para o MC

| Jornada | Nível mínimo viável | Justificativa |
|---|---|---|
| **a) Φ₁ (triagem → protocolo INSS)** | **Prata** (alcançável via biometria facial, banco, presencial) | KBA não eleva — pós-ERRATA-001. Dossiê Φ₁ alimentado pelas 4 fontes alternativas (CTPS/CNIS/memória/135). |
| **b) Φ₀ (triagem → CadÚnico)** | **Bronze** (com fallback presencial CRAS) | KBA Previdenciário não cobre Φ₀. |
| **c) Φ₄ (Guardião pós-concessão)** | **Prata** + **Ouro pontual para prova de vida** | KBA não destrava Φ₄. |

**Conclusão (preservada e reforçada):** o **piso operacional do MC é Prata**. A rota principal para chegar lá é **biometria facial**, com banco e presencial como fallback.

### 3.3 Serviços que NÃO exigem conta gov.br (ou aceitam Bronze)

Lista de **rotas de fallback** + **fontes de inteligência contributiva pré-elevação**.

| Rota | Canal | O que destrava | Limitação | Custo (cliente) |
|---|---|---|---|---|
| **Central 135 INSS** | telefone | Consultas, agendamentos, **CNIS por telefone — Fonte 4 da inteligência contributiva pré-elevação** | Sem protocolo de DER nem recurso. | Grátis. |
| CRAS presencial | balcão | CadÚnico completo (Φ₀), encaminhamentos a BPC | Depende da agenda. | Grátis + deslocamento. |
| Agência INSS presencial | balcão | Φ₁ completo + cadastro de representante + selo Balcão Prata [1, 17] | Tempo de espera. | Grátis + deslocamento. |
| Defensoria Pública | atendimento jurídico | Recurso CRPS, ação judicial, curatela | Disponibilidade variável. | Grátis. |
| Cartório de notas | presencial | Procuração pública em papel | Custo emolumentos. | Pago. |
| Agência bancária credenciada | balcão / TAA | Selo Prata via terminal | Cobertura rural fraca. | Grátis. |
| Posto Identificação Civil | balcão | Emissão CIN — destrava Ouro futuro | Tempo variável. | Geralmente grátis. |
| TRE / Cartório Eleitoral | balcão | Coleta biométrica → libera Ouro futuro | Agendamento. | Grátis. |
| Consulta CPF / restituição | site público RFB | Triagem básica sem login | Apenas leitura pública. | Grátis. |

---

## 4. Lacunas da matriz

> **Atualização v1.2:** **L_KBA_2** (escopo do selo gerado pelo KBA) — **RESOLVIDA desfavoravelmente** em 09/05/2026. Selo é Bronze validado, não Prata. Lacuna fechada. Demais lacunas KBA permanecem (L_KBA_1 cooldown — confirmado 24h via JAN001; L_KBA_3 expiração; L_KBA_4 outros KBA).

| Serviço | O que sabemos | O que falta | Ação recomendada |
|---|---|---|---|
| Agendar perícia médica | Bronze | Confirmação oficial | TESTAR EMPIRICAMENTE |
| Apresentar recurso CRPS | Inferido Prata | Confirmação | BUSCAR Regulamento CRPS |
| Emitir carta de concessão | Inferido Prata | Confirmação | TESTAR |
| Consultar restituição RFB | Inferido Bronze | Confirmar | TESTAR |
| Consultar vínculos CTPS Digital | Não mapeado | Nível mínimo | TESTAR |
| Emitir CTPS digital | Não mapeado | Nível mínimo | TESTAR |
| Seguro-desemprego digital | Não mapeado | Nível para protocolar | LAI ao MTE |
| CNH digital (CDT) | Não mapeado | Nível mínimo | BUSCAR FAQ |
| e-Título | Inferido Bronze | Confirmar | TESTAR |
| Prova de vida digital INSS | Inferido Ouro / Prata via banco | Fluxo aceito; bancos | BUSCAR Portaria INSS 2024-2025 |
| Cadastro de representante legal — documentos por tipo | Confirmado Prata | Lista exata | LAI ao INSS |
| **L_KBA_1** — Comportamento de bloqueio do KBA | **CONFIRMADO 09/05: cooldown 24h** (JAN001) | Janela exata, política de re-tentativa | Documentação interna MC + LAI Dataprev |
| **L_KBA_2** — Escopo do selo gerado pelo KBA | **RESOLVIDA 09/05: Bronze validado** (não Prata) | — | **Lacuna fechada** |
| **L_KBA_3** — Expiração do selo KBA | Selo Bronze validado persistente (a confirmar) | Re-validação anual? | Acompanhamento longitudinal |
| **L_KBA_4** — Existem outros KBA | Scope sufixo `_previdencia` | `_cadunico`, `_rfb`? | Catálogo de scopes gov.br |

---

## 5. Recomendação operacional

### 5.1 Nível-alvo padrão do MC

> **Conclusão preservada e reforçada pós-ERRATA-001:** o MC opera com **Prata como nível-alvo padrão**.
>
> **A rota principal para chegar a Prata é biometria facial.** Banco é fallback bancarizado. Presencial é último recurso. KBA não está no caminho de elevação.

### 5.2 Hierarquia de rotas — DEFINITIVA pós-ERRATA-001 *(corrigido v1.2)*

| Prioridade | Rota | Quando aplicar | Estimativa de sucesso |
|---|---|---|---|
| **Rota 1 — Biometria facial** [E1 BLOCO 3.6/3.8, fontes 8, 10, 11, 15] | Selfie liveness via app gov.br usando base TSE / DENATRAN-SENATRAN / CIN | Cliente com **biometria coletada** em pelo menos uma das bases. **Conteúdo MC institucional** (vídeo + simulador) reduz drasticamente falha de primeira tentativa. Caso JAN001 09/05 confirma viabilidade. | **~60-75%** estimado, com vídeo MC. Sem vídeo, ~40-55%. |
| **Rota 2 — Internet Banking** [E1 BLOCO 3.2, fontes 13, 14] | Selo Prata via OAuth banco credenciado | Cliente **bancarizado com internet banking ativo**. Caixa preferencial (alta penetração entre BPC/BF). | ~70-80% nos clientes que cumprem o pré-requisito. |
| **Rota 3 — Presencial** [E1 BLOCO 3.4, fonte 1] | Selo Bronze qualificado / Prata via servidor INSS, agência bancária ou posto CIN | Cliente sem biometria utilizável **e** sem internet banking. Último recurso. | ~85% (quando o agendamento ocorre). No-show ~25-35%. |
| **Rota auxiliar — KBA diagnóstico** *(reposicionada v1.2)* | Selo Bronze validado via questionário Dataprev — **NÃO eleva nível** | **APENAS** quando todas as rotas de elevação (1, 2, 3) falharam ou estão em espera **E** as 4 fontes alternativas de inteligência contributiva (CTPS / CNIS físico / memória / 135) também são inviáveis. Finalidade: obter dados básicos do CNIS para o MC iniciar triagem Φ₁ enquanto resolve elevação real. | N/A — não é rota de elevação. |

**Mix esperado revisado (ERRATA-001):**

| Rota | Mix v1.1 (pré-errata) | Mix v1.2 (pós-errata) | Justificativa |
|---|---|---|---|
| Rota 1 — Biometria facial | (não existia como rota separada — antes parte da Rota 0/Rota 2) | **50-60%** | Vira a rota principal. Vídeo MC institucional + simulador reduzem fricção. |
| Rota 2 — Banco | 45% | **25-30%** | Mantém peso significativo para bancarizados. Cede ao biometria como rota principal. |
| Rota 3 — Presencial | 15% | **10-15%** | Estável — atende público sem biometria nem banco. |
| Rota auxiliar — KBA diagnóstico | (era 25% como Rota 0) | **fora do mix de elevação** | Reposicionado pós-ERRATA. Frequência prevista de acionamento: <10% dos casos (apenas quando 1/2/3 + 4 fontes falharam). |

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

### 5.3 Custo operacional estimado por rota *(revisado v1.2)*

> ⚠ Estimativas — calibrar com primeiras 50 jornadas.

| Rota | Tempo médio API Humana | Pré-trabalho | Pós-trabalho | Taxa de retentativa |
|---|---|---|---|---|
| **Rota 1 — Biometria facial** | **8-15 min** com vídeo MC pré-assistido pelo cliente | 5-10 min de coaching (luz, câmera, movimento) | 1-2 min — confirmar selo Prata persistido | Média (25-40% precisam 2ª tentativa). |
| Rota 2 — Internet Banking | 8-15 min | 3 min — confirmar banco e senha eletrônica | 1 min | Baixa (10-15%). |
| Rota 3 — Presencial | 5 min API + 7-21 dias calendário | 5 min — agendar 135 ou app | Acompanhar comparecimento + selo aplicado | Baixa quando comparece — alto no-show 25-35%. |
| Rota auxiliar — KBA diagnóstico | 15-30 min se acionado | 10-15 min preparação inteligência contributiva | 1 min | Cooldown 24h se erro. |

**Custo médio ponderado por elevação (estimativa pós-ERRATA-001):**

`0,55 × 11,5 (biometria) + 0,275 × 12 (banco) + 0,125 × 5 (balcão API) + 0,05 × 22 (KBA diag — quando acionado)` ≈ **~11,5 minutos/elevação** (era ~15,4 min em v1.1; ~17 min em v1.0).

> ⚠ Cálculo provisório. A redução vem do fato de biometria facial (com vídeo MC) ser mais rápida que KBA assistido. Se o vídeo MC não materializar e a falha de 1ª tentativa for alta, custo médio sobe — calibrar.

### 5.4 Posição ética sobre operação KBA — Cenários A / A+ / B *(preservada da v1.1, com nota v1.2)*

Decisão arquitetural Alessandro 08/05 — **INVIOLÁVEL**.

> **Nota v1.2 acrescentada:** O Cenário A (Preparação) também se aplica ao **KBA diagnóstico** quando acionado: o MC prepara o cidadão para responder o questionário KBA com seus próprios dados (CTPS/CNIS/135), sem responder por ele. Cenário B (operação delegada) permanece vetado para qualquer fluxo, inclusive KBA diagnóstico.

#### Cenário A — Preparação (APROVADO)
> MC colhe inteligência contributiva → cidadão abre sessão gov.br no PRÓPRIO celular → Beto guia pelo WhatsApp. Cidadão opera, MC orienta.

#### Cenário A+ — Operação assistida (APROVADO com protocolo)
> Videochamada WhatsApp; Beto vê tela; cidadão clica; tudo gravado com consentimento.

**Protocolo obrigatório:**
1. Consentimento explícito gravado.
2. Cidadão sempre digita credenciais e clica nos botões — Beto nunca opera o aparelho do cidadão.
3. Sessão gravada, retenção 5 anos.
4. Auditoria 100% das primeiras 50 sessões; depois 10% rotativo.

#### Cenário B — Operação delegada (VETADO POR DESENHO)
> MC tem senha em custódia → Beto abre sessão no computador MC → responde pelo cidadão.

Viola Lei 14.063/2020 Art. 6º + ADR-009a + Termo de Uso gov.br. **É exatamente o que despachantes informais fazem.** Inversão Cósmica: mesmas ferramentas, propósito oposto.

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

### 5.5 Hook 0 — Triagem de nível gov.br *(regras R1-R3 corrigidas v1.2)*

> **Versão v1.1 inseria** o Hook 0 ANTES do RouterEthics. Esta posição é **preservada na v1.2**. As 5 perguntas (P1-P5) também permanecem inalteradas. **Apenas as regras de classificação R1-R3 foram revisadas pela ERRATA-001.**

#### As 5 perguntas (P1-P5) — INALTERADAS

```
PASSO 0 — Verificar nível gov.br conhecido pelo cliente
  Pergunta: "Você sabe qual o nível da sua conta gov.br?"

PASSO 1 — Coletar inteligência contributiva (5 perguntas WhatsApp)
  P1: "Você já trabalhou de carteira assinada?"                        → Sim / Não
  P2: "Tem a carteira de trabalho antiga? Pode mandar foto?"           → Sim / Não
  P3: "Tem algum papel do INSS em casa? Extrato, carta?"               → Sim / Não
  P4: "Lembra mais ou menos em que ano foi seu último trabalho?"       → [ano]
  P5: "Já recebe algum benefício do INSS ou Bolsa Família?"            → BPC / Aposentadoria / BF / Nenhum
```

#### As 5 regras de classificação — R1-R3 REVISADAS pós-ERRATA-001

```
PASSO 2 — Classificar Rota de Elevação

REGRA 1 (REVISADA): Se P1 = Sim E (P2 = Sim OU P3 = Sim OU P4 = respondeu)
         → cidadão TEM inteligência contributiva disponível.
         → Rota 1 (biometria facial) com dados de apoio para o dossiê Φ₁.
         → KBA diagnóstico guardado como reserva se tudo falhar.

REGRA 2 (REVISADA): Se P1 = Sim E P2/P3/P4 todos negativos
         → cidadão tem histórico mas sem documentos.
         → Rota 1 (biometria facial) sem preparação documental.
         → Se falhar, Rota 2 (banco). Senão, Rota 3 (presencial).
         → KBA diagnóstico como último recurso para obter dados (Φ₁).

REGRA 3 (REVISADA): Se P1 = Não E P5 = BPC / BF / Nenhum
         → cidadão nunca contribuiu.
         → Rota 1 (biometria facial) se tiver biometria TSE/DENATRAN.
         → Senão Rota 2 (banco).
         → Senão Rota 3 (presencial).
         → KBA impossível para esse perfil (nunca contribuiu — opção
           "NUNCA CONTRIBUÍ" termina o fluxo Dataprev).

REGRA 4 (INALTERADA): Se P2 = Sim → CTPS é backup probatório SEMPRE,
         independentemente da rota escolhida.

REGRA 5 (INALTERADA): Se P5 = Aposentadoria → cliente provavelmente já
         passou por algum fluxo Prata no passado (DER foi feita) —
         investigar se a credencial só "esfriou" e basta recuperar
         (T1.14) antes de eleger Rota.
```

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

#### Por que Hook 0 vem ANTES do RouterEthics — preservado da v1.1

O RouterEthics decide *qual problema atacar* (custódia? procuração? CadÚnico?). O Hook 0 decide *qual rota técnica usar*. Sem Hook 0, o MC pode começar a executar Rota 2 (banco) e descobrir que o cliente não tem internet banking.

#### Custo do Hook 0

- 5 perguntas WhatsApp = **2-5 min** de operador.
- **Compensação:** evita ~10-30 min de execução em rota errada. ROI > 2x.

---

## 6. Changelog v1.0 → v1.1 → v1.2 *(estendido)*

### Mudanças v1.0 → v1.1 (preservadas — ver E4.1 para detalhe)

(Resumo: introdução do KBA como Rota 0 prioritária; novo cenário §2.1b; Fonte 4 — Central 135; Hook 0 adicionado; Posição ética A/A+/B.)

### Mudanças v1.1 → v1.2 (ERRATA-001)

| Seção | Alteração v1.2 | Justificativa |
|---|---|---|
| Frontmatter | `versão: v1_2`; status mudou para "REVISÃO PÓS-ERRATA-001"; `supersede: E4 v1.0 e E4.1 v1.1`. | Marcar substituição definitiva. |
| §0 (Sumário das mudanças) | Reescrito para v1.2 — focado nas 6 mudanças da ERRATA-001. | Visibilidade. |
| §1.1 (Meu INSS) | Tabela: nova coluna mostrando que KBA **não destrava** os serviços Prata; entrada do KBA como "Bronze (entrada) → Bronze validado (saída)". | Correção 1 da ERRATA-001. |
| §1.2 / §1.3 | Notas KBA atualizadas: confirmado pós-ERRATA que selo é Bronze, não cobre Φ₀ nem e-CAC. | Correção 1 estendida. |
| §2.1b (Bronze + KBA) | Renomeado "Bronze + Selo Previdenciário (validação básica)". Métricas: cobertura mantida em 32% (mesma de Bronze puro). Texto explicativo sobre uso diagnóstico. | **Correção 1 da ERRATA-001.** |
| §3.1 (O nó da jornada) | **Reformulado.** Gargalo é Prata (não "credencial OU cognição"); rota principal é biometria facial; 4 fontes contributivas re-enfatizadas; KBA é último recurso. | **Correção 2 da ERRATA-001.** |
| §3.2 / §3.3 | Notas alinhadas — Φ₁ alcançado via biometria/banco/presencial; 135 reforçado como Fonte 4 da inteligência. | Coerência. |
| §4 (Lacunas) | L_KBA_2 fechada (resolvida desfavoravelmente). L_KBA_1 confirmada como cooldown 24h. | Atualização empírica + ERRATA. |
| §5.1 | Adendo: "rota principal para chegar a Prata é biometria facial". | Coerência. |
| §5.2 | **Hierarquia substituída.** Rota 1=Biometria, Rota 2=Banco, Rota 3=Presencial, Rota auxiliar=KBA diagnóstico. Mix recalculado: 55%/27,5%/12,5% + 5% KBA auxiliar. | **Correção 3 da ERRATA-001.** |
| §5.3 | Custo médio ponderado recalculado: ~11,5 min/elevação (era ~15,4). Tempos por rota atualizados. | Coerência com mix novo. |
| §5.4 | Mantida; **nota acrescentada** estendendo Cenário A ao KBA diagnóstico. | **Correção 4 da ERRATA-001.** |
| §5.5 | P1-P5 inalteradas; **R1-R3 substituídas** pelas versões revisadas (priorizam biometria facial; KBA diagnóstico é reserva). R4 e R5 inalteradas. | **Correção 5 da ERRATA-001.** |
| §6 (Changelog) | Estendido com este bloco v1.1→v1.2. | Esta seção. |
| Apêndice A | Sinais de atualização: L_KBA_2 marcada como resolvida; mantida vigilância para L_KBA_1, L_KBA_3, L_KBA_4. | Coerência. |

---

## Apêndice A — Sinais de que esta matriz precisa ser atualizada

- Publicação de qualquer **portaria sobre níveis gov.br** (norma fantasma F4 de E3) que altere requisitos.
- Publicação de portarias INSS sobre **biometria BPC** (norma F5 de E3).
- Mudança no fluxo de **prova de vida digital** com banco.
- Lançamento de novo serviço gov.br ou substituição de portal.
- **Mudança no fluxo KBA Dataprev** — alteração no cooldown, scope OAuth, questionário ou perguntas.
- **Aparecimento de outros KBA** — confirmação de scopes `_cadunico`, `_rfb`, etc.
- **Lançamento do conteúdo MC institucional (vídeo + simulador biometria)** — taxa de sucesso Rota 1 deve melhorar; recalibrar mix em §5.2 e custo em §5.3.

---

E4 v1.2 gravado: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-Matriz-NivelServico-v1_2-2026-0509.md
