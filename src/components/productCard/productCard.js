import React from "react";
import Button from "../button/button";
import Image from "next/image";
import styles from "./productCard.module.scss";
import { formatMoney } from "../../utils/utils";
import Link from "next/link";
import { UseAppContext } from "../../context/appContext";

/**
 * Render ProductCard component
 * @param {*} ProductCard component props
 * @returns {React.Component} renders ProductCard component
 */
const ProductCard = ({ name, price, productId, product }) => {
  const { addToCartFn } = UseAppContext();

  return (
    <div className={styles.productCard}>
      <Link href={`/productDetail/${productId}`}>
        <div className={styles.productCard_image}>
          <Image
            objectFit="contain"
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
          />
        </div>
      </Link>

      <p className={styles.productCard_name}>{name}</p>
      <div className={styles.productCard_price}>
        <p>{formatMoney(price)}</p>
      </div>
      <Button
        title="Add To Cart"
        wrapperClass={styles.productCard_buttonWrapper}
        buttonClass={styles.productCard_buttonClass}
        onClick={() => addToCartFn(product, "productCard")}
      />
    </div>
  );
};

export default ProductCard;
