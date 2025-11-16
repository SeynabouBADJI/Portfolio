export default function Navbar() {
  return (
    <nav style={{ 
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: "rgba(75, 46, 46, 0.9)", // marron foncé transparent
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 100
    }}>
      <h1 >
        Zeynab<span style={{color:"#f5deb3"}}>Dev</span>
      </h1>
      <ul style={{ display: "flex", gap: "25px", listStyle: "none" }}>
        <li><a href="#hero">Accueil</a></li>
        <li><a href="#about" >À propos</a></li>
        <li><a href="#skills" >Compétences</a></li>
        <li><a href="#projects" >Projets</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>
    </nav>
  );
}
