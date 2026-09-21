---
id: RN-11
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [almoxarifado]
tags: [sismat, regra-de-negocio, produto]
---

# RN-11 - Código de produto único

Não podem existir dois produtos com o mesmo código de negócio.

**Aplicação:** [[UC-005 - Cadastrar produto|UC-005]].

**Verificação:** normalizar o formato definido pelo negócio e aplicar restrição única no banco.
