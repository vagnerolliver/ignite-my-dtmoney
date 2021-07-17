import { useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from './styles';

interface Transaction {
  id: number;
  title: string,
  value: number;
  category: string;
  type: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=>{
    axios("http://localhost:3000/api/transactions")
      .then(({ data }) => setTransactions(data.transactions))
  },[])

  return (
    <Container>
      <table>
        <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
        </thead>
        <tbody>
          {
            transactions.map(transaction => (    
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl
                    .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                    .format(transaction.value)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl
                    .DateTimeFormat('pt-BR')
                    .format(new Date(transaction.createdAt))}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </Container>
  )
}