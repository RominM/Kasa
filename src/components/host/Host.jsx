/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './host.scss';

export default function hosting({ setData }) {
  return (
    <section>
      <div className="hosting">
        <div className="hosting-left">
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
        <div className="hosting-right">
          <div className="host">
            <span className="host-name">{setData.host.name}</span>
            <div className="host-pic">
              <img
                src={setData.host.picture}
                alt="avatar hote"
                className="img"
              />
            </div>
          </div>
          <div className="rating">{setData.rating}</div>
        </div>
      </div>
    </section>
  );
}
