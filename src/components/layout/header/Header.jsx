import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import './header.scss';
import LogoKasa from './../../../assets/images/logo_kasa.jpg';

const Header = () => {
  const [isActive, activeClassName] = useState();

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
