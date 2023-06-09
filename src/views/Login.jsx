// import React from "react";
import Imagen from "../components/Login/Imagen";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Card from "../components/Login/Card";
import { useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'
import { useDispatch } from "react-redux";

const Login = () => {

  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { value } = event.target;
    setContraseña(value);
  }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const [isValid, setIsValid] = useState(null);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const [show, setShow] = useState(false)
  const showPass = () => {
    setShow(!show)
  }

   const navigate = useNavigate()

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (validateFields()) {
      axios.post("http://192.168.16.90:8000/api/login", {email, password:contraseña})
        .then((response) => {
          // console.log(response.data)
          dispatch({type: 'setToken', payload: response.data.token})
          dispatch({type: 'setUser', payload: response.data.user})
          navigate("/solicitudes")
        })
        .catch((err) => {
					// console.log(err)
					let message = err.response?.data?.message;
					if (message) {
						Swal.fire({ icon: 'error', text: message })
					}
				});
    }


  }
  const validateFields = () => {
    let noError = true;

    if (email.trim() == '' || !isValid) {
      Swal.fire({ icon: 'error', text: "Ingrese un Email válido" });
      noError = false;
    }
    else if (contraseña.trim() == '') {
      Swal.fire({ icon: 'error', text: "Ingrese una contraseña válida" });
      noError = false;
    }

    return noError
  }


  return (
    <Card titulo={'Login'} onSubmitHandler={onSubmitHandler}>
      <Imagen />
      <div className="p-4 col-md-8 mx-auto">
        <div className='mb-3'>
          <label htmlFor="email" className="form-label fs-4 fw-bold text-start">Email</label>
          <input type="text" className="form-control" id="email" value={email} onChange={handleEmailChange} />
          {(!isValid && isValid != null) && <p className='text-danger fs-6 fw-bold'>Ingrese un correo electrónico válido.</p>}
        </div>
        <div className='mb-5'>
          <label htmlFor="contraseña" className="form-label fs-4 fw-bold text-start">Contraseña</label>
          <div className="input-group p-0">
            <input type={show ? "text" : "password"} id="contraseña" className="form-control border-end-0" onChange={handleChange} />
            <span className="input-group-text bg-white"><i className="bi bi-eye" onClick={showPass}></i></span>
          </div>
        </div>
        <div className="text-center">
          <div className="mb-3">
            <button type='submit' className="px-5 bg-sky-blue border-0" id="inicio-sesion">Iniciar Sesión</button>
          </div>
          <div className="mb-2 fs-5">
            No tienes una cuenta? <NavLink to={'/registro'} className={'text-skyblue'}>Registrarse</NavLink>
          </div>
          <div className="pb-3 fs-5">
            <Link to={'/reset-password'} className={'text-skyblue'}>Olvidaste tu Contraseña?</Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Login;
