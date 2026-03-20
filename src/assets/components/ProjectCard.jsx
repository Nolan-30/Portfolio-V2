import "./css/Project.css";

export default function ProjectCard({
  label,
  date,
  title,
  description,
  githubUrl,
  stack,
}) {
  return (
    /* On utilise une div conteneur simple sans hauteur fixe pour laisser la grille gérer l'espace */
    <div className="projet-item">
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

        <div className="lien-projet">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            Voir le Projet
          </a>
        </div>
      </article>
    </div>
  );
}
