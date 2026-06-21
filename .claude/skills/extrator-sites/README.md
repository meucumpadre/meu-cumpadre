# Extrator Sites v2.0 — Com Porteiro Exigente

## O que é

Skill para mineração profissional de sites com validação rigorosa de entregáveis.

## Recursos

- ✅ Mineração paralela (5 subagentes)
- ✅ Deduplicação determinística
- ✅ Validação rigorosa (Porteiro Exigente)
- ✅ 3 formatos: Excel + PDF + CSV
- ✅ Fail-fast com relatório detalhado

## Estrutura

```
extrator-sites/
├── SKILL.md                              # Documentação + critérios de validação
├── README.md                             # Este guia rápido
├── VERSION                               # 2.0.0
└── scripts/
    ├── minerador_com_porteiro_v2.py      # Mineração + validação integrada
    └── validador_entregaveis.py          # Porteiro Exigente (validação isolada)
```

## Uso

```
/extrator_sites
```

Forneça a URL raiz e o workflow executará 6 fases automaticamente.

## Dependências

Os scripts usam `openpyxl` (Excel). Instale com:

```
pip install openpyxl
```

## Documentação

Ver `SKILL.md` para critérios de validação completos.
