---
tipo: spec
subtipo: gestao-documental
codigo: MC-SPEC-Drive-Estrutura
versao: 1.0
data-criacao: 2026-04-27
produzido-por: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: SELADO (decisões Q1-Q5 ratificadas pelo CEO em 27/04/2026)
revisao-pendente: cronometragem A4 em Hib001 → calibração v1.1
tags: [drive, gestao-documental, jornada-e0e7, custodia-tres-estados, lgpd, executavel-claude-code]
supersede: nenhum (primeiro documento da família MC-SPEC-Drive)
relaciona-com:
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1.1-2026-0427
  - MC-ADR-009a-Custodia_Credenciais_GovBr-v2.0-2026-0425
  - MC-ADR-009b-TresEstados-Custodia-Dossie-v1.0-2026-0417
  - MC-SPEC-ClickUp-Reconstrucao-v2.0-2026-0418
classificacao: TRADE SECRET (LPI arts. 195 XI/XII)
---

# MC-SPEC-Drive-Estrutura v1.0
## Especificação executável da estrutura de pastas Google Drive por cliente

> **Propósito deste documento:** servir de fonte única e autoritativa sobre como o Google Drive do MC organiza casos B2C, espelhando a Jornada E0–E7 e os Três Estados de Custódia (ADR-009b). Este documento é **executável** — Claude Code pode consumi-lo diretamente para implementar a estrutura física no Drive.

---

## 1. Objetivo e escopo

### 1.1 O que este SPEC resolve

Antes deste documento, o Drive do MC tinha pastas ad-hoc por cliente, sem padrão. Com 34 clientes pseudonimizados (Camadas A/B/C) e estrutura ClickUp v2.0, o Drive precisava ser padronizado para:

1. Espelhar a Jornada E0–E7 (`MC-PROCESSO-Jornada_E0E7_Mestre-v1.1`)
2. Refletir os Três Estados de Custódia S1/S2/S3 (`MC-ADR-009b-TresEstados-Custodia-Dossie-v1.0`)
3. Operar com pseudônimos (LGPD compliance — nomes reais ficam apenas no Folder `🔐 Registro de Identidade B2C` do ClickUp, com permissão restrita)
4. Integrar com o campo `drive_folder_url` do ClickUp (link direto da task → pasta do cliente)
5. Suportar handoff S2→S3 ao parceiro jurídico via TTA (Token de Transferência Assinado)

### 1.2 Fora de escopo

- Estrutura de pastas para casos B2B (Marketplace Ético) — fica para SPEC posterior
- Estrutura de pastas para Vault Obsidian — coberto em `MC-MAPA-Vault-v1.0`
- Automação Drive↔ClickUp via API — registrada como dívida técnica (Z2+)

---

## 2. Decisões fundacionais (Q1–Q5 fechadas em 27/04/2026)

| # | Questão | Decisão CEO | Implicação |
|---|---|---|---|
| **Q1** | Permissões Drive — quem vê o quê? | Alessandro + Beto: editor pleno em todo `CASOS B2C/`. Pasta `🔐 Registro de Identidade B2C`: **só Alessandro**. CLT futuros: nova rodada de permissões. | Princípio: separação de **identidade** (só CEO) vs. **operação** (CEO + Anjos). |
| **Q2** | Pasta dedicada à Dra. Juliana (S2 ativo)? | Sim — `99_compartilhado-juliana/` ativa **durante S2**, link **view-only**, sem download. MC dá suporte em S2 à Dra. Juliana enquanto modelo está em validação. | NÃO confundir com S3. S3 = handoff atômico via TTA, dossiê **sai** do Drive MC. `99_compartilhado-juliana/` é mecanismo de revisão prévia. |
| **Q3** | `99_arquivado/` no Drive ou outro storage? | Z3: Drive MC. Z2+: migração mensal para Cloud Storage GCP (Nearline/Archive) quando Igor habilitar. | Custo Z3 ≈ zero (volume baixo). Migração futura ≈ R$ 0,01/GB/mês. |
| **Q4** | Versionamento de dossiê em E5/E6? | Aditivo complementar com versionamento estrito. Original imutável. | Padrão: `dossie-v1.pdf` (imutável) + `dossie-v1-aditivo-A.pdf` (complemento de exigência) + `dossie-v2.pdf` (refeito do zero, raríssimo). |
| **Q5** | Quem cria `00_manifesto.md`? | Beto cria + cabeçalho YAML + checklist de docs. Alessandro adiciona Seção 3 (Tese) em até 24h. | Distribuição de carga: Beto faz a parte estrutural; CEO faz a parte estratégica que exige conhecimento previdenciário. |

