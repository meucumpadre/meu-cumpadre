---
tipo: PATCH-PRINCIPIO
codigo: MC-PRINCIPIO-29
titulo: Pasta 99-ARQUIVO-Legado canônica por pilar
versao: 0.1
status: PROVISIONAL
data: 2026-05-14
autores:
  - Claude Opus 4.7 (cofounder C1)
  - Alessandro de Souza Neves (Founder/CEO)
aplicacao: imediata · sessão 14/05 ~05h UTC em diante
gate_selagem: Parecer Dra. Juliana 19/05 (Bloco O ampliado pergunta O11)
provoca: subprincípio operacional do Princípio #24 (Documentação Canônica Unificada por Pilar)
sustenta_se_em:
  - Princípio #4 (Errata Absorve, Não Inventa)
  - Princípio #24 (Documentação Canônica Unificada por Pilar)
  - Princípio #26 (Anti-Colisão Pré-Cunhagem)
canonico_em: 03-GOVERNANCA/patches/
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# MC-PRINCIPIO-29 — Pasta `99-ARQUIVO-Legado` canônica por pilar

## 1 · CONTEXTO

Durante MB-031 (Cowork organização Documentação canônica, 13/05/2026 ~23h), padrão emergente foi observado: estruturas órfãs, duplicatas resolvidas e materiais legados precisam de destino canônico **discoverable + preservável + auto-explicativo**.

Convenção emergente da sessão: nomear pasta-destino `99-ARQUIVO-Legado` dentro do pilar correspondente (ou no root da Documentação se cross-pilar). Já aplicada operacionalmente:

