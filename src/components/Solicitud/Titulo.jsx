// import React from 'react'
import { Link } from 'react-router-dom';
import FiltroSolicitud from './FiltroSolicitud'

const Titulo = ({  icon, href, setSolicitudes}) => {

    return (
      <>
        <div className="row border-bottom">
          <div className="col-11 text-white fs-4 ps-5" >
            <span>Solicitudes</span>
          </div>
          {icon && <Link to={href} id="boton-plus"
            className="rounded-top-4 rounded-start-0 col-1 d-flex justify-content-center text-white fs-3 icon" >
            +
          </Link>}
        </div>
        <FiltroSolicitud setSolicitudes= {setSolicitudes}/>
      </>

    )
}

export default Titulo