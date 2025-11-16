export default function About() {
  return (
    <section >
      {/* Titre */}
      <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", color: "#f5deb3" }}>
        À propos de moi
      </h2>

      {/* Contenu */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
        
        {/* Texte */}
            <div style={{ flex: 1, minWidth: "250px" }}>
            <p style={{ marginBottom: "15px", lineHeight: "1.6", fontSize: "1.1rem" }}>
                Je suis <strong>Seynabou Badji</strong>, développeuse web passionnée et amoureuse des données. 
                Mon objectif est de transformer des informations complexes en interfaces intuitives et esthétiques,
                où chaque donnée prend vie et chaque interaction a du sens.
            </p>

            <p style={{ marginBottom: "15px", lineHeight: "1.6", fontSize: "1.1rem" }}>
                J'ai obtenu mon <strong>Baccalauréat en S2</strong>, suivi d'une <strong>Licence 3 en Ingénierie Informatique à l'Université Assane Seck de Ziguinchor</strong>, 
                et je poursuis actuellement un <strong>Master 2 en Systèmes d'Information Répartis à l'Université Cheikh Anta Diop de Dakar</strong>. 
                Ces formations m'ont permis de développer des compétences solides en développement et en analyse de données.
            </p>
            </div>        
      </div>
    </section>
  );
}
