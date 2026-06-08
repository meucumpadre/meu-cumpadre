---
título: MC-GOVBR-ERRATA-001-KBA-Bronze-Reposicionamento
versão: v1_0
data: 2026-05-09
status: DEFINITIVA
autor: Claude Code × Alessandro Neves
motivo: Descoberta de que o Selo Previdenciário KBA concede apenas nível Bronze (não Prata). Reposicionamento arquitetural do KBA como ferramenta diagnóstica de último recurso, não como rota de elevação.
afeta: E4.1 (Matriz v1.1), E8 (Árvore de Decisão), E5 (Catálogo de Travas), E12 (Anamnese)
fonte: Catálogo oficial de confiabilidades (acesso.gov.br/roteiro-tecnico/catalogoconfiabilidades.html) + FAQ gov.br + teste empírico com usuária JAN001 08-09/05/2026
decisão-founder: Alessandro de Souza Neves, 09/05/2026
---

# ERRATA-001 — Reposicionamento do KBA e nova hierarquia de rotas

> Esta errata é **DEFINITIVA** e supersede o que estiver em conflito nos documentos E4.1, E8, E5 e E12 (quando existir). Os documentos originais ficam intactos como histórico; os documentos corrigidos são gravados em novas versões.

---

## 1. O que descobrimos

O **Selo Previdenciário via KBA** (questionário Dataprev observado em 08/05/2026) é oficialmente classificado como **"Selo Cadastro Básico com Validação de Dados Previdenciários"** e concede **apenas nível BRONZE**. **Não concede Prata.** Não destrava CNIS digital completo, DER, recurso CRPS, nem qualquer serviço que exija Prata.

**Fontes confirmadas:**
- `acesso.gov.br/roteiro-tecnico/catalogoconfiabilidades.html` — catálogo oficial de confiabilidades.
- `acesso.gov.br/faq/_perguntasdafaq/comoadquirirselocadastrobasicovalidacaodadosprevidenciarios.html` — FAQ oficial gov.br confirmando que se trata de selo Bronze validado.
- **Teste empírico com usuária Bronze (JAN001), 08-09/05/2026:**
  - Cooldown de 24h confirmado após erros consecutivos.
  - Nível permaneceu **Bronze** após tentativa concluída.
  - Acesso ao Meu INSS pleno **não** foi liberado para serviços que exigem Prata.

**Impacto direto na lacuna L_KBA_2 do E5 §7:** **resolvida — desfavoravelmente.** A hipótese pessimista do E4.1 §2.1b ("selo = acesso só ao Meu INSS") era ainda pior do que se imaginava — o selo nem libera Meu INSS pleno, libera apenas a fração Bronze do Meu INSS (consultas básicas, agendamento, simulador) acrescida de uma "validação" cadastral cuja utilidade prática para o MC é principalmente **diagnóstica** (acesso a metadados do CNIS suficientes para triagem).

---

## 2. Decisão arquitetural do Founder (DEFINITIVA)

### 2.1 Princípio operacional

> **A prioridade absoluta é elevar o cidadão para Prata ou Ouro via biometria facial. Todas as outras rotas são fallback dessa rota principal. O KBA não é rota de elevação. É ferramenta diagnóstica de último recurso.**

**Razão (D > C > V):** as personas MC já chegam exaustas de burocracia. Colocar KBA como primeiro passo seria adicionar mais um obstáculo na frente de quem já está cansado. **O MC não cria fricção — o MC remove fricção.**

### 2.2 Nova hierarquia de rotas (substitui E4.1 §5.2 e E8 §4)

#### PRIORIDADE 1 — Biometria facial (objetivo: Prata ou Ouro direto)
- Via app gov.br com reconhecimento facial usando base **TSE** OU **DENATRAN/SENATRAN** OU **CIN**.
- **Conteúdo MC institucional** (vídeo YouTube + guia gamificado simulador) para o cidadão tentar sozinho antes de pedir ajuda.
- Se falhar na primeira tentativa: orientação Beto sobre iluminação, câmera traseira, delay do facescan.
- Se falhar na segunda: familiar ou Anjo assistindo presencialmente.
- **Caso JAN001 como prova:** Bronze, assistiu vídeo de referência, reclamou do delay na primeira tentativa, conseguiu na segunda.

