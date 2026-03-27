import "./css/Home.css";
import { motion } from "framer-motion";
import LightRays from "../animations/LightRays";
import TextType from "../animations/TextType";
import StarBorder from "../animations/StarBorder";
import AnimatedContent from "../animations/AnimatedContent";
import SplitText from "../animations/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!"); // pr s'assurer que les lettres
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

      <div className="contenu-banniere">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SplitText
            text="Développeur Full-Stack "
            className="titre-principal"
            tag="h1"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            showCallback
          />

          {/* <span className="texte-degrade">Full-Stack</span> */}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {" "}
          <TextType
            text={[
              "Étudiant à l'ESIEE-IT Coding Factory. Je construis des expériences web modernes et sécurisées.",
            ]}
            typingSpeed={5}
            pauseDuration={200}
            showCursor
            deletingSpeed={10}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
          {/* Étudiant à l'ESIEE-IT Coding Factory. Je construis des expériences web
          modernes et sécurisées. */}
        </motion.p>

        {/* ajt de l'animation pr les boutons */}
        <AnimatedContent distance={100} direction="vertical" delay={0}>
          <div>
            <motion.div
              className="groupe-boutons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <StarBorder as="div" color="magenta" speed="5s">
                <motion.a
                  href="#projets"
                  className="bouton bouton-principal"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir mes projets
                </motion.a>
              </StarBorder>

              <StarBorder as="div" color="magenta" speed="5s">
                <motion.a
                  href="#contact"
                  className="bouton bouton-principal"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Me Contacter
                </motion.a>
              </StarBorder>
            </motion.div>
          </div>
        </AnimatedContent>
      </div>
      <div className="indicateur-defilement">
        <span className="rebond">↓</span>
      </div>
    </main>
  );
}
