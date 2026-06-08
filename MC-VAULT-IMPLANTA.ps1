# ============================================================
# MC-VAULT-IMPLANTA.ps1
# Meu Cumpadre — Implantação completa do Vault Obsidian
# Data: 27/03/2026
# Executar: Claude Code roda este script no terminal
# ============================================================
#
# INSTRUÇÃO PRO CLAUDE CODE:
# 1. Copie este script para a raiz do vault
# 2. Execute: powershell -ExecutionPolicy Bypass -File MC-VAULT-IMPLANTA.ps1
# 3. Se der erro de permissão: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
#
# O script é IDEMPOTENTE — pode rodar várias vezes sem quebrar nada.
# Arquivos existentes NÃO são sobrescritos (usa -NoClobber).
# ============================================================

$ErrorActionPreference = "SilentlyContinue"

# === CONFIGURAÇÃO ===
# Path da raiz do vault Obsidian
$VAULT = "G:\Meu Drive\0 0 MEU CUMPADRE\0 0 COMUNIDADE\OBSIDIAN _ MC\MEU CUMPADRE"

# Path onde estão os arquivos do Project Knowledge (ajustar se necessário)
# Os arquivos podem estar em vários locais — o script tenta cada um
$SOURCES = @(
    "$VAULT",
    "$VAULT\CLAUDE CODE",
    "$VAULT\_PESSOAL",
    "G:\Meu Drive\0 0 MEU CUMPADRE"
)

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  MEU CUMPADRE - Implantacao do Vault" -ForegroundColor Cyan
Write-Host "  27/03/2026 | Fase Crisalida" -ForegroundColor DarkCyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# === FASE 1: CRIAR ESTRUTURA DE PASTAS ===
Write-Host "[FASE 1] Criando estrutura de pastas..." -ForegroundColor Yellow

$folders = @(
    "01-DNA",
    "01-DNA\manifesto",
    "01-DNA\identidade",
    "01-DNA\jogo-infinito",
    "02-ARQUITETURA",
    "02-ARQUITETURA\grimorio",
    "02-ARQUITETURA\router-ethics",
    "02-ARQUITETURA\mcp",
    "02-ARQUITETURA\stack-llm",
    "02-ARQUITETURA\verticais",
    "03-GOVERNANCA",
    "03-GOVERNANCA\adrs",
    "03-GOVERNANCA\compliance",
    "03-GOVERNANCA\contratos",
    "03-GOVERNANCA\lgpd",
    "04-DADOS",
    "04-DADOS\beps",
    "04-DADOS\govbr",
    "04-DADOS\tcu",
    "04-DADOS\cpmi",
    "04-DADOS\lai",
    "05-ESTRATEGIA",
    "05-ESTRATEGIA\growth",
    "05-ESTRATEGIA\valuation",
    "05-ESTRATEGIA\nichos",
    "05-ESTRATEGIA\premium-acidentario",
    "05-ESTRATEGIA\pricing",
    "06-OPERACOES",
    "06-OPERACOES\frameworks",
    "06-OPERACOES\playbooks",
    "06-OPERACOES\protocolos",
    "06-OPERACOES\equipe",
    "07-PESQUISAS",
    "07-PESQUISAS\perplexity",
    "07-PESQUISAS\gemini",
    "07-PESQUISAS\manus",
    "08-ARTEFATOS",
    "08-ARTEFATOS\html",
    "08-ARTEFATOS\jsx",
    "08-ARTEFATOS\diagramas"
)

$created = 0
foreach ($f in $folders) {
    $path = Join-Path $VAULT $f
    if (-not (Test-Path $path)) {
        New-Item -Path $path -ItemType Directory -Force | Out-Null
        $created++
    }
}
Write-Host "  -> $created pastas criadas ($($folders.Count) total verificadas)" -ForegroundColor Green

