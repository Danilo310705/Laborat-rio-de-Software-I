---
id: DIC-DADOS-001
tipo: dicionario-de-dados
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [engenharia, dados]
tags: [sismat, dados, dicionario]
---

# Dicionário de Dados


## Usuario

Pessoa interna autorizada a usar o sistema.

| Campo        | Papel                     | Regra                                   |
| ------------ | ------------------------- | --------------------------------------- |
| `id_usuario` | chave primária            | obrigatório                             |
| `nome`       | nome do usuário           | obrigatório a confirmar                 |
| `email`      | identificação para acesso | obrigatório e único                     |
| `senha`      | credencial de acesso      | obrigatória; armazenada de forma segura |

## Cliente

Pessoa física ou jurídica que utiliza os serviços ou realiza compras na empresa.

| Campo          | Papel                                | Regra                                                                              |
| -------------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| `id_cliente`   | chave primária                       | obrigatório                                                                        |
| `nome`         | nome do cliente ou razão social      | obrigatório                                                                        |
| `tipo_cliente` | identifica PF ou PJ                  | obrigatório; `PF` ou `PJ` conforme [[RN-01 - Identificação do cliente\|RN-01]]     |
| `cpf_cnpj`     | identificação do cliente             | obrigatório, válido e único conforme [[RN-02 - CPF ou CNPJ válido e único\|RN-02]] |
| `observacao`   | observações internas sobre o cliente | opcional                                                                           |

## Endereço

Representa o endereço vinculado a um cliente.

| Campo         | Papel                            | Regra       |
| ------------- | -------------------------------- | ----------- |
| `id_endereco` | chave primária                   | obrigatório |
| `id_cliente`  | referência a Cliente             | obrigatório |
| `cep`         | CEP do endereço                  | obrigatório |
| `logradouro`  | rua, avenida ou outro logradouro | obrigatório |
| `numero`      | número do endereço               | obrigatório |
| `complemento` | complemento do endereço          | opcional    |
| `bairro`      | bairro do endereço               | obrigatório |
| `cidade`      | cidade do endereço               | obrigatório |
| `estado`      | estado (UF) do endereço          | obrigatório |

## Contato

Representa o contato vinculado a um cliente.

| Campo          | Papel                                     | Regra       |
| -------------- | ----------------------------------------- | ----------- |
| `id_contato`   | chave primária                            | obrigatório |
| `id_cliente`   | identifica o cliente vinculado ao contato | obrigatório |
| `nome_contato` | nome do contato                           | obrigatório |
| `telefone`     | telefone para contato                     | obrigatório |
| `email`        | e-mail para contato                       | opcional    |


## Veiculo

Representa um veículo vinculado a um cliente.

| Campo        | Papel                    | Regra                       |
| ------------ | ------------------------ | --------------------------- |
| `id_veiculo` | chave primária           | obrigatório                 |
| `id_cliente` | referência a Cliente     | obrigatório                 |
| `placa`      | identificação do veículo | obrigatória, válida e única |
| `marca`      | fabricante do veículo    | obrigatório                 |
| `modelo`     | modelo do veículo        | obrigatório                 |
| `ano`        | ano do veículo           | obrigatório                 |

## Técnico

Representa um profissional responsável pela execução de serviços.

| Campo        | Papel               | Regra                                                        |
| ------------ | ------------------- | ------------------------------------------------------------ |
| `id_tecnico` | chave primária      | obrigatório                                                  |
| `nome`       | nome do técnico     | obrigatório                                                  |
| `telefone`   | telefone de contato | conforme dados definidos no cadastro                         |
| `ativo`      | situação do técnico | inicia como `true` conforme [[RN-33 - Técnico ativo\|RN-33]] |

## Serviço

Representa um serviço disponível no catálogo da oficina.

| Campo            | Papel                        | Regra                                                                |
| ---------------- | ---------------------------- | -------------------------------------------------------------------- |
| `id_servico`     | chave primária               | obrigatório                                                          |
| `descricao`      | identificação do serviço     | obrigatório                                                          |
| `valor_padrao`   | valor sugerido do serviço    | válido e maior que zero                                              |
| `tempo_estimado` | tempo estimado para execução | maior que zero conforme [[RN-32 - Tempo estimado do serviço\|RN-32]] |

## Produto

Representa um produto utilizado ou comercializado pela oficina.

| Campo                | Papel                         | Regra                       |
| -------------------- | ----------------------------- | --------------------------- |
| `id_produto`         | chave primária                | obrigatório                 |
| `codigo`             | código de identificação       | obrigatório e único         |
| `nome`               | identificação legível         | obrigatório                 |
| `unidade_medida`     | unidade do produto            | obrigatório                 |
| `preco_custo`        | preço de aquisição            | valor válido                |
| `preco_venda`        | preço utilizado na venda      | valor válido                |
| `quantidade_estoque` | quantidade disponível         | não pode ser negativa       |
| `estoque_minimo`     | limite para geração de alerta | valor válido e não negativo |

