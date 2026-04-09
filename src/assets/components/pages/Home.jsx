import "./css/Home.css";
import { motion } from "framer-motion";
import LightRays from "../animations/LightRays";
import TextType from "../animations/TextType";
import StarBorder from "../animations/StarBorder";
import SplitText from "../animations/SplitText";

import { Dock, DockIcon } from "../animations/Dock";

// pr s'assurer que les lettres sont animées
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Home() {
  return (
    <main id="accueil" className="banniere-accueil">
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
            src="images/doffy.jpg"
            alt="Doffy portrait"
            className="portrait-photo"
          />
        </motion.div>

        {/* colonne de droite*/}
        <div className="contenu-banniere">
          <motion.div
            className="badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="point">•</span> DÉVELOPPEUR Web Full-Stack - CODING
            FACTORY
          </motion.div>

          {/* Le grand titre aligné à gauche */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* animat° spilt text*/}
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
              typingSpeed={10}
              pauseDuration={200}
              showCursor
              deletingSpeed={10}
              cursorBlinkDuration={0.5}
            />
          </motion.p>

          {/* grp de btn */}
          <motion.div
            className="groupe-boutons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
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

          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="#" className="icon-link">
              <img src="images/react.png" alt="react" height={30} width={25} />
            </a>

            {/* test des techno dans lesquelles je veux exceller  */}

            <a href="#" className="icon-link">
              <img
                src="images/tailwind.png"
                alt="Tailwind"
                height={30}
                width={25}
              />
            </a>
            <a href="#" className="icon-link">
              <img
                src="images/nodejs.png"
                alt="Node.js"
                height={30}
                width={25}
              />
            </a>

            {/* <a href="#" className="icon-link">
              <img
                src="images/mongoDB.jpg"
                alt="Node.js"
                height={30}
                width={25}
              />
            </a> */}

            {/* CV */}
            <div className="cv-container">
              <a
                href="CV-Nolan-Dalmeida.pdf" // Le chemin part de la racine du dossier public
                download="CV_Nolan_Dalmeida.pdf" // Le nom que le fichier aura une fois téléchargé
              >
                <button>Télécharger</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
