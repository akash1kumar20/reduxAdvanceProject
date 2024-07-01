import React from "react";

const Header = () => {
  return (
    <div className="bg-black text-white h-16 flex justify-between items-center md:px-24">
      <div>
        <h1 className="text-3xl font-extrabold">ShopCart</h1>
      </div>
      <div>
        <p className="border border-green-500 px-6 py-1 font-semibold text-lg">
          My Cart <span className="ms-4 bg-green-500 px-4 rounded-xl">1</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
