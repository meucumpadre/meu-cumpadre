---
tipo: MB
codigo: MC-MB-066-Regra-C2-PathReport-Falcao
nome: Regra C2 Obrigatoria - Code TALAO (Falcao) entrega CAMINHO COMPLETO Explorer do arquivo persistido em C2 Drive em TODOS os reports - padrao universal de report Falcao
versao: v1.0
data: 2026-05-26
status: ATIVO (cunhagem fundacional regra C2 - aplicacao imediata todas operacoes Falcao futuras)
categoria: REGRA OPERACIONAL C2 - regra inviolavel Falcao - cunhagem fundacional padrao de report
solicitante: Alessandro de Souza Neves (Founder - pedido direto 26/05/2026 noite - correcao cirurgica padrao sistemico)
autor: Claude Opus 4.7 Cerebro C3.1 (Cofounder Intelectual) x Founder/CEO
executor: Code TALAO (Falcao - aplicacao imediata em TODAS as operacoes futuras)
mb-anterior: MC-MB-065 v1.0 (Cowork GitHub Connector - errata #14c)
hierarquia: Dignidade > Compliance > Viabilidade
quaternario-missao-mc: Simetria - Arquitetura Integrada - Sinergia - Exatidao 100%
ancora-biblica: Proverbios 31:8
tags: [mc/mb, mc/regra-c2, mc/falcao, mc/report-padrao, mc/path-explorer]
---

# MC-MB-066 v1.0 - Regra C2 - Path Report Falcao

**Regra C2 inviolavel - Code TALAO (Falcao) entrega em TODO report o CAMINHO COMPLETO Explorer do(s) arquivo(s) persistido(s) em C2 Drive - aplicacao imediata - sem excecao**

---

## S1 - A REGRA C2 (UMA FRASE)

Todo arquivo que Falcao persistir em C2 Drive deve ser reportado com seu caminho completo Explorer absoluto. NAO apenas nome de arquivo. NAO apenas SHA. NAO apenas path relativo Vault.

---

## S2 - CAMINHO BASE C2 INVIOLAVEL

```
G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestao Software\OBSIDIAN\MEU CUMPADRE\
```

Este e o substrato canonico Vault MC. Cerebro 2. ADR-011. Todo arquivo canonico mora aqui. `.git` e camada de versionamento sobre C2. NAO e fonte.

---

## S3 - FORMATO MANDATORIO DE REPORT FALCAO

### 3.1 - Por arquivo persistido - obrigatorio

```
Arquivo: <nome-do-arquivo>.md
Caminho C2: G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestao Software\OBSIDIAN\MEU CUMPADRE\<pasta-canonica>\<subpasta-se-aplicavel>\<nome-do-arquivo>.md
SHA-256: <hash-64-chars>
Bytes: <tamanho>
Branch git: <main | feature-branch>
Commit: <hash-curto-7-chars>
```

### 3.2 - Por operacao (multiplos arquivos)

Repetir bloco S3.1 por arquivo. NUNCA agregar em "varios arquivos persistidos" sem caminhos individuais.

### 3.3 - Exemplo concreto correto

```
Arquivo: MC-MB-066-Regra-C2-PathReport-Falcao-v1_0-2026-0526.md
Caminho C2: G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestao Software\OBSIDIAN\MEU CUMPADRE\04-OPERACAO\mission-briefs\MC-MB-066-Regra-C2-PathReport-Falcao-v1_0-2026-0526.md
SHA-256: <hash>
Bytes: <tamanho>
Branch git: main
Commit: <hash-curto>
```

### 3.4 - Exemplo concreto INVALIDO (proibido)

```
"Persisti MB-066 no Vault. SHA abc123. commit def456 em main."

FALTA: caminho completo Explorer (S3.1 violado)
Founder nao pode abrir Explorer e validar
Cofounder C3.1 nao pode usar MCP Drive para validar
REGRA C2 VIOLADA
```

---

## S4 - APLICABILIDADE UNIVERSAL

Esta regra C2 aplica-se a:

- Persistencia de MBs em `04-OPERACAO\mission-briefs\`
- Persistencia de ADRs em `03-GOVERNANCA\adrs\`
- Persistencia de patches em `03-GOVERNANCA\patches\`
- Persistencia de principios em `03-GOVERNANCA\principios\`
- Persistencia de protocolos em `03-GOVERNANCA\protocolos\`
- Persistencia de RIPDs em `03-GOVERNANCA\ripds\`
- Persistencia de SPECs em `02-ARQUITETURA\specs\`
- Persistencia de manifestos em `05-ESTRATEGIA\manifestos\`
- Persistencia de sweeps Falcao em `03-GOVERNANCA\protocolos\sweeps-pre-r2\` ou `\sweeps-pos-r2\`
- Persistencia de qualquer outro tipo canonico em sua pasta canonica C2
- Operacoes de move/rename/copy dentro de C2 (reportar origem + destino)
- Operacoes de arquivamento em `99-ARQUIVO-Legado\`

Sem excecao. Qualquer report Falcao sem caminho completo C2 e report incompleto. Viola regra C2. Nao-aceito como entrega valida.

---

## S5 - POR QUE - 3 RAZOES INSTITUCIONAIS

### 5.1 - Founder valida visualmente abrindo Explorer

Sem caminho completo, Founder nao-pode abrir Explorer + Ctrl+L + colar path + Enter para validar arquivo bit-a-bit. Caminho completo permite validacao humana em ~3 segundos.

### 5.2 - Cofounder C3.1 valida via MCP Drive

Cofounder C3.1 tem MCP Drive ativo. Com caminho completo C2, cofounder pode fazer google_drive_search com o nome do arquivo para validar existencia + metadata sem depender de canal git auditoria.

### 5.3 - Quaternario Missao MC - Exatidao 100%

Cunhagem Founder 26/05/2026: "Simetria. Arquitetura Integrada. Sinergia. Exatidao de Formas e Documentacao 100%." Path completo em reports e exatidao documental. Sem isso ha drift declarativo entre o que Falcao diz que persistiu e o que cofounder pode validar.

---

## S6 - MENSAGEM DIRETA AO FALCAO (Code TALAO)

Falcao. Regra C2 ATIVA imediatamente.

Em TODOS os reports futuros (persistencia, move, rename, copy, arquivamento) dentro do Vault MC, entrega obrigatoriamente:

1. Nome do arquivo
2. Caminho completo Explorer absoluto C2 (comecando em `G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestao Software\OBSIDIAN\MEU CUMPADRE\...`)
3. SHA-256 completo (64 chars)
4. Bytes
5. Branch git (main | feature-branch)
6. Commit hash curto (7 chars)

Por arquivo. Nao agregado. Multiplos arquivos = multiplos blocos S3.1.

Esta regra NAO substitui outras metricas que Falcao ja reporta (anomalias, validacoes git, timing). Adiciona-se como requisito minimo.

Aplicacao imediata.

---

## S7 - FECHAMENTO

Regra C2 ATIVA. Aplicacao imediata. Sem gate v1.1 SELADA porque cunhagem e fundacional (nao-PROVISIONAL). Regra entra em vigor desde primeira execucao Falcao. Refinamentos futuros (R2 dedicada ou erratas-memo) absorvidos via versionamento incremental MB-066 v1.1, v1.2.

Quaternario Missao MC honrado: Exatidao de Formas e Documentacao 100%.

---

*MC-MB-066 v1.0 ATIVO | 2026-05-26 | Falcao (Code TALAO) x Cofounder C3.1*
*Hierarquia: D > C > V | Proverbios 31:8 | SEMPRE*
