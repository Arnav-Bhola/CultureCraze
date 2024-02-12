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
          and the challenges faced by travelers adjusting to new environments. We have created a
          free product demonstration for you!
        </p>
      </div>
      <div className={styles["quizzes"]}>
        <Quiz
          heading='Geography'
          details='Dig into Polish rivers, mountains, weather, provinces and more!'
          link='https://quizizz.com/admin/quiz/65c94acf111d93291a2c776d?searchLocale='
          image={geography}
        />
        <Quiz
          heading='Urban Cities'
          details='Learn about famous Polish cities and important locations around the country!'
          link='https://quizizz.com/admin/quiz/65c8f30d9e3aef986786e92e?searchLocale='
          image={urbanCities}
        />
        <Quiz
          heading='Culture'
          details='Familiarize yourself on Polish etiquettes, customs and cultural norms!'
          link='https://quizizz.com/admin/quiz/65c853838339c628796716c0?searchLocale='
          image={culture}
        />
        <Quiz
          heading='Food'
          details='Discover and Explore famous and delicious Polish meals and snacks!'
          link='https://quizizz.com/admin/quiz/65c95eb8f277f67d81989ecf?searchLocale='
          image={food}
        />
        <Quiz
          heading='Language'
          details='Get introduced to the Polish language and common phrases'
          link='https://quizizz.com/admin/quiz/65c8f30d9e3aef986786e92e?searchLocale='
          image={language}
        />
      </div>
    </div>
  );
};

export default LandingPage;
