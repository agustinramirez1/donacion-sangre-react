import { useState } from 'react'
import Titulo from '../components/Solicitud/Titulo'
import Contenido from '../components/Solicitud/Contenido'

const Solicitud = () => {
    const [solicitudes, setSolicitudes] = useState(null)

    return (
        <div className="py-4 px-2">
            <div className="container text-center shadow bg-sky-blue rounded-4" >
                <Titulo icon={true} href={'/nueva-solicitud'} setSolicitudes = {setSolicitudes}/>
                <Contenido solicitudes={solicitudes} setSolicitudes = {setSolicitudes} />
            </div>
        </div>
    )
}

export default Solicitud