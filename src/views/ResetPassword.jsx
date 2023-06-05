import axios from "axios";
import Card from "../components/Login/Card"
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const ResetPassword = () => {

    const [email, setEmail] = useState('');

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

      const navigate = useNavigate()

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (validateFields()) {
            axios.post("http://192.168.16.90:8000/api/reset-password", {email})
              .then((response) => {
                // console.log(response)
                let message = response?.data?.message;

                if (message) {
                    Swal.fire({ icon: 'success', text: message })
                }
                navigate("/login")
              })
              .catch((err) => {
                console.log(err)
            });
          }

    }

    const validateFields = () => {
        let noError = true;
    
        if (email.trim() == '' || !isValid) {
          Swal.fire({ icon: 'error', text: "Ingrese un Email válido" });
          noError = false;
        }

        return noError
      }

    return (
        <Card titulo={'Restablecer Contraseña'} onSubmitHandler={onSubmitHandler}>
            <div className="p-5 col-md-8 mx-auto">
                <div className='mb-3 text-center'>
                    <label htmlFor="nombres" className="form-label fs-4 fw-bold">Ingrese Email</label>
                    <input type="text" className="form-control" id="email" value={email} onChange={handleEmailChange}/>
                    {(!isValid && isValid != null) && <p className='text-danger fs-6 fw-bold'>Ingrese un correo electrónico válido.</p>}
                </div>

                <div className='mb-3 text-center'>
                    <p className="fs-6">Se enviara un link al correo ingresado para restablecer contraseña</p>
                    <button type="submit" htmlFor="confirmar" className="bg-sky-blue form-label fw-bold ">Enviar</button>
                </div>
            </div>
        </Card>
    )
}

export default ResetPassword