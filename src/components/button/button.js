import React from "react";
import { composeClasses } from "../../utils/utils";
import { UseAppContext } from "../layout/layout";
import styles from "./button.module.scss";

/**
 * Render Button component
 * @param {*} button component props
 * @returns {React.Component} renders button component
 */
const Button = ({ buttonClass, disabled, wrapperClass, title, onClick }) => {
  return (
    <div className={wrapperClass}>
      <button
        disabled={disabled}
        className={composeClasses(
          buttonClass,
          styles.button,
          disabled && styles.disabled
        )}
        onClick={(val) => onClick(val)}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
