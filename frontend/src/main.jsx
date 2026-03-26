import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
  <HashRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </HashRouter>
 </React.StrictMode>
)
