import React from "react";
import Button from "../button/button";
import styles from "./quantityController.module.scss";
/**
 * Render QuantityController component
 * @param {*} QuantityController component props
 * @returns {React.Component} renders QuantityController component
 */
const QuantityController = ({
  selectedQuantity,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <div className={styles.quantityController}>
      <Button
        disabled={selectedQuantity === 1}
        title="-"
        buttonClass={styles.quantityController_buttonClass}
        onClick={() => decrementHandler()}
      />
      <p>{selectedQuantity}</p>
      <Button
        title="+"
        buttonClass={styles.quantityController_buttonClass}
        onClick={() => incrementHandler()}
      />
    </div>
  );
};

export default QuantityController;
