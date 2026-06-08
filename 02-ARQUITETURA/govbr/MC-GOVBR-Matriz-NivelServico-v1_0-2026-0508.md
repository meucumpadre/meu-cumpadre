---
título: MC-GOVBR-Matriz-NivelServico
versão: v1_0
data: 2026-05-08
status: RASCUNHO
autor: Claude Code × Alessandro Neves
fonte: E1 + E2 + E3
---

# MC-GOVBR — Matriz Nível de Conta × Serviço × Impacto MC

> Documento E4 — derivado de E1 (Inventário), E2 (Taxonomia) e E3 (Mapa Normativo).
> Convenção de confiança da informação:
> - **CONFIRMADO**: nível mínimo declarado em fonte oficial gov.br listada em E1.
> - **INFERIDO [n E1]**: nível mínimo extraído de tutorial/vídeo/blog em E1, sem confirmação oficial.
> - **NÃO MAPEADO**: nenhuma fonte em E1 informa o nível mínimo do serviço.
> Convenção de jornadas MC:
> - **Φ₀** = jornada CadÚnico (triagem → inscrição/atualização)
> - **Φ₁** = jornada protocolar INSS (triagem → protocolo de benefício/recurso)
> - **Φ₄** = jornada Guardião pós-concessão (monitoramento contínuo do benefício ativo)

---

## 1. Matriz principal

### 1.1 Meu INSS

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Consultar CNIS (extrato previdenciário) | Meu INSS / app | **Prata** | Histórico de vínculos empregatícios e contribuições — base de toda triagem MC. | Prata | **Φ₁ (núcleo) / Φ₄** | [1, 2, 3, 26] | INFERIDO [26] |
| Consultar benefício ativo | Meu INSS / app | **Prata** | Ver benefício em manutenção, valor, banco pagador. | Prata | **Φ₄ (núcleo)** | [23] | INFERIDO [23] |
| Simular aposentadoria | Meu INSS / app | **Bronze** | Cálculo estimativo de tempo de contribuição. | Prata | Φ₁ | [1, 26] | INFERIDO [1] |
| Protocolar requerimento de benefício (DER) | Meu INSS / app | **Prata** | Abertura de pedido formal (aposentadoria, BPC, pensão). | Prata | **Φ₁ (núcleo)** | [3, 4] | INFERIDO [4] |
| Agendar perícia médica | Meu INSS / app | **Bronze** | Marcação para benefícios por incapacidade. | Bronze | Φ₁ | — | NÃO MAPEADO |
| Apresentar recurso ao CRPS | Meu INSS / app | **Prata** | Recurso administrativo contra indeferimento. | Prata | Φ₁ | — | NÃO MAPEADO |
| Cadastrar representante legal | Meu INSS / app | **Prata** | Vincula curador/procurador ao CPF do beneficiário. | Prata | **Φ₁ + Φ₄** | [17, 18, 44] | CONFIRMADO [17] |
| Consultar andamento de processo | Meu INSS / app | **Bronze** | Status de protocolo aberto. | Bronze | Φ₁ + Φ₄ | [1] | INFERIDO [1] |
| Emitir carta de concessão | Meu INSS / app | **Prata** | Documento oficial de deferimento. | Prata | Φ₄ | — | NÃO MAPEADO |
| Atualizar dados cadastrais | Meu INSS / app | **Prata** | Endereço, banco pagador, dados pessoais. | Prata | Φ₄ | [21] | INFERIDO [21] |
| Prova de vida digital | Meu INSS / app | **Ouro** (ou Prata via banco) | Prova de vida obrigatória anual para benefícios ativos. | Ouro | **Φ₄ (crítico)** | [49, 7] | INFERIDO [49] |

### 1.2 CadÚnico / Meu CadÚnico

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Consultar situação cadastral | App Meu CadÚnico | **Prata** | Status do cadastro, dados da família, RF. | Prata | **Φ₀ + Φ₄** | [32, 41] | INFERIDO [32] |
| Pré-cadastro online | gov.br/cadunico | **Bronze** | Geração de pré-cadastro a ser confirmado em CRAS presencial. | Bronze | **Φ₀ (entrada)** | [41] | INFERIDO [41] |
| Consultar benefícios vinculados (BF, BPC, Tarifa Social) | App Meu CadÚnico / Caixa Tem | **Prata** | Bolsa Família, BPC, Tarifa Social, Pé-de-Meia. | Prata | Φ₀ + Φ₄ | [32, 33, 41] | INFERIDO [32] |
| Atualizar dados cadastrais (efetivo) | **Presencial no CRAS** | **Não exige conta gov.br** | Atualização cadastral oficial — feita por entrevistador SUAS. | — | **Φ₀ (núcleo)** | [32, 41] | INFERIDO [32] |

