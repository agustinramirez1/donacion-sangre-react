// import React from 'react'

import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const DeleteButton = () => {

const navigate = useNavigate()

  const access_token = localStorage.getItem('token')

  const borrarSolicitud = () => {

    const config = {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    }
  
    axios.delete("http://192.168.16.90:8000/api/solicitudes/1", config)
      .then((response) => {
        console.log(response.data)
        navigate("/certificados")
        Swal.fire({ icon: 'success', text: "Registro Cargado con Éxito" })
      }).catch((err) => {
        // console.log(err)
        let message = err.response?.data?.message;
        if (message) {
          Swal.fire({ icon: 'error', text: 'tu kp' })
        }
      })

  }

  return (
    <i className="bi bi-trash mx-2 text-danger" onClick={borrarSolicitud}></i>
  )
}

export default DeleteButton