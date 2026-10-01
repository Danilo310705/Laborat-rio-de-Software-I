---
id: PUB-GUIA-001
tipo: guia-de-publicacao
status: ativo
origem: evolucao-proposta
criado_em: 2026-09-02
atualizado_em: 2026-09-16
responsaveis: [equipe]
tags: [sismat, pdf, publicacao, obsidian]
---

# Geração editorial do PDF

O Obsidian permanece como fonte da documentação viva. A entrega formal é composta por um gerador local, inspirado no fluxo do Overleaf: conteúdo e apresentação ficam separados, o documento é paginado antes da exportação e o sumário recebe os números de página automaticamente.

## Resultado do gerador

- capa acadêmica em A4 com a marca institucional da UNIPAR;
- folha de rosto com natureza do projeto e integração curricular;
- ficha da publicação;
- sumário paginado;
- lista de figuras paginada;
- numeração automática de capítulos e seções;
- formato A4 com composição acadêmico-editorial alinhada à referência visual aprovada;
- marca da UNIPAR, curso e disciplina na capa e nos cabeçalhos correntes;
- paginação no canto superior direito da parte textual;
- tabelas com cabeçalho repetido;
- diagramas Mermaid renderizados;
- imagens e protótipos incorporados;
- marcadores PDF para navegação por capítulos.

## Arquivos do mecanismo

- [[08_Publicacao/Caderno do Projeto Integrador - SISMAT|Caderno do Projeto Integrador - SISMAT]]: manifesto da publicação e ordem editorial.
- [[90_Templates/Template - Caderno do Projeto Integrador|Template - Caderno do Projeto Integrador]]: modelo reutilizável para novas entregas.
- `08_Publicacao/Gerador PDF/Gerar PDF.ps1`: comando de geração no Windows.
- `08_Publicacao/Gerador PDF/gerar-pdf.mjs`: compilador das notas.
- `08_Publicacao/Gerador PDF/estilo-overleaf.css`: projeto gráfico editorial.
- `08_Publicacao/Gerador PDF/vendor`: bibliotecas incorporadas para Markdown, Mermaid e paginação.
- `output/pdf`: PDFs finais.

## Antes de gerar

Edite o frontmatter do caderno e confira estes campos:

```yaml
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
versao: "1.2"
status_publicacao: Em revisão
autores:
  - Nome do autor
disciplinas:
  - Nome da disciplina
```

As seções e transclusões que aparecem no caderno definem exatamente o que entra no PDF. Para alterar a ordem, mova os blocos `![[...]]` no próprio caderno.

## Como gerar no Windows

Abra o PowerShell na raiz do vault e execute:

```powershell
powershell -ExecutionPolicy Bypass -File ".\08_Publicacao\Gerador PDF\Gerar PDF.ps1"
```

O resultado padrão será:

O nome da saída acompanha automaticamente o campo `versao` do frontmatter. Nesta edição: `output/pdf/SISMAT-Projeto-Integrador-v1.2.pdf`.

Para informar outro documento ou nome de saída:

```powershell
powershell -ExecutionPolicy Bypass -File ".\08_Publicacao\Gerador PDF\Gerar PDF.ps1" `
  -Documento ".\08_Publicacao\Minha Entrega.md" `
  -Saida ".\output\pdf\SISMAT-Projeto-Integrador-v1.2.pdf"
```

## Dependências

O gerador precisa de Node.js 20 ou superior e Playwright. No ambiente do Codex essas dependências já estão disponíveis. Em outro computador, abra o terminal dentro de `08_Publicacao/Gerador PDF` e execute uma única vez:

```powershell
npm install
npx playwright install chromium
```

Não é necessário instalar LaTeX. Marked, Mermaid e Paged.js já estão preservados dentro do vault para garantir uma publicação reproduzível e sem dependência de internet.

## Prévia rápida no Obsidian

O trecho CSS `sismat-publicacao` continua disponível para leitura e conferência rápida. A exportação nativa do Obsidian não deve ser usada como versão final, pois não oferece o mesmo controle de sumário, referências de página e cabeçalhos correntes.

## Checklist de entrega

- [ ] curso, equipe, docentes, disciplinas e período conferidos;
- [ ] versão e data atualizadas;
- [ ] nenhuma página em estado `rascunho` incluída sem justificativa;
- [ ] sumário e lista de figuras conferidos;
- [ ] links, imagens e diagramas visíveis;
- [ ] tabelas sem texto cortado;
- [ ] figuras legíveis em escala de cinza;
- [ ] confidencialidade e autorização de publicação verificadas;
- [ ] PDF final revisado página por página;
- [ ] versão entregue registrada em [[07_Operacao/Registro de Mudancas|Registro de Mudanças]].

## Diagnóstico

O arquivo intermediário `tmp/pdfs/SISMAT-publicacao-compilada.html` é mantido para inspeção. Se a geração falhar, abra esse HTML no navegador para localizar um diagrama ou conteúdo incompatível.
