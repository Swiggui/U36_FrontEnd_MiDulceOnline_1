import React from "react";
import { Link } from "react-router-dom";

const CrearCuenta = () => {
    return(
        <div className="container-xl position-absolute top-50 start-50 translate-middle">
            <h1 className="text-center mb-3">Crear Cuenta</h1>
            <div className="container">
                <form>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="floatingInput" placeholder="Usuario" required/>
                      <label for="floatingInput">Nombre de Usuario</label>
                    </div>                  
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="Usuario" required/>
                      <label for="floatingInput">Correo Electrónico</label>
                    </div>                  
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" required/>
                      <label for="floatingPassword">Contraseña</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" required/>
                      <label for="floatingPassword">Confirmar Contraseña</label>
                    </div>
                    <button type="submit" className="btn btn-outline-success w-100 my-2">Crear Cuenta</button>
                    <Link to={"/"} className="btn btn-outline-danger w-100 my-2">Regresar</Link>
                </form>
                <div className="card-footer text-muted text-center mt-2">
                    Todos los campos son obligatorios
                </div>
            </div>
        </div>
    );
}

export default CrearCuenta;