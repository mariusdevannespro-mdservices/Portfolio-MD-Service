import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <strong>MD Service</strong>
          <p>Développement web, sites vitrines et outils sur mesure.</p>
        </div>
        <p className="footer__copyright">© {currentYear} MD Service. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
