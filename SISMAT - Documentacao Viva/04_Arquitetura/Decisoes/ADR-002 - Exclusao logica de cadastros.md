---
id: ADR-002
tipo: decisao-arquitetural
status: proposto
origem: evolucao-proposta
criado_em: 2026-09-02
atualizado_em: 2026-09-02
responsaveis: [produto, engenharia, compliance]
tags: [sismat, adr, dados, auditoria]
---

# ADR-002 - Exclusão lógica de cadastros

## Contexto

O PDF menciona remover produtos e usuários, mas requisições e movimentações históricas dependem desses registros.

## Decisão proposta

Cadastros já referenciados serão **inativados**, não apagados fisicamente. Registros nunca usados podem ser excluídos somente se a política institucional permitir.

## Consequências

- adicionar estado ativo/inativo e metadados de alteração;
- impedir novos pedidos com produto inativo;
- impedir login de usuário inativo;
- manter nome/código necessários à leitura do histórico;
- definir se e-mail/código de item inativo podem ser reutilizados;
- alinhar retenção e anonimização com a política aplicável.

## Critério de aprovação

Produto, almoxarifado, TI e compliance devem confirmar o comportamento e o prazo de retenção.
