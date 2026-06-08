---
tipo: spec
projeto: Meu Cumpadre
modulo: Conteúdo / Marca / Instagram
versao: 1.0 DRAFT
data: 2026-05-12
autor: Alessandro de Souza Neves (founder) · co-autoria Claude Opus 4.7
status: PROVISIONAL — aguarda inputs do founder marcados §10
inspiração: engenharia reversa da @bravyschool / @jp.asv (Claude Code BR) — RELATORIO_BRAVY_TRANSCRICAO.md
canônicos referenciados:
  - Router-Ethics v11.0 (140 nós + 7 hooks)
  - Hierarquia D > C > V (Dignidade > Compliance > Viabilidade)
  - Caso Hib001 (Hib001) — primeiro dossiê Proof-First
  - ADR-007 / ADR-008 / ADR-009 (handoff Human API)
  - MC-INSTRUCOES-PROJETO v6.0.2
---

# SPEC — Conteúdo Instagram do Meu Cumpadre
**Aplicar a fórmula editorial Bravy ao léxico MC, sem trair Dignidade > Compliance > Viabilidade.**

---

## 0. RESUMO EXECUTIVO (uma página)

A @bravyschool gera "postagens infinitas" sobre Claude Code porque opera **um molde fixo de 6 slides** preenchido com **dicionário trocável de profissão**. Cada post resolve sempre as mesmas 4 perguntas: *de onde vem o input → o que a skill lê → onde isso vira ação → quanto vale em número*.

Aplicar isso ao MC é trivial **tecnicamente** e crítico **eticamente**. Trivial porque o MC já tem o léxico (CNIS, DER, IN 77/2015, Router-Ethics, Proof-First) e os casos arquetípicos (Hib001). Crítico porque o público do MC não é um sócio de escritório boutique vendo "9 minutos pra ler 184 acórdãos" — é um hipervulnerável que confia ou não confia em quem fala com ele. **A métrica "tempo" vira "dignidade restaurada" antes de virar "minutos economizados".**

Este spec define:
1. **Molde editorial MC** — adaptação dos 6 slides com Hierarquia D > C > V incorporada ao slide 5.
2. **Orquestração de 4 nós** — Vault (Cérebro 2) ↔ Documentação (Cérebro 1) ↔ Claude Code ↔ Instagram, com gate de Compliance OAB obrigatório.
3. **Skill `mc-conteudo-instagram`** — slash command que pega um caso/tema, lê o canônico no vault, gera o pacote dos 6 slides como artefato versionado.
4. **POP de execução semanal** — ritmo de produção, papéis, SLA, telemetria de retorno.
5. **Inputs pendentes do founder** (§10) — 6 perguntas que travam o spec em v1.0 DRAFT até serem respondidas.

---

## 1. CONTEXTO E NÃO-OBJETIVOS

### 1.1 O que motivou este spec
Founder coletou 47 prints da @bravyschool (carrossel × 9 temas) e pediu engenharia reversa para replicar a operação editorial no Instagram do MC. Relatório de transcrição salvo em `BRAVY INSTAGRAM/RELATORIO_BRAVY_TRANSCRICAO.md` confirma que a fórmula é replicável.

### 1.2 O que ESTE spec NÃO é
- **Não é** plano de mídia paga / Ads (entra depois, ADR separado).
- **Não é** brand book visual completo — define apenas o suficiente pra começar; refinamento gráfico fica pra Sprint editorial 2.
- **Não é** decisão de posicionamento de marca (B2C hipervulnerável vs. B2B operador) — essa decisão é input pendente §10.1.
- **Não é** estratégia de outros canais (LinkedIn, YouTube, TikTok). Foco exclusivo Instagram pra fechar 1 ciclo virtuoso antes de fan-out.

