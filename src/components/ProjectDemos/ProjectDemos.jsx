import './ProjectDemos.css';

const clientRows = [
  { name: 'Atelier Martin', status: 'Devis envoyé', amount: '1 240 €' },
  { name: 'Studio Nova', status: 'Relance prévue', amount: '860 €' },
  { name: 'Maison Lenoir', status: 'Projet signé', amount: '2 100 €' },
];

const timeSlots = ['09:30', '11:00', '14:30', '16:00'];

function ProjectDemos() {
  return (
    <section className="project-demos section" id="demos">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-kicker">Démos réalisées</p>
          <h2 className="section-title">Les exemples prennent forme</h2>
          <p className="section-description">
            Chaque bloc ci-dessous simule un livrable concret que MD Service peut
            adapter à un vrai besoin client.
          </p>
        </div>

        <div className="project-demos__grid">
          <article className="demo demo--artisan" id="demo-artisan">
            <div className="demo__header">
              <span>Site vitrine artisan</span>
              <strong>Atelier Martin</strong>
            </div>
            <div className="artisan-preview">
              <div>
                <p className="artisan-preview__tag">Menuiserie sur mesure</p>
                <h3>Créations bois durables pour maisons et commerces</h3>
                <p>
                  Présentation des prestations, galerie, avis client et demande de
                  devis rapide pour transformer une visite en contact qualifié.
                </p>
                <a href="#contact">Demander un devis</a>
              </div>
              <div className="artisan-preview__panel" aria-label="Prestations artisan">
                <span>Bibliothèques</span>
                <span>Agencements</span>
                <span>Rénovation</span>
              </div>
            </div>
          </article>

          <article className="demo demo--dashboard" id="demo-dashboard">
            <div className="demo__header">
              <span>Dashboard de gestion client</span>
              <strong>Suivi commercial</strong>
            </div>
            <div className="dashboard-preview">
              <div className="dashboard-preview__stats">
                <div>
                  <span>Contacts</span>
                  <strong>128</strong>
                </div>
                <div>
                  <span>Relances</span>
                  <strong>12</strong>
                </div>
                <div>
                  <span>CA potentiel</span>
                  <strong>4,2k€</strong>
                </div>
              </div>
              <div className="dashboard-preview__table">
                {clientRows.map((row) => (
                  <div className="dashboard-preview__row" key={row.name}>
                    <span>{row.name}</span>
                    <small>{row.status}</small>
                    <strong>{row.amount}</strong>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="demo demo--booking" id="demo-rendez-vous">
            <div className="demo__header">
              <span>Application de prise de rendez-vous</span>
              <strong>Planning en ligne</strong>
            </div>
            <div className="booking-preview">
              <div className="booking-preview__calendar">
                <span>Lun</span>
                <span>Mar</span>
                <span className="is-selected">Mer</span>
                <span>Jeu</span>
                <span>Ven</span>
              </div>
              <div className="booking-preview__slots">
                {timeSlots.map((slot, index) => (
                  <button className={index === 2 ? 'is-active' : ''} type="button" key={slot}>
                    {slot}
                  </button>
                ))}
              </div>
              <div className="booking-preview__summary">
                <span>Créneau sélectionné</span>
                <strong>Mercredi, 14:30</strong>
                <small>Confirmation par email prête à envoyer</small>
              </div>
            </div>
          </article>

          <article className="demo demo--saas" id="demo-saas">
            <div className="demo__header">
              <span>Landing page SaaS</span>
              <strong>FlowPilot</strong>
            </div>
            <div className="saas-preview">
              <p className="saas-preview__tag">Automatisation simple</p>
              <h3>Centralise tes demandes et gagne du temps chaque semaine</h3>
              <p>
                Page orientée conversion avec bénéfices, preuve sociale, offre claire
                et CTA visible dès le premier écran.
              </p>
              <div className="saas-preview__cards">
                <div>
                  <strong>Starter</strong>
                  <span>29 €/mois</span>
                </div>
                <div>
                  <strong>Pro</strong>
                  <span>79 €/mois</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectDemos;
