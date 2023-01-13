import React, { useEffect, useState } from "react";
import CartCard from "../../components/cartCard/cartCard";
import Layout from "../../components/layout/layout";
import styles from "./cart.module.scss";
import { formatMoney, getCart, getSubtotal } from "../../utils/utils";
import { UseAppContext } from "../../context/appContext";
import Link from "next/link";
import Button from "../../components/button/button";
import { useRouter } from "next/router";

/**
 * Render Cart page
 * @param {*} Cart page props
 * @returns {React.Component} renders Cart page
 */
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const router = useRouter();
  const { initialState } = UseAppContext();

  useEffect(() => {
    let cartData = getCart();
    let subTotalData = getSubtotal();
    if (cartData) {
      setCart(cartData);
    }
    if (subTotalData) {
      setSubTotal(subTotalData);
    }
  }, [initialState.updating]);

  return (
    <Layout>
      {cart && cart.length > 0 ? (
        <div className={styles.cartWrapper}>
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
            <div className={styles.cart_subtotalInfo}>
              <h2>
                Subtotal(4 items): <span>{formatMoney(subTotal)}</span>
              </h2>
            </div>
          </div>
          <div className={styles.cart_summary}>
            <h3>
              Subtotal(4 items): <span>{formatMoney(subTotal)}</span>
            </h3>
            <Button
              title="Proceed to Checkout"
              wrapperClass={styles.cart_summary_buttonWrapper}
              buttonClass={styles.cart_summary_buttonClass}
              onClick={() => router.push("/checkout")}
            />
          </div>
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
