---
id: RN-15
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [produto, almoxarifado]
tags: [sismat, regra-de-negocio, relatorio]
---

# RN-14 - Quantidade positiva

Toda quantidade informada em movimentações de produtos deve ser maior que zero.

**Aplicação:** [[UC-006 - Registrar entrada de mercadoria|UC-006]], [[UC-010 - Adicionar produtos à O S|UC-010]], [[UC-017 - Editar ou Remover produto da O S|UC-017]].

**Verificação:** rejeitar quantidade igual a zero, negativa, vazia ou não numérica.
