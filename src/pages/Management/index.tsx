import { useContext } from 'react'
import { Summary } from '../../components/Summary'
import { SearchForm } from './SearchForm'
import { Header, ManagementTable, PageContainer, Status } from './styles'
import { PropertiesContext } from '../../contexts/PropertiesContext'
import { priceFormatter } from '../../utils/formatter'
import * as Dialog from '@radix-ui/react-dialog'
import { NewPropertieModal } from '../../components/NewPropertyModal/idex'
import { MenuOptions } from './MenuOprions'

export function Management() {
  const { properties } = useContext(PropertiesContext)

  return (
    <PageContainer>
      <Header>
        <h1>Gerenciamento de Imóveis</h1>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>Registrar</button>
          </Dialog.Trigger>

          <NewPropertieModal />
        </Dialog.Root>
      </Header>

      <Summary />
      <SearchForm />

      <ManagementTable>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td width="40%">{property.adress}</td>
              <td>{property.type}</td>
              <td>{priceFormatter.format(property.price)}</td>
              <td>
                <Status $status={property.category}>{property.category}</Status>
              </td>
              <td>
                <MenuOptions propertyId={property.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </ManagementTable>
    </PageContainer>
  )
}
