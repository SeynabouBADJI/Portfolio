import { FaGithub } from "react-icons/fa";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personnel",
      description:
        "Site web responsive pour présenter mes compétences, mes projets et mon parcours.",
      github: "https://github.com/TON-USERNAME/portfolio",
    },
    {
      title: "Application de Gestion",
      description:
        "Application web pour la gestion des utilisateurs avec Java, Spring Boot et MySQL.",
      github: "https://github.com/TON-USERNAME/application-gestion",
    },
    {
      title: "Site E-commerce",
      description:
        "Plateforme e-commerce développée avec React.js pour le frontend et Spring Boot pour le backend.",
      github: "https://github.com/TON-USERNAME/site-ecommerce",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projets</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub /> Voir sur GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
