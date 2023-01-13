import React, { useEffect, useState } from "react";
import styles from "./navigation.module.scss";
import Icon from "../Icon/icon";
import { UseAppContext } from "../../context/appContext";
import { getTotalCount } from "../../utils/utils";
import Link from "next/link";

const Navigation = () => {
  const { initialState } = UseAppContext();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countValue = getTotalCount();
    if (countValue >= 0) {
      setCount(countValue);
    }
  }, [initialState.updating]);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.nav_left}>
          <div className={styles.nav_menu}>
            <Icon name="menu" />
          </div>
          <div className={styles.nav_logo}>
            <Link href="/">
              <p>Chimoney</p>
            </Link>
          </div>
        </div>
        <div className={styles.nav_search}>
          <input type="text" />
        </div>

        <div className={styles.nav_right}>
          <div className={styles.nav_right_userName}>
            <p>Hello, User</p>
          </div>
          <div className={styles.nav_right_cart}>
            <Link href="/cart">
              <div className={styles.nav_right_cartIcon}>
                <Icon name="cart" />
              </div>
            </Link>

            <div className={styles.nav_right_cartCount}>
              <p>{count}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
