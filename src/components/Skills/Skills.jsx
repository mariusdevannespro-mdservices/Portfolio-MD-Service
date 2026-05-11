import { skills } from '../../data/skills.js';
import './Skills.css';

function Skills() {
  return (
    <section className="skills section" id="competences">
      <div className="section-container skills__layout">
        <div className="skills__panel">
          <p className="section-kicker">Compétences</p>
          <h2 className="section-title">Une boîte à outils large, utilisée avec discernement.</h2>
          <p className="section-description">
            Je choisis la technologie en fonction du projet : visibilité, automatisation,
            gestion de données, interface métier ou connexion API.
          </p>
        </div>

        <div className="skills__cloud" aria-label="Liste de compétences">
          {skills.map((skill) => (
            <span className="skills__badge" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
