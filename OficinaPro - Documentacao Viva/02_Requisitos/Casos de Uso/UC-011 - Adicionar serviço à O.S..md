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

# UC-011 - Adicionar serviço à O.S.

## Objetivo

Permitir que o usuário adicione serviços à Ordem de Serviço, definindo o valor cobrado e o técnico responsável pela execução.

| Campo           | Valor                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                                                   |
| Gatilho         | Usuário seleciona “Adicionar Serviço” em uma O.S.                                                                                |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]], O.S. previamente cadastrada e serviço cadastrado no sistema |
| Sucesso         | Serviço adicionado à O.S. com valor e técnico responsável                                                                        |
| Garantia minima | Em caso de falha, nenhum serviço incompleto deve ser adicionado à O.S.                                                           |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                                                                                                                                               |
| ----: | :--: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa uma O.S. cadastrada.                                                                                                                                                                                         |
|     2 |  EV  | Usuário seleciona “Adicionar Serviço”.                                                                                                                                                                                      |
|     3 |  RS  | Sistema exibe os serviços cadastrados.                                                                                                                                                                                      |
|     4 |  EV  | Usuário seleciona o serviço desejado.                                                                                                                                                                                       |
|     5 |  RS  | Sistema preenche automaticamente o valor padrão do serviço conforme [[RN-20 - Valor padrão do serviço\|RN-20]].                                                                                                             |
|     6 |  EV  | Usuário seleciona o técnico responsável pela execução do serviço entre os técnicos ativos conforme [[RN-22 - Técnico responsável pelo serviço\|RN-22]] e [[RN-33 - Técnico ativo\|RN-33]].                                  |
|     7 |  EV  | Usuário confirma a inclusão do serviço.                                                                                                                                                                                     |
|     8 |  RS  | Sistema valida o valor informado conforme [[RN-21 - Alteração do valor do serviço na O.S.\|RN-21]] e o técnico responsável conforme [[RN-22 - Técnico responsável pelo serviço\|RN-22]] e [[RN-33 - Técnico ativo\|RN-33]]. |
|     9 |  RS  | Sistema adiciona o serviço à O.S. com o valor utilizado e o técnico responsável conforme [[RN-21 - Alteração do valor do serviço na O.S.\|RN-21]] e [[RN-22 - Técnico responsável pelo serviço\|RN-22]].                    |
|    10 |  RS  | Sistema atualiza o valor total da O.S.                                                                                                                                                                                      |
|    11 |  RS  | Sistema exibe  [[02_Requisitos/Catalogo de Mensagens#MSG-17\|MSG-17]]                                                                                                                                                       |

## Alternativa A - Alterar valor do serviço

1. Após o passo 5, o usuário altera o valor preenchido automaticamente conforme [[RN-21 - Alteração do valor do serviço na O.S.|RN-21]].
2. O sistema utiliza o valor informado somente para aquele serviço naquela O.S. conforme [[RN-21 - Alteração do valor do serviço na O.S.|RN-21]].
3. O valor padrão cadastrado para o serviço permanece inalterado conforme [[RN-21 - Alteração do valor do serviço na O.S.|RN-21]].
4. O fluxo continua no passo 6.

## Alternativa B - Adicionar vários serviços

1. 1. Após adicionar um serviço, o usuário seleciona “Adicionar Serviço” novamente.
2. O usuário seleciona outro serviço e um técnico responsável ativo conforme [[RN-22 - Técnico responsável pelo serviço|RN-22]] e [[RN-33 - Técnico ativo|RN-33]].
3. O sistema aplica o valor padrão do serviço conforme [[RN-20 - Valor padrão do serviço|RN-20]].
4. O processo é repetido para os demais serviços necessários.

## Exceções

- 4a - Serviço não encontrado: exibe [[02_Requisitos/Catalogo de Mensagens#MSG-19|MSG-19]] e permitir uma nova busca.
- 6a - Técnico não selecionado:  exibir [[02_Requisitos/Catalogo de Mensagens#MSG-22|MSG-22]] e solicitar a seleção do técnico conforme [[RN-20 - Valor padrão do serviço|RN-20]].
- 6b - Técnico inativo: exibir [[02_Requisitos/Catalogo de Mensagens#MSG-24|MSG-24]] impedir a seleção do técnico conforme [[RN-33 - Técnico ativo|RN-33]] e solicitar a escolha de outro técnico.
- 8a - Valor inválido: exibir [[Catalogo de Mensagens#MSG-07|MSG-07]] e permitir a correção conforme [[RN-21 - Alteração do valor do serviço na O.S.|RN-21]].
- 9a - Falha ao adicionar o serviço: exibe [[Catalogo de Mensagens#MSG-08|MSG-08]] e não realizar gravação parcial.



## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]], [[03_Modelo de Dominio/Dicionario de Dados#Ordem_Servico|Ordem_Servico]], [[03_Modelo de Dominio/Dicionario de Dados#Serviço|Serviço]], [[03_Modelo de Dominio/Dicionario de Dados#Técnico|Técnico]], [[03_Modelo de Dominio/Dicionario de Dados#Item_Servico_OS|Item_Servico_OS]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-13 - Adicionar Serviço à O.S.|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
