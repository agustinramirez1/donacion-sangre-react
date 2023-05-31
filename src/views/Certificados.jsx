import { useEffect, useState } from 'react';
import Card from '../components/Login/Card'
import axios from 'axios';
import Contenido from '../components/Contenido';

const access_token = '355|CQoIjLk22W2cRYMECEkXqTdImu0MTscUtGqOlgBQ'

const Certificados = () => {
    const [certificados, setCertificados] = useState([])
    useEffect(() => {
        axios.get("http://192.168.16.90:8000/api/certificados?desc=1", {
            headers: {
              'Authorization': `Bearer ${access_token}`
            }}).then((response) => {
            setCertificados(response.data.data)
        });
    }, [])
  return (
    <Card titulo={'Certificados'} icon={true} href={'/new-solicitud'} bgColor={'bg-sky-blue'}>
        <div className='text-center'>
            <h1 className="py-4 fs-1 text-white">Certificados de Donación</h1>
        </div>
        <Contenido certificados={certificados} />
    </Card>
  )
}

export default Certificados