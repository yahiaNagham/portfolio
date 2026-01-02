import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";
import kanbanImg from "../../assets/kanban.png";
import viteImg from "../../assets/vite.png";
import reactImg from "../../assets/lab5.png";
import jestImg from "../../assets/jest.png";
import nodeImg from "../../assets/node.png";
import githubdetLogo from '../../assets/github_det.png';
import health from '../../assets/health.png';
import cars from '../../assets//cars.png';
import taskremLogo from '../../assets/emaster.png'

function Work() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    
    {
      title: "Lab 7: Kanban Board",
      desc: `Build a functional Kanban Board to manage tasks across different statuses ("To Do", "In Progress", "Done") 
       using modern React patterns including component architecture, state management, and complex state logic for moving tasks
       between columns.`,
      img: kanbanImg,
      live: "https://cawlab7.vercel.app/",
      git: "https://github.com/yahiaNagham/CAW_Lab7_G2_YAHIA_DOUAS",
      tech: ["React", "Vite", "Css", "Jest"],
    },
    {
      title: "Lab 6:Vite – My First React App",
      desc: "Set up a professional React development environment using Vite,the modern standard for frontend tooling. Learn how to create and export components, manage module imports/exports, follow React component conventions, and launch a minimal React app.",
      img: viteImg,
      live: "https://cawlab06.vercel.app/",
      git: "https://github.com/yahiaNagham/Caw_Lab06",
      tech: ["React", "Vite", "JavaScript", "Css"],
    },
    {
      title: "Lab 5: React Components",
      desc: "Practice building React components using functional components, props, state, and events. Exercises include creating interactive buttons, counters, dynamic lists, forms for authentication, and dynamically styled div elements.",
      img: reactImg,
      live: "https://cawlabs05.vercel.app/",
      git: "https://github.com/yahiaNagham/Caw_Labs05",
      tech: ["React", "JavaScript", "Css"],
    },
        {
      title: "Lab 4: Unit Testing in JavaScript",
      desc: "Learn how to write and run unit tests on JavaScript modules using Jest. Exercises cover creating test cases for array manipulation functions, string operations, and importing/exporting modules. Understand the importance of testing for code reliability, maintainability, and quality.",
      img: jestImg,
      live: "#",
      git: "https://github.com/yahiaNagham/Caw_Lap3_Nodejs",
      tech: ["Jest", "JavaScript", "Node.js / NPM"],
    },
            {
      title: "Lab 3: Node.js & NPM",
      desc: "Introduction to Node.js as a JavaScript runtime for server-side development and NPM as a package manager. Exercises include creating and importing modules, using built-in Node modules (fs, http, etc.), installing NPM packages, and writing scripts to read, write, and manipulate files.",
      img: nodeImg,
      live: "#",
      git: "https://github.com/yahiaNagham/Caw_Labs4",
      tech: ["Node.js", "JavaScript", "NPM"],
    },
    {
      title: "Health AI",
      desc: "HealthAI is a web-based medical platform that integrates artificial intelligence to assist in the analysis of medical examinations.The project allows users to upload medical scan images (such as chest X-rays or CT scans), which are then analyzed using deep learning models to detect potential diseases.",
      img: health,
      live: "#",
      git: "https://github.com/yahiaNagham/haelth-ai",
      tech: [ "Node.js", "Prisma", "CNN", "JavaScript","Next js"],
    },
    {
      title: "Cars",
      desc: "This project is a web-based platform for buying and selling cars, where users can post listings or search for vehicles based on criteria such as brand, model, price, and location. The platform includes user accounts, detailed car profiles, and communication features to facilitate smooth transactions between buyers and sellers.",
      img: cars,
      live: "#",
      git: "https://github.com/yahiaNagham/cars",
      tech: ["php","phpmyAdmin", "HTML", "CSS", "JavaScript"],
    },
      {
      title: "E_Master",
      desc: "e-Master is a web application designed for managing final-year projects (PFE) within universities. The system facilitates communication and organization between students, supervising teachers, and the administration by providing a centralized platform for project proposal submission, supervision tracking, document sharing, deadline management, and evaluation processes.",
      img: taskremLogo,
      live: "#",
      git: "https://github.com/yahiaNagham/e-master1",
      tech: ["Html", "Css", "Php", "PhpmyAdmin"],
    },
        {
      title: "Trouve Ton Labo",
      desc: "Trouve ton labo is a web application designed to facilitate the search for medical analysis laboratories based on the user’s location. The project allows users to select their wilaya (region) and exact position in order to display a list of available laboratories in their area, along with essential information such as address, contact details, and available services. The platform aims to simplify access to nearby laboratories .",
      img: githubdetLogo,
      live: "#",
      git: "https://github.com/yahiaNagham/club",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
    },

  ];

  return (
    <section id="projects" className={styles.work}>
      <div className={styles.header}>
        <h2>
          My <span>Projects</span>
        </h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.card} ${hoveredIndex === index ? styles.hovered : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedProject(project)}
          >
            <div className={styles.imageBox}>
              <img src={project.img} alt={project.title} />
              <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className={styles.techList}>
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className={styles.buttons}>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
                <a href={project.git} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedProject(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className={styles.modalImage}
            />

            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.desc}</p>

            <div className={styles.techList}>
              {selectedProject.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className={styles.modalButtons}>
              <a href={selectedProject.git} target="_blank" rel="noreferrer">
                View Code
              </a>
              <a href={selectedProject.live} target="_blank" rel="noreferrer">
                View Live
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Work;
