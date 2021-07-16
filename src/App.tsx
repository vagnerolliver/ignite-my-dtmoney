import { useState } from 'react';
import Modal from 'react-modal';

import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global'

// accessibility
Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransitionModal () {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransitionModal () {
    setIsNewTransactionModalOpen(false)
  }

  return (
     <>
      <Header openNewTransactionModal={handleOpenNewTransitionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransitionModal}
      /> 
      <GlobalStyle />
    </>
  );
} 
