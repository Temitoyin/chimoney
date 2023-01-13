import React from "react";
import { composeClasses } from "../../utils/utils";
import styles from "./paymentOptionCard.module.scss";

/**
 * Render PaymentOptionCard component
 * @param {*} PaymentOptionCard component props
 * @returns {React.Component} renders PaymentOptionCard component
 */
const PaymentOptionCard = ({
  title,
  description,
  paymentOption,
  code,
  setPaymentOption,
}) => {
  return (
    <div
      className={composeClasses(
        styles.paymentOptionCard,
        paymentOption === code && styles.active
      )}
    >
      <input
        checked={paymentOption === code}
        type="radio"
        onClick={() => setPaymentOption(code)}
      />
      <div className={styles.paymentOptionCard_info}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PaymentOptionCard;
