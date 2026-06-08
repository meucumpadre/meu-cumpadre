---
tipo: analise
contexto: reuniao-fornecedor
participantes: [Alessandro, Tiago Teles]
data-reuniao: 2026-04-15
horario: 17:26
fornecedor: Bravy (ASV Digital Ltda)
produzido-por: Claude (co-founder intelectual)
status: registro-historico
tags: [bravy, clickup, claude-code, fornecedor, renegociacao, infraestrutura]
---

# MC-ANALISE: Reunião Alessandro + Tiago Teles (Bravy) — 15/04/2026

**Data:** Quarta, 15/04/2026 · 17:26
**Fornecedor:** Bravy (ASV Digital Ltda)
**Contratante:** Alessandro Neves (Meu Cumpadre)
**Valor contratual:** R$15.000 (pago) por implementação ClickUp + automações
**Vigência original:** 4 meses (assinado 10/02/2025 — VENCIDA há ~14 meses)
**Contexto:** Bravy em execução atrasada. Carlos Bravy designou Iuri para retomar. Tiago Teles (sócio) convocou reunião para realinhar escopo.

---

## 1. O que aconteceu na reunião

### 1.1 Postura do Tiago

Tiago executou três movimentos estratégicos em 4 páginas de transcrição:

**Movimento 1 — Reconheceu a dívida sem admitir inadimplência:**
> "Eu preciso garantir que primeiro o ClickUp esteja estruturado. Pra gente não acontecer o que já aconteceu algumas vezes."

Tradução: sabe que está atrasado, sabe que Alessandro está insatisfeito, mas enquadra como "método de trabalho" ao invés de admitir vencimento contratual.

**Movimento 2 — Ofereceu bônus de alto valor percebido:**
- Curso de IA recém-lançado (grátis)
- 4 encontros presenciais de treinamento em Claude Code
- Integração ClickUp + Claude Code
- Liberação de material extra

**Avaliação:** Generoso. Estratégico. Compensa o atraso sem formalizar multa contratual.

**Movimento 3 — Reposicionou a hierarquia de entrega:**
> "ClickUp primeiro, IA depois. Sem ClickUp organizado, Claude Code não tem onde buscar informação."

**Análise:** Verdade técnica. Mas também conveniente — mantém a entrega no escopo que a Bravy controla.

### 1.2 Demonstração de competência em tempo real

Durante a conversa, Tiago demonstrou como usou Claude Code para resolver problema de acesso ao Coolify do servidor MC:
> "Ele fez aqui um monte de código e me disse Coolify está rodando nessa VPS. Aí ele me disse: o que você quer? Resetar a senha ou criar um novo usuário? Eu falei: reset via comando."

**Observação crítica:** A Bravy JÁ opera com Claude Code internamente. Essa competência é transferível para o MC se o relacionamento for mantido.

### 1.3 Pedido formal do Tiago

> "Até amanhã eu quero que você me fale o que não tá funcionando [no ClickUp] e o que você gostaria de ter que hoje não tem."

**Prazo dado:** 16/04/2026 (quinta-feira)
**Formato pedido:** Lista + indicação do que falta
**Entregável Bravy após resposta:** Fluxogramas + ajustes ClickUp + 4 encontros Claude Code

---

## 2. O que NÃO foi dito

### 2.1 Acesso SSH ao servidor não foi entregue

Tiago reestabeleceu acesso ao Coolify, mas não mencionou acesso SSH ao servidor Hostinger 31.97.167.252. A propriedade da infraestrutura foi confirmada no nome de Alessandro (email `asnccb@gmail.com`) — bom. Mas o acesso operacional (SSH, chave privada) continua com a Bravy.

### 2.2 Escopo do contrato original não foi formalmente fechado

Tiago reposicionou o escopo como "produto ClickUp" sem endereçar que o contrato original (10/02/2025) previa:
- Business Plan
- Definições Organizacionais
- Arquitetura ClickUp
- Treinamento
- Suporte 30 dias
- 4 meses de vigência (venceu em junho/2025)

A reunião funciona como prorrogação tácita sem aditivo contratual.

### 2.3 Workflow N8N entregue NÃO é produto MC

Tiago/Iuri entregaram um workflow N8N em novembro/2025 como se fosse o bot do Meu Cumpadre. Análise do JSON revela que é um **bot SDR (Sales Development Representative) genérico** adaptado:
- Usa OpenAI Assistant "MEU CUMPADRE" (ID: `asst_OlQEeM11HBMP8lMz00vZA1LE`)
- 6 tools são todas sobre agendamento de reuniões (Google Calendar)
- Zero funcionalidade previdenciária
- Zero triagem de benefício
- Zero Router-Ethics
- API key Zappfy hardcoded no JSON (risco de segurança)
- ElevenLabs configurado com placeholders (não funciona)

**Conclusão:** Bravy aplicou metodologia padrão deles (SDR bot) ao MC, que não é negócio de vendas. A infraestrutura (webhook WhatsApp, Redis como memória, pipeline multimodal) é competente e aproveitável. O "cérebro" do bot precisa ser inteiramente reescrito.

---

## 3. Diagnóstico estratégico — a causa invisível

**Por que o ClickUp está desorganizado 14 meses depois de um contrato de 4 meses?**

