function ArtisanExample() {
  return (
    <div className="example-page example-page--artisan">
      <header className="artisan-site__nav">
        <strong>Atelier Martin</strong>
        <nav aria-label="Navigation démo artisan">
          <span>Créations</span>
          <span>Réalisations</span>
          <span>Contact</span>
        </nav>
      </header>

      <section className="artisan-site__hero">
        <div>
          <p className="example-pill">Menuiserie artisanale</p>
          <h3>Des agencements bois sur mesure pour donner du caractère aux lieux.</h3>
          <p>
            Une vitrine chaleureuse avec une présentation claire, des prestations,
            une galerie, des avis et un appel à devis visible.
          </p>
          <button type="button">Demander un devis</button>
        </div>
        <div className="artisan-site__mosaic" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="artisan-site__services">
        <article>
          <span>01</span>
          <h4>Bibliothèques</h4>
          <p>Conception, fabrication et pose à domicile.</p>
        </article>
        <article>
          <span>02</span>
          <h4>Agencement commerce</h4>
          <p>Mobilier professionnel pensé pour l’usage quotidien.</p>
        </article>
        <article>
          <span>03</span>
          <h4>Rénovation</h4>
          <p>Réparation, habillage et finitions propres.</p>
        </article>
      </section>

      <section className="artisan-site__gallery">
        <div />
        <div />
        <div />
        <blockquote>
          “Le site rend le travail très concret et facilite les demandes de devis.”
        </blockquote>
      </section>
    </div>
  );
}

function DashboardExample() {
  const rows = [
    ['Atelier Martin', 'Devis envoyé', '1 240 €'],
    ['Studio Nova', 'Relance prévue', '860 €'],
    ['Maison Lenoir', 'Projet signé', '2 100 €'],
    ['Cabinet Aster', 'Nouveau lead', '540 €'],
  ];

  return (
    <div className="example-page example-page--dashboard">
      <aside className="dashboard-app__sidebar">
        <strong>ClientFlow</strong>
        <span>Vue générale</span>
        <span>Clients</span>
        <span>Relances</span>
        <span>Factures</span>
      </aside>

      <main className="dashboard-app__main">
        <header className="dashboard-app__topbar">
          <div>
            <p>Tableau de bord</p>
            <h3>Suivi commercial</h3>
          </div>
          <button type="button">Nouveau client</button>
        </header>

        <section className="dashboard-app__stats">
          <article>
            <span>Contacts</span>
            <strong>128</strong>
            <small>+24% ce mois-ci</small>
          </article>
          <article>
            <span>Relances</span>
            <strong>12</strong>
            <small>À traiter cette semaine</small>
          </article>
          <article>
            <span>CA potentiel</span>
            <strong>4,7k€</strong>
            <small>Pipeline actif</small>
          </article>
        </section>

        <section className="dashboard-app__workspace">
          <div className="dashboard-app__chart" aria-hidden="true">
            <span style={{ height: '36%' }} />
            <span style={{ height: '62%' }} />
            <span style={{ height: '48%' }} />
            <span style={{ height: '76%' }} />
            <span style={{ height: '58%' }} />
            <span style={{ height: '88%' }} />
          </div>
          <div className="dashboard-app__table">
            {rows.map(([name, status, amount]) => (
              <div key={name}>
                <span>{name}</span>
                <small>{status}</small>
                <strong>{amount}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function BookingExample() {
  const slots = ['09:30', '10:45', '14:30', '16:00'];

  return (
    <div className="example-page example-page--booking">
      <header className="booking-app__nav">
        <strong>RdvZen</strong>
        <button type="button">Connexion</button>
      </header>

      <section className="booking-app__hero">
        <div>
          <p className="example-pill">Prise de rendez-vous</p>
          <h3>Un parcours clair pour réserver un créneau sans échange inutile.</h3>
          <p>
            Page d’accueil, choix de service, calendrier, formulaire client et
            confirmation prête à envoyer.
          </p>
        </div>
        <div className="booking-app__card">
          <span>Prochain créneau</span>
          <strong>Mercredi 14:30</strong>
          <small>Consultation découverte, 30 min</small>
        </div>
      </section>

      <section className="booking-app__planner">
        <div className="booking-app__services">
          <button type="button" className="is-active">Appel découverte</button>
          <button type="button">Suivi client</button>
          <button type="button">Rendez-vous atelier</button>
        </div>
        <div className="booking-app__calendar">
          <span>Lun</span>
          <span>Mar</span>
          <span className="is-selected">Mer</span>
          <span>Jeu</span>
          <span>Ven</span>
        </div>
        <div className="booking-app__slots">
          {slots.map((slot, index) => (
            <button className={index === 2 ? 'is-active' : ''} type="button" key={slot}>
              {slot}
            </button>
          ))}
        </div>
        <form className="booking-app__form">
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Email" />
          <button type="button">Confirmer le rendez-vous</button>
        </form>
      </section>
    </div>
  );
}

function SaasExample() {
  return (
    <div className="example-page example-page--saas">
      <header className="saas-site__nav">
        <strong>FlowPilot</strong>
        <nav aria-label="Navigation démo SaaS">
          <span>Produit</span>
          <span>Tarifs</span>
          <span>FAQ</span>
        </nav>
        <button type="button">Essai gratuit</button>
      </header>

      <section className="saas-site__hero">
        <div>
          <p className="example-pill">Automatisation simple</p>
          <h3>Centralise tes demandes et transforme les tâches répétitives en workflows.</h3>
          <p>
            Une landing page plus marketing, avec proposition de valeur, preuve,
            fonctionnalités, tarifs et CTA dans un style très différent du reste.
          </p>
          <div className="saas-site__actions">
            <button type="button">Démarrer</button>
            <button type="button">Voir les tarifs</button>
          </div>
        </div>
        <div className="saas-site__product" aria-label="Interface FlowPilot">
          <div>
            <span>Demandes traitées</span>
            <strong>2 418</strong>
          </div>
          <div>
            <span>Temps gagné</span>
            <strong>18h</strong>
          </div>
          <div className="saas-site__bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="saas-site__features">
        <article>
          <h4>Formulaires intelligents</h4>
          <p>Capture les demandes dans un format propre.</p>
        </article>
        <article>
          <h4>Relances automatiques</h4>
          <p>Garde le fil avec chaque prospect.</p>
        </article>
        <article>
          <h4>Dashboard clair</h4>
          <p>Mesure les demandes, statuts et priorités.</p>
        </article>
      </section>

      <section className="saas-site__pricing">
        <article>
          <strong>Starter</strong>
          <span>29 €/mois</span>
        </article>
        <article>
          <strong>Pro</strong>
          <span>79 €/mois</span>
        </article>
      </section>
    </div>
  );
}

function ProjectExamples({ projectId }) {
  if (projectId === 'demo-dashboard') {
    return <DashboardExample />;
  }

  if (projectId === 'demo-rendez-vous') {
    return <BookingExample />;
  }

  if (projectId === 'demo-saas') {
    return <SaasExample />;
  }

  return <ArtisanExample />;
}

export default ProjectExamples;
