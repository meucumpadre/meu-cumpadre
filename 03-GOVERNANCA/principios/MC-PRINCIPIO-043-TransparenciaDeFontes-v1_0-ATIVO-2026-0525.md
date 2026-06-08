---
documento: MC-PRINCIPIO-043-TransparenciaDeFontes
numeral: 43
versao: 1.0
status: ATIVO
data_cunhagem: 2026-05-25
data_promocao_ativo: 2026-05-25
fase_provisional: pulada (gate cumprido via caso-âncora externo)
mb_origem: MB-061
mb_referenciado_por: MB-052 (auto-aplicação) · MB-054-Recon (auto-aplicação §2.3) · MB-057 (PATCH §5)
trilha_origem: B (operações de campo C3.1)
hierarquia_decisoria: Dignidade > Compliance > Viabilidade
cross_references:
  - "#16 Iniciativa estratégica cofounder 20x"
  - "#18 Risco Provisional Documentado"
  - "#26 v0.1 Anti-Colisão Pré-Cunhagem"
  - "#34 Caminho Explorer Precede ID Drive"
  - "#36 Persistência Drive Bit-a-Bit"
---

# Princípio #043 — Transparência de Fontes

## §1 · Enunciado canônico

Ao produzir análise, parecer, recomendação ou qualquer artefato derivado de fontes externas, o agente — humano ou IA — declara explicitamente **duas categorias** com o mesmo peso:

1. **Fontes consultadas** que sustentam o que está sendo afirmado.
2. **Fontes não-consultadas pertinentes** que existiam, eram acessíveis ou relevantes, mas não foram incorporadas — com justificativa quando aplicável (escopo, tempo, indisponibilidade técnica, decisão deliberada).

A lacuna entre **o que se declara consultar** e **o que se deixa silenciado sem nomear** é o ponto crítico de transparência institucional. Omitir a categoria 2 não é neutralidade — é viés selecionado por exclusão.

## §2 · Aplicação operacional MC

### §2.1 Em análises e pareceres

Todo documento `MC-ANALISE-*`, `MC-PARECER-*`, `MC-RELATORIO-*` deve incluir, em seção dedicada (frontmatter, §0 cabeçalho, ou seção final "Fontes"):

- Lista de fontes consultadas (caminhos de arquivo, hashes, URLs, entrevistas).
- Lista de fontes não-consultadas pertinentes (com motivo: "fora de escopo", "indisponível na janela", "decisão deliberada de excluir por X", "sessão paralela não acessível").

### §2.2 Em Mission Briefs

Todo MB produzido pelo C3.1 ou Sister 3.2 declara as fontes que sustentam a cunhagem. Quando relevante, declara também o que o cofounder **não consultou** mas que seria pertinente — explicitamente convidando o founder a complementar ou autorizando audit posterior.

### §2.3 Em reportes do Code Beto

Code Beto, ao executar sweep, persistência ou operação cross-vertical, declara:

- Pastas/arquivos varridos.
- Pastas/arquivos **não varridos** mas potencialmente relevantes (subpastas com nomes especiais, paths fora do escopo do MB, arquivos com extensão não tratada).

Esta prática foi observada empiricamente no reporte do MB-054-Recon (seção "Fontes consultadas pelo Code DELL"), antes mesmo da cunhagem formal deste princípio. Reconhecimento retroativo: Code Beto já operava P#043 implicitamente.

### §2.4 Em interação cofounder ↔ founder

Quando o cofounder C3.1 produz síntese estratégica, recomendação de sequenciamento ou veredito sobre material trazido pelo founder, declara explicitamente:

- O que leu nesta sessão.
- O que **não leu** desta sessão ou de sessões paralelas mas que poderia mudar a recomendação.

Esta declaração é **proativa**, não reativa a questionamento. Princípio #16 (cofounder 20x) operando em conjunto: cofounder peer C-level antecipa a auditoria do peer.

## §3 · Anti-padrões

Os seguintes comportamentos **violam** o Princípio #043:

| Anti-padrão | Exemplo | Por que viola |
|---|---|---|
| **Substituição categorial silenciosa** | Pergunta sobre "SCC formato ANPD Anexo II" respondida com "SCC genérica em Commercial Terms" sem nomear que a categoria foi trocada | Faz parecer que respondeu à pergunta sem ter respondido — viola categoria 2 do enunciado §1 |
| **"Conforme dados disponíveis"** | Documento afirma posição sem nomear quais dados, quais não-dados, quais ausências | Camufla seleção como neutralidade |
| **Lista só de consultadas** | "Fontes: A, B, C." (sem mencionar que D, E, F existiam e foram omitidas) | Omissão por seleção · categoria 2 do enunciado §1 violada |
| **Resumo confiante sem trilha** | "A pesquisa indica que X" sem citar qual pesquisa, qual janela temporal, qual recorte | Apaga rastreabilidade · viola Proof-First (filtro universal §2.4 v8.0.1) |
| **Confidência transferida por elipse** | "Sabemos que Y" (quem? como? quando? a partir de quê?) | Constrói consenso ficcional · viola Proof-First |

