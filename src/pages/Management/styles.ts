import styled from 'styled-components'

export const PageContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  div {
    overflow-x: auto;
  }
`

export const Header = styled.header`
  height: 6.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 0;
  border-bottom: 1px solid ${(props) => props.theme['light-gray']};

  h1 {
    font-size: 24px;
    font-weight: 300;
    display: none;
  }

  @media screen and (min-width: 1120px) {
    h1 {
      display: block;
      font-size: 32px;
    }
  }
`

export const MenuButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme['gray-100']};
  line-height: 0;

  @media screen and (min-width: 1120px) {
    display: none;
  }
`

export const Registerbutton = styled.button`
  width: 3.5rem;
  height: 3.125rem;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
  }

  span {
    display: none;
  }

  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => props.theme['gray-800']};
  background-color: ${(props) => props.theme['gray-100']};

  &:hover {
    background-color: ${(props) => props.theme['gray-200']};
    transition: background-color 0.3s;
  }

  @media screen and (min-width: 768px) {
    width: 9.5rem;

    svg {
      display: none;
    }

    span {
      display: block;
    }
  }
`

export const ManagementTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;

  tr {
    /* &:hover td {
      background-color: ${(props) => props.theme['gray-100']};
      color: ${(props) => props.theme['gray-500']};
      transition: background-color ease-in-out 0.2s;
    } */

    td {
      &:first-child {
        min-width: 10rem;
      }
    }

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

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
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
