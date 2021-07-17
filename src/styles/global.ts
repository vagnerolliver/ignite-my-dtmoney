import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;

    --shape: #fff;

    --text-title: #363F5F;
    --text-body: #969CB3;
    
    --red: #E62E4D;
    --green: #33CC95;
    --blue: #5429CC;
    --blue-light: #6933ff;
  }
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    @media (max-width:1080px) {
      font-size: 93.75%;
    }

    @media (max-width:720px) {
      font-size: 82.5%;
    }
  }

  body { 
    background: var(--background); 
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, .5);

    position: fixed;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    background: var(--background);
    border-radius: .25rem;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    width: 100%;
  }

  .react-modal-close {
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    position: absolute;
    right:  1.5rem;
    top: 1.5rem;

    &:hover {
      filter: brightness(.9)
    }
  }
`