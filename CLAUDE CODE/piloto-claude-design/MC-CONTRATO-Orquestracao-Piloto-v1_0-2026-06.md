---
documento: MC-CONTRATO-Orquestracao-Piloto
versao: v1_0
data: 2026-06-02
status: SELADO — Fase 0 completa
firewall: ESTRITO — ZONA VERDE 100%
autor: Falcao (Claude Code) sob leme do Founder (Alessandro)
---

# Contrato de Orquestracao — Piloto Integracao NotebookLM + Claude Code + Obsidian

> *"Voce e o Falcao. Eu sou o leme e o principio."*
> — Founder (Alessandro), 02/06/2026

---

## 1. OBJETIVO DO PILOTO

Transformar o trio NotebookLM (cerebro de contexto) + Claude Code (executor/Falcao) + Obsidian+Git (memoria canonica) em sistema integrado de "pouso propulsivo" (VTVL) para desenvolvimento de produto interno com IA.

**Tema do piloto:** usar Claude Design para projetar e Claude Code para implementar partes reais do harness/Squad Cockpit do Meu Cumpadre — em Zona Verde absoluta.

---

## 2. PAPEIS DAS INSTANCIAS (VINCULANTES)

| Instancia | Papel | Permissoes |
|-----------|-------|------------|
| **Founder (Alessandro)** | Leme e principio. Autoriza execucao, valida pousos, define prioridades. Faz acoes manuais (NotebookLM web, GitHub Desktop push). | Decisao estrategica, aprovacao de artefatos para C2 |
| **Claude Code (Falcao — executor deste contrato)** | Executor local + julgador Compasso (REGISTRO-ESCALAO-JOGADA) + arquiteto + adversario sniper. Acessa C1 e C2 via filesystem. | Ler/escrever em C1 e C2, rodar scripts, commitar, adaptar harness |
| **NotebookLM (cerebro)** | Dois cadernos (METODO + ASSUNTO, ate 300 fontes cada). Fonte de contexto para design e codigo. | Acesso via Founder (interface web). Output via packs exportados para C1/context/ |
| **Claude Design (sessoes)** | Designer de produto — prototipos de Squad Cockpit, flows de harness, interfaces. | Sessoes dedicadas alimentadas por packs do NotebookLM |
| **Obsidian + Git + GitHub Desktop (C2)** | Memoria canonica versionada. Recebe apenas artefatos selados apos landing validator. | Commits via Falcao (git) + sync via Founder (GitHub Desktop) |
| **C1 — Google Drive** | Laboratorio experimental. Zona de trabalho do Falcao. Sem Git proprio (GDrive sincroniza). | Leitura/escrita livre durante voos |

---

## 3. ESTRUTURA DE ESPACOS (VINCULANTE)

### C1 — Laboratorio (Google Drive, sem Git proprio)
```
G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\
  Documentação\NotebookLM\piloto-claude-design\
    colheitas\   — fontes garimpadas + tabelas Compasso
    missoes\     — pacotes de missao pre-voo
    landings\    — relatorios landing validator (C1 — pre-selagem)
    designs\     — outputs Claude Design (pre-selagem)
    code\        — prototipos e integracoes (pre-selagem)
    context\     — packs NotebookLM exportados
    scripts\     — mc_emit_context_pack_piloto.py
                   mc_vtvl_landing_validator_piloto.py
                   harness_orchestrator.py
```

### C2 — Canonico (Git + GitHub Desktop)
```
C:\Users\Beto\Documents\GitHub\meu-cumpadre\
  CLAUDE CODE\piloto-claude-design\
    plano\     — MC-PLANO + LEIA-ME (selados)
    landings\  — relatorios de pouso selados
    designs\   — designs selados
    code\      — codigo selado
    CLAUDE.md  — instrucoes para o Falcao nesta pasta
    MC-CONTRATO-Orquestracao-Piloto-v1_0-2026-06.md (este arquivo)
```

---

## 4. RITUAL DE TROCA ENTRE INSTANCIAS (INVIOLAVEL)