### 1.3 Receita Federal / e-CAC

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Consultar CPF (situação cadastral) | gov.br/receitafederal | **Não exige login** | Verificação pública via CPF + nome/data nascimento. | — | Triagem Φ₀/Φ₁ | — | CONFIRMADO (público) |
| Emitir comprovante de situação cadastral CPF | gov.br/receitafederal | **Não exige login** | PDF oficial. | — | Triagem | — | CONFIRMADO (público) |
| Declaração IRPF (acesso e-CAC) | e-CAC | **Prata** | Declarar, retificar, consultar malha. | Prata | Φ₁ (extensão) | [4] | CONFIRMADO [4] |
| Consultar restituição | gov.br/receitafederal | **Bronze** | Status de restituição liberada. | Bronze | Φ₄ | — | NÃO MAPEADO |
| Cadastrar procuração digital (e-CAC) | e-CAC | **Prata** (outorgante) + **Prata** (outorgado) | Procuração eletrônica para representação fiscal. | Prata | **Φ₁ + Φ₄** | [38] | CONFIRMADO [38] |

### 1.4 CTPS Digital

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Consultar vínculos empregatícios | App CTPS Digital | **Prata** | Histórico de empregos e contratos. | Prata | Φ₁ (subsídio CNIS) | — | NÃO MAPEADO |
| Emitir CTPS digital | App CTPS Digital | **Bronze** | Geração inicial do documento digital. | Bronze | Φ₁ (subsídio) | — | NÃO MAPEADO |
| Consultar seguro-desemprego | gov.br/empregabrasil | **Prata** | Status de pedido e parcelas. | Prata | Φ₁ (subsídio) | — | NÃO MAPEADO |

### 1.5 Outros serviços gov.br relevantes

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Carteira Nacional de Habilitação (CNH) digital | App CDT (gov.br/senatran) | **Prata** | CNH digital com QR autenticável. | Prata | Subsídio (rota 5 elevação) | — | NÃO MAPEADO |
| Título de Eleitor digital (e-Título) | App e-Título | **Bronze** | Documento eleitoral digital. | Bronze | Subsídio | — | NÃO MAPEADO |
| Assinatura digital de documentos (Avançada) | gov.br/assinador | **Prata** | Assinatura avançada — força probatória entre partes. | Prata | Φ₁ + Φ₄ (peças) | [25] | INFERIDO [25] |
| Assinatura digital de documentos (Qualificada) | gov.br/assinador | **Ouro** | Assinatura qualificada — equiparada a firma reconhecida. | Ouro | Φ₁ + Φ₄ (peças críticas) | [25] | INFERIDO [25] |
| Procuração Digital gov.br (SPE / Sistema Procurações Eletrônicas) | gov.br | **Prata** (outorgante) + **Prata** (outorgado) | Outorga digital genérica intra-gov.br. | Prata | **Φ₁ + Φ₄ (núcleo)** | [40, 16] | INFERIDO [40] |

**Total de serviços mapeados:** 27 (11 Meu INSS + 4 CadÚnico + 5 Receita + 3 CTPS + 4 Outros).
**Confiança agregada:** 4 CONFIRMADO + 14 INFERIDO + 9 NÃO MAPEADO = 33% de confiança forte.

---

## 2. Mapa de bloqueio por nível

### 2.1 Cenário **Bronze** (cliente recém-cadastrado)

| Métrica | Valor |
|---|---|
| Serviços ACESSÍVEIS | 9 / 27 (33%) |
| Serviços BLOQUEADOS | 18 / 27 (67%) |
| Cobertura **Φ₁ (INSS)** | ~27% (apenas consultas e agendamento — protocolar / recorrer / extrair documento bloqueado) |
| Cobertura **Φ₀ (CadÚnico)** | ~50% (pré-cadastro online + atualização presencial CRAS funcionam; consulta digital bloqueada) |
| Cobertura **Φ₄ (Guardião)** | ~10% (apenas consulta de andamento — não consegue ver benefício ativo nem CNIS) |

