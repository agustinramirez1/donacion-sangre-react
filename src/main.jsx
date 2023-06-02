import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Solicitud from './views/Solicitud.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './views/Login.jsx'
import Registro from './components/Login/Registro.jsx'
import PuntoDonacion from './views/PuntoDonacion.jsx'
import Certificados from './views/Certificados.jsx'
import NewCertificado from './components/Certificado/NewCertificado.jsx'
import Perfil from './views/Perfil.jsx'
import NewSolicitud from './components/Solicitud/NewSolicitud.jsx'
import ResetPassword from './components/Login/ResetPassword.jsx'
import EditPerfil from './views/EditPerfil.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path={'/solicitudes'} element={<Solicitud />} />
      <Route path={'/puntosdonacion'} element={<PuntoDonacion />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/registro'} element={<Registro />} />
      <Route path={'/certificados'} element={<Certificados />} />
      <Route path={'/generar-certificado'} element={<NewCertificado />} />
      <Route path={'/perfil'} element={<Perfil />} />
      <Route path={'/nueva-solicitud'} element={<NewSolicitud />} />
      <Route path={'/reset-password'} element={<ResetPassword />} />
      <Route path={'/edit-perfil'} element={<EditPerfil/>} />
      <Route path="*" element={<p className='text-center fs-1 my-auto'>404 Path not resolved</p>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
