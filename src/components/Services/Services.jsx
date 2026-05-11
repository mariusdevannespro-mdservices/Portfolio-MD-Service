import { services } from '../../data/services.js';
import './Services.css';

function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-kicker">Services</p>
          <h2 className="section-title">Des solutions web utiles, claires et prêtes à évoluer</h2>
          <p className="section-description">
            Je conçois des interfaces propres et des outils concrets pour aider une
            activité à gagner en visibilité, en efficacité et en autonomie.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article className={`service-card service-card--${service.accent}`} key={service.title}>
              <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
