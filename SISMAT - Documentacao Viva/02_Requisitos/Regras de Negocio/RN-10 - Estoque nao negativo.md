---
id: RN-10
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [almoxarifado]
tags: [sismat, regra-de-negocio, estoque]
---

# RN-10 - Estoque não negativo

Nenhuma operação pode resultar em saldo de estoque menor que zero.

**Aplicação:** [[UC-004 - Cadastrar Serviço|UC-004]].

**Verificação:** proteger contra concorrência e validar de forma atômica no servidor/banco.
