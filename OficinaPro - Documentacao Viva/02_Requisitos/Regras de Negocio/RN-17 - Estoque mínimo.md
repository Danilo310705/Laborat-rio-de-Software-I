---
id: RN-18
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [produto]
tags: [sismat, regra-de-negocio, status]
---

# RN-17 - Estoque mínimo

Quando a quantidade disponível de um produto atingir ou ficar abaixo do estoque mínimo definido, o sistema deve gerar um alerta.

**Aplicação:** [[UC-008 - Alertar estoque mínimo|UC-008]], [[UC-010 - Adicionar produtos à O.S.|UC-010]], [[UC-017 - Editar ou Remover produto da O.S.|UC-017]].

**Verificação:** após uma redução no estoque, comparar a quantidade restante com o estoque mínimo cadastrado para o produto.