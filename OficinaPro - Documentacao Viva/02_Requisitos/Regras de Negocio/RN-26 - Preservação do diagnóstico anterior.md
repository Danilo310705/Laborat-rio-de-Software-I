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

# RN-26 - Preservação do diagnóstico anterior

Caso ocorra falha durante a alteração de um diagnóstico, o diagnóstico anteriormente registrado deve ser mantido.

**Aplicação:** [[UC-012 - Registrar diagnóstico O S|UC-012]].

**Verificação:** somente substituir o diagnóstico anterior após a nova informação ser validada e persistida com sucesso.
