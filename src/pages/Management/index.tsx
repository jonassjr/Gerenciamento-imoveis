import { useContext } from 'react'
import { Summary } from '../../components/Summary'
import { SearchForm } from './SearchForm'
import { Header, ManagementTable, PageContainer, Status } from './styles'
import { PropertiesContext } from '../../contexts/PropertiesContext'

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function Management() {
  const { properties } = useContext(PropertiesContext)

  return (
    <PageContainer>
      <Header>
        <h1>Gerenciamento de Imóveis</h1>
        <button>Registrar</button>
      </Header>

      <Summary />
      <SearchForm />

      <ManagementTable>
        <tbody>
          {properties.map((propertie) => (
            <tr key={propertie.id}>
              <td width="50%">{propertie.adress}</td>
              <td>{propertie.type}</td>
              <td>{priceFormatter.format(propertie.price)}</td>
              <td>
                <Status statusColor={propertie.category}>
                  {propertie.category}
                </Status>
              </td>
            </tr>
          ))}
          {/* <tr>
            <td width="50%">Rua, XYZ</td>
            <td>Casa</td>
            <td>R$ 08.000,00</td>
            <td>
              <Status statusColor="green">Disponível</Status>
            </td>
          </tr>
          <tr>
            <td>Rua, 123</td>
            <td>Apartamento</td>
            <td>R$ 04.000,00</td>
            <td>
              <Status statusColor="orange">Alugado</Status>
            </td>
          </tr>
          <tr>
            <td>Rua, ABC</td>
            <td>Apartamento</td>
            <td>R$ 07.000,00</td>
            <td>
              <Status statusColor="blue">Vendido</Status>
            </td>
          </tr>
          <tr>
            <td>Rua, ABC</td>
            <td>Apartamento</td>
            <td>R$ 07.000,00</td>
            <td>
              <Status statusColor="blue">Vendido</Status>
            </td>
          </tr> */}
        </tbody>
      </ManagementTable>
    </PageContainer>
  )
}
