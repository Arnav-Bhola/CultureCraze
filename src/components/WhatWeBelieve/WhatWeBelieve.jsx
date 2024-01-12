import Image from "next/image";
import value1 from "../../assets/images/value1.png";
import value2 from "../../assets/images/value2.png";
import value3 from "../../assets/images/value3.png";
import value4 from "../../assets/images/value4.png";

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
            Massa sapien faucibus et molestie ac. Tempus urna et pharetra pharetra massa massa
            ultricies. Eget magna fermentum iaculis eu non diam phasellus. In massa tempor nec
            feugiat nisl pretium. Eu turpis egestas pretium aenean pharetra. Suscipit adipiscing
            bibendum est ultricies integer quis auctor elit sed.
          </p>
        </div>
        <div className={styles["values"]}>
          <div className={styles["value"]}>
            <Image
              src={value1}
              alt='Value 1'
              className={styles["value-image"]}
            />
            <h5 className={styles["value-heading"]}>Cool Text 101</h5>
          </div>
          <div className={styles["value"]}>
            <Image
              src={value2}
              alt='Value 2'
              className={styles["value-image"]}
            />
            <h5 className={styles["value-heading"]}>Cooler Text 102</h5>
          </div>
          <div className={styles["value"]}>
            <Image
              src={value3}
              alt='Value 3'
              className={styles["value-image"]}
            />
            <h5 className={styles["value-heading"]}>Lebrooon James</h5>
          </div>
          <div className={styles["value"]}>
            <Image
              src={value4}
              alt='Value 4'
              className={styles["value-image"]}
            />
            <h5 className={styles["value-heading"]}>Double O seven!</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBelieve;
