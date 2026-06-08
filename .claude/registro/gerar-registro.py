#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gerar-registro.py — Gerador do Registro de Unidades Agênticas (RUA · L1 da stack ASE)
=====================================================================================
Implementa a Fase 2 do MC-SPEC-RegistroAgentes-ASE v0.1 (SELADO · PR #19).

PRINCÍPIO ESTRUTURANTE: "gerado, não mantido". O Registro é uma PROJEÇÃO
determinística do `.claude/` (a fonte da verdade são os artefatos), nunca um índice
editado à mão. Rodar 2× no mesmo commit → saída byte-idêntica (sem wall-clock; o
carimbo de origem é o SHA do commit, não Date.now()).

FAIL-CLOSED: uma UA sem os campos ★ obrigatórios NÃO entra no Registro canônico —
vai para `incompletas` com os campos que faltam (visível, não silenciada).

ENTRADA:  .claude/skills/*/SKILL.md (frontmatter `rua:`) · .claude/workflows/*.js
          (meta) · .claude/agents/*.md (frontmatter) · .claude/hooks/*.py
SAÍDA:    .claude/registro/registro-unidades-agenticas.json  (máquina)
          .claude/registro/REGISTRO-Unidades-Agenticas.md     (humano · view)

Zona Verde · zero PII. NÃO injeta, NÃO sela, NÃO escreve no Vault canônico —
gera artefatos derivados na drop-zone .claude/registro/.

Uso:  python3 .claude/registro/gerar-registro.py
Hierarquia: D > C > V · Proof-First · v0.1 PROVISIONAL · 2026-06-03
"""
import json
import os
import re
import subprocess
import sys

try:
    import yaml
except ImportError:
    print("ERRO: pyyaml ausente. `pip install pyyaml` (mesma base do mc-lint).", file=sys.stderr)
    sys.exit(2)

# Raiz do repo = dois níveis acima deste script (.claude/registro/ → repo). Repo-relativo
# (resolve em sessão local E cloud · não usa cwd nem caminho absoluto G:\…).
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
CLAUDE = os.path.join(REPO_ROOT, ".claude")
OUT_DIR = os.path.join(CLAUDE, "registro")

# Campos ★ obrigatórios (MC-SPEC-RegistroAgentes-ASE §3). Sem eles → fail-closed.
REQUIRED = [
    "id", "nome", "tipo", "versao", "status",            # Bloco A
    "papel", "gatilhos", "entrega", "metodo_fonte",       # Bloco B
    "instancia_aci", "nao_confundir_com",                 # Bloco C
    "gate", "zona", "vedacoes_honradas", "para_no_gate",  # Bloco D
    "custo",                                              # Bloco E
]


def commit_sha():
    """Carimbo de origem determinístico (SHA do commit), não wall-clock."""
    try:
        r = subprocess.run(["git", "-C", REPO_ROOT, "rev-parse", "--short", "HEAD"],
                            capture_output=True, text=True, timeout=10)
        return r.stdout.strip() or "[sem-git]"
    except Exception:
        return "[sem-git]"


def read_rua(path):
    """Extrai SÓ o bloco `rua:` do frontmatter (parse robusto).

    Não yaml-parseia o frontmatter inteiro: algumas descrições legadas têm ':' em
    scalar plano e quebram YAML estrito. Como o bloco rua é sempre a ÚLTIMA chave do
    frontmatter, fatiamos de `^rua:` até o fim e parseamos só isso. Retorna o dict
    rua, ou None se não houver bloco rua.
    """
    try:
        txt = open(path, encoding="utf-8", errors="ignore").read()
    except Exception:
        return None
    if not txt.startswith("---"):
        return None
    parts = txt.split("---", 2)
    if len(parts) < 3:
        return None
    fm = parts[1]
    m = re.search(r"(?m)^rua:\s*$", fm)
    if not m:
        return None
    try:
        sub = yaml.safe_load(fm[m.start():])
        return (sub or {}).get("rua")
    except Exception:
        return None


def glob_sorted(base, pattern_dir, suffix):
    """Lista determinística (ordenada) de arquivos."""
    out = []
    d = os.path.join(CLAUDE, base)
    if not os.path.isdir(d):
        return out
    for entry in sorted(os.listdir(d)):
        p = os.path.join(d, entry)
        if pattern_dir and os.path.isdir(p):
            f = os.path.join(p, suffix)
            if os.path.isfile(f):
                out.append(f)
        elif not pattern_dir and entry.endswith(suffix):
            out.append(p)
    return out


def missing_fields(rua):
    # Campo ausente, None ou "" → faltando. Lista vazia [] conta como faltando
    # EXCETO para nao_confundir_com (um "explicitamente nada" é válido: nem toda UA
    # tem risco de confusão · o campo precisa existir, mas pode ser vazio).
    miss = []
    for f in REQUIRED:
        if f not in rua:
            miss.append(f); continue
        v = rua[f]
        if v is None or v == "":
            miss.append(f); continue
        if v == [] and f != "nao_confundir_com":
            miss.append(f)
    return miss


def rel(path):
    return os.path.relpath(path, REPO_ROOT).replace("\\", "/")


def parse_sidecar(path):
    """Lê um sidecar .rua.yml (mecanismo p/ hooks, que não têm frontmatter)."""
    try:
        d = yaml.safe_load(open(path, encoding="utf-8").read())
        return d.get("rua") if isinstance(d, dict) else None
    except Exception:
        return None


def _add(rua, origem, artefato, completas, incompletas, ids):
    faltam = missing_fields(rua)
    rec = dict(rua); rec["_origem"] = origem; rec["_artefato"] = artefato
    rec.setdefault("_artefatos", [origem])
    if faltam:
        incompletas.append({**rec, "campos_faltantes": faltam})
    else:
        completas.append(rec); ids.add(rua.get("id"))


def coletar():
    completas, incompletas, nao = [], [], []
    ids = set()

    # 1) SKILLS — fonte primária do bloco rua
    for f in glob_sorted("skills", True, "SKILL.md"):
        rua = read_rua(f); base = os.path.basename(os.path.dirname(f))
        if isinstance(rua, dict):
            _add(rua, rel(f), "skill", completas, incompletas, ids)
        else:
            nao.append({"id_provavel": base, "tipo": "skill", "origem": rel(f),
                        "motivo": "sem bloco rua: no frontmatter"})

    # 2) AGENTS — frontmatter (bloco rua)
    for f in glob_sorted("agents", False, ".md"):
        rua = read_rua(f); base = os.path.basename(f).replace(".md", "")
        if isinstance(rua, dict):
            _add(rua, rel(f), "agent", completas, incompletas, ids)
        else:
            nao.append({"id_provavel": base, "tipo": "agent", "origem": rel(f),
                        "motivo": "sem bloco rua:"})

    # 3) HOOKS — sidecar <nome>.rua.yml (hook .py não tem frontmatter)
    for f in glob_sorted("hooks", False, ".py"):
        base = os.path.basename(f).replace(".py", "")
        side = os.path.join(CLAUDE, "hooks", base + ".rua.yml")
        rua = parse_sidecar(side) if os.path.isfile(side) else None
        if isinstance(rua, dict):
            rec = dict(rua)
            faltam = missing_fields(rua)
            rec["_origem"] = rel(f); rec["_artefato"] = "hook"
            rec["_artefatos"] = [rel(f), rel(side)]
            if faltam:
                incompletas.append({**rec, "campos_faltantes": faltam})
            else:
                completas.append(rec); ids.add(rua.get("id"))
        else:
            nao.append({"id_provavel": base, "tipo": "hook", "origem": rel(f),
                        "motivo": "hook .py sem sidecar .rua.yml"})

    # 4) WORKFLOWS — executáveis. UMA UA pode ter vários artefatos: dobra o workflow
    #    na UA dona (id == meta.name ou prefixo "id-"). Sem dona → dívida.
    for f in glob_sorted("workflows", False, ".js"):
        txt = open(f, encoding="utf-8", errors="ignore").read()
        m = re.search(r"name:\s*['\"]([^'\"]+)['\"]", txt)
        wname = m.group(1) if m else os.path.basename(f)
        owner = next((u for u in sorted(ids, key=len, reverse=True)
                      if wname == u or wname.startswith(u + "-")), None)
        if owner:
            for rec in completas:
                if rec.get("id") == owner:
                    rec["_artefatos"].append(rel(f) + " (workflow executor)")
                    break
        else:
            nao.append({"id_provavel": wname, "tipo": "workflow", "origem": rel(f),
                        "motivo": "workflow sem UA dona instrumentada"})

    completas.sort(key=lambda r: r.get("id", ""))
    incompletas.sort(key=lambda r: r.get("id", ""))
    nao.sort(key=lambda r: r.get("id_provavel", ""))
    return completas, incompletas, nao


def build_registro():
    completas, incompletas, nao = coletar()
    total_artefatos = len(completas) + len(incompletas) + len(nao)
    return {
        "_meta": {
            "registro": "MC-Registro-Unidades-Agenticas",
            "spec": "MC-SPEC-RegistroAgentes-ASE v0.1 (SELADO · PR #19)",
            "gerado_de_commit": commit_sha(),
            "gerador": ".claude/registro/gerar-registro.py v0.1",
            "principio": "gerado, não mantido · projeção determinística do .claude/",
            "zona": "Verde · zero PII",
            "nota": "derivado · NÃO canônico por si (canônico = os artefatos). NÃO selado, NÃO no Vault.",
        },
        "cobertura": {
            "total_artefatos": total_artefatos,
            "instrumentadas_completas": len(completas),
            "instrumentadas_incompletas": len(incompletas),
            "nao_instrumentadas": len(nao),
            "pct_instrumentado": (round(100 * len(completas) / total_artefatos) if total_artefatos else 0),
        },
        "unidades": completas,
        "incompletas": incompletas,
        "nao_instrumentadas": nao,
    }


def render_md(reg):
    m, cob = reg["_meta"], reg["cobertura"]
    L = []
    L.append("# Registro de Unidades Agênticas (RUA) — view\n")
    L.append("> **GERADO — não editar à mão.** Fonte da verdade = os artefatos em `.claude/`.")
    L.append("> Regenere com `python3 .claude/registro/gerar-registro.py`. "
             "Derivado · NÃO canônico · NÃO selado · Zona Verde.\n")
    L.append(f"- **Commit de origem:** `{m['gerado_de_commit']}`")
    L.append(f"- **Spec:** {m['spec']}")
    L.append(f"- **Cobertura:** {cob['instrumentadas_completas']} completas · "
             f"{cob['instrumentadas_incompletas']} incompletas · "
             f"{cob['nao_instrumentadas']} não-instrumentadas · "
             f"**{cob['pct_instrumentado']}%** de {cob['total_artefatos']} artefatos\n")

    L.append("## Unidades instrumentadas (completas)\n")
    if reg["unidades"]:
        L.append("| id | tipo | gate | zona | instância | custo | para_no_gate | status |")
        L.append("|---|---|---|---|---|---|---|---|")
        for u in reg["unidades"]:
            c = u.get("custo", {})
            custo = f"agente:{'✓' if c.get('gasta_agente') else '✗'} opt-in:{'✓' if c.get('opt_in') else '✗'}"
            png = str(u.get("para_no_gate", "")).split("—")[0].strip()
            L.append(f"| `{u.get('id','')}` | {u.get('tipo','')} | **{u.get('gate','')}** | "
                     f"{u.get('zona','')} | {u.get('instancia_aci','')} | {custo} | {png} | {u.get('status','')} |")
    else:
        L.append("_(nenhuma ainda)_")
    L.append("")

    L.append("## Incompletas (fail-closed — fora do Registro canônico até completar ★)\n")
    if reg["incompletas"]:
        L.append("| id | tipo | campos_faltantes |")
        L.append("|---|---|---|")
        for u in reg["incompletas"]:
            L.append(f"| `{u.get('id','?')}` | {u.get('_artefato','')} | {', '.join(u.get('campos_faltantes', []))} |")
    else:
        L.append("_(nenhuma)_")
    L.append("")

    L.append("## Não-instrumentadas (sem bloco `rua:` — dívida de cobertura)\n")
    if reg["nao_instrumentadas"]:
        L.append("| id provável | tipo | origem | motivo |")
        L.append("|---|---|---|---|")
        for u in reg["nao_instrumentadas"]:
            L.append(f"| `{u['id_provavel']}` | {u['tipo']} | `{u['origem']}` | {u['motivo']} |")
    else:
        L.append("_(nenhuma)_")
    L.append("")
    L.append("---")
    L.append("**D > C > V** · Proof-First · Zona Verde · *gerado, não mantido* · ∞")
    return "\n".join(L) + "\n"


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    reg = build_registro()
    json_path = os.path.join(OUT_DIR, "registro-unidades-agenticas.json")
    md_path = os.path.join(OUT_DIR, "REGISTRO-Unidades-Agenticas.md")
    with open(json_path, "w", encoding="utf-8") as fh:
        json.dump(reg, fh, ensure_ascii=False, indent=2, sort_keys=False, default=str)
        fh.write("\n")
    with open(md_path, "w", encoding="utf-8") as fh:
        fh.write(render_md(reg))
    cob = reg["cobertura"]
    print(f"✅ Registro gerado (commit {reg['_meta']['gerado_de_commit']}):")
    print(f"   {cob['instrumentadas_completas']} completas · {cob['instrumentadas_incompletas']} incompletas · "
          f"{cob['nao_instrumentadas']} não-instrumentadas · {cob['pct_instrumentado']}% de {cob['total_artefatos']}")
    print(f"   → {rel(json_path)}")
    print(f"   → {rel(md_path)}")


if __name__ == "__main__":
    main()
