import Card from "./Card"


const ResetPassword = () => {
    const onSubmitHandler = () => {

    }

    return (
        <Card titulo={'Restablecer Contraseña'} onSubmitHandler={onSubmitHandler}>
            <div className="p-5 col-md-8 mx-auto">
                <div className='mb-3 text-center'>
                    <label htmlFor="nombres" className="form-label fs-4 fw-bold">Ingrese Email</label>
                    <input type="text" className="form-control" id="email" />
                </div>

                <div className='mb-3 text-center'>
                    <p className="fs-6">Se enviara un link al correo ingresado para restablecer contraseña</p>
                    <button htmlFor="confirmar" className="bg-sky-blue form-label fw-bold ">Enviar</button>
                </div>
            </div>
        </Card>
    )
}

export default ResetPassword