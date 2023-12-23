import { SummaryCard, SummaryContainer } from './styles'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard variant="white">
        <header>Faturamento</header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
      <SummaryCard variant="orange">
        <header>Alugados</header>
        <strong>{priceFormatter.format(summary.alugado)}</strong>
      </SummaryCard>
      <SummaryCard variant="blue">
        <header>Vendidos</header>
        <strong>{priceFormatter.format(summary.vendido)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
