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

# UC-008 - Abrir OS vinculando cliente

## Objetivo

Permitir que o administrador cadastre e edite usuários e seus perfis de acesso.

| Campo          | Valor                                                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Ator principal | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                                                |
| Gatilho        | Administrador acessa “Usuários”                                                                                               |
| Pré-condições  | Administrador autenticado conforme [[02_Requisitos/Regras de Negocio/RN-19 - Somente administrador gerencia usuarios\|RN-19]] |
| Sucesso        | Usuário válido persistido com e-mail único                                                                                    |

## Fluxo principal - cadastrar

| Passo | Tipo | Comportamento |
|---:|:---:|---|
| 1 | EV | Administrador acessa o menu “Usuários”. |
| 2 | EV | Seleciona “Novo Usuário”. |
| 3 | EV | Preenche nome, setor, e-mail, credencial e perfil. |
| 4 | RS | Sistema valida [[02_Requisitos/Regras de Negocio/RN-20 - Campos obrigatorios de usuario\|RN-20]] e [[02_Requisitos/Regras de Negocio/RN-21 - Email unico\|RN-21]]. |
| 5 | EV | Administrador confirma. |
| 6 | RS | Sistema salva o usuário. |
| 7 | RS | Sistema exibe [[02_Requisitos/Catalogo de Mensagens#MSG-21\|MSG-21]]. |

## Alternativa - editar

1. Administrador seleciona um usuário.
2. Altera os dados permitidos.
3. Sistema valida e salva as alterações.

## Exceções

- Campo obrigatório ausente: [[02_Requisitos/Catalogo de Mensagens#MSG-22|MSG-22]].
- E-mail já usado: [[02_Requisitos/Catalogo de Mensagens#MSG-23|MSG-23]].
- Usuário não encontrado: [[02_Requisitos/Catalogo de Mensagens#MSG-24|MSG-24]].

## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
