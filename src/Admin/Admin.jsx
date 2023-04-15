import react from "react";

import './Admin.css';
let users;
async function getUsers() {
    // отправляет запрос и получаем ответ
    const response = await fetch("http://localhost:7777/getusers", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if(response.ok === true){
        users = await response.json();

        console.log(users);
    }
};
getUsers();
let Mass = [
    {
        title: 'Организационно-правовая форма:',
        variants: ['Юридическое лицо – 350 долларов США.', 'Индивидуальный предприниматель – 200 долларов США.'],
        price: [350, 200],
    },
    {
        title: 'Система налогообложения:',
        variants: ['Общая – 50 долларов США.приложение.', 'Упрощенная – 0 долларов США.', 'Единый налог – 0 долларов США.'],
        price: [50, 0, 0],
    },
    {
        title: 'Количество сотрудников в штате и/или по договорам подряда:',
        variants: ['0-10 – 0 долларов США.', '11-20 – 50 долларов США.', '21-30 – 100 долларов США.', '31-40 – 150 долларов США.', '41-50 – 200 долларов США.', '51-60 – 250 долларов США.', '61-70 – 300 долларов США.', '71-80 – 350 долларов США.', '81-90 – 400 долларов США.', '91-100 – 450 долларов США.', '101 и более – 600 долларов США.'],
        price: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
    },
    {
        title: 'Наличие внешней экономической деятельности:',
        variants: ['Отсутствует – 0 долларов США.', 'Импорт – 50 долларов США.', 'Экспорт – 50 долларов США.', 'Импорт и экспорт – 100 долларов США.'],
        price: [0, 50, 50, 100],
    },
    {
        title: 'Наличие розничной торговли (количество кассовых аппаратов):',
        variants: ['отсутствует – 0 долларов США.', '1 – 50 долларов США.', '2 – 100 долларов США.', '3 – 150 долларов США.', '4 – 200 долларов США.', '5 – 250 долларов США.', '6 – 300 долларов США.', '7 – 350 долларов США.', '8 – 400 долларов США.', '9 – 450 долларов США.', '10 – 500 долларов США.'],
        price: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
    },
    {
        title: 'Количество кредитных договоров:',
        variants: ['отсутствуют – 0 долларов США.', '1 – 50 долларов США.', '2 – 100 долларов США.', '3 – 150 долларов США.', '4 – 200 долларов США.', '5 – 250 долларов США.'],
        price: [0, 50, 100, 150, 200, 250],
    },
    {
        title: 'Наличие договоров лизинга (количество предметов лизинга):',
        variants: ['отсутствуют – 0 долларов США.', '1 – 50 долларов США.', '2 – 100 долларов США.', '3 – 150 долларов США.', '4 – 200 долларов США.', '5 – 250 долларов США.'],
        price: [0, 50, 100, 150, 200, 250],
    },
    {
        title: 'Наличие транспортных средств в пользовании:',
        variants: ['отсутствуют – 0 долларов США.', 'в наличии – 50 долларов США.'],
    },
    {
        title: 'Необходимость проведения Исполнителем платежей с использованием технологии дистанционного банковского обслуживания:',
        variants: ['отсутствуют – 0 долларов США.', 'в наличии – 100 долларов США.'],
    },
    {
        title: 'Количество товарных (товарно-транспортных) накладных и/или актов выполненных работ в месяц:',
        variants: ['0-400 – 0 долларов США.', '400-500 – 250 долларов США.', '500-600 – 500 долларов США.', '700-800 – 750 долларов США.', '800-900 – 1000 долларов США.', '1000 и более – 1250 долларов США.'],
    }
];

let clients = [
    {
        id: 1,
        name: "Иванов Иван Иванович",
        phone: "+375445584321",
        consultation: true,
        answers: [1, 2, 0, 0, 1, 1, 1, 1, 1, 1]
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
        consultation: true,
        answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        id: 4,
        name: "Александров Александр Александрович",
        phone: "+375445584321",
        consultation: false
    }
]

let ig = 0;

function Admin(){
    const [isModal, setModal] = react.useState(0);
    const [isConfirm, setConfirm] = react.useState(0);

    return(

        <div className="admin">
            {!isModal &&
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Телефон</th>
                        <th>Консультация</th>
                    </tr>
                    </thead>

                    <tbody className="client">
                    {
                        users.map((i, index) => {
                                return(
                                    <tr className="client">
                                        <td>{i._id}</td>
                                        <td>{i.name}</td>
                                        <td className="tele">{i.phone}</td>
                                        <td>
                                            {i.isCons &&
                                                <input
                                                    className='consButton'
                                                    id={i.id}
                                                    type="button"
                                                    value="информация"
                                                    onClick={()=>{setModal(1); ig = index; console.log(ig)}}
                                                />
                                            }

                                            {!i.isCons &&
                                                <input className='consButton' type="button" value="Информация" disabled/>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                    </tbody>
                </table>
            }

            {isModal &&
                <div className="modal">
                    <ul>
                        {
                            users[ig].answers.map((ind, index) =>{
                                    return(
                                        <li className="variant">
                                            <h3>{Mass[index].title}</h3>
                                            <p>{Mass[index].variants[ind]}</p>
                                        </li>
                                    )
                                }
                            )
                        }

                        { !isConfirm &&
                            <li onClick={()=>{setConfirm(1);}}>
                                удалить
                            </li>
                        }

                        { isConfirm &&
                            <>
                                <li onClick={()=>{setConfirm(0);}}>
                                    подтвердить удаление
                                </li>
                                <li onClick={()=>{setConfirm(0);}}>
                                    отменить удаление
                                </li>
                            </>
                        }

                        <li onClick={() => {setModal(0)}}>
                            <p>назад</p>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Admin;