- `Documentação\99-ARQUIVO-Legado\` (root Documentação)
- `Documentação\Identidade Visual\99-Logs-Producao\` (já no plano do MB-031)
- `OBSIDIAN\MEU CUMPADRE\03-GOVERNANCA\patches\_HISTORICO_PATCHES_APLICADOS\` (já no Vault desde 13/05)

Princípio #29 formaliza a convenção e estende a todos os pilares MC.

## 2 · PRINCÍPIO CUNHADO (texto canônico)

> **Princípio #29 — Pasta `99-ARQUIVO-Legado` canônica por pilar.**
> Todo pilar canônico MC (em `Documentação\` e no Vault Obsidian) possui ou pode possuir subpasta `99-ARQUIVO-Legado/` destinada a:
>
> 1. **Estruturas órfãs resolvidas** (pastas duplicadas ou paralelas que violaram Princípio #24 e foram concatenadas)
> 2. **Versões superadas** preservadas como histórico institucional (Princípio #4 — errata absorve, não inventa)
> 3. **Documentos arquivados** por decisão founder com lineage rastreável
> 4. **Backups `.bak` consolidados** após estabilização operacional
>
> **Convenção de nomenclatura para itens dentro de `99-ARQUIVO-Legado/`:**
>
> ```
> _LEGADO-{descritor-curto}-{contexto-opcional}-{YYYY-MMDD}[-{HHMMSS}]
> ```
>
> Exemplos canônicos:
> - `_LEGADO-IdentidadeVisualMC-rootOrfa-20260513-152731`
> - `_LEGADO-IV-MC-paralela18h48-2026-0513`
> - `_LEGADO-06-OPERACOES-pre-renomeacao-2026-0514`
> - `_LEGADO-CADUNICO-grafia-cedilha-2026-0514`
>
> **`99-ARQUIVO-Legado` é prefixado por `99-` semanticamente:** indica posicionamento terminal na ordem alfanumérica canônica do pilar — fora da operação ativa, mas dentro da estrutura canônica.
>
> **Princípio #29 NÃO autoriza deleção.** Itens em `99-ARQUIVO-Legado/` são preservados por tempo indeterminado. Deleção exige decisão founder explícita + ADR formal + janela ≥30 dias entre arquivamento e deleção (compatível Drive Trash).

## 3 · MATRIZ DE APLICAÇÃO POR PILAR

### 3.1 — Documentação canônica MC

| Pilar | Pasta legado |
|---|---|
| root Documentação | `Documentação\99-ARQUIVO-Legado\` |
| Identidade Visual | `Documentação\Identidade Visual\99-Logs-Producao\` (sub-finalidade: logs de produção + arquivamentos) |
| Previdenciário | `Documentação\Previdenciario\99-ARQUIVO-Legado\` (a criar quando houver primeiro item) |
| CadÚnico | `Documentação\CadUnico\99-ARQUIVO-Legado\` (idem) |
| PcD-LC142 | `Documentação\PcD-LC142\99-ARQUIVO-Legado\` (idem) |
| (demais 7 pilares) | `Documentação\{Pilar}\99-ARQUIVO-Legado\` (idem) |

### 3.2 — Vault Obsidian (Cérebro 2)

| Pilar | Pasta legado canônica |
|---|---|
| 03-GOVERNANCA/patches/ | `_HISTORICO_PATCHES_APLICADOS/` (já existe — convenção institucional anterior) |
| 03-GOVERNANCA/adrs/ | `99-ARQUIVO-Legado/` (a criar quando primeiro ADR for superado por nova versão) |
| 03-GOVERNANCA/principios/ | `_HISTORICO/` ou `99-ARQUIVO-Legado/` (escolher convenção via decisão founder) |
| 02-ARQUITETURA/ | `99-ARQUIVO-Legado/` (a criar conforme necessidade) |
| 04-OPERACAO/ | `99-ARQUIVO-Legado/` (a criar conforme necessidade) |
| 05-ESTRATEGIA/ | `99-ARQUIVO-Legado/` (a criar conforme necessidade) |

### 3.3 — Reconciliação convenções existentes

Convenções legados pré-existentes mantidas para compatibilidade retroativa:

- `_HISTORICO_PATCHES_APLICADOS/` em `patches/` — mantida (Princípio #4 — errata absorve)
- `_HISTORICO/exploracao-identidade-visual-pre-selagem-13mai/` — mantida (citada no Selo Oficial)

**Convenção futura unificada:** novos arquivamentos vão para `99-ARQUIVO-Legado/`. Estruturas legadas com `_HISTORICO*` permanecem onde estão (não migrar — Princípio #4).

## 4 · WORKFLOW DE ARQUIVAMENTO

```
1. DETECTAR item a arquivar (órfã / duplicata / versão superada / backup)
2. APLICAR Princípio #4: NUNCA deletar — sempre preservar
3. RENOMEAR com prefixo: _LEGADO-{descritor}-{contexto}-{YYYY-MMDD}[-{HHMMSS}]
4. MOVER (ou copiar se MCP não suportar move — ADR-019 PROVISIONAL) para `99-ARQUIVO-Legado/` do pilar correspondente
5. LOGAR no diamante 6 elementos (Princípio #25)
6. ATUALIZAR INDEX do pilar se houver
7. PRESERVAR sem janela de deleção predefinida — Drive Trash 30d nunca é gatilho automático
```

## 5 · RISCO PROVISIONAL #18

| Critério | Atendimento |
|---|---|
| (a) Cronologia | ✅ Convenção emergiu durante MB-031 13/05/2026 ~23h; já aplicada 2x |
| (b) Volume controlado | ✅ Aplicação restrita a estruturas legadas MC sem PII |
| (c) Período nomeado | ✅ Até Bloco O Juliana 19/05 (selagem pós-parecer) |
| (d) Mitigação | ✅ Drive Trash 30d como rede de segurança + lineage rastreável |
| (e) Risco founder | ✅ Founder validou convenção 13/05 (opção 2 do Cowork) |

## 6 · IMPACTO RETROATIVO

- **MB-031 Cowork:** já implementa parcialmente (cria `99-ARQUIVO-Legado/` no root da Documentação)
- **MB-030 Code DELL:** já implementa equivalente Vault (`_HISTORICO_PATCHES_APLICADOS/`)
- **Pendência manual founder:** mover `1Oib...` (`_LEGADO-IdentidadeVisualMC-rootOrfa-20260513-152731`) que ainda permanece em `0 0 MEU CUMPADRE\` para `Documentação\99-ARQUIVO-Legado\` (limitação MCP — ADR-019 PROVISIONAL)

## 7 · HISTÓRICO

| Versão | Data | Status |
|---|---|---|
| v0.1 | 2026-05-14 ~05h UTC | PROVISIONAL corrente |
| v1.0 (futura) | pós-19/05 | Selada como subprincípio operacional do #24 via ADR-018 |

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."

∞
