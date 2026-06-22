---
name: extrator-sites
description: |
  Mineração paralela profissional de sites em escala COM validação rigorosa de
  entregáveis (Porteiro Exigente). Acione com `/extrator_sites` para minerar
  QUALQUER site, extrair todos os URLs internos de forma sistemática e
  determinística e gerar Excel + PDF + CSV validados.

  USAR QUANDO: usuário menciona minerar site, extrair URLs, mapear estrutura de
  website, inventariar páginas, fazer scraping estruturado, catalogar
  documentação ou explorar arquitetura de aplicação web — mesmo que não diga
  explicitamente "minerar" ou "URLs".

  Frases-gatilho: "/extrator_sites", "minerar site", "extrair URLs", "mapear
  site", "inventariar páginas", "scraping estruturado".
rua:
  id: extrator-sites
  nome: Extrator de Sites (v2 - Porteiro Exigente)
  tipo: skill
  versao: 2.0.0
  status: INSTALADO
  papel: Mineração paralela de sites + validação rigorosa de entregáveis (Excel/PDF/CSV)
  gatilhos:
  - /extrator_sites
  - minerar site
  - extrair urls
  - mapear site
  entrega: Excel + PDF + CSV com URLs completos e validados
  metodo_fonte: Orquestração + 5 subagentes paralelos + Porteiro Exigente
  # Bloco C · Posição na MC-ACI
  instancia_aci: transversal
  camada_ase: L2
  compoe_com: []
  nao_confundir_com:
  - id: mc-compasso-sweep
    motivo: aquele CURA fontes públicas sob a régua <5% p/ NotebookLM; este MINERA todos
      os URLs internos de um site e valida os entregáveis (Excel/PDF/CSV)
  - id: mc-strategic-intelligence
    motivo: aquele orquestra pesquisa→NotebookLM→colheita estratégica; este é mineração
      determinística de estrutura de site
  # Bloco D · Governança (fail-closed)
  gate: R1
  zona: Verde
  lgpd_nota: Verde DESDE QUE o alvo seja site PÚBLICO sem PII (mapa de estrutura, não
    dado sensível) · ferramenta de propósito geral, apontável a qualquer site → é
    CONDIÇÃO DE USO, não propriedade da UA · NÃO apontar a portal autenticado/gov.br nem
    a alvo que exponha CPF/NB/CID/CNIS em URL → fora de escopo (escala ao operador)
  vedacoes_honradas:
  - Proof-First
  - Zona-Verde
  - D>C>V
  para_no_gate: "true — ferramenta operacional · gera Excel/PDF/CSV de URLs validados ·
    NÃO sela, NÃO escreve no Vault · dedup determinístico (100% reproduzível)"
  # Bloco E · Operação & Telemetria
  custo:
    gasta_agente: true
    opt_in: true
    fan_out: "5 (mineradores paralelos)"
  emite_audit: false
  depende_de: []
---

# extrator-sites (v2 — Com Porteiro Exigente)

## 📋 O que faz

Mineração **completa e validada** de qualquer site com garantia de qualidade:
- Extrai todos os URLs internos via paralelo (5 subagentes simultâneos)
- Deduplica determinísticamente (alfabético, 100% reproduzível)
- Gera 3 entregáveis profissionais: **Excel + PDF + CSV**
- **Porteiro Exigente** valida TUDO antes de entregar

**Resultado:** arquivos com colunas `[Categoria, Título, URL Completa, Profundidade]`

## Como usar

```
/extrator_sites
```

Forneça a URL raiz e, opcionalmente, as categorias. O workflow executa 6 fases
automaticamente: Orquestração → Mineração Paralela → Consolidação → Exportação →
Porteiro Exigente → Download Ready.

## Scripts

- `scripts/minerador_com_porteiro_v2.py` — mineração completa + validação integrada
- `scripts/validador_entregaveis.py` — Porteiro Exigente (validação isolada)

---

## 🛡️ Validação Rigorosa (Porteiro Exigente)

### ✅ Arquivo Excel
- [ ] Arquivo existe em disco
- [ ] Tamanho mínimo: 5 KB
- [ ] Exatamente 2 sheets: "URLs Mineradas" + "Estatísticas"
- [ ] Sheet 1 headers: `Categoria | Título | URL Completa | Profundidade`
- [ ] Sheet 2 headers: `Métrica | Valor`
- [ ] **OBJETO PRINCIPAL**: todas as URLs completas e válidas
  - ✓ Começam com `https://` ou `http://`
  - ✓ Têm domínio válido (ex: exemplo.com)
  - ✓ Não estão vazias ou malformadas
  - ✓ Profundidade é inteiro ≥ 0
- [ ] Mínimo 10 linhas de dados

### ✅ Arquivo PDF
- [ ] Arquivo existe em disco
- [ ] Tamanho mínimo: 3 KB
- [ ] Mínimo 1 página

### ✅ Arquivo CSV
- [ ] Arquivo existe em disco
- [ ] Tamanho mínimo: 1 KB
- [ ] Encoding UTF-8 com BOM
- [ ] Delimitador: `;` (ponto-e-vírgula)
- [ ] **OBJETO PRINCIPAL**: todas as URLs completas e válidas
- [ ] Mínimo 10 linhas (header + 9+ URLs únicos)

### ✅ Alocação na Pasta Destino
- [ ] Todos os 3 arquivos na pasta destino configurada
- [ ] Nomes corretos com timestamp

---

## 🚨 Se a validação falhar

O Porteiro **para tudo** e exibe relatório detalhado identificando arquivo,
problema e linha exata:

```
❌ VALIDAÇÃO FALHOU

Arquivo: mapeamento_exemplo_com_20260621_023327.xlsx
Problema: URLs malformadas detectadas

Exemplos:
  - Linha 5: "exemplo.com" (falta http://)
  - Linha 12: "" (vazio)
  - Linha 18: "https:///" (malformado)

Ação: Corrigir URLs e reexecutar
```

---

## ✨ Garantias

✅ **100% de integridade** — Porteiro valida antes de finalizar
✅ **Determinístico** — Mesma URL = mesma ordenação
✅ **3 formatos profissionais** — Excel + PDF + CSV
✅ **Fail-fast** — Para se qualquer validação falhar
✅ **Relatório detalhado** — Identifica exatamente qual arquivo/linha falhou

---

**EXTRATOR SITES v2.0** | Mineração com Validação Garantida
