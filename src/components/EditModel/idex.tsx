import * as Dialog from '@radix-ui/react-dialog'

import { CloseButton, Content, Overlay } from './styles'
import { X } from 'phosphor-react'

export function EditModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Editar Imóvel</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
