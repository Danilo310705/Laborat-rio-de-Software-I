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
# UC-017 - Editar ou Remover produto da O.S.

## Objetivo

Permitir que o usuário localize e consulte as informações de uma Ordem de Serviço cadastrada.

| Campo           | Valor                                                                         |
| --------------- | ----------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                |
| Gatilho         | Usuário seleciona um produto adicionado à O.S.                                |
| Pré-condições   | O.S. cadastrada e produto previamente adicionado à O.S.                       |
| Sucesso         | Produto alterado ou removido da O.S. e estoque atualizado corretamente        |
| Garantia minima | Em caso de falha, os dados anteriores da O.S. e do estoque devem ser mantidos |

## Fluxo principal

| Passo | Tipo | Comportamento                                                    |
| ----: | :--: | ---------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa uma O.S. cadastrada.                              |
|     2 |  RS  | Sistema exibe os produtos adicionados à O.S.                     |
|     3 |  EV  | Usuário seleciona o produto que deseja editar.                   |
|     4 |  RS  | Sistema exibe os dados e a quantidade utilizada do produto.      |
|     5 |  EV  | Usuário altera a quantidade utilizada.                           |
|     6 |  EV  | Usuário confirma a alteração.                                    |
|     7 |  RS  | Sistema valida a nova quantidade e a disponibilidade em estoque. |
|     8 |  RS  | Sistema atualiza a quantidade do produto na O.S.                 |
|     9 |  RS  | Sistema ajusta a quantidade correspondente no estoque.           |
|    10 |  RS  | Sistema verifica se o estoque atingiu o mínimo definido.         |
|    11 |  RS  | Sistema recalcula o valor total da O.S.                          |
|    12 |  RS  | Sistema informa que o produto foi alterado com sucesso.          |

## Alternativa A - Remover produto

1. No passo 3, o usuário seleciona a opção “Remover Produto”.
2. O sistema solicita a confirmação da remoção.
3. O usuário confirma.
4. O sistema remove o produto da O.S.
5. O sistema devolve ao estoque a quantidade anteriormente utilizada.
6. O sistema recalcula o valor total da O.S.
7. O sistema informa que o produto foi removido com sucesso.

## Alternativa B - Aumentar quantidade

1. No passo 5, o usuário informa uma quantidade maior que a registrada anteriormente.
2. O sistema verifica se existe estoque disponível para a quantidade adicional.
3. O sistema reduz do estoque apenas a diferença entre a quantidade anterior e a nova quantidade.
4. O fluxo continua no passo 10.

## Alternativa C - Diminuir quantidade

1. No passo 5, o usuário informa uma quantidade menor que a registrada anteriormente.
2. O sistema devolve ao estoque a diferença entre a quantidade anterior e a nova quantidade.
3. O fluxo continua no passo 10.

## Exceções 

- Quantidade inválida: informar que a quantidade deve ser maior que zero e permitir a correção.
- Estoque insuficiente: informar que não há estoque suficiente para aumentar a quantidade e manter a quantidade anterior.
- Falha ao alterar o produto: manter os dados anteriores da O.S. e do estoque.
- Falha ao remover o produto: manter o produto na O.S. e não alterar o estoque.  

## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
