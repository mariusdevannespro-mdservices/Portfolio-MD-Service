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
        <div className="about__content">
          <p className="section-kicker">À propos</p>
          <h2 className="section-title">Un accompagnement simple, lisible et orienté résultat</h2>
          <p>
            Je suis développeur web fullstack et fondateur de MD Service. J’aide les
            indépendants, artisans et petites entreprises à créer des solutions web
            simples, propres et utiles. Mon objectif est de livrer des projets
            compréhensibles, maintenables et adaptés aux vrais besoins du client.
          </p>
        </div>

        <div className="about__method" aria-label="Ma méthode">
          <div className="about__method-heading">
            <span>Ma méthode</span>
            <strong>4 étapes</strong>
          </div>
          <ol>
            {methodSteps.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default About;
