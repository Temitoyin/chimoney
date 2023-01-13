import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import Image from "next/image";
import styles from "./productDetail.module.scss";
import Button from "../../components/button/button";
import { UseAppContext } from "../../context/appContext";
import { useRouter } from "next/router";
import { products } from "../../../mockData/mockData";
import { formatMoney } from "../../utils/utils";
import QuantityController from "../../components/quantityController/quantityController";

/**
 * Render ProductDetail page
 * @param {*} ProductDetail page props
 * @returns {React.Component} renders ProductDetail page
 */
const ProductDetail = () => {
  const { addToCartFn } = UseAppContext();
  const [product, setProduct] = useState({});
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const liveProduct = products[id - 1];
    setProduct(liveProduct);
    return () => {};
  }, [id]);

  const setQuantity = (value) => {
    setSelectedQuantity(value);
    const tempProduct = Object.assign({}, product);
    tempProduct.quantity = value;
    setProduct(tempProduct);
  };

  return (
    <Layout>
      {product && (
        <div className={styles.productDetailWrapper}>
          <div className={styles.productDetail}>
            <div className={styles.productDetail_image}>
              <Image
                objectFit="contain"
                src={product.image}
                alt={product.name}
                width={1000}
                height={1000}
              />
            </div>
            <div className={styles.productDetail_info}>
              <div className={styles.productDetail_info_name}>
                <h1>{product.name}</h1>
              </div>
              <p className={styles.productDetail_info_brand}>
                <span>Brand: </span> {product.brand}
              </p>
              <div className={styles.productDetail_info_price}>
                <p> {formatMoney(product.price)}</p>
              </div>
              <div>
                <QuantityController
                  selectedQuantity={selectedQuantity}
                  incrementHandler={() => setQuantity(selectedQuantity + 1)}
                  decrementHandler={() => setQuantity(selectedQuantity - 1)}
                />
              </div>
              <Button
                disabled={selectedQuantity === 0}
                wrapperClass={styles.productDetail_info_buttonWrapper}
                buttonClass={styles.productDetail_info_buttonClass}
                title="Buy Now"
                onClick={() => addToCartFn(product, "productDetail")}
              />
            </div>
          </div>
          <div className={styles.productDetail_description}>
            <h2>Desription</h2>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductDetail;
