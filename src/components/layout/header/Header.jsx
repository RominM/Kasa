import { NavLink, Link } from 'react-router-dom';
import LogoKasa from './../../../assets/images/logo_kasa.jpg';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>
          <img className="kasa-logo" src={LogoKasa} alt="kasa" />
        </h1>
      </Link>{' '}
      <nav className="head-nav">
        <ul className="head-nav-ul">
          <li className="head-nav-li">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Accueil
            </NavLink>
          </li>
          <li className="head-nav-li">
            <NavLink
              to="/apropos"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
