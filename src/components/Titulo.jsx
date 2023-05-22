import React from 'react'
import FiltroSolicitud from './FiltroSolicitud'

const Titulo = () => {
    return (
        
    
      <>
        <div className="row border-bottom">
          <div className="col-11 text-white fs-4">
            <span>Solicitudes</span>
          </div>
          <div id="boton-plus"
            className="rounded-top-4 rounded-start-0 col-1 d-flex justify-content-center text-white fs-3 icon">
            +
          </div>
        </div>
        
        <FiltroSolicitud/>
      </>

    )
}

export default Titulo