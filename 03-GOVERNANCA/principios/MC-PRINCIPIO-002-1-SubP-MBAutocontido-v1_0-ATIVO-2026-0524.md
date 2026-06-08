---
tipo: SUB-PRINCIPIO-MC
codigo: MC-PRINCIPIO-002-1
titulo: MB Autocontido · Conteúdo Inline, Não por Referência
versao: 1.0
status: ATIVO desde 2026-05-24
sub_principio_de: MC-PRINCIPIO-002 (Vocabulário Institucional)
data_cunhagem: 2026-05-22 (BETO-001)
data_promocao_ativo: 2026-05-24 (necessidade Code DELL · MB-052-PATCH-2 é exemplo vivo)
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# Sub-Princípio MC #2.1 ATIVO

## Enunciado

Toda Mission Brief que ordena criação de arquivo canônico deve conter **inline** o conteúdo completo a ser persistido — nunca por referência cruzada a outra parte do chat, outra MB, ou outro artefato externo.

Se a MB pede "criar arquivo X com conteúdo Y", o conteúdo Y deve estar literalmente colado dentro da MB, em bloco demarcado, pronto para o executor copiar-colar sem precisar interpretar referências externas.

## Justificativa

Code DELL e outros executores operam em modo autocontido. Referências cruzadas a chat history ou artefatos externos quebram a cadeia de execução determinística e introduzem dependência interpretativa que viola Princípio #36 (Persistência Drive Bit-a-Bit).

## Aplicação no MB-052-PATCH-2

O conteúdo dos sub-princípios #16.1 e #2.1 está colado inline neste PATCH-2 (não por referência ao chat). Exemplo vivo do princípio sendo aplicado a si mesmo. O Code DELL não precisa buscar nada externo · todo o conteúdo está aqui.

## Anti-padrão

❌ MB que diz "use o conteúdo da minha resposta anterior no chat"
❌ MB que diz "veja o artefato X (sem path completo + hash + conteúdo inline)"
❌ MB que referencia "como discutimos antes" sem repetir o conteúdo
✅ MB que cola literalmente o conteúdo a ser persistido em bloco demarcado

∞
