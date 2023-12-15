import styled from 'styled-components'

export const SummaryContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.25rem;
`

const variantColors = {
  blue: 'blue-500',
  orange: 'orange-500',
  white: 'white',
} as const

interface VariantProps {
  variant: keyof typeof variantColors
}

export const SummaryCard = styled.article<VariantProps>`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  padding: 2rem;
  border-radius: 3px;

  background-color: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme.white};

  header {
    font-size: 1.25rem;
    font-weight: 300;
  }

  strong {
    font-size: 1.75rem;
    font-weight: 500;
  }

  border-left: 3px solid ${(props) => props.theme[variantColors[props.variant]]};
`
