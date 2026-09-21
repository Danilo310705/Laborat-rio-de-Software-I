---
id: RISK-001
tipo: riscos-e-questoes
status: ativo
origem: evolucao-proposta
criado_em: 2026-09-02
atualizado_em: 2026-09-02
proxima_revisao: 2026-09-16
responsaveis: [produto, almoxarifado, engenharia]
tags: [sismat, riscos, questoes-abertas]
---

# Riscos e Questões em Aberto

## Riscos

| ID | Risco | Prob. | Impacto | Resposta inicial |
|---|---|:---:|:---:|---|
| RSK-001 | Duas aprovações consomem o mesmo saldo disponível | alta | alto | decidir reserva e testar concorrência |
| RSK-002 | Entrega parcial deixa pedido em estado inconsistente | alta | alto | definir estado, saldo pendente e encerramento |
| RSK-003 | Exclusão física quebra histórico | média | alto | avaliar ADR-002 |
| RSK-004 | Autorização apenas visual expõe dados ou comandos | média | alto | impor regras no servidor |
| RSK-005 | Senha em texto puro devido ao modelo da fonte | baixa | crítico | aplicar RNF-002 e revisar esquema |
| RSK-006 | Relatórios divergem do saldo operacional | média | médio | definir consistência e instante da consulta |

## QST-001 - Reserva ou baixa de estoque

**Pergunta:** o saldo deve ser reservado na criação, na aprovação ou somente baixado na entrega?

**Impacta:** UC-001, UC-003, UC-004, modelo de dados e relatórios.

**Encaminhamento:** deliberar [[04_Arquitetura/Decisoes/ADR-001 - Momento da reserva e baixa de estoque|ADR-001]] com almoxarifado e engenharia.

## QST-002 - Semântica da entrega parcial

**Pergunta:** qual estado representa a entrega parcial, como calcular o pendente e quando encerrar?

**Impacta:** [[UC-004 - Cadastrar Serviço|UC-004]], [[03_Modelo de Dominio/Ciclo de Vida da Requisicao|ciclo de vida]], RN-18 e dados por item.

**Opções iniciais:** estado `Entrega_Parcial`; entregas como entidade própria; saldo entregue acumulado por item.

## QST-003 - Mensagens reutilizadas de forma inconsistente

**Pergunta:** quais IDs e textos devem ser usados para filtro inválido, produto não encontrado e motivo obrigatório?

**Evidência:** a fonte usa `MSG-06` (“Requisição não encontrada”) também em contextos de filtro e produto; usa `MSG-09` genérica para motivo ausente.

**Encaminhamento:** aprovar catálogo contextual e evitar um ID com significados diferentes.

## QST-004 - Integrações

**Pergunta:** o SISMAT integra com SSO, ERP, e-mail ou outro sistema institucional?

**Impacta:** identidade, cadastros mestres, notificações, arquitetura e operação.

## QST-005 - Exclusão e histórico

**Pergunta:** produto ou usuário referenciado pode ser removido? Qual é a política de retenção e anonimização?

**Encaminhamento:** decidir [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]].

## QST-006 - Múltiplos estoques

**Pergunta:** existe um único almoxarifado/saldo ou o saldo precisa ser separado por campus, setor ou localização?

**Impacta:** disponibilidade, modelo de dados, permissões e relatórios.

## Próxima sessão de decisão

- [ ] convidar responsável do almoxarifado;
- [ ] levar exemplos reais de entrega parcial e falta de saldo;
- [ ] decidir QST-001 e QST-002 primeiro;
- [ ] registrar resultados em ADRs e atualizar os UCs afetados.
