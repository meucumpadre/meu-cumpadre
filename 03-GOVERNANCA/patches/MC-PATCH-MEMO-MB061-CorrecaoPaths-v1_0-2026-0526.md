---
tipo: PATCH-MEMO
codigo: MC-PATCH-MEMO-MB061-CorrecaoPaths
nome: Patch Memo MB-061 v2.0 · Correção de 2 paths §2.1 pós-MB-058 v2.0 execução real
versao: v1.0
data: 2026-05-26
status: PROVISIONAL (Princípio #19 · patch temporário · gate v2.1 SELADO R2 dedicada)
escopo: Correção pontual §2.1 de MC-MB-061-Setup-Git-Inicial-Vault-MC-v2_0-2026-0524.md
patch-target: MC-MB-061-Setup-Git-Inicial-Vault-MC-v2_0-2026-0524.md (linhas 86 e 92)
autor: Claude Opus 4.7 Cérebro C3.1 (Cofounder Intelectual) × Alessandro de Souza Neves (Founder/CEO · operador único TALÃO)
detectado-por: Code TALÃO C4 (sweep pré-execução MB-061 v2.0 · post-mortem MB-058 v2.0 ~1s)
classificacao: PATCH OPERACIONAL — não-recunhagem · não-reescrita · ajuste cirúrgico in-flight autorizado
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
ancora-biblica: Provérbios 31:8 — "Abre a tua boca a favor do mudo."
tags: [mc/patch-memo, mc/mb-061, mc/git-substrato, errata-derivada-10, errata-derivada-11, principio-58-candidato]
principios_invocados:
  - "#4 Errata Absorve, Não Inventa (MB-061 v2.0 preservada · patch é overlay não-destrutivo)"
  - "#19 Patches são Instrumentos Temporários (vive em 03-GOVERNANCA/patches/ · gate v2.1 SELADO R2)"
  - "#1b Teste antes de Afirmar Funcional (Code TALÃO detectou em sweep · honrou gate antes de improvisar)"
  - "#52 candidato · Adaptação in-flight autorizada quando C3.1 antecipa errata pré-execução"
  - "#58 candidato · UTF-8 sem BOM via System.IO.File em PS 5.1 PT-BR"
origem-cadeia-causal:
  - "Errata-mãe #10 (24/05) absorvida em Memorial v1.1 26/05"
  - "D2 founder 26/05 · Memorial v1.1 ocupa slot v1.0 na MB-058 v2.0 §2"
  - "MB-058 v2.0 §2 prescreveu mission-briefs\ como canônico para MBs (correto · Princípio #2 vocabulário)"
  - "MB-061 v2.0 §2.1 cunhada antes da finalização D2/D4 · carrega 2 paths obsoletos"
  - "Code TALÃO sweep pós-MB-058 detectou divergência (~1s · zero falsos positivos)"
gate-promocao-v2_1: "MB-061 v2.0 → v2.1 SELADA em R2 dedicada (primeira semana junho/2026) · integra este patch + revisita 05-ESTRATEGIA/manifestos/ + cadeia erratas #10+#11+#58 cunhada formal"
---

# MC-PATCH-MEMO MB-061 v2.0 · Correção de 2 paths §2.1

**Patch operacional cirúrgico · Code TALÃO autorizado a adaptar in-flight § 2.1 da MB-061 v2.0 conforme especificação abaixo · não-recunhar a MB · não-mover v2.0 para legado · gate v2.1 SELADA cunhada em R2 dedicada futura.**

---

## §1 · CONTEXTO DA DIVERGÊNCIA

Code TALÃO executou MB-058 v2.0 em ~1 segundo (14/14 hashes íntegros · 5 pastas canônicas criadas · INBOX preservado). Durante o sweep pré-execução MB-061 v2.0, capturou 2 paths em `§2.1` (linhas 86 e 92 do script PowerShell `$prerequisitos_mb058` + `$prerequisitos_mb059`) que **abortariam** a execução da MB-061 v2.0 porque:

1. **Linha 86** (path Memorial-Errata-10): a MB-061 v2.0 espera `v1_0-2026-0524.md` literal, mas a decisão Founder **D2** (26/05) determinou que `v1_1-2026-0526.md` ocupa o slot canônico (v1.0 arquivada em `99-ARQUIVO-Legado\v1-pre-errata-10\` por Princípio #4).

2. **Linha 92** (path MB-059 v2.0): a MB-061 v2.0 espera MB-059 em `03-GOVERNANCA\instancias-ia\voo-clr001\`, mas a MB-058 v2.0 **§2** (corretamente) persistiu em `04-OPERACAO\mission-briefs\` (destino canônico para MBs · Princípio #2 vocabulário institucional MC).

Ambas as divergências são **bugs em MB-061 v2.0** cunhada por C3.1 antes da finalização das 5 decisões Founder sobre MB-058 v2.0 (que só foram tomadas em 26/05). MB-058 §2 está correta; MB-061 §2.1 carrega paths obsoletos.

---

## §2 · CORREÇÕES PONTUAIS (PATCH IN-FLIGHT)

Code TALÃO aplica as 2 substituições abaixo **diretamente em memória** durante a execução da MB-061 v2.0 §2.1 (não-editar o arquivo MB-061 v2.0 no Vault · preservar #4):

### 2.1 · Substituição 1 (Memorial v1.0 → v1.1)

**Linha 86 do script PowerShell `$prerequisitos_mb058`:**

```powershell
# ANTES (obsoleto · MB-061 v2.0 literal)
"$vault\05-MEMORIAL\MC-MEMORIAL-Errata-10-OperadorTALAO-v1_0-2026-0524.md"

# DEPOIS (patch in-flight v1.1)
"$vault\05-MEMORIAL\MC-MEMORIAL-Errata-10-OperadorTALAO-v1_1-2026-0526.md"
```

### 2.2 · Substituição 2 (MB-059 path voo-clr001 → mission-briefs)

**Linha 92 do script PowerShell `$prerequisitos_mb059`:**

```powershell
# ANTES (obsoleto · MB-061 v2.0 literal)
"$vault\03-GOVERNANCA\instancias-ia\voo-clr001\MC-MB-059-VooCLR001-Configuracao-Inicial-v2_0-2026-0524.md"

# DEPOIS (patch in-flight · destino canônico MBs)
"$vault\04-OPERACAO\mission-briefs\MC-MB-059-VooCLR001-Configuracao-Inicial-v2_0-2026-0524.md"
```

---

## §3 · ESCOPO LIMITADO DO PATCH

✅ **Patch SÓ aplica-se a §2.1 (linhas 86 + 92)** · resto da MB-061 v2.0 (§§0-13 fora §2.1) executa **literalmente** como cunhada.
✅ **Code TALÃO não-edita o arquivo MB-061 v2.0** persistido em `04-OPERACAO\mission-briefs\` · patch é **overlay em memória** durante runtime do script.
✅ **MB-061 v2.0 segue PROVISIONAL** · gate v2.1 SELADA = R2 dedicada futura (junho/2026) integra este patch + revisita 05-ESTRATEGIA/manifestos/ + cadeia erratas formal.

❌ **NÃO se aplica:** Fase 9 hash bit-a-bit (Princípio #36 · executa como cunhada) · Fase 12 validação autoria Founder (executa como cunhada) · §10 §11 §12 §13 (executam literalmente).

---

## §4 · CADEIA CAUSAL DESTE PATCH

```
Errata-mãe #10 (24/05 · Beto não-opera · Founder operador único · TALÃO)
   ↓ absorvida via Memorial v1.0
Decisão Founder β + Eu Sou (24/05)
   ↓ 4 artefatos v2.0 cunhados em /home/claude/voo-clr001/10-v2-erratta10/
Reentrada cofounder C3.1 sessão fresh (26/05 · pós-compactação)
   ↓ propôs α/β/γ formal
Decisão Founder β + S2 integrada causalmente (26/05)
   ↓ Memorial v1.1 cunhado · 5 decisões D1-D5 resolvidas
Founder uploadou 13 arquivos em INBOX-COFOUNDER raiz (não subpastas)
   ↓ errata #11 candidata confirmada empiricamente
Code TALÃO executou MB-058 v2.0 (~1s · 14 hashes · 5 pastas)
   ↓ sweep pré-MB-061 detectou 2 paths divergentes
ESTE PATCH MEMO (26/05 noite)
   ↓ destrava
Code TALÃO autorizado executar MB-061 v2.0 com patch in-flight
   ↓ libera contador
Gate ADR-020 v2.0 → v2.1 SELADO (7 dias operação real Founder em TALÃO)
```

---

## §5 · PRINCÍPIO #58 CANDIDATO (UTF-8 SEM BOM PT-BR)

Code TALÃO adaptou Fase 7 da MB-058 v2.0 substituindo `Add-Content -Encoding UTF8` por `System.IO.File` + `UTF8Encoding($false)` para evitar BOM (EF BB BF) que corrompe Obsidian sync + git diff + grep PT-BR.

**Texto provisional Princípio #58 (cunhagem R2):**

> "Toda escrita de texto no Vault MC em PowerShell 5.1 PT-BR usa `System.IO.File` + `UTF8Encoding($false)` (UTF-8 sem BOM). `Add-Content -Encoding UTF8` adiciona BOM que corrompe Obsidian sync + git diff. Aplica-se a CLAUDE.md, READMEs, artefatos canônicos. Não-aplicável a JSON/XML."

**Aplicação MB-061 v2.0:** todas as escritas de texto (.gitattributes, .gitignore, CLAUDE.md append, READMEs commit) seguem Princípio #58 candidato · não-aplicável aos comandos `git` nativos (que gerenciam encoding próprio).

---

## §6 · GATE V2.1 SELADA · R2 DEDICADA FUTURA

Primeira semana junho/2026 · janela R2 dedicada protegida absorverá:

1. Cunhagem formal **MB-061 v2.1 SELADA** integrando os 2 paths corretos + Princípio #58 cunhado ATIVO
2. v2.0 da MB-061 arquivada em `99-ARQUIVO-Legado\v2_0-pre-patch-paths\`
3. Este patch memo arquivado em `99-ARQUIVO-Legado\patches-resolvidos\` (Princípio #19 · patch temporário · vida finita)
4. Princípios candidatos #51 (INBOX como source único Drive) + #52 (Adaptação in-flight autorizada) + #58 (UTF-8 sem BOM PT-BR) cunhados ATIVO
5. Revisita manifestos prévios `05-ESTRATEGIA/manifestos/` (Vault MC · pendência declarada Founder em 24/05)

---

## §7 · AUTORIZAÇÃO COFOUNDER C3.1 + FOUNDER

Cofounder C3.1 cunha este patch como **autorização contextual** ao Code TALÃO para aplicar as 2 substituições in-flight durante MB-061 v2.0 §2.1, **mediante**:

- ✅ Founder uploadar este patch em `INBOX-COFOUNDER\` (e/ou persistir em `03-GOVERNANCA\patches\` antes da execução MB-061 v2.0)
- ✅ Founder sinal único de autorização macro à execução MB-061 v2.0 com este patch aplicado

**Code TALÃO lê este patch antes de descer · aplica §2.1 §2.2 · prossegue Fases 2-13 da MB-061 v2.0 literais.**

---

## §8 · FECHAMENTO

Patch memo cirúrgico · cadeia causal preservada (#4) · #19 honrado · Princípio #58 candidato registrado · cadeia erratas #10 + #11 + #51 + #52 absorvida operacionalmente · gate v2.1 SELADA agendado R2 dedicada futura.

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** O diamante é carbono que não desistiu da pressão.
**Âncora bíblica:** Provérbios 31:8 — *"Abre a tua boca a favor do mudo."*
**Frase-âncora:** Tecnologia invisível. Dignidade acessível.
**Confidência operacional do quarteto:** *"É eu, tu, a Anciã e o Voo CLR001."*
**Patch MB-061 §2.1:** 2 substituições in-flight autorizadas · gate v2.1 SELADA R2

**∞**

---

**MC-PATCH-MEMO-MB061-CorrecaoPaths v1.0**
Cunhado em 26/05/2026 (noite) · Code TALÃO autorizado a aplicar §2.1 §2.2 in-flight durante MB-061 v2.0
Autor: Claude Opus 4.7 Cérebro C3.1 (Cofounder Intelectual · esta guia) × Alessandro de Souza Neves (Founder/CEO · operador único TALÃO)
Persistência canônica Vault: `03-GOVERNANCA\patches\` (após upload Founder INBOX-COFOUNDER)
Gate v2.1 SELADA: R2 dedicada primeira semana junho/2026

∞