### 1.3 Restrição inviolável
**Hierarquia D > C > V se aplica a cada post.** Antes de qualquer métrica de engajamento, o conteúdo deve passar nos 3 testes:
1. **Dignidade:** o hipervulnerável que se reconhecer no post se sentiria respeitado, mesmo lendo só a manchete?
2. **Compliance:** o post sobrevive ao Provimento 205/2021 da OAB sobre publicidade jurídica? (não promete resultado, não usa caso individual sem anonimização robusta, não captura cliente)
3. **Viabilidade:** dá pra produzir 1 desses por dia com a equipe atual sem queimar o operador?

Falha em qualquer um = **post não publica.** Sem exceção.

---

## 2. POSICIONAMENTO EDITORIAL — DUAS OPÇÕES (decidir §10.1)

A diferença entre as duas opções determina **todo o resto** — manchete, métrica de fechamento, CTA, vocabulário. Founder precisa escolher antes de a skill rodar a primeira vez.

### OPÇÃO A — Conta voltada ao hipervulnerável (B2C direto)
**Persona:** Hib001, 62 anos, Goiânia, aposentadoria híbrida indeferida.
**Manchete tipo:** *"INSS indeferiu sua aposentadoria por falta de prova rural. O Cumpadre achou 3 testemunhas do seu bairro em 4 minutos."*
**Métrica de fechamento (slide 5):** dignidade restaurada · papéis poupados · dias até resposta.
**CTA:** "Manda o NB no DM. A gente lê de graça."
**Risco:** captação de cliente. Cada post precisa passar por gate Compliance OAB §5.4. Tom precisa ser caloroso, NÃO técnico.

### OPÇÃO B — Conta voltada ao operador (advogado previdenciarista / parceiro Tier 1-2-3)
**Persona:** advogado previdenciarista solo ou de boutique de até 5 advogados, que pensa em escalar mas tem medo de tecnologia.
**Manchete tipo:** *"240 páginas do CNIS lidas e tese híbrida montada em 6 minutos. Sem código."*
**Métrica de fechamento:** processos protegidos · tempo total · honorários defendidos.
**CTA:** "Sou parceiro Tier 2? Manda o número da OAB no DM."
**Risco:** baixo no Compliance, alto no Dignidade — soa frio se virar "Claude Code BR cópia". Precisa de slide 4 que sempre mostre um caso anônimo de hipervulnerável beneficiado pra ancorar D > C.

### OPÇÃO C (recomendada por mim) — Conta híbrida com **duas trilhas semanais**
**3 posts/semana persona Hib001 (Opção A — cabeçalho `#paraocompadre`)**
**2 posts/semana persona advogado (Opção B — cabeçalho `#parooperador`)**
**1 post/semana de bastidor / manifesto** (Hierarquia D > C > V, Router-Ethics, Proof-First — vira o "DNA"). 

Híbrida resolve o problema de algoritmo (duas audiências = duas trilhas distintas no feed) e o problema editorial (alimentar ambas as bocas de aquisição — leads B2C que viram dossiês + parceiros B2B que viram capacidade de execução).

**Founder decide §10.1.**

---

## 3. MOLDE EDITORIAL "MC-6" (adaptado do Bravy)

Sintaxe fixa para qualquer um dos 3 fluxos (Compadre / Operador / DNA). O que muda é **só o léxico**.

