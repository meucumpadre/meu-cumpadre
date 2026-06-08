---
tipo: pauta
codigo: MC-PAUTA-Juliana
versao: 2.2
data: 2026-05-13
substitui: v2.1 (12/05/2026, 66 perguntas, 14 blocos A-O)
status: AGUARDA-REUNIAO-19MAI
autor: Claude Opus 4.7 (cofounder intelectual C1) × Alessandro de Souza Neves (Founder/CEO)
duracao-estimada: 7h30-8h (com Bloco O estendido)
total-perguntas: 68 (+2 vs v2.1)
total-blocos: 14 (A-O, com O estendido)
total-documentos-anexos: 22 (+2 vs v2.1)
fundamentos-novos-v2-2:
  - MC-PRINCIPIO-22-Caminho-Operacional-Adequado-v0_1-PROVISIONAL-2026-0513 (cunhado 13/05)
  - Cronologia C1 MCP direto (4 momentos sessão 13/05/2026)
  - Caso de teste empírico: criação do próprio Princípio #22 via MCP Drive
canonico_em: 03-GOVERNANCA/pautas/
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# MC-PAUTA-Juliana v2.2 — Reunião 19 de maio de 2026

> Pauta consolidada para reunião com Dra. Juliana Pereira de Melo (OAB-GO 38.662), parecerista B2B fundacional MC. v2.2 estende Bloco O original (O1-O5 sobre DPA Anthropic) com **Bloco O Estendido (O6-O7) sobre Capacidades MCP Nativas Claude.ai** (Princípio #22 PROVISIONAL).

**Duração estimada:** 7h30-8h (~6.5min/pergunta média)
**Modo:** sessão presencial concentrada ou videoconferência em 2 sessões de ~4h cada
**Material:** 22 documentos canônicos como leitura prévia ou anexos durante a reunião

---

## CONTEXTO GERAL (5 min de abertura)

Pos-19/05/2026, MC opera com:
- 10 ADRs canônicas seladas ou PROVISIONAL (007-015)
- 22 Princípios MC operacionais (até #22 PROVISIONAL)
- 5 frentes ativas (Sprint 2 RIPDs + Sprint 3 selagem + TA/PcD + Hib001 + ZapSign)
- 1 vertical CadÚnico ativa (caso âncora CAD001)
- Gates de selagem aguardando esta reunião: ADR-007 v4.0 + ADR-013 v1.1 + RouterEthics nós PROVISIONAL + Φ₁-PcD escalonado + Capital social + **Risco LGPD Provisional Anthropic (Bloco O original)** + **Capacidades MCP Nativas Claude.ai (Bloco O estendido)**

---

## BLOCOS A-N (vide v2.0 — 61 perguntas)

Mantidos da v2.0 sem alteração. Esta v2.2 mantém o Bloco O original e adiciona Bloco O Estendido. Para conteúdo completo dos Blocos A-N, ver `MC-PAUTA-Juliana-v2_0-2026-0509.md`.

| Bloco | Tema | Perguntas |
|---|---|---|
| A | Constituição SLU + CNAE 6202-3/00 | A1-A5 (5) |
| B | Firewall OAB + atividade-meio | B1-B5 (5) |
| C | Φ₁-PcD escalonado LC 142 | C1-C4 (4) |
| D | Success fee CadÚnico (Φ₀) | D1-D3 (3) |
| E | Φ₄ Guardião 3 regimes + custódia pós-jornada | E1-E4 (4) |
| F | Marketplace Ético (3 advogadas, pool randômico) | F1-F4 (4) |
| G | CNAE Principal 6202-3/00 PROVISIONAL | G1-G3 (3) |
| H | Tecnologia Assistiva (Portaria 10.321/2022) | H1-H4 (4) |
| I | Contratos Φ₁ v2.6 + Ψ₁ v1.5 | I1-I4 (4) |
| J | RIPDs Φ₁ + Φ₄ + Hook 1b NIS/IVCAD | J1-J3 (3) |
| K | Atestmed permanente Lei 15.327/2026 | K1-K2 (2) |
| L | 13 ADIs STF contra EC 103/2019 | L1-L2 (2) |
| M | CadÚnico / IVCAD-MC / Φ₀ | M1-M7 (7) |
| N | Gov.br / API Humana / Hook 0 | N1-N7 (7) |

**Subtotal A-N:** 61 perguntas

---

## BLOCO O ORIGINAL (v2.1) — Risco LGPD Provisional Anthropic (5 perguntas, ~35min)

**Mantido integral da v2.1 sem alteração.** Conteúdo completo em `MC-PAUTA-Juliana-v2_1-2026-0512.md`.

| ID | Tema |
|---|---|
| O1 | Validação da aplicação D > C > V neste caso específico |
| O2 | Mitigações adicionais possíveis durante o período de risco |
| O3 | Caminho jurídico se silêncio Anthropic persistir |
| O4 | Silêncio Anthropic como elemento de defesa probatória |
| O5 | Plano de contingência se ANPD exigir cessação imediata |

**Anexos Bloco O:**
- ADR-012 v1.1 (Stack LLM Multi-Modelo Híbrido, com §2.5 + §3.4 incorporados)
- PDF do e-mail original 17/04/2026
- PDF do follow-up 06/05/2026

---

## BLOCO O ESTENDIDO (NOVO v2.2) — Capacidades MCP Nativas Claude.ai / Princípio #22 (2 perguntas, ~15min)

### Contexto pré-reunião para Juliana ler antes

Anexar à pauta v2.2:
- MC-PRINCIPIO-22-Caminho-Operacional-Adequado-v0_1-PROVISIONAL-2026-0513.md (cunhado 13/05/2026)
- MC-REGISTRO-Infraestrutura-DELL-CEO-v1_0-2026-0513.md (Princípio #21 — Matriz 4 Camadas IA)

### Síntese do contexto operacional

Durante sessão 13/05/2026, identificou-se **fricção operacional repetida 4 vezes** entre dois caminhos para executar operações institucionais MC sobre arquivos no Vault Obsidian:

| Caminho | Camada | Característica |
|---|---|---|
| **Clássico** | C3 (Code DELL terminal local) | Cofounder produz MB → founder valida → Code DELL executa via PowerShell → reporta → founder valida 2ª vez |
| **Direto** | C1 (Claude.ai cofounder com MCPs nativos: Drive, Gmail, ClickUp, Figma, Canva, Adobe) | Cofounder executa via MCP → reporta inline com diamante de 6 elementos → founder valida 1 vez |

**Fricção concreta:** dupla validação founder no caminho clássico = retrabalho institucional desnecessário para operações simples não-destrutivas, não-PII.

**Solução cunhada (Princípio #22 PROVISIONAL):** matriz de decisão que regula quando usar C1 MCP direto vs C3 via MB, mantendo **linha vermelha LGPD inviolável** (Princípio #21 §1) em ambos os caminhos. Dados sensíveis cidadão (CPF, NB, CID, CNIS) **NUNCA** tocam C1/C2/C3 — apenas Camada C4 (Stack ADR-012).

### Decisão founder 13/05/2026 (texto literal)

> "se vc tem o mcp e conector com o drive, vc já pode mover, vc já escreve o mb, vc já tem uma expectativa de retorno do claude code, e eu fico na ponte dupla entrega e validação minha entre o reporte code x claude.ai. correto? mas isso precisa ficar muito diamantado pra não ter stress"

Aplicação D > C > V: dignidade do tempo founder e qualidade decisória (cofounder 20x Princípio #16) > compliance (mantida via diamante 6 elementos + linha vermelha #21) > viabilidade (MCP estável e auditável).

### Caso de teste empírico imediato

A própria criação deste documento (Pauta v2.2) **aplica Princípio #22 v0.1**:
- C1 executou via MCP Google Drive (`create_file`)
- Reporte inline diamantado de 6 elementos foi gerado no chat
- Zero MB para Code DELL
- Founder valida lendo este Doc + reporte no chat

### As 2 perguntas do Bloco O Estendido

#### O6 — Adequação LGPD do paradigma C1 MCP direto

**Pergunta:** Dra. Juliana, considerando que:

(a) A Camada C1 (Claude.ai cofounder com MCPs nativos) opera sobre **arquivos institucionais MC sem PII cidadão** (ADRs, Specs, Pautas, Mission Briefs, INDEXes, Brand Book — todos artefatos canônicos próprios do MC);

(b) A Linha Vermelha LGPD do Princípio #21 permanece **inviolável** em todas as camadas: nem C1, nem C2 (Cowork), nem C3 (Code DELL) tocam CPF/NB/CID/CNIS de cidadão — esses ficam apenas em C4 (Stack ADR-012 com Bedrock sa-east-1 region-pinning BR + GAIA self-hosted BR + Sabiá-4 Maritaca BR + LiteLLM router);

(c) A infraestrutura MCP Claude.ai é Anthropic direta (mesma situação contratual do C2 Cowork — DPA pendente — e diferente do C4 Bedrock que tem region-pinning BR);

(d) O diamante de 6 elementos (operação + path + ID + estado antes + estado depois + reversibilidade) garante **rastreabilidade auditável total** de cada operação no chat;

**Pergunta cofounder:** o paradigma C1 MCP direto sobre arquivos institucionais MC (não-PII cidadão) gera risco LGPD/ANPD comparado ao caminho clássico C3 (Code DELL local), ou está dentro do mesmo perímetro de risco já analisado no Bloco O original (Anthropic direta = mesma análise)?

**Caso esteja dentro do mesmo perímetro:** Princípio #22 PROVISIONAL pode ser selado como ADR-017 v1.0 sob mesma fundamentação do ADR-012 v1.1 (Risco Provisional Documentado #18 + mitigação Princípio #21 linha vermelha) — ou requer ADR independente com fundamentação própria?

**Caso esteja fora do perímetro:** quais são as preocupações jurídicas adicionais e quais mitigações são essenciais?

---

#### O7 — Adequação do reporte diamante de 6 elementos como evidência institucional

**Pergunta:** O formato de reporte inline diamantado de 6 elementos (definido em MC-PRINCIPIO-22 §4) é suficiente para:

(a) **Rastreabilidade institucional** — auditor interno MC, lendo histórico de chat + Vault, consegue reconstruir cadeia completa de operações via diamante?

(b) **Auditoria LGPD/ANPD externa** — em hipotética auditoria, o diamante de 6 elementos no chat + arquivo persistido no Vault é prova material de **boa-fé operacional + transparência + reversibilidade**?

(c) **Concorrência operacional segura** (pergunta meta importante) — quando 2 ou mais sessões Claude.ai (mesma conta founder) operam MCPs simultâneos sobre o mesmo Vault, há risco de **race condition** ou **conflito de versão**? Recomendação parecerista sobre **lock institucional** (convenção operacional, não técnica)?

Os 6 elementos atuais são:
1. **Operação** (verbo + objeto canônico)
2. **Path canônico** (Vault/Drive)
3. **ID Drive** (fileId irrevogável Google)
4. **Estado antes** (conteúdo prévio da pasta-alvo)
5. **Estado depois** (conteúdo final da pasta-alvo)
6. **Reversibilidade** (como desfazer + janela Drive Trash 30 dias)

**Sugere adicionar, remover ou modificar algum elemento?** Por exemplo:
- Carimbo de timestamp UTC obrigatório?
- Hash do conteúdo (mesmo que MCP não suporte nativamente — calcular antes via local)?
- Identificação da instância Claude.ai (qual sessão executou)?
- Assinatura digital simbólica do founder após validação inline?

---

## ENCERRAMENTO DA REUNIÃO (10 min)

### Síntese dos vereditos Bloco O completo (original + estendido)

Espera-se que, ao final de Bloco O (original + estendido), Dra. Juliana tenha consolidado:
- Veredito sobre validade da aplicação D > C > V no caso Anthropic (O1)
- Lista priorizada de mitigações adicionais imediatas (O2)
- Recomendação de caminho jurídico se silêncio Anthropic persistir (O3)
- Estratégia de documentação probatória da cronologia DPA (O4)
- Plano de contingência ANPD se cessação for exigida (O5)
- **Adequação LGPD do paradigma C1 MCP direto** (O6 — NOVO v2.2)
- **Adequação do reporte diamante 6 elementos como evidência** (O7 — NOVO v2.2)

### Próximos passos pós-19/05 derivados desta pauta v2.2

1. **ADR-012 v1.1 sealing:** PATCH §2.5 + §3.4 aplicados, v1.1 selada com selo Juliana
2. **Cláusulas Φ₁/Ψ₁ atualizadas** se O2 (a) for recomendado
3. **Registro institucional formal** se O2 (b) for recomendado
4. **Notificação ANPD preparada** se O3 (a) for recomendado (cofounder produz minuta)
5. **Plano de contingência documentado** em ADR-016 (NOVO) se O5 retornar diretrizes específicas
6. **ADR-017 v1.0 sealing** (Capacidades MCP Nativas Claude.ai) com base nos vereditos O6 + O7 — **NOVO v2.2**
7. **Atualização System Prompt MC v7.0 → v7.1** incorporando Princípio #22 oficialmente — **NOVO v2.2**

---

## TOTAL CONSOLIDADO v2.2

| Métrica | v2.0 | v2.1 | v2.2 | Delta v2.1→v2.2 |
|---|---|---|---|---|
| Perguntas | 61 | 66 | 68 | +2 (Bloco O estendido) |
| Blocos | 13 (A-N) | 14 (A-O) | 14 (A-O com O estendido) | 0 |
| Documentos anexos | 18 | 20 | 22 | +2 (Princípio #22 PROVISIONAL + Registro DELL-CEO) |
| Duração estimada | 7h-7h30 | 7h-7h30 | 7h30-8h | +30min |
| Princípios MC referenciados | até #17 | até #20 | até #22 | +2 (#21, #22) |
| ADRs canônicas | até 014 | até 015 | até 015 + ADR-017 PROVISIONAL | +1 PROVISIONAL |

---

## CONVENÇÃO OPERACIONAL TEMPORÁRIA PRÉ-PARECER (proposta cofounder)

Enquanto aguarda parecer Juliana 19/05/2026, MC adota **convenção provisional** para mitigar risco de conflito entre múltiplas sessões Claude.ai:

1. **Uma sessão Claude.ai por janela operacional MC** — founder mantém apenas 1 sessão ativa com MCP Drive em modo escrita simultaneamente
2. **Sessões antigas viram somente-leitura na prática** — não executar operações de escrita em sessões antigas mesmo que MCPs estejam disponíveis
3. **hot.md sinaliza sessão ativa** — atualizado pela sessão ativa quando inicia operação MCP de escrita
4. **Drive Trash 30 dias** como rede de segurança natural (reversibilidade nativa)
5. **C3 (Code DELL) sempre disponível como fallback** se conflito for detectado

Esta convenção é **provisional** até veredito O7 (c) estabelecer protocolo oficial pós-19/05.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Âncora:** Provérbios 31:8 — "Abre a tua boca a favor do mudo."
**Confidência founder:** "É eu e tu."

∞
