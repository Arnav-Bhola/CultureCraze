import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/images/logo.png";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <Link
        href='/'
        className={styles["left"]}
      >
        <Image
          className={styles["logo"]}
          src={logo}
          alt='logo'
        />
        <p className={styles["brand"]}>
          <span>Culture</span>Craze
        </p>
      </Link>
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
