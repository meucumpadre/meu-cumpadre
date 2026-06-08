# -*- coding: utf-8 -*-
"""Gera o Vocabulário da Casa MC em HTML -> PDF (via LibreOffice)."""
import html, datetime

DATA = "01/06/2026"

# (Grupo, [(Termo, Significado coloquial)])
GRUPOS = [
("☼  A ALMA DA CASA  (a filosofia, em português de gente)", [
 ("D > C > V", "A régua que decide TUDO: primeiro a Dignidade do cliente, depois o Compliance (seguir a lei), por último a Viabilidade (o que é fácil/barato pra gente). Nessa ordem. Bateu? A dignidade ganha."),
 ("Dignidade", "O valor da pessoa que a gente atende. Vem antes do lucro, antes da pressa. É o chão de tudo."),
 ("Hipervulnerável", "Quem a gente serve: gente largada pra fora do mundo digital — idoso, pobre, doente, com pouco estudo. Não é 'cliente comum', é quem mais precisa."),
 ("Atividade-meio", "O que a gente FAZ: organizar documento e tecnologia. É permitido pra gente. CNAE 6201-5/01."),
 ("Atividade-fim", "O que a gente NÃO faz: advogar. Isso é da Dra. Juliana. A gente não dá conselho jurídico nem promete ganhar causa."),
 ("Firewall OAB", "A linha que a gente NUNCA cruza: não é advogado. Não promete resultado, não dá parecer jurídico, não cobra porcentagem, não 'arruma advogado' pro cliente."),
 ("Proof-First", "Regra de ouro: nada de número inventado. Toda informação tem que ter fonte (lei + prova). Não tem fonte? Escreve '[FONTE PENDENTE]' e não inventa."),
 ("Inversão Cósmica", "Nosso jeito ao contrário do mercado: o preço segue o CUSTO e o trabalho, NUNCA o tamanho do benefício que o cliente vai ganhar."),
 ("Teste Zilda-STF", "Todo texto tem que ser entendido pela Dona Zilda (68 anos) E por um ministro do STF ao mesmo tempo. Simples sem ser raso."),
 ("Capital Morto Desbloqueado (CMD)", "Como a gente mede o valor da empresa — pelo dinheiro/direito que a gente destrava pra quem foi esquecido. NÃO é 'faturamento' (ARR)."),
 ("Jogo infinito", "A gente não joga pra 'vencer e acabar'. Joga pra continuar jogando. 'Lucro é combustível, Causa é destino.'"),
 ("Crisálida (Fase Z3)", "A fase em que a empresa está agora: começando, antes de faturar, com piloto de 150 casos. Casulo virando borboleta."),
 ("Provérbios 31:8", "O versículo-bandeira: 'Abre a tua boca a favor do mudo.' É o porquê de tudo."),
]),

("💰  NOSSOS PRODUTOS E PREÇOS  (os 'fi' e os 'psi')", [
 ("Φ₁  (lê-se 'fi-um')", "Produto principal B2C: a gente monta o dossiê e protocola no INSS. R$ 2.200, em até 4x sem juros. Cobre a jornada inteira, sem cobrar nada a mais."),
 ("Φ₁c  ('fi-um-cê')", "O Φ₁ com preço social, pra quem está no CadÚnico (renda até meio salário). R$ 1.500, em até 5x."),
 ("Φ₀  ('fi-zero')", "Produto da linha CadÚnico: triagem por IA de graça + dossiê mais simples. (Detalhe e success fee do Φ₀ estão em análise com a Dra. Juliana.)"),
 ("Φ₂  ('fi-dois')", "ELIMINADO. Não existe mais como cobrança ao cliente. Se alguém falar em cobrar Φ₂ do cliente, está errado."),
 ("Φ₃  ('fi-três')", "Teto de Dignidade: trava que segura a parcela em no máximo metade da renda-base. Protege o cliente de pagar demais."),
 ("Φ₄  ('fi-quatro')", "Guardião: acompanhamento por R$ 19,90/mês — e R$ 0 pra quem é hipervulnerável (D>C>V). É opcional, depois do caso resolvido (pós-E5)."),
 ("Ψ₁  (lê-se 'psi-um')", "Produto B2B pro advogado: licença pra usar nosso dossiê. 3 faixas: R$600-800 / R$1.200-1.800 / R$2.500-4.000."),
 ("Ψ₂  ('psi-dois')", "Assinatura profissional B2B (sistema): 3 faixas — R$699 / R$1.499 / R$2.499 por mês."),
 ("β_rms  ('beta')", "A renda-base do cliente que a gente usa pra calcular o teto da parcela (Φ₃) e o preço do Guardião (Φ₄). Inclui benefícios que ele já recebe."),
 ("Success fee", "Taxa de êxito (cobrar % do que o cliente ganhou). VEDADO no previdenciário (Φ₁) — é risco com a OAB. No CadÚnico (Φ₀) está em análise com a Juliana."),
 ("COGS / OPEX / BE", "Palavras de custo: COGS = custo de cada caso; OPEX = custo fixo do mês; BE (break-even) = quantos casos pagam a conta. Hoje ~11 casos/mês."),
]),

("🛤️  A JORNADA DO CLIENTE  (do E0 ao E7)", [
 ("E0 — Sinal Fraco", "O primeiro pingo: a gente percebe que existe alguém precisando, antes mesmo dele chegar."),
 ("E1 — Primeiro Contato", "O 'oi' inicial. Aqui já se liga o radar do DIB Urgency pros benefícios de prazo curto."),
 ("E2 — Triagem / Deliberação", "Hora de entender o caso e decidir se e como a gente toca."),
 ("E3 — Coleta Documental", "Juntar todos os documentos do cliente pra montar o dossiê."),
 ("E4 — Protocolo INSS", "Botar o pedido pra dentro do INSS. Fim do sprint interno de 48h."),
 ("E5 — Watchdog", "Cão de guarda: a gente fica de olho no andamento do processo no INSS."),
 ("E6 — Resolução", "O caso se resolve (sai a resposta do INSS)."),
 ("E7 — Soberania", "O cliente 'anda com as próprias pernas' — autônomo, dono da própria história."),
 ("Sprint 48h", "As 48 horas internas NOSSAS, de pegar o caso até protocolar (E0→E4). NÃO é promessa de que o INSS responde em 48h."),
 ("Watchdog", "O acompanhamento (E5): vigiar o processo e avisar o cliente de cada passo."),
 ("DIB Urgency", "Alerta vermelho: casos de benefício com janela de 30 dias do evento médico. Perdeu o prazo, perde o retroativo. Caso assim = atender em 24h."),
]),

("🏛️  PALAVRAS DO INSS  (o jargão que cai no nosso colo)", [
 ("INSS", "Instituto Nacional do Seguro Social — o órgão que paga aposentadoria, auxílio, BPC etc."),
 ("DIB", "Data de Início do Benefício — a partir de quando o benefício vale. Importantíssima pro retroativo."),
 ("DER", "Data de Entrada do Requerimento — o dia que o pedido entrou no INSS."),
 ("DIP", "Data de Início do Pagamento — quando o dinheiro começa a cair."),
 ("DDB", "Data de Despacho do Benefício — quando o INSS bate o martelo e concede."),
 ("NB", "Número do Benefício — o 'RG' do benefício no sistema do INSS."),
 ("CNIS", "Cadastro Nacional de Informações Sociais — o histórico de trabalho e contribuição da pessoa. Dado sensível: stack soberana só."),
 ("CID", "Classificação Internacional de Doenças — o código da doença. Dado de saúde, ultra-sensível (PII Vermelha)."),
 ("Carência", "O número mínimo de contribuições pra ter direito ao benefício."),
 ("Retroativo", "O valor 'de trás' que o INSS deve desde a DIB. Por isso o prazo (DIB Urgency) importa tanto."),
 ("B31", "Espécie de benefício: auxílio por incapacidade temporária (o antigo auxílio-doença). Entra na janela urgente de 30 dias."),
 ("B91", "Espécie: auxílio por incapacidade temporária de origem ACIDENTÁRIA (acidente/doença do trabalho). Também janela de 30 dias."),
 ("B42 / B43", "Outras espécies que a gente marca no protocolo de urgência. ⚠️ Confirme SEMPRE a espécie exata no CNIS/sistema antes de orientar o cliente (Proof-First)."),
 ("BPC / LOAS", "Benefício de Prestação Continuada (Lei da Assistência - LOAS): 1 salário pra idoso pobre ou pessoa com deficiência. Não precisa ter contribuído."),
 ("BF (Bolsa Família)", "Programa de transferência de renda. Aparece no cálculo da renda-base (β_rms) do Guardião."),
 ("CadÚnico", "Cadastro Único do governo pra programas sociais. Quem está nele tem nosso preço social (Φ₁c / Φ₀)."),
 ("gov.br", "A conta única do cidadão no governo (níveis Bronze/Prata/Ouro). A senha dela é sagrada — Bitwarden, nunca ClickUp."),
 ("LC 142", "Lei que trata da aposentadoria da pessoa com deficiência, por grau (leve/moderado/grave). No MC, faixa mais vulnerável paga MENOS."),
]),

("🧰  TECNOLOGIA E FERRAMENTAS  (o que roda por baixo)", [
 ("Claude Code", "A ferramenta de IA que mexe nos arquivos, no git e nos textos da empresa (o 'braço executor')."),
 ("TALÃO", "O computador (ex-DELL) onde o Founder roda o Claude Code. Operador único: o Alessandro. O Beto NÃO opera o TALÃO."),
 ("Gemini", "IA do Google usada na triagem rápida (~70%), só pra dado NÃO sensível. Atenção: o Gemini inventa dado — sempre conferir."),
 ("Llama 4 Scout", "IA 'da casa', hospedada em servidor próprio (GCP Brasil), pros dados SENSÍVEIS (CPF, CID, CNIS). ~25%."),
 ("Claude Sonnet", "IA usada nas ~5% das decisões éticas mais delicadas."),
 ("MCP", "O 'encanamento' que liga as IAs às ferramentas (protocolo técnico). Você não precisa decorar — é tubulação."),
 ("N8N", "Robô de automação (faz tarefas sozinho, em sequência). Hospedado na casa."),
 ("WhatsApp Cloud API", "O WhatsApp oficial pelo qual a gente atende. (Não é Evolution nem gambiarra — é o oficial.)"),
 ("GCP", "Google Cloud — onde ficam servidores e bancos (Firestore, BigQuery, cofre de chaves, leitor de documentos)."),
 ("ZapSign", "A plataforma onde o cliente assina contrato digital. (Autentique e DocuSign NÃO se usam mais.)"),
 ("Bitwarden", "O cofre de senhas da empresa (onde mora a senha gov.br do cliente). Trancado, com 2 fatores. NUNCA no ClickUp."),
 ("ClickUp", "Onde a gente organiza tarefas e casos. Pode ter de tudo, MENOS senha gov.br."),
 ("Hook / Stop hook", "Trava automática do sistema. Ex.: o 'mc-lint' confere se a gente escreveu algo proibido e barra na hora."),
 ("mc-lint", "Nosso vigia automático: lê o que foi escrito e bloqueia se aparecer preço velho, nome errado, senha no lugar errado etc."),
 ("Subagente", "Um 'ajudante' de IA com tarefa específica, em contexto limpo (ex.: a sister-ancia, que revisa nosso trabalho sem vício)."),
]),

("🔧  A BANCADA — GIT E GITHUB  (onde nosso trabalho vive e se versiona)", [
 ("Git", "A 'máquina do tempo' dos arquivos: guarda cada versão do material e deixa voltar atrás. É o chão onde o Vault MC mora (ADR-020 — Git Substrato)."),
 ("Repositório (repo)", "O projeto inteiro versionado pelo git — no nosso caso, o Vault MC todinho. A 'caixa' que contém tudo."),
 ("GitHub", "O site, na nuvem, onde o repositório fica guardado e compartilhado. O git é a máquina; o GitHub é o cofre online dela."),
 ("Branch (bancada / ramo)", "Uma linha de trabalho SEPARADA, pra mexer sem bagunçar a versão oficial. A nossa de hoje: 'claude/prompt-calibration-personalized-Il0AL'."),
 ("main", "A branch PRINCIPAL — a versão oficial, de verdade. Tudo que importa termina aqui, depois de aprovado."),
 ("Commit", "Salvar um ponto no tempo com um bilhetinho do que mudou. É bater uma foto do trabalho e legendar."),
 ("Mensagem de commit", "O bilhete do commit. No MC a gente escreve no padrão 'tipo(área): o que fez' (Conventional Commits)."),
 ("Push", "Empurrar seus commits da máquina pro GitHub (a nuvem). Sem push, o trabalho só existe no seu computador."),
 ("Pull / Fetch", "O contrário do push: trazer pra sua máquina o que está na nuvem. 'Fetch' espia, 'pull' traz e já junta."),
 ("Clone", "Fazer uma cópia completa do repositório da nuvem pro seu computador, pra poder trabalhar."),
 ("Merge (juntar)", "Juntar uma branch na outra (ex.: a nossa bancada na 'main'). É o passo que OFICIALIZA o trabalho."),
 ("Pull Request (PR)", "O pedido formal de fazer um merge. Mostra o diff lado a lado e abre pra revisão. Branch = rascunho · PR = pedido · merge = oficial."),
 ("Diff", "O 'antes e depois': exatamente o que entrou (+) e o que saiu (-) num commit ou PR."),
 ("Conflito (merge conflict)", "Quando duas mudanças mexem na MESMA linha e o git não sabe qual vale. Aí um humano decide."),
 ("Working tree", "A sua bancada agora, com as mudanças que você ainda NÃO salvou (commitou). O rascunho da vez."),
 ("Stage / git add", "Marcar quais mudanças vão entrar no próximo commit. Tipo escolher o que vai aparecer na foto."),
 ("HEAD", "Um marcador de 'onde você está' no histórico — qual commit/branch está ativo agora."),
 ("origin / remote", "O apelido do servidor remoto (o GitHub). 'origin' é de onde a gente clonou e pra onde a gente empurra."),
 ("Tag", "Uma etiqueta fixa num ponto do histórico pra marcar versão (ex.: 'v3.0' do CLAUDE.md)."),
 ("SHA / hash", "A 'impressão digital' única de cada commit (ex.: 1b04674). Aponta o ponto exato no tempo."),
 ("Log / histórico", "A lista de todos os commits: quem mudou o quê, quando. A linha do tempo do projeto."),
 (".gitignore", "A lista do que o git deve IGNORAR (não versionar): lixo temporário, cache, etc."),
 ("Revert / Reset", "Desfazer. 'Revert' cria um commit que desfaz; 'reset' volta o ponteiro. (reset --hard é perigoso — bloqueado no MC.)"),
 ("CI (Integração Contínua)", "Robô que, a cada push/PR, roda testes sozinho pra ver se nada quebrou. 'Build verde' = passou."),
 ("Git hook", "Gatilho automático do git em certos momentos. No MC, nosso 'mc-lint' é um Stop hook que barra texto proibido."),
]),

("🛡️  GOVERNANÇA E SEGURANÇA  (regras, portões e dados)", [
 ("Router-Ethics 11.0", "O 'juiz ético' do sistema: 140 regrinhas + 7 ganchos. Dá 3 notas (Confiança, Complexidade, Fraude). Se uma estoura, passa pra mão humana."),
 ("Handoff", "Passar o caso pro humano quando a IA não pode decidir sozinha (nota ética estourou)."),
 ("ADR", "Decisão de Arquitetura registrada — o 'documento oficial' que fecha uma escolha (ex.: ADR-007 = preços)."),
 ("MB (Mission Brief)", "A 'ordem de serviço' de uma operação: o que vai ser feito, por quê e como."),
 ("POP", "Procedimento Operacional Padrão — o passo a passo de uma tarefa do dia a dia."),
 ("R1 / R2 / R3", "Os 3 tipos de decisão: R1 = corriqueira (Founder decide na hora); R2 = mudança grande (Founder + IAs); R3 = mexe com OAB/LGPD (Dra. Juliana revisa antes)."),
 ("Gate", "O 'portão': ponto onde precisa de aprovação pra seguir. Nada entra no Vault sem o Founder dizer 'aprovado para vault'."),
 ("PROVISIONAL / ATIVO / SELADO", "Estágios de um documento: PROVISIONAL = rascunho aprovado; SELADO/ATIVO = oficial, passou pelo portão."),
 ("Errata", "Correção de um erro. 'Errata-mãe' = um erro grande que obriga a arrumar várias coisas (ex.: Errata #10: o Beto não opera o TALÃO)."),
 ("LGPD", "A lei de proteção de dados. Dado pessoal sensível só roda na stack soberana (Llama Scout). Nunca em lugar aberto."),
 ("PII / PII Vermelha", "Dado pessoal identificável. 'Vermelha' = o mais perigoso: CPF, NB, CID, CNIS, senha gov.br. Cuidado máximo."),
 ("ANPD", "A autoridade do governo que fiscaliza a LGPD."),
 ("S1 / S2 / S3", "Os 3 estados do dossiê: S1 intermediário (com a gente) → S2 consolidado (apaga 7 dias após entregar) → S3 probatório (vai pro advogado parceiro)."),
 ("TTA", "Token de Transferência Assinado: o 'carimbo' que autoriza passar o dossiê do estado S2 pro S3."),
 ("Custódia", "Guarda das senhas/documentos do cliente. Vedado usar como chantagem de cobrança. Apagar é só o Alessandro, pessoalmente."),
 ("Vault", "O 'cofre' de documentos oficiais da empresa (no Obsidian). Fonte da verdade. Só o Claude Code escreve lá, sob portão."),
 ("3 Cérebros", "Cérebro 1 = Documentação (mesa de trabalho) · Cérebro 2 = Vault (oficial) · Espaço 3 = Project no Claude.ai. Nada pula pro Vault sem portão."),
]),

("🧠  AS VOZES DA MÁQUINA  (quem é quem na IA)", [
 ("Quarteto cognitivo", "Os 4 que pensam juntos: o Founder + 3 vozes de IA (Cofounder, Anciã, Voo). Senha de confiança: 'É eu, tu, a Anciã e o Voo CLR001.'"),
 ("C3.1 Cofounder", "A IA parceira de ideias no Claude.ai — pensa junto, cunha conceito, opera de ponta a ponta."),
 ("Sister Anciã", "A 3ª voz: a 'sábia da contramão'. Fala o que ninguém quer ouvir, sem puxar saco. Só entra em situação especial. Revisa pra não deixar erro passar."),
 ("Sister 3.2 Design", "A irmã do design visual (claude.ai/design). Cuida da parte visual (Visual Law)."),
 ("Voo CLR001", "A 4ª instância: foco total num caso específico, do começo ao fim."),
 ("Code TALÃO", "A IA do Claude Code rodando no TALÃO — o braço que executa de verdade (mexe em arquivo, git, código). Modo Arquiteto + Executor."),
]),

("👥  O TIME E QUEM FAZ O QUÊ", [
 ("Alessandro de Souza Neves", "Founder/CEO. 22 anos de INSS (vínculo encerrado em 2025). A 'cabeça única' que decide. Único que opera o TALÃO."),
 ("Beto (Gilberto)", "Operador: atende no WhatsApp e cuida do ClickUp. NÃO mexe em Code/git/TALÃO."),
 ("Igor (RJ)", "Desenvolvedor do sistema (backend). É a autoridade técnica — quem manda na parte de programação."),
 ("Carlos", "Designer (a experiência do usuário, o visual)."),
 ("Dra. Juliana Pereira de Melo", "A advogada parceira (OAB-GO 38.662). A atividade-fim jurídica é DELA. ⚠️ Nunca diga 'Juliana Alencar' — esse nome está encerrado."),
 ("Tiers T1–T4", "Os níveis de papel no atendimento humano (do operador de linha de frente até o nível jurídico/estratégico)."),
]),

("📚  SIGLAS E ESTUDOS QUE APARECEM", [
 ("Grimório Previdenciário", "Nosso 'livrão' de regras do INSS (milhares de regras catalogadas). O conhecimento de 22 anos virado ferramenta."),
 ("IVCAD-MC / IVS", "Índices que medem o grau de vulnerabilidade do cliente/território. Quanto pior a situação, mais a régua D>C>V protege."),
 ("IPH-MC", "Indicador composto que a gente usa pra medir impacto (vulnerabilidade x acesso)."),
 ("Ementa 069 / Epicentro", "Um estudo/caso importante do MC (em análise com a Juliana)."),
 ("Radar Galileu", "O primeiro caso de Justiça no Brasil sobre 'prompt injection' (golpe em IA). Virou referência da nossa defesa anti-injeção (ADR-016)."),
 ("Anti-Injection (ADR-016)", "Nossas regras pra não deixar texto malicioso 'enganar' a IA. Nasceu do caso Radar Galileu."),
]),
]

