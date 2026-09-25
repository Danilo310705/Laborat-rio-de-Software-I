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

Clientes do tipo Pessoa Física devem possuir CPF válido e clientes do tipo Pessoa Jurídica devem possuir CNPJ válido. Não deve existir mais de um cliente cadastrado com o mesmo CPF ou CNPJ.

**Aplicação:** [[UC-001 - Cadastrar cliente|UC-001]].

**Verificação:** validar o CPF/CNPJ informado e consultar a existência de outro cliente com o mesmo documento antes de persistir o cadastro.
