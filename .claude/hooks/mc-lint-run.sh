#!/bin/sh
LAUNCHER="$(command -v py || command -v python3 || command -v python)"
if [ -z "$LAUNCHER" ]; then
  echo '{"systemMessage":"cofre-lint: nenhum python encontrado - gate inerte nesta maquina."}'
  exit 0
fi
exec "$LAUNCHER" "$(dirname "$0")/mc-lint.py" --block "$@"  
