import './Modal.css';
import React from 'react';
const questions = [
    {
    title: '1. Организационно-правовая форма:',
    variants: ['Юридическое лицо – 350 долларов США.', 'Индивидуальный предприниматель – 200 долларов США.'],
    price: [350, 200],
  },
  {
    title: '2. Система налогообложения:',
    variants: ['Общая – 50 долларов США.приложение.', 'Упрощенная – 0 долларов США.', 'Единый налог – 0 долларов США.'],
    price: [50, 0, 0],
  },
  {
    title: '3. Количество сотрудников в штате и/или по договорам подряда:',
    variants: ['0-10 – 0 долларов США.', '11-20 – 50 долларов США.', '21-30 – 100 долларов США.', '31-40 – 150 долларов США.', '41-50 – 200 долларов США.', '51-60 – 250 долларов США.', '61-70 – 300 долларов США.', '71-80 – 350 долларов США.', '81-90 – 400 долларов США.', '91-100 – 450 долларов США.', '101 и более – 600 долларов США.'],
    price: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
  },
  {
    title: '4. Наличие внешней экономической деятельности:',
    variants: ['Отсутствует – 0 долларов США.', 'Импорт – 50 долларов США.', 'Экспорт – 50 долларов США.', 'Импорт и экспорт – 100 долларов США.'],
    price: [0, 50, 50, 100],
  },
  {
    title: '5. Наличие розничной торговли (количество кассовых аппаратов):',
    variants: ['отсутствует – 0 долларов США.', '1 – 50 долларов США.', '2 – 100 долларов США.', '3 – 150 долларов США.', '4 – 200 долларов США.', '5 – 250 долларов США.', '6 – 300 долларов США.', '7 – 350 долларов США.', '8 – 400 долларов США.', '9 – 450 долларов США.', '10 – 500 долларов США.'],
    price: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
  },
  {
    title: '6. Количество кредитных договоров:',
    variants: ['отсутствуют – 0 долларов США.', '1 – 50 долларов США.', '2 – 100 долларов США.', '3 – 150 долларов США.', '4 – 200 долларов США.', '5 – 250 долларов США.'],
    price: [0, 50, 100, 150, 200, 250],
  },
  {
    title: '7. Наличие договоров лизинга (количество предметов лизинга):',
    variants: ['отсутствуют – 0 долларов США.', '1 – 50 долларов США.', '2 – 100 долларов США.', '3 – 150 долларов США.', '4 – 200 долларов США.', '5 – 250 долларов США.'],
    price: [0, 50, 100, 150, 200, 250],
  },
  {
    title: '8. Наличие транспортных средств в пользовании:',
    variants: ['отсутствуют – 0 долларов США.', 'в наличии – 50 долларов США.'],
  },
  {
    title: '9. Необходимость проведения Исполнителем платежей с использованием технологии дистанционного банковского обслуживания:',
    variants: ['отсутствуют – 0 долларов США.', 'в наличии – 100 долларов США.'],
  },
  {
    title: '10. Количество товарных (товарно-транспортных) накладных и/или актов выполненных работ в месяц:',
    variants: ['0-400 – 0 долларов США.', '400-500 – 250 долларов США.', '500-600 – 500 долларов США.', '700-800 – 750 долларов США.', '800-900 – 1000 долларов США.', '1000 и более – 1250 долларов США.'],
  }
];

let user = {
  'name': '',
  'number': '',
  'email': '',
  'isCons': true
};

let data = () => {
  user.name = document.querySelector('#username').value;
  user.number = document.querySelector('#phone').value;
  user.email = document.querySelector('#email').value;
}

let answers = []

function Result({set}) {
  if(user.isCons = true){
    user.answers = answers;
    console.log(user);
  }
  return (
    <div className="result">
      <button onClick={() => set(false)}>Заказать бесплатную консультацию</button>
      <svg onClick={() => {set(false); answers = []}} className="close" xmlns="http://www.w3.org/2000/svg" height="1.5vw" viewBox="0 96 960 960" width="48"><path d="M249 854.739 201.261 807l231-231-231-231L249 297.261l231 231 231-231L758.739 345l-231 231 231 231L711 854.739l-231-231-231 231Z"/></svg>
    </div>
  );
}

function Game({set, step, setStep, question, onClickVariant}) {
  return (
    <>
      {step === -2 &&
        <div className="form">
            <div className="label">

                <div className="f">
                    <p>Заполните анкету, для того, чтобы с вами связался менеджер.</p>
                </div>

                <svg onClick={() => {set(false); answers = []}} className="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width="48"><path d="M249 854.739 201.261 807l231-231-231-231L249 297.261l231 231 231-231L758.739 345l-231 231 231 231L711 854.739l-231-231-231 231Z"/></svg>
            </div>

            <div>
              <input type="email" placeholder="ВВЕДИТЕ EMAIL" name="mail" id="email"/>
              <div>
                <input type="text" placeholder="ВВЕДИТЕ ИМЯ"  name="username" id="username"/>
                <input type="tel" placeholder="ВВЕДИТЕ ТЕЛЕФОН" pattern="375-[0-9]{2}"  name="tel" id="phone"/>
              </div>
            </div>

            <input onClick={() => {setStep(-1); data()}} type="submit" value="Подтвердить" />
        </div>
      }

      {step === -1 &&
          <div className="choose">

              <div className="upper">
                  <h1>Вы желаете заказать консультацию или уже знаете чего хотите от нас?</h1>
                  <svg onClick={() => {set(false); answers = []}} className="close" xmlns="http://www.w3.org/2000/svg" height="1.5vw" viewBox="0 96 960 960" width="48"><path d="M249 854.739 201.261 807l231-231-231-231L249 297.261l231 231 231-231L758.739 345l-231 231 231 231L711 854.739l-231-231-231 231Z"/></svg>
              </div>

              <div className="choice">
                  <input onClick={() => {set(false); user.isCons = false; console.log(user)}} type="submit" value="Заказать консультацию" />
                  <input onClick={() => setStep(0)} type="submit" value="Выбор услуги" />
              </div>
          </div>
      }
      
      
      {(step !== -1 && step !== -2) &&
          <>
            <div className="upper">
              <h1>{question.title}</h1>
              <svg onClick={() => {set(false); answers = []}} className="close" xmlns="http://www.w3.org/2000/svg" height="1.5vw" viewBox="0 96 960 960" width="48"><path d="M249 854.739 201.261 807l231-231-231-231L249 297.261l231 231 231-231L758.739 345l-231 231 231 231L711 854.739l-231-231-231 231Z"/></svg>
            </div>

            <ul>
              {question.variants.map((variant, index) => (
                <li onClick={() => onClickVariant(index)} className={variant}>{variant}</li>
              ))}

              <li onClick={() => setStep(step-1)}>Назад</li>

            </ul>
          </>
      }
    </>
  );
}

function Modal({setS}) {
  const [step, setStep] = React.useState(-2);
  const func = (x) => {setStep(x)};
  const question = questions[step];
  const onClickVariant = (index) => {
    console.log(step, index);
    answers[step] = index;
    setStep(step + 1);
    console.log(answers);
  }
  return (
      <div className="overlay">
        <div className="App modal">
          {step !== questions.length ? (<Game set={setS} step={step} setStep={func} question={question} onClickVariant={onClickVariant} />) : (<Result set={setS} />)}
        </div>
      </div>
  );
}

export default Modal;