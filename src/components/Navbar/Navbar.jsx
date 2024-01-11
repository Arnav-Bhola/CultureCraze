import Link from "next/link";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["left"]}>
        <h3 className={styles["brand"]}>
          <span>Culture</span>Craze
        </h3>
      </div>
      <div className={styles["links"]}>
        <Link
          className={styles["link"]}
          href='/about'
        >
          About
        </Link>
        <Link
          className={styles["link"]}
          href='/team'
        >
          Team
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
