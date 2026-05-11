import './Contact.css';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-container contact__layout">
        <div className="contact__content">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">On transforme ton idée en brief clair ?</h2>
          <p>
            Tu as un projet de site, d’application ou d’automatisation ? Envoie-moi
            le contexte, l’objectif et ce qui bloque aujourd’hui. Je te réponds avec
            une première direction concrète.
          </p>

          <div className="contact__actions">
            <a className="button button-primary" href="mailto:contact@md-service.fr">
              contact@md-service.fr
            </a>
            <a className="button button-secondary" href="#" aria-label="Voir mon profil Malt">
              Voir mon profil Malt
            </a>
          </div>
        </div>

        <form className="contact__form" aria-label="Formulaire de contact visuel">
          <div className="contact__form-head">
            <span>Mini brief</span>
            <strong>48h</strong>
          </div>

          <label htmlFor="name">Nom</label>
          <input id="name" name="name" type="text" placeholder="Ton nom" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="ton@email.fr" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Décris ton besoin en quelques lignes" />

          <button type="button">Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
