import Card from "../components/Cards/Card";

import styles from "./not-found.module.scss";

const notFound = () => {
  return (
    <div className={styles["container"]}>
      <Card
        title='Not found!'
        text="Unfortunately, the page that you were looking for doesn't exist. Feel free to contact our team for further issues"
        linktext='Back to home page'
        link='/'
      />
    </div>
  );
};

export default notFound;
