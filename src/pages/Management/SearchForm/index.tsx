import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useContext } from 'react'
import { PropertiesContext } from '../../../contexts/PropertiesContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchProperties } = useContext(PropertiesContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchProperties(data: SearchFormInputs) {
    await fetchProperties(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchProperties)}>
      <input type="text" placeholder="Compo de busca" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={24} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
