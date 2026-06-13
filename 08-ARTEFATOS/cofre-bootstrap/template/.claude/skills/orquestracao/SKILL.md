---
name: orquestracao
description: Protocolo de orquestração para tarefas complexas. Ativa modo de
  planejamento, subagentes e verificação. Use quando a tarefa envolver 3+ passos,
  decisões arquiteturais, ou manipulação de múltiplos arquivos do vault.
  Frases-gatilho: "planeje", "tarefa complexa", "orquestre", "monte um plano".
rua:
  id: orquestracao
  nome: Protocolo de Orquestração (plan-mode)
  tipo: skill
  versao: n/d
  status: INSTALADO
  papel: Ativa modo de planejamento + subagentes + verificação para tarefas complexas
    (3+ passos)
  gatilhos:
  - /orquestracao
  - planeje
  - tarefa complexa
  - orquestre
  - monte um plano
  entrega: plano + delegação a subagentes + verificação
  metodo_fonte: best-practices de orquestração Claude Code
  instancia_aci: transversal
  camada_ase: L2
  compoe_com: []
  nao_confundir_com:
  - id: meu-cumpadre-orquestrador-mestre
    motivo: este é genérico (Code plan-mode); o mestre é o roteador ÉTICO do produto
      MC
  gate: R1
  zona: Verde
  lgpd_nota: orquestração de tarefa · sem PII
  vedacoes_honradas:
  - D>C>V
  - Proof-First
  para_no_gate: planeja e delega · não sela
  custo:
    gasta_agente: true
    opt_in: false
    fan_out: por subagente
  emite_audit: false
  depende_de: []
---

## Modo de planejamento

Para QUALQUER tarefa não trivial (3+ passos ou decisões que afetam múltiplos arquivos):

1. **Planeje primeiro** — Escreva o plano em `_Docs/todo.md` com itens verificáveis
2. **Valide o plano** — Confirme com o Founder antes de executar
3. **Execute passo a passo** — Marque itens como concluídos conforme avança
4. **Resuma a cada etapa** — Explique o que foi feito em alto nível
5. **Verifique o resultado** — Nunca declare concluído sem provar que funciona
6. **Registre lições** — Atualize `_Docs/licoes-aprendidas.md` após correções

## Estratégia de subagentes

- Use subagentes para manter o contexto principal limpo
- Delegue pesquisa, exploração e análise paralela para subagentes
- Um subagente por tarefa — foco total
- O contexto principal vê só o resultado final, não o processo

Quando usar subagentes:
- Pesquisar informações em múltiplos arquivos do vault
- Gerar relatórios que exigem leitura de 10+ notas
- Comparar dados entre fases da jornada E0→E7
- Analisar padrões em notas de clientes

## Verificação obrigatória

Antes de declarar qualquer tarefa concluída:
- Compare o estado antes e depois das alterações
- Verifique que o frontmatter YAML está íntegro (sync ClickUp depende disso)
- Confirme que nenhum dado sensível (CPF, CNIS, CID) vazou para fora de notas de caso
- Pergunte: "O Founder aprovaria isso? Passa no teste Zilda-STF?"

## Correção autônoma de erros

- Quando identificar um erro: corrija imediatamente sem pedir permissão a cada passo
- Aponte o que estava errado, o que foi corrigido, e por quê
- Registre o padrão em `_Docs/licoes-aprendidas.md` para prevenir recorrência
- Zero troca de contexto desnecessária com o Founder

## Princípios

- **Simplicidade primeiro** — Faça cada mudança o mais simples possível
- **Sem gambiarras** — Encontre causas raiz. Sem correções temporárias
- **Impacto mínimo** — Toque apenas o necessário. Evite efeitos colaterais
- **Elegância quando importa** — Para mudanças não triviais, pause e pergunte "existe forma melhor?"
