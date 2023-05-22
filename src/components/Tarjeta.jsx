import React from 'react'

const Tarjeta = () => {
    const elemento = {
        "id": 3,
        "created_at": "2022-11-28T18:59:02.000000Z",
        "updated_at": "2022-11-28T18:59:02.000000Z",
        "solicitud": "Urgente",
        "creado_por": 15,
        "fecha_limite": "2020-08-26",
        "id_estado": 1,
        "volumenes_necesarios": 2,
        "nombre_apellido_donatario": "Norman Osborn ",
        "cedula_donatario": "28738",
        "telefono_contacto": "09290384",
        "tipo_sangre": 4,
        "establecimiento": "FCA - CAMPUS UNP"
    }
  return (
    <div className="col">
      <div className="card shadow bg-white rounded-4 mb-2">
        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom p-3">
          <p><strong>{elemento.nombre_apellido_donatario}</strong></p>
          <p className="fs-5">
            <i className="bi bi-trash mx-2 text-danger"></i>
            <i className="bi bi-box-arrow-up"></i>
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
            <img src="A+.png" className="icono-sangre"></img>
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
            <p>{elemento.solicitud}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tarjeta