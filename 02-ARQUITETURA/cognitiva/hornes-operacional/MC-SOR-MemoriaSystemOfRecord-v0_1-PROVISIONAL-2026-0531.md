---
tipo: artefato-operacional
artefato: "E — Memória e System of Record (SoR) do cidadão"
versao: v0.1
status: PROVISIONAL
gate: "R3 — toca custódia de dados do hipervulnerável · parecer Juliana + alinhamento ADR-009a/009b"
data: 2026-05-31
forja: mc-prompt v1.1
relaciona: "ADR-009a Custódia · ADR-009b Três Estados do Dossiê · ADR-010 E3 Intelligence Layer"
---

# Artefato E · Memória e System of Record do cidadão

> A Tese posiciona o MC como "System of Record do cidadão **sobre** o Estado" (não do Estado sobre
> o cidadão). Este artefato define COMO registrar, versionar e recuperar a "verdade" do
> hipervulnerável — **dentro** da custódia já normatizada (ADR-009a/009b: Três Estados do Dossiê).
> ⚠️ **R3:** mexe em dado sensível de hipervulnerável — não selar sem parecer Juliana.
>
> 🔗 **Cross-ref (saneamento — status 06/06/2026):** a âncora **ADR-009b foi SANEADA** (v1.1 · Opção C): nomes de ciclo encerrado removidos, tese anti-captação ancorada na livre escolha, **consentimento da linha 316 reescrito** (§5). Condicionante do parecer SELADO da Dra. para este artefato E (Caso 4 Hornes): alinhar ao **ADR-009b saneado** ✅ · **RIPD** ✅ produzido · **re-coleta da linha 316** ☐ (execução) + **ratificação do despacho de saneamento** ☐ (a Dra. — é minuta). **Não aplicar nova custódia do SoR antes da re-coleta + ratificação.** Base legal expressa da "métrica de dor/urgência" a confirmar no parecer.

## Esquema de registro (o que o SoR guarda)

| Campo | Conteúdo | Classificação |
|---|---|---|
| Identidade-EU SOU | nome, história humana do caso (linguagem do cidadão) | Camada A (símbolo) + dado pessoal |
| Biografia previdenciária | vínculos, CNIS, tempo de contribuição | Camada B · sensível (stack soberana) |
| Métrica de dor/urgência | janela DIB, fragilidade, risco — para priorização | Camada B · sensível |
| Trajetória com o Estado | INSS → CRPS → JEF → Defensoria (cada salto datado) | Camada B |
| Provas | índice do Agente 1, com selo Proof-First por peça | Camada B |
| Decisões e fontes | cada decisão do sistema + a fonte [VERIFICADO] que a sustenta | Camada B · auditável |

## Regras de versionamento e recuperação

```xml
<system_of_record>
1. VERSIONAR: toda mudança de estado do caso é um registro novo, datado, com a fonte que a motivou
   (nunca sobrescrever histórico — o cidadão pode auditar sua própria trajetória).
2. RASTREAR: toda decisão aponta para o dado e a regra [VERIFICADO] que a originou (rastreabilidade total).
3. RECUPERAR: ao reabrir um caso, reconstruir o estado atual a partir do histórico, não da memória volátil.
4. CUSTÓDIA: dado sensível só em stack soberana; senhas gov.br no Bitwarden Org MC, nunca no SoR em claro.
5. CICLO DE VIDA: respeitar os Três Estados (ADR-009b) — S1 Intermediário → S2 Consolidado (apaga D+7
   da entrega) → S3 Probatório (titular: escritório parceiro). Transição S2→S3 exige TTA assinado.
6. NÃO-RETENÇÃO ABUSIVA: o SoR jamais é usado como instrumento de cobrança (ADR-009a).
</system_of_record>
```

## Loop EU SOU → Prova → Decisão → Cura

O SoR materializa o strange loop central: **EU SOU** (quem sofre) → **Prova** (o que aconteceu) →
**Decisão** (direito efetivado ou negado) → **Cura** (mudança na vida) → novo **EU SOU**. O sistema
acompanha a curva ao longo do tempo — aliado existencial, não serviço pontual. (Hofstadter [VERIFICADO]
como base conceitual do loop; "Geometria Sagrada" permanece [FONTE CULTURAL] — metáfora de design, não schema físico.)
