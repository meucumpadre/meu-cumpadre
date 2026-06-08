// providers.js — Abstração de LLM com provider REAL (Gemini) + stub offline.
//
// Tiers (roteamento por zona LGPD — ver governance.js):
//   'cloud'        => Gemini 2.5 Flash / Claude (zona SEGURA, dado não-sensível)
//   'self-hosted'  => Llama 4 Scout GCP Brasil (zona SENSÍVEL, dado pessoal)
//   'ethical'      => Claude Sonnet via MCP (decisões éticas)
//
// Segurança: chaves vêm de .env (gitignored), NUNCA hardcoded. Sem chave/rede,
// o provider faz FALLBACK gracioso para o stub determinístico (modo offline).
import { loadEnv, getKey } from "./env.js";

loadEnv();

// --- System prompt MC por papel (guardrails embutidos) ----------------------
const GUARDRAIL = [
  "Você atua para o Meu Cumpadre (infraestrutura de simetria informacional previdenciária).",
  "REGRAS INVIOLÁVEIS: nunca prometa prazo de concessão INSS nem resultado jurídico (firewall OAB).",
  "MC não é legaltech, escritório com IA nem marketplace de advogados.",
  "Proof-First: nenhuma estatística sem fonte — onde faltar fonte, escreva [FONTE PENDENTE].",
  "Preços: Φ₁ R$ 2.200 (4×) / CadÚnico R$ 1.500. Nunca cite R$ 1.500 standard ou R$ 900.",
  "Hierarquia: Dignidade > Compliance > Viabilidade. Teste Zilda-STF (Dona Zilda 68 + ministro STF).",
].join(" ");

const PAPEL = {
  pesquisador: "Você é o Pesquisador: levante fontes, ângulos e lacunas. Marque o que falta de fonte.",
  estrategista: "Você é o Estrategista: defina estrutura editorial e tom.",
  redator: "Você é o Redator: produza o conteúdo final, claro e digno.",
  designer: "Você é o Designer: produza um briefing visual (não imagem).",
  revisor: "Você é o Revisor de compliance: verifique as regras invioláveis e dê veredito.",
};

function buildPrompt({ role, prompt, context }) {
  const anteriores = (context.anteriores ?? []).map((a) => `# ${a.role}\n${a.text}`).join("\n\n");
  const system = [GUARDRAIL, PAPEL[role] ?? `Você é o agente "${role}".`].join(" ");
  const user = [
    context.tema ? `Tema: ${context.tema}.` : "",
    anteriores ? `Contexto dos agentes anteriores:\n${anteriores}` : "",
    `Tarefa: ${prompt}`,
  ].filter(Boolean).join("\n\n");
  return { system, user };
}

// --- Stub determinístico (offline · Proof-First) ----------------------------
function stubGenerate(role, context) {
  const tema = context.tema ?? "(tema não informado)";
  const M = {
    pesquisador: `## Pesquisa — ${tema}\n- Fontes a coletar: Lei 8.213/91, dados primários, jurisprudência.\n- Métrica de impacto sem fonte verificável → [FONTE PENDENTE]\n- Ângulo: assimetria informacional do hipervulnerável.`,
    estrategista: `## Estratégia editorial — ${tema}\n- Audiência: Teste Zilda-STF.\n- Tom: missionário, sem promessa de resultado (firewall OAB).\n- Estrutura: 6 cards (gancho→dor→inversão→prova→CTA→assinatura).`,
    redator: `## Carrossel — ${tema}\nCard 1: "O sistema é digital. Você não foi avisado."\nCard 2: milhões fora da camada digital [FONTE PENDENTE].\nCard 3: MC é infraestrutura de simetria, não escritório.\nCard 4: D > C > V. Provérbios 31:8.\nCard 5: "Sua travessia administrativa, equipada."\nCard 6: Meu Cumpadre.`,
    designer: `## Briefing visual — ${tema}\n- 6 frames 1080×1350, contraste AA, legível para baixa visão.\n- Sem dado pessoal em imagem. Marca anti-injection (ADR-016).`,
    revisor: `## Revisão compliance\n- [OK] Sem promessa de prazo/resultado.\n- [OK] Preços corretos (ADR-007 v3.5).\n- Veredito: APROVADO PARA CHECKPOINT HUMANO.`,
  };
  return M[role] ?? `## ${role}\n(saída stub para "${tema}")`;
}

// --- Provider Gemini real (Generative Language API) -------------------------
async function callGemini({ model, apiKey, system, user }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ parts: [{ text: user }] }],
      // Gemini 2.5 Flash é "pensante": os tokens de pensamento contam no
      // maxOutputTokens. Com limite baixo, o pensamento engole o texto e a
      // saída vem truncada. Desligamos o pensamento (thinkingBudget: 0) para
      // tarefas de geração e damos folga de tokens.
      generationConfig: { temperature: 0.7, maxOutputTokens: 8192, thinkingConfig: { thinkingBudget: 0 } },
    }),
  });
  if (!res.ok) throw new Error(`Gemini HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const json = await res.json();
  const out = json?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ?? "";
  if (!out) throw new Error("Gemini: resposta vazia");
  return out;
}

// --- Provider Claude real (Anthropic Messages API) --------------------------
async function callAnthropic({ model, apiKey, system, user }) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: 4096,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });
  if (!res.ok) throw new Error(`Anthropic HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const json = await res.json();
  const out = (json?.content ?? []).filter((b) => b.type === "text").map((b) => b.text).join("");
  if (!out) throw new Error("Anthropic: resposta vazia");
  return out;
}

const TIERS = {
  "gemini-2.5-flash": "cloud",
  "claude-sonnet": "cloud",
  "claude-ethical-mcp": "ethical",
  "llama4-scout-gcp-br": "self-hosted",
  "stub-cloud": "cloud",
  "stub-self-hosted": "self-hosted",
};

// Providers com chamada real. keyEnv = variável de ambiente da chave.
const LIVE = {
  "gemini-2.5-flash": { call: callGemini, model: "gemini-2.5-flash", keyEnv: "GEMINI_API_KEY", tag: "GEMINI" },
  "claude-sonnet": { call: callAnthropic, model: "claude-sonnet-4-6", keyEnv: "ANTHROPIC_API_KEY", tag: "CLAUDE" },
};

export function makeProvider(id) {
  const tier = TIERS[id];
  if (!tier) throw new Error(`Provider desconhecido: ${id}`);
  const live = LIVE[id];

  return {
    id,
    tier,
    async generate({ role, prompt, context }) {
      if (live) {
        const apiKey = getKey(live.keyEnv);
        const { system, user } = buildPrompt({ role, prompt, context });
        if (apiKey) {
          try {
            const text = await live.call({ model: live.model, apiKey, system, user });
            return { text, provider: id, mode: `LIVE_${live.tag}` };
          } catch (e) {
            return { text: stubGenerate(role, context), provider: id, mode: `STUB_FALLBACK (${e.message})` };
          }
        }
        return { text: stubGenerate(role, context), provider: id, mode: `STUB_FALLBACK (sem ${live.keyEnv})` };
      }
      // Demais providers no PoC: stub offline.
      return { text: stubGenerate(role, context), provider: id, mode: "STUB_OFFLINE" };
    },
  };
}
