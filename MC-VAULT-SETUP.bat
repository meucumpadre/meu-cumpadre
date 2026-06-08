@echo off
REM ============================================================
REM MC-VAULT-SETUP — Estruturação do Obsidian Vault
REM Meu Cumpadre | 27/03/2026
REM Executar na raiz do vault Obsidian
REM ============================================================

echo.
echo ========================================
echo  MEU CUMPADRE - Estruturacao do Vault
echo ========================================
echo.

REM --- Criar pastas principais ---
mkdir "01-DNA" 2>nul
mkdir "02-ARQUITETURA" 2>nul
mkdir "03-GOVERNANCA" 2>nul
mkdir "04-DADOS" 2>nul
mkdir "05-ESTRATEGIA" 2>nul
mkdir "06-OPERACOES" 2>nul
mkdir "07-PESQUISAS" 2>nul
mkdir "08-ARTEFATOS" 2>nul

REM --- Subpastas DNA ---
mkdir "01-DNA\manifesto" 2>nul
mkdir "01-DNA\identidade" 2>nul
mkdir "01-DNA\jogo-infinito" 2>nul

REM --- Subpastas ARQUITETURA ---
mkdir "02-ARQUITETURA\grimorio" 2>nul
mkdir "02-ARQUITETURA\router-ethics" 2>nul
mkdir "02-ARQUITETURA\mcp" 2>nul
mkdir "02-ARQUITETURA\stack-llm" 2>nul
mkdir "02-ARQUITETURA\verticais" 2>nul

REM --- Subpastas GOVERNANCA ---
mkdir "03-GOVERNANCA\adrs" 2>nul
mkdir "03-GOVERNANCA\compliance" 2>nul
mkdir "03-GOVERNANCA\contratos" 2>nul
mkdir "03-GOVERNANCA\lgpd" 2>nul

REM --- Subpastas DADOS ---
mkdir "04-DADOS\beps" 2>nul
mkdir "04-DADOS\govbr" 2>nul
mkdir "04-DADOS\tcu" 2>nul
mkdir "04-DADOS\cpmi" 2>nul
mkdir "04-DADOS\lai" 2>nul

REM --- Subpastas ESTRATEGIA ---
mkdir "05-ESTRATEGIA\growth" 2>nul
mkdir "05-ESTRATEGIA\valuation" 2>nul
mkdir "05-ESTRATEGIA\nichos" 2>nul
mkdir "05-ESTRATEGIA\premium-acidentario" 2>nul
mkdir "05-ESTRATEGIA\pricing" 2>nul

REM --- Subpastas OPERACOES ---
mkdir "06-OPERACOES\frameworks" 2>nul
mkdir "06-OPERACOES\playbooks" 2>nul
mkdir "06-OPERACOES\protocolos" 2>nul
mkdir "06-OPERACOES\equipe" 2>nul

REM --- Subpastas PESQUISAS ---
mkdir "07-PESQUISAS\perplexity" 2>nul
mkdir "07-PESQUISAS\gemini" 2>nul
mkdir "07-PESQUISAS\manus" 2>nul

REM --- Subpastas ARTEFATOS ---
mkdir "08-ARTEFATOS\html" 2>nul
mkdir "08-ARTEFATOS\jsx" 2>nul
mkdir "08-ARTEFATOS\diagramas" 2>nul

echo.
echo  Pastas criadas com sucesso!
echo.

REM --- Criar READMEs em cada pasta principal ---

(
echo # 01 - DNA / Identidade / Visao
echo.
echo Documentos fundacionais do ecossistema.
echo.
echo ## Conteudo
echo - Manifesto Publico v1
echo - Diplomata dos Invisiveis v1.1
echo - Jogo Infinito v4.0
echo - Conceito Hybrid Vertical AI Full Stack Company
echo - Dia D ^(25/03/2026^)
echo - Protocolo Crisalida
echo.
echo ## Tags: #dna #identidade #visao #manifesto
) > "01-DNA\README.md"

