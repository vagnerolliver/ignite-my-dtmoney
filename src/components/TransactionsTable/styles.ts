import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table { 
    width: 100%;
    border-spacing: 0 0.5rem;

    th { 
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5;
      text-align: left;
    }

    tr { 
    }

    td { 
      border: 0;
      border-radius: .25rem;
      background-color: var(--shape);
      color: var(--text-body);
      padding: 1rem 2rem;

      &:first-child { 
        color: var(--text-title);
      }

      &.deposit {
        color: var(--red)
      }

      &.withdraw { 
        color: var(--green);
      }
    }
  }
`