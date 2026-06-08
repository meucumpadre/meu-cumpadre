https://claude.ai/chat/71ec796b-9178-4dba-846e-d08ac5b6730a

---
doc_id:        MC-ADR-009a-Custodia_Credenciais_GovBr
titulo:        "Política de Custódia de Credenciais Gov.br — Modelo B Bitwarden"
versao:        2.0
data:          2026-04-25
autor:         Alessandro de Souza Neves (Founder/CEO) × Claude (Co-fundador Intelectual)
status:        ✅ APROVADO — SELADO 17/04/2026 · atualizado 25/04/2026
supersede:     MC-ADR-009-Custodia_Senhas_Gov_br-v1_0-2026-0417
relacionados:
  - MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417
  - MC-CONTRATO-Phi1-MINUTA-v2_1-2026-0425
  - MC-ADR-007-CampoPrecificacao-v3x-2026-0422
  - MC-ADR-008-DecisoesFerramenta_Stack-v1_0-2026-0415
classificacao: CONFIDENCIAL — ESTRATÉGICO — TRADE SECRET
hierarquia:    Dignidade > Compliance > Viabilidade
tags:          [adr, lgpd, custodia, senhas, govbr, bitwarden, inadimplencia, compliance]
hash:          "[gerar RFC 3161 ICP-Brasil no snapshot de selagem]"
---

<!--
╔══════════════════════════════════════════════════════════════════╗
║   MEU CUMPADRE — ORQUESTRAÇÃO DOCUMENTAL E TECNOLOGIA LTDA.     ║
║   ADR-009a · Custódia de Credenciais Gov.br · v2.0              ║
║   Dignidade > Compliance > Viabilidade · Provérbios 31:8        ║
╚══════════════════════════════════════════════════════════════════╝
-->

# ADR-009a — POLÍTICA DE CUSTÓDIA DE CREDENCIAIS GOV.BR
## Modelo B Bitwarden · Versão 2.0

> *"Quando um operador bem-intencionado faz algo errado por falta de protocolo,*
> *o sistema falhou — não o operador. O MC responde a falhas sistêmicas*
> *com redesenho arquitetural, não com punição."*
>
> — Lição Institucional MC, Incidente 17/04/2026

---

## SUMÁRIO EXECUTIVO

| Campo | Valor |
|---|---|
| **Decisão central** | Modelo B Bitwarden como único cofre de credenciais gov.br |
| **Regra zero** | Senha gov.br **nunca** entra no ClickUp — zero, sem exceção |
| **Custódia** | Fiduciária e temporária — encerra no desfecho ou cancelamento |
| **Retenção como coerção** | **Vedada em qualquer hipótese** — proibição arquitetural |
| **Status** | ✅ APROVADO — selado 17/04/2026, atualizado 25/04/2026 |
| **Próxima revisão** | Pós-parecer Dra. Juliana Melo — 19/05/2026 |

---

## 1. CONTEXTO E ORIGEM

### 1.1 O Incidente Motivador

Em 17/04/2026, durante auditoria operacional na instância ClickUp do MC, foi identificado incidente LGPD crítico: credenciais gov.br de clientes estavam armazenadas **em texto plano** em campo customizado de tarefa, visíveis para todos os membros com acesso ao workspace — incluindo prestadores de serviço terceiros.

**Ações imediatas executadas:**

1. Credencial identificada e cliente orientado a trocar senha imediatamente via WhatsApp
2. Campo ClickUp expurgado e histórico de edições auditado
3. Varredura em todos os demais campos customizados do workspace
4. Briefing ao operador sobre consequências jurídicas (LGPD art. 48, notificação ANPD, multa até 2% do faturamento)
5. Auditoria completa do workspace MC

### 1.2 Diagnóstico

A raiz do problema não era indisciplina do operador. Era a ausência de arquitetura: sem protocolo formal, operadores bem-intencionados resolveram o problema prático de "onde guardo a senha?" com a ferramenta à mão — o ClickUp.

