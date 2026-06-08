# MC-Spec-Driven-Workflow v1.0

**Meu Cumpadre — Metodologia de Desenvolvimento Spec-Driven**
**De ideia a código sem retrabalho**

Versão 1.0 — 04/04/2026
Autor: Alessandro de Souza Neves + Claude (co-fundador intelectual)

---

## Por Que Este Workflow Existe

O problema: quando Alessandro descreve uma feature ("quero um fluxo de upload de RG via WhatsApp com validação OCR") e pede para a IA implementar direto, o resultado é código que repete trechos existentes, ignora padrões do Grimório, inventa bibliotecas desatualizadas, junta responsabilidades no mesmo arquivo, e estoura a janela de contexto. Isso é VibeCoding. Não funciona para projeto com 3.265+ regras jurídicas, 9 verticais e 105 nós de Router-Ethics.

A solução: separar PENSAR de FAZER em 4 fases isoladas. Cada fase roda em conversa limpa (context budget < 40%). O output de uma fase vira o input comprimido da próxima. Nenhum código é escrito até a Fase 4.

---

## O Fluxo em 4 Fases

```
FASE 1          FASE 2          FASE 3          FASE 4
RESEARCH   →    PRD.md     →    SPEC.md    →    IMPLEMENT
(explorar)      (resumir)       (mapear)        (executar)
   |               |               |               |
 /clear          /clear          /clear          código
```

Regra de ouro: entre cada fase, LIMPAR CONTEXTO (/clear no Claude Code, nova conversa no Claude.ai). Isso garante que cada fase opera com contexto fresco, usando apenas o artefato comprimido da fase anterior.

---

## FASE 1 — RESEARCH (Explorar)

**Quem faz:** Alessandro (com Claude.ai ou Claude Code)
**Objetivo:** Reunir todo contexto necessário para a feature — base de código existente, legislação do Grimório, documentações externas, padrões de implementação
**Output:** `PRD.md`

### O Que Pesquisar

| Fonte | O Que Buscar | Exemplo |
|-------|-------------|---------|
| Base de código (Igor) | Arquivos que serão afetados pela feature | Módulos NestJS existentes, schemas MySQL, DTOs |
| Grimório Previdenciário v2.0 | Regras jurídicas aplicáveis | Capítulo sobre aposentadoria rural, IN 128 INSS |
| Router-Ethics 10.0 | Nós que podem ser acionados | D05 (Analfabetismo Digital), V75 (Legibilidade) |
| Documentações externas | APIs, bibliotecas, integrações | WhatsApp Cloud API docs, Google Vision OCR docs |
| Padrões de implementação | Código de referência que já funciona | Repos GitHub, Stack Overflow, projetos similares |
| NotebookLM | Sínteses de legislação e jurisprudência | Queries no notebook "Legislação INSS" |

### Prompt Template para Fase 1

Copiar, adaptar e colar no Claude Code ou Claude.ai:

```
Preciso implementar: [DESCREVER A FEATURE EM 2-3 FRASES].

Antes de qualquer código, faça uma pesquisa:

1. CÓDIGO EXISTENTE: Identifique todos os arquivos da nossa base de código
   que serão afetados por essa implementação. Liste paths completos.

2. GRIMÓRIO: Quais regras jurídicas do Grimório Previdenciário se aplicam?
   Cite capítulo e seção.

3. ROUTER-ETHICS: Quais nós do Router-Ethics 10.0 podem ser acionados
   neste fluxo? Liste IDs (D01-D35, C36-C70, V71-V105).

4. DOCUMENTAÇÕES EXTERNAS: Quais documentações de APIs ou bibliotecas
   preciso consultar? Liste URLs.

5. PADRÕES: Existe algum padrão de implementação na nossa base de código
   que devo seguir? Se sim, aponte o arquivo de referência.

Gere um PRD.md com o resumo filtrado de tudo que encontrou.
Inclua APENAS informações relevantes para esta feature.
NÃO inclua código ainda.
```

### Critérios de Qualidade do PRD.md

