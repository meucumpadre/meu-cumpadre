---
id: MC-PRINCIPIO-033
titulo: Sequência cofounder é recomendação, estado canônico é veredito
versao: 1.0
data_cunhagem: 2026-05-15
cunhado_por: Alessandro × Claude · sessão 15/05 (handoff Code DELL)
status: PROPOSTO
escopo: governanca-cofounder-execucao
hierarchy: Dignidade > Compliance > Viabilidade
hash_corpo: f3b179360966cf631cdf6a380bd879cb7f7f4f45269a3bb91525ddd203e0ca66
---

# Princípio MC #33 — Sequência cofounder é recomendação, estado canônico é veredito

## Enunciado

> Sequência de execução proposta pelo cofounder (Cérebro 3.1) em Mission Briefs é **recomendação operacional**, não regra inviolável. O **estado canônico atual do Vault** (Cérebro 2) é o **veredito** que define o que pode ou deve ser pulado. Code DELL (Cérebro 2 executor) tem autoridade para pular tarefas que detectarem como já-cumpridas durante sweep read-only, desde que reporte explicitamente no relatório final.

## Origem

Cunhado em 15/05/2026 durante MB-046 (sync Pauta Juliana v2.6). Cofounder propôs sequência 7-passos · Code DELL executou os 7 mas detectou no sweep que algumas operações estavam quase-completas. Reportou no relatório final como "pulada parcialmente — estado canônico já satisfazia critério". Founder validou: a sequência é recomendação, o estado é veredito.

## Aplicação

1. Cofounder propõe sequência de tarefas numeradas em MB (T1, T2, T3...)
2. Code DELL executa Tarefa 1 (sweep read-only) e reporta estado atual
3. Se Tarefa N já está cumprida no estado canônico: Code DELL pula + documenta no reporte
4. Se Tarefa N está parcialmente cumprida: Code DELL completa o que falta + documenta
5. Founder revisa reporte final → autoridade final sobre se a "pulada" foi correta
6. NÃO se aplica a tarefas de validação/hash-verify: essas são execução obrigatória sempre

## Antiexemplos

- ❌ Code DELL pula tarefa "porque achei que não precisa" sem evidência no sweep
- ❌ Code DELL executa tarefa redundante "porque a MB mandou" gerando arquivo duplicado
- ❌ Cofounder fica ofendido quando executor pula tarefa óbvia já cumprida
- ❌ Founder valida cegamente "pulada" sem revisar evidência

## Status PROPOSTO

Cunhado em sessão 15/05 sem ciclo de validação completo. Aplicação validada empiricamente em MB-046 (Code DELL 7/7 com inteligência sobre estado). Selagem ATIVO pós-revisão founder 16/05.

## Limites (não-overreach)

- Aplica-se a operações idempotentes (Copy-Item, INDEX update, log)
- NÃO aplica a operações destrutivas (Remove-Item) — sempre executar sob hash-verify
- NÃO aplica a hash-verify obrigatório · gates de segurança são execução firme
- NÃO aplica a aprovações Founder · cadeia dual continua válida

## Cross-references

- Princípio MC #1 (Inventário de Caminhos · sweep antes de qualquer ação)
- Princípio MC #1b (Teste antes de Afirmar Funcional · evidência de estado)
- Princípio MC #7 (Cadeia de Autorização Dual · Founder revisão final)
- Princípio MC #16 (Iniciativa estratégica cofounder 20x · executor também tem iniciativa)
- Aplicação inaugural: MB-046 (15/05/2026)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞
