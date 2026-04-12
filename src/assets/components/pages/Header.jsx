import "./css/Header.css";
import "../animations/ThemeToggle";
import GradientText from "../animations/GradientText";
import ThemeToggle from "../animations/ThemeToggle";
import GooeyNav from "../animations/GooeyNav";
import Profile from "../icons/Profile";

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
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Profile size={28} color="currentColor" />
              Nolan D'almeida.
            </div>
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
