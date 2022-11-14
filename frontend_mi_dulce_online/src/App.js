import React,{ Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CrearCuenta from "./pages/auth/CrearCuenta";
import Login from "./pages/auth/Login";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/CrearCuenta" exact element={<CrearCuenta/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
