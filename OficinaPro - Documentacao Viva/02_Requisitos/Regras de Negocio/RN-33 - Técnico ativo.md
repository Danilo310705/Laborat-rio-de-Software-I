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

# RN-33 - Técnico ativo

Todo técnico cadastrado inicia com situação `Ativo`. Somente técnicos ativos podem ser selecionados como responsáveis por serviços em uma O.S.

**Aplicação:** [[UC-003 - Cadastrar Técnico|UC-003]], [[UC-011 - Adicionar serviço à O S|UC-011]], [[UC-018 - Editar ou Remover serviço da O S|UC-018]].

**Verificação:** definir automaticamente a situação `Ativo` ao cadastrar um técnico e impedir a seleção de técnicos inativos nos serviços de uma O.S.