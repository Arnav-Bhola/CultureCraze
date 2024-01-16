"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { db } from "../../../firebase-setup/firebase-config";
import { collection, addDoc } from "firebase/firestore";

import styles from "./page.module.scss";

import image from "../../../assets/images/landing.svg";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [emailIsValid, isEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
    if (emailRef.current) {
      isEmailValid(true);
    }
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const emailBlurHandler = () => {
    if (!emailPattern.test(email)) {
      isEmailValid(false);
    }

    if (email === "") {
      isEmailValid(true);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!emailPattern.test(email)) {
      isEmailValid(false);
      return;
    }

    setIsLoading(true);
    isEmailValid(false);

    const data = { email: email };

    const collectionRef = collection(db, "Emails");

    try {
      await addDoc(collectionRef, data);
    } catch (error) {
      alert("There was an error while adding you to the waitlist. Please try again later!");
    }

    setEmail("");
    isEmailValid(true);
    setIsLoading(false);
    alert("We have added you to our waitlist!");
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["text"]}>
        <h2 className={styles["heading"]}>Sign up now!</h2>
        <div className={styles["textcontainer"]}>
          <p className={styles["paragraph"]}>
            Welcome to CultureCraze, we&apos;re on a mission to bridge the gap caused by culture
            shock and the challenges faced by travelers adjusting to new environments.
            Unfortunately, our services aren&apos;t quite ready yet, but we&apos;re working
            tirelessly to bring you a convenient solution.{" "}
          </p>
          <p className={styles["paragraph"]}>
            Your cultural journey is important to us, and we&apos;d love to keep you in the loop.
            Simply drop your email in the form below, and be the first to experience the world of
            CultureCraze when we launch! Get ready to embark on a cultural adventure like never
            before!
          </p>
        </div>
        <form
          className={styles["form"]}
          on
        >
          <div className={styles["user-controls"]}>
            <input
              placeholder='Join our waitlist!'
              className={styles["input"]}
              ref={emailRef}
              value={email}
              onChange={emailInputHandler}
              onBlur={emailBlurHandler}
              onKeyPress={keyPressHandler}
            ></input>
            <button
              type='button'
              className={styles["submit"]}
              onClick={submitHandler}
            >
              <span>
                <svg
                  className={styles["submit-icon"]}
                  xmlns='http://www.w3.org/2000/svg'
                  height='16'
                  width='16'
                  viewBox='0 0 512 512'
                >
                  {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d='M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z' />
                </svg>
              </span>
            </button>
          </div>

          <p
            className={
              !emailIsValid ? styles["error-text"] : styles["error-text"] + " " + styles["hidden"]
            }
          >
            {isLoading ? "Loading..." : "Invalid email entered!"}
          </p>
        </form>
      </div>
      <div className={styles["graphic"]}>
        <Image
          src={image}
          alt='Waiting'
          className={styles["image"]}
        />
      </div>
    </div>
  );
};

export default LandingPage;
