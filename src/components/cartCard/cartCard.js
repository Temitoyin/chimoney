import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../button/button";
import styles from "./cartCard.module.scss";
import { formatMoney, getProductCount } from "../../utils/utils";
import { UseAppContext } from "../../context/appContext";
import QuantityController from "../quantityController/quantityController";

const CartCard = ({ product }) => {
  const { initialState, removeItemFn, incrementItemFn, decrementItemFn } =
    UseAppContext();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const countValue = getProductCount(product);
    if (countValue >= 0) {
      setCount(countValue);
    }
  }, [initialState.updating, product]);

  return (
    <div className={styles.cartCard}>
      <div className={styles.cartCard_image}>
        <Image
          objectFit="contain"
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
        />
      </div>
      <div className={styles.cartCard_info}>
        <div className={styles.cartCard_info_top}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>
            {formatMoney(product.quantity * product.price)}
          </p>
        </div>
        <p className={styles.cartCard_info_seller}>
          <span>Sold By: </span>
          {product.seller}
        </p>
        <div className={styles.cartCard_info_bottom}>
          <div className={styles.cartCard_info_bottomQuantity}>
            <QuantityController
              selectedQuantity={count}
              incrementHandler={() => incrementItemFn(product)}
              decrementHandler={() => decrementItemFn(product)}
            />
          </div>
          <Button
            wrapperClass={styles.cartCard_info_bottomButtonWrapper}
            buttonClass={styles.cartCard_info_bottomButtonClass}
            title="Remove"
            onClick={() => removeItemFn(product)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
