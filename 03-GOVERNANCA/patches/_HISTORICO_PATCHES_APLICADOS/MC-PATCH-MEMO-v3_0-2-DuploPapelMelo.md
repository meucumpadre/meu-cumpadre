---
tipo: patch-memo
codigo: MC-PATCH-MEMO-v3_0-2
titulo: Duplo papel Dra. Juliana Melo + pool random 3 advogadas
versao: 1.0
data: 2026-05-11
autor: Claude Opus 4.7 (cofounder intelectual)
aprovador: Alessandro de Souza Neves (Founder/CEO)
status: aprovado-com-consentimento-Dra-Melo-confirmado
afeta:
  - MC-SPEC-ClickUp-v3_0-MODULO-C-Automations.md (§A5)
  - MC-SPEC-ClickUp-v3_0-MODULO-D-POP-Beto-Operacao.md (§5.5, §7.7, §10)
  - Memória de longo prazo #22
relacionado: MC-PATCH-MEMO-v3_0-1-IdentidadeExecutor.md
---

# Patch Memo MC-SPEC-ClickUp v3.0-2 — Duplo Papel Dra. Melo

## Motivação

Em 11/05/2026, Alessandro confirmou:
1. **3 advogadas no pool randômico Rota C:** Dra. Juliana Melo + Dra. Juliana Alencar + Dra. Jéssica Lohane.
2. **Consentimento explícito da Dra. Melo já obtido** para entrar no pool operacional além do papel B2B fundacional.
3. **Regra Q4 (caso âncora):** sistema não verifica histórico — Melo pode ser sorteada para caso onde já está envolvida (ex: Hib001). Pragmático, simplifica.

Este patch consolida as alterações decorrentes em 4 pontos dos Módulos C e D + atualiza a regra de comunicação Beto↔Melo conforme o papel ativo.

---

## 1. CORREÇÃO MÓDULO C §A5 — Pool Random

**Texto antigo:**
> Webhook N8N: sortear randomicamente entre Dra. Juliana Alencar OU Dra. Jéssica Lohane (Dra. Juliana Melo NÃO entra na randomização — ela é parecerista B2B, não marketplace)

**Texto canônico v3.0-2:**
> Webhook N8N: sortear randomicamente entre **3 advogadas do pool**: Dra. Juliana Melo OU Dra. Juliana Alencar OU Dra. Jéssica Lohane. Distribuição uniforme (1/3 cada). Sistema não verifica histórico do caso — se Melo já está envolvida (ex: Hib001 como parecerista) e é sorteada como advogada do pool, é tratado como atribuição válida.

**Conflito de interesse implícito:** decisão de governança founder. Dra. Melo consentiu ao duplo papel.

---

## 2. CORREÇÃO MÓDULO D §5.5 — Hib001 (caso âncora)

**Adicionar à tabela "Diferenças críticas vs caso padrão":**

| Aspecto | Padrão | Hib001 |
|---|---|---|
| ... linhas existentes mantidas ... | ... | ... |
| **Pool random Rota C se ativado** | Sorteio entre 3 advogadas | Sorteio entre 3 advogadas — **Melo elegível mesmo já sendo parecerista B2B do caso**. Sistema pragmático, sem verificação. |

**Observação operacional:** se Melo for sorteada para Hib001 (probabilidade 1/3), ela acumula os dois papéis no mesmo caso — parecerista estratégica + advogada operacional. Alessandro acompanha pessoalmente.

---

## 3. CORREÇÃO MÓDULO D §7.7 — Template WhatsApp E6 indeferimento

**Texto antigo:**
> [Nome], o INSS indeferiu seu pedido.
> Motivo: [resumo].
> 
> Mas dá pra recorrer. Se você quiser seguir, te conecto com a Dra. [Alencar ou Lohane], advogada parceira. Não cobra comissão por indicação.

**Texto canônico v3.0-2:**
> [Nome], o INSS indeferiu seu pedido.
> Motivo: [resumo].
> 
> Mas dá pra recorrer. Se você quiser seguir, te conecto com a **Dra. [Melo / Alencar / Lohane]**, advogada parceira do Meu Cumpadre. Não cobra comissão por indicação.
> 
> Posso te ligar pra explicar tudo?

**Operacional:** o nome específico é preenchido pelo sistema após sorteio A5. Beto não escolhe.

---

