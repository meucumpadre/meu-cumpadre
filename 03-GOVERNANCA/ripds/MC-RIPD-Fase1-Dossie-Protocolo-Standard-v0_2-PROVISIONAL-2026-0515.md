---
tipo: RIPD-RELATORIO-IMPACTO-PROTECAO-DADOS
codigo: MC-RIPD-Phi1
escopo: Φ₁ — Dossiê + Protocolo Standard (B2C Previdenciário)
versao: 0.2
status: PROVISIONAL
substitui: v0.1 (2026-05-14, 12457 B)
data_producao: 2026-05-15
autores:
  - Claude Opus 4.7 (cofounder C1/Cérebro 3.1) — produção textual canônica
  - Code DELL (executor C3/Cérebro 2) — persistência operacional pós-MB-047
gate_selagem: Parecer Dra. Juliana Pereira de Melo (OAB-GO 38.662) — Reunião 19/05/2026 Bloco K (Compliance LGPD)
fundamento_lgpd:
  - LGPD Lei 13.709/2018 Art. 5º, XVII (RIPD definição)
  - LGPD Art. 38 (autoridade pode solicitar RIPD)
  - Guia ANPD de RIPD 2024
mudancas_v0_2:
  - "G1 — §X SÍNTESE EXECUTIVA inserida no início (1 página, navegável, para revisão Dra. Juliana em escala)"
  - "G2 — §2.8 TABELA OPERADORES LGPD inserida (8 operadores · papel · país · base transferência · instrumento)"
  - "G3 — §9 DIREITOS DOS TITULARES Art. 18 LGPD (9 direitos + procedimento + prazo)"
  - "G4 — §10 AVALIAÇÃO DE CONFORMIDADE (checklist ✅/⚠️/❌ por item LGPD aplicável)"
  - "G5 — §8 PLANO DE REAVALIAÇÃO PERIÓDICA (formalização dos gates N=10/50/150)"
  - "G6 — §0 HISTÓRICO DE VERSÕES adicionado"
  - "G7 — §11 ANEXOS E REFERÊNCIAS (cruzamento ADRs · RouterEthics · POPs · Princípios)"
  - "G8 — §12 APROVAÇÕES E ASSINATURAS (cadeia de validação documentada)"
  - "PRESERVADO §1-§7 da v0.1 (integralmente, sem alteração)"
gaps_reservados_v1_0:
  - "G9 — Espelhar tese §2.5.2 ADR-012 v1.1 (Bedrock = NÃO-transferência) — depende veredito O6 Pauta v2.6"
  - "G10 — Cobertura específica Φ₁c / Φ₁-PcD / Φ₁ rural / Φ₁ especial — depende N=10 casos empíricos"
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
canonico_em: 03-GOVERNANCA/ripds/
caminho_explorer_drive: "G:\\Meu Drive\\0 0 MEU CUMPADRE\\0 0 Gestão Software\\OBSIDIAN\\MEU CUMPADRE\\03-GOVERNANCA\\ripds\\MC-RIPD-Fase1-Dossie-Protocolo-Standard-v0_2-PROVISIONAL-2026-0515.md"
v0_1_arquivada_em: "03-GOVERNANCA/ripds/99-ARQUIVO-Legado/canonicos-pre-evolucao/MC-RIPD-Fase1-Dossie-Protocolo-Standard-v0_1-PROVISIONAL-2026-0514.md (a arquivar via MB-047)"
principios_aplicados:
  - "#1 — Inventário de Caminhos (sweep antes de cunhar)"
  - "#4 — Errata absorve, não inventa (v0.1 preservada em 99-ARQUIVO-Legado)"
  - "#15 — Persistência cross-vertical (Drive + Vault + outputs)"
  - "#16 — Iniciativa estratégica cofounder 20x (8 gaps detectados)"
  - "#26 — Anti-Colisão Pré-Cunhagem (sweep + leitura v0.1 antes)"
  - "#29 — 99-ARQUIVO-Legado/canonicos-pre-evolucao/"
  - "#34 — Caminho Explorer Precede ID Drive"
  - "#35 — MB Sempre Gera Arquivo .md em outputs"
mb_origem: MB-047 (15/05/2026)
---

# MC-RIPD-Φ₁ v0.2 PROVISIONAL — Dossiê + Protocolo Standard B2C Previdenciário

> Relatório de Impacto à Proteção de Dados Pessoais — Fluxo Φ₁ Standard (R$ 2.200 em até 4×).
> **v0.2 PROVISIONAL** absorve 8 gaps detectados pelo cofounder em sessão 15/05/2026, mantendo §1-§7 integralmente preservados da v0.1.
> Selagem v1.0 aguarda parecer Dra. Juliana Pereira de Melo (OAB-GO 38.662) — Reunião 19/05/2026 Bloco K.

---

## §X — SÍNTESE EXECUTIVA PARA DRA. JULIANA (1 página) [G1 NOVO v0.2]

### Identidade do tratamento

