// orchestrator.js — Executa o pipeline do squad com checkpoints + gates.
import { createInterface } from "node:readline/promises";
import { readFile } from "node:fs/promises";
import { stdin, stdout } from "node:process";
import {
  assessRouterEthics,
  checkNoPIIInSafeZone,
  checkZone,
  enforceDCV,
  GovernanceError,
} from "./governance.js";
import { auditCompliance } from "./compliance.js";
import { getSkill } from "./skills/index.js";

function formatSkill(name, out) {
  const linhas = [`## Skill \`${name}\` — status: ${out.status ?? out.mode}`];
  if (out.sintese) linhas.push(out.sintese);
  if (out.nota) linhas.push(`> ${out.nota}`);
  if (out.aviso) linhas.push(`> ⚠️ ${out.aviso}`);
  if (out.sources?.length) linhas.push(`fontes: ${out.sources.join(", ")}`);
  return linhas.join("\n");
}

async function askApproval(stage, ethics) {
  const rl = createInterface({ input: stdin, output: stdout });
  const faixa = `confidence ${ethics.confidence} (${ethics.faixaConfidence}) · complexity ${ethics.complexity} · fraudscore ${ethics.fraudscore}`;
  const ans = await rl.question(
    `\n  ⏸  CHECKPOINT "${stage.id}" — ${faixa}\n     Aprovar e seguir? [s/N] `
  );
  rl.close();
  return /^s(im)?$/i.test(ans.trim());
}

export async function runSquad({ squad, provider, auto = false, logger }) {
  const out = { squad: squad.nome, artifacts: [], started: new Date().toISOString() };

  // Gate de entrada: zona LGPD vs tier do provider.
  const zona = checkZone(squad, provider);
  logger.log({ ev: "zone_ok", zona: zona.zona, provider: provider.id, tier: provider.tier });

  // Gate D>C>V de entrada.
  const dcv = enforceDCV(squad.flags);
  logger.log({ ev: "dcv", ...dcv });
  if (dcv.decisao.startsWith("HALT")) {
    logger.log({ ev: "halt", motivo: dcv.nota });
    out.halted = dcv.decisao;
    return out;
  }

  const context = { tema: squad.tema, zona: zona.zona, anteriores: [] };

  for (const stage of squad.pipeline) {
    logger.log({ ev: "stage_start", stage: stage.id, role: stage.role });

    // Router-Ethics tripartite por stage.
    const ethics = assessRouterEthics(stage, squad);
    logger.log({ ev: "router_ethics", stage: stage.id, ...ethics });

    // Checkpoint: handoff automático se threshold cruzado, ou se o stage exige.
    const precisaHumano = ethics.handoff || stage.checkpoint === true;
    if (precisaHumano) {
      if (auto) {
        logger.log({
          ev: "checkpoint_auto_approve",
          stage: stage.id,
          handoff: ethics.handoff,
          motivos: ethics.motivos,
          nota: "modo --auto: aprovação humana SIMULADA (em produção, pausa real)",
        });
      } else {
        const ok = await askApproval(stage, ethics);
        logger.log({ ev: "checkpoint_decision", stage: stage.id, aprovado: ok });
        if (!ok) {
          out.halted = `REJEITADO_NO_CHECKPOINT:${stage.id}`;
          logger.log({ ev: "halt", motivo: out.halted });
          return out;
        }
      }
    }

    // Execução do estágio: fonte local (sourceFile) OU skill OU geração LLM.
    let res;
    if (stage.sourceFile) {
      try {
        const content = await readFile(stage.sourceFile, "utf8");
        logger.log({ ev: "source_load", stage: stage.id, file: stage.sourceFile, bytes: content.length });
        res = { text: `## Fonte ingerida (\`${stage.sourceFile}\`)\n\n${content}`, provider: "source:file", mode: "SOURCE" };
      } catch (e) {
        out.halted = `SOURCE_MISSING:${stage.sourceFile}`;
        logger.log({ ev: "gate_block", stage: stage.id, code: out.halted, msg: e.message });
        return out;
      }
    } else if (stage.skill) {
      const skill = getSkill(stage.skill);
      if (!skill) {
        out.halted = `SKILL_DESCONHECIDA:${stage.skill}`;
        logger.log({ ev: "halt", motivo: out.halted });
        return out;
      }
      try {
        const skillOut = await skill.run({ ...(stage.skillArgs ?? {}), zona: zona.zona });
        logger.log({ ev: "skill_run", stage: stage.id, skill: stage.skill, status: skillOut.status ?? skillOut.mode });
        res = { text: formatSkill(stage.skill, skillOut), provider: `skill:${stage.skill}`, mode: skillOut.status ?? skillOut.mode };
      } catch (e) {
        out.halted = `SKILL_BLOCK:${stage.skill}`;
        logger.log({ ev: "gate_block", stage: stage.id, code: out.halted, msg: e.message });
        return out;
      }
    } else {
      res = await provider.generate({ role: stage.role, prompt: stage.prompt, context });
    }

    // Gate de saída: anti-vazamento PII na zona segura.
    try {
      checkNoPIIInSafeZone(squad, res.text);
    } catch (e) {
      if (e instanceof GovernanceError) {
        logger.log({ ev: "gate_block", stage: stage.id, code: e.code, msg: e.message });
        out.halted = e.code;
        return out;
      }
      throw e;
    }

    const artifact = { stage: stage.id, role: stage.role, provider: res.provider, mode: res.mode, text: res.text };
    out.artifacts.push(artifact);
    context.anteriores.push(artifact);
    logger.log({ ev: "stage_done", stage: stage.id, bytes: res.text.length });

    // Agente Revisor-Compliance: audita o CONTEÚDO PRODUZIDO (exclui notas do
    // próprio revisor, que naturalmente citam as frases proibidas em negação).
    if (stage.role === "revisor") {
      const corpo = out.artifacts.filter((a) => a.role !== "revisor").map((a) => a.text).join("\n");
      const audit = auditCompliance(corpo);
      out.compliance = audit;
      logger.log({
        ev: "compliance_audit",
        veredito: audit.veredito,
        criticos: audit.criticos.length,
        altos: audit.altos.length,
        avisos: audit.avisos.length,
        achados: audit.achados.map((a) => `${a.id}/${a.sev}`),
      });
      if (audit.veredito === "REPROVADO") {
        if ((squad.complianceMode ?? "strict") === "advisory") {
          out.complianceAdvisory = true;
          logger.log({
            ev: "compliance_advisory",
            veredito: audit.veredito,
            criticos: audit.criticos.map((c) => c.id),
            nota: "modo advisory (documento interno): não bloqueia, requer revisão humana",
          });
        } else {
          out.halted = "COMPLIANCE_REPROVADO";
          logger.log({ ev: "halt", motivo: out.halted, criticos: audit.criticos });
          return out;
        }
      }
    }
  }

  out.finished = new Date().toISOString();
  out.status = "CONCLUIDO";
  return out;
}
