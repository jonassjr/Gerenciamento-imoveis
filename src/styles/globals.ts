import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
      width: 16px; 
      background-color: rgba(0,0,0,0.40);
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['gray-500']};
      border-radius: 3px;
    }
  }

  body, input, textarea button {
    font: 400 1rem Roboto, sans-serif; 
  }

  button {
    border: none;
  }
`