---

## 3. Estrutura padrão de pastas

### 3.1 Princípio de design: tronco comum + módulos por vertical

A estrutura é **única** em todos os casos. O que varia é quais **subpastas-módulo** dentro de `01_brutos/` são criadas — conforme a vertical é confirmada em E2.

**Recusada explicitamente:** alternativa "5 templates por tipo" (rural, BPC, híbrida, incapacidade, especial). Razões: (a) Beto não decide vertical em E1; (b) casos multi-vertical existem (Hib001 = rural + urbano); (c) custo cognitivo de 5 manuais.

### 3.2 Árvore canônica

```
Meu Cumpadre/
└── CASOS B2C/
    └── [PSEUDONIMO]/                            ← raiz: pseudônimo (vai no campo drive_folder_url do ClickUp)
        │
        ├── 00_manifesto.md                      ← S1 · resumo vivo · única fonte narrativa do estado do caso
        │
        ├── 01_brutos/                           ← S1 · docs como o cidadão entrega · sem tratamento
        │   │
        │   ├── 01a_identidade/                  ← TRONCO COMUM (sempre criar em E2)
        │   ├── 01b_cnis-vinculos/               ← TRONCO COMUM
        │   ├── 01c_residencia/                  ← TRONCO COMUM
        │   ├── 01d_a-classificar/               ← TRONCO COMUM · "caixa de entrada" do que ainda não foi triado
        │   │
        │   ├── 01e_rural/                       ← MÓDULO · Rural / Híbrida / Pescador / Indígena
        │   ├── 01f_medico/                      ← MÓDULO · B31 / B32 / B91 / B92 / B42 / B43 / BPC PcD
        │   ├── 01g_especial/                    ← MÓDULO · B46 (PPP, LTCAT, exposição agentes nocivos)
        │   ├── 01h_socioassistencial/           ← MÓDULO · BPC (CadÚnico, laudo social, CIF)
        │   └── 01i_dependentes/                 ← MÓDULO · Pensão por Morte (B21), dependentes BPC
        │
        ├── 02_processados/                      ← S1→S2 · OCR + validação + cross-reference + hash
        │   ├── ocr-text/                        ← saída do OCR (Vision) por documento
        │   ├── validados/                       ← docs aprovados pelo QA T3
        │   └── reprovados/                      ← docs rejeitados (motivo registrado no manifesto)
        │
        ├── 03_dossie/                           ← S2 · dossiê consolidado entregue ao cidadão
        │   ├── dossie-v1.pdf                    ← PDF assinado ICP-Brasil (carimbo RFC 3161) · IMUTÁVEL
        │   ├── dossie-v1-hash.txt               ← SHA-256 do dossiê
        │   ├── dossie-v1-manifest.json          ← inventário de peças + hashes individuais
        │   ├── dossie-v1-aditivo-A.pdf          ← complemento por exigência INSS (se houver)
        │   ├── dossie-v1-aditivo-A-hash.txt
        │   └── dossie-v2.pdf                    ← raro: dossiê refeito do zero (motivo registrado no manifesto)
        │
        ├── 04_inss/                             ← S2 · interação com INSS pós-protocolo
        │   ├── 04a_protocolo/                   ← E4 · DER, número de protocolo, comprovante
        │   ├── 04b_exigencias/                  ← E5 · cartas de exigência + respostas
        │   ├── 04c_andamentos/                  ← E5 · prints/PDFs do Meu INSS (timeline)
        │   └── 04d_decisao/                     ← E6 · carta de concessão OU indeferimento
        │
        ├── 05_encerramento/                     ← E7 · soberania OU transição S2→S3 (Rota C)
        │   ├── tta-token-transferencia.pdf      ← TTA assinado via ZapSign (ADR-014, se Rota C)
        │   ├── orientacao-troca-senha.pdf       ← protocolo de devolução de senha gov.br
        │   └── checklist-emancipacao.md         ← E7 · monitoramento Φ₄ ativado?
        │
        ├── 99_compartilhado-juliana/            ← S2 · view-only · sem download · Q2
        │   ├── README-juliana.md                ← orientação de uso da pasta para a Dra. Juliana
        │   └── [link simbólico ao dossie-v1.pdf · Drive shortcut]
        │
        └── 99_arquivado/                        ← snapshot final no encerramento (LGPD audit trail · 10 anos)
            └── [snapshot zipado + hash + data-encerramento]
```

