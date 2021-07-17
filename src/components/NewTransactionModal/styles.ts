import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 { 
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background: #E7E9EE;
    border: 1px solid #D7D7D7;
    border-radius: .25rem;
    color: var(--text-body);
    font-weight: 400;
    font-size: 1rem;
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;

    &::placeholder {
      color: var(--text-body)
    }

    & + input { 
      margin-top: 1rem
    }
  }

  button[type="submit"] { 
    background: var(--green);
    border: 0;
    border-radius: .25rem;
    color: #fff;    
    font-size: 1rem;
    font-weight: 600;
    height: 4rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    width: 100%;
    text-align: center;
    transition: filter 0.2s;

    &:hover {
     filter:brightness(.9) 
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'deposit' | 'withdraw'
}

const cores = {
  deposit: '#33CC95',
  withdraw: '#E62E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  background: ${({isActive, activeColor}) => isActive 
    ? transparentize('.9', cores[activeColor]) 
    : 'transparent' 
  };
  border: 1px solid #d7d7d7;
  border-radius: .25rem;
  color: var(--text-title);
  height: 4rem;
  transition: border-color 0.2s;
  
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')}
  }
  
  img {
    height: 20px;
    width: 20px;
  }
  
  span {
    color: var(--text-title);
    display: inline-block;
    font-size: 1rem;
    margin-left: 1rem;
  }
`