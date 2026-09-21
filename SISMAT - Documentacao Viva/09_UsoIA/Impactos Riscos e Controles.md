---
id: IA-RISK-001
tipo: avaliacao-de-impacto
status: ativo
origem: evolucao-proposta
criado_em: 2026-09-16
atualizado_em: 2026-09-16
responsaveis: [equipe]
tags: [sismat, inteligencia-artificial, riscos, controles]
---

# Impactos, Riscos e Controles

## Impactos observados

| Dimensão | Impacto positivo | Contrapartida |
|---|---|---|
| produtividade | aceleração de tarefas repetitivas de estruturação e publicação | exige tempo de revisão e correção |
| cobertura | sugestão de artefatos que não existiam na linha de base | parte do conteúdo permanece proposta |
| consistência | aplicação de padrões de nomes, metadados e ligações | erros podem se propagar se o padrão inicial estiver errado |
| rastreabilidade | criação de índices, links e matrizes | os vínculos precisam acompanhar mudanças futuras |
| comunicação | diagramas e texto mais claros para públicos diferentes | simplificações podem omitir detalhes importantes |
| qualidade editorial | geração repetível e validação visual do PDF | aparência adequada não garante correção técnica |
| aprendizagem | exposição a práticas de requisitos, arquitetura e documentação | a equipe deve compreender o material e evitar dependência da ferramenta |

## Matriz de riscos e controles

| Risco | Impacto | Controle adotado | Evidência |
|---|---|---|---|
| informação inventada ou incorreta | alto | preservar a fonte, revisar e marcar propostas | `99_Fontes`, frontmatter e questões abertas |
| alteração silenciosa de significado | alto | comparar com a linha de base e manter IDs estáveis | casos de uso, regras e registro de mudanças |
| proposta apresentada como fato | alto | usar estados `proposto` e `em-revisao` | metadados e alertas editoriais |
| contradição entre documentos | médio | wikilinks, índices e matriz de rastreabilidade | páginas de requisitos e qualidade |
| exposição de informação restrita | alto | limitar entradas e confirmar autorização | política desta página e preservação local |
| dependência excessiva da IA | médio | exigir compreensão e explicação pela equipe | revisão humana e apresentação acadêmica |
| viés ou linguagem inadequada | médio | revisão de linguagem e contexto por pessoas | versão final aprovada pela equipe |
| perda de autoria ou integridade acadêmica | alto | declarar o uso e assumir responsabilidade | [[09_UsoIA/Declaracao de Transparencia]] |
| falsa sensação de qualidade | médio | separar validação editorial de validação funcional | relatório de layout e limitações registradas |

## Limitações desta utilização

- não houve acesso ao código-fonte ou ao ambiente executável do SISMAT;
- a IA não entrevistou usuários nem validou regras com responsáveis do negócio;
- estados, arquitetura e requisitos adicionais marcados como propostas não representam decisões aprovadas;
- a inspeção do PDF verifica apresentação e integridade editorial, não o funcionamento do sistema;
- este registro descreve o uso realizado na documentação e deve ser atualizado se IA for usada no código, nos testes ou em novas etapas.

## Ações recomendadas antes da avaliação

- [ ] revisar este grupo com todos os integrantes;
- [ ] adaptar a declaração às orientações dos docentes e da UNIPAR;
- [ ] confirmar se o compartilhamento da linha de base estava autorizado;
- [ ] validar requisitos propostos com o responsável pelo processo;
- [ ] garantir que todos consigam explicar os artefatos entregues;
- [ ] registrar novos usos de IA ocorridos após esta edição.

