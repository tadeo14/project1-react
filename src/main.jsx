import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Navbar } from '../src/componentes/Navbar.jsx'
import { Registro } from './componentes/Registro.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
