#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
mc-coerencia.py — Motor do VAS (Validação Automatizada da Arquitetura Soberana)
===============================================================================
Implementa os Tiers 2 do VAS — **V-supersessao** e **V-citacao** — conforme
MC-VAS-Diagnostico-Proposta-v0_2 (§4-§7 · RASCUNHO PRÉ-R2). O VAS *diagnostica
e barra*: NUNCA sela, NUNCA escreve no Vault, NUNCA decide governança.

POSTURA (igual a mc-pre-selagem / sister-ancia)
  · Determinístico   — mesma saída byte-idêntica no mesmo commit (sem wall-clock;
                       carimbo de origem = SHA do commit, não Date.now()).
  · Fail-closed      — na dúvida, 🔴 na direção de D > C > V (§7.2).
  · Proof-First      — todo achado traz `arquivo:linha` + id da regra (§7.3).
  · Golden fixture   — cada validador tem caso bom/ruim, no molde do
                       FIXTURE_PRESELAGEM (mc-pre-selagem.workflow.js:50-68).
  · Zona Verde       — opera só em governança/arquitetura; NUNCA lê PII (§7.6).
  · Para no gate     — reporta gaps; não conserta, não sela, não escreve (§6).

ZERO DEPENDÊNCIAS EXTERNAS (decisão de gate · 2026-06-19)
  Parser próprio mínimo de frontmatter (subconjunto YAML) — sem pyyaml. Só a
  stdlib (json/os/re/subprocess/sys).

ESTADO ATUAL (v0.1)
  · V-supersessao / V-citacao (Tier 2): ESQUELETO — corpos de detecção gated por
    VALIDADORES_IMPLEMENTADOS=False (cada um carrega seu PLANO DE DETECÇÃO no
    docstring, p/ revisão do algoritmo ANTES de escrevê-lo — gate R2). Em esqueleto,
    --selftest mostra o alvo (expected.json) sem reprovar.
  · V-lumus-folder-structure / V-lumus-self-referential (Tier 3): IMPLEMENTADOS
    (LUMUS_IMPLEMENTADO=True · Executor Técnico · 2026-06-19), lastreados no
    MC-POP-Workflow-Lumus-Substrate-v0_1 (§4-§6). ATIVOS e cobrados pelo --selftest
    contra as golden fixtures. Flag PRÓPRIA — não inverte o gate R2 de SUP/CIT.

USO
  py .claude/vas/mc-coerencia.py --selftest        # regressão contra as fixtures
  py .claude/vas/mc-coerencia.py --alvo <path>     # roda sobre arquivo ou pasta .md
  py .claude/vas/mc-coerencia.py --alvo <path> --json   # boletim JSON no stdout
  (Windows: launcher `py` · POSIX: `python3` — shebang cuida.)

SAÍDA   Boletim de Coerência Soberana em dois formatos:
        .claude/vas/boletim-coerencia.json   (máquina)
        .claude/vas/BOLETIM-Coerencia-Soberana.md (humano)
EXIT    0 = sem 🔴 · 1 = ≥1 achado 🔴 (ou mismatch de selftest) · 2 = erro de uso.

