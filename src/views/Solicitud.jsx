import { useState } from 'react'
import Titulo from '../components/Titulo'
import Contenido from '../components/Contenido'

const Solicitud = () => {
    const [solicitudes, setSolicitudes]= useState([])
    
    return (
        <div className="py-4 px-2">
            <div className="container text-center shadow bg-sky-blue rounded-4" >
                <Titulo setSolicitudes={setSolicitudes} />
                <Contenido solicitudes={solicitudes} />
            </div>
        </div>
    )
}

export default Solicitud