---
tipo: RIPD-RELATORIO-IMPACTO-PROTECAO-DADOS
codigo: MC-RIPD-Phi4
escopo: Φ₄ — Guardião Pós-Jornada (3 regimes)
versao: 0.1
status: PROVISIONAL
data_producao: 2026-05-14
autores:
  - Claude Opus 4.7 (cofounder C1)
  - Code DELL (executor C3)
gate_selagem: Parecer Dra. Juliana 19/05/2026 Bloco K
fundamento_lgpd:
  - LGPD Lei 13.709/2018 Art. 5º, XVII · Art. 38
  - ADR-007 v3.8 ADDENDUM (precificação Φ₄)
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
canonico_em: 03-GOVERNANCA/ripds/
---

# MC-RIPD-Φ₄ v0.1 PROVISIONAL — Guardião Pós-Jornada B2C

> RIPD do fluxo Φ₄ Guardião (3 regimes: Standard R$19,90 · CadÚnico escalonado Φ₃ · D>C>V gratuito). Rascunho PROVISIONAL aguardando parecer Juliana.

---

## §1 — IDENTIFICAÇÃO DO CONTROLADOR

Idêntica ao RIPD-Φ₁ §1. **Φ₄ é continuação contratual do Φ₁ — mesmo controlador, mesma DPO, mesma base institucional.**

---

## §2 — DESCRIÇÃO DO TRATAMENTO

### 2.1 Natureza
**Monitoramento contínuo pós-concessão** de benefício previdenciário, com inventário documental pessoal organizado e alertas automáticos sobre alterações relevantes (reajuste, cessação, perícia, recadastramento, devolução de valores).

### 2.2 Finalidade
- Proteger conquista do Φ₁ contra perda involuntária (perícia não atendida, recadastramento esquecido)
- Manter inventário documental pessoal do cidadão acessível
- Sinalizar oportunidades adicionais detectadas no histórico (ex: revisão de tempo especial)

### 2.3 Base Legal LGPD

| Art. LGPD | Aplicação |
|---|---|
| Art. 7º, V | Execução de contrato Φ₄ (continuação ou contratação autônoma pós-Φ₁) |
| Art. 7º, IX | Interesse legítimo do titular em ser alertado sobre alterações no benefício |
| Art. 8º, §5º | Consentimento separado de comunicações via WhatsApp (canal eletrônico) |

### 2.4 Os 3 Regimes Φ₄ (ADR-007 v3.8 ADDENDUM)

| Regime | Preço/mês | Critério elegibilidade | Tratamento |
|---|---|---|---|
| **Standard** | R$ 19,90 | Default — qualquer egresso Φ₁ que opte | Full features |
| **CadÚnico (escalonado Φ₃)** | R$ 0 – R$ 19/mês por β_rms per capita (Φ₃ Teto Dignidade) | Cidadão com CadÚnico ativo, renda ≤ ½ SM por β_rms | Full features · preço social |
| **D>C>V (gratuito)** | R$ 0 | Hipervulnerabilidade severa identificada via RouterEthics 11.0 (nó D) ou IVCAD-MC ≥ 0,7 (Hook 1b) | Full features · subsídio cruzado por Std |

