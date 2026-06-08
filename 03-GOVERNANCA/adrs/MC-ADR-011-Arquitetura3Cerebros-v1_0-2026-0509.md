# MC-ADR-011 — Arquitetura 3 Cérebros
**Código:** MC-ADR-011 | **Versão:** 1.0 | **Data:** 2026-05-09 | **Status:** IMPLEMENTADO
**Autor:** Alessandro de Souza Neves × Claude Opus 4.7

## Problema
Alessandro operava como ponte manual entre 3 espaços desconectados, causando sobrecarga cognitiva e conhecimento evaporando entre sessões.

## Decisão

| Zona | Path | Papel | Permissão Claude Code |
|---|---|---|---|
| 🧠 Cérebro 1 | `G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\` | Laboratório vivo | Leitura livre + escrita livre |
| 🏛️ Cérebro 2 | `G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\` | Memória canônica | Leitura livre + escrita com GATE |
| 🤝 Espaço 3 | Claude.ai Project Knowledge | Mesa de julgamento | Espelho semântico do Vault |

## Fluxo
Documentação/ → [GATE Alessandro] → Vault/ → Project Knowledge → Claude.ai

Claude Code lê Documentação/ livremente. Nada migra para o Vault sem gate explícito ("aprovado para vault").

**Regra operacional — fluxo bidirecional:**
- Claude Code lê `Documentação/` livremente como referencial vivo
- Nada migra para o Vault sem gate explícito ("aprovado para vault")
- Todo doc selado no Vault pode ter cópia espelho em `Documentação/` para consulta e evolução (comando: "espelhar em Documentação/")
- Alessandro nunca edita o Vault diretamente — só o Claude Code escreve lá
- Fonte de verdade: sempre o Vault. Documentação/ = mesa de trabalho

## Implementações realizadas (09/05/2026)

| Ação | Status |
|---|---|
| Seção ADR-011 adicionada ao CLAUDE.md v2.1 | ✅ |
| hot.md criado na raiz do vault | ✅ |
| Vault movido para path unificado 0 0 Gestão Software\OBSIDIAN\ | ✅ |
| 2 atalhos .bat criados no Desktop (Beto) | ✅ |

## hot.md — Protocolo
Arquivo hot.md na raiz do vault. Máx 500 palavras. Atualizar ao final de cada sessão. Nunca versionar. Sempre sobrescrever. Elimina o "me atualiza".

## Ritual de migração
1. Claude.ai propõe o que em Documentação/ merece ir pro Vault
2. Alessandro aprova/rejeita ("vai" / "não")
3. Claude Code executa

## O que NÃO muda
- Vault = fonte de verdade canônica
- CLAUDE.md < 200 linhas (meta)
- Project Knowledge = espelho do Vault, não de Documentação/

*ADR-011 | 2026-05-09 | D > C > V | Provérbios 31:8*
---

## Documentos relacionados
- [[_MC-MANIFESTO-NovaOrdem-v1.0-2026-0427 Identidade Posicionamento e Valuation MC]]
- [[MC-INSTRUCOES-PROJETO-v6_0_2-2026-0509]]
- [[MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509]]
- [[_MC-RouterEthics_11_v1_1-2026-0505-CLevel]]
- [[MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507]]
- [[MC-ADR-009a-Custodia_Credenciais_GovBr-v2_0-2026-0425]]
- [[MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417]]
- [[MC-ADR-010-E3-Intelligence-Layer-v1_0-2026-0428]]
- [[MC-ADR-011-Arquitetura3Cerebros-v1_0-2026-0509]]
- [[MC-ADR-013-ConvencoesOperacionais-IVCAD-MC-v1_0-2026-0507]]
- [[MC-PARECER-CONSOLIDADO-v3_4-2026-0427]]
- [[MC-PAUTA-Juliana-19Mai-v2_0-2026-0509]]
- [[MC-GOVBR-ArvoreDecisao-APIHumana-v1_1-2026-0509]]
- [[MC-ESTUDO-Arquitetura-Custo-Sistemico-v1_0-2026-0427]]