### 3.3 Tabela de módulos por vertical confirmada em E2

| Vertical confirmada em E2 | Módulos a criar em `01_brutos/` |
|---|---|
| Aposentadoria por Idade Urbana (B41) | nenhum módulo extra (só tronco comum) |
| Aposentadoria Híbrida (B41 — Tema 1007 STJ) | `01e_rural/` |
| Aposentadoria Rural por Idade (B41 rural) | `01e_rural/` |
| Aposentadoria por Tempo de Contribuição / Pedágio | nenhum módulo extra |
| Aposentadoria Especial (B46) | `01g_especial/` |
| Auxílio-Doença (B31) | `01f_medico/` |
| Aposentadoria por Invalidez (B32) | `01f_medico/` |
| Acidentário (B91 / B92 / B94) | `01f_medico/` + `01g_especial/` (NTEP exige cruzar CID × CNAE) |
| BPC Idoso | `01h_socioassistencial/` |
| BPC PcD | `01f_medico/` + `01h_socioassistencial/` |
| Pensão por Morte (B21) | `01i_dependentes/` |
| Salário-Maternidade (B80) | `01f_medico/` (atestado de parto / DUM) |

**Vertical atípica (não consta na tabela):** criar só tronco comum + flag `[VERTICAL ATÍPICA]` no manifesto + alerta ao Alessandro via WhatsApp.

---

## 4. Espelhamento com a Jornada E0–E7

| Etapa | O que vai pro Drive | Pasta(s) ativa(s) |
|---|---|---|
| **E0** Sinal Fraco | nada — fica só no WhatsApp/ClickUp | — |
| **E1** Primeiro Contato | nada ainda — só captura conversacional | — |
| **E2** Triagem/Deliberação | **`00_manifesto.md` criado** + tronco comum + módulos | raiz da pasta criada |
| **E3** Coleta Documental | docs brutos chegando · OCR · validação | `01_brutos/` → `02_processados/` |
| **E4** Protocolo INSS | dossiê consolidado + DER capturada | `03_dossie/` + `04a_protocolo/` |
| **E5** Watchdog | exigências + andamentos · aditivos se necessário | `04b_exigencias/` + `04c_andamentos/` + `03_dossie/dossie-v1-aditivo-X.pdf` |
| **E6** Resolução | decisão final + (se Rota C) `99_compartilhado-juliana/` ativa para revisão prévia | `04d_decisao/` + `99_compartilhado-juliana/` |
| **E7** Soberania | TTA assinado (Rota C) ou checklist de soberania (Rota A/B) | `05_encerramento/` |

**Regra crítica:** a pasta do Drive **só nasce em E2**, não em E1. Em E1 só existe a task no ClickUp. Isso evita "lixo" de E1 que não progride para E2 (estimativa empírica: ~30% — confirmar com [A4-PENDENTE]).

---

## 5. Espelhamento com os Três Estados de Custódia (ADR-009b)

