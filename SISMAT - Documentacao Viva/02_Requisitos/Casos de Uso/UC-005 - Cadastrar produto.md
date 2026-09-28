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

Cadastrar produto com código, unidade, preço de custo/venda e estoque mínimo.

| Campo           | Valor                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                 |
| Gatilho         | Usuário escolhe “Cadastrar Novo Produto”                                                       |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]]                            |
| Sucesso         | Produto válido persistido com código único conforme [[RN-11 - Código único do produto\|RN-11]] |
| Garantia mínima | Em caso de falha, nenhum cadastro incompleto de produto deve ser registrado                    |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                                                                                                                                                          |
| ----: | :--: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                                                                                                                                                                                              |
|     2 |  EV  | Usuário seleciona “Cadastrar Novo Produto”.                                                                                                                                                                                            |
|     3 |  RS  | Sistema exibe a tela de cadastro de produto.                                                                                                                                                                                           |
|     4 |  EV  | Usuário preenche o nome do produto, código, unidade, preço de custo e venda e estoque mínimo conforme [[RN-11 - Código único do produto\|RN-11]].                                                                                      |
|     5 |  EV  | Usuário confirma o cadastro.                                                                                                                                                                                                           |
|     6 |  RS  | Sistema valida o código conforme [[RN-11 - Código único do produto\|RN-11]], os campos obrigatórios conforme [[RN-12 - Campos obrigatórios do produto\|RN-12]] e os valores informados conforme [[RN-13 - Valores do produto\|RN-13]]. |
|     7 |  RS  | Sistema grava o produto                                                                                                                                                                                                                |
|     8 |  RS  | Sistema exibe [[02_Requisitos/Catalogo de Mensagens#MSG-01\|MSG-01]]                                                                                                                                                                   |

## Alternativa 

Não se aplica.
## Exceções

- 6a - Campo obrigatório não informado: exibir [[Catalogo de Mensagens#MSG-22|MSG-22]] e retornar ao preenchimento conforme [[RN-12 - Campos obrigatórios do produto|RN-12]].
- 6b - Código já cadastrado: informar que o código já está sendo utilizado e impedir o cadastro conforme [[RN-11 - Código único do produto|RN-11]].
- 6c - Preço de custo ou venda inválido: exibir [[Catalogo de Mensagens#MSG-07|MSG-07]] permitir a correção conforme [[RN-13 - Valores do produto|RN-13]].
- 7a - Falha ao cadastrar o serviço: exibir [[Catalogo de Mensagens#MSG-08|MSG-08]] e encerrar sem gravação.



## Dados e interfaces

- Entidade: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]], [[03_Modelo de Dominio/Dicionario de Dados#Produto|Produto]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-05 - Cadastrar produto|IMG-05]]

## Critério de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-008 - Impedir código de produto duplicado|CA-008]].
