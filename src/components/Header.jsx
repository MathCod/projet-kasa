import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'; // On importe le logo ici

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        {/* On utilise la variable logo qu'on vient d'importer */}
        <img src={logo} alt="Kasa Logo" className="header__logo" />
      </NavLink>
      <nav className="header__nav">
        {/* NavLink ajoute automatiquement la classe "active" quand on est sur la page */}
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'header__nav-link active' : 'header__nav-link')}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? 'header__nav-link active' : 'header__nav-link')}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;