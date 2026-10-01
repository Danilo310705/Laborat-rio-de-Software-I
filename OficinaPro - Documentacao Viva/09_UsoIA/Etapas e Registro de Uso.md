---
id: IA-REG-001
tipo: registro-de-uso-de-ia
status: ativo
origem: documentacao-viva
criado_em: 2026-09-16
atualizado_em: 2026-09-16
responsaveis: [equipe]
tags: [sismat, inteligencia-artificial, registro, rastreabilidade]
---

# Etapas e Registro de Uso

## Resumo das utilizações

| ID     | Etapa                            | Papel da IA                                      | Resultado incorporado                                            | Situação      |
| ------ | -------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------- | ------------- |
| IA-001 | Organização da documentação      | estruturação, revisão e padronização             | organização dos documentos e índices no Obsidian                 | revisado      |
| IA-002 | Casos de uso e regras de negócio | sugestão, revisão e verificação de consistência  | casos de uso, regras de negócio e mensagens do sistema           | revisado      |
| IA-003 | modelagem visual                 | geração de código Mermaid                        | diagramas editáveis de domínio, estados, arquitetura e sequência | revisado      |
| IA-004 | Diagramas e mapas                | geração e organização de diagramas editáveis     | diagramas Mermaid e mapas da documentação                        | revisado      |
| IA-005 | Protótipos de interface          | geração visual das interfaces                    | protótipos das telas vinculados aos casos de uso                 | revisado      |
| IA-006 | Protótipo interativo             | geração de uma demonstração navegável do sistema | protótipo web utilizado para visualizar o funcionamento          | demonstrativo |
| IA-007 | transparência                    | organização do registro                          | grupo `09_UsoIA` e declaração de uso                             | ativo         |

## IA-001 - Organização da documentação

**Entrada:** requisitos, anotações, decisões da equipe e documentos produzidos durante o desenvolvimento do Projeto Integrador.

**Como a IA foi usada:** auxílio na organização dos conteúdos em páginas separadas, padronização dos títulos, criação de índices, estruturação das informações e preparação dos textos para utilização no Obsidian.

**Saída aproveitada:** estrutura organizada da documentação, índices de casos de uso, regras de negócio, mensagens, interfaces e demais artefatos.

**Validação humana:** a equipe analisou a estrutura proposta, alterou nomes, removeu conteúdos desnecessários e definiu quais documentos seriam mantidos no projeto.

**Impacto:** facilitou a organização e navegação pela documentação, diminuindo o trabalho repetitivo de formatação e permitindo maior consistência entre os documentos.

## IA-002 - Casos de uso, regras de negócio e mensagens

**Entrada:** funcionalidades desejadas para o sistema da oficina e decisões tomadas pela equipe sobre seu funcionamento.

**Como a IA foi usada:** apoio na elaboração e revisão dos casos de uso, identificação de fluxos principais, alternativas e exceções, sugestão e organização das regras de negócio e padronização das mensagens apresentadas pelo sistema.

**Saída aproveitada:** casos de uso UC-001 a UC-018, regras de negócio RN-01 a RN-34 e catálogo de mensagens utilizado nos respectivos fluxos.

**Validação humana:** a equipe analisou cada sugestão, discutiu o comportamento esperado do sistema e decidiu quais fluxos, regras e mensagens seriam incorporados ou modificados.

**Impacto:** auxiliou na identificação de inconsistências e situações que inicialmente não estavam previstas, como transições de status da O.S., controle de estoque, técnicos ativos, descontos e comportamento durante edição e remoção de itens.

## IA-003 - Modelagem de dados

**Entrada:** casos de uso, regras de negócio e informações necessárias para execução das funcionalidades.

**Como a IA foi usada:** apoio na identificação das entidades, atributos, chaves, relacionamentos e cardinalidades necessárias para representar os dados do sistema.

**Saída aproveitada:** Dicionário de Dados e Diagrama Entidade-Relacionamento (DER), contendo entidades como Cliente, Veículo, Produto, Serviço, Técnico, Fornecedor, Ordem de Serviço e Pagamento.

