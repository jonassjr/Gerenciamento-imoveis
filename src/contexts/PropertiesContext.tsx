import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from 'react'
import { api } from '../lib/axios'

interface Property {
  id: number
  adress: string
  type: 'Casa' | 'Apartamento' | 'Terreno'
  price: number
  category: 'Disponível' | 'Alugado' | 'Vendido'
}

interface CreatePropertieInput {
  adress: string
  type: 'Casa' | 'Apartamento' | 'Terreno'
  price: number
  category: 'Disponível' | 'Alugado' | 'Vendido'
}

interface PropertiesContextType {
  properties: Property[]
  fetchProperties: (query?: string) => Promise<void>
  createProperties: (data: CreatePropertieInput) => Promise<void>
  deleteProperties: (id: number) => Promise<void>
}

interface PropertiesProviderProps {
  children: ReactNode
}

export const PropertiesContext = createContext({} as PropertiesContextType)

export function PropertiesProvider({ children }: PropertiesProviderProps) {
  const [properties, setProperties] = useState<Property[]>([])

  const fetchProperties = useCallback(async (query?: string) => {
    const response = await api.get('imoveis', {
      params: {
        q: query,
      },
    })

    setProperties(response.data)
  }, [])

  const createProperties = useCallback(async (data: CreatePropertieInput) => {
    const { adress, type, price, category } = data

    const response = await api.post('imoveis', {
      adress,
      type,
      price,
      category,
    })
    setProperties((state) => [response.data, ...state])
  }, [])

  const deleteProperties = useCallback(async (id: number) => {
    await api.delete(`imoveis/${id}`)

    setProperties((state) => state.filter((property) => property.id !== id))
  }, [])

  useEffect(() => {
    fetchProperties()
  }, [fetchProperties])

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        fetchProperties,
        createProperties,
        deleteProperties,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  )
}
