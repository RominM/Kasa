import React from 'react';
import { Link } from 'react-router-dom';
import './main.scss';
import './mediaQ-main.scss';

const data = require('../../data/data.json');

const Gallery = () => {
  return (
    <main className="home-main">
      <div className="gallery">
        <ul className="home-main-ul">
          {data.map((DATA) => (
            <Link to={'logement/' + DATA.id}  key={DATA.id}>
              <li className="card">
                <img src={DATA.cover} alt={'logement ' + DATA.title} />
                <span>{DATA.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Gallery;
