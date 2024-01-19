import * as Dialog from '@radix-ui/react-dialog'

import {
  Overlay,
  Content,
  CloseButton,
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
  adress: z.string(),
  type: z.enum(['Casa', 'Apartamento', 'Terreno']),
  price: z.number(),
  category: z.enum(['Disponível', 'Alugado', 'Vendido']),
})

type NewPropertyFormInputs = z.infer<typeof NewPropertyFormSchema>

export function NewPropertieModal() {
  const { createProperties } = useContext(PropertiesContext)

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<NewPropertyFormInputs>({
    resolver: zodResolver(NewPropertyFormSchema),
    defaultValues: {
      category: 'Disponível',
    },
  })

  async function handleCreateNewProperty(data: NewPropertyFormInputs) {
    const { adress, type, price, category } = data

    await createProperties({
      adress,
      type,
      price,
      category,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo Imóvel</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewProperty)}>
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
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
