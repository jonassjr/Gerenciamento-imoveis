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
  type: string
  price: number
  category: 'Disponível' | 'Alugado' | 'Vendido'
}

interface PropertiesContextType {
  properties: Propertie[]
  fetchProperties: (query?: string) => Promise<void>
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

  useEffect(() => {
    fetchProperties()
  }, [fetchProperties])

  return (
    <PropertiesContext.Provider value={{ properties, fetchProperties }}>
      {children}
    </PropertiesContext.Provider>
  )
}
