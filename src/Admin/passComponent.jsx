import react from "react";
import Admin from "./Admin.jsx";
import './passComponent.css'

function PassComponent(){

    const [login, setLogin] = react.useState('');
    const [password, setPassword] = react.useState('');
    const [isAuth, setIsAuth] = react.useState(false);
    const loginEt = "admin";
    const pass = "admin";

    return (

        <div className="cont">

            {!isAuth &&
                <div className="pass">
                    <h3>Введите логин:</h3>
                    <input
                        type="text"
                        name="input1"
                        id=""
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}/>
                    <h3>Введите пароль:</h3>
                    <input
                        type="password"
                        name="password"
                        id=""
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}/>
                    <button
                        className="submit"
                        onClick={() => {((loginEt === login) && (password === pass)) ? setIsAuth(true): setIsAuth(false)}}>Подтвердить</button>
                </div>
            }
            {isAuth &&
                <Admin/>
            }
        </div>
    );
}

export default PassComponent;
