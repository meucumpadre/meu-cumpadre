#!/usr/bin/env node
// cli.js — Entrada do PoC MC-Squad.
// Uso:
//   node src/cli.js run <squad.json> [--auto] [--provider <id>]
//   node src/cli.js list
import { readFile, readdir, mkdir, writeFile, appendFile } from "node:fs/promises";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { makeProvider } from "./providers.js";
import { runSquad } from "./orchestrator.js";
import { GovernanceError } from "./governance.js";
import { auditCompliance } from "./compliance.js";
import { renderDashboard } from "./dashboard.js";
import { loadEnv, getKey } from "./env.js";

loadEnv();

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

function makeLogger(file) {
  const events = [];
  return {
    events,
    async init() {
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, "");
    },
    log(entry) {
      const e = { ts: new Date().toISOString(), ...entry };
      events.push(e);
      // eslint-disable-next-line no-console
      console.log("  · " + (entry.ev ?? "log") + (entry.stage ? `[${entry.stage}]` : ""));
      appendFile(file, JSON.stringify(e) + "\n").catch(() => {});
    },
  };
}

async function cmdList() {
  const dir = join(ROOT, "squads");
  const files = (await readdir(dir)).filter((f) => f.endsWith(".json"));
  console.log("Squads disponíveis:");
  for (const f of files) {
    const def = JSON.parse(await readFile(join(dir, f), "utf8"));
    console.log(`  - ${f}  [zona: ${def.zona ?? "segura"}]  ${def.nome}`);
  }
}

async function cmdRun(squadPath, opts) {
  const def = JSON.parse(await readFile(squadPath, "utf8"));
  const providerId = opts.provider ?? def.providerSugerido ?? "stub-cloud";
  const provider = makeProvider(providerId);

  const base = opts.out ?? basename(squadPath, ".json");
  const logFile = join(ROOT, "out", `${base}.audit.jsonl`);
  const logger = makeLogger(logFile);
  await logger.init();

  console.log(`\n▶ Rodando squad: ${def.nome}`);
  console.log(`  zona=${def.zona ?? "segura"} · provider=${providerId} · modo=${opts.auto ? "--auto" : "interativo"}`);

  try {
    const result = await runSquad({ squad: def, provider, auto: opts.auto, logger });

    const outFile = join(ROOT, "out", `${base}.result.md`);
    await writeFile(outFile, renderResult(result));

    const dashFile = join(ROOT, "out", `${base}.dashboard.html`);
    await writeFile(dashFile, renderDashboard({ squadName: def.nome, events: logger.events }));

    console.log(`\n  status=${result.status ?? result.halted ?? "?"}`);
    console.log(`  artefato:  ${outFile}`);
    console.log(`  dashboard: ${dashFile}`);
    console.log(`  audit:     ${logFile}`);
    if (result.halted) process.exitCode = 2;
  } catch (e) {
    if (e instanceof GovernanceError) {
      console.error(`\n  ⛔ GATE DE GOVERNANÇA [${e.code}]: ${e.message}`);
      logger.log({ ev: "gate_block_fatal", code: e.code, msg: e.message });
      process.exitCode = 3;
    } else {
      throw e;
    }
  }
}

function renderResult(result) {
  const lines = [`# Resultado — ${result.squad}`, ``, `status: ${result.status ?? result.halted}`, ``];
  if (result.compliance) {
    const c = result.compliance;
    const adv = result.complianceAdvisory ? " · MODO ADVISORY (não bloqueia · revisão humana decide)" : "";
    lines.push(`## Compliance: ${c.veredito} (${c.criticos.length} crítico · ${c.altos.length} alto · ${c.avisos.length} aviso)${adv}`);
    for (const a of c.achados) lines.push(`- [${a.sev}] ${a.id}: ${a.msg}`);
    lines.push(``);
  }
  for (const a of result.artifacts) {
    lines.push(`---`, `> stage \`${a.stage}\` · role \`${a.role}\` · provider \`${a.provider}\` (${a.mode})`, ``, a.text, ``);
  }
  return lines.join("\n");
}

function cmdKeys() {
  const mask = (v) => (v ? `configurada (${v.length} chars)` : "ausente");
  console.log("Diagnóstico de credenciais (valores NUNCA exibidos):");
  console.log(`  GEMINI_API_KEY .................. ${mask(getKey("GEMINI_API_KEY"))}`);
  console.log(`  ANTHROPIC_API_KEY .............. ${mask(getKey("ANTHROPIC_API_KEY"))}`);
  console.log(`  NOTEBOOKLM_MODE ................. ${process.env.NOTEBOOKLM_MODE || "stub (default)"}`);
  console.log(`  AUTOCONTENT_API_KEY ............ ${mask(getKey("AUTOCONTENT_API_KEY"))}`);
  console.log(`  GCP_PROJECT .................... ${getKey("GCP_PROJECT") ? "configurado" : "ausente"}`);
  console.log(`  GOOGLE_APPLICATION_CREDENTIALS .. ${getKey("GOOGLE_APPLICATION_CREDENTIALS") ? "configurado" : "ausente"}`);
  console.log("\nSem GEMINI_API_KEY o provider gemini-2.5-flash faz fallback gracioso ao stub.");
}

async function cmdDashboard(auditFile) {
  const raw = await readFile(auditFile, "utf8");
  const events = raw.split(/\n/).filter(Boolean).map((l) => JSON.parse(l));
  const out = auditFile.replace(/\.audit\.jsonl$/, "").replace(/\.jsonl$/, "") + ".dashboard.html";
  await writeFile(out, renderDashboard({ squadName: basename(auditFile), events }));
  console.log(`dashboard: ${out}`);
}

async function cmdCheck(file) {
  const text = await readFile(file, "utf8");
  const c = auditCompliance(text);
  console.log(`\nRevisor-Compliance — ${file}`);
  console.log(`veredito: ${c.veredito} · ${c.criticos.length} crítico · ${c.altos.length} alto · ${c.avisos.length} aviso\n`);
  for (const a of c.achados) console.log(`  [${a.sev}] ${a.id}: ${a.msg}`);
  if (c.total === 0) console.log("  (nenhum achado)");
  process.exitCode = c.veredito === "REPROVADO" ? 3 : c.veredito === "HANDOFF_HUMANO" ? 2 : 0;
}

function parseArgs(argv) {
  const opts = { auto: false };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--auto") opts.auto = true;
    else if (a === "--provider") opts.provider = argv[++i];
    else if (a === "--out") opts.out = argv[++i];
    else rest.push(a);
  }
  return { opts, rest };
}

async function main() {
  const [cmd, ...raw] = process.argv.slice(2);
  const { opts, rest } = parseArgs(raw);
  if (cmd === "list") return cmdList();
  if (cmd === "keys") return cmdKeys();
  if (cmd === "check") {
    if (!rest[0]) {
      console.error("Uso: mc-squad check <arquivo>");
      process.exitCode = 1;
      return;
    }
    return cmdCheck(rest[0]);
  }
  if (cmd === "dashboard") {
    if (!rest[0]) {
      console.error("Uso: mc-squad dashboard <audit.jsonl>");
      process.exitCode = 1;
      return;
    }
    return cmdDashboard(rest[0]);
  }
  if (cmd === "run") {
    if (!rest[0]) {
      console.error("Uso: mc-squad run <squad.json> [--auto] [--provider <id>]");
      process.exitCode = 1;
      return;
    }
    return cmdRun(rest[0], opts);
  }
  console.error("Comandos: run <squad.json> [--auto] [--provider <id>] | dashboard <audit.jsonl> | check <arquivo> | keys | list");
  process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
