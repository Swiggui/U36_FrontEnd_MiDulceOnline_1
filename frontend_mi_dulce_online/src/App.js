import React,{ Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CrearCuenta from "./pages/auth/CrearCuenta";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import CreateCandies from "./pages/candies/CreateCandies";
import ListCandies from "./pages/candies/ListCandies";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/CrearCuenta" exact element={<CrearCuenta/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/CrearDulce" exact element={<CreateCandies/>}/>
          <Route path="/ListarDulces" exact element={<ListCandies/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
