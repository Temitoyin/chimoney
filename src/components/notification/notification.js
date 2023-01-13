import React from "react";
import { UseAppContext } from "../../context/appContext";
import { composeClasses } from "../../utils/utils";
import styles from "./notification.module.scss";

/**
 * Renders Notification component
 * @returns {React.Component} renders Notification component
 */
const Notification = () => {
  const { message, showNotification } = UseAppContext();

  return (
    <div
      className={composeClasses(
        styles.message,
        showNotification ? styles.show : styles.hide
      )}
    >
      {message}
      <div className={styles.close} onClick={() => setShowNotification(false)}>
        <span>X</span>
      </div>
    </div>
  );
};

export default Notification;
