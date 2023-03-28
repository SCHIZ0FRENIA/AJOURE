import First from "../Components/First.jsx";
import Navbar from "../Components/Navbar.jsx";
import Info from "../Components/Info.jsx";
import Caption from "../Components/Caption.jsx";
import Advantages from "../Components/Advantages.jsx";
import Footer from "../Components/Footer.jsx";
import React from "react";

function Root(){
    return(
        <>
            <Navbar></Navbar>
            <First></First>
            <Info></Info>
            <Caption></Caption>
            <Advantages></Advantages>
            <Footer></Footer>
        </>
    )
}

export default Root;
