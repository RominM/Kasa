/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './host.scss';


export default function hosting({ accomodation }) {

  return (
    <section>
      <div className="hosting">
        <div className="hosting-left">
          <h3>{accomodation.title}</h3>
          <span className="location">{accomodation.location}</span>
          <ul className="tags">
            {/* <li className='tag'>data.tag</li>
            <li className='tag'>data.tag</li>
            <li className='tag'>data.tag</li> */}
            {accomodation.tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="hosting-right">
          <div className="host">
            <span className="host-name">{accomodation.host.name}</span>
            <div className='host-pic'>
              <img src={accomodation.host.picture} alt="photo propriétaire" />
            </div>
          </div>
          <div className="rating">{accomodation.rating}</div>
        </div>
      </div>
    </section>
  );
}
