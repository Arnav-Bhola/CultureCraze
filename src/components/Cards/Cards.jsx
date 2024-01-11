import Card from "./Card";

import styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <div className={styles["container"]}>
      <Card
        title='About us'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        link='/about'
        linktext='More about us'
      />
      <Card
        title='Meet our team'
        text='Duis convallis convallis tellus id interdum velit laoreet. Id eu nisl nunc mi. Erat velit scelerisque in dictum non consectetur alon.'
        link='/team'
        linktext='Visit our team page'
      />
    </div>
  );
};

export default Cards;
