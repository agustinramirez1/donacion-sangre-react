import './App.css'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {

  const navigate = useNavigate();
  const location = useLocation().pathname;
  const tokenRedux = useSelector(state => state.token)

  useEffect(() => {
    if (tokenRedux) {
      if(location == '/login' || location == '/registro'){
        navigate('/solicitudes')
      }
    } else {
      navigate('/login')
    }

  }, [tokenRedux])

  return (
    <>
      <Navbar />

      <Outlet />

    </>
  )
}

export default App
