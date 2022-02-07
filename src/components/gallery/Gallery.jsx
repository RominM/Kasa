import React from 'react';
import { Link } from 'react-router-dom';
import './main.scss';
import accomodations from '../../data/data.json';

/**
 * @function Gallery
 * @extends Component
 * @param { Integer } props id: used for route
 * @param { String[] } props cover: pic in the card
 * @param { String } props title: title of card
 * @returns { JSX}
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
