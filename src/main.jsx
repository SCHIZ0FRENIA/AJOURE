import ReactDOM from 'react-dom/client';

import React from 'react';
import First from "./Components/First.jsx";
import Navbar from "./Components/Navbar.jsx";
import Info from "./Components/Info.jsx";
import Caption from "./Components/Caption.jsx";
import Advantages from "./Components/Advantages.jsx";
import Footer from "./Components/Footer.jsx";
import Admin from "./Admin/Admin.jsx";
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar></Navbar>
        <First></First>
        <Info></Info>
        <Caption></Caption>
        <Advantages></Advantages>
        <Footer></Footer>
        <Admin></Admin>
    </React.StrictMode>
);