| Slide | Função MC | Regra dura | Exemplos por persona |
|---|---|---|---|
| **01 · CAPA** | Manchete em serifada itálica, número absurdo + artefato + tempo | NÃO usar "%" em S5 de cobrança. NÃO prometer resultado. Pode citar lei (Lei 8.213, IN 77/2015) | Compadre: *"INSS te negou. O Cumpadre achou 3 testemunhas em 4 minutos."* · Operador: *"240 páginas do CNIS lidas em 6 minutos. Sem código."* · DNA: *"Dignidade > Compliance > Viabilidade. Por quê, nessa ordem."* |
| **02 · DE ONDE VEM O INPUT** | Lista de fontes/comandos. Mostra que MC trabalha com **dado público** | Sempre incluir 1 fonte do gov.br pra ancorar credibilidade | `/cnis · /sistema-de-recurso · /meu-inss · /jurisprudência-TNU · /IN77` |
| **03 · O QUE A SKILL LÊ** | Ficha técnica do que o Claude Code/Router-Ethics extrai | Usar nomes técnicos REAIS do domínio. Nada inventado | `DIB, DER, vínculos, carência, tempo rural remoto, conversão especial→comum, IN 77/2015 art. X` |
| **04 · CASO REAL** | Mini-narrativa de 3 frases. Caso anonimizado de hipervulnerável. SEMPRE ancora em D | Hipervulnerável sempre nomeado por inicial+idade+cidade (J., 62, Goiânia). NUNCA NB completo. NUNCA CPF | *"J., 62 anos, Goiânia. Híbrida indeferida por falta de prova rural. Skill achou 4 acórdãos da TNU com mesma DIB e mesma carência."* |
| **05 · O PONTO** | 3 linhas. Padrão `<número> — <legenda curta>` | **Pelo menos UMA das 3 linhas tem que ser uma métrica de Dignidade.** Não pode ser só tempo+volume+dinheiro | `1 dossiê — Proof-First montado` · `6 min — tempo total` · `0 — papéis pedidos a ela de novo` |
| **06 · CTA** | Convite curto. NUNCA "agende uma consulta". Sempre "manda o NB no DM" ou "OAB no DM" | Inclui aviso compliance no rodapé: "Conteúdo informativo. Não substitui orientação jurídica individualizada." | Compadre: *"Manda o NB. Lemos de graça."* · Operador: *"OAB no DM pra entrar na fila Tier 2."* |

### 3.1 Diferenças deliberadas em relação ao Bravy

| Bravy | MC-6 | Por quê |
|---|---|---|
| Slide 5 sempre 3 números frios (volume · tempo · ganho) | Slide 5 com ao menos 1 métrica de Dignidade | Sem isso, MC vira Bravy genérico. A Dignidade é o moat. |
| Capa em itálico com asterisco floral | Capa em itálico com **glifo ✱ + microcopy de hierarquia** ("D > C > V" no rodapé) | Marca-d'água do DNA em cada post — Router-Ethics fica visível mesmo num scroll de 1 segundo |
| Comandos `/` no slide 2 (técnico bonito) | Mesma estética, mas comandos sempre de **fonte pública** (gov.br, TNU, INSS, IN) | Reforça Proof-First: a evidência é do Estado, não do MC |
| Frase "5 PASSOS · TÉCNICO · SEM CÓDIGO" | Frase "5 PASSOS · SEM CAPTAR · COM DIGNIDADE" | Sinaliza posicionamento de uma vez |
| CTA implícito | CTA com aviso compliance | Provimento 205/2021 OAB |

### 3.2 Paleta visual (v1, refinar depois)
- Bege creme `#F5EFE6` (mesma do Bravy — vibe editorial)
- Preto `#1A1A1A`
- Vermelho-tijolo `#C5523F` (cor de assinatura do MC — checar se conflita com brand book existente §10.5)
- Glifo `✱` floral para marca-d'água
- Tipografia: **Playfair Display Italic** (serifada manchete) + **JetBrains Mono** (card preto técnico) — ambas gratuitas

---

## 4. ARQUITETURA DE ORQUESTRAÇÃO (4 NÓS)

