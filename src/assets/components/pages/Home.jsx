import "./css/Home.css";
import { motion } from "framer-motion";
import LightRays from "../animations/LightRays";
import TextType from "../animations/TextType";
import StarBorder from "../animations/StarBorder";
import SplitText from "../animations/SplitText";

// pr s'assurer que les lettres sont animées
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Home() {
  return (
    <main className="banniere-accueil">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        rayLength={0.5}
        lightSpread={5.5}
        raysSpeed={0.5}
      />

      {/* cote gauche image*/}
      <div className="container-accueil">
        <motion.div
          className="bloc-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="public/images/doffy.jpg"
            alt="Doffy portrait"
            className="portrait-photo"
          />
        </motion.div>

        {/* colonne de droite*/}
        <div className="contenu-banniere">
          <motion.div
            className="badge-prefix"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="point">•</span> DÉVELOPPEUR FRONT END - CODING
            FACTORY
          </motion.div>

          {/* Le grand titre aligné à gauche */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* J'ai gardé ton texte et ton animation SplitText */}
            <SplitText
              text="Nolan D'almeida"
              className="titre-principal"
              tag="h1"
              delay={100}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <TextType
              text={[
                "Je construis des expériences web modernes et sécurisées.",
              ]}
              typingSpeed={5}
              pauseDuration={200}
              showCursor
              deletingSpeed={10}
              cursorBlinkDuration={0.5}
            />
          </motion.p>

          {/* Le groupe de boutons, aligné à gauche */}
          <motion.div
            className="groupe-boutons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* J'ai gardé tes StarBorder et tes boutons */}
            <StarBorder as="div" color="magenta" speed="5s">
              <motion.a
                href="#projets"
                className="bouton bouton-secondaire"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VOIR MES PROJETS
              </motion.a>
            </StarBorder>

            <StarBorder as="div" color="magenta" speed="5s">
              <motion.a
                href="#contact"
                className="bouton bouton-secondaire"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ME CONTACTER
              </motion.a>
            </StarBorder>
          </motion.div>

          {/* === Ajout des Icônes Sociales (comme dans le modèle) === */}
          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="#" className="icon-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fab fa-instagram"></i>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="indicateur-defilement">
        <span className="rebond">↓</span>
      </div>
    </main>
  );
}
