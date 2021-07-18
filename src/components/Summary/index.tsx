import { useContext } from 'react';

import { TransactionContext } from '../../TransactionContext';

import { Container } from './styles';

import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  const data = useContext(TransactionContext)
  console.log('data', data)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong>R$ 1000.000</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saída" />
        </header>
        <strong>-R$ 500.000</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 500.000</strong>
      </div>
    </Container>
  )
}