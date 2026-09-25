---
id: MOD-ESTADO-001
tipo: modelo-de-estados
status: proposto
origem: evolucao-proposta
implementacao: nao-verificada
criado_em: 2026-09-02
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, almoxarifado, engenharia]
tags: [sismat, estados, requisicao]
---

# Ciclo de Vida da Requisição

```mermaid
stateDiagram-v2
    [*] --> Pendente: UC-001 cria
    Pendente --> Aprovada: UC-003 aprova
    Pendente --> Esperando_Aprovação: UC-003 aprova
    Pendente --> Rejeitada: UC-003 rejeita + motivo
    Aprovada --> Entregue: UC-004 entrega total
    Aprovada --> Entrega_Parcial: UC-004 entrega parcial (proposto)
    Entrega_Parcial --> Entrega_Parcial: nova entrega parcial (proposto)
    Entrega_Parcial --> Entregue: saldo pendente zerado (proposto)
    Rejeitada --> [*]
    Entregue --> [*]
```

## Transições confirmadas pela fonte

| Origem | Destino | Ação | Regra |
|---|---|---|---|
| inexistente | Pendente | criar requisição | [[RN-03 - Contato obrigatório do cliente\|RN-03]] |
| Pendente | Aprovada | aprovar | [[RN-06 - Endereço vinculado ao cliente\|RN-06]] |
| Pendente | Rejeitada | rejeitar com motivo | [[RN-07 - Consulta do histórico do cliente\|RN-07]] |
| Aprovada | Entregue | confirmar entrega | [[RN-08 - Placa única do veículo\|RN-08]] |

## Parte proposta

`Entrega_Parcial` foi incluído para tornar o fluxo parcial representável, mas não existe na lista de status do PDF. A decisão depende de [[05_Qualidade/Riscos e Questoes em Aberto#QST-002 - Semântica da entrega parcial|QST-002]].

## Invariantes sugeridas

- estados terminais não voltam a estados ativos sem processo de correção auditado;
- toda transição registra ator e instante;
- a rejeição registra motivo;
- a entrega e o movimento de estoque são atômicos.
