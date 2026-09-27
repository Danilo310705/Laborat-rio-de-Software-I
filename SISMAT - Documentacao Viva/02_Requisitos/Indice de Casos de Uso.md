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

| ID     | Caso de uso                                                                       | Ator principal | Estado documental |
| ------ | --------------------------------------------------------------------------------- | -------------- | ----------------- |
| UC-001 | [[UC-001 - Cadastrar cliente\|Cadastrar cliente]]                                 | Usuário        | em revisão        |
| UC-002 | [[UC-002 - Consultar clientes\|Consultar clientes]]                               | Usuário        | em revisão        |
| UC-003 | [[UC-003 - Cadastrar Técnico\|Cadastrar Técnico]]                                 | Usuário        | em revisão        |
| UC-004 | [[UC-004 - Cadastrar Serviço\|Cadastrar Serviço]]                                 | Usuário        | em revisão        |
| UC-005 | [[UC-005 - Cadastrar produto\|Cadastrar produto]]                                 | Usuário        | em revisão        |
| UC-006 | [[UC-006 - Registrar entrada de mercadoria\|Registrar entrada de mercadoria]]     | Usuário        | em revisão        |
| UC-007 | [[UC-007 - Cadastrar fornecedor\|Cadastrar forneced]]                             | Usuário        | em revisão        |
| UC-008 | [[UC-008 - Alertar estoque mínimo\|Alertar estoque mínimo]]                       | Usuário        | em revisão        |
| UC-009 | [[UC-009 - Abrir Ordem de Serviço\|Abrir Ordem de Serviço]]                       | Usuário        | em revisão        |
| UC-010 | [[UC-010 - Adicionar produtos à O.S.\|Adicionar produtos à O.S.]]                 | Usuário        | em revisão        |
| UC-011 | [[UC-011 - Adicionar serviço à O.S.\|Adicionar serviço à O.S.]]                   | Usuário        | em revisão        |
| UC-012 | [[UC-012 - Registrar diagnóstico O.S\|Registrar diagnóstico O.S]]                 | Usuário        | em revisão        |
| UC-013 | [[UC-013 - Atualizar status da O.S.\|Atualizar status da O.S.]]                   | Usuário        | em revisão        |
| UC-014 | [[UC-014 - Finalizar O.S.\|Finalizar O.S.]]                                       | Usuário        | em revisão        |
| UC-015 | [[UC-015 - Emitir comprovante da O.S.\|Emitir comprovante da O.S.]]               | Usuário        | em revisão        |
| UC-016 | [[UC-016 - Consultar O.S.\|Consultar O.S.]]                                       | Usuário        | em revisão        |
| UC-017 | [[UC-017 - Editar ou Remover produto da O.S.\|Editar ou Remover produto da O.S.]] | Usuário        | em revisão        |
| UC-018 | [[UC-018 - Editar ou Remover serviço da O.S.\|Editar ou Remover serviço da O.S.]] | Usuário        | em revisão        |



## Mapa de atores e capacidades

```mermaid
flowchart LR

    U([Usuário])

    subgraph SISTEMA["Sistema de Gerenciamento de Oficina"]

        subgraph CLIENTES["Clientes"]
            UC1([UC-001<br/>Cadastrar Cliente])
            UC2([UC-002<br/>Consultar Clientes])
        end

        subgraph CADASTROS["Cadastros e Estoque"]
            UC3([UC-003<br/>Cadastrar Técnico])
            UC4([UC-004<br/>Cadastrar Serviço])
            UC5([UC-005<br/>Cadastrar Produto])
            UC6([UC-006<br/>Registrar Entrada<br/>de Mercadoria])
            UC7([UC-007<br/>Cadastrar Fornecedor])
            UC8([UC-008<br/>Alertar Estoque Mínimo])
        end

        subgraph OS["Ordens de Serviço"]
            UC9([UC-009<br/>Abrir O.S.])
            UC10([UC-010<br/>Adicionar Produtos<br/>à O.S.])
            UC11([UC-011<br/>Adicionar Serviço<br/>à O.S.])
            UC12([UC-012<br/>Registrar Diagnóstico])
            UC13([UC-013<br/>Atualizar Status<br/>da O.S.])
            UC14([UC-014<br/>Finalizar O.S.])
            UC15([UC-015<br/>Emitir Comprovante<br/>da O.S.])
            UC16([UC-016<br/>Consultar O.S.])
            UC17([UC-017<br/>Editar ou Remover<br/>Produto da O.S.])
            UC18([UC-018<br/>Editar ou Remover<br/>Serviço da O.S.])
        end
    end

    U --- UC1
    U --- UC2
    U --- UC3
    U --- UC4
    U --- UC5
    U --- UC6
    U --- UC7
    U --- UC9
    U --- UC10
    U --- UC11
    U --- UC12
    U --- UC13
    U --- UC14
    U --- UC15
    U --- UC16
    U --- UC17
    U --- UC18

    UC10 -. "aciona verificação" .-> UC8
    UC17 -. "aciona verificação" .-> UC8
```

## Convenção dos fluxos

- **EV**: ação do ator ou outro evento externo.
- **RS**: resposta observável do sistema.
- Alternativas mantêm o objetivo do fluxo principal; exceções impedem ou interrompem sua conclusão.

