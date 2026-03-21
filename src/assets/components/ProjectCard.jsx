import "./css/Project.css";
// import GlareHover from "./GlareHover";
import GradientText from "./GradientText";
import StarBorder from "./StarBorder";

export default function ProjectCard({
  label,
  date,
  title,
  description,
  githubUrl,
  stack,
}) {
  return (
    <div className="projet-item">
      {/* <GlareHover
        width="100%"
        height="100%"
        background="transparent"
        borderRadius="1.5rem"
        borderColor="transparent"
        glareColor="#ffffff"
        glareOpacity={0.15}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        style={{ width: "100%" }}
      > */}

      <article className="carte-projet" style={{ margin: 0, height: "100%" }}>
        <div className="titre-carte">
          <span className="etiquette-projet">{label}</span>
          <span className="date-projet">{date}</span>
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        <div className="stack-used">
          {stack &&
            stack.map((tech, index) => (
              <span key={index} className={tech.class}>
                <img src={tech.icon} alt={tech.name} />
              </span>
            ))}
        </div>
        {/* <div class="img-projet">{image}</div> */}
        <div className="lien-projet">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            Voir le Projet
          </a>
        </div>
      </article>

      {/* </GlareHover> */}
    </div>
  );
}
