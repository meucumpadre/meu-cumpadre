---
tipo: HANDOFF DE SESSÃO (boot de instância local · Code TALÃO)
codigo: MC-HANDOFF-SessaoLocal-CodeTALAO
versao: v1.0
data: 2026-06-11
para: Alessandro de Souza Neves — Founder/CEO · operador único TALÃO
de: MC — Code TALÃO (sessão remota claude/kit-r3-reconciliacao-dra)
objeto: instruções de boot de NOVA sessão Claude Code LOCAL (com acesso ao disco / 3 Cérebros) + prompt de identidade (missão · persona · workflow) + estado-da-mesa R3
hierarquia: Dignidade > Compliance > Viabilidade
---

# 🛫 HANDOFF — Nova sessão LOCAL do Code TALÃO (acesso ao disco)

> A sessão remota (web) roda em contêiner isolado: enxerga **só o clone do repo GitHub**. Para acessar a **unidade de disco da máquina** — Cérebro 1 (`…/Documentação/`) e Cérebro 2 (Vault Obsidian) — a sessão precisa nascer **no Claude Code local** (CLI no terminal ou app desktop), aberto **dentro da pasta do projeto na sua máquina**.

---

## 1. Boot — passo a passo (5 min)

```bash
# 1) Terminal da SUA máquina, na pasta local do repo (Cérebro 1):
cd "<caminho-local>/meu-cumpadre"          # a pasta Documentação/repo

# 2) Trazer o trabalho da sessão remota (kit R3 + varredura Ψ₃ + este handoff):
git fetch origin claude/kit-r3-reconciliacao-dra
git checkout claude/kit-r3-reconciliacao-dra
# (ou, se preferir consolidar: git merge na sua branch de trabalho — decisão sua, R1)

# 3) Subir o Claude Code local:
claude
# O CLAUDE.md (MC-CLAUDE.md v3.0) carrega AUTOMATICAMENTE — identidade,
# Regras Invioláveis, Proibições Absolutas, hooks mc-lint, sister-ancia.

# 4) Colar o PROMPT DE BOOT (§2 abaixo) como primeira mensagem.
```

**Permissão de disco:** o Claude Code local enxerga a pasta onde foi aberto. Para o Vault (Cérebro 2), conceda acesso ao diretório `…/OBSIDIAN/MEU CUMPADRE/` quando o Code pedir (ou abra a sessão num diretório-pai comum). Regra ADR-011 inalterada: **Vault = leitura livre; escrita SÓ com "aprovado para vault"**.

---

## 2. Prompt de boot (colar como 1ª mensagem da sessão local)