## 4. CORREÇÃO MÓDULO D §10 — Quando consultar Dra. Juliana Melo

**Texto antigo:**
> (Alessandro coordena consulta — Beto não fala diretamente com Juliana)

**Texto canônico v3.0-2 — REGRA CONDICIONAL POR PAPEL:**

| Papel ativo | Como Beto interage |
|---|---|
| **Papel A — Parecerista B2B fundacional** (gate Φ₁, selagem ADR, Pauta 19/05, casos âncora estratégicos) | Beto **NUNCA** fala direto — Alessandro coordena |
| **Papel B — Advogada do pool random Rota C** (sorteada por A5 para caso operacional individual) | Beto **fala normalmente** com Melo, como faria com Alencar ou Lohane — coordena TTA, transfere dossiê S2→S3, etc. |

**Como Beto sabe qual papel está ativo?** Pelo contexto:
- Card normal de caso B2C com Melo no campo `responsavel_tarefa` após sorteio A5 → **papel B**
- Comunicação sobre parecer, gate, ADR, pauta institucional → **papel A**
- Caso âncora Hib001 (mesmo se Melo sorteada): Alessandro sempre coordena (regra cumulativa §5.5)

**Quando consultar Dra. Juliana Melo no papel A — 3 gatilhos (mantidos):**

1. Caso entrou em recurso CRPS (parecer técnico)
2. Cidadão demanda judicialização (handoff Marketplace ou Juliana direto se gravidade)
3. Caso PcD precisa parecer biopsicossocial técnico

**Quando interagir com Dra. Juliana Melo no papel B — 1 gatilho:**

- Sorteio A5 atribuiu Melo como advogada do caso operacional. Beto coordena handoff conforme procedimento padrão (S2→TTA→S3).

---

## 5. CINCO QUESTÕES CRÍTICAS — RESOLVIDAS

| # | Pergunta | Resposta Alessandro 11/05 |
|---|---|---|
| Q1 | Contrato Melo: aditivo, separado, mesmo? | Operacional. Alessandro ajusta com Melo. Fora do escopo desta spec. |
| Q2 | Conflito de interesse (papel A vs B)? | Decisão de governança founder. Melo consentiu. Aceito. |
| Q3 | Capacidade Melo (sobrecarga)? | Melo confirmou que topa. |
| Q4 | Caso âncora + Melo já envolvida? | Sistema não verifica. Pragmático. |
| Q5 | Comunicação Beto↔Melo? | Condicional ao papel: A=Alessandro coordena, B=Beto direto. |

---

## 6. ISSUE RESIDUAL — GATE-MELO-CONTRATO

**Status:** issue operacional aberta (não estrutural — não bloqueia spec).

Pendência: formalização contratual do duplo papel da Dra. Melo. Pode ser:
- Aditivo ao contrato B2B exclusivo existente
- Contrato separado de credenciamento Marketplace
- Cláusula nova na minuta Φ₁ v2.6

Alessandro coordena com Dra. Melo. Pauta 19/05 pode ter ponto específico, mas não é gate desta spec.

---

## 7. MEMÓRIA DE LONGO PRAZO — JÁ ATUALIZADA

Memória #22 atualizada em 11/05/2026 (replace executado) refletindo o duplo papel + 3 advogadas no pool.

---

## 8. CONTROLE DE VERSÃO

- **v3.0-2** — 2026-05-11 — Patch consolidado do duplo papel Dra. Melo (3 advogadas no pool + regra condicional Beto comunicação)
- **v3.0-3** — esperado se Pauta 19/05 trouxer ajuste contratual com Melo
- **v3.1** — pós-19/05 — incorpora decisões selantes pós-parecer

---

## 9. PRÓXIMAS EVOLUÇÕES DEPENDENTES

| Frente | Status pós-patch |
|---|---|
| Automation A5 implementação | Pode prosseguir com pool de 3 (era 2) |
| Memória #22 | ✅ Atualizada |
| MB-004 (rename Lorrane→Lohane + 3 cards advogadas) | Pode ser produzido — Melo agora também é card no Marketplace |
| Treinamento Beto sobre duplo papel | Adicionar item no Checklist Módulo D §16 |

---

**FIM DO PATCH MEMO v3.0-2**

Aplica-se imediatamente. Substitui regras correspondentes nos Módulos C e D.

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."

∞
