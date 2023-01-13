import React, { useEffect, createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import {
  addToCart,
  decrementCart,
  incrementCart,
  removeItem,
} from "../utils/utils";

const AppContext = createContext();
export const UseAppContext = () => {
  return useContext(AppContext);
};
export const appContext = () => {
  return <div>appContext</div>;
};
export const AppContextProvider = (props) => {
  const router = useRouter();
  const [updating, setUpdating] = useState(true);
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  let initialState = { updating: updating };

  const addToCartFn = (product, type) => {
    const addProduct = addToCart(product, type);
    if (addProduct) {
      setUpdating((updating) => !updating);
      setNotifcation("Product Successfully Added");
    }
    if (type === "productDetail") {
      setTimeout(() => {
        router.push("/cart");
      }, 2000);
    }
  };

  const removeItemFn = (product) => {
    const removeItemValue = removeItem(product);
    if (removeItemValue) {
      setUpdating((updating) => !updating);
      setNotifcation("Product Successfully Removed");
    }
  };

  const incrementItemFn = (product) => {
    const increment = incrementCart(product);
    if (increment) {
      setUpdating((updating) => !updating);
    }
  };

  const decrementItemFn = (product) => {
    const decrement = decrementCart(product);
    if (decrement) {
      setUpdating((updating) => !updating);
    }
  };
  const setNotifcation = (message) => {
    setMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setMessage("");
      setShowNotification(false);
    }, 2000);
  };

  return (
    <AppContext.Provider
      value={{
        initialState,
        addToCartFn,
        removeItemFn,
        incrementItemFn,
        decrementItemFn,
        message,
        showNotification,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
