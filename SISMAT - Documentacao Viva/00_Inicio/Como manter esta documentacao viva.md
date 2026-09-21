---
id: DOC-GOV-001
tipo: governanca
status: ativo
origem: evolucao-proposta
criado_em: 2026-09-02
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, engenharia, qualidade]
tags: [sismat, governanca, documentacao-viva]
---

# Como manter esta documentação viva

## Regra principal

Uma mudança de comportamento só está concluída quando código, teste e documentação afetada são atualizados juntos. Se a decisão ainda não foi tomada, registre uma questão; se foi tomada, registre uma ADR.

## Fluxo de atualização

1. Abra ou atualize o caso de uso afetado.
2. Revise links para regras de negócio, entidades, mensagens e critérios de aceitação.
3. Atualize o diagrama Mermaid quando o fluxo, o estado ou a integração mudar.
4. Registre decisões relevantes em `04_Arquitetura/Decisoes`.
5. Atualize `atualizado_em`, `ultima_revisao` e `proxima_revisao` no frontmatter.
6. Inclua um resumo em [[07_Operacao/Registro de Mudancas|Registro de Mudanças]] apenas para marcos; use o Git para o histórico detalhado.

## Estados padronizados

| Estado | Uso |
|---|---|
| `rascunho` | Conteúdo incompleto |
| `em-revisao` | Derivado da fonte, aguardando validação |
| `proposto` | Melhoria ainda não aprovada |
| `aprovado` | Validado pelo responsável de negócio |
| `implementado` | Confirmado no sistema e coberto por teste |
| `obsoleto` | Mantido apenas por histórico |

## Definição de pronto da documentação

- [ ] o comportamento observável está descrito;
- [ ] as exceções relevantes estão cobertas;
- [ ] regras e dados estão ligados por wikilinks;
- [ ] existe ao menos um cenário de aceitação correspondente;
- [ ] dúvidas não resolvidas estão no registro de questões;
- [ ] a implementação e os testes foram vinculados quando existirem;
- [ ] o responsável e a próxima revisão estão definidos.

## Convenções

- IDs não mudam depois de publicados: `UC-001`, `RN-01`, `RNF-001`, `ADR-001`, `QST-001`, `CA-001` 
- Renomeie arquivos pelo Obsidian, com atualização automática de links habilitada.
- Não duplique regras dentro de casos de uso; escreva a regra em sua página e faça o link.
- Use `EV` para ação externa e `RS` para resposta do sistema apenas nas tabelas de fluxo.
- Marque inferências com `origem: evolucao-proposta`.

## Revisão periódica

Recomenda-se revisão mensal enquanto o produto estiver em construção e trimestral após estabilização. A página [[00_Inicio/Status da documentacao|Status da documentação]] reúne pesquisas para localizar conteúdo pendente.