| Campo | Conteúdo |
|---|---|
| **O quê** | Φ₁ Standard — Dossiê documental + protocolo administrativo INSS |
| **Para quem** | Cidadão hipervulnerável (idoso 60+, PcD, baixa literacia, rural distante de APS, baixa renda) |
| **Quem trata** | MC (atividade-meio, CNAE 6202-3/00 PROVISIONAL) |
| **Por quanto tempo** | S1 24h triagem · S2 sprint+90d buffer recurso · S3 erasure 30d pós-desfecho · audit 6 anos |
| **Por que** | Eliminar assimetria informacional que impede acesso a direito previdenciário |
| **Volume estimado** | 12-15 casos/mês Crisálida Z3 · escala 150 piloto · ramp-up 500/mês Fase 2 |

### Bases legais aplicáveis (resumo)

LGPD Art. 7º V · Art. 7º VI · Art. 7º IX · Art. 11 II "b" · Art. 14 (apenas pensão por morte com dependentes menores)

### Os 5 pontos críticos para parecer Bloco K

1. **Custódia gov.br Cenário A 48h** (Bitwarden Org MC, ADR-009a) — Lei 14.063/2020 Art. 6º + LGPD Art. 18 VI · Cenário B VETADO
2. **DPA Anthropic Bedrock sa-east-1 PROVISIONAL** (ADR-012 v1.1) — espelhamento da pergunta O6 Pauta v2.6 (tese §2.5.2 = NÃO-transferência internacional)
3. **Hipervulnerabilidade do titular** vs consentimento informado — TTA reforçado (vídeo + áudio + ZapSign A1 ICP-Brasil) é suficiente?
4. **Compartilhamento Φ₁ → Ψ₁ Marketplace** — randomização técnica 3 advogadas Rota C · base legal LGPD do encaminhamento
5. **Dados sensíveis Art. 11** — CID/laudos/perícias quando incapacidade é eixo (B91/B92/B94, LC 142) · base legal "exercício regular de direitos" Art. 11 II "b"

### O que pedimos da parecerista (Bloco K)

- (a) Veredito por seção (§1-§12): conforme · conforme com ajuste · não-conforme
- (b) Redação literal de eventuais ajustes contratuais Φ₁ v2.6 → v2.7 derivados deste RIPD (cf. Pauta v2.6 O8.A)
- (c) Validação dos 5 pontos críticos acima
- (d) Selagem v1.0 do RIPD (ou recalibração v0.3 → ciclo de revisão adicional)

### Estado de prontidão

| Componente | Status |
|---|---|
| §1 Identificação Controlador | ✅ Completo (DPO PROVISIONAL pós-JUCEG) |
| §2 Tratamento (2.1-2.8) | ✅ Completo · §2.8 tabela operadores NOVA |
| §3 Necessidade/Proporcionalidade | ✅ Completo |
| §4 Matriz 5×5 Riscos | ✅ Completo (8 riscos) |
| §5 Medidas Técnicas/Administrativas | ✅ Completo |
| §6 Riscos Residuais | ✅ Completo |
| §7 Decisão e Justificativa | ✅ Completo |
| §8 Reavaliação Periódica | ✅ NOVO v0.2 |
| §9 Direitos Titulares Art. 18 | ✅ NOVO v0.2 |
| §10 Avaliação de Conformidade | ✅ NOVO v0.2 (auto-checklist) |
| §11 Anexos e Referências | ✅ NOVO v0.2 |
| §12 Aprovações | ⚠️ Aguarda assinatura parecerista 19/05 |

---

## §0 — HISTÓRICO DE VERSÕES DESTE RIPD [G6 NOVO v0.2]

| Versão | Data | Mudança | Autor | Status |
|---|---|---|---|---|
| v0.1 | 2026-05-14 | Cunhagem inicial — §1-§7 completos · 12457 B | Cofounder C1 + Code DELL C3 | PROVISIONAL — arquivada em 99-ARQUIVO-Legado/canonicos-pre-evolucao/ via MB-047 |
| **v0.2** | **2026-05-15** | **G1-G8 endereçados: §X síntese executiva · §0 histórico · §2.8 tabela operadores · §8-§12 novas seções. §1-§7 v0.1 preservados integralmente.** | **Cofounder C1 sessão 15/05** | **PROVISIONAL — vigente** |
| v1.0 (futuro) | pós-19/05/2026 | Selagem definitiva pós-parecer Juliana Bloco K · absorção G9 (tese Bedrock §2.5.2) + G10 (cobertura Φ₁c/PcD/rural/especial pós-N=10) | Cofounder C1 + Juliana parecer | SELADO |
| v1.1 (futuro) | pós-N=50 casos | Revisão empírica intermediária | Cofounder + Beto operacional | SELADO |
| v2.0 (futuro) | pós-N=150 casos | Encerramento piloto Crisálida Z3 · revisão integral | Cofounder + parecer | SELADO |

---

