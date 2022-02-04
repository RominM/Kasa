import React from 'react';
import { Link } from 'react-router-dom';
import './main.scss';
import accomodations from '../../data/data.json';

/**
 * @param { Integer } id
 * @param { String[] } cover
 * @param { String } title
 * @returns { Object{accomodations}}
 */

const Gallery = () => {
  return (
    <main className="home-main">
      <div className="gallery">
        <ul className="home-main-ul">
          {accomodations.map((accomodation) => (
            <Link to={'logement/' + accomodation.id} key={accomodation.id}>
              <li className="card">
                <img
                  src={accomodation.cover}
                  alt={'logement ' + accomodation.title}
                />
                <span>{accomodation.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Gallery;
