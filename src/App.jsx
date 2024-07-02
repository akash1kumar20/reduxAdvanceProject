import { useEffect } from "react";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingItems from "./components/ShoppingItems";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { productSliceActions } from "../store/cartSlice";

const App = () => {
  const isVisible = useSelector((state) => state.ui.cartVisibilty);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const postData = async () => {
      try {
        let res = await axios.put(
          "https://splitwiseapp-82dbf-default-rtdb.firebaseio.com/products.json",
          cart
        );
      } catch (err) {
        console.log(err);
      }
    };
    if (cart.items.length > 0) {
      postData();
    }
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(
          "https://splitwiseapp-82dbf-default-rtdb.firebaseio.com/products.json"
        );
        dispatch(productSliceActions.replaceCart(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-slate-700 min-h-[100vh] min-w-[100vw] pt-16">
        {isVisible && <ShoppingCart />}
        <ShoppingItems />
      </div>
    </>
  );
};

export default App;
