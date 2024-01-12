import WhoWeAre from "../../../components/WhoWeAre/WhoWeAre";
import TeamHighlight from "../../../components/TeamHighlight/TeamHighlight";
import WhatWeBelieve from "../../../components/WhatWeBelieve/WhatWeBelieve";

import styles from "./page.module.scss";

const AboutPage = () => {
  return (
    <div className={styles["container"]}>
      <WhoWeAre />
      <TeamHighlight />
      <WhatWeBelieve />
    </div>
  );
};

export default AboutPage;
