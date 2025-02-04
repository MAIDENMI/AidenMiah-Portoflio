import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aiden Miah</h1>
        <p className={styles.description}>
          I'm a Software Engineer and CS major at Trent University.
        </p>
        <a href="mailto:aidenmiah3@gmail.com" className={styles.contactBtn}>
          Get in touch
        </a>
      </div>
      <img
        src={getImageUrl("hero/ProfileImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
