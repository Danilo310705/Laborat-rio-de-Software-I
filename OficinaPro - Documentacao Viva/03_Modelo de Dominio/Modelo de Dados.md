---
id: MOD-DADOS-001
tipo: modelo-de-dados
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [engenharia, dados]
tags: [sismat, dados, der]
---

# Modelo de Dados

O diagrama consolida as estruturas repetidas nos casos de uso e o DER da fonte. É um modelo lógico, ainda não confrontado com o esquema real.

```mermaid
erDiagram

    USUARIO {
        int id_usuario PK
        string nome
        string email UK
        string senha
    }

    CLIENTE {
        int id_cliente PK
        string nome
        string tipo_cliente
        string cpf_cnpj UK
        string observacao
    }

    ENDERECO {
        int id_endereco PK
        int id_cliente FK
        string cep
        string logradouro
        string numero
        string complemento
        string bairro
        string cidade
        string estado
    }

    CONTATO {
        int id_contato PK
        int id_cliente FK
        string nome_contato
        string telefone
        string email
    }

    VEICULO {
        int id_veiculo PK
        int id_cliente FK
        string placa UK
        string marca
        string modelo
        int ano
    }

    TECNICO {
        int id_tecnico PK
        string nome
        string telefone
        boolean ativo
    }

    SERVICO {
        int id_servico PK
        string descricao
        decimal valor_padrao
        decimal tempo_estimado
    }

    PRODUTO {
        int id_produto PK
        string codigo UK
        string nome
        string unidade_medida
        decimal preco_custo
        decimal preco_venda
        decimal quantidade_estoque
        decimal estoque_minimo
    }

    FORNECEDOR {
        int id_fornecedor PK
        string nome
        string cpf_cnpj UK
        string telefone
        string email
    }

    FORNECEDOR_PRODUTO {
        int id_fornecedor FK
        int id_produto FK
    }

    ENTRADA_MERCADORIA {
        int id_entrada PK
        int id_fornecedor FK
        datetime data_entrada
    }

    ITEM_ENTRADA_MERCADORIA {
        int id_item_entrada PK
        int id_entrada FK
        int id_produto FK
        decimal quantidade
        decimal valor_compra
    }

    ORDEM_SERVICO {
        int id_os PK
        int id_cliente FK
        int id_veiculo FK
        string problema_relatado
        string diagnostico
        string status
        datetime data_abertura
        decimal valor_total
    }

    ITEM_PRODUTO_OS {
        int id_item_produto_os PK
        int id_os FK
        int id_produto FK
        decimal quantidade
        decimal valor_unitario
        decimal subtotal
    }

    ITEM_SERVICO_OS {
        int id_item_servico_os PK
        int id_os FK
        int id_servico FK
        int id_tecnico FK
        decimal valor_cobrado
    }

    PAGAMENTO {
        int id_pagamento PK
        int id_os FK
        string forma_pagamento
        string tipo_desconto
        decimal valor_desconto
        decimal valor_final
        datetime data_pagamento
    }


    CLIENTE ||--|| ENDERECO : possui
    CLIENTE ||--|{ CONTATO : possui
    CLIENTE ||--o{ VEICULO : possui
    CLIENTE ||--o{ ORDEM_SERVICO : solicita

    VEICULO ||--o{ ORDEM_SERVICO : vinculado_a

    ORDEM_SERVICO ||--o{ ITEM_PRODUTO_OS : possui
    PRODUTO ||--o{ ITEM_PRODUTO_OS : utilizado_em

    ORDEM_SERVICO ||--o{ ITEM_SERVICO_OS : possui
    SERVICO ||--o{ ITEM_SERVICO_OS : realizado_em
    TECNICO ||--o{ ITEM_SERVICO_OS : responsavel

    ORDEM_SERVICO ||--o| PAGAMENTO : possui

    FORNECEDOR ||--o{ FORNECEDOR_PRODUTO : fornece
    PRODUTO ||--o{ FORNECEDOR_PRODUTO : fornecido_por

    FORNECEDOR ||--o{ ENTRADA_MERCADORIA : origina
    ENTRADA_MERCADORIA ||--|{ ITEM_ENTRADA_MERCADORIA : possui
    PRODUTO ||--o{ ITEM_ENTRADA_MERCADORIA : recebido
```

## Restrições derivadas

- `CLIENTE.cpf_cnpj` deve ser válido e único conforme [[RN-02 - CPF ou CNPJ válido e único|RN-02]].
- Todo cliente deve ser identificado como `PF` ou `PJ` conforme [[RN-01 - Identificação do cliente|RN-01]].
- Todo cliente deve possuir pelo menos um contato.
- `VEICULO.placa` deve ser válida e única.
- Um veículo deve estar vinculado a um único cliente.
- `PRODUTO.codigo` deve ser único.
- `PRODUTO.quantidade_estoque` não pode possuir quantidade negativa.
- `PRODUTO.estoque_minimo` determina o limite utilizado para geração do alerta de estoque mínimo.
- Quantidades de produtos utilizadas em uma O.S. devem ser maiores que zero.
- A quantidade utilizada na O.S. não pode exceder a quantidade disponível em estoque.
- `SERVICO.valor_padrao` é utilizado como valor inicial ao adicionar o serviço à O.S.
- `ITEM_SERVICO_OS.valor_cobrado` pode ser diferente de `SERVICO.valor_padrao` sem alterar o cadastro original do serviço.
- `SERVICO.tempo_estimado` deve ser maior que zero conforme [[RN-32 - Tempo estimado do serviço|RN-32]].
- Todo técnico recém cadastrado inicia como ativo conforme [[RN-33 - Técnico ativo|RN-33]].
- Somente técnicos ativos podem ser vinculados a novos serviços de uma O.S.
- Toda O.S. inicia com status `Aberta`.
- O status da O.S. deve respeitar as transições definidas nas regras de negócio.
- Uma O.S. pode possuir vários produtos e vários serviços.
- Uma O.S. pode não possuir pagamento enquanto não tiver sido finalizada.
- O pagamento deve registrar a forma de pagamento e, quando houver, o desconto aplicado.
- O desconto não pode resultar em valor final negativo.
- Uma entrada de mercadoria deve estar vinculada a um fornecedor e possuir pelo menos um item.
- Um fornecedor pode fornecer vários produtos e um produto pode ser fornecido por vários fornecedores.

## Diferenças e lacunas

- O sistema prevê autenticação de `USUARIO`, porém ainda não foram definidos diferentes perfis ou níveis de permissão.
- O cadastro de `VEICULO` não possui caso de uso próprio; o veículo é cadastrado durante a abertura da O.S. quando a placa informada ainda não existe.
- O sistema registra a forma de pagamento, mas não realiza processamento financeiro, parcelamento ou integração com meios de pagamento.
- Não foi definido controle de histórico das alterações realizadas pelos usuários, como qual usuário abriu, alterou ou finalizou uma O.S.

Veja também [[03_Modelo de Dominio/Dicionario de Dados|Dicionário de Dados]].

