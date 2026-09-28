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

# UC-003 - Cadastrar Técnico

## Objetivo

Permitir que o usuário cadastre os técnicos responsáveis pela execução dos serviços nas Ordens de Serviço.

| Campo           | Valor                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------ |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                   |
| Gatilho         | Usuário seleciona “Cadastrar Novo Técnico”                                                       |
| Pré-condições   | Usuário autenticado no sistema conforme [[RN-04 - Usuário autenticado\|RN-04]]                   |
| Sucesso         | Técnico cadastrado e disponível para seleção nas O.S. conforme [[RN-33 - Técnico ativo\|RN-33]]. |
| Garantia minima | Em caso de falha, nenhum cadastro incompleto do técnico deve ser registrado                      |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                    |
| ----: | :--: | -------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                                        |
|     2 |  EV  | Usuário seleciona “Cadastrar Novo Técnico”.                                      |
|     3 |  RS  | Sistema exibe a tela de cadastro de técnico.                                     |
|     4 |  EV  | Usuário preenche os dados do técnico.                                            |
|     5 |  EV  | Usuário confirma o cadastro.                                                     |
|     6 |  RS  | Sistema valida os dados informados.                                              |
|     7 |  RS  | Sistema registra o técnico como ativo conforme [[RN-33 - Técnico ativo\|RN-33]]. |
|     8 |  RS  | Sistema informa que o técnico foi cadastrado com sucesso.                        |


## Alternativa 

Não se aplica.


## Exceções 

- 6a - Campo obrigatório não preenchido: exibir [[Catalogo de Mensagens#MSG-22|MSG-22]] e solicitar o preenchimento.
- 6b - Dados inválidos: informar quais dados são inválidos e permitir a correção.
- 7a - Falha ao cadastrar técnico: exibir [[Catalogo de Mensagens#MSG-08|MSG-08]] e não realizar gravação parcial.
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]], [[03_Modelo de Dominio/Dicionario de Dados#Técnico|Técnico]].
- Protótipo: [[06_Interfaces/Mapa de Interfaces#IMG-03 - Cadastrar Técnico|IMG-03]].

## Critério de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-005 - Rejeição exige motivo|CA-005]].

## Ponto a decidir

O PDF não explicita se a aprovação reserva estoque. Veja [[04_Arquitetura/Decisoes/ADR-001 - Momento da reserva e baixa de estoque|ADR-001]].
