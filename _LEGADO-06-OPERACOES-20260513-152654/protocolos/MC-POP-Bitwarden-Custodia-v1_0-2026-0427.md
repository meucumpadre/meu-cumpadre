---
tipo: pop
subtipo: protocolo-operacional-padrao
codigo: MC-POP-Bitwarden-Custodia
versao: 1.0
data-criacao: 2026-04-27
produzido-por: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: SELADO
revisao-pendente: cronometragem A4 em Hib001 → calibração v1.1
tags: [pop, bitwarden, custodia, gov-br, lgpd, transversal, e3-e4, encerramento]
caminho-vault: 06-OPERACOES/protocolos/MC-POP-Bitwarden-Custodia-v1_0-2026-0427.md
relaciona-com:
  - MC-ADR-009a-Custodia_Credenciais_GovBr-v2.0-2026-0425
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1.1-2026-0427
  - MC-SPEC-Drive-Estrutura-v1.0-2026-0427
  - MC-POP-E1-PrimeiroContato-v1.0-2026-0427
classificacao: TRADE SECRET (LPI arts. 195 XI/XII)
sensibilidade-lgpd: N1 (máxima)
---

# MC-POP-Bitwarden — Custódia de Credenciais gov.br

> **Posição na Jornada:** **TRANSVERSAL** — incide em E3 (coleta), E4 (protocolo), E5 (resposta a exigências), E6 (resolução), E7 (encerramento)
> **Princípio absoluto:** senha gov.br **NUNCA** no ClickUp, **NUNCA** no Drive, **NUNCA** no manifesto, **NUNCA** em mensagens WhatsApp arquivadas.

---

## 1. Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo** | Garantir que toda credencial gov.br do cidadão seja custodiada exclusivamente em Bitwarden Org MC (Modelo B do ADR-009a v2.0), com audit trail completo, devolução automática ao cidadão no encerramento, e zero vazamento para sistemas externos. |
| **Gatilho** | Necessidade de acessar Meu INSS / gov.br do cidadão durante E3 (coleta CNIS), E4 (protocolo), E5 (resposta a exigências), E6 (validação de decisão), ou solicitação explícita de devolução. |
| **Operadores** | Alessandro (T3) sempre tem acesso · Beto (T1+T2) acesso por caso · CLT futuros: acesso por caso |
| **Frequência de uso por caso típico** | 3-5 acessos durante toda a jornada |
| **Status A4** | Estimativa de engenharia — calibrar com Hib001 |

---

## 2. Princípios invioláveis aplicáveis a este POP

### 2.1 Princípios fundacionais (ADR-009a v2.0)

1. **Cofre exclusivo:** Bitwarden Organizations MC. **Nenhum outro local autorizado.**
2. **Senha do cidadão é do cidadão.** MC é **custodiante técnico fiduciário** — não proprietário.
3. **Retenção como instrumento de cobrança = VEDADA em qualquer hipótese.** Mesmo em inadimplência, a credencial não vira moeda de troca (CDC art. 39 IV).
4. **E-mail gov.br do cidadão NUNCA é alterado pelo MC.** O e-mail de contato no ticket INSS pode ser do MC; o e-mail do gov.br permanece do cidadão.
5. **Audit log mensal obrigatório.** Toda consulta deixa rastro: quem, quando, qual cliente, qual finalidade.
6. **Encerramento = D+0 da entrega ou cancelamento.** Apagamento imediato e irreversível, com log.

### 2.2 Hierarquia D > C > V aplicada

- **Dignidade:** cidadão recupera controle pleno da própria identidade digital ao final da jornada
- **Compliance:** LGPD arts. 7º, 18, 46, 48 + CDC art. 6º III + CDC art. 39 IV
- **Viabilidade:** Bitwarden é solução madura, custo baixo, aprovada por Dra. Juliana (parecer ADR-009a v2.0)

---

## 3. Configuração técnica do Bitwarden Org MC

### 3.1 Especificações obrigatórias

| Item | Configuração |
|---|---|
| **Plano** | Bitwarden Organizations Business |
| **Criptografia** | AES-256 client-side · master password derivada via PBKDF2 (≥600.000 iterações) |
| **2FA obrigatório** | TOTP (Authy / Google Authenticator) — **não SMS** |
| **Auto-lock** | 15 minutos de inatividade |
| **Idle timeout** | Logout completo após 4h de sessão |
| **Audit log** | Habilitado · exportação mensal obrigatória |
| **Recovery** | Master password do CEO em cofre físico (anel-D) + chave de emergência impressa em local seguro |
| **Acesso** | Por convite do CEO · cada operador tem usuário próprio · sem compartilhamento |

