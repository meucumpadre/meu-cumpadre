---
tipo: PROPOSTA-SANEAMENTO
nome: Saneamento do ADR-009b — Marketplace Ético (nomes encerrados + modelo de parceria)
versao: v0.1
status: ✅ RATIFICADA → Opção C (Despacho-Saneamento-ADR009b v1.3 SELADO · Dra. Juliana · 06/06/2026) — esta proposta cumpriu sua finalidade; serve como histórico do drift detectado
data: 2026-06-02
origem: detectado pela Sister Anciã na operação R3 da Engenharia Hornes (o artefato E/SoR ancora no ADR-009b)
gate: R3 — toca OAB (anti-captação) + parceria + custódia. Founder + Dra. Juliana decidem; Code organiza.
alvo: 03-GOVERNANCA/adrs/MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417.md
hierarquia: Dignidade > Compliance > Viabilidade
---

# Proposta de Saneamento — ADR-009b (Marketplace Ético)

> ✅ **RATIFICADA (06/06/2026):** a Dra. Juliana selou a **Opção C** no `MC-DESPACHO-Saneamento-ADR009b-OpcaoC-v1_3-RATIFICADO-SELADO` e o Founder decidiu, no despacho, **apresentar só a Dra. Melo durante a Crisálida (até 31/12/2026)** — as demais parceiras **reais** ficam **reservadas a posteriori** (inclusão imediata se houver provocação/stress da OAB); marketplace randômico ampliado reabre em **01/01/2027** (Melo permanece). A tensão "exclusividade × anti-captação" (§42 abaixo) foi resolvida ancorando a anti-captação na **livre escolha do cidadão**, não na contagem de parceiras. Esta proposta fica como **histórico do drift**; o saneamento vivo está executado nos artefatos sob a Opção C.

## 0. Por que esta proposta existe
Na operação R3 da Engenharia Hornes, a Sister Anciã apontou que o artefato **E (System of Record)** ancora a custódia no **ADR-009b**, mas o ADR-009b **vigente** ainda descreve um arranjo de parceria **superado**. O artefato Hornes está limpo; a **âncora** não está. Esta proposta organiza o saneamento — **sem editar o ADR selado** (isso é decisão R3).

## 1. O drift (Proof-First · linha-a-linha)
O ADR-009b (datado **17/04/2026** — note: **4 dias após** o ciclo encerrado da então parceira "Juliana Alencar", em 13/04/2026) é construído sobre um **Marketplace Ético de 3 advogadas**:

| Linha | Conteúdo | Problema |
|---|---|---|
| 129 | Base legal OAB (S2): "marketplace ético (**três opções** independentes)" | Pressupõe 3 advogadas. |
| 131 | "3 opções (Dra. Juliana Melo + **Juliana Alencar** + **Jéssica Lorrane**)" | "Juliana Alencar" = **Proibição Absoluta** (ciclo encerrado). Lorrane: parceira não-vigente. |
| 137-140 | Script de hand-off oferece "três advogadas… 2. Dra. Juliana Alencar… 3. Dra. Jéssica Lorrane" | Script operacional citaria nome proibido ao cidadão. |
| 160 | TTA "gerado no momento da escolha do advogado no **marketplace ético**" | Pressupõe o marketplace. |
| 222-223, 234 | Diagrama + "vault **Alencar Advogados**" | Mesmo drift no fluxo visual. |
| **316** ⚠️ | **JSON de consentimento da cidadã:** *"…de minha livre escolha **entre três opções** apresentadas…"* (assinado pela Zilda) | **O MAIS GRAVE (apontado pela Sister):** se o modelo virar exclusividade sem sanear este JSON, o **consentimento assinado da cidadã vira declaração falsa** (não há 3 opções). Toca Dignidade + validade jurídica da custódia. |
| 272, 343, 391 | "Marketplace ético com **3 advogadas**" como **defesa anti-captação** (Provimento 205/2021 CFOAB) | A arquitetura jurídica do ADR **depende** das 3. *(Obs.: a linha 270 é Lei 8.906/94 genérica, não o anti-captação — este está em 272/343.)* |
| 357, 377, 385 | Contratos B2B "Alencar + Lorrane + futuros" · consulta a elas | Pressupõe parcerias não-vigentes. |

