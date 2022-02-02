/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './host.scss';
import pinkStar from './../../assets/images/pink_star.svg';
import greyStar from './../../assets/images/grey_star.svg';

export default function hosting({ setData }) {
  const scale = [1, 2, 3, 4, 5];
  const rating = setData.rating;

  return (
    <section>
      <div className="hosting">
        <div>
          <h3>{setData.title}</h3>
          <span className="location">{setData.location}</span>
          <ul className="tags">
            {setData.tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="host">
            <span className="host-name">{setData.host.name}</span>
            <div className="host-pic">
              <img src={setData.host.picture} alt="avatar hote" />
            </div>
          </div>
          <div className="rating">
            {scale.map((level) =>
              rating >= level ? (
                <span>
                  <img src={pinkStar} alt="etoile rose" />
                </span>
              ) : (
                <span>
                  <img src={greyStar} alt="etoile grise" />
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