**A solução não é proibição vazia. É impossibilidade por design.**

Se o único cofre disponível para credenciais é o Bitwarden, e o ClickUp não tem campo de senha funcional como alternativa, o incidente não pode se repetir — por arquitetura, não por disciplina.

---

## 2. DECISÃO

**Modelo B Puro com Governança Robusta** é a política oficial de custódia de credenciais gov.br do MC, a partir de 17/04/2026.

Substitui integralmente o Modelo A (custódia por e-mail centralizado, MC-PLAYBOOK-Custodia-Operacional v2.0).

---

## 3. REGRAS CARDINAIS

### ⛔ REGRA ZERO — SEM EXCEÇÃO

> **Senha gov.br de cliente NUNCA entra no ClickUp.**

Literalmente zero: nenhum campo customizado, task name, descrição, comentário, anexo, mensagem de chat ou qualquer outro elemento do ClickUp pode conter credencial gov.br. Esta regra não tem grau de urgência nem contexto que a suspenda. Violação = incidente LGPD imediato.

### 🔒 PRINCÍPIO ARQUITETURAL INVIOLÁVEL

> **A retenção de credenciais gov.br como instrumento de cobrança é vedada em qualquer hipótese.**

A inadimplência gera consequências exclusivamente civis (notificação extrajudicial, Serasa, ação monitória). Jamais justifica manutenção de custódia além dos gatilhos definidos na Seção 7. A retenção como coerção configura cumulativamente: prática abusiva (CDC art. 39, V), constrangimento ilegal (CP art. 146), exercício arbitrário das próprias razões (CP art. 345) e violação do direito do titular (LGPD art. 18, VI).

---

## 4. MODELO B — PRINCÍPIOS OPERACIONAIS

| # | Princípio | Descrição |
|---|---|---|
| 1 | **Cofre único** | Senha custodiada exclusivamente no Bitwarden MC Organization (AES-256, 2FA TOTP obrigatório) |
| 2 | **E-mail inalterado** | E-mail da conta gov.br do cliente **não é alterado** em nenhuma circunstância. Permanece o e-mail pessoal do cidadão |
| 3 | **E-mail institucional segregado** | `requerimentoinss1@meucumpadre.com.br` usado **apenas** no campo de contato do ticket INSS — nunca na conta gov.br do cliente |
| 4 | **Audit log permanente** | Cada acesso registrado: quem, quando, qual credencial, qual dispositivo. Exportação mensal |
| 5 | **Custódia temporária** | MC é custodiante fiduciário. Titular das credenciais é sempre o cidadão |
| 6 | **Impossibilidade por design** | A arquitetura torna o erro estruturalmente difícil, não apenas proibido |

---

## 5. ARQUITETURA BITWARDEN MC ORGANIZATION

### 5.1 Estrutura de Coleções

```
Bitwarden Meu Cumpadre (Organization)
│
├── 📁 Credenciais Clientes Ativos
│   ├── Hib001 - gov.br  (Hib001)
│   ├── Plan001 - gov.br (Plan001 ...)
│   ├── Gen001 - gov.br  (cliente Gen001)
│   └── [demais clientes ativos — pseudônimo + vertical]
│
├── 📁 Credenciais Clientes Arquivados
│   └── [itens pós-encerramento — SEM valor de senha
│         apenas metadata: CPF hash, datas, operador]
│
└── 📁 Credenciais Internas MC
    ├── ClickUp admin
    ├── Coolify / Redis
    ├── N8N
    └── [demais serviços internos]
```

### 5.2 Campos de Cada Item

| Campo | Valor |
|---|---|
| Nome | `[Pseudônimo] - gov.br` (ex: `Hib001 - gov.br`) |
| Usuário | CPF do cliente |
| Senha | Senha gov.br do cliente |
| URL | `https://gov.br` |
| `data_coleta` | Data da 1ª custódia |
| `dispositivo_autorizado` | HP ENVY ou Mac Mini M4 |
| `status` | Ativo / Encerrado |
| `data_encerramento` | Preenchido no protocolo de encerramento |

