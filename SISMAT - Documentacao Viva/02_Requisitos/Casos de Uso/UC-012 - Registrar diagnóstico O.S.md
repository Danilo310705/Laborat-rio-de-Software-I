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

# UC-012 - Registrar diagnóstico O.S

## Objetivo

Permitir que o usuário registre o diagnóstico técnico identificado durante a análise do veículo.

| Campo           | Valor                                                                  |
| --------------- | ---------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]         |
| Gatilho         | Usuário seleciona “Registrar Diagnóstico” em uma O.S.                  |
| Pré-condições   | O.S. previamente cadastrada                                            |
| Sucesso         | Diagnóstico registrado e vinculado à O.S.                              |
| Garantia minima | Em caso de falha, o diagnóstico anterior da O.S. não deve ser alterado |

## Fluxo principal

| Passo | Tipo | Comportamento                                                              |
| ----: | :--: | -------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa uma O.S. cadastrada.                                        |
|     2 |  EV  | Usuário seleciona “Registrar Diagnóstico”.                                 |
|     3 |  RS  | Sistema exibe o problema relatado pelo cliente e o campo para diagnóstico. |
|     4 |  EV  | Usuário informa o diagnóstico técnico do veículo.                          |
|     5 |  EV  | Usuário confirma o diagnóstico.                                            |
|     6 |  RS  | Sistema valida os dados informados.                                        |
|     7 |  RS  | Sistema registra o diagnóstico na O.S.                                     |
|     8 |  RS  | Sistema informa que o diagnóstico foi registrado com sucesso.              |


## Alternativa A - Alterar diagnóstico

1. Caso a O.S. já possua um diagnóstico, o sistema exibe o diagnóstico registrado.
2. O usuário altera as informações necessárias.
3. O usuário confirma a alteração.
4. O sistema atualiza o diagnóstico da O.S.

## Exceções

- Serviço não encontrado: exibe [[02_Requisitos/Catalogo de Mensagens#MSG-19|MSG-19]] e permitir uma nova busca.
- Diagnóstico não informado: informar que o diagnóstico deve ser preenchido.
- Falha ao registrar diagnóstico: informar que não foi possível registrar o diagnóstico e manter os dados anteriores.

## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
