// import React from 'react'
import axios from 'axios'
import Card from '../components/Login/Card'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

const Perfil = () => {

    const [perfil, setPerfil] = useState();
    const dispatch = useDispatch()

    const tokenRedux = useSelector(state => state.token)

    const config = {
        headers: {
            'Authorization': `Bearer ${tokenRedux}`
        }
    }

    const navigate = useNavigate();

    const logout = (event) => {
        event.preventDefault();

        Swal.fire({
            title: 'Advertencia',
            text: 'Estas seguro que quieres cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, cerrar sesion!',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({type: 'logout'})
                navigate('/login')
                Swal.fire({
                    title: 'Sesion Cerrada!',
                    icon: 'success'
            })
            }
        })
    }

    useEffect(() => {
        // console.log('carga perfil')
        axios.get("http://192.168.16.90:8000/api/user", config)
            .then((response) => {
               // console.log(response.data)
                setPerfil(response.data)
            });
    }, [])

    return (
        <Card titulo={'Perfil'} iconStart={'bi bi-arrow-left'} href={'/solicitudes'}>
            {perfil &&
                <div className="col">
                    <div>
                        <div className="col-md-5 col-xl-4 mx-auto">
                            <div className="d-flex justify-content-center">
                                <h2>{perfil.name}&nbsp;</h2>
                                <h2>{perfil.surname}</h2>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img width={200} src="https://res.cloudinary.com/dannk6usr/image/upload/roshka/donacion-sangre/user.png" alt="user" />
                            </div>
                            <p className="d-flex justify-content-between pt-4">
                                <span>Fecha de Nacimiento:&nbsp;</span>
                                <span>{perfil.fecha_nacimiento}</span>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Email: &nbsp;</span>
                                <span>{perfil.email}</span>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Última vez Donado: &nbsp;</span>
                                <span>{perfil.ult_vez_donado}</span>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Sexo: &nbsp;</span>
                                <span>{perfil.sexo}</span>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Número de Cédula: &nbsp;</span>
                                <span>{perfil.nro_cedula}</span>
                            </p>
                        </div>
                        <div className="mb-3 text-center d-grid col-md-5 col-xl-4 mx-auto">
                            <Link to={'/edit-perfil'} className="btn btn-dark px-5 bg-sky-blue border-0" id="inicio-sesion" >Editar Información</Link>
                        </div>
                        <div className="mb-3 text-center d-grid col-md-5 col-xl-4 mx-auto">
                            <Link to={'/change-pass'} className="btn btn-dark px-5 bg-sky-blue border-0" id="inicio-sesion">Cambiar Contraseña</Link>
                        </div>
                        <div className="mb-3 text-center d-grid col-md-5 col-xl-4 mx-auto">
                            <button className="btn btn-dark px-5 bg-sky-blue border-0" id="inicio-sesion" onClick={logout}>Cerrar Sesión</button>
                        </div>
                    </div>
                </div>}
        </Card>
    )
}

export default Perfil