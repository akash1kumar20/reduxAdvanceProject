import React from "react";
import Products from "./Products";

const ShoppingItems = () => {
  return (
    <div className="w-fit mx-auto mt-10">
      <h2 className="text-2xl uppercase text-white text-center">
        Buy your favourite products
      </h2>
      <Products />
    </div>
  );
};

export default ShoppingItems;
