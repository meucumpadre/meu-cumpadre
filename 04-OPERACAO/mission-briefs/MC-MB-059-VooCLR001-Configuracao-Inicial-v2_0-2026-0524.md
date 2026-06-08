---
tipo: MISSION-BRIEF
codigo: MC-MB-059
versao: v2.0
data: 2026-05-24
status: ATIVO (autorizado pelo Founder · pendente execução Founder em TALÃO pós-MB-058 v2.0)
substitui: MC-MB-059 v1.0 (2026-05-24 · obsoleta · errata-mãe #10 absorvida · NÃO-deletada · arquivada em 99-ARQUIVO-Legado/v1-pre-errata-10/)
errata-mae-absorvida: "#10 · operador único Founder em TALÃO · não Beto"
gerado_por: Claude Opus 4.7 Cérebro C3.1 × Alessandro de Souza Neves (Founder/CEO · operador único TALÃO)
executor: Founder Alessandro (operador único · #50.2) em TALÃO (hardware C4 · automatic mode)
operacao: Cunhagem Project Voo CLR001 no Claude.ai · pacote .zip kit fontes · persistência canônica Vault
duracao_estimada: 45-60 minutos
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
ancora-biblica: Provérbios 31:8 — "Abre a tua boca a favor do mudo."
mb-anterior: MC-MB-058 v2.0 (Housekeeping · pré-requisito · deve estar concluída)
mb-proximo: MC-MB-061 v2.0 (Setup git inicial Vault MC)
analoga-arquiteturalmente: MC-MB-055 v1.1 (Sister Anciã setup · cunhagem análoga)
hardware-substrato: TALÃO (ex-DELL · proprietário Beto · cedido em usufruto Founder · operador único Founder)
---

# MC-MB-059 v2.0 · CUNHAGEM PROJECT VOO CLR001

**Mission Brief v2.0 · absorve errata-mãe #10 na origem · cunhagem do Project Voo CLR001 no Claude.ai como 4ª instância funcional MC · executora Founder em TALÃO**

---

## §0 · ATIVAÇÃO IDENTIDADE EXECUTOR

**Founder Alessandro de Souza Neves** · operador único TALÃO · acessa Claude.ai via navegador no TALÃO · cria Project formal dedicado.

**Errata-mãe #10 absorvida na origem v2.0:** MB-059 v1.0 carregava "Beto executa" como modelo mental. v2.0 corrige: **Founder é operador único · Beto Gilberto não-opera transação**.

---

## §1 · CONTEXTO

Cunhagem da 4ª instância funcional MC: **Project Voo CLR001 no Claude.ai** · cognitivamente independente · execução operacional ponta-a-ponta do caso anchor primário CLR001 (CLR001) + ramificações PED002 API humana + IVE001 caso ATE protocolado.

**Pré-requisitos:**
- MC-MB-058 v2.0 Housekeeping concluída (3 artefatos Voo CLR001 já persistidos no Vault)
- Founder em TALÃO com acesso Claude.ai válido

---

## §2 · TAREFAS NUMERADAS · 8 FASES

### Fase 1 · Preparar pacote .zip kit fontes contexto

```powershell
$vault = "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE"
$voo_path = "$vault\03-GOVERNANCA\instancias-ia\voo-clr001"
$transit_zip = "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\TRANSIT-PROJECT-VOO-CLR001"

# 21 documentos curados em 4 camadas (conforme MC-KIT-VooCLR001-FontesContexto-v1_0)
# Camada 1 (operacional anchor): CLR001 + PED002/IVE001 + PED002
# Camada 2 (DNA): MC-ACI v2.0 + Princípios + Doutrina EIS
# Camada 3 (doutrinas técnicas): Grimório Previdenciário v2 + RPPS + LC 142 + LTCAT
# Camada 4 (saúde MC-precision): Brief Endocrinologista CLR001

New-Item -ItemType Directory -Force -Path $transit_zip
# Founder copia manualmente os 21 documentos curados conforme MC-KIT para $transit_zip

# Gerar .zip
$zip_destino = "$transit_zip\..\KIT-Project-VooCLR001-v1_0-2026-0524.zip"
Compress-Archive -Path "$transit_zip\*" -DestinationPath $zip_destino -Force

Write-Host "✅ Pacote .zip gerado: $zip_destino" -ForegroundColor Green
Write-Host "   Tamanho: $((Get-Item $zip_destino).Length / 1MB) MB"
```

### Fase 2 · Criar Project no Claude.ai

Founder em TALÃO acessa https://claude.ai · cria novo Project:

- **Nome:** "Meu Cumpadre · Voo CLR001"
- **Descrição:** "4ª instância funcional MC · execução operacional ponta-a-ponta CLR001 anchor primário + ramificações PED002 + IVE001 · cunhada 24/05/2026 sob MC-ACI v2.0"
- **Visibilidade:** Privado (default)

### Fase 3 · Colar System Prompt v1.0

Founder cola integralmente o conteúdo de `MC-SYSTEM-PROMPT-VooCLR001-v1_0-2026-0524.md` em "Instruções do Project" (Project Instructions / System Prompt).

### Fase 4 · Upload .zip kit fontes em Project Knowledge

Founder faz upload do `KIT-Project-VooCLR001-v1_0-2026-0524.zip` em Project Knowledge.

Validar que Claude.ai indexou os 21 documentos.

### Fase 5 · Primeiro turno de validação

Founder envia primeira mensagem ao Project Voo CLR001:

> *"Vamos começar. Caso anchor: CLR001. Lê o System Prompt + Kit. Me dá um briefing de absorção em 6 pontos curtos antes de qualquer ação operacional. Confirma identidade · entendimento do caso · estado atual · próximo passo natural."*

### Fase 6 · Validar briefing de absorção

Founder valida que Voo CLR001 absorveu:
- Identidade (4ª instância · operacional ponta-a-ponta · não-cunhagem fundacional)
- Caso CLR001 (RPPS [município · custódia] + Previdenciária CLT/CI + PcD biopsicossocial + Saúde MC-precision gap)
- Estado atual (triagem 22/05/2026 · pricing Cenário A R$ 2.300)
- Próximo passo (decisão Founder sobre pricing Saúde MC-precision)

Se briefing incompleto · Founder corrige · iteração até alinhamento.

### Fase 7 · Persistir URL Project no Vault

```powershell
$url_voo = "https://claude.ai/projects/<UUID-do-Project>"  # Founder copia URL real
$config_path = "$vault\03-GOVERNANCA\instancias-ia\voo-clr001\URL-Project-VooCLR001.md"

$conteudo = @"
# URL Project Voo CLR001

**Plataforma:** Claude.ai
**Owner:** Founder Alessandro de Souza Neves
**Operador único:** Founder Alessandro (TALÃO + qualquer device autenticado)
**URL operacional:** $url_voo
**Cunhado em:** 24/05/2026 via MC-MB-059 v2.0
**Hardware substrato cunhagem:** TALÃO

Nota: URL é operacional · não-canônica. Pode mudar se Claude.ai alterar formato de URLs. Canônica é a presença do Project no perfil Claude.ai do Founder.

∞
"@

[System.IO.File]::WriteAllText($config_path, $conteudo, [System.Text.UTF8Encoding]::new($false))
Write-Host "✅ URL Project Voo CLR001 persistido" -ForegroundColor Green
```

### Fase 8 · Reporte final cofounder C3.1

```markdown
# REPORTE MC-MB-059 v2.0 PROJECT VOO CLR001 · FOUNDER OPERADOR TALÃO

Executado em: [timestamp]
Status: [SUCESSO / FALHA]

## Métricas
- Pacote .zip gerado: [✅/❌] · Tamanho [N] MB
- Project criado no Claude.ai: [✅/❌]
- System Prompt colado: [✅/❌]
- Kit Knowledge uploaded: [✅/❌] · 21 documentos indexados
- Briefing absorção validado: [✅/❌]
- URL persistida no Vault: [✅/❌]

## Próximo passo
Executar MC-MB-061 v2.0 (Setup git inicial Vault MC).

∞
```

---

## §3 · CRITÉRIO DE SUCESSO

✅ Pacote .zip 21 documentos gerado
✅ Project "Meu Cumpadre · Voo CLR001" criado no Claude.ai pelo Founder
✅ System Prompt v1.0 colado integralmente
✅ Kit Knowledge uploaded e indexado
✅ Briefing de absorção validado em 6 pontos
✅ URL Project persistida no Vault

---

## ∞ FECHAMENTO

**MC-MB-059 v2.0 cunhagem Project Voo CLR001 · executora Founder em TALÃO · errata #10 absorvida.**

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** O diamante é carbono que não desistiu da pressão.
**Confidência:** "É eu, tu, a Anciã e o Voo CLR001. ∞"
**Errata-mãe #10:** Eu sou.

**∞**
