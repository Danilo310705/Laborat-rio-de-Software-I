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

## Perfil

Classifica as permissões do usuário.

| Campo | Papel | Regra |
|---|---|---|
| `id_perfil` | chave primária | obrigatório |
| `descricao` | nome do perfil | valores iniciais: Usuário, Estoquista, Administrador |

## Usuario

Pessoa interna autorizada a usar o sistema.

| Campo        | Papel                           | Regra                                                                         |
| ------------ | ------------------------------- | ----------------------------------------------------------------------------- |
| `id_usuario` | chave primária                  | obrigatório                                                                   |
| `id_perfil`  | referência a Perfil             | obrigatório                                                                   |
| `nome`       | nome do usuário                 | obrigatório a confirmar                                                       |
| `setor`      | unidade organizacional          | obrigatório a confirmar                                                       |
| `email`      | identificador de acesso/contato | único conforme [[RN-21 - Valor padrão do serviço\|RN-21]] |
| `senha`      | credencial na fonte             | implementar como hash, nunca texto puro                                       |

## Cliente

Pessoa física ou jurídica que utiliza os serviços ou realiza compras na empresa.

| Campo          | Papel                                | Regra               |
| -------------- | ------------------------------------ | ------------------- |
| `id_cliente`   | chave primária                       | obrigatório         |
| `id_endereco`  | referência a Endereço                | obrigatório         |
| `id_contato`   | referência a Contato                 | obrigatório         |
| `nome`         | nome do cliente ou razão social      | obrigatório         |
| `tipo_cliente` | identifica se o cliente é PF ou PJ   | obrigatório         |
| `cpf_cnpj`     | identificação do cliente             | obrigatório e único |
| `observacao`   | observações internas sobre o cliente | opcional            |

## Endereço

Representa o endereço vinculado a um cliente.

| Campo         | Papel                                      | Regra       |
| ------------- | ------------------------------------------ | ----------- |
| `id_endereco` | chave primária                             | obrigatório |
| `id_cliente`  | identifica o cliente vinculado ao endereço | obrigatório |
| `cep`         | CEP do endereço                            | obrigatório |
| `logradouro`  | rua, avenida ou outro logradouro           | obrigatório |
| `numero`      | número do endereço                         | obrigatório |
| `complemento` | complemento do endereço                    | opcional    |
| `bairro`      | bairro do endereço                         | obrigatório |
| `cidade`      | cidade do endereço                         | obrigatório |
| `estado`      | estado (UF) do endereço                    | obrigatório |

## Contato

Representa o contato vinculado a um cliente.

| Campo          | Papel                                     | Regra       |
| -------------- | ----------------------------------------- | ----------- |
| `id_contato`   | chave primária                            | obrigatório |
| `id_cliente`   | identifica o cliente vinculado ao contato | obrigatório |
| `nome_contato` | nome do contato                           | obrigatório |
| `telefone`     | telefone principal para contato           | obrigatório |
| `email`        | e-mail principal para contato             | obrigatório |


## Produto

Material controlado pelo almoxarifado.

| Campo | Papel | Regra |
|---|---|---|
| `id_produto` | chave primária | obrigatório |
| `codigo` | código de negócio | único conforme [[RN-11 - Preenchimento automático do veículo\|RN-11]] |
| `descricao` | identificação legível | obrigatório a confirmar |
| `unidade_medida` | unidade da quantidade | obrigatório a confirmar; definir domínio |
| `saldo_estoque` | quantidade atual | não negativo conforme [[RN-10 - Veículo pertencente a outro cliente\|RN-10]] |

## Requisicao

Cabeçalho do pedido interno.

| Campo | Papel | Regra |
|---|---|---|
| `id_requisicao` | chave primária | obrigatório |
| `id_usuario` | solicitante | obrigatório |
| `data_requisicao` | criação | preenchida pelo sistema |
| `status` | estado atual | inicia `Pendente`; veja [[03_Modelo de Dominio/Ciclo de Vida da Requisicao\|ciclo de vida]] |
| `motivo_rejeicao` | justificativa | obrigatório quando `Rejeitada`; proposto para completar RN-07 |

## Item_requisicao

Produto e quantidade dentro de uma requisição.

| Campo | Papel | Regra |
|---|---|---|
| `id_item` | chave primária | obrigatório |
| `id_requisicao` | requisição | obrigatório |
| `id_produto` | produto | obrigatório |
| `quantidade` | quantidade solicitada | maior que zero; unidade compatível com o produto |

## Movimentacao_estoque

Registro da alteração de saldo causada por entrega.

| Campo | Papel | Regra |
|---|---|---|
| `id_movimentacao` | chave primária | obrigatório |
| `id_produto` | produto movimentado | obrigatório |
| `id_requisicao` | origem da movimentação | recomendado e descrito no DER |
| `tipo_movimentacao` | natureza do movimento | domínio a definir |
| `quantidade` | quantidade movimentada | positiva; sinal decorre do tipo |
| `data` | data/hora do evento | preenchida pelo sistema |

## Tipos e precisão

O PDF não define tipos físicos. Produtos fracionáveis exigem `decimal` e regra de escala; itens contados podem exigir inteiro. Essa decisão deve ser tomada antes do esquema definitivo.
