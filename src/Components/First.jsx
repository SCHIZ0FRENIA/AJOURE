import React from "react";
import Button from "./Button.jsx";
import './First.css';


class First extends React.Component {
    render(){
        return(
            <div className="first">
                <div className="head">
                    <h1 className="greeting">Вас приветствует Ажур Инкам</h1>
                    <Button name='оставить заявку'></Button>
                </div>
                <img src="/first.png" alt=""/>
            </div>
        )
    }
}

export default First;