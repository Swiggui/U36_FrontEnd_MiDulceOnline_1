import React from "react";

const Login = () => {
    return (
        <div className="container-xl position-absolute top-50 start-50 translate-middle">
            <h1 className="text-center mb-3">Iniciar Sesión</h1>
            <div className="container">
                <form>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Usuario"/>
                    <label for="floatingInput">Usuario</label>
                    </div>                  
                  <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña"/>
                    <label for="floatingPassword">Contraseña</label>
                  </div>
                  <button type="submit" class="btn btn-outline-primary w-100 my-2">Iniciar Sesión</button>
                  <button className="btn btn-outline-success w-100 my-2">Crear Cuenta</button>
                </form>
            </div>
        </div>
    );
}

export default Login;