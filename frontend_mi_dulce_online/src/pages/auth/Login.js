import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container-xl position-absolute top-50 start-50 translate-middle">
            <h1 className="text-center mb-3">Iniciar Sesión</h1>
            <div className="container">
                <form>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Usuario" />

                    <label htmlFor="floatingInput">Usuario</label>

                    </div>                  
                  <div className="form-floating mb-3">

                  <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña"/>
                    <label htmlFor="floatingPassword">Contraseña</label>

                  </div>
                  <button type="submit" className="btn btn-outline-primary w-100 my-2">Iniciar Sesión</button>
                  <Link to={"/CrearCuenta"} className="btn btn-outline-success w-100 my-2">Crear Cuenta</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;