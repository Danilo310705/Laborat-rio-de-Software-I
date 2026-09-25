---
id: UC-004
tipo: caso-de-uso
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
prioridade: alta
ator_principal: estoquista
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [almoxarifado, engenharia, qualidade]
tags: [sismat, caso-de-uso, entrega, estoque]
---
  
# UC-004 - Cadastrar Serviço

## Objetivo

Cadastrar serviços.

| Campo           | Valor                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                      |
| Gatilho         | Usuário seleciona “Cadastrar Novo Serviço”                                                          |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]] |
| Sucesso         | Sistema registra serviço                                                                            |
| Garantia mínima | Em caso de falha, nenhum cadastro incompleto de serviço deve ser registrado                         |


## Fluxo principal

| Passo | Tipo | Comportamento                                                                           |
| ----: | :--: | --------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                                               |
|     2 |  EV  | Usuário seleciona “Cadastrar Novo Serviço”.                                             |
|     3 |  RS  | Sistema exibe a tela de cadastro de serviço.                                            |
|     4 |  EV  | Usuário preenche a descrição do serviço, o valor padrão e o tempo estimado de execução. |
|     5 |  EV  | Usuário confirma o cadastro.                                                            |
|     6 |  RS  | Sistema valida os dados informados.                                                     |
|     7 |  RS  | Sistema grava o serviço                                                                 |
|     8 |  RS  | Sistema exibe [[02_Requisitos/Catalogo de Mensagens#MSG-01\|MSG-01]]                    |


   '*conferir o que é isso aqui em baixo*'

> [!warning] Lacuna da fonte
> O PDF prevê entrega parcial, mas não define o novo status, o saldo pendente nem quando a requisição é encerrada. Veja [[05_Qualidade/Riscos e Questoes em Aberto#QST-002 - Semântica da entrega parcial|QST-002]].

## Exceções

- Campo obrigatorio não informado: exibir [[Catalogo de Mensagens#MSG-22|MSG-22]] e retornar ao preenchimento.
- Valor padrão inválido: exibir [[Catalogo de Mensagens#MSG-07|MSG-07]] permitir a correção.
- Falha ao cadastrar o serviço: exibir [[Catalogo de Mensagens#MSG-08|MSG-08]] e encerrar sem gravação.

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Requisicao|Requisicao]], [[03_Modelo de Dominio/Dicionario de Dados#Item_requisicao|Item_requisicao]], [[03_Modelo de Dominio/Dicionario de Dados#Produto|Produto]], [[03_Modelo de Dominio/Dicionario de Dados#Movimentacao_estoque|Movimentacao_estoque]].
- Protótipo: [[06_Interfaces/Mapa de Interfaces#IMG-05 - Entrega de material|IMG-05]].
- Sequência: [[04_Arquitetura/Diagramas de Sequencia#Entregar material|Entregar material]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-006 - Entrega total atualiza estoque|CA-006]] e [[05_Qualidade/Cenarios de Aceitacao#CA-007 - Falha de estoque preserva consistência|CA-007]].
