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

# RN-34 - Desconto na O.S.

O usuário pode aplicar um desconto no valor total da O.S. durante sua finalização, informando um percentual ou um valor fixo.

**Aplicação:** [[UC-014 - Finalizar O S|UC-014]]

**Verificação:** o desconto deve ser maior que zero e não pode resultar em um valor final negativo. O desconto deve ser aplicado somente ao valor total da O.S., sem alterar os valores registrados individualmente nos produtos e serviços.