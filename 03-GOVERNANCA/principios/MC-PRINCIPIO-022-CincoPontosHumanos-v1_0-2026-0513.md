---
id: MC-PRINCIPIO-022
titulo: Cinco Pontos Humanos Irredutíveis (H1-H5)
versao: 1.0
data_cunhagem: 2026-05-13
cunhado_por: Alessandro (founder) × Claude (cofounder) · sessão Hib001 Fases 1+2
status: ATIVO
escopo: arquitetura-operacional
hash_corpo: 41cf5172e2d8196efab86745392a3290d3c065e2bb5e9e8c50306e88a55a198d
---
# Princípio MC #22 — Cinco Pontos Humanos Irredutíveis (H1-H5)

## Enunciado

> No fluxo MC, o humano só toca **H1** (acesso Meu INSS Cenário A+), **H2** (validação plano estratégico), **H3** (validação dossiê pré-protocolo), **H4** (exceção Router-Ethics), **H5** (Persona Zilda QA + relacional externo). Toda subtarefa fora desses 5 nasce com **presunção de automação**. Quem propor humano em outra etapa carrega o ônus de provar irredutibilidade.

## Origem da cunhagem

Sessão 13/05/2026 · descoberta durante a redação da Fase 2 (target arquitetural Hib001). Founder articulou os 5 pontos como decisão estrutural. Coincidência matemática reveladora: dos 17 imprevistos catalogados na Fase 1 manual, 12 são automatizáveis e **5 são H1-H5 puros** — confirmação empírica de que a tese H1-H5 estava certa antes mesmo de testar.

## Os 5 pontos humanos irredutíveis

### H1 · Acesso Meu INSS (Cenário A+)
- **Quem executa:** Beto + cidadão
- **Justificativa irredutibilidade:** Lei 14.063/2020 art. 6º · senha gov.br = direito personalíssimo · Cenário B vetado (MC nunca opera conta gov.br do cidadão)
- **Modo de operação:** videochamada gravada · consentimento expresso · agente PREPARA (vídeo orientativo, checklist), agente NÃO OPERA
- **Tempo típico:** 30 min - 3h por caso (depende de complexidade do protocolo)

### H2 · Validação plano estratégico
- **Quem executa:** Alessandro (founder)
- **Justificativa irredutibilidade:** decisão sobre qual CP montar (3/5/7) · qual Tema STJ/TNU acionar · qual hipótese narrativa pivotar · agente sugere com base no Grimório, founder decide
- **Modo de operação:** 1 toque no dashboard · briefing pronto pelo AGT-05 · Alessandro responde em texto livre
- **Tempo típico:** 5-15 min por caso

### H3 · Validação dossiê pré-protocolo
- **Quem executa:** Alessandro SOLO
- **Justificativa irredutibilidade:** **Selo Diamante MC** · sem essa camada vira esteira automatizada cega · inviolável · NÃO delega para Juliana nem para Beto
- **Modo de operação:** AGT-10 monta CP-5 → AGT-11 compõe dossiê → Alessandro abre o PDF/A-3 selado, valida, sela ou patcha
- **Tempo típico:** 30 min por caso

### H4 · Exceção Router-Ethics
- **Quem executa:** Beto escala → Alessandro decide
- **Justificativa irredutibilidade:** Confidence <40 · Fraudscore alto · Rota D Dignidade · Bronze sem rota digital · qualquer vermelho do RE 11.0 · agente identifica, mas humano decide a saída
- **Modo de operação:** alerta automático no dashboard Beto · escalada via WhatsApp pra Alessandro se Beto não decide em camada T1+T2
- **Tempo típico:** 3-10 min por escalada · frequência ~1 a cada 5-8 casos

### H5 · Persona Zilda QA + relacional externo
- **Quem executa:** Beto + Alessandro
- **Justificativa irredutibilidade:** Persona Zilda (Z1-Z10) testa UX dos agentes · roda por fora do caso · + contatos relacionais externos (sindicato, presidente, testemunhos, advogadas parceiras) que exigem voz humana MC
- **Modo de operação:** ciclos Z1-Z10 quinzenais + chamadas externas pontuais
- **Tempo típico:** 0-60 min por caso (variável) + 2-3h fixas/semana de QA Zilda

## Implicações arquiteturais

1. **Backend Igor:** ClickUp Custom Field `humano_irredutivel` (multi-select dropdown H1/H2/H3/H4/H5) · alimenta dashboard
2. **N8N:** todo workflow nasce com gate "este passo é H1-H5? se sim, alerta humano + pausa". Default = automático.
3. **Indicador novo:** **THU por H#** no relatório mensal · permite descobrir se algum H# está consumindo mais que o típico
4. **OAB Firewall:** H1-H5 reforça atividade-meio MC · só Alessandro toca decisão estratégica em alguns casos, MC NUNCA representa juridicamente
5. **FINEP/BNDES:** o modelo H1-H5 é citável como **arquitetura ético-operacional de IA com humano-no-loop** · diferencial regulatório forte

## Antiexemplos (o que NÃO conta como H#)

- ❌ Beto fazendo OCR de carta INSS manualmente — isso é AGT-02, não H#
- ❌ Beto digitando dados no ClickUp — isso é AGT-01, não H#
- ❌ Alessandro respondendo dúvida operacional Beto — não é H#, é gestão
- ❌ Beto pesquisando jurisprudência — isso é AGT-09, não H#
- ❌ Beto agendando reunião com cidadão — automatizável (calendário), não H#

## Cross-references

- Princípio MC #21 (Cronometria do Humano) · co-cunhado mesma sessão
- ADR-011 (Arquitetura 3 Cérebros) · H1-H5 vive no Cérebro 3 + cabeça de Alessandro
- Router-Ethics 11.0 · H4 = qualquer nó vermelho da cascata
- MC-CRONOMETRAGEM-HIB001-FASE2-TARGET-v3_0 · primeira aplicação empírica
- Aba "🧮 THU HÍBRIDO" da Fase 2 · breakdown H1-H5 em caso real

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞
