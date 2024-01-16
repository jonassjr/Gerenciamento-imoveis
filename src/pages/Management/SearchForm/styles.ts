import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 2rem;
  display: flex;
  column-gap: 1rem;
  width: 100%;

  input {
    padding: 1rem;
    flex: 1;
    border: 0;
    border-radius: 3px;

    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};

    ::placeholder {
      color: ${(props) => props.theme['gray-200']};
    }
  }

  button {
    width: 3.5rem;
    height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 3px;

    background-color: ${(props) => props.theme['gray-900']};
    border: 1px solid ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-100']};

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['gray-100']};

      color: ${(props) => props.theme['gray-800']};

      transition: background-color 0.1s;
    }

    span {
      display: none;
    }

    @media screen and (min-width: 768px) {
      width: 9.5rem;
      span {
        display: block;
      }
    }
  }
`
