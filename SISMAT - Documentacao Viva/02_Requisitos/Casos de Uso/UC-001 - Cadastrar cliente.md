---
id: UC-001
tipo: caso-de-uso
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
prioridade: alta
ator_principal: usuario
criado_em: 2026-03-26
atualizado_em: 2026-09-02
ultima_revisao: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, engenharia, qualidade]
tags: [sismat, caso-de-uso, requisicao]
---

# UC-001 - Cadastrar cliente

## Objetivo

Cadastrar PF/PJ, dados de identificação, contato e endereço

| Campo           | Valor                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                      |
| Gatilho         | Usuário escolhe “Cadastrar Novo Cliente”                                                            |
| Pré-condições   | Usuário autenticado conforme [[02_Requisitos/Regras de Negocio/RN-04 - Usuario autenticado\|RN-04]] |
| Sucesso         | Cliente é registrado                                                                                |
| Garantia mínima | Em caso de falha, nenhum cadastro incompleto do cliente deve ser registrado                         |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                    |
| ----: | :--: | -------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                                        |
|     2 |  EV  | Usuário seleciona “Cadastrar Novo Cliente”.                                      |
|     3 |  RS  | Sistema exibe a tela de cadastro de cliente.                                     |
|     4 |  EV  | Usuário seleciona o tipo de cliente: Pessoa Física (PF) ou Pessoa Jurídica (PJ). |
|     5 |  RS  | Sistema exibe os campos correspondentes ao tipo de cliente selecionado.          |
|     6 |  EV  | Usuário preenche os dados de identificação, endereço e pelo menos um contato.    |
|     7 |  EV  | Usuário confirma o cadastro.                                                     |
|     8 |  RS  | Sistema valida os dados informados.                                              |
|     9 |  RS  | Sistema registra o cliente, endereço e contato.                                  |
|    10 |  RS  | Sistema exibe [[02_Requisitos/Catalogo de Mensagens#MSG-01\|MSG-01]]             |

## Alternativa A - Cadastrar Pessoa Física

1. No passo 4, o usuário seleciona “Pessoa Física”.
2. O sistema exibe os campos específicos para cadastro de pessoa física.
3. O fluxo continua no passo 5.

## Alternativa B - Cadastrar Pessoa Jurídica

1. No passo 4, o usuário seleciona “Pessoa Jurídica”.
2. O sistema exibe os campos específicos para cadastro de pessoa jurídica.
3. O fluxo continua no passo 5.

## Alternativa C - Adicionar múltiplos contatos

1. No passo 6, o usuário seleciona “Adicionar outro contato”.
2. O sistema disponibiliza novos campos para preenchimento do contato.
3. O usuário informa os dados do novo contato.
4. O usuário pode repetir o processo para adicionar outros contatos.
5. O fluxo retorna ao passo 7.

## Exceções

| Origem | Condição                                                    | Resposta                                                                                   |
| ------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 8a     | CPF informado possui quantidade de dígitos diferente de 11  | Exibir [[02_Requisitos/Catalogo de Mensagens#MSG-02\|MSG-02]] e retornar ao preenchimento. |
| 8b     | CNPJ informado possui quantidade de dígitos diferente de 14 | Exibir [[02_Requisitos/Catalogo de Mensagens#MSG-03\|MSG-03]] e retornar ao preenchimento. |
| 8      | CPF/CNPJ já cadastrado                                      | Exibir [[Catalogo de Mensagens#MSG-04 \| MSG-04]] e retornar ao preenchimento.             |
| 8      | Campo obrigatório não preenchido                            | Exibir [[Catalogo de Mensagens#MSG-22\|MSG-22]] e solicitar seu preenchimento.             |

'*conferir daqui pra baixo*'
## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]], [[03_Modelo de Dominio/Dicionario de Dados#Produto|Produto]], [[03_Modelo de Dominio/Dicionario de Dados#Requisicao|Requisicao]], [[03_Modelo de Dominio/Dicionario de Dados#Item_requisicao|Item_requisicao]].
- Protótipos da fonte: [[06_Interfaces/Mapa de Interfaces#IMG-01 - Nova requisição|IMG-01]] e [[06_Interfaces/Mapa de Interfaces#IMG-02 - Itens da requisição|IMG-02]].
- Sequência: [[04_Arquitetura/Diagramas de Sequencia#Criar requisição|Criar requisição]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-001 - Criar requisição válida|CA-001]], [[05_Qualidade/Cenarios de Aceitacao#CA-002 - Rejeitar quantidade inválida|CA-002]] e [[05_Qualidade/Cenarios de Aceitacao#CA-003 - Rejeitar item sem estoque|CA-003]].

## Pontos a decidir

- [[05_Qualidade/Riscos e Questoes em Aberto#QST-001 - Reserva ou baixa de estoque|QST-001]]: validar disponibilidade não impede concorrência entre requisições.
- Definir se produtos sem saldo aparecem na lista ou aparecem desabilitados.
