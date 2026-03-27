import React from "react";
import { motion } from "framer-motion";
import "./css/Footer.css";
import SplitText from "../animations/SplitText";
import { Dock, DockIcon } from "../animations/Dock";

export default function Footer() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <footer id="contact">
      <motion.div
        className="contenu-pied-page"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>
          {" "}
          <div className="placement-stack">
            <p className>Stack Idéal</p>
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
          </div>
          <SplitText
            text="Prêt à collaborer ? "
            className="collaboration"
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
        </h2>
        <p>Je suis actuellement à la recherche d'une alternance.</p>

        <p className="mail">
          <a href="mailto:nolan.dalmeida07@gmail.com">
            <SplitText
              text="nolan.dalmeida07@gmail.com"
              className="collaboration"
              delay={50}
              duration={2.5}
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
          </a>
        </p>

        <div className="rs">
          <motion.a
            href="https://github.com/Nolan-30/Nolan"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Github
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/nolan-d-almeida-153112375/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </div>

        <p className="droits-auteur">© 2026 Nolan D'almeida.</p>
      </motion.div>
    </footer>
  );
}
