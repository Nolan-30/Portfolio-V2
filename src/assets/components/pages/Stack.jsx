import { motion } from "framer-motion";
import { div, h1 } from "motion/react-client";
import GradientText from "../animations/GradientText";
import "./css/Stack.css";

export default function Stack() {
  return (
    <div className="languages-container">
      <div className="language-card">
        <img src="public/images/react.png" height={50} width={50} />
        <h2>React</h2>

        <div className="language-description">
          <p>
            Ma bibliothèque de prédilection pour créer des interfaces
            utilisateur dynamiques et performantes. Je l'utilise pour concevoir
            des composants réutilisables et gérer l'état complexe de mes
            applications avec fluidité.
          </p>
        </div>
      </div>
      <div className="language-card">
        <h2>React</h2>

        <div className="language-description">
          <p>
            Ma bibliothèque de prédilection pour créer des interfaces
            utilisateur dynamiques et performantes. Je l'utilise pour concevoir
            des composants réutilisables et gérer l'état complexe de mes
            applications avec fluidité.
          </p>
        </div>
      </div>
      <div className="language-card">
        <h2>React</h2>

        <div className="language-description">
          <p>
            Ma bibliothèque de prédilection pour créer des interfaces
            utilisateur dynamiques et performantes. Je l'utilise pour concevoir
            des composants réutilisables et gérer l'état complexe de mes
            applications avec fluidité.
          </p>
        </div>
      </div>
    </div>
  );
}
