
const TarjetaCertificado = ({elemento}) => {
  return (
    <div className="col">
      <div className="card shadow bg-white rounded-4 mb-2">
        <div className="p-3">
          <p className="d-flex justify-content-between">
            <span>Establecimiento: </span>
            <span>{elemento.local_donacion}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span>Apellido: </span>
            <span>{elemento.user.surname}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span>Nombre: </span>
            <span>{elemento.user.name}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span>Sexo: </span>
            <span>{elemento.user.sexo}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span>Número de Cédula: </span>
            <span>{elemento.user.nro_cedula}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span>Fecha de Donación: </span>
            <span>{elemento.fecha_donacion}</span>
          </p>
      
          <div className="fs-4 ">
            <p>{elemento.solicitud}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TarjetaCertificado