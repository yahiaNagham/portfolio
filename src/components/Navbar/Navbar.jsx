import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`${styles.navbar} ${
        isScrolled ? styles.scrolled : styles.transparent
      }`}
    >
      <div className={styles.navContainer}>
      
      <div className={styles.logo} onClick={() => handleMenuItemClick("home")}>
        <div className={styles.logoIcon}>N</div>
        <span className={styles.logoText}>Portfolio</span>
      </div>

  

    <ul className={styles.navList}>
  {menuItems.map((item) => (
    <li
      key={item.id}
      className={`${styles.navItem} ${activeSection === item.id ? styles.active : ""}`}
       >
      <button onClick={() => handleMenuItemClick(item.id)}>
        {item.label}
      </button>
    </li>
        ))}
     </ul>


    
    <div className={styles.socialIcons}>
  <a
    href="https://github.com/yahiaNagham"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialLink}
  >
    <FaGithub size={24} />
  </a>
  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialLink}
  >
    <FaLinkedin size={24} />
  </a>
</div>

  
   <div className={styles.mobileMenu}>
  {isOpen ? (
    <FiX
      className={styles.menuIcon}
      onClick={() => setIsOpen(false)}
    />
  ) : (
    <FiMenu
      className={styles.menuIcon}
      onClick={() => setIsOpen(true)}
    />
  )}
</div>

 {/*mobile */}
 {isOpen && (
  <div className={styles.mobileMenuItems}>
    <ul className={styles.mobileMenuList}>
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={`${styles.mobileMenuItem} ${activeSection === item.id ? styles.active : ""}`}
        >
          <button onClick={() => handleMenuItemClick(item.id)}>
            {item.label}
          </button>
        </li>
      ))}

      <div className={styles.mobileSocialIcons}>
        <a
          href="https://github.com/codingmastr"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileSocialLink}
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileSocialLink}
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </ul>
  </div>
)}


</div>
    </nav>
  );
}

export default Navbar;
