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

| Campo           | Valor                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                                                  |
| Gatilho         | Usuário seleciona “Emitir Comprovante” em uma O.S.                                                                              |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]] e O.S. previamente cadastrada                               |
| Sucesso         | Comprovante da O.S. gerado com sucesso conforme [[RN-30 - Dados do comprovante da O.S.\|RN-30]]                                 |
| Garantia minima | Em caso de falha na emissão, nenhuma informação da O.S. deve ser alterada conforme [[RN-31 - Emissão não altera a O.S.\|RN-31]] |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                                                      |
| ----: | :--: | ---------------------------------------------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa a O.S. desejada.                                                                                                    |
|     2 |  EV  | Usuário seleciona “Emitir Comprovante”.                                                                                            |
|     3 |  RS  | Sistema reúne as informações registradas na O.S. conforme [[RN-30 - Dados do comprovante da O.S.\|RN-30]].                         |
|     4 |  RS  | Sistema gera o comprovante da O.S. conforme [[RN-30 - Dados do comprovante da O.S.\|RN-30]]                                        |
|     5 |  RS  | Sistema exibe o comprovante ao usuário  conforme [[RN-31 - Emissão não altera a O.S.\|RN-31]].                                     |
|     6 |  EV  | Usuário solicita a impressão do comprovante.                                                                                       |
|     7 |  RS  | Sistema encaminha o comprovante para impressão sem alterar os dados da O.S. conforme [[RN-31 - Emissão não altera a O.S.\|RN-31]]. |


## Alternativa A - Salvar comprovante em PDF

1. Após a geração do comprovante, o usuário seleciona a opção para salvar em PDF.
2. O sistema gera o arquivo PDF utilizando as informações da O.S. conforme [[RN-30 - Dados do comprovante da O.S.|RN-30]]
3. O sistema disponibiliza o arquivo ao usuário sem alterar os dados da O.S. conforme [[RN-31 - Emissão não altera a O.S.|RN-31]].
## Exceções 


- 3a - Dados da O.S. não encontrados: exibir [[Catalogo de Mensagens#MSG-33|MSG-33]] conforme [[RN-30 - Dados do comprovante da O.S.|RN-30]].
- 4a - Falha ao gerar comprovante: exibir [[Catalogo de Mensagens#MSG-34|MSG-34]] e manter a O.S. inalterada conforme [[RN-31 - Emissão não altera a O.S.|RN-31]].
- 7a - Falha na impressão: exibir [[Catalogo de Mensagens#MSG-35|MSG-35]], manter o comprovante disponível para uma nova tentativa e manter a O.S. inalterada conforme [[RN-31 - Emissão não altera a O.S.|RN-31]].
- A2a - Falha ao gerar PDF: exibir [[Catalogo de Mensagens#MSG-36|MSG-36]] e manter a O.S. inalterada conforme [[RN-31 - Emissão não altera a O.S.|RN-31]].




## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]] e [[03_Modelo de Dominio/Dicionario de Dados#Perfil|Perfil]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-12 - Gerenciar usuários|IMG-12]] e [[06_Interfaces/Mapa de Interfaces#IMG-13 - Cadastrar usuário|IMG-13]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
