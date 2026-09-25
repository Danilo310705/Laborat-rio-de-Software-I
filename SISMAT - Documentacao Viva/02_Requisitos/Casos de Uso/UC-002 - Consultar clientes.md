---
id: UC-002
tipo: caso-de-uso
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
prioridade: media
ator_principal: usuario
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, engenharia, qualidade]
tags: [sismat, caso-de-uso, consulta]
---

# UC-002 - Consultar clientes

## Objetivo

Permitir que o usuário busque um cliente pelo nome, telefone ou CPF/CNPJ.

| Campo          | Valor                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Ator principal | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                      |
| Gatilho        | Usuário acessa “Consultar cliente”                                                                  |
| Pré-condições  | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]] |
| Sucesso        | Sistema exibe o cliente ou os clientes correspondentes aos dados informados na busca                |

## Fluxo principal

| Passo | Tipo | Comportamento                                                            |
| ----: | :--: | ------------------------------------------------------------------------ |
|     1 |  EV  | Usuário acessa “Consultar cliente”.                                      |
|     2 |  RS  | Sistema exibe o campo de busca.                                          |
|     3 |  EV  | Usuário informa o nome, telefone ou CPF/CNPJ do cliente.                 |
|     4 |  RS  | Sistema lista os clientes correspondentes aos dados informados na busca. |
|     5 |  EV  | Usuário seleciona um Cliente.                                            |
|     6 |  RS  | Sistema exibe seu detalhes.                                              |

## Exceções

- Se não houver clientes, exibir [[02_Requisitos/Catalogo de Mensagens#MSG-05|MSG-05]].

'*conferir daqui pra baixo*'

## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]], [[Dicionario de Dados#Cliente|Cliente]].
- Protótipo: [[06_Interfaces/Mapa de Interfaces#IMG-03 - Minhas requisições|IMG-03]].

## Critério de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-004 - Isolar requisições por usuário|CA-004]].
