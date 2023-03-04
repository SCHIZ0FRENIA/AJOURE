import React from 'react';
import ReactDOM from 'react-dom/client';
import First from "./Components/First.jsx";
import Navbar from "./Components/Navbar.jsx";
import Advantages from "./Components/Advantages.jsx";
import Modal from "./Components/Modal.jsx";
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <Navbar></Navbar>
        <First></First>
        <Advantages></Advantages>
    </React.StrictMode>
);