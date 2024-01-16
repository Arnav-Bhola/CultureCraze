import Image from "next/image";
import value1 from "../../assets/images/asia.png";
import value2 from "../../assets/images/nsamerica.png";
import value3 from "../../assets/images/europe.png";
import value4 from "../../assets/images/africa.png";

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
          <div className={styles["value"]}>
            <Image
              src={value1}
              alt='Value 1'
              className={styles["value-image"]}
            />
          </div>
          <div className={styles["value"]}>
            <Image
              src={value2}
              alt='Value 2'
              className={styles["value-image"]}
            />
          </div>
          <div className={styles["value"]}>
            <Image
              src={value3}
              alt='Value 3'
              className={styles["value-image"]}
            />
          </div>
          <div className={styles["value"]}>
            <Image
              src={value4}
              alt='Value 4'
              className={styles["value-image"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBelieve;
