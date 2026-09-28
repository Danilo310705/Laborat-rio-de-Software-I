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

**Cadastrado com sucesso.** Tipo: sucesso. Uso: [[UC-001 - Cadastrar cliente|UC-001]], [[UC-004 - Cadastrar Serviço|UC-004]], [[UC-005 - Cadastrar produto|UC-005]], [[UC-006 - Registrar entrada de mercadoria|UC-006]], [[UC-007 - Cadastrar fornecedor|UC-007]].

## MSG-02

**CPF invalido.** Tipo: erro. Uso: [[UC-001 - Cadastrar cliente|UC-001]].

## MSG-03

**CNPJ invalido.** Tipo: erro. Uso: [[UC-001 - Cadastrar cliente|UC-001]],  [[UC-007 - Cadastrar fornecedor|UC-007]].

## MSG-04

**CPF/CNPJ já cadastrado.** Tipo: erro. Uso: [[UC-001 - Cadastrar cliente|UC-001]], [[UC-007 - Cadastrar fornecedor|UC-007]].

## MSG-05

**Nenhum cliente encontrado.** Tipo: informativo. Uso: [[UC-002 - Consultar clientes|UC-002]], [[UC-003 - Cadastrar Técnico|UC-003]].

## MSG-06

**Requisição não encontrada.** Tipo: erro. Uso original: UC-002; o PDF também aponta este ID para filtro inválido e produto não encontrado. Veja [[05_Qualidade/Riscos e Questoes em Aberto#QST-003 - Mensagens reutilizadas de forma inconsistente|QST-003]].

## MSG-07

**Valor inválido.** Tipo: erro. Uso: [[UC-004 - Cadastrar Serviço|UC-004]], [[UC-005 - Cadastrar produto|UC-005]], [[UC-006 - Registrar entrada de mercadoria|UC-006]], [[UC-011 - Adicionar serviço à O.S.|UC-011]], [[UC-018 - Editar ou Remover serviço da O.S.|UC-018]].

## MSG-08

**Erro ao realisar cadastro.** Tipo: erro. Uso: [[UC-003 - Cadastrar Técnico|UC-003]], [[UC-004 - Cadastrar Serviço|UC-004]], [[UC-005 - Cadastrar produto|UC-005]],  [[UC-007 - Cadastrar fornecedor|UC-007]], [[UC-009 - Abrir Ordem de Serviço|UC-009]], [[UC-010 - Adicionar produtos à O.S.|UC-010]], [[UC-011 - Adicionar serviço à O.S.|UC-011]].

## MSG-09

**Valor inválido, deve ser maior que zero.** Tipo: erro. Uso: [[UC-003 - Cadastrar Técnico|UC-003]],  [[UC-006 - Registrar entrada de mercadoria|UC-006]], [[UC-010 - Adicionar produtos à O.S.|UC-010]], [[UC-017 - Editar ou Remover produto da O.S.|UC-017]].

## MSG-10

**Não foi possível registrar a entrada dos produtos.** Tipo: erro. Uso: [[UC-006 - Registrar entrada de mercadoria|UC-006]].

## MSG-11

**Ordem de serviço aberta com sucesso.** Tipo: erro. Uso: [[UC-009 - Abrir Ordem de Serviço|UC-009]].

## MSG-12

**Produto cadastrado com sucesso.** Tipo: sucesso. Uso: [[UC-005 - Cadastrar produto|UC-005]].

## MSG-13

**Preencha os campos obrigatórios.** Tipo: erro. Uso: [[UC-005 - Cadastrar produto|UC-005]].

## MSG-14

**Placa invalida.** Tipo: erro. Uso: [[UC-009 - Abrir Ordem de Serviço|UC-009]].

## MSG-15

**Não foi possível abrir O.S. .** Tipo: erro. Uso: [[UC-009 - Abrir Ordem de Serviço|UC-009]].

## MSG-16

**Produto adicionado com sucesso.** Tipo: sucesso. Uso:  [[UC-010 - Adicionar produtos à O.S.|UC-010]].

## MSG-17

**Serviço adicionado com sucesso.** Tipo: sucesso. Uso:  [[UC-011 - Adicionar serviço à O.S.|UC-011]].

## MSG-18

**Nenhum produto encontrado.** Tipo: informativo. Uso:  [[UC-010 - Adicionar produtos à O.S.|UC-010]].

## MSG-19

**Nenhum serviço encontrado.** Tipo: informativo. Uso: [[UC-011 - Adicionar serviço à O.S.|UC-011]].

## MSG-20

**Tempo estimado deve ser maior que zero.** Tipo: erro. Uso: [[UC-004 - Cadastrar Serviço|UC-004]].

## MSG-21

**Usuário cadastrado com sucesso.** Tipo: sucesso. Uso: [[UC-008 - Alertar estoque mínimo|UC-008]].

## MSG-22

**Preencha os campos obrigatórios.** Tipo: erro. Uso: [[UC-001 - Cadastrar cliente|UC-001]], [[UC-003 - Cadastrar Técnico|UC-003]], [[UC-004 - Cadastrar Serviço|UC-004]], [[UC-005 - Cadastrar produto|UC-005]], [[UC-006 - Registrar entrada de mercadoria|UC-006]], [[UC-007 - Cadastrar fornecedor|UC-007]], [[UC-009 - Abrir Ordem de Serviço|UC-009]], [[UC-011 - Adicionar serviço à O.S.|UC-011]], [[UC-018 - Editar ou Remover serviço da O.S.|UC-018]].

## MSG-23

**A quantidade informada excede a quantidade disponível em estoque.** Tipo: erro. Uso: [[UC-008 - Alertar estoque mínimo|UC-008]], [[UC-017 - Editar ou Remover produto da O.S.|UC-017]].

## MSG-24

**O técnico selecionado está inativo. Selecione outro técnico.** Tipo: erro. Uso: [[UC-008 - Alertar estoque mínimo|UC-008]], [[UC-011 - Adicionar serviço à O.S.|UC-011]], [[UC-018 - Editar ou Remover serviço da O.S.|UC-018]].

## MSG-25

**O.S. finalizada com sucesso.** Tipo: sucesso. Uso: [[UC-014 - Finalizar O.S.|UC-014]].

## MSG-26

**O percentual de desconto informado é inválido. Informe um percentual válido.** Tipo: erro. Uso: [[UC-014 - Finalizar O.S.|UC-014]].

## MSG-27

**O valor do desconto informado é inválido. O desconto não pode ser maior que o valor total da O.S.** Tipo: erro. Uso: [[UC-014 - Finalizar O.S.|UC-014]].

## MSG-28

**Selecione uma forma de pagamento para finalizar a O.S.** Tipo: erro. Uso: [[UC-014 - Finalizar O.S.|UC-014]].

## MSG-29

**A O.S. possui informações obrigatórias pendentes e não pode ser finalizada. Verifique os dados informados.**  Tipo: erro. Uso: [[UC-014 - Finalizar O.S.|UC-014]].

## MSG-30

**Somente uma O.S. com status “Em andamento” pode ser finalizada.** Tipo: erro. Uso: [[UC-014 - Finalizar O.S.|UC-014]].

## MSG-31

**Não foi possível registrar o pagamento. A O.S. não foi finalizada.** Tipo: erro. Uso: [[UC-014 - Finalizar O.S.|UC-014]].

## MSG-32

**Não foi possível concluir a O.S. O pagamento não foi registrado e o status anterior foi mantido.** Tipo: erro. Uso: [[UC-014 - Finalizar O.S.|UC-014]].

## MSG-33

**Não foi possível obter as informações da O.S. para gerar o comprovante.** Tipo: erro. Uso: [[UC-015 - Emitir comprovante da O.S.|UC-015]].

## MSG-34

**Não foi possível gerar o comprovante. Tente novamente.** Tipo: erro. Uso: [[UC-015 - Emitir comprovante da O.S.|UC-015]].

## MSG-35

**Não foi possível imprimir o comprovante. Tente novamente.** Tipo: erro. Uso: [[UC-015 - Emitir comprovante da O.S.|UC-015]].

## MSG-36

**Não foi possível gerar o comprovante em PDF. Tente novamente.** Tipo: erro. Uso: [[UC-015 - Emitir comprovante da O.S.|UC-015]].

## MSG-37

**Nenhuma Ordem de Serviço foi encontrada com os critérios informados.** Tipo: informação. Uso: [[UC-016 - Consultar O.S.|UC-016]].

## MSG-38

**O critério de busca informado é inválido. Verifique os dados e tente novamente.** Tipo: erro. Uso: [[UC-016 - Consultar O.S.|UC-016]].

## MSG-39

**Não foi possível carregar os dados da Ordem de Serviço. Tente novamente.** Tipo: erro. Uso: [[UC-016 - Consultar O.S.|UC-016]].

## MSG-40

**Não foi possível realizar a alteração. Os dados anteriores foram mantidos.** Tipo: erro. Uso: [[UC-017 - Editar ou Remover produto da O.S.|UC-017]], [[UC-018 - Editar ou Remover serviço da O.S.|UC-018]].

## MSG-41

**Não foi possível realizar a remoção. Nenhuma alteração foi realizada.** Tipo: erro. Uso: [[UC-017 - Editar ou Remover produto da O.S.|UC-017]], [[UC-018 - Editar ou Remover serviço da O.S.|UC-018]].

## Diretrizes propostas

- mensagens de erro devem explicar o problema e a ação de recuperação;
- sucesso não deve ser anunciado antes da confirmação da transação;
- validações devem ser associadas ao campo e também anunciadas a tecnologias assistivas;
- mensagens técnicas e dados sensíveis não devem ser exibidos ao usuário.
