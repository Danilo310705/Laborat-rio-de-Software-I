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

# RN-18 - Estoque mínimo

Quando a quantidade disponível de um produto atingir ou ficar abaixo do estoque mínimo definido, o sistema deve gerar um alerta.

**Aplicação:** **Adicionar produtos à O.S.** e **Alertar estoque mínimo**.

**Verificação:** após uma redução no estoque, comparar a quantidade restante com o estoque mínimo cadastrado para o produto.