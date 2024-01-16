import styled from 'styled-components'

interface ToggleProps {
  toggle: boolean
}

export const MenuBar = styled.aside<ToggleProps>`
  position: absolute;
  top: 0;
  left: ${(props) => (props.toggle === true ? '0' : '-100%')};
  bottom: 0;
  min-width: 15.6rem;

  min-height: 100vh;

  background-color: ${(props) => props.theme['gray-600']};

  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme['light-gray']};
  box-shadow: 5px 0 25px rgba(0, 0, 0, 0.4);
  transition: left 0.4s ease-in-out;

  @media screen and (min-width: 1120px) {
    position: relative;
    left: 0;
    box-shadow: none;
  }
`

export const Header = styled.header`
  padding-inline: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;

  img {
    width: 100px;
  }

  button {
    line-height: 0;
    padding: 0.25rem;
    color: ${(props) => props.theme['gray-100']};
    background: transparent;
    border-radius: 3px;

    @media screen and (min-width: 1120px) {
      display: none;
    }
  }

  @media screen and (min-width: 1120px) {
    justify-content: center;
  }
`

export const CloseButton = styled.button``

export const Navigation = styled.nav`
  width: 100%;
  height: 100%;
  padding-top: 2rem;

  ul {
    display: grid;
    height: 100%;
    align-content: space-between;

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

export const SettingOptions = styled.div`
  padding-bottom: 1.5rem;
`
