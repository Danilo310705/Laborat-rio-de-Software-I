---
id: RN-13
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [produto, seguranca]
tags: [sismat, regra-de-negocio, autorizacao]
---

# RN-13 - Somente administrador gerencia produtos

Apenas o perfil Administrador pode cadastrar, editar, inativar ou remover produtos.

**Aplicação:** [[UC-005 - Cadastrar produto|UC-005]].

**Verificação:** aplicar a autorização no servidor para cada operação.
