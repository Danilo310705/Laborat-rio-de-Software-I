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

# UC-008 - Alertar estoque mínimo

## Objetivo

Alertar o usuário quando a quantidade disponível de um produto atingir ou ficar abaixo do estoque mínimo definido.  

| Campo           | Valor                                                               |
| --------------- | ------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Sistema]]      |
| Gatilho         | Quantidade do produto é atualisada                                  |
| Pré-condições   | Produto cadastrado com estoque mínimo definido                      |
| Sucesso         | Alerta de estoque mínimo é gerado para o produto                    |
| Garantia minima | A quantidade atual do produto não é alterada pela geração do alerta |

## Fluxo principal - cadastrar

| Passo | Tipo | Comportamento                                                                        |
| ----: | :--: | ------------------------------------------------------------------------------------ |
|     1 |  RS  | Sistema atualiza a quantidade do produto em estoque.                                 |
|     2 |  RS  | Sistema verifica o estoque mínimo definido para o produto.                           |
|     3 |  RS  | Sistema identifica que a quantidade atual atingiu ou ficou abaixo do estoque mínimo. |
|     4 |  RS  | Sistema gera um alerta de estoque mínimo.                                            |
|     5 |  RS  | Sistema exibe ao usuário qual produto atingiu o estoque mínimo.                      |


## Alternativa - Estoque acima do mínimo

1. No passo 3, o sistema identifica que a quantidade atual está acima do estoque mínimo.
2. O sistema não gera alerta e encerra a verificação.

## Exceções

- Falha ao gerar o alerta: o sistema mantém a quantidade atual do produto e registra a falha na geração do alerta.


'*conferir daqui pra baixo*'
## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].


## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
