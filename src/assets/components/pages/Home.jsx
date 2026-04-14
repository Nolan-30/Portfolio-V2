import "./css/Home.css";
import { motion } from "framer-motion";
// import LightRays from "../animations/LightRays";
import TextType from "../animations/TextType";
import StarBorder from "../animations/StarBorder";
import SplitText from "../animations/SplitText";
// import GradientText from "../animations/GradientText";

import { Dock, DockIcon } from "../animations/Dock";
import Download from "../icons/Download";

// pr s'assurer que les lettres sont animées
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Home() {
  return (
    <main id="accueil" className="banniere-accueil">
      {/* <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        rayLength={0.5}
        lightSpread={5.5}
        raysSpeed={0.5}
      /> */}
      <motion.div
        className="welcome-msg"
        initial={{ opacity: 0, y: -100 }} // Commence invisible et 50px au-dessus
        animate={{ opacity: 1, y: 0 }} // Devient visible et à sa place
        transition={{
          duration: 1, // L'animation dure 0.8 seconde
          delay: 0.1, // Petit délai de 0.1s avant de démarrer
          ease: "easeOut", // Ralentit à la fin pour plus de douceur
        }}
      >
        {/* <GradientText
          colors={["#570562", "#FF9FFC", "#B19EEF"]}
          animationSpeed={6}
          showBorder={false}
          className=""
        > */}
        <span className="weight-bold">
          Fort d'une sensibilité marquée pour le frontend, j'allie technique et
          design pour concevoir des expériences utilisateur intuitives et
          réactives.
        </span>
        {/* </GradientText> */}
      </motion.div>

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
            transition={{ duration: 3, delay: 0.4 }}
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
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <TextType
              text={["Je crée des sites web modernes et sécurisés."]}
              typingSpeed={50}
              pauseDuration={200}
              showCursor
              deletingSpeed={5}
              cursorBlinkDuration={0.5}
              loop={false}
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

          {/* FOOTER DE L'ACCUEIL */}

          <motion.div
            className="languages-icons"
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

            {/* Bouton CV */}

            <StarBorder as="div" color="magenta" speed="5s">
              <motion.a
                href="CV-Nolan-Dalmeida.pdf"
                download="CV_Nolan_Dalmeida.pdf"
                className="btn-download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Télécharger CV <Download size={20} color="#ffffff" />
              </motion.a>
            </StarBorder>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
