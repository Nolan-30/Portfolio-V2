import React from "react";
import { motion } from "framer-motion"; // 1. Import indispensable
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer id="contact">
      <motion.div
        className="contenu-pied-page"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Prêt à collaborer ?</h2>
        <p>Je suis actuellement à la recherche d'une alternance.</p>

        <p className="mail">
          <a href="mailto:nolan.dalmeida07@gmail.com">
            nolan.dalmeida07@gmail.com
          </a>
        </p>

        <div className="rs">
          {/* 3. Petit bonus : effet au survol sur tes liens comme sur ton bouton 'Me contacter' */}
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
