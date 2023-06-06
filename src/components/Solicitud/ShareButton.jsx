// import React from 'react'

const ShareButton = ({elemento}) => {
  const type = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"]

    let link_whatsapp = 'whatsapp://send?text= SOLICITUD DONACIÓN DE SANGRE\n' +
        `Nombre Donatario: ${elemento.nombre_apellido_donatario}\n` +
        `Teléfono: ${elemento.telefono_contacto}\n` +
        `C.I: ${elemento.cedula_donatario}\n` +
        `Lugar donación: ${elemento.establecimiento}\n` +
        `RH: ${type[elemento.tipo_sangre - 1]} \n` +
        `Volumenes Necesarios: ${elemento.volumenes_necesarios}\n` +
        `Fecha Limite: ${elemento.fecha_limite}\n` +
        `elemento: ${elemento.elemento}\n` +
        `Link: http://localhost:5500/index.html\n`

    link_whatsapp = link_whatsapp.replaceAll(' ', '%20')
    link_whatsapp = link_whatsapp.replaceAll('\n', '%0a')
    // Symbols for blood types
    link_whatsapp = link_whatsapp.replace('+', '%2B')
    link_whatsapp = link_whatsapp.replace('-', '%2D')
  return (
    <a href={link_whatsapp}>
      <i className="icon-elemento bi bi-box-arrow-up"></i>
    </a >
  )
}

export default ShareButton