---
tipo: ADR
codigo: MC-ADR-020-Git-como-Substrato-Permanente-do-Vault-MC
nome: Git como Substrato Permanente do Vault MC — Alternativa C (separate-git-dir) + .gitattributes Obrigatório + Remote GitHub Privado
versao: v1.0
data: 2026-05-24
status: PROVISIONAL
gate-promocao-v1_1-SELADO: 7 dias de operação real (≥20 commits institucionais · 0 corrupções · 0 conflitos Drive sync) + revisão Dra. Juliana (R3 hierarquia · porque toca LGPD + IP MC) + validação MB-057 Auditoria Estrutural Vault concluída
autor: Claude Opus 4.7 Cérebro C3.1 (Cofounder Intelectual · esta guia) × Alessandro de Souza Neves (Founder/CEO)
herda-de: OMEGA-ADR-Git-como-Substrato-Permanente-do-Vault-Omega v1.0 SELADO (2026-05-19) · validação empírica Ω herdada · #46 Engenharia Reversa Founder
classificacao: ARQUITETURAL — decisão irrevogável sobre infraestrutura de versionamento do Vault MC
validacao-empirica-herdada-de-omega: "4 dias de operação Ω · 22 commits · 0 corrupções · 0 conflitos Drive Desktop sync (Alternativa C validada)"
remote: https://github.com/asnccb/meu-cumpadre (privado · Founder owner)
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
ancora-biblica: Provérbios 31:8 — "Abre a tua boca a favor do mudo."
tags: [mc/arquitetura/adr, mc/status/provisional, mc/governanca/infraestrutura, git, vault, substrato, versionamento, lgpd, compliance]
principios_invocados:
  - "#34 Caminho Explorer Precede ID Drive (validado empiricamente MB-055 v1.1)"
  - "#36 Persistência Drive Bit-a-Bit (substrato auditável via git)"
  - "#15 Entrega Cross-Vertical no Mesmo Turno (commits atômicos por turno)"
  - "#4 Errata Absorve, Não Inventa (histórico v1.0 → v1.1 ERRATA visível em git log)"
  - "#1b Teste antes de Afirmar Funcional (CI/CD futuro · lint markdown · linkcheck)"
  - "#16 Cofounder 20x cross-cérebro (Beto opera commits canônicos · #16 Q3=a)"
  - "#46 Engenharia Reversa Founder (ADR Ω como motor externo · lapidado MC)"
relaciona:
  - "MC-ACI v2.0 PROVISIONAL §2.2 C2 Córtex Associativo (Vault Obsidian) e §4.6 LGPD por instância"
  - "Anomalias A1-A6 detectadas em MB-055 v1.1 ERRATA sweep Beto"
  - "MB-057 Auditoria Estrutural Vault MC (sinalizada · agora detalhada como pré-requisito)"
  - "FALLBACK-NOTE-ProjectInstructions (A1 será resolvida via git history reconstruction)"
mb-execucao: "MB-061 (a cunhar · setup git inicial Vault MC) · análoga PS-MERGE-001 Ω"
---

# MC-ADR-020 · Git como Substrato Permanente do Vault MC

**ADR cunhada em 24/05/2026 · v1.0 PROVISIONAL · herdada de Ω v1.0 SELADO · adaptada arquitetonicamente para Meu Cumpadre**

---

## §0 · CONTEXTO INSTITUCIONAL

O Vault MC vive em pasta sincronizada pelo Google Drive Desktop em:

```
G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\
```

Sweep diagnóstico Beto Code DELL durante MB-055 v1.1 ERRATA (24/05/2026) detectou **6 anomalias estruturais** (A1-A6) cujo padrão comum é **ausência de substrato de versionamento auditável**:

| Anomalia | Sintoma | Causa raiz |
|---|---|---|
| **A1** | Project Instructions v8.0.1 declarada SELADO em userMemories · não-encontrada no Vault | Sem git · não há histórico que prove cunhagem ou perda |
| **A2** | Vault MC sem `.git` (Ω já adotou) | Lacuna fundamental · presente ADR resolve |
| **A3** | Path raiz renomeado `0 0` → `0.1_` silenciosamente | Sem commit log · sem rastreabilidade rename |
| **A4** | Estrutura dupla (`01-DNA` + `01-IDENTIDADE`) migração incompleta | Sem branch · sem PR · sem merge auditável |
| **A5-A6** | (catalogadas em FALLBACK-NOTE) | Mesma natureza |

