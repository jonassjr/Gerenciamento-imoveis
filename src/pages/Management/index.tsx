import { Summary } from '../../components/Summary'
import { SearchForm } from './SearchForm'
import { Header, PageContainer } from './styles'

export function Management() {
  return (
    <PageContainer>
      <Header>
        <h1>Gerenciamento de Imóveis</h1>
        <button>Registrar</button>
      </Header>

      <Summary />
      <SearchForm />
    </PageContainer>
  )
}
