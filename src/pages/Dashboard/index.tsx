import { useContext } from 'react'
import { BarChart } from './BarChart'
import { DonutChart } from './DonutChart'
import {
  Article,
  DashboardContainer,
  Header,
  MenuButton,
  PageContainer,
} from './styles'
import { SideBarContext } from '../../contexts/SidebarContext'
import { List } from 'phosphor-react'

export function Dashboard() {
  const { HandleSetToggle } = useContext(SideBarContext)

  return (
    <PageContainer>
      <Header>
        <h1>Dashboard</h1>
        <MenuButton onClick={HandleSetToggle}>
          <List size={24} />
        </MenuButton>
      </Header>

      <DashboardContainer>
        <Article size={3}>
          <BarChart />
        </Article>
        <Article size={2}>
          <DonutChart />
        </Article>
      </DashboardContainer>
    </PageContainer>
  )
}
