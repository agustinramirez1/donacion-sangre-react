import React from 'react'
import Tarjeta from './Tarjeta'

const Contenido = ({solicitudes}) => {
    
    return (
      <div className='row row-cols-1 row-cols-md-3 text-center p-3'>
        {/* Si hay datos en solicitudes ejecuta lo que esta dentro del parentesis sino no. "elemento" viene de donde se quiere llamar a los valores map es lo mismo que each */}
        {solicitudes && (solicitudes.map((item, index)=> (<Tarjeta elemento = {item}></Tarjeta>)))}
      </div>
      )
    }
export default Contenido