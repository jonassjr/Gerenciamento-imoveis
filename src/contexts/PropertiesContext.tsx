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

interface CreatePropertyInput {
  adress: string
  type: 'Casa' | 'Apartamento' | 'Terreno'
  price: number
  category: 'Disponível' | 'Alugado' | 'Vendido'
}

interface PropertiesContextType {
  properties: Property[]
  summaryData: Property[]
  fetchProperties: (query?: string) => Promise<void>
  createProperties: (data: CreatePropertyInput) => Promise<void>
  deleteProperties: (id: number) => Promise<void>
  editProperties: (data: Property) => Promise<void>
}

interface PropertiesProviderProps {
  children: ReactNode
}

export const PropertiesContext = createContext({} as PropertiesContextType)

export function PropertiesProvider({ children }: PropertiesProviderProps) {
  const [properties, setProperties] = useState<Property[]>([])
  const [summaryData, setSummaryData] = useState<Property[]>([])

  // Read Properties
  const fetchProperties = useCallback(async (query?: string) => {
    const response = await api.get('imoveis', {
      params: {
        q: query,
      },
    })

    setProperties(response.data)

    if (!query) {
      setSummaryData(response.data)
    }
  }, [])

  // Create Properties
  const createProperties = useCallback(async (data: CreatePropertyInput) => {
    const { adress, type, price, category } = data

    const response = await api.post('imoveis', {
      adress,
      type,
      price,
      category,
    })
    setProperties((state) => [response.data, ...state])
  }, [])

  // Delete Properties
  const deleteProperties = useCallback(
    async (id: number) => {
      await api.delete(`imoveis/${id}`)

      setProperties((state) => state.filter((property) => property.id !== id))

      fetchProperties()
    },
    [fetchProperties],
  )

  // Edit Properties
  const editProperties = useCallback(
    async (data: Property) => {
      const { id, adress, type, price, category } = data

      await api.put(`imoveis/${id}`, {
        adress,
        type,
        price,
        category,
      })

      fetchProperties()
    },
    [fetchProperties],
  )

  useEffect(() => {
    fetchProperties()
  }, [fetchProperties])

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        summaryData,
        fetchProperties,
        createProperties,
        deleteProperties,
        editProperties,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  )
}
