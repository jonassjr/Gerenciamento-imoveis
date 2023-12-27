import { DotsThreeVertical } from 'phosphor-react'
import * as Menubar from '@radix-ui/react-menubar'
import { MenuContent, MenuItem, TriggerButton } from './styles'

export function MenuOptions() {
  return (
    <Menubar.Root>
      <Menubar.Menu>
        <TriggerButton>
          <DotsThreeVertical size={24} />
        </TriggerButton>

        <Menubar.Portal>
          <MenuContent align="end">
            <MenuItem>Deletar</MenuItem>
            <MenuItem>Editar</MenuItem>
          </MenuContent>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  )
}
