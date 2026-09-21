---
id: RN-08
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [almoxarifado]
tags: [sismat, regra-de-negocio, entrega]
---

# RN-08 - Somente requisição aprovada pode ser entregue

A entrega só pode começar para uma requisição com status `Aprovada`.

**Aplicação:** [[UC-004 - Cadastrar Serviço|UC-004]] e [[03_Modelo de Dominio/Ciclo de Vida da Requisicao|Ciclo de Vida da Requisição]].

**Verificação:** bloquear a operação para requisições pendentes, rejeitadas ou encerradas.