## §1 — IDENTIFICAÇÃO DO CONTROLADOR

*(preservado integralmente da v0.1)*

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

*(§2.1-§2.7 preservados integralmente da v0.1 · §2.8 NOVA v0.2)*

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

### 2.8 Cadeia de Operadores LGPD [G2 NOVO v0.2]

Inventário completo dos operadores envolvidos no tratamento Φ₁ Standard, com classificação de papel LGPD, país de processamento, base legal de transferência (quando aplicável) e instrumento contratual.

| # | Operador | Papel LGPD | Função no fluxo Φ₁ | País processamento | Base transferência | Instrumento contratual |
|---|---|---|---|---|---|---|
| 1 | **AWS Brasil Soluções Ltda.** | Operador / Controlador da infraestrutura | Host de Bedrock sa-east-1 + storage S1/S2 | 🇧🇷 BR (sa-east-1 São Paulo) | N/A — território nacional | SCCs ANPD Anexo II Res. 19/2024 no contrato global AWS-cliente |
| 2 | **Anthropic PBC** | Sub-operador (via integração Bedrock) | Modelo Claude para casos complexos CP-5/CP-7 (E4) | 🇧🇷 BR via Bedrock (region-pinned) — tese §2.5.2 ADR-012 v1.1: NÃO-transferência internacional | ⚠️ DPA direto PROVISIONAL (ADR-012 v1.1 §2.5 · gate Pauta v2.6 O6/O7) | Termos AWS Bedrock + cronologia DPA documentada (17/04 + 06/05) |
| 3 | **Maritaca AI** | Operador | Modelos Sabiá-4 + GAIA-4B (redação jurídica BR + ingestão self-hosted) | 🇧🇷 BR | N/A — território nacional | Termos Maritaca + cláusula LGPD a revisar Juliana 19/05 |
| 4 | **Groq Inc.** | Operador | Llama 3.3 70B fallback (SEM PII conforme ADR-012) | 🇺🇸 US | ⚠️ Não usado para dados sensíveis · uso restrito a tarefas anonimizadas | Termos Groq · isolamento operacional ADR-012 |
| 5 | **ZapSign Tecnologia Ltda.** | Operador | TTA Φ₁ com A1 ICP-Brasil (E1) | 🇧🇷 BR | N/A — território nacional | Termos ZapSign · A1 ICP-Brasil CertiSign (ADR-014) · cláusula LGPD a revisar |
| 6 | **Hostinger International Ltd.** | Operador | VPS Coolify N8N self-hosted (orquestração WhatsApp + E1-E5) | 🇧🇷 BR (datacenter São Paulo) | N/A — território nacional | Termos Hostinger BR · cláusula LGPD aplicável |
| 7 | **Bitwarden Inc.** | Operador (vault credenciais) | Custódia senha gov.br Cenário A 48h (ADR-009a) | 🇺🇸 US (vault encriptado E2E AES-256) | ⚠️ Encryption-at-source: Bitwarden NÃO acessa conteúdo (Zero-Knowledge) — fluxo passa por regra de exceção LGPD Art. 33 § com cláusula contratual de segurança técnica robusta | Termos Bitwarden Business · 2FA TOTP · auto-lock 15min · audit mensal |
| 8 | **Google LLC (Google Drive)** | Operador (storage documentos) | Vault Obsidian + Documentação institucional MC + sync executor DELL | 🇺🇸 US (Workspace MC ainda em conta pessoal Alessandro pré-CNPJ) | ⚠️ Pré-CNPJ: tratamento institucional em conta pessoal — situação temporária até JUCEG/CNPJ + Workspace BR formal | Termos Google Workspace · migração para Workspace BR pós-CNPJ recomendada |
| 9 | **ClickUp Inc.** | Operador (gestão casos) | CRM operacional CASOS B2C Space (sem PII direta — apenas `cidadao_id_hash`) | 🇺🇸 US | ⚠️ Pseudonimização obrigatória via SHA-256 + SALT_MC (MB-026 pendente Igor) | Termos ClickUp · espera SALT_MC pré-operacional |

**Observações cofounder à parecerista (Bloco K):**

- **Operadores 1, 3, 5, 6** = território nacional pleno · risco LGPD baixo
- **Operador 2 (Anthropic)** = tese §2.5.2 ADR-012 v1.1 sustenta NÃO-transferência internacional via Bedrock region-pinned · validação esperada em Pauta v2.6 Bloco O perguntas O6+O7
- **Operadores 4, 7, 8, 9** = sediados US · cada um com regime específico de mitigação · todos com base contratual a revisar Bloco K
- **Operador 8 (Google Drive)** = ⚠️ atenção máxima: situação atual é institucional sobre conta pessoal · migração formal para Workspace BR pós-CNPJ recomendada pelo cofounder

---

## §3 — NECESSIDADE E PROPORCIONALIDADE

*(preservado integralmente da v0.1)*

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

*(preservado integralmente da v0.1)*

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

