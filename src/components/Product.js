import React from "react";
export default function Product(props) {
  const { product, onAdd } = props;
  let pricewithdiscount = null;
  if (product.pricewithdiscount != null) {
    pricewithdiscount = product.pricewithdiscount + " ₽";
  }
  return (
    <div className="card">
      <img className="cardimg" src={product.image} alt={product.name} />
      <h3 className="cardname">{product.name}</h3>
      <div className="cardprice">{product.price} ₽</div>
      <div className="cardcount">{pricewithdiscount}</div>
      <div>
        <img className="rate" src={"img/Vector.png"} alt="" />
        {product.rate}
      </div>
      <div className="cardbuy">
        <p onClick={() => onAdd(product)}>Купить</p>
      </div>
    </div>
  );
}