(
echo # 02 - Arquitetura Tecnica
echo.
echo Specs do core engine do ecossistema.
echo.
echo ## Conteudo
echo - Grimorio Previdenciario v2.0 ^(109K palavras, 3.265+ regras^)
echo - Router-Ethics 11.0 ^(140 nos, 3 blocos D/C/V + 7 hooks + Hook 0 govbr^)
echo - Arquitetura MCP v2.0
echo - Knowledge Base v4
echo - SKILL Master
echo - Human API ^(4 Tiers^)
echo - Stack LLM ^(Gemini/Llama/Claude^)
echo.
echo ## Tags: #arquitetura #grimorio #router #mcp #tech
) > "02-ARQUITETURA\README.md"

(
echo # 03 - Governanca / Compliance
echo.
echo Documentos de governanca, ADRs e compliance.
echo.
echo ## Conteudo
echo - ADR-001 a ADR-010
echo - ADR-007 Campo de Precificacao ^(CRITICO^)
echo - Roadmap Governanca 5 Artefatos
echo - Changelog Juridico v1.0
echo - Playbook Custodia Credenciais gov.br
echo - DPIA, Contratos Modelo, Politica Privacidade
echo.
echo ## Tags: #governanca #adr #compliance #oab #lgpd
) > "03-GOVERNANCA\README.md"

(
echo # 04 - Dados / Indicadores / Evidencia
echo.
echo Dados verificados ^(Proof-First^) do ecossistema INSS.
echo.
echo ## Conteudo
echo - BEPS Dez/2025 + Jan/2026
echo - Analise Consolidada BEPS/Gov.br v2
echo - Painel 5.000 Servicos Gov.br
echo - Dossie CPMI v2.0
echo - TCU Acordao 2.099/2025
echo - Fila INSS Nov/2025
echo - IVCAD/ODS Framework
echo - Respostas LAI ^(quando chegarem^)
echo.
echo ## Tags: #dados #beps #evidencia #proof-first #lai
) > "04-DADOS\README.md"

(
echo # 05 - Estrategia / Mercado / Crescimento
echo.
echo Documentos de estrategia, valuation e growth.
echo.
echo ## Conteudo
echo - Growth AI
echo - Valuation v2.0 ^(CONFIDENCIAL^)
echo - Ecossistema INSS Digital
echo - Tese Expansao 13K Servicos
echo - Nichos de Ouro Previdenciario
echo - Vertical Premium Acidentario/Especial
echo - Gov.br Open APIs Roadmap
echo.
echo ## Tags: #estrategia #growth #valuation #mercado
) > "05-ESTRATEGIA\README.md"

(
echo # 06 - Operacoes / Execucao
echo.
echo Frameworks, playbooks e protocolos operacionais.
echo.
echo ## Conteudo
echo - 75 Frameworks Estrategicos + Checkin Jornada
echo - Framework Performance/Mentalidade CEO
echo - Correcao Narrativa 48h ^(DEFINITIVA^)
echo - Playbooks operacionais
echo - Protocolos de equipe
echo.
echo ## Tags: #operacoes #frameworks #playbook #protocolo
) > "06-OPERACOES\README.md"

(
echo # 07 - Pesquisas Externas
echo.
echo Outputs de pesquisa de outras ferramentas.
echo.
echo ## ATENCAO
echo Gemini fabrica dados em ~5 de 7 tabelas.
echo SEMPRE cross-referenciar contra fontes do projeto.
echo.
echo ## Conteudo
echo - Pesquisas Perplexity
echo - Deep Research Gemini
echo - Cenarios Manus AI
echo - Sinteses NotebookLM
echo.
echo ## Tags: #pesquisa #gemini #perplexity #manus
) > "07-PESQUISAS\README.md"

(
echo # 08 - Artefatos Visuais
echo.
echo Componentes interativos e visuais.
echo.
echo ## Conteudo
echo - Constelacao Verticais ^(HTML^)
echo - Mapa Mental Interativo ^(HTML^)
echo - Estrategia Rural Preview ^(JSX^)
echo - Diagramas e fluxogramas
echo.
echo ## Tags: #artefato #visual #html #jsx
) > "08-ARTEFATOS\README.md"

echo  READMEs criados em cada pasta!
echo.
echo ========================================
echo  Vault estruturado com sucesso!
echo  Abra o Obsidian e pressione Ctrl+G
echo  para ver o grafico atualizado.
echo ========================================
echo.
pause
