import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {

    const token = localStorage.getItem("token");
    console.log(token);

    return(
        <div className="container-xxl">
            <Navbar/>
            <Footer/>
        </div>
    );
}

export default Home;