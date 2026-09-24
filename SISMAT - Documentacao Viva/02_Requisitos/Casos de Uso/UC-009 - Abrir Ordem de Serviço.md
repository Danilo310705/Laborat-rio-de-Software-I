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

# UC-009 - Abrir Ordem de Serviço

## Objetivo

Permitir que o usuário abra uma Ordem de Serviço (O.S.), vinculando um cliente, veículo, produtos e serviços que serão realizados.

| Campo           | Valor                                                                            |
| --------------- | -------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                   |
| Gatilho         | Usuário seleciona “Abrir Nova O.S.”                                              |
| Pré-condições   | Usuário autenticado e cliente previamente cadastrado.                            |
| Sucesso         | O.S. registrada e vinculada ao cliente, veículo, produtos e serviços informados. |
| Garantia mínima | Em caso de falha, nenhuma O.S. incompleta deve ser registrada.                   |

## Fluxo principal

| Passo | Tipo | Comportamento                                                         |
| ----: | :--: | --------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                             |
|     2 |  EV  | Usuário seleciona “Abrir Nova O.S.”                                   |
|     3 |  RS  | Sistema exibe a tela de abertura da O.S.                              |
|     4 |  EV  | Usuário busca e seleciona o cliente.                                  |
|     5 |  EV  | Usuário informa a placa do veículo.                                   |
|     6 |  RS  | Sistema busca um veículo cadastrado com a placa informada.            |
|     7 |  RS  | Sistema encontra o veículo e preenche automaticamente seus dados.     |
|     8 |  EV  | Usuário informa o problema relatado pelo cliente.                     |
|     9 |  EV  | Usuário confirma a abertura da O.S.                                   |
|    10 |  RS  | Sistema valida os dados informados.                                   |
|    11 |  RS  | Sistema registra a O.S. vinculada ao cliente e ao veículo.            |
|    12 |  RS  | Sistema registra a O.S. com status `Aberta`.                          |
|    13 |  RS  | Sistema exibe [[02_Requisitos/Catalogo de Mensagens#MSG-11\|MSG-11]]. |

## Alternativa A - Veículo não cadastrado

1. No passo 6, o sistema não encontra nenhum veículo com a placa informada.
2. O sistema disponibiliza os demais campos para cadastro do veículo.
3. O usuário informa os dados do veículo, como marca, modelo e ano.
4. Retorna ao passo 8.

## Exceções

- Campo obrigatório ausente: [[02_Requisitos/Catalogo de Mensagens#MSG-22|MSG-22]] e solicitar seu preenchimento.
- E-mail já usado: [[02_Requisitos/Catalogo de Mensagens#MSG-23|MSG-23]].
- Cliente não selecionado: exibir [[02_Requisitos/Catalogo de Mensagens#MSG-22|MSG-22]] .
- Placa inválida: exibir [[02_Requisitos/Catalogo de Mensagens#MSG-14|MSG-14]] e permitir a correção.
- Falha ao registrar a O.S.: exibir [[02_Requisitos/Catalogo de Mensagens#MSG-15|MSG-15]]  e não realizar gravação parcial.
- Falha ao cadastrar o veículo:  [[Catalogo de Mensagens#MSG-08|MSG-08]] e não registrar a O.S. parcialmente.
- Veículo vinculado a outro cliente: informar que o veículo está vinculado a outro cliente e solicitar a verificação do cliente selecionado.


'*conferir daqui pra baixo*'
## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].

## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
