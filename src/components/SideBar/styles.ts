import styled from 'styled-components'

export const MenuBar = styled.aside`
  width: 100%;
  max-width: 15.6rem;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;

  border-right: 1px solid ${(props) => props.theme['light-gray']};
`
export const Navigation = styled.nav`
  width: 100%;
  padding-top: 2rem;

  li {
    list-style: none;

    a {
      display: flex;
      gap: 0.6rem;
      align-items: center;
      text-decoration: none;
      padding: 0.6rem 1.25rem;
      color: ${(props) => props.theme['gray-100']};
      border-left: 2px solid transparent;
      transition: background-color 0.3s;
      border-radius: 3px;

      &.active {
        background-color: ${(props) => props.theme['gray-500']};
        border-left: 2px solid ${(props) => props.theme['purple-500']};
      }

      &:hover {
        background-color: ${(props) => props.theme['gray-500']};
      }
    }
  }
`

export const Divider = styled.span`
  display: flex;
  content: '';
  width: 80%;
  margin: 1.5rem auto;
  height: 1px;

  background-color: ${(props) => props.theme['gray-100']};
`
