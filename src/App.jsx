import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Solicitud from './vistas/Solicitud'
import PuntoDonacion from './vistas/PuntoDonacion'
import Home from './vistas/Home'

function App() {


  return (
    <>
      < BrowserRouter >
        <Navbar />
        
          <Routes>
            {/* Using protected route */}
            <Route path={'/'} element={<Home />} />
            <Route path={'/solicitudes'} element={<Solicitud />} />
             <Route path={'/puntodonacion'} element={<PuntoDonacion />} />
            <Route path="*" element={<p className='text-center fs-1 my-auto'>404 Path not resolved</p>} />
          </Routes>

      </ BrowserRouter>
    </>
  )
}

export default App
