import * as Dialog from '@radix-ui/react-dialog'

import { Button, CloseButton, Content, Overlay } from './styles'
import { X } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
import { useContext } from 'react'
import { PropertiesContext } from '../../contexts/PropertiesContext'

interface Property {
  id: number
  adress: string
  type: 'Casa' | 'Apartamento' | 'Terreno'
  price: number
  category: 'Disponível' | 'Alugado' | 'Vendido'
}

interface DeleteModalProps {
  propertyToDelete: Property
  onClose: () => void
}

export function DeleteModal({ propertyToDelete, onClose }: DeleteModalProps) {
  const { deleteProperties } = useContext(PropertiesContext)

  async function handleDeleteProperty(propertyToDelete: Property) {
    const { id } = propertyToDelete
    await deleteProperties(id)
    onClose()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Deletar Imóvel?</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <section>
          <p>
            <span>Endereço :</span>
            {propertyToDelete.adress}
          </p>
          <p>
            <span>Disponibilidade :</span>
            {propertyToDelete.category}
          </p>
          <p>
            <span>Tipo de Imóvel :</span>
            {propertyToDelete.type}
          </p>
          <p>
            <span>Preço :</span>
            {priceFormatter.format(propertyToDelete.price)}
          </p>

          <div>
            <Button colorType="white" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              colorType="red"
              onClick={() => handleDeleteProperty(propertyToDelete)}
            >
              Deletar
            </Button>
          </div>
        </section>
      </Content>
    </Dialog.Portal>
  )
}
