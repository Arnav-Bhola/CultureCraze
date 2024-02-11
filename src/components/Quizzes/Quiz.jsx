import Image from "next/image";

import styles from "./Quiz.module.scss";

const Quiz = ({ heading, details, image, link }) => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>{heading}</h1>

      <p className={styles["details"]}>{details}</p>

      <Image
        src={image}
        alt={heading}
        className={styles["image"]}
      ></Image>

      <a
        href={link}
        className={styles["link"]}
      >
        Try Now!
      </a>
    </div>
  );
};

export default Quiz;