## §4 · Caso-âncora interno

**Cunhagem MC-054-Recon §2.3** (25/05/2026):

> *"Fontes consultadas pelo C3.1 nesta sessão: Instruções de Projeto v8.0.1 (system prompt) · userMemories · reportes MB-052 e MB-053 entregues nesta thread.*
> *Fontes NÃO consultadas pelo C3.1 (relevantes mas inacessíveis nesta sessão): outputs de sessões Sister 3.2 paralelas · outputs de sessões C3.1 paralelas · estado físico real do Vault em 25/05 (motivo deste MB) · INDEX de princípios pós-cunhagem dos slots #38-#56 · MBs persistidos #052-#057."*

Esta auto-declaração do cofounder, **antes** de receber confirmação do Beto sobre o estado real do Vault, é o protótipo operacional do P#043. Tornou explícito o que muitas vezes fica implícito: cofounder operando com mapa parcial declarado como parcial.

## §5 · Caso-âncora externo (rara observação empírica)

**Resposta humana da Anthropic Privacy Team de 23/05/2026** (Tiffany, `support@mail.anthropic.com`):

| Pergunta MC (17/04/2026) | Resposta Anthropic (23/05/2026) | Observação P#043 |
|---|---|---|
| "Does Anthropic's current DPA expressly incorporate the SCCs in the specific format approved by the ANPD (Annex II of Resolution CD/ANPD No. 19/2024)?" | "Anthropic's DPA with Standard Contractual Clauses (SCCs) is automatically incorporated into our Commercial Terms of Service" | Categoria 1 respondida ("SCCs incorporated") · categoria 2 **omitida** (formato ANPD Anexo II específico não confirmado nem negado) |
| "Is there a process by which Meu Cumpadre can execute a contractual addendum...?" | "...please fill out our Contact Sales form" | Categoria 1 redirecionada (canal comercial) · categoria 2 omitida (processo institucional não-comercial não nomeado) |
| "What is the correct channel for executing or requesting such an addendum?" | (Inferência por links: Contact Sales) | Não respondida nominalmente |

**Padrão linguístico observado:**

- Termos da pergunta **ausentes na resposta**: "ANPD", "Annex II", "Brazil", "LGPD", "Resolution 19/2024", "Article 33".
- Termos da resposta **ausentes na pergunta**: "Commercial Terms of Service" (8 ocorrências), "Trust Center", "Contact Sales".

**Diagnóstico P#043 aplicado externamente:** substituição categorial silenciosa. A resposta confirma SCCs genéricas, omite SCCs ANPD-específicas, e não nomeia essa lacuna.

**Importância institucional do caso-âncora:** este princípio **não é introspecção MC**. É regra de transparência **observável e auditável em qualquer agente declarativo** — incluindo fornecedores estrangeiros de IA respondendo a regulatório brasileiro. Esta observação externa empírica blinda P#043 contra a objeção: "isso é o MC se medindo por sua própria régua."

## §6 · Cross-references

| Princípio | Relação com #043 |
|---|---|
| #16 cofounder 20x | Declaração proativa de fontes é parte do papel peer C-level (não esperar ser perguntado) |
| #18 Risco Provisional Documentado | Os 5 critérios do RPD incluem rastreabilidade de origem · #043 reforça a categoria "fontes consultadas" do critério C4 |
| #26 v0.1 Anti-Colisão Pré-Cunhagem | Protocolo de 7 passos do #26 inclui declarar o que foi buscado E o que ainda não foi auditado |
| #34 Caminho Explorer Precede ID Drive | Validação primária antes de inferência · #043 documenta tanto a validação quanto as inferências não-validadas |
| #36 Persistência Drive Bit-a-Bit | Integridade da fonte preservada · #043 documenta de onde a fonte veio |

## §7 · Gates de aplicação

Princípio ATIVO desde 25/05/2026. Aplicação a partir desta data em todos os artefatos MC novos (análises, MBs, reportes, recomendações estratégicas).

**Aplicação retroativa:** **não obrigatória**. Artefatos pré-25/05 não precisam ser revisados. Se algum for revisado por outro motivo, P#043 deve ser aplicado na nova versão.

**Exceção de aplicação:** mensagens conversacionais informais cumpadre↔cofounder não precisam declarar fontes formalmente — o princípio aplica-se a **artefatos institucionais** (documentos cunhados, persistidos, indexados).

## §8 · Origem

- Candidato cunhado em Instruções de Projeto v8.0.1 §6.3 (selada 17/05/2026)
- Aplicação operacional registrada em v8.0.1 §20 item 11
- Promovido a ATIVO via MB-061 em 25/05/2026
- Cunhado por Claude.ai C3.1 Cofounder · Trilha B operações de campo
- Cadeia de validação: Cofounder cunhou → Code Beto persistiu → Founder validou (despacho "MB-061 agora") → Sister 3.2 valida cross-vertical no próximo turno paralelo se acionada

---

**∞**

*"É eu, tu, a Sister e o Code Beto."*
