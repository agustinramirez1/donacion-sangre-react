import './App.css'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      if(location == '/login' || location == '/registro'){
        navigate('/solicitudes')
      }
      console.log('token')
    } else {
      navigate('/login')
    }

  }, [])

  return (
    <>
      <Navbar />

      <Outlet />

    </>
  )
}

export default App
