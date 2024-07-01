import React from "react";

const ShoppingItems = () => {
  return (
    <div className="w-fit mx-auto mt-10">
      <h2 className="text-2xl uppercase text-white text-center">
        Buy your favourite products
      </h2>
      <div className="mt-6 bg-white text-black flex justify-between p-6 rounded-md gap-x-10">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-2xl">Test </h3>
          <p className="text-sm">This is your first product - amazing!</p>
        </div>
        <div className="flex flex-col gap-y-4 items-center">
          <p className="bg-black text-white px-2 text-2xl rounded-xl">$ 6.00</p>
          <button className="border border-blue-500 text-blue-700 px-4 py-2 rounded-lg">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingItems;
