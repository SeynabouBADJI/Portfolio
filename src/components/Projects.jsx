import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personnel",
      description: "Un site web responsive pour présenter mes compétences, mes projets et mon parcours.",
      link: "#"
    },
    {
      title: "Application de Gestion",
      description: "Application web pour gérer des données utilisateurs avec Java, Spring Boot et MySQL.",
      link: "#"
    },
    {
      title: "Site E-commerce",
      description: "Projet de site e-commerce avec React.js pour le frontend et Spring Boot pour le backend.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projets</h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="project-card"
            onClick={() => window.open(project.link, "_blank")}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
