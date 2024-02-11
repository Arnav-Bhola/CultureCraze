"use client";

import styles from "./page.module.scss";

import Quiz from "../../../components/Quizzes/Quiz";

import urbanCities from "../../../assets/images/quizzes/urban-cities.jpeg";
import language from "../../../assets/images/quizzes/language.jpeg";
import geography from "../../../assets/images/quizzes/geography.jpeg";
import food from "../../../assets/images/quizzes/food.jpeg";
import culture from "../../../assets/images/quizzes/culture.jpg";

const LandingPage = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["text"]}>
        <h1 className={styles["heading"]}>Try a quiz!</h1>
        <p className={styles["paragraph"]}>
          Welcome to CultureCraze, we&apos;re on a mission to bridge the gap caused by culture shock
          and the challenges faced by travelers adjusting to new environments. Unfortunately, our
          services aren&apos;t quite ready yet, but we&apos;re working tirelessly to bring you a
          convenient solution.{" "}
        </p>
      </div>
      <div className={styles["quizzes"]}>
        <Quiz
          heading='Geography'
          details='Dig into Polish rivers, mountains, weather, provinces and more!'
          link=''
          image={geography}
        />
        <Quiz
          heading='Urban Cities'
          details='Learn about famous Polish cities and important locations around the country!'
          link=''
          image={urbanCities}
        />
        <Quiz
          heading='Culture'
          details='Familiarize yourself on Polish etiquettes, customs and cultural norms!'
          link=''
          image={culture}
        />
        <Quiz
          heading='Food'
          details='Discover and Explore famous and delicious Polish meals and snacks!'
          link=''
          image={food}
        />
        <Quiz
          heading='Language'
          details='Get introduced to the Polish language and common phrases'
          link=''
          image={language}
        />
      </div>
    </div>
  );
};

export default LandingPage;
