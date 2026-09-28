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

# RN-32 - Tempo estimado do serviço

Todo serviço deve possuir um tempo estimado de execução maior que zero.

**Aplicação:** [[UC-004 - Cadastrar Serviço|UC-004]]

**Verificação:** exigir o preenchimento do tempo estimado e rejeitar valor igual a zero, negativo, vazio ou inválido antes de concluir o cadastro.