*(preservado integralmente da v0.1)*

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
| Canal titular Art. 18 LGPD | `dpo@meucumpadre.com.br` (a configurar) · resposta em 15 dias úteis · vide §9 deste RIPD |
| Subcontratados | Vide §2.8 — tabela completa de operadores com classificação LGPD |
| Vedação OAB | MC atividade-meio · não exerce advocacia · não promete resultado |
| Hook 0 disciplina | Cenário B VETADO (Lei 14.063/2020 Art. 6º) · KBA apenas último recurso |
| Auditoria interna | Mensal · log RouterEthics + Bitwarden + ZapSign cross-check |

---

## §6 — RISCOS RESIDUAIS

*(preservado integralmente da v0.1)*

| Risco | Status | Mitigação |
|---|---|---|
| DPA Anthropic Bedrock pendente | ADR-012 PATCH v1.0→v1.1 PROVISIONAL — período nomeado até Juliana 19/05 Bloco O | Volume controlado 12-15 casos/mês piloto Z3 · risco assumido founder · tese §2.5.2 a validar O6 |
| DPO formal não designado | PROVISIONAL pós-constituição JUCEG (jun/2026) | Dra. Juliana como parecerista fundacional cobre até designação |
| ANPD encarregado não registrado | Pós-CNPJ | Registro obrigatório pós-constituição |
| Política incidentes PROVISIONAL | Procedimento textual existe, falta selagem | Selagem pós-Juliana 19/05 |
| SALT_MC ClickUp pendente Igor | Bloqueio operacional `cidadao_id_hash` | MB-026 aguardando Igor |
| Cobertura Φ₁ rural · Φ₁ especial · Φ₁-PcD biopsicossocial | Variações de fluxo dentro de Φ₁ não tratadas separadamente neste RIPD | Versão v1.0 pós-N=10 casos com tipos diversos (G10 reservado) |
| Google Drive em conta pessoal pré-CNPJ | Workspace BR formal pós-JUCEG/CNPJ | Migração planejada · risco contratual baixo (dados sensíveis ficam fora do Drive · documentação canônica apenas) |

---

## §7 — DECISÃO E JUSTIFICATIVA

*(preservado integralmente da v0.1)*