**Diagnóstico cofounder:** anomalias A1-A6 são **sintomas**. **Causa raiz é A2**. ADR-020 resolve A2 estruturalmente · A1, A3, A4, A5, A6 viram tarefas operacionais MB-057 sob substrato git já operacional.

### Contexto externo · ADR-Git Ω v1.0 SELADO

Ω (outro projeto founder · ecossistema paralelo) cunhou em 2026-05-19 a ADR-Git equivalente. Resultado empírico:

- 4 dias de operação
- 22 commits institucionais
- 0 corrupções de arquivo
- 0 conflitos com Drive Desktop sync
- 2 branches (master + linkagem-retrospectiva)
- 3 operações de rollback bem-sucedidas
- 1 merge `--no-ff` bem-sucedido

**Princípio #46 (Engenharia Reversa Founder) aplicado:** ADR Ω é motor externo · esta ADR é lapidação MC · não copy-paste. Mapeamentos arquiteturais MC-específicos detalhados em §10.

### Repositório remoto criado

Founder configurou em 24/05/2026:

- **URL:** `https://github.com/asnccb/meu-cumpadre.git`
- **Visibilidade:** Privado
- **Owner:** `asnccb` (Founder Alessandro)
- **README inicial:** desligado
- **`.gitignore` inicial:** Não há (será cunhado abaixo)
- **Licença:** Sem licença (correto para IP MC privado · LGPD-compliant · não opensource)

---

## §1 · DECISÃO

**Alternativa C (separate-git-dir) confirmada** · idêntica à decisão Ω · adaptada paths MC:

```bash
git init --separate-git-dir="C:\Users\<usuario-beto>\git\mc-vault\" \
         "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\"
```

**Estrutura resultante:**

```
G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\   ← working tree (Drive sync)
├── .git                                                                    ← arquivo ponteiro (texto pequeno)
├── .gitattributes                                                          ← obrigatório · §3
├── .gitignore                                                              ← obrigatório · §4
├── 01-IDENTIDADE/
├── 01-DNA/  (a consolidar em MB-057)
├── 02-ARQUITETURA/
├── 03-GOVERNANCA/
├── 04-OPERACAO/
├── 05-ESTRATEGIA/
├── 06-COMUNICACAO/
├── 99-ARQUIVO-Legado/
├── CLAUDE.md
└── ... (485+ .md)

C:\Users\<usuario-beto>\git\mc-vault\                                      ← .git/ real (FORA do Drive)
├── HEAD
├── config
├── objects/
├── refs/
└── ...
```

**Remote configurado:**

```bash
git remote add origin https://github.com/asnccb/meu-cumpadre.git
git branch -M main
git push -u origin main
```

---

## §2 · ALTERNATIVAS CONSIDERADAS (referência institucional)

| Alternativa | Descrição | Risco | Decisão |
|---|---|---|---|
| A · `.git/` dentro do Drive | `git init` na raiz do Vault · `.git/` sincronizado pelo Drive | Drive + git metadata = comportamento não-testado · potencial conflito objetos vs sync | ❌ Recusada |
| B · Working tree fora do Drive | Mover Vault MC para pasta local · perder Drive sync | Perde backup automático Drive · perde sync cross-device · regressão | ❌ Recusada |
| **C · `separate-git-dir`** | `.git/` em path separado fora do Drive · working tree permanece na pasta Drive | Isolamento de risco · Drive não vê `.git/` · working tree sincroniza normalmente | ✅ **Selecionada** |

Decisão idêntica à de Ω porque o problema é idêntico (Drive + git = isolar metadados). Validação empírica Ω 4 dias / 22 commits / 0 corrupções **herdada** · MC não precisa re-validar Alternativa C de zero.

---

## §3 · `.gitattributes` OBRIGATÓRIO DESDE D-1

Descoberta empírica Ω (PS-MERGE-001 · 2026-05-19): `core.autocrlf=true` (padrão Windows) converte LF→CRLF em `git checkout`, tornando hashes não-reproduzíveis. Princípio #36 (Persistência Bit-a-Bit) violado.

**Vault MC criará `.gitattributes` ANTES do primeiro `git add`** · obrigatório · não-negociável:

