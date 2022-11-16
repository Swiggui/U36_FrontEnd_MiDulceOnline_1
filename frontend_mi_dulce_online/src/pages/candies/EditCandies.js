import React from "react";
import Nabvar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiInvoke from "../../utils/ApiInvoke";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const EditCandies = () => {

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
                    className: "btn btn-outline-primary",
                    closeModal: true
                }
            }
        });
    }

    const navigator = useNavigate();
    const { id } = useParams();

    const [dulce, setDulce] = useState({
        referencia: "",
        marca: "",
        presentacion: "",
        sabor: "",
        tipo: "",
        cantidad: "",
        precio: "",
        pesoNeto: ""
    });

    const { referencia, marca, presentacion, sabor, tipo, cantidad, precio, pesoNeto } = dulce;

    const loadCandies = async () => {
        const response = await ApiInvoke.invokeGET("/dulce/" + id);
        setDulce(response);
    }

    useEffect(() => {
        document.getElementById("referencia").focus();
        loadCandies();
    }, []);

    const onChange = (e) => {
        setDulce({
            ...dulce,
            [e.target.name]: e.target.value
        });
    }

    const editCandie = async () => {
        const data = {
            referencia: dulce.referencia,
            marca: dulce.marca,
            presentacion: dulce.presentacion,
            sabor: dulce.sabor,
            tipo: dulce.tipo,
            cantidad: dulce.cantidad,
            precio: dulce.precio,
            pesoNeto: dulce.pesoNeto
        }

        const response = await ApiInvoke.invokePUT("/dulce/editar/"+id, data);
        let msj, tipo, titulo;

        if(response.aviso === "Dulce editado correctamente"){
            msj = "Dulce editado exitosamente";
            tipo = "success";
            titulo = "¡Enhorabuena!";
            alerta(msj, tipo, titulo);

            navigator("/ListarDulces");
        } else {
            msj = "No fué posible editar el dulce"; 
            tipo = "error";
            titulo = "Falla en el camino"; 
            alerta(msj, tipo, titulo);

            navigator("/ListarDulces");
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editCandie();

    }

    return (
        <div>
            <Nabvar />
            <div className="my-4 container-xl">
                <h1 className="text-center mb-3">Editar Dulce</h1>
                <div className="container">
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="row mb-3">
                            <label htmlFor="referencia" className="col-sm-2 col-form-label">Referencia</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="referencia"
                                    name="referencia"
                                    placeholder="Referencia del producto"
                                    value={referencia}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="marca" className="col-sm-2 col-form-label">Marca</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="marca"
                                    name="marca"
                                    placeholder="Marca del producto"
                                    value={marca}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="presentacion" className="col-sm-2 col-form-label">Presentación</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="presentacion"
                                    name="presentacion"
                                    placeholder="Presentación del producto"
                                    value={presentacion}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="sabor" className="col-sm-2 col-form-label">Sabor</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="sabor"
                                    name="sabor"
                                    placeholder="Sabor del producto"
                                    value={sabor}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="tipo" className="col-sm-2 col-form-label">Tipo</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="tipo"
                                    name="tipo"
                                    placeholder="Tipo del producto"
                                    value={tipo}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <label htmlFor="cantidad" className="form-label">Cantidad</label>
                            <input
                                type="number"
                                className="form-control"
                                id="cantidad"
                                name="cantidad"
                                placeholder="Cantidad del producto"
                                value={cantidad}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="precio" className="form-label">Precio</label>
                            <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="precio"
                                    name="precio"
                                    placeholder="Precio del producto"
                                    value={precio}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="pesoNeto" className="form-label">Peso</label>
                            <div className="input-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="pesoNeto"
                                    name="pesoNeto"
                                    placeholder="Peso del producto"
                                    value={pesoNeto}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-text">gr</div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-outline-success d-block mx-auto w-100 p-3">Editar producto</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default EditCandies;