import React from "react";
import Image from "./Image";

function Header({ name, price, brand, description, image }) {
  return (
    <div className="header">
      <Image image={image} />
      <div className="description">
        <h1>{name}</h1>
        <h3>{brand}</h3>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Header;
