import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "./Basket";
import Main from "./Main";
import NotFound from "./NotFound";

const AppRouter = ({ products, onAdd, cartItems, onRemove, Remove }) => {
  return (
    <Routes>
      <Route
        path={"/main"}
        element={<Main products={products} onAdd={onAdd} />}
        exact={true}
      ></Route>
      <Route
        path={"/cart"}
        element={
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            Remove={Remove}
          />
        }
        exact={true}
      ></Route>
      <Route path={"*"} element={<NotFound />} exact={true}></Route>
    </Routes>
  );
};

export default AppRouter;
