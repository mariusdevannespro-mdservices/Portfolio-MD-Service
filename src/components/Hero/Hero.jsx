import './Hero.css';

const heroStats = [
  { label: 'Livrables', value: 'Sites + apps' },
  { label: 'Priorité', value: 'Simple à gérer' },
  { label: 'Approche', value: 'Sur mesure' },
];

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">MD Service · Studio web indépendant</p>
          <h1>
            Des interfaces nettes, des outils utiles, et un web qui travaille vraiment.
          </h1>
          <p className="hero__subtitle">
            Je conçois des sites vitrines, applications web, dashboards et
            automatisations pour aider les indépendants et petites entreprises à gagner
            en clarté, en temps et en crédibilité.
          </p>
          <div className="hero__actions" aria-label="Actions principales">
            <a className="button button-primary" href="#projets">
              Explorer les démos
            </a>
            <a className="button button-secondary" href="#contact">
              Discuter du projet
            </a>
          </div>
        </div>

        <div className="hero__workspace" aria-label="Aperçu créatif MD Service">
          <div className="hero__workspace-top">
            <span>Brief client</span>
            <strong>En production</strong>
          </div>
          <div className="hero__board">
            <div className="hero__tile hero__tile--large">
              <span>01</span>
              <strong>Site vitrine</strong>
              <small>Positionnement, pages clés, formulaire</small>
            </div>
            <div className="hero__tile">
              <span>02</span>
              <strong>API</strong>
              <small>Connexion aux outils métier</small>
            </div>
            <div className="hero__tile">
              <span>03</span>
              <strong>Dashboard</strong>
              <small>Données lisibles</small>
            </div>
            <div className="hero__timeline" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="hero__stats" aria-label="Points forts">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
