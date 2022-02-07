/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './host.scss';
import pinkStar from './../../assets/images/pink_star.svg';
import greyStar from './../../assets/images/grey_star.svg';

/**
 * @function Host
 * @extends Componant
 * @param { String } props title: accomodation title
 * @param { String } props location: accomodation location
 * @param { String[] } props tags: accomodation tags
 * @param { String } props name: accomodation name
 * @param { String } props picture: host picture
 * @returns { JSX Object{host} }
 */

const Host = ({ currentAccomodation }) => {
  // max rating scale as until 5
  const scale = [1, 2, 3, 4, 5];
  const rating = currentAccomodation.rating;

  return (
    <section>
      <div className="hosting">
        <div>
          <h3>{currentAccomodation.title}</h3>
          <span className="location">{currentAccomodation.location}</span>
          <ul className="tags">
            {currentAccomodation.tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="host">
            <span className="host-name">{currentAccomodation.host.name}</span>
            <div className="host-pic">
              <img src={currentAccomodation.host.picture} alt="avatar hote" />
            </div>
          </div>
          <div className="rating">
            {scale.map((level, index) =>
              rating >= level ? (
                <span key={index}>
                  <img src={pinkStar} alt="etoile rose" />
                </span>
              ) : (
                <span key={index}>
                  <img src={greyStar} alt="etoile grise" />
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Host;
