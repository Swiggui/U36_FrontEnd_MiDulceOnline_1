import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {

    const token = localStorage.getItem("token");
    console.log(token);

    return(
        <div>
            <Navbar/>
                <main className="container-xl position-absolute top-50 start-50 translate-middle">
                    <h1 className="text-center">¡Bienvenido a Mi Dulce Online!</h1>
                    <h2 className="text-center mt-3">¿Qué deseas hacer?</h2>
                    <div className="row mt-5">
                        <Link to={"/CrearDulce"} className="col container mx-2 btn btn-outline-success">
                            <img src="/create.png" className="row mx-auto"></img>
                            Crear un producto
                        </Link> 
                        <Link to={"/ListarDulces"} className="col container mx-2 btn btn-outline-primary">
                            <img src="/edit.png" className="row mx-auto"></img>
                            Ver todos los productos
                        </Link> 
                    </div>
                </main>
            <Footer/>
        </div>
    );
}

export default Home;