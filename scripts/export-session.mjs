#!/usr/bin/env node
// export-session.mjs — converte um transcript JSONL do Claude Code num .md legível.
// Substitui o antigo hack `rec` (Start-Transcript do PowerShell): o Claude Code já
// grava cada sessão em JSONL automaticamente; este script transforma o JSONL cru
// (formato de máquina) num transcript humano (você + Claude + tools).
//
// Uso (rodar da raiz do repo):
//   node scripts/export-session.mjs                 → sessão mais recente
//   node scripts/export-session.mjs latest          → idem
//   node scripts/export-session.mjs <sessionId>     → sessão específica (basta o prefixo)
//   node scripts/export-session.mjs all             → exporta todas
//
// Flags:
//   --thinking        inclui os blocos de raciocínio interno do Claude (default: oculta)
//   --out <dir>       diretório de saída (default: _sessoes/)
//   --full            não trunca resultados de tools (default: trunca em 3000 chars)
//
// Zona Verde: o .md vai para _sessoes/, que está no .gitignore (nunca commitado).

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const positional = args.filter((a) => !a.startsWith('--'));
const outIdx = args.indexOf('--out');
const OUT_DIR = outIdx !== -1 ? args[outIdx + 1] : path.join(process.cwd(), '_sessoes');
const SHOW_THINKING = flags.has('--thinking');
const FULL = flags.has('--full');
const TRUNC = FULL ? Infinity : 3000;

// Claude Code codifica o caminho do projeto trocando `:` `\` `/` por `-`.
const encoded = process.cwd().replace(/[:\\/]/g, '-');
const PROJECT_DIR = path.join(os.homedir(), '.claude', 'projects', encoded);

if (!fs.existsSync(PROJECT_DIR)) {
  console.error(`Diretório de sessões não encontrado: ${PROJECT_DIR}`);
  process.exit(1);
}

const sessionFiles = fs
  .readdirSync(PROJECT_DIR)
  .filter((f) => f.endsWith('.jsonl'))
  .map((f) => ({ f, mtime: fs.statSync(path.join(PROJECT_DIR, f)).mtimeMs }))
  .sort((a, b) => b.mtime - a.mtime);

const selector = (positional[0] || 'latest').toLowerCase();
let targets;
if (selector === 'all') {
  targets = sessionFiles.map((s) => s.f);
} else if (selector === 'latest') {
  targets = sessionFiles.slice(0, 1).map((s) => s.f);
} else {
  targets = sessionFiles.filter((s) => s.f.toLowerCase().startsWith(selector)).map((s) => s.f);
  if (!targets.length) {
    console.error(`Nenhuma sessão começa com "${selector}". Disponíveis:`);
    sessionFiles.forEach((s) => console.error('  ' + s.f.replace('.jsonl', '')));
    process.exit(1);
  }
}

const trunc = (s) => {
  s = String(s);
  return s.length > TRUNC ? s.slice(0, TRUNC) + `\n… [+${s.length - TRUNC} chars truncados]` : s;
};
const hhmm = (ts) => {
  try {
    const d = new Date(ts);
    return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  } catch {
    return '';
  }
};
const ymd = (ts) => {
  const d = new Date(ts);
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}${p(d.getDate())}`;
};

function renderUserContent(content) {
  if (typeof content === 'string') return content.trim();
  if (!Array.isArray(content)) return JSON.stringify(content);
  const parts = [];
  for (const b of content) {
    if (b.type === 'text') parts.push(b.text.trim());
    else if (b.type === 'tool_result') {
      let body = b.content;
      if (Array.isArray(body)) body = body.map((x) => (x.type === 'text' ? x.text : `[${x.type}]`)).join('\n');
      const tag = b.is_error ? '⚠️ resultado (erro)' : '↳ resultado';
      parts.push(`> ${tag}:\n> \`\`\`\n${trunc(body).split('\n').map((l) => '> ' + l).join('\n')}\n> \`\`\``);
    } else if (b.type === 'image') parts.push('[imagem]');
    else parts.push(`[${b.type}]`);
  }
  return parts.join('\n\n');
}

function renderAssistant(content) {
  const parts = [];
  for (const b of content) {
    if (b.type === 'text' && b.text.trim()) parts.push(b.text.trim());
    else if (b.type === 'thinking') {
      if (SHOW_THINKING) parts.push(`<details><summary>💭 raciocínio</summary>\n\n${b.thinking || b.text || ''}\n\n</details>`);
    } else if (b.type === 'tool_use') {
      const inp = b.input || {};
      let detail = '';
      if (b.name === 'Bash' && inp.command) {
        detail = `${inp.description ? `_${inp.description}_\n` : ''}\`\`\`bash\n${trunc(inp.command)}\n\`\`\``;
      } else {
        detail = `\`\`\`json\n${trunc(JSON.stringify(inp, null, 2))}\n\`\`\``;
      }
      parts.push(`🔧 **${b.name}**\n${detail}`);
    }
  }
  return parts.join('\n\n');
}

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const file of targets) {
  const full = path.join(PROJECT_DIR, file);
  const lines = fs.readFileSync(full, 'utf8').split('\n').filter(Boolean);
  const out = [];
  let meta = null;
  let firstTs = null;
  let lastTs = null;
  let turns = 0;

  for (const line of lines) {
    let o;
    try {
      o = JSON.parse(line);
    } catch {
      continue;
    }
    if (o.timestamp) {
      if (!firstTs) firstTs = o.timestamp;
      lastTs = o.timestamp;
    }
    if (o.type === 'user' && o.message) {
      if (!meta) meta = o;
      const body = renderUserContent(o.message.content);
      if (body) {
        // pula tool_result puro do cabeçalho de turno do usuário humano vs. tool feedback
        const isToolFeedback = Array.isArray(o.message.content) && o.message.content.every((b) => b.type === 'tool_result');
        if (isToolFeedback) out.push(body);
        else {
          turns++;
          out.push(`### 🧑 Você — ${hhmm(o.timestamp)}\n\n${body}`);
        }
      }
    } else if (o.type === 'assistant' && o.message) {
      const body = renderAssistant(o.message.content);
      if (body) out.push(`### 🤖 Claude — ${hhmm(o.timestamp)}\n\n${body}`);
    }
  }

  const sid = file.replace('.jsonl', '');
  const header = [
    `# Sessão Claude Code — ${sid.slice(0, 8)}`,
    '',
    `- **Sessão:** \`${sid}\``,
    meta ? `- **Branch:** \`${meta.gitBranch || '—'}\` · **cwd:** \`${meta.cwd || '—'}\`` : '',
    meta ? `- **Versão CC:** ${meta.version || '—'}` : '',
    firstTs ? `- **Início:** ${firstTs} · **Fim:** ${lastTs}` : '',
    `- **Turnos do usuário:** ${turns}${SHOW_THINKING ? ' · _inclui raciocínio_' : ''}`,
    '',
    '---',
    '',
  ]
    .filter((l) => l !== '')
    .join('\n');

  const outName = `sessao-${firstTs ? ymd(firstTs) : 'sem-data'}-${sid.slice(0, 8)}.md`;
  const outPath = path.join(OUT_DIR, outName);
  fs.writeFileSync(outPath, header + '\n' + out.join('\n\n---\n\n') + '\n', 'utf8');
  console.log(`✓ ${outName}  (${turns} turnos, ${lines.length} linhas)  → ${outPath}`);
}