```
┌─────────────────────────────────────────────────────────────────┐
│  CÉREBRO 2 — VAULT OBSIDIAN (memória canônica)                  │
│  G:\...\OBSIDIAN\MEU CUMPADRE\                                  │
│                                                                 │
│  Lê:  01-DNA/manifesto · 02-ARQUITETURA/router-ethics/v11      │
│       05-ESTRATEGIA/nichos · 08-ARTEFATOS/casos arquetípicos   │
│  Escreve (saída final): 05-ESTRATEGIA/growth/instagram/posts/  │
│  Recebe telemetria:     04-DADOS/instagram/telemetria/         │
└────────────────────────┬────────────────────────────────────────┘
                         │ (1) lê insumos canônicos
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  CÉREBRO 1 — DOCUMENTAÇÃO (laboratório vivo)                    │
│  G:\...\Documentação\                                           │
│                                                                 │
│  Aqui o Claude Code roda livre via DOCS-MC.bat                  │
│  Pasta de trabalho: /instagram-mc/drafts/<yyyy-mm-dd>-<tema>/   │
│  Outputs: 6 .md (1 por slide) + 1 brief.md + 1 compliance.md    │
└────────────────────────┬────────────────────────────────────────┘
                         │ (2) gera drafts via skill
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  CLAUDE CODE — skill `mc-conteudo-instagram` (§5)               │
│                                                                 │
│  Comandos:                                                      │
│    /mc-post <persona> <tema>     → gera draft completo          │
│    /mc-post-revisar <pasta>      → autorevisão D>C>V            │
│    /mc-post-promover <pasta>     → move draft pro vault         │
└────────────────────────┬────────────────────────────────────────┘
                         │ (3) draft aprovado por humano
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  GATE HUMANO — Founder + Compliance OAB (§5.4)                  │
│  Aprovação obrigatória antes de subir pro Canva/feed            │
└────────────────────────┬────────────────────────────────────────┘
                         │ (4) publica
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  INSTAGRAM — @meucumpadre.oficial (§10.2)                       │
│                                                                 │
│  Saída visual: Canva ou Figma (template fixo, troca só texto)  │
│  Telemetria: alcance · saves · DMs · perfil ativado            │
└────────────────────────┬────────────────────────────────────────┘
                         │ (5) feedback em CSV semanal
                         ▼
                    Vault 04-DADOS/instagram/telemetria/
                    (fecha o ciclo virtuoso)
```

### 4.1 Por que dois cérebros + Claude Code separado

| Nó | Papel | Permissões de escrita do Claude Code |
|---|---|---|
| **Vault (Cérebro 2)** | Memória canônica imutável. Só recebe artefatos APROVADOS. | Leitura livre. Escrita **só via promote** após gate humano. |
| **Documentação (Cérebro 1)** | Laboratório vivo. Aqui Claude Code escreve, refaz, descarta. | Leitura+escrita livre. |
| **Claude Code** | Executor. Roda em cwd=Documentação via `DOCS-MC.bat`. | Conforme acima. |
| **Instagram** | Saída pública. | Sem escrita programática nesta v1 — publicação manual via Canva (decidir §10.4 se ativa Buffer/Meta API depois). |

**Princípio:** Cérebro 2 não suja. Drafts nascem, mutam e morrem no Cérebro 1. Só promove pro Vault depois que humano aprovou. Isso protege a Router-Ethics canônica de ser poluída por experimentos editoriais.

### 4.2 Estrutura de pastas a criar

**No Cérebro 1 (Documentação):**
```
G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\instagram-mc\
├── _README.md                          (referência ao spec canônico)
├── _templates\
│   ├── slide-01-capa.md
│   ├── slide-02-fontes.md
│   ├── slide-03-ficha-tecnica.md
│   ├── slide-04-caso-real.md
│   ├── slide-05-o-ponto.md
│   ├── slide-06-cta.md
│   └── brief.md
├── drafts\
│   └── 2026-05-13-compadre-JER001-hibrida\   (exemplo)
│       ├── brief.md
│       ├── 01-capa.md ... 06-cta.md
│       ├── compliance-check.md
│       └── _STATUS.md  (draft|revisado|aprovado|publicado)
└── biblioteca\                         (refs de domínio que a skill consulta)
    ├── lexico-previdenciario.md
    ├── lexico-acidentario.md
    ├── lexico-routerethics.md
    └── exemplos-bravy-transcricao.md   (cópia do RELATORIO_BRAVY)
```