O PRD está pronto quando contém:
- Descrição da feature em linguagem natural (2-5 linhas)
- Lista de arquivos existentes afetados (com paths)
- Regras do Grimório aplicáveis (com referência)
- Nós do Router-Ethics relevantes
- Links de documentações externas necessárias
- Padrões de implementação a seguir
- O que NÃO fazer (anti-patterns identificados na pesquisa)

---

## FASE 2 — PRD REVIEW (Comprimir)

**Quem faz:** Alessandro (revisão humana)
**Objetivo:** Validar que o PRD contém tudo que precisa e nada que não precisa
**Tempo:** 10-20 minutos de leitura

### Checklist de Revisão

| ✅ | Verificação |
|----|-------------|
| ☐ | A feature está descrita de forma que Igor entenderia sem contexto adicional? |
| ☐ | Todos os arquivos afetados foram identificados? (Não vai faltar nenhum no meio da implementação?) |
| ☐ | As regras do Grimório estão corretas? (Cross-reference com NotebookLM se necessário) |
| ☐ | As documentações externas são atuais? (Cuidado com docs de 2024 em stack de 2026) |
| ☐ | O que NÃO fazer está claro? (Previne overengineering e reinvenção de roda) |
| ☐ | O PRD cabe em < 2.000 tokens? (Se não, comprimir — informação demais degrada a spec) |

Se faltar algo: voltar para Fase 1 com pergunta específica (não refazer tudo).
Se tiver lixo: remover antes de passar para Fase 3.

---

## FASE 3 — SPEC (Mapear)

**Quem faz:** Alessandro (com Claude.ai ou Claude Code — CONTEXTO LIMPO)
**Objetivo:** Traduzir o PRD em um mapa cirúrgico de arquivos a criar/modificar, com instruções exatas do que fazer em cada um
**Output:** `spec.md`

### Regra Crítica

Dar /clear ou abrir nova conversa ANTES de iniciar a Fase 3. O Claude não deve carregar resíduo da Fase 1.

### Prompt Template para Fase 3

```
Leia o PRD abaixo e gere uma SPEC de implementação.

[COLAR O PRD.md AQUI]

A spec deve listar EXATAMENTE:

1. ARQUIVOS A CRIAR: Para cada arquivo novo:
   - Path completo (ex: src/modules/upload-rg/upload-rg.service.ts)
   - O que o arquivo faz (1-2 linhas)
   - Interfaces/DTOs que implementa
   - Dependências que importa

2. ARQUIVOS A MODIFICAR: Para cada arquivo existente:
   - Path completo
   - O que modificar (seção específica, não "melhorar o arquivo")
   - Code snippet ou pseudo-código quando necessário

3. MIGRAÇÕES DE BANCO: Se houver mudança em schema MySQL:
   - Nome da migration
   - SQL exato (CREATE TABLE, ALTER TABLE, etc.)

4. TESTES: Para cada service/controller novo:
   - Path do arquivo de teste
   - Casos de teste obrigatórios (mínimo 1 por método público)

5. ORDEM DE EXECUÇÃO: Em que sequência implementar
   (ex: 1º migration → 2º entity → 3º DTO → 4º service → 5º controller → 6º testes)

REGRAS:
- NÃO gerar código completo. Gerar mapa + snippets chave.
- NÃO juntar responsabilidades diferentes no mesmo arquivo.
- NÃO criar código que já existe na base — importar.
- Seguir convenções: camelCase vars, PascalCase classes, DTOs obrigatórios.
- TypeScript strict, zero "any" implícito.
```

### Critérios de Qualidade da Spec

A spec está pronta quando:
- Um desenvolvedor que NUNCA viu o projeto consegue implementar seguindo APENAS a spec
- Cada arquivo tem path + responsabilidade + dependências explícitas
- A ordem de execução é lógica (sem dependências circulares)
- Nenhum arquivo "genérico" aparece (ex: "utils.ts" com tudo junto)
- O total cabe em < 3.000 tokens (se não, a feature é grande demais — quebrar em sub-features)

---

## FASE 4 — IMPLEMENT (Executar)

