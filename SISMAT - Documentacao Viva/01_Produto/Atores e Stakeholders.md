---
id: STK-001
tipo: stakeholders
status: em-revisao
origem: modelo-pdf
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto]
tags: [sismat, atores, stakeholders]
---

# Atores e Stakeholders

## Atores primários

| Ator          | Responsabilidade                                             | Casos de uso                                                                                                                                                                                                       |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Usuário       | Solicitar materiais e acompanhar apenas os próprios pedidos  | [[UC-001 - Cadastrar cliente\|UC-001]], [[UC-002 - Consultar clientes\|UC-002]], [[UC-007 - Cadastrar fornecedor\|UC-007]]                                                     |
| Estoquista    | Analisar requisições, entregar materiais e emitir relatórios | [[UC-003 - Consultar historico de serviços ou compras de um cliente\|UC-003]], [[UC-004 - Cadastrar Serviço\|UC-004]], [[UC-006 - Registrar entrada de mercadoria\|UC-006]] |
| Administrador | Manter produtos e usuários e emitir relatórios               | [[UC-005 - Cadastrar produto\|UC-005]], [[UC-006 - Registrar entrada de mercadoria\|UC-006]], [[UC-008 - Alertar estoque mínimo\|UC-008]]           |

## Stakeholders 

| Stakeholder | Interesse | Participação esperada |
|---|---|---|
| Responsável pelo almoxarifado | saldo e atendimento corretos | aprovar regras de estoque |
| Gestor de área | prazos e consumo por setor | validar relatórios e indicadores |
| TI/Operações | segurança e disponibilidade | validar arquitetura e operação |
| Auditoria/Compliance | rastreabilidade | validar retenção e trilha de auditoria |
| Solicitante | facilidade e transparência | validar experiência e mensagens |