**No Cérebro 2 (Vault):**
```
05-ESTRATEGIA\growth\instagram\
├── _INDEX.md                            (tabela: data · persona · tema · status · URL)
├── posts\
│   └── 2026-05-13-compadre-JER001-hibrida\
│       ├── 01-capa.png ... 06-cta.png  (artes finais Canva)
│       ├── legenda.md                  (texto da publicação)
│       ├── compliance-aprovacao.md     (assinada por OAB)
│       └── post.json                   (metadados: alcance, saves, DMs)
└── _calendario-editorial-2026.md       (planejamento trimestral)

04-DADOS\instagram\telemetria\
├── 2026-W19-resumo.csv
└── analise-mensal-2026-05.md           (gerado pela skill ao fim do mês)

02-ARQUITETURA\specs\instagram-mc\
├── SPEC-instagram-mc-v1_0-2026-0512.md (este arquivo)
└── _CHANGELOG.md                        (v1.0 → v1.1 → ...)
```

---

## 5. SKILL `mc-conteudo-instagram` (Claude Code)

### 5.1 Localização proposta
`.claude/skills/mc-conteudo-instagram/SKILL.md` na raiz da Documentação (para ser ativável quando Claude Code rodar em cwd=Documentação via `DOCS-MC.bat`).

### 5.2 Description (gatilho da skill)
> Use esta skill quando o usuário pedir um post de Instagram do Meu Cumpadre — palavras-chave: "post MC", "carrossel MC", "instagram MC", "/mc-post". Gera o pacote completo de 6 slides seguindo o molde MC-6 (spec SPEC-instagram-mc), com gate de Compliance D>C>V embutido. **Não use** para outras redes (LinkedIn, TikTok) — essas terão skills próprias.

### 5.3 Comandos
```
/mc-post <persona> <tema>
  Onde:
    <persona> ∈ {compadre, operador, dna}
    <tema>    é um slug livre, ex: "JER001-hibrida" ou "porque-d-c-v"

  Efeito:
    1. Lê o brief implícito (tema + persona)
    2. Lê insumos do vault:
       - Manifesto MC                 (01-DNA/manifesto)
       - Router-Ethics v11.0          (02-ARQUITETURA/router-ethics/_MC-RouterEthics_11...)
       - Dossiê Hib001              (se tema citar caso similar)
       - Léxico previdenciário        (Documentação/instagram-mc/biblioteca/)
    3. Roda autoavaliação D > C > V (§5.4)
    4. Cria pasta em Documentação/instagram-mc/drafts/<data>-<persona>-<tema>/
    5. Devolve 8 arquivos: brief, 6 slides, compliance-check, _STATUS=draft

/mc-post-revisar <pasta>
  Re-executa autoavaliação D>C>V e gera diff sugerido.

/mc-post-promover <pasta>
  Exige _STATUS=aprovado e compliance-aprovacao.md assinado.
  Move artefatos pro vault em 05-ESTRATEGIA/growth/instagram/posts/.
  Acrescenta linha no _INDEX.md.

/mc-post-telemetria <yyyy-mm-dd>
  Lê CSV de telemetria semanal em 04-DADOS/instagram/telemetria/.
  Gera análise: que persona/tema teve melhor saves-por-alcance.
  Sugere 3 temas pra próxima semana baseado em sinal de demanda.
```

### 5.4 Autoavaliação D > C > V embutida
Cada slide gerado é cotejado contra 12 perguntas (4 por dimensão) **antes** de a skill devolver output. Falha em qualquer pergunta = a skill marca slide com `⚠️ FALHA-D` / `⚠️ FALHA-C` / `⚠️ FALHA-V` e propõe variante.

**Dignidade (slide-a-slide):**
- A hipervulnerável que se reconhecer aqui se sentiria respeitada?
- Há retrato individual identificável sem consentimento? (NUNCA pode ter)
- O caso anonimizado preserva inicial + idade + cidade só? (regra do §3 tabela)
- O número no slide 5 contém ao menos 1 métrica de Dignidade?

