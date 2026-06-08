// Testes de provider Gemini (fallback) e skill NotebookLM (guarda de zona).
import { test } from "node:test";
import assert from "node:assert/strict";
import { makeProvider } from "../src/providers.js";
import { makeNotebookLM } from "../src/skills/notebooklm.js";

test("gemini sem chave faz fallback gracioso ao stub", async () => {
  delete process.env.GEMINI_API_KEY;
  const p = makeProvider("gemini-2.5-flash");
  const r = await p.generate({ role: "redator", prompt: "x", context: { tema: "t", anteriores: [] } });
  assert.match(r.mode, /STUB_FALLBACK/);
  assert.ok(r.text.length > 0);
});

test("claude sem chave faz fallback gracioso ao stub", async () => {
  delete process.env.ANTHROPIC_API_KEY;
  const p = makeProvider("claude-sonnet");
  const r = await p.generate({ role: "estrategista", prompt: "x", context: { tema: "t", anteriores: [] } });
  assert.match(r.mode, /STUB_FALLBACK \(sem ANTHROPIC_API_KEY\)/);
  assert.ok(r.text.length > 0);
});

test("provider desconhecido lança erro", () => {
  assert.throws(() => makeProvider("inexistente"));
});

test("NotebookLM recusa zona sensível (ADR-009a)", async () => {
  const nb = makeNotebookLM();
  await assert.rejects(() => nb.run({ sources: [], task: "x", zona: "sensivel" }), /zona SEGURA/);
});

test("NotebookLM stub retorna placeholder honesto em zona segura", async () => {
  const nb = makeNotebookLM();
  const r = await nb.run({ sources: ["doc1"], task: "sintetizar", zona: "segura" });
  assert.equal(r.status, "STUB");
});
