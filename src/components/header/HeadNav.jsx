// import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HeadNav = () => {
  return (
    <nav className="head-nav">
      <ul className="head-nav-ul">
        <li className="head-nav-li">
          <Link to="/" className="head-nav-link">
            Accueil
          </Link>
        </li>
        <li className="home-header-li">
          <Link to="/apropos" className="head-nav-link">
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeadNav;
