import projects from "../../projects.json";
import ProjectCard from "./ProjectCard";
import GradientText from "../animations/GradientText";
import { Dock, DockIcon } from "../animations/Dock";
import Particles from "../animations/Particles";

export default function Project() {
  const projetsRealises = projects.filter((p) => !p.incoming);
  const projetsAVenir = projects.filter((p) => p.incoming);

  return (
    <section id="projets" className="section-page">
      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        /> */}

      <div className="container">
        <h2 className="titre-section">
          {" "}
          <GradientText
            colors={["#570562", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
            className="projets-realises-placement"
          >
            Réalisations
          </GradientText>
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
              En développement
            </GradientText>
          </h2>
        </span>

        <div className="grille-projets">
          {projetsAVenir.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
