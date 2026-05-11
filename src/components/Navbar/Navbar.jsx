import { useEffect, useState } from 'react';
import './Navbar.css';

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);

    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Navigation principale">
        <a className="navbar__brand" href="#accueil" onClick={closeMenu}>
          <span className="navbar__mark">MD</span>
          <span>MD Service</span>
        </a>

        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          type="button"
          aria-label="Ouvrir ou fermer le menu"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}
          id="main-menu"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
