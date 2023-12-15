import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard variant="white">
        <header>Faturamento</header>
        <strong>R$ 1.490,00</strong>
      </SummaryCard>
      <SummaryCard variant="orange">
        <header>Alugados</header>
        <strong>R$ 1.490,00</strong>
      </SummaryCard>
      <SummaryCard variant="blue">
        <header>Vendidos</header>
        <strong>R$ 1.490,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
