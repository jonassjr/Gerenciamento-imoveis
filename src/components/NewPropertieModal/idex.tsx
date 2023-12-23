import * as Dialog from '@radix-ui/react-dialog'

import {
  Overlay,
  Content,
  CloseButton,
  PropertieCategory,
  PropertieCategoryButton,
} from './styles'

import { X } from 'phosphor-react'

import { Controller, useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PropertiesContext } from '../../contexts/PropertiesContext'

const NewPropertiesFormSchema = z.object({
  adress: z.string(),
  type: z.enum(['Casa', 'Apartamento', 'Terreno']),
  price: z.number(),
  category: z.enum(['Disponível', 'Alugado', 'Vendido']),
})

type NewPropertiesFormInputs = z.infer<typeof NewPropertiesFormSchema>

export function NewPropertieModal() {
  const { createProperties } = useContext(PropertiesContext)

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<NewPropertiesFormInputs>({
    resolver: zodResolver(NewPropertiesFormSchema),
    defaultValues: {
      category: 'Disponível',
    },
  })

  async function handleCreateNewPropertie(data: NewPropertiesFormInputs) {
    console.log('handleCreateNewPropertie called')
    console.log('Data:', data)
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

        <form onSubmit={handleSubmit(handleCreateNewPropertie)}>
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
                <PropertieCategory
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <PropertieCategoryButton value="Casa">
                    Casa
                  </PropertieCategoryButton>
                  <PropertieCategoryButton value="Apartamento">
                    Apartamento
                  </PropertieCategoryButton>
                  <PropertieCategoryButton value="Terreno">
                    Terreno
                  </PropertieCategoryButton>
                </PropertieCategory>
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
                <PropertieCategory
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <PropertieCategoryButton value="Disponível">
                    Disponível
                  </PropertieCategoryButton>
                  <PropertieCategoryButton value="Alugado">
                    Alugado
                  </PropertieCategoryButton>
                  <PropertieCategoryButton value="Vendido">
                    Vendido
                  </PropertieCategoryButton>
                </PropertieCategory>
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
