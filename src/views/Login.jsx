import React from "react";
import Imagen from "../components/Login/Imagen";
import Formulario from "../components/Login/Formulario";
import { NavLink } from "react-router-dom";
import Card from "../components/Login/Card";

const Login = () => {
  return (
    <Card titulo={'Login'}>
      <Imagen />
      <Formulario />
      <div className="text-center">
        <div className="mb-3">
          <button className="px-5 bg-sky-blue border-0" id="inicio-sesion">Iniciar Sesión</button>
        </div>
        <div className="mb-2">
          No tienes una cuenta? <NavLink to={'/registro'} className={'text-skyblue'}>Registrarse</NavLink>
        </div>
        <div className="pb-3">
          <NavLink className={'text-skyblue'}>Olvidaste tu Contraseña?</NavLink>
        </div>
      </div>
    </Card>
  );
};

export default Login;
