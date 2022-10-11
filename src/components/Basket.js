import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, Remove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <aside className="block">
      <p>Корзина</p>
      <div className="gridcart">
        <div className="gridcart__left">
          {cartItems.length === 0 && <div>Корзина пуста</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="cardcart">
              <img src={item.image}></img>
              <div className="cartitemname">
                {item.name}
                <br />
                <p>{item.price}₽</p>
              </div>
              <div className="cartremove">
                <img
                  onClick={() => Remove(item)}
                  src={"img/remove.svg"}
                  alt=""
                />
              </div>
              <div className="cartincdec">
                <button
                  onClick={() => onRemove(item)}
                  className="cartbuttondec"
                >
                  -
                </button>{" "}
                {item.qty}
                <button onClick={() => onAdd(item)} className="cartbuttoninc">
                  +
                </button>
              </div>
              <div className="carttotalitem">
                {item.price.toFixed(2) * item.qty} ₽
              </div>
            </div>
          ))}
        </div>
        <div className="gridcart__right">
          {cartItems.length !== 0 && (
            <>
              <div className="carditogo">
                <div className="">
                  <p>ИТОГО</p>
                </div>
                <div className="">
                  <p>₽{itemsPrice}</p>
                </div>
                <button onClick={() => alert("Покупка завершена!")}>
                  Перейти к оформлению
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
