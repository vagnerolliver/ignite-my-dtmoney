import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

interface HeaderProps {
  openNewTransactionModal: () => void
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="My dtmoney" />
        <button type="button" onClick={props.openNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}