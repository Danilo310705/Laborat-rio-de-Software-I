---
id: TRACE-001
tipo: matriz-de-rastreabilidade
status: em-revisao
origem: evolucao-proposta
implementacao: nao-verificada
criado_em: 2026-09-02
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, qualidade, engenharia]
tags: [sismat, rastreabilidade, qualidade]
---

# Matriz de Rastreabilidade

| Caso de uso | Regras principais | Dados | Aceitação | Código / teste |
|---|---|---|---|---|
| [[UC-001 - Cadastrar cliente\|UC-001]] | RN-01, RN-02, RN-03, RN-04 | Usuario, Produto, Requisicao, Item | CA-001 a CA-003 | a vincular |
| [[UC-002 - Consultar clientes\|UC-002]] | RN-04, RN-05 | Usuario, Requisicao, Item | CA-004 | a vincular |
| [[UC-003 - Consultar historico de serviços ou compras de um cliente\|UC-003]] | RN-06, RN-07 | Requisicao, Item, Produto | CA-005 | a vincular |
| [[UC-004 - Cadastrar Serviço\|UC-004]] | RN-08, RN-09, RN-10 | Requisicao, Item, Produto, Movimentacao | CA-006, CA-007 | a vincular |
| [[UC-005 - Cadastrar produto\|UC-005]] | RN-11, RN-12, RN-13 | Produto | CA-008, CA-012 | a vincular |
| [[UC-006 - Registrar entrada de mercadoria\|UC-006]] | RN-14, RN-15, RN-16 | Produto, Requisicao, Movimentacao | CA-009 | a vincular |
| [[UC-007 - Cadastrar fornecedor\|UC-007]] | RN-04, RN-17, RN-18 | Requisicao, Item | CA-010 | a vincular |
| [[02_Requisitos/Casos de Uso/UC-008 - Gerenciar usuarios\|UC-008]] | RN-19, RN-20, RN-21 | Usuario, Perfil | CA-011, CA-012 | a vincular |

## Como evoluir

Quando o repositório do SISMAT estiver disponível, substitua “a vincular” por links para rota/controlador, serviço de domínio e teste automatizado. A rastreabilidade deve funcionar nos dois sentidos: o teste aponta o ID e o caso de uso aponta o teste.

## Cobertura documental

- todos os 8 casos de uso do PDF têm página própria;
- todas as 21 regras do PDF têm ID e página própria;
- cada caso de uso aponta ao menos um cenário de aceitação;
- cobertura de código e execução permanece desconhecida.
