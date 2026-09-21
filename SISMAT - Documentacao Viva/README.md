# SISMAT — documentação viva e PDF

Este vault do Obsidian é a fonte oficial da documentação do **Sistema de Requisição de Materiais (SISMAT)**. O PDF de entrega é compilado a partir das páginas Markdown incluídas no manifesto [[08_Publicacao/Caderno do Projeto Integrador - SISMAT]].

## Identificação da entrega

- instituição: Universidade Paranaense — UNIPAR;
- curso: Análise e Desenvolvimento de Sistemas;
- disciplina: Laboratório de Software;
- modalidade: Projeto Integrador;
- unidade: Campus Toledo.

## Como gerar o PDF

No Windows, abra o PowerShell na raiz deste vault e execute:

```powershell
powershell -ExecutionPolicy Bypass -File ".\08_Publicacao\Gerador PDF\Gerar PDF.ps1"
```

O nome do arquivo é montado automaticamente a partir do campo `versao` do frontmatter. Para a edição atual, será criado em:

```text
output/pdf/SISMAT-Projeto-Integrador-v1.2.pdf
```

## O que entra na publicação

1. Abra [[08_Publicacao/Caderno do Projeto Integrador - SISMAT]].
2. Edite os metadados do bloco inicial quando versão, data, equipe, curso ou disciplina mudarem.
3. Mantenha no corpo desse arquivo apenas as transclusões `![[...]]` que devem compor a entrega.
4. Execute o comando de geração novamente.

O gerador resolve as páginas do Obsidian, imagens, tabelas, links internos e diagramas Mermaid; em seguida, aplica o layout paginado e grava o PDF.

## Dependências

São necessários **Node.js 20 ou superior** e **Playwright**. No ambiente do Codex eles já estão disponíveis. Em outro computador, execute uma única vez dentro de `08_Publicacao/Gerador PDF`:

```powershell
npm install
npx playwright install chromium
```

As bibliotecas de Markdown, Mermaid e paginação já estão versionadas em `08_Publicacao/Gerador PDF/vendor`.

## Arquivos do gerador

- `08_Publicacao/Gerador PDF/Gerar PDF.ps1`: comando de compilação;
- `08_Publicacao/Gerador PDF/gerar-pdf.mjs`: montagem do documento;
- `08_Publicacao/Gerador PDF/estilo-overleaf.css`: layout da capa e das páginas;
- `08_Publicacao/Gerador PDF/assets/logo-unipar.png`: marca usada na capa e nos cabeçalhos;
- [[08_Publicacao/LEIA-ME - Geracao do PDF]]: guia detalhado e checklist de entrega.
- [[09_UsoIA/Indice de Uso de IA]]: registro de como a IA foi utilizada e validada no projeto.

## Antes de entregar

- confira equipe, versão e data;
- valide o sumário e a lista de figuras;
- verifique se imagens e diagramas estão legíveis;
- confirme que não existem tabelas ou textos cortados;
- registre a versão em [[07_Operacao/Registro de Mudancas]].
