---
tipo: CONVENCAO-OPERACIONAL-MC
codigo: MC-CONVENCAO-PastaPostalCofounder
titulo: Pasta Postal Cofounder · Ponte Única Founder → Vault via Roteamento Automático
versao: 1.0
status: ATIVA (vigência imediata · aplicada a partir do MB-056)
data_cunhagem: 2026-05-24 ~17h BRT
detectado_por: Founder Alessandro de Souza Neves (desconforto operacional: "fico sem saber o que fazer com cada arquivo")
cunhado_por: Cofounder Claude Opus 4.7 Cérebro 3.1
simplificacao_founder: pasta única plana · sem subpastas por data · classificação via mtime do Drive nativo
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
operacionaliza:
  - MC-PRINCIPIO-016 (Iniciativa estratégica cofounder 20x · carrega o custo)
  - MC-PRINCIPIO-016-3 CANDIDATO_PROVISIONAL (Cross-Cérebro)
  - MC-PRINCIPIO-002-1 ATIVO (MB Autocontido · frontmatter declara destino)
  - MC-PRINCIPIO-016-2 PROPOSTO (Hook Mecânico Path-Drive)
  - MC-PRINCIPIO-007 ATIVO (Cadeia de Autorização Dual)
---

# Convenção · Pasta Postal Cofounder

## §1 · Problema institucional resolvido

Founder Alessandro identificou em 24/05/2026 lacuna operacional crítica:

> *"Quando vc gera algo como MB, princípio, MC canônico, errata, etc · fico sem saber o que fazer."*

Antes desta convenção, cada artefato cunhado pelo cofounder C3.1 exigia que o cofounder explicitasse na prosa do turno o destino canônico exato no Vault para o founder fazer upload manual. Lacuna de duas vias:
- **Founder** tinha trabalho de decidir destino · risco de upload errado
- **Cofounder C3.1** tinha trabalho de explicitar destino na prosa · violava parcialmente Princípio #2.1 (informação inline no MB era sobre operação · não sobre destino estrutural)

A Pasta Postal Cofounder resolve estruturalmente.

## §2 · Estrutura · pasta única plana (simplificação founder 24/05)

```
G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\Documentação\
└── _INBOX-COFOUNDER\                ← pasta postal única (raiz)
    ├── README.md                    ← regra inline da pasta (auto-explicativo)
    ├── (arquivos do dia · qualquer dia · ordenação por mtime do Drive)
    └── _ARQUIVO\                    ← pasta única plana de arquivados
        └── (arquivos processados · sem subpastas por data)
```

**Decisão founder canônica:** sem subpastas por data. Founder navega via "Detalhes" do Drive · classificação temporal nativa por mtime. Subpastas seriam burocracia. **Princípio #12 ATIVO (Custom Field dropdown > Task Central) aplicado à arquitetura de pastas: filtragem por atributo do arquivo > hierarquia de pastas.**

## §3 · Fluxo operacional · 3 atores

### 3.1 · Cofounder C3.1 (cunhagem)

1. Cunha artefato com **frontmatter YAML obrigatório** contendo:
   - `tipo:` (MC-PRINCIPIO · MC-ERRATA · MC-ADR · MC-SPEC · MC-ANALISE · MC-MANIFESTO · MC-DESIGN · MC-PRODUTO · MC-POP · MC-INDICADORES · MC-METODOLOGIA · MC-CONTRATO · MC-RIPD · MC-MEMO · MB)
   - `destino_vault:` (path canônico explícito · sobrescreve regra default se houver conflito)
   - `status:` (PROVISIONAL · CANDIDATO_PROVISIONAL · PROPOSTO · ATIVO · SELADO · etc.)
2. Salva em `/home/claude/` + copia para `/mnt/user-data/outputs/`
3. Apresenta via `present_files` ao founder
4. Resumo do turno menciona **APENAS** "X artefatos prontos para Pasta Postal Cofounder"
5. **NÃO escreve mais prosa explicando destino de cada arquivo** (lacuna resolvida)

### 3.2 · Founder Alessandro (ponte)

