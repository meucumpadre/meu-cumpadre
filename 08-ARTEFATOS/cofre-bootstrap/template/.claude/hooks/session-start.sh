#!/bin/bash
set -euo pipefail

# Cofre SessionStart Hook (generalizado) — setup Docling p/ extração de PDF.
# Só roda no ambiente remoto do Claude Code (web). Local = no-op.

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo '{"async": false}'
echo "🔧 Cofre SessionStart: preparando ambiente Docling..."

VENV_PATH="${CLAUDE_PROJECT_DIR:-.}/.venv"
PYTHON_BIN="${VENV_PATH}/bin/python"
PIP_BIN="${VENV_PATH}/bin/pip"

if [ ! -d "${VENV_PATH}" ]; then
  echo "📦 Criando venv..."; python3 -m venv "${VENV_PATH}"
fi
echo "📚 Atualizando pip/setuptools..."
"${PIP_BIN}" install --upgrade pip setuptools wheel -q 2>/dev/null || true
echo "📄 Instalando Docling..."
"${PIP_BIN}" install docling -q 2>/dev/null || echo "⚠️  Docling: rede restrita (esperado)."
if "${PYTHON_BIN}" -c "from docling.document_converter import DocumentConverter" 2>/dev/null; then
  echo "✅ Docling pronto."
fi
if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  echo "export DOCLING_VENV='${VENV_PATH}'" >> "${CLAUDE_ENV_FILE}"
  echo "export DOCLING_PY='${PYTHON_BIN}'" >> "${CLAUDE_ENV_FILE}"
fi
echo "✨ SessionStart completo!"
exit 0
