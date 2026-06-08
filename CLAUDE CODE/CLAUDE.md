# Meu Cumpadre — Orquestração Documental e Tecnologia Ltda.
Vault Obsidian do Founder. Sistema nervoso digital do ecossistema MC.
CNAE 6201-5/01 | Infraestrutura de Acesso Digital para 40-60M de hipervulneráveis.

## Regras invioláveis
- **D > C > V**: Dignidade > Compliance > Viabilidade. Sem exceção.
- **Firewall OAB**: MC é atividade-meio. NUNCA exercer advocacia ou prometer resultado jurídico.
- **Correção 48h**: "48 horas" = sprint interno E3→E4 (docs completos → protocolo INSS). NUNCA promessa de concessão.
- **Proof-First**: Dado sem fonte = dado proibido. Zero fabricação.
- **LGPD**: CPF, CNIS, CID são dados sensíveis. Nunca expor fora de notas de caso.

## Estrutura do vault
- `_Pessoal/` — Notas privadas do Founder (NÃO ACESSAR)
- `Comercial/` — Pipeline, CRM, Agendas (sync ClickUp)
- `Projetos/` — Jornada E0→E7, core do negócio (sync ClickUp)
- `Administrativo/` — Jurídico, Financeiro (sync ClickUp)
- `Gestão Operacional/` — OKRs, POPs, Rotinas (sync ClickUp)
- `Pessoas/` — Equipe, RH, Onboarding (sync ClickUp)
- `_Docs/` — Guias, referências, templates operacionais

## Jornada previdenciária (E0→E7)
E0 Sinal Fraco → E1 Acolhimento → E2 Coleta → E3 Instrução (48h sprint) → E4 Protocolo DER → E5 Watchdog (~57d INSS) → E6 Recursal/Judicial (Dra. Juliana) → E7 Cumprimento/Soberania

## Convenções
- Tasks de clientes: `NOME COMPLETO_CPF` (ex: MARIA DA CONCEIÇÃO_04422675508)
- Datas: DD/MM/AAAA (padrão brasileiro)
- Notas do Obsidian usam [[wikilinks]] para links internos, [texto](url) para externos
- Frontmatter YAML obrigatório em notas estruturadas (status, priority, tags, space, folder, list)
- Idioma: português brasileiro em tudo

## Equipe
- **Alessandro** — Founder/CEO, validador ético, regras de negócio
- **Gilberto** — Atendimento/suporte clientes
- **Dra. Juliana** — Advogada, atividade-fim OAB (fase E6)
- **Igor** — Dev (NestJS+TS+MySQL)
- **Carlos** — UX/Tech

## Sync ClickUp↔Obsidian
Daemon bidirecional roda a cada 5 min (`start-sync.bat`). Editar status, prioridade, descrição ou datas no .md atualiza o ClickUp. Não renomear arquivos sincronizados — quebra o vínculo.

## Comportamento
- Português brasileiro, direto, sem filler
- Antes de qualquer tarefa com 3+ passos: planeje primeiro, execute depois
- Após qualquer correção do Founder: registre em `_Docs/licoes-aprendidas.md`

## Instâncias MC-RAG (atualizado v2.2)
- Grok Build: Engenheiro de Contexto de Primeira Ordem + Aplicação Build (papéis no 02-ARQUITETURA/mc-rag/). Entrega pacotes Compasso-compliant + scripts (ex: mc_clean_yt_transcript.py neste dir). Injetar papéis + método antes de colheitas/builds.
- Ver também: 02-ARQUITETURA/mc-rag/MC-PAPEIS-Instancias-MC-RAG-v2_2.md e MC-RECON-... para território/adversidade + contrato completo.
- Nunca marque tarefa como concluída sem verificar o resultado
- Para documentação detalhada: ver `_Docs/` e `.claude/skills/`
