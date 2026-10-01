---
id: UC-007
tipo: caso-de-uso
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
prioridade: baixa
ator_principal: usuario
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, engenharia]
tags: [sismat, caso-de-uso, historico]
---

# UC-007 - Cadastrar fornecedor

## Objetivo

Permitir que o usuário cadastre fornecedores e vincule os produtos fornecidos por eles.

| Campo          | Valor                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Ator principal | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                      |
| Gatilho        | Usuário seleciona “Cadastrar Novo Fornecedor”                                                       |
| Pré-condições  | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]] |
| Sucesso        | Fornecedor cadastrado e produtos selecionados vinculados a ele                                      |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                                   |
| ----: | :--: | --------------------------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa o sistema.                                                                                       |
|     2 |  EV  | Usuário seleciona “Cadastrar Novo Fornecedor”                                                                   |
|     3 |  RS  | Sistema exibe a tela de cadastro de fornecedor.                                                                 |
|     4 |  EV  | Usuário preenche os dados do fornecedor, incluindo CNPJ conforme [[RN-02 - CPF ou CNPJ válido e único\|RN-02]]. |
|     5 |  EV  | Usuário seleciona os produtos fornecidos pelo fornecedor.                                                       |
|     6 |  EV  | Usuário confirma o cadastro.                                                                                    |
|     7 |  RS  | Sistema valida os dados informados e o CNPJ conforme [[RN-02 - CPF ou CNPJ válido e único\|RN-02]].             |
|     8 |  RS  | Sistema registra o fornecedor e vincula os produtos selecionados.                                               |
|     9 |  RS  | Sistema exibe [[02_Requisitos/Catalogo de Mensagens#MSG-01\|MSG-01]]                                            |
## Alternativa  - Fornecedor sem produtos vinculados

1. No passo 5, o usuário não seleciona nenhum produto.
2. O usuário confirma o cadastro normalmente.
3. O sistema valida os dados do fornecedor e o CNPJ conforme [[RN-02 - CPF ou CNPJ válido e único|RN-02]].
4. O sistema cadastra o fornecedor sem produtos vinculados.
5. O sistema exibe MSG-01.

## Exceções

- 7a - Dados obrigatórios não preenchidos: exibir [[02_Requisitos/Catalogo de Mensagens#MSG-22|MSG-22]] e retornar ao preenchimento..
- 7b - CNPJ já cadastrado: exibe [[02_Requisitos/Catalogo de Mensagens#MSG-04|MSG-04]] e impedir o cadastro conforme [[RN-02 - CPF ou CNPJ válido e único|RN-02]].
- 7c - CNPJ inválido: exibe [[02_Requisitos/Catalogo de Mensagens#MSG-03|MSG-03]] e permitir a correção conforme [[RN-02 - CPF ou CNPJ válido e único|RN-02]].
- 8a - Falha ao cadastrar fornecedor: exibir [[Catalogo de Mensagens#MSG-08|MSG-08]] e não realizar gravação parcial.


## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]], [[03_Modelo de Dominio/Dicionario de Dados#Fornecedor|Fornecedor]], [[03_Modelo de Dominio/Dicionario de Dados#Fornecedor_Produto|Fornecedor_Produto]], [[03_Modelo de Dominio/Dicionario de Dados#Produto|Produto]].
- Protótipo: [[06_Interfaces/Mapa de Interfaces#IMG-07 - Cadastrar fornecedor|IMG-07]].

## Critério de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-010 - Listar somente pedidos encerrados do usuário|CA-010]].
