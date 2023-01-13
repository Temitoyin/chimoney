import React from "react";
import styles from "./deliveryAddress.module.scss";

/**
 * Renders DeliveryAddress component
 * @returns {React.Component} renders DeliveryAddress component
 */
const DeliveryAddress = () => {
  return (
    <div className={styles.deliveryAddress}>
      <div className={styles.deliveryAddress_header}>
        <h1>ADDRESS DETAILS</h1>
      </div>
      <div className={styles.deliveryAddress_userInfo}>
        <h2 className={styles.deliveryAddress_userInfo_name}>User Name</h2>
        <p className={styles.deliveryAddress_userInfo_address}>
          PLOT 11 BLOCK 21 AARE OLUYOLE IBADAN OPPOSITE VICTORY CHURCH,
          IBADAN-OLUYOLE, Oyo
        </p>
        <p className={styles.deliveryAddress_userInfo_phoneNumber}>
          +23342343234324
        </p>
      </div>
    </div>
  );
};
export default DeliveryAddress;
