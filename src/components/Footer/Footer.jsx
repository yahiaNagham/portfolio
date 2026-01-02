import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
         <div className={styles.contactInfo}>
          <h3>Yahia Nagham</h3>
        </div>

        
        <div className={styles.navLinks}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        
        <div className={styles.copyRight}>
          <p>© {new Date().getFullYear()} Yahia Nagham. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
