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
# UC-016 - Consultar O.S.

## Objetivo

Permitir que o usuário localize e consulte as informações de uma Ordem de Serviço cadastrada.

| Campo           | Valor                                                               |
| --------------- | ------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]      |
| Gatilho         | Usuário seleciona “Consultar O.S.”                                  |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]] |
| Sucesso         | O.S. localizada e suas informações exibidas                         |
| Garantia minima | A consulta não altera nenhuma informação da O.S.                    |

## Fluxo principal

| Passo | Tipo | Comportamento                                                |
| ----: | :--: | ------------------------------------------------------------ |
|     1 |  EV  | Usuário acessa o sistema.                                    |
|     2 |  EV  | Usuário seleciona “Consultar O.S.”                           |
|     3 |  RS  | Sistema exibe a tela de consulta de Ordens de Serviço.       |
|     4 |  EV  | Usuário informa um critério de busca.                        |
|     5 |  RS  | Sistema busca as O.S. correspondentes ao critério informado. |
|     6 |  RS  | Sistema exibe as O.S. encontradas.                           |
|     7 |  EV  | Usuário seleciona a O.S. desejada.                           |
|     8 |  RS  | Sistema exibe os detalhes da O.S. selecionada.               |

## Alternativa A - Buscar por diferentes critérios

1. No passo 4, o usuário pode realizar a busca pelo número da O.S., nome do cliente ou placa do veículo.
2. O sistema realiza a busca utilizando o critério informado.
3. O fluxo continua no passo 6.
   
## Alternativa B - Filtrar por status

1. O usuário seleciona um status para filtrar as Ordens de Serviço.
2. O sistema exibe somente as O.S. correspondentes ao status selecionado.
3. O usuário seleciona a O.S. desejada.
4. O fluxo continua no passo 8.

## Exceções 


- 5a - Nenhuma O.S. encontrada: exibir [[Catalogo de Mensagens#MSG-37|MSG-37]] e permitir uma nova busca.
- 5b - Critério de busca inválido: exibir [[Catalogo de Mensagens#MSG-38|MSG-38]] e permitir a correção.
- 8a - Falha ao carregar a O.S.: exibir [[Catalogo de Mensagens#MSG-39|MSG-39]].




## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
