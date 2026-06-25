---
doc_id: "MC-SKILL-mc-lumus-refine-v0_1"
tipo: "SKILL"
codigo: "mc-lumus-refine"
titulo: "Skill — Refinamento de Artefatos do Lúmus Substrate"
versao: "0.1"
data: "2026-06-19"
status: "RASCUNHO — PRÉ-R2 · NÃO SELADO"
plano: "Arquitetura Soberana"
zona: "Verde · zero PII"
autoria:
  - "Grok (C3.1) — spec + esqueleto de implementação"
  - "Code TALÃO — revisão e integração futura"
  - "Founder Alessandro — gate soberano"
gera_a_partir_de:
  - "MC-POP-Workflow-Lumus-Substrate-v0_1 (§4–§6)"
  - "MC-VAS-Diagnostico-Proposta-v0_3 (Tier 3 Lúmus implementado)"
  - ".claude/vas/mc-coerencia.py (V-lumus-folder-structure + V-lumus-self-referential)"
ancora_biblica: "Provérbios 31:8"
hierarquia: "Dignidade > Compliance > Viabilidade"
---

# MC-SKILL — mc-lumus-refine v0.1

> **Propósito:** Refinar artefatos do Lúmus Substrate, corrigindo problemas de estrutura (pasta canônica) e completude (Self-Referential Instructions), sempre com revisão humana.

---

## 1 · O que este Skill faz

Este Skill atua como **camada de refinamento** sobre o Lúmus Substrate. Ele:

- Recebe artefatos Lúmus que apresentaram problemas nos validadores do VAS (`V-lumus-folder-structure` e/ou `V-lumus-self-referential`).
- Analisa o problema e propõe correções:
  - **Realocação sugerida** para a pasta canônica correta (`01-Raw` → `05-Graph`).
  - **Geração ou enriquecimento** da seção **Self-Referential Instructions** (instruções de auto-evolução), de forma útil e contextualizada.
- Entrega o artefato refinado + relatório de mudanças para revisão humana.

**O que ele NÃO faz:**
- Não escreve diretamente no cofre Lúmus.
- Não sela artefatos.
- Não toma decisões de realocação sem confirmação humana.
- Não altera conteúdo de domínio (apenas estrutura e seção de instruções).

---

## 2 · Princípios de operação

| Princípio              | Aplicação neste Skill |
|------------------------|-----------------------|
| **Proof-First**        | Toda sugestão deve apontar para a regra violada (`LFS-01`, `LSR-02`, etc.) + linha de origem. |
| **Fail-closed**        | Em caso de dúvida sobre a natureza do artefato, o Skill pede confirmação humana em vez de assumir. |
| **Human-in-the-Loop**  | Sempre devolve artefato + explicação + diff sugerido. O humano decide. |
| **Separação de Domínios** | Opera apenas sobre artefatos Lúmus. Não interfere em ADRs, SPECs ou outros tipos. |
| **Determinismo**       | Quando possível, o refinamento deve ser reproduzível. |

---

## 3 · Regras de ouro (do POP Lúmus)

Este Skill deve honrar as seguintes regras do `MC-POP-Workflow-Lumus-Substrate-v0_1`:

- **Pastas canônicas** (§5):
  - `01-Raw` → fontes brutas
  - `02-Refined` → material destilado/estruturado
  - `03-Self-Referential` → peças com instruções de auto-evolução
  - `04-Loops` → workflows e mecanismos de bootstrapping
  - `05-Graph` → representações em grafo (futuro)

- **Self-Referential Instructions** (§4 E4 e §6):
  - Toda peça declarada como Self-Referential (ou localizada em `03-Self-Referential/`) deve conter uma seção clara de instruções de auto-evolução.
  - A seção deve ter conteúdo real (mínimo de linhas não-vazias e não-heading).

---

## 4 · Fluxo de execução sugerido

