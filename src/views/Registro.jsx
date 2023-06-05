import { useState } from 'react'
import Card from '../components/Login/Card'
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registro = () => {

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [cedula, setCedula] = useState('')
    const [sexo, setSexo] = useState('')
    const [fecNac, setFecNac] = useState('')
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('')
    const [confirmar, setConfirmar] = useState('')

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const [isValid, setIsValid] = useState(true);

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        setIsValid(validateEmail(value));
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        if (id == 'nombres') {
            setNombres(value);
        }

        if (id == 'apellidos') {
            setApellidos(value);
        }

        if (id == 'ci') {
            setCedula(value);
        }

        if (id == 'sexo') {
            setSexo(value);
        }

        if (id == 'fecNac') {
            setFecNac(value);
        }

        if (id == 'email') {
            setEmail(value);
        }

        if (id == 'contraseña') {
            setContraseña(value);
        }

        if (id == 'confirmar') {
            setConfirmar(value);
        }
    }

    const isEmpty = (value) => {
        return value.trim() == ''
    }

    const emptyFields = () => {

        let noError = true;

        if (isEmpty(nombres)) {
            Swal.fire({icon: 'error', text: 'Debe cargar un nombre válido'});
            noError = false;
        }else if (isEmpty(apellidos)) {
            Swal.fire({icon: 'error', text: 'Debe cargar un apellido válido'});
            noError = false
        } else if (isEmpty(cedula)) {
            Swal.fire({icon: 'error', text: 'Debe cargar su C.I'});
            noError = false
        } else if (isEmpty(sexo)) {
            Swal.fire({icon: 'error', text: 'Debe seleccionar un Sexo'});
            noError = false
        } else if (isEmpty(fecNac)) {
            Swal.fire({icon: 'error', text: 'Debe ingresar una fecha de nacimiento'});
            noError = false
        } else if (isEmpty(email)) {
            Swal.fire({icon: 'error', text: 'Debe ingresar un correo'});
            noError = false
        } else if (isEmpty(contraseña)) {
            Swal.fire({icon: 'error', text: 'Debe ingresar una contraseña'});
            noError = false
        } else if (isEmpty(confirmar)) {
            Swal.fire({icon: 'error', text: 'Debe confirmar la contraseña'});
            noError = false
        } else if (confirmar !== contraseña) {
            Swal.fire({icon: 'error', text: 'Las contraseñas no coinciden'});
            noError = false
        }
        return noError
    }

    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (emptyFields()) {

            const data = {
                name: nombres,
                surname: apellidos,
                password: contraseña,
                email,
                fecha_nacimiento: fecNac,
                sexo,
                nro_cedula: cedula
            }

            axios.post("http://192.168.16.90:8000/api/registro", data)
                .then((response) => {
                    console.log(response.data)
                    navigate("/solicitudes")
                    localStorage.setItem("token",response.data.token)
                    Swal.fire({ icon: 'success', text: "Usuario Registrado Correctamente" })
                }).catch((err) => {
                    console.log(err)
                    let message = err.response?.data?.errors;

                    if (message) {
                        Swal.fire({ icon: 'error', text: "Algo no salió bien" })
                    }
                })
          }
    }

    const [show, setShow] = useState(false)
    const showPassword = () => {
        setShow(!show)
    }

    const [show2, setShow2] = useState(false)
    const showPassword2 = () => {
        setShow2(!show2)
    }

    return (
        <Card titulo={'Registro'} onSubmitHandler={onSubmitHandler}>
            <div className="p-5 col-md-8 mx-auto row row-cols-2">
                <div className='mb-3'>
                    <label htmlFor="nombres" className="form-label fs-4 fw-bold text-start">Nombres</label>
                    <input type="text" className="form-control" id="nombres" onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="apellidos" className="form-label fs-4 fw-bold text-start">Apellidos</label>
                    <input type="text" className="form-control" id="apellidos" onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="ci" className="form-label fs-4 fw-bold text-start">Cédula de Identidad</label>
                    <input type="text" className="form-control" id="ci" onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className="form-label fs-4 fw-bold text-start">Sexo</label>
                    <select className="form-select" onChange={handleChange} id='sexo' defaultValue={''}>
                        <option value={''}>Seleccionar</option>
                        <option value="F">Femenino</option>
                        <option value="M">Masculino</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="fecNac" className="form-label fs-4 fw-bold text-start">Fecha de Nacimiento</label>
                    <input type="date" className="form-control" id="fecNac" onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className="form-label fs-4 fw-bold text-start">Email</label>
                    <input type="text" className="form-control" id="email" value={email} onChange={handleEmailChange} />
                    {(!isValid && isValid != null) && <p className='text-danger fs-6 fw-bold'>Ingrese un correo electrónico válido.</p>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="contraseña" className="form-label fs-4 fw-bold text-start">Contraseña</label>
                    <div className="input-group p-0">
                        <input type={show ? "text" : "password"} id="contraseña" className="form-control border-end-0" onChange={handleChange}/>
                        <span className="input-group-text bg-white"><i className="bi bi-eye" onClick={showPassword}></i></span>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="confirmar" className="form-label fs-4 fw-bold text-start">Confirmar Contraseña</label>
                    <div className="input-group p-0">
                        <input type={show2 ? "text" : "password"} id="confirmar" className="form-control border-end-0" onChange={handleChange}/>
                        <span className="input-group-text bg-white"><i className="bi bi-eye" onClick={showPassword2}></i></span>
                    </div>
                </div>
            </div>
            <div className="pb-3 text-center">
                <button type='submit' className="px-5 bg-sky-blue border-0" id="inicio-sesion">Registrarse</button>
            </div>
            <div className="pb-5 text-center fs-5">
            Ya tienes una cuenta? <NavLink to={'/login'} className={'text-skyblue'}>Iniciar Sesión</NavLink>
          </div>
        </Card>
    )
}

export default Registro