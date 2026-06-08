// skills/index.js — Registro de skills acionáveis por um estágio do pipeline.
// Um estágio com `"skill": "<nome>"` executa a skill em vez da geração LLM.
import { makeNotebookLM } from "./notebooklm.js";

const REGISTRY = {
  notebooklm: makeNotebookLM,
};

export function getSkill(name) {
  const factory = REGISTRY[name];
  return factory ? factory() : null;
}

export const SKILL_NAMES = Object.keys(REGISTRY);
