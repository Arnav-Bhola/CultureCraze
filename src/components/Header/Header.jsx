import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["sub-container"]}>
        <h1 className={styles["heading"]}>Culture Craze</h1>
        <h2 className={styles["sub-heading"]}>
          lorem ipsum dolor sit amet | totally cool text | 100+ countries
        </h2>
        <Link
          href='/landing'
          className={styles["button"]}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Header;
