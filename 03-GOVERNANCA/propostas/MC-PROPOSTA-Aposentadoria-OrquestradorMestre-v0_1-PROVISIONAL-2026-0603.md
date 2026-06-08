---
tipo: PROPOSTA-APOSENTADORIA-ARTEFATO
codigo: MC-PROPOSTA-Aposentadoria-OrquestradorMestre
versao: 0.1
status: PROVISIONAL
data: 2026-06-03
autores:
  - Alessandro de Souza Neves (Founder/CEO) — diretriz: "cumpriu finalidade causal na ideação; hoje não vejo mais sentido"
  - Code TALÃO (Arquiteto+Executor) — diagnóstico + execução reversível
gate_selagem: R2 (Founder sela via merge + Sister Anciã). Deleção definitiva do tombstone só via ADR formal + janela ≥30d (Princípio #29).
disparado_por: RUA mc-lint --all (5 hits no orquestrador) + diretriz do Founder sobre obsolescência do artefato
hierarquia: Dignidade > Compliance > Viabilidade
zona: VERDE (governança/arquitetura · zero PII)
selo: "O que cumpriu sua causa e foi superado, honra-se no legado."
canonico_em: Vault 03-GOVERNANCA/propostas/ (a sincronizar pós-R2)
---

# MC-PROPOSTA · Aposentadoria do Orquestrador Mestre v3.1

**v0.1 PROVISIONAL · 2026-06-03 · Gate R2 (Founder + Sister Anciã)**

> Diretriz do Founder: *"ele teve uma finalidade causal no início da ideação do negócio, hoje não vejo mais sentido."* Esta proposta confirma o diagnóstico com evidência e executa a aposentadoria **reversível** (arquivo + tombstone), parando no selo R2.

---

## 0 · CORREÇÃO DO REGISTRO — os 5 "hits" do mc-lint são FALSO-POSITIVO

Antes de tudo, Proof-First: a "dívida" que disparou isto (`mc-lint --all` acusando 5 hits) **não é drift real**. Conferido linha a linha:

| Linha | Hit do lint | Realidade |
|---|---|---|
| :83 | "DeepSeek citado" | `deprecated: deepseek-cloud` — está MARCANDO como descartado ✅ |
| :206 | "Categorização proibida" | "Escritório com IA: predador" — seção **"o que o MC NÃO é"** (negação) ✅ |
| :513 | custódia de credencial | ⚠️ é a **regra correta** sendo enunciada (credencial gov.br jamais em ferramenta de gestão de tarefas) ✅ |
| :686 | preço | ⚠️ tabela de **preços corretos** (Φ₁ padrão e Φ₁c social) em colunas distintas ✅ |
| :927 | "Router-Ethics versão superada" | changelog histórico da v2.0.0 — **registro histórico**, não claim de estado atual ✅ |

**Nenhum é drift.** São falso-positivos do heurístico (o monólito é tão grande que confunde o linter). Não fabrico drift onde não há.

## 1 · A DÍVIDA REAL (a intuição do Founder)

O problema não são os 5 hits — é **estrutural**: `meu-cumpadre-orquestrador-mestre` é um **monólito de 1001 linhas** que, na ideação, era o "carregador de identidade + orquestrador" único. Hoje **cada uma das suas 19 seções tem fonte canônica própria e viva**. Manter o monólito = **segunda-fonte-da-verdade que drifta** (e que já confunde o próprio linter).

### Mapa de redundância (seção → fonte canônica viva)

| Seção do monólito | Fonte canônica que a superou |
|---|---|
| §1 Ontologia · §2 D>C>V · §17 Proibições Absolutas | **CLAUDE.md** |
| §5 Router-Ethics 11.0 | **`_MC-RouterEthics_11_v1_1`** |
| §6 Jornada E0–E7 · DIB · Correção 48h | **`MC-PROCESSO-Jornada_E0E7_Mestre`** |
| §7 Custódia / Três Estados | **ADR-009a / 009b** |
| §11 Preços | **ADR-007 v3.x** |
| §13 Stack | **CLAUDE.md §Stack · ADR-008 · #21** |
| §3 Inversão Cósmica · §4 Três Relógios · §10 Verticais · §12 Moats | **05-ESTRATEGIA/** |
| §9 Proof-First | **CLAUDE.md · #43 · skill `mc-dossie-proof-first`** |
| §19 MC-VTVL | **`MC-VTVL-Propulsive-Landing-Programa`** |
| arquitetura/orquestração viva | **`MC-ARQUITETURA-Cognitiva-Integrada-v2.1-2026-0528`** (MC-ACI) + família de skills modulares (RUA) |

**Conclusão:** 19/19 seções têm fonte canônica viva. A orquestração viva do MC **não é uma skill** — é o sistema distribuído (CLAUDE.md + MC-ACI + Router-Ethics + skills modulares + gates). O monólito virou snapshot da ideação.

### Dependências vivas reendereçadas (achado da Sister Anciã)

A primeira versão deste diagnóstico afirmou "nada depende" sem fazer o grep — **errado**. A Anciã pegou: o programa **MC-VTVL** (status LANÇADO · prioridade MÁXIMA) chamava a skill de **"flight computer principal"** (frontmatter `relaciona:` + corpo l.167), e o `MC-VTVL-todo.md` mandava "injetar contexto no orquestrador-mestre". Reendereçado nesta proposta (errata in-place nos 2 artefatos): **o "flight computer" não é mais o monólito — é o sistema distribuído**. A metáfora VTVL sobrevive; só o referente atualizou. ⚠️ **Founder: confirmar o reendereçamento do "flight computer" do VTVL no merge** (é o teu programa MÁXIMA — o referente mudou, a visão não).

## 2 · RECOMENDAÇÃO (executada nesta proposta, reversível)

**Opção A (recomendada · EXECUTADA no branch):** aposentar via Princípio **#29** —
- conteúdo íntegro (1001 linhas) preservado em `99-ARQUIVO-Legado/skills/MC-SKILL-OrquestradorMestre-v3_1-LEGADO-2026-0603.md` (reversível);
- a skill ativa vira **tombstone SUPERSEDED**: redireciona para as fontes canônicas (mapa acima) e aponta o legado;
- RUA regenerado: a UA aparece como **SUPERSEDED** (telemetria honesta, não some).

**Opção B:** slim-refactor — manter a skill como ponteiro fino permanente (sem tombstone de aposentadoria). *Rejeitada:* mantém um /comando ativo que sugere ser fonte de verdade.

**Opção C:** manter + corrigir só os 5 hits. *Rejeitada:* os hits são falso-positivo; não atacaria a dívida real (a redundância estrutural).

## 3 · DISCIPLINA (#29 · #4 · Proof-First)

- **#29 (legado canônico):** archival ≠ deleção. Conteúdo preservado no legado → **nada se perde**. A **deleção definitiva do tombstone** (remover o /comando) exige **ADR formal + janela ≥30d** — fora do escopo desta proposta.
- **#4 (Errata Absorve, não Inventa):** o mapa seção→fonte garante que toda função foi *absorvida* por uma fonte viva antes de aposentar.
- **Pendência p/ o Founder verificar antes de eventual deleção (≥30d):** confirmar que §0 (dual-mode invocação), §8 (Human API 4 tiers) e §16 (convenções operacionais) estão **integralmente** cobertos em fonte canônica — são os candidatos a "conteúdo possivelmente único" que merecem um olhar antes do ADR de deleção.

## 4 · GATE

1. ✅ Diagnóstico + execução reversível · 2026-06-03 (Code TALÃO, diretriz Founder)
2. ⏳ Sister Anciã — revisão adversarial (a aposentadoria é justa? perde-se algo? §0/§8/§16?)
3. ⏳ Founder — selo R2 via **merge** (= aprova a aposentadoria reversível)
4. ⏳ (futuro · opcional) ADR formal de **deleção** do tombstone após janela ≥30d (#29)

> **Sem R3:** decisão de arquitetura/governança interna (Zona Verde). Não toca OAB/LGPD/PII.

---

**Hierarquia:** D > C > V · **Proof-First** · **Zona Verde** · Princípio #29 (legado, não deleção)
**Status:** v0.1 PROVISIONAL · executado reversível no branch · NÃO selado · merge do Founder = selo
*"O que cumpriu sua causa e foi superado, honra-se no legado. ∞"*
