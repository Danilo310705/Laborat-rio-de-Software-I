---
id: UC-003
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
tags: [sismat, caso-de-uso, aprovacao]
---

# UC-019 - Cadastrar Técnico

## Objetivo

Permitir que o usuário cadastre os técnicos responsáveis pela execução dos serviços nas Ordens de Serviço.

| Campo           | Valor                                                                       |
| --------------- | --------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]              |
| Gatilho         | Usuário seleciona “Cadastrar Novo Técnico”                                  |
| Pré-condições   | Usuário autenticado no sistema                                              |
| Sucesso         | Técnico cadastrado e disponível para seleção nas O.S.                       |
| Garantia minima | Em caso de falha, nenhum cadastro incompleto do técnico deve ser registrado |

## Fluxo principal

| Passo | Tipo | Comportamento                                             |
| ----: | :--: | --------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                 |
|     2 |  EV  | Usuário seleciona “Cadastrar Novo Técnico”.               |
|     3 |  RS  | Sistema exibe a tela de cadastro de técnico.              |
|     4 |  EV  | Usuário preenche os dados do técnico.                     |
|     5 |  EV  | Usuário confirma o cadastro.                              |
|     6 |  RS  | Sistema valida os dados informados.                       |
|     7 |  RS  | Sistema registra o técnico.                               |
|     8 |  RS  | Sistema informa que o técnico foi cadastrado com sucesso. |


## Alternativa 

Não se aplica.


## Exceções 

- Campo obrigatório não preenchido: identificar o campo obrigatório e solicitar seu preenchimento.
- Dados inválidos: informar quais dados são inválidos e permitir a correção.
- Falha ao cadastrar técnico: informar que não foi possível realizar o cadastro e não realizar gravação parcial.
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Requisicao|Requisicao]], [[03_Modelo de Dominio/Dicionario de Dados#Item_requisicao|Item_requisicao]], [[03_Modelo de Dominio/Dicionario de Dados#Produto|Produto]].
- Protótipo: [[06_Interfaces/Mapa de Interfaces#IMG-04 - Analisar requisição|IMG-04]].
- Sequência: [[04_Arquitetura/Diagramas de Sequencia#Analisar requisição|Analisar requisição]].

## Critério de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-005 - Rejeição exige motivo|CA-005]].

## Ponto a decidir

O PDF não explicita se a aprovação reserva estoque. Veja [[04_Arquitetura/Decisoes/ADR-001 - Momento da reserva e baixa de estoque|ADR-001]].
