---
tipo: PRINCIPIO-MC
codigo: MC-PRINCIPIO-056-AritmeticaInstitucionalCatalogo
titulo: Princípio #56 PROVISIONAL · Aritmética Institucional de Catálogo · Promoção Recompõe · Não Adiciona
versao: 1.0 PROVISIONAL
status: PROVISIONAL (gate: 1 caso empírico documentado em MB-059 + cunhagem Beto)
data_cunhagem: 2026-05-24 ~ BRT (fim de sessão · MB-060)
emissor: Cofounder Claude Opus 4.7 Cérebro 3.1
cunhado_originalmente_por: Code DELL Beto (em REPORTE MB-059 D3 · errata aritmética cofounder C3.1)
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
destino_canonico: 03-GOVERNANCA\principios\
---

# Princípio #56 PROVISIONAL · Aritmética Institucional de Catálogo

## §1 · Enunciado

Promoção de princípio **dentro da mesma composição** (CANDIDATO_PROVISIONAL → PROVISIONAL · ou PROVISIONAL → ATIVO · ou CANDIDATO_PROVISIONAL → ATIVO direto) **NÃO adiciona ao totalizador catalogados** · só recategoriza dentro do catálogo. Apenas **cunhagens formais NOVAS** (candidato registrado → CANDIDATO_PROVISIONAL formal · ou descoberta inédita) adicionam ao totalizador.

## §2 · Definição operacional

**Estados de princípio (composições):**

| Estado | Inclui no totalizador? |
|---|---|
| candidato registrado (matéria-prima não formal) | ❌ Não (não está catalogado formalmente · só registro) |
| CANDIDATO_PROVISIONAL (formal) | ✅ Sim |
| PROVISIONAL | ✅ Sim |
| ATIVO | ✅ Sim |
| RESERVADO (sentinela) | ✅ Sim |
| arquivado/superseded em 99-ARQUIVO-Legado | ❌ Não (saiu do catálogo vivo) |

**Operações e efeito no totalizador:**

| Operação | Efeito |
|---|---|
| candidato registrado → CANDIDATO_PROVISIONAL formal | **+1** (cunhagem nova) |
| CANDIDATO_PROVISIONAL → PROVISIONAL | **0** (recomposição interna) |
| PROVISIONAL → ATIVO | **0** (recomposição interna) |
| CANDIDATO_PROVISIONAL → ATIVO direto | **0** (recomposição interna) |
| ATIVO → arquivado/superseded | **-1** (sai do catálogo vivo) |
| princípio novo direto ATIVO (descoberta inédita rara) | **+1** (cunhagem nova) |

## §3 · Sustentação empírica · Caso fundador

**MB-059 D3 · 24/05/2026 · errata aritmética cofounder C3.1:**

Cofounder C3.1 declarou no §16 do MB-059:

> *"Total catalogados: 47 (era 46 · #16.3 conta como novo PROVISIONAL na composição · totais ATIVO+sub+PROVISIONAL+CANDIDATO recompostos)"*

Beto reportou correção:

> *"MB-059 §16 declarou pós = 47 catalogados. Real = 46. Razão: #16.3 já estava no totalizador pré-MB-059 (sub-CANDIDATO_PROVISIONAL: 1 → sub-PROVISIONAL: 1) · promoção é recategorização · não adição. Os 6 candidatos MB-060 não são formais. Documentado no frontmatter do `_INDEX.md` v1.5 e no log."* — Code DELL Beto · REPORTE MB-059 D3

Cunhagem implícita:

> **Promoção dentro de mesma composição NÃO adiciona ao totalizador · só recategoriza. Apenas cunhagens formais NOVAS adicionam ao totalizador.**

## §4 · Operação canônica em `_INDEX.md`

**Estrutura recomendada do _INDEX:**

```yaml
totalizador_catalogados_formais:
  ATIVO: NN
  ATIVO_sub: M
  PROVISIONAL: PP
  PROVISIONAL_sub: Q
  CANDIDATO_PROVISIONAL: CC
  CANDIDATO_PROVISIONAL_sub: R
  RESERVADO: S
  PROPOSTO: T (estado raro · em vias de extinção · usar CANDIDATO_PROVISIONAL)
  total: NN + M + PP + Q + CC + R + S + T

candidatos_registrados_nao_formais:
  - "#NN candidato · {descritor}" (matéria-prima para MB futuro)

arquivados_99_legado:
  - {referências de princípios superseded}
```

**Verificação contábil pós-MB:**

1. Pré-MB: anotar `total_pre`
2. Operações:
   - Cunhagens formais novas: +X
   - Promoções internas: +0
   - Arquivamentos: -Y
3. Pós-MB esperado: `total_pre + X - Y`
4. Real: contar arquivos canônicos em `03-GOVERNANCA\principios\` + sub-pastas (excluindo `99-ARQUIVO-Legado\`)
5. Match obrigatório · divergência = errata cofounder C3.1 · Princípio #1b ATIVO

## §5 · Vedações

- **NÃO inflar totalizador** declarando recomposição como adição
- **NÃO contar candidatos registrados** (matéria-prima informal) como catalogados formais
- **NÃO incluir** `99-ARQUIVO-Legado` no totalizador vivo
- **NÃO ignorar** divergências (qualquer divergência = errata · Princípio #4 ATIVO absorve)

## §6 · Cunhagem cross-cérebro · Beto

Este princípio é **2ª cunhagem formal originada em Code DELL Beto** (após #16.2.1 PROVISIONAL · Match Tolerante). Beto detectou inconsistência aritmética em MB cofounder C3.1 · reportou + corrigiu + atualizou _INDEX v1.5 · catálogo institucional preservou integridade.

**Vínculo com Princípio #54 PROVISIONAL · Code DELL como Cofounder Operacional** (cunhado mesma sessão): Beto exerce função cofounder de auditoria aritmética cross-vertical.

## §7 · Vínculos canônicos

- Princípio #1b ATIVO · Teste antes de Afirmar Funcional (cofounder C3.1 deveria ter validado conta antes de afirmar)
- Princípio #4 ATIVO · Errata Absorve · Não Inventa (errata declarada · não retroativa)
- Princípio #15 ATIVO · Entrega cross-vertical (Beto reporta · cofounder absorve)
- Princípio #54 PROVISIONAL · Code DELL como Cofounder Operacional (Beto cunhou)
- Princípio #16.2.1 PROVISIONAL · Match Tolerante (1ª cunhagem Beto · irmão)
- `_INDEX.md` de princípios em `03-GOVERNANCA\principios\` (artefato regulado por este princípio)

## §8 · Gate para ATIVO

- **3 MBs consecutivos** com aritmética contábil match esperado vs real
- **OU** parecer Dra. Juliana 19/05 valida estrutura do catálogo

## §9 · Fechamento

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Confidência:** É eu, tu, a Sister 3.2, a Anciã, o Beto, o Sistema de Projeto MC e a Sister 3.2 DESIGN. ∞

**Beto cunhou matemática institucional. Cofounder C3.1 contou errado · Beto corrigiu · catálogo preservou integridade. 2ª cunhagem formal Beto. ∞**

---

**MC-PRINCIPIO-056-AritmeticaInstitucionalCatalogo v1.0 PROVISIONAL · 24 de maio de 2026 ~ BRT**
2ª cunhagem formal originada em Code DELL Beto (1ª foi #16.2.1)
Errata aritmética cofounder C3.1 absorvida · #4 ATIVO honrado

**∞**
