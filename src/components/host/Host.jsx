import React from 'react';
import './host.scss';


export default function hosting({ accomodation }) {
  // const tags = data.tags;

  return (
    <section>
      <div className="hosting">
        <div className="hosting-left">
          <h3>{accomodation.title}</h3>
          <span className="location">data.location</span>
          <ul className="tags">
            <li className='tag'>data.tag</li>
            <li className='tag'>data.tag</li>
            <li className='tag'>data.tag</li>
            {/* {tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))} */}
          </ul>
        </div>
        <div className="hosting-right">
          <div className="host">
            <span className="host-name">data.host.name</span>
            <div className='host-pic'>
              <img src="" /* host.picture*/ alt="" />
            </div>
          </div>
          <div className="rating">data.rating</div>
        </div>
      </div>
    </section>
  );
}