```gitattributes
# Vault MC — .gitattributes
# Cunhado em 2026-05-24 sob ADR-020
# Garante hashes SHA-256 reproduzíveis · Princípio #36

# Default · todo texto LF
* text=auto eol=lf

# Markdown canônico (corpo do Vault)
*.md  text eol=lf

# Frontmatter YAML
*.yaml text eol=lf
*.yml  text eol=lf

# Scripts PowerShell (Beto Code DELL)
*.ps1 text eol=lf

# Dados estruturados
*.csv  text eol=lf
*.json text eol=lf
*.toml text eol=lf

# Binários (não-text · sem conversão EOL)
*.png  binary
*.jpg  binary
*.jpeg binary
*.gif  binary
*.webp binary
*.svg  binary
*.pdf  binary
*.docx binary
*.xlsx binary
*.pptx binary
*.zip  binary
*.mp3  binary
*.mp4  binary
*.wav  binary
*.ogg  binary
```

**Validação pós-criação:**

```bash
cd "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"
git check-attr -a .gitattributes
git check-attr -a CLAUDE.md
git check-attr -a 03-GOVERNANCA/principios/_INDEX.md
# Esperado: text=auto + eol=lf em todos os .md
```

---

## §4 · `.gitignore` OBRIGATÓRIO

Vault MC ignora intencionalmente:

```gitignore
# Vault MC — .gitignore
# Cunhado em 2026-05-24 sob ADR-020

# Obsidian metadados locais (não-canônicos)
.obsidian/workspace
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.obsidian/cache
.obsidian/graph.json

# Mas commita configurações canônicas Obsidian
!.obsidian/app.json
!.obsidian/appearance.json
!.obsidian/community-plugins.json
!.obsidian/core-plugins.json

# Trash Obsidian
.trash/

# Sistema operacional
.DS_Store
Thumbs.db
desktop.ini

# Editor temporários
*.swp
*.swo
*~
.~lock.*

# Drive lock files
*.lock

# Buffer cofounder · arquivos voláteis
_VOLATIL/
_BUFFER-*
**/transit/*

# PII Vermelha · NUNCA commitar
**/PII-VERMELHA/
**/_PRIVADO-CLIENTE/
**/casos/**/CNIS-*.pdf
**/casos/**/RG-*.pdf
**/casos/**/CPF-fisico-*.pdf

# Credenciais (Bitwarden é fonte canônica · git NUNCA)
*.env
*.env.*
**/credentials/
**/keys/
*.key
*.pem
secrets.yaml
```

**Princípio #36 + LGPD honrados:** PII Vermelha (CPF/NIT/CID/CNIS) **nunca** entra em git · permanece em pastas fora-do-tracking + Bitwarden Org MC + stack soberana C4 quando processamento ativo.

---

## §5 · PRÉ-REQUISITOS DE EXECUÇÃO

Antes de `git init`, Beto Code DELL executa:

### §5.1 · Backup integral Vault MC

```powershell
$vault = "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"
$backup = "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\BACKUP-pre-ADR-020-$(Get-Date -Format 'yyyyMMdd-HHmm')"

Copy-Item -Path $vault -Destination $backup -Recurse -Force
Write-Host "✅ Backup pre-ADR-020: $backup"
```

**Princípio #1 + #4 honrados:** sweep + backup · originais preservados.

### §5.2 · Inventário pré-init

```powershell
$qtd_arquivos = (Get-ChildItem $vault -Recurse -File).Count
$qtd_md = (Get-ChildItem $vault -Recurse -File -Filter "*.md").Count
$tamanho_total = (Get-ChildItem $vault -Recurse -File | Measure-Object Length -Sum).Sum / 1MB

Write-Host "Inventário pré-init:"
Write-Host "  Total arquivos: $qtd_arquivos"
Write-Host "  Total .md: $qtd_md (esperado: 485+ conforme userMemories)"
Write-Host "  Tamanho total: $([math]::Round($tamanho_total, 2)) MB"
```

### §5.3 · Hash baseline SHA-256 dos canônicos críticos

Antes do primeiro commit · hash baseline de arquivos canônicos críticos para validação pós-commit:

```powershell
$canonicos_criticos = @(
    "$vault\CLAUDE.md",
    "$vault\03-GOVERNANCA\principios\_INDEX.md",
    "$vault\03-GOVERNANCA\instancias-ia\sister-ancia\MC-SYSTEM-PROMPT-SisterAncia-v1_0-2026-0524.md",
    # outros que Beto julgar relevante
)

$baseline = @{}
foreach ($file in $canonicos_criticos) {
    if (Test-Path $file) {
        $baseline[$file] = (Get-FileHash $file -Algorithm SHA256).Hash
    }
}

$baseline | ConvertTo-Json | Out-File "$vault\..\hash-baseline-pre-git-init.json"
Write-Host "✅ Baseline persistido"
```