Serviços acessíveis em Bronze: simular aposentadoria, agendar perícia, consultar andamento, pré-cadastro CadÚnico, atualização CRAS presencial, consulta CPF público, comprovante CPF, restituição, emitir CTPS digital, e-Título.

### 2.2 Cenário **Prata** (cliente após validação bancária ou CNH/SENATRAN)

| Métrica | Valor |
|---|---|
| Serviços ACESSÍVEIS | 24 / 27 (89%) |
| Serviços BLOQUEADOS | 3 / 27 (11%) |
| Cobertura **Φ₁ (INSS)** | ~91% (tudo exceto prova de vida digital pelo app — que pode ir presencial/banco) |
| Cobertura **Φ₀ (CadÚnico)** | ~100% |
| Cobertura **Φ₄ (Guardião)** | ~91% (prova de vida e assinatura qualificada bloqueadas) |

Serviços bloqueados em Prata: prova de vida digital pelo app (Ouro), assinatura qualificada (Ouro), procuração de outorgante Bronze que precisa Prata para emitir (caso de aprisionamento).

### 2.3 Cenário **Ouro** (cliente com biometria TSE/SENATRAN, CIN ou ICP-Brasil)

| Métrica | Valor |
|---|---|
| Serviços ACESSÍVEIS | 27 / 27 (100%) |
| Serviços BLOQUEADOS | 0 / 27 |
| Cobertura **Φ₁ / Φ₀ / Φ₄** | 100% |

---

## 3. Análise de impacto para o MC

### 3.1 O "nó" da jornada MC

**O gargalo é a consulta ao CNIS.** Sem CNIS, o MC não tem como executar a etapa de **triagem** (E1 → E2 da jornada interna do produto), que é onde se decide:

- Há tempo de contribuição para aposentadoria por idade?
- Há contribuição mínima para auxílio-doença?
- Há vínculo recente para seguro-desemprego?
- O cliente cumpre os 12/24 meses de carência exigidos?

**Onde o nó incide na jornada E0→E5 do MC:**
- **E0 (descoberta) — desbloqueado**: cliente chega via WhatsApp, não exige conta.
- **E1 (cadastro MC) — desbloqueado**: cadastro próprio do MC.
- **E2 (triagem)** — ⚠ **BLOQUEIO PRINCIPAL**: precisa CNIS, exige Prata.
- **E3 (orientação) — desbloqueado**: depende apenas da triagem anterior.
- **E4 (protocolo)** — ⚠ **BLOQUEIO SECUNDÁRIO**: precisa Prata (DER, recurso, atualização).
- **E5 (Guardião)** — ⚠ **BLOQUEIO TERCIÁRIO**: precisa Prata para benefício ativo + Ouro para prova de vida.

**% estimado do público-alvo MC em Bronze:**

> ⚠ **ESTIMATIVA — não há fonte primária em E1 com esse dado.** Necessária validação por LAI ao MGI.
>
> Faixa estimada com base em E1 [BLOCO 2] (vácuo conectividade rural, desbancarização, limitações motoras/visuais) e perfis-alvo MC (≥60 anos, PcD, rural, BPC):
> - Idoso urbano bancarizado: 30–40% em Bronze.
> - Idoso rural / sertanejo: 60–80% em Bronze.
> - PcD com limitação motora/visual severa: 50–70% em Bronze.
> - Beneficiário BPC sem CNH: 70–85% em Bronze.
>
> **Média ponderada do funil MC: ~55–65% chega em Bronze.**

### 3.2 Nível mínimo viável para o MC

| Jornada | Nível mínimo viável | Justificativa |
|---|---|---|
| **a) Φ₁ (triagem → protocolo INSS)** | **Prata** | CNIS + DER + recurso exigem Prata. Sem Prata, MC só consegue orientar para presencial — perde valor. |
| **b) Φ₀ (triagem → CadÚnico)** | **Bronze** (com fallback presencial CRAS) | Pré-cadastro online basta; atualização efetiva é sempre presencial. Bronze é suficiente, mas Prata desbloqueia o app Meu CadÚnico para acompanhamento contínuo. |
| **c) Φ₄ (Guardião pós-concessão)** | **Prata** + **Ouro pontual para prova de vida** | Precisa monitorar benefício ativo continuamente (Prata). Anualmente, prova de vida exige Ouro pelo app — ou rota presencial bancária. |

**Conclusão:** o **piso operacional do MC é Prata**. Bronze só serve para Φ₀ degradado.

### 3.3 Serviços que NÃO exigem conta gov.br (ou aceitam Bronze)

