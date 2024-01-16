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
    display: none;
    font-size: 32px;
    font-weight: 300;
  }

  @media screen and (min-width: 1120px) {
    h1 {
      display: block;
      font-size: 32px;
    }
  }
`

export const MenuButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme['gray-100']};
  line-height: 0;

  @media screen and (min-width: 1120px) {
    display: none;
  }
`
export const DashboardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 1.5rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: initial;
  }
`

interface ArticleProps {
  size: number
}

export const Article = styled.article<ArticleProps>`
  width: 100%;
  max-width: 450px;
  height: auto;
  flex: ${(props) => props.size};
  padding: 2rem;
  background-color: ${(props) => props.theme['gray-500']};
  border-radius: 3px;

  @media screen and (min-width: 1024px) {
    max-width: initial;
  }
`
