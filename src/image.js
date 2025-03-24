import React from "react";
import product from "./product";

const Image = () => {
  return <img src={product.image} alt={product.name} className="styleImage"    width="200" 
  height="250" center/>;
};

export default Image;