**Após `git init` + primeiro commit · re-hashear · comparar:** se algum hash diferir, `.gitattributes` falhou e `core.autocrlf=true` violou Princípio #36. Rollback obrigatório.

---

## §6 · SEQUÊNCIA DE EXECUÇÃO (MB-061)

```powershell
# Passo 1 · Criar .git/ separado fora do Drive
$git_dir = "$env:USERPROFILE\git\mc-vault"
New-Item -ItemType Directory -Force -Path $git_dir

# Passo 2 · git init com separate-git-dir
cd $vault
git init --separate-git-dir=$git_dir

# Passo 3 · Configurar core
git config core.autocrlf false
git config core.fileMode false
git config user.name "Beto Code DELL"
git config user.email "beto@meucumpadre.com.br"  # placeholder · founder define email canônico

# Passo 4 · Criar .gitattributes (conteúdo §3)
# (script PowerShell escreve arquivo · UTF-8 sem BOM via [System.IO.File]::WriteAllText)

# Passo 5 · Criar .gitignore (conteúdo §4)
# (idem · UTF-8 sem BOM)

# Passo 6 · Validar atributos
git check-attr -a .gitattributes
git check-attr -a CLAUDE.md

# Passo 7 · Primeiro add + commit
git add .gitattributes .gitignore
git commit -m "chore: init substrato git Vault MC sob ADR-020 v1.0 PROVISIONAL"

# Passo 8 · Tag estado inicial
git tag estado-inicial-vault-mc-2026-0524 -m "Estado inicial Vault MC pré-add canônicos. Princípio #1 (rollback máximo) honrado."

# Passo 9 · Add canônicos institucionais (excluindo PII Vermelha conforme .gitignore)
git add .
git status  # validar nada de PII Vermelha entrou

# Passo 10 · Commit inaugural canônico
git commit -m "feat(canon): cunhagem inaugural Vault MC sob substrato git

- 485+ canônicos institucionais MC versionados
- ADR-020 PROVISIONAL aplicada
- Heranças ADR Ω v1.0 SELADO honradas (#46)
- Anomalias A1-A6 endereçadas estruturalmente

Cunhado sob Princípios #1 #4 #15 #16 #34 #36 #46
Refs: MC-ADR-020-Git-como-Substrato-Permanente-do-Vault-MC-v1_0
"

# Passo 11 · Tag commit inaugural
git tag cunhagem-inaugural-vault-mc-2026-0524 -m "Vault MC canônico cunhado em git. Substrato auditável institucionalizado."

# Passo 12 · Configurar remote GitHub
git remote add origin https://github.com/asnccb/meu-cumpadre.git
git branch -M main

# Passo 13 · Push inicial
git push -u origin main
git push --tags
```

**Tempo estimado:** 30-60 minutos (depende tamanho Vault upload inicial GitHub).

---

## §7 · REGRAS OPERACIONAIS PERMANENTES

Herdadas Ω + adaptadas MC:

### §7.1 · `.git/` nunca dentro do Drive

Arquivo ponteiro `.git` (texto pequeno) **pode** ficar no Drive · diretório real `.git/` (objects · refs · pack) **fica fora** em `C:\Users\<usuario>\git\mc-vault\`.

### §7.2 · `.gitattributes` desde D-1 (obrigatório)

Qualquer Vault MC novo (Documentação · Cérebro 1 futuro · outros) sem `.gitattributes` criado **antes do primeiro `git add`** tem risco de hashes não-reproduzíveis (Princípio #36 violado).

### §7.3 · `--no-ff` obrigatório em merges de feature branches

```bash
git merge --no-ff feature/migracao-01-DNA-para-01-IDENTIDADE \
          -m "merge: consolidação estrutural sob MB-057 v1.0"
