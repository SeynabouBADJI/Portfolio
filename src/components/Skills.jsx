import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiDotnet,
  SiSpring,
  SiDjango,
  SiMysql,
  SiMongodb,
  Si4Chan,
  SiFlutter,
  SiOracle,
  SiSqlite,
  SiPhp,
  SiWireshark,
} from "react-icons/si";

import "../styles/Skills.css";

export default function Skills() {
  const skills = [
    {
      title: "Langages",
      items: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C#", icon: <SiDotnet /> },
        { name: "PHP", icon: <SiPhp /> },
      ],
    },
    {
      title: "Frameworks & Technologies",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Spring Boot", icon: <SiSpring /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Power BI", },
      ],
    },
    {
      title: "Bases de Données",
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Oracle", icon: <SiOracle /> },
        { name: "SQLite", icon: <SiSqlite /> },
      ],
    },
    {
      title: "Cybersécurité",
      items: [
        { name: "Wireshark", icon: <SiWireshark /> },
        { name: "Pentesting (bases)" },
        { name: "Kali Linux",  },
        { name: "Analyse de vulnérabilités" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Compétences</h2>

      <div className="skills-cards">
        {skills.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ group }) {
  return (
    <div className="skill-main-card">
      <h3 className="skill-main-title">{group.title}</h3>

      <ul className="skill-list">
        {group.items.map((item) => (
          <li key={item.name} className="skill-list-item">
            {item.icon && <span className="skill-list-icon">{item.icon}</span>}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