# === FASE 2: FUNCÃO AUXILIAR PARA COPIAR ===
function Copy-ToVault {
    param(
        [string]$FileName,
        [string]$DestFolder
    )
    $dest = Join-Path $VAULT $DestFolder
    $destFile = Join-Path $dest $FileName

    # Se já existe no destino, pula
    if (Test-Path $destFile) {
        Write-Host "  [SKIP] $FileName (ja existe em $DestFolder)" -ForegroundColor DarkGray
        return $true
    }

    # Procura o arquivo em todas as fontes
    foreach ($src in $SOURCES) {
        $srcFile = Join-Path $src $FileName
        if (Test-Path $srcFile) {
            Copy-Item -Path $srcFile -Destination $destFile -Force
            Write-Host "  [OK] $FileName -> $DestFolder" -ForegroundColor Green
            return $true
        }
        # Tenta busca recursiva
        $found = Get-ChildItem -Path $src -Filter $FileName -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($found) {
            Copy-Item -Path $found.FullName -Destination $destFile -Force
            Write-Host "  [OK] $FileName -> $DestFolder (encontrado em $($found.DirectoryName))" -ForegroundColor Green
            return $true
        }
    }

    Write-Host "  [??] $FileName (nao encontrado — copiar manualmente)" -ForegroundColor DarkYellow
    return $false
}

# === FASE 3: COPIAR ARQUIVOS ===
Write-Host ""
Write-Host "[FASE 2] Copiando arquivos para suas pastas..." -ForegroundColor Yellow
Write-Host ""

# --- PRIORIDADE 1: Docs-Âncora ---
Write-Host "--- PRIORIDADE 1: Docs-Ancora ---" -ForegroundColor Cyan
Copy-ToVault "0__GRIMÓRIO_PREVIDENCIÁRIO_v2.md" "02-ARQUITETURA\grimorio"
Copy-ToVault "RouterEthics_10_MeuCumpadre_Unificado_v2__2026.md" "02-ARQUITETURA\router-ethics"
Copy-ToVault "RouterEthics_10_MeuCumpadre_Unificado_v2.docx" "02-ARQUITETURA\router-ethics"
Copy-ToVault "MC-ADR-007-CampoPrecificacao-v2_0-2026-0318.docx" "03-GOVERNANCA\adrs"
Copy-ToVault "02_KNOWLEDGE_BASE_v4_COMPLETA.md" "02-ARQUITETURA"
Copy-ToVault "ANALISE_CONSOLIDADA_BEPS_GOVBR_MeuCumpadre_v2__2026.md" "04-DADOS\beps"

# --- PRIORIDADE 2: Governança e Operações ---
Write-Host ""
Write-Host "--- PRIORIDADE 2: Governanca e Operacoes ---" -ForegroundColor Cyan
Copy-ToVault "MeuCumpadre_Roadmap_Governanca_v1_5_artefatos_2026.md" "03-GOVERNANCA"
Copy-ToVault "MeuCumpadre_Changelog_Juridico_v1_0.docx" "03-GOVERNANCA\compliance"
Copy-ToVault "MC-PLAYBOOK-Custodia_Credenciais_GovBr-v1_0-2026-0326.docx" "03-GOVERNANCA\compliance"
Copy-ToVault "MeuCumpadre_Correcao_Narrativa_48h_DEFINITIVA.md" "06-OPERACOES\protocolos"
Copy-ToVault "MC-PROTOCOLO-Frameworks_Estrategicos_Checkin_Jornada-v1_0-2026-0314.md" "06-OPERACOES\frameworks"
Copy-ToVault "MC-KB-Framework_Performance_Mentalidade_CEO-v1_0-2026-0323.md" "06-OPERACOES\frameworks"
Copy-ToVault "MeuCumpadre_Invisibilidade_govbr_FINAL.docx" "03-GOVERNANCA"