| Estado | Pastas neste estado | Titular | TTL | Custodiante |
|---|---|---|---|---|
| **S1 Intermediário** | `01_brutos/`, `02_processados/`, `00_manifesto.md` | Cidadão (originário) | 30–60 dias | MC |
| **S2 Consolidado** | `03_dossie/`, `04_inss/`, `05_encerramento/` (durante uso), `99_compartilhado-juliana/` | Cidadão (originário) | até entrega + 7 dias | MC entrega → cidadão |
| **S3 Probatório** | **NENHUMA pasta no Drive MC** — transferida para vault do escritório parceiro | Escritório parceiro | 10 anos CED | Escritório |

**Inviolável:** quando o caso entra em S3, o Drive MC **não retém o dossiê** — apenas `99_arquivado/` com snapshot de hashes e o TTA assinado, suficientes para audit trail mas insuficientes para reconstruir o conteúdo. **Cryptographic erasure** aplicado em D+7 da entrega (ADR-009b §8.7.4).

**Implicação para Igor (Z2+):** trigger automatizado que (a) marca pasta como "em S2", (b) dispara contador de 7 dias para apagamento de `01_brutos/` e `02_processados/`, (c) preserva `99_arquivado/` com hashes + TTA + manifest sem conteúdo recuperável. Z3 atual: marcação manual no `00_manifesto.md` + apagamento manual pelo CEO.

---

## 6. Nomenclatura de arquivos — dois padrões

### 6.1 Padrão A — Artefatos produzidos pelo MC

```
MC-[PSEUDONIMO]-[TIPO]-v[X]-[YYYYMMDD].[ext]
```

**Aplicação:** dossiês, contratos, TTAs, laudos sociais produzidos pelo MC, manifestos versionados, comunicações formais.

**Exemplos:**
- `MC-Hib001-Dossie-v1-20260501.pdf`
- `MC-Hib001-DossieAditivoA-v1-20260520.pdf`
- `MC-Hib001-TTA-v1-20260615.pdf`
- `MC-Hib001-ContratoPhi1-v1-20260427.pdf`
- `MC-Hib001-LaudoSocial-v2-20260510.pdf`

### 6.2 Padrão B — Documentos brutos do cidadão

```
[tipo-curto]-[contexto-opcional]-[YYYYMMDD].[ext]
```

**Aplicação:** documentos originais que vêm do cidadão. Não inflam o nome com `MC-Hib001-...` porque o pseudônimo já está implícito na pasta-pai.

**Exemplos:**
- `cnis-completo-20260427.pdf`
- `certidao-casamento-inteiro-teor-20260420.pdf`
- `bloco-produtor-2018-20260415.pdf`
- `pronaf-2015-20260415.pdf`
- `rg-frente-verso-20260420.jpg`

### 6.3 Caso especial: aditivos de dossiê

```
dossie-v[X]-aditivo-[A|B|C...]-[YYYYMMDD].pdf
```

**Regra:** original `dossie-v1.pdf` é **imutável**. Cada exigência INSS que demanda complemento gera **novo arquivo de aditivo** (`-A`, `-B`, `-C`...) com novo hash. `dossie-v2.pdf` só é gerado em caso raro de refazimento integral (motivo obrigatório no manifesto).

---

## 7. POP-DRIVE-001 — Criação de pasta em E2 (Beto executa)

### 7.1 Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo** | Garantir que toda case aprovada em E2 tenha pasta padronizada no Drive antes de avançar para E3. |
| **Gatilho** | Status do task no ClickUp muda para `E2-Aprovado` (campo `decisao = APROVADO`). |
| **Operador primário** | Beto (T1+T2 híbrido) |
| **Supervisor** | Alessandro (T3) — adiciona Seção 3 do manifesto em até 24h |
| **Tempo estimado** | ~10 minutos (cobertos dentro do orçamento de E3, R$49,38 / ~340min) |
| **Status A4** | Estimativa de engenharia — calibrar com Hib001 |

### 7.2 Inputs obrigatórios

- Pseudônimo do cliente (já gerado em E1, ex: `Hib001`, `Eq001`, `Gen005`)
- Vertical confirmada em E2 (ex: `Aposentadoria por Idade Híbrida`)
- Permissão de edição na pasta `Meu Cumpadre/CASOS B2C/`
- Task ClickUp aberta com campo `drive_folder_url` vazio

