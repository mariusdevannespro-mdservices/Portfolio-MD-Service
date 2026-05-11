import { services } from '../../data/services.js';
import './Services.css';

function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-container services__layout">
        <div className="services__intro">
          <p className="section-kicker">Services</p>
          <h2 className="section-title">Un atelier web pour passer d’une idée floue à un outil net.</h2>
          <p className="section-description">
            Chaque prestation est pensée pour rester lisible : un périmètre clair, une
            interface propre, et un résultat que tu peux vraiment utiliser.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article className={`service-card service-card--${service.accent}`} key={service.title}>
              <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
