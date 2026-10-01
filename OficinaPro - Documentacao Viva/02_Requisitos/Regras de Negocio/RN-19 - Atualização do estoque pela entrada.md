---
id: RN-20
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [produto, seguranca]
tags: [sismat, regra-de-negocio, usuario]
---

# RN-19 - Atualização do estoque pela entrada

Ao registrar uma entrada de mercadoria, a quantidade recebida deve ser acrescentada ao estoque do produto.

**Aplicação:** [[UC-006 - Registrar entrada de mercadoria|UC-006]].

**Verificação:** registrar a entrada e atualizar o estoque de forma consistente, sem permitir atualização parcial da operação.
