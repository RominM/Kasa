import React from 'react';
// import { link } from 'react-router-dom';
import './../style/layout/main.scss';
import './../style/utils/mediaQ.scss';
const data = require('../data/data.json');

const Main = () => {
   return (
      <main className='home-main'>
         <div className='gallery'>
            <ul className="home-main-ul">
               {data.map(DATA => (
                  <li className='card' key={DATA.id}>
                     <a href={'logement/' + DATA.id}>
                        <img src={DATA.cover} alt={'logement ' + DATA.title} />
                        <span>{DATA.title}</span>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </main>
   ) 
}

export default Main