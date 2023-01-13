import Link from "next/link";
import React from "react";
import DeliveryAddress from "../../components/deliveryAddress/deliveryAddress";
import OrderSummary from "../../components/orderSummary/orderSummary";
import PaymentOptions from "../../components/paymentOptions/paymentOptions";
import styles from "./checkout.module.scss";

/**
 * Render Checkout page
 * @param {*} Checkout page props
 * @returns {React.Component} renders Checkout page
 */
const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout_navWrapper}>
        <div className={styles.checkout_nav}>
          <div className={styles.checkout_nav_logo}>
            <Link href="/">
              <p>Chimoney</p>
            </Link>
          </div>
          <h1>Checkout</h1>
        </div>
      </div>
      <div className={styles.checkout_content}>
        <div className={styles.checkout_contentRight}>
          <DeliveryAddress />
          <PaymentOptions />
        </div>
        <div className={styles.checkout_contentLeft}>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