**Validação humana:** a equipe revisou as entidades propostas, simplificou elementos considerados desnecessários e verificou se o modelo correspondia às funcionalidades definidas nos casos de uso.

**Impacto:** permitiu visualizar de forma mais clara como os dados das diferentes funcionalidades se relacionam e ajudou a identificar problemas de modelagem antes de uma possível implementação.

## IA-004 - Diagramas e mapas

**Entrada:** casos de uso, atores, entidades e relacionamentos definidos na documentação.

**Como a IA foi usada:** geração e revisão de diagramas em Mermaid, organização do mapa de atores e capacidades e apoio na representação visual dos relacionamentos do sistema.

**Saída aproveitada:** diagramas editáveis integrados aos arquivos Markdown e utilizados como complemento à documentação textual.

**Validação humana:** a equipe comparou os diagramas com os casos de uso, regras e modelo de dados e solicitou alterações quando alguma informação não correspondia às decisões do projeto.

**Impacto:** facilitou a visualização geral do sistema e tornou os diagramas mais simples de atualizar juntamente com a documentação.

## IA-005 - Protótipos de interface

**Entrada:** casos de uso, regras de negócio, mensagens, entidades e funcionalidades definidas pela equipe.

**Como a IA foi usada:** geração dos protótipos visuais das interfaces do sistema, definindo a organização dos formulários, tabelas, menus, botões, informações exibidas e diferentes estados necessários para representar os casos de uso.

**Saída aproveitada:** protótipos identificados como IMG-01 a IMG-22 e vinculados aos respectivos casos de uso no Mapa de Interfaces.

**Validação humana:** a equipe analisou visualmente as telas geradas, verificou se os campos e ações correspondiam aos requisitos e solicitou ajustes quando necessário.

**Impacto:** permitiu representar visualmente como o sistema poderia funcionar sem a necessidade de implementar previamente sua interface.

## IA-006 - Protótipo interativo

**Entrada:** protótipos visuais, casos de uso, regras de negócio e fluxo esperado das principais funcionalidades.

**Como a IA foi usada:** geração de um protótipo web navegável para demonstrar o funcionamento das interfaces e permitir a interação entre diferentes partes do sistema.

**Saída aproveitada:** protótipo demonstrativo contendo navegação entre clientes, Ordens de Serviço, produtos, serviços, técnicos, fornecedores e estoque.

O protótipo permite simular ações como:

- cadastrar clientes;
- abrir uma Ordem de Serviço;
- identificar veículos pela placa;
- adicionar produtos e serviços;
- alterar o status da O.S.;
- registrar diagnóstico;
- finalizar a O.S.;
- aplicar desconto;
- selecionar forma de pagamento;
- gerar visualização do comprovante;
- registrar entrada de mercadorias;
- visualizar alertas de estoque mínimo.

**Validação humana:** a equipe utilizou o protótipo para verificar se os fluxos estavam compreensíveis e coerentes com os casos de uso e regras de negócio.

**Impacto:** possibilitou visualizar e testar conceitualmente o funcionamento do sistema antes de sua implementação real.

**Limitação:** o protótipo possui caráter demonstrativo e não representa uma implementação final do sistema. Ele não utiliza o backend Java/Spring Boot nem o banco de dados PostgreSQL definidos para uma futura implementação.

## IA-007 - Registro de transparência

**Entrada:** histórico das atividades assistidas por IA realizadas durante a evolução documental.

**Como a IA foi usada:** consolidação do registro, da metodologia, dos impactos, dos riscos e das responsabilidades.

**Saída aproveitada:** documentos do grupo `09_UsoIA`.

**Validação humana:** a equipe deve revisar este registro antes de cada entrega e adequá-lo às orientações dos docentes e da instituição.

**Impacto:** torna o uso de IA explícito, auditável e compatível com a responsabilidade autoral da equipe.

## Como registrar um novo uso

Adicione uma nova seção com ID sequencial e informe: data, etapa, entrada, objetivo, como a IA foi usada, saída incorporada, validação humana, impacto, limitações e responsável pela revisão.

