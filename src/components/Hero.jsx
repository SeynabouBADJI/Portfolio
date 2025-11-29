import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">

      <img 
        src="/ph.jpg" 
        alt="Zeynab Badji" 
        className="hero-img"
      />

      <h1 className="hero-title">
        Salut, je suis <span>Seynabou Badji</span>
      </h1>

      <p className="hero-text">
        Passionnée par le développement web et l’univers des données, 
        je conçois des interfaces modernes, fluides et intuitives.
        Mon objectif : transformer les idées en expériences visuelles élégantes.
      </p>

      <a href="#projects" className="hero-btn">
        Voir mes projets
      </a>

    </section>
  );
}
