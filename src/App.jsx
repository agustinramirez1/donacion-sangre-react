import './App.css'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import {Outlet, useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    // navigate('/solicitudes')

  }, [])

  return (
    <>
        <Navbar />

        <Outlet />

    </>
  )
}

export default App