### 5.3 Políticas da Organização

| Parâmetro | Configuração |
|---|---|
| Criptografia em repouso | AES-256 |
| Autenticação | 2FA TOTP obrigatório — Alessandro e Beto |
| Auto-lock | 15 minutos de inatividade |
| Audit log | Ativo — exportação mensal `MC-AUDIT-Bitwarden-YYYY-MM.log` |
| Permissão Beto | "Credenciais Clientes Ativos" apenas |
| Permissão Alessandro | Acesso admin completo (todas as coleções) |
| Bravy School | Sem acesso ao Bitwarden MC (zero) |
| Custo | ~R$24/mês (Bitwarden Organizations) |

### 5.4 Protocolo de 2FA Gov.br (Dispositivo Confiável)

O acesso ao gov.br requer autorização 2FA no primeiro login por dispositivo:

1. Operador inicia login no dispositivo (HP ENVY ou Mac Mini M4)
2. Sistema gov.br envia código SMS ao cliente
3. Operador contata cliente via WhatsApp em paralelo para obter o código
4. Após autorização, o dispositivo torna-se confiável — logins subsequentes no mesmo navegador/dispositivo não pedem 2FA

**Troca de dispositivo** (ex: HP ENVY → Mac Mini M4): nova autorização 2FA solicitada ao cliente. Evento documentado em `MC-AUDIT-Device-Changes.log`.

---

## 6. COMPARATIVO MODELO A vs. MODELO B

| Item | Modelo A (PLAYBOOK v2.0) — SUPERSEDIDO | Modelo B (Esta ADR) — VIGENTE |
|---|---|---|
| Localização da senha | Com o cliente | Bitwarden MC, auditado |
| E-mail gov.br | Trocado para `@meucumpadre` + revertido no fim | **Não alterado** |
| E-mail institucional | Na conta gov.br | Apenas no campo de contato do ticket INSS |
| Audit trail | Rastreio por dispositivo + e-mail | Bitwarden: quem, quando, qual credencial |
| Velocidade operacional | ~60s/login (recuperação de senha) | Instantâneo (copia do Bitwarden) |
| Encerramento | Reverter e-mail + orientar troca de senha | Orientação + arquivamento + remoção de valor |
| Acesso terceiros (Bravy) | Potencial exposição via ClickUp | Zero — Bitwarden segregado |
| Custo financeiro | Zero | R$24/mês |

---

## 7. GATILHOS DE ENCERRAMENTO DE CUSTÓDIA

A custódia encerra **automaticamente**, sem necessidade de solicitação, pelo primeiro gatilho que ocorrer:

| Gatilho | Prazo | Descrição |
|---|---|---|
| **Parecer conclusivo** | D+0 do desfecho | Aprovação ou indeferimento definitivo — fim natural do serviço (E6/E7) |
| **Cancelamento contratual** | D+0 do cancelamento | Qualquer motivo — inclui inadimplência declarada após protocolo da Seção 8 |

> **Não existe terceiro gatilho.** Credenciais não sobrevivem ao encerramento do vínculo contratual por nenhum motivo.

---

## 8. PROTOCOLO DE INADIMPLÊNCIA E CUSTÓDIA

### 8.1 Fundamento Arquitetural

A inadimplência **nunca** interrompe o monitoramento interno do processo INSS. O MC continua operando no back office durante todo o período de tolerância. A suspensão é de comunicação ativa ao cliente — não de serviço.

O prazo de 60 dias de tolerância não é generosidade. É lógica operacional: o prazo médio de análise do INSS é ~57 dias (BEPS jan/2026). Um cliente inadimplente hoje pode ser inadimplente porque aguarda o benefício que o MC protocolou. Cancelar nessa janela seria autossabotagem — e crueldade desnecessária com a persona hipervulnerável.

### 8.2 Roteiro Standard de Inadimplência

