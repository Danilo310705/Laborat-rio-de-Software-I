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

# RN-24 - Transição de status da O.S.

O status da O.S. deve respeitar as transições permitidas pelo sistema.

**Aplicação:**  [[UC-013 - Atualizar status da O S|UC-013]], [[UC-014 - Finalizar O S|UC-014]].

**Verificação:** permitir a transição `Aberta` → `Em andamento`. Uma O.S. `Aberta` ou `Em andamento` pode ser alterada para `Cancelada`. A transição para `Concluída` deve ocorrer somente por meio da finalização da O.S., após o cumprimento das regras de finalização. Uma O.S. `Cancelada` ou `Concluída` não pode retornar ao fluxo normal.
