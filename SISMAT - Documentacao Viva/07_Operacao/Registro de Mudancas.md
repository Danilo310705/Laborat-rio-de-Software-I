---
id: CHANGELOG-001
tipo: registro-de-mudancas
status: ativo
origem: evolucao-proposta
criado_em: 2026-09-02
atualizado_em: 2026-09-16
responsaveis: [produto, engenharia]
tags: [sismat, changelog]
---

# Registro de Mudanças

O Git deve registrar o histórico detalhado. Esta página resume marcos documentais e decisões com impacto amplo.

## 2026-09-16 - Transparência do uso de inteligência artificial

### Adicionado

- grupo `09_UsoIA` com índice, registro de etapas, metodologia, responsabilidades, impactos, riscos, controles e declaração de transparência;
- diferenciação entre extração assistida, reestruturação assistida, proposta assistida e validação assistida;
- registro explícito da revisão humana e das limitações do uso de IA.

### Alterado

- caderno do Projeto Integrador passou a incorporar a seção de uso de inteligência artificial;
- publicação avançou para a versão 1.2.

### Motivo

Tornar o uso de IA transparente, auditável e compatível com a responsabilidade autoral da equipe e com a avaliação acadêmica.

## 2026-09-16 - Layout acadêmico institucional

### Adicionado

- marca oficial da Universidade Paranaense na capa;
- folha de rosto com natureza do Projeto Integrador;
- fonte de cada figura e diagrama;
- relatório de validação técnica e visual do PDF.

### Alterado

- layout passou a adotar a identidade acadêmico-editorial aprovada: formato A4, faixa lateral azul e verde, grafismos geométricos, cabeçalhos institucionais e paginação superior;
- capa e cabeçalhos passaram a exibir a marca da UNIPAR, o curso de Análise e Desenvolvimento de Sistemas e a disciplina Laboratório de Software;
- cabeçalho corrente passou a alinhar horizontalmente a marca da UNIPAR e a identificação institucional, conforme a referência visual aprovada;
- publicação avançou para a versão 1.1.

### Motivo

Aproximar a entrega interdisciplinar de um trabalho acadêmico formal sem caracterizá-la como TCC e sem romper o fluxo de documentação viva.

## 2026-09-02 - Publicação editorial no padrão Overleaf

### Adicionado

- gerador local de PDF baseado em HTML paginado;
- sumário e lista de figuras com números de página;
- numeração automática, cabeçalhos correntes e marcadores PDF;
- renderização incorporada de Markdown e Mermaid;
- projeto gráfico editorial e dependências versionadas.

### Alterado

- o caderno passou a usar metadados estruturados no frontmatter;
- a exportação nativa do Obsidian tornou-se apenas uma prévia rápida;
- a saída formal passou para `output/pdf`.

### Motivo

Elevar a legibilidade e a apresentação formal sem perder a documentação viva nem exigir manutenção duplicada em Overleaf.

## 2026-09-02 - Template de publicação em PDF

### Adicionado

- perfil de impressão A4 para o exportador nativo do Obsidian;
- caderno completo do Projeto Integrador com transclusões;
- template reutilizável para novas entregas;
- guia e checklist de geração do PDF;
- matriz de integração curricular das disciplinas.

### Decisão

O Obsidian permanece como fonte viva; cada PDF representa uma versão congelada para avaliação.

## 2026-09-02 - Incorporação dos anexos visuais

### Adicionado

- 13 protótipos `IMG-01` a `IMG-13` em resolução original;
- diagramas originais de casos de uso, entidade-relacionamento e classes;
- galeria visual e links diretos no mapa de interfaces.

### Atualizado

- casos de uso agora apontam para a seção exata de cada protótipo;
- modelos vivos exibem os diagramas originais como referência da linha de base.

## 2026-09-02 - Migração para documentação viva

### Adicionado

- vault Obsidian autônomo e sem plugin obrigatório;
- visão, escopo, atores e glossário;
- oito casos de uso e 21 regras de negócio em páginas interligadas;
- catálogo de mensagens e mapa de protótipos;
- modelos de dados e estados em Mermaid;
- visão conceitual de arquitetura e diagramas de sequência;
- requisitos não funcionais propostos;
- cenários de aceitação e matriz de rastreabilidade;
- ADRs propostas, riscos e questões abertas;
- templates e guia de governança.

### Fonte

Linha de base: `SISMAT.EST.00001`, versão 1, emissão 26/03/2026.

### Limitação

Não foi localizado código-fonte do SISMAT para validar o estado `implementado`.

## 2026-03-26 - Linha de base original

Emissão inicial do documento de especificação de casos de uso em PDF.
