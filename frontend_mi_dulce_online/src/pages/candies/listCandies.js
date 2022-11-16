import React from "react";
import Nabvar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import ApiInvoke from "../../utils/ApiInvoke";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { confirm } from "react-confirm-box";

const ListCandies = () => {

    const alerta= (mensaje, tipo, titulo)=>{
        swal({
            title: titulo,
            text: mensaje, 
            icon: tipo,
            buttons: {
                confirm:{
                    text: "Aceptar",
                    value: true, 
                    visible: true,
                    className: "btn btn-outline-success",
                    closeModal: true
                }
            }
        });
    }

    const [dulces, setDulces] = useState([]);

    const loadCandies = async () => {
        const response = await ApiInvoke.invokeGET("/dulce/todos");
        console.log(response);
        setDulces(response);
    }

    const deleteCandie = async (e, id) => {
        e.preventDefault();

        const confirmation = await confirm("¿Desea eliminar este dulce?");
        let msj, titulo, tipo;

        if(confirmation){
            await ApiInvoke.invokeDELETE("/dulce/eliminar/" + id);
            loadCandies();

            msj = "Vehiculo eliminado correctamente"; 
            tipo = "success";
            titulo = "Proceso exitoso"; 
            alerta(msj, tipo, titulo); 

            loadCandies();
        }
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
                                                <button
                                                    onClick={(e) => deleteCandie(e, item._id)}
                                                    className="btn btn-outline-danger mx-3 "
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">Eliminar</button>
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