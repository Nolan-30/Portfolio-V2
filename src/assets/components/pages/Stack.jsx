import { motion } from "framer-motion";
import "./css/Stack.css";
import GradientText from "../animations/GradientText";
import GlareHover from "../animations/GlareHover";
import FadeContent from "../animations/FadeContent";

import { section } from "motion/react-client";

export default function Stack() {
  // donnes pr chaque carte
  const technologies = [
    {
      name: "HTML / CSS",
      description:
        "Ma porte d'entrée dans le web. C'est en réalisant mon premier projet perso, Penthouse que j'ai découvert une réelle passion pour le frontend et le plaisir de donner vie à des interfaces soignées.",
    },
    {
      name: "React",
      description:
        "Ma bibliothèque favorite pour créer des interfaces et animations fluides. Je l'utilise pour concevoir des composants réutilisables tout en excellant davantage en JavaScript.",
    },
    {
      name: "JavaScript",
      description:
        "Le moteur de mes projets. C'est avec ce langage que j'ai appris à rendre mes interfaces vivantes et interactives, transformant des designs statiques en véritables expériences utilisateur.",
    },
    {
      name: "SQL",
      description:
        "L'art de structurer la donnée. Je l'utilise pour concevoir des bases de données relationnelles robustes et optimiser la persistance des informations au cœur de mes applications.",
    },
    {
      name: "PHP",
      description:
        "Ce langage m'a permis de comprendre la gestion côté serveur et de créer mes premières architectures web complètes et fonctionnelles.",
    },
  ];

  return (
    <div className="stack-section">
      <FadeContent duration={2000} easing="ease-out" initialOpacity={0}>
        <GradientText
          colors={["#570562", "#FF9FFC", "#B19EEF"]}
          animationSpeed={8}
          showBorder={false}
        >
          <h2>Stack</h2>
        </GradientText>

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
              <div className="card-content" style={{ padding: "1.5rem" }}>
                <span className={tech.className}></span>
                <h2>{tech.name}</h2>
                <div className="language-description">
                  <p>{tech.description}</p>
                </div>
              </div>
            </GlareHover>
          ))}
        </div>
      </FadeContent>
    </div>
  );
}
