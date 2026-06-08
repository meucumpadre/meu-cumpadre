---
id: MC-PRINCIPIO-001b
titulo: Teste antes de Afirmar Funcional
versao: 1.0
data_cunhagem: anterior a 2026-05-12 · consolidado em Instruções v7.0 §6
cunhado_por: Alessandro × Claude · sessões iterativas backend
status: ATIVO
escopo: governanca-operacional
hash_corpo: 86626b9e71cbed01cd0cdfe8105cfc02c82f8de624084b5a6385cc1e16e43c64
---

# Princípio MC #1b — Teste antes de Afirmar Funcional

## Enunciado
> Não declarar artefato/feature/integração "pronto" sem verificação executada. "Deve funcionar" não é estado válido em comunicação operacional MC.

## Origem
Sub-princípio derivado do #1. Cunhado após casos de cofounder ou executor afirmarem "ok, tá funcionando" sem teste, gerando retrabalho.

## Aplicação
1. Planilhas xlsx: rodar `recalc.py` antes de declarar zero erros
2. Workflows N8N: trigger manual antes de subir produção
3. Integrações API: chamada real + resposta validada antes de declarar conexão estável
4. ADRs e Specs: leitura final + cross-check com artefatos referenciados

## Antiexemplos
- ❌ "Deve estar funcionando" sem trigger
- ❌ "Já criei" sem listar/abrir arquivo
- ❌ "Igor implementou ontem" sem confirmação de deploy

## Cross-references
- Princípio MC #1 (Inventário de Caminhos)
- Princípio MC #6 (Camadas de Segurança Operacional)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