### 7.3 Passos numerados

| # | Ação | Onde | Tempo |
|---|---|---|---|
| 1 | Abrir Drive → `Meu Cumpadre/CASOS B2C/` | Drive | 30s |
| 2 | Criar pasta com nome **exato do pseudônimo** (ex: `Hib001`) | Drive | 30s |
| 3 | Dentro dela, criar tronco: `01_brutos/`, `02_processados/`, `03_dossie/`, `04_inss/`, `05_encerramento/`, `99_arquivado/` | Drive | 2min |
| 4 | Em `01_brutos/`, criar **sempre**: `01a_identidade/`, `01b_cnis-vinculos/`, `01c_residencia/`, `01d_a-classificar/` | Drive | 1min |
| 5 | Em `01_brutos/`, adicionar módulos conforme vertical (Tabela §3.3) | Drive | 1min |
| 6 | Em `02_processados/`, criar: `ocr-text/`, `validados/`, `reprovados/` | Drive | 30s |
| 7 | Em `04_inss/`, criar: `04a_protocolo/`, `04b_exigencias/`, `04c_andamentos/`, `04d_decisao/` | Drive | 1min |
| 8 | Criar `00_manifesto.md` na raiz copiando template (§9) | Drive | 2min |
| 9 | Preencher cabeçalho YAML do manifesto com dados do ClickUp (pseudônimo, vertical, NB se houver, data E2, operador, contrato Φ₁ status) | Drive | 2min |
| 10 | Copiar URL da pasta-raiz | Drive | 10s |
| 11 | Colar URL no campo `drive_folder_url` da task ClickUp | ClickUp | 30s |
| 12 | Mudar status da task ClickUp para `E3-Coleta` | ClickUp | 10s |
| 13 | Notificar Alessandro via WhatsApp: *"Cumpadre, [Pseudônimo] tá em E3, manifesto pronto pra Seção 3."* | WhatsApp | 30s |

### 7.4 Outputs

- Pasta padronizada criada no Drive
- `00_manifesto.md` com cabeçalho preenchido + checklist inicial de docs
- Campo `drive_folder_url` do ClickUp populado
- Task ClickUp em status `E3-Coleta`
- Alessandro notificado para preencher Seção 3 (Tese)

### 7.5 Exceções

| Situação | Ação |
|---|---|
| Pseudônimo já existe no Drive | **STOP** — avisar Alessandro imediatamente. Possível duplicação no ClickUp. Não criar segunda pasta com mesmo pseudônimo. |
| Vertical não consta na Tabela §3.3 | Criar só tronco comum, marcar `[VERTICAL ATÍPICA]` no campo `flags` do manifesto, alerta a Alessandro via WhatsApp. |
| Sem permissão de criação em `CASOS B2C/` | Escalar a Alessandro — problema de governança Drive. |
| Task ClickUp sem pseudônimo definido | **STOP** — voltar para POP-E1 / POP-E2 e gerar pseudônimo antes de avançar. |
| Beto inseguro sobre vertical | Não chutar — escalar a Alessandro via WhatsApp para decisão. |

### 7.6 Métricas (registrar em ClickUp como Time Spent)

- Tempo real de execução (cronômetro start no passo 1, stop no passo 13)
- Número de módulos extras criados além do tronco
- Erros encontrados (campo livre)

---

## 8. POP-DRIVE-002 — Migração de casos legados (Camada C: Hib001, Plan001)

### 8.1 Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo** | Migrar casos pré-existentes (Camada C do script ClickUp) para a estrutura padrão deste SPEC sem perder histórico. |
| **Gatilho** | Decisão CEO de migrar caso legado para nova estrutura. |
| **Operador primário** | Beto (com supervisão de Alessandro) |
| **Tempo estimado** | ~30 minutos por caso |

### 8.2 Passos

