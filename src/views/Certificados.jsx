import { useEffect, useState } from 'react';
import Card from '../components/Login/Card'
import axios from 'axios';
import Contenido from '../components/Solicitud/Contenido';
import { useSelector } from 'react-redux';



const Certificados = () => {

  const tokenRedux = useSelector(state => state.token)
  const [certificados, setCertificados] = useState(null)

  useEffect(() => {
    axios.get("http://192.168.16.90:8000/api/certificados?desc=1", {
      headers: {
        'Authorization': `Bearer ${tokenRedux}`
      }
    }).then((response) => {
      setCertificados(response.data.data)
    });
  }, [])

  return (
    <Card titulo={'Certificados'} icon={true} href={'/generar-certificado'} bgColor={'bg-sky-blue'} iconEnd={true}>
      <div className='text-center'>
        <h1 className="py-4 fs-1 text-white">Certificados de Donación</h1>
      </div>
      <Contenido certificados={certificados} />
    </Card>
  )
}

export default Certificados