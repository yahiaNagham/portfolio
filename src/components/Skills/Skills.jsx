import React, { useState, useEffect } from "react";
import styles from "./Skills.module.css";
import htmlLogo from '../../assets/techo/html.png';
import bootLogo from '../../assets/techo/bootstrap.png';
import cLogo from '../../assets/techo/c.png';
import cppLogo from '../../assets/techo/cpp.png';
import cssLogo from '../../assets/techo/css.png';
import figLogo from '../../assets/techo/figma.png';
import firetLogo from '../../assets/techo/firebase.png';
import gitLogo from '../../assets/techo/git.png';
import githubLogo from '../../assets/techo/github.png';
import javaLogo from '../../assets/techo/java.png';
import javascrLogo from '../../assets/techo/javascript.png';
import laravelLogo from '../../assets/techo/Laravel.png';
import materLogo from '../../assets/techo/materialui.png';
import mogLogo from '../../assets/techo/mongodb.png';
import mysqlLogo from '../../assets/techo/mysql.png';
import nextjsLogo from '../../assets/techo/nextjs.png';
import nodejsLogo from '../../assets/techo/nodejs.png';
import phpLogo from '../../assets/techo/php.png';
import postmanLogo from '../../assets/techo/postman.png';
import pythonLogo from '../../assets/techo/python.png';
import reactLogo from '../../assets/techo/reactjs.png';
import reduxLogo from '../../assets/techo/redux.png';
import tailwLogo from '../../assets/techo/tailwindcss.png';
import typescriptLogo from '../../assets/techo/typescript.png';
import vscodeLogo from '../../assets/techo/vscode.png';
import sqlLogo from '../../assets/techo/sql.png';


function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92, icon: reactLogo, type: "image" },
      { name: "HTML", level: 95, icon: htmlLogo, type: "image" },
      { name: "CSS", level: 90, icon:cssLogo, type: "image" },
      { name: "Tailwind", level: 88, icon: tailwLogo, type: "image"},
      { name: "Bootstrap", level: 85, icon: bootLogo, type: "image" },
      { name: "Next Js", level: 85, icon: nextjsLogo, type: "image"},
      { name: "materialui", level: 75, icon: materLogo, type: "image" },
      { name: "Redux", level: 75, icon: reduxLogo, type: "image" },
    ],
  },
  {
    title: "Database & Backend",
    skills: [
      { name: "SQL", level: 85, icon: sqlLogo, type: "image" },
      { name: "MySQL", level: 82, icon: mysqlLogo, type: "image" },
      { name: "Firebase", level: 82, icon: firetLogo, type: "image" },
      { name: "MongoDB", level: 80, icon:mogLogo, type: "image" },
      { name: "Node.js", level: 88, icon: nodejsLogo, type: "image"},
      { name: "Laravel", level: 88, icon: laravelLogo, type: "image"},
    ],
  },
    {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 85, icon: cLogo, type: "image" },
      { name: "C++", level: 90, icon: cppLogo, type: "image" },
      { name: "Java", level: 80, icon: javaLogo, type: "image" },
      { name: "JavaScript", level: 95, icon: javascrLogo, type: "image" },
      { name: "Python", level: 88, icon: pythonLogo, type: "image" },
      { name: "Php", level: 88, icon: phpLogo, type: "image" },
      { name: "Typescript", level: 88, icon: typescriptLogo, type: "image" },
    ],
  },

  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90, icon: gitLogo, type: "image" },
      { name: "GitHub", level: 92, icon: githubLogo, type: "image" },
      { name: "VS Code", level: 95, icon: vscodeLogo, type: "image" },
      { name: "Figma", level: 78, icon: figLogo, type: "image" },
      { name: "Postman", level: 78, icon: postmanLogo, type: "image" },
    ],
  },
  
];

  const SkillBar = ({ skill, delay }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }, [skill.level, delay]);

    const renderIcon = () => {
      if (skill.type === "image") {
        return (
          <img 
            src={skill.icon} 
            alt={`${skill.name} logo`} 
            className={styles.skillImage}
          />
        );
      } 

    };

    return (
      <div className={styles.skillItem}>
        <div className={styles.skillHeader}>
          <div className={styles.skillName}>
            {renderIcon()}
            <span>{skill.name}</span>
          </div>
          <span className={styles.skillPercentage}>{skill.level}%</span>
        </div>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${animatedLevel}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div id="skills" className={styles.skillsContainer}>
      <div className={styles.contentWrapper}>
      
        <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
          <h1 className={styles.title}> Skills</h1>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            This section highlights the technologies and tools I use to design, develop
            and deliver modern, efficient, and scalable digital solutions.
          </p>
        </div>

        
        <div className={styles.skillsGrid}>
          {categories.map((category, idx) => (
            <div
              key={category.title}
              className={`${styles.skillCard} ${isVisible ? styles.skillCardVisible : ''}`}
              style={{ transitionDelay: `${0.6 + idx * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h2 className={styles.cardTitle}>{category.title}</h2>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={600 + idx * 150 + skillIdx * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;