---
id: RN-09
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [almoxarifado]
tags: [sismat, regra-de-negocio, estoque, entrega]
---

# RN-09 - Atualizar estoque após entrega

O saldo do produto deve refletir a quantidade efetivamente entregue.

**Aplicação:** [[UC-004 - Cadastrar Serviço|UC-004]].

**Verificação:** persistir entrega, movimentação e saldo na mesma transação.
