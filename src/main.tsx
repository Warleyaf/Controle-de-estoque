import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home/Home.jsx';
import { Menu } from './pages/menu/Menu.jsx';
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
)
