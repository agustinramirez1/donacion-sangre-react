import React from 'react'
import FiltroSolicitud from './FiltroSolicitud'
import axios from 'axios'

const Titulo = ({setSolicitudes}) => {

  const callSolicitudes = () => {
    axios.get("http://192.168.16.90:8000/api/solicitudes").then((response) => {
      setSolicitudes(response.data.data)
    });
  }

    return (
      <>
        <div className="row border-bottom">
          <div className="col-11 text-white fs-4" >
            <span>Solicitudes</span>
          </div>
          <div id="boton-plus"
            className="rounded-top-4 rounded-start-0 col-1 d-flex justify-content-center text-white fs-3 icon" onClick={callSolicitudes}>
            +
          </div>
        </div>
        
        <FiltroSolicitud/>
      </>

    )
}

export default Titulo