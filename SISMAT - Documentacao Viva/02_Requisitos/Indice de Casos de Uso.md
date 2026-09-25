---
id: UC-INDEX
tipo: mapa-de-conteudo
status: em-revisao
origem: modelo-pdf
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, engenharia]
tags: [sismat, casos-de-uso]
---

# Índice de Casos de Uso

| ID | Caso de uso | Ator principal | Estado documental |
|---|---|---|---|
| UC-001 | [[UC-001 - Cadastrar cliente\|Realizar requisição de material]] | Usuário | em revisão |
| UC-002 | [[UC-002 - Consultar clientes\|Consultar status da requisição]] | Usuário | em revisão |
| UC-003 | [[UC-003 - Cadastrar Técnico\|Analisar requisição]] | Estoquista | em revisão |
| UC-004 | [[UC-004 - Cadastrar Serviço\|Entregar material]] | Estoquista | em revisão |
| UC-005 | [[UC-005 - Cadastrar produto\|Gerenciar produtos]] | Administrador | em revisão |
| UC-006 | [[UC-006 - Registrar entrada de mercadoria\|Gerar relatórios]] | Administrador / Estoquista | em revisão |
| UC-007 | [[UC-007 - Cadastrar fornecedor\|Consultar pedidos finalizados]] | Usuário | em revisão |
| UC-008 | [[UC-008 - Alertar estoque mínimo\|Gerenciar usuários]] | Administrador | em revisão |

## Mapa de atores e capacidades

```mermaid
flowchart LR
    U([Usuário]) --> UC1[UC-001 Solicitar material]
    U --> UC2[UC-002 Consultar status]
    U --> UC7[UC-007 Consultar finalizados]
    E([Estoquista]) --> UC3[UC-003 Analisar requisição]
    E --> UC4[UC-004 Entregar material]
    E --> UC6[UC-006 Gerar relatórios]
    A([Administrador]) --> UC5[UC-005 Gerenciar produtos]
    A --> UC6
    A --> UC8[UC-008 Gerenciar usuários]
```

## Convenção dos fluxos

- **EV**: ação do ator ou outro evento externo.
- **RS**: resposta observável do sistema.
- Alternativas mantêm o objetivo do fluxo principal; exceções impedem ou interrompem sua conclusão.

## Diagrama original

Imagem extraída da página 6 da fonte. A versão Mermaid acima continua sendo a versão viva e editável.

![[06_Interfaces/Anexos/Diagramas da Fonte/Diagrama de Casos de Uso.png]]
