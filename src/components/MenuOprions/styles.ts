// import * as Menubar from '@radix-ui/react-menubar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import styled from 'styled-components'

export const TriggerButton = styled(DropdownMenu.Trigger)`
  background-color: transparent;
  color: ${(props) => props.theme['gray-100']};
  line-height: 0;
  border-radius: 6px;

  cursor: pointer;
  transition: background-color 0.3s;
`

export const MenuContent = styled(DropdownMenu.Content)`
  background-color: ${(props) => props.theme['gray-900']};
  border-radius: 3px;
  margin-top: 0.75rem;
`

export const MenuItem = styled(DropdownMenu.Item)`
  text-align: start;
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['gray-800']};
    outline: none;
  }

  &:focus {
    background-color: ${(props) => props.theme['gray-800']};
  }
`
