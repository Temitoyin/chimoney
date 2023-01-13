import React, { useEffect, useState } from "react";
import { formatMoney, getSubtotal, getTotalCount } from "../../utils/utils";
import Button from "../button/button";
import { UseAppContext } from "../../context/appContext";
import styles from "./orderSummary.module.scss";
import Link from "next/link";

/**
 * Renders OrderSummary component
 * @returns {React.Component} renders OrderSummary component
 */
const OrderSummary = () => {
  const { initialState } = UseAppContext();
  const [subTotal, setSubTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const subTotalData = getSubtotal();
    const countValue = getTotalCount();
    if (countValue >= 0) {
      setCount(countValue);
    }
    if (subTotalData) {
      setSubTotal(subTotalData);
    }
  }, [initialState.updating]);
  return (
    <div className={styles.orderSummary}>
      <div className={styles.orderSummary_header}>
        <h1>Order Summary</h1>
        <Link href="/cart">
          <p>MODIFY CART</p>
        </Link>
      </div>
      <div className={styles.orderSummary_info}>
        <div className={styles.orderSummary_info_item}>
          <p>Items:</p>
          <p>{count}</p>
        </div>
        <div className={styles.orderSummary_info_item}>
          <p>Delivery:</p>
          <p>{formatMoney(1000)}</p>
        </div>
        <div className={styles.orderSummary_info_item}>
          <p>Subtotal:</p>
          <p>{formatMoney(subTotal)}</p>
        </div>
      </div>
      <div className={styles.orderSummary_totalWrapper}>
        <p className={styles.orderSummary_total}>Total: </p>
        <p>{formatMoney(subTotal + 1000)}</p>
      </div>
      <Button
        disabled
        wrapperClass={styles.orderSummary_buttonWrapper}
        buttonClass={styles.orderSummary_buttonClass}
        title="Pay Now"
      />
    </div>
  );
};

export default OrderSummary;
