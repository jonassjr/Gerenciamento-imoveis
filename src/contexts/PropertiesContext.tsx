import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from 'react'
import { api } from '../lib/axios'

interface Propertie {
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
  properties: Propertie[]
  fetchProperties: (query?: string) => Promise<void>
  createProperties: (data: CreatePropertieInput) => Promise<void>
}

interface PropertiesProviderProps {
  children: ReactNode
}

export const PropertiesContext = createContext({} as PropertiesContextType)

export function PropertiesProvider({ children }: PropertiesProviderProps) {
  const [properties, setProperties] = useState<Propertie[]>([])

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

  useEffect(() => {
    fetchProperties()
  }, [fetchProperties])

  return (
    <PropertiesContext.Provider
      value={{ properties, fetchProperties, createProperties }}
    >
      {children}
    </PropertiesContext.Provider>
  )
}