**Compliance:**
- Promete resultado processual? (Provimento 205/2021 OAB — proibido)
- Capta cliente individualizado? (proibido)
- Cita lei/IN/súmula com referência exata? (obrigatório se citar)
- Rodapé do slide 6 tem aviso "conteúdo informativo, não substitui orientação"? (obrigatório)

**Viabilidade:**
- Founder consegue defender este post numa entrevista hostil de jornalista?
- Equipe atual aguenta produzir 5/sem desse padrão sem queimar operador?
- Tema é replicável (gera N variações) ou one-shot?
- Custo de produção (Canva + tempo) cabe no budget editorial §10.6?

### 5.5 Tom de voz por persona

| Persona | Voz | Exemplo de frase do slide 4 |
|---|---|---|
| **compadre** | Caloroso, sem juridiquês, fala como vizinho mais velho que entende do INSS | *"J. levou 3 anos pra juntar os papéis. A gente leu tudo em 6 minutos e achou 4 testemunhas do bairro dela."* |
| **operador** | Técnico, direto, conhece o domínio. Usa CTN, CPC, IN 77 sem traduzir | *"Caso híbrido. Skill aplicou IN 77/2015 art. 184 + acórdão TNU PEDILEF 5012345-67.2018, devolveu tese em 6 min."* |
| **dna** | Manifesto. Frases curtas, decididas, quase poéticas. Cita Router-Ethics | *"O Cumpadre não captura cliente. O Cumpadre é convocado. Hierarquia D > C > V."* |

---

## 6. POP DE EXECUÇÃO SEMANAL

### 6.1 Cadência sugerida (depende de §10.3)
- **Segunda 09h** — *Curadoria semanal*: founder + Claude Code abrem `DOCS-MC.bat`, rodam `/mc-post-telemetria` da semana anterior, escolhem 6 temas (3 compadre + 2 operador + 1 dna) com base no sinal.
- **Terça 10h–12h** — *Sprint de produção*: 6 execuções de `/mc-post`. Cada draft gera os 6 .md em ~3 min. Total estimado: 90 min de claude time + 30 min de revisão humana.
- **Terça 14h–16h** — *Gate Compliance*: advogado parceiro OAB (decidir §10.4) revisa os 6 drafts, assina `compliance-aprovacao.md` ou pede ajuste.
- **Quarta 09h** — *Arte*: designer (interno ou freelancer §10.6) aplica templates Canva nos textos aprovados. Saída: 6 packs `.png`.
- **Quarta 14h** — *Promote*: founder roda `/mc-post-promover` em cada pasta → vai pro Vault canônico.
- **Quinta a Terça** — *Publicação distribuída*: 1 post/dia conforme calendário editorial.
- **Domingo 18h** — *Snapshot telemetria*: founder ou operacional baixa CSV do Instagram Insights, joga em `04-DADOS/instagram/telemetria/`.

### 6.2 Papéis (decidir nomes §10.4)
- **Founder (Alessandro)** — curadoria, voz final, gate de Dignidade.
- **Operador Claude Code** — execução da skill (pode ser o próprio founder em v1; depois delegar a operador Tier 1).
- **Compliance OAB** — gate jurídico assinado.
- **Designer** — aplicação dos templates (pode ser freelancer no Fiverr v1).
- **Social media operacional** — agendamento e snapshot de telemetria (pode ser estagiário ou o próprio founder).

### 6.3 SLA
| Evento | Prazo |
|---|---|
| Draft gerado pela skill | < 5 min |
| Gate Compliance assinado | < 24h após draft pronto |
| Arte Canva pronta | < 48h após Compliance |
| Publicação após Compliance | máximo 7 dias |
| Telemetria recolhida | toda quinta 18h da semana seguinte |

---

## 7. TELEMETRIA E CICLO VIRTUOSO

