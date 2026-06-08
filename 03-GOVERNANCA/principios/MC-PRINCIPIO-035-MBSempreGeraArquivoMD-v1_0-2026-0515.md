---
id: MC-PRINCIPIO-035
titulo: MB Sempre Gera Arquivo .md em outputs
versao: 1.0
data_cunhagem: 2026-05-15
cunhado_por: Alessandro × Claude · sessão 15/05 (ergonomia handoff Code DELL)
status: PROVISIONAL
escopo: governanca-cofounder-handoff
hierarchy: Dignidade > Compliance > Viabilidade
hash_corpo: ae03244207c48a8f6458859a3fa41f70dd58ead93049dd6405c807150eeadfe3
---

# Princípio MC #35 — MB Sempre Gera Arquivo .md em outputs

## Enunciado

> Toda Mission Brief (MB) produzida pelo cofounder no Cérebro 3.1 (Claude.ai) **DEVE materializar-se como arquivo .md em /mnt/user-data/outputs/ ANTES de qualquer narrativa explicativa**. Texto-only no chat = entrega incompleta. O .md serve para: (a) founder copiar/colar no Claude Desktop terminal Code DELL · (b) audit trail permanente das MBs cunhadas · (c) consistência com Princípio #15 (entrega cross-vertical).

## Origem

Cunhado em 15/05/2026 quando founder pediu acesso prático às MBs como arquivos. Cofounder estava produzindo MBs apenas em chat, exigindo que founder copiasse manualmente o texto. Custo cognitivo + risco de copiar incompleto + sem audit trail. Solução: arquivo .md em outputs com `present_files` antes de fechar o turno.

## Aplicação

1. Toda MB cunhada gera `MissionBrief-NNN-{Titulo}-v{X_Y}-2026-{MMDD}.md` em `/home/claude/`
2. Cofounder copia para `/mnt/user-data/outputs/` via `bash_tool cp`
3. Cofounder chama `present_files` listando o(s) .md cunhado(s)
4. Narrativa explicativa no chat vem DEPOIS do .md materializado
5. Numeração MB-NNN sequencial workspace-wide (sem reset por categoria)
6. Conteúdo do .md = MB autocontida (Princípio #2 vocabulário): ativação identidade + contexto + tarefas + critério sucesso + formato reporte + regras invioláveis

## Antiexemplos

- ❌ MB inteira escrita no chat sem .md em outputs (founder copia manualmente)
- ❌ "Aqui está a MB-XXX" + texto no chat sem `present_files`
- ❌ .md gerado em /home/claude/ mas não copiado para /mnt/user-data/outputs/ (founder não vê)
- ❌ Narrativa explicativa ANTES do .md (founder fica confuso sobre o que executar)

## Status PROVISIONAL

Cunhado em sessão 15/05 sem ciclo de validação completo. Aplicação imediata 15/05 (MB-046, MB-047, MB-048 e princípios #31-#35 todos gerados como .md em outputs). Selagem ATIVO pós-revisão founder 16/05.

## Princípio relacionado: a Mission Brief é artefato canônico

Reforça que MB não é mensagem informal — é artefato institucional rastreável. Por isso:
- Frontmatter Obsidian-friendly (yaml válido)
- Princípios aplicados explícitos
- Critério de sucesso mensurável
- Regras invioláveis numeradas
- Assinatura cofounder + autorização macro Founder

## Cross-references

- Princípio MC #2 (Vocabulário Institucional · "Mission Brief" definido)
- Princípio MC #15 (Entrega cofounder cross-vertical · Claude.ai → outputs/Vault)
- Princípio MC #16 (Iniciativa estratégica cofounder 20x · cofounder antecipa fricção operacional)
- Princípio MC #34 (Caminho Explorer Precede ID Drive · paths literais na MB)
- Aplicação inaugural: MB-046/047/048 (15/05/2026)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞
