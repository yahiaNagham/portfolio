import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";
import kanbanImg from "../../assets/kanban.png";
import viteImg from "../../assets/vite.png";
import reactImg from "../../assets/lab5.png";
import jestImg from "../../assets/jest.png";
import nodeImg from "../../assets/node.png";

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
      live: "#",
      git: "https://github.com/yahiaNagham/CAW_Lab7_G2_YAHIA_DOUAS",
      tech: ["React", "Vite", "Css", "Jest"],
    },
    {
      title: "Lab 6:Vite – My First React App",
      desc: "Set up a professional React development environment using Vite,the modern standard for frontend tooling. Learn how to create and export components, manage module imports/exports, follow React component conventions, and launch a minimal React app.",
      img: viteImg,
      live: "#",
      git: "https://github.com/yahiaNagham/Caw_Lab06",
      tech: ["React", "Vite", "JavaScript", "Css"],
    },
    {
      title: "Lab 5: React Components",
      desc: "Practice building React components using functional components, props, state, and events. Exercises include creating interactive buttons, counters, dynamic lists, forms for authentication, and dynamically styled div elements.",
      img: reactImg,
      live: "#",
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
