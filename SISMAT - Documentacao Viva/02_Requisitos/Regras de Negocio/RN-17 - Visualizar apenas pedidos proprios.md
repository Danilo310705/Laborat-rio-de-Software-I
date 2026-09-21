---
id: RN-17
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [produto, seguranca]
tags: [sismat, regra-de-negocio, autorizacao]
---

# RN-17 - Visualizar apenas pedidos próprios

O usuário comum visualiza somente pedidos finalizados vinculados à própria identidade.

**Aplicação:** [[02_Requisitos/Casos de Uso/UC-007 - Consultar pedidos finalizados|UC-007]].

**Verificação:** filtrar no servidor e impedir consulta direta de IDs de terceiros.
