---
id: RN-04
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [produto, seguranca]
tags: [sismat, regra-de-negocio, autenticacao]
---

# RN-04 - Usuário autenticado

O usuário deve estar autenticado para acessar as funcionalidades internas do sistema.

**Aplicação:** todos os casos de uso que realizam cadastro, consulta ou alteração de informações.

**Verificação:** aplicar autenticação no servidor, não apenas na interface.
[[UC-001 - Cadastrar cliente|UC-001]], [[UC-002 - Consultar clientes|UC-002]] e [[UC-007 - Cadastrar fornecedor|UC-007]].