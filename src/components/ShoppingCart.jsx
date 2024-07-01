import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productSliceActions } from "../../store";

const ShoppinCart = () => {
  const items = useSelector((state) => state.reduxReducer.items);
  const [productItem, setProductItem] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setProductItem(items);
  });

  const increaseItem = (item) => {
    dispatch(productSliceActions.addItemToCart(item));
  };

  const decreaseItem = (item) => {
    dispatch(productSliceActions.removeItemFromCart(item.id));
  };
  return (
    <div className="bg-black text-white px-4 py-4 w-fit mx-auto rounded-md">
      <h2 className="pe-48 text-3xl font-semibold">Your Shopping Cart</h2>
      {productItem.map((item) => (
        <div
          className="flex justify-between items-center mt-4 bg-slate-600 px-4 font-bold text-xl rounded-md py-3"
          key={item.id}
        >
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl">{item.name}</h3>
            <p>x{item.quantity}</p>
          </div>
          <div className="flex flex-col gap-y-4 items-center">
            <p>
              $ {item.totalPrice}{" "}
              <span className="text-sm">
                ( $ {item.price} / {item.quantity} item)
              </span>
            </p>
            <div>
              <button
                className="font-extrabold bg-black px-2 rounded-2xl text-3xl me-3"
                onClick={() => decreaseItem(item)}
              >
                -
              </button>
              <button
                className="font-extrabold bg-black px-2 rounded-2xl text-3xl"
                onClick={() => increaseItem(item)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppinCart;
