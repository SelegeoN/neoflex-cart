import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/main">
          <p style={{ marginLeft: "10px" }} className="headerp">
            QPICK
          </p>
        </Link>
      </div>
      <ul className="ulfirst">
        <li>Избранное</li>
        <li>Корзина</li>
        <li>Контакты</li>
      </ul>
      <div className="ulsec">
        <p>Условия сервиса</p>
        <ul>
          <li>
            <img src={"img/yazik.svg"} alt="" />
          </li>
          <li>Каз</li>
          <li className="active">Рус</li>
          <li>Eng</li>
        </ul>
      </div>
      <div className="ulthird">
        <ul>
          <li>
            <img src={"img/VK.svg"} alt="vk" />
          </li>
          <li>
            <img src={"img/Telegram.svg"} alt="tg" />
          </li>
          <li>
            <img src={"img/Whatsapp.svg"} alt="whatsapp" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
