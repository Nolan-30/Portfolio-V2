import "./css/Home.css";
import { motion } from "framer-motion";
import LightRays from "./LightRays";
import TextType from "./TextType";
import StarBorder from "./StarBorder";

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
          {" "}
          <TextType
            text={["Développeur Web Full-stack"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            texts={[
              "Welcome to React Bits! Good to see you!",
              "Build some amazing experiences!",
            ]}
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
          {/* <br /> */}
          <span className="texte-degrade">Full-stack</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Étudiant à l'ESIEE-IT Coding Factory. Je construis des expériences web
          modernes et sécurisées.
        </motion.p>

        <motion.div
          className="groupe-boutons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#projets" className="bouton bouton-secondaire">
            Voir mes projets
          </a>
          <motion.a
            href="#contact"
            className="bouton bouton-principal"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Me contacter
          </motion.a>
        </motion.div>
      </div>
      <div className="indicateur-defilement">
        <span className="rebond">↓</span>
      </div>
    </main>
  );
}
