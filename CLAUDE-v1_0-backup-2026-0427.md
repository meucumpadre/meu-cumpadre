# MC-CLAUDE.md — Meu Cumpadre Ecosystem v1.0

> Lucro é combustível, causa é destino, jogo é infinito.
> Hierarquia inviolável: Dignidade > Compliance > Viabilidade.

## Identidade do Projeto

Meu Cumpadre é uma Hybrid Vertical AI Full Stack Company (CNAE 6201-5/01).
Missão: restituir acesso digital a 40-60 milhões de hipervulneráveis brasileiros
(idosos, rurais, PcD, analfabetos digitais) via orquestração documental previdenciária.
Não somos escritório de advocacia. Somos infraestrutura de acesso — atividade-MEIO.

## Regras Invioláveis (enforcement via Hooks — não apenas orientação)

1. **D>C>V**: Dignidade do hipervulnerável prevalece sobre compliance regulatória,
   que prevalece sobre viabilidade técnica. Nenhuma otimização justifica violar dignidade.

2. **Firewall OAB**: MC = atividade-meio (orquestração documental + tecnologia).
   NUNCA exercer advocacia, prometer resultado jurídico, fazer match comercial de advogados,
   ou reter credenciais gov.br do usuário. Dra. Juliana (holding) = atividade-fim.

3. **Correção 48h**: "48 horas" = sprint interno triagem→protocolo INSS (E0→E4),
   EXCLUSIVAMENTE com documentação completa. Pós-protocolo: INSS ~57 dias média,
   exigências variáveis, bancário ~24 dias. NUNCA prometer prazo de benefício ao usuário.
   Prometer: transparência + acompanhamento ativo (Watchdog).

4. **Proof-First**: Zero dados fabricados. Todo número precisa de fonte verificável.
   Todo dossiê carrega hash SHA-256 por página. Dado sem fonte = dado proibido.

5. **Proteção LGPD**: CPF, NB, CID, CNIS = processados EXCLUSIVAMENTE em stack
   self-hosted (Llama 4 Scout/GCP). Consentimento granular obrigatório.
   NUNCA enviar dados sensíveis para APIs externas não-self-hosted.

6. **Router-Ethics**: Confidence < 70 = zona amarela (supervisão humana obrigatória).
   Confidence < 40 = zona vermelha (handoff humano, pipeline pago bloqueado).
   105 nós determinísticos em 3 blocos: D01-D35 → C36-C70 → V71-V105.

## Stack Técnica

- **Backend**: NestJS + TypeScript + MySQL (Igor — autoridade arquitetural)
- **LLM Triage**: Gemini 2.5 Flash (~70% fluxos, dados não-sensíveis)
- **LLM Core**: Llama 4 Scout self-hosted GCP (~25%, dados sensíveis)
- **LLM Ético**: Claude Sonnet via MCP (~5%, decisões complexas)
- **Infra**: WhatsApp Cloud API + N8N 1.88 + LangGraph + GCP (Firestore, BigQuery, Cloud KMS)
- **OCR**: Google Vision | **RPA**: Playwright | **Transcrição**: Whisper
- **Orquestração**: MCP (Model Context Protocol) — padrão JSON-RPC 2.0

## Convenções de Código (Backend — Igor)

