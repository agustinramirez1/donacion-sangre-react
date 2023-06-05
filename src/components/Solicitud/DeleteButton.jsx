// import React from 'react'

import axios from "axios"
import Swal from "sweetalert2"

const DeleteButton = ({id, solicitudes, setSolicitudes}) => {

  const access_token = localStorage.getItem('token')

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
        'Authorization': `Bearer ${access_token}`
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
    <i className="bi bi-trash mx-2 text-danger" onClick={handleClick}></i>
  )
}

export default DeleteButton