import Link from "next/link";

import styles from "./Card.module.scss";

const Card = ({ title, text, link, linktext }) => {
  return (
    <Link
      href={link}
      className={styles["card"]}
    >
      <div>
        <h4 className={styles["title"]}>{title}</h4>
        <p className={styles["text"]}>{text}</p>
      </div>
      <p className={styles["link"]}>
        {linktext}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className={styles["link-icon"] + " w-6 h-6"}
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
          />
        </svg>
      </p>
    </Link>
  );
};

export default Card;
