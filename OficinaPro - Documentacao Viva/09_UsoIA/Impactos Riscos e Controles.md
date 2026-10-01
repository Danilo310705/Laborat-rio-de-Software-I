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

| Dimensão        | Impacto positivo                                                        | Contrapartida                                                          |
| --------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| produtividade   | redução do tempo gasto com organização, revisão e padronização          | exige conferência humana antes de incorporar o conteúdo                |
| consistência    | auxílio na padronização de nomes, casos de uso, regras e mensagens      | um erro inicial pode ser repetido em vários documento                  |
| cobertura       | identificação de situações e regras que inicialmente não estavam claras | algumas sugestões precisaram ser discutidas e ajustadas pelo grupo     |
| modelagem       | apoio na identificação de entidades, relacionamentos e fluxos           | o modelo gerado precisava ser comparado com as decisões do projeto     |
| comunicação     | geração de diagramas, protótipos e textos mais fáceis de compreender    | simplificações visuais podem esconder detalhes importantes             |
| rastreabilidade | facilidade para relacionar casos de uso, regras, mensagens e interfaces | os vínculos precisam ser atualizados sempre que o projeto for alterado |
| aprendizagem    | apoio na compreensão de requisitos, modelagem e organização documental  | a equipe precisa compreender o conteúdo e não apenas aceitar sugestões |

## Matriz de riscos e controles

| Risco                                   | Impacto | Controle adotado                                                    | Evidência                                                  |
| --------------------------------------- | ------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| informação incorreta ou inventada       | alto    | Revisão manual de todas as sugestões antes da incorporação          | Revisão dos casos de uso, regras e documentos              |
| contradição entre documentos            | alto    | Comparação entre casos de uso, regras, mensagens e modelo de dados  | Indices e referências entre os artefatos                   |
| regra de negócio inadequada             | alto    | Discussão da regra pela equipe antes de sua inclusão                | Regras RN-01 a RN-34 revisadas                             |
| uso de termos ou nomes diferentes       | médio   | Padronização de nomes e identificação numérica                      | UC, RN, MSG, IMG e entidades padronizados                  |
| protótipo diferente dos requisitos      | médio   | Pomparação das telas com os casos de uso e regras correspondentes   | Mapa de Interfaces e revisão visual dos protótipos         |
| dependência excessiva da IA             | médio   | Exigência de compreensão do conteúdo por todos os integrantes       | Revisão e apresentação realizada pela equipe               |
| aceitação automática de sugestões       | alto    | Possibilidade de modificar ou descartar qualquer resposta da IA     | Decisões finais tomadas pelos integrantes                  |
| perda de autoria acadêmica              | alto    | Declaração explícita do uso de IA e responsabilidade da equipe      | Grupo `09_UsoIA` e Declaração de Transparência             |
| falsa impressão de sistema implementado | médio   | Identificação do protótipo como demonstrativo                       | Documentação da etapa IA-006                               |
| erro propagado entre vários artefatos   | médio   | Revisão de referências após alterações de numeração ou nomenclatura | Correções realizadas nos índices e documentos relacionados |

## Limitações desta utilização

- não houve acesso ao código-fonte ou ao ambiente executável do SISMAT;
- A IA não realizou entrevistas com usuários reais da oficina.
- As regras de negócio foram definidas a partir das decisões e necessidades levantadas pela equipe, sem validação com uma empresa real.
- Os protótipos de interface representam uma proposta visual do sistema e não uma implementação definitiva.
- O protótipo interativo possui finalidade demonstrativa e não utiliza backend, banco de dados ou autenticação real.
- As sugestões geradas pela IA podem conter erros, interpretações inadequadas ou informações que não correspondam às decisões do projeto.
- Diagramas e modelos produzidos com apoio da IA representam a documentação definida pela equipe, mas não comprovam a existência de uma implementação funcional.
- O conteúdo gerado ou revisado com apoio de IA depende de validação humana antes de ser considerado parte oficial do projeto.
- Este registro deve ser atualizado caso a IA seja utilizada em novas etapas do desenvolvimento.

## Ações recomendadas antes da avaliação

- [ ] revisar este grupo com todos os integrantes;
- [ ] adaptar a declaração às orientações dos docentes e da UNIPAR;
- [ ] confirmar se o compartilhamento da linha de base estava autorizado;
- [ ] validar requisitos propostos com o responsável pelo processo;
- [ ] garantir que todos consigam explicar os artefatos entregues;
- [ ] registrar novos usos de IA ocorridos após esta edição.

