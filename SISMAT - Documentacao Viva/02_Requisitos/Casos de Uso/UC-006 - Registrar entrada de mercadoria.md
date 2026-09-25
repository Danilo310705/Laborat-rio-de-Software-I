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

| Campo           | Valor                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Atores          | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                                                   |
| Gatilho         | Usuário seleciona “Registrar Entrada de Mercadoria”                                                                              |
| Pré-condições   | Ator autenticado e autorizado conforme [[RN-14 - Valores do produto\|RN-14]] |
| Sucesso         | Entrada registrada e estoque dos produtos atualizado                                                                             |
| Garantia mínima | Em caso de falha, nenhuma alteração parcial no estoque deve ser realizada                                                        |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                    |
| ----: | :--: | -------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                                        |
|     2 |  EV  | Usuário seleciona “Registrar entrada de mercadoria”.                             |
|     3 |  RS  | Sistema exibe a tela de entrada de mercadoria.                                   |
|     4 |  EV  | Usuário seleciona o fornecedor.                                                  |
|     5 |  EV  | Usuário seleciona o produto e informa a quantidade recebida e o valor de compra. |
|     6 |  EV  | Usuário confirma a entrada de mercadoria.                                        |
|     7 |  EV  | Usuário confirma a entrada de mercadoria.                                        |
|     8 |  RS  | Sistema valida os dados informados.                                              |
|     9 |  RS  | Sistema registra a entrada e atualiza a quantidade dos produtos em estoque.      |
|    10 |  RS  | Sistema exibe [[02_Requisitos/Catalogo de Mensagens#MSG-01\|MSG-01]]             |

## Alternativa - vários itens

1. Usuário seleciona o produto e informa a quantidade recebida e o valor de compra.
2. Usuário adiciona os demais produtos recebidos.
3. O fluxo continua no passo 7.

## Exceções

- Fornecedor não selecionado: exibe [[Catalogo de Mensagens#MSG-22|MSG-22]]
- Produto não selecionado: exibe [[Catalogo de Mensagens#MSG-22|MSG-22]].
- Quantidade inválida: exibe [[Catalogo de Mensagens#MSG-09|MSG-09]] e permite a correção.
- Valor de compra inválido: [[Catalogo de Mensagens#MSG-07|MSG-07]] e permitir a correção.
- Falha ao registrar a entrada: exibe [[Catalogo de Mensagens#MSG-10|MSG-10]] e não realizar nenhuma alteração no estoque.

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Produto|Produto]], [[03_Modelo de Dominio/Dicionario de Dados#Requisicao|Requisicao]], [[03_Modelo de Dominio/Dicionario de Dados#Movimentacao_estoque|Movimentacao_estoque]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-09 - Emitir relatório|IMG-09]] e [[06_Interfaces/Mapa de Interfaces#IMG-10 - Resultado do relatório|IMG-10]].

## Critério de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-009 - Exportar relatório em PDF|CA-009]].
