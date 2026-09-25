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

# RN-27 - Preservação do diagnóstico anterior

Caso ocorra falha durante a alteração de um diagnóstico, o diagnóstico anteriormente registrado deve ser mantido.

**Aplicação:** **Registrar diagnóstico**.

**Verificação:** somente substituir o diagnóstico anterior após a nova informação ser validada e persistida com sucesso.