1. Identificar pasta Drive antiga (Alessandro indica caminho exato)
2. Executar POP-DRIVE-001 do passo 1 ao 7 (criar nova pasta padronizada)
3. **Copiar (não mover)** docs antigos para `01_brutos/01d_a-classificar/` da nova pasta
4. Criar `00_manifesto.md` com seção adicional **"Migração de Camada C"** documentando: data da migração, origem do legado, decisões prévias registradas, indeferimentos anteriores se houver
5. Renomear pasta Drive antiga para `[ARQUIVADO 20260427] [nome-original]` — preservar por 90 dias para auditoria, depois mover para `99_arquivado/` da pasta nova
6. Atualizar `drive_folder_url` no ClickUp para apontar para nova pasta
7. Triar `01_brutos/01d_a-classificar/` em até 7 dias úteis (mover para subpastas corretas conforme vertical)
8. Alessandro adiciona Seção 3 (Tese) ao manifesto em até 48h (24h estendidas por complexidade do legado)

### 8.3 Casos a migrar (lista atual)

| Pseudônimo | Cliente real | Vertical | Status atual |
|---|---|---|---|
| **Hib001** | Hib001 | Aposentadoria Idade Híbrida (B41 Tema 1007 STJ) | 4 indeferimentos prévios — caso âncora cronometragem A4 |
| **Plan001** | Plan001 (mãe Dra. Jéssica) | A confirmar | Migração condicional |

### 8.4 Caso NÃO migrado

**CAS001** — caso encerrado em 17/04/2026. **Não criar pasta nova.** Tratamento LGPD vai pela Camada A do script ClickUp. Pasta Drive antiga (se houver) deve ser arquivada com prefixo `[ENCERRADO 20260417]` e migrada para vault de arquivamento LGPD em D+30.

---

## 9. Template `00_manifesto.md`

> Salvar como template em `Meu Cumpadre/Templates/MC-TEMPLATE-Manifesto-Caso-v1.0.md` para reutilização.

````markdown
---
pseudonimo: [PSEUDONIMO]
data-e2: YYYY-MM-DD
vertical: [vertical confirmada em E2]
beneficio-alvo: [B41 / B31 / B91 / B46 / B87 / B21 / B80 etc.]
estado-custodia: S1
etapa-atual: E3
operador-t1t2: Beto
supervisor-t3: Alessandro Neves
parceiro-t4: Dra. Juliana Pereira de Melo (OAB-GO 38.662) — pendente
clickup-task-id: [ID]
drive-folder-url: [URL]
contrato-phi1-status: [pendente / assinado / cancelado]
contrato-phi1-valor: [R$ 2.200 Standard / R$ 1.500 CadÚnico]
contrato-phi1-parcelas-pagas: [0/3, 1/3, 2/3, 3/3]
nb-anterior: [se houver indeferimentos]
risco-fraudscore: [BAIXO / MEDIO / ALTO]
risco-confidence: [valor 0-100]
zona-router-ethics: [VERDE ≥70 / AMARELA 40-70 / VERMELHA <40]
flags: []
---

# [PSEUDONIMO] — Manifesto do Caso

> ⚠️ **Regra de uso:** este arquivo é a única fonte narrativa do caso. Atualizar a cada transição de etapa. **Append-only com data** — não apagar histórico.

## 1. Quem é o cidadão (sem PII real)
[Descrição neutra: gênero, faixa etária aproximada, região, perfil ocupacional. NUNCA nome real, NUNCA CPF, NUNCA NB completo. NB pode aparecer só em casos de indeferimento prévio para rastreabilidade.]

## 2. Por que está aqui
[Como chegou ao MC: indicação, ads, microbioma. Vertical inicial hipotética em E1.]

## 3. Hipótese de tese (E2) — [PREENCHIDO POR ALESSANDRO em até 24h após E2]
- **Tese principal:** [fundamentação legal + número de tema STJ/TNU se aplicável]
- **Tese subsidiária:** [se houver]
- **Riscos jurídicos identificados:** [riscos que demandam Human API ou Rota C]

