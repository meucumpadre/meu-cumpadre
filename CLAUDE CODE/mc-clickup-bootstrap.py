#!/usr/bin/env python3
"""
mc-clickup-bootstrap.py
Cria 9 custom fields × 10 listas no folder
"🏛️ CASOS B2C — Jornada E0-E7" via API REST do ClickUp.

Idempotente: GET /list/{id}/field antes de cada POST. Se já existir → pula.
Rate limit: 0.5s entre chamadas.
"""
import json
import sys
import time
import urllib.request
import urllib.error
import datetime
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")
except Exception:
    pass

TOKEN = "pk_84871873_IB5GOZW5YB1MIG874N9NLQQIZX9XJSX3"
BASE = "https://api.clickup.com/api/v2"
RATE_LIMIT_SEC = 0.5
TIMEOUT_SEC = 30

LISTS = {
    "901326912219": "E1 - Triagem",
    "901326912220": "E2 - Deliberação",
    "901326912221": "E3 - Coleta Docs (S1)",
    "901326912222": "E3 - QA Dossiê (transição S1→S2)",
    "901326912223": "E4 - Protocolo",
    "901326912224": "E5 - Acompanhamento",
    "901326912225": "E6 - Desfecho",
    "901326912226": "E7 - Guardião Ativo",
    "901326912227": "Concluídos (deferidos)",
    "901326912228": "Orientados (não entraram)",
    "901326912229": "Indeferidos (encerrados)",
}


def dropdown(name, options):
    return {
        "name": name,
        "type": "drop_down",
        "type_config": {
            "options": [
                {"name": o, "orderindex": i} for i, o in enumerate(options)
            ]
        },
        "required": False,
    }


def simple(name, type_):
    return {"name": name, "type": type_, "required": False}


FIELDS = [
    dropdown("vertical", [
        "Híbrida", "Rural", "Urbana", "Especial",
        "B31-Incapacidade", "B32-Invalidez", "Acidentário",
        "BPC-Idoso", "BPC-PcD", "Pensão-B21", "Maternidade-B80", "Gen",
    ]),
    simple("risco_confidence", "number"),
    dropdown("zona_router_ethics", [
        "Verde-70plus", "Amarela-40-70", "Vermelha-menos40",
    ]),
    simple("fraudscore", "number"),
    dropdown("rota", ["A", "B", "C", "NAO-ENTRA", "BLOQUEADO"]),
    dropdown("phi1_modalidade", ["Standard-R$2200", "CadUnico-R$1500"]),
    dropdown("parcelas_pagas", [
        "0/3", "1/3", "2/3", "3/3",
        "0/5", "1/5", "2/5", "3/5", "4/5", "5/5",
    ]),
    simple("drive_folder_url", "url"),
    simple("urgencia_dib", "checkbox"),
]

TOTAL_OPS = len(LISTS) * len(FIELDS)  # 99 (11 listas × 9 campos)


def api_request(method, url, body=None):
    data = json.dumps(body).encode("utf-8") if body is not None else None
    req = urllib.request.Request(
        url,
        method=method,
        headers={
            "Authorization": TOKEN,
            "Content-Type": "application/json",
        },
        data=data,
    )
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT_SEC) as resp:
            return resp.status, json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        raw = e.read().decode("utf-8", errors="replace")
        try:
            return e.code, json.loads(raw)
        except Exception:
            return e.code, {"err": raw[:300]}
    except Exception as e:
        return -1, {"err": str(e)}


def list_existing_fields(list_id):
    status, data = api_request("GET", f"{BASE}/list/{list_id}/field")
    if status == 200 and isinstance(data, dict) and "fields" in data:
        return {f["name"] for f in data["fields"]}
    return None


def create_field(list_id, body):
    return api_request("POST", f"{BASE}/list/{list_id}/field", body=body)


INNER = 49


def boxtop():
    return "┌" + "─" * INNER + "┐"


def boxbot():
    return "└" + "─" * INNER + "┘"


def boxline(s):
    return "│ " + s.ljust(INNER - 2) + " │"


def main():
    created = 0
    existed = 0
    errors = 0
    completed_lists = 0
    log = []

    started = datetime.datetime.now()
    log.append(f"INÍCIO: {started.isoformat()}")
    log.append("")

    for list_id, list_name in LISTS.items():
        existing = list_existing_fields(list_id)
        time.sleep(RATE_LIMIT_SEC)

        if existing is None:
            line = f"[LISTA {list_name}] ❌ Falha ao listar campos — pulando lista"
            print(line, flush=True)
            log.append(line)
            errors += len(FIELDS)
            continue

        list_ok = 0
        for field in FIELDS:
            name = field["name"]
            if name in existing:
                line = f"[LISTA {list_name}] {name} → JÁ EXISTE (pulando)"
                print(line, flush=True)
                log.append(line)
                existed += 1
                list_ok += 1
                continue

            status, resp = create_field(list_id, field)
            time.sleep(RATE_LIMIT_SEC)

            if status in (200, 201):
                line = f"[LISTA {list_name}] {name} → CRIADO ✓"
                print(line, flush=True)
                log.append(line)
                created += 1
                list_ok += 1
            else:
                err_msg = resp.get("err", str(resp)) if isinstance(resp, dict) else str(resp)
                line = f"[LISTA {list_name}] {name} → ERRO ({status}): {err_msg}"
                print(line, flush=True)
                log.append(line)
                errors += 1

        if list_ok == len(FIELDS):
            completed_lists += 1

    finished = datetime.datetime.now()
    log.append("")
    log.append(f"FIM: {finished.isoformat()}")
    log.append(f"Duração: {finished - started}")
    log.append("")

    report = "\n".join([
        boxtop(),
        boxline("RESULTADO mc-clickup-bootstrap.py"),
        boxline(f"Campos criados: {created}/{TOTAL_OPS}"),
        boxline(f"Já existiam: {existed}/{TOTAL_OPS}"),
        boxline(f"Erros: {errors}/{TOTAL_OPS}"),
        boxline(f"Listas com campos completos: {completed_lists}/{len(LISTS)}"),
        boxbot(),
    ])
    print()
    print(report, flush=True)
    log.append(report)

    out_dir = Path(
        r"G:\Meu Drive\0 0 MEU CUMPADRE\0 0 COMUNIDADE\OBSIDIAN _ MC"
        r"\MEU CUMPADRE\08-ARTEFATOS"
    )
    out_dir.mkdir(parents=True, exist_ok=True)
    stamp = started.strftime("%Y%m%d-%H%M%S")
    out_file = out_dir / f"MC-BOOTSTRAP-Relatorio-{stamp}.txt"
    out_file.write_text("\n".join(log), encoding="utf-8")
    print(f"\nRelatório salvo em: {out_file}", flush=True)


if __name__ == "__main__":
    main()
