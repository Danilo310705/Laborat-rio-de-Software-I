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

# UC-009 - Abrir Ordem de Serviço

## Objetivo

Permitir que o usuário abra uma Ordem de Serviço (O.S.), vinculando um cliente, veículo, produtos e serviços que serão realizados.

| Campo           | Valor                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                                              |
| Gatilho         | Usuário seleciona “Abrir Nova O.S.”                                                                                         |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]] e cliente previamente cadastrado                        |
| Sucesso         | O.S. registrada e vinculada ao cliente e ao veículo, com status `Aberta` conforme [[RN-23 - Status inicial da O.S.\|RN-23]] |
| Garantia mínima | Em caso de falha, nenhuma O.S. incompleta deve ser registrada.                                                              |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                                                                                                          |
| ----: | :--: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                                                                                                                                              |
|     2 |  EV  | Usuário seleciona “Abrir Nova O.S.”                                                                                                                                                    |
|     3 |  RS  | Sistema exibe a tela de abertura da O.S.                                                                                                                                               |
|     4 |  EV  | Usuário busca e seleciona o cliente.                                                                                                                                                   |
|     5 |  EV  | Usuário informa a placa do veículo.                                                                                                                                                    |
|     6 |  RS  | Sistema busca um veículo cadastrado com a placa informada conforme [[RN-07 - Placa única do veículo\|RN-07]].                                                                          |
|     7 |  RS  | Sistema verifica se o veículo está vinculado ao cliente selecionado conforme [[RN-08 - Veículo vinculado ao cliente\|RN-08]] e [[RN-09 - Veículo pertencente a outro cliente\|RN-09]]. |
|     8 |  RS  | Sistema preenche automaticamente os dados do veículo conforme [[RN-10 - Preenchimento automático do veículo\|RN-10]].                                                                  |
|     9 |  EV  | Usuário informa o problema relatado pelo cliente.                                                                                                                                      |
|    10 |  EV  | Usuário confirma a abertura da O.S.                                                                                                                                                    |
|    11 |  RS  | Sistema valida os dados informados.                                                                                                                                                    |
|    12 |  RS  | Sistema registra a O.S. vinculada ao cliente e ao veículo conforme [[RN-08 - Veículo vinculado ao cliente\|RN-08]].                                                                    |
|    13 |  RS  | Sistema registra a O.S. com status `Aberta` conforme [[RN-23 - Status inicial da O.S.\|RN-23]].                                                                                        |
|    14 |  RS  | Sistema exibe [[02_Requisitos/Catalogo de Mensagens#MSG-11\|MSG-11]].                                                                                                                  |

## Alternativa A - Veículo não cadastrado

1. No passo 6, o sistema não encontra nenhum veículo com a placa informada.
2. O sistema disponibiliza os demais campos para cadastro do veículo.
3. O usuário informa os dados do veículo, como marca, modelo e ano.
4. O sistema valida os dados do novo veículo e verifica novamente a placa conforme [[RN-07 - Placa única do veículo|RN-07]].
5. O fluxo retorna ao passo 9.
6. Ao confirmar a abertura da O.S., o sistema registra o novo veículo e o vincula ao cliente selecionado conforme [[RN-08 - Veículo vinculado ao cliente|RN-08]].
7. O sistema registra a O.S. vinculada ao novo veículo.
8. O sistema define o status inicial como `Aberta` conforme [[RN-23 - Status inicial da O.S.|RN-23]].
9. O sistema exibe [[Catalogo de Mensagens#MSG-11|MSG-11]].

## Exceções

- 4a - Cliente não selecionado: exibir [[02_Requisitos/Catalogo de Mensagens#MSG-22|MSG-22]] e solicitar a seleção do cliente.
- 5a - Placa inválida: exibir [[02_Requisitos/Catalogo de Mensagens#MSG-14|MSG-14]] e permitir a correção.
- 7a - Veículo vinculado a outro cliente: impedir a continuidade conforme [[RN-09 - Veículo pertencente a outro cliente|RN-09]] e informar que o veículo está vinculado a outro cliente, solicitando a verificação do cliente selecionado.
- 11a - Campo obrigatório: [[02_Requisitos/Catalogo de Mensagens#MSG-22|MSG-22]] e solicitar a seleção do cliente.
- 12a - Falha ao registrar a O.S.: exibir [[02_Requisitos/Catalogo de Mensagens#MSG-15|MSG-15]]  e não realizar gravação parcial.
- A4a - Dados obrigatórios do novo veículo ausentes: exibir [[02_Requisitos/Catalogo de Mensagens#MSG-22|MSG-22]] e solicitar o preenchimento.
- A6a - Falha ao cadastrar o veículo:  [[Catalogo de Mensagens#MSG-08|MSG-08]] e não registrar a O.S. parcialmente.



## Remoção e segurança

A descrição geral promete remover usuários, mas o fluxo não detalha a operação. Veja [[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros|ADR-002]]. A “senha” do modelo de dados representa credencial e nunca deve ser persistida em texto puro; veja [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].

## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]], [[03_Modelo de Dominio/Dicionario de Dados#Cliente|Cliente]], [[03_Modelo de Dominio/Dicionario de Dados#Veiculo|Veiculo]], [[03_Modelo de Dominio/Dicionario de Dados#Ordem_Servico|Ordem_Servico]].
- Protótipos:  [[06_Interfaces/Mapa de Interfaces#IMG-09 - Abrir Ordem de Serviço Placa Registrada|IMG-09]], [[06_Interfaces/Mapa de Interfaces#IMG-10 - Abrir Ordem de Serviço Placa Não Registrada|IMG-10]] e [[06_Interfaces/Mapa de Interfaces#IMG-11 - Ordem de Serviço|IMG-11]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
