import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
 display: flex;
 max-width: 1120px;
 margin: 0 auto;
 padding: 2rem 0 8.5rem;
 justify-content: space-between;

 button { 
   background: var(--blue-light);
   border: 0;
   border-radius:.25rem;
   color: #fff;
   font-size: 1rem;
   height: 3rem;
   padding: 0 2rem;
   transition: filter 0.2s;

   &:hover {
     filter:brightness(.9) 
   }
 }

`