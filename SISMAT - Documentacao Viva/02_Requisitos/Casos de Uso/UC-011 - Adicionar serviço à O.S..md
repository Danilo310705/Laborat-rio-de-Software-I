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

# UC-011 - Adicionar serviço à O.S.

## Objetivo

Permitir que o usuário adicione serviços à Ordem de Serviço, definindo o valor cobrado e o técnico responsável pela execução.

| Campo           | Valor                                                                  |
| --------------- | ---------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]         |
| Gatilho         | Usuário seleciona “Adicionar Serviço” em uma O.S.                      |
| Pré-condições   | O.S. previamente cadastrada e serviço cadastrado no sistema            |
| Sucesso         | Serviço adicionado à O.S. com valor e técnico responsável              |
| Garantia minima | Em caso de falha, nenhum serviço incompleto deve ser adicionado à O.S. |

## Fluxo principal

| Passo | Tipo | Comportamento                                                         |
| ----: | :--: | --------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa uma O.S. cadastrada.                                   |
|     2 |  EV  | Usuário seleciona “Adicionar Serviço”.                                |
|     3 |  RS  | Sistema exibe os serviços cadastrados.                                |
|     4 |  EV  | Usuário seleciona o serviço desejado.                                 |
|     5 |  RS  | Sistema preenche automaticamente o valor padrão do serviço.           |
|     6 |  EV  | Usuário seleciona o técnico responsável pela execução do serviço.     |
|     7 |  EV  | Usuário confirma a inclusão do serviço.                               |
|     8 |  RS  | Sistema valida os dados informados.                                   |
|     9 |  RS  | Sistema adiciona o serviço à O.S. com o valor e técnico responsável.  |
|    10 |  RS  | Sistema atualiza o valor total da O.S.                                |
|    11 |  RS  | Sistema exibe  [[02_Requisitos/Catalogo de Mensagens#MSG-17\|MSG-17]] |

## Alternativa A - Alterar valor do serviço

1. Após o passo 5, o usuário altera o valor preenchido automaticamente.
2. O sistema utiliza o valor informado somente para aquele serviço naquela O.S.
3. O valor padrão cadastrado para o serviço permanece inalterado.
4. O fluxo continua no passo 6.

## Alternativa B - Adicionar vários serviços

1. Após adicionar um serviço, o usuário seleciona “Adicionar Serviço” novamente.
2. O usuário seleciona outro serviço e o técnico responsável.
3. O processo é repetido para os demais serviços necessários.

## Exceções

- Serviço não encontrado: exibe [[02_Requisitos/Catalogo de Mensagens#MSG-19|MSG-19]] e permitir uma nova busca.
- Técnico não selecionado: informar que é necessário selecionar o técnico responsável.
8a - Valor inválido: informar que o valor do serviço é inválido e permitir a correção.
9a - Falha ao adicionar o serviço: informar que não foi possível adicionar o serviço à O.S. e não realizar gravação parcial.

## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
