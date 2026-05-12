import './Contact.css';

const contactEmail = 'marius.devannespro@gmail.com';
const maltProfileUrl = 'https://www.malt.fr/profile/mariusdevannes';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-container contact__layout">
        <div className="contact__content">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">On transforme ton idée en brief clair ?</h2>
          <p>
            Tu as un projet de site, d'application ou d'automatisation ? Envoie-moi
            le contexte, l'objectif et ce qui bloque aujourd'hui. Je te réponds avec
            une première direction concrète.
          </p>

          <div className="contact__actions">
            <a className="button button-primary" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            <a
              className="button button-secondary"
              href={maltProfileUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Voir mon profil Malt"
            >
              Voir mon profil Malt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
