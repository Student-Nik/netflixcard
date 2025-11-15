import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Interview } from './Practices'
import App from './App'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <Interview /> */}
  </StrictMode>
)