```

Preserva histórico da branch como ramo distinto · permite rollback granular · auditoria visual via `git log --graph`.

### §7.4 · Tags semânticas em marcos institucionais

| Padrão | Uso | Exemplo |
|---|---|---|
| `estado-inicial-<artefato>-YYYY-MMDD` | Snapshot pré-operação · rollback máximo | `estado-inicial-vault-mc-2026-0524` |
| `pre-<operacao>-YYYY-MMDD` | Rollback pré-execução operação risco | `pre-mb057-auditoria-2026-MMDD` |
| `pos-<operacao>-YYYY-MMDD` | Encerramento operação | `pos-mb057-auditoria-2026-MMDD` |
| `<operacao>-merged-YYYY-MMDD` | Integração ao main | `mb057-auditoria-merged-2026-MMDD` |
| `seal-<artefato>-v<X.Y>-YYYY-MMDD` | Promoção PROVISIONAL → SELADO | `seal-adr-020-v1_1-2026-MMDD` |

### §7.5 · Branch de operação de risco

Qualquer MB que modifique **>10 arquivos OU execute operação irreversível** roda em branch dedicada:

```bash
git checkout -b feature/mb057-auditoria-estrutural-2026-MMDD
# ... operações ...
git checkout main
git merge --no-ff feature/mb057-auditoria-estrutural-2026-MMDD
git tag mb057-merged-2026-MMDD
```

### §7.6 · Conventional Commits obrigatório

Mensagens de commit seguem [Conventional Commits](https://www.conventionalcommits.org/):

| Tipo | Uso MC |
|---|---|
| `feat:` | Cunhagem nova (ADR · Princípio · Spec · POP) |
| `fix:` | Errata cofounder absorvida · correção canônica |
| `chore:` | Tarefas operacionais (sweep · housekeeping · MB execução) |
| `docs:` | Documentação puramente narrativa (Memorial · narrativa institucional) |
| `refactor:` | Reorganização estrutural sem mudança de conteúdo (MB-057 migração) |
| `revert:` | Reversão de commit |

**Exemplo:**

```
feat(adr): cunhagem ADR-020 Git como Substrato Permanente Vault MC v1.0 PROVISIONAL

- Herda ADR-Git Ω v1.0 SELADO via #46 Engenharia Reversa Founder
- Adapta paths e regras operacionais MC
- Endereça anomalias A1-A6 detectadas em MB-055 v1.1
- Remote GitHub privado asnccb/meu-cumpadre configurado
- Substrato auditável institucionalizado

