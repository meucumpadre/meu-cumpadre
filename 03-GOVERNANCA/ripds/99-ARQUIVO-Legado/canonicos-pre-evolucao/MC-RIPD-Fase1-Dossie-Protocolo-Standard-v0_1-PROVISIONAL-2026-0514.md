---
tipo: RIPD-RELATORIO-IMPACTO-PROTECAO-DADOS
codigo: MC-RIPD-Phi1
escopo: Φ₁ — Dossiê + Protocolo Standard (B2C Previdenciário)
versao: 0.1
status: PROVISIONAL
data_producao: 2026-05-14
autores:
  - Claude Opus 4.7 (cofounder C1) — produção textual canônica
  - Code DELL (executor C3) — persistência operacional
gate_selagem: Parecer Dra. Juliana Pereira de Melo (OAB-GO 38.662) — Reunião 19/05/2026 Bloco K (Compliance LGPD)
fundamento_lgpd:
  - LGPD Lei 13.709/2018 Art. 5º, XVII (RIPD definição)
  - LGPD Art. 38 (autoridade pode solicitar RIPD)
  - Guia ANPD de RIPD 2024
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
canonico_em: 03-GOVERNANCA/ripds/
---

# MC-RIPD-Φ₁ v0.1 PROVISIONAL — Dossiê + Protocolo Standard B2C Previdenciário

> Relatório de Impacto à Proteção de Dados Pessoais — Fluxo Φ₁ Standard (R$ 2.200 em até 4×). Rascunho PROVISIONAL aguardando parecer Dra. Juliana 19/05/2026.

---

## §1 — IDENTIFICAÇÃO DO CONTROLADOR

| Campo | Valor |
|---|---|
| Controlador | MEU CUMPADRE — ORQUESTRAÇÃO DOCUMENTAL E TECNOLOGIA LTDA. |
| Status jurídico | Constituição pendente JUCEG (Kit MC-KIT-DossieConstituicao-v1_0 pronto) |
| Tipo societário | Sociedade Limitada Unipessoal (SLU) — Microempresa (ME) — Simples Nacional |
| CNAE Principal | 6202-3/00 PROVISIONAL (validação 19/05 Bloco G2) |
| Sede | Av. Portugal 1148, Sala C-2501, Ed. Órion, Setor Marista, Goiânia/GO |
| Encarregado (DPO) | PROVISIONAL — designação formal pós-constituição JUCEG |
| Canal LGPD titular | `dpo@meucumpadre.com.br` (a configurar pós-domínio) |
| Contato institucional | `contato@meucumpadre.com.br` · WhatsApp +55 62 99875-2887 |
| Representante legal | Alessandro de Souza Neves (CPF a inserir) |

---

## §2 — DESCRIÇÃO DO TRATAMENTO

### 2.1 Natureza
Prestação de serviço de **infraestrutura de simetria informacional** — assistência técnica na organização documental e protocolo administrativo de petições previdenciárias junto ao INSS/RGPS, em favor de cidadão hipervulnerável. **Atividade-meio**. MC não exerce advocacia (Firewall OAB, CNAE 6202-3/00).

### 2.2 Finalidade
Viabilizar acesso de cidadão hipervulnerável a benefícios previdenciários e assistenciais do INSS, eliminando assimetria informacional e técnica que historicamente impede o exercício do direito.

### 2.3 Base Legal LGPD

| Art. LGPD | Aplicação |
|---|---|
| Art. 7º, V | Execução de contrato Φ₁ — TTA ZapSign A1 ICP-Brasil (ADR-014) |
| Art. 7º, VI | Cumprimento de obrigação contratual de organização e protocolo |
| Art. 7º, IX | Atendimento de interesse legítimo do titular (acesso a direito previdenciário) |
| Art. 11, II, "b" (dados sensíveis) | Exercício regular de direitos em processo administrativo — quando CID/saúde é eixo do benefício (B91/B92/B94, LC 142/2013) |
| Art. 14 | Tratamento de dados de crianças/adolescentes só ocorre em fluxo pensão por morte (dependentes) — com base no melhor interesse + consentimento do responsável |

### 2.4 Categorias de Dados Tratados

🟢 **Verde (PII básico necessário):**
- Nome completo · CPF · RG · CIN · data de nascimento · endereço residencial · contato (telefone/email/WhatsApp)
- Estado civil · filiação · nacionalidade · naturalidade

🟡 **Amarelo (financeiro/profissional):**
- CNIS extrato completo (vínculos, salários de contribuição, períodos)
- CTPS (cópia física ou digital)
- NIT/PIS/PASEP
- Histórico empregatício declarado (PPP, declarações sindicais, holerites)
- Recolhimentos como contribuinte individual/facultativo

🔴 **Vermelho (sensíveis — Art. 11 LGPD):**
- CID (Código Internacional de Doença) — APENAS quando benefício de incapacidade
- Laudos médicos · perícias · atestados
- Condição PcD biopsicossocial (LC 142/2013, CIF) — APENAS Φ₁-PcD
- Condição rural (não-sensível mas politicamente carregada) — apenas Φ₁ rural

