import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
    render(){
        return (
            <div className="navbar">
                <div className="logo">
                    <img className="image" src="/logo-white.png" alt="Image not available(" />
                </div>
                <div className="menu">
                    <div className="opt op1">Преимущества</div>
                    <div className="opt op2">О компании</div>
                    <div className="opt op3">Описание услуг</div>
                    <div className="opt op4"></div>
                </div>
            </div>
        )
    }
}

export default Navbar;