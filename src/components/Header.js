import React from "react";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <header className="nav">
      <div>
        <Link to="/main">
          <p className="headerp">QPICK</p>
        </Link>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", position: "relative" }}
      >
        <Link to="/cart">
          <img
            style={{ marginRight: "20px" }}
            src={"img/heart.svg"}
            alt="heart"
          />
          <img src={"img/cart.svg"} alt="cart" />{" "}
          {props.countCartItems ? (
            <button className="counter">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </Link>{" "}
      </div>
    </header>
  );
}
