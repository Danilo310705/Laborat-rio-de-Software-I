---
id: PUB-OFICINAPRO-001
tipo: publicacao
status: em-revisao
origem: documentacao-viva
versao: "1.0"
data_da_edicao: 2026-10-01
titulo_curto: OficinaPro
titulo: OficinaPro
subtitulo: Caderno do Projeto Integrador do Sistema ERP para Gestão de Oficinas Mecânicas
instituicao: Universidade Paranaense - UNIPAR
curso: Análise e Desenvolvimento de Sistemas
disciplina: Laboratório de Software
modalidade: Projeto Integrador
natureza: Projeto Integrador apresentado às disciplinas do curso como requisito parcial de avaliação interdisciplinar da Universidade Paranaense - UNIPAR, Campus Toledo.
campus: Campus Toledo
cidade: Toledo - PR
ano: 2026
status_publicacao: Em revisão
autores:
  - Danilo Sanches - 60004975
  - Isabella Candido - 60004968 
disciplinas:
  - Engenharia de Requisitos
  - Análise de Projetos de Software
  - Design Front End
  - Desenvolvimento Back End
  - Laboratório de Software - Projeto
cssclasses:
  - oficinapro-publicacao
responsaveis:
  - equipe
tags:
  - oficinapro
  - projeto-integrador
  - pdf
---

# Apresentação

Este caderno consolida a documentação viva do **OficinaPro**, um Sistema ERP para Gestão de Oficinas Mecânicas, desenvolvido para acompanhamento e avaliação interdisciplinar do Projeto Integrador. O conteúdo técnico é mantido em páginas independentes no Obsidian e reunido neste caderno por meio de transclusões, evitando duplicação de conteúdo e facilitando a atualização dos artefatos durante a evolução do projeto.


## Dados da edição

| Campo           | Valor                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Projeto         | OficinaPro - Sistema ERP para Gestão de Oficinas Mecânicas                                                                               |
| Tipo de entrega | Caderno do Projeto Integrador                                                                                                            |
| Versão          | 1.0                                                                                                                                      |
| Data            | 1/10/2026                                                                                                                                |
| Unidade         | UNIPAR - Campus Toledo                                                                                                                   |
| Disciplinas     | Engenharia de Requisitos; Análise de Projetos de Software; Design Front End; Desenvolvimento Back End; Laboratório de Software - Projeto |
| Estado          | Em revisão                                                                                                                               |

# Integração curricular

![[01_Produto/Matriz de Integracao Curricular]]

# Visão, escopo e stakeholders

![[01_Produto/Visao do Produto]]

![[01_Produto/Escopo e Contexto]]

![[01_Produto/Atores e Stakeholders]]

![[01_Produto/Glossario]]

# Casos de uso

![[02_Requisitos/Indice de Casos de Uso]]

![[UC-001 - Cadastrar cliente]]

![[UC-002 - Consultar clientes]]

![[UC-003 - Cadastrar Técnico]]

![[UC-004 - Cadastrar Serviço]]

![[UC-005 - Cadastrar produto]]

![[UC-006 - Registrar entrada de mercadoria]]

![[UC-007 - Cadastrar fornecedor]]

![[UC-008 - Alertar estoque mínimo]]

![[UC-009 - Abrir Ordem de Serviço]]

![[UC-010 - Adicionar produtos à O.S.]]

![[UC-011 - Adicionar serviço à O.S.]]

![[UC-012 - Registrar diagnóstico O.S]]

![[UC-013 - Atualizar status da O.S.]]

![[UC-014 - Finalizar O.S.]]

![[UC-015 - Emitir comprovante da O.S.]]

![[UC-016 - Consultar O.S.]]

![[UC-017 - Editar ou Remover produto da O.S.]]

![[UC-018 - Editar ou Remover serviço da O.S.]]

# Regras de negócio e mensagens

![[02_Requisitos/Regras de Negocio/Indice de Regras de Negocio]]

![[RN-01 - Identificação do cliente]]

![[RN-02 - CPF ou CNPJ válido e único]]

![[RN-03 - Contato obrigatório do cliente]]

![[RN-04 - Usuário autenticado]]

![[RN-05 - Múltiplos contatos por cliente]]

![[RN-06 - Endereço vinculado ao cliente]]

![[RN-07 - Consulta do histórico do cliente]]

![[RN-07 - Placa única do veículo]]

![[RN-08 - Veículo vinculado ao cliente]]

![[RN-09 - Veículo pertencente a outro cliente]]

![[RN-10 - Preenchimento automático do veículo]]

![[RN-11 - Código único do produto]]

![[RN-12 - Campos obrigatórios do produto]]

![[RN-13 - Valores do produto]]

![[RN-14 - Quantidade positiva]]

![[RN-15 - Limite pelo estoque disponível]]

![[RN-16 - Atualização do estoque pela O.S.]]

![[RN-17 - Estoque mínimo]]

![[RN-18 - Entrada de mercadoria]]

![[RN-19 - Atualização do estoque pela entrada]]

![[RN-20 - Valor padrão do serviço]]

![[RN-21 - Alteração do valor do serviço na O.S.]]

![[RN-22 - Técnico responsável pelo serviço]]

![[RN-23 - Status inicial da O.S.]]

![[RN-24 - Transição de status da O.S.]]

![[RN-25 - Diagnóstico vinculado à O.S.]]

![[RN-26 - Preservação do diagnóstico anterior]]

![[RN-27 - Finalização da O.S.]]

![[RN-28 - Forma de pagamento obrigatória]]

![[RN-29 - Consistência da finalização]]

![[RN-30 - Dados do comprovante da O.S.]]

![[RN-31 - Emissao nao altera a O.S.]]

![[RN-32 - Tempo estimado do serviço]]

![[RN-33 - Técnico ativo]]

![[RN-34 - Desconto na O.S.]]


![[02_Requisitos/Catalogo de Mensagens]]

![[02_Requisitos/Requisitos Nao Funcionais]]

# Modelo de domínio

![[03_Modelo de Dominio/Modelo de Dados]]

![[03_Modelo de Dominio/Dicionario de Dados]]

![[03_Modelo de Dominio/Ciclo de Vida da Requisicao]]

# Arquitetura e decisões

![[04_Arquitetura/Visao de Arquitetura]]

![[04_Arquitetura/Diagramas de Sequencia]]

![[04_Arquitetura/Decisoes/Indice de Decisoes]]

![[04_Arquitetura/Decisoes/ADR-001 - Momento da reserva e baixa de estoque]]

![[04_Arquitetura/Decisoes/ADR-002 - Exclusao logica de cadastros]]

# Interfaces

![[06_Interfaces/Mapa de Interfaces]]

# Qualidade e validação

![[05_Qualidade/Cenarios de Aceitacao]]

![[05_Qualidade/Matriz de Rastreabilidade]]

![[05_Qualidade/Riscos e Questoes em Aberto]]

# Governança e evolução

![[00_Inicio/Como manter esta documentacao viva]]

![[07_Operacao/Registro de Mudancas]]

# Uso de inteligência artificial

![[09_UsoIA/Indice de Uso de IA]]

![[09_UsoIA/Etapas e Registro de Uso]]

![[09_UsoIA/Metodologia e Responsabilidades]]

![[09_UsoIA/Impactos Riscos e Controles]]

![[09_UsoIA/Declaracao de Transparencia]]

# Referências e controle documental

A linha de base desta publicação é o documento `SISMAT.EST.00001`, versão 1, emitido em 26/03/2026. O arquivo original permanece preservado em `99_Fontes` e não é incorporado integralmente nesta publicação devido à extensão e ao aviso de confidencialidade.