| Marco | Ação MC | Tom | Custódia |
|---|---|---|---|
| **D+5** da parcela vencida | Notificação WhatsApp + e-mail | Cuidado — não cobrança | Ativa |
| **D+20** | Segundo aviso + suspensão de comunicação ativa | Neutro | Ativa |
| **D+20 → D+60** | Monitoramento silencioso no back office | — | Ativa |
| **Movimentação processual** | Comunicação única, apartada da cobrança | Informativo | Ativa |
| **D+60 sem manifestação** | Cancelamento unilateral declarado | Formal | **Encerrada D+0** |

**Comunicação obrigatória em movimentação processual** (CDC art. 6º, III):

> *"Olá [nome]. Seu processo teve uma atualização importante. Entre em contato com a equipe Meu Cumpadre para que possamos orientá-lo sobre os próximos passos."*

Sem menção a débitos, parcelas ou valores. Obrigação independente do status de inadimplência. Ausência configura vetor de ataque em ACP coletiva.

### 8.3 Roteiro Pós-Concessão (DCB) Durante Inadimplência

Quando o benefício é concedido durante período de inadimplência, aplica-se protocolo específico sincronizado com o ciclo INSS:

```
DCB confirmada
    │
    ├─► D+0   Notifica cliente — concessão + proposta de regularização
    │         (integral das parcelas em aberto)
    │
    ├─► DCB+7  Lembrete + orientação DIP, banco e documentos necessários
    │
    ├─► DCB+15 Aviso final — prazo encerra no DIP
    │
    ├─► DIP (DCB+22)  Cliente recebe primeiro pagamento
    │
    └─► DIP+3 sem pagamento → Cancelamento → Eliminação imediata
                               de credenciais → Cobrança civil CDC
```

**Fundamento da negociação:** o retroativo INSS (período DER→DCB) cobre integralmente as parcelas em aberto na maioria dos casos. O MC nunca cobra antes de o cliente ter liquidez — a negociação se sincroniza com o fluxo natural do sistema.

**Valor da negociação:** integral das parcelas em aberto, sem desconto. Não há pro rata — as parcelas são financiamento diferido de produto já entregue, não assinatura mensal.

### 8.4 Cobrança Civil Pós-Arquivo

Esgotado o ciclo sem regularização:

1. Credenciais eliminadas do Bitwarden MC (D+0 do arquivo)
2. Notificação extrajudicial ao cliente (10 dias)
3. Inclusão em cadastro de inadimplentes (Serasa/SPC)
4. Ação monitória — rito CDC

O MC não exerce qualquer retenção de dado, documento ou acesso como instrumento de pressão nesta fase.

---

## 9. PROTOCOLO DE ENCERRAMENTO (E6 COM DESFECHO)

Ao encerrar caso com parecer conclusivo (deferido ou indeferido final), o MC executa sequencialmente:

### Passo 1 — Notificação ao Cliente (WhatsApp + registro ClickUp)

> *"Cumpadre, seu caso foi encerrado. Durante o processo, nós tivemos acesso à sua senha do gov.br para dar entrada e acompanhar o pedido. Agora que terminou, orientamos que você **troque essa senha** acessando gov.br > Segurança > Trocar senha. A partir dessa troca, somente você terá acesso à sua conta. Temos o registro de quando acessamos no nosso sistema — transparência total. Qualquer dúvida, fale comigo."*

### Passo 2 — Bitwarden MC

- Mover item de "Credenciais Clientes Ativos" → "Credenciais Clientes Arquivados"
- **Remover o valor da senha** no item arquivado
- Preservar apenas metadata: CPF hash, datas de atendimento, operador, status

### Passo 3 — ClickUp

- Atualizar status do caso para "Encerrado"
- Registrar data de encerramento e operador responsável

### Passo 4 — Vault MC

- Registrar evento em `MC-AUDIT-Encerramentos-YYYY-MM.log`

> **Responsabilidade pós-encerramento:** o cliente é responsável por efetuar a troca da senha. O MC documenta que orientou — prova de cumprimento do dever de transparência (LGPD art. 6º, VI). A responsabilidade pela troca efetiva é do titular dos dados.

