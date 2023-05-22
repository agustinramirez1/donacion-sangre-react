import Contenido from './components/Contenido'
import Titulo from './components/Titulo'
import './App.css'
import { useState } from 'react'

function App() {

  const [solicitudes, setSolicitudes]= useState([])


  return (
    
      <div className="py-4 px-2">
        <div className="container text-center shadow bg-sky-blue rounded-4" >
          <Titulo setSolicitudes={setSolicitudes}/>
          <Contenido solicitudes={solicitudes} />
        </div>
      </div>
  )
}

export default App
