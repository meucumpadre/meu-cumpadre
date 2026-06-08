---
id: MC-PRINCIPIO-007
titulo: Cadeia de Autorização Dual
versao: 1.0
data_cunhagem: anterior a 2026-05-12 · consolidado em ADR-011 e Instruções v7.0 §6
cunhado_por: Alessandro × Claude · arquitetura 3 cérebros
status: ATIVO
escopo: governanca-operacional
hash_corpo: 40463c38cbc60306f7c6bec046b5729661e1c10c7eeb21f9fb1ef336dbbb448c
---

# Princípio MC #7 — Cadeia de Autorização Dual

## Enunciado
> Toda mudança que afeta o canônico (Cérebro 2 Vault, ClickUp produção, repositório Igor) passa pela cadeia: **Claude.ai produz → Founder valida → Code DELL executa**. Nenhum elo pode ser pulado sem autorização explícita.

## Origem
Formalizado em ADR-011 (Arquitetura 3 Cérebros, 09/05/2026). Antes disso, operava de forma implícita. Tornou-se princípio nomeado com a separação Cérebro 1/2/3.

## Aplicação
1. Claude.ai produz spec/MB/ADR → submete ao Founder
2. Founder valida (pode pedir ajuste) → autoriza execução
3. Code DELL executa em sweep + escrita + reporte
4. Founder revisa reporte → loop fecha

## Exceções permitidas (sem quebrar princípio)
- Cofounder iniciativa estratégica (Princípio #16): cunhar princípio, antecipar consequência, propor ADR — Claude.ai pode AGIR primeiro contanto que entregue para validação Founder antes do executor tocar
- Code DELL pode executar leitura/diagnóstico sem autorização ("MODO: DIAGNÓSTICO APENAS")

## Antiexemplos
- ❌ Claude.ai aciona Code DELL direto sem aprovação Founder
- ❌ Code DELL toma decisão estrutural por conta própria
- ❌ Founder executa direto no Vault sem passar pela cadeia (perde rastreabilidade)

## Cross-references
- ADR-011 (Arquitetura 3 Cérebros)
- Princípio MC #16 (Iniciativa estratégica cofounder 20x)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