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
export const ManagementTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  tr {
    /* &:hover td {
      background-color: ${(props) => props.theme['gray-100']};
      color: ${(props) => props.theme['gray-500']};
      transition: background-color ease-in-out 0.2s;
    } */

    &:nth-child(2n) {
      td {
        background-color: ${(props) => props.theme['gray-500']};
      }

      /* &:hover td {
        background-color: ${(props) => props.theme['gray-100']};
        transition: background-color ease-in-out 0.2s;
      } */
    }
  }

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-600']};

    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    /* &:hover {
      td {
        background-color: ${(props) => props.theme['gray-100']};
      }
    } */
  }
`

const STATUS_COLORS = {
  Alugado: 'orange-500',
  Disponível: 'green-500',
  Vendido: 'blue-500',
} as const

interface StatusProps {
  $status: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[STATUS_COLORS[props.$status]]};
  }
`
