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

# UC-013 - Atualizar status da O.S.

## Objetivo

Permitir que o usuário atualize o status de uma Ordem de Serviço de acordo com o andamento do atendimento.

| Campo           | Valor                                                          |
| --------------- | -------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]] |
| Gatilho         | Usuário seleciona “Alterar Status” em uma O.S.                 |
| Pré-condições   | O.S. previamente cadastrada                                    |
| Sucesso         | Status da O.S. atualizado                                      |
| Garantia minima | Em caso de falha, o status anterior da O.S. deve ser mantido   |

## Fluxo principal

| Passo | Tipo | Comportamento                                            |
| ----: | :--: | -------------------------------------------------------- |
|     1 |  EV  | Usuário acessa uma O.S. cadastrada.                      |
|     2 |  EV  | Usuário seleciona “Alterar Status”.                      |
|     3 |  RS  | Sistema exibe o status atual e os status disponíveis.    |
|     4 |  EV  | Usuário seleciona o novo status da O.S.                  |
|     5 |  EV  | Usuário confirma a alteração.                            |
|     6 |  RS  | Sistema valida a alteração do status.                    |
|     7 |  RS  | Sistema atualiza o status da O.S.                        |
|     8 |  RS  | Sistema informa que o status foi atualizado com sucesso. |


## Alternativa A - Cancelar O.S.

1. No passo 4, o usuário seleciona o status `Cancelada`.
2. O sistema solicita a confirmação do cancelamento.
3. O usuário confirma.
4. O sistema altera o status da O.S. para `Cancelada`.

## Exceções

- Status não selecionado: informar que é necessário selecionar um novo status.
- Alteração de status inválida: informar que a alteração selecionada não é permitida.
- Falha ao atualizar o status: informar que não foi possível realizar a alteração e manter o status anterior.

## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
