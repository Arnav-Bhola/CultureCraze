import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["sub-container"]}>
        <h1 className={styles["heading"]}>Culture Craze</h1>
        <h2 className={styles["sub-heading"]}>
          discover diverse cultures | uncover cultural insights | ignite learning
        </h2>
        <div className={styles["cta"]}>
          <Link
            href='/quizzes'
            className={styles["button"]}
          >
            Get Started
          </Link>
          <Link
            href='/landing'
            className={styles["button"]}
          >
            Join our Waitlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
