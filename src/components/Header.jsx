import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../../store/uiSlice";
const Header = () => {
  const dispatch = useDispatch();
  const toggleVisibilityHandler = () => {
    dispatch(uiSliceActions.toggleVisibilty());
  };
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="bg-black fixed w-[100%] text-white h-16 flex justify-between items-center md:px-24">
      <div>
        <h1 className="text-3xl font-extrabold">ShopCart</h1>
      </div>
      <div>
        <p
          className="border border-green-500 px-6 py-1 font-semibold text-lg cursor-pointer"
          onClick={toggleVisibilityHandler}
        >
          My Cart
          <span className="ms-4 bg-green-500 px-4 rounded-xl">
            {totalQuantity}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
