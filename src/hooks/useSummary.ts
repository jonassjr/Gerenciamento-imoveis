import { useContext, useMemo } from 'react'
import { PropertiesContext } from '../contexts/PropertiesContext'

export function useSummary() {
  const { properties } = useContext(PropertiesContext)

  const summary = useMemo(() => {
    return properties.reduce(
      (acc, propertie) => {
        if (propertie.category === 'Alugado') {
          acc.alugado += propertie.price
          acc.total += propertie.price
        } else if (propertie.category === 'Vendido') {
          acc.vendido += propertie.price
          acc.total += propertie.price
        }

        return acc
      },
      {
        alugado: 0,
        vendido: 0,
        total: 0,
      },
    )
  }, [properties])

  return summary
}
