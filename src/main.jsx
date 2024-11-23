import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './routing/root.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
