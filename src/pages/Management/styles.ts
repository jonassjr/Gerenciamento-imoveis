import styled from 'styled-components'

export const PageContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 0;
  border-bottom: 1px solid ${(props) => props.theme['light-gray']};

  h1 {
    font-size: 32px;
    font-weight: 300;
  }

  button {
    width: 9.5rem;
    height: 3.125rem;
    border-radius: 3px;

    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    color: ${(props) => props.theme['gray-800']};
    background-color: ${(props) => props.theme['gray-100']};

    &:hover {
      background-color: ${(props) => props.theme['gray-200']};
      transition: background-color 0.3s;
    }
  }
`
