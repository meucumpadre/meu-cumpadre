#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gerar-manual-rua.py — Builder do Manual Operacional do Registro de Unidades Agênticas
=====================================================================================
Renderiza MC-MANUAL-Registro-Unidades-Agenticas-v1_0-2026-0603.pdf a partir de HTML
print-tuned (weasyprint · CSS completo). Manual de PRODUTO + GOVERNANÇA + diagrama
ASCII, na linguagem do Founder: prático, didático, interativo.

PRINCÍPIO "gerado, não mantido": o PDF é projeção deste builder. Não editar o PDF;
editar aqui e regerar. Zona Verde (método/produto · zero PII). NÃO selado, NÃO no Vault.

Uso:  python3 02-ARQUITETURA/manuais/gerar-manual-rua.py
Hierarquia: D > C > V · Proof-First · v1.0 · 2026-06-03
"""
import os
from weasyprint import HTML

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "MC-MANUAL-Registro-Unidades-Agenticas-v1_0-2026-0603.pdf")

# ── diagrama ASCII (≤ 78 colunas · cabe em A4 a 8.5pt monospace) ─────────────
DIAGRAMA = r"""        ┌──────────────────────────────────────────────────────────┐
        │            FOUNDER  ·  cabeça única  (#50.2)               │
        │      lê o cockpit · decide · sela · liga a captura         │
        └──────┬────────────────────┬───────────────────────┬───────┘
               │ abre               │ consulta              │ decide (R2)
               ▼                    ▼                       ▼
  ┌──────────────────┐  ┌────────────────────┐  ┌──────────────────────┐
  │ L6 · COCKPIT     │  │ L1 · REGISTRO       │  │ L5 · TELEMETRIA      │
  │ painel-mc.html   │◀─┤ registro-…json      ├─▶│ ler-audit.py         │
  │ caixa de         │lê│ a verdade p/ máquina │lê│ ranking · ⚰ critério │
  │ ferramentas +POP │  │ (18 UAs · 100%)      │  │ de morte · LGPD      │
  └──────────────────┘  └─────────▲──────────┘  └──────────▲───────────┘
                                  │ GERA                     │ lê o log
                        ┌─────────┴──────────┐    ┌──────────┴─────────┐
                        │ gerar-registro.py   │    │ audit.jsonl         │
                        │ gerar-cockpit.py    │    │ log ao vivo ·       │
                        └─────────▲──────────┘    │ gitignored (efêmero)│
                                  │ varre          └──────────▲─────────┘
                                  │                           │ +1 linha
  ┌───────────────────────────────┴───────────┐   ┌──────────┴─────────┐
  │ .claude/   ·   A FONTE DA VERDADE          │   │ mc-audit.py         │
  │ skills · agents · hooks · workflows        ├──▶│ hook emissor ·      │
  │ cada UA carrega seu bloco  « rua: »        │   │ FIREWALL LGPD       │
  └────────────────────────────────────────────┘   └─────────────────────┘
        ▲                                                    ▲
        └─── você edita AQUI (a fonte) ───┐      ┌─── grava SÓ metadado ──┘
                                          │      │   (id da UA · zero PII)
                              "gerado, não mantido": muda a fonte → regenera."""


def chip(txt, cls):
    return f'<span class="chip {cls}">{txt}</span>'


HTML_DOC = f"""<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="utf-8">
<style>
  @page {{
    size: A4; margin: 20mm 16mm 18mm 16mm;
    @top-right {{ content: "Manual RUA · v1.0"; font: 8pt 'DejaVu Sans'; color:#a08b3a; }}
    @bottom-center {{ content: "MC · Meu Cumpadre · Zona Verde · D > C > V"; font:7.5pt 'DejaVu Sans'; color:#9a9a9a; }}
    @bottom-right {{ content: counter(page) " / " counter(pages); font:8pt 'DejaVu Sans'; color:#777; }}
  }}
  @page :first {{ @top-right {{ content: ""; }} }}
  * {{ box-sizing: border-box; }}
  body {{ font-family:'DejaVu Sans', sans-serif; font-size:10.2pt; line-height:1.5; color:#23201a; }}
  h1,h2,h3 {{ color:#7a5c00; font-weight:bold; line-height:1.2; }}
  h2 {{ font-size:15pt; margin:18px 0 6px; padding-bottom:3px; border-bottom:2px solid #d9c463;
       break-after:avoid; }}
  h3 {{ font-size:11.5pt; margin:13px 0 3px; color:#9a7d0a; break-after:avoid; }}
  p {{ margin:5px 0; }}
  code {{ font-family:'DejaVu Sans Mono', monospace; font-size:9pt; background:#f3eecf;
         padding:1px 4px; border-radius:3px; color:#5a4500; }}
  a {{ color:#8a6d00; text-decoration:none; }}
  ul,ol {{ margin:5px 0 5px 0; padding-left:20px; }}
  li {{ margin:3px 0; }}
  table {{ border-collapse:collapse; width:100%; margin:8px 0; font-size:9.2pt; break-inside:auto; }}
  th {{ background:#7a5c00; color:#fff; text-align:left; padding:5px 7px; font-size:9pt; }}
  td {{ border:1px solid #ddd2a8; padding:5px 7px; vertical-align:top; }}
  tr:nth-child(even) td {{ background:#faf7e8; }}

  /* blocos */
  pre.diagram {{ font-family:'DejaVu Sans Mono', monospace; font-size:8.5pt; line-height:1.18;
    background:#1c160c; color:#f0e6c8; padding:14px 12px; border-radius:8px; white-space:pre;
    border:1px solid #4a3a1c; break-inside:avoid; }}
  pre.cmd {{ font-family:'DejaVu Sans Mono', monospace; font-size:9pt; background:#15130d;
    color:#e8dfc0; padding:10px 12px; border-radius:7px; white-space:pre-wrap; break-inside:avoid;
    border-left:4px solid #b8860b; }}
  pre.cmd .c {{ color:#8a9a6a; }}

  .box {{ border:1px solid #d9c463; border-radius:8px; padding:10px 13px; margin:10px 0;
    background:#fcfaef; break-inside:avoid; }}
  .box.try {{ border-color:#3fae6b; background:#f0faf3; }}
  .box.warn {{ border-color:#d2563f; background:#fdf2ef; }}
  .box.gate {{ border-color:#5b8aa6; background:#eef5f9; }}
  .box .t {{ font-weight:bold; font-size:9.5pt; text-transform:uppercase; letter-spacing:.4px;
    display:block; margin-bottom:4px; }}
  .box.try .t {{ color:#2c8a52; }} .box.warn .t {{ color:#b23e28; }}
  .box.gate .t {{ color:#3f6f8c; }} .box .t {{ color:#9a7d0a; }}

  .chip {{ display:inline-block; font-size:8pt; font-weight:bold; padding:1px 7px; border-radius:10px;
    border:1px solid; white-space:nowrap; }}
  .r1 {{ color:#3f6f8c; border-color:#5b8aa6; background:#eef5f9; }}
  .r2 {{ color:#9a6f0a; border-color:#e2a32b; background:#fcf3df; }}
  .r3 {{ color:#b23e28; border-color:#d2563f; background:#fdf2ef; }}
  .zv {{ color:#2c8a52; border-color:#3fae6b; background:#f0faf3; }}
  .za {{ color:#9a6f0a; border-color:#e2a32b; background:#fcf3df; }}
  .zr {{ color:#b23e28; border-color:#d2563f; background:#fdf2ef; }}

  .ck {{ font-family:'DejaVu Sans Mono'; color:#7a5c00; }}
  .lead {{ font-size:11pt; color:#4a4234; }}
  hr {{ border:none; border-top:1px solid #e5dcb8; margin:14px 0; }}

  /* capa */
  .cover {{ text-align:center; padding-top:55mm; break-after:page; }}
  .cover .kick {{ color:#a08b3a; font-size:10pt; letter-spacing:3px; text-transform:uppercase; }}
  .cover h1 {{ font-size:30pt; margin:10px 0 2px; color:#6b5000; border:none; }}
  .cover .sub {{ font-size:13pt; color:#8a7c5a; margin-bottom:26px; }}
  .cover .seal {{ font-style:italic; color:#9a8a5a; font-size:10.5pt; margin-top:30px; }}
  .cover .meta {{ margin-top:34px; font-size:9.5pt; color:#777; }}
  .cover .hr {{ width:60px; height:3px; background:#b8860b; margin:18px auto; border:none; }}

  .toc a {{ display:flex; justify-content:space-between; padding:3px 0;
    border-bottom:1px dotted #ddd2a8; font-size:10.4pt; }}
  .toc .n {{ color:#b8860b; font-weight:bold; }}
</style></head><body>

<!-- ─────────────── CAPA ─────────────── -->
<div class="cover">
  <div class="kick">Meu Cumpadre · Infraestrutura de Simetria Informacional</div>
  <h1>Registro de Unidades Agênticas</h1>
  <div class="sub">Manual Operacional &amp; de Governança — o cockpit das suas ferramentas de IA</div>
  <hr class="hr">
  <p class="lead" style="max-width:135mm;margin:0 auto;">Você construiu o <b>plano de controle</b>
  sobre o seu sistema de IA: um mapa vivo de <b>quem são todas as suas ferramentas</b>, em que portão
  cada uma para, que dado sensível pode tocar, quanto custa rodar — e quais valem o lugar que ocupam.</p>
  <div class="seal">"O diamante é carbono que não desistiu da pressão." · Provérbios 31:8</div>
  <div class="meta">
    <b>MC-MANUAL-Registro-Unidades-Agenticas · v1.0 · 2026-06-03</b><br>
    Para: Alessandro (Founder/CEO) &nbsp;·&nbsp; Zona Verde (zero PII) &nbsp;·&nbsp; Derivado · não selado<br>
    Hierarquia inviolável: <b>Dignidade &gt; Compliance &gt; Viabilidade</b>
  </div>
</div>

<!-- ─────────────── SUMÁRIO ─────────────── -->
<h2 id="toc">Sumário</h2>
<div class="toc">
  <a href="#s0"><span><span class="n">0.</span> Em uma frase: o que você tem agora</span><span>›</span></a>
  <a href="#s1"><span><span class="n">1.</span> O mapa mental (diagrama)</span><span>›</span></a>
  <a href="#s2"><span><span class="n">2.</span> As 4 peças — o que cada uma faz</span><span>›</span></a>
  <a href="#s3"><span><span class="n">3.</span> Manual operacional: os 3 fluxos</span><span>›</span></a>
  <a href="#s4"><span><span class="n">4.</span> Governança: as regras que o sistema honra sozinho</span><span>›</span></a>
  <a href="#s5"><span><span class="n">5.</span> O firewall LGPD da telemetria</span><span>›</span></a>
  <a href="#s6"><span><span class="n">6.</span> A decisão que está na sua mão (portão R2)</span><span>›</span></a>
  <a href="#s7"><span><span class="n">7.</span> Diagnóstico rápido (quando algo estranha)</span><span>›</span></a>
  <a href="#s8"><span><span class="n">8.</span> Glossário de bolso</span><span>›</span></a>
</div>

<!-- ─────────────── §0 ─────────────── -->
<h2 id="s0">0 · Em uma frase</h2>
<p class="lead">O <b>Registro de Unidades Agênticas (RUA)</b> é a sua caixa de ferramentas de IA, agora
<b>visível, auditável e honesta</b>. Antes, para saber quais agentes você tinha e como cada um se
comporta, era preciso abrir arquivo por arquivo. Agora um único painel responde.</p>
<div class="box">
  <span class="t">A ideia-mãe — "gerado, não mantido"</span>
  Você <b>nunca</b> edita o Registro à mão. Cada ferramenta carrega a própria ficha (um bloco
  <code>rua:</code>). O Registro é a <b>colheita</b> dessas fichas. Mudou uma ferramenta? Você
  <b>regenera</b> — e a verdade se atualiza sozinha. Um registro mantido à mão mente; um registro
  gerado não tem como divergir da fonte. Isso é o <b>Proof-First</b> aplicado à sua própria casa.
</div>
<p><b>Onde isto mora:</b> tudo vive em <code>.claude/registro/</code> e <code>.claude/hooks/</code>.
É código simples (Python, sem servidor, sem nuvem). Roda no seu Code, local ou na web, igual.</p>

<!-- ─────────────── §1 ─────────────── -->
<h2 id="s1">1 · O mapa mental</h2>
<p>Leia de <b>baixo para cima</b>: a fonte da verdade (o <code>.claude/</code>) está embaixo; o que
você consome (cockpit, telemetria) está em cima; e você, o Founder, no topo — decidindo.</p>
<pre class="diagram">{DIAGRAMA}</pre>
<p style="font-size:9pt;color:#6a6052;">Os números <b>L1…L6</b> são as camadas da stack ASE (Agentic
Systems Engineering). Você implementou <b>L1</b> (registro), <b>L6</b> (cockpit) e <b>L5</b>
(telemetria) — as três que dão visão e decisão.</p>

<!-- ─────────────── §2 ─────────────── -->
<h2 id="s2">2 · As 4 peças — o que cada uma faz</h2>
<table>
  <tr><th>Peça</th><th>O que é, em linguagem simples</th><th>Você roda?</th></tr>
  <tr><td><code>gerar-registro.py</code><br><span class="chip r1">L1</span></td>
      <td>O <b>recenseador</b>. Varre o <code>.claude/</code>, lê a ficha de cada ferramenta e monta
      o Registro (um <code>.json</code> para a máquina + uma tabela <code>.md</code> para você ler).</td>
      <td>Sim — quando criar/mudar uma ferramenta.</td></tr>
  <tr><td><code>gerar-cockpit.py</code><br><span class="chip r1">L6</span></td>
      <td>O <b>vitrinista</b>. Pega o Registro e gera o <code>painel-mc.html</code>: um arquivo único
      que abre em qualquer navegador ou celular — sua caixa de ferramentas com busca, filtros e o
      "manual de cada peça" (POP).</td>
      <td>Sim — depois de regenerar o Registro.</td></tr>
  <tr><td><code>mc-audit.py</code><br><span class="chip r2">L5</span> <span class="chip zv">hook</span></td>
      <td>O <b>relojoeiro silencioso</b>. Quando ligado, anota numa linha qual ferramenta rodou e
      quando — <b>só isso</b>, nunca o conteúdo. Hoje está <b>desligado</b> (decisão sua · §6).</td>
      <td>Não diretamente — ele dispara sozinho, se você ligar.</td></tr>
  <tr><td><code>ler-audit.py</code><br><span class="chip r2">L5</span></td>
      <td>O <b>analista</b>. Lê as anotações e te diz: o que mais roda, o que <b>nunca</b> rodou
      (candidato a cortar), quanto do uso exige sua supervisão, quanto toca dado sensível.</td>
      <td>Sim — quando quiser o retrato de uso.</td></tr>
</table>

<!-- ─────────────── §3 ─────────────── -->
<h2 id="s3">3 · Manual operacional: os 3 fluxos</h2>
<p>Você quase nunca vai usar tudo. Na prática são <b>três situações</b>. Decore estas, ignore o resto.</p>

<h3>Fluxo A · "Criei ou mudei uma ferramenta"</h3>
<p>Toda vez que você adiciona uma skill/agent/hook, ou altera a ficha <code>rua:</code> de uma,
regenere. São dois comandos, nesta ordem:</p>
<pre class="cmd"><span class="c"># 1) recensear o .claude/ → atualiza o Registro</span>
python3 .claude/registro/gerar-registro.py

<span class="c"># 2) reconstruir o painel a partir do Registro novo</span>
python3 .claude/registro/gerar-cockpit.py</pre>
<div class="box try"><span class="t">✔ Tente agora (custa 5 segundos)</span>
Rode os dois comandos acima. Se aparecer <code>100% de 18</code>, está saudável: todas as 18
ferramentas têm ficha completa. Se aparecer ferramenta em <b>"incompletas"</b> ou
<b>"não-instrumentadas"</b>, é dívida — falta preencher a ficha <code>rua:</code> daquela peça.</div>

<h3>Fluxo B · "Quero ver minha caixa de ferramentas"</h3>
<p>Abra o painel no navegador (ou mande para o seu celular — é um arquivo só, sem servidor):</p>
<pre class="cmd">.claude/registro/painel-mc.html</pre>
<p>Lá dentro: <b>busca</b> por palavra, <b>filtros</b> por portão (R1/R2/R3) e por zona LGPD, e
<b>clique em qualquer card</b> para abrir o POP — quando usar, o que entrega, onde para, o que
<b>não confundir</b> com o quê.</p>

<h3>Fluxo C · "Quero saber o que vale a pena"</h3>
<p>O retrato de uso (só funciona depois que a telemetria estiver ligada — §6). Para experimentar
hoje, rode contra o <b>exemplo sintético</b> que já vem junto:</p>
<pre class="cmd"><span class="c"># retrato sobre dados de EXEMPLO (sintéticos · rotulados)</span>
python3 .claude/registro/ler-audit.py --fixture

<span class="c"># quando a captura estiver ligada, sobre o uso REAL:</span>
python3 .claude/registro/ler-audit.py</pre>
<div class="box"><span class="t">O que o analista te entrega</span>
<b>Ranking</b> (o que ganha seu lugar) · <b>⚰ Critério de morte</b> (o que nunca rodou — candidato a
rasgar) · <b>Carga de governança</b> (quantas execuções exigiram sua revisão R2/R3) · <b>Superfície
LGPD</b> (quanto do uso tocou zona Amarela/Vermelha).</div>

<!-- ─────────────── §4 ─────────────── -->
<h2 id="s4">4 · Governança: as regras que o sistema honra sozinho</h2>
<p>O Registro não só <i>descreve</i> governança — ele <b>se submete</b> a ela. Cada ferramenta
declara, na própria ficha, como se comporta. Estes são os eixos:</p>

<h3>Os três portões (onde cada ferramenta para no humano)</h3>
<table>
  <tr><th>Portão</th><th>Significa</th><th>Quem decide</th><th>Hoje</th></tr>
  <tr><td>{chip('R1','r1')}</td><td>Operacional corrente — a ferramenta segue, você decide soberano.</td>
      <td>Founder</td><td>14 UAs</td></tr>
  <tr><td>{chip('R2','r2')}</td><td>Fundacional (ADR, princípio, arquitetura) — para e chama você + a
      Sister Anciã.</td><td>Founder + Anciã</td><td>1 UA</td></tr>
  <tr><td>{chip('R3','r3')}</td><td>Soberania individual / OAB / LGPD — para e chama a Dra. Juliana
      <b>antes</b> de selar.</td><td>+ Dra. Juliana</td><td>3 UAs</td></tr>
</table>

<h3>As três zonas (o que cada ferramenta pode tocar de dado)</h3>
<table>
  <tr><th>Zona</th><th>Significa</th><th>Hoje</th></tr>
  <tr><td>{chip('Verde','zv')}</td><td>Método, mercado público, doutrina. <b>Zero PII.</b></td><td>14 UAs</td></tr>
  <tr><td>{chip('Amarela','za')}</td><td>Toca dado de caso de forma limitada/indireta.</td><td>2 UAs</td></tr>
  <tr><td>{chip('Vermelha','zr')}</td><td>Toca PII (CPF, NB, CID, CNIS). Stack soberana, regra dura.</td><td>2 UAs</td></tr>
</table>

<div class="box"><span class="t">Os pilares que toda ferramenta jura honrar</span>
<b>D &gt; C &gt; V</b> (dignidade acima de tudo) · <b>Firewall OAB</b> (MC é atividade-meio, nunca
exerce advocacia) · <b>Proof-First</b> (zero dado fabricado) · <b>LGPD</b> (PII só na stack soberana)
· <b>#50.2 Cabeça Única</b> (nenhum agente é autônomo — sempre para em você). O painel <b>destaca</b>
as ferramentas R2/R3 e <b>nunca</b> oferece "selar" como botão: selo é julgamento humano, a
ferramenta rastreia, não decide.</div>

<h3>⚰ O critério de morte (a cláusula de honestidade)</h3>
<p>A regra mais importante e a mais desconfortável: <b>se em 30 dias o Registro não tiver poupado
uma decisão ou um retrabalho seu, ele estava errado e deve ser rasgado.</b> Crisálida pré-revenue
não financia plataforma especulativa. O próprio analista (Fluxo C) te dá a munição para esse corte
— inclusive sobre as ferramentas <i>dele mesmo</i>.</p>

<!-- ─────────────── §5 ─────────────── -->
<h2 id="s5">5 · O firewall LGPD da telemetria</h2>
<p>Esta é a parte que merece sua confiança total, então vale entender <b>por que é segura por
construção</b> — não por promessa.</p>
<p>Quando ligada, a telemetria observa <b>toda</b> invocação de ferramenta — inclusive as Vermelhas
(<code>novo-cliente</code>, <code>handoff-juridico</code>), que processam casos reais. O medo legítimo
seria: "e se o log vazar um CPF?". <b>Não pode.</b> O emissor lê <b>uma única chave</b> da invocação —
o <i>nome</i> da ferramenta — e <b>descarta todo o resto</b> (argumentos, prompt, anexos). A linha
gravada só pode conter este conjunto fechado:</p>
<pre class="cmd">ts · evento · ua · tipo · portão · zona · instância · in_registro · sessão_hash</pre>
<div class="box warn"><span class="t">Por que é blindado</span>
Mesmo quando <code>novo-cliente</code> roda com um CPF nos argumentos, o log grava apenas:
<i>"a ferramenta novo-cliente rodou às 14h · portão R1 · zona Vermelha"</i> — que é <b>metadado de
governança</b>, não dado de caso. O <code>session_id</code> é <b>hasheado</b> (conta sessões sem
guardar o id). Resultado: o log é <b>Zona Verde</b>, compartilhável. Testado: payload com CPF/NB/CID →
<b>zero vazamento</b>.</div>

<!-- ─────────────── §6 ─────────────── -->
<h2 id="s6">6 · A decisão que está na sua mão (portão R2)</h2>
<p>A telemetria vem <b>desligada de fábrica</b>. Ligar a captura ao vivo <b>é um ato seu</b> — porque
observar toda invocação, em toda sessão, mexe na arquitetura (portão R2: você + Sister Anciã). O
agente <b>não se autoinstala</b> (#50.2).</p>
<div class="box gate"><span class="t">Como ligar (quando você e a Anciã decidirem)</span>
Adicione um bloco de hook em <code>.claude/settings.json</code> (a instrução exata, copiável, está em
<code>.claude/registro/audit/_LEIA-audit.md</code>). A partir daí, cada uso de ferramenta vira uma
linha no log — e o Fluxo C passa a falar sobre o seu uso <b>real</b>.</div>
<div class="box gate"><span class="t">Por que R2 e não R3</span>
Como o log <b>nunca</b> toca PII (§5), não há fluxo de dado sensível entre instâncias — então
<b>não precisa</b> da Dra. Juliana (R3). Bastam você + a Anciã. <b>Só</b> escalaria para R3 se algum
dia o conjunto fechado de chaves mudasse para tocar dado de caso — o que este desenho proíbe.</div>

<!-- ─────────────── §7 ─────────────── -->
<h2 id="s7">7 · Diagnóstico rápido</h2>
<table>
  <tr><th>Sintoma</th><th>O que significa</th><th>O que fazer</th></tr>
  <tr><td>Painel desatualizado (faltou uma ferramenta nova)</td><td>Você não regenerou.</td>
      <td>Rode o Fluxo A (os 2 comandos).</td></tr>
  <tr><td>Uma ferramenta caiu em <b>"incompletas"</b></td><td>A ficha <code>rua:</code> dela está sem
      um campo obrigatório (★). É fail-closed — visível de propósito.</td>
      <td>Abra a <code>SKILL.md</code> (ou o sidecar do hook) e complete o campo que faltou.</td></tr>
  <tr><td><code>ler-audit.py</code> diz "nenhuma invocação"</td><td>A captura está desligada (normal
      hoje) ou o log ainda está vazio.</td><td>Use <code>--fixture</code> para ver o formato, ou ligue
      a captura (§6).</td></tr>
  <tr><td>Rodei 2× e o arquivo mudou</td><td>Não deveria — os geradores são determinísticos.</td>
      <td>Provavelmente você trocou de commit no meio. O carimbo de origem é o commit, por design.</td></tr>
  <tr><td>"ferramenta rodou FORA do Registro"</td><td>Algo rodou sem ter ficha <code>rua:</code>.</td>
      <td>Dívida de cobertura: instrumente aquela peça.</td></tr>
</table>

<!-- ─────────────── §8 ─────────────── -->
<h2 id="s8">8 · Glossário de bolso</h2>
<table>
  <tr><th>Termo</th><th>Em uma linha</th></tr>
  <tr><td><b>UA</b> (Unidade Agêntica)</td><td>Qualquer ferramenta de IA sua: skill, agent, hook ou workflow.</td></tr>
  <tr><td><b>RUA</b></td><td>O Registro dessas unidades — o assunto deste manual.</td></tr>
  <tr><td><b>Bloco <code>rua:</code></b></td><td>A ficha de governança que cada ferramenta carrega no próprio arquivo.</td></tr>
  <tr><td><b>ASE / L1–L6</b></td><td>As camadas da engenharia de sistemas agênticos. Você fez L1, L5 e L6.</td></tr>
  <tr><td><b>POP</b></td><td>O "modo de usar" de cada ferramenta, que aparece ao clicar no card do painel.</td></tr>
  <tr><td><b>Fail-closed</b></td><td>Na dúvida, fecha: ficha incompleta fica de fora e aparece como dívida — nunca passa batido.</td></tr>
  <tr><td><b>Determinístico</b></td><td>Rodar 2× no mesmo ponto → resultado idêntico. Sem aleatório, sem relógio.</td></tr>
  <tr><td><b>Zona Verde</b></td><td>Sem nenhum dado pessoal. Tudo neste sistema é Zona Verde.</td></tr>
</table>

<hr>
<p style="text-align:center;font-size:9pt;color:#8a7c5a;">
<b>Dignidade &gt; Compliance &gt; Viabilidade</b> · Proof-First · Zona Verde · "gerado, não mantido"<br>
MC-MANUAL-Registro-Unidades-Agenticas · v1.0 · 2026-06-03 · derivado · não selado · não no Vault<br>
<i>"É eu, tu, a Anciã e a esteira. ∞"</i></p>

</body></html>"""


def main():
    HTML(string=HTML_DOC).write_pdf(OUT)
    print(f"✅ Manual gerado: {OUT}")
    print(f"   {os.path.getsize(OUT)} bytes")


if __name__ == "__main__":
    main()
