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

| Campo           | Valor                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                                                                             |
| Gatilho         | Usuário seleciona “Registrar Diagnóstico” em uma O.S.                                                                                                      |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]] e O.S. previamente cadastrada conforme [[RN-25 - Diagnóstico vinculado à O.S.\|RN-25]] |
| Sucesso         | Diagnóstico registrado e vinculado à O.S. conforme [[RN-25 - Diagnóstico vinculado à O.S.\|RN-25]]                                                         |
| Garantia minima | Em caso de falha, o diagnóstico anterior da O.S. não deve ser alterado conforme [[RN-26 - Preservação do diagnóstico anterior\|RN-26]]                     |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                    |
| ----: | :--: | ------------------------------------------------------------------------------------------------ |
|     1 |  EV  | Usuário acessa uma O.S. cadastrada.                                                              |
|     2 |  EV  | Usuário seleciona “Registrar Diagnóstico”.                                                       |
|     3 |  RS  | Sistema exibe o problema relatado pelo cliente e o campo para diagnóstico.                       |
|     4 |  EV  | Usuário informa o diagnóstico técnico do veículo.                                                |
|     5 |  EV  | Usuário confirma o diagnóstico.                                                                  |
|     6 |  RS  | Sistema valida os dados informados.                                                              |
|     7 |  RS  | Sistema registra o diagnóstico na O.S. conforme [[RN-25 - Diagnóstico vinculado à O.S.\|RN-25]]. |
|     8 |  RS  | Sistema informa que o diagnóstico foi registrado com sucesso.                                    |


## Alternativa A - Alterar diagnóstico

1. 1. Caso a O.S. já possua um diagnóstico, o sistema exibe o diagnóstico registrado.
2. O usuário altera as informações necessárias.
3. O usuário confirma a alteração.
4. O sistema valida o novo diagnóstico.   
5. O sistema atualiza o diagnóstico somente após a nova informação ser persistida com sucesso conforme [[RN-26 - Preservação do diagnóstico anterior|RN-26]].
6. O sistema informa que o diagnóstico foi atualizado com sucesso.

## Exceções

- 6a - Diagnóstico não informado: informar que o diagnóstico deve ser preenchido e permitir a correção.
- 7a - Falha ao registrar diagnóstico: informar que não foi possível registrar o diagnóstico e manter os dados anteriores conforme [[RN-26 - Preservação do diagnóstico anterior|RN-26]].
- A5a - Falha ao alterar diagnóstico: informar que não foi possível realizar a alteração e manter o diagnóstico anterior conforme [[RN-26 - Preservação do diagnóstico anterior|RN-26]].


## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]], [[03_Modelo de Dominio/Dicionario de Dados#Ordem_Servico|Ordem_Servico]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-14 - Registrar diagnóstico O.S|IMG-14]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
