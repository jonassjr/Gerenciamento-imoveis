import styled from 'styled-components'

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    width: 24%;
  }
`

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  span:before {
    content: '';
    width: 20px;
    height: 1px;
    background-color: ${(props) => props.theme['gray-100']};
  }
`
