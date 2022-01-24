import React from 'react';
const data = require('../../data/data.json');

export default function Hosting() {
  return (
    <div className="hosting">
      <div className="hosting-left">
        <h3>{data.title}</h3>
        <span className="location">{data.location}</span>
        <ul className="tags">
          {data.map((DATA) => (
            <li className="tag">{DATA.tags}</li>
          ))}
        </ul>
      </div>
      <div className="hosting-right">
        <div className="host">
          <span className="host-name">Alexendre Dumas</span>
          <img src="" alt="" />
        </div>
        <div className="stars">{/* stars */}</div>
      </div>
    </div>
  );
}
