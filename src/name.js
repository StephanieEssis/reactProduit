import React from "react";
import product from "./product";

const Name = () => {
  console.log(product.name);
  return <div className="styleName">{product.name}</div>;
};

export default Name;
