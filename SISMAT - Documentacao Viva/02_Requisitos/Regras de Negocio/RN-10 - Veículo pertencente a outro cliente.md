---
id: RN-10
tipo: regra-de-negocio
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
atualizado_em: 2026-09-02
responsaveis: [almoxarifado]
tags: [sismat, regra-de-negocio, estoque]
---

# RN-10 - Veículo pertencente a outro cliente

Caso a placa informada corresponda a um veículo vinculado a outro cliente, o sistema não deve alterar automaticamente seu vínculo.

**Aplicação:** **Abrir Ordem de Serviço**.

**Verificação:** impedir a continuidade da abertura da O.S. e informar: “O veículo informado está vinculado a outro cliente. Verifique o cliente selecionado.”