### 3.2 Estrutura de Coleções

```
Bitwarden Org MC/
├── 📁 Casos B2C Ativos/                    ← 1 item por cliente ativo
│   ├── gov-br-Hib001
│   ├── gov-br-Plan001
│   └── gov-br-[Pseudonimo]...
├── 📁 Casos B2C Encerrados (audit only)/   ← 0 items — tudo apagado em D+0
│   └── (pasta existe só para audit log apontar para ela)
├── 📁 Infra MC/                            ← credenciais MC (não do cliente)
│   ├── Hostinger
│   ├── GCP
│   ├── ClickUp Admin
│   └── ZapSign (ADR-014 — substitui Autentique)
└── 📁 Parceiros/                           ← credenciais compartilhadas com parceiros B2B
    └── [Vazio até primeira parceria ativa]
```

### 3.3 Permissões por Coleção

| Coleção | Alessandro | Beto | CLT futuro |
|---|---|---|---|
| Casos B2C Ativos | Manager (full access) | User (acesso por item designado) | User (por designação) |
| Casos B2C Encerrados | Manager (read-only para audit) | — | — |
| Infra MC | Manager | — (apenas itens específicos) | — |
| Parceiros | Manager | — | — |

---

## 4. Estrutura do item Bitwarden por cliente

### 4.1 Nome do item

```
gov-br-[PSEUDONIMO]
```

**Exemplo:** `gov-br-Hib001`, `gov-br-Aux014`, `gov-br-Bpd003`

### 4.2 Campos obrigatórios

| Campo Bitwarden | Conteúdo |
|---|---|
| **Nome do item** | `gov-br-[PSEUDONIMO]` |
| **Username** | CPF do cidadão (sem máscara) |
| **Password** | Senha gov.br |
| **URI** | `https://meu.inss.gov.br` + `https://www.gov.br/pt-br/servicos` |
| **Notes** | (ver §4.3) |

### 4.3 Conteúdo obrigatório do campo Notes

```
PSEUDONIMO: [Hib001]
DATA-CRIACAO: YYYY-MM-DD
ETAPA-INICIO-CUSTODIA: E3
TTL-PROGRAMADO: até [data E7 esperada]
NIVEL-GOV-BR: [Bronze / Prata / Ouro / Plata-Selo-A / Ouro-Selo-A]
2FA-CIDADAO: [Sim — celular / Sim — TOTP / Não]
EMAIL-GOVBR-CIDADAO: [email do cidadão — NÃO ALTERAR EM HIPÓTESE NENHUMA]
TELEFONE-GOVBR: [telefone do cidadão — NÃO ALTERAR]
ACESSOS-AUTORIZADOS: [Alessandro, Beto]
OBSERVACOES: [livre — ex: "senha foi atualizada pelo cidadão em DD/MM, sincronizar"]
```

### 4.4 Campo personalizado: histórico de acessos

Bitwarden permite Custom Fields. Adicionar campo `historico-acessos` tipo "Hidden" com formato:

```
YYYY-MM-DD HH:MM | operador | finalidade
```

Exemplo:
```
2026-05-02 14:23 | Beto | E3-coleta-CNIS
2026-05-15 09:10 | Alessandro | E4-protocolo-DER
2026-06-03 11:30 | Beto | E5-resposta-exigencia-1
```

---

## 5. Protocolos operacionais

### 5.1 PROTOCOLO A — Captura inicial da senha (E3)

**Quando:** primeira vez que cidadão precisa que MC acesse gov.br para coletar CNIS / extratos.

