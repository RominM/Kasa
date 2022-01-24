import React from 'react';
const data = require('../../data/data.json');

export default function Tags() {
  const tags = data.tags;
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li className="tag" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
