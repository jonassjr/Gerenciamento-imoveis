import styled from 'styled-components'

export const PageContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const Header = styled.header`
  height: 6.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 0;
  border-bottom: 1px solid ${(props) => props.theme['light-gray']};

  h1 {
    font-size: 32px;
    font-weight: 300;
  }
`
export const DashboardContainer = styled.section`
  display: flex;
  margin-top: 2rem;
  gap: 1.5rem;
`

interface ArticleProps {
  size: number
}

export const Article = styled.article<ArticleProps>`
  width: 100%;
  height: auto;
  flex: ${(props) => props.size};
  padding: 2rem;
  background-color: ${(props) => props.theme['gray-500']};
  border-radius: 3px;
`
