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
    <section 
      id="projects" 
      style={{
        padding: "100px 20px",
        maxWidth: "900px",
        margin: "auto",
        color: "#ffffff",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "50px", color: "#f5deb3" }}>
        Projets
      </h2>

      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px"
        }}
      >
        {projects.map((project, i) => (
          <div 
            key={i}
            style={{
              backgroundColor: "#6b3e3e",
              padding: "20px",
              borderRadius: "12px",
              transition: "transform 0.3s, background-color 0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.backgroundColor = "#8b5e5e";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#6b3e3e";
            }}
            onClick={() => window.open(project.link, "_blank")}
          >
            <h3 style={{ marginBottom: "15px", color: "#f5deb3" }}>{project.title}</h3>
            <p style={{ lineHeight: "1.6" }}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
