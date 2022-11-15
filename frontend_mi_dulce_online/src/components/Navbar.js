import React from "react";
import { Link } from "react-router-dom";
//import loga from "../../public/favicon.png";

const Nabvar = () => {
    const onClick = () => {
        localStorage.removeItem("user");
        window.location.href="/";
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link to={"/Home"} className="navbar-brand" href="#">
                  <img src="/favicon.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
                  Mi Dulce Online
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled">Disabled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    );
}

export default Nabvar;