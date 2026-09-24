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

# UC-014 - Finalizar O.S.

## Objetivo

Permitir que o usuário finalize uma Ordem de Serviço, registrando o pagamento e a forma de pagamento utilizada.

| Campo           | Valor                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                       |
| Gatilho         | Usuário seleciona “Finalizar O.S.”                                                                   |
| Pré-condições   | O.S. previamente cadastrada e com os serviços concluídos.                                            |
| Sucesso         | Pagamento registrado e O.S. alterada para o status `Concluída`                                       |
| Garantia minima | Em caso de falha, a O.S. permanece com o status anterior e o pagamento não é registrado parcialmente |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                             |
| ----: | :--: | --------------------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa a O.S. que deseja finalizar.                                                               |
|     2 |  EV  | Usuário seleciona “Finalizar O.S.”                                                                        |
|     3 |  RS  | Sistema exibe os produtos, serviços e o valor total da O.S.                                               |
|     4 |  EV  | Usuário seleciona a forma de pagamento.                                                                   |
|     5 |  EV  | Usuário confirma a finalização da O.S.                                                                    |
|     6 |  RS  | Sistema valida os dados informados.                                                                       |
|     7 |  RS  | Sistema registra o pagamento e a forma de pagamento.                                                      |
|     8 |  RS  | Sistema altera o status da O.S. para `Concluída`.Sistema informa que o status foi atualizado com sucesso. |
|       |      |                                                                                                           |


## Alternativa A - Formas de pagamento

1. No passo 4, o usuário seleciona uma das formas de pagamento disponíveis, como dinheiro, PIX, cartão de débito ou cartão de crédito.
2. O fluxo continua no passo 5.

## Exceções \\falta


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
