import React from "react";
import Navigation from "../navigation/navigation";
import Notification from "../notification/notification";
import styles from "./layout.module.scss";

/**
 * Renders Layout component
 * @param {children} Layout component props
 * @returns {React.Component} renders Layout component
 */
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <Notification />
      <div className={styles.layout_children}>{children}</div>
    </div>
  );
};

export default Layout;
