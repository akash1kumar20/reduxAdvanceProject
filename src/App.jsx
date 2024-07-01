import React from "react";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingItems from "./components/ShoppingItems";

const App = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-700 min-h-[100vh] min-w-[100vw] pt-4">
        <ShoppingCart />
        <ShoppingItems />
      </div>
    </>
  );
};

export default App;
