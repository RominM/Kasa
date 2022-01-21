// import { Route } from 'react-router-dom';

const HeadNav = () => {
  return (
    <nav className="home-nav">
      <ul className="home-header-ul">
        <li className="home-header-li">
          <a href="/" className="home-header-a">
            Accueil
          </a>
        </li>
        <li className="home-header-li">
          <a href="/apropos" className="home-header-a">
            A Propos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeadNav;