**Passos:**

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 1 | Beto explica ao cidadão pelo WhatsApp: *"Cumpadre, pra eu pegar seu extrato do INSS, vou precisar entrar no gov.br do senhor. Vou guardar a senha em cofre digital seguro, e devolvo no final. Pode passar?"* | Beto | 2min |
| 2 | Aguardar consentimento explícito por mensagem no WhatsApp | Beto | (variável) |
| 3 | Cidadão envia senha por WhatsApp **uma única vez** | Cidadão | (variável) |
| 4 | Beto **imediatamente** abre Bitwarden e cria item `gov-br-[PSEUDONIMO]` com todos os campos do §4 | Beto | 3min |
| 5 | Beto **apaga a mensagem do WhatsApp** que continha a senha (ambos os lados se possível) | Beto | 30s |
| 6 | Beto registra acesso no campo `historico-acessos` | Beto | 30s |
| 7 | Beto registra no manifesto do caso: `Senha gov.br: Bitwarden Org MC (item gov-br-[PSEUDONIMO]) — capturada em [data]` | Beto | 30s |
| 8 | Notificar Alessandro: *"Cumpadre, [Pseudônimo] tá com senha custodiada. Pode operar."* | Beto | 30s |

**Tempo total:** ~7 minutos (excluindo aguardar cidadão)

### 5.2 PROTOCOLO B — Acesso operacional durante a jornada (E3, E4, E5, E6)

**Quando:** sempre que MC precisar logar no gov.br do cidadão.

**Passos:**

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 1 | Operador abre Bitwarden Desktop / Browser Extension (não app mobile, exceto em emergência) | Operador | 30s |
| 2 | Localiza item `gov-br-[PSEUDONIMO]` | Operador | 30s |
| 3 | Verifica que tem **autorização para este caso** (consultar manifesto · campo `acessos-autorizados`) | Operador | 30s |
| 4 | Copia senha **diretamente no campo de login do gov.br** (nunca colar em outro lugar primeiro) | Operador | 30s |
| 5 | Se gov.br pedir 2FA via SMS/celular do cidadão → **STOP**, contatar cidadão pelo WhatsApp para receber código por foto/áudio em tempo real, **nunca** salvar SMS | Operador | (variável) |
| 6 | Realiza a operação necessária (download CNIS, leitura de exigência, etc.) | Operador | (variável) |
| 7 | Faz logout do gov.br ao terminar | Operador | 30s |
| 8 | Atualiza campo `historico-acessos` no Bitwarden com data/hora/finalidade | Operador | 1min |
| 9 | Atualiza Seção 5 do manifesto do caso com o que foi feito | Operador | 2min |

**Tempo total por acesso:** ~5 minutos (excluindo operação no gov.br)

### 5.3 PROTOCOLO C — Atualização de senha pelo cidadão durante a jornada

**Quando:** cidadão decide trocar a senha do gov.br por conta própria (direito dele) e avisa o MC.

**Passos:**

1. Cidadão informa pelo WhatsApp que trocou a senha
2. Beto pede a nova senha **uma única vez** seguindo PROTOCOLO A passos 3-7
3. Atualizar item Bitwarden (não criar novo — atualizar o existente)
4. Adicionar entrada no campo `historico-acessos`: `YYYY-MM-DD HH:MM | cidadão | atualização-senha`
5. Apagar mensagem WhatsApp com senha antiga e nova

### 5.4 PROTOCOLO D — Devolução ao cidadão (encerramento — POP-Encerramento)

**Quando:** caso entra em E7 (soberania) — concessão deferida, indeferimento sem recurso, ou Rota C com TTA emitido.

**Passos:**

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 1 | Beto/Alessandro acessam Bitwarden e localizam item `gov-br-[PSEUDONIMO]` | Operador | 30s |
| 2 | Enviar ao cidadão pelo WhatsApp: **"Orientação de troca de senha gov.br"** (PDF padronizado — §6) | Operador | 2min |
| 3 | Aguardar confirmação do cidadão de que vai trocar a senha | Operador | (variável) |
| 4 | Cidadão troca senha autonomamente no gov.br | Cidadão | — |
| 5 | Cidadão envia print de confirmação de troca para o WhatsApp | Cidadão | — |
| 6 | Operador **apaga o item Bitwarden** (delete permanente, não para a lixeira) | Operador | 1min |
| 7 | Operador exporta entrada de audit log do Bitwarden e arquiva em `99_arquivado/bitwarden-audit-[YYYYMMDD].pdf` no Drive do caso | Operador | 2min |
| 8 | Atualiza Seção 9 do manifesto: `Bitwarden: item APAGADO em YYYY-MM-DD às HH:MM. Cidadão confirmou troca de senha.` | Operador | 1min |
| 9 | Notificar Alessandro: *"Cumpadre, custódia de [Pseudônimo] encerrada. Audit log no Drive."* | Operador | 30s |

