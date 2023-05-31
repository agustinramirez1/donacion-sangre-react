import { useState } from "react";

const Formulario = () => {

  const [show, setShow] = useState(false)
  const showPass = () => {
    setShow(!show)
  }

  return (
    <div className="p-5 col-md-8 mx-auto">
      <div className='mb-3'>
        <label htmlFor="email" className="form-label fs-4 fw-bold text-start">Email</label>
        <input type="text" className="form-control" id="email" />
      </div>
      <div className='mb-3'>
        <label htmlFor="contraseña" className="form-label fs-4 fw-bold text-start">Contraseña</label>
        <div className="input-group p-0">
          <input type={show ? "text" : "password"} id="contraseña" className="form-control border-end-0" />
          <span className="input-group-text bg-white"><i className="bi bi-eye" onClick={showPass}></i></span>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
