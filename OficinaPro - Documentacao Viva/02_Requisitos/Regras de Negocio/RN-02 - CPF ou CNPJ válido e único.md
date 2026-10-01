---
id: RN-02
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [almoxarifado]
tags: [sismat, regra-de-negocio, estoque]
---

# RN-02 - CPF ou CNPJ válido e único

Todo CPF ou CNPJ informado no cadastro deve ser válido e não pode estar duplicado para o mesmo tipo de cadastro.

**Aplicação:** [[UC-001 - Cadastrar cliente|UC-001]], [[UC-007 - Cadastrar fornecedor|UC-007]].

**Verificação:** validar o CPF/CNPJ informado e consultar a existência de outro registro do mesmo tipo com o mesmo documento antes de concluir o cadastro.
