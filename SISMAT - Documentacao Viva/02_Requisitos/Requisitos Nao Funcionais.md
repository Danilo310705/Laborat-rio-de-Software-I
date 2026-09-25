---
id: RNF-INDEX
tipo: requisitos-nao-funcionais
status: proposto
origem: evolucao-proposta
implementacao: nao-verificada
criado_em: 2026-09-02
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, engenharia, seguranca, qualidade]
tags: [sismat, requisitos-nao-funcionais]
---

# Requisitos Não Funcionais

> [!important] Estado
> O PDF não contém requisitos não funcionais mensuráveis. Todos os itens desta página são propostas para validação, não requisitos aprovados.

## RNF-001 - Autorização no servidor

Toda operação protegida deve validar identidade e perfil no servidor, independentemente da visibilidade do controle na interface.

**Evidência sugerida:** testes automatizados por perfil cobrindo resposta permitida e negada.

## RNF-002 - Proteção de credenciais

Credenciais devem ser armazenadas com algoritmo de hash de senha adaptativo e salt, nunca em texto puro, e não podem aparecer em logs, relatórios ou respostas.

**Evidência sugerida:** inspeção do esquema, configuração e testes de exposição.

## RNF-003 - Consistência transacional do estoque

Atualização de status, saldo e movimentação de estoque deve ocorrer atomicamente; em falha, nenhum efeito parcial permanece.

**Evidência sugerida:** teste de rollback e teste concorrente que confirme [[RN-10 - Veículo pertencente a outro cliente|RN-10]].

## RNF-004 - Rastreabilidade

Mudanças de status, saldo e cadastros sensíveis devem registrar ator, data/hora, ação e referência do objeto alterado.

**Evidência sugerida:** consulta de auditoria para uma requisição completa.

## RNF-005 - Acessibilidade

Os fluxos críticos devem ser operáveis por teclado, possuir foco visível, rótulos programáticos, mensagens anunciadas e contraste adequado, alinhados ao padrão institucional a definir.

**Evidência sugerida:** verificação automatizada e roteiro manual com tecnologia assistiva.

## RNF-006 - Desempenho

Tempos-alvo para listas, comandos e relatórios devem ser definidos a partir do volume esperado e medidos no ambiente de referência.

**Lacuna:** volume, concorrência e metas ainda não foram informados.

## RNF-007 - Privacidade e retenção

Dados pessoais, histórico e logs devem possuir base de acesso, prazo de retenção e procedimento de correção/inativação aprovados.

**Lacuna:** política institucional não anexada.
