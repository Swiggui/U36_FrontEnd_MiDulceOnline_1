import React from "react";
import Nabvar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import ApiInvoke from "../../utils/ApiInvoke";

const ListCandies = () => {
    return(
        <div>
            <Nabvar/>
            <Footer/>
        </div>
    );
}

export default ListCandies;