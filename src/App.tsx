import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/globals'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PropertiesProvider } from './contexts/PropertiesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PropertiesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PropertiesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
