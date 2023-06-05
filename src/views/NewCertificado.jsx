// import React from 'react'

import axios from "axios";
import Card from "../components/Login/Card"
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const NewCertificado = () => {

    const [locales, setLocales] = useState(null)
    const [fecha, setFecha] = useState('');
    const [centro, setCentro] = useState('');

    const handleChange = (event) => {
        const { id, value } = event.target;
        if (id == 'fecha') {
            setFecha(value);
        }

        if (id == 'centro') {
            setCentro(value);
        }
    }

    const isEmpty = (value) => {
        return value.trim() == ''
    }

    const emptyFields = () => {

        let noError = true;

        if (isEmpty(fecha)) {
            Swal.fire({ icon: 'error', text: 'Debe cargar una fecha válida' });
            noError = false;
        } else if (isEmpty(centro)) {
            Swal.fire({ icon: 'error', text: 'Debe cargar un centro válido' });
            noError = false
        }

        return noError
    }

    const navigate = useNavigate()

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (emptyFields()) {
            const access_token = localStorage.getItem('token')

            const data = {
                fecha_donacion: fecha,
                local_donacion_id: centro
            }

            const config = {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            }

            axios.post("http://192.168.16.90:8000/api/certificados", data, config)
                .then((response) => {
                    console.log(response.data)
                    navigate("/certificados")
                    Swal.fire({ icon: 'success', text: "Registro Cargado con Éxito" })
                }).catch((err) => {
                    // console.log(err)
                    let message = err.response?.data?.message;
                    if (message) {
                        Swal.fire({ icon: 'error', text: message })
                    }
                })
        }
    }

    useEffect(() => {
        axios.get("http://192.168.16.90:8000/api/locales")
            .then((response) => {
                setLocales(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])


    return (
        <Card titulo={'Generar Certificado'} onSubmitHandler={onSubmitHandler}>
            <div className="p-5 col-md-8 mx-auto">
                <div className='mb-3'>
                    <label htmlFor="fecha" className="form-label fs-4 fw-bold text-start">Fecha de Donación:</label>
                    <input type="date" className="form-control" id="fecha" onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className="form-label fs-4 fw-bold text-start">Centro:</label>

                    {locales && <select className="form-select" id='centro' defaultValue={''} onChange={handleChange}>
                        <option value={''} disabled>Seleccionar</option>
                        {locales.map(elemento => (
                            <option key={elemento.id} value={elemento.id}>{elemento.local_donacion}</option>
                        )
                        )}
                    </select>}
                </div>
            </div>
            <div className="pb-3 text-center">
                <button type='submit' className="px-5 bg-sky-blue border-0" id="inicio-sesion">GENERAR CERTIFICADO</button>
            </div>
        </Card>
    )
}

export default NewCertificado