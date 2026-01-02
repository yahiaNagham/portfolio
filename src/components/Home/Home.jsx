import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { Typewriter } from 'react-simple-typewriter';
import styles from "./Home.module.css";
import profileImage from '../../assets/profile2.png';

function Home() {
  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.homeContainer}>
        
        
        <div className={styles.homeLeft}>
          <h1 className={styles.greeting}>Hi, I am</h1>
          <h2 className={styles.name}>Yahia Nagham</h2>
          
          <h3 className={styles.skills}>
            <span className={styles.skillsWhite}>I am a </span>
            <Typewriter
              words={["Full stack Developer", "App Developer", "UI/UX Designer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className={styles.homeText}>
            I am a full-stack developer with over 2 years of experience in building scalable web applications. 
            Skilled in both front-end and back-end development, I work with modern technologies like React, Next.js,
            and Flutter to create seamless user experiences and efficient solutions.
          </p>

          <a
            href="https://drive.google.com/drive/u/0/folders/1n4ckuKp2tl1Pq9Zl804LJDUxdMEbFQo4"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvButton}
          >
            DOWNLOAD CV
          </a>
        </div>

        
        <div className={styles.homeRight}>
          <Tilt
            className={styles.profileWrapper}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Yahia Nagham"
              className={styles.profileImage}
            />
          </Tilt>
        </div>
        
      </div>

      
    <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>2+</span>
          <span className={styles.statText}>Years of experience</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.statNumber}>10</span>
          <span className={styles.statText}>Projects completed</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.statNumber}>8+</span>
          <span className={styles.statText}>Technologies mastered</span>
        </div>
        

      </div>
      
    </section>
  );
}

export default Home;