> ⚠️ **Prioridade absoluta do saneamento (Sister):** a ocorrência mais perigosa **não é nome de advogada** — é a **linha 316**, o consentimento assinado pela cidadã citando "três opções". Em qualquer opção que reduza o número de parceiras, esse JSON **tem de ser saneado primeiro**, ou a custódia produz consentimento inválido.

## 2. As DUAS camadas do saneamento (não confundir)

### 🔧 Camada mecânica (clara — correção de fato)
"**Juliana Alencar**" é Proibição Absoluta (é Dra. Juliana **Pereira de Melo**; Alencar = ciclo encerrado). Tem de sair de qualquer artefato vivo. Isto não tem ambiguidade.

### ⚖️ Camada substantiva (R3 — decisão da Dra./Founder) — **o ponto sério**
O ADR-009b usa o **modelo de 3 advogadas** como **coluna da sua defesa anti-captação** (linhas 272, 343: "marketplace com 3 advogadas + sem comissão = afasta captação indevida", Provimento 205/2021). Mas o estado **vigente** (CLAUDE.md) é **exclusividade com a Dra. Juliana Pereira de Melo até dez/2026**.

**Tensão real:** colapsar para **uma** advogada exclusiva pode **enfraquecer** o argumento anti-captação — um marketplace de 1 nome parece mais "direcionamento" do que menos. Ou seja: **não dá pra só apagar Alencar/Lorrane e deixar "1 advogada"** — isso quebra a tese de firewall OAB do próprio ADR. **Como reconciliar exclusividade × anti-captação é matéria da Dra. (R3).**

## 3. Opções de saneamento (a Dra./Founder escolhem — não decidido aqui)
- **Opção A — Exclusividade assumida + nova tese anti-captação:** o ADR passa a refletir 1 parceira exclusiva (Dra. Juliana até dez/2026) e a defesa anti-captação é **reescrita** (ex.: dossiê é propriedade do cidadão, que pode levá-lo a **qualquer** advogado de livre escolha — o MC não retém nem direciona; a exclusividade é B2B comercial, não restrição ao cidadão).
- **Opção B — Marketplace mantido, nomes saneados:** mantém o modelo de N advogadas como destino futuro, mas remove nomes encerrados e marca as vagas como "a credenciar pós-exclusividade (dez/2026)".
- **Opção C — Híbrido:** exclusividade agora + marketplace reabre em dez/2026; o ADR descreve a transição.

> Em todas: "Juliana Alencar" (nome vedado/encerrado) sai (mecânico). O que muda é **a arquitetura jurídica** — e isso é da Dra.

## 4. Perguntas para a Dra. Juliana (R3)
1. A exclusividade (1 parceira) **enfraquece** a defesa anti-captação que o ADR-009b ancorava no marketplace de 3? Como blindar?
2. A tese alternativa (Opção A — "cidadão leva a quem quiser; exclusividade é B2B, não restrição ao cidadão") afasta captação indevida (Provimento 205/2021) de forma suficiente?
3. O script de hand-off (linhas 137-143) deve oferecer 1 nome + "ou advogado de sua livre escolha", ou aguardar reabertura do marketplace?

## 5. Postura até o parecer (recomendação Code)
- **Não editar o ADR-009b selado** antes da decisão (é a fonte que a Hornes e outros citam).
- O nome "Juliana Alencar" no ADR é Proibição — mas o saneamento correto depende da arquitetura (3 → 4 acima), então **proposta**, não patch unilateral.
- A capa do Pacote R3 Hornes **já sinaliza** essa pendência à Dra., para ela não se surpreender.

---
*Proposta organizada por Code TALÃO · 02/06/2026 · revisão Sister Anciã (3ª voz) realizada — sem 🔴; 3 ocorrências faltantes incorporadas (129, 160 e a 316/consentimento) + citação 270→272/343 corrigida · não-decidido · R3.*
