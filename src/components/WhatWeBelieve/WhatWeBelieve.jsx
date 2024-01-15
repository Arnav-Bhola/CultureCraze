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
            abide by certain values. Our primary values are respect and integrity. We respect each
            culture, and aim to approach them from a lens of curiosity. We empathize with those who
            feel like their culture has been misrepresented, and aim to help them. We also put a
            high value on the integrity of our content, as well as our role in making you a global
            citizen.
          </p>
        </div>
        <div className={styles["values"]}>
          <div className={styles["value"]}>
            <Image
              src={value1}
              alt='Value 1'
              className={styles["value-image"]}
            />
            <h5 className={styles["value-heading"]}>Respect</h5>
          </div>
          <div className={styles["value"]}>
            <Image
              src={value2}
              alt='Value 2'
              className={styles["value-image"]}
            />
            <h5 className={styles["value-heading"]}>Integrity</h5>
          </div>
          <div className={styles["value"]}>
            <Image
              src={value3}
              alt='Value 3'
              className={styles["value-image"]}
            />
            <h5 className={styles["value-heading"]}>Empathy</h5>
          </div>
          <div className={styles["value"]}>
            <Image
              src={value4}
              alt='Value 4'
              className={styles["value-image"]}
            />
            <h5 className={styles["value-heading"]}>Global Citizenship</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBelieve;
