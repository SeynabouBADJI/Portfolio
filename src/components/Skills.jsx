export default function Skills() {
  const languages = ["HTML", "CSS", "JavaScript", "Java", "Python", "C#"];
  const tools = ["React", "Spring", "Django", "MySQL", "Git", "VS Code", "Power BI"];

  return (
    <section 
      id="skills" 
      style={{
        padding: "100px 20px",
        maxWidth: "900px",
        margin: "auto",
        color: "#ffffff",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "50px", color: "#f5deb3" }}>
        Compétences
      </h2>

      <div style={{  display: "flex",  gap: "40px",  justifyContent: "center",  flexWrap: "wrap"}}>
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3 style={{ marginBottom: "20px", color: "#f5deb3" }}>Langages</h3>
          <div style={{ display: "grid", gap: "20px" }}>
            {languages.map((lang, i) => (
              <div key={i} style={{  backgroundColor: "#6b3e3e",  padding: "15px",  borderRadius: "10px",  transition: "transform 0.3s, background-color 0.3s",  cursor: "default"}}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.backgroundColor = "#8b5e5e";}}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.backgroundColor = "#6b3e3e";}}
              >
                <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>{lang}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne Outils */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3 style={{ marginBottom: "20px", color: "#f5deb3" }}>Outils & Frameworks</h3>
          <div style={{ display: "grid", gap: "20px" }}>
            {tools.map((tool, i) => (
              <div 
                key={i}
                style={{ backgroundColor: "#6b3e3e", padding: "15px", borderRadius: "10px",  transition: "transform 0.3s, background-color 0.3s",
                  cursor: "default"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.backgroundColor = "#8b5e5e";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor = "#6b3e3e";
                }}
              >
                <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