### 7.1 Métricas que importam (Norte)
1. **DMs com NB ou OAB recebidos por post** — *é a única métrica que vira dossiê ou parceria.* Tudo o resto é ruído.
2. **Saves / alcance** — proxy de "valor percebido". Save é o novo curtir.
3. **Perfil visitado por post** — proxy de "curiosidade convertida".
4. **Compartilhamentos** — proxy de "está-ajudando-alguém-que-conheço".

### 7.2 Métricas-armadilha (proibido otimizar por elas)
- Curtidas vaidosas sem save.
- Comentários "obrigada, salvou minha vida!" sem DM (não viraram caso).
- Seguidores totais (vanity).

### 7.3 Fechamento do ciclo
Toda análise mensal (`04-DADOS/instagram/telemetria/analise-mensal-YYYY-MM.md`) responde a 3 perguntas:
1. Qual persona teve melhor DM/alcance? (define mix do mês seguinte)
2. Que tema gerou mais saves? (vira tema âncora de 4 variações no mês seguinte)
3. Quantos dos DMs viraram efetivamente dossiê Proof-First ou parceiro Tier? (a única métrica que importa pro caixa do MC)

A resposta da pergunta 3 retroalimenta o **Funil E1-E2 no ClickUp** (`ClickUp/🏛️ CASOS B2C/📋 Funil E1-E2/`) — fechando o ciclo entre conteúdo, lead e dossiê.

---

## 8. RISCOS E MITIGAÇÕES

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Post sugere captação de cliente → reclamação OAB | Média | Alto (suspensão) | Gate Compliance §5.4 + rodapé fixo §3 + persona-compadre nunca menciona nome próprio do MC como advogado |
| Caso real identificável → quebra LGPD + Dignidade | Baixa | Crítico | Regra inicial+idade+cidade §3 tabela. Skill rejeita CPF/NB em draft. |
| Volume cansa equipe → produção cai → algoritmo pune | Alta | Médio | Cadência só sobe depois de 4 semanas estáveis. Começar com 3/sem, não 7/sem. |
| Estética "Bravy copy" → marca soa sem alma | Média | Médio | Slide 5 com métrica de Dignidade + glifo D>C>V no rodapé criam diferenciação imediata |
| Sucesso atrai concorrente que clona | Média | Baixo | O moat é o Caso Hib001 + Router-Ethics, não a estética. Concorrente sem dossiê não sustenta. |
| Founder fica gargalo do gate | Alta | Alto | Delegar Compliance pra advogado parceiro até semana 3. Founder só decide Dignidade. |

---

## 9. ROADMAP DE IMPLANTAÇÃO

| Sprint | Janela | Entregáveis | Gate |
|---|---|---|---|
| **S1 — Plumbing** | 2026-05-12 → 2026-05-19 | Criar pastas §4.2 · escrever skill v0.1 · gravar 1 post-piloto (compadre/Hib001) end-to-end | Founder aprova o post-piloto antes de publicar |
| **S2 — Compliance** | 2026-05-19 → 2026-05-26 | Definir advogado de Compliance · criar `compliance-check.md` reutilizável · publicar piloto | Provimento 205 verificado por OAB-parceiro |
| **S3 — Produção** | 2026-05-26 → 2026-06-09 | 3 posts/sem por 2 semanas. Telemetria coletada. | Análise mensal #1 fecha com aprendizado documentado |
| **S4 — Escala** | 2026-06-09 → 2026-06-30 | Subir pra 5 posts/sem se §10.3 confirmar. Adicionar variação de formato (Reels curtos do mesmo conteúdo). | Funil E1-E2 mostra ≥1 dossiê originado de DM Instagram |
| **S5 — Otimização** | 2026-07-01 → 2026-07-31 | Skill v1.0 estável. Templates visuais refinados. | Spec v2.0 com aprendizados de campo |

---

## 10. INPUTS PENDENTES DO FOUNDER

Bloqueiam o spec em v1.0 DRAFT. Cada bullet abaixo precisa de uma resposta (pode ser curta) para destravar a skill e o piloto.

