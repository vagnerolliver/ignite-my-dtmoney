import Modal from "react-modal";
 
// import { styles } from './styles';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
    <h2>Olá Hello World</h2>
  </Modal>
  );
}