---
id: UC-006
tipo: caso-de-uso
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
prioridade: media
ator_principal: administrador-ou-estoquista
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, almoxarifado, engenharia]
tags: [sismat, caso-de-uso, relatorio]
---

# UC-006 - Registrar entrada de mercadoria

## Objetivo

Permitir que o usuário registre a entrada de produtos adquiridos de um fornecedor, atualizando a quantidade disponível em estoque.

| Campo           | Valor                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Atores          | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                                                            |
| Gatilho         | Usuário seleciona “Registrar Entrada de Mercadoria”                                                                                       |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]], fornecedor e produto previamente cadastrados                         |
| Sucesso         | Entrada registrada e estoque dos produtos atualizado conforme [[RN-19 - Atualização do estoque pela entrada\|RN-19]].                     |
| Garantia mínima | Em caso de falha, nenhuma alteração parcial no estoque deve ser realizada conforme [[RN-19 - Atualização do estoque pela entrada\|RN-19]] |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                                                                                                                        |
| ----: | :--: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                                                                                                                                                            |
|     2 |  EV  | Usuário seleciona “Registrar entrada de mercadoria”.                                                                                                                                                 |
|     3 |  RS  | Sistema exibe a tela de entrada de mercadoria.                                                                                                                                                       |
|     4 |  EV  | Usuário seleciona o fornecedor.                                                                                                                                                                      |
|     5 |  EV  | Usuário seleciona o produto e informa a quantidade recebida e o valor de compra conforme [[RN-14 - Quantidade positiva\|RN-14]] e [[RN-18 - Entrada de mercadoria\|RN-18]].                          |
|     6 |  EV  | Usuário confirma a entrada de mercadoria.                                                                                                                                                            |
|     7 |  EV  | Usuário confirma a entrada de mercadoria.                                                                                                                                                            |
|     8 |  RS  | Sistema valida a quantidade conforme [[RN-14 - Quantidade positiva\|RN-14]] e os demais dados da entrada conforme [[RN-13 - Valores do produto\|RN-13]] e  [[RN-18 - Entrada de mercadoria\|RN-18]]. |
|     9 |  RS  | Sistema registra a entrada e acrescenta a quantidade recebida ao estoque conforme [[RN-19 - Atualização do estoque pela entrada\|RN-19]].                                                            |
|    10 |  RS  | Sistema exibe [[02_Requisitos/Catalogo de Mensagens#MSG-01\|MSG-01]]                                                                                                                                 |

## Alternativa - vários itens

1. 1. No passo 5, o usuário seleciona o produto e informa a quantidade recebida e o valor de compra conforme [[RN-14 - Quantidade positiva|RN-14]] e [[RN-18 - Entrada de mercadoria|RN-18]].
2. O usuário seleciona a opção para adicionar outro produto.
3. O sistema permite informar os dados do próximo produto.
4. O processo pode ser repetido para os demais produtos recebidos.
5. O usuário confirma a entrada.
6. O sistema valida todos os produtos informados conforme [[RN-13 - Valores do produto|RN-13]], [[RN-14 - Quantidade positiva|RN-14]] e [[RN-18 - Entrada de mercadoria|RN-18]].
7. O sistema registra a entrada e atualiza o estoque de todos os produtos conforme [[RN-19 - Atualização do estoque pela entrada|RN-19]].

## Exceções

- 4a - Fornecedor não selecionado: exibir [[Catalogo de Mensagens#MSG-22|MSG-22]] e solicitar a seleção do fornecedor conforme [[RN-18 - Entrada de mercadoria|RN-18]]
- 5a - Produto não selecionado: exibe [[Catalogo de Mensagens#MSG-22|MSG-22]] e solicitar a seleção do produto conforme  [[RN-18 - Entrada de mercadoria|RN-18]].
- 7a - Quantidade inválida: exibe [[Catalogo de Mensagens#MSG-09|MSG-09]] e permitir a correção conforme  [[RN-14 - Quantidade positiva|RN-14]].
- 7b - Valor de compra inválido: [[Catalogo de Mensagens#MSG-07|MSG-07]] e permitir a correção conforme  [[RN-13 - Valores do produto|RN-13]] e [[RN-18 - Entrada de mercadoria|RN-18]].
- 8a - Falha ao registrar a entrada: exibe [[Catalogo de Mensagens#MSG-10|MSG-10]] e não realizar nenhuma alteração parcial no estoque conforme [[RN-19 - Atualização do estoque pela entrada|RN-19]].


## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Produto|Produto]], [[03_Modelo de Dominio/Dicionario de Dados#Requisicao|Requisicao]], [[03_Modelo de Dominio/Dicionario de Dados#Movimentacao_estoque|Movimentacao_estoque]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-09 - Emitir relatório|IMG-09]] e [[06_Interfaces/Mapa de Interfaces#IMG-10 - Resultado do relatório|IMG-10]].

## Critério de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-009 - Exportar relatório em PDF|CA-009]].
