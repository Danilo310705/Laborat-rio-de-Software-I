---
id: RN-01
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [almoxarifado]
tags: [sismat, regra-de-negocio, quantidade]
---

# RN-01 - Quantidade positiva

Toda quantidade solicitada ou entregue deve ser maior que zero.

**Aplicação:** [[UC-001 - Cadastrar cliente|UC-001]] e [[UC-004 - Cadastrar Serviço|UC-004]].

**Verificação:** rejeitar zero, valor negativo, vazio ou não numérico antes de persistir.
