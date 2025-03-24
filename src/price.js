import React from "react";
import product from "./product";

const Price = () => {
  return (
    <div className="stylePrice">
      {product.price} <span className="text-black">FCFA</span>
    </div>
  );
};

export default Price;
