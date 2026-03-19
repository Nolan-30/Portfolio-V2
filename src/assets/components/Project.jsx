import projects from "../projects.json";
import ProjectCard from "./ProjectCard";

export default function Project() {
  const projetsRealises = projects.filter((p) => !p.incoming);
  const projetsAVenir = projects.filter((p) => p.incoming);

  return (
    <section id="projets" className="section-page">
      <div className="container">
        <h2 className="titre-section">Projets Réalisés</h2>
        <div className="grille-projets">
          {projetsRealises.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      <div className="container">
        <span class="projet-a-venir">
          <h2 className="titre-section">Projets À Venir</h2>
        </span>

        <div className="grille-projets">
          {projetsAVenir.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
