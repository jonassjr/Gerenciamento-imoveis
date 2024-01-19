import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/globals'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PropertiesProvider } from './contexts/PropertiesContext'
import { SideBarProvider } from './contexts/SidebarContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PropertiesProvider>
        <SideBarProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </SideBarProvider>
      </PropertiesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