Lista de **rotas de fallback** que o MC pode acionar quando o cliente está em Bronze irreversível:

| Rota | Canal | O que destrava | Limitação | Custo (cliente) |
|---|---|---|---|---|
| Central 135 INSS | telefone | Consultas, agendamentos, status de benefício, perícia | Sem protocolo de DER nem recurso. | Grátis. |
| CRAS presencial | balcão | CadÚnico completo (Φ₀), encaminhamentos a BPC | Depende da agenda do CRAS local. | Grátis + deslocamento. |
| Agência INSS presencial | balcão | Φ₁ completo + cadastro de representante + selo Balcão Prata [1, 17] | Agendamento via 135; tempo de espera. | Grátis + deslocamento. |
| Defensoria Pública | atendimento jurídico | Recurso CRPS, ação judicial previdenciária, curatela | Disponibilidade variável. | Grátis. |
| Cartório de notas | presencial | Procuração pública em papel para e-CAC/INSS [BLOCO 4.2 E1] | Custo emolumentos. | Pago. |
| Agência bancária credenciada | balcão / TAA | Selo Prata via terminal [BLOCO 3.3 E1] | Cobertura rural fraca; gerentes refratários. | Grátis. |
| Posto Identificação Civil | balcão (PCs estaduais) | Emissão CIN — destrava Ouro futuro [BLOCO 3.7, 3.9 E1] | Tempo de emissão variável por estado. | Geralmente grátis. |
| TRE / Cartório Eleitoral | balcão | Coleta biométrica → libera Ouro futuro [BLOCO 3.7 E1] | Agendamento; depende de mutirão. | Grátis. |
| Consulta CPF / restituição | site público RFB | Triagem básica sem login | Apenas leitura de dados públicos. | Grátis. |

**Observação para o produto:** o MC pode garantir cobertura **mínima viável Φ₀** sem nunca exigir Prata, desde que tenha integração com CRAS local. Mas para Φ₁ e Φ₄, a oferta de "atendimento presencial via parceiro" é estrutural — não opcional.

---

## 4. Lacunas da matriz

Serviços onde a informação de nível mínimo **não foi confirmada** em fonte primária.

