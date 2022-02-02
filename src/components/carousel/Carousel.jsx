import React from 'react';
import './carousel.scss';

const Carousel = ({ setData }) => {
  return (
    <>
      <div className="carousel">
        <img src={setData.pictures[0]} alt="photos logement" />
      </div>
      <div className="arrows">
        <div>
          <img src={require('./../../assets/images/next.svg')} alt="next" />
        </div>
        <div>
          <img
            src={require('./../../assets/images/previous.svg')}
            alt="previous"
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