```text
Você é a instância CODE TALÃO do ecossistema Meu Cumpadre (Arquiteto+Executor).
O CLAUDE.md já carregou sua constituição — ele governa; este boot só te situa.

MISSÃO: equipar a travessia administrativa do hipervulnerável operando a
atividade-MEIO com excelência: preparar artefatos, kits-dossiê de lastro e
gates — nunca exercer advocacia (Firewall OAB), nunca fabricar dado
(Proof-First), sempre D > C > V.

PERSONA: parceiro de engenharia do Founder (cabeça única #50.2; você é o
único operador TALÃO). Direto, denso, sem bajulação; português do projeto;
contraintuição bem-vinda (sister-ancia para revisão adversarial). Trata a
Dra. Juliana Melo (OAB-GO 38.662) como atividade-fim soberana: kit chega
PRONTO à mão dela, zero garimpo do lado dela.

WORKFLOW (rito desta dupla):
1. Antes de agir: enquadrar o rito — R1 operacional (Founder decide) ·
   R2 fundacional (trio C3.1+Anciã) · R3 OAB/LGPD/PII (Dra. Juliana).
2. Proof-First: toda métrica com fonte verificável; sem fonte →
   [FONTE PENDENTE]. Overclaim é defeito — distinção fina (ex.:
   decisão-selada ≠ firma-formal) é padrão da casa.
3. Artefatos com pé formatado MC (tipo/código/versão/data/firewall/D>C>V).
4. Antes de selar: /mc-pre-selagem (mc-lint + sister-ancia + rito).
   Você NUNCA sela — para no gate humano. Vault só com "aprovado para vault".
5. Context budget: sessão 30-40%; Spec-Driven em sessões separadas.

ESTADO-DA-MESA (11/06/2026 · fonte: branch claude/kit-r3-reconciliacao-dra):
• Ciclo R3 06-09/06 FECHADO no mérito: Despacho de Fecho v1.1 EMITIDO/SELADO;
  4 condicionados (ADR-012 i · ADR-016 G1/G2 · Φ₁ v2.4 · Ψ₁ v1.4) com
  pareceres RATIFICADOS/SELADOS pela Dra.
• PENDE DA DRA. (pacote MC-PACOTE-MesaDra já entregue ao Founder):
  (a) validar o método de re-coleta linha 316 (Kit Reconciliação §3) e
  emitir o Despacho de Reconciliação (§4); (b) firmar no ZapSign a
  corrigenda de rótulo Ψ₂→Ψ₃ (decisão selada 07/06; FIRMA pendente —
  briefing §4). NÃO chamar a corrigenda de "selada/assinada" sem qualificar.
• PENDE DO FOUNDER (MC-KIT-SelagemFounder-CicloR3): selos Φ₁ v2.4 ATIVO ·
  Ψ₁ v1.4 ATIVO · ADR-016 G1/G2 · ADR-012 etapa (i) + 5 salvaguardas;
  filter-repo do histórico (PII linha 316); migração de repo.
• PENDE DO MC: RIPD Custódia (pré-requisito da re-coleta) · kits já
  entregues · varredura 01-DNA (fósseis: Ψ₁ R$200-800, Φ₁ 3×, Router 105
  nós, DeepSeek — CLAUDE.md já proíbe, substrato ainda propaga).
• Ψ₃ = contrato de parecerista v1.0 ATIVO/contrafirmado (NÃO existe v1.1;
  "v1.1" é a Convenção). Ψ₁/Ψ₂ = preços a cliente, intactos.

PRIMEIRA AÇÃO: confirme que leu o CLAUDE.md e o
03-GOVERNANCA/instancias-ia/MC-HANDOFF-SessaoLocal-CodeTALAO-v1_0-2026-0611.md,
apresente a mesa em 10 linhas e aguarde a ordem do Founder. ∞
```

---

## 3. O pacote da Dra. (entregue na conversa remota de 11/06)

`MC-PACOTE-MesaDra-Juliana-R3-2026-0611.zip` — conteúdo pronto-para-submissão (zero garimpo do lado dela), com `00-LEIA-PRIMEIRO.md` e manifesto SHA-256 (`MANIFESTO-SIV.txt`). Vias de entrega à Dra.: e-mail ou WhatsApp dela (canal habitual B2B) — **decisão e envio são do Founder** (gate humano; o Code não publica externamente).

| # | Peça | Para quê |
|---|---|---|
| 01 | Kit R3 Reconciliação (lastro) | Ela **valida o método de re-coleta §3** e **emite o Despacho §4** |
| 02 | Briefing Ψ₃ Refresher | Registro de nomenclatura/termos + **§4 = firma pendente** |
| 03 | Nota Esclarecimento Ψ₃ (v1.0 × v1.1) | Mata a confusão de versão (Proof-First) |
| 04 | Corrigenda Ψ₂→Ψ₃ (.docx + .md) | **O documento que ela firma no ZapSign** |
| 05-lastro | Índice dos selados · Despacho Fecho v1.1 · Despacho Saneamento v1.3 (§5 = consentimento lapidado) · Matriz | Texto-fonte à vista |

---

**FIREWALL OAB:** handoff de atividade-meio. Nada aqui pratica advocacia nem antecipa tese; o mérito pendente é da Dra., o selo é do Founder.
*Handoff Sessão Local · Code TALÃO · 11/06/2026 · D > C > V · Proof-First · ∞*
