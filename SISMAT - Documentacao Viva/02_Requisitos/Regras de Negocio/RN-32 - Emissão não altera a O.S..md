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

# RN-32 - Emissão não altera a O.S.

A geração, impressão ou exportação do comprovante não deve modificar o conteúdo ou o status da Ordem de Serviço.

**Aplicação:** **Emitir comprovante da O.S.**

**Verificação:** tratar a emissão do comprovante como operação de consulta, sem alteração dos dados persistidos.