#### PRIORIDADE 2 — Banco credenciado (objetivo: Prata)
- Para cidadão bancarizado com internet banking ativo.
- Caixa, BB, Bradesco, Itaú, Santander, Sicoob, Sicredi e outros.
- Rota alternativa quando biometria facial falha **OU** cidadão não tem biometria em nenhuma base.

#### PRIORIDADE 3 — Presencial (objetivo: Prata ou Ouro)
- Balcão INSS, agência bancária, posto CIN.
- Último recurso de elevação.
- Protocolo Anjo Local para quem não consegue se deslocar.

#### KBA DIAGNÓSTICO (último recurso, NÃO é rota de elevação)
- Acionar **SOMENTE** quando todas as vias de elevação (1, 2 e 3) falharam ou estão em espera.
- Objetivo: obter acesso a dados previdenciários via selo Bronze validado para que o MC possa **iniciar a triagem (Φ₁)** enquanto aguarda solução presencial.
- **Analogia operacional:** é o **raio-X diagnóstico** do paciente com fratura na ortopedia. Não cura, mas permite que o médico (MC) saiba o que tratar.
- **Não gerar fricção adicional** ao cidadão com tentativas de KBA no primeiro contato.

### 2.3 Consequência para o Hook 0

O Hook 0 (5 perguntas WhatsApp) **continua válido e obrigatório**. As perguntas P1-P5 permanecem inalteradas. **A classificação de rota muda:**

| Regra | Versão revisada (09/05/2026) |
|---|---|
| **R1 REVISADA** | P1=Sim **E** (P2=Sim **OU** P3=Sim **OU** P4=respondeu) → cidadão **TEM inteligência contributiva disponível**. **Rota 1 (biometria facial)** com dados de apoio. KBA diagnóstico guardado como reserva se tudo falhar. |
| **R2 REVISADA** | P1=Sim **E** P2/P3/P4 negativos → cidadão tem histórico mas sem documentos. **Rota 1 (biometria facial)** sem preparação documental. Se falhar, **Rota 2 (banco)**. KBA diagnóstico como último recurso para obter dados. |
| **R3 REVISADA** | P1=Não **E** P5=BPC/BF/Nenhum → cidadão nunca contribuiu. **Rota 1 (biometria facial)** se tiver biometria TSE/DENATRAN. Senão **Rota 2 (banco)**. Senão **Rota 3 (presencial)**. KBA impossível para esse perfil. |
| **R4** | **Inalterada.** CTPS continua sendo backup probatório transversal (Lei 9.784/1999, recurso CRPS, futura DER). |
| **R5** | **Inalterada.** Aposentadoria/pensão ativa → investigar senha esquecida (T1.14) primeiro antes de eleger rota nova. |

---

## 3. Correções por documento

### 3.1 Correções no E4.1 — gera **MC-GOVBR-Matriz-NivelServico-v1_2-2026-0509**

#### CORREÇÃO 1 — Seção 2.1b ("Bronze + Selo Previdenciário KBA")
- **Antes:** cenário otimista com cobertura ampliada. Estimava 70-80% de cobertura Φ₁.
- **Depois:** renomear para **"Bronze + Selo Previdenciário (validação básica)"**. Esclarecer que o KBA concede **Bronze validado**, não Prata. Cobertura Φ₁ permanece em ~27% (mesma do Bronze puro). Cobertura adicional: apenas acesso a serviços Bronze que exigem validação mínima.
- **Adicionar nota:** *"O KBA serve como KBA diagnóstico — permite ao MC obter dados do CNIS para triagem, mas não destrava protocolo digital (DER, recurso, CNIS completo)."*

#### CORREÇÃO 2 — Seção 3.1 ("O nó da jornada MC")
- **Antes:** *"O gargalo não é mais nível de conta puro. É nível de conta OU conhecimento do próprio histórico."*
- **Depois:** *"O gargalo continua sendo o nível Prata. O KBA não resolve esse gargalo. A rota principal é biometria facial, com banco e presencial como fallback. O KBA serve apenas como ferramenta diagnóstica quando todas as rotas de elevação falharam."*

