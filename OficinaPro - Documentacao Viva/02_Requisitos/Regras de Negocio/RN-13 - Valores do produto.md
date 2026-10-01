---
id: RN-14
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [produto, seguranca]
tags: [sismat, regra-de-negocio, relatorio, autorizacao]
---

# RN-13 - Valores do produto

Os preços de custo e venda informados para um produto devem possuir valores válidos.

**Aplicação:** [UC-005](UC-005%20-%20Cadastrar%20produto), [[UC-006 - Registrar entrada de mercadoria|UC-006]]

**Verificação:** rejeitar valores vazios, negativos ou não numéricos antes da persistência.
