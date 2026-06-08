---
tipo: RIPD (Relatório de Impacto à Proteção de Dados Pessoais · LGPD art. 38)
nome: RIPD — Telemetria de Governança (RUA L5 · Rec #1) sobre jornada real
versao: v0.1 PROVISIONAL (ESQUELETO)
data: 2026-06-08
status: MINUTA-ESQUELETO — instrumenta as condicionantes (4) RIPD + (1) trava-metadado + (5) papel do Parecer R3 Bancada Governança (08/06) · aguarda DPO [cond. (3)] + completar campos + validação R3 (Dra.)
preparado_por: MC — Code TALÃO (atividade-meio)
lastro: Parecer R3 Bancada Governança LGPD/ANPD v1.1 SELADO (08/06) · código .claude/hooks/mc-audit.py (zero-PII VERIFICADO pela Dra.)
firewall_oab: "Minuta de compliance (atividade-meio). NÃO é parecer jurídico. A validação é da Dra."
hierarquia: Dignidade > Compliance > Viabilidade
---

# 🛡️ RIPD — Telemetria de Governança (Rec #1)

> **Escopo (selado pela Dra.):** este RIPD cobre **exclusivamente a telemetria de governança** — *qual Unidade Agêntica rodou, quando, em que gate/zona* — **sem tocar o conteúdo da jornada do cidadão**. Risco **BAIXO** por construção. **Travado no metadado:** qualquer expansão para observar o **conteúdo** (benefício/CID) exige **novo gate + base do art. 11 + RIPD próprio** (Parecer #9, Q1). *Piloto em fixture sintético é livre; este RIPD destrava a telemetria sobre **dado real**.*

## 0. Natureza e limites
Minuta-esqueleto de compliance (atividade-meio). Não é parecer. *(Numeração das condicionantes = a do Parecer SELADO §6/§9: **(1)** Rec#1 metadado · **(2)** Rec#3 anonimização · **(3)** DPO · **(4)** dois RIPDs · **(5)** papel controlador/operador. "Parecer #9" é o rótulo interno do índice MC.)* Este documento **é um dos dois RIPDs [cond. (4)]** e **atesta a trava-metadado [cond. (1)]** + a **classificação de papel [cond. (5)]**. Validação final: Dra. + DPO.

## 1. Identificação
| Campo | Valor |
|---|---|
| Controlador | MEU CUMPADRE — ORQUESTRAÇÃO DOCUMENTAL E TECNOLOGIA LTDA. (CNAE 6201-5/01) |
| **Papel no tratamento** | **Controlador do próprio metadado de governança** (Parecer #9, Q4 · cond. (5)) |
| Encarregado (DPO) | **Alessandro de Souza Neves** (Founder · acumula DPO na Crisálida, pessoa interna do MC — não a Dra.) · `alessandro.neves@meucumpadre.com.br` · **ato SELADO 08/06** |
| Tratamento | Telemetria de auditoria das Unidades Agênticas (RUA L5) sobre a jornada real |
| Sistema | `.claude/hooks/mc-audit.py` (emissor) + `.claude/registro/ler-audit.py` (analisador) |

## 2. Descrição do tratamento
### 2.1 Finalidade (art. 6º I)
Governança e melhoria operacional do MC: saber **qual UA rodou, quando, em que gate/zona** — para auditoria, detecção de drift e disciplina dos gates. **Não** há finalidade de perfilamento nem de observação do caso do cidadão.

### 2.2 Categorias de dados — **conjunto FECHADO, zero-PII** (verificado no código)
Cada linha de telemetria carrega **somente** estas 9 chaves de governança (o resto do payload é descartado):

| Chave | Conteúdo | PII? |
|---|---|---|
| `ts` | timestamp do evento | não |
| `event` | invoke / result | não |
| `ua` | id da Unidade Agêntica acionada | não |
| `tipo` | tipo provável da UA | não |
| `gate` | gate atravessado | não |
| `zona` | zona (verde/etc.) | não |
| `instancia_aci` | instância ACI | não |
| `in_registro` | flag de registro | não |
| `sessao_hash` | **sha256[:8] do session_id** (conta sessões sem retê-lo) | não (hash truncado só para contagem — sem cruzamento com PII) |

> **`CHAVES_PERMITIDAS` é o firewall LGPD em forma de dados** (mc-audit.py:57). Nenhuma outra chave é jamais escrita. **Default OFF**; **fail-safe** (payload inválido → `{}`); session_id **hasheado**. *A Dra. leu o código e atestou "zero-PII por construção" (Parecer #9, §2/§3 — [VERIFICADO]).*

### 2.3 Ciclo de vida
| Onde | Retenção | Base |
|---|---|---|
| arquivo de registro local (`.claude/registro/`) | `[a definir — sugerir TTL/rotação]` | art. 7º IX (legítimo interesse · governança) |

### 2.4 Compartilhamento
**Nenhum** com terceiros. Uso **interno** de governança. (Export para ANPD/B2B = RIPD distinto — `MC-RIPD-Export-Dossie-ANPD-B2B`.)

## 3. Necessidade e proporcionalidade (art. 6º III)
Coleta **mínima** por construção (9 chaves de governança; conteúdo descartado). Proporcional à finalidade de auditoria. **Sem** dado sensível (não há art. 11 em jogo enquanto travado no metadado).

## 4. Matriz de riscos
| Risco | Sever. | Mitigação |
|---|---|---|
| Telemetria escorregar para o **conteúdo** da jornada (benefício/CID) | Alta (se ocorrer) | **Trava de metadado** (`CHAVES_PERMITIDAS`); expansão exige **novo gate + art. 11 + RIPD próprio** |
| Reidentificação via `sessao_hash` | Baixa | hash sha256[:8] sem reter o id; sem cruzamento com PII |
| Vigilância/perfilamento do hipervulnerável (D>C>V) | Alta (princípio) | finalidade restrita a governança; **vedado** perfilar (Parecer #9, Q6) |

## 5. Salvaguardas já implementadas (Proof-First)
- `CHAVES_PERMITIDAS` fechado · conteúdo descartado · `session_id` hasheado · **default-off** · fail-safe (mc-audit.py — código lido pela Dra.).

## 6. Base legal
- **art. 7º, IX** (legítimo interesse — governança operacional) + **art. 6º, X** (accountability). **Não** sensível (art. 11 não se aplica enquanto metadado).

## 7. Direitos dos titulares (art. 18)
Como a telemetria **não identifica** o titular (metadado de governança), não há perfil individual. Canal do Encarregado (após DPO) atende eventuais solicitações.

## 8. ⚠️ Pendências (o output honesto)
- [ ] **DPO nomeado** (cond. (3) · `MC-KIT-DPO`) — inserir no §1
- [ ] Definir **retenção/rotação** do registro (§2.3)
- [ ] **Validação R3 da Dra.** (confirma que o metadado-only satisfaz o art. 11 não-incidência)
- [ ] Classificação **controlador/operador** confirmada (cond. (5) — aqui: controlador do metadado)

## 9. Conclusão (operacional — não jurídica)
Travado no metadado, o tratamento é **baixo risco** e a telemetria sobre dado real é **admissível** sob as salvaguardas verificadas — **condicionada** ao DPO nomeado e à validação da Dra. **Expansão a conteúdo da jornada = novo RIPD + novo gate.**

---
**FIREWALL OAB:** minuta de **atividade-meio**. A admissibilidade e a validação são da **Dra.** (Parecer #9). Nada aqui pratica advocacia.
*RIPD Telemetria · Code TALÃO · 08/06/2026 · condicionantes (4)+(1)+(5) do Parecer R3 Bancada Governança · D > C > V · Proof-First · ∞*