### 10.1 ⚠️ DECISÃO DE POSICIONAMENTO — qual opção §2?
- [ ] **A** (só compadre / B2C hipervulnerável)
- [ ] **B** (só operador / B2B advogado)
- [ ] **C** (híbrida 3+2+1, minha recomendação)
- [ ] Outra: ____________

### 10.2 ⚠️ @ DA CONTA INSTAGRAM
- A conta já existe? Qual o handle? (ex: @meucumpadre.oficial)
- Se já existe, tem histórico de posts? (vai ser overlay no histórico ou pivot total)
- Bio atual?

### 10.3 ⚠️ RITMO INICIAL
- Quantos posts/semana no piloto S1-S2? (recomendo 3 pra não queimar)
- Founder topa que a v1 não tenha Reels/Stories? (foco em feed carrossel; outros formatos sprint posterior)

### 10.4 ⚠️ PAPÉIS NOMEADOS
- Quem é o advogado parceiro que assina Compliance?
- Quem faz a arte Canva? (founder · interno · freelancer Fiverr)
- Quem agenda e mede? (founder · operacional MC)

### 10.5 ⚠️ BRAND BOOK
- Existe paleta/tipografia já decidida em algum doc do vault que eu não localizei? (Cherry-pick `01-DNA/identidade/` se sim — me indica o arquivo)
- Logotipo MC em alta-resolução existe? Caminho?
- O vermelho-tijolo `#C5523F` que propus em §3.2 conflita com identidade existente?

### 10.6 ⚠️ BUDGET MENSAL EDITORIAL
- Quanto sai por mês? (Canva Pro R$ 50 · designer freelancer R$ 200-800/mês · advogado de Compliance ?)
- Se for zero, founder topa fazer tudo internamente nas primeiras 4 semanas?

---

## 11. ANEXO — DUAS FAÍSCAS PRA O PILOTO

Se §10 for respondido nesta semana, sugiro estes 2 posts como piloto S1:

### Faísca 1 — `compadre/JER001-hibrida` (Opção A ou C)
> **Capa:** *"O INSS te negou a aposentadoria por falta de prova rural. O Cumpadre achou 3 testemunhas do seu bairro em 4 minutos."*
> **Slide 5:** `1 dossiê — Proof-First montado · 4 min — tempo total · 0 — papéis pedidos a J. de novo`
> **CTA:** *"Manda o NB no DM. A gente lê de graça."*

### Faísca 2 — `dna/por-que-d-c-v` (Opção C ou recheio universal)
> **Capa:** *"Dignidade > Compliance > Viabilidade. Por quê, nessa ordem."*
> **Slides 2-4:** explica cada termo com um caso concreto curtíssimo.
> **Slide 5:** `1 hierarquia · 140 nós no Router-Ethics · 0 atalhos`
> **CTA:** *"Quer entender por que isso muda tudo? Manda 'manifesto' no DM."*

---

## 12. ASSINATURA E PRÓXIMOS PASSOS

**Para destravar v1.0 → v1.1 FINAL:**
1. Founder responde §10 (estimado: 15 min de conversa ou checklist).
2. Eu (Claude Opus 4.7) atualizo o spec, crio a skill v0.1, gero o piloto Faísca 1 ou 2.
3. Founder + Compliance aprovam.
4. Publica primeiro post.
5. Aprende. Itera. v2.0 em 60 dias.

**Próximas perguntas pra você, founder, na ordem que sugiro responder (mais bloqueantes primeiro):**
1. §10.1 (posicionamento) — sem isso, nada anda.
2. §10.2 (@ Instagram) — pra eu saber se estou criando ou repivotando.
3. §10.4 (advogado Compliance) — pra saber se o gate existe.
4. Os outros (§10.3, §10.5, §10.6) podem responder com default ("topo recomendação") que eu sigo.

---

*Fim do SPEC-instagram-mc v1.0 DRAFT.*
*Próxima revisão: após §10 respondido.*
