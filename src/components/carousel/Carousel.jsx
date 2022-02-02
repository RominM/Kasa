import React from 'react';
import './carousel.scss';
import Next from './../../assets/images/next.svg';
import Previous from './../../assets/images/previous.svg';

const Carousel = ({ setData }) => {
  return (
    <>
      <div className="carousel">
        <img src={setData.pictures[0]} alt="photos logement" />
      </div>
      <div className="arrows">
        <div>
          <img src={Next} alt="next" />
        </div>
        <div>
          <img src={Previous} alt="previous" />
        </div>
      </div>
    </>
  );
};

export default Carousel;
