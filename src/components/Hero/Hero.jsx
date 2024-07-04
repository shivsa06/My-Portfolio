// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Shivam Saxena</h1>
        <p className={styles.description}>
          I am Full Stack Developer(MERN) having good knowledge of Data
          Structures, Algorithm and Relational Database Management System.
        </p>
        <a href="mailto:mailshivsa@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
