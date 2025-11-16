export default function Hero() {
  return (
    <section id="hero" className="hero" style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      background: "linear-gradient(120deg, #4b2e2e, #6b3e3e, #3b1f1f)",
      color: "#ffffff",
      padding: "0 20px"
    }}>
      <img 
        src="/ph.jpg" 
        alt="Zeynab Badji" 
        style={{
          width: "170px",
          height: "160px",
          borderRadius: "50%",
          border: "3px solid #f5deb3",
          objectFit: "cover",
          marginBottom: "20px"
        }}
      />

      <h1 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
        Salut, je suis <span style={{ color: "#f5deb3" }}>Seynabou Badji</span>
      </h1>

      <p style={{
        maxWidth: "650px",
        lineHeight: "1.6",
        fontSize: "1.1rem",
        marginBottom: "25px"
      }}>
        Passionnée par le développement web et les données, je crée des interfaces élégantes et intuitives,
        où chaque interaction raconte une histoire et chaque donnée prend vie.
      </p>

      <a 
        href="#projects" 
        className="btn" 
        style={{
          display: "inline-block",
          backgroundColor: "#f5deb3",
          color: "#4b2e2e",
          padding: "12px 25px",
          borderRadius: "8px",
          fontWeight: "600",
          textDecoration: "none",
          transition: "0.3s"
        }}
        onMouseEnter={e => e.target.style.backgroundColor = "#ffe4b5"}
        onMouseLeave={e => e.target.style.backgroundColor = "#f5deb3"}
      >
        Voir mes projets
      </a>
    </section>
  );
}