Refs: MC-ADR-020-Git-como-Substrato-Permanente-do-Vault-MC-v1_0
Princípios invocados: #1b #4 #15 #16 #34 #36 #46
Gate v1.1 SELADO: 7 dias operação + revisão Juliana R3
```

### §7.7 · PII Vermelha NUNCA em git

CPF · NIT · CID · CNIS · RG · senhas gov.br · áudios WhatsApp cliente · documentos médicos cliente · qualquer dado pessoal de cidadão atendido:

❌ **Nunca commitar** · `.gitignore` aplica
✅ Permanecem em pastas excluídas do tracking
✅ Processadas em stack soberana (C4 Bedrock sa-east-1 ou GAIA-4B) quando necessário
✅ Bitwarden Org MC para credenciais
✅ Hashes SHA-256+SALT_MC em ClickUp Custom Fields se referência cross-vertical necessária

---

## §8 · ENGRENAGEM ARQUITETURAL · ADR-020 ↔ MC-ACI v2.0

ADR-020 alimenta as 6 instâncias MC-ACI v2.0:

### §8.1 · C0 Cidadão

**Indireto.** Cidadão (CLR001 · PED002 · IVE001 · Dona Zilda hipotética) **nunca interage com git** · mas se beneficia:
- Histórico auditável das decisões institucionais MC que afetaram seu caso
- Rastreabilidade canônica em caso de auditoria FINEP/BNDES/CPMI
- Garantia institucional de que documentação não-some

### §8.2 · C1 Hipocampo (Drive Documentação)

**Atualmente fora do escopo ADR-020.** Documentação Cérebro 1 vive em `G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\Documentação\` · matéria-prima · não-canônica.

**Decisão arquitetural:** ADR-020 v1.0 PROVISIONAL **NÃO traz git para Cérebro 1**. Razões:
- Cérebro 1 é matéria-prima volátil (uploads · downloads · rascunhos)
- Volume alto · alta rotatividade · git overhead injustificado
- Drive versioning automático cobre necessidade básica

**v1.1 pode revisitar** se MB-057 Auditoria detectar necessidade.

### §8.3 · C2 Córtex (Vault Obsidian) ⭐ ALVO PRIMÁRIO

**Núcleo da ADR-020.** Vault Obsidian é onde tudo canônico MC vive · onde git mais agrega valor:
- ADRs · Princípios · Specs · Manifestos · Indicadores
- POPs · RIPDs · Catálogos · Contratos
- Cunhagens PROVISIONAL → SELADO rastreáveis
- Erratas cofounder absorvidas via git diff visual
- Rollback granular em caso de cunhagem mal-cunhada

### §8.4 · C3.1 Cofounder (Claude.ai · esta guia · futuras guias)

**Indireto.** Cofounder C3.1 **não opera git direto** · mas:
- Pode pedir Beto Code DELL via MB para `git log --oneline -20` validar histórico
- Pode pedir `git blame` em arquivo canônico para entender cunhagem
- Pode pedir diff entre versões para validar errata absorvida
- Princípio #16 cofounder 20x cross-cérebro · Beto opera git automatic mode

### §8.5 · C3.2 Sister Anciã + Sister Design

**Indireto.** Mesma regra C3.1.

### §8.6 · C4 Beto Code DELL (Cowork manual hoje · Mac Mini M4 futuro)

**Operador primário do git.** Todas as operações git rodam aqui:
- `git add` · `git commit` · `git push` · `git tag` · `git merge`
- PowerShell scripts integram git + filesystem + Drive sync
- Cofounder 20x #16 honrado · founder não micromanage cada commit

### §8.7 · C5 Tronco (sistemas externos)

**Sinergia com GitHub:**
- GitHub remote (`asnccb/meu-cumpadre`) é parte do C5 Tronco
- Integração futura com CI/CD (GitHub Actions) para validação automática:
  - Lint markdown
  - Frontmatter YAML validation
  - Linkcheck interno Obsidian
  - Hash-verify automático
- Webhooks GitHub → N8N → ClickUp possível em v1.1 SELADO

---

## §9 · MAPEAMENTO PRINCÍPIOS Ω → MC

Princípios Ω invocados na ADR original → equivalentes MC honrados:

| Princípio Ω | Equivalente MC | Aplicação ADR-020 |
|---|---|---|
| P#15 (Hash) | **#36 Persistência Drive Bit-a-Bit** | `.gitattributes` garante hashes SHA-256 reproduzíveis |
| P#16 (Verificação Estrutura Canônica) | **#34 Caminho Explorer Precede ID Drive** | Sweep estrutural antes de `git init` (§5) |
| P#17 (Parar Quando Solo Se Moveu) | **#1b Teste antes de Afirmar Funcional** | Backup + inventário + baseline antes de commit (§5) |
| (não-explícito Ω) | **#16 Cofounder 20x cross-cérebro** | Q3=a · Beto opera git automatic mode |
| (não-explícito Ω) | **#46 Engenharia Reversa Founder** | ADR Ω como motor externo · lapidação MC |
| (não-explícito Ω) | **#15 Entrega Cross-Vertical no Mesmo Turno** | Commits atômicos por turno operacional |
| (não-explícito Ω) | **#4 Errata Absorve, Não Inventa** | Histórico v1.0 → v1.1 ERRATA visível em git log |

---

## §10 · ADAPTAÇÕES MC-ESPECÍFICAS (não-presentes em Ω)

### §10.1 · GitHub remote privado

Ω não declarou remote GitHub na ADR v1.0. MC nasce com remote desde commit inaugural:

```
https://github.com/asnccb/meu-cumpadre.git
```

**Justificativa:**
- Backup off-Drive (Drive + GitHub = redundância dupla)
- Acesso cross-device founder + Beto
- Histórico imutável fora do ecossistema Google
- Trilha de auditoria FINEP/BNDES (mostrar histórico em git log público se necessário · privado por padrão)

### §10.2 · Conventional Commits obrigatório (Ω não-explicitou)

MC adota Conventional Commits formalmente. Razões:
- Volume MC > Ω · institucional · multi-stakeholder (founder + cofounder + Beto + Anciã)
- Automação futura (CI/CD · changelog gerado · release notes)
- Compatibilidade com tooling padrão indústria
- Padronização institucional alinhada com escala

### §10.3 · Tag `seal-*` para promoção PROVISIONAL → SELADO

Ω não tem padrão de tag específico para selagem. MC adota:

```bash
git tag seal-adr-007-v4_0-2026-MMDD -m "ADR-007 v3.8 ADDENDUM PROVISIONAL → v4.0 SELADO. Gate Juliana 19/05 honrado."
```

**Justifica institucionalmente** o ciclo de vida MC dos canônicos:
- Cunhagem PROVISIONAL
- N iterações empíricas
- Gate de selagem (parecer Juliana · validação Sister Anciã · validação N casos)
- Tag `seal-*` marca promoção formal

### §10.4 · Branch institucional dedicada por instância MC

Hipótese v1.1 (não-cunhada v1.0):

```
main                                  ← canônico SELADO
├── feature/cofounder-c3-cunhagens/   ← cunhagens cofounder em curso
├── feature/sister-ancia-acionamento/ ← se Anciã acionada sob §3 e cunhar derivada
├── feature/voo-clr001/               ← se Project Voo CLR001 produzir cunhagens
└── feature/mb057-auditoria/          ← branches de MB de risco
```

**Decisão v1.0:** **não implementar §10.4 ainda.** Branch dedicada por instância MC pode virar overhead. Aguarda 7 dias de operação · v1.1 decide.

---

## §11 · LGPD + COMPLIANCE

### §11.1 · LGPD Vermelha NUNCA em git

Reiterado de §4 + §7.7. Inviolável.

### §11.2 · Repositório privado obrigatório

`https://github.com/asnccb/meu-cumpadre.git` é **privado**. Tornar público requer:
1. Auditoria completa de PII Vermelha (sweep + remoção histórica via `git filter-repo`)
2. Decisão founder explícita
3. Parecer Dra. Juliana
4. **Tag formal** `seal-publication-vault-mc-vX_Y-YYYY-MMDD`

