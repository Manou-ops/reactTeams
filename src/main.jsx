import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Boutique from './Boutique.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Boutique />
  </StrictMode>,
)
