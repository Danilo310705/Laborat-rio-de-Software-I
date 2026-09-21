---
id: RN-07
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [almoxarifado]
tags: [sismat, regra-de-negocio, rejeicao]
---

# RN-07 - Rejeição exige motivo

Toda rejeição deve registrar um motivo não vazio.

**Aplicação:** [[UC-003 - Consultar historico de serviços ou compras de um cliente|UC-003]].

**Verificação:** validar no servidor, persistir com a decisão e apresentar ao solicitante no detalhe.
