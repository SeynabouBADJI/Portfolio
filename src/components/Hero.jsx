import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* IMAGE */}
        <img
          src="/ph.jpg"
          alt="Seynabou Badji"
          className="hero-img"
        />

        {/* TEXTE */}
        <div className="hero-text-content">
          <h1 className="hero-title">
            Bonjour, je suis <span>Seynabou Badji</span>
          </h1>

          <h2 className="hero-subtitle">
            Développeuse Web & Data Enthusiast
          </h2>

          <p className="hero-text">
            Je conçois des applications web modernes, performantes et sécurisées,
            avec une attention particulière portée à l’expérience utilisateur
            et à la valorisation des données.
          </p>

          {/* BOUTON */}
          <a href="#projects" className="hero-btn primary">
            Voir mes projets
          </a>
        </div>
      </div>
    </section>
  );
}
