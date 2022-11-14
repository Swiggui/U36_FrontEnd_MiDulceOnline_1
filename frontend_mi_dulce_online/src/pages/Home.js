import React from "react";

const Home = () => {

    const token = localStorage.getItem("token");
    console.log(token);

    return(
        <h1>Menu</h1>
    );
}

export default Home;