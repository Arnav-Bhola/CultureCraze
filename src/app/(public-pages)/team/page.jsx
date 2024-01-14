import TeamMember from "../../../components/TeamMember/TeamMember";

import styles from "./page.module.scss";

const TeamPage = () => {
  return (
    <div>
      <header className={styles["header"]}>
        <h1 className={styles["heading"]}>our team</h1>
      </header>
      <div className={styles["members"]}>
        <TeamMember
          name='Aarav Singh'
          text='Aarav is a freshman in New Jersey who has moved between India and the US many times in his life. He is all too familiar with the affects of culture shock, and wants to improve cultural awareness. He also has held executive positions in multiple non-profits, leading to him having extensive work experience for his age. He believes that along with Arnav, he can lead this company to success.'
          imageFirst
          discord='iambaby_yoda'
          email='mailto:aaravsingh15.2020@gmail.com'
          instagram='https://www.instagram.com/young_yoda_2009/'
          linkedin='https://www.linkedin.com/in/aarav-singh-273870222/'
        />
        <TeamMember
          name='Arnav Bhola'
          text='Arnav, a freshman in Connecticut, brings a lot to the table with his extensive international experience, having moved between India, the USA, and Canada over 10 times. This has given him firsthand insights into the challenges of adaptation, fueling his commitment to improve cultural awareness and easing the impact of culture shock.  Alongside his passion for programming, Arnav has held leadership positions in multiple non-profit organizations dedicated to education. His background and shared vision with Aarav leads him to lift this company to success. '
          imageFirst={false}
          discord='xyz.arnav.io'
          email='mailto:arnav.bholausa@gmail.com'
          github='https://github.com/Arnav-Bhola'
          linkedin='https://www.linkedin.com/in/arnav-b-a1b05b26b/'
        />
      </div>
    </div>
  );
};

export default TeamPage;
