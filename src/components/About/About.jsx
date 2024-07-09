// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with a proven track record in
                designing and developing highly responsive and optimized
                websites that deliver exceptional user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I am a backend developer with experience in designing and
                implementing efficient and scalable server-side solutions,
                ensuring robust performance and seamless functionality for web
                applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Version Control</h3>
              <p>
                Proficient in using Git for version control, GitHub for
                collaborative software development, and project management,
                ensuring efficient team collaboration and code versioning.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>RDBMS</h3>
              <p>
                I can work with databases that support SQL, utilizing MySQL for
                efficient data management and enhanced performance in web
                applications, focusing on database normalization techniques and
                transaction & concurrency control.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
