---
id: UC-003
tipo: caso-de-uso
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
prioridade: alta
ator_principal: estoquista
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [almoxarifado, engenharia, qualidade]
tags: [sismat, caso-de-uso, aprovacao]
---

# UC-003 - Consultar histórico de serviços/compras de um cliente

## Objetivo

Permitir que o usuário consulte o histórico de serviços e compras realizados por um cliente.

| Campo          | Valor                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Ator principal | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                      |
| Gatilho        | Usuário acessa “Consultar histórico”                                                                |
| Pré-condições  | Usuário autenticado conforme [[02_Requisitos/Regras de Negocio/RN-04 - Usuario autenticado\|RN-04]] |
| Sucesso        | Histórico de serviços e compras do cliente é exibido                                                |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                                                   |
| ----: | :--: | ------------------------------------------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                                                                                       |
|     2 |  EV  | Usuário busca e seleciona um cliente.                                                                                           |
|     3 |  RS  | Sistema exibe os dados do cliente selecionado                                                                                   |
|     4 |  EV  | Usuario seleciona "Exibir Historico"                                                                                            |
|     5 |  RS  | Sistema busca as ordens de serviço vinculadas ao cliente                                                                        |
|     6 |  RS  | Sistema exibe o histórico de ordens de serviço do cliente.                                                                      |

## Alternativa - Cliente sem registro

1. No passo 5, se o Sistema não encontrar ordens de serviço vinculadas ao cliente.
2. O sistema informara que o cliente ainda não possui histórico registrado.

## Exceções

- Cliente não encontrado: exibir [[02_Requisitos/Catalogo de Mensagens#MSG-05|MSG-05]].
- Falha ao consultar o histórico: exibir [[02_Requisitos/Catalogo de Mensagens#MSG-09|MSG-09]] e manter o estado anterior.

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Requisicao|Requisicao]], [[03_Modelo de Dominio/Dicionario de Dados#Item_requisicao|Item_requisicao]], [[03_Modelo de Dominio/Dicionario de Dados#Produto|Produto]].
- Protótipo: [[06_Interfaces/Mapa de Interfaces#IMG-04 - Analisar requisição|IMG-04]].
- Sequência: [[04_Arquitetura/Diagramas de Sequencia#Analisar requisição|Analisar requisição]].

## Critério de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-005 - Rejeição exige motivo|CA-005]].

## Ponto a decidir

O PDF não explicita se a aprovação reserva estoque. Veja [[04_Arquitetura/Decisoes/ADR-001 - Momento da reserva e baixa de estoque|ADR-001]].
