import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -4.25rem;

  div { 
    border-radius: .25rem;
    background: var(--shape);
    padding: 1.25rem 2rem;
    color: var(--text-title);

    header { 
      align-items: center;
      display: flex;
      justify-content: space-between;
    }

    strong { 
      font-size: 2.25rem;
      font-weight: 500;
      display: block;
      line-height: 1.5;
      margin-top: .5rem;
    }
  
    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`