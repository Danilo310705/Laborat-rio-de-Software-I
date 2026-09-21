---
id: MOD-DADOS-001
tipo: modelo-de-dados
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [engenharia, dados]
tags: [sismat, dados, der]
---

# Modelo de Dados

O diagrama consolida as estruturas repetidas nos casos de uso e o DER da fonte. É um modelo lógico, ainda não confrontado com o esquema real.

```mermaid
erDiagram
    PERFIL ||--o{ USUARIO : classifica
    USUARIO ||--o{ REQUISICAO : realiza
    REQUISICAO ||--|{ ITEM_REQUISICAO : contem
    PRODUTO ||--o{ ITEM_REQUISICAO : solicitado_em
    PRODUTO ||--o{ MOVIMENTACAO_ESTOQUE : movimenta
    REQUISICAO ||--o{ MOVIMENTACAO_ESTOQUE : origina

    PERFIL {
        int id_perfil PK
        string descricao
    }
    USUARIO {
        int id_usuario PK
        int id_perfil FK
        string nome
        string setor
        string email UK
        string senha
    }
    PRODUTO {
        int id_produto PK
        string codigo UK
        string descricao
        string unidade_medida
        decimal saldo_estoque
    }
    REQUISICAO {
        int id_requisicao PK
        int id_usuario FK
        datetime data_requisicao
        string status
        string motivo_rejeicao
    }
    ITEM_REQUISICAO {
        int id_item PK
        int id_requisicao FK
        int id_produto FK
        decimal quantidade
    }
    MOVIMENTACAO_ESTOQUE {
        int id_movimentacao PK
        int id_produto FK
        int id_requisicao FK
        string tipo_movimentacao
        decimal quantidade
        datetime data
    }
```

## Restrições derivadas

- `USUARIO.email` único: [[02_Requisitos/Regras de Negocio/RN-21 - Email unico|RN-21]].
- `PRODUTO.codigo` único: [[02_Requisitos/Regras de Negocio/RN-11 - Codigo de produto unico|RN-11]].
- `ITEM_REQUISICAO.quantidade > 0`: [[02_Requisitos/Regras de Negocio/RN-01 - Quantidade positiva|RN-01]].
- `PRODUTO.saldo_estoque >= 0`: [[02_Requisitos/Regras de Negocio/RN-10 - Estoque nao negativo|RN-10]].
- requisição deve possuir ao menos um item.

## Diferenças e lacunas

- `motivo_rejeicao` é necessário para [[02_Requisitos/Regras de Negocio/RN-07 - Rejeicao exige motivo|RN-07]], embora não apareça no quadro de campos da fonte.
- `id_requisicao` em movimentação aparece no texto do DER, mas não em todos os quadros de estruturas.
- o nome `senha` veio da fonte; a implementação deve armazenar hash/credencial conforme [[02_Requisitos/Requisitos Nao Funcionais#RNF-002 - Proteção de credenciais|RNF-002]].
- entrega parcial pode exigir entidade própria ou quantidades entregue/pendente por item.
- reserva de estoque pode exigir campo ou lançamento adicional; veja [[04_Arquitetura/Decisoes/ADR-001 - Momento da reserva e baixa de estoque|ADR-001]].

Veja também [[03_Modelo de Dominio/Dicionario de Dados|Dicionário de Dados]].

## DER original

Imagem extraída da página 33 do PDF para preservar a referência visual. O diagrama Mermaid desta página é a versão viva.

![[06_Interfaces/Anexos/Diagramas da Fonte/Diagrama Entidade Relacionamento.png]]
