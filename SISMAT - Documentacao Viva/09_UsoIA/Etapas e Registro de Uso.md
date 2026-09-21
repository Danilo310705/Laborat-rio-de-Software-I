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

| ID | Etapa | Papel da IA | Resultado incorporado | Situação |
|---|---|---|---|---|
| IA-001 | leitura da linha de base | extração e estruturação | inventário de conteúdo e documentos vivos | revisado |
| IA-002 | evolução da especificação | reorganização e proposta | visão, rastreabilidade e artefatos complementares | revisão contínua |
| IA-003 | modelagem visual | geração de código Mermaid | diagramas editáveis de domínio, estados, arquitetura e sequência | proposto |
| IA-004 | interfaces e anexos | extração, classificação e vinculação | galeria de protótipos e mapa de interfaces | revisado visualmente |
| IA-005 | publicação | apoio técnico e editorial | gerador de PDF, capa, cabeçalhos e sumário | validado |
| IA-006 | garantia da qualidade | validação assistida | verificação de páginas, links, sintaxe e estouros | validado |
| IA-007 | transparência | organização do registro | grupo `09_UsoIA` e declaração de uso | ativo |

## IA-001 - Leitura e estruturação da linha de base

**Entrada:** PDF `SISMAT.EST.00001`, versão 1, emitido em 26/03/2026.

**Como a IA foi usada:** identificação de seções, casos de uso, regras, mensagens, diagramas e imagens; conversão do conteúdo em uma estrutura navegável para o Obsidian.

**Saída aproveitada:** proposta de pastas, páginas Markdown, metadados e ligações entre artefatos.

**Validação humana:** preservação do PDF original em `99_Fontes`, conferência visual dos anexos e manutenção de referências à linha de base.

**Impacto:** reduziu o trabalho mecânico de transcrição e permitiu pesquisar e atualizar os artefatos separadamente. O risco de interpretação incorreta foi mitigado mantendo a fonte original e marcando dúvidas.

## IA-002 - Evolução da especificação

**Entrada:** conteúdo extraído da linha de base e objetivo de transformar a documentação em um conjunto vivo.

**Como a IA foi usada:** reorganização de casos de uso e regras, criação de índices e rastreabilidade e sugestão de documentos complementares, como visão, escopo, stakeholders, requisitos não funcionais, cenários de aceitação, riscos e ADRs.

**Saída aproveitada:** páginas interligadas nas pastas `01_Produto`, `02_Requisitos`, `04_Arquitetura` e `05_Qualidade`.

**Validação humana:** conteúdos não comprovados pela fonte foram identificados como `proposto`, `em-revisao` ou questão aberta. Nenhum item foi declarado implementado sem evidência de código ou teste.

**Impacto:** ampliou a cobertura e a rastreabilidade da documentação. Como parte do conteúdo é proposta de evolução, ainda depende da aprovação da equipe e dos responsáveis pelo domínio.

## IA-003 - Modelagem e diagramas editáveis

**Entrada:** regras, fluxos e entidades documentadas.

**Como a IA foi usada:** transformação das relações textuais em diagramas Mermaid de fluxo, contexto, domínio, ciclo de vida, arquitetura e sequência.

**Saída aproveitada:** diagramas versionáveis junto com os arquivos Markdown.

**Validação humana:** comparação com a fonte disponível e identificação explícita de estados, componentes ou integrações ainda propostos.

**Impacto:** tornou os modelos mais fáceis de evoluir e revisar. Diagramas gerados não comprovam a arquitetura ou a implementação reais.

## IA-004 - Interfaces e anexos

**Entrada:** objetos visuais incorporados ao PDF original.

**Como a IA foi usada:** apoio à extração, nomenclatura, classificação e vinculação das imagens aos casos de uso correspondentes.

**Saída aproveitada:** anexos `IMG-01` a `IMG-13`, galeria e [[06_Interfaces/Mapa de Interfaces]].

**Validação humana:** conferência visual das imagens extraídas e dos vínculos. As telas não foram recriadas por geração de imagem.

**Impacto:** preservou evidências visuais da linha de base e facilitou a navegação entre comportamento e interface.

## IA-005 - Publicação acadêmico-editorial

**Entrada:** páginas Markdown, referência visual aprovada, logomarca institucional e dados acadêmicos da entrega.

**Como a IA foi usada:** apoio à implementação do gerador local, definição do estilo de capa e páginas, montagem de sumário, lista de figuras, cabeçalhos e marcadores de navegação.

**Saída aproveitada:** arquivos em `08_Publicacao/Gerador PDF` e PDF versionado em `output/pdf`.

**Validação humana:** aprovação da referência visual, confirmação de curso, disciplina, equipe e modalidade da entrega.

**Impacto:** permitiu gerar novamente o PDF a partir da documentação viva, evitando manutenção duplicada em um editor separado.

## IA-006 - Garantia da qualidade da publicação

**Entrada:** PDF compilado.

**Como a IA foi usada:** apoio à renderização de todas as páginas, inspeção de cortes e sobreposições, contagem de páginas, análise de marcadores e busca por sintaxe não resolvida.

**Saída aproveitada:** [[08_Publicacao/VALIDACAO - Layout Academico|relatório de validação do layout]].

**Validação humana:** inspeção visual das páginas renderizadas e aprovação do resultado final.

**Impacto:** reduziu falhas editoriais antes da entrega. Essa verificação não valida a correção funcional do software.

## IA-007 - Registro de transparência

**Entrada:** histórico das atividades assistidas por IA realizadas durante a evolução documental.

**Como a IA foi usada:** consolidação do registro, da metodologia, dos impactos, dos riscos e das responsabilidades.

**Saída aproveitada:** documentos do grupo `09_UsoIA`.

**Validação humana:** a equipe deve revisar este registro antes de cada entrega e adequá-lo às orientações dos docentes e da instituição.

**Impacto:** torna o uso de IA explícito, auditável e compatível com a responsabilidade autoral da equipe.

## Como registrar um novo uso

Adicione uma nova seção com ID sequencial e informe: data, etapa, entrada, objetivo, como a IA foi usada, saída incorporada, validação humana, impacto, limitações e responsável pela revisão.

