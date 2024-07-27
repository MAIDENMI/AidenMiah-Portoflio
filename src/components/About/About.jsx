import React, { useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const slides = [
    { src: getImageUrl("about/event1.JPG"), description: "Collaborated with Kelly and Team to organize and host Leaders Unplugged Event." },
    { src: getImageUrl("about/worksimg.png"), description: "Hosted Intel Workshop at Trent University" },
    { src: getImageUrl("about/Workshop2.JPG"), description: "Hosted Intel Workshop with my Team at Trent University" },
    { src: getImageUrl("about/work2.JPG"), description: "Hosted Intel Workshop collaborating with Senior AI Engineer at Intel" },
    { src: getImageUrl("about/workshop1.JPG"), description: "Hosted Intel Workshop at Trent University" },
    { src: getImageUrl("about/collision.JPG"), description: "Attended 2024 Collision Conference in Toronto" },
    { src: getImageUrl("about/gthack.png"), description: "Participated in Hacklytics by Georgia Institute of Technology 2024" },
    { src: getImageUrl("about/westernhack.png"), description: "Participated in HackWestern 10 2023" },
    { src: getImageUrl("about/uofthack.png"), description: "Participated in UofthackXI 2024" },
    { src: getImageUrl("about/nsbehackimg.png"), description: "Participated in NSBEHacks Uoft 2024" },
    { src: getImageUrl("about/ottawahack.png"), description: "Participated in uOttahack6 2024" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Computer Science Student</h3>
              <p>
                I'm a Computer Science major at Trent University with a passion
                for software engineering. I have experience with multiple programming languages and frameworks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Clubiconn.png")} alt="Club icon" />
            <div className={styles.aboutItemText}>
              <h3>Founder & President at Trent Computer Science Club</h3>
              <p>
                Lead and manage a team and over 200 members for the club. Organized workshops, events, tech talks, and hackathons for the university
                computer science community.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ambassadorIcon.png")} alt="Ambassador icon" />
            <div className={styles.aboutItemText}>
              <h3>Intel Student Ambassador</h3>
              <p>
                Host and train students in AI technologies through workshops, hackathon and engage in research projects using Intel’s developer tools.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Businessclub.png")} alt="Business club icon" />
            <div className={styles.aboutItemText}>
              <h3>Executive Director at Trent Business Club</h3>
              <p>
                Organizing events and workshops to enhance business acumen among students.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/HackIcon.png")} alt="Hackathon icon" />
            <div className={styles.aboutItemText}>
              <h3>Executive/Tech at Hackathon Canada</h3>
              <p>
                Coordinating hackathons to promote innovation and technical skills.
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* Highlights Section */}
      <div className={styles.highlights}>
        <h3 className={styles.highlightsTitle}>Past Event Highlights</h3>
        <div className={styles.sliderContainer}>
          <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>&lt;</button>
          <div className={styles.slider}>
            {slides.slice(currentIndex, currentIndex + 5).map((slide, index) => (
              <div
                key={index}
                className={`${styles.slide}`}
              >
                <div className={styles.imageContainer}>
                  <img src={slide.src} alt={`Slide ${index + 1}`} />
                  <div className={styles.description}>{slide.description}</div>
                </div>
              </div>
            ))}
          </div>
          <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

