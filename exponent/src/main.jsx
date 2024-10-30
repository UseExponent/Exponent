import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './components/Globalstyle'
import Router from './routes'
import { ThemeProvider } from 'styled-components'
import theme from './components/style'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router />
    </ThemeProvider>
  </StrictMode>,
)