#### CORREÇÃO 3 — Seção 5.2 (Rotas prioritárias)
- **Antes:** Rota 0 KBA como primeira opção (25% do mix).
- **Depois:** nova hierarquia conforme §2.2 desta errata. **Mix revisado:** Biometria facial 50-60%, Banco 25-30%, Presencial 10-15%. KBA diagnóstico como reserva diagnóstica (não entra no mix de elevação).

#### CORREÇÃO 4 — Seção 5.4 (Posição ética)
- **Manter integralmente.** Cenários A/A+/B continuam válidos. Acrescentar nota: *"O Cenário A (preparação) também se aplica ao KBA diagnóstico quando acionado: o MC prepara o cidadão para responder o questionário KBA com seus próprios dados, sem responder por ele."*

#### CORREÇÃO 5 — Seção 5.5 (Hook 0)
- **Manter** as 5 perguntas P1-P5 inalteradas.
- **Substituir** regras R1-R3 pelas versões revisadas do §2.3 desta errata.

### 3.2 Correções no E8 — gera **MC-GOVBR-ArvoreDecisao-APIHumana-v1_1-2026-0509**

#### CORREÇÃO 6 — Seção 0 ("Como usar este documento")
- Adicionar ao ponto 4: *"A prioridade é sempre elevar o nível da conta via biometria facial. Todas as outras rotas são fallback. O KBA (KBA diagnóstico) só entra quando tudo falhou."*

#### CORREÇÃO 7 — Seção 1 (Hook 0 — regras R1-R5)
- Substituir R1-R3 pelas versões revisadas do §2.3 desta errata. R4 e R5 inalteradas.

#### CORREÇÃO 8 — Cenários C01 a C05 (Bloco A — cliente com histórico contributivo)
- **Antes:** todos tinham *"Rota principal: Rota 0 KBA"*.
- **Depois:** todos passam a ter *"Rota principal: Rota 1 — Biometria facial"*. A inteligência contributiva coletada (CTPS, CNIS físico, memória) **continua** sendo coletada no Hook 0 mas serve para o **dossiê Φ₁**, não para o KBA.
- **C01 revisado:** Rota principal = biometria facial (cidadão bancarizado provavelmente tem biometria TSE). Fallback = banco. KBA diagnóstico como último recurso.
- **C02 revisado:** Rota principal = biometria facial. Fallback = banco. KBA diagnóstico se nenhuma via funcionar.
- **C03 revisado:** Rota principal = biometria facial (se tiver biometria TSE). Se não tiver, Rota 3 presencial (sem banco porque não tem internet banking). KBA diagnóstico enquanto espera presencial.
- **C04 revisado:** Rota principal = biometria facial. CNIS físico em casa vai direto para o **dossiê Φ₁** (não precisa de KBA para ter dados — já tem o papel). Fallback = banco.
- **C05 revisado:** Rota principal = biometria facial com câmera traseira assistida (PcD motora). Fallback = banco. KBA diagnóstico se facial e banco falharem (KBA não usa câmera, ponto positivo para esse perfil **como diagnóstico**).

#### CORREÇÃO 9 — Seção 4 (Catálogo de rotas)
- Renomear *"Rota 0 — Selo Previdenciário KBA"* para **"KBA diagnóstico — Selo Bronze KBA (diagnóstico, último recurso)"**.
- Mover para **depois** das Rotas 1, 2 e 3 (não antes).
- Adicionar em destaque: *"⚠ ATENÇÃO: esta rota NÃO eleva o nível da conta. O cidadão permanece Bronze. Serve apenas para que o MC obtenha dados contributivos quando todas as rotas de elevação falharam e o cidadão não tem CTPS nem CNIS físico."*
- Renumerar: **Rota 1 = Biometria facial**, **Rota 2 = Banco**, **Rota 3 = Presencial**, **Rota auxiliar = KBA diagnóstico**.

