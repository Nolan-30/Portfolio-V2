import "./css/Header.css";
import "../animations/ThemeToggle";
import GradientText from "../animations/GradientText";
import ThemeToggle from "../animations/ThemeToggle";
import GooeyNav from "../animations/GooeyNav";

export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">
          <GradientText
            colors={["#570562", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
          >
            Nolan D'almeida.
          </GradientText>
        </div>

        <div className="nav-links">
          <a href="#accueil">Accueil</a>
          <a href="#projets">Projets</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
