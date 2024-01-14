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
          text='Aarav is a freshman in New Jersey who has moved between India and the US many times in his life. He is all too familiar with the affects of culture shock, and wants to improve cultural awareness. He also has held executive positions in multiple non-profits, leading to him having extensive work experience for his age. He believes that along with Arnav, he can lead this organization to success.'
          imageFirst
          discord='iambaby_yoda'
          email='mailto:aaravsingh15.2020@gmail.com'
          instagram='https://www.instagram.com/young_yoda_2009/'
          linkedin='https://www.linkedin.com/in/aarav-singh-273870222/'
        />
        <TeamMember
          name='Arnav Bhola'
          text='Massa sapien faucibus et molestie ac. Tempus urna et pharetra pharetra massa massa ultricies. Eget magna fermentum iaculis eu non diam phasellus. In massa tempor nec feugiat nisl pretium. Eu turpis egestas pretium aenean pharetra. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed.'
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
