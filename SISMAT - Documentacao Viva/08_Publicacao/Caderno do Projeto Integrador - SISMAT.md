---
id: PUB-SISMAT-001
tipo: publicacao
status: em-revisao
origem: documentacao-viva
versao: "1.2"
data_da_edicao: 2026-09-16
titulo_curto: SISMAT
titulo: SISMAT
subtitulo: Caderno do Projeto Integrador do Sistema de Requisição de Materiais
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
  - Lucas Langaro Joppert
  - João Vitor de Souza
  - João Sergio Crepalli
disciplinas:
  - Engenharia de Requisitos
  - Análise de Projetos de Software
  - Design Front End
  - Desenvolvimento Back End
  - Laboratório de Software - Projeto
cssclasses:
  - sismat-publicacao
responsaveis: [equipe]
tags: [sismat, projeto-integrador, pdf]
---

# Apresentação

Este caderno consolida a documentação viva do Sistema de Requisição de Materiais (SISMAT) para acompanhamento e avaliação interdisciplinar. O conteúdo técnico é mantido em páginas independentes no Obsidian e reunido aqui por transclusão, evitando cópias divergentes.

> [!warning] Estado da publicação
> Esta edição reflete a especificação de 26/03/2026 e a evolução documental realizada em 02/09/2026. Os artefatos identificados como propostos ainda dependem de validação; a implementação não foi confrontada com código-fonte neste workspace.

## Dados da edição

| Campo | Valor |
|---|---|
| Projeto | Sistema de Requisição de Materiais - SISMAT |
| Tipo de entrega | Caderno do Projeto Integrador |
| Versão | 1.2 |
| Data | 16/09/2026 |
| Unidade | UNIPAR - Campus Toledo |
| Disciplinas | Engenharia de Requisitos; Análise de Projetos de Software; Design Front End; Desenvolvimento Back End; Laboratório de Software - Projeto |
| Estado | Em revisão |

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

![[UC-003 - Consultar historico de serviços ou compras de um cliente]]

![[UC-004 - Cadastrar Serviço]]

![[UC-005 - Cadastrar produto]]

![[UC-006 - Registrar entrada de mercadoria]]

![[UC-007 - Cadastrar fornecedor]]

![[UC-008 - Abrir OS vinculando cliente]]

# Regras de negócio e mensagens

![[02_Requisitos/Regras de Negocio/Indice de Regras de Negocio]]

![[02_Requisitos/Regras de Negocio/RN-01 - Quantidade positiva]]

![[02_Requisitos/Regras de Negocio/RN-02 - Limite pelo estoque disponivel]]

![[02_Requisitos/Regras de Negocio/RN-03 - Status inicial pendente]]

![[02_Requisitos/Regras de Negocio/RN-04 - Usuario autenticado]]

![[02_Requisitos/Regras de Negocio/RN-05 - Visualizar apenas requisicoes proprias]]

![[02_Requisitos/Regras de Negocio/RN-06 - Somente estoquista analisa]]

![[02_Requisitos/Regras de Negocio/RN-07 - Rejeicao exige motivo]]

![[02_Requisitos/Regras de Negocio/RN-08 - Somente requisicao aprovada pode ser entregue]]

![[02_Requisitos/Regras de Negocio/RN-09 - Atualizar estoque apos entrega]]

![[02_Requisitos/Regras de Negocio/RN-10 - Estoque nao negativo]]

![[02_Requisitos/Regras de Negocio/RN-11 - Codigo de produto unico]]

![[02_Requisitos/Regras de Negocio/RN-12 - Campos obrigatorios de produto]]

![[02_Requisitos/Regras de Negocio/RN-13 - Somente administrador gerencia produtos]]

![[02_Requisitos/Regras de Negocio/RN-14 - Perfis autorizados a emitir relatorios]]

![[02_Requisitos/Regras de Negocio/RN-15 - Relatorios com dados atualizados]]

![[02_Requisitos/Regras de Negocio/RN-16 - Exportacao de relatorio em PDF]]

![[02_Requisitos/Regras de Negocio/RN-17 - Visualizar apenas pedidos proprios]]

![[02_Requisitos/Regras de Negocio/RN-18 - Exibir apenas pedidos encerrados]]

![[02_Requisitos/Regras de Negocio/RN-19 - Somente administrador gerencia usuarios]]

![[02_Requisitos/Regras de Negocio/RN-20 - Campos obrigatorios de usuario]]

![[02_Requisitos/Regras de Negocio/RN-21 - Email unico]]

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
