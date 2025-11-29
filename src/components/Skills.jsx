import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython,
  FaReact, FaGitAlt, FaCode
} from "react-icons/fa";
import {
  SiDotnet, SiSpring, SiDjango, SiMysql, SiMongodb,
  SiPowerbi, SiFlutter, Si1And1
} from "react-icons/si";

import "../styles/Skills.css";

export default function Skills() {

  const languages = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <FaJsSquare /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C#", icon: <SiDotnet /> },
    { name: "Dart", icon: <SiFlutter /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "PHP", icon: <FaCode /> },
  ];

  const tools = [
    { name: "React", icon: <FaReact /> },
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "Power BI", icon: <Si1And1 /> },
  ];

  const databases = [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Oracle", icon: <FaCode /> },
    { name: "SQLite", icon: <FaCode /> },
  ];

  const cybersecurity = [
    { name: "Pentesting (Bases)", icon: <FaCode /> },
    { name: "Wireshark", icon: <FaCode /> },
    { name: "Kali Linux", icon: <FaCode /> },
    { name: "Analyse de Vulnérabilité", icon: <FaCode /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Compétences</h2>

      <SkillGrid title="Langages" items={languages} />
      <SkillGrid title="Frameworks & Technologies" items={tools} />
      <SkillGrid title="Bases de Données" items={databases} />
      <SkillGrid title="Cybersécurité" items={cybersecurity} />
    </section>
  );
}

function SkillGrid({ title, items }) {
  return (
    <div className="skill-block">
      <h3 className="skill-subtitle">{title}</h3>

      <div className="skill-grid">
        {items.map((item, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-icon">{item.icon}</div>
            <p className="skill-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
