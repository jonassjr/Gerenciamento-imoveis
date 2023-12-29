import * as Dialog from '@radix-ui/react-dialog'

import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;

  background-color: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  section {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      display: flex;
      gap: 0.5rem;
      color: ${(props) => props.theme['gray-200']};

      span {
        color: ${(props) => props.theme['gray-100']};
      }
    }

    div {
      margin-top: 2rem;
      display: flex;
      gap: 1rem;
    }
  }
`

const color = {
  red: 'red-500',
  white: 'gray-100',
} as const

interface colorProps {
  colorType: keyof typeof color
}

export const Button = styled.button<colorProps>`
  flex: 1;
  height: 50px;
  border: 0;
  border-radius: 3px;
  font-weight: bold;
  font-size: 0.875rem;
  color: ${(props) =>
    props.colorType === 'red'
      ? props.theme['gray-100']
      : props.theme['gray-800']};
  background-color: ${(props) => props.theme[color[props.colorType]]};
  cursor: pointer;

  &:not(:disabled):hover {
    opacity: 0.75;
    transition: opacity 0.2s;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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
