import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  width: 100%;
  /* border-radius: 6px; */
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme['gray-800']};

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-size: 0.875rem;
    }

    input {
      border-radius: 3px;
      border: none;
      padding: 1rem;
      color: ${(props) => props.theme['gray-100']};

      font-size: 0.875rem;

      background-color: ${(props) => props.theme['gray-900']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }

      @media screen and (min-width: 420px) {
        font-size: 1rem;
      }
    }

    button[type='submit'] {
      margin-top: 0.5rem;
      height: 50px;
      border: 0;
      border-radius: 3px;
      font-weight: bold;
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-800']};
      background-color: ${(props) => props.theme['gray-100']};
      cursor: pointer;

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['gray-200']};
        transition: background-color 0.2s;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }

  @media screen and (min-width: 520px) {
    max-width: 32rem;

    top: 50%;
    transform: translate(-50%, -50%);
    bottom: initial;
    border-radius: 6px;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-100']};
`

export const PropertyCategory = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 420px) {
    gap: 1rem;
  }
`

export const PropertyCategoryButton = styled(RadioGroup.Item)`
  background-color: ${(props) => props.theme['gray-600']};
  padding: 0.75rem 0.65rem;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.75rem;

  color: ${(props) => props.theme.white};

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-800']};
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme['green-500']};
  }

  @media screen and (min-width: 420px) {
    padding: 1rem;
    font-size: 0.875rem;
  }
`
