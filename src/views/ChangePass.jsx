// import React from 'react'

import { useNavigate } from "react-router-dom";
import Card from "../components/Login/Card"
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ChangePass = () => {
    
    const [actual, setActual] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [confirmar, setConfirmar] = useState('')
    const tokenRedux = useSelector(state => state.token)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { id, value } = event.target;
        if (id == 'actual') {
            setActual(value);
        }

        if (id == 'nuevo') {
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

        if (isEmpty(actual)) {
            Swal.fire({ icon: 'error', text: 'Debe ingresar la contraseña actual' });
            noError = false
        } else if (isEmpty(contraseña)) {
            Swal.fire({ icon: 'error', text: 'Debe ingresar una nueva contraseña' });
            noError = false
        } else if (isEmpty(confirmar)) {
            Swal.fire({ icon: 'error', text: 'Debe confirmar la contraseña' });
            noError = false
        } else if (confirmar !== contraseña) {
            Swal.fire({ icon: 'error', text: 'Las contraseñas no coinciden' });
            noError = false
        }
        return noError
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (emptyFields()) {

            const data = {
                old_password: actual,
                password: contraseña
            }

            const config = {
                headers: {
                    'Authorization': `Bearer ${tokenRedux}`
                }
            }

            axios.post("http://192.168.16.90:8000/api/cambiar-password", data, config )
                .then((response) => {
                    console.log(response.data)
                    navigate("/perfil")
                    Swal.fire({ icon: 'success', text: "Contraseña actualizada" })
                }).catch((err) => {
                    console.log(err)
                    let message = err.response?.data?.message;
                    if (message) {
                        Swal.fire({ icon: 'error', text: message })
                    }
                })
        }
    }

    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const handleView = (id) => {
        if (id == 'show') setShow(!show)
        if (id == 'show2') setShow2(!show2)
        if (id == 'show3') setShow3(!show3)
    }
    return (
        <Card titulo={'Cambiar Contraseña'} onSubmitHandler={onSubmitHandler} iconStart={'bi bi-arrow-left'} href={'/perfil'}>
            <div className="p-5 col-md-8 mx-auto">
                <div className='mb-3'>
                    <label htmlFor="contraseña" className="form-label fs-4 fw-bold text-start">Contraseña Actual</label>
                    <div className="input-group p-0">
                        <input type={show ? "text" : "password"} id="actual" className="form-control border-end-0" onChange={handleChange} />
                        <span className="input-group-text bg-white" >
                            <i className={"bi bi-eye" + (show ? '-slash':'')} id="show" onClick={(event) => handleView(event.target.id)}></i>
                        </span>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="contraseña" className="form-label fs-4 fw-bold text-start">Contraseña</label>
                    <div className="input-group p-0">
                        <input type={show2 ? "text" : "password"} id="nuevo" className="form-control border-end-0" onChange={handleChange} />
                        <span className="input-group-text bg-white" >
                            <i className={"bi bi-eye" + (show2 ? '-slash':'')} id="show2" onClick={(event) => handleView(event.target.id)}></i>
                        </span>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="confirmar" className="form-label fs-4 fw-bold text-start">Confirmar Contraseña</label>
                    <div className="input-group p-0">
                        <input type={show3 ? "text" : "password"} id="confirmar" className="form-control border-end-0" onChange={handleChange} />
                        <span className="input-group-text bg-white" >
                            <i className={"bi bi-eye" + (show3 ? '-slash':'')} id="show3" onClick={(event) => handleView(event.target.id)}></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="pb-3 text-center">
                <button type='submit' className="px-5 bg-sky-blue border-0" id="inicio-sesion">Actualizar</button>
            </div>
        </Card>
    )
}

export default ChangePass