---
id: UC-007
tipo: caso-de-uso
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
prioridade: baixa
ator_principal: usuario
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, engenharia]
tags: [sismat, caso-de-uso, historico]
---

# UC-007 - Consultar pedidos finalizados

## Objetivo

Permitir que o usuário consulte detalhes de suas requisições já entregues ou rejeitadas.

| Campo | Valor |
|---|---|
| Ator principal | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]] |
| Gatilho | Usuário acessa “Pedidos Finalizados” |
| Pré-condições | Usuário autenticado conforme [[02_Requisitos/Regras de Negocio/RN-04 - Usuario autenticado\|RN-04]] |
| Sucesso | Somente pedidos próprios e encerrados são exibidos |

## Fluxo principal

1. Usuário acessa “Pedidos Finalizados”.
2. Sistema lista pedidos conforme [[02_Requisitos/Regras de Negocio/RN-17 - Visualizar apenas pedidos proprios|RN-17]] e [[02_Requisitos/Regras de Negocio/RN-18 - Exibir apenas pedidos encerrados|RN-18]].
3. Usuário seleciona um pedido.
4. Sistema exibe data, status e itens.

## Alternativa - filtrar

1. Usuário informa filtros.
2. Sistema valida e exibe os pedidos correspondentes.

## Exceções

- Nenhum pedido encontrado: [[02_Requisitos/Catalogo de Mensagens#MSG-19|MSG-19]].
- Filtro inválido: [[02_Requisitos/Catalogo de Mensagens#MSG-20|MSG-20]].

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Requisicao|Requisicao]] e [[03_Modelo de Dominio/Dicionario de Dados#Item_requisicao|Item_requisicao]].
- Protótipo: [[06_Interfaces/Mapa de Interfaces#IMG-11 - Pedidos finalizados|IMG-11]].

## Critério de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-010 - Listar somente pedidos encerrados do usuário|CA-010]].
