import "./css/Header.css";
import "./ThemeToggle";
import GradientText from "./GradientText";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header>
      <nav className="barre-navigation">
        <div className="logo">
          <GradientText
            colors={["#570562", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
          >
            Nolan D'almeida<span className="point">.</span>
          </GradientText>
        </div>

        <div className="liens-navigation">
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
