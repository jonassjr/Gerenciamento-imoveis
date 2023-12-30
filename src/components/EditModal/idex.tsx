import * as Dialog from '@radix-ui/react-dialog'

import {
  CloseButton,
  Content,
  Overlay,
  PropertyCategory,
  PropertyCategoryButton,
} from './styles'
import { X } from 'phosphor-react'

import { Controller, useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PropertiesContext } from '../../contexts/PropertiesContext'

const NewPropertyFormSchema = z.object({
  id: z.number(),
  adress: z.string(),
  type: z.enum(['Casa', 'Apartamento', 'Terreno']),
  price: z.number(),
  category: z.enum(['Disponível', 'Alugado', 'Vendido']),
})

type NewPropertyFormInputs = z.infer<typeof NewPropertyFormSchema>

// interface Property {
//   id: number
//   adress: string
//   type: 'Casa' | 'Apartamento' | 'Terreno'
//   price: number
//   category: 'Disponível' | 'Alugado' | 'Vendido'
// }

interface EditModalProps {
  propertyToEdit: NewPropertyFormInputs
  onClose: () => void
}

export function EditModal({ propertyToEdit, onClose }: EditModalProps) {
  const { editProperties } = useContext(PropertiesContext)

  const { id, adress, type, price, category } = propertyToEdit

  const {
    control,
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<NewPropertyFormInputs>({
    resolver: zodResolver(NewPropertyFormSchema),
    defaultValues: {
      id,
      adress,
      type,
      price,
      category,
    },
  })

  console.log(errors)

  async function handleEditProperty(data: NewPropertyFormInputs) {
    console.log('função chamada')

    const { adress, type, price, category } = data
    const { id } = propertyToEdit

    await editProperties({
      id,
      adress,
      type,
      price,
      category,
    })

    onClose()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Editar Imóvel</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleEditProperty)}>
          <label htmlFor="adress">Endereço</label>
          <input
            id="adress"
            type="text"
            placeholder="Rua ABC, 123"
            {...register('adress')}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <PropertyCategory
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <PropertyCategoryButton value="Casa">
                    Casa
                  </PropertyCategoryButton>
                  <PropertyCategoryButton value="Apartamento">
                    Apartamento
                  </PropertyCategoryButton>
                  <PropertyCategoryButton value="Terreno">
                    Terreno
                  </PropertyCategoryButton>
                </PropertyCategory>
              )
            }}
          />

          <label htmlFor="price">Preço</label>
          <input
            id="price"
            type="number"
            {...register('price', { valueAsNumber: true })}
          />

          <Controller
            control={control}
            name="category"
            render={({ field }) => {
              return (
                <PropertyCategory
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <PropertyCategoryButton value="Disponível">
                    Disponível
                  </PropertyCategoryButton>
                  <PropertyCategoryButton value="Alugado">
                    Alugado
                  </PropertyCategoryButton>
                  <PropertyCategoryButton value="Vendido">
                    Vendido
                  </PropertyCategoryButton>
                </PropertyCategory>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Confirmar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