🔴🔴 **Vermelho crítico (credenciais):**
- Senha gov.br — APENAS quando Cenário A operacional 48h (custódia Bitwarden Org MC, ADR-009a, AES-256 + 2FA TOTP + auto-lock 15min)
- **VEDADO Cenário B** (custódia indefinida ou operação contínua) — Lei 14.063/2020 Art. 6º

### 2.5 Categorias de Titulares

| Categoria | Descrição | Vulnerabilidade |
|---|---|---|
| Adulto hipervulnerável | Idoso 60+, PcD, baixa literacia, rural distante de APS, baixa renda | ALTA — exige TTA reforçado (vídeo + áudio explicativo) |
| Dependente do titular | Cônjuge, filho menor, curador (fluxo pensão) | EXTRA — Art. 14 LGPD se menor |
| Procurador formal | Familiar com procuração registrada (excepcional) | MÉDIA |

### 2.6 Fluxo do Tratamento (E0→E7 + Hook 0)

| Etapa | Operação | Dados envolvidos | Local processamento |
|---|---|---|---|
| **Hook 0** | Triagem gov.br (5 perguntas P1-P5) | Nome + CPF para verificar nível gov.br | WhatsApp + N8N (Brasil) |
| **E0 — Triagem** | RouterEthics 11.0 cascata (D>C>V) | Triagem narrativa, sem coleta documental | LiteLLM router → Sabiá-4 Maritaca (Brasil) |
| **E1 — TTA** | Termo Triagem Assistida (ZapSign + vídeo + áudio) | Identificação completa + consentimento expresso | ZapSign A1 ICP-Brasil (ADR-014) |
| **E2 — Coleta** | Coleta documental orientada via WhatsApp | Todos os 🟢🟡🔴 conforme benefício | N8N + storage S1 (Brasil) |
| **E3 — Intelligence Layer** | Extração estruturada (ADR-010) | JSON normalizado dos documentos | GAIA-4B self-hosted (Brasil) |
| **E4 — Dossiê** | Geração CP-3/CP-5/CP-7 + scaffolding | Dossiê estruturado | Sabiá-4 Maritaca (default) ou Claude Bedrock sa-east-1 (casos complexos) |
| **E5 — Protocolo** | Protocolo Meu INSS pelo cidadão assistido OU Cenário A 48h | Protocolo + DER + número de processo | gov.br do cidadão |
| **E6 — Resolução** | Acompanhamento até decisão INSS | Notificações Meu INSS | gov.br do cidadão (polling público) |
| **E7 — Φ₄ (opcional)** | Pós-jornada → Φ₄ Guardião | Apenas histórico Φ₁ + comunicações | Vide RIPD-Φ₄ |

### 2.7 Retenção de Dados (ADR-009b)

| Estado | Período | Conteúdo retido |
|---|---|---|
| S1 — Triagem | 24h após E0 | Triagem narrativa, identificação básica |
| S2 — Sprint | 48h sprint interno + 90 dias buffer recurso | Dossiê completo + comunicações |
| S3 — Erasure | 30 dias após desfecho final (concessão/indeferimento definitivo) | Anonimização + log auditoria mantido 6 anos (LGPD Art. 16) |

**Cloud KMS erasure criptográfico:** chaves descartadas em S3, dados cifrados tornam-se ilegíveis.

---

## §3 — NECESSIDADE E PROPORCIONALIDADE

Cada categoria de dado coletada é diretamente necessária para uma camada específica do dossiê CP-MC:

| Dado | Necessidade |
|---|---|
| CPF · RG · CIN | Identificação inequívoca do titular (Lei 9.784/99) |
| CNIS | Comprovação de tempo de contribuição (IN INSS 128/2022 — fora art. 554) |
| CTPS · vínculos | Confirmação de períodos especiais/comuns |
| CID · laudos | Comprovação de incapacidade/PcD (B91/92/94, LC 142) |
| Senha gov.br | EXCLUSIVO Cenário A 48h para protocolo (NUNCA Cenário B) |
| Composição familiar | Pensão por morte / dependentes |
| Comprovante residência | Foro competente JEF/B2B + APS responsável |

**Minimização aplicada:**
- Não coletamos dados que não estejam em IN INSS aplicável ao benefício específico
- CID coletado APENAS se incapacidade é eixo (B91/B92/B94, LC 142)
- Renda familiar coletada APENAS em fluxos assistenciais (BPC LOAS — fora Φ₁ standard, vai a Hook 1b)
- Senha gov.br solicitada APENAS quando Cenário A explicitamente autorizado pelo cidadão (TTA específico)

---

## §4 — RISCOS AOS DIREITOS E LIBERDADES DOS TITULARES

### Matriz 5×5 (Probabilidade × Impacto):

