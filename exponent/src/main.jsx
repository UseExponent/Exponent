import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './components/Globalstyle'
import Router from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <Router />
  </StrictMode>,
)