**Tempo total:** ~7 minutos (excluindo aguardar cidadão)

### 5.5 PROTOCOLO E — Encerramento por inadimplência (D+60)

**Quando:** após D+60 sem manifestação do cidadão (conforme ADR-009a v2.0 §3 e MC-CONTRATO-Phi1 §8.2).

> ⚠️ **Antes de D+60:** custódia permanece ATIVA. Notificações D+5 e D+20 são enviadas conforme tabela abaixo, mas a credencial **NÃO é apagada** durante o período de carência. Movimentação processual durante esse período é comunicada ao cidadão via canal independente da cobrança (CDC art. 6º III).

**Tabela de marcos:**

| Marco | Ação MC | Custódia Bitwarden |
|---|---|---|
| D+5 | Notificação WhatsApp + e-mail (tom de cuidado, não cobrança) | ATIVA |
| D+20 | 2º aviso + suspensão de comunicação ativa não-essencial | ATIVA |
| D+20 → D+60 | Monitoramento silencioso | ATIVA |
| Movimentação processual (qualquer marco) | Comunicação única e apartada da cobrança (CDC art. 6º III) | ATIVA |
| **D+60 sem manifestação** | Cancelamento unilateral declarado por escrito (e-mail + WhatsApp) + entrega da Orientação de Troca de Senha + apagamento Bitwarden | **ENCERRADA D+0** |

**Princípio absoluto:** mesmo em D+60, antes de apagar o item Bitwarden, **enviar ao cidadão a Orientação de Troca de Senha** (§6) com 48h de antecedência. **Nunca** apagar a credencial sem dar ao cidadão a oportunidade de retomar o controle.

---

## 6. Documento padrão: Orientação de Troca de Senha gov.br

> Salvar como template em `Meu Cumpadre/Templates/MC-TEMPLATE-Orientacao-Troca-Senha-GovBr-v1.0.pdf` para reutilização.

### 6.1 Conteúdo

> **Cumpadre, é hora de trocar sua senha do gov.br.**
>
> Obrigado por ter confiado na gente pra cuidar dos seus papéis. Agora que [terminamos seu caso / o caso foi encerrado], é importante que o senhor / a senhora troque a senha do gov.br pra ter controle total da sua identidade digital. É simples:
>
> **PASSO A PASSO:**
>
> 1. Abre o navegador e digita: **gov.br**
> 2. Clica em ENTRAR (canto superior direito)
> 3. Coloca seu CPF
> 4. Coloca a senha atual
> 5. Depois de entrar, clica em **MEUS DADOS** (foto do cantinho)
> 6. Procura **SEGURANÇA DA CONTA** ou **TROCAR SENHA**
> 7. Cria uma senha nova com pelo menos 8 letras, com número e símbolo
> 8. **NÃO USA** a mesma senha de outros sites
> 9. **GUARDA** a senha nova em local seguro (caderno, papel guardado em casa)
>
> **DEPOIS DE TROCAR:**
>
> Manda um print pra gente confirmando. Aí a gente apaga sua senha antiga do nosso cofre digital — pra senhor saber que ninguém mais tem acesso.
>
> **PRECISA DE AJUDA?**
>
> Se tiver dificuldade, manda mensagem que a gente faz vídeo-chamada e ajuda em tempo real. Mas a senha nova **só o senhor / a senhora vê** — ninguém mais.
>
> Que Deus te guarde, cumpadre.
>
> — Equipe Meu Cumpadre

### 6.2 Versão acessível

- Versão em áudio (Beto grava em WhatsApp) para cidadãos com baixa literacia
- Versão em vídeo (5 min) gravada por Alessandro para casos especiais

---

## 7. Riscos e mitigações

| Risco | Probabilidade Z3 | Mitigação Z3 | Mitigação Z2+ |
|---|---|---|---|
| Beto cola senha em ClickUp/Drive por engano | MÉDIA | Treinamento formal + audit semanal de campos ClickUp | Hook automatizado que detecta padrões de senha em campos não autorizados |
| Bitwarden Org master password comprometida | BAIXA | 2FA obrigatório + recovery em cofre físico | Hardware key (YubiKey) para todos os usuários |
| Cidadão envia senha em mensagem não-Bitwarden e não apaga | ALTA | PROTOCOLO A passo 5 obrigatório — apagar imediatamente | Mensagem efêmera (24h) padrão do WhatsApp Business |
| Operador esquece de apagar item após encerramento | ALTA | Calendário com lembrete em D+0 da entrega · audit mensal | Trigger automatizado no backend (Igor) |
| Audit log não é exportado mensalmente | MÉDIA | Lembrete recorrente no ClickUp dia 1 de cada mês · responsável: Alessandro | Export automatizado para Drive + BigQuery |
| 2FA do gov.br do cidadão fica indisponível em momento crítico | ALTA | PROTOCOLO B passo 5 — sempre confirmar com cidadão antes de operações sensíveis | Comunicação proativa com cidadão antes de cada acesso |

