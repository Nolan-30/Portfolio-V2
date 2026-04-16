import { motion } from "framer-motion";
import "./css/Stack.css";
import GradientText from "../animations/GradientText";
import GlareHover from "../animations/GlareHover";
import FadeContent from "../animations/FadeContent";

export default function Stack() {
  // Données pr chaque language
  const technologies = [
    {
      img: "images/html-icon.png",
      name: "HTML / CSS",
      description:
        "Ma porte d'entrée dans le web. C'est avec mon projet Penthouse que j'ai découvert ma passion pour le développement frontend.",
    },
    {
      img: "images/react-icon.png",
      name: "React",
      description:
        "Ma bibliothèque favorite pour créer des interfaces fluides et des composants réutilisables, tout en approfondissant le JavaScript.",
    },
    {
      img: "images/js-icon.png",
      name: "JavaScript",
      description:
        "Le langage qui rend mes interfaces vivantes, transformant des designs statiques en véritables expériences interactives.",
    },
    {
      img: "images/sql-icon.png",
      name: "SQL",
      description:
        "Essentiel pour structurer des bases de données relationnelles et optimiser la gestion des informations dans mes applications.",
    },
    {
      img: "images/php-icon.png",
      name: "PHP",
      description:
        "Un pilier pour la gestion côté serveur, qui m'a permis de bâtir mes premières architectures web complètes.",
    },
  ];

  return (
    <section id="stack" className="stack-section">
      <FadeContent duration={2000} easing="ease-out" initialOpacity={0}>
        <div className="title-container">
          <GradientText
            colors={["#570562", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
          >
            <h2>Stack</h2>
          </GradientText>
          <h3 className="title-subtitle">
            Un aperçu des langages, frameworks et outils que je maîtrise pour
            bâtir des solutions numériques robustes et performantes.
          </h3>
        </div>

        <div className="languages-container">
          {technologies.map((tech, index) => (
            <GlareHover
              key={index}
              width="320px"
              height="auto"
              background="#060010"
              borderRadius="10px"
              borderColor="var(--couleur-bordure)"
              glareOpacity={0.2}
              glareSize={200}
              className="language-card"
            >
              <div
                className="card-content"
                style={{ padding: "1.5rem", textAlign: "center" }}
              >
                {/* Affichage les langages */}
                {tech.img && (
                  <img
                    src={tech.img}
                    alt={tech.name}
                    style={{
                      width: "120px",
                      height: "120px",

                      objectFit: "contain",
                    }}
                  />
                )}

                <h2>
                  <span className="degrader-violet">{tech.name}</span>
                </h2>
                <div className="language-description">
                  <p>{tech.description}</p>
                </div>
              </div>
            </GlareHover>
          ))}
        </div>
      </FadeContent>
    </section>
  );
}
