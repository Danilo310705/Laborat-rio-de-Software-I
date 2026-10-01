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

# RN-30 - Dados do comprovante da O.S.

O comprovante deve ser gerado utilizando os dados registrados na Ordem de Serviço, incluindo cliente, veículo, produtos, serviços, valores, desconto aplicado e informações de pagamento, quando disponíveis.

**Aplicação:** [[UC-015 - Emitir comprovante da O.S.|UC-015]]

**Verificação:** utilizar os dados persistidos da O.S. para composição do comprovante, sem modificar as informações originais.
