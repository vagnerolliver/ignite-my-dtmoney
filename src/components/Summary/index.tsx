import { useContext } from 'react';

import { TransactionContext } from '../../TransactionContext';

import { Container } from './styles';

import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  const { transactions } = useContext(TransactionContext)
 
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.incomes += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }
    return acc
  }, {
    incomes: 0,
    withdraws: 0,
    total:0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong>
          {new Intl
          .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
          .format(summary.incomes)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saída" />
        </header>
        <strong>
          -{new Intl
          .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
          .format(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl
          .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
          .format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}