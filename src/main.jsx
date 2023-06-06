import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Solicitud from './views/Solicitud.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './views/Login.jsx'
import Registro from './views/Registro.jsx'
import PuntoDonacion from './views/PuntoDonacion.jsx'
import Certificados from './views/Certificados.jsx'
import NewCertificado from './views/NewCertificado.jsx'
import Perfil from './views/Perfil.jsx'
import NewSolicitud from './views/NewSolicitud.jsx'
import ResetPassword from './views/ResetPassword.jsx'
import EditPerfil from './views/EditPerfil.jsx'
import ChangePass from './views/ChangePass.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/index.js'

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
      <Route path={'/change-pass'} element={<ChangePass/>} />
      <Route path="*" element={<p className='text-center fs-1 my-auto'>404 Path not resolved</p>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