**Quem faz:** Igor (com Claude Code) OU Alessandro (com Claude Code para features simples)
**Objetivo:** Implementar exatamente o que a spec diz, nada mais, nada menos
**Output:** Código commitado com Conventional Commits

### Regra Crítica

Dar /clear ou abrir nova conversa ANTES de implementar. Colar APENAS a spec.md como contexto. Isso deixa 60-70% da janela de contexto livre para a implementação.

### Prompt Template para Fase 4

```
Implemente a spec abaixo. Siga a ordem de execução indicada.
NÃO faça nada além do especificado.
Se encontrar ambiguidade, PARE e pergunte antes de implementar.

[COLAR O SPEC.md AQUI]

Após cada arquivo implementado, rode os testes correspondentes.
Commite seguindo Conventional Commits (feat:/fix:/refactor:/docs:/test:).
```

### Critérios de Qualidade da Implementação

| ✅ | Verificação |
|----|-------------|
| ☐ | Todos os arquivos da spec foram criados/modificados? |
| ☐ | Nenhum arquivo FORA da spec foi tocado? |
| ☐ | Testes passam? (`npm run test`) |
| ☐ | Lint passa? (`npm run lint`) |
| ☐ | Nenhum `any` implícito no TypeScript? |
| ☐ | DTOs existem para toda entrada/saída de API? |
| ☐ | Nenhum código duplicado (importou do existente)? |
| ☐ | Commits seguem Conventional Commits? |
| ☐ | Nenhum secret/credencial no código? |

---

## Quem Faz O Quê

| Fase | Alessandro | Claude | Igor |
|------|-----------|--------|------|
| 1. Research | Define a feature, valida achados | Pesquisa código, Grimório, docs. Gera PRD.md | — |
| 2. PRD Review | Revisa, corta lixo, aprova | — | — |
| 3. Spec | Valida, aprova | Gera spec.md a partir do PRD | — |
| 4. Implement | Revisa resultado | Disponível para dúvidas | Implementa seguindo spec |

Para features simples (< 3 arquivos): Alessandro pode fazer Fase 4 sozinho com Claude Code.
Para features complexas (> 5 arquivos): Igor implementa, Alessandro revisa.

---

## Context Budget — A Regra Que Muda Tudo

A qualidade do output do Claude degrada proporcionalmente ao preenchimento da janela de contexto. Estudos e testes reais confirmam:

| Janela ocupada | Qualidade |
|----------------|-----------|
| 0-30% | Excelente — máxima atenção a instruções |
| 30-50% | Boa — ainda segue a maioria das regras |
| 50-70% | Degradada — começa a ignorar instruções, repetir código |
| 70-100% | Crítica — alucina, perde o fio, inventa coisas |

O SDD resolve isso mecanicamente: cada fase opera com < 40% da janela (o PRD ou spec comprimido + o prompt), deixando 60%+ livre para o trabalho real.

Indicadores de que o contexto estourou:
- Claude começa a repetir código que já existe
- Claude ignora padrões do CLAUDE.md
- Claude inventa bibliotecas ou APIs que não existem
- Respostas ficam genéricas e perdem especificidade

Ação: /clear ou /compact IMEDIATAMENTE. Recomeçar da fase atual com o artefato comprimido.

---

## Exemplos Concretos para o MC

### Exemplo 1: Upload de RG via WhatsApp

**Fase 1 Research → PRD:**
- Feature: "Cidadão envia foto do RG pelo WhatsApp, sistema valida via OCR, extrai dados e salva no dossiê"
- Arquivos afetados: whatsapp.controller.ts, ocr.service.ts, dossie.module.ts
- Grimório: Cap. 5 — Documentos Probatórios, §5.2 — RG como prova de identidade
- Router-Ethics: V74 (Completude Probatória), V75 (Legibilidade)
- Docs: Google Vision OCR API, WhatsApp Cloud API Media endpoint
- Anti-pattern: NÃO processar OCR com Gemini Flash — dados sensíveis vão para Llama 4 Scout

