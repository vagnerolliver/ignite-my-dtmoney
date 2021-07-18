import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

import { api } from './services/api';

interface TransactionProviderProps {
  children: ReactNode
}

interface Transaction {
  id: number;
  title: string,
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=>{
    api.get('/transactions')
      .then(({ data }) => setTransactions(data.transactions))
  },[])

  async function createTransaction(transactionInput: TransactionInput) {
    const { data } = await api.post('/transactions', { 
      ...transactionInput, 
      createdAt: Date()
    })

    setTransactions([
      ...transactions,
      data.transaction
    ]) 
  }

  return (
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
  )
}
