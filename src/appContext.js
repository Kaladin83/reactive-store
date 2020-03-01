import React, { useState, useEffect } from "react";

export const appContext = React.createContext();

const ContextProvider = props => {
  const pathName = window.location.pathname;
  const path = pathName === "/" ? "/" : pathName.substr(1);

  const [activePath, setActivePath] = useState(path);
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const updateCart = order => {
    let newArray = [];
    newArray = cart.filter(p => p.productId !== order.productId);
    console.log(" [in IF] order.amount :" + order.amount);

    setCart([...newArray, order]);
  };

  const updateSubTotalCart = order => {
    if (order.amount > 1) {
      let newArray = [];
      newArray = cart.filter(p => p.productId !== order.productId);
      setCart([...newArray, order]);
    } else {
      setCart([...cart, order]);
    }

    cart.forEach((p, index) => {
      console.log(
        "index :" +
          index +
          "category :" +
          p.category +
          " | productId :" +
          p.productId +
          " | productName :" +
          p.productName +
          " | sum :" +
          p.sum +
          " | amount :" +
          p.amount
      );
    });
  };

  const deleteFromCart = id => {
    let arr = [];
    arr = cart.filter(p => p.productId !== id);
    setCart(arr);
  };

  useEffect(() => {
    console.log("In use effect of Context: ");
  }, []);

  return (
    <appContext.Provider
      value={{
        activePath,
        setActivePath,
        category,
        setCategory,
        cart,
        updateCart,
        updateSubTotalCart,
        deleteFromCart,
        message,
        setMessage
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default ContextProvider;
