import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import ApiInvoke from "../../utils/ApiInvoke";

const Login = () => {

  const alerta = (mensaje, tipo, titulo) => {
    swal({
      title: titulo,
      text: mensaje,
      icon: tipo,
      buttons: {
        confirm: {
          text: "Aceptar",
          value: true,
          visible: true,
          className: "btn btn-outline-error",
          closeModal: true
        }
      }
    });
  }

  const navigate = useNavigate();

  const [user, setUser] = useState({
    nickName: "",
    password: ""
  });

  const {nickName, password} = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    
  }

  useEffect(() => {
    document.getElementById("nickName").focus();
  }, []);

  const signIn = async () => {
    
    const data = {
      apodo: user.nickName,
      contrasena: user.password
    }

    const response = await ApiInvoke.invokePOST("/usuario/iniciarSesion", data);

    const validation = response.aviso;
    let title, msg, type;

    if (validation === "Logueado") {
      title = "Acceso concedido"
      msg = "¡Bienvenido a Mi Dulce Online!";
      type = "success";
      alerta(msg, type, title);

      localStorage.setItem("user", response.user);
      
      navigate("/Home");
    } else if (validation === "Acceso Denegado") {
      title = "Acceso no Autorizado"
      msg = "El usuario o contraseña introducidos son incorrectos, por favor verifique en inténtelo nuevamente";
      type = "error";
      alerta(msg, type, title);
    }
    setUser({
      nickName: "",
      password: ""
    });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    signIn();
  }

  return (
    <div className="container-xl position-absolute top-50 start-50 translate-middle">
      <h1 className="text-center mb-3">Iniciar Sesión</h1>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="nickName"
              name="nickName"
              placeholder="Usuario"
              value={nickName}
              onChange={onChange}
              required
            />

            <label htmlFor="nickNames">Usuario</label>

          </div>
          <div className="form-floating mb-3">

            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={onChange}
              required
            />
            <label htmlFor="password">Contraseña</label>

          </div>
          <button type="submit" className="btn btn-outline-primary w-100 my-2">Iniciar Sesión</button>
          <Link to={"/CrearCuenta"} className="btn btn-outline-success w-100 my-2">Crear Cuenta</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;