## 4. Documentos brutos coletados (atualizar a cada chegada)
- [ ] Documento 1 — [tipo, data]
- [ ] Documento 2 — ...

## 5. Histórico de transições

### YYYY-MM-DD — E2 → E3
- Deliberação aprovada por [supervisor]
- Vertical: [vertical] confirmada
- Pasta Drive criada
- Contrato Φ₁ assinado, [N]ª parcela paga via PIX
- Próximo passo: [ação concreta]

### YYYY-MM-DD — E3 → E4
- Dossiê v1 montado (hash SHA-256: [hash])
- Senha gov.br retirada do Bitwarden Org MC (item `gov-br-[PSEUDONIMO]`)
- DER capturada: [número]
- Bitwarden: senha **devolvida** ao cidadão imediatamente após protocolo (POP-Bitwarden §X)

### [continuar até E7]

## 6. Decisões e ajustes
- YYYY-MM-DD: [decisão registrada com rationale]

## 7. Riscos identificados
- [risco] → [mitigação]

## 8. Handoff jurídico (se Rota C)
- [ ] Acionado em YYYY-MM-DD
- TTA emitido em YYYY-MM-DD (hash: [hash])
- Advogada escolhida pelo cidadão: [nome] (OAB: [num])
- `99_compartilhado-juliana/` ativada em YYYY-MM-DD (se aplicável)

## 9. Custódia
- **S[1/2/3] ATIVO** desde YYYY-MM-DD
- Senha gov.br: **Bitwarden Org MC** (item `gov-br-[PSEUDONIMO]`) — **NUNCA copiar para ClickUp/Drive/manifesto**
- TTL S1: até YYYY-MM-DD ([30/60] dias)
- Apagamento S2: programado para D+7 da entrega (YYYY-MM-DD)
- Apagamento Bitwarden: D+0 da entrega ou cancelamento (POP-Bitwarden)

## 10. Cronometragem A4 (preencher se for caso de calibração)
- Tempo real E2 → E3: [Xmin]
- Tempo real E3 → E4: [Xmin]
- Tempo total Φ₁ executado: [Xmin]
- Comparar com estimativa ADR-007 v3.x: 15h/caso média
````

---

## 10. Riscos e dívida técnica

### 10.1 Pontos de tensão registrados

| # | Risco | Mitigação Z3 | Mitigação Z2+ |
|---|---|---|---|
| **R1** | Estimativas de tempo nos POPs são engenharia reversa, não dado empírico. | Cronometragem real começa em Hib001. | A4 calibrado com 5+ casos. |
| **R2** | Beto colando URL no ClickUp manualmente = ponto de falha (esquecimento, paste errado, pasta movida). | Manual aceito (5–20 casos/mês). Auditoria semanal. | Script Python via API Drive + ClickUp (Igor). |
| **R3** | `99_arquivado/` no Drive operacional cresce com tempo. | Volume baixo em Z3 — sem ação. | Migração mensal para GCP Nearline/Archive. |
| **R4** | Pasta `99_compartilhado-juliana/` view-only depende de configuração manual de permissão. | Beto cria com permissão padrão; Alessandro ajusta para view-only no momento da ativação. | Automação via API Drive. |
| **R5** | Apagamento manual S2 + Bitwarden depende de disciplina humana. | Calendário com lembretes + audit log mensal. | Trigger automático no backend (Igor). |

### 10.2 Dívida técnica explícita (para Igor — Z2+)

1. Script Drive↔ClickUp (sync bidirecional do campo `drive_folder_url`)
2. Trigger automático S1→S2 (marcação + contador 7 dias)
3. Trigger automático apagamento `01_brutos/` + `02_processados/` em D+7
4. Cryptographic erasure programado (DEK destruction no Cloud KMS)
5. Audit log imutável Tier 4 (BigQuery + hash encadeado)

---

## 11. Próximos passos para Claude Code (Frente 1.5)

> Esta seção é um **briefing executável** para o Claude Code rodando localmente no HP ENVY. Pode ser consumido diretamente.

### 11.1 Tarefas de execução

