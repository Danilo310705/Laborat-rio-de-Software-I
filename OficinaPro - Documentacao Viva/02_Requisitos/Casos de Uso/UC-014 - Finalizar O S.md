---
id: UC-008
tipo: caso-de-uso
status: em-revisao
origem: modelo-pdf
implementacao: nao-verificada
prioridade: alta
ator_principal: administrador
criado_em: 2026-03-26
atualizado_em: 2026-09-02
proxima_revisao: 2026-10-02
responsaveis: [produto, engenharia, seguranca]
tags: [sismat, caso-de-uso, usuario, acesso]
---

# UC-014 - Finalizar O.S.

## Objetivo

Permitir que o usuário finalize uma Ordem de Serviço, registrando o pagamento e a forma de pagamento utilizada.

| Campo           | Valor                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ator principal  | [[01_Produto/Atores e Stakeholders#Atores primários\|Usuário]]                                                                                                  |
| Gatilho         | Usuário seleciona “Finalizar O.S.”                                                                                                                              |
| Pré-condições   | Usuário autenticado conforme [[RN-04 - Usuário autenticado\|RN-04]] e O.S. com status `Em andamento` conforme [[RN-24 - Transição de status da O S\|RN-24]]    |
| Sucesso         | Pagamento registrado e O.S. alterada para o status `Concluída` conforme [[RN-24 - Transição de status da O S\|RN-24]] e [[RN-27 - Finalização da O S\|RN-27]] |
| Garantia minima | Em caso de falha, a O.S. permanece com o status anterior e o pagamento não é registrado parcialmente conforme [[RN-29 - Consistência da finalização\|RN-29]]    |

## Fluxo principal

| Passo | Tipo | Comportamento                                                                                                                                                                                                                                                                                       |
| ----: | :--: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     1 |  EV  | Usuário acessa a O.S. que deseja finalizar.                                                                                                                                                                                                                                                         |
|     2 |  EV  | Usuário seleciona “Finalizar O.S.”                                                                                                                                                                                                                                                                  |
|     3 |  RS  | Sistema exibe os produtos, serviços e o valor total da O.S.                                                                                                                                                                                                                                         |
|     4 |  EV  | Usuário informa um desconto, caso desejado, conforme [[RN-34 - Desconto na O S\|RN-34]].                                                                                                                                                                                                           |
|     5 |  RS  | Sistema calcula e exibe o valor final da O.S. após o desconto conforme [[RN-34 - Desconto na O S\|RN-34]].                                                                                                                                                                                         |
|     6 |  EV  | Usuário seleciona a forma de pagamento conforme [[RN-28 - Forma de pagamento obrigatória\|RN-28]].                                                                                                                                                                                                  |
|     7 |  EV  | Usuário confirma a finalização da O.S.                                                                                                                                                                                                                                                              |
|     8 |  RS  | Sistema verifica se a O.S. pode ser finalizada conforme  [[RN-24 - Transição de status da O S\|RN-24]] e [[RN-27 - Finalização da O S\|RN-27]], valida a forma de pagamento conforme [[RN-28 - Forma de pagamento obrigatória\|RN-28]] e o desconto conforme [[RN-34 - Desconto na O S\|RN-34]]. |
|     9 |  RS  | Sistema registra o pagamento e a forma de pagamento conforme [[RN-28 - Forma de pagamento obrigatória\|RN-28]] e [[RN-29 - Consistência da finalização\|RN-29]].                                                                                                                                    |
|    10 |  RS  | Sistema altera o status da O.S. de `Em andamento` para `Concluída` conforme [[RN-24 - Transição de status da O S\|RN-24]] e [[RN-29 - Consistência da finalização\|RN-29]].                                                                                                                        |
|    11 |  RS  | Sistema exibe [[Catalogo de Mensagens#MSG-25\|MSG-25]].                                                                                                                                                                                                                                             |


## Alternativa A - Aplicar desconto percentual

1. No passo 4, o usuário seleciona a opção de desconto por percentual.
2. O usuário informa o percentual de desconto.
3. O sistema valida o desconto conforme [[RN-34 - Desconto na O S|RN-34]].
4. O sistema calcula o desconto sobre o valor total da O.S.
5. O sistema exibe o valor final após o desconto.
6. O fluxo continua no passo 6.

## Alternativa B - Aplicar desconto em valor

1. No passo 4, o usuário seleciona a opção de desconto por valor.
2. O usuário informa o valor do desconto.
3. O sistema valida o desconto conforme [[RN-34 - Desconto na O S|RN-34]].
4. O sistema subtrai o desconto do valor total da O.S.
5. O sistema exibe o valor final após o desconto.
6. O fluxo continua no passo 6.

## Alternativa C - Finalizar sem desconto

1. No passo 4, o usuário não informa desconto.
2. O valor final permanece igual ao valor total da O.S.
3. O fluxo continua no passo 6.

## Alternativa D - Formas de pagamento

1. No passo 6, o usuário seleciona uma das formas de pagamento disponíveis, como dinheiro, PIX, cartão de débito ou cartão de crédito conforme [[RN-28 - Forma de pagamento obrigatória|RN-28]].
2. O fluxo continua no passo 7.


## Exceções 

- 4a - Percentual de desconto inválido: exibir [[Catalogo de Mensagens#MSG-26|MSG-26]] conforme [[RN-34 - Desconto na O S|RN-34]] e permitir a correção.
- 4b - Valor de desconto inválido: exibir [[Catalogo de Mensagens#MSG-27|MSG-27]] conforme [[RN-34 - Desconto na O S|RN-34]] e permitir a correção.
- 6a - Forma de pagamento não selecionada: exibir [[Catalogo de Mensagens#MSG-28|MSG-28]] conforme [[RN-28 - Forma de pagamento obrigatória|RN-28]].
- 8a - O.S. não pode ser finalizada: exibir [[Catalogo de Mensagens#MSG-29|MSG-29]] conforme [[RN-27 - Finalização da O S|RN-27]].
- 8b - Status da O.S. não permite finalização: exibir [[Catalogo de Mensagens#MSG-30|MSG-30]] conforme [[RN-24 - Transição de status da O S|RN-24]].
- 9a - Falha ao registrar pagamento: exibir [[Catalogo de Mensagens#MSG-31|MSG-31]] e manter o status anterior conforme [[RN-29 - Consistência da finalização|RN-29]].
- 10a - Falha ao concluir a O.S.: exibir [[Catalogo de Mensagens#MSG-32|MSG-32]] e manter a O.S. no estado anterior conforme [[RN-29 - Consistência da finalização|RN-29]].



## Dados e interfaces

- Entidades: [[03_Modelo de Dominio/Dicionario de Dados#Usuario|Usuario]], [[03_Modelo de Dominio/Dicionario de Dados#Ordem_Servico|Ordem_Servico]], [[03_Modelo de Dominio/Dicionario de Dados#Pagamento|Pagamento]], [[03_Modelo de Dominio/Dicionario de Dados#Item_Produto_OS|Item_Produto_OS]], [[03_Modelo de Dominio/Dicionario de Dados#Item_Servico_OS|Item_Servico_OS]].
- Protótipos: [[06_Interfaces/Mapa de Interfaces#IMG-16 - Finalizar O.S.|IMG-16]].

## Critérios de aceitação

Veja [[05_Qualidade/Cenarios de Aceitacao#CA-011 - Impedir e-mail duplicado|CA-011]] e [[05_Qualidade/Cenarios de Aceitacao#CA-012 - Bloquear gestão por perfil não autorizado|CA-012]].