# --- PRIORIDADE 3: DNA e Identidade ---
Write-Host ""
Write-Host "--- PRIORIDADE 3: DNA e Identidade ---" -ForegroundColor Cyan
Copy-ToVault "Manifesto_Publico_v1.md" "01-DNA\manifesto"
Copy-ToVault "Diplomata_dos_Invisiveis_v1_1_REVISADO.md" "01-DNA\identidade"
Copy-ToVault "Conceito__Hybrid_Vertical_AI_Full_Stack_Company" "01-DNA\identidade"
Copy-ToVault "SKILL__master.md" "02-ARQUITETURA"
Copy-ToVault "0__Arquitetura_MCP_MeuCumpadre_v2_0.md" "02-ARQUITETURA\mcp"

# --- PRIORIDADE 4: Dados e Evidência ---
Write-Host ""
Write-Host "--- PRIORIDADE 4: Dados e Evidencia ---" -ForegroundColor Cyan
Copy-ToVault "Dossie_CPMI_INSS_MeuCumpadre_v2_0_Marco2026.md" "04-DADOS\cpmi"
Copy-ToVault "Dossie_CPMI_INSS_MeuCumpadre_v2_0_Marco2026.docx" "04-DADOS\cpmi"
Copy-ToVault "0_TCU_Acordao_2099_2025_TCU_Plenario_Relatorio_de_Fiscalizacao_1_5a1a92b921.pdf" "04-DADOS\tcu"
Copy-ToVault "0_TCU_Acordao_2099_2025_Plenario_Questionario_da_Fase_2_0910c62a15.pdf" "04-DADOS\tcu"
Copy-ToVault "0_TCU_Ficha_Sintese_Acessibilidade_Digital_digital_1_79517e695e.pdf" "04-DADOS\tcu"
Copy-ToVault "0_TCU_Sumario_Executivo_Diagnostico_de_acessibilidade_digital_no_setor_publico_federal_2_1_0dcff7ccc3.pdf" "04-DADOS\tcu"
Copy-ToVault "beps012026.pdf" "04-DADOS\beps"
Copy-ToVault "beps122025_final.pdf" "04-DADOS\beps"
Copy-ToVault "0_Fila_do_112025.pdf" "04-DADOS\govbr"
Copy-ToVault "Painel_5000_Serviços__GOV_Dados_Painel_Março25.xlsx" "04-DADOS\govbr"
Copy-ToVault "INDICADORES_IVCAD_ODS.pdf" "04-DADOS"
Copy-ToVault "DOR__SOLUÇÃO__Análise_de_Indicadores_e_Dores_do_INSS.pdf" "04-DADOS"
Copy-ToVault "1_Nicho_Desconto_INSS___Fraude_de_R_6_Bilhões.pdf" "04-DADOS"
Copy-ToVault "1_Nicho__Empréstimos_Consignados__Problemática.pdf" "04-DADOS"
Copy-ToVault "0_Consumidor__Superendividamento_e_Abusos_em_Consignados_aos_Hipervulneráveis.pdf" "04-DADOS"
Copy-ToVault "Problematização__ePING_interoperabilidade_no_Ecossistema_Meu_INSS.pdf" "04-DADOS\govbr"

