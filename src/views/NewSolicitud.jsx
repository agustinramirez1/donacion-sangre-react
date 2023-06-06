import { useEffect, useState } from "react"
import Card from "../components/Login/Card"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const NewSolicitud = () => {

    const tipo_sangre = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
    const [nombres, setNombres] = useState('')
    const [ci, setCi] = useState('')
    const [tipoSangre, setTipoSangre] = useState('')
    const [establecimiento, setEstablecimiento] = useState('')
    const [volumen, setVolumen] = useState('')
    const [fecha, setFecha] = useState('');
    const [telefono, setTelefono] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [locales, setLocales] = useState(null)

    const tokenRedux = useSelector(state => state.token)

    const handleChange = (event) => {
        const { id, value } = event.target;
        if (id == 'nombres') {
            setNombres(value);
        }

        if (id == 'ci') {
            setCi(value);
        }

        if (id == 'tipo-sangre') {
            setTipoSangre(value);
        }

        if (id == 'establecimiento') {
            setEstablecimiento(value);
        }

        if (id == 'volumen') {
            setVolumen(value);
        }

        if (id == 'fecha') {
            setFecha(value);
        }

        if (id == 'telefono') {
            setTelefono(value);
        }

        if (id == 'descripcion') {
            setDescripcion(value);
        }
    }

    const isEmpty = (value) => {
        return value.trim() == ''
    }

    const emptyFields = () => {

        let noError = true;

        if (isEmpty(nombres)) {
            Swal.fire({ icon: 'error', text: 'Debe cargar un nombre válido' });
            noError = false;
        } else if (isEmpty(ci)) {
            Swal.fire({ icon: 'error', text: 'Debe cargar un numero de cédula válido' });
            noError = false
        } else if (isEmpty(tipoSangre)) {
            Swal.fire({ icon: 'error', text: 'Debe seleccionar un tipo de sangre' });
            noError = false
        } else if (isEmpty(establecimiento)) {
            Swal.fire({ icon: 'error', text: 'Debe seleccionar un establecimiento' });
            noError = false
        } else if (isEmpty(volumen)) {
            Swal.fire({ icon: 'error', text: 'Debe ingresar un volumen' });
            noError = false
        } else if (isEmpty(fecha)) {
            Swal.fire({ icon: 'error', text: 'Debe ingresar una fecha válida' });
            noError = false
        } else if (isEmpty(telefono)) {
            Swal.fire({ icon: 'error', text: 'Debe ingresar un número de teléfono válido' });
            noError = false
        } else if (isEmpty(descripcion)) {
            Swal.fire({ icon: 'error', text: 'Debe ingresar una solicitud' });
            noError = false
        }
        return noError
    }

    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (emptyFields()) {

            const data = {
                solicitud: descripcion,
                fecha_limite: fecha,
                volumenes_necesarios: volumen,
                nombre_apellido_donatario: nombres,
                cedula_donatario: ci,
                telefono_contacto: telefono,
                tipo_sangre: tipoSangre,
                establecimiento: establecimiento
            }

            const config = {
                headers: {
                    'Authorization': `Bearer ${tokenRedux}`
                }
            }

            axios.post("http://192.168.16.90:8000/api/solicitudes", data, config)
                .then((response) => {
                    console.log(response.data)
                    navigate("/solicitudes")
                    Swal.fire({ icon: 'success', text: "Solicitud Cargada Correctamente" })
                }).catch((err) => {
                    console.log(err)
                    let message = err.response?.data?.errors;

                    if (message) {
                        Swal.fire({ icon: 'error', text: "Algo no salió bien" })
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
        <Card titulo={'Nueva Solicitud'} onSubmitHandler={onSubmitHandler} iconStart={'bi bi-arrow-left'} href={'/solicitudes'}>
            <div className="p-5 col-md-8 mx-auto row row-cols-2">
                <div className='mb-3'>
                    <label htmlFor="nombres" className="form-label fs-4 fw-bold text-start">Nombre y Apellido</label>
                    <input type="text" className="form-control" id="nombres" onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="ci" className="form-label fs-4 fw-bold text-start">Cédula</label>
                    <input type="number" className="form-control" id="ci" onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="tipo-sangre" className="form-label fs-4 fw-bold text-start">Tipo de Sangre</label>
                    {tipo_sangre && <select className="form-select" id='tipo-sangre' defaultValue={''} onChange={handleChange}>
                    <option value={''} disabled>Seleccionar</option>
                    {tipo_sangre.map((item, index) => (
                        <option key={index} value={index + 1}>{item}</option>))}
                        </select>}
                </div>
                <div className='mb-3'>
                    <label id="establecimiento" className="form-label fs-4 fw-bold text-start">Establecimiento</label>
                    {locales && <select className="form-select" id='establecimiento' defaultValue={''} onChange={handleChange}>
                        <option value={''} disabled>Seleccionar</option>
                        {locales.map(elemento => (
                            <option key={elemento.id} value={elemento.id}>{elemento.local_donacion}</option>
                        )
                        )}
                    </select>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="volumen" className="form-label fs-4 fw-bold text-start">Volumen</label>
                    <input type="number" className="form-control" id="volumen" onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="fecha" className="form-label fs-4 fw-bold text-start">Fecha Limite</label>
                    <input type="date" className="form-control" id="fecha" onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="telefono" className="form-label fs-4 fw-bold text-start">Teléfono</label>
                    <input type="text" className="form-control" id="telefono" onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="confirmar" className="form-label fs-4 fw-bold text-start">Descripción</label>
                    <input type="textarea" className="form-control" id="descripcion" onChange={handleChange} />
                </div>
            </div>
            <div className="pb-3 text-center">
                <button type='submit' className="px-5 bg-sky-blue border-0" id="inicio-sesion">Ingresar</button>
            </div>
        </Card>
    )
}

export default NewSolicitud