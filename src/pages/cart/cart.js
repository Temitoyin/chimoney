import React, { useEffect, useState } from "react";
import CartCard from "../../components/cartCard/cartCard";
import Layout from "../../components/layout/layout";
import { products } from "../../../mockData/mockData";
import styles from "./cart.module.scss";
import { getCart } from "../../utils/utils";
import { UseAppContext } from "../../context/appContext";
import Link from "next/link";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const { initialState } = UseAppContext();

  useEffect(() => {
    let cartData = getCart();
    if (cartData) {
      setCart(cartData);
    }
  }, [initialState.updating]);

  return (
    <Layout>
      {cart && cart.length > 0 ? (
        <div className={styles.cart}>
          <>
            <div className={styles.cart_header}>
              <h1>Shopping Cart</h1>
            </div>
            <div>
              {cart &&
                cart.length > 0 &&
                cart.map((product) => (
                  <CartCard key={product.id} product={product} />
                ))}
            </div>
          </>
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h2>Your Cart Is Empty</h2>
          <p>Please go to the product listing page and add to cart</p>
          <Link href="/" className={styles.emptyState_link}>
            Listing
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
