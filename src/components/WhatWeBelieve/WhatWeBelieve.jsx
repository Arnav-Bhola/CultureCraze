import Image from "next/image";
import global from "../../assets/images/global.png";

import styles from "./WhatWeBelieve.module.scss";

const WhatWeBelieve = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["sub-container"]}>
        <div className={styles["content"]}>
          <div className={styles["sub-heading-container"]}>
            <span className={styles["sub-heading"]}>what we believe</span>
          </div>
          <h1 className={styles["heading"]}>Values we live by</h1>
          <p className={styles["text"]}>
            As a company focused on forwarding <strong>YOUR</strong> cultural understanding, we
            abide by certain values. Our primary values are <strong>respect</strong> and{" "}
            <strong>integrity</strong>. We <strong>respect</strong> each culture, and aim to
            approach them from a lens of <strong>curiosity</strong>. We <strong>empathize</strong>{" "}
            with those who feel like their <strong>culture</strong> has been misrepresented, and aim
            to help them. We also put a high value on the <strong>integrity</strong> of our content,
            as well as our role in making you a <strong>global citizen</strong>.
          </p>
        </div>
        <div className={styles["values"]}>
          <Image
            src={global}
            alt='world map'
            className={styles["value-image"]}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeBelieve;