```
Entrada
  │
  ▼
Análise via VAS (V-lumus-folder-structure + V-lumus-self-referential)
  │
  ▼
Classificação do problema
  │
  ▼
Geração de versão refinada:
  - Sugestão de nova pasta (se aplicável)
  - Geração / enriquecimento da seção Self-Referential Instructions
  │
  ▼
Saída para humano:
  - Artefato refinado (.md)
  - Relatório de mudanças (com lastro das regras violadas)
  - Status: Pronto para revisão
```

---

## 5 · Integração com o ecossistema

| Componente          | Relação com mc-lumus-refine |
|---------------------|-----------------------------|
| `mc-coerencia.py`   | Fornece os achados dos validadores Tier 3 como input |
| `mc-pre-selagem`    | Pode ser chamado antes do refinamento para checagens gerais |
| VAS (Boletim)       | O Skill pode ser disparado a partir de achados do Boletim |
| Rito R2             | Refinamentos que alterem significado fundacional sobem para R2 |
| Concausa (futuro)   | Pode orquestrar este Skill em workflows de ingestão Lúmus |

---

## 6 · Limites e gates

- **Gate R1**: Skill pode rodar livremente em artefatos de mesa de trabalho.
- **Gate R2**: Refinamentos que alterem estrutura de peças já em `03-Self-Referential/` ou impactem princípios fundacionais devem passar por R2.
- **Nunca**: Escreve direto no cofre Lúmus sem aprovação explícita do Founder.

---

## 7 · Critérios de qualidade do Skill

Um bom refinamento gerado por este Skill deve:

1. Ser rastreável (apontar para a regra violada + linha).
2. Preservar o conteúdo original (não descarta informação).
3. Gerar seção de instruções **útil** (não apenas template vazio).
4. Ser determinístico quando possível.
5. Falhar de forma clara quando não conseguir classificar o artefato.

---

## 8 · Esqueleto de Implementação (Python)

Abaixo está um esqueleto inicial da lógica do Skill. Ele pode ser expandido futuramente.

```python
# .claude/skills/mc-lumus-refine/mc_lumus_refine.py

from typing import List, Dict, Optional

def sugerir_pasta_canonica(doc: dict) -> Optional[str]:
    """Sugere a pasta canônica com base na natureza do artefato."""
    # Lógica baseada em tags, frontmatter e conteúdo
    if doc.get("natureza") == "self-referential":
        return "03-Self-Referential"
    # ... outras regras
    return None

def gerar_secao_self_referential(doc: dict, problema: str) -> str:
    """Gera ou enriquece a seção Self-Referential Instructions."""
    # Exemplo simples — pode ser expandido com LLM controlado
    return f"""## Self-Referential Instructions

- Este artefato foi refinado automaticamente devido a: {problema}
- Critério de evolução: revisar quando surgir nova fonte canônica ou mudança de estrutura.
- Responsável pela revisão: [Humano]
"""

def refinar_artefato_lumus(doc: dict, achados_vas: List[dict]) -> dict:
    """Função principal do Skill."""
    refinado = doc.copy()
    problemas = [a["regra"] for a in achados_vas]

    if "LFS-01" in problemas or "LFS-02" in problemas:
        nova_pasta = sugerir_pasta_canonica(doc)
        if nova_pasta:
            refinado["sugestao_pasta"] = nova_pasta

    if "LSR-01" in problemas or "LSR-02" in problemas:
        secao = gerar_secao_self_referential(doc, str(problemas))
        refinado["secao_gerada"] = secao

    return refinado
```

---

## 9 · Status e próximos passos

| Item                        | Status      |
|-----------------------------|-------------|
| Spec do Skill               | v0.1 (pronta) |
| Esqueleto de implementação  | Básico      |
| Integração com VAS          | Pendente    |
| Testes com fixtures reais   | Pendente    |
| Gate R2                     | Necessário antes de uso em peças críticas |

---

**Próximo passo recomendado:**

Após revisão desta spec, podemos:
- Refinar o esqueleto de código.
- Integrar o Skill com os achados do `mc-coerencia.py`.
- Criar fixtures de teste.

---

*Documento gerado em 19/06/2026 · Hierarquia D > C > V · Proof-First*