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

export const addToCart = (product, type) => {
  let newCart;
  let tempQuantity;
  const totalQuantity = localStorage.getItem("totalQuantity");
  let totalParsedQuantity = JSON.parse(totalQuantity);
  const cart = localStorage.getItem("cart");
  const parsedCart = JSON.parse(cart);
  const replicatedProduct = JSON.parse(JSON.stringify(product));
  const tempProduct = {};
  if (!parsedCart) {
    localStorage.setItem("cart", JSON.stringify({}));
  }
  if (parsedCart && parsedCart[replicatedProduct.id]) {
    const currentQuantity = parsedCart[replicatedProduct.id].quantity;
    tempQuantity = parseInt(currentQuantity);
    if (replicatedProduct.quantity >= 1 && type === "productDetail") {
    } else {
      quantity += 1;
    }

    totalParsedQuantity += 1;
    replicatedProduct.quantity = quantity;
    parsedCart[replicatedProduct.id] = replicatedProduct;
    newCart = { ...parsedCart };
  } else {
    tempProduct[product.id] = replicatedProduct;
    if (tempProduct[product.id].quantity > 1) {
      quantity = tempProduct[product.id].quantity;
    } else {
      quantity = 1;
    }
    tempProduct[product.id].quantity = quantity;
    if (tempProduct[product.id].quantity > 1) {
      totalParsedQuantity += tempProduct[product.id].quantity;
    } else if (tempProduct[product.id].quantity <= 1) {
      totalParsedQuantity += 1;
    } else {
      totalParsedQuantity = 1;
    }
    newCart = { ...tempProduct, ...parsedCart };
  }
  localStorage.setItem("totalQuantity", JSON.stringify(totalParsedQuantity));
  localStorage.setItem("cart", JSON.stringify(newCart));
  return true;
};
