import React from "react";
import Button from "../button/button";
import styles from "./quantityController.module.scss";
const QuantityController = ({
  selectedQuantity,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <div className={styles.quantityController}>
      <Button
        disabled={selectedQuantity === 0}
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
