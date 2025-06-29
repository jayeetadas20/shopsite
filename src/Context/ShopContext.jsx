import React, { createContext, useState } from "react";
import AllProduct_data from "../Components/Assets/AllProductsData";

export const ShopContext = createContext(null);

let getDefaultCart = () => {
  let cart = {};
  AllProduct_data.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = AllProduct_data.find(
          (product) => Number(product.id) === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.newPrice * cartItem[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const ContextValue = {
    getTotalCartItem,
    getTotalCartAmount,
    AllProduct_data,
    cartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
