import React from "react";

const ShoppinCart = () => {
  return (
    <div className="bg-black text-white px-4 py-4 w-fit mx-auto rounded-md">
      <h2 className="pe-48 text-3xl font-semibold">Your Shopping Cart</h2>
      <div className="flex justify-between items-center mt-10 bg-slate-600 px-4 font-bold text-xl rounded-md py-3">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-2xl">Test Item</h3>
          <p>x3</p>
        </div>
        <div className="flex flex-col gap-y-4 items-center">
          <p>$ 18</p>
          <div>
            <button className="font-extrabold bg-black px-2 rounded-2xl text-3xl me-3">
              -
            </button>
            <button className="font-extrabold bg-black px-2 rounded-2xl text-3xl">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppinCart;