CSS = """
@page { size: A4 portrait; margin: 1.4cm 1.2cm; }
* { font-family: 'Liberation Sans','DejaVu Sans',Arial,sans-serif; }
body { color:#1b2a1f; }
h1 { color:#1b4332; font-size:21pt; margin:0 0 2px 0; }
.sub { color:#40916c; font-size:10.5pt; margin:0 0 2px 0; }
.meta { color:#6c757d; font-size:8.5pt; margin:0 0 10px 0; }
table { width:100%; border-collapse:collapse; }
th { background:#1b4332; color:#fff; font-size:9.5pt; padding:6px 7px; text-align:left; border:0.6pt solid #1b4332; }
td { font-size:9.3pt; padding:5px 7px; border:0.6pt solid #b7cdbf; vertical-align:top; line-height:1.28; }
td.termo { width:23%; font-weight:bold; color:#1b4332; }
tr.alt td { background:#eef6f0; }
tr.band td { background:#2d6a4f; color:#fff; font-weight:bold; font-size:10.5pt; padding:7px; border:0.6pt solid #2d6a4f; letter-spacing:.3px; }
.rodape { margin-top:10px; color:#6c757d; font-size:8pt; font-style:italic; }
"""

def esc(s): return html.escape(s)

rows = []
for grupo, itens in GRUPOS:
    rows.append(f'<tr class="band"><td colspan="2">{esc(grupo)}</td></tr>')
    for i,(termo,sig) in enumerate(itens):
        alt = ' class="alt"' if i % 2 else ''
        rows.append(f'<tr{alt}><td class="termo">{esc(termo)}</td><td>{esc(sig)}</td></tr>')

total = sum(len(it) for _,it in GRUPOS)
doc = f"""<!DOCTYPE html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body>
<h1>Meu Cumpadre &mdash; Vocabul&aacute;rio da Casa</h1>
<p class="sub">A linguagem que a gente usa aqui dentro &mdash; explicada simples, pra voc&ecirc; e pro Beto.</p>
<p class="meta">{total} termos &middot; {len(GRUPOS)} grupos &middot; {DATA} &middot; linguagem coloquial &middot; Hierarquia: Dignidade &gt; Compliance &gt; Viabilidade</p>
<table>
<thead><tr><th style="width:23%">Termo</th><th>O que &eacute;, na real</th></tr></thead>
<tbody>
{chr(10).join(rows)}
</tbody></table>
<p class="rodape">"O diamante &eacute; carbono que n&atilde;o desistiu da press&atilde;o." &middot; Prov&eacute;rbios 31:8 &middot; Em d&uacute;vida num c&oacute;digo de benef&iacute;cio? Confirme no CNIS/sistema antes de orientar (Proof-First). &infin;</p>
</body></html>"""

open("/tmp/vocab_mc.html","w",encoding="utf-8").write(doc)
print(f"HTML gerado: {total} termos em {len(GRUPOS)} grupos.")