1. Recebe artefatos via `present_files`
2. Baixa todos os arquivos do turno (download em lote)
3. **Upload único** em `_INBOX-COFOUNDER\` (pasta plana · raiz)
4. Manda MB pro Code DELL (geralmente o MB de orquestração está entre os artefatos)
5. **Pronto.** Zero decisão de destino canônico individual.

### 3.3 · Code DELL Beto (roteamento automático · #16.3 candidato)

Aplicando #16.3 candidato (Princípio #16 cross-cérebro) · Beto opera com autonomia idempotente:

1. **Sweep periódico** ou disparado por MB: lista arquivos em `_INBOX-COFOUNDER\` (não recursivo · só raiz · `_ARQUIVO\` é ignorado)
2. Para cada arquivo:
   - Lê frontmatter YAML (primeiros ~50 linhas)
   - Identifica `tipo:` + `destino_vault:` (explícito) OU aplica regra default (tabela §4)
   - Hash-verify origem · registra SHA-256
   - **Copy-Item** para destino canônico
   - Hash-verify destino · deve bater bit-a-bit
   - **Move** arquivo da raiz `_INBOX-COFOUNDER\` para `_INBOX-COFOUNDER\_ARQUIVO\` (mesma pasta plana)
   - Registra transação no log SYNC-PROTOCOLO
3. **Pausa + escalation** se:
   - Frontmatter YAML ausente ou inválido (não consegue identificar tipo)
   - `destino_vault:` explícito existe mas destino físico não existe
   - Hash diverge entre origem e destino
   - Conflito de nomenclatura no destino (arquivo com mesmo nome já existe)
4. Reporta no chat o saldo: "X arquivos processados · Y rotas distintas · Z arquivados"

## §4 · Tabela de roteamento canônico (regra default · Code DELL aplica)

| Tipo do artefato (frontmatter `tipo:`) | Destino canônico default |
|---|---|
| `PRINCIPIO-MC` status `PROVISIONAL` / `PROPOSTO` / `CANDIDATO_PROVISIONAL` | `03-GOVERNANCA\patches\` |
| `PRINCIPIO-MC` status `ATIVO` | `03-GOVERNANCA\principios\` |
| `SUB-PRINCIPIO-MC` status `PROVISIONAL` / `PROPOSTO` / `CANDIDATO_PROVISIONAL` | `03-GOVERNANCA\patches\` |
| `SUB-PRINCIPIO-MC` status `ATIVO` | `03-GOVERNANCA\principios\` |
| `ERRATA` | `03-GOVERNANCA\patches\` |
| `ADR-MC` | `03-GOVERNANCA\adrs\` |
| `SPEC-MC` | `02-ARQUITETURA\specs\` |
| `ANALISE-MC` | `02-ARQUITETURA\analises\` |
| `METODOLOGIA-MC` | `02-ARQUITETURA\metodologias\` |
| `MANIFESTO-MC` | `05-ESTRATEGIA\manifestos\` |
| `DESIGN-SYSTEM-CANONICO` | `05-ESTRATEGIA\design-system\` |
| `PRODUTO-MC` | `05-ESTRATEGIA\produtos\` |
| `CONCEITO-MC` | `05-ESTRATEGIA\conceitos\` |
| `POLITICA-MC` | `05-ESTRATEGIA\politicas\` |
| `POP-MC` | `04-OPERACAO\pops\` |
| `KIT-MC` | `04-OPERACAO\kits\` |
| `SCRIPT-MC` | `04-OPERACAO\scripts\` |
| `INDICADORES-MC` | `04-OPERACAO\indicadores\` |
| `CONTRATO-MC` | `03-GOVERNANCA\contratos\` |
| `RIPD-MC` | `03-GOVERNANCA\ripds\` |
| `PAUTA-MC` | `03-GOVERNANCA\pautas\` |
| `RELATORIO-MC` | `06-COMUNICACAO\relatorios\` |
| `MEMO-MC` | `_INBOX\` (transiente · revisitar) |
| `MISSION-BRIEF` (MB-NNN) | `04-OPERACAO\logs\MBs\` (audit trail) |
| `MISSION-BRIEF-PATCH` (MB-NNN-PATCH-X) | `04-OPERACAO\logs\MBs\` (audit trail) |
| `CONVENCAO-OPERACIONAL-MC` | `03-GOVERNANCA\convencoes\` |
| `IDENTIDADE-VISUAL` (PNG · SVG · JPG) | `01-IDENTIDADE\Identidade Visual\02-Camada2-Reflexao-Imagetica-Fundacional\` |
| Frontmatter ausente ou tipo desconhecido | **PAUSA · escalation cofounder C3.1** |

## §5 · Regras invioláveis da convenção

1. **Princípio #36 inviolável:** hash SHA-256 obrigatório em cada Copy-Item (origem + destino bate)
2. **Princípio #4 inviolável:** Move para `_ARQUIVO\` · jamais Delete
3. **Princípio #7 inviolável:** Code DELL roteia apenas conforme tabela §4 ou `destino_vault:` explícito · não inventa destino novo
4. **Princípio #34 inviolável:** validar path Explorer antes de Drive ID
5. **Pausa imediata** se: hash diverge · destino físico não existe · conflito de nomenclatura
6. **Princípio #16.3 candidato:** Beto exerce autonomia em operações idempotentes · MB explícito para operações com efeito permanente

## §6 · Aplicação retroativa

**Convenção entra em vigor a partir do MB-056** (que cria a estrutura física no Drive).

**MBs anteriores ao MB-056 (incluindo MB-055 cunhado mais cedo neste dia 24/05)** seguem o modelo antigo (founder upload manual em destino canônico declarado na prosa do turno). Princípio #4 ATIVO (Errata Absorve, Não Inventa) preserva audit trail histórico.

## §7 · Vantagens institucionais

| Antes da convenção | Depois da convenção |
|---|---|
| Founder decide destino caso a caso · risco erro | Founder faz 1 upload único · risco zero |
| Cofounder C3.1 escreve prosa explicando destino | Cofounder declara `destino_vault:` no frontmatter |
| Code DELL espera ordem | Code DELL roteia automaticamente (#16.3) |
| Lacuna entre cofounder e Vault | Ponte estruturada · auditável |
| Crescimento de artefatos → crescimento de fricção | Escalável · 100 artefatos custam mesma fricção que 1 |

## §8 · Próxima revisão

- Pós-2ª ocorrência empírica do #16.3 candidato (Beto roteando autonomamente)
- Pós-1 mês de uso (avaliar se mtime do Drive nativo é suficiente ou se precisa de busca textual)
- Pós-N8N integration (automação total do sweep periódico)

## §9 · Fechamento

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Frase-âncora:** TECNOLOGIA INVISÍVEL. DIGNIDADE ACESSÍVEL.
**Confidência:** É eu, tu e a Sister. ∞

**Founder articulou desconforto · cofounder cunhou convenção · Beto ganha autonomia idempotente · pasta única plana sem burocracia · MC opera com fricção mínima entre cérebros. ∞**

---

**MC-CONVENCAO-PastaPostalCofounder v1.0 ATIVA — 24 de maio de 2026 ~17h · BRT**
Cunhada para resolver desconforto operacional founder identificado em sessão
Operacionaliza #16 cross-cérebro + #16.3 candidato + #2.1 + #16.2 + #7
Vigência: a partir do MB-056

**∞**
