import { skills } from '../../data/skills.js';
import './Skills.css';

function Skills() {
  return (
    <section className="skills section" id="competences">
      <div className="section-container skills__layout">
        <div className="section-heading skills__heading">
          <p className="section-kicker">Compétences</p>
          <h2 className="section-title">Une base technique solide pour des projets concrets</h2>
          <p className="section-description">
            J’utilise des technologies fiables et adaptées pour créer des sites,
            applications, intégrations API et automatisations simples à maintenir.
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
