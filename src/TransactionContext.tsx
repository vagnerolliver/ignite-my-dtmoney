import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';


interface TransactionProviderProps {
  children: ReactNode
}

interface Transaction {
  id: number;
  title: string,
  value: number;
  category: string;
  type: string;
  createdAt: string;
}

export const TransactionContext = createContext<Transaction[]>([])

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=>{
    axios("http://localhost:3000/api/transactions")
      .then(({ data }) => setTransactions(data.transactions))
  },[])

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )
}
