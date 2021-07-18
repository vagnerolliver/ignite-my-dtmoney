import { createServer, Model  } from 'miragejs';
import ReactDOM from 'react-dom';
import React from 'react';

import { App } from './App'; 

createServer({ 
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 1000,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Transaction 2',
          amount: 200,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  },
  
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    
    this.post('/transactions', (schema, req) => { 
      const data = JSON.parse(req.requestBody)

      return schema.create('transaction',data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 
