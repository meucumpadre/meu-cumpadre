// Testes do Revisor-Compliance — um caso positivo por regra + cobertura.
// Rodar: node --test
import { test } from "node:test";
import assert from "node:assert/strict";
import { auditCompliance, REGRA_IDS } from "../src/compliance.js";

// Cada regra mapeada a um trecho que DEVE dispará-la.
const SAMPLES = {
  "POS-01": "Somos a melhor legaltech do Brasil.",
  "POS-02": "Na prática, um escritório com IA.",
  "POS-03": "O maior marketplace de advogados.",
  "OAB-01": "A gente cuida do prazo de concessão pra você.",
  "OAB-02": "Garantimos o resultado do seu benefício.",
  "OAB-03": "Cobramos um success fee ao final.",
  "CUS-01": "Guardamos a senha gov.br no ClickUp do cliente.",
  "CUS-02": "Vamos reter as credenciais até o pagamento.",
  "INA-01": "Em caso de inadimplência, vamos cancelar o caso em D+30.",
  "INA-02": "Durante a inadimplência, vamos suspender a comunicação processual.",
  "PRC-01": "O plano standard custa R$ 1.500.",
  "PRC-02": "O CadÚnico sai por R$ 900.",
  "PRC-03": "Pague R$ 2.200 em 3x sem juros.",
  "PRC-04": "O Φ₂ é uma cobrança extra do cliente.",
  "PRC-05": "O licenciamento Ψ₁ custa de R$ 200 a 800.",
  "PRC-06": "A assinatura Ψ₂ fica entre R$ 299 e 599.",
  "VAL-01": "Nosso valuation equivale ao ARR projetado.",
  "PES-01": "Fale com a Juliana Alencar.",
  "PES-02": "O Alessandro é servidor INSS ativo.",
  "STK-01": "Rodamos a triagem no DeepSeek.",
  "STK-02": "Assinatura via Autentique.",
  "STK-03": "Automação ligada no Zapier.",
  "RTR-01": "Usamos Router-Ethics 9.0 com 91 nós.",
};

// Cobertura: nenhuma regra sem caso de teste.
test("cobertura: toda regra tem um caso de teste", () => {
  const semCaso = REGRA_IDS.filter((id) => !(id in SAMPLES));
  assert.deepEqual(semCaso, [], `Regras sem caso de teste: ${semCaso.join(", ")}`);
});

// Cada caso dispara a sua regra.
for (const [id, texto] of Object.entries(SAMPLES)) {
  test(`regra ${id} dispara no caso positivo`, () => {
    const ids = auditCompliance(texto).achados.map((a) => a.id);
    assert.ok(ids.includes(id), `esperava ${id} em [${ids.join(", ")}] para: "${texto}"`);
  });
}

test("texto limpo é APROVADO", () => {
  const limpo = "Meu Cumpadre é infraestrutura de simetria informacional. D > C > V. Provérbios 31:8.";
  const r = auditCompliance(limpo);
  assert.equal(r.veredito, "APROVADO");
  assert.equal(r.total, 0);
});

test("crítico => REPROVADO; só alto => HANDOFF_HUMANO", () => {
  assert.equal(auditCompliance(SAMPLES["POS-01"]).veredito, "REPROVADO");
  assert.equal(auditCompliance(SAMPLES["STK-01"]).veredito, "HANDOFF_HUMANO");
});

test("guardrail/negação NÃO reprova (ciência de negação)", () => {
  const guardrail = "NUNCA atuar como legaltech, escritório com IA ou marketplace de advogados. Nunca prometer prazo de concessão.";
  const r = auditCompliance(guardrail);
  assert.equal(r.veredito, "APROVADO");
  assert.equal(r.criticos.length, 0);
  // mas as menções continuam visíveis como AVISO de contexto
  assert.ok(r.achados.some((a) => a.contexto === "negacao"));
});

test("violação direta (sem negação) ainda reprova", () => {
  assert.equal(auditCompliance("Somos a melhor legaltech.").veredito, "REPROVADO");
});
