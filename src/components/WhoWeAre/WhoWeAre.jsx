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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              Morbi tincidunt ornare massa eget egestas purus viverra. Vitae semper quis lectus
              nulla at volutpat diam ut. Congue eu consequat ac felis donec. Amet porttitor eget
              dolor morbi non arcu risus quis
            </p>
            <p>Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh.</p>
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
