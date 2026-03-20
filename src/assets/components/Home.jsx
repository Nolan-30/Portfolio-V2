import "./css/Home.css";
import { motion } from "framer-motion";
import LightRays from "./LightRays";

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
          Développeur Web <br />
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
