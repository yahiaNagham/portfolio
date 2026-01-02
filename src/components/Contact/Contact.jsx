import React from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedinIn, 
  faTwitter, 
  faGithub, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

 function Contact() {


  return (
    <div id="contact" className={styles.container}>
      <div className={styles.wrapper}>
        
        <h1 className={styles.title}>Get In Touch</h1>
        
      <div className={styles.divider}></div>

        <p className={styles.subtitle}>
          Have a project in mind or want to collaborate? Feel free to reach out. 
          I'm always open to discussing new opportunities.
        </p>
        
        
        <div className={styles.content}>
          
          
          <div className={styles.infoSection}>
            <h3 className={styles.sectionTitle}>Contact Information</h3>
            
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className={styles.infoContent}>
                <h4>Email</h4>
                <p>yahianagham164@gmail.com</p>
              </div>
            </div>
            
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className={styles.infoContent}>
                <h4>Phone</h4>
                <p>(+213) 0796626512</p>
              </div>
            </div>
            
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className={styles.infoContent}>
                <h4>Location</h4>
                <p>Constanitine, Algeria</p>
              </div>
            </div>
            
            
            <div className={styles.connectSection}>
              <h3 className={styles.connectTitle}>Connect With Me</h3>
              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com" aria-label="LinkedIn"     
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://x.com" aria-label="Twitter"
                   target="_blank"
                   rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://github.com/yahiaNagham" aria-label="GitHub"
                   target="_blank"
                   rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.instagram.com" aria-label="Instagram"
                   target="_blank"
                   rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
          
        
          <div className={styles.formSection}>
          
            <div className={styles.slantedRectangle}></div>
            
            <form className={styles.form} 
              action="https://formspree.io/f/xpqwpjpp"
               method="POST">
              <h3 className={styles.formTitle}>Send a Message</h3>
              
              
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className={styles.inputField}
                  placeholder="Enter your name" 
        
                />
              </div>
              
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className={styles.inputField}
                  placeholder="Enter your email" 
                />
              </div>
              
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  className={styles.textareaField}
                  placeholder=" Enter your message..."
                  
                />
              </div>
              
              
              <button type="submit" className={styles.submitButton}>
                Send Message <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;