import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './compoment/Navbar/Navbar'
import MainRoutes from './MainRoutes'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
