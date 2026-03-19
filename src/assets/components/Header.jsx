import "./css/Header.css";
import "./ThemeToggle";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header>
      <nav className="barre-navigation">
        <div className="logo">
          Nolan D'almeida<span className="point">.</span>
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
