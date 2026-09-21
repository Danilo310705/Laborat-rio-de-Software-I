---
id: CA-INDEX
tipo: cenarios-de-aceitacao
status: proposto
origem: evolucao-proposta
implementacao: nao-verificada
criado_em: 2026-09-02
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, qualidade, engenharia]
tags: [sismat, aceitacao, testes]
---

# Cenários de Aceitação

Os cenários traduzem a linha de base em exemplos verificáveis. Devem ser ligados aos testes automatizados quando o repositório da aplicação estiver disponível.

## CA-001 - Criar requisição válida

```gherkin
Dado que o usuário está autenticado
E há 10 unidades disponíveis do produto P
Quando ele cria uma requisição de 3 unidades de P
Então a requisição é registrada com status Pendente
E contém um item de 3 unidades de P
E a mensagem MSG-01 é apresentada
```

Rastreia: [[UC-001 - Cadastrar cliente|UC-001]], [[02_Requisitos/Regras de Negocio/RN-03 - Status inicial pendente|RN-03]].

## CA-002 - Rejeitar quantidade inválida

```gherkin
Esquema do Cenário: quantidade não positiva
  Dado que o usuário prepara uma nova requisição
  Quando informa <quantidade> para um produto
  Então o sistema não permite confirmar
  E apresenta MSG-02

  Exemplos:
    | quantidade |
    | 0          |
    | -1         |
```

Rastreia: [[02_Requisitos/Regras de Negocio/RN-01 - Quantidade positiva|RN-01]].

## CA-003 - Rejeitar item sem estoque

```gherkin
Dado que há 2 unidades disponíveis do produto P
Quando o usuário solicita 3 unidades de P
Então a requisição não é registrada
E o sistema apresenta MSG-03 para o item P
```

Rastreia: [[02_Requisitos/Regras de Negocio/RN-02 - Limite pelo estoque disponivel|RN-02]].

## CA-004 - Isolar requisições por usuário

```gherkin
Dado que Ana e Bruno possuem requisições
E Ana está autenticada
Quando Ana lista suas requisições ou tenta abrir o ID de Bruno
Então somente os dados de Ana são retornados
E nenhum dado de Bruno é exposto
```

Rastreia: [[UC-002 - Consultar clientes|UC-002]], [[02_Requisitos/Regras de Negocio/RN-05 - Visualizar apenas requisicoes proprias|RN-05]].

## CA-005 - Rejeição exige motivo

```gherkin
Dado que uma requisição está Pendente
E um estoquista está autenticado
Quando ele tenta rejeitá-la sem motivo
Então o status permanece Pendente
E o sistema solicita um motivo
Quando ele informa um motivo e confirma
Então o status passa para Rejeitada
E o motivo fica associado à decisão
```

Rastreia: [[UC-003 - Consultar historico de serviços ou compras de um cliente|UC-003]], [[02_Requisitos/Regras de Negocio/RN-07 - Rejeicao exige motivo|RN-07]].

## CA-006 - Entrega total atualiza estoque

```gherkin
Dado que uma requisição Aprovada contém 3 unidades do produto P
E o saldo físico de P é 10
Quando o estoquista confirma a entrega total
Então a requisição passa para Entregue
E o saldo físico de P passa para 7
E uma movimentação de 3 unidades é registrada
```

Rastreia: [[UC-004 - Cadastrar Serviço|UC-004]], [[02_Requisitos/Regras de Negocio/RN-09 - Atualizar estoque apos entrega|RN-09]].

## CA-007 - Falha de estoque preserva consistência

```gherkin
Dado que uma entrega possui vários itens
Quando ocorre falha ao atualizar um dos saldos
Então nenhuma movimentação da entrega permanece gravada
E nenhum saldo permanece alterado
E a requisição mantém o estado anterior
E o sistema apresenta MSG-11
```

Rastreia: [[02_Requisitos/Requisitos Nao Funcionais#RNF-003 - Consistência transacional do estoque|RNF-003]].

## CA-008 - Impedir código de produto duplicado

```gherkin
Dado que existe um produto com código MAT-001
Quando o administrador tenta cadastrar outro produto com o mesmo código
Então o produto não é salvo
E o sistema apresenta MSG-14
```

Rastreia: [[UC-005 - Cadastrar produto|UC-005]], [[02_Requisitos/Regras de Negocio/RN-11 - Codigo de produto unico|RN-11]].

## CA-009 - Exportar relatório em PDF

```gherkin
Dado que um estoquista gerou um relatório com dados
Quando solicita exportação em PDF
Então o sistema entrega um arquivo PDF legível
E o conteúdo respeita os filtros e os dados exibidos
```

Rastreia: [[UC-006 - Registrar entrada de mercadoria|UC-006]], [[02_Requisitos/Regras de Negocio/RN-16 - Exportacao de relatorio em PDF|RN-16]].

## CA-010 - Listar somente pedidos encerrados do usuário

```gherkin
Dado que o usuário possui pedidos Pendentes, Aprovados, Rejeitados e Entregues
Quando abre “Pedidos Finalizados”
Então visualiza apenas seus pedidos Rejeitados e Entregues
```

Rastreia: [[02_Requisitos/Casos de Uso/UC-007 - Consultar pedidos finalizados|UC-007]], [[02_Requisitos/Regras de Negocio/RN-17 - Visualizar apenas pedidos proprios|RN-17]], [[02_Requisitos/Regras de Negocio/RN-18 - Exibir apenas pedidos encerrados|RN-18]].

## CA-011 - Impedir e-mail duplicado

```gherkin
Dado que existe um usuário com e-mail pessoa@exemplo.br
Quando o administrador tenta cadastrar outro usuário com o mesmo e-mail normalizado
Então o cadastro não é salvo
E o sistema apresenta MSG-23
```

Rastreia: [[02_Requisitos/Casos de Uso/UC-008 - Gerenciar usuarios|UC-008]], [[02_Requisitos/Regras de Negocio/RN-21 - Email unico|RN-21]].

## CA-012 - Bloquear gestão por perfil não autorizado

```gherkin
Dado que um usuário sem perfil Administrador está autenticado
Quando tenta chamar diretamente uma operação de gestão de usuários ou produtos
Então o servidor nega a operação
E nenhum dado é alterado
```

Rastreia: [[02_Requisitos/Regras de Negocio/RN-13 - Somente administrador gerencia produtos|RN-13]], [[02_Requisitos/Regras de Negocio/RN-19 - Somente administrador gerencia usuarios|RN-19]], [[02_Requisitos/Requisitos Nao Funcionais#RNF-001 - Autorização no servidor|RNF-001]].
