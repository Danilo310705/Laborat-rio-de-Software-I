---
id: UC-008
tipo: caso-de-uso
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
prioridade: alta
ator_principal: administrador
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, engenharia, seguranca]
tags: [sismat, caso-de-uso, usuario, acesso]
---

# UC-010 - Adicionar produtos à O.S.

## Objetivo

Permitir que o usuário adicione à Ordem de Serviço os produtos que serão utilizados no atendimento.

| Campo           | Valor                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                            |
| Gatilho         | Usuário seleciona “Adicionar Produto” em uma O.S.                                                         |
| Pré-condições   | O.S. previamente cadastrada e produto cadastrado no sistema                                               |
| Sucesso         | Produto adicionado à O.S. e quantidade correspondente atualizada no estoque                               |
| Garantia mínima | Em caso de falha, o produto não deve ser adicionado à O.S. sem que o estoque seja atualizado corretamente |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                |
| ----: | :--: | ---------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa uma O.S. cadastrada.                                          |
|     2 |  EV  | Usuário seleciona “Adicionar Produto”.                                       |
|     3 |  RS  | Sistema exibe os produtos cadastrados.                                       |
|     4 |  EV  | Usuário seleciona o produto desejado.                                        |
|     5 |  RS  | Sistema exibe o preço de venda e a quantidade disponível em estoque.         |
|     6 |  EV  | Usuário informa a quantidade utilizada.                                      |
|     7 |  RS  | Sistema valida a quantidade informada e a disponibilidade em estoque.        |
|     8 |  EV  | Usuário confirma a inclusão do produto.                                      |
|     9 |  RS  | Sistema adiciona o produto e a quantidade à O.S.                             |
|    10 |  RS  | Sistema reduz do estoque a quantidade utilizada.                             |
|    11 |  RS  | Sistema verifica se a quantidade restante atingiu o estoque mínimo definido. |
|    12 |  RS  | Sistema atualiza o valor total da O.S.                                       |
|    13 |  RS  | Sistema exibe [[02_Requisitos/Catalogo de Mensagens#MSG-16\|MSG-16]].        |

## Alternativa A - Estoque mínimo atingido

1. No passo 11, o sistema identifica que a quantidade restante atingiu ou ficou abaixo do estoque mínimo.
2. O sistema gera o alerta de estoque mínimo.
3. O fluxo continua normalmente no passo 12.

## Alternativa B - Adicionar vários produtos

1. Após adicionar um produto, o usuário seleciona “Adicionar Produto” novamente.
2. O usuário seleciona outro produto e informa a quantidade utilizada.
3. O processo é repetido para os demais produtos necessários.

## Exceções

- Produto não encontrado: exibe [[Catalogo de Mensagens#MSG-18|MSG-18]] e permitir uma nova busca.
- Quantidade inválida: exibe [[Catalogo de Mensagens#MSG-09|MSG-09]] e permite a correção.
- Falha ao adicionar o produto: exiber [[Catalogo de Mensagens#MSG-08|MSG-08]]. e não alterar o estoque.
- Falha ao atualizar o estoque: desfazer a inclusão do produto na O.S. e manter a quantidade anterior em estoque.

'*conferir daqui pra baixo*'
## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