#### CORREÇÃO 10 — Seção 5 (FAQ)
- **P01 revisada:** *"O cliente tem conta Bronze. O que eu faço primeiro?"* → Resposta: *"Guia ele para fazer biometria facial. Manda o vídeo MC. Se não conseguir, tenta banco. Se não tiver banco, vai pro presencial. Só se tudo falhar, aciona o KBA diagnóstico."*
- **P04 revisada:** *"O KBA deu certo. Isso vale como Prata?"* → Resposta: *"Não. O KBA dá Bronze validado. Não é Prata. O cliente ainda precisa fazer biometria ou banco para ter Prata. Mas com o KBA feito, o MC já consegue puxar dados pra montar a triagem enquanto resolve o nível."*
- **P05:** manter inalterada (KBA não funciona para quem nunca contribuiu).

#### CORREÇÃO 11 — Seção 8 (Métricas)
- **Renomear TENV-KBA** para **"TENV-KBADiag — Taxa de acionamento do KBA diagnóstico"**. Métrica agora mede % de casos que precisaram recorrer ao KBA como último recurso diagnóstico. **Direção da meta: quanto menor, melhor** (significa que as rotas de elevação estão funcionando).
- **Adicionar:** *"Taxa de sucesso biometria facial (1ª tentativa)"* e *"Taxa de sucesso biometria facial (2ª tentativa com orientação MC)"* como métricas prioritárias.

### 3.3 Correções no E5 — gera **MC-GOVBR-CatalogoTravas-v1_1-2026-0509**

#### CORREÇÃO 12 — Seção 0 (Alerta KBA)
- Adicionar nota no §0.2: *"⚠ ATUALIZAÇÃO 09/05/2026: O Selo Previdenciário KBA concede apenas nível Bronze. A análise de impacto do §0.2 original superestimou o alcance do KBA. O gargalo Prata permanece."*
- Revisar §0.4: as correções recomendadas para E4 devem ser lidas à luz desta errata.

#### CORREÇÃO 13 — Seção 2 (Quadrante frequência × impacto)
- Mover **T1.16** (KBA: não sabe responder) e **T1.18** (KBA: errou e bloqueou) do **Quadrante B** (atacar primeiro) para o **Quadrante C** (acompanhar). Razão: como KBA agora é último recurso, essas travas são menos frequentes e menos urgentes no fluxo padrão.

### 3.4 Correções no E12 (se já existir) — gera **MC-GOVBR-Anamnese-Triagem-GovBr-v1_1-2026-0509**

#### CORREÇÃO 14 — Seção 2 (Fluxo conversacional)
- **MSG-11 (classificação automática):** a rota recomendada no preview do Beto deve sempre ser **Rota 1 (biometria facial)** como padrão, com **Rota 2 (banco)** como fallback. KBA diagnóstico **não aparece no preview inicial** — só é acionado manualmente pelo Beto quando necessário.

#### CORREÇÃO 15 — Seção 3.1 (Regras de classificação)
- Substituir regras R1-R3 pelas versões revisadas do §2.3 desta errata.

---

## 4. Novo entregável identificado (roadmap)

### 4.1 Conteúdo institucional MC para biometria facial
- Vídeo YouTube institucional MC guiando o cidadão passo a passo pela biometria facial.
- Tom: linguagem Dona Zilda, sem jargão, mostrando tela do celular.
- **Caso de referência: JAN001** (com autorização) — *"ela reclamou do delay na primeira vez, mas na segunda conseguiu"*.
- Dicas específicas: iluminação, câmera traseira, delay do facescan, o que fazer se travar.
- **Status:** roadmap pós-constituição.

### 4.2 Guia gamificado simulador de biometria
- App ou web que simula a tela de biometria facial gov.br para o cidadão treinar antes de tentar de verdade.
- Reduz ansiedade da primeira tentativa e número de falhas por mau uso.
- **Status:** roadmap Fase 2 (requer desenvolvimento).

---

## 5. Instrução de execução

1. Localize cada seção indicada nos documentos originais.
2. Substitua o conteúdo conforme descrito acima.
3. Adicione no rodapé de cada seção corrigida a nota: *"<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->"*.
4. **Não altere** seções não mencionadas nesta errata.
5. Grave os documentos corrigidos como **novas versões** (paths no preâmbulo). Mantenha os originais intactos.
6. Os novos arquivos **supersede** os anteriores para fins de leitura operacional.

---

ERRATA-001 gravada: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-ERRATA-001-KBA-Bronze-Reposicionamento-v1_0-2026-0509.md