1. **Criar pasta-template** em `Meu Cumpadre/Templates/MC-TEMPLATE-Manifesto-Caso-v1.0.md` com o conteúdo da §9 deste SPEC.
2. **Não criar pastas de cliente automaticamente.** A criação física é evento operacional (E2 do caso) — Beto executa manualmente até primeiro Hib001 cronometrado.
3. **Após Hib001 cronometrado** + validação CEO, gerar script Python idempotente para criação automática de pastas a partir de eventos do ClickUp (registrar como `MC-SCRIPT-Drive-Bootstrap-v1.0.py` no Vault em `02-ARQUITETURA/`).
4. **Atualizar Vault Obsidian** copiando este SPEC para `02-ARQUITETURA/MC-SPEC-Drive-Estrutura-v1_0-2026-0427.md` com links wiki para:
   - `[[MC-PROCESSO-Jornada_E0E7_Mestre-v1_1-2026-0427]]`
   - `[[MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417]]`
   - `[[MC-SPEC-ClickUp-Reconstrucao-v2_0-2026-0418]]`

### 11.2 Validação de integridade

Após execução, Claude Code deve confirmar:
- [ ] Template `MC-TEMPLATE-Manifesto-Caso-v1.0.md` criado em pasta correta
- [ ] SPEC copiado para Vault com links wiki funcionais
- [ ] Nenhum arquivo de cliente foi criado (estrutura virtual apenas)
- [ ] Hash SHA-256 do SPEC registrado em `MC-AUDIT-Hashes.log`

---

## 12. Versionamento e selagem

| Versão | Data | Mudança |
|---|---|---|
| **1.0** | **2026-04-27** | **Versão inicial. Decisões Q1–Q5 seladas. Estrutura tronco-comum + módulos. POP-DRIVE-001/002. Template manifesto. Conformidade ADR-009b + Jornada E0–E7 v1.1.** |

### Roadmap

- **v1.1:** após cronometragem A4 com Hib001 (~30/05/2026) — calibrar tempos do POP-DRIVE-001
- **v1.2:** após selagem ADR-007 v3.1-FINAL (pós 19/05/2026 — parecer Dra. Juliana) — incorporar implicações contratuais
- **v2.0:** automação Drive↔ClickUp via API (Z2+, dependência Igor)

---

**FIM DO SPEC**
**MC-SPEC-Drive-Estrutura v1.0 — 27/04/2026**
**Autores: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)**
**Hierarquia: Dignidade > Compliance > Viabilidade**
**Confidencialidade: TRADE SECRET INVIOLÁVEL**

---
## Links Relacionados

### Jornada
[[MC-PROCESSO-Jornada_E0E7_Mestre-v1_1-2026-0427]]

### ADRs e Governança
[[MC-ADR-007-CampoPrecificacao-v3_2-2026-0427]]
[[MC-ADR-009-TresEstados-Custodia-Dossie-v1_0-2026-0417]]
[[MC-CONTRATO-Phi1-MINUTA-v2_3-2026-0427]]
[[MC-PARTNER-JulianaMelo-Qualificacao-v1_2-2026-0421]]
[[_MC-RouterEthics_11_v1_1-2026-0505-CLevel]]

### Infraestrutura Documental
[[MC-POP-Bitwarden-Custodia-v1_0-2026-0427]]

### Cadeia E0→E7
[[MC-POP-E1-PrimeiroContato-v1_0-2026-0427]]
[[MC-POP-E2-Triagem-Deliberacao-v1_0-2026-0427]]
[[MC-POP-E3-Coleta-Documental-v1_0-2026-0427]]
[[MC-POP-E3b-QA-Dossie-v1_0-2026-0427]]
[[MC-POP-E4-Protocolo-INSS-v1_0-2026-0427]]
[[MC-POP-E5-Watchdog-Exigencias-v1_0-2026-0427]]
[[MC-POP-E6-Resolucao-v1_0-2026-0427]]
[[MC-POP-Handoff-Juridico-v1_0-2026-0427]]
[[MC-POP-Encerramento-Caso-v1_0-2026-0427]]

∞
