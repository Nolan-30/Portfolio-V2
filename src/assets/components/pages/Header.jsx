import "./css/Header.css";
import "../animations/ThemeToggle";
import GradientText from "../animations/GradientText";
import ThemeToggle from "../animations/ThemeToggle";

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
            Nolan.{/* Nolan D'almeida. */}
          </GradientText>
        </div>

        <div className="liens-navigation">
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
          <a href="#stack">Stack</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