| Serviço | O que sabemos | O que falta | Ação recomendada |
|---|---|---|---|
| Agendar perícia médica | Aparenta ser Bronze (consulta + agendamento) | Confirmação oficial INSS | TESTAR EMPIRICAMENTE (criar conta Bronze e tentar agendar) |
| Apresentar recurso CRPS | Inferido como Prata por analogia com DER | Confirmação na IN INSS/PRES 128/2022 ou no site CRPS | BUSCAR Regulamento Interno do CRPS |
| Emitir carta de concessão | Inferido como Prata | Confirmação oficial | TESTAR EMPIRICAMENTE |
| Consultar restituição RFB | Inferido como Bronze (usuário acessa com CPF + dados) | Confirmar se exige login ou apenas CPF | TESTAR (já fizemos isso fora do MC?) |
| Consultar vínculos CTPS Digital | Não mapeado | Nível mínimo do app CTPS Digital | TESTAR EMPIRICAMENTE + ler termos do app |
| Emitir CTPS digital | Não mapeado | Nível mínimo na primeira emissão | TESTAR |
| Seguro-desemprego digital | Não mapeado | Nível para protocolar pedido | LAI ao MTE |
| CNH digital (CDT) | Não mapeado | Nível mínimo para baixar CNH no CDT | BUSCAR FAQ do app CDT |
| e-Título | Inferido como Bronze | Confirmar | TESTAR |
| Prova de vida digital INSS | Inferido Ouro / Prata via banco | **Crítico** — qual é exatamente o fluxo aceito? Bancos aceitos? | BUSCAR Portaria INSS sobre prova de vida 2024-2025 (norma fantasma F5 do E3) |
| Cadastrar representante legal — quais documentos exatos por tipo de tutela | Confirmado que exige Prata | Lista exata de documentos por curatela / tutela / procuração | LAI ao INSS (lacuna #5 do E2) |

**Total: 11 lacunas** — sendo 6 com ação TESTAR EMPIRICAMENTE (custo baixo, no escopo de uma sprint), 4 BUSCAR e 1 LAI estrutural.

---

## 5. Recomendação operacional

### 5.1 Nível-alvo padrão do MC

> **O MC deve operar com Prata como nível-alvo padrão para todo cliente.**

Justificativa:
- Bronze cobre apenas 33% dos serviços e ~10% de Φ₄ — inviável para o produto.
- Ouro só agrega valor real em **prova de vida anual** e **assinatura qualificada**. Para essas duas exceções, o MC pode acionar rotas pontuais (presencial banco / TAA) sem exigir Ouro contínuo.
- Prata cobre 89% do catálogo + 91% de Φ₁/Φ₄ + 100% de Φ₀ digital — **ponto ótimo de custo/cobertura**.

### 5.2 Três rotas prioritárias de elevação para o perfil MC (idoso, PcD, rural)

| Prioridade | Rota | Quando aplicar | Estimativa de sucesso |
|---|---|---|---|
| **1ª — Internet Banking** [E1 BLOCO 3.2, fontes 13, 14] | Selo Prata via OAuth banco credenciado | Cliente bancarizado **com senha eletrônica de internet ativa** (Caixa, BB, Bradesco, Itaú, Santander, Sicoob, Sicredi). Preferência operacional do MC: Caixa (ampla penetração entre BPC). | ~70-80% nos clientes que cumprem o pré-requisito. |
| **2ª — Câmera traseira assistida** [E1 BLOCO 3.8, fontes 10, 15] | Selo Ouro via biometria facial guiada por API Humana MC | Cliente com **biometria no TSE ou CNH recente** mas com limitação motora/visual que impede selfie. Operador-MC orienta familiar local a usar câmera traseira. | ~50-60% — depende muito da qualidade da biometria de origem. |
| **3ª — Selo Balcão presencial INSS** [E1 BLOCO 3.4, fonte 1] | Selo Bronze qualificado (alguns casos Prata) via servidor INSS no balcão | Cliente **sem biometria em base alguma** ou **sem internet banking** — exclusão digital absoluta. Fallback final do funil. | ~85% (quando o agendamento ocorre) — mas ciclo de tempo é longo. |

**Rota 4 (não prioritária):** CIN/QR-Code [BLOCO 3.9 E1] — depende de o cliente ter ido emitir a nova carteira. Vai entrar como rota crescente nos próximos 24 meses, mas hoje cobre <30% do público.

### 5.3 Custo operacional estimado por rota (tempo da API Humana MC)

> ⚠ Estimativas — calibrar com dados de operação após primeiras 50 jornadas.

| Rota | Tempo médio API Humana | Pré-trabalho | Pós-trabalho | Taxa de retentativa |
|---|---|---|---|---|
| 1ª — Internet Banking | **8-15 min** | Confirmar banco e senha eletrônica ativa (3 min). | Verificar selo Prata persistido (1 min). | Baixa (10-15%) — banco rejeitando OAuth. |
| 2ª — Câmera traseira assistida | **20-40 min** | Treinar familiar local (10 min). Verificar luz, limpar lente. | Aguardar processamento + reativar 2FA (5 min). | Alta (40-50%) — pode cair no bloqueio 24h. |
| 3ª — Selo Balcão presencial INSS | **5 min API + 7-21 dias de calendário** | Agendar via 135 (5 min). | Acompanhar comparecimento + selo aplicado. | Baixa quando o cliente comparece — alto no-show (~25-35%). |

**Inferência para escala:**
- Se 60% do funil entra em Bronze e o MC precisa elevá-los → o **mix esperado** é ~60% Rota 1, ~25% Rota 2, ~15% Rota 3.
- Custo médio ponderado API Humana **por elevação**: ~`0,6×12 + 0,25×30 + 0,15×5` = **~17 minutos de operador por cliente elevado**, mais o ciclo presencial assíncrono no caso da Rota 3.
- Ou seja: **um operador a 6h/dia consegue cuidar de ~21 elevações/dia** em regime de cruzeiro — número que vira input para o dimensionamento do contact center MC.

---

## Apêndice A — Sinais de que esta matriz precisa ser atualizada

- Publicação de qualquer **portaria sobre níveis gov.br** (norma fantasma F4 de E3) que altere requisitos.
- Publicação de portarias INSS sobre **biometria BPC** (norma F5 de E3) — pode mover prova de vida de Ouro para Prata ou criar novas exigências.
- Mudança no fluxo de **prova de vida digital** com banco — atualmente é o ponto mais frágil do Φ₄.
- Lançamento de novo serviço gov.br ou substituição de portal (e.g., novo Meu INSS).

---

E4 gravado: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-Matriz-NivelServico-v1_0-2026-0508.md
