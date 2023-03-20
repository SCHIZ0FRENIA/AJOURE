import './Footer.css';

import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
          <ul className="row">
              <ul className="column">
                  <li className="infoF">ЗАО "АЖУР инкам"</li>
              </ul>
              <ul className="column">
                  <li className="infoF">г. Минск&nbsp;&nbsp;&nbsp;Панфилова 2 &nbsp;&nbsp;  офис 49</li>
              </ul>
              <ul className="column">
                  <li className="infoF">+375445584321</li>
              </ul>
          </ul>
      </footer>
    );
  }
}

export default Footer;
