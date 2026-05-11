import './About.css';

const methodSteps = [
  'Analyse du besoin',
  'Proposition claire',
  'Développement',
  'Livraison et accompagnement',
];

function About() {
  return (
    <section className="about section" id="a-propos">
      <div className="section-container about__layout">
        <div className="about__portrait" aria-hidden="true">
          <span>MD</span>
          <strong>Service</strong>
          <small>Fullstack · Web · Automatisation</small>
        </div>

        <div className="about__content">
          <p className="section-kicker">À propos</p>
          <h2 className="section-title">Un partenaire technique qui parle besoin avant de parler code.</h2>
          <p>
            Je suis développeur web fullstack et fondateur de MD Service. J’aide les
            indépendants, artisans et petites entreprises à créer des solutions web
            simples, propres et utiles. Mon objectif est de livrer des projets
            compréhensibles, maintenables et adaptés aux vrais besoins du client.
          </p>

          <div className="about__method" aria-label="Ma méthode">
            <span>Ma méthode</span>
            <ol>
              {methodSteps.map((step, index) => (
                <li key={step}>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
