---
id: RN-17
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [produto, seguranca]
tags: [sismat, regra-de-negocio, autorizacao]
---

# RN-16 - Atualização do estoque pela O.S.

Toda inclusão, alteração ou remoção de produto em uma O.S. deve atualizar corretamente a quantidade correspondente no estoque.

**Aplicação:** [[UC-010 - Adicionar produtos à O.S.|UC-010]], [[UC-017 - Editar ou Remover produto da O.S.|UC-017]]

**Verificação:** ao adicionar ou aumentar a quantidade de um produto, descontar do estoque a quantidade correspondente. Ao diminuir a quantidade ou remover o produto da O.S., devolver ao estoque a quantidade correspondente. A alteração da O.S. e do estoque deve ocorrer de forma consistente, sem atualização parcial.