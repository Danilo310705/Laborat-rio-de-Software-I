---
id: ADR-001
tipo: decisao-arquitetural
status: proposto
origem: evolucao-proposta
criado_em: 2026-09-02
atualizado_em: 2026-09-02
responsaveis: [produto, almoxarifado, engenharia]
tags: [sismat, adr, estoque]
---

# ADR-001 - Momento da reserva e baixa de estoque

## Contexto

[[02_Requisitos/Regras de Negocio/RN-02 - Limite pelo estoque disponivel|RN-02]] valida saldo na solicitação, enquanto [[02_Requisitos/Regras de Negocio/RN-09 - Atualizar estoque apos entrega|RN-09]] baixa saldo apenas na entrega. Duas requisições podem ser validadas antes que a primeira seja entregue e consumir juntas mais que o disponível.

## Opções

1. **Baixar na criação:** simples, mas transforma pedido pendente em saída antes de aprovação.
2. **Reservar na aprovação e baixar na entrega:** separa saldo físico de saldo disponível e reduz conflito.
3. **Validar somente na entrega:** modelo simples, mas aprova pedidos que talvez não possam ser atendidos.

## Decisão proposta

Reservar na aprovação e converter a reserva em saída na entrega. `saldo_disponivel = saldo_fisico - saldo_reservado`.

## Consequências

- exige representar reserva por produto/item;
- rejeição ou cancelamento deve liberar reserva;
- entrega parcial reduz a reserva proporcionalmente;
- aprovação e reserva devem ser atômicas;
- relatórios precisam distinguir físico, reservado e disponível.

## Critério de aprovação

Validar com o responsável pelo almoxarifado e atualizar [[03_Modelo de Dominio/Modelo de Dados|Modelo de Dados]], [[03_Modelo de Dominio/Ciclo de Vida da Requisicao|Ciclo de Vida]] e sequências.