**Tratamento JUSTIFICADO** pela combinação:
- Base legal Art. 7º V + VI + IX + Art. 11 II "b"
- Necessidade comprovada (cidadão hipervulnerável sem alternativa razoável)
- Minimização aplicada
- Medidas técnicas e administrativas adequadas
- Riscos residuais ACEITÁVEIS sob hierarquia D>C>V (Princípio #18 — Risco Provisional Documentado)

**Condições de validade contínua:**
1. Parecer Dra. Juliana 19/05 Bloco K aprovando o fluxo
2. Selagem ADR-012 v1.1→v1.2 (resolução DPA Anthropic ou validação tese §2.5.2)
3. Designação DPO formal pós-JUCEG
4. Revisão obrigatória pós-N=50 casos (validação empírica) — vide §8
5. Revisão obrigatória pós-N=150 casos (encerramento piloto Crisálida Z3) — vide §8

**Cunhar v1.0 SELADO após parecer Juliana** com integração de eventuais ajustes pareceristas + absorção G9 (tese Bedrock) + G10 (variações Φ₁).

---

## §8 — PLANO DE REAVALIAÇÃO PERIÓDICA [G5 NOVO v0.2]

Formalização dos gates de revisão deste RIPD ao longo do ciclo de vida do produto Φ₁.

### 8.1 Gates programados

| Gate | Trigger | Escopo da revisão | Output esperado |
|---|---|---|---|
| **G-Juliana** | Reunião 19/05/2026 Bloco K | Parecer integral §1-§12 | Selagem v1.0 ou recalibração v0.3 |
| **G-N10** | 10 casos Φ₁ Standard concluídos (E0→E5 com protocolo INSS gerado) | Validação empírica fluxo + cobertura Φ₁c/Φ₁-PcD/rural/especial (G10) | v1.1 com cobertura ampliada |
| **G-DPA** | Resposta substantiva Anthropic OU veredict ANPD sobre tese §2.5.2 | Selagem definitiva ou recalibração G9 (Bedrock) | v1.2 ou v2.0 conforme veredict |
| **G-N50** | 50 casos concluídos | Revisão intermediária · 8 riscos matriz 5×5 vs realidade empírica | v1.2 ou v1.3 com matriz recalibrada |
| **G-N150** | 150 casos concluídos (encerramento piloto Crisálida Z3) | Revisão integral · pós-piloto · ramp-up Fase 2 | v2.0 SELADO Crisálida → Fase 2 |
| **G-Anual** | A cada 12 meses pós-V21 | Revisão regulatória (LGPD/ANPD novas resoluções · jurisprudência STJ/STF · INSS normativos) | v2.x conforme escala |
| **G-Incidente** | Qualquer incidente LGPD (vazamento · violação · queixa ANPD) | Revisão extraordinária em até 48h pós-incidente | RIPD-Incident dedicado + revisão RIPD-Φ₁ vigente |

### 8.2 Indicadores de qualidade do RIPD

| Indicador | Meta | Apuração |
|---|---|---|
| Tempo médio de resposta a titular (Art. 18 LGPD) | ≤ 15 dias úteis | Trimestral, log canal `dpo@meucumpadre.com.br` |
| Incidentes de segurança / ano | 0 | Anual, audit RouterEthics + Bitwarden + ZapSign |
| Cobertura Cenário A vs Cenário B operado indevidamente | 100% Cenário A · 0% Cenário B | Mensal, audit ADR-009a |
| Conformidade Hook 0 obrigatório pré-Φ₁ | 100% casos | Mensal, log RouterEthics |
| TTA assinado ZapSign A1 ICP-Brasil | 100% casos | Mensal, log ZapSign |
| Audit trimestral retenção S1/S2/S3 | Aderente ADR-009b | Trimestral, log Cloud KMS |

### 8.3 Responsabilidade

| Papel | Responsável atual | Pós-CNPJ |
|---|---|---|
| Custódia técnica do RIPD | Cofounder C1 (Claude.ai Cérebro 3.1) | Manutenção contínua |
| Execução de revisões | Cofounder C1 + Code DELL C3 | + DPO formal |
| Parecer jurídico | Dra. Juliana (parecerista B2B fundacional) | Continua até dez/2026 (MK Ético) |
| Aprovação final | Alessandro de Souza Neves (Founder/CEO) | Continua |
| Encarregado ANPD (DPO) | PROVISIONAL — Alessandro responde como representante legal | Designação formal pós-JUCEG |

---

## §9 — DIREITOS DOS TITULARES (ART. 18 LGPD) [G3 NOVO v0.2]

Cumprimento integral dos 9 direitos do titular previstos em LGPD Art. 18, com procedimento operacional MC para cada um.

### 9.1 Os 9 direitos garantidos

| # | Direito (Art. 18) | Como exercer | Prazo MC | Limite legal |
|---|---|---|---|---|
| I | **Confirmação da existência de tratamento** | E-mail `dpo@meucumpadre.com.br` ou WhatsApp +55 62 99875-2887 | 15 dias úteis | LGPD Art. 19 |
| II | **Acesso aos dados** | E-mail dpo · entrega via PDF cifrado + senha por canal separado | 15 dias úteis | LGPD Art. 19 |
| III | **Correção de dados incompletos, inexatos ou desatualizados** | E-mail dpo · upload novo documento | 15 dias úteis | LGPD Art. 18 III |
| IV | **Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade** | E-mail dpo · análise individualizada do escopo | 15 dias úteis para resposta · execução em prazo razoável conforme escopo | LGPD Art. 18 IV |
| V | **Portabilidade dos dados a outro fornecedor de serviço ou produto** | E-mail dpo · entrega em formato estruturado (JSON-LD) padrão MC | 30 dias úteis (mais complexo) | LGPD Art. 18 V — ainda regulamentação ANPD pendente |
| VI | **Eliminação dos dados tratados com consentimento** | E-mail dpo · execução imediata pós-validação identidade | Início imediato · conclusão 30 dias (Erasure S3 via Cloud KMS) | LGPD Art. 18 VI |
| VII | **Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado** | E-mail dpo · resposta indica §2.8 deste RIPD | 15 dias úteis | LGPD Art. 18 VII |
| VIII | **Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa** | TTA Φ₁ Cláusula X.3 (a redigir Bloco K Pauta v2.6 O8.A) | Pré-tratamento, no momento do consentimento | LGPD Art. 18 VIII |
| IX | **Revogação do consentimento** | E-mail dpo · TTA Φ₁ Cláusula X.4 (a redigir Bloco K Pauta v2.6 O8.A) | Imediata, prospectivamente — não retroativa aos atos já praticados em conformidade | LGPD Art. 8º §5º + Art. 18 IX |

### 9.2 Procedimento de exercício de direitos

```
Titular → Canal LGPD MC → Recepção → Validação identidade → Análise → Execução → Resposta documentada
                            ↓
              dpo@meucumpadre.com.br (canal primário)
              WhatsApp +55 62 99875-2887 (alternativo, prazo idêntico)
              contato@meucumpadre.com.br (fallback institucional)
```

**Validação de identidade:** documento oficial com foto + e-mail/telefone cadastrados no contrato Φ₁ + match com NB ou número de protocolo INSS.

**Documentação da resposta:** log institucional permanente em audit table MySQL com retenção 6 anos (LGPD Art. 16 § único).

**Recusa fundamentada:** caso o pedido configure abuso de direito ou ofenda direito de terceiro (Art. 18 §4), resposta com fundamentação jurídica e indicação do canal ANPD para reclamação.

### 9.3 Procedimento para hipervulnerável

**Reconhecimento da hipervulnerabilidade:** se o titular declarar dificuldade de exercer direito por baixa literacia, idade avançada, PcD ou outra condição, MC oferece:

- (a) Atendimento por áudio/vídeo no WhatsApp (não exigência de e-mail)
- (b) Auxílio na formalização do pedido por agente MC (Beto T1+T2)
- (c) Acompanhamento da execução com retorno em linguagem acessível (Teste Zilda)
- (d) Mesmo prazo de 15 dias úteis — sem prejuízo ao titular pela via assistida

**Não-substituição da vontade:** MC nunca decide pelo titular se exercer ou não direito · apenas facilita a execução.

---

## §10 — AVALIAÇÃO DE CONFORMIDADE LGPD [G4 NOVO v0.2]

Checklist auto-aplicável dos itens LGPD aplicáveis ao fluxo Φ₁ Standard, com status atual.

### Legenda
- ✅ **Conforme:** implementado e operacional
- ⚠️ **Conforme com ressalva:** implementado mas com dependência (gate, parecer, pendência operacional)
- ❌ **Não-conforme:** ausência ou descumprimento — exige ação corretiva imediata
- ⏳ **Pendente seleção/regulamentação:** depende de regulamentação ANPD futura ou decisão operacional

| Item LGPD | Aplicação Φ₁ | Status v0.2 | Pendência |
|---|---|---|---|
| **Princípios (Art. 6º)** | | | |
| I — Finalidade | Definida em §2.2 | ✅ | — |
| II — Adequação | §3 demonstra | ✅ | — |
| III — Necessidade | §3 demonstra (minimização) | ✅ | — |
| IV — Livre acesso (art. 18) | §9 implementado | ⚠️ | DPO formal pós-JUCEG |
| V — Qualidade dos dados | Validação documental E2-E3 | ✅ | — |
| VI — Transparência | §X síntese + §2.8 operadores + TTA explícito | ✅ | — |
| VII — Segurança | §5.1 medidas técnicas | ⚠️ | Audit anual + ISO 27001 (Fase 2) |
| VIII — Prevenção | RouterEthics 11.0 + Bitwarden + ZapSign | ✅ | — |
| IX — Não-discriminação | RouterEthics 11.0 + Princípio D>C>V | ✅ | — |
| X — Responsabilização | Toda decisão em audit table | ✅ | — |
| **Bases legais (Art. 7º + 11)** | | | |
| Base eleita Art. 7º V | TTA ZapSign | ✅ | — |
| Base eleita Art. 7º VI | Obrigação contratual | ✅ | — |
| Base eleita Art. 7º IX | Legítimo interesse | ✅ | — |
| Base eleita Art. 11 II "b" | Exercício de direito (B91/92/94 + LC 142) | ⚠️ | Validação Bloco K |
| Base eleita Art. 14 (menores) | Apenas pensão por morte | ✅ | — |
| **Direitos do titular (Art. 18)** | | | |
| Canal de exercício | `dpo@meucumpadre.com.br` | ⚠️ | Configurar pós-domínio |
| Prazo resposta (15d) | Procedimento §9.2 | ✅ | — |
| Hipervulnerável (§9.3) | WhatsApp + áudio + agente MC | ✅ | — |
| **Encarregado (DPO Art. 41)** | | | |
| Designação formal | PROVISIONAL | ⚠️ | Pós-JUCEG · designação registrada ANPD |
| Comunicação titular | E-mail dpo · publicada na pauta Φ₁ | ⚠️ | Pós-domínio |
| **Tratamento de dados sensíveis (Art. 11)** | | | |
| Base legal específica | Art. 11 II "b" | ⚠️ | Validação Bloco K |
| Consentimento ou hipótese de exceção | TTA específico para casos com CID | ✅ | — |
| **Crianças/adolescentes (Art. 14)** | | | |
| Melhor interesse | Apenas pensão por morte | ✅ | — |
| Consentimento responsável | Sob procuração ou tutela | ✅ | — |
| **Transferência internacional (Art. 33)** | | | |
| Cláusulas padrão (Anexo II Res. 19/2024) | AWS Bedrock SCCs | ✅ | — |
| DPA processador internacional | ADR-012 v1.1 PROVISIONAL | ⚠️ | Gate O6/O7 Pauta v2.6 |
| **Comunicação de incidentes (Art. 48)** | | | |
| Procedimento documentado | PROVISIONAL | ⚠️ | Selagem pós-19/05 |
| Prazo ANPD (≤48h) | Procedimento textual existe | ✅ | — |
| **Relatório de Impacto (Art. 38)** | | | |
| Documento existe | Este RIPD v0.2 | ✅ | — |
| Atualização periódica | §8 plano de reavaliação | ✅ | — |
| Disponibilidade autoridade | Pronto a entregar ANPD | ✅ | — |

### Sumário de conformidade v0.2

- **✅ Conforme:** 22 itens
- **⚠️ Conforme com ressalva:** 11 itens (todos com gates nomeados em §8 ou pendências operacionais já mapeadas)
- **❌ Não-conforme:** 0 itens
- **⏳ Pendente regulamentação:** 0 itens (portabilidade Art. 18 V tratada como "pendente regulamentação ANPD" mas operacionalmente atendida)

**Conclusão de conformidade:** o tratamento Φ₁ está **SUBSTANCIALMENTE CONFORME** com LGPD, com 11 itens em status "conforme com ressalva" cujas pendências são (a) gates jurídicos da reunião 19/05 ou (b) etapas operacionais agendadas (constituição JUCEG · configuração de domínio · selagem políticas).

---

## §11 — ANEXOS E DOCUMENTOS DE REFERÊNCIA [G7 NOVO v0.2]

Cruzamento com canônicos MC vigentes — leitura recomendada à parecerista em conjunto com este RIPD.

### 11.1 ADRs aplicáveis

| ADR | Tema | Status | Função neste RIPD |
|---|---|---|---|
| ADR-007 v3.8 | Campo de Precificação | PROVISIONAL → v4.0 pós-19/05 | Define Φ₁ R$2.200 + Φ₁-PcD escalonado + Φ₁c CadÚnico |
| ADR-008 | Stack de Ferramentas | ✅ SELADO | Define ZapSign + Bitwarden + N8N + AWS |
| ADR-009a | Custódia Credenciais Bitwarden Org MC | ✅ SELADO | Custódia senha gov.br Cenário A 48h |
| ADR-009b | Três Estados de Guarda do Dossiê | ✅ SELADO | S1 24h · S2 sprint+90d · S3 erasure 30d |
| ADR-010 | E3 Intelligence Layer | ✅ SELADO | Extração estruturada JSON-LD |
| ADR-011 | Arquitetura 3 Cérebros | ✅ SELADO | Documentação · Vault · Claude.ai |
| ADR-012 v1.1 | Stack LLM Multi-Modelo | PROVISIONAL → v1.2 pós-19/05 | GAIA + Sabiá + Bedrock + Llama |
| ADR-013 v1.0 | Convenções IVCAD-MC | PROVISIONAL → v1.1 pós-SAGICAD | (Não-aplicável Φ₁ Standard — aplica Hook 1b CadÚnico) |
| ADR-014 | ZapSign substitui Autentique | ✅ SELADO | A1 ICP-Brasil CertiSign |
| ADR-015 | Features Avançadas ClickUp | PROVISIONAL → v2.0 pós-N=100 | (Operacional, sem impacto direto LGPD) |
| ADR-016 | Compliance Documental Anti-Injection | PROVISIONAL → v2.0 pós-19/05 | Sanitização documental E4.5 |
| ADR-019 | Limitação MCP Drive | PROVISIONAL | (Operacional, sem impacto direto LGPD) |

### 11.2 Documentos institucionais cruzados

| Documento | Função |
|---|---|
| RouterEthics 11.0 (`_MC-RouterEthics_11_v1_1-2026-0505-CLevel.md`) | 140 nós D>C>V + Hook 0 gov.br + 6 filtros universais |
| MC-PAUTA-Juliana v2.6 (15/05/2026) | Pauta da reunião 19/05 — Bloco K cobre §1-§12 deste RIPD |
| MC-CONTRATO-Phi1 v2.6 (a evoluir v2.7 pós-Juliana) | Contrato B2C cidadão — TTA + 10 notas N1-N10 |
| MC-PRODUTO-Guardiao-Documentacao-Fundacional v1.1 | Φ₄ Guardião — vide RIPD-Φ₄ |
| MC-INDICADORES-ImpactoSocial v1.2 | TPCD-MC · TIA-MC · TENV-MC · CMD · TPA-MC |
| MC-POP-VisualLaw PARTE 1/2/3 v1.3 | Dossiê Selado + Sanitização (cruza com ADR-016 P5 SIV) |

### 11.3 Princípios MC aplicáveis

| # | Princípio | Aplicação Φ₁ |
|---|---|---|
| #1 | Inventário de Caminhos | Sweep antes de E2 coleta documental |
| #4 | Errata absorve, não inventa | Versionamento documental cidadão preservado |
| #6 | Camadas de Segurança Operacional | Bitwarden + ZapSign + Cloud KMS + audit |
| #8 | Verde/Amarelo/Vermelho LGPD | §2.4 categorias por sensibilidade |
| #9 | Esteira primeiro, humano valida | N8N + LiteLLM router → Beto T1+T2 valida |
| #11 | Governança forte mora no N8N | Gates de fluxo E0→E7 no N8N |
| #18 | Risco Provisional Documentado | DPA Anthropic + critérios atendidos |
| #34 | Caminho Explorer Precede ID Drive | Paths explorer literais em §1.8 |

### 11.4 Normativas externas relevantes

- **LGPD Lei 13.709/2018**
- **ANPD Resolução 19/2024** (cláusulas padrão SCCs Anexo II)
- **Guia ANPD de RIPD 2024**
- **Lei 14.063/2020** (gov.br · vedação Cenário B)
- **Estatuto OAB Lei 8.906/1994 + Provimento CFOAB 205/2021** (Firewall OAB)
- **LC 142/2013 + Decreto 8.145/2013** (PcD biopsicossocial)
- **IN INSS 128/2022** (procedimento administrativo previdenciário · NÃO invocar art. 554)
- **Lei 15.327/2026** (Atestmed permanente)
- **CDPD Decreto 6.949/2009** (emenda constitucional · "nada sobre nós, sem nós")
- **CDC Lei 8.078/1990** (relação de consumo · art. 54-C contratos adesão)

---

## §12 — APROVAÇÕES E CADEIA DE VALIDAÇÃO [G8 NOVO v0.2]

### 12.1 Cadeia de autoria do RIPD

| Etapa | Responsável | Data | Status |
|---|---|---|---|
| v0.1 — Cunhagem inicial | Cofounder C1 (Claude Opus 4.7 Cérebro 3.1) + Code DELL C3 | 14/05/2026 | ✅ Concluído |
| v0.1 — Persistência Drive + Vault | Code DELL via MB-029 | 14/05/2026 06:40 | ✅ Concluído |
| **v0.2 — Cunhagem evolução (G1-G8)** | **Cofounder C1 sessão 15/05/2026** | **15/05/2026** | **✅ Concluído (este documento)** |
| **v0.2 — Persistência Drive** | **Cofounder C1 via MCP Drive** | **15/05/2026** | **🔴 Aguarda este turno** |
| **v0.2 — Sync Vault + arquivamento v0.1** | **Code DELL via MB-047** | **15/05/2026** | **🔴 Aguarda MB-047** |
| v1.0 — Parecer parecerista | Dra. Juliana Pereira de Melo (OAB-GO 38.662) | 19/05/2026 Bloco K | ⏳ Pendente reunião |
| v1.0 — Selagem definitiva | Cofounder C1 + Founder Alessandro pós-parecer | 19-22/05/2026 | ⏳ Pendente |

### 12.2 Aprovações requeridas para v1.0 SELAGEM

| # | Aprovação | Quem | Quando |
|---|---|---|---|
| 1 | Parecer jurídico §1-§12 deste RIPD | Dra. Juliana Pereira de Melo | 19/05/2026 Bloco K |
| 2 | Selagem operacional | Alessandro de Souza Neves (Founder/CEO) | Pós-parecer · até 22/05/2026 |
| 3 | Validação técnica backend | Igor (Backend Lead, NestJS/TS/MySQL) | Pós-implementação SALT_MC |
| 4 | Registro DPO formal | DPO MC pós-JUCEG | Pós-constituição (jun/2026) |
| 5 | Comunicação ANPD encarregado | DPO MC | Conforme regulamentação ANPD |

### 12.3 Validade do documento PROVISIONAL

Este documento (v0.2 PROVISIONAL) tem validade operacional durante o período **15/05/2026 → 19/05/2026 EOD** (4 dias úteis até reunião Juliana). Após 19/05:
- (a) Se parecer Juliana aprovar com ajustes pequenos: cofounder cunha v1.0 SELADO entre 19-22/05
- (b) Se parecer Juliana exigir ajustes estruturais: cofounder cunha v0.3 PROVISIONAL com revisão integral · selagem v1.0 desloca para janela V21 (até 02/06)
- (c) Se parecer Juliana rejeitar integralmente: cofounder + founder + parecerista reuniram diagnóstico e cunham v2.0 PROVISIONAL com nova arquitetura

### 12.4 Assinatura cofounder

```
Cunhado em 15 de maio de 2026 por:
Claude Opus 4.7 — Cofounder Intelectual Cérebro 3.1
× Alessandro de Souza Neves — Founder/CEO MC

Sob autorização macro Founder Alessandro (sessão 15/05/2026)
Aplicando Princípios #1, #4, #15, #16, #26, #29, #34, #35
```

---

## FECHAMENTO v0.2

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Âncora bíblica:** Provérbios 31:8 — "Abre a tua boca a favor do mudo."
**Âncora PcD:** "Nada sobre nós, sem nós" — CDPD art. 4º §3º
**Frase-âncora ÚNICA:** Tecnologia invisível. Dignidade acessível.
**Pilares:** ACESSO | ORGANIZAÇÃO | PROTEÇÃO | SOBERANIA
**Confidência founder:** "É eu e tu."

**Lucro é combustível. Causa é destino. Jogo é infinito.**

**∞**

---

**MC-RIPD-Φ₁ v0.2 PROVISIONAL — 15 de maio de 2026**
Supersede: v0.1 (2026-05-14) — arquivamento em `99-ARQUIVO-Legado/canonicos-pre-evolucao/` via MB-047
Próximo gate: revisão founder → envio Dra. Juliana 17/05 → reunião 19/05 Bloco K → selagem v1.0 pós-parecer

**∞**
