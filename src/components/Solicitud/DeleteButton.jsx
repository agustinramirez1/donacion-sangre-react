// import React from 'react'

import axios from "axios"
import { useSelector } from "react-redux"
import Swal from "sweetalert2"

const DeleteButton = ({id, solicitudes, setSolicitudes}) => {

  const tokenRedux = useSelector(state => state.token)

  const handleClick = () => {
    Swal.fire({
      title: 'Advertencia',
      text: 'Estas seguro que quieres eliminar la solicitud?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
  }).then((result) => {
      if (result.isConfirmed) {
        borrarSolicitud()
      }
  })
  }

  const borrarSolicitud = () => {

    const config = {
      headers: {
        'Authorization': `Bearer ${tokenRedux}`
      }
    }
  
    axios.delete("http://192.168.16.90:8000/api/solicitudes/" + id,  config)
      .then((response) => {
        // console.log(response.data)
        Swal.fire({ icon: 'success', text: "Solicitud eliminada!" })
        actualizarSolicitud()
      }).catch((err) => {
         console.log(err)
        let message = err.response?.data;
        if (message) {
          Swal.fire({ icon: 'error', text: message })
        }
      })

  }

  const actualizarSolicitud = () => {
    const newSolicitudes = solicitudes.filter(elemento => elemento.id != id)
    setSolicitudes(newSolicitudes)
  }

  return (
    <i className="icon-solicitud bi bi-trash mx-2 text-danger" onClick={handleClick}></i>
  )
}

export default DeleteButton