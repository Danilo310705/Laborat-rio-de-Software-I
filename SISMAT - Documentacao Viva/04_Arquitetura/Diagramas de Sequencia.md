---
id: ARQ-SEQ-001
tipo: diagramas-de-sequencia
status: proposto
origem: evolucao-proposta
implementacao: nao-verificada
criado_em: 2026-09-02
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [engenharia, qualidade]
tags: [sismat, arquitetura, sequencia]
---

# Diagramas de Sequência

Os participantes representam responsabilidades conceituais, não classes ou serviços já confirmados.

## Criar requisição

```mermaid
sequenceDiagram
    actor U as Usuário
    participant UI as Interface
    participant R as Requisições
    participant E as Estoque
    participant DB as Banco

    U->>UI: informa itens e confirma
    UI->>R: criarRequisicao(itens, identidade)
    R->>E: validarDisponibilidade(itens)
    E->>DB: consultar saldos
    DB-->>E: saldos atuais
    alt todos os itens são válidos
        E-->>R: disponível
        R->>DB: gravar requisição + itens como Pendente
        DB-->>R: confirmação
        R-->>UI: requisição criada
        UI-->>U: MSG-01
    else item inválido ou insuficiente
        E-->>R: erro por item
        R-->>UI: validação rejeitada
        UI-->>U: MSG-02 ou MSG-03
    end
```

## Analisar requisição

```mermaid
sequenceDiagram
    actor E as Estoquista
    participant UI as Interface
    participant R as Requisições
    participant A as Autorização
    participant DB as Banco

    E->>UI: aprova ou rejeita
    UI->>R: analisar(id, decisão, motivo)
    R->>A: validar perfil Estoquista
    A-->>R: autorizado
    alt rejeição sem motivo
        R-->>UI: validação RN-07
        UI-->>E: informar motivo
    else decisão válida
        R->>DB: atualizar status e decisão
        DB-->>R: confirmação
        R-->>UI: resultado
        UI-->>E: MSG-07 ou MSG-08
    end
```

## Entregar material

```mermaid
sequenceDiagram
    actor E as Estoquista
    participant UI as Interface
    participant R as Requisições
    participant S as Estoque
    participant DB as Banco

    E->>UI: confirma quantidades entregues
    UI->>R: entregar(id, quantidades)
    R->>DB: consultar estado da requisição
    DB-->>R: Aprovada + itens
    R->>S: efetivarEntrega(itens)
    S->>DB: iniciar transação
    S->>DB: validar e atualizar saldos
    S->>DB: registrar movimentações
    S->>DB: atualizar status
    alt operação completa
        DB-->>S: commit
        S-->>R: entrega confirmada
        R-->>UI: sucesso
        UI-->>E: MSG-10
    else falha ou saldo insuficiente
        DB-->>S: rollback
        S-->>R: falha sem efeito parcial
        R-->>UI: erro
        UI-->>E: MSG-11
    end
```

## Impacto de decisões

A sequência de criação/análise muda se [[04_Arquitetura/Decisoes/ADR-001 - Momento da reserva e baixa de estoque|ADR-001]] for aprovada. Nesse caso, aprovação reserva quantidade e entrega converte reserva em saída física.
