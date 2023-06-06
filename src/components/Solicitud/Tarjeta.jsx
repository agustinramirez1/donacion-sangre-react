// import React from 'react'
import ShareButton from './ShareButton'
import DeleteButton from './DeleteButton'
import { useSelector } from 'react-redux';

const Tarjeta = ({ elemento, solicitudes, setSolicitudes}) => {

  const userRedux = useSelector(state => state.user)
  let tipo_sangre = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
  let source = "./src/img/" + tipo_sangre[elemento.tipo_sangre - 1] + ".png";

  return (
    <div className="col">
      <div className="card shadow bg-white rounded-4 mb-2">
        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom p-3">
          <p><strong>{elemento.nombre_apellido_donatario}</strong></p>
          <p className="fs-5">
            {userRedux?.id == elemento.creado_por && <DeleteButton id={elemento.id} solicitudes={solicitudes} setSolicitudes={setSolicitudes}/>}
            <ShareButton elemento={elemento}/>
          </p>
        </div>

        <div className="p-3">
          <p className="d-flex justify-content-between">
            <span>Telefono: </span>
            <span>{elemento.telefono_contacto}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span>C.I: </span>
            <span>{elemento.cedula_donatario}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span>Lugar de Donación: </span>
            <span>{elemento.establecimiento}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span>RH: </span>
            <img src={source} className="icono-sangre"></img>
          </p>

          <p className="d-flex justify-content-between">
            <span>Volumenes: </span>
            <span>{elemento.volumenes_necesarios}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span>Fecha Limite: </span>
            <span>{elemento.fecha_limite}</span>
          </p>

          <div className="fs-4 ">
            <p>{elemento.solicitud && elemento.solicitud.trim()!='' ? elemento.solicitud : '-'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tarjeta