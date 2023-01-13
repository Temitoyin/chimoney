import React, { useState } from "react";
import { paymentOptions } from "../../../mockData/mockData";
import { optimizeFonts } from "../../../next.config";
import PaymentOptionCard from "../paymentCard/paymentOptionCard";
import styles from "./paymentOptions.module.scss";

/**
 * Render PaymentOptions component
 * @param {*} PaymentOptions component props
 * @returns {React.Component} renders PaymentOptions component
 */
const PaymentOptions = () => {
  const [paymentOption, setPaymentOption] = useState("");
  return (
    <div className={styles.paymentOptions}>
      <div className={styles.paymentOptions_header}>
        <h1>PAYMENT OPTIONS</h1>
      </div>
      <div>
        {paymentOptions &&
          paymentOptions.map((option) => (
            <PaymentOptionCard
              key={option.id}
              title={option.title}
              code={option.code}
              paymentOption={paymentOption}
              setPaymentOption={setPaymentOption}
              description={option.description}
            />
          ))}
      </div>
    </div>
  );
};

export default PaymentOptions;
