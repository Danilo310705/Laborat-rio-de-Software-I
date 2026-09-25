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

# RN-30 - Consistência da finalização

O registro do pagamento e a alteração do status da O.S. para `Concluída` devem ocorrer de forma consistente.

**Aplicação:** **Finalizar O.S.**

**Verificação:** em caso de falha, não registrar parcialmente o pagamento nem alterar a O.S. para `Concluída`.