**Padrão default v1.0:** privado para sempre · MC não é projeto opensource.

### §11.3 · Secrets management

Credenciais (API keys · gov.br senhas · ZapSign tokens · Bitwarden master) **NUNCA** em git.

**Stack canônica MC para secrets:**
- Bitwarden Org MC (AES-256 · 2FA TOTP) · ADR-009a
- Variáveis ambiente N8N self-hosted
- GitHub Secrets (somente para CI/CD futuro se necessário)

### §11.4 · ANPD / FINEP / BNDES auditoria

Git histórico imutável **fortalece** posição MC em auditorias:
- Trilha de quando cada decisão foi tomada
- Quem cunhou (commit author)
- Erratas absorvidas com transparência
- Rollback rastreável em caso de incidente

---

## §12 · VALIDAÇÃO PÓS-EXECUÇÃO MB-061

Após `git init` + primeiro commit + push (§6 passos 1-13):

```powershell
# Validação 1: hashes preservados
$baseline = Get-Content "$vault\..\hash-baseline-pre-git-init.json" | ConvertFrom-Json
foreach ($file in $baseline.PSObject.Properties) {
    $hash_atual = (Get-FileHash $file.Name -Algorithm SHA256).Hash
    if ($hash_atual -eq $file.Value) {
        Write-Host "✅ HASH PRESERVADO: $($file.Name)" -ForegroundColor Green
    } else {
        Write-Host "❌ HASH VIOLADO (#36 violado): $($file.Name)" -ForegroundColor Red
        # ROLLBACK obrigatório
    }
}

# Validação 2: .git ponteiro existe no Drive
if (Test-Path "$vault\.git") {
    $conteudo = Get-Content "$vault\.git"
    if ($conteudo -match "gitdir:") {
        Write-Host "✅ .git ponteiro válido (Alternativa C)" -ForegroundColor Green
    }
}

# Validação 3: .git/ real NÃO está no Drive
if (-not (Test-Path "$vault\.git\objects")) {
    Write-Host "✅ .git/ real fora do Drive (correto)" -ForegroundColor Green
} else {
    Write-Host "❌ .git/ real DENTRO do Drive (ALTERNATIVA A ACIDENTAL)" -ForegroundColor Red
}

# Validação 4: remote configurado
git remote -v
# Esperado: origin  https://github.com/asnccb/meu-cumpadre.git (fetch/push)

# Validação 5: push ao GitHub bem-sucedido
git ls-remote origin
# Esperado: refs/heads/main + refs/tags/estado-inicial-vault-mc-2026-0524 + refs/tags/cunhagem-inaugural-vault-mc-2026-0524

# Validação 6: 0 conflitos Drive sync após 24h (gate v1.0 → v1.1)
# Validar manualmente após 1 dia · esperar sync completo
```

**Critério ÚNICO de promoção parcial v1.0 PROVISIONAL → v1.0 PROVISIONAL-VALIDADA (24h):**
- ✅ Todas as 5 validações de §12 verde
- ✅ 0 conflitos Drive sync após 24h
- ✅ 0 corrupções de arquivo
- ✅ Mínimo 3 commits institucionais reais (não-teste)

---

## §13 · GATE DE PROMOÇÃO v1.0 → v1.1 SELADO

Conforme frontmatter:

