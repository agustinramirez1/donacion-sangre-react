import { useState } from "react"
import Card from "../components/Login/Card"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import axios from "axios"



const EditPerfil = () => {

  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [sexo, setSexo] = useState('')
  const [fecNac, setFecNac] = useState('')
  const [email, setEmail] = useState('');

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

    if (id == 'sexo') {
      setSexo(value);
    }

    if (id == 'fecNac') {
      setFecNac(value);
    }

    if (id == 'email') {
      setEmail(value);
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
    } else if (isEmpty(apellidos)) {
      Swal.fire({ icon: 'error', text: 'Debe cargar un apellido válido' });
      noError = false
    } else if (isEmpty(sexo)) {
      Swal.fire({ icon: 'error', text: 'Debe seleccionar un Sexo' });
      noError = false
    } else if (isEmpty(fecNac)) {
      Swal.fire({ icon: 'error', text: 'Debe ingresar una fecha de nacimiento' });
      noError = false
    } else if (isEmpty(email)) {
      Swal.fire({ icon: 'error', text: 'Debe ingresar un correo' });
      noError = false
    }
    return noError
  }

  const navigate = useNavigate();

  const onSubmitHandler = () => {
    event.preventDefault();

    if (emptyFields()) {
      const access_token = localStorage.getItem('token')

      const data = {
        name: nombres,
        surname: apellidos,
        email,
        fecha_nacimiento: fecNac,
        sexo
      }

      const config = {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }

      axios.post("http://192.168.16.90:8000/api/editar-perfil", data, config)
        .then((response) => {
          console.log(response.data)
          navigate("/perfil")
          Swal.fire({ icon: 'success', text: "Perfil actualizado" })
        }).catch((err) => {
          console.log(err)
          let message = err.response?.data?.message;
          if (message) {
            Swal.fire({ icon: 'error', text: message })
          }
        })
    }
  }

  return (
    <Card titulo={'Editar Perfil'} onSubmitHandler={onSubmitHandler}>
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
          <label className="form-label fs-4 fw-bold text-start">Sexo</label>
          <select className="form-select" onChange={handleChange} id='sexo' defaultValue={''}>
            <option value={''}>Seleccionar</option>
            <option value="F">Femenino</option>
            <option value="M">Masculino</option>
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor="fecNac" className="form-label fs-4 fw-bold text-start">Fecha de Nacimiento</label>
          <input type="date" className="form-control" id="fecNac" onChange={handleChange} />
        </div>
        <div className='mb-3'>
          <label htmlFor="email" className="form-label fs-4 fw-bold text-start">Email</label>
          <input type="text" className="form-control" id="email" value={email} onChange={handleEmailChange} />
          {(!isValid && isValid != null) && <p className='text-danger fs-6 fw-bold'>Ingrese un correo electrónico válido.</p>}
        </div>
      </div>
      <div className="pb-3 text-center">
        <button type='submit' className="px-5 bg-sky-blue border-0" id="inicio-sesion">Actualizar Perfil</button>
      </div>
    </Card>
  )
}

export default EditPerfil