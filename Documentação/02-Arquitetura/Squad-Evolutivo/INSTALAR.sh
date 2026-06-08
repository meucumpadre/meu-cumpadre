#!/usr/bin/env bash
# ════════════════════════════════════════════════════════════════════════════
#  INSTALAR.sh — instala o Squad Evolutivo de Cérebro 1 (mesa de trabalho) no
#  harness (.claude/) + regenera o Registro de Unidades Agênticas (RUA).
#  v0.1 · 2026-06-04 · Squad-Evolutivo · revisável — leia antes de rodar.
# ════════════════════════════════════════════════════════════════════════════
#
#  ⚠️  GATE (pré-selagem deu CONDICIONADO · rito R2):
#      Rode SÓ DEPOIS de selar o R2 (cunhagem fundacional · Founder + C3.1 +
#      Sister Anciã — a Anciã já se manifestou na pré-selagem). Os 🟡 do gate
#      (SoR→MoR · path-references repo-relativas · _LEIA v1.1) já estão fechados.
#
#  ⚠️  Rode da RAIZ do repo (onde existem .claude/ e Documentação/).
#
#  LAYOUT (opção A, decidida): memory/, specs/SINTESE_SCHEMA.md e
#  CONTRATO-memory.md FICAM em Cérebro 1 — NÃO são copiados. Os agentes/workflow
#  já referenciam tudo por caminho repo-relativo, que resolve da raiz do repo
#  tanto em Cérebro 1 quanto depois de copiados p/ .claude/.
#
#  O QUE ESTE SCRIPT FAZ:  Passo 0 pré-flight · Passo 1 cópia · Passo 2 regen RUA
#  · Passo 3 verificação.  NÃO commita, NÃO faz push, NÃO testa — ao final
#  IMPRIME os comandos do Passo 4 (commit/push), Passo 5 (teste) e o rollback,
#  p/ você revisar o diff de .claude/ antes de selar no git.
#
#  Para pular a confirmação interativa: INSTALAR_CONFIRM=INSTALAR bash INSTALAR.sh
# ════════════════════════════════════════════════════════════════════════════

# sem 'set -e': a verificação (Passo 3) usa greps que podem retornar 1 sem ser erro.
set -uo pipefail

S="Documentação/02-Arquitetura/Squad-Evolutivo"
RUA=".claude/registro/REGISTRO-Unidades-Agenticas.md"
AGENTS=(arquiteto-invisivel guardiao-grimorio disrupter-escala-zilda sintetizador-auxiliar)

# ─── Confirmação (evita execução acidental) ──────────────────────────────────
CONFIRM="${INSTALAR_CONFIRM:-}"
if [ -z "$CONFIRM" ]; then
  echo "Vai instalar o Squad Evolutivo em .claude/ (4 agentes + skill + workflow) e regenerar o RUA."
  echo "Pré-requisito: R2 selado."
  read -r -p "Confirma? digite INSTALAR: " CONFIRM
fi
[ "$CONFIRM" = "INSTALAR" ] || { echo "Abortado (sem confirmação 'INSTALAR')."; exit 1; }

# ─── Passo 0 · Pré-flight (não muda nada; aborta se algo estiver fora do lugar) ─
echo; echo "== Passo 0 · pré-flight =="
[ -d "$S/agents" ]    || { echo "✗ origem não encontrada: $S — rode da RAIZ do repo."; exit 1; }
[ -d ".claude/agents" ] || { echo "✗ .claude/agents/ não existe — rode da RAIZ do repo."; exit 1; }
[ -f ".claude/registro/gerar-registro.py" ] || { echo "✗ gerador do RUA não encontrado."; exit 1; }
for a in "${AGENTS[@]}"; do
  [ -f "$S/agents/$a.md" ] || { echo "✗ falta a origem: $S/agents/$a.md"; exit 1; }
  # não sobrescrever um agente já instalado (sister-ancia/mc-grok não colidem; este check é defensivo)
  [ -e ".claude/agents/$a.md" ] && { echo "✗ COLISÃO: .claude/agents/$a.md já existe — abortando p/ não sobrescrever."; exit 1; }
done
[ -f "$S/skills/sintetizador-evolutivo.md" ] || { echo "✗ falta a skill de origem."; exit 1; }
[ -f "$S/workflows/sintetizador-evolutivo.workflow.js" ] || { echo "✗ falta o workflow de origem."; exit 1; }
echo "✓ origem ok · sem colisão de agentes · gerador do RUA presente"

