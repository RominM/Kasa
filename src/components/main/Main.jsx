import React from 'react';
import './main.scss';
import './mediaQ-main.scss';
import Card from './Card';

const Main = () => {
  return (
    <main className="home-main">
      <div className="gallery">
        <ul className="home-main-ul">
          <Card />
        </ul>
      </div>
    </main>
  );
};

export default Main;
