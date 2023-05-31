import { useState } from 'react'
import Card from './Card'

const Registro = () => {

    const [nombres, setNombres] = useState('')

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const isEmpty = (value) => {
        return value.trim() == ''
    }

if (isEmpty(nombres))

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        setIsValid(validateEmail(value));
    };

    const [mostrar, setMostrar] = useState(false)
    const mostrarContraseña = () => {
        setMostrar(!mostrar)
    }

    const [mostrar2, setMostrar2] = useState(false)
    const mostrarContraseña2 = () => {
        setMostrar2(!mostrar2)
    }

    return (
        <Card titulo={'Registro'}>
            <div className="p-5 col-md-8 mx-auto row row-cols-2">
                <div className='mb-3'>
                    <label htmlFor="nombres" className="form-label fs-4 fw-bold text-start">Nombres</label>
                    <input type="text" className="form-control" id="nombres" />
                </div>
                <div className='mb-3'>
                    <label htmlFor="apellidos" className="form-label fs-4 fw-bold text-start">Apellidos</label>
                    <input type="text" className="form-control" id="apellidos" />
                </div>
                <div className='mb-3'>
                    <label htmlFor="ci" className="form-label fs-4 fw-bold text-start">Cédula de Identidad</label>
                    <input type="text" className="form-control" id="ci" />
                </div>
                <div className='mb-3'>
                    <label className="form-label fs-4 fw-bold text-start">Sexo</label>
                    <select className="form-select">
                        <option selected>Seleccionar</option>
                        <option value="F">Femenino</option>
                        <option value="M">Masculino</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="fecnac" className="form-label fs-4 fw-bold text-start">Fecha de Nacimiento</label>
                    <input type="date" className="form-control" id="fecnac" />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className="form-label fs-4 fw-bold text-start">Email</label>
                    <input type="text" className="form-control" id="email" value={email} onChange={handleEmailChange} />
                    {!isValid && <p className='text-danger fs-6 fw-bold'>Ingresa un correo electrónico válido.</p>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="contraseña" className="form-label fs-4 fw-bold text-start">Contraseña</label>
                    <div className="input-group p-0">
                        <input type={mostrar ? "text" : "password"} id="contraseña" className="form-control border-end-0" />
                        <span className="input-group-text bg-white"><i className="bi bi-eye" onClick={mostrarContraseña}></i></span>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="confirmar" className="form-label fs-4 fw-bold text-start">Confirmar Contraseña</label>
                    <div className="input-group p-0">
                        <input type={mostrar2 ? "text" : "password"} id="confirmar" className="form-control border-end-0" />
                        <span className="input-group-text bg-white"><i className="bi bi-eye" onClick={mostrarContraseña2}></i></span>
                    </div>
                </div>
            </div>
            <div className="pb-3 text-center">
                <button className="px-5 bg-sky-blue border-0" id="inicio-sesion">Registrarse</button>
            </div>
        </Card>
    )
}

export default Registro