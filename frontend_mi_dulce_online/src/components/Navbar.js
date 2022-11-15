import React from "react";
import { Link } from "react-router-dom";

const Nabvar = () => {
    const onClick = () => {
        localStorage.removeItem("user");
        window.location.href="/";
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
              <Link to={"/Home"} className="navbar-brand head" href="#">
               <img src="/favicon.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
               Mi Dulce Online
             </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <a className="nav-link mx-1 head" href="#">Listar</a>
                    <a className="nav-link mx-1 head" href="#">Crear</a>
                    <button  onClick={onClick} className="btn btn-outline-danger mx-2" type="button">Salir</button>
                  </div>
                </div>
              </div>
            </nav>
            
        </div>
    );
}

export default Nabvar;