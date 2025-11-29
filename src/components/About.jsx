import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about">

      <h2 className="about-title">Qui suis-je ?</h2>

      <div className="about-content">

        {/* PHOTO */}
        <div className="about-photo">
          <img src="od.jpeg" alt="Seynabou Badji" />
        </div>

        {/* TEXTE */}
        <div className="about-text">
          <p>
            Développeuse web passionnée et fascinée par le monde des données, 
            je transforme les idées en expériences numériques élégantes et intuitives.  
            Chaque projet est pour moi l’occasion de marier esthétique, fluidité et fonctionnalité.
          </p>

          <p>
            Mon parcours académique a débuté avec un <strong>Baccalauréat S2</strong>, suivi d'une 
            <strong> Licence en Ingénierie Informatique</strong> à l’Université Assane Seck de Ziguinchor.  
            Aujourd’hui, je poursuis un <strong>Master 2 en Systèmes d’Information Répartis</strong> 
            à l’Université Cheikh Anta Diop de Dakar.
          </p>

          <p>
            Pour renforcer mes compétences en sécurité et en protection des systèmes d’information, 
            j’ai suivi une formation spécialisée en <strong>cybersécurité avec Force N</strong>.  
            Cette expérience m’a permis de maîtriser les bonnes pratiques de sécurisation des applications, 
            la gestion des risques et la prévention des vulnérabilités.
          </p>

          <p>
            Mon objectif est de créer des interfaces performantes, intuitives et sécurisées, 
            où l’expérience utilisateur et la protection des données vont de pair.
          </p>
        </div>

      </div>

    </section>
  );
}
