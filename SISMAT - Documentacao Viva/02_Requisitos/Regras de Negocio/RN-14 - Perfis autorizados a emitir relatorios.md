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

# RN-14 - Perfis autorizados a emitir relatórios

Somente Administrador e Estoquista podem gerar ou exportar relatórios.

**Aplicação:** [[UC-006 - Registrar entrada de mercadoria|UC-006]].

**Verificação:** restringir consulta de dados e endpoint de exportação.
