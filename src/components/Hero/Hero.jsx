import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero__scene" aria-hidden="true">
        <div className="hero__browser">
          <div className="hero__browser-top">
            <span />
            <span />
            <span />
            <strong>md-service.app</strong>
          </div>
          <div className="hero__dashboard">
            <div className="hero__metric hero__metric--main">
              <span>Contacts</span>
              <strong>128</strong>
              <small>+24% ce mois-ci</small>
            </div>
            <div className="hero__metric">
              <span>Devis</span>
              <strong>32</strong>
              <small>12 à relancer</small>
            </div>
            <div className="hero__chart">
              <span style={{ height: '42%' }} />
              <span style={{ height: '58%' }} />
              <span style={{ height: '38%' }} />
              <span style={{ height: '74%' }} />
              <span style={{ height: '64%' }} />
              <span style={{ height: '88%' }} />
            </div>
            <div className="hero__flow">
              <span>Formulaire</span>
              <span>API</span>
              <span>Dashboard</span>
            </div>
          </div>
        </div>

        <div className="hero__floating hero__floating--one">
          <span>Automatisation</span>
          <strong>4h</strong>
          <small>gagnées / semaine</small>
        </div>
        <div className="hero__floating hero__floating--two">
          <span>Site vitrine</span>
          <strong>SEO</strong>
          <small>base propre</small>
        </div>
      </div>
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">Développement web freelance</p>
          <h1>
            Je crée des sites web et outils sur mesure pour les indépendants et
            petites entreprises
          </h1>
          <p className="hero__subtitle">
            Sites vitrines, applications web, automatisations et dashboards simples,
            modernes et efficaces.
          </p>
          <div className="hero__actions" aria-label="Actions principales">
            <a className="button button-primary" href="#services">
              Voir mes services
            </a>
            <a className="button button-secondary" href="#contact">
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
