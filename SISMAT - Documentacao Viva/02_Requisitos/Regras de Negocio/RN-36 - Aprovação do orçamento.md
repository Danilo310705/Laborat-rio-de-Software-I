---
id: RN-21
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [produto, seguranca]
tags: [sismat, regra-de-negocio, usuario]
---

# RN-36 - Aprovação do orçamento

A execução dos serviços da O.S. somente deve prosseguir após a aprovação do orçamento pelo cliente.

**Aplicação:** UC-019 - Gerar orçamento da O.S. e UC-013 - Atualizar status da O.S.

**Verificação:** impedir que uma O.S. passe de `Aberta` para `Em andamento` enquanto o orçamento não estiver com situação `Aprovado`.
