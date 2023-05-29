import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Solicitud from './vistas/Solicitud.jsx'
import PuntoDonacion from './vistas/PuntoDonacion.jsx/'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path={'/solicitudes'} element={<Solicitud />} />
      <Route path={'/puntodonacion'} element={<PuntoDonacion />} />
      <Route path="*" element={<p className='text-center fs-1 my-auto'>404 Path not resolved</p>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
