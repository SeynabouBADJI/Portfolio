import "../styles/Contact.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      name: "Envoyer un email",
      icon: <MdEmail size={20} />,
      link: "mailto:zeyna@gmail.com"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      link: "https://www.linkedin.com/in/zeynab-badji-966318326/"
    },
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
      link: "https://github.com/Sey"
    }
  ];

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Me Contacter</h2>

      <p className="contact-text">
        Je suis toujours ouverte à de nouvelles opportunités et collaborations.  
        Que ce soit pour un projet, une question ou simplement pour échanger sur le développement web et les données,  
        n’hésitez pas à me contacter via les liens ci-dessous. Je vous répondrai avec plaisir dans les plus brefs délais.
      </p>

      <div className="contact-links">
        {contacts.map((item, i) => (
          <a 
            key={i}
            href={item.link}
            target={item.name !== "Envoyer un email" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="contact-btn"
          >
            {item.icon} {item.name}
          </a>
        ))}
      </div>
    </section>
  );
}
