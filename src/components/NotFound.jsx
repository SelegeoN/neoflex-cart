import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div style={{ minHeight: "75vh" }}>
      ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ!!1!!1
      <Link to="/main"> ПЕРЕХОД К ГЛАВНОЙ</Link>
    </div>
  );
};

export default NotFound;
