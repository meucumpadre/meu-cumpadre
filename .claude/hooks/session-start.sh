#!/bin/bash
set -euo pipefail

# MC SessionStart Hook: Setup Docling in isolated venv
# Purpose: Make Docling available for PDF extraction tasks
# Mode: Synchronous (guarantees dependencies before session starts)

# Only run in Claude Code remote environment
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo '{"async": false}'

echo "🔧 MC SessionStart: Setting up Docling environment..."

# Define venv path
VENV_PATH="${CLAUDE_PROJECT_DIR:-.}/.venv"
PYTHON_BIN="${VENV_PATH}/bin/python"
PIP_BIN="${VENV_PATH}/bin/pip"

# 1. Create venv if it doesn't exist
if [ ! -d "${VENV_PATH}" ]; then
  echo "📦 Creating Python venv..."
  python3 -m venv "${VENV_PATH}"
fi

# 2. Upgrade pip, setuptools, wheel (avoid Debian patch issues)
echo "📚 Upgrading pip/setuptools..."
"${PIP_BIN}" install --upgrade pip setuptools wheel -q 2>/dev/null || true

# 3. Install Docling (with safeguards for restricted network)
echo "📄 Installing Docling..."
"${PIP_BIN}" install docling -q 2>/dev/null || {
  echo "⚠️  Docling install had issues (likely network restricted)"
  echo "    This is expected in network-restricted environments"
  echo "    Docling will be available via: ${PIP_BIN} when needed"
}

# 4. Verify Docling import
if "${PYTHON_BIN}" -c "from docling.document_converter import DocumentConverter" 2>/dev/null; then
  echo "✅ Docling ready: ${PIP_BIN}"
else
  echo "⚠️  Docling import failed (network likely restricted)"
fi

# 5. Store venv path in environment
if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  echo "export DOCLING_VENV='${VENV_PATH}'" >> "${CLAUDE_ENV_FILE}"
  echo "export DOCLING_PY='${PYTHON_BIN}'" >> "${CLAUDE_ENV_FILE}"
fi

echo "✨ SessionStart hook complete!"
exit 0
