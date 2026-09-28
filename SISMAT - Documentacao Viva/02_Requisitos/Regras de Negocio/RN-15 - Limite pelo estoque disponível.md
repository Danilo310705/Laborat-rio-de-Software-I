---
id: RN-16
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [produto]
tags: [sismat, regra-de-negocio, relatorio, pdf]
---

# RN-15 - Limite pelo estoque disponível

A quantidade de um produto adicionada a uma O.S. não pode exceder sua quantidade disponível em estoque.

**Aplicação:** [[UC-010 - Adicionar produtos à O.S.|UC-010]], [[UC-017 - Editar ou Remover produto da O.S.|UC-017]].

**Verificação:** comparar a quantidade solicitada com o estoque disponível antes de adicionar o produto à O.S.
