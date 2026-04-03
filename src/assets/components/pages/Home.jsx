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
            src="public/images/doffy.jpg"
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

          {/* grp de btn */}
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

          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="#" className="icon-link">
              <i className="fab fa-facebook-f">
                <img
                  src="public/images/react.png"
                  alt="react"
                  height={30}
                  width={25}
                />
              </i>
            </a>

            {/* test des techno dans lesquelles je veux exceller  */}

            <a href="#" className="icon-link">
              <img
                src="public/images/tailwind.png"
                alt="react"
                height={30}
                width={25}
              />
            </a>
            {/* <div className="placement-stack">
              <Dock direction="middle">
                <DockIcon>
                  <a
                    href="https://github.com/Nolan-30"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/css.png"
                      alt="GitHub"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </DockIcon>
                <DockIcon>
                  <a
                    href="https://www.linkedin.com/in/nolan-d-almeida"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/JS.png"
                      alt="LinkedIn"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </DockIcon>
                <DockIcon>
                  <a
                    href="https://github.com/Nolan-30"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/react.png"
                      alt="GitHub"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </DockIcon>
                <DockIcon>
                  <a
                    href="https://github.com/Nolan-30"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/html.png"
                      alt="GitHub"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </DockIcon>
                <DockIcon>
                  <a
                    href="https://github.com/Nolan-30"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/sql.png"
                      alt="GitHub"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </DockIcon>
                <DockIcon>
                  <a
                    href="https://github.com/Nolan-30"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/nodejs.png"
                      alt="GitHub"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </DockIcon>
              </Dock>
            </div> */}
          </motion.div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