## Fornecedor

Representa uma pessoa física ou jurídica que fornece produtos para a oficina.

| Campo           | Papel                       | Regra             |
| --------------- | --------------------------- | ----------------- |
| `id_fornecedor` | chave primária              | obrigatório       |
| `nome`          | nome ou razão social        | obrigatório       |
| `cnpj`          | identificação do fornecedor | válido e único    |
| `telefone`      | telefone de contato         | conforme cadastro |
| `email`         | e-mail de contato           | conforme cadastro |
## Fornecedor_Produto

Representa o contato vinculado a um cliente.

| Campo           | Papel                   | Regra       |
| --------------- | ----------------------- | ----------- |
| `id_fornecedor` | referência a Fornecedor | obrigatório |
| `id_produto`    | referência a Produto    | obrigatório |

## Entrada_Mercadoria

Representa uma entrada de mercadorias adquiridas de um fornecedor.

| Campo           | Papel                   | Regra                   |
| --------------- | ----------------------- | ----------------------- |
| `id_entrada`    | chave primária          | obrigatório             |
| `id_fornecedor` | referência a Fornecedor | obrigatório             |
| `data_entrada`  | data/hora da entrada    | preenchida pelo sistema |

## Item_Entrada_Mercadoria

Representa cada produto recebido em uma entrada de mercadoria.

| Campo             | Papel                                 | Regra          |
| ----------------- | ------------------------------------- | -------------- |
| `id_item_entrada` | chave primária                        | obrigatório    |
| `id_entrada`      | referência a Entrada_Mercadoria       | obrigatório    |
| `id_produto`      | referência a Produto                  | obrigatório    |
| `quantidade`      | quantidade recebida                   | maior que zero |
| `valor_compra`    | valor de compra registrado na entrada | valor válido   |
## Ordem_Servico

Representa uma Ordem de Serviço aberta para um cliente e veículo.

| Campo               | Papel                                     | Regra                                           |
| ------------------- | ----------------------------------------- | ----------------------------------------------- |
| `id_contato`        | chave primária                            | obrigatório                                     |
| `id_cliente`        | identifica o cliente vinculado ao contato | obrigatório                                     |
| `id_veiculo`        | referência a Veiculo                      | obrigatório                                     |
| `problema_relatado` | problema informado pelo cliente           | obrigatório                                     |
| `diagnostico`       | diagnóstico técnico                       | preenchido posteriormente; opcional na abertura |
| `status`            | situação atual da O.S.                    | inicia como `Aberta`                            |
| `data_abertura`     | data/hora da abertura                     | preenchida pelo sistema                         |
| `valor_total`       | valor total da O.S.                       | calculado a partir dos produtos e serviços      |

## Item_Produto_OS

Representa um produto utilizado em uma Ordem de Serviço.

| Campo                | Papel                              | Regra                             |
| -------------------- | ---------------------------------- | --------------------------------- |
| `id_item_produto_os` | chave primária                     | obrigatório                       |
| `id_os`              | referência a Ordem_Servico         | obrigatório                       |
| `id_produto`         | referência a Produto               | obrigatório                       |
| `quantidade`         | quantidade utilizada               | maior que zero                    |
| `valor_unitario`     | preço do produto utilizado na O.S. | registrado no momento da inclusão |
| `subtotal`           | valor correspondente ao item       | quantidade × valor unitário       |
## Item_Servico_OS

Representa um serviço realizado em uma Ordem de Serviço.

| Campo                | Papel                             | Regra                                                     |
| -------------------- | --------------------------------- | --------------------------------------------------------- |
| `id_item_servico_os` | chave primária                    | obrigatório                                               |
| `id_os`              | referência a Ordem_Servico        | obrigatório                                               |
| `id_servico`         | referência a Servico              | obrigatório                                               |
| `id_tecnico`         | referência ao Técnico responsável | obrigatório; técnico ativo                                |
| `valor_cobrado`      | valor do serviço naquela O.S.     | inicialmente recebe o valor padrão, mas pode ser alterado |

## Pagamento

Representa as informações de pagamento registradas na finalização da O.S.

| Campo             | Papel                      | Regra                                          |
| ----------------- | -------------------------- | ---------------------------------------------- |
| `id_pagamento`    | chave primária             | obrigatório                                    |
| `id_os`           | referência a Ordem_Servico | obrigatório                                    |
| `forma_pagamento` | forma utilizada            | obrigatório                                    |
| `tipo_desconto`   | forma do desconto          | `Percentual`, `Valor` ou vazio                 |
| `valor_desconto`  | desconto aplicado          | opcional; deve respeitar as regras de desconto |
| `valor_final`     | valor final após desconto  | não pode ser negativo                          |
| `data_pagamento`  | data/hora da finalização   | preenchida pelo sistema                        |

