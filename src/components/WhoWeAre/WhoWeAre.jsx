import Image from "next/image";
import styles from "./WhoWeAre.module.scss";

import image from "../../assets/images/whoweare.svg";

const WhoWeAre = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["sub-container"]}>
        <div className={styles["content"]}>
          <div className={styles["sub-heading-container"]}>
            <span className={styles["sub-heading"]}>who we are</span>
          </div>
          <h1 className={styles["heading"]}>Discover our story</h1>
          <div className={styles["text"]}>
            <p>CultureCraze is a company fueled to ignite cultural awareness and understanding.</p>
            <p>
              Our hearts sank when we discovered that there weren&apos;t any other companies
              dedicated to cultural education and addressing the challenges which arise due to
              culture shock.
            </p>
            <p>
              CultureCraze solves this problem in a convenient, engaging, and easy-to-learn manner.
            </p>
          </div>
        </div>
        <Image
          src={image}
          alt='location'
          className={styles["image"]}
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
