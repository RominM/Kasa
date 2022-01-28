import React from 'react';
import './carousel.scss';

const Carousel = ({ setData }) => {
  return (
    <div className="carousel">
      <img src={setData.pictures[0]} alt="photos logement" />
    </div>
  );
};

export default Carousel;
