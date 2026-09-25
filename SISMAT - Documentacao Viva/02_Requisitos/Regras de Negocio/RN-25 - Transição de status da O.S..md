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

# RN-25 - Transição de status da O.S.

O status da O.S. deve respeitar as transições permitidas pelo sistema.

**Aplicação:** **Atualizar status da O.S.** e **Finalizar O.S.**

**Verificação:** permitir o fluxo normal `Aberta` → `Em andamento` → `Concluída`. Uma O.S. `Aberta` ou `Em andamento` também pode ser alterada para `Cancelada`. Uma O.S. cancelada não deve retornar ao fluxo normal sem regra específica.
