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
''
# UC-018 - Editar ou Remover serviço da O.S.

## Objetivo

Permitir que o usuário altere ou remova um serviço previamente adicionado à Ordem de Serviço.

| Campo           | Valor                                                                       |
| --------------- | --------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]              |
| Gatilho         | Usuário seleciona um serviço adicionado à O.S.                              |
| Pré-condições   | O.S. cadastrada e serviço previamente adicionado à O.S.                     |
| Sucesso         | Serviço alterado ou removido da O.S.                                        |
| Garantia minima | Em caso de falha, os dados anteriores do serviço na O.S. devem ser mantidos |

## Fluxo principal

| Passo | Tipo | Comportamento                                               |
| ----: | :--: | ----------------------------------------------------------- |
|     1 |  EV  | Usuário acessa uma O.S. cadastrada.                         |
|     2 |  RS  | Sistema exibe os serviços adicionados à O.S.                |
|     3 |  EV  | Usuário seleciona o serviço que deseja editar.              |
|     4 |  RS  | Sistema exibe o valor e o técnico responsável pelo serviço. |
|     5 |  EV  | Usuário altera o valor e/ou o técnico responsável.          |
|     6 |  EV  | Usuário confirma a alteração.                               |
|     7 |  RS  | Sistema valida os dados informados.                         |
|     8 |  RS  | Sistema atualiza o serviço na O.S.                          |
|     9 |  RS  | Sistema recalcula o valor total da O.S.                     |
|    10 |  RS  | Sistema informa que o serviço foi alterado com sucesso.     |


## Alternativa A - Remover serviço

1. No passo 3, o usuário seleciona “Remover Serviço”.
2. O sistema solicita a confirmação da remoção.
3. O usuário confirma.
4. O sistema remove o serviço da O.S.
5. O sistema recalcula o valor total da O.S.
6. O sistema informa que o serviço foi removido com sucesso.


## Exceções 

- Valor inválido: informar que o valor do serviço é inválido e permitir a correção.
- Técnico não selecionado: informar que é necessário selecionar um técnico responsável.
- Falha ao alterar o serviço: manter os dados anteriores do serviço na O.S.
- Falha ao remover o serviço: manter o serviço na O.S. e informar que não foi possível realizar a remoção.

## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
