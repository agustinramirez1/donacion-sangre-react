import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Solicitud from './views/Solicitud.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './views/Login.jsx'
import Registro from './components/Login/Registro.jsx'
import PuntoDonacion from './views/PuntoDonacion.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path={'/solicitudes'} element={<Solicitud />} />
      <Route path={'/puntosdonacion'} element={<PuntoDonacion />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/registro'} element={<Registro />} />
      <Route path="*" element={<p className='text-center fs-1 my-auto'>404 Path not resolved</p>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
