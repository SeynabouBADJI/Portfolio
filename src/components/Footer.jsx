import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer 
      style={{
        padding: "20px 0",
        textAlign: "center",
        backgroundColor: "#3b1f1f",
        color: "#f5deb3",
        marginTop: "50px"
      }}
    >
      <p>© 2025 - Réalisé par Zeynab Badji</p>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "10px" }}>
        <a 
          href="https://www.linkedin.com/in/zeynabbadji" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "#f5deb3", fontSize: "1.2rem", transition: "0.3s" }}
          onMouseEnter={e => e.currentTarget.style.color = "#ffe4b5"}
          onMouseLeave={e => e.currentTarget.style.color = "#f5deb3"}
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/zeynabbadji" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "#f5deb3", fontSize: "1.2rem", transition: "0.3s" }}
          onMouseEnter={e => e.currentTarget.style.color = "#ffe4b5"}
          onMouseLeave={e => e.currentTarget.style.color = "#f5deb3"}
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
