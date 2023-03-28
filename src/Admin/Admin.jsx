import react from "react";

import './Admin.css';


class Admin extends react.Component {

    clients = [
        {
            id: 1,
            name: "Иванов Иван Иванович",
            phone: "+375445584321",
            consultation: true
        },
        {
            id: 2,
            name: "Петров Петр Петрович",
            phone: "+375445584321",
            consultation: false
        },
        {
            id: 3,
            name: "Сидоров Сидор Сидорович",
            phone: "+375445584321",
            consultation: true
        },
        {
            id: 4,
            name: "Александров Александр Александрович",
            phone: "+375445584321",
            consultation: false
        }
    ]

    trComp = () => {
        return(
            <tbody className="client">
                {
                    this.clients.map((i) => {
                            return(
                                <tr className="client">
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.phone}</td>
                                    <td>
                                        {i.consultation &&
                                            <input className='consButton' type="button" value="Информация"/>
                                        }

                                        {!i.consultation &&
                                            <input className='consButton' type="button" value="Информация" disabled/>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        )
    }

    render(){
        return(
            <div className="admin">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Имя</th>
                            <th>Телефон</th>
                            <th>Консультация</th>
                        </tr>
                    </thead>

                    {this.trComp()}
                </table>
            </div>
        )
    }
}

export default Admin;
