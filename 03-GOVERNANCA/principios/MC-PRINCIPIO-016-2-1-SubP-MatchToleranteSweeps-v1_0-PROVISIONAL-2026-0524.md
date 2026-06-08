---
tipo: SUB-SUB-PRINCIPIO-MC
codigo: MC-PRINCIPIO-016-2-1-SubP-MatchToleranteSweeps
titulo: Sub-Sub-Princípio #16.2.1 PROVISIONAL · Match Tolerante a Espaços/Underscores/Pontos em Sweeps Caminho B
versao: 1.0 PROVISIONAL (cunhagem formal · sai de candidato Beto)
status: PROVISIONAL (gate: 1 ocorrência empírica documentada + cunhagem cross-cérebro)
data_cunhagem: 2026-05-24 ~ BRT (fim de sessão · MB-060)
principio_pai: "#16.2 ATIVO · Hook Mecânico Path-Drive"
principio_avo: "#16 ATIVO · Iniciativa Estratégica Cofounder 20x"
emissor: Cofounder Claude Opus 4.7 Cérebro 3.1
cunhado_originalmente_por: Code DELL Beto (espontâneo · em log T-58-2)
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
destino_canonico: 03-GOVERNANCA\principios\
---

# Sub-Sub-Princípio #16.2.1 PROVISIONAL · Match Tolerante em Sweeps

## §1 · Enunciado

Sweeps de Caminho B (Princípio #16.2 ATIVO · Hook Mecânico Path-Drive) devem usar **regex tolerante a espaços/underscores/pontos no nome de arquivo** ao invés de match literal de string. Razão: nomes de arquivo no mundo real divergem da especificação canônica por convenções de OS (Windows preserva espaços) · convenções de origem (Sistema de Projeto MC produz com espaços + ponto) · convenções de migração (Vault padroniza underscores).

## §2 · Definição operacional

**Match canônico tolerante** = padrão regex que matcha:

- `MC_Estudos_LOGO_v2_1.html` (underscores · canônico Vault)
- `MC Estudos LOGO v2.1.html` (espaços + ponto · output Sistema de Projeto)
- `MC-Estudos-LOGO-v2_1.html` (hifens · variante Markdown)
- `MC.Estudos.LOGO.v2.1.html` (pontos · variante Unix legacy)

**Regex sugerido:** `^MC[\s_.\-]Estudos[\s_.\-]LOGO[\s_.\-]v?2[._]1\.html$` (case-insensitive · tolerância de separadores).

**Implementação Code DELL (PowerShell):**

```powershell
Get-ChildItem -Path "$DropZone" -File |
  Where-Object { $_.Name -match '(?i)^MC[\s_.\-]+Estudos[\s_.\-]+LOGO[\s_.\-]+v?2[._]1\.html$' }
```

## §3 · Quando aplicar

- Sweeps no `_INBOX-COFOUNDER\` ou Pasta de Trabalho Sister
- Sweeps recursivos `Documentação\` em qualquer subpasta
- Localização de artefatos cofounder pós-upload founder
- Hash-verify de arquivos esperados em MB

## §4 · Quando NÃO aplicar

- Operações em `03-GOVERNANCA\` (canônico Vault · nomes já normalizados)
- Operações em `99-ARQUIVO-Legado\` (preservar nomes exatos para audit trail)
- Operações que esperam **arquivo único exato** (Princípio #1b · validar antes de afirmar funcional)

## §5 · Sustentação empírica

**Caso fundador:** MB-058 T-58-2 falhou no 1º turno porque sweep usou match literal `MC_Estudos_LOGO_v2_1.html` enquanto arquivo real era `MC Estudos LOGO v2.1.html` (espaços + ponto). Beto detectou em sweep manual + cunhou espontaneamente:

> *"Sweeps de Caminho B (#16.2 ATIVO) devem usar regex tolerante a espaços/underscores/pontos no nome — candidato a refinamento v1.2 do sub-princípio em futuro turno cofounder."* — Code DELL Beto · log T-58-2 · 24/05/2026 ~20h

Operação corretiva: MB-058-T2-CLOSE turno único · Beto localizou via match tolerante · hash `BF9DBE21B7AC335E...` confirmado.

## §6 · Vedações

- **NÃO fazer match super-permissivo** (`.*Estudos.*`) · risco de matchar arquivo não-canônico
- **NÃO ignorar case-sensitivity** quando padrão tem semântica específica (ex: `MC-ADR-` vs `mc-adr-`)
- **NÃO matchar múltiplos arquivos sem reportar** · ambiguidade requer escalation cofounder

## §7 · Cunhagem cross-cérebro · Beto como Cofounder Operacional

Este sub-sub-princípio é **1ª cunhagem formal de princípio originada em Code DELL Beto**. Não foi cofounder C3.1 que detectou · não foi Sister · não foi Anciã · foi Beto durante operação de fechamento de tarefa.

**Vínculo com Princípio #54 PROVISIONAL · Code DELL como Cofounder Operacional · Não Apenas Executor** (cunhado mesma sessão).

## §8 · Vínculos canônicos

- Princípio #16 ATIVO · Iniciativa cofounder 20x (avô)
- Princípio #16.2 ATIVO · Hook Mecânico Path-Drive (pai)
- Princípio #54 PROVISIONAL · Code DELL como Cofounder Operacional (irmão · cunhado mesma sessão)
- Princípio #16.3 PROVISIONAL · Cross-Cérebro (autoriza autonomia idempotente Beto)
- MC-CONVENCAO-PastaPostalCofounder-v1_0 (drop zone primária)

## §9 · Gate para ATIVO

- **3ª aplicação empírica documentada** (próximos sweeps usando regex tolerante)
- **OU** parecer Dra. Juliana 19/05 valida padrão operacional

## §10 · Fechamento

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Confidência:** É eu, tu, a Sister 3.2, a Anciã, o Beto, o Sistema de Projeto MC e a Sister 3.2 DESIGN. ∞

---

**MC-PRINCIPIO-016-2-1-SubP-MatchToleranteSweeps v1.0 PROVISIONAL · 24 de maio de 2026 ~ BRT**
1ª cunhagem formal originada em Code DELL Beto
Sub-sub-princípio de #16.2 ATIVO · #16 ATIVO

**∞**
