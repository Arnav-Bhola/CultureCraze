import Image from "next/image";

import TeamCard from "../Cards/TeamCard";

import arnav from "../../assets/images/arnav.jpg";
import aarav from "../../assets/images/aarav.jpg";

import styles from "./TeamHighlight.module.scss";

const TeamHighlight = () => {
  return (
    <div className={styles["container"]}>
      <TeamCard />
      <div className={styles["images"]}>
        <div className={styles["image"]}>
          <Image
            src={arnav}
            alt='arnav'
          />
        </div>
        <div className={styles["image"]}>
          <Image
            src={aarav}
            alt='aarav'
          />
        </div>
      </div>
    </div>
  );
};

export default TeamHighlight;
