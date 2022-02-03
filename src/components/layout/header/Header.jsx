import { NavLink, Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const underline = () => {
    console.log('must be change underline')
  }

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
            <NavLink to="/" className="head-nav-link" onClick={underline}>
              Accueil
            </NavLink>
            
            {/* <NavLink
            to="tasks"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Tasks
          </NavLink> */}


          </li>
          <li className="head-nav-li">
            <NavLink to="/apropos" className="head-nav-link" onClick={underline}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
