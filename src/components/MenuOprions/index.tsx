import { DotsThreeVertical } from 'phosphor-react'
// import * as Menubar from '@radix-ui/react-menubar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Dialog from '@radix-ui/react-dialog'

import { MenuContent, MenuItem, TriggerButton } from './styles'

import { DeleteModal } from '../DeleteModal/index'
import { EditModal } from '../EditModel/idex'

import { useContext, useState } from 'react'
import { PropertiesContext } from '../../contexts/PropertiesContext'

export function MenuOptions({ propertyId }: { propertyId: number }) {
  const { properties } = useContext(PropertiesContext)

  const propertyGetById = properties.find(
    (property) => property.id === propertyId,
  )

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const closeMenuAndOpenDeleteModal = () => {
    setIsMenuOpen(false)
    setIsDeleteModalOpen(true)
  }

  const closeMenuAndOpenEditModal = () => {
    setIsMenuOpen(false)
    setIsEditModalOpen(true)
  }

  const onClose = () => {
    setIsDeleteModalOpen(false)
  }

  return (
    <>
      <DropdownMenu.Root
        modal={false}
        open={isMenuOpen}
        onOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
      >
        <TriggerButton>
          <DotsThreeVertical size={24} />
        </TriggerButton>
        <DropdownMenu.Portal>
          <MenuContent align="end">
            <MenuItem onSelect={closeMenuAndOpenDeleteModal}>Deletar</MenuItem>
            <MenuItem onSelect={closeMenuAndOpenEditModal}>Editar</MenuItem>
          </MenuContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <Dialog.Root
        open={isDeleteModalOpen}
        onOpenChange={(isOpen) => setIsDeleteModalOpen(isOpen)}
      >
        {propertyGetById && (
          <DeleteModal propertyToDelete={propertyGetById} onClose={onClose} />
        )}
      </Dialog.Root>

      <Dialog.Root
        open={isEditModalOpen}
        onOpenChange={(isOpen) => setIsEditModalOpen(isOpen)}
      >
        <EditModal />
      </Dialog.Root>
    </>
  )
}
