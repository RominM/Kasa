import React from 'react';
import './host.scss';

const data = require('../../data/data.json');

export default function hosting() {
  const tags = data.tags;

  return (
    <section>
      <div className="hosting">
        <div className="hosting-left">
          <h3>{data.title}</h3>
          <span className="location">{data.location}</span>
          <ul className="tags">
            {/* {tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))} */}
          </ul>
        </div>
        <div className="hosting-right">
          <div className="host">
            <span className="host-name">{/*host.name*/}</span>
            <img src="" /* host.picture*/ alt="" />
          </div>
          <div className="rating">{/* rating */}</div>
        </div>
      </div>
    </section>
  );
}