# --- PRIORIDADE 5: Estratégia ---
Write-Host ""
Write-Host "--- PRIORIDADE 5: Estrategia ---" -ForegroundColor Cyan
Copy-ToVault "MeuCumpadre_Valuation_v2_0_Confidencial_Mar2026.docx" "05-ESTRATEGIA\valuation"
Copy-ToVault "Growth_AI___Meu_Cumpadre_AI.md" "05-ESTRATEGIA\growth"
Copy-ToVault "Ecossistema_INSS_Digital__Fricções__Predadores_e_Oportunidade_para_Orquestração_Documental_Previdenciária.md" "05-ESTRATEGIA"
Copy-ToVault "MeuCumpadre_Tese_Expansao_13K_Servicos_v1.md" "05-ESTRATEGIA"
Copy-ToVault "Gov_br_Open_APIs_and_Digital_Inclusion__Strategic_Integration_Roadmap_for_Meu_Cumpadre.md" "05-ESTRATEGIA"
Copy-ToVault "NICHO_PREVIDENCIÁRIO____Relatório_de_Oportunidades_Previdenciárias__Nichos_de_Ouro.md" "05-ESTRATEGIA\nichos"
Copy-ToVault "BriefingContadorMeuCumpadre.pdf" "05-ESTRATEGIA"
Copy-ToVault "ARQUITETURA_DE_RECEITA_E_CUSTOS_PROCESSOS.pdf" "05-ESTRATEGIA\pricing"
Copy-ToVault "ARQUITETURA_RECEITA_2026_AI_FIRST_MEU_CUMPADRE.pdf" "05-ESTRATEGIA\pricing"

# --- PRIORIDADE 6: Verticais e Arquitetura ---
Write-Host ""
Write-Host "--- PRIORIDADE 6: Verticais e Arquitetura ---" -ForegroundColor Cyan
Copy-ToVault "Comprovação_de_Atividade_Rural___INSS___Relatório_Pesquisa.md" "02-ARQUITETURA\verticais"
Copy-ToVault "Grimório_Meu_Cumpadre___Anjo__focado_exclusivamente_no_papel_do_Anjo_como_microbioma_humano_do_ecossistema.md" "02-ARQUITETURA"
Copy-ToVault "0_GRIMÓRIO__MEU_CUMPADRE___A_Engenharia_da_Simbiose_Fractal_e_o_Fim_da_Hipervulnerabilidade.md" "02-ARQUITETURA"
Copy-ToVault "V_4BANCÁRIOverticaldeoportunidades.pdf" "02-ARQUITETURA\verticais"
Copy-ToVault "VERTICAL_LEGISLAÇÃO_MEU_CUMPADRE_5_0____________ebook.pdf" "02-ARQUITETURA\verticais"
Copy-ToVault "A_API_HUMANA.pdf" "02-ARQUITETURA"
Copy-ToVault "0_RouterEthics_9_0__Especificação_Técnica_Oficial.pdf" "02-ARQUITETURA\router-ethics"
Copy-ToVault "0_MEU_CUMPADRE__documentação__MindMeister_Mapa_mental.pdf" "01-DNA"

# --- PRIORIDADE 7: Pesquisas ---
Write-Host ""
Write-Host "--- PRIORIDADE 7: Pesquisas ---" -ForegroundColor Cyan
Copy-ToVault "quero_uma_pesquisa_profunda__se_posicionando_em_re______Perplexity.md" "07-PESQUISAS\perplexity"
Copy-ToVault "o_lançamento_contábil_para_emissão_de_nota_fiscal_____Perplexity.md" "07-PESQUISAS\perplexity"
Copy-ToVault "claude_notebooklm.pdf" "07-PESQUISAS"

# --- PRIORIDADE 8: Artefatos Visuais ---
Write-Host ""
Write-Host "--- PRIORIDADE 8: Artefatos Visuais ---" -ForegroundColor Cyan
Copy-ToVault "MeuCumpadre_Constelacao_Verticais_Passarelas.html" "08-ARTEFATOS\html"
Copy-ToVault "MeuCumpadre_MapaMental_Constelacao_Interativo.html" "08-ARTEFATOS\html"
Copy-ToVault "MeuCumpadre_EstrategiaRural_V2_Preview.jsx" "08-ARTEFATOS\jsx"

