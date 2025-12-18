import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">Qui suis-je ?</h2>

      <div className="about-content">
        {/* PHOTO */}
        <div className="about-photo">
          <img src="od.jpeg" alt="Seynabou Badji" />
        </div>

        {/* TEXTE */}
        <div className="about-text">
          <p className="about-intro">
            Développeuse web passionnée et fascinée par le monde des données,
            je conçois des expériences numériques <strong>élégantes</strong>,
            <strong> intuitives</strong> et <strong>performantes</strong>.
          </p>

          <p>
            Mon parcours académique débute avec un <strong>Baccalauréat S2</strong>,
            suivi d’une <strong>Licence en Ingénierie Informatique</strong> à
            l’Université Assane Seck de Ziguinchor.
            Je poursuis actuellement un{" "}
            <strong>Master 2 en Systèmes d’Information Répartis</strong> à
            l’Université Cheikh Anta Diop de Dakar.
          </p>

          <p>
            Soucieuse de la sécurité des systèmes d’information, j’ai renforcé mes
            compétences à travers une formation spécialisée en{" "}
            <strong>cybersécurité avec Force N</strong>.
            Cette expérience m’a permis d’acquérir de solides bases en
            sécurisation des applications, gestion des risques et prévention des
            vulnérabilités.
          </p>

          <p className="about-goal">
            Mon ambition est de créer des solutions numériques où
            <strong> l’expérience utilisateur</strong> et
            <strong> la protection des données</strong> évoluent ensemble.
          </p>

          {/* BOUTON CV */}
          <a
            href="/cv-seynabou-badji.pdf"
            download
            className="cv-button"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}
