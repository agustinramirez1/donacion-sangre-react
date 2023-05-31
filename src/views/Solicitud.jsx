import { useEffect, useState } from 'react'
import Titulo from '../components/Titulo'
import Contenido from '../components/Contenido'
import axios from 'axios'

const Solicitud = () => {
    const [solicitudes, setSolicitudes] = useState([])
    useEffect(() => {
        axios.get("http://192.168.16.90:8000/api/solicitudes").then((response) => {
            setSolicitudes(response.data.data)
        });
    }, [])


    return (
        <div className="py-4 px-2">
            <div className="container text-center shadow bg-sky-blue rounded-4" >
                <Titulo icon={true} href={'/new-solicitud'} />
                <Contenido solicitudes={solicitudes} />
            </div>
        </div>
    )
}

export default Solicitud