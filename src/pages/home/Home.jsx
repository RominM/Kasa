import React from 'react';
import { Link } from 'react-router-dom';

import './main.scss';
import './mediaQ-main.scss';
import './banner.scss';

const data = require('./../../data/data.json');

const Home = () => {
  return (
    <>
      <div className="banner">
        <img src={require('./../../assets/background.png')} alt="bannière" />
        <span className="gimmick">Chez Vous, partout et ailleurs</span>
      </div>
      <main className="home-main">
        <div className="gallery">
          <ul className="home-main-ul">
            {data.map((DATA) => (
              <Link to={'logement/' + DATA.id}>
                <li className="card" key={DATA.id}>
                  <img src={DATA.cover} alt={'logement ' + DATA.title} />
                  <span>{DATA.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
