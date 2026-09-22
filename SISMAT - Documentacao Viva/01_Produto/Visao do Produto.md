---
id: VIS-001
tipo: visao
status: em-revisao
origem: modelo-pdf
documento_origem: SISMAT.EST.00001
criado_em: 2026-03-26
atualizado_em: 2026-09-02
ultima_revisao: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto]
tags: [sismat, produto, visao]
---

# Visão do Produto

## Problema

Solicitações internas de materiais realizadas de forma manual ou descentralizada dificultam o acompanhamento dos pedidos, o controle do estoque e a rastreabilidade das entregas.

## Visão

Para usuários internos, estoquistas e administradores que precisam solicitar, atender e controlar materiais, o **SISMAT** é um sistema de requisição e estoque que centraliza o pedido, a análise, a entrega e as informações gerenciais. Diferentemente de controles dispersos, oferece um fluxo padronizado, rastreável e com responsabilidades separadas por perfil.

## Objetivos

- reduzir falhas operacionais no processo de requisição;
- dar visibilidade ao andamento dos pedidos;
- manter o saldo de materiais confiável;
- agilizar análise, separação e entrega;
- apoiar decisões com consultas e relatórios;
- controlar acesso conforme o perfil do usuário.

## Resultados esperados

| Resultado               | Indicador proposto             | Meta                                      |
| ----------------------- | ------------------------------ | ----------------------------------------- |
| Requisições rastreáveis | pedidos com histórico completo | 100% dos pedidos auditáveis               |
| Estoque confiável       | divergência físico x sistema   | acurácia > 98%                            |
| Atendimento ágil        | tempo entre pedido e entrega   | até 2 horas                               |
| Uso do fluxo oficial    | requisições feitas no SISMAT   | 100% (recusar pedidos fora do aplicativo) |

## Capacidades

- [[UC-001 - Cadastrar cliente|Solicitar materiais]]
- [[UC-002 - Consultar clientes|Acompanhar requisições]]
- [[UC-003 - Consultar historico de serviços ou compras de um cliente|Analisar pedidos]]
- [[UC-004 - Cadastrar Serviço|Entregar materiais]]
- [[UC-005 - Cadastrar produto|Gerenciar produtos]]
- [[UC-006 - Registrar entrada de mercadoria|Gerar relatórios]]
- [[UC-007 - Cadastrar fornecedor|Consultar histórico]]
- [[UC-008 - Abrir OS vinculando cliente|Gerenciar usuários]]

## Restrições conhecidas

- circulação externa proibida;
- exportação de relatório;
- acesso controlado por perfil;
- comportamento ainda não confrontado com código ou ambiente executável.
