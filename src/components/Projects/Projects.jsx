import { useMemo, useState } from 'react';
import { projects } from '../../data/projects.js';
import ProjectExamples from './ProjectExamples.jsx';
import './Projects.css';

function Projects() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId),
    [activeProjectId],
  );

  return (
    <section className="projects section" id="projets">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-kicker">Projets démo</p>
          <h2 className="section-title">Exemples de réalisations possibles</h2>
          <p className="section-description">
            Ces projets fictifs montrent le type d’outils et d’expériences que MD
            Service peut construire pour une activité professionnelle.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                activeProjectId === project.id ? 'project-card--active' : ''
              }`}
              key={project.title}
            >
              <div className="project-card__top">
                <span className="project-card__badge">Démo</span>
                <span className="project-card__line" />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__tags" aria-label="Technologies utilisées">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <button
                className="project-card__button"
                type="button"
                aria-controls="project-preview"
                aria-expanded={activeProjectId === project.id}
                onClick={() => setActiveProjectId(project.id)}
              >
                Voir le projet
              </button>
            </article>
          ))}
        </div>

        {activeProject && (
          <div className="projects__preview" id="project-preview">
            <div className="projects__preview-bar">
              <div>
                <span>Aperçu complet</span>
                <strong>{activeProject.title}</strong>
              </div>
              <button type="button" onClick={() => setActiveProjectId(null)}>
                Fermer
              </button>
            </div>
            <ProjectExamples projectId={activeProject.id} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