---

## 8. Auditoria mensal obrigatória

### 8.1 Responsável: Alessandro (intransferível)

### 8.2 Periodicidade: 1º dia útil de cada mês

### 8.3 Itens auditados

- [ ] Quantidade de itens em `Casos B2C Ativos/` confere com casos ativos no ClickUp?
- [ ] Cada item tem `historico-acessos` populado e coerente com timeline do caso?
- [ ] Casos encerrados no mês anterior tiveram item apagado em D+0?
- [ ] Algum item está sem campo `EMAIL-GOVBR-CIDADAO` preenchido? (gravidade alta — pode indicar email do MC indevidamente cadastrado)
- [ ] Algum acesso registrado fora de horário comercial sem justificativa?
- [ ] Algum operador acessou item de caso pelo qual não é responsável?

### 8.4 Output: relatório `MC-AUDIT-Bitwarden-YYYY-MM.md`

Salvar em `06-OPERACOES/auditorias/` no Vault Obsidian. Conteúdo:

```markdown
# Auditoria Bitwarden — [Mês/Ano]

## Resumo
- Itens ativos: [N]
- Itens apagados no mês: [N]
- Acessos totais no mês: [N]
- Anomalias detectadas: [N]

## Anomalias
[lista]

## Ações corretivas
[lista]

## Próxima auditoria
[data]
```

---

## 9. Proibições absolutas (zero exceção)

❌ Salvar senha gov.br no ClickUp em qualquer campo, comentário, anexo
❌ Salvar senha gov.br no Drive em qualquer pasta
❌ Salvar senha gov.br no Manifesto do caso
❌ Manter senha gov.br em mensagem WhatsApp arquivada
❌ Compartilhar senha gov.br entre operadores fora do Bitwarden
❌ Reter credencial após encerramento (D+0 inviolável)
❌ Usar credencial após encerramento (mesmo se "esquecida" no cofre)
❌ Alterar e-mail gov.br do cidadão (mesmo que pareça operacional)
❌ Alterar telefone gov.br do cidadão
❌ Cadastrar e-mail do MC como e-mail principal do gov.br do cidadão
❌ Acessar credencial fora dos PROTOCOLOS A-D
❌ Usar credencial em rede pública / dispositivo pessoal não autorizado
❌ Reter credencial como instrumento de cobrança (CDC art. 39 IV)
❌ Apagar credencial sem antes enviar Orientação de Troca de Senha (48h antecedência mínima)

---

## 10. Versionamento

| Versão | Data | Mudança |
|---|---|---|
| **1.0** | **2026-04-27** | **Versão inicial. Conformidade ADR-009a v2.0 (Modelo B Bitwarden). PROTOCOLOS A-E estabelecidos. Audit mensal obrigatório. Orientação de Troca de Senha como deliverable padrão. Tabela inadimplência D+5/D+20/D+60.** |

### Roadmap

- **v1.1:** após cronometragem A4 com Hib001 — calibrar tempos dos protocolos
- **v1.2:** após selagem ADR-007 v3.1-FINAL (parecer Dra. Juliana 19/05) — incorporar implicações contratuais sobre custódia
- **v2.0:** automação parcial via backend Igor (trigger D+0 de apagamento, audit log automatizado no BigQuery)

---

**FIM DO POP-Bitwarden**
**MC-POP-Bitwarden-Custodia v1.0 — 27/04/2026**
**Hierarquia: Dignidade > Compliance > Viabilidade**
**Princípio absoluto: senha do cidadão é do cidadão. MC é custodiante técnico fiduciário.**
**Confidencialidade: TRADE SECRET INVIOLÁVEL · sensibilidade LGPD N1 (máxima)**

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
[[MC-SPEC-Drive-Estrutura-v1_0-2026-0427]]

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
