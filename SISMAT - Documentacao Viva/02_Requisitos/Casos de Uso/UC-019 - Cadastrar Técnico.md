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

## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
