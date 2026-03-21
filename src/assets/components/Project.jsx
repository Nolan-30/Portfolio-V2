import projects from "../projects.json";
import ProjectCard from "./ProjectCard";
import GradientText from "./GradientText";

export default function Project() {
  const projetsRealises = projects.filter((p) => !p.incoming);
  const projetsAVenir = projects.filter((p) => p.incoming);

  return (
    <section id="projets" className="section-page">
      <div className="container">
        <h2 className="titre-section">
          {/* <GradientText
            colors={["#570562", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
            className="projets-realises-placement"
          >
            Projets Réalisés
          </GradientText> */}
        </h2>
        <div className="grille-projets">
          {projetsRealises.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      <div className="container">
        <span class="projet-a-venir">
          <h2 className="titre-section">
            {" "}
            <GradientText
              colors={["#570562", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="projets-a-venir-placement"
            >
              Projets À Venir
            </GradientText>
          </h2>
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
