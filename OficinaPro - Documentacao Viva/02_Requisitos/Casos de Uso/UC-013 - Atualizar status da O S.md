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

| Campo           | Valor                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                                                              |
| Gatilho         | Usuário seleciona “Alterar Status” em uma O.S.                                                                                              |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]] e O.S. previamente cadastrada                                           |
| Sucesso         | Status da O.S. atualizado conforme [[RN-24 - Transição de status da O S\|RN-24]].                                                          |
| Garantia minima | Em caso de falha ou transição inválida, o status anterior da O.S. deve ser mantido conforme [[RN-24 - Transição de status da O S\|RN-24]]. |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                                 |
| ----: | :--: | ------------------------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa uma O.S. cadastrada.                                                                           |
|     2 |  EV  | Usuário seleciona “Alterar Status”.                                                                           |
|     3 |  RS  | Sistema exibe o status atual e os status disponíveis conforme [[RN-24 - Transição de status da O S\|RN-24]]. |
|     4 |  EV  | Usuário seleciona o novo status da O.S.                                                                       |
|     5 |  EV  | Usuário confirma a alteração.                                                                                 |
|     6 |  RS  | Sistema valida a alteração do status conforme [[RN-24 - Transição de status da O S\|RN-24]].                 |
|     7 |  RS  | Sistema atualiza o status da O.S. conforme [[RN-24 - Transição de status da O S\|RN-24]].                    |
|     8 |  RS  | Sistema informa que o status foi atualizado com sucesso.                                                      |


## Alternativa A - Cancelar O.S.

1. No passo 4, o usuário seleciona o status `Cancelada`.
2. O sistema verifica se o cancelamento é permitido conforme [[RN-24 - Transição de status da O S|RN-24]].
3. O sistema solicita a confirmação do cancelamento.
4. O usuário confirma.
5. O sistema altera o status da O.S. para `Cancelada` conforme [[RN-24 - Transição de status da O S|RN-24]].

## Exceções

- 4a - Status não selecionado: informar que é necessário selecionar um novo status.
- 6a - Alteração de status inválida: informar que a alteração selecionada não é permitida e manter o status anterior conforme [[RN-24 - Transição de status da O S|RN-24]].
- 7a - Falha ao atualizar o status: informar que não foi possível realizar a alteração e manter o status anterior.
- A2a - Cancelamento não permitido: informar que a O.S. não pode ser cancelada em seu status atual conforme [[RN-24 - Transição de status da O S|RN-24]].




## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]], [[03_Modelo de Dominio/Dicionario de Dados#Ordem_Servico|Ordem_Servico]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-15 - Atualizar status da O.S.|IMG-15]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
