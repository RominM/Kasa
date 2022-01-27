import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>
          <img
            className="kasa-logo"
            src={require('./../../../assets/images/logo_kasa.jpg')}
            alt="kasa"
          />
        </h1>
      </Link>{' '}
      <nav className="head-nav">
        <ul className="head-nav-ul">
          <li className="head-nav-li">
            <Link to="/" className="head-nav-link">
              Accueil
            </Link>
          </li>
          <li className="head-nav-li">
            <Link to="/apropos" className="head-nav-link">
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
