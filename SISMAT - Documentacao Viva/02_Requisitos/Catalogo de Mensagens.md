---
id: MSG-INDEX
tipo: catalogo-de-mensagens
status: em-revisao
origem: modelo-pdf
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, ux]
tags: [sismat, mensagens, interface]
---

# Catálogo de Mensagens

Os textos abaixo preservam a intenção do PDF. Antes da implementação, revisar tom, contexto, acessibilidade e ações de recuperação.

## MSG-01
`*conferir se é melhor colocar que é do cliente ou deixar geral*`
**Cadastrado com sucesso.** Tipo: sucesso. Uso: [[UC-001 - Cadastrar cliente|UC-001]], [[UC-004 - Cadastrar Serviço|UC-004]], [[UC-005 - Cadastrar produto|UC-005]].

## MSG-02

**CPF invalido.** Tipo: erro. Uso: [[UC-001 - Cadastrar cliente|UC-001]].

## MSG-03

**CNPJ invalido.** Tipo: erro. Uso: [[UC-001 - Cadastrar cliente|UC-001]].

## MSG-04

**CPF/CNPJ já cadastrado.** Tipo: erro. Uso: [[UC-001 - Cadastrar cliente|UC-001]].

## MSG-05

**Nenhum cliente encontrado.** Tipo: informativo. Uso: [[UC-002 - Consultar clientes|UC-002]], [[UC-003 - Consultar historico de serviços ou compras de um cliente|UC-003]].

## MSG-06

**Requisição não encontrada.** Tipo: erro. Uso original: UC-002; o PDF também aponta este ID para filtro inválido e produto não encontrado. Veja [[05_Qualidade/Riscos e Questoes em Aberto#QST-003 - Mensagens reutilizadas de forma inconsistente|QST-003]].

## MSG-07

**Valor inválido.** Tipo: erro. Uso: [[UC-004 - Cadastrar Serviço|UC-004]], [[UC-005 - Cadastrar produto|UC-005]].

## MSG-08

**Erro ao realisar cadastro.** Tipo: erro. Uso: [[UC-004 - Cadastrar Serviço|UC-004]], [[UC-005 - Cadastrar produto|UC-005]].

## MSG-09

**Valor inválido, deve ser maior que zero.** Tipo: erro. Uso: [[UC-003 - Consultar historico de serviços ou compras de um cliente|UC-003]],  [[UC-006 - Registrar entrada de mercadoria|UC-006]].

## MSG-10

**Entrega realizada com sucesso.** Tipo: sucesso. Uso: [[UC-004 - Cadastrar Serviço|UC-004]].

## MSG-11

**Erro ao atualizar estoque.** Tipo: erro. Uso: [[UC-004 - Cadastrar Serviço|UC-004]].

## MSG-12

**Produto cadastrado com sucesso.** Tipo: sucesso. Uso: [[UC-005 - Cadastrar produto|UC-005]].

## MSG-13

**Preencha os campos obrigatórios.** Tipo: erro. Uso: [[UC-005 - Cadastrar produto|UC-005]].

## MSG-14

**Produto já cadastrado.** Tipo: erro. Uso: [[UC-005 - Cadastrar produto|UC-005]].

## MSG-15

**Relatório gerado com sucesso.** Tipo: sucesso. Uso: [[UC-006 - Registrar entrada de mercadoria|UC-006]].

## MSG-16

**Filtro inválido.** Tipo: erro. Uso: [[UC-006 - Registrar entrada de mercadoria|UC-006]].

## MSG-17

**Nenhum dado encontrado.** Tipo: informativo. Uso: [[UC-006 - Registrar entrada de mercadoria|UC-006]].

## MSG-18

**Erro ao gerar relatório.** Tipo: erro. Uso: [[UC-006 - Registrar entrada de mercadoria|UC-006]].

## MSG-19

**Nenhum pedido encontrado.** Tipo: informativo. Uso: [[02_Requisitos/Casos de Uso/UC-007 - Consultar pedidos finalizados|UC-007]].

## MSG-20

**Filtro inválido.** Tipo: erro. Uso: [[02_Requisitos/Casos de Uso/UC-007 - Consultar pedidos finalizados|UC-007]].

## MSG-21

**Usuário cadastrado com sucesso.** Tipo: sucesso. Uso: [[02_Requisitos/Casos de Uso/UC-008 - Gerenciar usuarios|UC-008]].

## MSG-22

**Preencha os campos obrigatórios.** Tipo: erro. Uso: [[UC-004 - Cadastrar Serviço|UC-004]] , [[UC-001 - Cadastrar cliente|UC-001]], [[UC-005 - Cadastrar produto|UC-005]], [[UC-006 - Registrar entrada de mercadoria|UC-006]] .

## MSG-23

**E-mail já cadastrado.** Tipo: erro. Uso: [[02_Requisitos/Casos de Uso/UC-008 - Gerenciar usuarios|UC-008]].

## MSG-24

**Usuário não encontrado.** Tipo: erro. Uso: [[02_Requisitos/Casos de Uso/UC-008 - Gerenciar usuarios|UC-008]].

## Diretrizes propostas

- mensagens de erro devem explicar o problema e a ação de recuperação;
- sucesso não deve ser anunciado antes da confirmação da transação;
- validações devem ser associadas ao campo e também anunciadas a tecnologias assistivas;
- mensagens técnicas e dados sensíveis não devem ser exibidos ao usuário.