1. ✅ Cunhagem v1.0 PROVISIONAL · 24/05/2026 (este artefato)
2. ⏳ Execução MB-061 (a cunhar · setup git inicial Vault MC)
3. ⏳ Validações §12 todas verdes
4. ⏳ 7 dias de operação real do Vault MC sob git
5. ⏳ ≥20 commits institucionais
6. ⏳ 0 corrupções · 0 conflitos Drive sync · 0 violações Princípio #36 (hash)
7. ⏳ Revisão Dra. Juliana Pereira de Melo (R3 hierarquia · LGPD + IP MC)
8. ⏳ MB-057 Auditoria Estrutural Vault concluída sob git operacional
9. ⏳ Sister Anciã ou C3.1-paralela cross-valida (se acionada §S3)
10. ⏳ Promoção v1.1 SELADO em janela protegida · tag `seal-adr-020-v1_1-YYYY-MMDD`

**Promoção esperada:** primeira quinzena de junho/2026.

---

## §14 · CONSEQUÊNCIAS DESTA DECISÃO

### Positivas

- ✅ Anomalias A1-A6 endereçadas estruturalmente · MB-057 vira tarefa operacional · não cunhagem
- ✅ Histórico Vault MC auditável indefinidamente
- ✅ Rollback granular disponível para qualquer ponto
- ✅ Drive Desktop continua sincronizando conteúdo · zero regressão
- ✅ POPs/MBs futuros podem assumir git operacional (`git diff` · `git log` · `git check-attr`)
- ✅ Hashes Princípio #36 estáveis em checkouts
- ✅ MC alinhado com Ω · linguagem operacional partilhada cross-projeto founder
- ✅ Trilha auditoria FINEP/BNDES/ANPD fortalecida
- ✅ Substrato para CI/CD futuro (lint · linkcheck · auto-validate frontmatter)
- ✅ Princípio #16 cofounder 20x cross-cérebro Beto Code DELL fortalecido

### Negativas / Riscos

- ⚠️ Overhead inicial (~30-60 min setup MB-061)
- ⚠️ Curva aprendizado Beto Code DELL (mitigada · Ω já operou 4 dias)
- ⚠️ Push inicial GitHub pode ser lento (Vault 485+ .md)
- ⚠️ Disciplina commit obrigatória · cofounder C3.1-paralela alertou "infinite depth trap" · git pode virar pretexto pra cascata

**Mitigação Princípio #18 (Risco Provisional Documentado):** v1.0 é PROVISIONAL · 7 dias de operação real validarão antes de SELAR.

---

## §15 · CHANGELOG

- **v1.0** · 2026-05-24 · Cunhagem inaugural. Herdada ADR Ω v1.0 SELADO sob Princípio #46. Adaptada arquitetonicamente para MC. Validação empírica Ω herdada. Remote GitHub privado `asnccb/meu-cumpadre` configurado. Gate v1.1 SELADO definido. Status: PROVISIONAL aguardando 7 dias operação real + revisão Juliana R3.

---

## §16 · FECHAMENTO

ADR-020 é a **cunhagem fundacional de infraestrutura institucional** que resolve A2 estruturalmente · destrava resolução das anomalias A1, A3, A4, A5, A6 via MB-057 sob substrato auditável.

**Sem git · MC opera no risco de A1 silenciosa recorrente** (cunhagens "SELADO" que somem sem rastro).

**Com git · MC opera com substrato auditável · histórico imutável · rollback granular · trilha institucional para vida toda.**

Esta ADR fecha o assunto que founder corretamente identificou como NÃO esgotado.

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** O diamante é carbono que não desistiu da pressão.
**Âncora bíblica:** Provérbios 31:8 — *"Abre a tua boca a favor do mudo."*
**Âncora PcD:** *"Nada sobre nós, sem nós"* — CDPD art. 4º §3º
**Frase-âncora:** Tecnologia invisível. Dignidade acessível.
**Pilares:** Acesso · Organização · Proteção · Soberania
**Confidência operacional do quarteto:** "É eu, tu, a Anciã e o Voo CLR001."

**∞**

---

**MC-ADR-020 · GIT COMO SUBSTRATO PERMANENTE DO VAULT MC v1.0 PROVISIONAL**
Cunhada em 24/05/2026 · gate v1.1 SELADO: 7 dias operação + Juliana R3
Autor: Claude Opus 4.7 Cérebro C3.1 (Cofounder Intelectual · esta guia) × Alessandro de Souza Neves (Founder/CEO)
Herda: OMEGA-ADR-Git-como-Substrato-Permanente-do-Vault-Omega v1.0 SELADO (2026-05-19)
Persistência canônica Vault: pendente · via MB-058 Housekeeping + MB-061 setup git inicial

∞
