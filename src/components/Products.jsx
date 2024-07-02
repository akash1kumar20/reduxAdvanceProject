import React from "react";
import { useDispatch } from "react-redux";
import { productSliceActions } from "../../store/cartSlice";

const DUMMY_Products = [
  {
    id: "p1",
    price: 6,
    name: "My first book",
    discription: "First book discription",
  },
  {
    id: "p2",
    price: 8,
    name: "My second book",
    discription: "Second book discription",
  },
];

const Products = () => {
  const dispatch = useDispatch();

  function addToCartHandler(item) {
    dispatch(
      productSliceActions.addItemToCart({
        id: item.id,
        name: item.name,
        price: item.price,
      })
    );
  }
  return (
    <div className="mt-6 bg-white text-black flex flex-col  p-6 rounded-md gap-6">
      {DUMMY_Products.map((item) => (
        <div className="flex gap-y-4 gap-x-24 justify-between" key={item.id}>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl">{item.name} </h3>
            <p className="text-sm">{item.discription}</p>
          </div>
          <div className="flex flex-col gap-y-4 items-center">
            <p className="bg-black text-white px-2 text-2xl rounded-xl">
              $ {item.price}
            </p>
            <button
              className="border border-blue-500 text-blue-700 px-4 py-2 rounded-lg"
              onClick={() => addToCartHandler(item)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