# ─── Passo 1 · Cópia p/ o harness (§2 do guia) ───────────────────────────────
echo; echo "== Passo 1 · cópia p/ .claude/ =="
cp "$S"/agents/*.md .claude/agents/ || { echo "✗ falha ao copiar agentes"; exit 1; }
mkdir -p .claude/skills/sintetizador-evolutivo
cp "$S"/skills/sintetizador-evolutivo.md .claude/skills/sintetizador-evolutivo/SKILL.md || { echo "✗ falha ao copiar skill"; exit 1; }
cp "$S"/workflows/sintetizador-evolutivo.workflow.js .claude/workflows/ || { echo "✗ falha ao copiar workflow"; exit 1; }
cp "$S"/workflows/_LEIA-sintetizador-evolutivo.md     .claude/workflows/ || { echo "✗ falha ao copiar _LEIA"; exit 1; }
echo "✓ copiado: 4 agentes + skill (SKILL.md) + workflow + _LEIA"
# NOTA: memory/ specs/ CONTRATO-memory.md NÃO são copiados (opção A — ficam em Cérebro 1).

# ─── Passo 2 · Regenerar o RUA (§3) ──────────────────────────────────────────
echo; echo "== Passo 2 · regenerar o RUA =="
python3 .claude/registro/gerar-registro.py || { echo "✗ gerar-registro.py falhou — ver erro acima"; exit 1; }
echo "✓ RUA regenerado (esperado: cobertura 17 → 22 unidades)"

# ─── Passo 3 · Verificação (§4) ──────────────────────────────────────────────
echo; echo "== Passo 3 · verificação =="
fail=0
chk(){ if eval "$2" >/dev/null 2>&1; then echo "  ✓ $1"; else echo "  ✗ $1"; fail=$((fail+1)); fi; }

# 3a · arquivos no lugar
for a in "${AGENTS[@]}"; do chk "agente .claude/agents/$a.md" "[ -f .claude/agents/$a.md ]"; done
chk "skill .claude/skills/sintetizador-evolutivo/SKILL.md" "[ -f .claude/skills/sintetizador-evolutivo/SKILL.md ]"
chk "workflow .claude/workflows/sintetizador-evolutivo.workflow.js" "[ -f .claude/workflows/sintetizador-evolutivo.workflow.js ]"
chk "workflow _LEIA" "[ -f .claude/workflows/_LEIA-sintetizador-evolutivo.md ]"

# 3b · os 5 novos aparecem no RUA
for id in "${AGENTS[@]}" sintetizador-evolutivo; do chk "RUA lista '$id'" "grep -q '$id' '$RUA'"; done

# 3c · seções fail-closed devem seguir vazias — CONFIRA VISUALMENTE:
echo "  → confira que 'Incompletas' / 'Não-instrumentadas' do RUA seguem vazias:"
grep -nA2 -E "Incompletas|Não-instrumentadas" "$RUA" 2>/dev/null | sed 's/^/      /' || true

# resumo
echo
if [ "$fail" -eq 0 ]; then
  echo "✓ Passo 3: todas as checagens automáticas passaram ($fail falhas)."
else
  echo "✗ Passo 3: $fail checagem(ns) falharam — revise acima ou rode o ROLLBACK (abaixo)."
fi

# ─── Próximos passos (NÃO executados — copie/cole após revisar o diff) ────────
cat <<'NEXT'

────────────────────────────────────────────────────────────────────────────
PRÓXIMOS PASSOS (revise o diff de .claude/ antes — git status / git diff):

# (opcional) lint — varre o repo (lento); esperado: sem hits novos do squad
python3 .claude/hooks/mc-lint.py --all 2>&1 | grep -iE "squad-evolutivo|arquiteto-invis|guardiao-grim|disrupter-esc|sintetizador" || echo "✓ sem hits novos"

# Passo 4 · commitar a instalação
git add .claude/agents/ .claude/skills/sintetizador-evolutivo/ \
        .claude/workflows/sintetizador-evolutivo.workflow.js \
        .claude/workflows/_LEIA-sintetizador-evolutivo.md \
        .claude/registro/
git commit -m "feat(squad-evolutivo): instala squad em .claude/ + regenera RUA (R2 selado)"
git push -u origin claude/modest-ptolemy-eFhvz

# Passo 5 · teste — REQUER SESSÃO NOVA (os agentes carregam no boot da sessão):
#   /sintetizador-evolutivo
#   /sintetizador-evolutivo { tema:"...", data:"2026-06-XX", instalado:true }

────────────────────────────────────────────────────────────────────────────
ROLLBACK (se algo saiu errado):

rm -f .claude/agents/arquiteto-invisivel.md .claude/agents/guardiao-grimorio.md \
      .claude/agents/disrupter-escala-zilda.md .claude/agents/sintetizador-auxiliar.md
rm -rf .claude/skills/sintetizador-evolutivo
rm -f .claude/workflows/sintetizador-evolutivo.workflow.js \
      .claude/workflows/_LEIA-sintetizador-evolutivo.md
python3 .claude/registro/gerar-registro.py   # RUA volta a 17
────────────────────────────────────────────────────────────────────────────
NEXT

echo
echo "FIM — cópia + RUA feitos. Commit/push e teste são manuais (acima). Nada foi selado no git por este script."
