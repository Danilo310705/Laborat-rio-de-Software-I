---
id: DOC-STATUS
tipo: dashboard
status: ativo
origem: evolucao-proposta
criado_em: 2026-09-02
atualizado_em: 2026-09-02
tags: [sismat, dashboard, qualidade]
---

# Status da documentação

## Linha de base

| Aspecto                           | Situação em 02/09/2026                 |
| --------------------------------- | -------------------------------------- |
| Casos de uso                      | 8 de 8                                 |
| Regras de negócio do PDF migradas | 21 de 21                               |
| Diagramas em formato editável     | contexto, dados, estados e sequências  |
| Validação com código              | pendente - código-fonte não disponível |
| Decisões críticas                 | 2 propostas                            |
| Questões abertas iniciais         | 6                                      |

## Páginas em revisão

```query
[status:em-revisao]
```

## Propostas que precisam de decisão

```query
[status:proposto]
```

## Páginas vencidas ou próximas da revisão

O mecanismo de busca nativo não compara datas. Revise mensalmente a propriedade `proxima_revisao` ou instale opcionalmente um plugin de consulta para automatizar este painel.

## Próxima auditoria

- [ ] confrontar todos os UCs com telas e rotas do sistema;
- [ ] apontar cenários para testes automatizados;
- [ ] validar modelo de dados com o esquema real;
- [ ] aprovar ou rejeitar ADRs propostas;
- [ ] resolver [[05_Qualidade/Riscos e Questoes em Aberto|questões abertas]].
