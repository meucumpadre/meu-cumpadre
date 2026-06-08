// env.js — carrega .env (se existir) sem dependência externa.
// Node >=20.6 tem process.loadEnvFile. Segredos NUNCA são commitados (.env é gitignored).
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

export function loadEnv() {
  try {
    process.loadEnvFile(join(ROOT, ".env"));
  } catch {
    // sem .env — segue com process.env do sistema (ou stub)
  }
}

export function getKey(name) {
  const v = process.env[name];
  return v && v.trim() ? v.trim() : null;
}
