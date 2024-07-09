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
          I am a dedicated and skilled software developer with a strong
          foundation in C/C++ programming, data structures, and algorithms. My
          technical expertise extends to RDBMS and JavaScript, along with a
          specialization in web development using the MERN stack. I am
          proficient in creating responsive and dynamic web applications,
          leveraging frameworks like Bootstrap to enhance user interfaces.
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
