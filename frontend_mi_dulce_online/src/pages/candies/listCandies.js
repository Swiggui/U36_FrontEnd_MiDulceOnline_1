import React from "react";
import Nabvar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import ApiInvoke from "../../utils/ApiInvoke";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const ListCandies = () => {

    const [dulces, setDulces] = useState([]);

    const loadCandies = async () => {
        const response = await ApiInvoke.invokeGET("/dulce/todos");
        console.log(response);
        setDulces(response);
    }

    useEffect(() => {
        loadCandies();
    }, [])

    return (
        <div>
            <Nabvar />
            <div className="my-5 container-xxl">
                <h1 className="text-center mb-3">Lista de Dulces</h1>
                <div className="container">
                    <table className="table table-info table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Referencia</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Presentación</th>
                                <th scope="col">Sabor</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Peso Neto</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                dulces.map(
                                    item =>
                                        <tr className="table-info">
                                            <td>{item.referencia}</td>
                                            <td>{item.marca}</td>
                                            <td>{item.presentacion}</td>
                                            <td>{item.sabor}</td>
                                            <td>{item.tipo}</td>
                                            <td>{item.cantidad}</td>
                                            <td>{item.precio}</td>
                                            <td>{item.pesoNeto}</td>
                                            <td>
                                                <Link to={`/editar/${item._id}`} className="btn btn-outline-primary mx-3">Editar</Link>
                                                <button className="btn btn-outline-danger mx-3">Eliminar</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ListCandies;