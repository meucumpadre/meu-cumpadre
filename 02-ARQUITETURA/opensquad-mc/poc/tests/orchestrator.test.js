// Teste de orquestração com estágio de SKILL (NotebookLM).
import { test } from "node:test";
import assert from "node:assert/strict";
import { runSquad } from "../src/orchestrator.js";
import { makeProvider } from "../src/providers.js";

const nullLogger = { events: [], log(e) { this.events.push(e); } };

test("estágio com skill executa e o squad conclui (zona segura)", async () => {
  const squad = {
    nome: "t", zona: "segura", tema: "x", flags: {},
    pipeline: [
      { id: "s1", role: "pesquisador", skill: "notebooklm", skillArgs: { task: "t", sources: ["a"] }, sinais: { confidence: 90, complexity: 10, fraudscore: 1 } },
      { id: "s2", role: "redator", prompt: "p", sinais: { confidence: 90, complexity: 10, fraudscore: 1 } },
    ],
  };
  const logger = { events: [], log(e) { this.events.push(e); } };
  const out = await runSquad({ squad, provider: makeProvider("stub-cloud"), auto: true, logger });
  assert.equal(out.status, "CONCLUIDO");
  assert.ok(logger.events.some((e) => e.ev === "skill_run" && e.skill === "notebooklm"));
  assert.match(out.artifacts[0].text, /Skill `notebooklm`/);
});

test("estágio com sourceFile ingere o arquivo", async () => {
  const squad = {
    nome: "t", zona: "segura", flags: {},
    pipeline: [{ id: "ing", role: "pesquisador", sourceFile: "sources/claude-design-notebooklm.md", sinais: {} }],
  };
  const logger = { events: [], log(e) { this.events.push(e); } };
  const out = await runSquad({ squad, provider: makeProvider("stub-cloud"), auto: true, logger });
  assert.equal(out.status, "CONCLUIDO");
  assert.ok(logger.events.some((e) => e.ev === "source_load"));
  assert.match(out.artifacts[0].text, /Fonte ingerida/);
});

test("sourceFile inexistente faz halt gracioso", async () => {
  const squad = { nome: "t", zona: "segura", flags: {}, pipeline: [{ id: "ing", role: "x", sourceFile: "sources/nao-existe.md", sinais: {} }] };
  const out = await runSquad({ squad, provider: makeProvider("stub-cloud"), auto: true, logger: { events: [], log() {} } });
  assert.match(out.halted, /SOURCE_MISSING/);
});

test("complianceMode advisory não bloqueia (marca para revisão humana)", async () => {
  const squad = {
    nome: "t", zona: "segura", flags: {}, complianceMode: "advisory",
    pipeline: [
      { id: "ing", role: "pesquisador", sourceFile: "examples/post-com-violacoes.md", sinais: {} },
      { id: "rev", role: "revisor", prompt: "x", sinais: {} },
    ],
  };
  const out = await runSquad({ squad, provider: makeProvider("stub-cloud"), auto: true, logger: { events: [], log() {} } });
  assert.equal(out.status, "CONCLUIDO");
  assert.equal(out.complianceAdvisory, true);
  assert.equal(out.compliance.veredito, "REPROVADO");
});

test("complianceMode strict (default) bloqueia violação direta", async () => {
  const squad = {
    nome: "t", zona: "segura", flags: {},
    pipeline: [
      { id: "ing", role: "pesquisador", sourceFile: "examples/post-com-violacoes.md", sinais: {} },
      { id: "rev", role: "revisor", prompt: "x", sinais: {} },
    ],
  };
  const out = await runSquad({ squad, provider: makeProvider("stub-cloud"), auto: true, logger: { events: [], log() {} } });
  assert.match(out.halted, /COMPLIANCE_REPROVADO/);
});

test("skill desconhecida faz halt gracioso", async () => {
  const squad = { nome: "t", zona: "segura", flags: {}, pipeline: [{ id: "s1", role: "x", skill: "inexistente", sinais: {} }] };
  const out = await runSquad({ squad, provider: makeProvider("stub-cloud"), auto: true, logger: { events: [], log() {} } });
  assert.match(out.halted, /SKILL_DESCONHECIDA/);
});
