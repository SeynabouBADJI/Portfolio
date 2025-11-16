import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section 
      id="contact" 
      style={{
        padding: "100px 20px",
        maxWidth: "900px",
        margin: "auto",
        textAlign: "center",
        color: "#ffffff"
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "50px", color: "#f5deb3" }}>
        Me Contacter
      </h2>

      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Vous pouvez me joindre directement via les liens ci-dessous :
      </p>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        {/* Email */}
        <a 
          href="mailto:zeynabbadji893@gmail.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#f5deb3",
            color: "#4b2e2e",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "0.3s"
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#ffe4b5"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#f5deb3"}
        >
          <MdEmail size={20} /> Envoyer un email
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/zeynabbadji" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#f5deb3",
            color: "#4b2e2e",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "0.3s"
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#ffe4b5"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#f5deb3"}
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/SeynabouBADJI" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#f5deb3",
            color: "#4b2e2e",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "0.3s"
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#ffe4b5"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#f5deb3"}
        >
          <FaGithub size={20} /> GitHub
        </a>
      </div>
    </section>
  );
}
