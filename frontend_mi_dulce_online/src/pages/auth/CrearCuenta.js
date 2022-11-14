import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/ApiInvoke";
import swal from "sweetalert2";
const CrearCuenta = () => {

  const alerta = (mensaje, tipo, titulo) => {
    swal({
      title: titulo,
      text: mensaje,
      icon: tipo,
      buttons: {
        confirm:{
          text: "Aceptar",
          value: true,
          visible: true,
          className: "btn btn-outline-primary",
          closeModal: true
        }
      }
    });
  }

  const [user, setUser] = useState({
    nickName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { nickName, email, password, confirmPassword} = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }
  useEffect(()=>{
    document.getElementById("nickName").focus();
  }, []);

  function verifyNonEqualPassword(e){
    if(user.password !== user.confirmPassword){
      alert("Las contraseñas no son iguales, por favor inténtelo de nuevo");
      return false;
    } else {
      return true;
    }
  }

  const createAccount = async ()=>{    
    
    const data = {
      apodo: user.nickName,
      correo:  user.email,
      contrasena: user.password
    }
    
    const response = await APIInvoke.invokePOST("/usuario/crear", data);
    const answer = response.aviso;
    let titulo, msg, tipo;

    if(answer === "El usuario introducido ya existe"){
      titulo = "Error";
      msg = "El usuario introducido ya está registrado en la plataforma";
      tipo = "error";
      alerta(msg, tipo, titulo);
    } else if (answer === "El usuario ha sido creado correctamente") {
      titulo = "Éxito";
      msg = "El usuario ha sido creado exitosamente";
      tipo = "success";
      alerta(msg, tipo, titulo);
    }

    setUser({
      nickName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

  }
  const onSubmit = (e) => {
    e.preventDefault();  
    if(verifyNonEqualPassword()){
      createAccount();
    }
    
  }

    return(
        <div className="my-4 container-xl position-absolute top-50 start-50 translate-middle">
            <h1 className="text-center mb-3">Crear Cuenta</h1>
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
                      <label htmlFor="floatingInput">Nombre de Usuario</label>

                    </div>                  
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control" 
                        id="email"
                        name="email" 
                        placeholder="Usuario" 
                        value={email}
                        onChange={onChange}
                        required
                      />
                    <label htmlFor="floatingInput">Correo Electrónico</label>
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
                    <label htmlFor="floatingPassword">Contraseña</label>

                    </div>
                    <div className="form-floating mb-3">
                      <input 
                        type="password" 
                        className="form-control" 
                        id="confirmpassword" 
                        name="confirmPassword"
                        placeholder="Contraseña"
                        value={confirmPassword}
                        onChange={onChange}
                        required
                      />
                      <label htmlFor="floatingPassword">Confirmar Contraseña</label>
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