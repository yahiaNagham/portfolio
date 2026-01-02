import styles from "./About.module.css";
import uc2Logo from "../../assets/logo-ntic.png";


export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.divider}></div>

        <p className={styles.subtitle}>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

                 <div className={styles.infoCard}>
    <h3>Welcome to My Journey</h3>
  <p>


I am <span className={styles.name}>Yahia Nagham </span>, a second-year Master’s student in Computer Engineering, passionate about building scalable applications that focus
 on user experience, with a growing interest in artificial intelligence and its modern applications. My development journey began in my
  second year of undergraduate studies, starting with the fundamentals of data structures and algorithms, which laid a strong foundation 
  for my technical growth.
 <br /><br />
  Over time, I transitioned from theoretical concepts to practical applications, mastering web technologies from front-end basics to 
full-stack development. Today, I combine academic excellence with hands-on experience and continuously strive to expand my skills, 
advance my programming abilities, and explore the potential of artificial intelligence to build smart and effective solutions.



  </p>
</div>


        <div className={styles.content}>
          {/* LEFT */}
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>My Work <span className={styles.titre}>Experience</span></h2>

            <div className={styles.card}>
              <div className={styles.icon}>⚛</div>
              <div>
                <h3>Front-End Developer – E-commerce Project (2022)</h3>
                <p>Designed and developed user interfaces (UI/UX) using HTML, CSS, JavaScript.</p>
                <p>Enhanced user experience focusing on responsiveness and usability.</p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>⚛</div>
              <div>
                <h3>Full-Stack Developer – Education Project (2022 – 2023)</h3>
                <p>Developed both frontend and backend using PHP, HTML, CSS, JS.</p>
                <p>Managed databases and integrated them with backend functionality.</p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>⚛</div>
              <div>
                <h3>Full-Stack Developer – Medical + AI Project (2023 – Present)</h3>
                <p>Built interactive frontend using Next.js with smooth user experience.</p>
                <p>Developed backend and connected it to databases for data management.</p>
                <p>Worked on AI-based project for analyzing and classifying medical data using Python and AI libraries.</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>My <span className={styles.titre}>Education</span> </h2>

            <div className={styles.card}>
                <div className={styles.icon}>
    <img src={uc2Logo} alt="University Logo" className={styles.logo} />
  </div>
              <span className={styles.date}>2025 - Present </span>
              <h3>Master 1 – Data Science – Sciences et Technologies de l’Information et de la Communication</h3>
              <h3>University Constantine 2 Abdekhamid Mehri</h3>
              <p>Focused on Advanced Artificial Intelligence, Data Analysis, and Full-Stack Development.</p>
              <p>Developing skills in AI algorithms, data processing, and problem-solving.</p>
            </div>

            <div className={styles.card}>
                <div className={styles.icon}>
    <img src={uc2Logo} alt="University Logo" className={styles.logo} />
  </div>
              <span className={styles.date}>2022 - 2025</span>
              <h3>Bachelor – Information Technology Ti (computer science)</h3>
              <h3>University Constantine 2 Abdekhamid Mehri</h3>
              <p>Focused on Mathematics, Computer Science, Algorithms, and Programming.</p>
              <p>Learned Back-End development, Frameworks, and Artificial Intelligence (AI).</p>
              <p>Completed practical academic projects:</p>
              <p>Medical + AI Project (Full-Stack).</p>
              <p>Education Platform (Full-Stack).</p>
              <p>E-commerce Project (Front-End).</p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