| # | Risco | Prob | Imp | Classe |
|---|---|---|---|---|
| R1 | Vazamento de PII via incidente de segurança | 2 | 5 | ALTO |
| R2 | Acesso indevido a conta gov.br (Cenário A) | 2 | 5 | ALTO |
| R3 | Re-identificação via dados pseudonimizados | 1 | 4 | MÉDIO |
| R4 | Processamento Bedrock sa-east-1 sob Risco Provisional ADR-012 (DPA Anthropic pendente) | 3 | 3 | MÉDIO-ALTO |
| R5 | Erro IA generativa em peça previdenciária → prejuízo material | 2 | 4 | MÉDIO-ALTO |
| R6 | Custódia operacional senha gov.br Bitwarden — superfície de ataque | 2 | 5 | ALTO |
| R7 | Hipervulnerabilidade do titular → consentimento imperfeito mesmo com TTA + vídeo | 3 | 4 | ALTO |
| R8 | Compartilhamento indevido com parceiro marketplace (Φ₁ → Ψ₁) | 1 | 5 | MÉDIO |

**Atenção máxima:** R1 · R2 · R6 · R7 (vulnerabilidade reforçada pela hipervulnerabilidade do titular).

---

## §5 — MEDIDAS TÉCNICAS E ADMINISTRATIVAS

### 5.1 Técnicas

| Medida | Implementação |
|---|---|
| Criptografia at-rest | MySQL TDE 256-bit |
| Criptografia in-transit | TLS 1.3 mínimo (sem fallback 1.2) |
| Custódia credenciais | Bitwarden Org MC (ADR-009a) — AES-256 · 2FA TOTP · auto-lock 15min · audit mensal |
| Pseudonimização | `cidadao_id_hash` SHA-256 + SALT_MC Bitwarden (ClickUp Space-level — pendente Igor) |
| Hardening LLM | Region-pin sa-east-1 (Bedrock) · self-host GAIA-4B GCP Brasil · LiteLLM router |
| Logs auditoria | 100% operações em RouterEthics audit table MySQL — retenção 6 anos LGPD Art. 16 |
| Erasure | Cloud KMS chaves descartadas S3 — dados cifrados tornam-se ilegíveis |
| Backup | Encriptado · retenção 90 dias · acesso restrito |
| ZapSign A1 ICP-Brasil | Assinatura digital qualificada do TTA (ADR-014) |

### 5.2 Administrativas

| Medida | Implementação |
|---|---|
| Treinamento Beto T1+T2 | POP-Beto certificado LGPD interno · refresh trimestral |
| Política retenção S1/S2/S3 | ADR-009b documentado · auditoria trimestral |
| Política incidentes | Comunicação ANPD em 48h conforme Art. 48 LGPD (procedimento PROVISIONAL) |
| Canal titular Art. 18 LGPD | `dpo@meucumpadre.com.br` (a configurar) · resposta em 15 dias úteis |
| Subcontratados | Anthropic (Bedrock) · Maritaca · Groq · ZapSign · Hostinger · Bitwarden — contratos com cláusulas LGPD revisados Juliana 19/05 |
| Vedação OAB | MC atividade-meio · não exerce advocacia · não promete resultado |
| Hook 0 disciplina | Cenário B VETADO (Lei 14.063/2020 Art. 6º) · KBA apenas último recurso |
| Auditoria interna | Mensal · log RouterEthics + Bitwarden + ZapSign cross-check |

---

## §6 — RISCOS RESIDUAIS

| Risco | Status | Mitigação |
|---|---|---|
| DPA Anthropic Bedrock pendente | ADR-012 PATCH v1.0→v1.1 PROVISIONAL — período nomeado até Juliana 19/05 Bloco O | Volume controlado 12-15 casos/mês piloto Z3 · risco assumido founder |
| DPO formal não designado | PROVISIONAL pós-constituição JUCEG (jun/2026) | Dra. Juliana como parecerista fundacional cobre até designação |
| ANPD encarregado não registrado | Pós-CNPJ | Registro obrigatório pós-constituição |
| Política incidentes PROVISIONAL | Procedimento textual existe, falta selagem | Selagem pós-Juliana 19/05 |
| SALT_MC ClickUp pendente Igor | Bloqueio operacional `cidadao_id_hash` | MB-026 aguardando Igor |
| Cobertura Φ₁ rural · Φ₁ especial · Φ₁-PcD biopsicossocial | Variações de fluxo dentro de Φ₁ não tratadas separadamente neste RIPD | Versão v0.2 pós-N=10 casos com tipos diversos |

---

## §7 — DECISÃO E JUSTIFICATIVA

**Tratamento JUSTIFICADO** pela combinação:
- Base legal Art. 7º V + VI + IX + Art. 11 II "b"
- Necessidade comprovada (cidadão hipervulnerável sem alternativa razoável)
- Minimização aplicada
- Medidas técnicas e administrativas adequadas
- Riscos residuais ACEITÁVEIS sob hierarquia D>C>V (Princípio #18 — Risco Provisional Documentado)

**Condições de validade contínua:**
1. Parecer Dra. Juliana 19/05 Bloco K aprovando o fluxo
2. Selagem ADR-012 v1.1 (resolução DPA Anthropic ou alternativa)
3. Designação DPO formal pós-JUCEG
4. Revisão obrigatória pós-N=50 casos (validação empírica)
5. Revisão obrigatória pós-N=150 casos (encerramento piloto Crisálida Z3)

**Cunhar nova versão (v1.0) após parecer Juliana** com integração de eventuais ajustes pareceristas.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."

∞