**Fase 3 Spec (resumo):**
1. CRIAR: src/modules/document-ocr/document-ocr.service.ts — processa imagem via Google Vision, extrai nome/CPF/data nascimento
2. CRIAR: src/modules/document-ocr/dto/ocr-result.dto.ts — DTO com campos extraídos + confidence score
3. MODIFICAR: src/modules/whatsapp/whatsapp.controller.ts — adicionar handler para media type "image" com route para OCR
4. CRIAR: migration/20260404_add_document_ocr_table.sql — tabela document_ocr_results
5. CRIAR: src/modules/document-ocr/document-ocr.service.spec.ts — testes unitários
6. Ordem: migration → DTO → service → controller → testes

### Exemplo 2: Alerta de Consignado Não Autorizado

**Fase 1 Research → PRD:**
- Feature: "Watchdog detecta desconto novo no extrato INSS e alerta cidadão via WhatsApp"
- Arquivos afetados: watchdog.module.ts, notification.service.ts, cnis-parser.service.ts
- Grimório: Cap. 8 — Vertical Bancário/Consignado, §8.3 — Detecção de fraude
- Router-Ethics: C42 (Antifraude Consignado), D02 (Fome Crônica se desconto comprometer renda)
- Docs: WhatsApp Cloud API Template Messages
- Anti-pattern: NÃO enviar alerta sem contexto — cidadão pode entrar em pânico

**Fase 3 Spec (resumo):**
1. CRIAR: src/modules/watchdog/consignado-alert.service.ts — compara extratos mês a mês, detecta novos descontos
2. CRIAR: src/modules/watchdog/dto/consignado-diff.dto.ts — DTO com desconto anterior vs. atual
3. MODIFICAR: src/modules/notification/notification.service.ts — adicionar método sendConsignadoAlert()
4. CRIAR: template WhatsApp "alerta_consignado" — "Seu [Nome], detectamos um desconto novo de R$[valor] no seu benefício que não existia mês passado. Quer que a gente investigue?"
5. Ordem: DTO → service → notification → template → testes

---

## Nomenclatura de Arquivos

| Artefato | Nome | Onde Salva |
|----------|------|-----------|
| PRD | MC-PRD-[Feature]-v[X.X]-[YYYY-MMDD].md | Obsidian Vault: /PRDs/ |
| Spec | MC-SPEC-[Feature]-v[X.X]-[YYYY-MMDD].md | Obsidian Vault: /Specs/ |
| Feature completa | Branch: feature/MC-[ID]-[descricao] | Git/GitHub |
| Commit | feat: [descrição curta da mudança] | Git |

---

## Quando QUEBRAR uma Feature

Se a spec está passando de 3.000 tokens, a feature é grande demais. Quebrar em sub-features que podem ser implementadas independentemente:

| Sinal | Ação |
|-------|------|
| Spec > 3.000 tokens | Dividir em 2-3 specs menores |
| > 8 arquivos a criar/modificar | Dividir em waves (wave 1 = base, wave 2 = extensões) |
| Feature depende de outra não implementada | Implementar a dependência primeiro como spec separada |
| Múltiplas verticais envolvidas | Uma spec por vertical + spec de integração (passarela) |

---

## Integração com MC-CLAUDE.md e MC-Hooks

O SDD opera em conjunto com os outros artefatos MC:

- **MC-CLAUDE.md** (advisory): Claude lê no início da sessão e sabe as convenções do projeto
- **MC-Hooks-Config** (enforcement): Hooks bloqueiam código que viola regras invioláveis DURANTE a implementação
- **MC-Spec-Driven-Workflow** (processo): Garante que Claude recebe contexto limpo e comprimido ANTES de implementar

Os três juntos formam o sistema operacional de desenvolvimento do Meu Cumpadre:

```
CLAUDE.md = DNA (quem somos, como operamos)
Hooks     = Sistema imunológico (bloqueia o que não pode)
SDD       = Sistema nervoso (como pensamos antes de agir)
```

---

*MC-Spec-Driven-Workflow v1.0 | Meu Cumpadre | 04/04/2026*
*"Quem transforma água em vinho é Jesus. A IA multiplica o que você dá pra ela."*
*D > C > V | Dignidade > Compliance > Viabilidade | SEMPRE*