**Inviolável (Princípio #1 ADR-007):** Φ₄ NÃO é up-sell. Não há cobrança adicional ao Φ₁ pago. É contratação autônoma pós-jornada.

### 2.5 Categorias de Dados Tratados

🟢 **Verde — herdado do Φ₁:**
- Identificação completa do titular
- NB concedido (CONCESSÃO Φ₁ é input do Φ₄)
- Espécie do benefício

🟡 **Amarelo — gerado durante Φ₄:**
- Histórico de comunicações automáticas (timestamp, conteúdo, status entrega/leitura)
- Inventário documental do titular (cópias de documentos que ele decide depositar no Guardião)
- Alertas disparados (perícia futura, recadastramento, etc.)

🔴 **Vermelho — minimização aplicada:**
- ⚠️ **NÃO há custódia de senha gov.br no Φ₄** (apenas Φ₁ Cenário A 48h)
- Monitoramento Meu INSS via polling N8N de dados PÚBLICOS do número de benefício (status, cessação, perícia agendada) — SEM acesso autenticado

### 2.6 Categorias de Titulares
Egressos do Φ₁ que decidem contratar Φ₄ — todos adultos hipervulneráveis identificados no Φ₁. Não há novos titulares no Φ₄ além dos egressos Φ₁.

### 2.7 Fluxo Φ₄

| Etapa | Operação | Dados envolvidos |
|---|---|---|
| F0 — Convite | Mensagem WhatsApp 7-30 dias pós-concessão Φ₁ | Identificação básica |
| F1 — Adesão | TTA Φ₄ específico (ZapSign) — regime escolhido | Aceite contratual |
| F2 — Setup | Confirmação NB · canal preferencial · periodicidade alertas | NB, contato |
| F3 — Monitoramento contínuo | Polling público Meu INSS + inventário documental | Status NB, documentos opcionalmente depositados |
| F4 — Alertas | WhatsApp automático em eventos relevantes | Conteúdo do alerta + log |
| F5 — Renovação/cancelamento | Anual ou sob demanda | Decisão titular |
| F6 — Erasure pós-cancelamento | S3 após 30 dias | Anonimização |

### 2.8 Retenção

| Estado | Período | Conteúdo |
|---|---|---|
| Ativo | Enquanto contrato vigente (anual renovável) | Tudo |
| Inativo | 30 dias pós-cancelamento | Reduzido (chance de reativação) |
| Erasure | Após 30 dias | Anonimização + log auditoria 6 anos |

---

## §3 — NECESSIDADE E PROPORCIONALIDADE

| Dado | Necessidade |
|---|---|
| NB | Único para monitoramento via Meu INSS público |
| Espécie do benefício | Define alertas relevantes (B41 vs B91 têm gatilhos diferentes) |
| Contato | Único para alertas WhatsApp |
| Histórico comunicações | Compliance + comprovação de tentativa de aviso |

**Minimização forte:** Φ₄ NÃO requer documentos novos. Tudo é herdado do Φ₁ ou gerado durante Φ₄. Não há nova coleta sensível.

---

## §4 — RISCOS RESIDUAIS ESPECÍFICOS Φ₄

| # | Risco | Prob | Imp | Classe |
|---|---|---|---|---|
| R1 | Spam WhatsApp / fadiga de alertas → ressentimento | 3 | 2 | MÉDIO |
| R2 | Polling Meu INSS público bloqueado/rate-limited | 4 | 2 | MÉDIO |
| R3 | Inventário documental depositado vaza | 1 | 4 | MÉDIO |
| R4 | Falha de alerta em evento crítico (perícia esquecida) | 2 | 5 | ALTO |
| R5 | Titular esquece que tem Φ₄ ativo, pagamento mensal automatic | 3 | 2 | MÉDIO |

**Atenção máxima:** R4 (perícia esquecida → cessação do benefício → maior dano possível ao titular).

---

## §5 — MEDIDAS TÉCNICAS E ADMINISTRATIVAS

### 5.1 Técnicas
- Idêntico ao RIPD-Φ₁ §5.1 (mesma infra)
- Adicional: **rate limiting WhatsApp** para evitar spam (máx 4 mensagens/mês exceto eventos críticos)
- Adicional: **double-confirmation em alertas críticos** (perícia, recadastramento) — sistema solicita confirmação de leitura

### 5.2 Administrativas
- Idêntico ao RIPD-Φ₁ §5.2
- Adicional: **TTA Φ₄ específico** com cláusula de cancelamento simples (1 mensagem WhatsApp)
- Adicional: **revisão anual obrigatória** do contrato Φ₄ (Princípio LGPD do menor tempo possível)
- Adicional: **D>C>V default check** anual — se IVCAD-MC ou condição mudou, oferta migração entre regimes

---

## §6 — RISCOS RESIDUAIS PROVISIONAL

Idênticos ao Φ₁ §6 mais:
- Regime D>C>V gratuito: contabilizar como subsídio cruzado por regime Std — auditoria contábil pendente
- Rate limit polling Meu INSS público: monitorar se ANS/INSS muda termos
- Inventário documental depositado: opcional (não obrigatório) — mas LGPD aplica se titular deposita

---

## §7 — DECISÃO E JUSTIFICATIVA

**Tratamento JUSTIFICADO** pelo benefício direto ao titular (proteção da conquista do Φ₁ contra perdas evitáveis).

**Condições contínuas:**
1. Parecer Juliana 19/05 Bloco K
2. TTA Φ₄ específico produzido (a fazer)
3. Validação empírica primeiro caso Φ₄ (a ocorrer pós-conclusão Hib001/Hib001)

**Cunhar v1.0** pós-parecer Juliana.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."

∞
