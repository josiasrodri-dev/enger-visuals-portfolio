import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App.tsx'
import "./app/styles/globals.css"
import "./app/styles/reset.css"
import "./app/styles/tokens.css"
import "./app/styles/typography.css"
import "./lang/i18n.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
