import React from "react";
import Nabvar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import ApiInvoke from "../../utils/ApiInvoke";
import swal from "sweetalert";

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
                                            <td className="">{item.referencia}</td>
                                            <td className="">{item.marca}</td>
                                            <td className="">{item.presentacion}</td>
                                            <td className="">{item.sabor}</td>
                                            <td className="">{item.tipo}</td>
                                            <td className="">{item.cantidad}</td>
                                            <td className="">{item.precio}</td>
                                            <td className="">{item.pesoNeto}</td>
                                            <td>
                                                <button className="btn btn-outline-primary">Editar</button>
                                                <button className="btn btn-outline-danger">Eliminar</button>
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