Não é incompetência da Bravy — Tiago demonstrou competência técnica ao vivo.
Não é falta de vontade — ele está oferecendo bônus.

**Causa raiz:** O escopo contratual da Bravy (implementação genérica de ClickUp para 7 departamentos) nunca foi compatível com a natureza real do MC. Eles vendem implementação de ClickUp como produto padronizado. O MC não é um negócio padronizado — é uma arquitetura de dignidade para hipervulneráveis com regras invioláveis, firewall OAB, 3.265 regras previdenciárias, jornada E0-E7, e modelo B2B2C.

**O que Tiago PODE fazer:** ensinar ferramenta, configurar automações, conectar integrações.
**O que Tiago NÃO PODE fazer:** definir os processos do MC.

Os 22 anos de INSS, o Grimório, o Router-Ethics, a persona da Dona Zilda — isso é domínio exclusivo de Alessandro. Nenhuma consultoria de ClickUp no Brasil tem esse conhecimento.

---

## 4. Oportunidade identificada (o diamante)

**A reunião de hoje não é um problema — é a peça que faltava no quebra-cabeça.**

Peças disponíveis após a reunião:

| Peça | Fonte | Status |
|------|-------|--------|
| Infraestrutura (Redis + Coolify + N8N) | Bravy configurou, Tiago resetou acesso | Recuperado |
| Template bot WhatsApp multimodal | Workflow N8N da Bravy (SDR genérico) | Esqueleto aproveitável |
| ClickUp como ferramenta de gestão | Bravy implementa estrutura + treina | Em andamento |
| Claude Code como operador | Tiago ofereceu 4 encontros bônus | Aceito |
| Conhecimento de domínio INSS | Alessandro (22 anos) + Grimório + Router-Ethics | Insubstituível |
| Briefing técnico Igor | Claude produziu 15/04 | Pronto |
| Primeiro caso real protocolado | Hib001 08/04 às 13h | E4 concluído |
| VPS no nome do Alessandro | Hostinger confirmado | Soberano |

**A Fase 1 do MC está se materializando organicamente:**
- Gerenciamento no ClickUp (Bravy entrega + Tiago treina)
- Operação no Claude Code/Cowork/Claude.ai (Tiago ensina + Alessandro já opera)
- Convergência com Igor + Carlos na Fase 2 (briefing pronto)

---

## 5. Decisões estratégicas

### 5.1 Aceitar proposta do Tiago COM adição estratégica

**Aceitar:**
- 4 encontros bônus de Claude Code
- Curso de IA liberado
- Ajustes e fluxogramas ClickUp
- Treinamento do time

**Adicionar (a resposta do Alessandro ao pedido dele):**
Enviar mapa E0-E7 traduzido em estrutura ClickUp (Spaces/Folders/Lists). Isso dá a Bravy escopo claro e dá ao MC um ClickUp que reflete a realidade, não template genérico.

### 5.2 Workflow N8N — aproveitar esqueleto, substituir cérebro

**Aproveitar:** webhook WhatsApp, conexão Zappfy/Evolution API, pipeline multimodal (texto/áudio/imagem), Redis como memória, delay humanizado, anti-loop.

**Substituir:** OpenAI Assistant "MEU CUMPADRE" genérico → Claude API + triagem previdenciária + Router-Ethics 11.0.

### 5.3 Infraestrutura soberana — validada

- VPS Hostinger: `31.97.167.252` — nome de Alessandro ✓
- Email administrativo: `asnccb@gmail.com`
- Acesso Coolify: recuperado via Claude Code (Tiago)
- Acesso SSH: pendente (a solicitar formalmente)
- Domínio migração: `aposentadorianamao.com.br` → `meucumpadre.com.br` (pendente)

---

## 6. Riscos e mitigações

| Risco | Mitigação |
|-------|-----------|
| Bravy adiar novamente ClickUp | Prazo Alessandro enviar lista: 16/04 · Prazo resposta Bravy: a definir com Tiago |
| Acessos SSH permanecerem com Bravy | Solicitar formalmente no próximo contato com Tiago/Iuri |
| Conflito de interesse (Bravy quer cliente preso) | Manter relação cordial + paralelamente desenvolver com Igor a Fase 2 |
| Bravy tentar substituir ClickUp por "ferramenta própria" | Frase do Tiago: "estamos brigando pra ter uma ferramenta com mais IA nativa." Atenção ao vendor lock-in. |

---

## 7. Próximos passos

- [ ] Alessandro enviar mapa E0-E7 → ClickUp para Tiago (prazo 16/04)
- [ ] Agendar 4 encontros bônus Claude Code com Bravy
- [ ] Liberar curso de IA prometido
- [ ] Solicitar formalmente acesso SSH ao servidor
- [ ] Negociar migração de domínio N8N para `meucumpadre.com.br`
- [ ] Documentar e armazenar workflow N8N atual no vault (como referência)
- [ ] Quando Fase 2 começar com Igor, reescrever "cérebro" do bot (Claude API)

---

**Documento produzido por:** Claude (co-founder intelectual)
**Validado por:** [pendente Alessandro]
**Confidencialidade:** PROPRIETÁRIO — Meu Cumpadre Ltda.
