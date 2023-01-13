import React, { Fragment } from "react";

/**
 * Compose a number of styles together easily
 * @param {String} styles Classes/styles to be applied
 * @returns {String} Combined classes
 */
export const composeClasses = (...styles) => {
  let classes = "";

  styles.forEach((arg) => {
    if (arg) classes += `${arg} `;
  });

  return classes.trim();
};

/**
 * Return a user-friendly format for a number
 * @param {Number} number Passed number
 * @returns {String} Formatted number string
 */
export const formatNumber = (number) => {
  if ((!number && number !== 0) || isNaN(number)) {
    return "";
  }

  return number.toLocaleString();
};

/**
 * Format a given number to a currency format
 * @param {Number} price The given price
 * @returns {String} Formatted price
 */
export const formatMoney = (price) => {
  if (!price && price !== 0) {
    return "";
  }

  return (
    <Fragment>
      <span
        style={{
          fontFamily: "sans-serif",
          marginRight: "1px",
        }}
      >
        &#x20A6;
      </span>
      {formatNumber(price)}
    </Fragment>
  );
};

// Cart Utils
/**
 * Add a given product to local storage cart
 * @param {Object} product The prodcut to be added to cart
 * @param {string} type The variation of where the method was called
 * @returns {boolean} Truthy value after completion
 */
export const addToCart = (product, type) => {
  let quantity;
  let newCart;
  const totalQuantity = localStorage.getItem("totalQuantity");
  let totalParsedQuantity = JSON.parse(totalQuantity);
  const cart = localStorage.getItem("cart");
  const parsedCart = JSON.parse(cart);
  const replicatedProduct = Object.assign({}, product);
  const tempProduct = {};
  if (!parsedCart) {
    localStorage.setItem("cart", JSON.stringify({}));
  }
  if (parsedCart && parsedCart[replicatedProduct.id]) {
    const currentQuantity = parsedCart[replicatedProduct.id].quantity;
    quantity = parseInt(currentQuantity);
    if (replicatedProduct.quantity >= 1 && type === "productDetail") {
      quantity += replicatedProduct.quantity;
      totalParsedQuantity += replicatedProduct.quantity;
    } else {
      quantity += 1;
      totalParsedQuantity += 1;
    }
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

/**
 * Remove a given product from local storage cart
 * @param {Object} product The prodcut to be added to cart
 * @returns {boolean} Truthy value after completion
 */
export const removeItem = (product) => {
  const totalCount = localStorage.getItem("totalQuantity");
  const parsedTotalCount = JSON.parse(totalCount);
  const cart = localStorage.getItem("cart");
  const parsedCart = JSON.parse(cart);
  const availableQuantity = parsedCart[product.id].quantity;
  const newValue = parsedTotalCount - availableQuantity;
  delete parsedCart[product.id];
  localStorage.setItem("totalQuantity", JSON.stringify(newValue));
  localStorage.setItem("cart", JSON.stringify(parsedCart));
  return true;
};

/**
 * Increment a given product's quantity within the local storage cart
 * @param {Object} product The prodcut to be added to cart
\ * @returns {boolean} Truthy value after completion
 */
export const incrementCart = (product) => {
  const totalCount = localStorage.getItem("totalQuantity");
  let parsedTotalCount = JSON.parse(totalCount);
  const cart = localStorage.getItem("cart");
  const parsedCart = JSON.parse(cart);
  let availableQuantity = parsedCart[product.id].quantity;
  availableQuantity += 1;
  parsedTotalCount += 1;
  parsedCart[product.id].quantity = availableQuantity;
  localStorage.setItem("cart", JSON.stringify(parsedCart));
  localStorage.setItem("totalQuantity", JSON.stringify(parsedTotalCount));
  return true;
};

/**
 * decrement a given product's quantity within the local storage cart
 * @param {Object} product The prodcut to be added to cart
\ * @returns {boolean} Truthy value after completion
 */
export const decrementCart = (product) => {
  const totalCount = localStorage.getItem("totalQuantity");
  let parsedTotalCount = JSON.parse(totalCount);
  const cart = localStorage.getItem("cart");
  const parsedCart = JSON.parse(cart);
  let availableQuantity = parsedCart[product.id].quantity;
  availableQuantity -= 1;
  parsedTotalCount -= 1;
  parsedCart[product.id].quantity = availableQuantity;
  localStorage.setItem("cart", JSON.stringify(parsedCart));
  localStorage.setItem("totalQuantity", JSON.stringify(parsedTotalCount));
  return true;
};

/**
 * Get cart data from local storage
\ * @returns {array} Formated array of cart items;
 */
export const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (!cart) {
    return;
  }
  const parsedCart = JSON.parse(cart);
  const cartData = Object.values(parsedCart);
  return cartData;
};

/**
 * Get total count of products from cart local storage
\ * @returns {number} Formated total count
 */
export const getTotalCount = () => {
  const totalCount = localStorage.getItem("totalQuantity");
  if (!totalCount) {
    return;
  }
  const parsedTotalCount = JSON.parse(totalCount);
  return parsedTotalCount;
};

/**
 * Get product subtotal of cart items
\ * @returns {number} Formated total count
 */
export const getSubtotal = () => {
  let count = 0;
  const cart = localStorage.getItem("cart");
  const parsedCart = JSON.parse(cart);
  const cartData = Object.values(parsedCart);

  cartData &&
    cartData.map((product) => {
      const price = product && product.quantity * product.price;
      count += price;
    });
  return count;
};
/**
 * Get product quantitiy of a single product from cart local storage
\ * @returns {number} Formated total count
 */
export const getProductCount = (product) => {
  let productQuantity;
  const cart = localStorage.getItem("cart");
  const parsedCart = JSON.parse(cart);
  const productValue = parsedCart[product.id];
  if (productValue) {
    productQuantity = parsedCart[product.id].quantity;
  }

  return productQuantity;
};
