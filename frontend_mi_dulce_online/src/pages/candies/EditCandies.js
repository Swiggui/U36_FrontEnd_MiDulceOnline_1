import React from "react";
import Nabvar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import ApiInvoke from "../../utils/ApiInvoke";

const EditCandies = () => {

    const [dulce, setDulce] = useState({
        referencia: "",
        marca: "",
        presentacion: "",
        sabor: "",
        tipo: "",
        cantidad: "",
        precio: "",
        peso: ""
    });

    const { referencia, marca, presentacion, sabor, tipo, cantidad, precio, peso } = dulce;

    const onChange = (e) => {
        setDulce({
            ...dulce,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {

    }

    return (
        <div>
            <Nabvar />
            <div className="my-4 container-xl">
                <h1 className="text-center mb-3">Editar Dulce</h1>
                <div className="container">
                    <form className="row g-3">
                        <div className="row mb-3">
                            <label for="referencia" className="col-sm-2 col-form-label">Email</label>
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
                            <label for="marca" className="col-sm-2 col-form-label">Marca</label>
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
                            <label for="presentacion" className="col-sm-2 col-form-label">Presentación</label>
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
                            <label for="sabor" className="col-sm-2 col-form-label">Sabor</label>
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
                            <label for="tipo" className="col-sm-2 col-form-label">Tipo</label>
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

                        <div class="col-sm-4">
                            <label for="cantidad" class="form-label">Cantidad</label>
                            <input
                                type="number"
                                class="form-control"
                                id="cantidad"
                                name="cantidad"
                                placeholder="Cantidad del producto"
                                value={cantidad}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div class="col-sm-4">
                            <label for="precio" class="form-label">Precio</label>
                            <div className="input-group">
                                <div class="input-group-text">$</div>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="precio"
                                    name="precio"
                                    placeholder="Precio del producto"
                                    value={precio}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <label for="peso" class="form-label">Peso</label>
                            <div className="input-group">
                                <input
                                    type="number"
                                    class="form-control"
                                    id="peso"
                                    name="peso"
                                    placeholder="Peso del producto"
                                    value={peso}
                                    onChange={onChange}
                                    required
                                />
                                <div class="input-group-text">gr</div>
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