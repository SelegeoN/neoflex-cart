import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd } = props;

  const headp = products.filter(function (cat) {
    return cat.category == "headphones";
  });
  const wheadp = products.filter(function (cat) {
    return cat.category == "wheadphones";
  });
  return (
    <main className="block">
      <p className="mainp">Наушники</p>
      <div className="grid">
        {headp.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
      <p className="mainp">Беспроводные наушники</p>
      <div className="grid">
        {wheadp.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
