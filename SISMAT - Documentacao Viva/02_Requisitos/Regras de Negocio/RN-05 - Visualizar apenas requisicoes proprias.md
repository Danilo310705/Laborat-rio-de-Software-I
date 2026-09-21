---
id: RN-05
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [produto, seguranca]
tags: [sismat, regra-de-negocio, autorizacao]
---

# RN-05 - Visualizar apenas requisições próprias

O usuário comum visualiza apenas as requisições vinculadas à própria identidade.

**Aplicação:** [[UC-002 - Consultar clientes|UC-002]].

**Verificação:** filtrar no servidor e retornar não encontrado ou acesso negado para IDs de terceiros.