Hierarquia: D > C > V · Proof-First · Provérbios 31:8 · v0.1 PRÉ-R2 · 2026-06-19
"""
import json
import os
import re
import subprocess
import sys

VERSAO = "0.1"

# ─── CHAVE MESTRA DO CHECKPOINT ──────────────────────────────────────────────
# False → corpos de detecção desligados (modo esqueleto · gate de revisão R2).
# A lógica de cada validador só é escrita/ativada APÓS o Founder aprovar o
# desenho (catálogo de regras + fixtures + expected.json). Não inverter sem gate.
VALIDADORES_IMPLEMENTADOS = False

# V-lumus-* (folder-structure + self-referential): IMPLEMENTADOS nesta sessão sob
# instrução do Executor Técnico (2026-06-19), lastreados no POP Lúmus Substrate v0.1.
# Flag PRÓPRIA — não inverte o gate R2 de SUP/CIT acima (que seguem em esqueleto).
LUMUS_IMPLEMENTADO = True

# Raiz do repo = dois níveis acima (.claude/vas/ → repo). Repo-relativo: resolve
# em sessão local E cloud (não usa cwd nem caminho absoluto).
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
VAS_DIR = SCRIPT_DIR
FIXT_DIR = os.path.join(VAS_DIR, "fixtures")
EXPECTED_PATH = os.path.join(VAS_DIR, "expected.json")

# ─── Zona Verde · firewall LGPD (§7.6 · nunca lê PII) ────────────────────────
# Fragmentos de caminho que carregam (ou podem carregar) dado sensível / caso do
# cidadão. O VAS recusa lê-los — opera só na camada de arquitetura/governança.
ZONA_VERMELHA_FRAGMENTS = (
    "/casos/", "\\casos\\",
    "Documentação/conhecimento-previdenciario",
    "Documentação/conhecimento-previdenciario",
    "/clientes/", "\\clientes\\",
    "/PII/", "-PII", "_PII",
)

# ─── Catálogo de regras (id → severidade · validador · título) ───────────────
# Severidade governa o exit code: 🔴 reprova (exit 1) · 🟡 alerta · 🟢 informativo.
SEV_VERMELHA, SEV_AMARELA, SEV_VERDE = "🔴", "🟡", "🟢"

REGRAS = {
    # ── V-supersessao (G3 · grafo de supersessão = DAG · 1 canônico/família) ──
    "SUP-01": (SEV_VERMELHA, "V-supersessao", "Ciclo no grafo de supersessão (não é DAG)"),
    "SUP-02": (SEV_VERMELHA, "V-supersessao", "Família com 2+ cabeças canônicas vivas"),
    "SUP-03": (SEV_AMARELA,  "V-supersessao", "Documento supersedido sem banner de status"),
    "SUP-04": (SEV_AMARELA,  "V-supersessao", "Edge de supersede aponta para doc ausente no corpus"),
    # ── V-citacao (G5 · Proof-First: arquivo existe · linha em range · dívida) ──
    "CIT-01": (SEV_VERMELHA, "V-citacao", "Citação ambígua (não nomeia arquivo) com fonte múltipla"),
    "CIT-02": (SEV_VERMELHA, "V-citacao", "Arquivo/caminho citado não existe"),
    "CIT-03": (SEV_VERMELHA, "V-citacao", "Linha citada fora do range do arquivo"),
    "CIT-04": (SEV_VERMELHA, "V-citacao", "Hash malformado (não é 64-hex)"),
    "CIT-05": (SEV_AMARELA,  "V-citacao", "Hash 64-hex sem âncora nominal"),
    "CIT-06": (SEV_VERDE,    "V-citacao", "[FONTE PENDENTE] — dívida honesta registrada (informativo)"),
    # ── V-lumus-folder-structure (POP Lúmus §5 · pasta canônica casa com natureza) ──
    "LFS-01": (SEV_VERMELHA, "V-lumus-folder-structure", "Artefato Self-Referential fora de 03-Self-Referential/"),
    "LFS-02": (SEV_AMARELA,  "V-lumus-folder-structure", "Artefato Lúmus fora das pastas canônicas (01-Raw..05-Graph)"),
    # ── V-lumus-self-referential (POP Lúmus §4 E4 · §6 · seção de auto-evolução) ──
    "LSR-01": (SEV_VERMELHA, "V-lumus-self-referential", "Self-Referential sem seção de Self-Referential Instructions"),
    "LSR-02": (SEV_AMARELA,  "V-lumus-self-referential", "Seção Self-Referential Instructions vazia / abaixo do mínimo"),
}

# Vocabulário de status que marca "documento já superado" (banner presente).
MARCADORES_SUPERSEDIDO = (
    "supersedid", "superad", "arquivad", "legado", "obsolet", "encerrad", "aposentad",
)

# ─── Lúmus Substrate (MC-POP-Workflow-Lumus-Substrate-v0_1 · §4-§6) ──────────
# Pastas canônicas do cofre Lúmus (POP §5). A "natureza" de um artefato deve casar
# com a pasta. Match EXATO do nome do segmento de caminho (determinístico).
LUMUS_CAMADAS = ("01-Raw", "02-Refined", "03-Self-Referential", "04-Loops", "05-Graph")
LUMUS_CAMADA_SELFREF = "03-Self-Referential"
# Mínimo de linhas de conteúdo (não-vazias, não-heading) sob a seção, p/ ela contar
# como "instruções de auto-evolução de fato" e não um cabeçalho-fantasma.
MIN_SELFREF_CONTEUDO = 2
# Cabeçalho markdown que abre a seção de auto-evolução (POP §4 E4 · §6). Exige a
# semântica de INSTRUÇÕES/EVOLUÇÃO — não casa um título que só menciona
# "self-referential" (fail-closed: um mero título não conta como ter a seção).
RX_SELFREF_HEADING = re.compile(
    r"^#{1,6}\s+.*("
    r"self[-\s]?referential\s+instruction"          # "Self-Referential Instructions" (nome canônico)
    r"|instru[cç][õo]es\s+de\s+(auto[-\s]?)?evolu"   # "instruções de (auto-)evolução"
    r"|auto[-\s]?evolu"                              # "auto-evolução"
    r"|self[-\s]?evolution"                          # "self-evolution"
    r")",
    re.IGNORECASE,
)


# ═════════════════════════════════════════════════════════════════════════════
#  UTILITÁRIOS DE BASE (infra · não é "lógica de validador")
# ═════════════════════════════════════════════════════════════════════════════
def commit_sha():
    """Carimbo de origem determinístico (SHA do commit), não wall-clock."""
    try:
        r = subprocess.run(["git", "-C", REPO_ROOT, "rev-parse", "--short", "HEAD"],
                           capture_output=True, text=True, timeout=10)
        return r.stdout.strip() or "[sem-git]"
    except Exception:
        return "[sem-git]"


def rel(path):
    """Caminho repo-relativo, sempre com '/' (estável entre Windows e POSIX)."""
    return os.path.relpath(path, REPO_ROOT).replace("\\", "/")


def zona_verde(path):
    """True se o caminho NÃO toca a Zona Vermelha (PII/caso). Fail-closed."""
    p = path.replace("\\", "/")
    return not any(frag.replace("\\", "/") in p for frag in ZONA_VERMELHA_FRAGMENTS)


def ler_texto(path):
    """Lê texto cru com guarda de Zona Verde. Recusa (→ '') caminho vermelho."""
    if not zona_verde(path):
        return ""
    try:
        with open(path, encoding="utf-8", errors="ignore") as fh:
            return fh.read()
    except Exception:
        return ""


def _strip_scalar(s):
    """Remove espaços e aspas externas de um escalar de frontmatter."""
    s = s.strip()
    if len(s) >= 2 and s[0] in "\"'" and s[-1] == s[0]:
        s = s[1:-1]
    return s


def parse_frontmatter(text):
    """Parser mínimo de frontmatter (subconjunto YAML · SEM pyyaml).

    Suporta o que os artefatos MC usam de fato:
      · escalares:    chave: valor   /   chave: "valor"
      · listas bloco: chave:\\n  - item\\n  - item
    Ignora aninhamento mais profundo (mapas internos) — não é necessário aqui.

    Retorna (dados, linha_de):
      · dados:    dict {chave: str | [str]}
      · linha_de: dict {chave: int}  — linha 1-based da chave no arquivo (Proof-First)
    """
    dados, linha_de = {}, {}
    if not text.startswith("---"):
        return dados, linha_de
    linhas = text.splitlines()
    fim = None
    for i in range(1, len(linhas)):
        if linhas[i].strip() == "---":
            fim = i
            break
    if fim is None:
        return dados, linha_de
    cur = None
    for idx in range(1, fim):
        raw = linhas[idx]
        ln = idx + 1  # 1-based
        if not raw.strip():
            continue
        m_item = re.match(r"^\s+-\s+(.*)$", raw)
        if m_item and isinstance(dados.get(cur), list):
            dados[cur].append(_strip_scalar(m_item.group(1)))
            continue
        m_kv = re.match(r"^([A-Za-z0-9_]+):\s*(.*)$", raw)
        if m_kv:
            chave, val = m_kv.group(1).lower(), m_kv.group(2)
            linha_de[chave] = ln
            if val.strip() == "":
                dados[chave] = []      # tentativo: vira lista se vier '- item'; senão fica []
            else:
                dados[chave] = _strip_scalar(val)
            cur = chave
            continue
        # linha indentada que não é item de lista (mapa aninhado) → ignora
    return dados, linha_de


def ler_doc(path):
    """Carrega um documento como registro estruturado (Zona Verde · Proof-First)."""
    txt = ler_texto(path)
    fm, fm_line = parse_frontmatter(txt)
    return {
        "path": path,
        "rel": rel(path),
        "dir": os.path.dirname(path),
        "text": txt,
        "linhas": txt.splitlines(),
        "fm": fm,
        "fm_line": fm_line,
    }


def extrair_id(valor):
    """Extrai o doc_id de um campo supersede (1º token; descarta a glosa entre ())."""
    if not valor:
        return ""
    return str(valor).strip().split()[0].strip() if str(valor).strip() else ""


def achado(regra, arquivo, linha, mensagem, trecho=""):
    """Constrói um achado Proof-First. Severidade/validador vêm do catálogo."""
    sev, validador, _titulo = REGRAS[regra]
    return {
        "validador": validador,
        "regra": regra,
        "severidade": sev,
        "arquivo": arquivo,
        "linha": linha,
        "mensagem": mensagem,
        "trecho": trecho[:180],
    }


def chave_estavel(a):
    """Tupla de identidade estável de um achado (ignora wording de msg/trecho).

    É o que o golden fixture compara — robusto a reescrita de mensagem."""
    return (a["validador"], a["regra"], a["severidade"], a["arquivo"], a["linha"])


def ordenar(achados):
    """Ordenação determinística: arquivo → linha → regra."""
    return sorted(achados, key=lambda a: (a["arquivo"], a["linha"], a["regra"]))


# ═════════════════════════════════════════════════════════════════════════════
#  VALIDADOR 1 · V-supersessao  (Tier 2 · G3)
# ═════════════════════════════════════════════════════════════════════════════
def validar_supersessao(docs):
    """Valida o grafo de supersessão de um corpus (lista de docs da mesma área).

    PLANO DE DETECÇÃO (a implementar após gate R2 · revisar antes de escrever):
      Identidade   família = campo `codigo`; nó = `doc_id`; edge D→X quando D
                   declara `supersede: X` (X resolvido por doc_id no corpus).
      SUP-04 🟡    `supersede: X` cujo X não resolve a nenhum doc do corpus →
                   cadeia não-verificável (linha = `supersede:`).
      SUP-01 🔴    ciclo nas edges de supersede (grafo não-DAG) → reporta em cada
                   doc do ciclo (linha = `supersede:`). Inclui auto-supersede.
      SUP-02 🔴    dentro de uma família, ≥2 "cabeças canônicas vivas" (doc que
                   NÃO é alvo de supersede de um irmão E cujo status não é
                   marcador de supersedido) → reporta nas cabeças além da 1ª
                   (ordem por doc_id · linha = `status:`).
      SUP-03 🟡    doc que É alvo de supersede de um irmão mas cujo `status` não
                   carrega marcador de supersedido (MARCADORES_SUPERSEDIDO) e não
                   tem `supersedido_por:` → banner ausente (linha = `status:`).

    Retorna lista de achados (ordenada pelo agregador). Determinístico.
    """
    if not VALIDADORES_IMPLEMENTADOS:
        return []
    # TODO(pós-R2): implementar SUP-01..SUP-04 conforme o PLANO acima.
    return []


# ═════════════════════════════════════════════════════════════════════════════
#  VALIDADOR 2 · V-citacao  (Tier 2 · G5 · Proof-First)
# ═════════════════════════════════════════════════════════════════════════════
# Sintaxes de citação reconhecidas (definidas aqui p/ revisão do desenho):
#   FILE_LINE   arquivo.ext:N      ou  arquivo.ext:N-M     (caminho + linha/range)
#   PAREN_LINHA (… linha N)        (nomeia arquivo só se houver token .ext dentro)
#   HASH_CTX    (sha-256|hash) … <token>   → token deve ser 64-hex (senão CIT-04)
#   HASH_NU     \b[0-9a-f]{64}\b   (hash "pelado": exige âncora nominal, senão CIT-05)
#   PENDENTE    [FONTE PENDENTE]   (marcador de dívida honesta · CIT-06 informativo)
RX_FILE_LINE = re.compile(r"([\w./\\-]+\.[A-Za-z0-9]{1,5}):(\d+)(?:-(\d+))?")
RX_PAREN_LINHA = re.compile(r"\(([^)]*?)\blinha\s+(\d+)\)", re.IGNORECASE)
RX_HASH_CTX = re.compile(r"(?:sha-?256|hash)\b[^\n]{0,40}?\b([0-9A-Za-z]{6,})\b", re.IGNORECASE)
RX_HASH_64 = re.compile(r"\b([0-9a-fA-F]{64})\b")
RX_PENDENTE = re.compile(r"\[FONTE PENDENTE\]")


def validar_citacao(docs):
    """Valida o lastro Proof-First das citações em cada doc (per-doc + resolução).

    PLANO DE DETECÇÃO (a implementar após gate R2 · revisar antes de escrever):
      Multi-fonte  n = len(fm['gera_a_partir_de']); 'multi' quando n ≥ 2.
      Resolução    caminho citado resolve relativo ao dir do doc, depois à raiz
                   do repo. (Só Zona Verde; nunca abre caminho vermelho.)
      CIT-01 🔴    PAREN_LINHA sem token de arquivo dentro do parêntese E doc
                   multi-fonte → ambígua (fail-closed · decisão de gate #4).
      CIT-02 🔴    FILE_LINE cujo caminho não resolve em disco.
      CIT-03 🔴    FILE_LINE resolve, mas N < 1 ou N (ou M do range) > nº de
                   linhas do arquivo-alvo.
      CIT-04 🔴    HASH_CTX cujo token não é 64-hex (hash malformado). Por ora,
                   SÓ formato — recomputar SHA-256 real fica p/ melhoria futura
                   (decisão de gate #3).
      CIT-05 🟡    HASH_64 "pelado" sem âncora nominal na mesma linha (sem token
                   .ext nem 'de <Nome>') → hash sem o que ancora.
      CIT-06 🟢    [FONTE PENDENTE] → dívida honesta (informativo · não reprova).

    Retorna lista de achados (ordenada pelo agregador). Determinístico.
    """
    if not VALIDADORES_IMPLEMENTADOS:
        return []
    # TODO(pós-R2): implementar CIT-01..CIT-06 conforme o PLANO acima.
    return []


# ═════════════════════════════════════════════════════════════════════════════
#  VALIDADORES 3 e 4 · Lúmus Substrate (Tier 3 · MC-POP-Workflow-Lumus-Substrate-v0_1)
# ═════════════════════════════════════════════════════════════════════════════
# Operam SÓ sobre artefatos do substrato Lúmus (gate eh_lumus) — não tocam ADRs
# comuns nem outros docs do Vault. Determinístico (função pura de path + texto) ·
# fail-closed na direção D > C > V · Zona Verde (herdam o firewall de ler_texto).
def camada_lumus(doc):
    """Pasta canônica Lúmus presente no caminho (match exato de segmento), ou None."""
    for seg in re.split(r"[\\/]", doc["path"]):
        if seg in LUMUS_CAMADAS:
            return seg
    return None


def eh_lumus(doc):
    """True se o doc é artefato do substrato Lúmus (gate de escopo do validador).

    Sinais (basta UM):
      · `tipo` == LUMUS — declaração explícita de natureza substrato (allowlist);
      · `tags`/`destino` citam Lúmus;
      · um segmento do caminho é o cofre 'Lúmus';
      · o doc está sob uma pasta canônica Lúmus (01-Raw..05-Graph).

    NÃO usa substring 'LUMUS' em doc_id/codigo: um documento *sobre* o Lúmus
    (ex.: a SKILL chamada `mc-lumus-refine`) NÃO é um artefato do substrato. O
    gate por doc_id gerava FP de LFS-02 (critério de qualidade #5 · 2026-06-19).
    """
    fm = doc["fm"]
    if "LUMUS" in str(fm.get("tipo", "")).upper():
        return True
    blob = " ".join(str(fm.get(k, "")) for k in ("tags", "destino")).lower()
    if "lumus" in blob or "lúmus" in blob:
        return True
    if any(re.fullmatch(r"l[uú]mus", seg, re.IGNORECASE)
           for seg in re.split(r"[\\/]", doc["path"])):
        return True
    return camada_lumus(doc) is not None


def _declara_selfref(doc):
    """True se o frontmatter DECLARA natureza self-referential (tags/camada/layer)."""
    blob = " ".join(str(doc["fm"].get(k, "")) for k in
                    ("lumus_camada", "camada", "layer", "tags", "tipo")).lower()
    return ("self-referential" in blob or "self_referential" in blob
            or "auto-evolu" in blob)


def linha_secao_selfref(doc):
    """Linha 1-based do cabeçalho da seção de auto-evolução, ou None se ausente."""
    for i, ln in enumerate(doc["linhas"], 1):
        if RX_SELFREF_HEADING.match(ln.strip()):
            return i
    return None


def natureza_selfref(doc):
    """Natureza self-referential por QUALQUER sinal (p/ a checagem de pasta):
    declaração no frontmatter, presença da seção, OU localização em 03-*."""
    return (_declara_selfref(doc)
            or camada_lumus(doc) == LUMUS_CAMADA_SELFREF
            or linha_secao_selfref(doc) is not None)


def declarado_selfref(doc):
    """O doc se DECLARA self-referential (frontmatter ou pasta 03-*), tenha ou não a
    seção. É o que dispara a EXIGÊNCIA da seção de instruções (LSR-01)."""
    return _declara_selfref(doc) or camada_lumus(doc) == LUMUS_CAMADA_SELFREF


def _conteudo_secao(doc, head_ln):
    """Conta linhas de conteúdo (não-vazias, não-heading) da seção que começa logo
    após head_ln (1-based) até a próxima heading ou o EOF."""
    linhas = doc["linhas"]
    cont = 0
    for j in range(head_ln, len(linhas)):  # linhas[head_ln] = 1ª linha após o cabeçalho
        s = linhas[j].strip()
        if re.match(r"^#{1,6}\s+", s):     # próxima heading → fim da seção
            break
        if s:
            cont += 1
    return cont


def validar_lumus_folder(docs):
    """V-lumus-folder-structure — a pasta do artefato casa com sua natureza? (POP §5)

    REGRAS (determinísticas · fail-closed):
      LFS-01 🔴  natureza Self-Referential (declarada / com seção / em 03-*) MAS
                 localizado fora de 03-Self-Referential/ → peça mal-arquivada.
      LFS-02 🟡  artefato Lúmus que não está sob NENHUMA pasta canônica
                 (01-Raw..05-Graph) → fora da taxonomia (cabe revisão humana).
    Anchor = linha do `codigo:`/`doc_id:` (identidade do artefato).
    """
    if not LUMUS_IMPLEMENTADO:
        return []
    out = []
    for d in docs:
        if not eh_lumus(d):
            continue  # escopo: só artefatos Lúmus
        camada = camada_lumus(d)
        ln = d["fm_line"].get("codigo") or d["fm_line"].get("doc_id") or 1
        trecho = d["linhas"][0] if d["linhas"] else ""
        if natureza_selfref(d) and camada != LUMUS_CAMADA_SELFREF:
            atual = camada or "fora da taxonomia Lúmus"
            out.append(achado("LFS-01", d["rel"], ln,
                              f"Natureza Self-Referential, mas localizado em '{atual}'; "
                              f"deveria estar em {LUMUS_CAMADA_SELFREF}/.", trecho))
        elif camada is None:
            out.append(achado("LFS-02", d["rel"], ln,
                              "Artefato Lúmus fora das pastas canônicas "
                              "(01-Raw / 02-Refined / 03-Self-Referential / 04-Loops / 05-Graph).",
                              trecho))
    return out


def validar_lumus_selfref(docs):
    """V-lumus-self-referential — a peça Self-Referential traz instruções de evolução?

    REGRAS (determinísticas · fail-closed · POP §4 E4 · §6):
      LSR-01 🔴  doc se declara Self-Referential (frontmatter ou pasta 03-*) mas
                 NÃO tem a seção de Self-Referential Instructions / auto-evolução.
      LSR-02 🟡  a seção EXISTE mas está vazia / abaixo do mínimo
                 (< MIN_SELFREF_CONTEUDO linhas de conteúdo) → cabeçalho-fantasma.
    Anchor: LSR-01 = linha da declaração de natureza; LSR-02 = linha do cabeçalho.
    """
    if not LUMUS_IMPLEMENTADO:
        return []
    out = []
    for d in docs:
        if not eh_lumus(d):
            continue  # escopo: só artefatos Lúmus
        head_ln = linha_secao_selfref(d)
        if head_ln is None:
            if declarado_selfref(d):  # diz ser self-ref, mas não traz a seção
                ln = (d["fm_line"].get("lumus_camada") or d["fm_line"].get("camada")
                      or d["fm_line"].get("tags") or d["fm_line"].get("codigo")
                      or d["fm_line"].get("doc_id") or 1)
                out.append(achado("LSR-01", d["rel"], ln,
                                  "Declarado Self-Referential, mas sem seção de "
                                  "Self-Referential Instructions / auto-evolução (POP §6)."))
        elif _conteudo_secao(d, head_ln) < MIN_SELFREF_CONTEUDO:
            trecho = d["linhas"][head_ln - 1].strip() if head_ln <= len(d["linhas"]) else ""
            out.append(achado("LSR-02", d["rel"], head_ln,
                              f"Seção de auto-evolução presente mas com < "
                              f"{MIN_SELFREF_CONTEUDO} linhas de conteúdo (cabeçalho-fantasma).",
                              trecho))
    return out


# ═════════════════════════════════════════════════════════════════════════════
#  AGREGADOR → Boletim de Coerência Soberana
# ═════════════════════════════════════════════════════════════════════════════
def boletim(achados, escopo):
    """Agrega achados num Boletim determinístico (json-serializável)."""
    achados = ordenar(achados)
    cont = {SEV_VERMELHA: 0, SEV_AMARELA: 0, SEV_VERDE: 0}
    for a in achados:
        cont[a["severidade"]] = cont.get(a["severidade"], 0) + 1
    if cont[SEV_VERMELHA]:
        veredito = "🔴 BARRADO"
    elif cont[SEV_AMARELA]:
        veredito = "🟡 RESSALVAS"
    else:
        veredito = "🟢 COERENTE"
    return {
        "_meta": {
            "boletim": "MC-Boletim-Coerencia-Soberana",
            "motor": f".claude/vas/mc-coerencia.py v{VERSAO}",
            "spec": "MC-VAS-Diagnostico-Proposta-v0_2 (RASCUNHO PRÉ-R2)",
            "gerado_de_commit": commit_sha(),
            "validadores_implementados": VALIDADORES_IMPLEMENTADOS,
            "lumus_implementado": LUMUS_IMPLEMENTADO,
            "escopo": escopo,
            "zona": "Verde · zero PII",
            "nota": "diagnostica e barra · NÃO sela, NÃO escreve no Vault, NÃO conserta.",
        },
        "veredito": veredito,
        "contagem": {"vermelha": cont[SEV_VERMELHA], "amarela": cont[SEV_AMARELA], "verde": cont[SEV_VERDE]},
        "achados": achados,
    }


def render_md(bol):
    """View humana do Boletim."""
    m, c = bol["_meta"], bol["contagem"]
    L = []
    L.append("# Boletim de Coerência Soberana — VAS\n")
    L.append("> **GERADO — diagnóstico, não decisão.** O VAS reporta gaps; não sela, "
             "não escreve no Vault, não conserta. Fonte da verdade = os artefatos.\n")
    L.append(f"- **Veredito:** {bol['veredito']}")
    L.append(f"- **Commit de origem:** `{m['gerado_de_commit']}`")
    L.append(f"- **Escopo:** {m['escopo']}")
    L.append(f"- **Contagem:** {c['vermelha']} 🔴 · {c['amarela']} 🟡 · {c['verde']} 🟢")
    if not m["validadores_implementados"]:
        nota = ("- **⏳ SUP/CIT em esqueleto (gate R2):** V-supersessao/V-citacao "
                "ainda não detectam (alvo em `expected.json`).")
        if m.get("lumus_implementado"):
            nota += " **V-lumus-* estão ATIVOS** — os achados Lúmus abaixo são reais."
        L.append(nota)
    L.append("")
    L.append("## Achados\n")
    if bol["achados"]:
        L.append("| sev | regra | validador | arquivo:linha | mensagem |")
        L.append("|---|---|---|---|---|")
        for a in bol["achados"]:
            L.append(f"| {a['severidade']} | `{a['regra']}` | {a['validador']} | "
                     f"`{a['arquivo']}:{a['linha']}` | {a['mensagem']} |")
    else:
        L.append("_(nenhum achado)_")
    L.append("")
    L.append("---")
    L.append("**D > C > V** · Proof-First · Zona Verde · *diagnostica e barra* · ∞")
    return "\n".join(L) + "\n"


# ═════════════════════════════════════════════════════════════════════════════
#  RUNNER · sobre um alvo real (arquivo ou pasta de .md)
# ═════════════════════════════════════════════════════════════════════════════
def coletar_docs(alvo):
    """Carrega os docs .md de um alvo (arquivo único ou pasta · recursivo)."""
    paths = []
    if os.path.isfile(alvo) and alvo.endswith(".md"):
        paths = [alvo]
    elif os.path.isdir(alvo):
        for raiz, _dirs, arqs in os.walk(alvo):
            for a in sorted(arqs):
                if a.endswith(".md"):
                    paths.append(os.path.join(raiz, a))
    paths = [p for p in sorted(paths) if zona_verde(p)]
    return [ler_doc(p) for p in paths]


def rodar_alvo(alvo, formato):
    docs = coletar_docs(alvo)
    achados = (validar_supersessao(docs) + validar_citacao(docs)
               + validar_lumus_folder(docs) + validar_lumus_selfref(docs))
    bol = boletim(achados, escopo=rel(alvo) if os.path.exists(alvo) else alvo)
    # escreve os dois formatos na drop-zone
    jpath = os.path.join(VAS_DIR, "boletim-coerencia.json")
    mpath = os.path.join(VAS_DIR, "BOLETIM-Coerencia-Soberana.md")
    with open(jpath, "w", encoding="utf-8") as fh:
        json.dump(bol, fh, ensure_ascii=False, indent=2, sort_keys=False)
        fh.write("\n")
    with open(mpath, "w", encoding="utf-8") as fh:
        fh.write(render_md(bol))
    if formato == "json":
        print(json.dumps(bol, ensure_ascii=False, indent=2))
    else:
        print(render_md(bol))
    return 1 if bol["contagem"]["vermelha"] else 0


# ═════════════════════════════════════════════════════════════════════════════
#  SELFTEST · regressão contra as golden fixtures (expected.json)
# ═════════════════════════════════════════════════════════════════════════════
def carregar_casos():
    """Monta o dict {nome_caso: (tipo, [docs])} a partir de fixtures/.

    supersessao/<caso>/  → corpus (todas as .md da pasta).
    citacao/<caso>.md    → doc único (subpastas '_*' são alvos compartilhados).
    """
    casos = {}
    sup = os.path.join(FIXT_DIR, "supersessao")
    if os.path.isdir(sup):
        for d in sorted(os.listdir(sup)):
            p = os.path.join(sup, d)
            if os.path.isdir(p):
                docs = [ler_doc(os.path.join(p, f)) for f in sorted(os.listdir(p)) if f.endswith(".md")]
                casos["supersessao/" + d] = ("supersessao", docs)
    cit = os.path.join(FIXT_DIR, "citacao")
    if os.path.isdir(cit):
        for f in sorted(os.listdir(cit)):
            if f.endswith(".md"):
                casos["citacao/" + f[:-3]] = ("citacao", [ler_doc(os.path.join(cit, f))])
    # lumus-folder/<caso>/ → corpus RECURSIVO (preserva a pasta canônica no path,
    # que é justamente o sinal que o validador inspeciona).
    lf = os.path.join(FIXT_DIR, "lumus-folder")
    if os.path.isdir(lf):
        for d in sorted(os.listdir(lf)):
            p = os.path.join(lf, d)
            if os.path.isdir(p):
                docs = []
                for raiz, _ds, arqs in os.walk(p):
                    for f in sorted(arqs):
                        if f.endswith(".md"):
                            docs.append(ler_doc(os.path.join(raiz, f)))
                docs.sort(key=lambda x: x["rel"])
                casos["lumus-folder/" + d] = ("lumus-folder", docs)
    # lumus-selfref/<caso>.md → doc único.
    ls = os.path.join(FIXT_DIR, "lumus-selfref")
    if os.path.isdir(ls):
        for f in sorted(os.listdir(ls)):
            if f.endswith(".md"):
                casos["lumus-selfref/" + f[:-3]] = ("lumus-selfref", [ler_doc(os.path.join(ls, f))])
    return casos


def _implementado(tipo):
    """Gate por validador: lumus-* já implementados; supersessao/citacao em R2."""
    if tipo in ("lumus-folder", "lumus-selfref"):
        return LUMUS_IMPLEMENTADO
    return VALIDADORES_IMPLEMENTADOS


def rodar_validador(tipo, docs):
    if tipo == "supersessao":
        return validar_supersessao(docs)
    if tipo == "citacao":
        return validar_citacao(docs)
    if tipo == "lumus-folder":
        return validar_lumus_folder(docs)
    if tipo == "lumus-selfref":
        return validar_lumus_selfref(docs)
    return []


def rodar_selftest():
    try:
        with open(EXPECTED_PATH, encoding="utf-8") as fh:
            expected = json.load(fh)
    except Exception as e:
        print(f"❌ selftest: não consegui ler expected.json ({e})", file=sys.stderr)
        return 2
    casos = carregar_casos()
    esperados_por_caso = expected.get("casos", {})
    total_esp = total_obt = mism = 0
    linhas = ["🔍 VAS · selftest (regressão das golden fixtures)\n"]
    for nome in sorted(set(list(casos) + list(esperados_por_caso))):
        tipo, docs = casos.get(nome, (None, []))
        esp = esperados_por_caso.get(nome, {}).get("achados_esperados", [])
        obt = rodar_validador(tipo, docs) if tipo else []
        esp_set = {(e["validador"], e["regra"], e["severidade"], e["arquivo"], e["linha"]) for e in esp}
        obt_set = {chave_estavel(a) for a in obt}
        total_esp += len(esp_set)
        total_obt += len(obt_set)
        faltando = esp_set - obt_set
        sobrando = obt_set - esp_set
        enforce = _implementado(tipo) if tipo else False
        if enforce and (faltando or sobrando):
            mism += 1
            linhas.append(f"  ✗ {nome}: faltando={len(faltando)} sobrando={len(sobrando)}")
            for t in sorted(faltando):
                linhas.append(f"      − esperado não-detectado: {t[1]} {t[3]}:{t[4]}")
            for t in sorted(sobrando):
                linhas.append(f"      + detectado não-esperado:  {t[1]} {t[3]}:{t[4]}")
        else:
            estado = "ok" if enforce else "alvo (gate R2)"
            linhas.append(f"  · {nome}: {len(esp_set)} esperado(s) [{estado}]")
    print("\n".join(linhas))
    print(f"\nResumo: {len(casos)} casos · {total_esp} achados esperados · "
          f"{total_obt} detectados · {mism} caso(s) divergente(s).")
    if not VALIDADORES_IMPLEMENTADOS:
        print("⏳ SUP/CIT em MODO ESQUELETO (gate R2) — 0 detectados ali é esperado. "
              "V-lumus-* estão ATIVOS e cobrados contra o expected.json.")
    return 1 if mism else 0


# ═════════════════════════════════════════════════════════════════════════════
#  CLI
# ═════════════════════════════════════════════════════════════════════════════
USO = (
    "mc-coerencia.py — motor do VAS (V-supersessao + V-citacao)\n"
    "  py .claude/vas/mc-coerencia.py --selftest\n"
    "  py .claude/vas/mc-coerencia.py --alvo <arquivo.md|pasta> [--json|--md]\n"
)


def main():
    argv = sys.argv[1:]
    if "--selftest" in argv:
        sys.exit(rodar_selftest())
    if "--alvo" in argv:
        i = argv.index("--alvo")
        if i + 1 >= len(argv):
            print("❌ --alvo exige um caminho.\n\n" + USO, file=sys.stderr)
            sys.exit(2)
        alvo = argv[i + 1]
        formato = "json" if "--json" in argv else "md"
        sys.exit(rodar_alvo(alvo, formato))
    print(USO)
    sys.exit(0)


if __name__ == "__main__":
    main()