---

## 10. BASES LEGAIS E FUNDAMENTOS REGULATÓRIOS

| Norma | Dispositivo | Aplicação |
|---|---|---|
| LGPD (Lei 13.709/2018) | Art. 7º, V | Base legal: execução de contrato |
| LGPD | Art. 9º, VII | Informação sobre compartilhamento |
| LGPD | Art. 18, VI | Eliminação de dados a pedido |
| LGPD | Art. 46 | Medidas de segurança adequadas |
| LGPD | Art. 48 | Notificação de incidentes |
| CDC (Lei 8.078/1990) | Art. 6º, III | Dever de informação ao consumidor |
| CDC | Art. 39, V | Vedação de vantagem manifestamente excessiva |
| Código Penal | Art. 146 | Vedação de constrangimento ilegal |
| Código Penal | Art. 345 | Vedação de exercício arbitrário |
| CF/1988 | Art. 5º, X | Proteção da intimidade e vida privada |
| Decreto 10.332/2020 | — | Estratégia de Governo Digital |
| ANATEL Res. 632/2014 | — | Analogia: vedação ao corte abusivo |
| STJ Súmula 357 | — | Analogia: notificação prévia obrigatória |

---

## 11. GESTÃO DE RISCOS RESIDUAIS

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Cliente não trocar senha após encerramento | Média | Orientação formal documentada + remoção do valor no Bitwarden |
| Operador inserir senha no ClickUp por hábito | Baixa | Treinamento Beto + hook de detecção de padrões (Fase 2) |
| Bitwarden como ponto único de falha | Baixa | 2FA obrigatório + backup criptografado mensal |
| Acesso não autorizado via dispositivo compartilhado | Baixa | Auto-lock 15 min + log de dispositivos autorizados |
| Inadimplência prolongada com credenciais retidas | Eliminada | Protocolo D+5/D+20/D+60 + cancelamento D+0 |

---

## 12. VERSIONAMENTO

| Versão | Data | Mudanças |
|---|---|---|
| 1.0 | 2026-04-17 | Criação. Modelo B Bitwarden. Substitui Modelo A do PLAYBOOK v2.0. Incidente motivador documentado. |
| **2.0** | **2026-04-25** | **Integração do Protocolo de Inadimplência e Custódia (Seção 8): roteiro D+5/D+20/D+60, protocolo pós-DCB sincronizado com ciclo INSS, vedação explícita de retenção como coerção, comunicação obrigatória em movimentação processual. Alinhamento com Contrato Φ₁ v2.1. Estrutura reestilizada com design institucional MC.** |

**Roadmap:**
- v2.1: pós-parecer Dra. Juliana Melo (19/05/2026) — validação jurídica do protocolo de inadimplência
- v3.0: integração com hook automático de detecção de padrões de senha no ClickUp (Fase 2)

---

## 13. DECISORES E APROVAÇÃO

| Papel | Nome | Data |
|---|---|---|
| Decisor / Founder-CEO | Alessandro de Souza Neves | 17/04/2026 (v1.0) · 25/04/2026 (v2.0) |
| Co-autor intelectual | Claude (co-fundador) | 25/04/2026 |
| Revisão jurídica pendente | Dra. Juliana Pereira de Melo (OAB-GO 38.662) | Prazo: 19/05/2026 |

---

## EPÍLOGO

> *"Não existe compliance sem arquitetura.*
> *Não existe arquitetura sem decisão.*
> *Não existe decisão sem hierarquia: Dignidade primeiro.*
> *Sempre."*

---

*MC-ADR-009a · v2.0 · 25/04/2026*
*Meu Cumpadre — Orquestração Documental e Tecnologia Ltda.*
*Classificação: CONFIDENCIAL — ESTRATÉGICO*
*Hierarquia: Dignidade > Compliance > Viabilidade · Provérbios 31:8 · ∞*