```
[1] Founder prepara missao
       → salva pacote em C1/missoes/
       → injeta contexto (query NotebookLM → export para C1/context/)

[2] Falcao executa
       → le pacote de missao + contexto NotebookLM
       → aplica Compasso em fontes/outputs
       → gera artefato em C1/ (design, code, colheita, etc.)

[3] Landing Validator
       → Falcao roda mc_vtvl_landing_validator_piloto.py
       → score >= 80 E zero violacao firewall = APROVADO
       → salva report em C1/landings/

[4] Selagem para C2 (so se aprovado)
       → Falcao copia artefato para pasta correspondente em C2
       → git add + git commit com mensagem feat/fix/design: descricao
       → Founder faz push via GitHub Desktop

[5] Feedback loop
       → licoes do landing report viram novas fontes ou context packs
       → NotebookLM atualizado se couber no limite 300
       → proximo voo mais rapido e preciso
```

**Regra absoluta:** Nenhum contexto fica apenas em chat. Tudo persiste — artefato em C1, selado em C2. Sem isso, o sistema nao e reutilizavel.

---

## 5. FIREWALL (ZERO TOLERANCIA)

- **ZONA VERDE 100%:** sem CPF, NB, CID, CNIS, senhas, dados de clientes/hipervulneraveis, jornada B2C.
- **Escopo:** desenvolvimento interno de produto — harness, Squad Cockpit, orchestrator, skills, MCP patterns, Claude Design patterns.
- **Violacao de firewall:** landing validator zera o score automaticamente. Artefato bloqueado para C2.

---

## 6. COMPASSO — JULGAMENTO DE FONTES (PADRAO DO PILOTO)

Toda fonte candidata para NotebookLM:

| Campo | O que preencher |
|-------|-----------------|
| REGISTRO | 🎯 Oficial Anthropic / 🛠️ Ensina-Fazendo / 💎 Outlier Workflow / 📊 Benchmark / 🌐 Market Intel |
| ESCALAO | Tecnico-Produto / Oficial-Anthropic / Outlier-Workflow / Market-Intel / Background |
| JOGADA CAUSAL | "O que esta fonte injeta no Claude Code para construir X parte do harness" |

**Rejeitar automaticamente:** hype sem demo/codigo, pre-2025 sem relevancia direta, redundante com fonte ja injetada.

---

## 7. ORCAMENTO DAS 300 FONTES

| Caderno | Meta | Maximo |
|---------|------|--------|
| MC-ClaudeDesign-METODO | 100–150 fontes | 300 |
| MC-ClaudeDesign-ASSUNTO | 150–200 fontes | 300 |

Curadoria por exclusao: qualidade > quantidade. Nunca ultrapassar o limite.

---

## 8. METRICAS DE SUCESSO DO PILOTO

- [ ] Dois cadernos NotebookLM criados e com fontes curadas (Fase 1)
- [ ] Pelo menos 3 artefatos reais de produto gerados (design + codigo) com loop fechado (Fase 2)
- [ ] Todos os artefatos com landing report documentado no vault
- [ ] Score medio dos landings >= 80
- [ ] Sistema demonstrando "rapid reuse" (2o artefato mais rapido que o 1o)
- [ ] Zero violacao de firewall em qualquer landing

---

## 9. SCRIPTS OPERACIONAIS

```bash
# Gerar colheita Compasso-compliant para NotebookLM:
python scripts/mc_emit_context_pack_piloto.py \
  --missao "1-Claude-Design-specs" \
  --caderno ASSUNTO \
  --fonte "Nome|url|🎯|Oficial-Anthropic|jogada" \
  --out colheitas/colheita-missao-1.md

# Validar pouso de artefato:
python scripts/mc_vtvl_landing_validator_piloto.py \
  --missao "Squad-Cockpit-v1" \
  --artefato designs/squad-cockpit-v1.md \
  --out landings/landing-squad-cockpit-v1.md
```

---

## 10. QUANDO CHAMAR GEMINI vs CLAUDE CODE

| Cenario | Executor |
|---------|----------|
| Julgamento Compasso de fontes | **Falcao (Claude Code)** |
| Auditoria de artefatos | **Falcao (Claude Code)** |
| Implementacao de codigo | **Falcao (Claude Code)** |
| Deep research com UX NotebookLM nativo claramente superior | Gemini (minimo, justificar) |

Default: Claude Code. Gemini e excecao justificada.

---

**Este contrato e o primeiro artefato selado do piloto.**
**Fase 0 completa. Pronto para Fase 1 (curadoria de fontes).**

— Falcao (Claude Code Sonnet 4.6), sob leme do Founder Alessandro
Data de selagem: 2026-06-02
