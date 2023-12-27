import { useContext } from 'react'
import { Summary } from '../../components/Summary'
import { SearchForm } from './SearchForm'
import { Header, ManagementTable, PageContainer, Status } from './styles'
import { PropertiesContext } from '../../contexts/PropertiesContext'
import { priceFormatter } from '../../utils/formatter'
import * as Dialog from '@radix-ui/react-dialog'
import { NewPropertieModal } from '../../components/NewPropertieModal/idex'
import { MenuOptions } from '../../components/MenuOprions'

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
          {properties.map((propertie) => (
            <tr key={propertie.id}>
              <td width="40%">{propertie.adress}</td>
              <td>{propertie.type}</td>
              <td>{priceFormatter.format(propertie.price)}</td>
              <td>
                <Status statusColor={propertie.category}>
                  {propertie.category}
                </Status>
              </td>
              <td>
                <MenuOptions />
              </td>
            </tr>
          ))}
        </tbody>
      </ManagementTable>
    </PageContainer>
  )
}
