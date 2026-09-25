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
# UC-015 - Emitir comprovante da O.S.

## Objetivo

Permitir que o usuário emita um comprovante contendo as informações da Ordem de Serviço.

| Campo           | Valor                                                                     |
| --------------- | ------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]            |
| Gatilho         | Usuário seleciona “Emitir Comprovante” em uma O.S.                        |
| Pré-condições   | O.S. previamente cadastrada                                               |
| Sucesso         | Comprovante da O.S. gerado com sucesso                                    |
| Garantia minima | Em caso de falha na emissão, nenhuma informação da O.S. deve ser alterada |

## Fluxo principal

| Passo | Tipo | Comportamento                                    |
| ----: | :--: | ------------------------------------------------ |
|     1 |  EV  | Usuário acessa a O.S. desejada.                  |
|     2 |  EV  | Usuário seleciona “Emitir Comprovante”.          |
|     3 |  RS  | Sistema reúne as informações registradas na O.S. |
|     4 |  RS  | Sistema gera o comprovante da O.S.               |
|     5 |  RS  | Sistema exibe o comprovante ao usuário.          |
|     6 |  EV  | Usuário solicita a impressão do comprovante.     |
|     7 |  RS  | Sistema encaminha o comprovante para impressão.  |


## Alternativa A - ## Salvar comprovante em PDF

1. Após a geração do comprovante, o usuário seleciona a opção para salvar em PDF.
2. O sistema gera o arquivo PDF com as informações da O.S.
3. O sistema disponibiliza o arquivo ao usuário.

## Exceções 


- Dados da O.S. não encontrados: informar que não foi possível obter as informações necessárias para gerar o comprovante.
- Falha ao gerar comprovante: informar que não foi possível gerar o comprovante.
- Falha na impressão: informar que não foi possível realizar a impressão, mantendo o comprovante disponível para uma nova tentativa.

## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
