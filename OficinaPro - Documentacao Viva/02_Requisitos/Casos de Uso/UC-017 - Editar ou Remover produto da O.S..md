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

Permitir que o usuário altere a quantidade ou remova um produto previamente adicionado a uma Ordem de Serviço, mantendo o estoque atualizado corretamente.

| Campo           | Valor                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                                                             |
| Gatilho         | Usuário seleciona um produto adicionado à O.S.                                                                                             |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]], O.S. cadastrada e produto previamente adicionado à O.S.               |
| Sucesso         | Produto alterado ou removido da O.S. e estoque atualizado corretamente conforme [[RN-16 - Atualização do estoque pela O.S.\|RN-16]]        |
| Garantia minima | Em caso de falha, os dados anteriores da O.S. e do estoque devem ser mantidos conforme [[RN-16 - Atualização do estoque pela O.S.\|RN-16]] |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                                                                                               |
| ----: | :--: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa uma O.S. cadastrada.                                                                                                                                         |
|     2 |  RS  | Sistema exibe os produtos adicionados à O.S.                                                                                                                                |
|     3 |  EV  | Usuário seleciona o produto que deseja editar.                                                                                                                              |
|     4 |  RS  | Sistema exibe os dados e a quantidade utilizada do produto.                                                                                                                 |
|     5 |  EV  | Usuário altera a quantidade utilizada conforme [[RN-14 - Quantidade positiva\|RN-14]].                                                                                      |
|     6 |  EV  | Usuário confirma a alteração.                                                                                                                                               |
|     7 |  RS  | Sistema valida a nova quantidade conforme [[RN-14 - Quantidade positiva\|RN-14]] e a disponibilidade em estoque conforme [[RN-15 - Limite pelo estoque disponível\|RN-15]]. |
|     8 |  RS  | Sistema atualiza a quantidade do produto na O.S. conforme [[RN-16 - Atualização do estoque pela O.S.\|RN-16]].                                                              |
|     9 |  RS  | Sistema ajusta a quantidade correspondente no estoque conforme [[RN-16 - Atualização do estoque pela O.S.\|RN-16]].                                                         |
|    10 |  RS  | Sistema verifica se o estoque atingiu o mínimo definido conforme [[RN-17 - Estoque mínimo\|RN-17]].                                                                         |
|    11 |  RS  | Sistema recalcula o valor total da O.S.                                                                                                                                     |
|    12 |  RS  | Sistema informa que o produto foi alterado com sucesso.                                                                                                                     |

## Alternativa A - Remover produto

1. No passo 3, o usuário seleciona a opção “Remover Produto”.
2. O sistema solicita a confirmação da remoção.
3. O usuário confirma.
4. O sistema remove o produto da O.S. conforme [[RN-16 - Atualização do estoque pela O.S.|RN-16]].
5. O sistema devolve ao estoque a quantidade anteriormente utilizada conforme [[RN-16 - Atualização do estoque pela O.S.|RN-16]].
6. O sistema recalcula o valor total da O.S.
7. O sistema informa que o produto foi removido com sucesso.

## Alternativa B - Aumentar quantidade

1. No passo 5, o usuário informa uma quantidade maior que a registrada anteriormente conforme [[RN-14 - Quantidade positiva|RN-14]].
2. O sistema calcula a diferença entre a quantidade anterior e a nova quantidade.
3. O sistema verifica se existe estoque disponível para a quantidade adicional conforme [[RN-15 - Limite pelo estoque disponível|RN-15]].
4. O sistema reduz do estoque somente a diferença entre a quantidade anterior e a nova quantidade conforme [[RN-16 - Atualização do estoque pela O.S.|RN-16]].
5. O sistema atualiza a quantidade registrada na O.S.
6. O fluxo continua no passo 10.

## Alternativa C - Diminuir quantidade

1. No passo 5, o usuário informa uma quantidade menor que a registrada anteriormente conforme [[RN-14 - Quantidade positiva|RN-14]].
2. O sistema calcula a diferença entre a quantidade anterior e a nova quantidade.
3. O sistema devolve ao estoque a diferença calculada conforme [[RN-16 - Atualização do estoque pela O.S.|RN-16]].
4. O sistema atualiza a quantidade registrada na O.S.
5. O fluxo continua no passo 10.

## Exceções 

- 7a - Quantidade inválida: exibir [[Catalogo de Mensagens#MSG-09|MSG-09]] e permitir a correção conforme [[RN-14 - Quantidade positiva|RN-14]].
- B3a - Estoque insuficiente: exibir [[Catalogo de Mensagens# MSG-23| MSG-23]] e manter a quantidade anterior conforme[[RN-15 - Limite pelo estoque disponível|RN-15]].
- 9a - Falha ao alterar o produto ou estoque: exibir [[Catalogo de Mensagens#MSG-40|MSG-40]] e manter os dados anteriores da O.S. e do estoque conforme[[RN-16 - Atualização do estoque pela O.S.|RN-16]].
- A4a - Falha ao remover o produto: exibir [[Catalogo de Mensagens#MSG-41|MSG-41]], manter o produto na O.S. e não alterar o estoque conforme[[RN-16 - Atualização do estoque pela O.S.|RN-16]].



## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]], [[03_Modelo de Dominio/Dicionario de Dados#Ordem_Servico|Ordem_Servico]], [[03_Modelo de Dominio/Dicionario de Dados#Produto|Produto]], [[03_Modelo de Dominio/Dicionario de Dados#Item_Produto_OS|Item_Produto_OS]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-19 - Editar ou Remover produto da O.S.|IMG-19]] e [[06_Interfaces/Mapa de Interfaces#IMG-20 - Editar ou Remover produto da O.S.|IMG-20]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
