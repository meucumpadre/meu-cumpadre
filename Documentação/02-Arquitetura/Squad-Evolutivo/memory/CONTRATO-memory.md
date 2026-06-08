# Contrato da Memory/ — Squad Evolutivo

**Versão:** v0.3  
**Status:** Validado pelo Founder  
**Data:** 03 de junho de 2026

## 1. Propósito
A `memory/` é o sistema de aprendizado do Squad Evolutivo. Seu objetivo é transformar experiência bruta em conhecimento reutilizável (skills).

## 2. Estrutura e Responsabilidade de Escrita

| Estágio     | Quem pode escrever     | Regra |
|-------------|------------------------|-------|
| `attempts/` | Apenas o Curador       | Motor invoca, Curador grava |
| `notes/`    | Apenas o Curador       | - |
| `skills/`   | Apenas o Curador       | - |

**Regra fundamental:** Somente o `guardiao-grimorio` (Curador) pode escrever ou editar dentro de `memory/`.

## 3. Formato de Arquivo

Todo arquivo deve conter:

```yaml
---
id: [attempt|note|skill]-YYYYMMDD-XXX
tipo: attempt | note | skill
data_criacao: YYYY-MM-DD
fonte: "string curta"
prova: "descrição curta ou referência"
dignidade_impacto: aumenta | neutro | diminui
status: rascunho | validado | obsoleto
---
```

## 4. Critério de Promoção (note → skill)
Promove quando:

* Reproduzida com sucesso em ≥ 2 rodadas independentes
* Sem contraexemplo registrado
* `fonte` preenchida
* `dignidade_impacto` ≠ diminui

Entradas com `dignidade_impacto: diminui` nunca viram skill.

## 5. Poda e Versionamento

* Marcar `status: obsoleto` e mover para `skills/obsoletas/`
* Versionamento simples: skill substituída vira `-v2`

## 6. Regras de Escrita

* Apenas o Curador grava na `memory/`
* O workflow invoca o Curador para registrar attempts (não escreve diretamente)

## 7. LGPD
Skills registram referência ao caso (ex: Hib001), nunca copiam PII.

## 8. Princípio de Dignidade
Toda entrada deve responder: "Isso aumenta a dignidade operacional da Dona Zilda?"
