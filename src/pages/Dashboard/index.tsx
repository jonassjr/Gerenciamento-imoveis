import { BarChart } from './BarChart'
import { DonutChart } from './DonutChart'
import { Article, DashboardContainer, Header, PageContainer } from './styles'

export function Dashboard() {
  return (
    <PageContainer>
      <Header>
        <h1>Dashboard</h1>
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
