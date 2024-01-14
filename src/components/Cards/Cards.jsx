import Card from "./Card";

import styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <div className={styles["container"]}>
      <Card
        title='About us'
        text='CultureCraze is a company that  addresses the lack of cultural awareness prevalent today in a convenient, engaging, and easy-to-learn manner.'
        link='/about'
        linktext='More about us'
      />
      <Card
        title='Meet our team'
        text='Meet our team of dedicated individuals, passionate about cultural education. Join us on our journey to explore and learn together.'
        link='/team'
        linktext='Visit our team page'
      />
    </div>
  );
};

export default Cards;
