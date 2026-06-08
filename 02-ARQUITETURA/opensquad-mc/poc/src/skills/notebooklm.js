// skills/notebooklm.js — Skill de pesquisa/áudio via NotebookLM (adapter plugável).
//
// REALIDADE 2026 (Proof-First — não fabricar): NÃO existe API key pública de
// consumidor para o NotebookLM. Os caminhos reais são:
//   - 'enterprise' : NotebookLM Enterprise via Google Cloud/Vertex (service account,
//                    NÃO api key). Requer GCP project + GOOGLE_APPLICATION_CREDENTIALS.
//                    Doc: https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise
//   - 'autocontent': 3rd-party (AutoContent API), tem API key própria. https://autocontentapi.com
//   - 'cli'        : lib não-oficial (teng-lin/notebooklm-py) — endpoints internos, frágil.
//   - 'stub'       : offline (default) — não chama nada, retorna placeholder honesto.
//
// LGPD: uso restrito a ZONA SEGURA (pesquisa/conteúdo não-sensível). NUNCA enviar
// CPF/NB/CID/CNIS a serviço externo (ADR-009a). Quem chama deve garantir a zona.
import { getKey } from "../env.js";

export function makeNotebookLM() {
  const mode = (process.env.NOTEBOOKLM_MODE || "stub").toLowerCase();

  return {
    mode,
    /**
     * Sintetiza/pesquisa fontes (e, no enterprise/autocontent, pode gerar áudio).
     * @param {{ sources: string[], task: string, zona?: string }} req
     */
    async run({ sources = [], task = "", zona = "segura" }) {
      if (zona !== "segura") {
        throw new Error("NotebookLM bloqueado: só zona SEGURA (ADR-009a). Dado sensível não vai a serviço externo.");
      }

      if (mode === "autocontent") {
        const key = getKey("AUTOCONTENT_API_KEY");
        if (!key) return fallback("autocontent", "sem AUTOCONTENT_API_KEY");
        // Costura real (3rd-party). Mantido como seam — não chamamos sem chave/rede.
        return {
          mode: "autocontent",
          status: "PRONTO_PARA_COSTURA",
          nota: "Plugar POST https://api.autocontentapi.com/... com a chave. Ver docs.",
          task,
          sources,
        };
      }

      if (mode === "enterprise") {
        const proj = getKey("GCP_PROJECT");
        const cred = getKey("GOOGLE_APPLICATION_CREDENTIALS");
        if (!proj || !cred) return fallback("enterprise", "faltam GCP_PROJECT/GOOGLE_APPLICATION_CREDENTIALS");
        return {
          mode: "enterprise",
          status: "PRONTO_PARA_COSTURA",
          nota: "Service account Vertex/Agentspace (NÃO api key). Ver doc NotebookLM Enterprise.",
          task,
          sources,
        };
      }

      if (mode === "cli") {
        return {
          mode: "cli",
          status: "NAO_OFICIAL",
          aviso: "Lib não-oficial (notebooklm-py) usa endpoints internos do Google — pode quebrar sem aviso. Usar sob risco.",
          task,
          sources,
        };
      }

      return fallback("stub", "modo offline padrão");
    },
  };
}

function fallback(mode, motivo) {
  return {
    mode,
    status: "STUB",
    motivo,
    sintese: "[FONTE PENDENTE] Síntese NotebookLM não executada (stub offline). Configure NOTEBOOKLM_MODE para integrar.",
  };
}
