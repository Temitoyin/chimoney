import React from "react";
import Layout from "../../components/layout/layout";
import styles from "./productListing.module.scss";

import { products } from "../../../mockData/mockData";
import ProductCard from "../../components/productCard/productCard";

/**
 * Render ProductListing page
 * @returns {React.Component} renders ProductListing page
 */
const ProductListing = () => {
  return (
    <Layout>
      <div className={styles.productListing}>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            name={product.name}
            price={product.price}
            productId={product.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default ProductListing;
