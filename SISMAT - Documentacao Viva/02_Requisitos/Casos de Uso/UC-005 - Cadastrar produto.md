---
id: UC-005
tipo: caso-de-uso
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
prioridade: alta
ator_principal: administrador
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, almoxarifado, engenharia]
tags: [sismat, caso-de-uso, produto]
---

# UC-005 - Cadastrar produto

## Objetivo

Cadastrar produto com código, unidade, preço de custo/venda

| Campo           | Valor                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                      |
| Gatilho         | Usuário escolhe “Cadastrar Novo Produto”                                                            |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]] |
| Sucesso         | Produto válido persistido com código único                                                          |
| Garantia mínima | Em caso de falha, nenhum cadastro incompleto de produto deve ser registrado                         |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                 |
| ----: | :--: | --------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                                                     |
|     2 |  EV  | Usuário seleciona “Cadastrar Novo Produto”.                                                   |
|     3 |  RS  | Sistema exibe a tela de cadastro de produto.                                                  |
|     4 |  EV  | Usuário preenche o nome do produto, código, unidade, preço de custo e venda e estoque mínimo. |
|     5 |  EV  | Usuário confirma o cadastro.                                                                  |
|     6 |  RS  | Sistema valida os dados informados.                                                           |
|     7 |  RS  | Sistema grava o produto                                                                       |
|     8 |  RS  | Sistema exibe [[02_Requisitos/Catalogo de Mensagens#MSG-01\|MSG-01]]                          |

## Exceções

- Campo obrigatório não informado: exibir [[Catalogo de Mensagens#MSG-22|MSG-22]] e retornar ao preenchimento.
- Valor padrão inválido: exibir [[Catalogo de Mensagens#MSG-07|MSG-07]] permitir a correção.
- Falha ao cadastrar o serviço: exibir [[Catalogo de Mensagens#MSG-08|MSG-08]] e encerrar sem gravação.

## Remoção

A descrição geral promete remover produtos, mas o fluxo detalhado não especifica a operação. Até decisão, prefira inativação para preservar histórico; veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]].

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidade: [[03_Modelo de Dominio/Dicionario de Dados#Produto|Produto]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-06 - Gerenciar produtos com confirmação|IMG-06]], [[06_Interfaces/Mapa de Interfaces#IMG-07 - Lista de produtos|IMG-07]] e [[06_Interfaces/Mapa de Interfaces#IMG-08 - Cadastrar produto|IMG-08]].

## Critério de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-008 - Impedir código de produto duplicado|CA-008]].
