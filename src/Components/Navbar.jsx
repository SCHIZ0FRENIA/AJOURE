import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
    render(){
            return (
                <div className="navbar">
                    <div className="logo">
                        <a href="#first">
                            <img className="image" src="/logo-white.png" alt="Image not available(" />
                        </a>
                    </div>
                    <div className="menu">
                        <div className="opt op2"><a href="#info">О компании</a></div>
                        <div className="opt op3"><a href="#caption">Описание услуг</a></div>
                        <div className="opt op1"><a href="#advantages">Преимущества</a></div>
                    </div>
                </div>
            )
    }
}

export default Navbar;