- TypeScript strict mode. Sem `any` implícito.
- Nomenclatura: camelCase para variáveis/funções, PascalCase para classes/interfaces.
- Cada módulo NestJS = uma vertical ou funcionalidade atômica.
- DTOs obrigatórios para toda entrada/saída de API.
- Dados sensíveis (CPF, NB, CID) NUNCA em logs, NUNCA em plain text — Cloud KMS.
- Testes: pelo menos um teste unitário por service method crítico.
- Commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:` — Conventional Commits.
- Branch strategy: `main` (produção) → `develop` → `feature/MC-XXX-descricao`.

## Convenções de Documentação (Alessandro — Obsidian Vault)

- Nomenclatura: `MC-[TIPO]-[Descriptor]-v[X.X]-[YYYY-MMDD].md`
- TIPO: ADR, PRD, SPEC, ANALISE, PLAYBOOK, PROTOCOLO, SKILL, KB
- Markdown para Project Knowledge / AI agents. DOCX para equipe/institucional.
- Teste Zilda-STF: toda saída funciona para Dona Zilda (68, analfabeta digital)
  E para um ministro do STF / investidor / investigador CPMI.

## Arquitetura Multi-Agente (Consórcio Cognitivo)

Padrão Supervisor/Worker via LangGraph StateGraph:

| Agente | Função | Dados Sensíveis |
|--------|--------|-----------------|
| Intake (Percepção) | Transcrição sotaques + classificação intenção | Não |
| Forense (OCR) | Leitura docs manuscritos, deteriorados, baixa resolução | Sim |
| Estrategista (RAG) | Cruzamento fatos × Grimório (3.265+ regras) × IN128 | Sim |
| Executor (RPA) | Navegação Gov.br, protocolo INSS, devolução comprovante | Sim |
| Router-Ethics | Avaliação D/C/V, decisão autonomia vs. handoff | Contexto anonimizado |

## Jornada do Usuário (E0-E7)

E0: Sinal Fraco → E1: Primeiro Contato → E2: Triagem/Deliberação →
E3: Coleta Documental → E4: Protocolo INSS (sprint 48h com docs completos) →
E5: Monitoramento (Watchdog) → E6: Resolução → E7: Soberania/Emancipação.

## Human API (4 Tiers — Empatia > Inteligência)

Tier 1: Estagiários (coleta/montagem) → Tier 2: Anjos Comunitários (empatia) →
Tier 3: Supervisores (análise) → Tier 4: Advogados/Dra. Juliana (contencioso).
Router-Ethics Score decide quando handoff é obrigatório — NUNCA opcional.

## Context Budget (regra operacional)

- Manter sessão principal com 30-40% da janela de contexto.
- Delegar tarefas pesadas para sub-agentes com contexto isolado.
- Fazer /compact ou /clear quando contexto ultrapassar 60%.
- Skills carregam apenas frontmatter na inicialização — conteúdo completo sob demanda.
- Pesquisa, spec e implementação em conversas SEPARADAS (Spec-Driven Development).

## 9 Verticais (Constelação)

Previdenciário (âncora) → Saúde → Bancário → Rural → Cartório →
Telemedicina → Consumidor → Trabalhista → Sucessório.
36 passarelas bidirecionais. Evento em uma vertical pode acionar cascata em outra.

## Comandos Frequentes

- `npm run build` — compilar backend NestJS
- `npm run test` — rodar testes unitários
- `npm run lint` — verificar padrões de código
- `npm run migration:run` — aplicar migrações MySQL
- `npm run start:dev` — iniciar servidor em modo desenvolvimento

## Workflow Spec-Driven (para features novas)

1. **Research**: Pesquise a base de código + Grimório + documentações externas relevantes.
   Gere um `PRD.md` com achados filtrados (só o relevante).
2. **Spec**: Limpe contexto. Leia o PRD. Gere `spec.md` listando cada arquivo a
   criar/modificar + o que fazer em cada um. Inclua code snippets quando necessário.
3. **Implement**: Limpe contexto. Leia a spec. Implemente seguindo spec à risca.
   Não invente além do especificado. Não repita código existente — importe.

## Proibições Absolutas

- NUNCA prometer prazo de concessão de benefício INSS ao usuário.
- NUNCA processar CPF/NB/CID/CNIS em APIs externas não-self-hosted.
- NUNCA exercer advocacia ou prometer resultado jurídico.
- NUNCA gerar dados fictícios ou fabricar estatísticas sem fonte.
- NUNCA ignorar handoff quando Router-Ethics exigir intervenção humana.
- NUNCA deletar arquivos de dossiê sem confirmação explícita.
- NUNCA commitar secrets, tokens ou credenciais em repositório.

## Referências Autoritativas

- Grimório Previdenciário v2.0: 109K palavras, 14 capítulos, 3.265+ regras
- Router-Ethics 10.0: 105 nós, spec completa em `RouterEthics_10_MeuCumpadre_Unificado_v2`
- Arquitetura MCP v2.0: `0__Arquitetura_MCP_MeuCumpadre_v2_0.md`
- SKILL Master Orquestrador: `SKILL__master.md`
- ADR-007 Precificação: decisões seladas — não reabrir sem autorização CEO
- BEPS Jan/2026: dados verificados — usar como ground truth

---
*MC-CLAUDE.md v1.0 | 2026-04-04 | Meu Cumpadre — Hybrid Vertical AI Full Stack Company*
*Autor: Alessandro de Souza Neves + Claude (co-fundador intelectual)*
*Hierarquia: D > C > V | Provérbios 31:8 | SEMPRE*