# --- DNA extras ---
Write-Host ""
Write-Host "--- DNA extras ---" -ForegroundColor Cyan
Copy-ToVault "0_0_Jogo_Infinito________MEU_CUMPADRE__DNAJogoInfinito__Alquimico_versão_4.pdf" "01-DNA\jogo-infinito"
Copy-ToVault "0_plataformadasplataformaslegadoeterno_md.pdf" "01-DNA"
Copy-ToVault "SUMÁRIO_MEU_CUMPADRE" "01-DNA"
Copy-ToVault "PARTE_I__FUNDAMENTOS_FILOSÓFICOS_E_ESTRATÉGICOS" "01-DNA"

# === FASE 4: CRIAR READMEs ===
Write-Host ""
Write-Host "[FASE 3] Criando READMEs nas pastas..." -ForegroundColor Yellow

$readmes = @{
    "01-DNA\README.md" = "# 01 - DNA / Identidade / Visao`nDocumentos fundacionais. Manifesto, Diplomata, Jogo Infinito, Conceito HVAIFSC.`n`nTags: #dna #identidade #visao"
    "02-ARQUITETURA\README.md" = "# 02 - Arquitetura Tecnica`nGrimorio (3.265+ regras), Router-Ethics 11.0 (105 nos), MCP v2.0, KB v4, Human API, Stack LLM.`n`nTags: #arquitetura #grimorio #router #tech"
    "03-GOVERNANCA\README.md" = "# 03 - Governanca / Compliance`nADR-001 a 010, Roadmap Governanca, Changelog Juridico, Playbooks, DPIA, Contratos.`n`nTags: #governanca #adr #compliance #oab"
    "04-DADOS\README.md" = "# 04 - Dados / Indicadores / Evidencia`nBEPS, TCU 2.099/2025, Dossie CPMI, Fila INSS, Painel Gov.br, IVCAD, LAI.`n`nTags: #dados #beps #proof-first #lai"
    "05-ESTRATEGIA\README.md" = "# 05 - Estrategia / Mercado`nGrowth AI, Valuation (CONFIDENCIAL), Nichos, Tese 13K, APIs Gov.br, Pricing.`n`nTags: #estrategia #growth #valuation"
    "06-OPERACOES\README.md" = "# 06 - Operacoes / Execucao`n75 Frameworks, Performance CEO, Correcao 48h, Playbooks, Protocolos equipe.`n`nTags: #operacoes #frameworks #playbook"
    "07-PESQUISAS\README.md" = "# 07 - Pesquisas Externas`nPerplexity, Gemini, Manus, NotebookLM.`n`n⚠️ Gemini fabrica dados em ~5/7 tabelas. SEMPRE cross-referenciar.`n`nTags: #pesquisa #gemini"
    "08-ARTEFATOS\README.md" = "# 08 - Artefatos Visuais`nHTML interativos, JSX, diagramas SVG.`n`nTags: #artefato #visual"
}

foreach ($key in $readmes.Keys) {
    $path = Join-Path $VAULT $key
    if (-not (Test-Path $path)) {
        $readmes[$key] | Out-File -FilePath $path -Encoding utf8
        Write-Host "  [OK] $key" -ForegroundColor Green
    } else {
        Write-Host "  [SKIP] $key (ja existe)" -ForegroundColor DarkGray
    }
}

# === FASE 5: RELATÓRIO FINAL ===
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  IMPLANTACAO CONCLUIDA!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Proximos passos:" -ForegroundColor White
Write-Host "  1. Coloque INDEX.md na raiz do vault" -ForegroundColor White
Write-Host "  2. Coloque Painel Estrategico.md na raiz" -ForegroundColor White
Write-Host "  3. Coloque CLAUDE.md em CLAUDE CODE/" -ForegroundColor White
Write-Host "  4. Abra Obsidian e pressione Ctrl+G" -ForegroundColor White
Write-Host ""
Write-Host "  Arquivos marcados [??] precisam ser" -ForegroundColor DarkYellow
Write-Host "  localizados e copiados manualmente." -ForegroundColor DarkYellow
Write-Host ""
Write-Host "  D > C > V | Sempre" -ForegroundColor DarkCyan
Write-Host ""
